export default class ConnectionData {
    static localConnectionType = 'init'; //TODO: set it to undefined instead of init prior to initialization
    static remoteConnectionType = 'init'; //TODO: set it to undefined instead of init prior to initialization
    
    static getLocalConnectionType() {
        return ConnectionData.localConnectionType;
    }
    
    static setLocalConnectionType(type) {
        ConnectionData.localConnectionType = type
    }

    static getRemoteConnectionType() {
        return ConnectionData.remoteConnectionType;
    }
    
    static setRemoteConnectionType(type) {
        ConnectionData.remoteConnectionType = type
    }
    
}