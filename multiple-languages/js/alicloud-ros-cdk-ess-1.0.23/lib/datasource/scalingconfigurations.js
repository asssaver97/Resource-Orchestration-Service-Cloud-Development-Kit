"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalingConfigurations = exports.ScalingConfigurationsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ess_generated_1 = require("./ess.generated");
Object.defineProperty(exports, "ScalingConfigurationsProperty", { enumerable: true, get: function () { return ess_generated_1.RosScalingConfigurations; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ESS::ScalingConfigurations`, which is used to query the details of scaling configurations.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScalingConfigurations`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
 */
class ScalingConfigurations extends ros.Resource {
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
        const rosScalingConfigurations = new ess_generated_1.RosScalingConfigurations(this, id, {
            scalingGroupId: props.scalingGroupId,
            scalingConfigurationIds: props.scalingConfigurationIds,
            scalingConfigurationNames: props.scalingConfigurationNames,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingConfigurations;
        this.attrScalingConfigurationIds = rosScalingConfigurations.attrScalingConfigurationIds;
        this.attrScalingConfigurations = rosScalingConfigurations.attrScalingConfigurations;
    }
}
exports.ScalingConfigurations = ScalingConfigurations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGluZ2NvbmZpZ3VyYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NhbGluZ2NvbmZpZ3VyYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBMkQ7QUFFdEIsOEdBRjVCLHdDQUF3QixPQUVpQztBQXdCbEU7Ozs7R0FJRztBQUNILE1BQWEscUJBQXNCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQm5EOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQW9DLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSx3Q0FBd0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JFLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsdUJBQXVCO1lBQ3RELHlCQUF5QixFQUFFLEtBQUssQ0FBQyx5QkFBeUI7U0FDN0QsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsd0JBQXdCLENBQUMsMkJBQTJCLENBQUM7UUFDeEYsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHdCQUF3QixDQUFDLHlCQUF5QixDQUFDO0lBQ3hGLENBQUM7Q0FDSjtBQXJDRCxzREFxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTY2FsaW5nQ29uZmlndXJhdGlvbnMgfSBmcm9tICcuL2Vzcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTY2FsaW5nQ29uZmlndXJhdGlvbnMgYXMgU2NhbGluZ0NvbmZpZ3VyYXRpb25zUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBTY2FsaW5nQ29uZmlndXJhdGlvbnNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWVzcy1zY2FsaW5nY29uZmlndXJhdGlvbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTY2FsaW5nQ29uZmlndXJhdGlvbnNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzY2FsaW5nQ29uZmlndXJhdGlvbklkczogVGhlIElEIG9mIHNjYWxpbmcgY29uZmlndXJhdGlvbiB0aGF0IHlvdSB3YW50IHRvIHF1ZXJ5LiBWYWxpZCB2YWx1ZXMgOiAxIHRvIDEwLiBUaGUgSURzIG9mIGFjdGl2ZSBhbmQgaW5hY3RpdmUgc2NhbGluZyBjb25maWd1cmF0aW9ucyBhcmUgZGlzcGxheWVkIGluIHRoZSBxdWVyeSByZXN1bHRzLCBhbmQgY2FuIGJlIGRpZmZlcmVudGlhdGVkIGJ5IExpZmVjeWNsZVN0YXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjYWxpbmdDb25maWd1cmF0aW9uSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNjYWxpbmdDb25maWd1cmF0aW9uTmFtZXM6IFRoZSBuYW1lIG9mIHNjYWxpbmcgY29uZmlndXJhdGlvbiB0aGF0IHlvdSB3YW50IHRvIHF1ZXJ5LiBWYWxpZCB2YWx1ZXMgOiAxIHRvIDEwLiBUaGUgbmFtZXMgb2YgaW5hY3RpdmUgc2NhbGluZyBjb25maWd1cmF0aW9ucyBhcmUgbm90IGRpc3BsYXllZCBpbiB0aGUgcXVlcnkgcmVzdWx0cywgYW5kIG5vIGVycm9yIGlzIHJlcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjYWxpbmdDb25maWd1cmF0aW9uTmFtZXM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2NhbGluZ0dyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgc2NhbGluZyBncm91cC4gWW91IGNhbiB1c2UgdGhlIElEIHRvIHF1ZXJ5IGFsbCBzY2FsaW5nIGNvbmZpZ3VyYXRpb25zIGluIHRoZSBzY2FsaW5nIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjYWxpbmdHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6RVNTOjpTY2FsaW5nQ29uZmlndXJhdGlvbnNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBkZXRhaWxzIG9mIHNjYWxpbmcgY29uZmlndXJhdGlvbnMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NTY2FsaW5nQ29uZmlndXJhdGlvbnNgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtZXNzLXNjYWxpbmdjb25maWd1cmF0aW9uc1xuICovXG5leHBvcnQgY2xhc3MgU2NhbGluZ0NvbmZpZ3VyYXRpb25zIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBTY2FsaW5nQ29uZmlndXJhdGlvbnNQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2NhbGluZ0NvbmZpZ3VyYXRpb25JZHM6IFRoZSBsaXN0IG9mIHNjYWxpbmcgY29uZmlndXJhdGlvbiBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTY2FsaW5nQ29uZmlndXJhdGlvbklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNjYWxpbmdDb25maWd1cmF0aW9uczogVGhlIGxpc3Qgb2Ygc2NhbGluZyBjb25maWd1cmF0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNjYWxpbmdDb25maWd1cmF0aW9uczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NTY2FsaW5nQ29uZmlndXJhdGlvbnMgPSBuZXcgUm9zU2NhbGluZ0NvbmZpZ3VyYXRpb25zKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgc2NhbGluZ0dyb3VwSWQ6IHByb3BzLnNjYWxpbmdHcm91cElkLFxuICAgICAgICAgICAgc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHM6IHByb3BzLnNjYWxpbmdDb25maWd1cmF0aW9uSWRzLFxuICAgICAgICAgICAgc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lczogcHJvcHMuc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lcyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTY2FsaW5nQ29uZmlndXJhdGlvbnM7XG4gICAgICAgIHRoaXMuYXR0clNjYWxpbmdDb25maWd1cmF0aW9uSWRzID0gcm9zU2NhbGluZ0NvbmZpZ3VyYXRpb25zLmF0dHJTY2FsaW5nQ29uZmlndXJhdGlvbklkcztcbiAgICAgICAgdGhpcy5hdHRyU2NhbGluZ0NvbmZpZ3VyYXRpb25zID0gcm9zU2NhbGluZ0NvbmZpZ3VyYXRpb25zLmF0dHJTY2FsaW5nQ29uZmlndXJhdGlvbnM7XG4gICAgfVxufVxuIl19