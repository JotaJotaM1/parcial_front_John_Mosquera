function Card(props) {

  const { name, comida } = props.props;

    return (
      <div>
        <h2>{`Hola ${name}`}</h2>
        <p>{`Tu comida favorita es ${comida}`}</p>
      </div>
    );
}
  
export default Card;