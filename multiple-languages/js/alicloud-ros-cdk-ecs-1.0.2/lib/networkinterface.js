"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkInterface = exports.NetworkInterfaceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "NetworkInterfaceProperty", { enumerable: true, get: function () { return ecs_generated_1.RosNetworkInterface; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::NetworkInterface`
 */
class NetworkInterface extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::NetworkInterface`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosNetworkInterface = new ecs_generated_1.RosNetworkInterface(this, id, {
            description: props.description,
            privateIpAddresses: props.privateIpAddresses,
            resourceGroupId: props.resourceGroupId,
            securityGroupId: props.securityGroupId,
            vSwitchId: props.vSwitchId,
            networkInterfaceName: props.networkInterfaceName,
            primaryIpAddress: props.primaryIpAddress,
            securityGroupIds: props.securityGroupIds,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkInterface;
        this.attrMacAddress = rosNetworkInterface.attrMacAddress;
        this.attrNetworkInterfaceId = rosNetworkInterface.attrNetworkInterfaceId;
        this.attrPrivateIpAddress = rosNetworkInterface.attrPrivateIpAddress;
        this.attrSecondaryPrivateIpAddresses = rosNetworkInterface.attrSecondaryPrivateIpAddresses;
    }
}
exports.NetworkInterface = NetworkInterface;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya2ludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldHdvcmtpbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFzRDtBQUV0Qix5R0FGdkIsbUNBQW1CLE9BRTRCO0FBcUR4RDs7R0FFRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUEyQjlDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBNEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN2SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxtQ0FBbUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsbUJBQW1CLENBQUMsY0FBYyxDQUFDO1FBQ3pELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQztRQUN6RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsbUJBQW1CLENBQUMsb0JBQW9CLENBQUM7UUFDckUsSUFBSSxDQUFDLCtCQUErQixHQUFHLG1CQUFtQixDQUFDLCtCQUErQixDQUFDO0lBQy9GLENBQUM7Q0FDSjtBQXRERCw0Q0FzREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NOZXR3b3JrSW50ZXJmYWNlIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zTmV0d29ya0ludGVyZmFjZSBhcyBOZXR3b3JrSW50ZXJmYWNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVDUzo6TmV0d29ya0ludGVyZmFjZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrSW50ZXJmYWNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBWU3dpdGNoIElEIG9mIHRoZSBzcGVjaWZpZWQgVlBDLiBTcGVjaWZpZXMgdGhlIHN3aXRjaCBJRCBmb3IgdGhlIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB5b3VyIEVOSS4gSXQgaXMgYSBzdHJpbmcgb2YgWzIsIDI1Nl0gRW5nbGlzaCBvciBDaGluZXNlIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXR3b3JrSW50ZXJmYWNlTmFtZTogTmFtZSBvZiB5b3VyIEVOSS4gSXQgaXMgYSBzdHJpbmcgb2YgWzIsIDEyOF0gIENoaW5lc2Ugb3IgRW5nbGlzaCBjaGFyYWN0ZXJzLiBJdCBtdXN0IGJlZ2luIHdpdGggYSBsZXR0ZXIgYW5kIGNhbiBjb250YWluIG51bWJlcnMsIHVuZGVyc2NvcmVzIChfKSwgY29sb25zICg6KSwgb3IgaHlwaGVucyAoLSkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0d29ya0ludGVyZmFjZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcmltYXJ5SXBBZGRyZXNzOiBUaGUgcHJpbWFyeSBwcml2YXRlIElQIGFkZHJlc3Mgb2YgdGhlIEVOSS4gIFRoZSBzcGVjaWZpZWQgSVAgYWRkcmVzcyBtdXN0IGhhdmUgdGhlIHNhbWUgSG9zdCBJRCBhcyB0aGUgVlN3aXRjaC4gSWYgbm8gSVAgYWRkcmVzc2VzIGFyZSBzcGVjaWZpZWQsIGEgcmFuZG9tIG5ldHdvcmsgSUQgaXMgYXNzaWduZWQgZm9yIHRoZSBFTkkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpbWFyeUlwQWRkcmVzcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByaXZhdGVJcEFkZHJlc3NlczogU3BlY2lmaWVzIHNlY29uZGFyeSBwcml2YXRlIElQIGFkZHJlc3NlcyBvZiB0aGUgRU5JLiBUaGlzIElQIGFkZHJlc3MgbXVzdCBiZSBhbiBhdmFpbGFibGUgSVAgYWRkcmVzcyBpbiB0aGUgQ0lEUiBibG9jayBvZiB0aGUgVlN3aXRjaCB0byB3aGljaCB0aGUgRU5JIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpdmF0ZUlwQWRkcmVzc2VzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBUaGUgSUQgb2YgdGhlIHNlY3VyaXR5IGdyb3VwIHRoYXQgdGhlIEVOSSBqb2lucy4gVGhlIHNlY3VyaXR5IGdyb3VwIGFuZCB0aGUgRU5JIG11c3QgYmUgaW4gYSBzYW1lIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWRzOiBUaGUgSURzIG9mIHRoZSBzZWN1cml0eSBncm91cHMgdGhhdCB0aGUgRU5JIGpvaW5zLiBUaGUgc2VjdXJpdHkgZ3JvdXBzIGFuZCB0aGUgRU5JIG11c3QgYmVsb25nIHRvIHRoZSBzYW1lIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc05ldHdvcmtJbnRlcmZhY2UuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVDUzo6TmV0d29ya0ludGVyZmFjZWBcbiAqL1xuZXhwb3J0IGNsYXNzIE5ldHdvcmtJbnRlcmZhY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1hY0FkZHJlc3M6IFRoZSBNQUMgYWRkcmVzcyBvZiB5b3VyIE5ldHdvcmsgSW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWFjQWRkcmVzczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5ldHdvcmtJbnRlcmZhY2VJZDogSUQgb2YgeW91ciBOZXR3b3JrIEludGVyZmFjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5ldHdvcmtJbnRlcmZhY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFByaXZhdGVJcEFkZHJlc3M6IFRoZSBwcmltYXJ5IHByaXZhdGUgaXAgYWRkcmVzcyBvZiB5b3VyIE5ldHdvcmsgSW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJpdmF0ZUlwQWRkcmVzczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlY29uZGFyeVByaXZhdGVJcEFkZHJlc3NlczogVGhlIHNlY29uZGFyeSBwcml2YXRlIElQIGFkZHJlc3NlcyBvZiB5b3VyIE5ldHdvcmsgSW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2Vjb25kYXJ5UHJpdmF0ZUlwQWRkcmVzc2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUNTOjpOZXR3b3JrSW50ZXJmYWNlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBOZXR3b3JrSW50ZXJmYWNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zTmV0d29ya0ludGVyZmFjZSA9IG5ldyBSb3NOZXR3b3JrSW50ZXJmYWNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcHJpdmF0ZUlwQWRkcmVzc2VzOiBwcm9wcy5wcml2YXRlSXBBZGRyZXNzZXMsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZDogcHJvcHMuc2VjdXJpdHlHcm91cElkLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBuZXR3b3JrSW50ZXJmYWNlTmFtZTogcHJvcHMubmV0d29ya0ludGVyZmFjZU5hbWUsXG4gICAgICAgICAgICBwcmltYXJ5SXBBZGRyZXNzOiBwcm9wcy5wcmltYXJ5SXBBZGRyZXNzLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cElkczogcHJvcHMuc2VjdXJpdHlHcm91cElkcyxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zTmV0d29ya0ludGVyZmFjZTtcbiAgICAgICAgdGhpcy5hdHRyTWFjQWRkcmVzcyA9IHJvc05ldHdvcmtJbnRlcmZhY2UuYXR0ck1hY0FkZHJlc3M7XG4gICAgICAgIHRoaXMuYXR0ck5ldHdvcmtJbnRlcmZhY2VJZCA9IHJvc05ldHdvcmtJbnRlcmZhY2UuYXR0ck5ldHdvcmtJbnRlcmZhY2VJZDtcbiAgICAgICAgdGhpcy5hdHRyUHJpdmF0ZUlwQWRkcmVzcyA9IHJvc05ldHdvcmtJbnRlcmZhY2UuYXR0clByaXZhdGVJcEFkZHJlc3M7XG4gICAgICAgIHRoaXMuYXR0clNlY29uZGFyeVByaXZhdGVJcEFkZHJlc3NlcyA9IHJvc05ldHdvcmtJbnRlcmZhY2UuYXR0clNlY29uZGFyeVByaXZhdGVJcEFkZHJlc3NlcztcbiAgICB9XG59XG4iXX0=