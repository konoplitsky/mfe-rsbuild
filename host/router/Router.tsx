import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../src/App.tsx";

const Provider = lazy(() => import("remote"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/remote",
    element: (
      <Suspense fallback={<div>Loading docs...</div>}>
        <Provider />
      </Suspense>
    ),
  },
]);

export default router;
