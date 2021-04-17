import {Action, Reducer, Dispatch} from "redux";

export interface InitialState {
    username: string,
  
}

export const initialState: InitialState = {
    username: 'guest',
};

export interface DispatchAction extends Action<ActionType> {
    payload: Partial<InitialState>;
}

export enum ActionType {
    LogIn,
    LogOut,
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (state = initialState, action) => {
    if (action.type === ActionType.LogIn) {
        return {...state, username: action.payload.username||"guest"};
    } else if (action.type === ActionType.LogOut) {
        return {...state, username: 'guest'};
    } else return state;
};

export class RootDispatcher {
    
    private readonly dispatch: Dispatch<DispatchAction>;
    
    constructor(dispatch: Dispatch<DispatchAction>){
        this.dispatch = dispatch; 
    }
   // updateLanguage = () => this.dispatch({type: ActionType.UpdateLanguage, payload: {}});
    userLogIn = (user:string) => this.dispatch({ type: ActionType.LogIn, payload: {username:user} });
    userLogOut= () => this.dispatch({ type: ActionType.LogOut, payload: {}});

}