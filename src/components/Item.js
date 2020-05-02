import React from 'react';
import { MdDelete } from 'react-icons/md';
function Item({expense,handleDelete}){
console.log(expense)
const {id , amount , text} = expense




return <>
<li>
{text}  <span> {amount}  </span> <button onClick={()=>handleDelete(id)}> <MdDelete/> </button>
</li>
</>


}
export default Item
