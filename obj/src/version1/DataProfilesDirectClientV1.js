"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class DataProfilesDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-dataprofiles", "controller", "*", "*", "*"));
    }
    getProfile(correlationId, profileId, callback) {
        let timing = this.instrument(correlationId, 'profiles.get_profile');
        this._controller.getProfile(correlationId, profileId, (err, profile) => {
            timing.endTiming();
            callback(err, profile);
        });
    }
    setProfile(correlationId, profile, callback) {
        let timing = this.instrument(correlationId, 'profiles.set_profile');
        this._controller.setProfile(correlationId, profile, (err, profile) => {
            timing.endTiming();
            callback(err, profile);
        });
    }
}
exports.DataProfilesDirectClientV1 = DataProfilesDirectClientV1;
//# sourceMappingURL=DataProfilesDirectClientV1.js.map