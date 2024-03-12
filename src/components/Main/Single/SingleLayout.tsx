import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../Loading";
import styles from "./SingleLayout.module.css";

export default function SingleLayout() {
  return (
    <>
      <main className={styles.layoutContainer}>
        <p>Single Layout</p>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
