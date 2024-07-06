import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import service from '../services';



const CompoundReaction = () => {
  let reactants=['',''];
  const [reactantA,setReactantA]=useState('');
  const [reactantB,setReactantB]=useState('');
  const [reaction, setReaction] = useState('');

  const handleResult = (result, error) => {
   
    if (result) {
      console.log('result: '+result.text);
      if (reactants[0]==='') {
        reactants[0]=result.text;
        setReactantA( reactants[0]);
        console.log('set a')
      } else if (reactants[1]==='' && result.text !== reactants[0]) {
        reactants[1]=result.text;
        console.log('set b');
        setReactantB( reactants[1]);
        setReaction(service.getCompund_reaction(reactants[0],reactants[1]));
        console.log(service.getCompund_reaction(reactants[0],reactants[1]));
      }
    }
  };
  const handleClear=()=>{
    setReactantA('');
    setReactantB('');
    setReaction('');
    console.log(reactantA);
    reactants=['',''];
    console.log('clear');
  }
  return (
    <div>
      <h2>Compound Reaction</h2>
      <button onClick={handleClear} style={{ fontSize: '20px', padding: '10px', margin: '20px' }}>Clear All</button>
      <QrReader
        delay={500}
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

        
      </div>
    </div>
  );
};

export default CompoundReaction;
