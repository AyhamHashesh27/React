import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // Approach 1: Multiple state (Better)
  // Datatype returned by event is string. So, we used single quotation - Initial State.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // Approach 2: One state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredPrice: "",
  //   enteredDate: "",
  // });

  function titleChangedHandler(event) {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
    // setUserInput({
    //   // Spread operator: pulls out all the key value pairs
    //   ...userInput,
    //   // Overwrite entered title
    //   enteredTitle: event.target.value,
    // });
    // To be sure that you are using the latest snapshot
    // setUserInput( (prevState) => {
    //   return {
    //   ...prevState,
    //   enteredTitle: event.target.value}
    // });
  }
  function priceChangedHandler(event) {
    setEnteredPrice(event.target.value);
    console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   // Overwrite entered title
    //   enteredPrice: event.target.value,
    // });
    // setUserInput( (prevState) => {
    //   return {
    //   ...prevState,
    //   enteredPrice: event.target.value}
    // });
  }
  function dateChangedHandler(event) {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   // Overwrite entered title
    //   enteredDate: event.target.value,
    // });
    // setUserInput( (prevState) => {
    //   return {
    //   ...prevState,
    //   enteredDate: event.target.value}
    // });
  }
  const submitHandler = (event) => {
    // To avoild reload page (default browser behaviour)
    event.preventDefault();
    // Collecting Data
    const expenseData = {
      title: enteredTitle,
      price: +enteredPrice,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    // Reset
    setEnteredDate("");
    setEnteredPrice("");
    setEnteredTitle("");
  };
  return (
    // We wil set each input inside div
    // When you use button with type submit no need to add on clickListener
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredPrice}
            onChange={priceChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-1-1"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Element</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
