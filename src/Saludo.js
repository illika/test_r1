
export function Saludo({title}) {
    return <h1>{title}</h1>;
}

export function UserCard(props) {
    console.log(props);
    return <div>
        <h1>{props.name}</h1>
        <p>${props.amount}</p>
        <p>{props.estado ? 'Soltero' : 'Casado'}</p>
        <ul>
            <li>Ciudad {props.address.city}</li>
        </ul>
    </div>;
}
