export const mfConfig = {
  name: "workorder_app",
  exposes: {},
  remotes: {
    home_app: "home_app@https://storage.cloud.google.com/home-app/mf-manifest.json",
  },
  shared: ["react", "react-dom"],
};
