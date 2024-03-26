"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceInstances = exports.ServiceInstancesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const computenest_generated_1 = require("./computenest.generated");
Object.defineProperty(exports, "ServiceInstancesProperty", { enumerable: true, get: function () { return computenest_generated_1.RosServiceInstances; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ComputeNest::ServiceInstances`, which is used to query the information about service instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstances
 */
class ServiceInstances extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosServiceInstances = new computenest_generated_1.RosServiceInstances(this, id, {
            resourceGroupId: props.resourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceInstances;
        this.attrServiceInstanceIds = rosServiceInstances.attrServiceInstanceIds;
        this.attrServiceInstances = rosServiceInstances.attrServiceInstances;
    }
}
exports.ServiceInstances = ServiceInstances;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZWluc3RhbmNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2VpbnN0YW5jZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1FQUE4RDtBQUU5Qix5R0FGdkIsMkNBQW1CLE9BRTRCO0FBY3hEOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0I5Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUErQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDNUgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLG1CQUFtQixHQUFHLElBQUksMkNBQW1CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzRCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7U0FDekMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUNwQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsbUJBQW1CLENBQUMsc0JBQXNCLENBQUM7UUFDekUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDO0lBQ3pFLENBQUM7Q0FDSjtBQW5DRCw0Q0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTZXJ2aWNlSW5zdGFuY2VzIH0gZnJvbSAnLi9jb21wdXRlbmVzdC5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTZXJ2aWNlSW5zdGFuY2VzIGFzIFNlcnZpY2VJbnN0YW5jZXNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFNlcnZpY2VJbnN0YW5jZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNvbXB1dGVuZXN0LXNlcnZpY2VpbnN0YW5jZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlSW5zdGFuY2VzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkNvbXB1dGVOZXN0OjpTZXJ2aWNlSW5zdGFuY2VzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgaW5mb3JtYXRpb24gYWJvdXQgc2VydmljZSBpbnN0YW5jZXMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NTZXJ2aWNlSW5zdGFuY2VzYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNvbXB1dGVuZXN0LXNlcnZpY2VpbnN0YW5jZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZpY2VJbnN0YW5jZXMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFNlcnZpY2VJbnN0YW5jZXNQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmljZUluc3RhbmNlSWRzOiBUaGUgbGlzdCBvZiBzZXJ2aWNlIGluc3RhbmNlIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VJbnN0YW5jZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlcnZpY2VJbnN0YW5jZXM6IFRoZSBsaXN0IG9mIHNlcnZpY2UgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZUluc3RhbmNlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNlcnZpY2VJbnN0YW5jZXNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zU2VydmljZUluc3RhbmNlcyA9IG5ldyBSb3NTZXJ2aWNlSW5zdGFuY2VzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU2VydmljZUluc3RhbmNlcztcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZUluc3RhbmNlSWRzID0gcm9zU2VydmljZUluc3RhbmNlcy5hdHRyU2VydmljZUluc3RhbmNlSWRzO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlSW5zdGFuY2VzID0gcm9zU2VydmljZUluc3RhbmNlcy5hdHRyU2VydmljZUluc3RhbmNlcztcbiAgICB9XG59XG4iXX0=