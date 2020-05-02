import React from 'react';
import Item from './Item'
function ItemList({expense,setExpense}){

  const handleDeleteall=()=>{
  console.log('delete all');
  setExpense([])
  }
  const handleDelete=(id)=>{
  console.log(id);
  const tempexp = expense.filter(item=>item.id!==id)
  console.log(tempexp)
  setExpense(tempexp)
  }

return (<>
<h3>History:</h3>
<ul className='list'>
{expense.map(expense=><Item key={expense.id} expense={expense} handleDelete={handleDelete}/>)}
</ul>
{expense.length>0&&<button onClick={handleDeleteall} className='btn'>Delete All</button>}
</>)
}
export default ItemList
