import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { DataSource } from "typeorm";
import dbConfigs from "./configs/database.js";

const fileName = fileURLToPath(import.meta.url);
const currentDirectoryName = dirname(fileName);

const AppDataSource = new DataSource({
  type: "postgres",
  host: dbConfigs.host,
  port: dbConfigs.port,
  username: dbConfigs.user,
  password: dbConfigs.password,
  database: dbConfigs.dbName,
  // true to autocreate the database at the start. Better to run schema:sync instead of leaving this to true just in case >_<
  synchronize: true,
  logging: true,
  entities: [path.join(currentDirectoryName, "entities", "*.ts")],
  migrations: ["../../migrations/*.ts"],
  // Log the query after XXX milliseconds
  maxQueryExecutionTime: dbConfigs.maxExecutionTime,
  // maximum number of active connections in the pool (this should be fine tuned later in prod)
  poolSize: dbConfigs.poolSize,
  // in case the pool throws an error.
  // TODO Not sure if we need this here, maybe better to leave it and test with high load
  poolErrorHandler(err) {
    console.log("err=================================");
    console.log(err);
    console.log("=================================");
  },
});

export default AppDataSource;
