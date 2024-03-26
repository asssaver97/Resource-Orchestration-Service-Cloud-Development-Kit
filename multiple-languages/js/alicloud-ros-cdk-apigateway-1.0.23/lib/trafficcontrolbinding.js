"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficControlBinding = exports.TrafficControlBindingProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const apigateway_generated_1 = require("./apigateway.generated");
Object.defineProperty(exports, "TrafficControlBindingProperty", { enumerable: true, get: function () { return apigateway_generated_1.RosTrafficControlBinding; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::TrafficControlBinding`, which is used to bind a custom throttling policy to APIs.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficControlBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
 */
class TrafficControlBinding extends ros.Resource {
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
        const rosTrafficControlBinding = new apigateway_generated_1.RosTrafficControlBinding(this, id, {
            stageName: props.stageName,
            apiIds: props.apiIds,
            trafficControlId: props.trafficControlId,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficControlBinding;
    }
}
exports.TrafficControlBinding = TrafficControlBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpY2NvbnRyb2xiaW5kaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhZmZpY2NvbnRyb2xiaW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpRUFBa0U7QUFFN0IsOEdBRjVCLCtDQUF3QixPQUVpQztBQTZCbEU7Ozs7R0FJRztBQUNILE1BQWEscUJBQXNCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFNbkQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUMsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSwrQ0FBd0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDekIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQztJQUM3QyxDQUFDO0NBQ0o7QUExQkQsc0RBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zVHJhZmZpY0NvbnRyb2xCaW5kaW5nIH0gZnJvbSAnLi9hcGlnYXRld2F5LmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1RyYWZmaWNDb250cm9sQmluZGluZyBhcyBUcmFmZmljQ29udHJvbEJpbmRpbmdQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFRyYWZmaWNDb250cm9sQmluZGluZ2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hcGlnYXRld2F5LXRyYWZmaWNjb250cm9sYmluZGluZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYWZmaWNDb250cm9sQmluZGluZ1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFwaUlkczogQVBJcyB0byBiaW5kIHdpdGggdGhlIHRyYWZmaWMgY29udHJvbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcGlJZHM6IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBncm91cElkOiBUaGUgaWQgb2YgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3RhZ2VOYW1lOiBCaW5kIHRyYWZmaWMgaW4gdGhpcyBzdGFnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdGFnZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRyYWZmaWNDb250cm9sSWQ6IFRoZSBpZCBvZiB0cmFmZmljIGNvbnRyb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhZmZpY0NvbnRyb2xJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpBcGlHYXRld2F5OjpUcmFmZmljQ29udHJvbEJpbmRpbmdgLCB3aGljaCBpcyB1c2VkIHRvIGJpbmQgYSBjdXN0b20gdGhyb3R0bGluZyBwb2xpY3kgdG8gQVBJcy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1RyYWZmaWNDb250cm9sQmluZGluZ2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFwaWdhdGV3YXktdHJhZmZpY2NvbnRyb2xiaW5kaW5nXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFmZmljQ29udHJvbEJpbmRpbmcgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFRyYWZmaWNDb250cm9sQmluZGluZ1Byb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBUcmFmZmljQ29udHJvbEJpbmRpbmdQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc1RyYWZmaWNDb250cm9sQmluZGluZyA9IG5ldyBSb3NUcmFmZmljQ29udHJvbEJpbmRpbmcodGhpcywgaWQsICB7XG4gICAgICAgICAgICBzdGFnZU5hbWU6IHByb3BzLnN0YWdlTmFtZSxcbiAgICAgICAgICAgIGFwaUlkczogcHJvcHMuYXBpSWRzLFxuICAgICAgICAgICAgdHJhZmZpY0NvbnRyb2xJZDogcHJvcHMudHJhZmZpY0NvbnRyb2xJZCxcbiAgICAgICAgICAgIGdyb3VwSWQ6IHByb3BzLmdyb3VwSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVHJhZmZpY0NvbnRyb2xCaW5kaW5nO1xuICAgIH1cbn1cbiJdfQ==