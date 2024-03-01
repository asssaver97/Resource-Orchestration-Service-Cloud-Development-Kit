"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = exports.GroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const rocketmq_generated_1 = require("./rocketmq.generated");
Object.defineProperty(exports, "GroupProperty", { enumerable: true, get: function () { return rocketmq_generated_1.RosGroup; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROCKETMQ::Group`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-group
 */
class Group extends ros.Resource {
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
        const rosGroup = new rocketmq_generated_1.RosGroup(this, id, {
            groupType: props.groupType,
            instanceId: props.instanceId,
            remark: props.remark,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroup;
        this.attrGroupId = rosGroup.attrGroupId;
        this.attrGroupType = rosGroup.attrGroupType;
        this.attrInstanceId = rosGroup.attrInstanceId;
    }
}
exports.Group = Group;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsNkRBQWdEO0FBRTNCLDhGQUZaLDZCQUFRLE9BRWlCO0FBa0NsQzs7OztHQUlHO0FBQ0gsTUFBYSxLQUFNLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFxQm5DOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWlCLEVBQUUsbUNBQTJDLElBQUk7UUFDNUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFFBQVEsR0FBRyxJQUFJLDZCQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDekIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7SUFDbEQsQ0FBQztDQUNKO0FBNUNELHNCQTRDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0dyb3VwIH0gZnJvbSAnLi9yb2NrZXRtcS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NHcm91cCBhcyBHcm91cFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgR3JvdXBgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcm9ja2V0bXEtZ3JvdXBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGdyb3VwSWQ6IFRoZSBncm91cCBJRCBvZiB0aGUgY29uc3VtcHRpb24gY2x1c3Rlci4gV2hlbiBjcmVhdGluZyBhIGdyb3VwIElELCBwYXkgYXR0ZW50aW9uIHRvIHRoZSBmb2xsb3dpbmcgYXNwZWN0czpcbiAgICAgKiBBIGdyb3VwIElEIHN0YXJ0cyB3aXRoXCJHSURfXCIgb3IgXCJHSUQtXCIsIGFuZCBjb250YWlucyBsZXR0ZXJzLCBudW1iZXJzLCBoeXBoZW5zICgtKSwgYW5kIHVuZGVyc2NvcmVzIChfKS5cbiAgICAgKiBBIGdyb3VwIElEIHJhbmdlcyBmcm9tIDcgdG8gNjQgYnl0ZXMuXG4gICAgICogT25jZSBhIGdyb3VwIElEIGlzIGNyZWF0ZWQsIGl0IGNhbm5vdCBiZSBlZGl0ZWQgYW55bW9yZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGdyb3VwVHlwZTogR3JvdXAgSUQgc3BlY2lmeSB0aGUgY3JlYXRpb24gb2YgYXBwbGljYWJsZSBhZ3JlZW1lbnRzLiBHcm91cCBJRCBUQ1AgcHJvdG9jb2wgYW5kIHRoZSBIVFRQIHByb3RvY29sIGNhbiBub3QgYmUgc2hhcmVkLCB0aGUgbmVlZCB0byBjcmVhdGUgc2VwYXJhdGVseS4gVmFsdWUgYXMgZm9sbG93czpcbiAgICAgKiB0Y3A6IERlZmF1bHQsIGluZGljYXRlcyBHcm91cCBJRCBpcyBjcmVhdGVkIG9ubHkgZm9yIHRoZSBUQ1AgcHJvdG9jb2wgbWVzc2FnaW5nLlxuICAgICAqIGh0dHA6IHJlcHJlc2VudHMgdGhlIEdyb3VwIElEIHdhcyBjcmVhdGVkIG9ubHkgZm9yIHRoZSBIVFRQIHByb3RvY29sIG1lc3NhZ2luZy5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZW1hcms6IFRoZSByZW1hcmtzIG9uIHRoZSByZXF1ZXN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlbWFyaz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Uk9DS0VUTVE6Okdyb3VwYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0dyb3VwYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcm9ja2V0bXEtZ3JvdXBcbiAqL1xuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBHcm91cFByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBHcm91cElkOiBHcm91cCBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEdyb3VwVHlwZTogR3JvdXAgVHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogSW5zdGFuY2UgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zR3JvdXAgPSBuZXcgUm9zR3JvdXAodGhpcywgaWQsICB7XG4gICAgICAgICAgICBncm91cFR5cGU6IHByb3BzLmdyb3VwVHlwZSxcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHByb3BzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICByZW1hcms6IHByb3BzLnJlbWFyayxcbiAgICAgICAgICAgIGdyb3VwSWQ6IHByb3BzLmdyb3VwSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zR3JvdXA7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwSWQgPSByb3NHcm91cC5hdHRyR3JvdXBJZDtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBUeXBlID0gcm9zR3JvdXAuYXR0ckdyb3VwVHlwZTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0dyb3VwLmF0dHJJbnN0YW5jZUlkO1xuICAgIH1cbn1cbiJdfQ==