import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../App.css'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'



function Register() {

    let navigate = useNavigate()

    const initialValues = {
        username: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required().min(3).max(15),
        password: Yup.string().min(4).max(20).required(),
    })

    const onSubmit = (data) => {
        axios.post(`http://localhost:3001/users/`,data).then((response) => {
            console.log(response)
        })
    }

    return (

        <div className="createPostContainer "  >
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='formContainer ' >
                    <label>Username : </label>
                    <ErrorMessage name='username' component="span" />
                    <Field autoComplete="off" id="inputCreatePost" name="username" placeholder="Your username" />
                    <label>Password : </label>
                    <ErrorMessage name='password' component="span" />
                    <Field autoComplete="off" id="inputCreatePost" name="password" placeholder="Your Password" />

                    <button type='submit'>Register</button>
                </Form>

            </Formik>
        </div>
    )
}

export default Register