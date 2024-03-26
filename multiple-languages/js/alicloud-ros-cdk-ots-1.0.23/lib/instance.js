"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ots_generated_1 = require("./ots.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return ots_generated_1.RosInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OTS::Instance`, which is used to create a Tablestore instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instance
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
        const rosInstance = new ots_generated_1.RosInstance(this, id, {
            instanceName: props.instanceName,
            description: props.description,
            network: props.network === undefined || props.network === null ? 'NORMAL' : props.network,
            clusterType: props.clusterType === undefined || props.clusterType === null ? 'SSD' : props.clusterType,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrPrivateEndpoint = rosInstance.attrPrivateEndpoint;
        this.attrPublicEndpoint = rosInstance.attrPublicEndpoint;
        this.attrVpcEndpoint = rosInstance.attrVpcEndpoint;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBcUN4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUEwQnRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTztZQUN6RixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVc7WUFDdEcsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDckQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDO1FBQ3pELElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQztJQUN2RCxDQUFDO0NBQ0o7QUFuREQsNEJBbURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW5zdGFuY2UgfSBmcm9tICcuL290cy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NJbnN0YW5jZSBhcyBJbnN0YW5jZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgSW5zdGFuY2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb3RzLWluc3RhbmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNsdXN0ZXJUeXBlOiBDbHVzdGVyIHR5cGUsIHRoZSBkZWZhdWx0IGlzIFNTRC4gXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSBzcGVjaWZpY2F0aW9uIG9mIHRoZSBvdHMgaW5zdGFuY2UuXG4gICAgICogIFdoZW4gdGhlIHZhbHVlIGlzIFNTRCwgdGhlIG90cyBpbnN0YW5jZSBpcyBhIGhpZ2gtcGVyZm9ybWFuY2UgaW5zdGFuY2UuXG4gICAgICogIFdoZW4gdGhlIHZhbHVlIGlzIEh5YmlkLCB0aGUgb3RzIGluc3RhbmNlIGlzIGEgY2FwYWNpdHkgaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVyVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBJbnN0YW5jZSBkZXNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5ldHdvcms6IEluc3RhbmNlIG5ldHdvcmsgdHlwZSwgZGVmYXVsdCBpcyBOT1JNQUwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0d29yaz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCA1IHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zSW5zdGFuY2UuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9UUzo6SW5zdGFuY2VgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIFRhYmxlc3RvcmUgaW5zdGFuY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NJbnN0YW5jZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW90cy1pbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEluc3RhbmNlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlTmFtZTogSW5zdGFuY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJpdmF0ZUVuZHBvaW50OiBQcml2YXRlIGVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcml2YXRlRW5kcG9pbnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQdWJsaWNFbmRwb2ludDogUHVibGljIGVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY0VuZHBvaW50OiBWcGMgZW5kcG9pbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0VuZHBvaW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0luc3RhbmNlID0gbmV3IFJvc0luc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiBwcm9wcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBuZXR3b3JrOiBwcm9wcy5uZXR3b3JrID09PSB1bmRlZmluZWQgfHwgcHJvcHMubmV0d29yayA9PT0gbnVsbCA/ICdOT1JNQUwnIDogcHJvcHMubmV0d29yayxcbiAgICAgICAgICAgIGNsdXN0ZXJUeXBlOiBwcm9wcy5jbHVzdGVyVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmNsdXN0ZXJUeXBlID09PSBudWxsID8gJ1NTRCcgOiBwcm9wcy5jbHVzdGVyVHlwZSxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlTmFtZSA9IHJvc0luc3RhbmNlLmF0dHJJbnN0YW5jZU5hbWU7XG4gICAgICAgIHRoaXMuYXR0clByaXZhdGVFbmRwb2ludCA9IHJvc0luc3RhbmNlLmF0dHJQcml2YXRlRW5kcG9pbnQ7XG4gICAgICAgIHRoaXMuYXR0clB1YmxpY0VuZHBvaW50ID0gcm9zSW5zdGFuY2UuYXR0clB1YmxpY0VuZHBvaW50O1xuICAgICAgICB0aGlzLmF0dHJWcGNFbmRwb2ludCA9IHJvc0luc3RhbmNlLmF0dHJWcGNFbmRwb2ludDtcbiAgICB9XG59XG4iXX0=