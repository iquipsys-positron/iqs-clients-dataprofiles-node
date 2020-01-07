import { DirectClient } from 'pip-services3-rpc-node';
import { IDataProfilesClientV1 } from './IDataProfilesClientV1';
import { DataProfileV1 } from './DataProfileV1';
export declare class DataProfilesDirectClientV1 extends DirectClient<any> implements IDataProfilesClientV1 {
    constructor();
    getProfile(correlationId: string, profileId: string, callback: (err: any, profile: DataProfileV1) => void): void;
    setProfile(correlationId: string, profile: DataProfileV1, callback: (err: any, profile: DataProfileV1) => void): void;
}
