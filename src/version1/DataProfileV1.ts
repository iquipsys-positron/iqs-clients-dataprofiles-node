import { IStringIdentifiable } from 'pip-services3-commons-node';

import { SensorParameterTypeV1 } from './SensorParameterTypeV1';
import { SensorEventTypeV1 } from './SensorEventTypeV1';
import { ActuatorCommandTypeV1 } from './ActuatorCommandTypeV1';
import { SensorStateTypeV1 } from './SensorStateTypeV1';

export class DataProfileV1 implements IStringIdentifiable {
    public id: string;
    public param_types?: SensorParameterTypeV1[];
    public event_types?: SensorEventTypeV1[];
    public command_types?: ActuatorCommandTypeV1[];
    public state_types?: SensorStateTypeV1[];
}