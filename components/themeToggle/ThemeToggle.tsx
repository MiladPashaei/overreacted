import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { changeTheme, changeToDark, themeValue } from "../../store/themeSlice";
import styles from "./styles/theme-toggle.module.scss";
import Toggle from "react-toggle";
import Image from "next/image";
import "react-toggle/style.css";
export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeValue);
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#282c35";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [theme]);

  useEffect(() => {
    const now = new Date();
    if (now.getHours() > 16) {
      dispatch(changeToDark());
    }
  }, []);
  return (
    <Toggle
      onChange={() => {
        dispatch(changeTheme());
      }}
      defaultChecked={theme === "dark"}
      className={styles["toggle"]}
      icons={{
        unchecked: (
          <Image
            style={{ position: "absolute", top: "-67%" }}
            height={20}
            width={20}
            alt="sun"
            src="/icons8-sun.svg"
          />
        ),
        checked: (
          <Image
            style={{ position: "absolute", top: "-67%" }}
            height={20}
            width={20}
            alt="moon"
            src="/icons8-moon-symbol-30.svg"
          />
        ),
      }}
    />
  );
};
