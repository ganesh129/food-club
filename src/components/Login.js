import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginPage=()=>{
    const initialValue={
        name:'',
        email:'',
        password:''
    }
    const onSubmitHandler=(values)=>{
    console.log(values);
    }
    return(
            <Formik initialValues={initialValue} onSubmit={onSubmitHandler}>
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field id="name" type="text" name="name"/>
                        <ErrorMessage name="name" component="div"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email"/>
                        <ErrorMessage name="email" component="div"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field id="password" type="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                    </div>
                    <button type="submit">Submit</button>
                </Form>

            </Formik>
    )
}
export default LoginPage;