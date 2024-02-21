import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jest",
  setupFilesAfterEnv: [require.resolve("./src/setup-tests.ts")],
};

export default config;
