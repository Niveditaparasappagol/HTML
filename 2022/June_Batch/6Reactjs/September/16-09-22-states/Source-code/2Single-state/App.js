import List from './List';
import './App.css';
import { useState } from 'react';

function App(){

  const [getList,setList]= useState({
     mobile:'no mobile',
     price:2000,
     discount:2000
  });



    const onChangeHandler=(event)=>{
      setList({...getList,[event.target.name]:event.target.value})   //whenever using array and object use spraed operator  bcz it was taking other values as undefined
    }                                         //here v r using arra bracket bcz dynamic key

  

   return (<div>
     <div className="form">
     Enter Mobile Name:<input type="text"  name="mobile" onChange={onChangeHandler} id="mobile"/>
     <br/><br/>
     Enter Price Details:<input type="text" name="price" onChange={onChangeHandler} id="price"/>  //using same state name bcz we dont need to check condition like how we did in multiple state
     <br/><br/>                                                                                //like name=mobile,price,discount
     Enter Discount Details:<input type="text" name="discount" onChange={onChangeHandler} id="discount"/>
    
    </div> 
    <div className="container">
    <List mobile={getList.mobile} price={getList.price} discount={`${getList.discount}%`}/>
    </div>
   </div>)
}

export default App;






