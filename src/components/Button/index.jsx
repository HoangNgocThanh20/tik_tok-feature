import React from 'react';
import styles from './Button.module.scss'
function Button({title = "",type=""}) {
    return (
        <button className={`${styles.buttonWapper} ${type}`}>
            {title}
        </button>
    );
}

export default Button;