import {VscGlobe} from 'react-icons/vsc';

export const Posts = () => {
    return <button onClick={(e) => {
        fetch('https://jsonplaceholder11.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }}>
        <VscGlobe></VscGlobe>
        Traer Datos
    </button>;
}