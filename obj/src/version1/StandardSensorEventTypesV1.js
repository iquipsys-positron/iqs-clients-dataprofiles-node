"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SensorEventAlgorithmV1_1 = require("./SensorEventAlgorithmV1");
exports.StandardSensorEventTypesV1 = [
    // Button 1 short pressed
    {
        id: 1,
        name: 'Button1 short pressed',
        algorithm: SensorEventAlgorithmV1_1.SensorEventAlgorithmV1.Custom,
        value_type: 'bool'
    },
    // Button 1 long pressed
    {
        id: 2,
        name: 'Button1 long pressed',
        algorithm: SensorEventAlgorithmV1_1.SensorEventAlgorithmV1.Custom,
        value_type: 'bool'
    },
    // Button 2 short pressed
    {
        id: 3,
        name: 'Button2 short pressed',
        algorithm: SensorEventAlgorithmV1_1.SensorEventAlgorithmV1.Custom,
        value_type: 'bool'
    },
    // Button 2 long pressed
    {
        id: 4,
        name: 'Button2 long pressed',
        algorithm: SensorEventAlgorithmV1_1.SensorEventAlgorithmV1.Custom,
        value_type: 'bool'
    },
    // Button 3 pressed
    {
        id: 5,
        name: 'Button3 pressed',
        algorithm: SensorEventAlgorithmV1_1.SensorEventAlgorithmV1.Custom,
        value_type: 'bool'
    },
    // Button 4 pressed
    {
        id: 6,
        name: 'Button4 pressed',
        algorithm: SensorEventAlgorithmV1_1.SensorEventAlgorithmV1.Custom,
        value_type: 'bool'
    }
];
//# sourceMappingURL=StandardSensorEventTypesV1.js.map