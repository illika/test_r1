import PropTypes from 'prop-types';

export function Button({text, name}) {
    console.log(text);
    return <button onClick={function (){
        console.log("hola mundo")
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired ,    
}

Button.defaultProps = {
    name: "Some User",
}