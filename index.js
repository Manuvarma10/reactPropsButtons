const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
  //  Write your code here.
};

const element = (
  <div className="container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button buttonText="like" className="like-btn btn-margin" />
        <Button buttonText="Comment" className="comment-btn btn-margin" />
        <Button buttonText="Share" className="share-btn btn-margin" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
