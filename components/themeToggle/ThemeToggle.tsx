import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { changeTheme, themeValue } from "../../store/themeSlice";
import styles from "./styles/theme-toggle.module.scss";
import Toggle from "react-toggle";
import Image from "next/image";
import "react-toggle/style.css"
export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeValue);

  return (
      <Toggle
      onChange={()=>{dispatch(changeTheme())}}
      defaultChecked={theme === "dark"}
      className={styles["toggle"]}
        icons={{
          unchecked:<Image style={{position:"absolute", top:'-67%'}}  height={20} width={20} alt="sun" src="/icons8-sun.svg"/>,
          checked:<Image style={{position:"absolute", top:'-67%'}}  height={20} width={20}  alt="moon" src="/icons8-moon-symbol-30.svg"/>,
        }}
      />
  );
};