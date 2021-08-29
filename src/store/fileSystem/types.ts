export interface IFileSystemState {
  files: IFile[];
}

export interface IFile {
  name: string;
  type: EFileType;
  location: string[];
  size?: string;
  children?: IFile[];
  createdAt?: string;
  modifiedAt?: string;
  author?: string;
}

export enum EFileType {
  File,
  Folder,
}
