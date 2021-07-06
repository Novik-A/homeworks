import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case "sort": {
            const newState = [...state].sort((a,b) => {
                if (a.age > b.age) return 1
                else if (a.age < b.age) return -1
                else return 0
            })
            return action.payload === 'up'? newState : newState.reverse()
        }
        case "check":
            return state.filter(u => u.age >= 18)
        default: return state
    }
};

type ActionType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | 18
}