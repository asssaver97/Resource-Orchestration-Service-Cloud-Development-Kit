"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteTables = exports.RouteTablesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "RouteTablesProperty", { enumerable: true, get: function () { return vpc_generated_1.RosRouteTables; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::RouteTables`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRouteTables`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetables
 */
class RouteTables extends ros.Resource {
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
        const rosRouteTables = new vpc_generated_1.RosRouteTables(this, id, {
            routeTableId: props.routeTableId,
            vpcId: props.vpcId,
            resourceGroupId: props.resourceGroupId,
            routerType: props.routerType,
            routerId: props.routerId,
            routeTableName: props.routeTableName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRouteTables;
        this.attrRouteTableIds = rosRouteTables.attrRouteTableIds;
        this.attrRouteTables = rosRouteTables.attrRouteTables;
    }
}
exports.RouteTables = RouteTables;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGV0YWJsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3V0ZXRhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQTBDOUM7Ozs7R0FJRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0J6Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUEwQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDdkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztTQUN2QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUMxRCxDQUFDO0NBQ0o7QUF4Q0Qsa0NBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUm91dGVUYWJsZXMgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NSb3V0ZVRhYmxlcyBhcyBSb3V0ZVRhYmxlc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm91dGVUYWJsZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1yb3V0ZXRhYmxlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlVGFibGVzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSByb3V0ZSB0YWJsZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJvdXRlcklkOiBUaGUgSUQgb2YgdGhlIFZSb3V0ZXIgdG8gd2hpY2ggdGhlIHJvdXRlIHRhYmxlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb3V0ZXJUeXBlOiBUaGUgdHlwZSBvZiB0aGUgVlJvdXRlciB0byB3aGljaCB0aGUgcm91dGUgdGFibGUgYmVsb25ncy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFZSb3V0ZXIgKGRlZmF1bHQpOiBWUm91dGVyLlxuICAgICAqIFZCUjogVmlydHVhbCBCb3JkZXIgUm91dGVyIChWQlIpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlclR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb3V0ZVRhYmxlSWQ6IFRoZSBJRCBvZiB0aGUgcm91dGUgdGFibGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVUYWJsZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcm91dGVUYWJsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSByb3V0ZSB0YWJsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZVRhYmxlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZSb3V0ZXIgdG8gd2hpY2ggdGhlIHJvdXRlIHRhYmxlIGJlbG9uZ3MuXG4gICAgICogVGhlIHZhbHVlIG9mIHRoZSBSb3V0ZXJUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gVlJvdXRlciBhdXRvbWF0aWNhbGx5IHdoZW4gdGhpcyBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6VlBDOjpSb3V0ZVRhYmxlc2AuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NSb3V0ZVRhYmxlc2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtcm91dGV0YWJsZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvdXRlVGFibGVzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBSb3V0ZVRhYmxlc1Byb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSb3V0ZVRhYmxlSWRzOiB0aGUgbGlzdCBvZiB0aGUgcm91dGUgdGFibGUgaWRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVUYWJsZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJvdXRlVGFibGVzOiBUaGUgbGlzdCBvZiBUaGUgcm91dGUgdGFibGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVUYWJsZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3V0ZVRhYmxlc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NSb3V0ZVRhYmxlcyA9IG5ldyBSb3NSb3V0ZVRhYmxlcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHJvdXRlVGFibGVJZDogcHJvcHMucm91dGVUYWJsZUlkLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICByb3V0ZXJUeXBlOiBwcm9wcy5yb3V0ZXJUeXBlLFxuICAgICAgICAgICAgcm91dGVySWQ6IHByb3BzLnJvdXRlcklkLFxuICAgICAgICAgICAgcm91dGVUYWJsZU5hbWU6IHByb3BzLnJvdXRlVGFibGVOYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1JvdXRlVGFibGVzO1xuICAgICAgICB0aGlzLmF0dHJSb3V0ZVRhYmxlSWRzID0gcm9zUm91dGVUYWJsZXMuYXR0clJvdXRlVGFibGVJZHM7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlVGFibGVzID0gcm9zUm91dGVUYWJsZXMuYXR0clJvdXRlVGFibGVzO1xuICAgIH1cbn1cbiJdfQ==