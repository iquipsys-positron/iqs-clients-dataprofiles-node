import { SensorParameterTypeV1 } from './SensorParameterTypeV1';
import { SensorParameterAlgorithmV1 } from './SensorParameterAlgorithmV1';

export const StandardSensorParameterTypesV1: SensorParameterTypeV1[] = [
    // Travel distance
    {
        id: 1,
        name: 'Travel distance',
        algorithm: SensorParameterAlgorithmV1.Count,
        value_type: 'float',
        value_unit: 'km'
    },
    // Travel speed
    {
        id: 2,
        name: 'Travel speed',
        algorithm: SensorParameterAlgorithmV1.Statistics,
        value_type: 'float',
        value_unit: 'km/h'
    },
    // Powered
    {
        id: 3,
        name: 'Powered',
        algorithm: SensorParameterAlgorithmV1.Custom,
        value_type: 'bool'
    },
    // Freezed
    {
        id: 4,
        name: 'Freezed',
        algorithm: SensorParameterAlgorithmV1.Custom,
        value_type: 'bool'
    },
    // Immobile
    {
        id: 5,
        name: 'Immobile',
        algorithm: SensorParameterAlgorithmV1.Custom,
        value_type: 'bool'
    },
    // Load level
    {
        id: 6,
        name: 'Load level',
        algorithm: SensorParameterAlgorithmV1.Transport,
        value_type: 'float',
        value_unit: 'kg',
        min_value: 0,
    },
    // Gas level
    {
        id: 7,
        name: 'Gas level',
        algorithm: SensorParameterAlgorithmV1.Consumption,
        value_type: 'float',
        value_unit: 'l',
        min_value: 0
    }
];