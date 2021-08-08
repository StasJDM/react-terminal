import { createStore, combineReducers } from 'redux';
import { fileSystemReducer } from './fileSystem/fileSystemReducer';
import { IFileSystemState } from './fileSystem/types';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IRootState {
  fileSystem: IFileSystemState;
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    fileSystem: fileSystemReducer,
  }),
  composeWithDevTools()
);

export default store;
