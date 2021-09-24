import { createStore, combineReducers } from 'redux';
import { fileSystemReducer } from './fileSystem/fileSystemReducer';
import { IFileSystemState } from './fileSystem/types';
import { composeWithDevTools } from 'redux-devtools-extension';
import { locationReducer } from './location/locationReducer';
import { ILocationState } from './location/types';

export interface IRootState {
  fileSystem: IFileSystemState;
  location: ILocationState;
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    fileSystem: fileSystemReducer,
    location: locationReducer,
  }),
  composeWithDevTools()
);

export default store;
