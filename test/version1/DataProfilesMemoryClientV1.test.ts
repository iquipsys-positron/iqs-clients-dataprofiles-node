import { DataProfilesMemoryClientV1 } from '../../src/version1/DataProfilesMemoryClientV1';
import { DataProfilesClientFixtureV1 } from './DataProfilesClientFixtureV1';

suite('DataProfilesMemoryClientV1', ()=> {
    let client: DataProfilesMemoryClientV1;
    let fixture: DataProfilesClientFixtureV1;

    suiteSetup(() => {
        client = new DataProfilesMemoryClientV1();

        fixture = new DataProfilesClientFixtureV1(client);
    });
    
    test('Get And Set Profiles', (done) => {
        fixture.testGetAndSetProfiles(done);
    });

});
