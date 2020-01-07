import { IDataProfilesClientV1 } from './IDataProfilesClientV1';
import { DataProfileV1 } from './DataProfileV1';
export declare class DataProfilesNullClientV1 implements IDataProfilesClientV1 {
    getProfile(correlationId: string, profileId: string, callback: (err: any, profile: DataProfileV1) => void): void;
    setProfile(correlationId: string, profile: DataProfileV1, callback: (err: any, profile: DataProfileV1) => void): void;
}
