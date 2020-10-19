import React, { Component } from 'react'

class PostsForm extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    } 
    render() {
        return (
            <div>
               <h1>Add Post</h1> 
               <form>
                   <div>
                       <label>Tittle: </label> <br />
                       <input type ='Text' name= 'Tittle' />
                   </div>
                   <div>
                       <label>Body: </label> <br />
                       <textarea name ='Body'/>
                   </div>
                   <br />
                   <button type='submit'>SUBMIT</button>
               </form>
            </div>
        )
    }
}
export default PostsForm
