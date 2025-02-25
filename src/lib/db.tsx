/*
import { Client } from 'pg';

interface DatabaseConfig {
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
}

const clientConfig: DatabaseConfig = {
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    port: Number(process.env.DB_PORT) || 5433,
};

const client = new Client(clientConfig);

client
    .connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch((err: Error) => console.error('Connection error', err.stack));

const queryDb = async (query: string, params?: any[]) => {
    try {
        const res = await client.query(query, params);
        return res.rows;
    } catch (err) {
        console.error('Database query error:', err);
        throw err;
    }
};
export default queryDb;
*/