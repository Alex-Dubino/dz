import "./Cards.scss";

export default function Cards(props) {
  console.log(props);
  return (
    <div className={props.card.bg}>
      <div className="card-head">
        <h2 className="card-head-title">{props.card.title}</h2>
      </div>
      <div className="card-body">
        <span className="span">руб</span>
        <div className="card-body-item">
          <h4>{props.card.content}</h4>
          <span>/мес</span>
        </div>
      </div>
      <div className="card-subbody">
        <span className="card-subcontent">{props.card.subContent}</span>
      </div>
      <div className="card-footer">
        <span className="card-footer-text">Объем включонного</span>
        <span className="card-footer-subtext">трафика не ограничен</span>
      </div>
    </div>
  );
}
