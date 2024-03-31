import Post from "./Post";

import React from "react";

import axios from "axios";
import NewPost from "./NewPost";


class Blog extends React.Component {
  state = {
    posts: [],

    postSelectedId:1
   
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((response) => {

  
this.setState({posts:response.data.slice(0,4)})

  })
   
  }

  selectedIdHandler = (id)=>{

   this.setState({

    postSelectedId:id
   })

  }

  render() {

    const posts = this.state.posts.map((item=>{

return <Post 

key={item.id}  title={item.title}
data={item.body}

click={()=>this.selectedIdHandler(item.id)}

/>

    }))
  
    return <>
    ID= {this.state.postSelectedId}
    
    {posts}
    
   <NewPost  id={this.state.postSelectedId} />
    
    </>;
  }
}

export default Blog;
