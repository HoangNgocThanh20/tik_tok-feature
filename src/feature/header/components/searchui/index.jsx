import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchui.module.scss'

SearchUi.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

function SearchUi(props) {
    const {value,onChange} = props;
     return (
        <>
            <input type="text" placeholder="tìm kiếm tài khoản" value={value} onChange={onChange} className={styles.headerSearch}/>
        </>
    );
}

export default SearchUi;