import {camera} from "./camera.js"
import molecule from "../dataset/molecule.json"
import reaction from "../dataset/compound-reaction.json"
import substance from "../dataset/substance-composition.json"

const services = {
  camera,
  getMolecule({ name }) {
    try {
      return molecule[name]
    } catch (error) {
      return null;
    }
  },

  getCompund_reaction(reactantA,reactantB){
    try {
      console.log(`${reactantA}_${reactantB}`);
      return reaction[`${reactantA}_${reactantB}`].reaction;
    } catch (error) {
      try{
        return reaction[`${reactantB}_${reactantA}`].reaction;
      }catch(error){
        return('cannot find the data');
      }
    }
  },

  getSubstance({ name }){
    try {
      return substance[name]
    } catch (error) {
      return null;
    }
  },

  checkMolculeSort({ sequence  }){
    let MWs=[]

    sequence.forEach(item => {
      if (this.getMolecule(item)!==null)MWs.push(this.getMolecule(item));
      else return null;
    })

    for (let i = 0; index < MWs.length-1; i++) {
      if (MWs[i]>Mws[i+1])return false
      
    }
    return true;
  },
};


export default services;
