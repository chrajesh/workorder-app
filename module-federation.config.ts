export const mfConfig = {
  name: "workorder_app",
  exposes: {},
  remotes: {
    home_app: "home_app@https://storage.googleapis.com/home-app-v2/mf-manifest.json",
  },
  shared: ["react", "react-dom"],
};
