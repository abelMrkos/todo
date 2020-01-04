import React,{Component} from 'react';
import TodoItem from './todoItem';
class TodoList extends Component{
render(){
  const {items,handleClearList,handleDeleteItem,handleEdit} = this.props;
 return(
 <ul className = 'list-group my-5'>
  <h3 className = 'text-capitalize text-center'>ToDo List</h3>
   {items.map(item => <TodoItem handleDeleteItem = {()=>handleDeleteItem(item.id) } handleEdit = {()=>handleEdit(item.id)} key = {item.id} item = {item.item}/>
   )}
 <button
  className = 'btn btn-danger btn-block mt-5'
  onClick = {handleClearList}> Clear List</button>    
   </ul> 
 )  
    }
}
export default TodoList;
