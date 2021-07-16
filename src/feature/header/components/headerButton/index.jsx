import React from 'react';
import styles from './HeaderButton.module.scss';


function HeaderButton({title="",active="",onClick = null}) {
    return (
        <button onClick={onClick} className={`${styles.btn} ${active}`}>{title}</button>
    );
}

export default HeaderButton;