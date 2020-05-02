import React from 'react';

function Total({expense}){
console.log(expense)
const amount = expense.map(expense=>parseInt(expense.amount));
console.log(amount)
return <>
<h4>Total:</h4>
<h1>
${amount.reduce(( acc , item )=>
 (acc +=item)
,0)}
</h1>
</>
}
export default Total
