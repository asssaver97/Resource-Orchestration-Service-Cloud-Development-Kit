"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcEndpoint = exports.VpcEndpointProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const privatelink_generated_1 = require("./privatelink.generated");
Object.defineProperty(exports, "VpcEndpointProperty", { enumerable: true, get: function () { return privatelink_generated_1.RosVpcEndpoint; } });
/**
 * A ROS resource type:  `ALIYUN::PrivateLink::VpcEndpoint`
 */
class VpcEndpoint extends ros.Resource {
    /**
     * Create a new `ALIYUN::PrivateLink::VpcEndpoint`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosVpcEndpoint = new privatelink_generated_1.RosVpcEndpoint(this, id, {
            protectedEnabled: props.protectedEnabled,
            vpcId: props.vpcId,
            endpointName: props.endpointName,
            serviceName: props.serviceName,
            zone: props.zone,
            securityGroupId: props.securityGroupId,
            endpointType: props.endpointType,
            zonePrivateIpAddressCount: props.zonePrivateIpAddressCount,
            endpointDescription: props.endpointDescription,
            tags: props.tags,
            serviceId: props.serviceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcEndpoint;
        this.attrBandwidth = rosVpcEndpoint.attrBandwidth;
        this.attrEndpointDomain = rosVpcEndpoint.attrEndpointDomain;
        this.attrEndpointId = rosVpcEndpoint.attrEndpointId;
        this.attrEndpointName = rosVpcEndpoint.attrEndpointName;
        this.attrServiceId = rosVpcEndpoint.attrServiceId;
        this.attrServiceName = rosVpcEndpoint.attrServiceName;
        this.attrVpcId = rosVpcEndpoint.attrVpcId;
        this.attrZoneDomains = rosVpcEndpoint.attrZoneDomains;
    }
}
exports.VpcEndpoint = VpcEndpoint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjZW5kcG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2cGNlbmRwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbUVBQXlEO0FBRTlCLG9HQUZsQixzQ0FBYyxPQUV1QjtBQW9FOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQStDekM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxjQUFjLEdBQUcsSUFBSSxzQ0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMseUJBQXlCO1lBQzFELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztTQUM3QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDbEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztRQUM1RCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsZUFBZSxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDMUQsQ0FBQztDQUNKO0FBaEZELGtDQWdGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1ZwY0VuZHBvaW50IH0gZnJvbSAnLi9wcml2YXRlbGluay5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NWcGNFbmRwb2ludCBhcyBWcGNFbmRwb2ludFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpQcml2YXRlTGluazo6VnBjRW5kcG9pbnRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVnBjRW5kcG9pbnRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFRoZSBzZWN1cml0eSBncm91cCBhc3NvY2lhdGVkIHdpdGggdGhlIGVuZHBvaW50IG5ldHdvcmsgaW50ZXJmYWNlLiBUaGUgc2VjdXJpdHkgZ3JvdXAgY2FuIGNvbnRyb2wgdGhlIGRhdGEgY29tbXVuaWNhdGlvbiBmcm9tIHRoZSBWUEMgdG8gdGhlIGVuZHBvaW50IG5ldHdvcmsgaW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZDogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBUaGUgVlBDIHRvIHdoaWNoIHRoZSBlbmRwb2ludCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmRwb2ludERlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGVuZHBvaW50LlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIDIgdG8gMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuZHBvaW50RGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmRwb2ludE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBlbmRwb2ludC5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW4gY29udGFpbiBkaWdpdHMsIHVuZGVyc2NvcmVzXG4gICAgICogKF8pLCBhbmQgaHlwaGVucyAoLSkuIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmRwb2ludE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmRwb2ludFR5cGU6IEVuZHBvaW50IHR5cGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnRUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvdGVjdGVkRW5hYmxlZDogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIHVzZXIgYXV0aGVudGljYXRpb24uIFRoaXMgcGFyYW1ldGVyIGlzIGF2YWlsYWJsZSBpbiBTZWN1cml0eSBUb2tlbiBTZXJ2aWNlIChTVFMpIG1vZGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiB5ZXMgQWZ0ZXIgdXNlciBhdXRoZW50aWNhdGlvbiBpcyBlbmFibGVkLCBvbmx5IHRoZSB1c2VyIHdobyBjcmVhdGVzIHRoZSBlbmRwb2ludCBjYW4gbW9kaWZ5IG9yIGRlbGV0ZSB0aGUgZW5kcG9pbnQgaW4gU1RTIG1vZGUuXG4gICAgICogZmFsc2UgKGRlZmF1bHQpOiBub1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb3RlY3RlZEVuYWJsZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VydmljZUlkOiBUaGUgZW5kcG9pbnQgc2VydmljZSB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZW5kcG9pbnQuIE9uZSBvZiBTZXJ2aWNlSWQgYW5kIFNlcnZpY2VOYW1lIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlcnZpY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZW5kcG9pbnQgc2VydmljZSB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZW5kcG9pbnQuIE9uZSBvZiBTZXJ2aWNlSWQgYW5kIFNlcnZpY2VOYW1lIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zVnBjRW5kcG9pbnQuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lOlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmU/OiBBcnJheTxSb3NWcGNFbmRwb2ludC5ab25lUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgem9uZVByaXZhdGVJcEFkZHJlc3NDb3VudDogVGhlIG51bWJlciBvZiBwcml2YXRlIElQIGFkZHJlc3NlcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IGFuIGVsYXN0aWMgbmV0d29yayBpbnRlcmZhY2UgKEVOSSkgaW4gZWFjaCB6b25lLiBTZXQgdGhlIHZhbHVlIHRvIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZVByaXZhdGVJcEFkZHJlc3NDb3VudD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6UHJpdmF0ZUxpbms6OlZwY0VuZHBvaW50YFxuICovXG5leHBvcnQgY2xhc3MgVnBjRW5kcG9pbnQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEJhbmR3aWR0aDogVGhlIGJhbmR3aWR0aCBvZiB0aGUgZW5kcG9pbnQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCYW5kd2lkdGg6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFbmRwb2ludERvbWFpbjogVGhlIGRvbWFpbiBuYW1lIG9mIHRoZSBlbmRwb2ludC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZHBvaW50RG9tYWluOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRW5kcG9pbnRJZDogVGhlIElEIG9mIHRoZSBlbmRwb2ludC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZHBvaW50SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFbmRwb2ludE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBlbmRwb2ludC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZHBvaW50TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlcnZpY2VJZDogVGhlIElEIG9mIGVuZHBvaW50IHNlcnZpY2UgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGVuZHBvaW50LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmljZU5hbWU6IFRoZSBuYW1lIG9mIGVuZHBvaW50IHNlcnZpY2UgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGVuZHBvaW50LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcGNJZDogVGhlIHZwYyBJRCBvZiBlbmRwb2ludC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgWm9uZURvbWFpbnM6IFRoZSB6b25lIGRvbWFpbnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJab25lRG9tYWluczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlByaXZhdGVMaW5rOjpWcGNFbmRwb2ludGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVnBjRW5kcG9pbnRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NWcGNFbmRwb2ludCA9IG5ldyBSb3NWcGNFbmRwb2ludCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHByb3RlY3RlZEVuYWJsZWQ6IHByb3BzLnByb3RlY3RlZEVuYWJsZWQsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBlbmRwb2ludE5hbWU6IHByb3BzLmVuZHBvaW50TmFtZSxcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBwcm9wcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIHpvbmU6IHByb3BzLnpvbmUsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIGVuZHBvaW50VHlwZTogcHJvcHMuZW5kcG9pbnRUeXBlLFxuICAgICAgICAgICAgem9uZVByaXZhdGVJcEFkZHJlc3NDb3VudDogcHJvcHMuem9uZVByaXZhdGVJcEFkZHJlc3NDb3VudCxcbiAgICAgICAgICAgIGVuZHBvaW50RGVzY3JpcHRpb246IHByb3BzLmVuZHBvaW50RGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgc2VydmljZUlkOiBwcm9wcy5zZXJ2aWNlSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVnBjRW5kcG9pbnQ7XG4gICAgICAgIHRoaXMuYXR0ckJhbmR3aWR0aCA9IHJvc1ZwY0VuZHBvaW50LmF0dHJCYW5kd2lkdGg7XG4gICAgICAgIHRoaXMuYXR0ckVuZHBvaW50RG9tYWluID0gcm9zVnBjRW5kcG9pbnQuYXR0ckVuZHBvaW50RG9tYWluO1xuICAgICAgICB0aGlzLmF0dHJFbmRwb2ludElkID0gcm9zVnBjRW5kcG9pbnQuYXR0ckVuZHBvaW50SWQ7XG4gICAgICAgIHRoaXMuYXR0ckVuZHBvaW50TmFtZSA9IHJvc1ZwY0VuZHBvaW50LmF0dHJFbmRwb2ludE5hbWU7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VJZCA9IHJvc1ZwY0VuZHBvaW50LmF0dHJTZXJ2aWNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gcm9zVnBjRW5kcG9pbnQuYXR0clNlcnZpY2VOYW1lO1xuICAgICAgICB0aGlzLmF0dHJWcGNJZCA9IHJvc1ZwY0VuZHBvaW50LmF0dHJWcGNJZDtcbiAgICAgICAgdGhpcy5hdHRyWm9uZURvbWFpbnMgPSByb3NWcGNFbmRwb2ludC5hdHRyWm9uZURvbWFpbnM7XG4gICAgfVxufVxuIl19