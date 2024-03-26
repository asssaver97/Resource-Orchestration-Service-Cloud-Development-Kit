"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcEndpoint = exports.VpcEndpointProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const privatelink_generated_1 = require("./privatelink.generated");
Object.defineProperty(exports, "VpcEndpointProperty", { enumerable: true, get: function () { return privatelink_generated_1.RosVpcEndpoint; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PrivateLink::VpcEndpoint`, which is used to create an endpoint.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcEndpoint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpoint
 */
class VpcEndpoint extends ros.Resource {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjZW5kcG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2cGNlbmRwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbUVBQXlEO0FBRTlCLG9HQUZsQixzQ0FBYyxPQUV1QjtBQXFFOUM7Ozs7R0FJRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBOEN6Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxjQUFjLEdBQUcsSUFBSSxzQ0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMseUJBQXlCO1lBQzFELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztTQUM3QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDbEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztRQUM1RCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsZUFBZSxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDMUQsQ0FBQztDQUNKO0FBakZELGtDQWlGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1ZwY0VuZHBvaW50IH0gZnJvbSAnLi9wcml2YXRlbGluay5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NWcGNFbmRwb2ludCBhcyBWcGNFbmRwb2ludFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgVnBjRW5kcG9pbnRgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcHJpdmF0ZWxpbmstdnBjZW5kcG9pbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWcGNFbmRwb2ludFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZDogVGhlIHNlY3VyaXR5IGdyb3VwIGFzc29jaWF0ZWQgd2l0aCB0aGUgZW5kcG9pbnQgbmV0d29yayBpbnRlcmZhY2UuIFRoZSBzZWN1cml0eSBncm91cCBjYW4gY29udHJvbCB0aGUgZGF0YSBjb21tdW5pY2F0aW9uIGZyb20gdGhlIFZQQyB0byB0aGUgZW5kcG9pbnQgbmV0d29yayBpbnRlcmZhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBWUEMgdG8gd2hpY2ggdGhlIGVuZHBvaW50IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuZHBvaW50RGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZW5kcG9pbnQuXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6XFwvXFwvIG9yIGh0dHBzOlxcL1xcLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmRwb2ludERlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5kcG9pbnROYW1lOiBUaGUgbmFtZSBvZiB0aGUgZW5kcG9pbnQuXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2FuIGNvbnRhaW4gZGlnaXRzLCB1bmRlcnNjb3Jlc1xuICAgICAqIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBUaGUgbmFtZSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5kcG9pbnRUeXBlOiBFbmRwb2ludCB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuZHBvaW50VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByb3RlY3RlZEVuYWJsZWQ6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSB1c2VyIGF1dGhlbnRpY2F0aW9uLiBUaGlzIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgaW4gU2VjdXJpdHkgVG9rZW4gU2VydmljZSAoU1RTKSBtb2RlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZTogeWVzIEFmdGVyIHVzZXIgYXV0aGVudGljYXRpb24gaXMgZW5hYmxlZCwgb25seSB0aGUgdXNlciB3aG8gY3JlYXRlcyB0aGUgZW5kcG9pbnQgY2FuIG1vZGlmeSBvciBkZWxldGUgdGhlIGVuZHBvaW50IGluIFNUUyBtb2RlLlxuICAgICAqIGZhbHNlIChkZWZhdWx0KTogbm9cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm90ZWN0ZWRFbmFibGVkPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlcnZpY2VJZDogVGhlIGVuZHBvaW50IHNlcnZpY2UgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGVuZHBvaW50LiBPbmUgb2YgU2VydmljZUlkIGFuZCBTZXJ2aWNlTmFtZSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGVuZHBvaW50IHNlcnZpY2UgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGVuZHBvaW50LiBPbmUgb2YgU2VydmljZUlkIGFuZCBTZXJ2aWNlTmFtZSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc1ZwY0VuZHBvaW50LlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgem9uZTpcbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lPzogQXJyYXk8Um9zVnBjRW5kcG9pbnQuWm9uZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHpvbmVQcml2YXRlSXBBZGRyZXNzQ291bnQ6IFRoZSBudW1iZXIgb2YgcHJpdmF0ZSBJUCBhZGRyZXNzZXMgdGhhdCBjYW4gYmUgdXNlZCBieSBhbiBlbGFzdGljIG5ldHdvcmsgaW50ZXJmYWNlIChFTkkpIGluIGVhY2ggem9uZS4gU2V0IHRoZSB2YWx1ZSB0byAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVQcml2YXRlSXBBZGRyZXNzQ291bnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlByaXZhdGVMaW5rOjpWcGNFbmRwb2ludGAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGVuZHBvaW50LlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zVnBjRW5kcG9pbnRgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1wcml2YXRlbGluay12cGNlbmRwb2ludFxuICovXG5leHBvcnQgY2xhc3MgVnBjRW5kcG9pbnQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFZwY0VuZHBvaW50UHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEJhbmR3aWR0aDogVGhlIGJhbmR3aWR0aCBvZiB0aGUgZW5kcG9pbnQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCYW5kd2lkdGg6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFbmRwb2ludERvbWFpbjogVGhlIGRvbWFpbiBuYW1lIG9mIHRoZSBlbmRwb2ludC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZHBvaW50RG9tYWluOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRW5kcG9pbnRJZDogVGhlIElEIG9mIHRoZSBlbmRwb2ludC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZHBvaW50SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFbmRwb2ludE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBlbmRwb2ludC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZHBvaW50TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlcnZpY2VJZDogVGhlIElEIG9mIGVuZHBvaW50IHNlcnZpY2UgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGVuZHBvaW50LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmljZU5hbWU6IFRoZSBuYW1lIG9mIGVuZHBvaW50IHNlcnZpY2UgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGVuZHBvaW50LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcGNJZDogVGhlIHZwYyBJRCBvZiBlbmRwb2ludC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgWm9uZURvbWFpbnM6IFRoZSB6b25lIGRvbWFpbnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJab25lRG9tYWluczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFZwY0VuZHBvaW50UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NWcGNFbmRwb2ludCA9IG5ldyBSb3NWcGNFbmRwb2ludCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHByb3RlY3RlZEVuYWJsZWQ6IHByb3BzLnByb3RlY3RlZEVuYWJsZWQsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBlbmRwb2ludE5hbWU6IHByb3BzLmVuZHBvaW50TmFtZSxcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBwcm9wcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIHpvbmU6IHByb3BzLnpvbmUsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIGVuZHBvaW50VHlwZTogcHJvcHMuZW5kcG9pbnRUeXBlLFxuICAgICAgICAgICAgem9uZVByaXZhdGVJcEFkZHJlc3NDb3VudDogcHJvcHMuem9uZVByaXZhdGVJcEFkZHJlc3NDb3VudCxcbiAgICAgICAgICAgIGVuZHBvaW50RGVzY3JpcHRpb246IHByb3BzLmVuZHBvaW50RGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgc2VydmljZUlkOiBwcm9wcy5zZXJ2aWNlSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVnBjRW5kcG9pbnQ7XG4gICAgICAgIHRoaXMuYXR0ckJhbmR3aWR0aCA9IHJvc1ZwY0VuZHBvaW50LmF0dHJCYW5kd2lkdGg7XG4gICAgICAgIHRoaXMuYXR0ckVuZHBvaW50RG9tYWluID0gcm9zVnBjRW5kcG9pbnQuYXR0ckVuZHBvaW50RG9tYWluO1xuICAgICAgICB0aGlzLmF0dHJFbmRwb2ludElkID0gcm9zVnBjRW5kcG9pbnQuYXR0ckVuZHBvaW50SWQ7XG4gICAgICAgIHRoaXMuYXR0ckVuZHBvaW50TmFtZSA9IHJvc1ZwY0VuZHBvaW50LmF0dHJFbmRwb2ludE5hbWU7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VJZCA9IHJvc1ZwY0VuZHBvaW50LmF0dHJTZXJ2aWNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gcm9zVnBjRW5kcG9pbnQuYXR0clNlcnZpY2VOYW1lO1xuICAgICAgICB0aGlzLmF0dHJWcGNJZCA9IHJvc1ZwY0VuZHBvaW50LmF0dHJWcGNJZDtcbiAgICAgICAgdGhpcy5hdHRyWm9uZURvbWFpbnMgPSByb3NWcGNFbmRwb2ludC5hdHRyWm9uZURvbWFpbnM7XG4gICAgfVxufVxuIl19