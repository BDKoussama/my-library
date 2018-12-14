export const toggleMenu = () => {
    return (dispatch , getState  ) => {
        dispatch({type : 'MENU_ICON_TOGGLED'})
    }
}
