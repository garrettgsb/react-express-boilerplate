## Getting Started with db

1. Copy env variables: `cp .env.example .env`
2. SQL commands to create the necessary objects in the DB
    CREATE ROLE quill WITH LOGIN password 'quill';
    CREATE DATABASE quillshare OWNER quill;
3. npm run db:migrate
4. npm run db:seed