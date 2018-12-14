const navReducer = (state = { toggle : false } , action ) => {
    switch (action.type) {
        case 'MENU_ICON_TOGGLED':
            return {
                ...state,
                toggle : !state.toggle
            };
            break;
        default:
            return state ; 
            break;
    }
};


export default navReducer;