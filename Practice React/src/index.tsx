import * as React from 'react';
import { render } from 'react-dom';
import { StateList } from './components/StateList';
import { DisplayStateData } from './components/DisplayStateData';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import StateListJSON from '../example/sample-data/stateListJSON';


const wrappedStateList = () => {
    return <StateList stateData={StateListJSON} />
}

const wrappedDisplayStateData = (props:RouteComponentProps<any>) => {
     console.log(props.match.params.state);
     const state = props.match.params.state;
     const stateData = StateListJSON.find(stateListItem => stateListItem.stateName === state);
     console.log(stateData);
     return <DisplayStateData stateData={stateData} />
}


class Root extends React.Component<{}, {}>{

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={wrappedStateList} />
                    <Switch>
                        <Route path='/:state' component={wrappedDisplayStateData} /> 
                    </Switch>
                </div>
            </Router>
        );
    }
}


const domElement = typeof document !== 'undefined' ? document.getElementById('stateLinksPage') : null;

if (domElement !== null) {
    render(<Root  />, domElement);
}
