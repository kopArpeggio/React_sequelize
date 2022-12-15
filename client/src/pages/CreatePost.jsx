import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../App.css'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Container } from 'react-bootstrap'

function CreatePost() {

    let navigate = useNavigate()

    const initialValues = {
        title: "",
        postText: "",
        username: "",
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a Title!"),
        postText: Yup.string().required("You must input a postText!"),
        username: Yup.string().required().min(3).max(15)
    })

    const onSubmit = (data) => {
        axios.post("http://127.0.0.1:3001/posts", data).then((response) => {
            console.log('It Worked')
            navigate('/')
        })
    }

    return (

            <div className="createPostContainer "  >
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form className='formContainer ' >
                        <label>Title : </label>
                        <ErrorMessage name='title' component="span" />
                        <Field autoComplete="off" id="inputCreatePost" name="title" placeholder="(Ex. Title...)" />
                        <label>Post : </label>
                        <ErrorMessage name='postText' component="span" />
                        <Field autoComplete="off" id="inputCreatePost" name="postText" placeholder="(Ex. Post...)" />
                        <label>Username : </label>
                        <ErrorMessage name='username' component="span" />
                        <Field autoComplete="off" id="inputCreatePost" name="username" placeholder="(Ex. Username...)" />
                        <button type='submit'>Create Post</button>
                    </Form>
                   
                </Formik>
            </div>
    )
}

export default CreatePost