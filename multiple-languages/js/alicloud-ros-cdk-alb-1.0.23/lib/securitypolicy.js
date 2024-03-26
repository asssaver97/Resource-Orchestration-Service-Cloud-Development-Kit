"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityPolicy = exports.SecurityPolicyProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const alb_generated_1 = require("./alb.generated");
Object.defineProperty(exports, "SecurityPolicyProperty", { enumerable: true, get: function () { return alb_generated_1.RosSecurityPolicy; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::SecurityPolicy`, which is used to create a custom security policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-securitypolicy
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
        const rosSecurityPolicy = new alb_generated_1.RosSecurityPolicy(this, id, {
            ciphers: props.ciphers,
            resourceGroupId: props.resourceGroupId,
            tlsVersions: props.tlsVersions,
            securityPolicyName: props.securityPolicyName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityPolicy;
        this.attrSecurityPolicyId = rosSecurityPolicy.attrSecurityPolicyId;
    }
}
exports.SecurityPolicy = SecurityPolicy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHlwb2xpY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWN1cml0eXBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQW9EO0FBRXRCLHVHQUZyQixpQ0FBaUIsT0FFMEI7QUFpQ3BEOzs7O0dBSUc7QUFDSCxNQUFhLGNBQWUsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVc1Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEwQixFQUFFLG1DQUEyQyxJQUFJO1FBQ3JILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGlDQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkQsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtTQUMvQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBQ2xDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQztJQUN2RSxDQUFDO0NBQ0o7QUFoQ0Qsd0NBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU2VjdXJpdHlQb2xpY3kgfSBmcm9tICcuL2FsYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTZWN1cml0eVBvbGljeSBhcyBTZWN1cml0eVBvbGljeVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgU2VjdXJpdHlQb2xpY3lgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYWxiLXNlY3VyaXR5cG9saWN5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlQb2xpY3lQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjaXBoZXJzOiBUaGUgc3VwcG9ydGVkIGNpcGhlciBzdWl0ZXMsIHdoaWNoIGFyZSBkZXRlcm1pbmVkIGJ5IHRoZSBUTFMgcHJvdG9jb2wgdmVyc2lvbi5cbiAgICAgKiBUaGUgc3BlY2lmaWVkIGNpcGhlciBzdWl0ZXMgbXVzdCBiZSBzdXBwb3J0ZWQgYnkgYXQgbGVhc3Qgb25lIFRMUyBwcm90b2NvbCB2ZXJzaW9uIHRoYXQgeW91IHNwZWNpZnkuXG4gICAgICogTm90ZSBGb3IgZXhhbXBsZSwgaWYgeW91IHNldCB0aGUgVExTVmVyc2lvbnMgcGFyYW1ldGVyIHRvIFRMU3YxLjMsIHlvdSBtdXN0IHNwZWNpZnkgY2lwaGVyIHN1aXRlcyB0aGF0IGFyZSBzdXBwb3J0ZWQgYnkgVExTIDEuMy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaXBoZXJzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlQb2xpY3lOYW1lOiBUaGUgbmFtZSBvZiB0aGUgc2VjdXJpdHkgcG9saWN5LlxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGgsIGFuZCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIHBlcmlvZHNcbiAgICAgKiAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBUaGUgbmFtZSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlQb2xpY3lOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0bHNWZXJzaW9uczogVGhlIHN1cHBvcnRlZCB2ZXJzaW9ucyBvZiB0aGUgVHJhbnNwb3J0IExheWVyIFNlY3VyaXR5IChUTFMpIHByb3RvY29sLiBWYWxpZCB2YWx1ZXM6IFRMU3YxLjAsIFRMU3YxLjEsIFRMU3YxLjIsIGFuZCBUTFN2MS4zIGFuZCBzbyBvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB0bHNWZXJzaW9uczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFMQjo6U2VjdXJpdHlQb2xpY3lgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGN1c3RvbSBzZWN1cml0eSBwb2xpY3kuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NTZWN1cml0eVBvbGljeWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFsYi1zZWN1cml0eXBvbGljeVxuICovXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlQb2xpY3kgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFNlY3VyaXR5UG9saWN5UHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlY3VyaXR5UG9saWN5SWQ6IFRoZSBJRCBvZiB0aGUgc2VjdXJpdHkgcG9saWN5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VjdXJpdHlQb2xpY3lJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNlY3VyaXR5UG9saWN5UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NTZWN1cml0eVBvbGljeSA9IG5ldyBSb3NTZWN1cml0eVBvbGljeSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGNpcGhlcnM6IHByb3BzLmNpcGhlcnMsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHRsc1ZlcnNpb25zOiBwcm9wcy50bHNWZXJzaW9ucyxcbiAgICAgICAgICAgIHNlY3VyaXR5UG9saWN5TmFtZTogcHJvcHMuc2VjdXJpdHlQb2xpY3lOYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1NlY3VyaXR5UG9saWN5O1xuICAgICAgICB0aGlzLmF0dHJTZWN1cml0eVBvbGljeUlkID0gcm9zU2VjdXJpdHlQb2xpY3kuYXR0clNlY3VyaXR5UG9saWN5SWQ7XG4gICAgfVxufVxuIl19