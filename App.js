import ReactDOM from "react-dom/client";
import { Body } from "./src/components/Body.js";

const App = () => (
  <div className="app">
    <Body></Body>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
