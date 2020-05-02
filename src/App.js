import React,{useState,useEffect} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';

import Expinc from './components/Expinc';
import Form from './components/Form';
import ItemList from './components/ItemList';
import Total from './components/Total';

const initialExpense=[
  {id:uuidv4(),text:"apple",amount:20}
]


function App() {

const [expenses,setExpenses]=useState(initialExpense)
console.log(expenses)
  return <div className='container'>
<div className='container'>
<Total expense={expenses}/>
<Expinc expense={expenses}/>
<ItemList expense={expenses} setExpense={setExpenses}/>
<Form expense={expenses} setExpense={setExpenses}/>
  </div>
</div>

}
export default App;
