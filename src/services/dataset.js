import molecule from "../dataset/molecule.json"
import reaction from "../dataset/compound-reaction.json"
import substance from "../dataset/substance-composition.json"

export const dataset = {
    getMolecule(name) {
        try {
          //console.log('mol: '+name)
          if( molecule[name]===undefined)return 'data not found';
        return molecule[name]
      } catch (error) {
          return('error getMolecule',error);
      }
      },
    
      getCompund_reaction(reactantA,reactantB){
        try {
          if (reaction[`${reactantA}_${reactantB}`]!==undefined)return reaction[`${reactantA}_${reactantB}`];
          else if (reaction[`${reactantB}_${reactantA}`]!==undefined)return reaction[`${reactantB}_${reactantA}`];
          else return('data not found');
        } catch (error) {
          return('error getCompund_reaction',error);
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
  