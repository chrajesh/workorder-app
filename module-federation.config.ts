export const mfConfig = {
  name: "workorder_app",
  exposes: {},
  remotes: {
    home_app: "home_app@https://home-app-488099994870.us-south1.run.app/mf-manifest.json",
  },
  shared: ["react", "react-dom"],
};
