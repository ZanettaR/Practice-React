import * as React from 'react';
import { StateData } from '../interface/StateData';
import { StateListData } from '../interface/StateListData';
import * as styles from '../css/display.css';
import { Link } from 'react-router-dom';

export interface StateListPageProps {
        stateData: StateListData;
}


export class StateList extends React.Component<StateListPageProps, Object>{

    public render() {
        return (
              <div className={styles.centered}>
                <h2 className={styles.listHeader}>United States of America</h2>
                {this.createLists()}
              </div>
        );
    }
    private populateSubList(){
        const { stateData } = this.props;
        var count = 0;
        var trackPosition=0;
        var splitEqually = stateData.length/5;
        var subList: StateData[][];
        subList = new Array(5);
        subList[count] = [];
        stateData.map((states: StateData, index: number) =>{
            if(index > 0 && index%splitEqually == 0){
                count++;
                subList[count]= [];
                trackPosition=0;
            }
            subList[count][trackPosition]=states;
            trackPosition+=1;
        })

        return(subList);
    }

    private createLists(){
        
        
        var subset: StateData[][];
        subset = this.populateSubList();;
        var subsetArrayCounter = 0;
        return subset.map((subsets: StateData[])=>{
            switch(subsetArrayCounter){
                case 0:
                    subsetArrayCounter+=1;                    
                    return(
                         <ul className={styles.firstCol}>
                            {this.createLinks(subsets)}
                         </ul>
                   );
                case 1:
                    subsetArrayCounter+=1;
                    return(
                         <ul className={styles.secondCol}>
                            {this.createLinks(subsets)}
                         </ul>
                 );
                case 2:
                    subsetArrayCounter+=1;
                    return(
                         <ul className={styles.thirdCol}>
                            {this.createLinks(subsets)}
                         </ul>
                    );
                case 3:
                    subsetArrayCounter+=1;
                    return(
                         <ul className={styles.fourthCol}>
                            {this.createLinks(subsets)}
                         </ul>
                    );
                default:
                    return(
                         <ul className={styles.fifthCol}>
                            {this.createLinks(subsets)}
                         </ul>
                    );
            }
        });
    }

   

    private createLinks(stateSubset: StateData[]){
   
        return stateSubset.map((state: StateData) =>
            <li><Link to={'/'+state.stateName} key = {state.stateName} className= {styles.a} > {state.stateName} </Link></li>
        ); 
    }
}

