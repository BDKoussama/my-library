const navReducer = (state = { toggle : false  , toggleProfile : false} , action ) => {
    switch (action.type) {
        case 'MENU_ICON_TOGGLED':
            return {
                ...state,
                toggle : !state.toggle
            };
            break;
        case 'MOBILE_PROFILE_TRIGGER':
            const {toggle , toggleProfile} = state ;
            return {
                ...state , 
                toggle : !toggle,
                toggleProfile : toggleProfile ? toggleProfile : !toggleProfile
            } ;
        case 'RESET_STATE':
            return{
                ...state,
                toggle : false ,
                toggleProfile: false
            }
        default:
            return state ; 
            break;
    }
};


export default navReducer;