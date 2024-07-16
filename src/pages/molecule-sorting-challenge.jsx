import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import service from '../services';
import { Button } from '@headlessui/react'


const MoleculeSorting = () => {

  const [data,setData]=useState('');
  const [molecules,setmolecules]=useState([]);
  const [moleculesMW,setmoleculesMw]=useState([]);
  const [answer,setAnswer]=useState(false);
  
  const test=["C10H16","C10H12O2","C8H8O3"]
  let zzz=0

  const checkSort=(array)=>{
    for (let index = 0; index < array.length-1; index++) {
      if(array[index]>array[index+1])return false;
    }
    return true;
  }

  const handleClear=()=>{
    setmolecules([]);
    setmoleculesMw([]);
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
    const Substance=service.dataset.getMolecule(data);
    const len_molecules = molecules.length;
    if (Substance !== "data not found" && len_molecules <= 3 && molecules[len_molecules - 1] !== Substance.name) {
      setmolecules([...molecules, Substance.name]);
      setmoleculesMw([...moleculesMW, Substance.moleculeWeight]);
    }
  },[data])

  useEffect(()=>{
    if (moleculesMW.length===3)setAnswer(checkSort(moleculesMW))
  },[moleculesMW]);


  return (
    <div style={{height: '100vh'}}>
      <h2>Molecule Sorting</h2>

      <QrReader
        delay={500}
        containerStyle={{width: '100%', height: '40%', border: '2px solid red', padding: '0px', backgroundColor: 'lightyellow' }}
        videoContainerStyle={{width: '100%', height: '100%', border: '2px solid blue', padding: '5px' , backgroundColor: 'lightyellow' }}
        videoStyle={{ width: '100%', height: '100%', backgroundColor: 'lightblue', justifyContent: 'center' }}
        onResult={handleResult}
        constraints={{ facingMode: "environment" }}
      />
      <div style={{ width: '100%', height: '30%', backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
      <ul>
            {molecules.map((molecule, index) => (
            <li key={index}>{index}: {molecule}</li>
            ))}
      </ul>
      <h1>result:{molecules.length===3?answer?"correct":"wrong":"none"}</h1>
    
        
      <Button  onClick={handleClear} className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[hover]:data-[active]:bg-sky-700">
      Clear All
      </Button>
      </div>
    </div>
  );
};

export default MoleculeSorting;
