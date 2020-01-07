import { IStringIdentifiable } from 'pip-services3-commons-node';
import { SensorParameterTypeV1 } from './SensorParameterTypeV1';
import { SensorEventTypeV1 } from './SensorEventTypeV1';
import { ActuatorCommandTypeV1 } from './ActuatorCommandTypeV1';
import { SensorStateTypeV1 } from './SensorStateTypeV1';
export declare class DataProfileV1 implements IStringIdentifiable {
    id: string;
    param_types?: SensorParameterTypeV1[];
    event_types?: SensorEventTypeV1[];
    command_types?: ActuatorCommandTypeV1[];
    state_types?: SensorStateTypeV1[];
}
