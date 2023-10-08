import React, { useReducer } from 'react';

//Action Types
const UPDATE_FIELD="UPDATE_FILED";
const SUBMIT_FORM="SUBMIT_FORM";

const formReducer=(state,action)=>{
    switch(action.type){
        case UPDATE_FIELD:
            return{...state,[action.field]:action.value}
        case SUBMIT_FORM:
            //Form Submission Logic Here
            console.log('Form Submitted ',state);
            return state;
        default:
            return state;
    }
}

function SimpleForm() {

    //INitial state
    const initialFormState={firstName:'',lastName:'',email:''}
    //useReducer Hook
    const [formState,dispatch]=useReducer(formReducer,initialFormState);
    //Handler for updating fields
    const handleFieldChange=(field,value)=>{
        dispatch({
            type:UPDATE_FIELD,
            field,value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({type:SUBMIT_FORM})
    }
    return ( <div>
        <h3>Simple Form Reducer Demo</h3>
        <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input type='text' value={formState.firstName}
            onChange={(e)=>handleFieldChange('firstName',e.target.value)}></input>
            <br/>
            <label>Last Name:</label>
            <input type='text' value={formState.lastName}
            onChange={(e)=>handleFieldChange('lastName',e.target.value)}></input>
            <br/>
            <label>Email Id:</label>
            <input type='text' value={formState.email}
            onChange={(e)=>handleFieldChange('email',e.target.value)}></input>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </div> );
}

export default SimpleForm;