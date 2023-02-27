import React, { useEffect, useState } from 'react'
import { getRequest } from '../../custom/getRequest'
import './Posts.css'
function Posts() {
    const [postData, setPostData] = useState([])
    useEffect(() => {
        getRequest("posts")
            .then(({ data }) => {
                console.log(data);
                setPostData(data);
            })
            .catch((err) => {
                console.log(err, "err");
            });
    }, [])
    return (
        <div className='post'>
            {
                postData?.splice(0, 8).map((item, index) =>
                    <div key={index}>
                        <b> {item?.id}: {item?.title}</b>
                        <p>{item?.body}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Posts
