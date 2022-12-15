import axios from 'axios';
import '../App.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

function Post() {
  let { id } = useParams();
  const [PostOnject, setPostObject] = useState({});
  const [comments, setComments] = useState([])
  const [newcomments, setnewComments] = useState("")


  const DelComment = (id) => {
    axios.post(`http://localhost:3001/comments/del/${id}`).then((response) => {
      console.log(response)
      getComments()
    })

  }

  const addComment = () => {
    axios.post(`http://localhost:3001/comments/`,
      {
        'commentBody': newcomments,
        'PostId': id
      },
      {
        headers: {
          accessToken: sessionStorage.getItem('accessToken')
        }
      }
    ).then((response) => {
      if (response.data.error) {
        alert(response.data.error)
      } else {
        console.log(response)
        const commentToAdd = { commentBody: newcomments }
        // setComments([...comments, commentToAdd])
        getComments()
        setnewComments("")
      }

    })
  }


  const getComments = () => {
    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      console.log(response.data)
      setComments(response.data)
    })
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
      console.log(response.data)
    })

    getComments()
  }, [])

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id='individual'>
          <div className="title">
            {PostOnject.title}
          </div>
          <div className="body ">
            {PostOnject.postText}
          </div>
          <div className="footer">
            {PostOnject.username}
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input type="text" value={newcomments} name="" id="" placeholder='Comment...' autoComplete='off' onChange={(e) => { setnewComments(e.target.value) }} />
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((val, key) => {
            return <div key={key} className='comment'>{val.commentBody}
              {/* <button onClick={DelComment(val.id)} className='btn btn-outline-danger btn-sm'>Delete</button> */}
              <br></br>
              <Button variant="outline-danger" onClick={() => DelComment(val.id)}>Del. </Button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Post