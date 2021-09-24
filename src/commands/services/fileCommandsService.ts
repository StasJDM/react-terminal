import store from '../../store';
import { createFile } from '../../store/fileSystem/fileSystemActions';
import { EFileType, IFile } from '../../store/fileSystem/types';
import { changeLocation } from '../../store/location/locationActions';

export enum ECommandMessages {
  InvalidArgument = 'Invalid command argument',
  NotADirectory = 'This is not a directory',
  EmptyFolder = 'Empty folder',
}

export const FileCommandsService = {
  mkdir: (argument: string[]): string => {
    if (!argument.length) return ECommandMessages.InvalidArgument;
    if (argument.length > 1) return ECommandMessages.InvalidArgument;

    const fileName = argument[0];
    const location: string[] = store.getState().location.current;

    store.dispatch(createFile({ name: fileName, type: EFileType.Folder, location, children: [] }));

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
    const files: IFile[] = store.getState().fileSystem.files;

    const findFolder = ([folderName, ...restFoldersNames]: string[], files: IFile[]): IFile[] => {
      if (!folderName) return files;

      const currentFolder = files.find((file) => file.name === folderName);
      if (!restFoldersNames.length) {
        return currentFolder?.children || [];
      }

      return findFolder(restFoldersNames, currentFolder?.children || []);
    };

    const listFiles = findFolder(location, files);
    const listFilesStr = listFiles.length
      ? listFiles.map((file) => file.name).reduce((p, n) => p + ' | ' + n)
      : ECommandMessages.EmptyFolder;

    return listFilesStr;
  },

  cd: (argument: string[]): string => {
    if (argument.length > 1) return ECommandMessages.InvalidArgument;

    if (!argument.length || (argument.length === 1 && !argument[0].trim())) {
      store.dispatch(changeLocation([]));
      return '';
    }

    const files: IFile[] = store.getState().fileSystem.files;
    const targetLocation = argument[0].split('/');

    const isExistPath = ([folderName, ...restFoldersNames]: string[], files: IFile[]): boolean => {
      const folder = files.find((file) => file.name === folderName);

      if (!folder || folder.type !== EFileType.Folder) {
        return false;
      }

      if (restFoldersNames.length) {
        return folder.children ? isExistPath(restFoldersNames, folder.children) : false;
      } else {
        return true;
      }
    };

    if (isExistPath(targetLocation, files)) {
      store.dispatch(changeLocation(targetLocation));
      return '';
    } else {
      return ECommandMessages.NotADirectory;
    }
  },
};
