import { Hono } from 'hono';
import { ParseRSSFeed } from './lib/rss-parser';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/rss', async (c) => {
  const url = 'https://crtv.dev/feed';
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
})

export default app
