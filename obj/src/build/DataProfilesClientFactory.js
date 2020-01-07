"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const DataProfilesNullClientV1_1 = require("../version1/DataProfilesNullClientV1");
const DataProfilesMemoryClientV1_1 = require("../version1/DataProfilesMemoryClientV1");
const DataProfilesDirectClientV1_1 = require("../version1/DataProfilesDirectClientV1");
const DataProfilesHttpClientV1_1 = require("../version1/DataProfilesHttpClientV1");
const DataProfilesLambdaClientV1_1 = require("../version1/DataProfilesLambdaClientV1");
class DataProfilesClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(DataProfilesClientFactory.NullClientV1Descriptor, DataProfilesNullClientV1_1.DataProfilesNullClientV1);
        this.registerAsType(DataProfilesClientFactory.MemoryClientV1Descriptor, DataProfilesMemoryClientV1_1.DataProfilesMemoryClientV1);
        this.registerAsType(DataProfilesClientFactory.DirectClientV1Descriptor, DataProfilesDirectClientV1_1.DataProfilesDirectClientV1);
        this.registerAsType(DataProfilesClientFactory.HttpClientV1Descriptor, DataProfilesHttpClientV1_1.DataProfilesHttpClientV1);
        this.registerAsType(DataProfilesClientFactory.LambdaClientV1Descriptor, DataProfilesLambdaClientV1_1.DataProfilesLambdaClientV1);
    }
}
exports.DataProfilesClientFactory = DataProfilesClientFactory;
DataProfilesClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-dataprofiles', 'factory', 'default', 'default', '1.0');
DataProfilesClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-dataprofiles', 'client', 'null', 'default', '1.0');
DataProfilesClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-dataprofiles', 'client', 'memory', 'default', '1.0');
DataProfilesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-dataprofiles', 'client', 'direct', 'default', '1.0');
DataProfilesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-dataprofiles', 'client', 'http', 'default', '1.0');
DataProfilesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-dataprofiles', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=DataProfilesClientFactory.js.map