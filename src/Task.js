import './task.css';

export function TaskCard({ ready }) {

    const cardStyle = {
        background: 'black',
        color: 'white',
        padding: '20px',
    };

    const titleStyle = { fontWeight: "lighter" };

    return <div className='card'>
        <h1 className={ready ? 'bg-blue' : 'bg-red'}>Primer Componente</h1>
        <p style={ready ? { background: 'red' } : { background: 'blue' }}>
            {ready ? 'Tarea realizada' : 'Tarea pendiente'}
        </p>
    </div>;
}