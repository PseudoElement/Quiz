import React from "react";
import styles from "./style.module.css";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/typesHook";
import { changeTheme } from "../../store/reducers/themeReducer";

interface ILayout {
     children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: ILayout) => {
     const dispatch = useAppDispatch();
     const theme = useAppSelector((state) => state.themeReducer.theme);

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
