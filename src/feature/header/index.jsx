import { Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import HeaderButton from './components/headerButton';
import styles from './Header.module.scss';
import Search from './pages/Search';
import { NavLink } from 'react-router-dom';
import FormRegister from '../auth/pages/FormRegister';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../auth/AuthSlice';
const useStyles = makeStyles({
    icontiktok: {
        width: "130px",
    },
    headerBorder: {
        borderBottom: `1px solid var(--border-color)`,
        borderTop: "1px solid var(--border-color)",
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        zIndex: '1'
    }
});

function Header(props) {
    const classes = useStyles();
    const showForm = useSelector(state => state.Modal);
    const dispatch = useDispatch();
    const handleShowForm = () => {
        const action = showModal();
        dispatch(action)
    }

    return (
        <Box className={classes.headerBorder}>
            <Container>
                {showForm && <FormRegister />}
                    <div className={styles.headerWrapper}>
                        <NavLink to="/" exact>
                            <img className={classes.icontiktok} src="https://thumbs.dreamstime.com/b/tiktok-glitch-icon-social-media-destination-short-form-mobile-videos-tik-tok-network-kyiv-ukraine-may-184748907.jpg"/>
                        </NavLink>
                        <Search />
                        <div className={styles.btns}>
                            <HeaderButton title="Tải lên" active="headerUpload" onClick={handleShowForm}/>
                            <HeaderButton title="Đăng nhập" active="headerLogin"/>
                        </div>
                    </div>
            </Container>
        </Box>
    );
}

export default Header;