import React from 'react';

function Expinc({expense}){
console.log(expense)
const amount = expense.map(expense=>parseInt(expense.amount))
const income = amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2)
const exp = amount.filter(item=>item<0).reduce((acc,item)=>(acc+=item*-1),0).toFixed(2)
return (
<div className='inc-exp-container'>
<div className='money.plus'>income:<h1>{income}</h1></div>
<div className='money.minus'>expense:<h1>{exp}</h1></div>
</div>
)
}
export default Expinc
