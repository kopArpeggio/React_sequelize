import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Post() {
  let { id } = useParams();
  const [PostOnject, setPostObject] = useState({});


  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    })
  })

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
      <div className="rightSide"></div>
    </div>
  )
}

export default Post