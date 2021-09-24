import { IFile } from './types';

export enum EFileSystemActions {
  create = 'CREATE_FILE',
  update = 'UPDATE_FILE',
  delete = 'DELETE_FILE',
}

export const createFile = (file: IFile) => ({
  type: EFileSystemActions.create,
  file,
});

export const updateFile = (file: IFile) => ({
  type: EFileSystemActions.update,
  file,
});

export const deleteFile = (file: IFile) => ({
  type: EFileSystemActions.delete,
  file,
});
