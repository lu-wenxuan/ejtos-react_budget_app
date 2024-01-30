import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = () => {
    const { expenses, dispatch, currency } = useContext(AppContext);
    const [cost, setCost] = useState('');
    const [name, setName] = useState('');
    const [allocation, setAllocation] = useState('');

    const handleCostChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setCost(e.target.value)

    }

    const handleNameChange = (e) => {
        setName(e.target.value)
        console.log(e.target.value)

    }

    const handleAllocationChange = (e) => {
        setAllocation(e.target.value)
        console.log(e.target.value)
    }

    const ChangeAllcation = () => {
        const expense = {
            id: name,
            name: name,
            cost: parseInt(cost),
        }


        dispatch({
            type: allocation,
            payload: expense,
        })

    }

    return (
        <div className='container'>
            <form className='row ' >
                <div className="input-group col">
                    <label className="input-group-text">Department</label>
                    <select className="form-select" onChange={handleNameChange}>
                        <option className="selected">Choose</option>
                        {expenses.map((expense) =>
                            <option key={expense.id} value={expense.name}>{expense.name}</option>
                        )}
                    </select>
                </div>

                <div className="col">
                    <div className="input-group">
                        <label className="input-group-text">Allocation</label>
                        <select className="form-select" onChange={handleAllocationChange}>
                            <option className="selected">Choose</option>
                            <option value="ADD_EXPENSE">Add</option>
                            <option value="RED_EXPENSE">Reduce</option>

                        </select>
                    </div>
                </div>
                <div className="col">
                    <span className="m-2">{currency}</span>
                    <input type="number" onChange={handleCostChange} />
                </div>
                <div className="col">
                    <button className="btn btn-primary" type="button" onClick={ChangeAllcation}>save</button>
                </div>
            </form>
        </div>
    )
}

export default AllocationForm;