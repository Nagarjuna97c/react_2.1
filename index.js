const Button = (props) => {
  const { btnclass, text } = props;
  return <button className={`button ${btnclass}`}>{text}</button>;
};

const element = (
  <div className="main-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button btnclass="buttonYellow" text="Like" />
      <Button btnclass="buttonWhite" text="Comment" />
      <Button btnclass="buttonBlue" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
