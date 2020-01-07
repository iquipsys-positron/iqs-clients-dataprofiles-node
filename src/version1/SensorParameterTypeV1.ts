export class SensorParameterTypeV1 {
    public id: number;
    public name: string;
    public algorithm: string;
    public value_type: string;
    public value_unit?: string;
    public min_value?: number;
    public max_value?: number;
}