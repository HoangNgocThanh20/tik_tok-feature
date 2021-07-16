import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './topNavbar.module.scss';
import HomeIcon from '../../../components/HomeIcon';
import Icon from '@material-ui/core/Icon';
import Button from '../../../components/Button';
function TopNavBar() {
    return (
        <div className={styles.TopNavBarWapper}>
            <NavLink to="/" activeClassName={styles.linkactive} exact>
                <HomeIcon style={{fontSize: 25,position: 'relative',top: '3px'}}/>
                    Dành cho bạn
                </NavLink>
            <NavLink to="/following" activeClassName={styles.linkactive}>
                <Icon style={{ fontSize: 25 ,position: 'relative',top: '3px',marginRight: '2px'}}>
                    add_circle
                </Icon>
                Đang Follow
            </NavLink>
            <p className={styles.title}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
            <Button type="topHeaderBtn" title="Đăng nhập"/>
        </div>
    );
}

export default TopNavBar;