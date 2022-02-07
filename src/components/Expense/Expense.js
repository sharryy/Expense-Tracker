import './Expense.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpenseList from "./ExpenseList";

function Expense(props) {
    const [filterYear, setFilterYear] = useState('2022');

    const changeFilterYearHandler = (filterYear) => {
        setFilterYear(filterYear);
        props.onUpdateExpense(filterYear);
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter date={filterYear} onChangeFilterYear={changeFilterYearHandler}/>
            <ExpenseList items={props.items}/>
        </Card>
    );
}

export default Expense;