import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyList = () => {
    const { dispatch } = useContext(AppContext);
    const [newcurrency, setNewCurrency] = useState('');
    const handleCurrencyChange = (e) => {
        setNewCurrency(e.target.value)

    }

    useEffect(() => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newcurrency,
        })
    },[newcurrency,dispatch])
    return (
        <select className="form-select" onChange={handleCurrencyChange}>

            <option defaultValue="£">£ Pound</option>
            <option value="$">$ Dollar</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>

        </select>


    )
}

export default CurrencyList;