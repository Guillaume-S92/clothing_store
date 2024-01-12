const devConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3001",
};

const prodConfig = {
  baseURL: "http://localhost:3000", //your production url
};

export const config = devConfig;
