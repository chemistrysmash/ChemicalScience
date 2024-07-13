import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import service from '../services';
import { Button } from '@headlessui/react'


const CompoundReaction = () => {
  const [reactantA,setReactantA]=useState('');
  const [reactantB,setReactantB]=useState('');
  const [data,setData]=useState('');
  const [reaction, setReaction] = useState('');

  const handleClear=()=>{
    setReactantA('');
    setReactantB('');
    setReaction('');
    setData('');
    console.log('clear');
  }
  const handleResult = (result, error) => {

    if (result) {
      const a=result.text
      setData(a);
      console.log(result.text)
      //Math.floor(Math.random() * 100) + 1;
      
    }
    if(error){
      //console.log(error);
    }
  };

  useEffect(()=>{
   console.log('data:'+data);

   if(reactantA==='')setReactantA(data);
   else if(reactantB==='' && reactantA!=='')setReactantB(data);
  },[data])

  useEffect(()=>{
    console.log('reactantA:'+reactantA);
   },[reactantA])

   useEffect(()=>{
    console.log('reactantB:'+reactantB);
    if(reactantB!=='')setReaction(service.dataset.getCompund_reaction(reactantA,reactantB));
   },[reactantB])
   
  return (
    <div style={{height: '100vh'}}>
      <h2>Compound Reaction</h2>
     
      <QrReader
        delay={500}
        containerStyle={{width: '100%', height: '40%', border: '2px solid red', padding: '0px', backgroundColor: 'lightyellow' }}
        videoContainerStyle={{width: '100%', height: '100%', border: '2px solid blue', padding: '5px' , backgroundColor: 'lightyellow' }}
        videoStyle={{ width: '100%', height: '100%', backgroundColor: 'lightblue', justifyContent: 'center' }}
        onResult={handleResult}
        constraints={{ facingMode: "environment" }}
      />
     
      <div style={{ width: '100%', height: '30%', backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
        {
         <p style={{ fontSize: '20px' }}>reactantA:{reactantA} <br /> reactantB: {reactantB}</p>
        }
        {
          reaction !== '' ? <p style={{ fontSize: '20px' }}>{reaction}</p> : <p>No reaction showed</p>
        }
      <Button  onClick={handleClear} className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[hover]:data-[active]:bg-sky-700">
      Clear All
      </Button>
      </div>
    </div>
  );
};

export default CompoundReaction;
