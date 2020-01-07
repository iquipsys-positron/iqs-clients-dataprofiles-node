"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActuatorCommandAlgorithmV1_1 = require("./ActuatorCommandAlgorithmV1");
exports.StandardActuatorCommandTypesV1 = [
    // Playing signal on device
    {
        id: 1,
        name: 'sound_signal',
        algorithm: ActuatorCommandAlgorithmV1_1.ActuatorCommandAlgorithmV1.SoundSignal,
        value_type: 'int',
        min_value: 0,
        max_value: 4
    }
];
//# sourceMappingURL=StandardActuatorCommandTypesV1.js.map