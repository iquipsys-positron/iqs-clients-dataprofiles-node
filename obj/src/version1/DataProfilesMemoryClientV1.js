"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require('lodash');
const DataProfileV1_1 = require("./DataProfileV1");
const StandardSensorParameterTypesV1_1 = require("./StandardSensorParameterTypesV1");
const StandardSensorEventTypesV1_1 = require("./StandardSensorEventTypesV1");
const StandardActuatorCommandTypesV1_1 = require("./StandardActuatorCommandTypesV1");
const StandardSensorStateTypesV1_1 = require("./StandardSensorStateTypesV1");
class DataProfilesMemoryClientV1 {
    constructor() {
        this._profiles = [];
    }
    addStandardTypes(profile) {
        if (profile == null)
            return null;
        profile = _.clone(profile);
        profile.param_types = profile.param_types || [];
        profile.param_types.push(...StandardSensorParameterTypesV1_1.StandardSensorParameterTypesV1);
        profile.event_types = profile.event_types || [];
        profile.event_types.push(...StandardSensorEventTypesV1_1.StandardSensorEventTypesV1);
        profile.command_types = profile.command_types || [];
        profile.command_types.push(...StandardActuatorCommandTypesV1_1.StandardActuatorCommandTypesV1);
        profile.state_types = profile.state_types || [];
        profile.state_types.push(...StandardSensorStateTypesV1_1.StandardSensorStateTypesV1);
        return profile;
    }
    removeStandardTypes(profile) {
        if (profile == null)
            return null;
        profile = _.clone(profile);
        profile.param_types = _.filter(profile.param_types, p => p.id >= 100);
        profile.event_types = _.filter(profile.event_types, e => e.id >= 100);
        profile.command_types = _.filter(profile.command_types, c => c.id >= 100);
        profile.state_types = _.filter(profile.state_types, s => s.id >= 100);
        return profile;
    }
    getProfile(correlationId, profileId, callback) {
        let profile = _.find(this._profiles, p => p.id == profileId);
        if (profile == null) {
            profile = new DataProfileV1_1.DataProfileV1();
            profile.id = profileId;
        }
        profile = this.addStandardTypes(profile);
        callback(null, profile);
    }
    setProfile(correlationId, profile, callback) {
        this._profiles = _.filter(this._profiles, p => p.id != profile.id);
        let newProfile = this.removeStandardTypes(profile);
        this._profiles.push(newProfile);
        callback(null, profile);
    }
}
exports.DataProfilesMemoryClientV1 = DataProfilesMemoryClientV1;
//# sourceMappingURL=DataProfilesMemoryClientV1.js.map