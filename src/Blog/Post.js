
import React from "react"

const Post = (props)=>{

    return( 
        <div onClick={props.click}>
        <h1>titlle:{props.title}</h1>
        <div>
            author:{props.author}
        </div>
        <div>
            <p>{props.data}</p>
        </div>
        
        </div>
    )
}
export default Post