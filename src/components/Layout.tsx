import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Suspense } from "react";
import Loading from "./Loading";

export default function Layout() {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}