export const toggleMenu = () => {
    return (dispatch , getState , {axios} ) => {
        dispatch({type : 'MENU_ICON_TOGGLED'});
    }
}

export const profileToggle = () => {
    return (dispatch , getState ) => {
        dispatch({ type : 'MOBILE_PROFILE_TRIGGER' });
    }
}

export const resetStats = () => {
    return ( dispatch , getState ) => {
        dispatch({ type : 'RESET_STATE' });
    }
}

