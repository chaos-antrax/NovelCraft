import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//custom functions
import { DarkModeProvider } from "./components/common/darkmode/DarkMode";

//components
import NotFound from "./components/NotFound.jsx";
import Editor from "./components/Editor.jsx";
import Home from "./components/Home.jsx";
import Auth from "./components/Auth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/editor",
    element: <Editor />,
    errorElement: <NotFound />,
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <RouterProvider router={router}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RouterProvider>
  </DarkModeProvider>
);
