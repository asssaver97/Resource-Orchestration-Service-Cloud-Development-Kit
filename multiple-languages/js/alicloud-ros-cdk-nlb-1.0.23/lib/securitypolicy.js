"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityPolicy = exports.SecurityPolicyProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const nlb_generated_1 = require("./nlb.generated");
Object.defineProperty(exports, "SecurityPolicyProperty", { enumerable: true, get: function () { return nlb_generated_1.RosSecurityPolicy; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLB::SecurityPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitypolicy
 */
class SecurityPolicy extends ros.Resource {
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
        const rosSecurityPolicy = new nlb_generated_1.RosSecurityPolicy(this, id, {
            ciphers: props.ciphers,
            resourceGroupId: props.resourceGroupId,
            securityPolicyName: props.securityPolicyName,
            tlsVersions: props.tlsVersions,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityPolicy;
        this.attrSecurityPolicyId = rosSecurityPolicy.attrSecurityPolicyId;
    }
}
exports.SecurityPolicy = SecurityPolicy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHlwb2xpY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWN1cml0eXBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQW9EO0FBRXRCLHVHQUZyQixpQ0FBaUIsT0FFMEI7QUFtQ3BEOzs7O0dBSUc7QUFDSCxNQUFhLGNBQWUsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVc1Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEwQixFQUFFLG1DQUEyQyxJQUFJO1FBQ3JILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGlDQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkQsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUNsQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsaUJBQWlCLENBQUMsb0JBQW9CLENBQUM7SUFDdkUsQ0FBQztDQUNKO0FBakNELHdDQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NlY3VyaXR5UG9saWN5IH0gZnJvbSAnLi9ubGIuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2VjdXJpdHlQb2xpY3kgYXMgU2VjdXJpdHlQb2xpY3lQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFNlY3VyaXR5UG9saWN5YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW5sYi1zZWN1cml0eXBvbGljeVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlY3VyaXR5UG9saWN5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2lwaGVyczogVFRoZSBzdXBwb3J0ZWQgY2lwaGVyIHN1aXRlcywgd2hpY2ggYXJlIGRldGVybWluZWQgYnkgdGhlIFRMUyBwcm90b2NvbCB2ZXJzaW9uLiBZb3UgY2FuIHNwZWNpZnkgYXQgbW9zdCAzMiBjaXBoZXIgc3VpdGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNpcGhlcnM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0bHNWZXJzaW9uczogVGhlIHN1cHBvcnRlZCB2ZXJzaW9ucyBvZiB0aGUgVHJhbnNwb3J0IExheWVyIFNlY3VyaXR5IChUTFMpIHByb3RvY29sLiBWYWxpZCB2YWx1ZXM6IFRMU3YxLjAsIFRMU3YxLjEsIFRMU3YxLjIsIGFuZCBUTFN2MS4zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRsc1ZlcnNpb25zOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5UG9saWN5TmFtZTogVGhlIG5hbWUgb2YgdGhlIHNlY3VyaXR5IHBvbGljeS5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDEgdG8gMjAwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBwZXJpb2RzICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlQb2xpY3lOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zU2VjdXJpdHlQb2xpY3kuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok5MQjo6U2VjdXJpdHlQb2xpY3lgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zU2VjdXJpdHlQb2xpY3lgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1ubGItc2VjdXJpdHlwb2xpY3lcbiAqL1xuZXhwb3J0IGNsYXNzIFNlY3VyaXR5UG9saWN5IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBTZWN1cml0eVBvbGljeVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZWN1cml0eVBvbGljeUlkOiBUaGUgSUQgb2YgdGhlIHNlY3VyaXR5IHBvbGljeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlY3VyaXR5UG9saWN5SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTZWN1cml0eVBvbGljeVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zU2VjdXJpdHlQb2xpY3kgPSBuZXcgUm9zU2VjdXJpdHlQb2xpY3kodGhpcywgaWQsICB7XG4gICAgICAgICAgICBjaXBoZXJzOiBwcm9wcy5jaXBoZXJzLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBzZWN1cml0eVBvbGljeU5hbWU6IHByb3BzLnNlY3VyaXR5UG9saWN5TmFtZSxcbiAgICAgICAgICAgIHRsc1ZlcnNpb25zOiBwcm9wcy50bHNWZXJzaW9ucyxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU2VjdXJpdHlQb2xpY3k7XG4gICAgICAgIHRoaXMuYXR0clNlY3VyaXR5UG9saWN5SWQgPSByb3NTZWN1cml0eVBvbGljeS5hdHRyU2VjdXJpdHlQb2xpY3lJZDtcbiAgICB9XG59XG4iXX0=