import { ConfigParams } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { DataProfileV1 } from './DataProfileV1';
import { IDataProfilesClientV1 } from './IDataProfilesClientV1';

export class DataProfilesHttpClientV1 extends CommandableHttpClient implements IDataProfilesClientV1 {       
    
    constructor(config?: any) {
        super('v1/data_profiles');

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
