import React from "react";
import axios from "axios";

class NewPost extends React.Component {
    state = {
        postLoad: null,
        title:'',
        content:'',
    };

    componentDidMount() {
       
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
        .then((res) => {
            console.log(res.data);
            this.setState({ postLoad: res.data });
        })
     
    }

    componentDidUpdate(prevProps) {    
       
        if (this.props.id !== prevProps.id) {
            this.fetchPostData();
        }
    }

    fetchPostData() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
            .then((res) => {
                console.log(res.data);
                this.setState({ postLoad: res.data });
            })
         
    }

    addPostHandler = ()=>{

        const data = {
            title:this.state.title,
            body:this.state.content,
        }

        axios.post(`https://jsonplaceholder.typicode.com/posts`,data)

        .then((res)=>{

            console.log(res) 
        })
    }

    render() {

        let post = (
            <div>
                <h2> Title: {this.state.postLoad ? this.state.postLoad.title : "loading"}</h2>
                <h2> Content: {this.state.postLoad ? this.state.postLoad.body : "loading"}</h2>
            <button onClick={this.addPostHandler}> add Post </button>
            
            </div>
        );
        
        return post;
    }
}

export default NewPost;
