import React, { Component } from 'react'

class PostsForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            Title : '',
            Body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    } 

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const post ={
            Title: this.state.Title,
            Body: this.state.Body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data =>console.log(data));
    }
    render() {
        return (
            <div>
               <h1>Add Post</h1> 
               <form onSubmit= {this.onSubmit}>
                   <div>
                       <label>Title: </label> <br />
                       <input type ='Text' name= 'Title' 
                       value ={this.state.Title} 
                       onChange={this.onChange}/>
                   </div>
                   <br />
                   <div>
                       <label>Body: </label> <br />
                       <textarea name ='Body'
                       value={this.state.Body}
                       onChange={this.onChange}/>
                   </div>
                   <br />
                   <button type='submit'>SUBMIT</button>
               </form>
            </div>
        )
    }
}
export default PostsForm
