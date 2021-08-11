import { EFileSystemActions } from './fileSystemActions';
import { EFileType, IFileSystemState } from './types';

const initialState: IFileSystemState = {
  files: [
    {
      name: 'home',
      type: EFileType.Folder,
      location: [],
      children: [
        { name: 'Documents', type: EFileType.Folder, location: ['home'] },
        { name: 'Pictures', type: EFileType.Folder, location: ['home'] },
        { name: 'Downloads', type: EFileType.Folder, location: ['/home'] },
      ],
    },
  ],
};

export const fileSystemReducer = (state: IFileSystemState = initialState, action: any): IFileSystemState => {
  switch (action.type) {
    case EFileSystemActions.create:
      return { ...state, files: [...state.files, action.file] };
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
