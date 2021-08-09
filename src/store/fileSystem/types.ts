export interface IFileSystemState {
  home: IFile[];
}

export interface IFile {
  name: string;
  type: EFileType;
  size: string;
  children?: IFile[];
  location: string;
}

export enum EFileType {
  File,
  Folder,
}
