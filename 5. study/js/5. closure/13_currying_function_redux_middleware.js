// Redux Middleware 'Logger'
const logger = store => next => action => {
  console.log('dispatching', action);
  console.log('next state', store.getState());
  return next(action);
};



// Redux Middleware 'thunk'
const thunk = store => next => action => {
  return typeof action === 'function'
  ? action(dispatch, store.getState)
  : next(action);
};
