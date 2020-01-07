"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class DataProfilesLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('data_profiles');
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
exports.DataProfilesLambdaClientV1 = DataProfilesLambdaClientV1;
//# sourceMappingURL=DataProfilesLambdaClientV1.js.map