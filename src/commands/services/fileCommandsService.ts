import store from '../../store';
import { createFile } from '../../store/fileSystem/fileSystemActions';
import { EFileType, IFile } from '../../store/fileSystem/types';

export enum ECommandMessages {
  InvalidArgument = 'Invalid command argument',
}

export const FileCommandsService = {
  mkdir: (argument: string[]): string => {
    if (!argument.length) return '';
    if (argument.length > 1) return ECommandMessages.InvalidArgument;

    const fileName = argument[0];
    store.dispatch(createFile({ name: fileName, type: EFileType.Folder, location: '' }));

    return 'Folder ' + fileName + ' created';
  },

  pwd: (argument: string[]): string => {
    if (argument.length) return ECommandMessages.InvalidArgument;

    const location: string[] = store.getState().location.current;
    const locationStr = location.reduce((p, n) => p + '/' + n, '~');
    return locationStr;
  },

  ls: (argument: string[]): string => {
    if (argument.length) return ECommandMessages.InvalidArgument;

    const location: string[] = store.getState().location.current;
    const files: IFile[] = store.getState().fileSystem.home;

    const findFolder = ([folderName, ...restFoldersNames]: string[], files: IFile[]): IFile[] => {
      const currentFolder = files.find((file) => file.name === folderName);
      if (!restFoldersNames.length) {
        return currentFolder?.children || [];
      }

      return findFolder(restFoldersNames, currentFolder?.children || []);
    };

    const listFiles = findFolder(location, files);
    const listFilesStr = listFiles.map((file) => file.name).reduce((p, n) => p + ' | ' + n);

    return listFilesStr;
  },
};
