let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { DataProfileV1 } from './DataProfileV1';
import { IDataProfilesClientV1 } from './IDataProfilesClientV1';

export class DataProfilesLambdaClientV1 extends CommandableLambdaClient implements IDataProfilesClientV1 {       

    constructor(config?: any) {
        super('data_profiles');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getProfile(correlationId: string, profileId: string,
        callback: (err: any, profile: DataProfileV1) => void): void {
        this.callCommand( 
            'get_profile',
            correlationId,
            {
                profile_id: profileId
            }, 
            callback
        );        
    }

    public setProfile(correlationId: string, profile: DataProfileV1,
        callback: (err: any, profile: DataProfileV1) => void): void {
        this.callCommand(
            'set_profile',
            correlationId,
            {
                profile: profile
            }, 
            callback
        );
    }
    
}
