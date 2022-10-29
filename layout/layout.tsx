import React, { ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import {  changeToDark, themeValue } from "../store/themeSlice";
import styles from "./style/layout.module.scss";
import { useRouter } from "next/router";
import { ThemeToggle } from "../components/themeToggle/ThemeToggle";

interface LayoutProps {
  children: ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children, ...props }) => {
  const theme = useAppSelector(themeValue);
  const dispatch = useAppDispatch();

  const router = useRouter();
  useEffect(() => {
    const now = new Date();
    if (now.getHours() > 16) {
      dispatch(changeToDark());
    }
  }, []);

  return (
    <div className={styles[theme]}>
      <Head>
        <title>Overreacted - A blog by Dan Abramov</title>
        <meta name="description" content="A blog by Dan Abramov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles["header"]}>
        <h1
          className={
            router.pathname === "/"
              ? styles["main_header"]
              : styles["post_header"]
          }
        >
          OverReacted
        </h1>
        <ThemeToggle />
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
