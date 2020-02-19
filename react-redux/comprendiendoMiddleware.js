const actionNormal = payload => ({ type: 'myAction', payload });

const actionDelay = payload => {
    return dispatch => {
        dispatch(`Inicio: ${payload}`);
        setTimeout(() => dispatch(`Terminó ${payload}`),1000);
    }
}

const myDispatch = texto => {
    console.log(texto);
}

//Mientras tanto en el Middleware...
// return ({ dispatch, getState }) => next => action =>{}
const payload = 'fetching';
const action = actionDelay(payload);

if(typeof action == 'function'){
    console.log('action delay');
    action(myDispatch);
}else {
    console.log('action normal');
    console.log(action);
}