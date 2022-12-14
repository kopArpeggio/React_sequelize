import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Home() {
    let navigate = useNavigate()
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:3001/posts").then((response) => {
            console.log(response.data)
            setListOfPosts(response.data)
        })

    }, [])
    return (
        <div>
            {listOfPosts.map((val, key) => {
                return (
                    <div className='post' onClick={() => { navigate(`/post/${val.id}`) }}>
                        <div className="title">{val.title}</div>
                        <div className="body">{val.postText}</div>
                        <div className="footer">{val.username}</div>
                    </div>
                )

            })}
        </div>
    )
}

export default Home