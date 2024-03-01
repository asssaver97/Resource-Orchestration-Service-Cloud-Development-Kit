"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedPrometheus = exports.ManagedPrometheusProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const arms_generated_1 = require("./arms.generated");
Object.defineProperty(exports, "ManagedPrometheusProperty", { enumerable: true, get: function () { return arms_generated_1.RosManagedPrometheus; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::ManagedPrometheus`, which is used to install a Prometheus agent in a ACK Serverless (ASK) cluster or an Elastic Compute Service (ECS) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosManagedPrometheus`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
 */
class ManagedPrometheus extends ros.Resource {
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
        const rosManagedPrometheus = new arms_generated_1.RosManagedPrometheus(this, id, {
            vpcId: props.vpcId,
            clusterId: props.clusterId,
            securityGroupId: props.securityGroupId,
            vSwitchId: props.vSwitchId,
            clusterName: props.clusterName,
            clusterType: props.clusterType === undefined || props.clusterType === null ? 'ecs' : props.clusterType,
            grafanaInstanceId: props.grafanaInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosManagedPrometheus;
        this.attrClusterType = rosManagedPrometheus.attrClusterType;
        this.attrVpcId = rosManagedPrometheus.attrVpcId;
    }
}
exports.ManagedPrometheus = ManagedPrometheus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlZHByb21ldGhldXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYW5hZ2VkcHJvbWV0aGV1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMscURBQXdEO0FBRXZCLDBHQUZ4QixxQ0FBb0IsT0FFNkI7QUE0QzFEOzs7O0dBSUc7QUFDSCxNQUFhLGlCQUFrQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0IvQzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUE2QixFQUFFLG1DQUEyQyxJQUFJO1FBQ3hILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLHFDQUFvQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDN0QsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVc7WUFDdEcsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtTQUM3QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLENBQUMsZUFBZSxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxDQUFDO0lBQ3BELENBQUM7Q0FDSjtBQXpDRCw4Q0F5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NNYW5hZ2VkUHJvbWV0aGV1cyB9IGZyb20gJy4vYXJtcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NNYW5hZ2VkUHJvbWV0aGV1cyBhcyBNYW5hZ2VkUHJvbWV0aGV1c1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgTWFuYWdlZFByb21ldGhldXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXJtcy1tYW5hZ2VkcHJvbWV0aGV1c1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hbmFnZWRQcm9tZXRoZXVzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2x1c3RlclR5cGU6IFRoZSB0eXBlIG9mIHRoZSBjbHVzdGVyLiBDdXJyZW50bHksIG9ubHkgYXNrLCBlY3MgYW5kIG9uZSBjbHVzdGVycyBhcmUgc3VwcG9ydGVkLiBEZWZhdWx0IGlzIGVjcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVyVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBUaGUgc2VjdXJpdHkgZ3JvdXAgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNJZDogVGhlIHZwYyBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgdnN3aXRoIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIEt1YmVybmV0ZXMgY2x1c3RlciBvZiBBbGliYWJhIENsb3VkIENvbnRhaW5lciBTZXJ2aWNlIGZvciBLdWJlcm5ldGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNsdXN0ZXJOYW1lOiBUaGUgbmFtZSBvZiB0aGUgY2x1c3Rlci4gUmVxdWlyZWQgd2hlbiB0aGUgQ2x1c3RlclR5cGUgaXMgZWNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ3JhZmFuYUluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgbWFuYWdlZCBHcmFmYW5hIHdvcmtzcGFjZSBib3VuZCB0byB0aGUgY2x1c3Rlci4gV2hlbiBlbXB0eSBvciBcImZyZWVcIiwgYmluZHMgdG8gdGhlIHNoYXJlZCB2ZXJzaW9uIG9mIEdyYWZhbmEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JhZmFuYUluc3RhbmNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFSTVM6Ok1hbmFnZWRQcm9tZXRoZXVzYCwgd2hpY2ggaXMgdXNlZCB0byBpbnN0YWxsIGEgUHJvbWV0aGV1cyBhZ2VudCBpbiBhIEFDSyBTZXJ2ZXJsZXNzIChBU0spIGNsdXN0ZXIgb3IgYW4gRWxhc3RpYyBDb21wdXRlIFNlcnZpY2UgKEVDUykgY2x1c3Rlci5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc01hbmFnZWRQcm9tZXRoZXVzYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXJtcy1tYW5hZ2VkcHJvbWV0aGV1c1xuICovXG5leHBvcnQgY2xhc3MgTWFuYWdlZFByb21ldGhldXMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IE1hbmFnZWRQcm9tZXRoZXVzUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENsdXN0ZXJUeXBlOiBUaGUgdHlwZSBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVnBjSWQ6IFRoZSB2cGMgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IE1hbmFnZWRQcm9tZXRoZXVzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NNYW5hZ2VkUHJvbWV0aGV1cyA9IG5ldyBSb3NNYW5hZ2VkUHJvbWV0aGV1cyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIGNsdXN0ZXJJZDogcHJvcHMuY2x1c3RlcklkLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cElkOiBwcm9wcy5zZWN1cml0eUdyb3VwSWQsXG4gICAgICAgICAgICB2U3dpdGNoSWQ6IHByb3BzLnZTd2l0Y2hJZCxcbiAgICAgICAgICAgIGNsdXN0ZXJOYW1lOiBwcm9wcy5jbHVzdGVyTmFtZSxcbiAgICAgICAgICAgIGNsdXN0ZXJUeXBlOiBwcm9wcy5jbHVzdGVyVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmNsdXN0ZXJUeXBlID09PSBudWxsID8gJ2VjcycgOiBwcm9wcy5jbHVzdGVyVHlwZSxcbiAgICAgICAgICAgIGdyYWZhbmFJbnN0YW5jZUlkOiBwcm9wcy5ncmFmYW5hSW5zdGFuY2VJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NNYW5hZ2VkUHJvbWV0aGV1cztcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlclR5cGUgPSByb3NNYW5hZ2VkUHJvbWV0aGV1cy5hdHRyQ2x1c3RlclR5cGU7XG4gICAgICAgIHRoaXMuYXR0clZwY0lkID0gcm9zTWFuYWdlZFByb21ldGhldXMuYXR0clZwY0lkO1xuICAgIH1cbn1cbiJdfQ==