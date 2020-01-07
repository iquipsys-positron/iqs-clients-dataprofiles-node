import { IDataProfilesClientV1 } from './IDataProfilesClientV1';
import { DataProfileV1 } from './DataProfileV1';

export class DataProfilesNullClientV1 implements IDataProfilesClientV1 {
            
    public getProfile(correlationId: string, profileId: string, 
        callback: (err: any, profile: DataProfileV1) => void): void {
        callback(null, null);
    }

    public setProfile(correlationId: string, profile: DataProfileV1, 
        callback: (err: any, profile: DataProfileV1) => void): void {
        callback(null, profile);
    }
}