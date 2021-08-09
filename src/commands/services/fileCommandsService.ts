import store from '../../store';
import { createFile } from '../../store/fileSystem/fileSystemActions';
import { EFileType } from '../../store/fileSystem/types';

export const FileCommandsService = {
  mkdir: (argument: string[]): string => {
    if (!argument.length) return '';
    if (argument.length > 1) return 'Invalid command argument';

    const fileName = argument[0];
    store.dispatch(createFile({ name: fileName, type: EFileType.Folder, location: '' }));

    return 'Folder ' + fileName + ' created';
  },
};
