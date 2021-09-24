import { ELocationActions } from './locationActions';
import { ILocationState } from './types';

const initialState: ILocationState = {
  current: [],
};

export const locationReducer = (state: ILocationState = initialState, action: any): ILocationState => {
  switch (action.type) {
    case ELocationActions.change:
      return { ...state, current: action.location };
    default:
      return state;
  }
};
