import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Suspense } from "react";
import Loading from "../Loading";
import styles from "./MainLayout.module.css";

export default function Layout() {
  return (
    <>
      <div className={styles.gridContainer}>
        <Navigation />
        <main className={styles.layoutContainer}>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
}
