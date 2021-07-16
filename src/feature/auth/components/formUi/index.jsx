import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './formUi.module.scss'
FormUi.propTypes = {
    onSubmit: PropTypes.func,
    form: PropTypes.object,
};

function FormUi({onSubmit = null,form = {}}) {
    const { register, handleSubmit, formState:{ errors } } = form;
    const handleFormSubmit = (values) => {
        if(!onSubmit) return
        console.log(values);
    }
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.formMain}>
            <h2>Đăng ký</h2>
            <div className={styles.formGroup}>
                <label htmlFor="inputEmail">Email</label>
                <input type="text" id="inputEmail" placeholder="Nhập email" 
                className = {`${styles.inputForm} ${Boolean(errors.Email) && styles.inputRequired}`}  
                {...register("Email")}
                /><br/>
                
                <span className={styles.required}>{errors.Email?.message}</span>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="inputPassword">Mật khẩu</label>
                <input type="text" id="inputPassword" placeholder="Nhập mật khẩu (Tối thiểu 6 ký tự)" 
                className={styles.inputForm}  
                {...register("Password")}
                /><br/>
                <span className={styles.required}>{errors.Password?.message}</span>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="inputRetypePassword">Xác nhận mật khẩu</label>
                <input type="text" id="inputRetypePassword" placeholder="Nhập lại mật khẩu" 
                className={styles.inputForm}
                {...register("retypePassword")}
                /><br/>
                <span className={styles.required}>{errors.retypePassword?.message}</span>
            </div>
            <input type="submit" value="Đăng ký" className={styles.submitForm}/>
        </form>
    );
}

export default FormUi;