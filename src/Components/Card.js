function Details(props) {

    const { setUserInfo } = props;
    const { id } = props;
    const { name } = props;


    const handleClick = ({ target }) => {
        setUserInfo({ id, name });
    };

    return (
        <button className="user-button" id={id} onClick={handleClick} >{name}</button>
    )
}

export default Details;