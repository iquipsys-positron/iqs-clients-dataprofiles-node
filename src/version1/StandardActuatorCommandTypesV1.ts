import { ActuatorCommandTypeV1 } from './ActuatorCommandTypeV1';
import { ActuatorCommandAlgorithmV1 } from './ActuatorCommandAlgorithmV1';

export const StandardActuatorCommandTypesV1: ActuatorCommandTypeV1[] = [
    // Playing signal on device
    {
        id: 1,
        name: 'sound_signal',
        algorithm: ActuatorCommandAlgorithmV1.SoundSignal,
        value_type: 'int',
        min_value: 0,
        max_value: 4
    }
];