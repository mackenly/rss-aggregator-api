# RSS Aggregator API
[![Run Tests](https://github.com/mackenly/rss-aggregator-api/actions/workflows/tests.yml/badge.svg)](https://github.com/mackenly/rss-aggregator-api/actions/workflows/tests.yml)

RSS Aggregator API with AI-powered search and ranked feed

Suggestion from Jake:
Explore [pgvector](https://github.com/pgvector/pgvector) and SQLite options for vector database.

## Goals
- REST JSON API that aggregates RSS feeds from multiple sources defined via environment variables
- Hosted on Cloudflare Workers optimized for scale to zero costs with scalability
- Learning opportunity to use embeddings and vectorization for search and ranking
- Project for 12in24 TriDev initiative
- Make ranking algorithm weights customizable and configurable via environment variables
- Include GitHub Actions for CI/CD

### Process
- CRON to get newly updated RSS feeds and update ranked feed
- Hash items to prevent duplicates, update existing items if changed
- Store sources in D1 table (id pk, title, description, link, image, generator, last updated, TTL)
- Store items in D1 table (id pk, title, description, link, creator, date, hash, source id fk)
- Create embeddings for each item's title + description and store it in Vectorize

### Endpoints
- Paginated feed with search and filter capabilities, plus custom iteration
- Dedicated search endpoint that returns items ranked by similarity to query
- Ranked feed prioritizing new items and items from a variety of sources (updated using CRON)
- Random item(s) from ranked feed

## Contributing
Please create issues or pull requests on [mackenly/rss-aggregator-api](https://github.com/mackenly/rss-aggregator-api).

## License
GNU Affero General Public License v3.0