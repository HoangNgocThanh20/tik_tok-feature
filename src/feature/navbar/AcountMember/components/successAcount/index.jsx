import React from 'react';
import styles from './SuccessAcount.module.scss'


function SuccessAcount({AcountInfors=null}) {
    return (
        <div className={styles.acountWapper}>
            <div className={styles.avatar}>
                <img src={AcountInfors.img} alt="ảnh" />
            </div>
            <div className={styles.infors}>
                <h3 className={styles.nameAcount}>{AcountInfors.nickname}</h3>
                <p className={styles.titleName}>{AcountInfors.name}</p>
            </div>
        </div>
    );
}

export default SuccessAcount;