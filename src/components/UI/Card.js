import "../UI/Card.css";
function Card(props) {
  // card styling will be applied always (By default)
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
