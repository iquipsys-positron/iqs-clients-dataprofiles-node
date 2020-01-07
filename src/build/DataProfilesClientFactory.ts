import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { DataProfilesNullClientV1 } from '../version1/DataProfilesNullClientV1';
import { DataProfilesMemoryClientV1 } from '../version1/DataProfilesMemoryClientV1';
import { DataProfilesDirectClientV1 } from '../version1/DataProfilesDirectClientV1';
import { DataProfilesHttpClientV1 } from '../version1/DataProfilesHttpClientV1';
import { DataProfilesLambdaClientV1 } from '../version1/DataProfilesLambdaClientV1';

export class DataProfilesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-dataprofiles', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-dataprofiles', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('iqs-services-dataprofiles', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-dataprofiles', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-dataprofiles', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-dataprofiles', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(DataProfilesClientFactory.NullClientV1Descriptor, DataProfilesNullClientV1);
		this.registerAsType(DataProfilesClientFactory.MemoryClientV1Descriptor, DataProfilesMemoryClientV1);
		this.registerAsType(DataProfilesClientFactory.DirectClientV1Descriptor, DataProfilesDirectClientV1);
		this.registerAsType(DataProfilesClientFactory.HttpClientV1Descriptor, DataProfilesHttpClientV1);
		this.registerAsType(DataProfilesClientFactory.LambdaClientV1Descriptor, DataProfilesLambdaClientV1);
	}
	
}
