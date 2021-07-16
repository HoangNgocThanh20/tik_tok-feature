import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormUi from '../../components/formUi';
import styles from './FormRegister.module.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function FormRegister() {
    const schema = yup.object().shape({
        Email: yup.string().required('vui lòng nhập email').email('trường này phải là email'),
        Password: yup.string().required('vui lòng nhập password').min(6,'nhập ít nhất 6 ký tự'),
        retypePassword: yup.string().required('vui lòng nhập lại password')
      });
    const form = useForm({
        resolver: yupResolver(schema)
    });
    
    const submitForm = (formValue) => {
        console.log(form.formState.errors);
    }
    
    return (
        <div className={styles.modal}>
            <FormUi onSubmit = {submitForm} form={form}/>
        </div>
        
    );
}

export default FormRegister;