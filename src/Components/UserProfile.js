function Details({ info }) {

    const { name } = info;
    const { avatar } = info;
    const { details } = info;

    return (
        <>
            <img className="avatar" src={avatar} />
            <h3 className="name">{name}</h3>
            <p className="info">City: {details.city}</p>
            <p className="info">Company: {details.company}</p>
            <p className="info">Position: {details.position}</p>
        </>
    )
}

export default Details;