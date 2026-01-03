import ReactDOM from "react-dom/client";
import Header from "home_app/Header";
import Footer from "home_app/Footer";

import "./index.css";

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Header appName="Work Order App" />
    <main className="flex-grow">
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: workorder-app</div>
        <div>Framework: react-19</div>
      </div>
    </main>
    <Footer appName="Work Order App" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);