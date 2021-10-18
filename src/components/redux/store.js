import {createStore , combineReducers, compose, applyMiddleware} from 'redux';
import {todoReducers ,isLoadingReducer} from './reducers';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from 'redux-devtools-extension'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const rootReducers= combineReducers({todoReducers,isLoadingReducer});
const presistConfig ={
    key:'root',
    storage,
    stateReconciler:autoMergeLevel2
}
const persistReducers = persistReducer(presistConfig,rootReducers)

export const store = createStore(persistReducers,
    composeWithDevTools(applyMiddleware(thunk))
  
); 