import React from "react";
import styles from "./style.module.css";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/typesHook";
import { changeTheme, setTheme } from "../../store/reducers/themeReducer";
import { useCookies } from "react-cookie";

interface ILayout {
     children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: ILayout) => {
     const dispatch = useAppDispatch();
     const theme = useAppSelector((state) => state.themeReducer.theme);
     const [cookies, setCookie] = useCookies(["theme"]);

     React.useEffect(() => {
          cookies.theme && dispatch(setTheme(cookies.theme));
     }, []);

     React.useEffect(() => {
          setCookie("theme", theme, { expires: new Date(Date.now() + 6.048e8) });
     }, [theme]);

     const onClick = () => {
          dispatch(changeTheme());
     };
     return (
          <div className={`${styles.layout} ${styles[theme]}`}>
               <button onClick={onClick} className={styles.changeTheme}>
                    Change theme
               </button>
               {children}
          </div>
     );
};

export default Layout;
