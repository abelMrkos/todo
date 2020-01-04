import React, { Component } from 'react'

export default class todoItem extends Component {
    
    render() {
        const {item,id,handleDeleteItem,handleEdit} = this.props;
        console.log(item)
        return (
            <li className = 'list-group-item text-capitalize d-flex justify-content-between my-2'>
                <h5>{item}</h5>
                <div className = 'todo-icon'>
                    <span onClick = {handleEdit} className = 'mx-2 text-success'><i className = 'fas fa-pen'></i></span>
                    <span className = 'mx-2 text-danger' ><i className = 'fas fa-trash'onClick = {handleDeleteItem}></i></span>
                </div>
            </li>
            
        )
    }
}
