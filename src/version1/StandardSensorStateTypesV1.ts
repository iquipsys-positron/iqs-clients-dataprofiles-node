import { SensorStateTypeV1 } from './SensorStateTypeV1';
import { SensorStateAlgorithmV1 } from './SensorStateAlgorithmV1';

export const StandardSensorStateTypesV1: SensorStateTypeV1[] = [
    // Powered
    {
        id: 1,
        name: 'Powered',
        algorithm: SensorStateAlgorithmV1.Duration,
        param_id: 3
    },
    // Freezed
    {
        id: 2,
        name: 'Freezed',
        algorithm: SensorStateAlgorithmV1.Duration,
        param_id: 4
    },
    // Immobile
    {
        id: 3,
        name: 'Immobile',
        algorithm: SensorStateAlgorithmV1.Utilization,
        param_id: 5
    },
    // Loaded
    {
        id: 4,
        name: 'Loaded',
        algorithm: SensorStateAlgorithmV1.Utilization,
        param_id: 6,
        value_min: 50
    }
];