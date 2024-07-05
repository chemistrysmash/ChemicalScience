import React, { useState, useEffect } from 'react';
import service from "./../services";
import reaction_data from "../dataset/compound-reaction.json";

const Compound_reaction = () => {
  const [ reaction, setreaction]=useState('');
  useEffect(()=>{
    try {
      setreaction(reaction_data["CH3COOH_C2H5OH"].reaction);
      
    } catch (error) {
      setreaction('');
    }
    
  },[])
  

  return (
    <div style={{ height: '100vh' }}>
      <h2>Compound_reaction</h2>
      <div style={{ width: '100%', height: '30%', backgroundColor: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      </div>
      <div style={{ width: '100%', height: '30%', backgroundColor: 'lightyellow', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {
       reaction!==''?<p style={{ fontSize: '300%' }}>{reaction}</p>:'no reaction showed'
      }
      </div>
    </div>
  );
};

export default Compound_reaction;
