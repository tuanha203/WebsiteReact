
const updateUsers = (callback) => {

    return {
        type: 'UPDATE_USERS',
        payload: callback()
    }
}
export default updateUsers;