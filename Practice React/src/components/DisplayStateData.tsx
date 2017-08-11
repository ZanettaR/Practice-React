import * as React from 'react';
import * as styles from '../css/display.css';
import { StateData } from '../interface/StateData';

export interface DisplayStateDataPageProps {
        stateData?: StateData;
}

export class DisplayStateData extends React.Component<DisplayStateDataPageProps, Object>{

    public render() {
        return (
            !this.props.stateData ? null :
            <div>
                <h2 className={styles.listHeader}> {this.props.stateData.stateName}</h2>
            </div>
        );
    }

}


