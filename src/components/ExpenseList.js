import { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext)
    return (

        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocation Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Decrease by 10</th>
                    <th scope="col">Delete</th>
                </tr>

            </thead>
            <tbody>
                {expenses.map((expense) =>
                    <ExpenseItem key={expense.id} name={expense.name} cost={expense.cost}/>
                )}
            </tbody>
        </table>

    )
}
export default ExpenseList;