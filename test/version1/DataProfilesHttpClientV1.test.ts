let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { DataProfilesMemoryPersistence } from 'iqs-services-dataprofiles-node';
import { DataProfilesController } from 'iqs-services-dataprofiles-node';
import { DataProfilesHttpServiceV1 } from 'iqs-services-dataprofiles-node';
import { IDataProfilesClientV1 } from '../../src/version1/IDataProfilesClientV1';
import { DataProfilesHttpClientV1 } from '../../src/version1/DataProfilesHttpClientV1';
import { DataProfilesClientFixtureV1 } from './DataProfilesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('DataProfilesRestClientV1', ()=> {
    let service: DataProfilesHttpServiceV1;
    let client: DataProfilesHttpClientV1;
    let fixture: DataProfilesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new DataProfilesMemoryPersistence();
        let controller = new DataProfilesController();

        service = new DataProfilesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-dataprofiles', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-dataprofiles', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-dataprofiles', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new DataProfilesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new DataProfilesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('Get And Set Profiles', (done) => {
        fixture.testGetAndSetProfiles(done);
    });

});
