interface NodeConfig {
  port: string;
}

const nodeConfigs: NodeConfig = {
  port: process.env.PORT || "8085",
};

export default nodeConfigs;
