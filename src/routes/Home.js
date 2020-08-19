import React, {useState} from 'react';
import {connect} from 'react-redux';
import {remove, add} from '../store';
import ToDo from '../Components/ToDo';

function Home({toDos, addToDo}) {

    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>{toDos.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}
            </ul>
        </>
    );
}

// give state from store to home
function mapStateToProps(state){
    return { toDos: state };
}

function mapDispatchToProps(dispatch){
    return {
        addToDo: text => dispatch(add(text)),
        delToDo: id => dispatch(remove(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);