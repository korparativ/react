
export const middleware = store => next => action => {
    console.log('thunk');

    return next(action)
}
