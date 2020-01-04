import React,{Component} from 'react';

class TodoInput extends Component{
    render(){
       const {item,handleChange,handleSubmit,edit} = this.props;
       const classs = edit?'btn btn-success btn-block mt-3':'btn btn-primary btn-block mt-3'

        return(
            <div className = 'card card-body my-3'>
                <form onSubmit = {handleSubmit}>
                 <div className = 'input-group'>
                 <div className = 'input-group-prepend'>
                 <div className = 'input-group-text bg-primary text-white'>
                 <i className = 'fa fa-book' />
                 </div>
                 </div>
                 <input 
                 type = 'text' 
                 className = 'form-control'
                 placeholder = "add a todo item"
                 value = {item}
                 onChange = {handleChange} />    </div>   
                 <button type = 'submit' className = {classs}>{edit?'Edit':'Add'} Item</button>
                </form>
            </div>
        )

    }
}
export default TodoInput;