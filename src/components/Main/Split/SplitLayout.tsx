import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../Loading";
import styles from "./SplitLayout.module.css";

export default function SplitLayout() {
  return (
    <>
      <main className={styles.layoutContainer}>
        {/* <p>Split Layout</p> */}
        <img className={styles.self} src="src/img/face-bg.png"></img>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
