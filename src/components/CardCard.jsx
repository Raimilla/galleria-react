
const Images = (props) => {
    return (
        <div>
            <img src={props.images} alt="" />
            <h1> {props.titulo}</h1>
            <p>{props.descripcion}</p>
        </div>
    );
};


export default Images;