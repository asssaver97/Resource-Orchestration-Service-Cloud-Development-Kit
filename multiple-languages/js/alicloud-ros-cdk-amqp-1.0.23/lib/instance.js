"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const amqp_generated_1 = require("./amqp.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return amqp_generated_1.RosInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AMQP::Instance`, which is used to create an ApsaraMQ for RabbitMQ instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-instance
 */
class Instance extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosInstance = new amqp_generated_1.RosInstance(this, id, {
            maxTps: props.maxTps,
            maxEipTps: props.maxEipTps,
            supportEip: props.supportEip,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            storageSize: props.storageSize,
            payType: props.payType === undefined || props.payType === null ? 'Subscription' : props.payType,
            queueCapacity: props.queueCapacity,
            tracingStorageTime: props.tracingStorageTime,
            instanceName: props.instanceName,
            orderNum: props.orderNum === undefined || props.orderNum === null ? 1 : props.orderNum,
            supportTracing: props.supportTracing,
            instanceType: props.instanceType,
            periodUnit: props.periodUnit === undefined || props.periodUnit === null ? 'Month' : props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrClassicEndpoint = rosInstance.attrClassicEndpoint;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrPrivateEndpoint = rosInstance.attrPrivateEndpoint;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMscURBQStDO0FBRXZCLGlHQUZmLDRCQUFXLE9BRW9CO0FBeUZ4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFxQnRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFdBQVcsR0FBRyxJQUFJLDRCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDOUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTztZQUMvRixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ3RGLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVO1NBQ3ZHLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUMsbUJBQW1CLENBQUM7UUFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ2pELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUMsbUJBQW1CLENBQUM7SUFDL0QsQ0FBQztDQUNKO0FBckRELDRCQXFEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0luc3RhbmNlIH0gZnJvbSAnLi9hbXFwLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0luc3RhbmNlIGFzIEluc3RhbmNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBJbnN0YW5jZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hbXFwLWluc3RhbmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZVR5cGU6IFRoZSBJbnN0YW5jZSBUeXBlLiBWYWxpZCB2YWx1ZXM6IHByb2Zlc3Npb25hbCwgZW50ZXJwcmlzZSwgdmlwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWF4VHBzOiBJZiBpbnN0YW5jZSB0eXBlIGlzIHByb2Zlc3Npb25hbCwgdGhlIHZhbGlkIHZhbHVlIGlzIFsxMDAwLCAxNTAwLCAyMDAwLCAyNTAwLCAzMDAwLCA0MDAwLCA1MDAwXS5cbiAgICAgKiBJZiBpbnN0YW5jZSB0eXBlIGlzIGVudGVycHJpc2UsIHRoZSB2YWxpZCB2YWx1ZSBpcyBbMzAwMCwgNTAwMCwgODAwMCwgMTAwMDAsIDE1MDAwLCAyMDAwMCwgMzAwMDA0MDAwMCwgNTAwMDAsIDgwMDAwLCAxMDAwMF0uXG4gICAgICogSWYgaW5zdGFuY2UgdHlwZSBpcyB2aXAsIHRoZSB2YWxpZCB2YWx1ZSBpcyBbODAwMCwgMTUwMDAsIDI1MDAwLCA0MDAwMCwgNTAwMDAsIDEwMDAwMCwgMjAwMDAwLCAzMDAwMDAsIDUwMDAwMCwgODAwMDAwLCAxMDAwMDAwXS5cbiAgICAgKlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1heFRwczogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcXVldWVDYXBhY2l0eTogVGhlIHF1ZXVlIGNhcGFjaXR5LiBJZiBpbnN0YW5jZSB0eXBlIGlzIHByb2Zlc3Npb25hbCwgdGhlIHZhbGlkIHZhbHVlIGlzIFs1MCwgMTAwMF0gd2l0aCB0aGUgc3RlcCBzaXplIDUuXG4gICAgICogSWYgaW5zdGFuY2UgdHlwZSBpcyBlbnRlcnByaXNlLCB0aGUgdmFsaWQgdmFsdWUgaXMgWzIwMCwgNjAwMF0gd2l0aCB0aGUgc3RlcCBzaXplIDEwMFxuICAgICAqIElmIGluc3RhbmNlIHR5cGUgaXMgdmlwLCB0aGUgdmFsaWQgdmFsdWUgaXMgWzIwMCwgODAwMDBdIHdpdGggdGhlIHN0ZXAgc2l6ZSAxMDBcbiAgICAgKi9cbiAgICByZWFkb25seSBxdWV1ZUNhcGFjaXR5OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzdG9yYWdlU2l6ZTogVGhlIHN0b3JhZ2Ugc2l6ZS4gSXQgaXMgdmFsaWQgd2hlbiBpbnN0YW5jZV90eXBlIGlzIHZpcC5cbiAgICAgKiBJZiBpbnN0YW5jZSB0eXBlIGlzIHByb2Zlc3Npb25hbCBvciBlbnRlcnByaXNlLCB0aGUgdmFsaWQgdmFsdWUgaXMgMC5JZiBpbnN0YW5jZSB0eXBlIGlzIHZpcCwgdGhlIHZhbGlkIHZhbHVlIGlzIFs3MDAsIDI4MDBdIHdpdGggdGhlIHN0ZXAgc2l6ZSAxMDBcbiAgICAgKi9cbiAgICByZWFkb25seSBzdG9yYWdlU2l6ZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBUaGUgaW5zdGFuY2UgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXhFaXBUcHM6IFRoZSBtYXggZWlwIHRwcy4gSXQgaXMgdmFsaWQgd2hlbiBzdXBwb3J0X2VpcCBpcyB0cnVlLiBcbiAgICAgKiBUaGUgbWluaW11bSB2YWx1ZSBpcyAxMjgsIHdpdGggdGhlIHN0ZXAgc2l6ZSAxMjguXG4gICAgICpcbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhFaXBUcHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBvcmRlck51bTogU2V0IHRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIHRvIGJlIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3JkZXJOdW0/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXlUeXBlOiBUaGUgYmlsbGluZyBtZXRob2Qgb2YgdGhlIGluc3RhbmNlLiBUaGUgTWVzc2FnZSBRdWV1ZSBSYWJiaXRNUSB2ZXJzaW9uIGRvZXMgbm90IHN1cHBvcnQgbmV3IHBheS1hcy15b3UtZ28gaW5zdGFuY2VzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogUHJlUGFpZDogc3Vic2NyaXB0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGF5VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZDogVGhlIHBlcmlvZC4gVmFsaWQgdmFsdWVzOiAxLCAyLCAzLCA2LCAxMiwgMjQsIDM2LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZFVuaXQ6IFRoZSB1bml0IG9mIHRoZSBzdWJzY3JpcHRpb24gZHVyYXRpb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiBNb250aFxuICAgICAqIFllYXJcbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBNb250aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2RVbml0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3VwcG9ydEVpcDogV2hldGhlciB0byBzdXBwb3J0IEVJUC4gVmFsaWQgdmFsdWVzOiB0cnVlLCBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdXBwb3J0RWlwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3VwcG9ydFRyYWNpbmc6IFdoZXRoZXIgdG8gc3VwcG9ydCB0cmFjaW5nLiBWYWxpZCB2YWx1ZXM6IHRydWUsIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN1cHBvcnRUcmFjaW5nPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHJhY2luZ1N0b3JhZ2VUaW1lOiBUaGUgcmV0ZW50aW9uIHBlcmlvZCBvZiBtZXNzYWdlIHRyYWNlcyB3YXMgc2V0LiBWYWxpZCB2YWx1ZXM6IDMsIDcsIDE1LlxuICAgICAqIElmIGluc3RhbmNlX3R5cGU9dmlwLCB0aGUgdmFsaWQgdmFsdWVzIGlzIDE1LlxuICAgICAqIElmIGluc3RhbmNlX3R5cGUhPXZpcCwgdGhlIHZhbGlkIHZhbHVlcyBpcyAzLCA3LCAxNS5cbiAgICAgKiBJZiBzdXBwb3J0X3RyYWNpbmcgPT0gdHJhY2luZ19mYWxzZSwgdGhlIHZhbGlkIHZhbHVlcyBpcyAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYWNpbmdTdG9yYWdlVGltZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6QU1RUDo6SW5zdGFuY2VgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhbiBBcHNhcmFNUSBmb3IgUmFiYml0TVEgaW5zdGFuY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NJbnN0YW5jZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFtcXAtaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBJbnN0YW5jZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbGFzc2ljRW5kcG9pbnQ6IFRoZSBjbGFzc2ljIGVuZHBvaW50IG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsYXNzaWNFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJpdmF0ZUVuZHBvaW50OiBUaGUgcHJpdmF0ZSBlbmRwb2ludCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcml2YXRlRW5kcG9pbnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJbnN0YW5jZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zSW5zdGFuY2UgPSBuZXcgUm9zSW5zdGFuY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBtYXhUcHM6IHByb3BzLm1heFRwcyxcbiAgICAgICAgICAgIG1heEVpcFRwczogcHJvcHMubWF4RWlwVHBzLFxuICAgICAgICAgICAgc3VwcG9ydEVpcDogcHJvcHMuc3VwcG9ydEVpcCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kID09PSB1bmRlZmluZWQgfHwgcHJvcHMucGVyaW9kID09PSBudWxsID8gMSA6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIHN0b3JhZ2VTaXplOiBwcm9wcy5zdG9yYWdlU2l6ZSxcbiAgICAgICAgICAgIHBheVR5cGU6IHByb3BzLnBheVR5cGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5wYXlUeXBlID09PSBudWxsID8gJ1N1YnNjcmlwdGlvbicgOiBwcm9wcy5wYXlUeXBlLFxuICAgICAgICAgICAgcXVldWVDYXBhY2l0eTogcHJvcHMucXVldWVDYXBhY2l0eSxcbiAgICAgICAgICAgIHRyYWNpbmdTdG9yYWdlVGltZTogcHJvcHMudHJhY2luZ1N0b3JhZ2VUaW1lLFxuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiBwcm9wcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgICBvcmRlck51bTogcHJvcHMub3JkZXJOdW0gPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5vcmRlck51bSA9PT0gbnVsbCA/IDEgOiBwcm9wcy5vcmRlck51bSxcbiAgICAgICAgICAgIHN1cHBvcnRUcmFjaW5nOiBwcm9wcy5zdXBwb3J0VHJhY2luZyxcbiAgICAgICAgICAgIGluc3RhbmNlVHlwZTogcHJvcHMuaW5zdGFuY2VUeXBlLFxuICAgICAgICAgICAgcGVyaW9kVW5pdDogcHJvcHMucGVyaW9kVW5pdCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBlcmlvZFVuaXQgPT09IG51bGwgPyAnTW9udGgnIDogcHJvcHMucGVyaW9kVW5pdCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5hdHRyQ2xhc3NpY0VuZHBvaW50ID0gcm9zSW5zdGFuY2UuYXR0ckNsYXNzaWNFbmRwb2ludDtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0luc3RhbmNlLmF0dHJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJQcml2YXRlRW5kcG9pbnQgPSByb3NJbnN0YW5jZS5hdHRyUHJpdmF0ZUVuZHBvaW50O1xuICAgIH1cbn1cbiJdfQ==