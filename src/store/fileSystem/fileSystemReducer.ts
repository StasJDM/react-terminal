import { EFileSystemActions } from './fileSystemActions';
import { EFileType, IFile, IFileSystemState } from './types';

const initialState: IFileSystemState = {
  files: [
    {
      name: 'home',
      type: EFileType.Folder,
      location: [],
      children: [
        { name: 'Documents', type: EFileType.Folder, location: ['home'] },
        { name: 'Pictures', type: EFileType.Folder, location: ['home'] },
        {
          name: 'Downloads',
          type: EFileType.Folder,
          location: ['/home'],
          children: [
            { name: 'Games', type: EFileType.Folder, location: ['home', 'Downloads'] },
            { name: 'Programs', type: EFileType.Folder, location: ['home', 'Downloads'] },
          ],
        },
      ],
    },
  ],
};

// TODO: Create helper for rewrite file logic
// TODO: Create helper for checking if exist this path and it is folder
// TODO: Add error handling
const rewriteFiles = ([currentLocation, ...restLocation]: string[], filesToRewrite: IFile[], fileToAdd: IFile): any => {
  if (currentLocation) {
    const folderToRewrite = filesToRewrite.find((file) => file.name === currentLocation);
    const restFiles = filesToRewrite.filter((file) => file.name !== currentLocation) || [];
    if (folderToRewrite && folderToRewrite.children) {
      folderToRewrite.children = rewriteFiles(restLocation, folderToRewrite.children, fileToAdd);
      return [...restFiles, folderToRewrite];
    }
  }

  return [...filesToRewrite, fileToAdd];
};

const createFile = (state: IFileSystemState, action: { file: IFile }): IFileSystemState => {
  return { ...state, files: rewriteFiles(action.file.location, state.files, action.file) };
};

export const fileSystemReducer = (state: IFileSystemState = initialState, action: any): IFileSystemState => {
  switch (action.type) {
    case EFileSystemActions.create:
      return createFile(state, action);
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
