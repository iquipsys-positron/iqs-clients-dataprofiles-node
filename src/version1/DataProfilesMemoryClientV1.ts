const _ = require('lodash');

import { IDataProfilesClientV1 } from './IDataProfilesClientV1';
import { DataProfileV1 } from './DataProfileV1';

import { StandardSensorParameterTypesV1 } from './StandardSensorParameterTypesV1';
import { StandardSensorEventTypesV1 } from './StandardSensorEventTypesV1';
import { StandardActuatorCommandTypesV1 } from './StandardActuatorCommandTypesV1';
import { StandardSensorStateTypesV1 } from './StandardSensorStateTypesV1';

export class DataProfilesMemoryClientV1 implements IDataProfilesClientV1 {
    private _profiles: DataProfileV1[] = [];
    
    private addStandardTypes(profile: DataProfileV1): DataProfileV1 {
        if (profile == null) return null;

        profile = _.clone(profile);

        profile.param_types = profile.param_types || [];
        profile.param_types.push(...StandardSensorParameterTypesV1);

        profile.event_types = profile.event_types || [];
        profile.event_types.push(...StandardSensorEventTypesV1);

        profile.command_types = profile.command_types || [];
        profile.command_types.push(...StandardActuatorCommandTypesV1);

        profile.state_types = profile.state_types || [];
        profile.state_types.push(...StandardSensorStateTypesV1);

        return profile;
    }

    private removeStandardTypes(profile: DataProfileV1): DataProfileV1 {
        if (profile == null) return null;

        profile = _.clone(profile);

        profile.param_types = _.filter(profile.param_types, p => p.id >= 100);
        profile.event_types = _.filter(profile.event_types, e => e.id >= 100);
        profile.command_types = _.filter(profile.command_types, c => c.id >= 100);
        profile.state_types = _.filter(profile.state_types, s => s.id >= 100);

        return profile;
    }

    public getProfile(correlationId: string, profileId: string, 
        callback: (err: any, profile: DataProfileV1) => void): void {

        let profile = _.find(this._profiles, p => p.id == profileId);

        if (profile == null) {
            profile = new DataProfileV1();
            profile.id = profileId;
        }

        profile = this.addStandardTypes(profile);

        callback(null, profile);
    }

    public setProfile(correlationId: string, profile: DataProfileV1, 
        callback: (err: any, profile: DataProfileV1) => void): void {

        this._profiles = _.filter(this._profiles, p => p.id != profile.id);

        let newProfile = this.removeStandardTypes(profile);

        this._profiles.push(newProfile);

        callback(null, profile);
    }
}