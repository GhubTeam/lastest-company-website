export default function Card(props) {
  return (
    <li>
      <div className="slide">
        <div className="user-info">
          <img src={props.img} alt="" />
          <div>
            <h3>{props.name}</h3>
            <span>{props.location}</span>
          </div>
        </div>
        <p>{props.Testimony}</p>
      </div>
    </li>
  );
}
