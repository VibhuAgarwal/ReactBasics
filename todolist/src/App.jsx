import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {
  const [inputList, setInputList] = useState();

  const [Items, setItems] = useState([]);

const itemEvent = (event) => {
    setInputList(event.target.value);
};

const listOfItems = (e) => {
    e.preventDefault();
    setItems((oldItems) => {
        return [...oldItems, inputList]

    });
    setInputList('');
};
const deleteItems = (id) => {
  console.log('deleted');

  setItems((oldItems) => {
    return oldItems.filter((arrElem, index) => {
        return index !==id;
    })
  })
};

return(
     <>
  <div className='main-div'>
    <div className='center-div'>
      <br/>
      <h1> ToDO List </h1>
      <br/>
      <form onSubmit={listOfItems}>
      <input type="text" required placeholder='Add a item' value={inputList} onChange={itemEvent}/>
      <button type='submit'> + </button>
      </form>
      <ol>
        {/* <li> {inputList} </li> */}

        {Items.map( (itemVal, index) => {
            return <ToDoLists key={index} 
            id={index} 
            text = {itemVal} 
            onSelect = {deleteItems} />
        })}

      </ol>
    </div>
  </div>
  </>
  );
};
export default App;
