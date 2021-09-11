import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js"
import Card from "../UI/Card.js"

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        price={props.items[0].price}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        price={props.items[1].price}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        price={props.items[2].price}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        price={props.items[3].price}
        date={props.items[3].date}
      ></ExpenseItem>

    </Card>
  );
}

export default Expenses;
