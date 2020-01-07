let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { DataProfilesMemoryPersistence } from 'iqs-services-dataprofiles-node';
import { DataProfilesController } from 'iqs-services-dataprofiles-node';
import { IDataProfilesClientV1 } from '../../src/version1/IDataProfilesClientV1';
import { DataProfilesDirectClientV1 } from '../../src/version1/DataProfilesDirectClientV1';
import { DataProfilesClientFixtureV1 } from './DataProfilesClientFixtureV1';

suite('DataProfilesDirectClientV1', ()=> {
    let client: DataProfilesDirectClientV1;
    let fixture: DataProfilesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new DataProfilesMemoryPersistence();
        let controller = new DataProfilesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-dataprofiles', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-dataprofiles', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new DataProfilesDirectClientV1();
        client.setReferences(references);

        fixture = new DataProfilesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('Get And Set Profiles', (done) => {
        fixture.testGetAndSetProfiles(done);
    });

});
