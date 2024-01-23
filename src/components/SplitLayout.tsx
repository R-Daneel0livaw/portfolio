import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./Loading";

export default function SplitLayout() {
  return (
    <>
      <p>Split Layout</p>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}