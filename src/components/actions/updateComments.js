
const updateComments = (callback) => {

    return {
        type: 'UPDATE_COMMENTS',
        payload: callback()
    }
}
export default updateComments;