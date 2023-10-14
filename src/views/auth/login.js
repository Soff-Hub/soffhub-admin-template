import React from 'react';
import { Formik } from 'formik';
import { Button, TextField } from '@mui/material';

const login = () => {

  const handleSubmit = (values) => {
    alert(values)
  }


  return <div className='login-page'>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.password) {
          errors.password = 'Password required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          handleSubmit(JSON.stringify(values, null, 2))
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className='login-form'>
          <form onSubmit={handleSubmit} className='login-form-inner flex flex-col mx-auto xl:1/4 lg:w-1/3 sm:w-1/2 w-full px-5 gap-5'>
            <h1 className='text-center text-[35px]'>Login</h1>
            <TextField
              label="Email"
              error={values.email && errors.email || values.email === '' && errors.email}
              helperText={errors.email}
              variant="filled"
              size="small"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <TextField
              error={values.password && errors.password || errors.password}
              helperText={errors.password}
              label="Pasword"
              variant="filled"
              size="small"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type='password'
            />
            <Button variant="outlined" size='large' type='submit' disabled={isSubmitting}>Login</Button>
          </form>
        </div>
      )}
    </Formik>
  </div>
};

export default login;