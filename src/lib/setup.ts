import { Bindings } from '../../worker-configuration';

export async function setupDb(env: Bindings, overwrite: boolean = false) {
    // existing code for creating item and item_vector_linking tables...

    // create site table
    try {
        if (overwrite) {
            await env.DB.prepare(`DROP TABLE IF EXISTS site`).run();
        }
        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS site (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            owner_id INTEGER, 
            rss_id STRING NOT NULL, 
            rss_url STRING NOT NULL,
            title STRING NOT NULL, 
            link STRING NOT NULL, 
            description STRING NOT NULL, 
            hash STRING NOT NULL, 
            checked_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`).run();
    } catch (error) {
        throw new Error('Failed to create site table: ' + error.message);
    }

    // create site_meta table
    try {
        if (overwrite) {
            await env.DB.prepare(`DROP TABLE IF EXISTS site_meta`).run();
        }
        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS site_meta (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            site_id INTEGER NOT NULL, 
            key STRING NOT NULL, 
            value STRING NOT NULL,
            FOREIGN KEY (site_id) REFERENCES site(id)
        )`).run();
    } catch (error) {
        throw new Error('Failed to create site_meta table: ' + error.message);
    }

    // create site_image table
    try {
        if (overwrite) {
            await env.DB.prepare(`DROP TABLE IF EXISTS site_image`).run();
        }
        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS site_image (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            site_id INTEGER, 
            url STRING, 
            title STRING, 
            link STRING, 
            width INTEGER, 
            height INTEGER,
            FOREIGN KEY (site_id) REFERENCES site(id)
        )`).run();
    } catch (error) {
        throw new Error('Failed to create site_image table: ' + error.message);
    }

    // create item table
    try {
        // drop table if overwrite is true
        if (overwrite) {
            await env.DB.prepare(`DROP TABLE IF EXISTS item`).run();
        }

        // create item table
        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS item (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            site_id INTEGER NOT NULL,
            owner_id INTEGER, 
            rss_id STRING NOT NULL, 
            title STRING NOT NULL, 
            description STRING NOT NULL, 
            link STRING NOT NULL, 
            hash STRING NOT NULL, 
            checked_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`).run();
    } catch (error) {
        throw new Error('Failed to create table: ' + error.message);
    }

    // create item_meta table
    try {
        if (overwrite) {
            await env.DB.prepare(`DROP TABLE IF EXISTS item_meta`).run();
        }
        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS item_meta (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            item_id INTEGER NOT NULL, 
            key STRING NOT NULL, 
            value STRING NOT NULL,
            FOREIGN KEY (item_id) REFERENCES item(id)
        )`).run();
    } catch (error) {
        throw new Error('Failed to create item_meta table: ' + error.message);
    }

    // create item_category table
    try {
        if (overwrite) {
            await env.DB.prepare(`DROP TABLE IF EXISTS item_category`).run();
        }
        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS item_category (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            item_id INTEGER NOT NULL, 
            domain STRING, 
            value STRING,
            FOREIGN KEY (item_id) REFERENCES item(id)
        )`).run();
    } catch (error) {
        throw new Error('Failed to create item_category table: ' + error.message);
    }

    // Modify item_vector_linking table to include vector_id
    try {
        if (overwrite) {
            await env.DB.prepare(`DROP TABLE IF EXISTS item_vector_linking`).run();
        }
        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS item_vector_linking (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            item_id INTEGER NOT NULL, 
            vector_id STRING NOT NULL, 
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (item_id) REFERENCES item(id)
        )`).run();
    } catch (error) {
        throw new Error('Failed to modify item_vector_linking table: ' + error.message);
    }
}