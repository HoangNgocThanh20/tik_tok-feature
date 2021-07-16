import React from 'react';
import PropTypes from 'prop-types';
import {Switch,Route} from 'react-router-dom'
import Home from './components/Homes';
import Following from './components/Following';
import NotFound from '../../components/NotFound';
import CouterFeature from '../Couter';
MainContent.propTypes = {
    
};

function MainContent(props) {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={CouterFeature}/>
                <Route path="/following" component={Following}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
}

export default MainContent;