export default class ConnectionData {
    static getLocalConnectionType() {
        return ConnectionData.localConnectionType;
    }
    static setLocalConnectionType(type) {
        ConnectionData.localConnectionType = type;
    }
    static getRemoteConnectionType() {
        return ConnectionData.remoteConnectionType;
    }
    static setRemoteConnectionType(type) {
        ConnectionData.remoteConnectionType = type;
    }
}
ConnectionData.localConnectionType = 'init'; //TODO: set it to undefined instead of init prior to initialization
ConnectionData.remoteConnectionType = 'init'; //TODO: set it to undefined instead of init prior to initialization
//# sourceMappingURL=connectionData.js.map