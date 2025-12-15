import pgPromise from "pg-promise";

const pgp = pgPromise()

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const db = pgp(process.env.DATABASE_URL);

export default db