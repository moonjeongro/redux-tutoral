import React from 'react'
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

function ToDo({text, onClick, id}){

    return (
        <li>
            <Link to={`/${id}`}>
            {text}</Link><button onClick={onClick}>DEL</button>
        </li>
    )
};

// ownProps passed when the Component made
function mapDispatchToProps(dispatch, ownProps){
    return {
        onClick(e) {
            dispatch(actionCreators.deleteToDo(ownProps.id))
        }
    };
}

export default connect(null, mapDispatchToProps)(ToDo);