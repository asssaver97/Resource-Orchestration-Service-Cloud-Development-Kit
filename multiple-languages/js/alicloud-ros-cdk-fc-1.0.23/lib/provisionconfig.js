"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvisionConfig = exports.ProvisionConfigProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const fc_generated_1 = require("./fc.generated");
Object.defineProperty(exports, "ProvisionConfigProperty", { enumerable: true, get: function () { return fc_generated_1.RosProvisionConfig; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC::ProvisionConfig`, which is used to create provisioned instances in Function Compute.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProvisionConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
 */
class ProvisionConfig extends ros.Resource {
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
        const rosProvisionConfig = new fc_generated_1.RosProvisionConfig(this, id, {
            functionName: props.functionName,
            target: props.target,
            serviceName: props.serviceName,
            qualifier: props.qualifier,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProvisionConfig;
        this.attrFunctionName = rosProvisionConfig.attrFunctionName;
        this.attrQualifier = rosProvisionConfig.attrQualifier;
        this.attrResource = rosProvisionConfig.attrResource;
        this.attrServiceName = rosProvisionConfig.attrServiceName;
        this.attrTarget = rosProvisionConfig.attrTarget;
    }
}
exports.ProvisionConfig = ProvisionConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlzaW9uY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdmlzaW9uY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpREFBb0Q7QUFFckIsd0dBRnRCLGlDQUFrQixPQUUyQjtBQThCdEQ7Ozs7R0FJRztBQUNILE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQStCN0M7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMkIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN0SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxpQ0FBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3pELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztTQUM3QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLGtCQUFrQixDQUFDLFlBQVksQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLGtCQUFrQixDQUFDLGVBQWUsQ0FBQztRQUMxRCxJQUFJLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztJQUNwRCxDQUFDO0NBQ0o7QUF4REQsMENBd0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUHJvdmlzaW9uQ29uZmlnIH0gZnJvbSAnLi9mYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NQcm92aXNpb25Db25maWcgYXMgUHJvdmlzaW9uQ29uZmlnUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBQcm92aXNpb25Db25maWdgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtcHJvdmlzaW9uY29uZmlnXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvdmlzaW9uQ29uZmlnUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBGdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBxdWFsaWZpZXI6IFNlcnZpY2UncyBhbGlhcy5cbiAgICAgKiBFeGFtcGxlIDogXCJMQVRFU1RcIlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHF1YWxpZmllcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VydmljZU5hbWU6IFNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YXJnZXQ6IE51bWJlciBvZiBwcm92aXNpb25cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RkM6OlByb3Zpc2lvbkNvbmZpZ2AsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIHByb3Zpc2lvbmVkIGluc3RhbmNlcyBpbiBGdW5jdGlvbiBDb21wdXRlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zUHJvdmlzaW9uQ29uZmlnYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtcHJvdmlzaW9uY29uZmlnXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm92aXNpb25Db25maWcgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFByb3Zpc2lvbkNvbmZpZ1Byb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBGdW5jdGlvbk5hbWU6IFRoZSBmdW5jdGlvbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGdW5jdGlvbk5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBRdWFsaWZpZXI6IFRoZSBzZXJ2aWNlIGFsaWFzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJRdWFsaWZpZXI6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZXNvdXJjZTogVGhlIHJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlcnZpY2VOYW1lOiBUaGUgc2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRhcmdldDogTnVtYmVyIG9mIHByb3Zpc2lvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFyZ2V0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUHJvdmlzaW9uQ29uZmlnUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NQcm92aXNpb25Db25maWcgPSBuZXcgUm9zUHJvdmlzaW9uQ29uZmlnKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwcm9wcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldCxcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBwcm9wcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIHF1YWxpZmllcjogcHJvcHMucXVhbGlmaWVyLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1Byb3Zpc2lvbkNvbmZpZztcbiAgICAgICAgdGhpcy5hdHRyRnVuY3Rpb25OYW1lID0gcm9zUHJvdmlzaW9uQ29uZmlnLmF0dHJGdW5jdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuYXR0clF1YWxpZmllciA9IHJvc1Byb3Zpc2lvbkNvbmZpZy5hdHRyUXVhbGlmaWVyO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZSA9IHJvc1Byb3Zpc2lvbkNvbmZpZy5hdHRyUmVzb3VyY2U7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gcm9zUHJvdmlzaW9uQ29uZmlnLmF0dHJTZXJ2aWNlTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyVGFyZ2V0ID0gcm9zUHJvdmlzaW9uQ29uZmlnLmF0dHJUYXJnZXQ7XG4gICAgfVxufVxuIl19