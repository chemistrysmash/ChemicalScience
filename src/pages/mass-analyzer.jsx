import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import service from '../services';
import { Button,Field, Label, Radio, RadioGroup} from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const MoleculeSorting = () => {

  const [data,setData]=useState('');
  const [molecule,setmolecule]=useState();
  const [answer,setAnswer]=useState();
  const plans = [
    { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256GB SSD disk' },
    { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512GB SSD disk' },

  ]
  const threshold=300;
  const methodList=['有機溶劑法', '蒸餾'];
  
  const [selected, setSelected] = useState(methodList[0])

  const handleCheckAnswer=()=>{
   
   if(molecule!==undefined){
    console.log('123');
    if((molecule.moleculeWeight<threshold && selected===methodList[0])
      ||(molecule.moleculeWeight>threshold && selected==methodList[1])
    )
    setAnswer(true);
    else setAnswer(false);
   }
   
  }

  const handleClear=()=>{
    setmolecule();
    setAnswer();
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
    const temp=service.dataset.getMolecule(data);
    if(temp!=='data not found'){
      setmolecule(temp);
    }
  },[data])


  return (
    <div style={{height: '100vh'}}>
      <h2>MassAnalyzer</h2>

      <QrReader
        delay={500}
        containerStyle={{width: '100%', height: '40%', border: '2px solid red', padding: '0px', backgroundColor: 'lightyellow' }}
        videoContainerStyle={{width: '100%', height: '100%', border: '2px solid blue', padding: '5px' , backgroundColor: 'lightyellow' }}
        videoStyle={{ width: '100%', height: '100%', backgroundColor: 'lightblue', justifyContent: 'center' }}
        onResult={handleResult}
        constraints={{ facingMode: "environment" }}
      />
      <div style={{ width: '100%', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
   
      <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
          {methodList.map((method,index) => (
            <Radio
              key={index}
              value={method}
              className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5  transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-white">{method}</p>
                </div>
                <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
    <p className="py-2 px-4 text-white">molecule: {molecule!==undefined?molecule.name:""}</p>
    <p className="py-2 px-4 text-white">answer: {answer!==undefined?answer?"correct":"wrong":""}</p>
      <Button  onClick={handleCheckAnswer} className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[hover]:data-[active]:bg-sky-700">
      check answer 
      </Button>
    
      <Button  onClick={handleClear} className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[hover]:data-[active]:bg-sky-700">
      Clear All
      </Button>
      </div>
      
    </div>
  );
};

export default MoleculeSorting;
