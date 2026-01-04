export const mfConfig = {
  name: "workorder_app",
  exposes: {},
  remotes: {
    home_app: "home_app@https://storage.cloud.google.com/home-app/cors.json",
  },
  shared: ["react", "react-dom"],
};
