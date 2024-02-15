import { Hono } from 'hono';
import { ParseRSSFeed } from './lib/rss-parser';
import { createEmbedding, similarEmbeddingIds } from './lib/embeddings';
import { setupDb } from './lib/setup';
import { getFeeds, addFeed, deleteFeed, updateFeed } from './lib/feed-processor';
import { Bindings } from '../worker-configuration';

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.text('Hello World!');
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
    const result = await addFeed(c.env, body.url)
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

/*app.get('/embeddings/create', async (c) => {
  try {
    const embedding = await createEmbedding(c.env, 4, 'I have a quiz');
    return c.json(embedding);
  } catch (error) {
    return c.text(error.message);
  }
})

app.get('/embeddings/get', async (c) => {
  try {
    const result = await similarEmbeddingIds(c.env, 'Here lays a test');
    return c.json(result);
  } catch (error) {
    return c.text(error.message);
  }
})

app.get('/rss', async (c) => {
  //const url = 'https://crtv.dev/feed'; // ghost site
  const url = 'https://ryanhayes.net/feed/'; // wordpress site
  if (!url) {
    return c.text('Please provide a url');
  }

  try {
    const feed = await ParseRSSFeed(url);
    console.log(feed);
    return c.json(feed);
  } catch (error) {
    return c.text(error.message);
  }
})*/

export default app
