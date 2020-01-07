import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { DataProfileV1 } from './DataProfileV1';
import { IDataProfilesClientV1 } from './IDataProfilesClientV1';
export declare class DataProfilesLambdaClientV1 extends CommandableLambdaClient implements IDataProfilesClientV1 {
    constructor(config?: any);
    getProfile(correlationId: string, profileId: string, callback: (err: any, profile: DataProfileV1) => void): void;
    setProfile(correlationId: string, profile: DataProfileV1, callback: (err: any, profile: DataProfileV1) => void): void;
}
