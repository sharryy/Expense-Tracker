import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const expenseDataHandler = expenseData => {
        const saveExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpenseData(saveExpenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
        </div>
    );
}

export default NewExpense;