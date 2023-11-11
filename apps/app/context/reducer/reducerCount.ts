
export type CountState = { count: number; }
export type CountActionName = 'INCREMENT' | 'DECREMENT' | 'RESET'

export type StateType = { count: number; }
export type ActionType = { type: CountActionName; }

export type ChangeState = (state: StateType) => StateType
export type Actions = { [k in CountActionName]: ChangeState }

const changeCount = (inc: number): ChangeState => (state) =>
    ({ ...state, count: !inc ? 0 : state.count + inc })

const actions: Actions = {
    'INCREMENT': changeCount(1),
    'DECREMENT': changeCount(-1),
    'RESET': changeCount(0)
}

export const reducerCount = (state: CountState, action: ActionType) => actions[action.type](state)
