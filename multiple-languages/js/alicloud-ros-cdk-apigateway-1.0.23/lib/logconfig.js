"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogConfig = exports.LogConfigProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const apigateway_generated_1 = require("./apigateway.generated");
Object.defineProperty(exports, "LogConfigProperty", { enumerable: true, get: function () { return apigateway_generated_1.RosLogConfig; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::LogConfig`, which is used to create a log configuration.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLogConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-logconfig
 */
class LogConfig extends ros.Resource {
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
        const rosLogConfig = new apigateway_generated_1.RosLogConfig(this, id, {
            slsLogStore: props.slsLogStore,
            slsProject: props.slsProject,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLogConfig;
        this.attrSlsLogStore = rosLogConfig.attrSlsLogStore;
        this.attrSlsProject = rosLogConfig.attrSlsProject;
    }
}
exports.LogConfig = LogConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpRUFBc0Q7QUFFN0Isa0dBRmhCLG1DQUFZLE9BRXFCO0FBbUIxQzs7OztHQUlHO0FBQ0gsTUFBYSxTQUFVLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQnZDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFCLEVBQUUsbUNBQTJDLElBQUk7UUFDaEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFlBQVksR0FBRyxJQUFJLG1DQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQy9CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUM7SUFDdEQsQ0FBQztDQUNKO0FBcENELDhCQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0xvZ0NvbmZpZyB9IGZyb20gJy4vYXBpZ2F0ZXdheS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NMb2dDb25maWcgYXMgTG9nQ29uZmlnUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBMb2dDb25maWdgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYXBpZ2F0ZXdheS1sb2djb25maWdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2dDb25maWdQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzbHNMb2dTdG9yZTogTG9nc3RvcmUgbmFtZSBvZiBTTFNcbiAgICAgKi9cbiAgICByZWFkb25seSBzbHNMb2dTdG9yZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2xzUHJvamVjdDogUHJvamVjdCBuYW1lIG9mIFNMU1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHNsc1Byb2plY3Q6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6QXBpR2F0ZXdheTo6TG9nQ29uZmlnYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBsb2cgY29uZmlndXJhdGlvbi5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0xvZ0NvbmZpZ2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktbG9nY29uZmlnXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2dDb25maWcgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IExvZ0NvbmZpZ1Byb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTbHNMb2dTdG9yZTogTG9nc3RvcmUgbmFtZSBvZiBTTFNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNsc0xvZ1N0b3JlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2xzUHJvamVjdDogUHJvamVjdCBuYW1lIG9mIFNMU1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2xzUHJvamVjdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IExvZ0NvbmZpZ1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zTG9nQ29uZmlnID0gbmV3IFJvc0xvZ0NvbmZpZyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHNsc0xvZ1N0b3JlOiBwcm9wcy5zbHNMb2dTdG9yZSxcbiAgICAgICAgICAgIHNsc1Byb2plY3Q6IHByb3BzLnNsc1Byb2plY3QsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zTG9nQ29uZmlnO1xuICAgICAgICB0aGlzLmF0dHJTbHNMb2dTdG9yZSA9IHJvc0xvZ0NvbmZpZy5hdHRyU2xzTG9nU3RvcmU7XG4gICAgICAgIHRoaXMuYXR0clNsc1Byb2plY3QgPSByb3NMb2dDb25maWcuYXR0clNsc1Byb2plY3Q7XG4gICAgfVxufVxuIl19