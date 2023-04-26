"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const kafka_generated_1 = require("./kafka.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return kafka_generated_1.RosInstance; } });
/**
 * A ROS resource type:  `ALIYUN::KAFKA::Instance`
 */
class Instance extends ros.Resource {
    /**
     * Create a new `ALIYUN::KAFKA::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstance = new kafka_generated_1.RosInstance(this, id, {
            deployType: props.deployType,
            eipMax: props.eipMax,
            specType: props.specType,
            ioMax: props.ioMax,
            payType: props.payType === undefined || props.payType === null ? 'Hour' : props.payType,
            diskType: props.diskType,
            deployOption: props.deployOption,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            ioMaxSpec: props.ioMaxSpec,
            diskSize: props.diskSize,
            topicQuota: props.topicQuota,
            tags: props.tags,
            openConnector: props.openConnector === undefined || props.openConnector === null ? false : props.openConnector,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrDomainEndpoint = rosInstance.attrDomainEndpoint;
        this.attrEndpoint = rosInstance.attrEndpoint;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrName = rosInstance.attrName;
        this.attrOrderId = rosInstance.attrOrderId;
        this.attrSaslDomainEndpoint = rosInstance.attrSaslDomainEndpoint;
        this.attrSslDomainEndpoint = rosInstance.attrSslDomainEndpoint;
        this.attrSslEndpoint = rosInstance.attrSslEndpoint;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsdURBQWdEO0FBRXhCLGlHQUZmLDZCQUFXLE9BRW9CO0FBeUZ4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBK0N0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDZCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ3ZGLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQzlHLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWE7U0FDakgsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQztRQUNqRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsV0FBVyxDQUFDLHFCQUFxQixDQUFDO1FBQy9ELElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQztJQUN2RCxDQUFDO0NBQ0o7QUFsRkQsNEJBa0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW5zdGFuY2UgfSBmcm9tICcuL2thZmthLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0luc3RhbmNlIGFzIEluc3RhbmNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OktBRktBOjpJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlcGxveVR5cGU6IFRoZSBkZXBsb3ltZW50IG1vZGUgb2YgdGhlIE1lc3NhZ2UgUXVldWUgZm9yIEFwYWNoZSBLYWZrYSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiBcbiAgICAgKiAgIDQ6IEluc3RhbmNlIG9mIHRoZSBwdWJsaWMgdHlwZSBcbiAgICAgKiAgIDU6IEluc3RhbmNlIG9mIHRoZSBWUEMgdHlwZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlcGxveVR5cGU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRpc2tTaXplOiBUaGUgc2l6ZSBvZiB0aGUgZGlzayB0byBiZSBjb25maWd1cmVkIGZvciB0aGUgTWVzc2FnZSBRdWV1ZSBmb3IgQXBhY2hlIEthZmthIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2tTaXplOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNrVHlwZTogVGhlIHR5cGUgb2YgdGhlIGRpc2sgdG8gYmUgY29uZmlndXJlZCBmb3IgdGhlIE1lc3NhZ2UgUXVldWUgZm9yIEFwYWNoZSBLYWZrYSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiBcbiAgICAgKiAwOiBVbHRyYSBkaXNrIFxuICAgICAqIDE6IFNTRFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2tUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0b3BpY1F1b3RhOiBUaGUgbnVtYmVyIG9mIHRvcGljcyB0byBiZSBjb25maWd1cmVkIGZvciB0aGUgTWVzc2FnZSBRdWV1ZSBmb3IgQXBhY2hlIEthZmthIGluc3RhbmNlLiBcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciB2YXJpZXMgd2l0aCBkaWZmZXJlbnQgcGVhayB0cmFmZmljIHZhbHVlcy4gXG4gICAgICogQWRkaXRpb25hbCBmZWVzIGFyZSBjaGFyZ2VkIGlmIHRoZSBkZWZhdWx0IHZhbHVlcyBhcmUgZXhjZWVkZWQuXG4gICAgICogIERpZmZlcmVudCBzcGVjaWZpY2F0aW9ucyBoYXZlIGRpZmZlcmVudCBkZWZhdWx0IHZhbHVlcywgYW5kIGV4dHJhIGZlZXMgYXJlIGNoYXJnZWQuIFxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgQmlsbGluZy5cbiAgICAgKi9cbiAgICByZWFkb25seSB0b3BpY1F1b3RhOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBXaGV0aGVyIGRlbGV0ZSBhbGwgdG9waWNzLCBjb25zdW1lciBncm91cHMgb2YgdGhlIGthZmthIGluc3RhbmNlIGFuZCB0aGVuIGRlbGV0ZSBpbnN0YW5jZS4gRGVmYXVsdCBpcyBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uRm9yY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVwbG95T3B0aW9uOiBJZiB5b3Ugd2FudCB0byBkZXBsb3kgaW5zdGFuY2UgYWZ0ZXIgY3JlYXRlIGF0IG9uY2UsIHRoZSBWU3dpdGNoSWQgYW5kIERlcGxveU1vZHVsZSBwYXJhbWV0ZXJzIGlzIHJlcXVpcmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVwbG95T3B0aW9uPzogUm9zSW5zdGFuY2UuRGVwbG95T3B0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlaXBNYXg6IFRoZSBwdWJsaWMgdHJhZmZpYyB0byBiZSBjb25maWd1cmVkIGZvciB0aGUgTWVzc2FnZSBRdWV1ZSBmb3IgQXBhY2hlIEthZmthIGluc3RhbmNlLiBcbiAgICAgKiBUaGlzIHBhcmFtZXRlciBtdXN0IGJlIHNwZWNpZmllZCB3aGVuIHRoZSBEZXBsb3lUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gNC5cbiAgICAgKi9cbiAgICByZWFkb25seSBlaXBNYXg/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpb01heDogVGhlIHBlYWsgdHJhZmZpYyB0byBiZSBjb25maWd1cmVkIGZvciB0aGUgTWVzc2FnZSBRdWV1ZSBmb3IgQXBhY2hlIEthZmthIGluc3RhbmNlLiBcbiAgICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdmFsdWUgcmFuZ2UsIHNlZSBCaWxsaW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlvTWF4PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW9NYXhTcGVjOiBGbG93IHNwZWNpZmljYXRpb24gKHJlY29tbWVuZGVkKSBcbiAgICAgKiBUaGUgSW9NYXggYW5kIElvTWF4U3BlYyBtdXN0IGJlIG9wdGlvbmFsLiBcbiAgICAgKiBXaGVuIGZpbGxpbmcgaW4gYXQgdGhlIHNhbWUgdGltZSwgc3ViamVjdCB0byBJb01heFNwZWMuIFxuICAgICAqIEl0IGlzIHJlY29tbWVuZGVkIHRoYXQgeW91IG9ubHkgZmlsbCBpbiB0aGUgZmxvdyBzcGVjaWZpY2F0aW9uIFxuICAgICAqXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW9NYXhTcGVjPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3BlbkNvbm5lY3RvcjogV2hldGhlciBvcGVuIGthZmthIGNvbm5lY3RvciBvciBub3RcbiAgICAgKi9cbiAgICByZWFkb25seSBvcGVuQ29ubmVjdG9yPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBheVR5cGU6IFBheSBieSBob3VyIG9yIG1vbnRoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBheVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzcGVjVHlwZTogVGhlIGVkaXRpb24gb2YgdGhlIE1lc3NhZ2UgUXVldWUgZm9yIEFwYWNoZSBLYWZrYSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiBcbiAgICAgKiBwcm9mZXNzaW9uYWw6IFByb2Zlc3Npb25hbCBFZGl0aW9uIFxuICAgICAqIG5vcm1hbDogTm9ybWFsIHZlcnNpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBzcGVjVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0luc3RhbmNlLlRhZ3NQcm9wZXJ0eVtdO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpLQUZLQTo6SW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRG9tYWluRW5kcG9pbnQ6IFRoZSBkZWZhdWx0IGVuZHBvaW50cyBvZiB0aGUgaW5zdGFuY2UgaW4gZG9tYWluIG5hbWUgbW9kZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRvbWFpbkVuZHBvaW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRW5kcG9pbnQ6IFRoZSBTU0wgZW5kcG9pbnRzIG9mIHRoZSBpbnN0YW5jZSBpbiBJUCBhZGRyZXNzIG1vZGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWQ6IElkIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOYW1lOiBOYW1lIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBPcmRlcklkOiBJZCBvZiB0aGUgb3JkZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2FzbERvbWFpbkVuZHBvaW50OiBUaGUgU2ltcGxlIEF1dGhlbnRpY2F0aW9uIGFuZCBTZWN1cml0eSBMYXllciAoU0FTTCkgZW5kcG9pbnRzIG9mIHRoZSBpbnN0YW5jZSBpbiBkb21haW4gbmFtZSBtb2RlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2FzbERvbWFpbkVuZHBvaW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3NsRG9tYWluRW5kcG9pbnQ6IFRoZSBTU0wgZW5kcG9pbnRzIG9mIHRoZSBpbnN0YW5jZSBpbiBkb21haW4gbmFtZSBtb2RlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3NsRG9tYWluRW5kcG9pbnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTc2xFbmRwb2ludDogVGhlIFNTTCBlbmRwb2ludHMgb2YgdGhlIGluc3RhbmNlIGluIElQIGFkZHJlc3MgbW9kZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNzbEVuZHBvaW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6S0FGS0E6Okluc3RhbmNlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJbnN0YW5jZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0luc3RhbmNlID0gbmV3IFJvc0luc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVwbG95VHlwZTogcHJvcHMuZGVwbG95VHlwZSxcbiAgICAgICAgICAgIGVpcE1heDogcHJvcHMuZWlwTWF4LFxuICAgICAgICAgICAgc3BlY1R5cGU6IHByb3BzLnNwZWNUeXBlLFxuICAgICAgICAgICAgaW9NYXg6IHByb3BzLmlvTWF4LFxuICAgICAgICAgICAgcGF5VHlwZTogcHJvcHMucGF5VHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBheVR5cGUgPT09IG51bGwgPyAnSG91cicgOiBwcm9wcy5wYXlUeXBlLFxuICAgICAgICAgICAgZGlza1R5cGU6IHByb3BzLmRpc2tUeXBlLFxuICAgICAgICAgICAgZGVwbG95T3B0aW9uOiBwcm9wcy5kZXBsb3lPcHRpb24sXG4gICAgICAgICAgICBkZWxldGlvbkZvcmNlOiBwcm9wcy5kZWxldGlvbkZvcmNlID09PSB1bmRlZmluZWQgfHwgcHJvcHMuZGVsZXRpb25Gb3JjZSA9PT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuZGVsZXRpb25Gb3JjZSxcbiAgICAgICAgICAgIGlvTWF4U3BlYzogcHJvcHMuaW9NYXhTcGVjLFxuICAgICAgICAgICAgZGlza1NpemU6IHByb3BzLmRpc2tTaXplLFxuICAgICAgICAgICAgdG9waWNRdW90YTogcHJvcHMudG9waWNRdW90YSxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgICAgICBvcGVuQ29ubmVjdG9yOiBwcm9wcy5vcGVuQ29ubmVjdG9yID09PSB1bmRlZmluZWQgfHwgcHJvcHMub3BlbkNvbm5lY3RvciA9PT0gbnVsbCA/IGZhbHNlIDogcHJvcHMub3BlbkNvbm5lY3RvcixcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5hdHRyRG9tYWluRW5kcG9pbnQgPSByb3NJbnN0YW5jZS5hdHRyRG9tYWluRW5kcG9pbnQ7XG4gICAgICAgIHRoaXMuYXR0ckVuZHBvaW50ID0gcm9zSW5zdGFuY2UuYXR0ckVuZHBvaW50O1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSByb3NJbnN0YW5jZS5hdHRyTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyT3JkZXJJZCA9IHJvc0luc3RhbmNlLmF0dHJPcmRlcklkO1xuICAgICAgICB0aGlzLmF0dHJTYXNsRG9tYWluRW5kcG9pbnQgPSByb3NJbnN0YW5jZS5hdHRyU2FzbERvbWFpbkVuZHBvaW50O1xuICAgICAgICB0aGlzLmF0dHJTc2xEb21haW5FbmRwb2ludCA9IHJvc0luc3RhbmNlLmF0dHJTc2xEb21haW5FbmRwb2ludDtcbiAgICAgICAgdGhpcy5hdHRyU3NsRW5kcG9pbnQgPSByb3NJbnN0YW5jZS5hdHRyU3NsRW5kcG9pbnQ7XG4gICAgfVxufVxuIl19