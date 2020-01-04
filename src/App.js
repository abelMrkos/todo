import React,{Component} from 'react';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';
import "bootstrap/dist/css/bootstrap.min.css"; 
import uuid from 'uuid'
class App extends Component{
  state = {
    items : [],
    id : uuid(),
    item : '',
    edititem : false
  }
  handleChange = (e)=>{
    this.setState({
      item : e.target.value
    })  
  }
  handleSubmit = e=> {
    e.preventDefault();

    const newItem = {
      item : this.state.item,
      id : this.state.id
    }
    const updatedItem = [...this.state.items];
    updatedItem.push(newItem)
    this.setState({
      items:updatedItem,
      id:uuid(),
      item:'',
      edititem:false
    })
    
  }
  handleClearList = ()=>{
    const newItem = [];
    this.setState({
      items:newItem
    })
  }
  handleDeleteItem = id => {
    const items = [...this.state.items];
    const newItems = items.filter(item => item.id !== id)
    this.setState({
      items:newItems
    })
    }
  handleEdit = id => {
    const items = [...this.state.items]
    const editItem = items.find(item => item.id === id)
    const newItems = items.filter(item => item.id !== id)
    this.setState({
      items : newItems,
      item : editItem.item,
      edititem : true
    })
  }
render(){
 return(
  <div className = 'container'>
  <div className = 'row'>
  <div className = 'col-10 mx-auto mt-4 col-md-8'>
  <h3 className = 'text-capitalize text-center'>Todo Input</h3>
  <TodoInput
   handleChange = {this.handleChange}
   item = {this.state.item}
   edit = {this.state.edititem}
   handleSubmit = {this.handleSubmit} />
  <TodoList items = {this.state.items}
  handleClearList = {this.handleClearList}
  handleDeleteItem = {this.handleDeleteItem}
  handleEdit = {this.handleEdit} />
  </div>
  </div>  
</div>
      )  
    }
}
export default App;
