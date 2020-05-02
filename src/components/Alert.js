import React,{useState} from 'react';

function Alert({type,text}){


return(
<div className={`alert alert-${type}`} role="alert">
{text}
</div>)


}
export default Alert
