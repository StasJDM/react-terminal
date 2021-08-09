import { EFileSystemActions } from './fileSystemActions';
import { IFileSystemState } from './types';

const initialState: IFileSystemState = {
  home: [],
};

export const fileSystemReducer = (state: IFileSystemState = initialState, action: any): IFileSystemState => {
  switch (action.type) {
    case EFileSystemActions.create:
      return { ...state, home: [...state.home, action.file] };
    case EFileSystemActions.update:
      // TODO: Create update file reducer
      return { ...state };
    case EFileSystemActions.delete:
      // TODO: Create remove file reducer
      return { ...state };
    default:
      return state;
  }
};
