import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Suspense, useEffect, useState } from "react";
import Loading from "./Loading";
import styles from "./MainLayout.module.css";
import PathConstants from "../../routes/pathConstants";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState(PathConstants.HOME);

  const location = useLocation();
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <>
      <div className={styles.gridContainer}>
        <Navigation currentPage={currentPage} />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <SocialMedia />
      </div>
    </>
  );
}