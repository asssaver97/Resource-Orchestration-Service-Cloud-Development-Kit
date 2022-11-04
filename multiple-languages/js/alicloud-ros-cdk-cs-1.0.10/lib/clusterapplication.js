"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterApplication = exports.ClusterApplicationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cs_generated_1 = require("./cs.generated");
Object.defineProperty(exports, "ClusterApplicationProperty", { enumerable: true, get: function () { return cs_generated_1.RosClusterApplication; } });
/**
 * A ROS resource type:  `ALIYUN::CS::ClusterApplication`
 */
class ClusterApplication extends ros.Resource {
    /**
     * Create a new `ALIYUN::CS::ClusterApplication`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosClusterApplication = new cs_generated_1.RosClusterApplication(this, id, {
            yamlContent: props.yamlContent,
            clusterId: props.clusterId,
            defaultNamespace: props.defaultNamespace === undefined || props.defaultNamespace === null ? 'default' : props.defaultNamespace,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterApplication;
        this.attrClusterId = rosClusterApplication.attrClusterId;
    }
}
exports.ClusterApplication = ClusterApplication;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3RlcmFwcGxpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2x1c3RlcmFwcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpREFBdUQ7QUFFckIsMkdBRnpCLG9DQUFxQixPQUU4QjtBQXdCNUQ7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWWhEOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBOEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN6SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxvQ0FBcUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9ELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7U0FDakksRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztJQUM3RCxDQUFDO0NBQ0o7QUE5QkQsZ0RBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ2x1c3RlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi9jcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NDbHVzdGVyQXBwbGljYXRpb24gYXMgQ2x1c3RlckFwcGxpY2F0aW9uUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNTOjpDbHVzdGVyQXBwbGljYXRpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2x1c3RlckFwcGxpY2F0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIGt1YmVybmV0ZXMgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHlhbWxDb250ZW50OiBUaGUgeWFtbCBjb250ZW50IG9mIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHlhbWxDb250ZW50OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWZhdWx0TmFtZXNwYWNlOiBUaGUgZGVmYXVsdCBuYW1lc3BhY2UgZm9yIHRoZSBhcHBsaWNhdGlvbiwgZGVmYXVsdCB2YWx1ZSBpcyBkZWZhdWx0LlxuICAgICAqIElmIGEgbmFtZXNwYWNlIGlzIGRlZmluZWQgaW4geWFtbCBtZXRhZGF0YSwgaXRzIHByaW9yaXR5IGlzIGhpZ2hlciB0aGFuIERlZmF1bHROYW1lc3BhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVmYXVsdE5hbWVzcGFjZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q1M6OkNsdXN0ZXJBcHBsaWNhdGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIENsdXN0ZXJBcHBsaWNhdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDUzo6Q2x1c3RlckFwcGxpY2F0aW9uYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDbHVzdGVyQXBwbGljYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NDbHVzdGVyQXBwbGljYXRpb24gPSBuZXcgUm9zQ2x1c3RlckFwcGxpY2F0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgeWFtbENvbnRlbnQ6IHByb3BzLnlhbWxDb250ZW50LFxuICAgICAgICAgICAgY2x1c3RlcklkOiBwcm9wcy5jbHVzdGVySWQsXG4gICAgICAgICAgICBkZWZhdWx0TmFtZXNwYWNlOiBwcm9wcy5kZWZhdWx0TmFtZXNwYWNlID09PSB1bmRlZmluZWQgfHwgcHJvcHMuZGVmYXVsdE5hbWVzcGFjZSA9PT0gbnVsbCA/ICdkZWZhdWx0JyA6IHByb3BzLmRlZmF1bHROYW1lc3BhY2UsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQ2x1c3RlckFwcGxpY2F0aW9uO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSByb3NDbHVzdGVyQXBwbGljYXRpb24uYXR0ckNsdXN0ZXJJZDtcbiAgICB9XG59XG4iXX0=