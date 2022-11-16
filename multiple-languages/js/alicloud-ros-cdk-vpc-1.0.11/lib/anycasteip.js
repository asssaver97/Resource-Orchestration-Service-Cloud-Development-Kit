"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnycastEIP = exports.AnycastEIPProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "AnycastEIPProperty", { enumerable: true, get: function () { return vpc_generated_1.RosAnycastEIP; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::AnycastEIP`
 */
class AnycastEIP extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::AnycastEIP`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAnycastEIP = new vpc_generated_1.RosAnycastEIP(this, id, {
            description: props.description,
            serviceLocation: props.serviceLocation === undefined || props.serviceLocation === null ? 'international' : props.serviceLocation,
            instanceChargeType: props.instanceChargeType,
            bandwidth: props.bandwidth,
            name: props.name,
            internetChargeType: props.internetChargeType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAnycastEIP;
        this.attrAnycastId = rosAnycastEIP.attrAnycastId;
        this.attrIpAddress = rosAnycastEIP.attrIpAddress;
        this.attrName = rosAnycastEIP.attrName;
        this.attrOrderId = rosAnycastEIP.attrOrderId;
    }
}
exports.AnycastEIP = AnycastEIP;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55Y2FzdGVpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFueWNhc3RlaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFzQzVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUEyQnhDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBeUIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ3RILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsZUFBZSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZTtZQUNoSSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtTQUMvQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDakQsQ0FBQztDQUNKO0FBbkRELGdDQW1EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0FueWNhc3RFSVAgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBbnljYXN0RUlQIGFzIEFueWNhc3RFSVBQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpBbnljYXN0RUlQYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFueWNhc3RFSVBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBiYW5kd2lkdGg6IEFueWNhc3QgRUlQIGluc3RhbmNlIGJhbmR3aWR0aFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhbmR3aWR0aD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBBbnljYXN0IEVJUCBpbnN0YW5jZSBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBBbnljYXN0IEVJUCBpbnN0YW5jZSBjaGFyZ2UgdHlwZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlQ2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGludGVybmV0Q2hhcmdlVHlwZTogQW55Y2FzdCBFSVAgaW5zdGFuY2UgYWNjZXNzIHB1YmxpYyBuZXR3b3JrIGJpbGxpbmcgbWV0aG9kXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogQW55Y2FzdCBFSVAgaW5zdGFuY2UgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2aWNlTG9jYXRpb246IEFueWNhc3QgRUlQIGluc3RhbmNlIGFjY2VzcyBhcmVhXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZUxvY2F0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OkFueWNhc3RFSVBgXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnljYXN0RUlQIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBbnljYXN0SWQ6IEFueWNhc3QgRUlQIGluc3RhbmNlIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBbnljYXN0SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJcEFkZHJlc3M6IEFueWNhc2UgSVAgYWRkcmVzc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXBBZGRyZXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTmFtZTogQW55Y2FzdCBFSVAgaW5zdGFuY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE9yZGVySWQ6IE9yZGVyIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpBbnljYXN0RUlQYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBbnljYXN0RUlQUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NBbnljYXN0RUlQID0gbmV3IFJvc0FueWNhc3RFSVAodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBzZXJ2aWNlTG9jYXRpb246IHByb3BzLnNlcnZpY2VMb2NhdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnNlcnZpY2VMb2NhdGlvbiA9PT0gbnVsbCA/ICdpbnRlcm5hdGlvbmFsJyA6IHByb3BzLnNlcnZpY2VMb2NhdGlvbixcbiAgICAgICAgICAgIGluc3RhbmNlQ2hhcmdlVHlwZTogcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgYmFuZHdpZHRoOiBwcm9wcy5iYW5kd2lkdGgsXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICAgICAgaW50ZXJuZXRDaGFyZ2VUeXBlOiBwcm9wcy5pbnRlcm5ldENoYXJnZVR5cGUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQW55Y2FzdEVJUDtcbiAgICAgICAgdGhpcy5hdHRyQW55Y2FzdElkID0gcm9zQW55Y2FzdEVJUC5hdHRyQW55Y2FzdElkO1xuICAgICAgICB0aGlzLmF0dHJJcEFkZHJlc3MgPSByb3NBbnljYXN0RUlQLmF0dHJJcEFkZHJlc3M7XG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSByb3NBbnljYXN0RUlQLmF0dHJOYW1lO1xuICAgICAgICB0aGlzLmF0dHJPcmRlcklkID0gcm9zQW55Y2FzdEVJUC5hdHRyT3JkZXJJZDtcbiAgICB9XG59XG4iXX0=