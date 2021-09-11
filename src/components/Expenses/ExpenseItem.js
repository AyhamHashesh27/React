import ExpenseDate from './ExpenseDate.js';
import "./ExpenseItem.css";
import Card from "../UI/Card.js"

function ExpenseItem(props) {
  const title = props.title;
  const price = props.price;

  // Each return should has 1 root element
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}$</div>
      </div>
    </Card>
  );
}
// To use it outside this file
export default ExpenseItem;
