import React, { useState } from 'react'
import axios from "axios"
import Swal from 'sweetalert2'

function Login() {

    const success = () => {
        Swal.fire({
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const fail = () => {
        Swal.fire({
            title: 'Error!',
            text: '"Wrong Password Or Username"',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const login = () => {
        axios.post(`http://localhost:3001/users/login`, {
            username: username,
            password: password
        }).then((response) => {
            console.log(response.data)

            if (!response.data.finded) {
                fail()
            } else {
                if (response.data.match == true) {
                    success()
                    sessionStorage.setItem("accessToken", response.data.accessToken)
                } else {
                    fail()
                }

            }

        })
    }

    return (
        <div className='loginContainer'>
            <input type="text" placeholder='Username' onChange={(event) => { setusername(event.target.value) }} name="" id="" />
            <input type="password" placeholder='Password' onChange={(event) => { setpassword(event.target.value) }} name="" id="" />
            <button onClick={login} >Login</button>
        </div>
    )
}

export default Login