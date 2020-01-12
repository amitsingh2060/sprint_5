import axios from 'axios';
const DATA = 'DATA'
const DELETE ='DELETE'
const UPDATE = 'UPDATE'

const LOG_IN = "LOG_IN";
const LOGIN_REQUEST= "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const allData = (payload) => {
    console.log(payload); 
    return {
   type:DATA,
    payload
    }
}

const removeData = (id) => {
    return{
        type:DELETE,
        id
    }
}

const edit = (edit) => {
    return {
        type:UPDATE,
        edit
    }
}

// *****************
const loginUser = (payload) => {
    console.log(payload);
    
    return {
        type: LOG_IN,
            payload
    }
}
const loginRequest = () => {
    //console.log(payload);
    
    return {
        type: LOGIN_REQUEST,
            
    }
}
const loginSuccess = (payload) => {
    //console.log(payload);
    
    return {
        type: LOGIN_SUCCESS,
        payload

    }
}
const loginFailure = (payload) => {
    console.log(payload);
       
    return {
        type: LOGIN_FAILURE,
            payload
    }
}

const isUserAuth = (payload) => {
    return dispatch => {
        dispatch(loginRequest)
        return axios.post('https://reqres.in/api/login',{
            email:payload.username,
            password:payload.password
        })
        .then(res =>{
            console.log(res);
            
            dispatch(loginSuccess(res.data.token))
        })
        .catch(err => dispatch(loginFailure(err)))
    }
}


export {allData, removeData,edit, loginUser, loginRequest, loginSuccess, loginFailure, isUserAuth}