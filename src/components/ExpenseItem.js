import React, { useContext } from "react";
import {TiDelete, TiPlus, TiMinus} from "react-icons/ti";

import { AppContext } from "../context/AppContext";

const ExpenseItem=(props)=>{
    const {dispatch, currency} = useContext(AppContext);


    const increaseAllocation = (name)=>{
        const expense={
            id:name,
            name:name,
            cost:10,
        }
        dispatch({
            type:'ADD_EXPENSE',
            payload: expense,
        });
    
    }

    const decreaseAllocation = (name)=>{
        const expense={
            name:name,
            cost:10,
        }
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        })
    }

    const deleteAllocation=(name)=>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload: name,
        })
    }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
             <td>
                <TiPlus style={{color:'green'}} size="30" onClick={event=>increaseAllocation(props.name)}/>
             </td>
             <td>
                <TiMinus style={{color: 'red'}} size="30" onClick={event=>decreaseAllocation(props.name)}/>
             </td>
            <td><TiDelete size="30" onClick={event=>deleteAllocation(props.name)}/></td>
        </tr>
    )
}
export default ExpenseItem;