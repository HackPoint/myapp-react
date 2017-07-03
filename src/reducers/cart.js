export default(state = [], payload) => {
    switch (payload.type) {
        case 'add':
            return [...state, payload.item];
        case 'remove':
            return  state.filter(item => item.id !== payload.id);// [...state.items.slice(0, payload.item)]
        default:
            return state;
    }
};
