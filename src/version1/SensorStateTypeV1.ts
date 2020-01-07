export class SensorStateTypeV1 {
    public id: number;
    public name: string;
    public algorithm: string;
    public param_id?: number;
    public command_id?: number;
    public event_id?: number;
    public on_event_id?: number;
    public off_event_id?: number;
    public value_min?: number;
    public value_max?: number;
}