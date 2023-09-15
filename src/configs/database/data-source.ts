import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "bookuser",
  password: "bookpass",
  database: "book_share",
  // true to autocreate the database at the start. Better to run schema:sync instead of leaving this to true just in case >_<
  synchronize: false,
  logging: true,
  entities: ["./entities/*.ts"],
  migrations: ["./migrations/*.ts"],
  // Log the query after 3000 milliseconds
  maxQueryExecutionTime: 3000,
  // maximum number of active connections in the pool (this should be fine tuned later in prod)
  poolSize: 50,
  // in case the pool throws an error.
  // TODO Not sure if we need this here, maybe better to leave it and test with high load
  poolErrorHandler(err) {
    console.log("err=================================");
    console.log(err);
    console.log("=================================");
  },
});
