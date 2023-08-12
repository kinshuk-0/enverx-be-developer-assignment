import { createConnection } from 'mysql2/promise';

export const db = createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'root@123',
    database: 'blog_app_enverx'
});