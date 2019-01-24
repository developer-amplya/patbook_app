export default {
    getUserName(state) {
        return (state.user_name);
    },
    getUserID(state) {
        return (state.user_id);
    },
    getDeviceCode(state) {
        return (state.device_code);
    },
    getDocumentCounting(state) {
        return (state.document_counting);
    },
    getMainColor(state) {
        return (state.current_main_color);
    }
};