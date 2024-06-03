import styles from './Container.module.css';
import {JSX} from "react";
import {ContainerProps} from "./Container.props.ts";
import cn from "classnames";

export function Container({children, className, ...props}: ContainerProps): JSX.Element {
    return (
        <div
            className={cn(styles.container, className)}
            {...props}
        >
            {children}
        </div>
    );
}