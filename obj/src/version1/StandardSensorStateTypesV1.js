"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SensorStateAlgorithmV1_1 = require("./SensorStateAlgorithmV1");
exports.StandardSensorStateTypesV1 = [
    // Powered
    {
        id: 1,
        name: 'Powered',
        algorithm: SensorStateAlgorithmV1_1.SensorStateAlgorithmV1.Duration,
        param_id: 3
    },
    // Freezed
    {
        id: 2,
        name: 'Freezed',
        algorithm: SensorStateAlgorithmV1_1.SensorStateAlgorithmV1.Duration,
        param_id: 4
    },
    // Immobile
    {
        id: 3,
        name: 'Immobile',
        algorithm: SensorStateAlgorithmV1_1.SensorStateAlgorithmV1.Utilization,
        param_id: 5
    },
    // Loaded
    {
        id: 4,
        name: 'Loaded',
        algorithm: SensorStateAlgorithmV1_1.SensorStateAlgorithmV1.Utilization,
        param_id: 6,
        value_min: 50
    }
];
//# sourceMappingURL=StandardSensorStateTypesV1.js.map