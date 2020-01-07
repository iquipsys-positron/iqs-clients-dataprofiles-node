"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class DataProfilesHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/data_profiles');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getProfile(correlationId, profileId, callback) {
        this.callCommand('get_profile', correlationId, {
            profile_id: profileId
        }, callback);
    }
    setProfile(correlationId, profile, callback) {
        this.callCommand('set_profile', correlationId, {
            profile: profile
        }, callback);
    }
}
exports.DataProfilesHttpClientV1 = DataProfilesHttpClientV1;
//# sourceMappingURL=DataProfilesHttpClientV1.js.map