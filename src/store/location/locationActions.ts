export enum ELocationActions {
  change = 'CHANGE_LOCATION',
}

export const changeLocation = (location: string[]) => ({
  type: ELocationActions.change,
  location,
});
