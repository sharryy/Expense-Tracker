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
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
        </Card>
    );
}

export default Expense;