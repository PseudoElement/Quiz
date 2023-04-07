import React from "react";
import styles from "./style.module.css";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/typesHook";
import { changeTheme, setTheme } from "../../store/reducers/themeReducer";
import { getCookie, setCookie } from "../../shared/utils/cookies";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Themes } from "../../shared/enums/theme";

interface ILayout {
     children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: ILayout) => {
     const dispatch = useAppDispatch();
     const theme = useAppSelector((state) => state.themeReducer.theme);

     React.useEffect(() => {
          getCookie("theme") && dispatch(setTheme(getCookie("theme")));
     }, []);

     React.useEffect(() => {
          setCookie("theme", theme);
     }, [theme]);

     const onClick = () => {
          dispatch(changeTheme());
     };
     return (
          <div className={`${styles.layout} ${styles[theme]}`}>
               <button onClick={onClick} className={styles.changeTheme}>
                    {theme === Themes.DARK ? <LightModeIcon fill="white" /> : <DarkModeIcon />}
               </button>
               {children}
          </div>
     );
};

export default Layout;
