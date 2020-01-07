import { Descriptor } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IDataProfilesClientV1 } from './IDataProfilesClientV1';
//import { IDataProfilesController } from 'iqs-services-dataprofiles-node';
import { DataProfileV1 } from './DataProfileV1';

export class DataProfilesDirectClientV1 extends DirectClient<any> implements IDataProfilesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-dataprofiles", "controller", "*", "*", "*"))
    }

    public getProfile(correlationId: string, profileId: string, 
        callback: (err: any, profile: DataProfileV1) => void): void {
        let timing = this.instrument(correlationId, 'profiles.get_profile');
        this._controller.getProfile(correlationId, profileId, (err, profile) => {
            timing.endTiming();
            callback(err, profile);
        });
    }

    public setProfile(correlationId: string, profile: DataProfileV1, 
        callback: (err: any, profile: DataProfileV1) => void): void {
        let timing = this.instrument(correlationId, 'profiles.set_profile');
        this._controller.setProfile(correlationId, profile, (err, profile) => {
            timing.endTiming();
            callback(err, profile);
        });
    }

}