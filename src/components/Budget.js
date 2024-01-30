import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        event.preventDefault()
        setNewBudget(event.target.value);

    }

    useEffect(()=>{
        setNewBudget(newBudget)
       
        dispatch({
            type:'SET_BUDGET',
            payload: parseInt(newBudget)
        })
    },[newBudget,dispatch])

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;