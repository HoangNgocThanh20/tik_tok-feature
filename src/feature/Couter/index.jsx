import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './CouterSlice';

CouterFeature.propTypes = {
    
};

function CouterFeature(props) {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const handleIncreaseClick = () => {
        const action = increase(2);
        dispatch(action)
    }
    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action)
    }
    return (
        <div>
           couter: {counter}
           <div>
               <button onClick={handleIncreaseClick}>Increase</button>
               <button onClick={handleDecreaseClick}>Decrease</button>
           </div>
        </div>
    );
}

export default CouterFeature;