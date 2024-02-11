import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout/RootLayout";
import { Home } from "./pages/home/Home";
import { Loader } from "./components/Loader/Loader";
import { Toast } from "./components/Toast/Toast";
import { Feed } from "./pages/Feed/Feed";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { RequireBack } from "./components/RequireBack/RequireBack";
import { useEffect } from "react";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      // loader: <p>loading...</p>,
      // errorElement: <p>error</p>,
      children: [
        {
          element: <RequireBack />,
          children: [{ index: true, element: <Home /> }],
        },
        {
          element: <RequireAuth />,
          children: [{ path: "feed", element: <Feed /> }],
        },
      ],
    },
  ],
  { basename: "/Fakebook" }
);

export const App = () => {
  // useEffect(() => {
  //   alert("This Project Is Under Development");
  // }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Loader />
      <Toast />
    </>
  );
};
