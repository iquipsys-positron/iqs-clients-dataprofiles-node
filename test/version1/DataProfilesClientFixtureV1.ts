let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { DataProfileV1 } from '../../src/version1/DataProfileV1';
import { IDataProfilesClientV1 } from '../../src/version1/IDataProfilesClientV1';

let PROFILE: DataProfileV1 = {
    id: '1',
    param_types: [{
        id: 100,
        name: 'Param 1',
        algorithm: 'custom',
        value_type: 'float'
    }],
    event_types: [{
        id: 100,
        name: 'Event 1',
        algorithm: 'custom',
        value_type: 'float'
    }],
    command_types: [{
        id: 100,
        name: 'Command 1',
        algorithm: 'custom',
        value_type: 'float'
    }],
    state_types: [{
        id: 100,
        name: 'State 1',
        algorithm: 'custom'
    }]
};

export class DataProfilesClientFixtureV1 {
    private _client: IDataProfilesClientV1;
    
    constructor(client: IDataProfilesClientV1) {
        this._client = client;
    }

    public testGetAndSetProfiles(done) {
        async.series([
            // Get default data profile
            (callback) => {
                this._client.getProfile(
                    null,
                    PROFILE.id,
                    (err, profile) => {
                        assert.isNull(err);
    
                        assert.equal(profile.id, PROFILE.id);
                        assert.isTrue(profile.param_types.length >= 1);
                        assert.isTrue(profile.event_types.length >= 1);
                        assert.isTrue(profile.command_types.length >= 1);
                        assert.isTrue(profile.state_types.length >= 1);
    
                        callback();
                    }
                );
            },
            // Set data profile
                (callback) => {
                    this._client.setProfile(
                        null,
                        PROFILE,
                        (err, profile) => {
                            assert.isNull(err);
    
                            assert.equal(profile.id, PROFILE.id);
                            assert.isTrue(profile.param_types.length > 1);
                            assert.isTrue(profile.event_types.length > 1);
                            assert.isTrue(profile.command_types.length > 1);
                            assert.isTrue(profile.state_types.length > 1);
        
                            callback();
                        }
                    );
                },
            // Read and check data profile
                (callback) => {
                    this._client.getProfile(
                        null,
                        PROFILE.id,
                        (err, profile) => {
                            assert.isNull(err);
    
                            assert.equal(profile.id, PROFILE.id);
                            assert.isTrue(profile.param_types.length > 1);
                            assert.isTrue(profile.event_types.length > 1);
                            assert.isTrue(profile.command_types.length > 1);
                            assert.isTrue(profile.state_types.length > 1);
    
                            callback();
                        }
                    );
                }
        ], done);
    }
}
