import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import { useState } from "react";

// Main of the project
function App() {
  const INITAL_EXPENSES = [
    {
      id: 1,
      date: new Date(2020, 8, 14),
      title: "Toilet Paper",
      price: 94.12,
    },
    {
      id: 2,
      date: new Date(2021, 3, 12),
      title: "New TV",
      price: 799.49,
    },
    {
      id: 3,
      date: new Date(2021, 3, 28),
      title: "Car Insurance",
      price: 294.67,
    },
    {
      id: 4,
      date: new Date(2021, 6, 12),
      title: "New Desk (Wooden)",
      price: 450,
    },
  ];
  const [expenses, setExpenses] = useState(INITAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
