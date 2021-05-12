"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityGroupEgress = exports.SecurityGroupEgressProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "SecurityGroupEgressProperty", { enumerable: true, get: function () { return ecs_generated_1.RosSecurityGroupEgress; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::SecurityGroupEgress`
 */
class SecurityGroupEgress extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ECS::SecurityGroupEgress`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSecurityGroupEgress = new ecs_generated_1.RosSecurityGroupEgress(this, id, {
            policy: props.policy,
            portRange: props.portRange,
            description: props.description,
            priority: props.priority ? props.priority : 1,
            securityGroupId: props.securityGroupId,
            destGroupOwnerId: props.destGroupOwnerId,
            ipProtocol: props.ipProtocol,
            destCidrIp: props.destCidrIp,
            nicType: props.nicType,
            ipv6DestCidrIp: props.ipv6DestCidrIp,
            destGroupId: props.destGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroupEgress;
    }
}
exports.SecurityGroupEgress = SecurityGroupEgress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHlncm91cGVncmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyaXR5Z3JvdXBlZ3Jlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUF5RDtBQUV0Qiw0R0FGMUIsc0NBQXNCLE9BRStCO0FBZ0U5RDs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFFakQ7OztPQUdHO0lBRUg7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUErQixFQUFFLG1DQUEyQyxJQUFJO1FBQzFILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLHNDQUFzQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztTQUNqQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO0lBQzNDLENBQUM7Q0FDSjtBQWhDRCxrREFnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTZWN1cml0eUdyb3VwRWdyZXNzIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2VjdXJpdHlHcm91cEVncmVzcyBhcyBTZWN1cml0eUdyb3VwRWdyZXNzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVDUzo6U2VjdXJpdHlHcm91cEVncmVzc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eUdyb3VwRWdyZXNzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaXBQcm90b2NvbDogSXAgcHJvdG9jb2wgZm9yIGluIHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXBQcm90b2NvbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcG9ydFJhbmdlOiBJcCBwcm90b2NvbCByZWxhdGl2ZSBwb3J0IHJhbmdlLiBGb3IgdGNwIGFuZCB1ZHAsIHRoZSBwb3J0IHJhbmcgaXMgWzEsNjU1MzVdLCB1c2luZyBmb3JtYXQgJzEvMjAwJ0ZvciBpY21wfGdyZXxhbGwgcHJvdG9jZWwsIHRoZSBwb3J0IHJhbmdlIHNob3VsZCBiZSAnLTEvLTEnXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9ydFJhbmdlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIHNlY3VyaXR5IGdyb3VwIHJ1bGUsIFsxLCA1MTJdIGNoYXJhY3RlcnMuIFRoZSBkZWZhdWx0IGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdENpZHJJcDogRGVzdCBDSURSIElwIEFkZHJlc3MgcmFuZ2UuIE9ubHkgSVBWNCBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdENpZHJJcD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc3RHcm91cElkOiBEZXN0IEdyb3VwIElkXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdEdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXN0R3JvdXBPd25lcklkOiBEZXN0IEdyb3VwIE93bmVyIEFjY291bnQgSURcbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0R3JvdXBPd25lcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaXB2NkRlc3RDaWRySXA6IERlc3RpbmF0aW9uIElQdjYgQ0lEUiBhZGRyZXNzIHNlZ21lbnQuIFN1cHBvcnRzIElQIGFkZHJlc3MgcmFuZ2VzIGluIENJRFIgZm9ybWF0IGFuZCBJUHY2IGZvcm1hdC5cbiAgICAgKiBOb3RlIE9ubHkgVlBDIHR5cGUgSVAgYWRkcmVzc2VzIGFyZSBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXB2NkRlc3RDaWRySXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuaWNUeXBlOiBOZXR3b3JrIHR5cGUsIGNvdWxkIGJlICdpbnRlcm5ldCcgb3IgJ2ludHJhbmV0Jy4gRGVmYXVsdCB2YWx1ZSBpcyBpbnRlcm5ldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuaWNUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcG9saWN5OiBBdXRob3JpemF0aW9uIHBvbGljaWVzLCBwYXJhbWV0ZXIgdmFsdWVzIGNhbiBiZTogYWNjZXB0IChhY2NlcHRlZCBhY2Nlc3MpLCBkcm9wIChkZW5pZWQgYWNjZXNzKS4gRGVmYXVsdCB2YWx1ZSBpcyBhY2NlcHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJpb3JpdHk6IEF1dGhvcml6YXRpb24gcG9saWNpZXMgcHJpb3JpdHkgcmFuZ2VbMSwgMTAwXVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaW9yaXR5PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBJZCBvZiB0aGUgc2VjdXJpdHkgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpFQ1M6OlNlY3VyaXR5R3JvdXBFZ3Jlc3NgXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWN1cml0eUdyb3VwRWdyZXNzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFQ1M6OlNlY3VyaXR5R3JvdXBFZ3Jlc3NgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNlY3VyaXR5R3JvdXBFZ3Jlc3NQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NTZWN1cml0eUdyb3VwRWdyZXNzID0gbmV3IFJvc1NlY3VyaXR5R3JvdXBFZ3Jlc3ModGhpcywgaWQsICB7XG4gICAgICAgICAgICBwb2xpY3k6IHByb3BzLnBvbGljeSxcbiAgICAgICAgICAgIHBvcnRSYW5nZTogcHJvcHMucG9ydFJhbmdlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcHJpb3JpdHk6IHByb3BzLnByaW9yaXR5ID8gcHJvcHMucHJpb3JpdHkgOiAxLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cElkOiBwcm9wcy5zZWN1cml0eUdyb3VwSWQsXG4gICAgICAgICAgICBkZXN0R3JvdXBPd25lcklkOiBwcm9wcy5kZXN0R3JvdXBPd25lcklkLFxuICAgICAgICAgICAgaXBQcm90b2NvbDogcHJvcHMuaXBQcm90b2NvbCxcbiAgICAgICAgICAgIGRlc3RDaWRySXA6IHByb3BzLmRlc3RDaWRySXAsXG4gICAgICAgICAgICBuaWNUeXBlOiBwcm9wcy5uaWNUeXBlLFxuICAgICAgICAgICAgaXB2NkRlc3RDaWRySXA6IHByb3BzLmlwdjZEZXN0Q2lkcklwLFxuICAgICAgICAgICAgZGVzdEdyb3VwSWQ6IHByb3BzLmRlc3RHcm91cElkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1NlY3VyaXR5R3JvdXBFZ3Jlc3M7XG4gICAgfVxufVxuIl19