import React,{useEffect,useState} from 'react';
import Alert from './Alert';
import { v4 as uuidv4 } from 'uuid';
import { MdSend } from 'react-icons/md';
function Form({expense,setExpense}){
const [text , setStext]=useState('')
const [amount , setSamount]=useState('')

const[alert,setAlert]=useState({show:false})

const handleAlert=({type,text})=>{
  setAlert({show:true,type,text})
  setTimeout(()=>{
    setAlert({show:false})
  },3000)

}

const handleSubmit=(e)=>{
  e.preventDefault();
  if(text!==''&& amount!==0){
  const newex={id:uuidv4(),text,amount}
  console.log(newex)
  setExpense([newex,...expense])
  handleAlert({type:'success',text:'item added'})
}
else{
  handleAlert({type:'danger',text:'please check your details'})
}
  setStext('')
  setSamount('')
}
return (
<div className='container'>
{alert.show&&<Alert type={alert.type} text={alert.text}/>}
<h3>Add new transaction</h3>
<form onSubmit={handleSubmit}>
<div >
<label htmlFor="text">Text</label>
<input type="text" value={text} onChange={(e)=>setStext(e.target.value)} placeholder="Enter text..." />
</div>
<div>
<label htmlFor="amount"
  >Amount <br />
  (negative - expense, positive - income)</label
>
<input type="number" value={amount} onChange={(e)=>setSamount(e.target.value)} placeholder="Enter amount..." />
</div>
<button className='btn'>Add transaction <MdSend/></button>
 </form>
  </div>)
}
export default Form
