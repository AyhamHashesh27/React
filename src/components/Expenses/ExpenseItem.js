import ExpenseDate from './ExpenseDate.js';
import "./ExpenseItem.css";
import Card from "../UI/Card.js"

function ExpenseItem(props) {
  const price = props.price;
  const title = props.title;
  // Each return should has 1 root element
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}$</div>
      </div>

    </Card>
    </li>
  );
}
// To use it outside this file
export default ExpenseItem;
