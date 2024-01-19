import { Hono } from 'hono';
import { ParseRSSFeed } from './lib/rss-parser';
import { createEmbedding, similarEmbeddingIds } from './lib/embeddings';
import { Bindings } from '../worker-configuration';

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.text('Hello World!');
})

app.get('/embeddings/create', async (c) => {
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
})

export default app
