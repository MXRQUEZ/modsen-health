import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app";
import { setupStore } from "./store";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
