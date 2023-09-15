interface ExpressConfig {
  port: string;
}

const expressConfigs: ExpressConfig = {
  port: process.env.PORT || "8085",
};

export default expressConfigs;
