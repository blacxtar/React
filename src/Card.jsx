function Card(props) {
  return (
    <div className="divbox">
      <img src={props.url} alt="studentpic" />
      <h1>{props.name}</h1>
      <h1>{props.course}</h1>
      <h1>{props.address}</h1>
    </div>
  );
}
export default Card
