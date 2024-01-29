import React, { useContext } from "react";
import {TiDelete} from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem=(props)=>{
    const {dispatch} = useContext(AppContext);


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

    const deleteAllocation=(name)=>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload: name,
        })
    }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.cost}</td>
             <td><button onClick={event=>increaseAllocation(props.name)}>+</button></td>
            <td><TiDelete size="30" onClick={event=>deleteAllocation(props.name)}/></td>
        </tr>
    )
}
export default ExpenseItem;