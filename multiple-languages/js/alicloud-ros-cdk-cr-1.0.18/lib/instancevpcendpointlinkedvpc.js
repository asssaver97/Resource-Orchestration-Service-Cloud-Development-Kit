"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceVpcEndpointLinkedVpc = exports.InstanceVpcEndpointLinkedVpcProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cr_generated_1 = require("./cr.generated");
Object.defineProperty(exports, "InstanceVpcEndpointLinkedVpcProperty", { enumerable: true, get: function () { return cr_generated_1.RosInstanceVpcEndpointLinkedVpc; } });
/**
 * A ROS resource type:  `ALIYUN::CR::InstanceVpcEndpointLinkedVpc`
 */
class InstanceVpcEndpointLinkedVpc extends ros.Resource {
    /**
     * Create a new `ALIYUN::CR::InstanceVpcEndpointLinkedVpc`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstanceVpcEndpointLinkedVpc = new cr_generated_1.RosInstanceVpcEndpointLinkedVpc(this, id, {
            enableCreateDnsRecordInPvzt: props.enableCreateDnsRecordInPvzt === undefined || props.enableCreateDnsRecordInPvzt === null ? false : props.enableCreateDnsRecordInPvzt,
            vpcId: props.vpcId,
            instanceId: props.instanceId,
            moduleName: props.moduleName === undefined || props.moduleName === null ? 'Registry' : props.moduleName,
            vswitchId: props.vswitchId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceVpcEndpointLinkedVpc;
        this.attrInstanceId = rosInstanceVpcEndpointLinkedVpc.attrInstanceId;
        this.attrVpcId = rosInstanceVpcEndpointLinkedVpc.attrVpcId;
        this.attrVswitchId = rosInstanceVpcEndpointLinkedVpc.attrVswitchId;
    }
}
exports.InstanceVpcEndpointLinkedVpc = InstanceVpcEndpointLinkedVpc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2V2cGNlbmRwb2ludGxpbmtlZHZwYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhbmNldnBjZW5kcG9pbnRsaW5rZWR2cGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLGlEQUFpRTtBQUVyQixxSEFGbkMsOENBQStCLE9BRXdDO0FBdUNoRjs7R0FFRztBQUNILE1BQWEsNEJBQTZCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFzQjFEOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBd0MsRUFBRSxtQ0FBMkMsSUFBSTtRQUNuSSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sK0JBQStCLEdBQUcsSUFBSSw4Q0FBK0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25GLDJCQUEyQixFQUFFLEtBQUssQ0FBQywyQkFBMkIsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLDJCQUEyQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsMkJBQTJCO1lBQ3RLLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVO1lBQ3ZHLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztTQUM3QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLCtCQUErQixDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsK0JBQStCLENBQUMsY0FBYyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxTQUFTLEdBQUcsK0JBQStCLENBQUMsU0FBUyxDQUFDO1FBQzNELElBQUksQ0FBQyxhQUFhLEdBQUcsK0JBQStCLENBQUMsYUFBYSxDQUFDO0lBQ3ZFLENBQUM7Q0FDSjtBQTVDRCxvRUE0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjIH0gZnJvbSAnLi9jci5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjIGFzIEluc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q1I6Okluc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwY1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBJRCBvZiB0aGUgdnBjLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2c3dpdGNoSWQ6IFRoZSBJRCBvZiB0aGUgdnN3aXRjaC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2c3dpdGNoSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuYWJsZUNyZWF0ZURuc1JlY29yZEluUHZ6dDogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBQcml2YXRlem9uZSByZWNvcmRzLiBcbiAgICAgKiBJZiB5b3UgZW5hYmxlIGF1dG9tYXRpYyBQcml2YXRlem9uZSByZWNvcmQgY3JlYXRpb24sIFByaXZhdGV6b25lIHJlY29yZHMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgd2hlbiBWUEMgaW5zdGFuY2VzIGFyZSBhZGRlZC5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSAqKnRydWUqKjogQXV0b21hdGljYWxseSBjcmVhdGVzIGEgUHJpdmF0ZXpvbmUgcmVjb3JkLlxuICAgICAqIC0gKipmYWxzZSoqIChkZWZhdWx0KTogRG8gbm90IGF1dG9tYXRpY2FsbHkgY3JlYXRlIFByaXZhdGV6b25lIHJlY29yZHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlQ3JlYXRlRG5zUmVjb3JkSW5Qdnp0PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1vZHVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgaW4gdGhlIGluc3RhbmNlIGZvciB3aGljaCBhIHdoaXRlbGlzdCBpcyBjb25maWd1cmVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSAqKlJlZ2lzdHJ5KiogKGRlZmF1bHQpOiBBY2Nlc3MgdGhlIGltYWdlIHJlcG9zaXRvcnkuXG4gICAgICogLSAqKkNoYXJ0Kio6IEFjY2VzcyBIZWxtIENoYXJ0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZHVsZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkNSOjpJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjYFxuICovXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwYyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcGNJZDogVGhlIElEIG9mIHRoZSB2cGMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZzd2l0Y2hJZDogVGhlIElEIG9mIHRoZSB2c3dpdGNoLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnN3aXRjaElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q1I6Okluc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEluc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjID0gbmV3IFJvc0luc3RhbmNlVnBjRW5kcG9pbnRMaW5rZWRWcGModGhpcywgaWQsICB7XG4gICAgICAgICAgICBlbmFibGVDcmVhdGVEbnNSZWNvcmRJblB2enQ6IHByb3BzLmVuYWJsZUNyZWF0ZURuc1JlY29yZEluUHZ6dCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmVuYWJsZUNyZWF0ZURuc1JlY29yZEluUHZ6dCA9PT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuZW5hYmxlQ3JlYXRlRG5zUmVjb3JkSW5Qdnp0LFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgaW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IHByb3BzLm1vZHVsZU5hbWUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5tb2R1bGVOYW1lID09PSBudWxsID8gJ1JlZ2lzdHJ5JyA6IHByb3BzLm1vZHVsZU5hbWUsXG4gICAgICAgICAgICB2c3dpdGNoSWQ6IHByb3BzLnZzd2l0Y2hJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gcm9zSW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwYy5hdHRySW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSByb3NJbnN0YW5jZVZwY0VuZHBvaW50TGlua2VkVnBjLmF0dHJWcGNJZDtcbiAgICAgICAgdGhpcy5hdHRyVnN3aXRjaElkID0gcm9zSW5zdGFuY2VWcGNFbmRwb2ludExpbmtlZFZwYy5hdHRyVnN3aXRjaElkO1xuICAgIH1cbn1cbiJdfQ==