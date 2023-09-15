interface DatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  dbName: string;
  poolSize: number;
  maxExecutionTime: number;
}

const dbConfigs: DatabaseConfig = {
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASS || "password",
  dbName: process.env.DB_NAME || "books",
  poolSize: Number(process.env.DB_POOL_SIZE) || 50,
  maxExecutionTime: Number(process.env.DB_MAX_EXECUTION_TIME) || 3000,
};

export default dbConfigs;
