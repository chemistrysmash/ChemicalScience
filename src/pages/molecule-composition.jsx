import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import service from '../services';
import { Button } from '@headlessui/react'


const MoleculeComposition = () => {

  const [data,setData]=useState('');
  const [compositions,setCompostions] = useState([]);
  const [plantName,setPlantName]=useState('');

  const handleClear=()=>{
    setCompostions([]);
    setPlantName('');
    setData('');
    console.log('clear');
  }
  const handleResult = (result, error) => {
    if (result) {
      const a=result.text
      setData(a);
      console.log('result.text: '+result.text)
    }
    if(error){
      //console.log(error);
    }
  };

  useEffect(()=>{
   console.log('data: '+data);
   const Substance=service.dataset.getSubstance(data);
   if(Substance!=="data not found" || plantName!==''){
    setCompostions(Substance.compositions);
    setPlantName(Substance.name);
   }
  },[data])

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
        <h1>{plantName!==''?plantName + ":":"none :"}</h1>
        <ul>
            {compositions.map((composition, index) => (
            <li key={index}>{composition}</li>
            ))}
        </ul>
      <Button  onClick={handleClear} className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[hover]:data-[active]:bg-sky-700">
      Clear All
      </Button>
      </div>
    </div>
  );
};

export default MoleculeComposition;
