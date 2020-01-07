import { DataProfileV1 } from './DataProfileV1';
export interface IDataProfilesClientV1 {
    getProfile(correlationId: string, profile_id: string, callback: (err: any, profile: DataProfileV1) => void): void;
    setProfile(correlationId: string, profile: DataProfileV1, callback: (err: any, profile: DataProfileV1) => void): void;
}
