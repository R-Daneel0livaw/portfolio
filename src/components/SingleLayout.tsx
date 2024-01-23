import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./Loading";

export default function SingleLayout() {
  return (
    <>
      <p>Single Layout</p>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}