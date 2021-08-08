import { IFileSystemState } from './types';

const initialState: IFileSystemState = {
  files: [],
};

export const fileSystemReducer = (state: IFileSystemState = initialState, action: any): IFileSystemState => {
  switch (action.type) {
    default:
      return state;
  }
};
