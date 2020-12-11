"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignPrivateIpAddresses = exports.AssignPrivateIpAddressesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "AssignPrivateIpAddressesProperty", { enumerable: true, get: function () { return ecs_generated_1.RosAssignPrivateIpAddresses; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::AssignPrivateIpAddresses`
 */
class AssignPrivateIpAddresses extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::AssignPrivateIpAddresses`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAssignPrivateIpAddresses = new ecs_generated_1.RosAssignPrivateIpAddresses(this, id, {
            secondaryPrivateIpAddressCount: props.secondaryPrivateIpAddressCount,
            privateIpAddresses: props.privateIpAddresses,
            networkInterfaceId: props.networkInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAssignPrivateIpAddresses;
        this.attrNetworkInterfaceId = rosAssignPrivateIpAddresses.attrNetworkInterfaceId;
        this.attrPrivateIpAddresses = rosAssignPrivateIpAddresses.attrPrivateIpAddresses;
    }
}
exports.AssignPrivateIpAddresses = AssignPrivateIpAddresses;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaWducHJpdmF0ZWlwYWRkcmVzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNzaWducHJpdmF0ZWlwYWRkcmVzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBOEQ7QUFFdEIsaUhBRi9CLDJDQUEyQixPQUVvQztBQTRCeEU7O0dBRUc7QUFDSCxNQUFhLHdCQUF5QixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ0RDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9DLEVBQUUsbUNBQTJDLElBQUk7UUFDL0gsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLDJCQUEyQixHQUFHLElBQUksMkNBQTJCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzRSw4QkFBOEIsRUFBRSxLQUFLLENBQUMsOEJBQThCO1lBQ3BFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtTQUMvQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUEyQixDQUFDO1FBQzVDLElBQUksQ0FBQyxzQkFBc0IsR0FBRywyQkFBMkIsQ0FBQyxzQkFBc0IsQ0FBQztRQUNqRixJQUFJLENBQUMsc0JBQXNCLEdBQUcsMkJBQTJCLENBQUMsc0JBQXNCLENBQUM7SUFDckYsQ0FBQztDQUNKO0FBcENELDREQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0Fzc2lnblByaXZhdGVJcEFkZHJlc3NlcyB9IGZyb20gJy4vZWNzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0Fzc2lnblByaXZhdGVJcEFkZHJlc3NlcyBhcyBBc3NpZ25Qcml2YXRlSXBBZGRyZXNzZXNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RUNTOjpBc3NpZ25Qcml2YXRlSXBBZGRyZXNzZXNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXNzaWduUHJpdmF0ZUlwQWRkcmVzc2VzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldHdvcmtJbnRlcmZhY2VJZDogVGhlIElEIG9mIHRoZSBFTkkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0d29ya0ludGVyZmFjZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpdmF0ZUlwQWRkcmVzc2VzOiBPbmUgb3IgbXVsdGlwbGUgc2Vjb25kYXJ5IHByaXZhdGUgSVAgYWRkcmVzc2VzIHNlbGVjdGVkIGZyb20gdGhlIENJRFIgYmxvY2sgb2YgdGhlIFZTd2l0Y2ggdGhhdCBob3N0cyB0aGUgRU5JLiBcbiAgICAgKiBWYWxpZCB2YWx1ZXMgb2YgbnVtYmVyIG9mIHByaXZhdGUgaXAgYWRkcmVzc2VzOlxuICAgICAqIFdoZW4gdGhlIEVOSSBpcyBpbiB0aGUgQXZhaWxhYmxlIHN0YXRlOiAxIHRvIDEwLlxuICAgICAqIFdoZW4gdGhlIEVOSSBpcyBpbiB0aGUgSW5Vc2Ugc3RhdGU6IGxpbWl0ZWQgYnkgdGhlIGluc3RhbmNlIHR5cGUuIFxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgSW5zdGFuY2UgdHlwZSBmYW1pbGllcy5cbiAgICAgKiBZb3UgbXVzdCBzcGVjaWZ5IGVpdGhlciB0aGUgUHJpdmF0ZUlwQWRkcmVzc2VzIHBhcmFtZXRlciBvciB0aGUgU2Vjb25kYXJ5UHJpdmF0ZUlwQWRkcmVzc0NvdW50IHBhcmFtZXRlciB0byBhc3NpZ24gc2Vjb25kYXJ5IHByaXZhdGUgSVAgYWRkcmVzc2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaXZhdGVJcEFkZHJlc3Nlcz86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2Vjb25kYXJ5UHJpdmF0ZUlwQWRkcmVzc0NvdW50OiBUaGUgc3BlY2lmaWVkIG51bWJlciBvZiBwcml2YXRlIElQIGFkZHJlc3NlcyB0byBiZSBhc3NpZ25lZCBieSB0aGUgRUNTIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY29uZGFyeVByaXZhdGVJcEFkZHJlc3NDb3VudD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RUNTOjpBc3NpZ25Qcml2YXRlSXBBZGRyZXNzZXNgXG4gKi9cbmV4cG9ydCBjbGFzcyBBc3NpZ25Qcml2YXRlSXBBZGRyZXNzZXMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOZXR3b3JrSW50ZXJmYWNlSWQ6IFRoZSBJRCBvZiB0aGUgRU5JLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmV0d29ya0ludGVyZmFjZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFByaXZhdGVJcEFkZHJlc3NlczogQXNzaWduZWQgcHJpdmF0ZSBpcCBhZGRyZXNzZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcml2YXRlSXBBZGRyZXNzZXM6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFQ1M6OkFzc2lnblByaXZhdGVJcEFkZHJlc3Nlc2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQXNzaWduUHJpdmF0ZUlwQWRkcmVzc2VzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQXNzaWduUHJpdmF0ZUlwQWRkcmVzc2VzID0gbmV3IFJvc0Fzc2lnblByaXZhdGVJcEFkZHJlc3Nlcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHNlY29uZGFyeVByaXZhdGVJcEFkZHJlc3NDb3VudDogcHJvcHMuc2Vjb25kYXJ5UHJpdmF0ZUlwQWRkcmVzc0NvdW50LFxuICAgICAgICAgICAgcHJpdmF0ZUlwQWRkcmVzc2VzOiBwcm9wcy5wcml2YXRlSXBBZGRyZXNzZXMsXG4gICAgICAgICAgICBuZXR3b3JrSW50ZXJmYWNlSWQ6IHByb3BzLm5ldHdvcmtJbnRlcmZhY2VJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NBc3NpZ25Qcml2YXRlSXBBZGRyZXNzZXM7XG4gICAgICAgIHRoaXMuYXR0ck5ldHdvcmtJbnRlcmZhY2VJZCA9IHJvc0Fzc2lnblByaXZhdGVJcEFkZHJlc3Nlcy5hdHRyTmV0d29ya0ludGVyZmFjZUlkO1xuICAgICAgICB0aGlzLmF0dHJQcml2YXRlSXBBZGRyZXNzZXMgPSByb3NBc3NpZ25Qcml2YXRlSXBBZGRyZXNzZXMuYXR0clByaXZhdGVJcEFkZHJlc3NlcztcbiAgICB9XG59XG4iXX0=