import { Hono } from 'hono';
import { ParseRSSFeed } from './lib/rss-parser';
import { setupDb } from './lib/setup';
import { getFeeds, addFeed, deleteFeed, updateFeed, fetchFeedData } from './lib/feed-processor';
import { Bindings } from '../worker-configuration';
import { getHash } from './lib/item-processor';

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.json({ message: 'Hello World!' });
})

app.get('/setup', async (c) => {
  try {
    await setupDb(c.env, true)
    return c.json({ message: 'Setup complete' })
  } catch (error) {
    return c.json(error.message)
  }
})

app.get('/sites', async (c) => {
  try {
    return c.json(await getFeeds(c.env))
  } catch (error) {
    return c.json(error.message)
  }
})

app.post('/sites', async (c) => {
  try {
    const body: any = await c.req.json()
    if (!body.url) {
      return c.json('Please provide a url')
    }
    const url = new URL(body.url)
    const feedData = await fetchFeedData(c.env, body.url, false)
    const result = await addFeed(c.env, feedData, url)
    return c.json(result)
  } catch (error) {
    return c.json(error.message)
  }
})

app.put('/sites', async (c) => {
  try {
    const body: any = await c.req.json()
    if (!body.id) {
      return c.json('Please provide a id')
    }
    const result = await updateFeed(c.env, body.id)
    return c.json(result)
  } catch (error) {
    return c.json(error.message)
  }
})

app.delete('/sites', async (c) => {
  try {
    const body: any = await c.req.json()
    if (!body.id) {
      return c.json('Please provide a id')
    }
    const result = await deleteFeed(c.env, body.id)
    return c.json(result)
  } catch (error) {
    return c.json(error.message)
  }
})

app.get('/items', async (c) => {
  try {
    const { results } = await c.env.DB.prepare('SELECT * FROM item').all()
    return c.json(results)
  } catch (error) {
    return c.json(error.message)
  }
})

app.get('/rss', async (c) => {
  //const url = new URL('https://crtv.dev/feed'); // ghost site
  const url = new URL('https://ryanhayes.net/feed/'); // wordpress site
  if (!url) {
    return c.text('Please provide a url');
  }

  try {
    const feed = await ParseRSSFeed(url);
    console.log(feed);
    console.log(await getHash(feed.items[0]))
    return c.json(feed);
  } catch (error) {
    return c.text(error.message);
  }
})

export default app
