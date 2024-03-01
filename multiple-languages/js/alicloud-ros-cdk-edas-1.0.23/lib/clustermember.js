"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterMember = exports.ClusterMemberProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const edas_generated_1 = require("./edas.generated");
Object.defineProperty(exports, "ClusterMemberProperty", { enumerable: true, get: function () { return edas_generated_1.RosClusterMember; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::ClusterMember`, which is used to add Elastic Compute Service (ECS) instances to a cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterMember`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-clustermember
 */
class ClusterMember extends ros.Resource {
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
        const rosClusterMember = new edas_generated_1.RosClusterMember(this, id, {
            clusterId: props.clusterId,
            instanceIds: props.instanceIds,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterMember;
        this.attrClusterId = rosClusterMember.attrClusterId;
        this.attrClusterMemberIds = rosClusterMember.attrClusterMemberIds;
        this.attrEcuIds = rosClusterMember.attrEcuIds;
        this.attrInstanceIds = rosClusterMember.attrInstanceIds;
    }
}
exports.ClusterMember = ClusterMember;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlcm1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsdXN0ZXJtZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUFvRDtBQUV2QixzR0FGcEIsaUNBQWdCLE9BRXlCO0FBd0JsRDs7OztHQUlHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUEwQjNDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGdCQUFnQixHQUFHLElBQUksaUNBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUMzQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztJQUM1RCxDQUFDO0NBQ0o7QUFqREQsc0NBaURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ2x1c3Rlck1lbWJlciB9IGZyb20gJy4vZWRhcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NDbHVzdGVyTWVtYmVyIGFzIENsdXN0ZXJNZW1iZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYENsdXN0ZXJNZW1iZXJgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZWRhcy1jbHVzdGVybWVtYmVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2x1c3Rlck1lbWJlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNsdXN0ZXJJZDogQ2x1c3RlciBJRCB0byBpbXBvcnQgRUNTIGluc3RhbmNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUlkczogRUNTIGluc3RhbmNlIElEIGxpc3QgdG8gaW1wb3J0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGFzc3dvcmQ6IFBhc3N3b3JkIEVDUyBob3N0cyBuZWVkIHRvIGltcG9ydCAoRUNTIHNldHRpbmdzIGNhbiBjb250aW51ZSB0byB1c2UgcHVyY2hhc2VkKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkVEQVM6OkNsdXN0ZXJNZW1iZXJgLCB3aGljaCBpcyB1c2VkIHRvIGFkZCBFbGFzdGljIENvbXB1dGUgU2VydmljZSAoRUNTKSBpbnN0YW5jZXMgdG8gYSBjbHVzdGVyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zQ2x1c3Rlck1lbWJlcmBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVkYXMtY2x1c3Rlcm1lbWJlclxuICovXG5leHBvcnQgY2xhc3MgQ2x1c3Rlck1lbWJlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogQ2x1c3Rlck1lbWJlclByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVySWQ6IENsdXN0ZXIgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVyTWVtYmVySWRzOiBDbHVzdGVyIG1lbWJlciBJRHMgY29ycmVzcG9uZGluZyB0byB0aGUgRUNTIGluc3RhbmNlIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJNZW1iZXJJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFY3VJZHM6IEVDVSBJRHMgY29ycmVzcG9uZGluZyB0byB0aGUgRUNTIGluc3RhbmNlIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVjdUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWRzOiBFQ1MgaW5zdGFuY2UgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDbHVzdGVyTWVtYmVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NDbHVzdGVyTWVtYmVyID0gbmV3IFJvc0NsdXN0ZXJNZW1iZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICBjbHVzdGVySWQ6IHByb3BzLmNsdXN0ZXJJZCxcbiAgICAgICAgICAgIGluc3RhbmNlSWRzOiBwcm9wcy5pbnN0YW5jZUlkcyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9wcy5wYXNzd29yZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDbHVzdGVyTWVtYmVyO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSByb3NDbHVzdGVyTWVtYmVyLmF0dHJDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJNZW1iZXJJZHMgPSByb3NDbHVzdGVyTWVtYmVyLmF0dHJDbHVzdGVyTWVtYmVySWRzO1xuICAgICAgICB0aGlzLmF0dHJFY3VJZHMgPSByb3NDbHVzdGVyTWVtYmVyLmF0dHJFY3VJZHM7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWRzID0gcm9zQ2x1c3Rlck1lbWJlci5hdHRySW5zdGFuY2VJZHM7XG4gICAgfVxufVxuIl19