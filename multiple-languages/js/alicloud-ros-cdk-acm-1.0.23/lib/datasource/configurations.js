"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configurations = exports.ConfigurationsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const acm_generated_1 = require("./acm.generated");
Object.defineProperty(exports, "ConfigurationsProperty", { enumerable: true, get: function () { return acm_generated_1.RosConfigurations; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ACM::Configurations`, which is used to query the details of configurations.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConfigurations`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-configurations
 */
class Configurations extends ros.Resource {
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
        const rosConfigurations = new acm_generated_1.RosConfigurations(this, id, {
            group: props.group,
            dataId: props.dataId,
            namespaceId: props.namespaceId,
            appName: props.appName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConfigurations;
        this.attrConfigurations = rosConfigurations.attrConfigurations;
        this.attrDataIds = rosConfigurations.attrDataIds;
    }
}
exports.Configurations = Configurations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWd1cmF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQW9EO0FBRXRCLHVHQUZyQixpQ0FBaUIsT0FFMEI7QUE2QnBEOzs7O0dBSUc7QUFDSCxNQUFhLGNBQWUsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCNUM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNySCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxpQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztTQUN6QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvRCxJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztJQUNyRCxDQUFDO0NBQ0o7QUF0Q0Qsd0NBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ29uZmlndXJhdGlvbnMgfSBmcm9tICcuL2FjbS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NDb25maWd1cmF0aW9ucyBhcyBDb25maWd1cmF0aW9uc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQ29uZmlndXJhdGlvbnNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWFjbS1jb25maWd1cmF0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb25zUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZXNwYWNlSWQ6IFRoZSBuYW1lc3BhY2UgSUQgb2YgY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhcHBOYW1lOiBUaGUgYXBwIG5hbWUgb2YgY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYXRhSWQ6IFRoZSBkYXRhIElEIG9mIGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBkYXRhSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBncm91cDogVGhlIGdyb3VwIG9mIGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkFDTTo6Q29uZmlndXJhdGlvbnNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBkZXRhaWxzIG9mIGNvbmZpZ3VyYXRpb25zLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zQ29uZmlndXJhdGlvbnNgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtYWNtLWNvbmZpZ3VyYXRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9ucyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogQ29uZmlndXJhdGlvbnNQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29uZmlndXJhdGlvbnM6IFRoZSBsaXN0IG9mIGNvbmZpZ3VyYXRpb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29uZmlndXJhdGlvbnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEYXRhSWRzOiBUaGUgbGlzdCBvZiBjb25maWd1cmF0aW9uIGRhdGEgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGF0YUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENvbmZpZ3VyYXRpb25zUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NDb25maWd1cmF0aW9ucyA9IG5ldyBSb3NDb25maWd1cmF0aW9ucyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGdyb3VwOiBwcm9wcy5ncm91cCxcbiAgICAgICAgICAgIGRhdGFJZDogcHJvcHMuZGF0YUlkLFxuICAgICAgICAgICAgbmFtZXNwYWNlSWQ6IHByb3BzLm5hbWVzcGFjZUlkLFxuICAgICAgICAgICAgYXBwTmFtZTogcHJvcHMuYXBwTmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDb25maWd1cmF0aW9ucztcbiAgICAgICAgdGhpcy5hdHRyQ29uZmlndXJhdGlvbnMgPSByb3NDb25maWd1cmF0aW9ucy5hdHRyQ29uZmlndXJhdGlvbnM7XG4gICAgICAgIHRoaXMuYXR0ckRhdGFJZHMgPSByb3NDb25maWd1cmF0aW9ucy5hdHRyRGF0YUlkcztcbiAgICB9XG59XG4iXX0=