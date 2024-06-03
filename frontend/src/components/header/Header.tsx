import styles from './Header.module.css';
import {JSX} from "react";
import {HeaderProps} from "./Header.props.ts";
import cn from "classnames";

export function Header({children, className, ...props}: HeaderProps): JSX.Element {
    return (
        <div
            className={cn(styles.header, className)}
            {...props}
        >
            {children}
        </div>
    );
}