import { createAction } from 'typesafe-actions';

const beginLoading = createAction('application/BEGIN_LOADING', action => {
    return () => action();
});

const stopLoading = createAction('application/STOP_LOADING', action => {
    return () => action();
});

export default {
    beginLoading,
    stopLoading
};
