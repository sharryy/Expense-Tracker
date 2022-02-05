import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

function Expense(props) {
    const [filterYear, setFilterYear] = useState('2022');

    const changeFilterYearHandler = (filterYear) => {
        setFilterYear(filterYear);
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter date={filterYear} onChangeFilterYear={changeFilterYearHandler}/>
            {props.items.map(expense => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expense;