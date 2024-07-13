import molecule from "../dataset/molecule.json"
import reaction from "../dataset/compound-reaction.json"
import substance from "../dataset/substance-composition.json"

export const dataset = {
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
            console.log('error');
            return('data not found');
          }
        }
      },
    
      getSubstance(name){
        try {
            if( substance[name]===undefined)return 'data not found';
          return substance[name]
        } catch (error) {
            return('error getSubstance',error);
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
  