# PostgreSQL + Express Bare-Bones

> Step 1: git clone

> Step 2: make sure have your PostgreSQL run on localhost

> Step 3: set .env: DB_CONNECTION

> Step 4: INSERT data

> Step 5: yarn install & yarn dev

> Step 6: open http://localhost:3000/

## Table Schema

> users

| user_id | username    |
| ------- | ----------- |
| INT     | VARCHAR(25) |

> boards

| board_id | board_name  |
| -------- | ----------- |
| INT      | VARCHAR(50) |

> comments

| comment_id | comments | user_id    | board_id   |
| ---------- | -------- | ---------- | ---------- |
| INT        | TEXT     | REFERENCES | REFERENCES |
