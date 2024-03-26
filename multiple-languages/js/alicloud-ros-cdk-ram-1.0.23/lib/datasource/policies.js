"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Policies = exports.PoliciesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ram_generated_1 = require("./ram.generated");
Object.defineProperty(exports, "PoliciesProperty", { enumerable: true, get: function () { return ram_generated_1.RosPolicies; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RAM::Policies`, which is used to query policies.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPolicies`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-policies
 */
class Policies extends ros.Resource {
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
        const rosPolicies = new ram_generated_1.RosPolicies(this, id, {
            groupName: props.groupName,
            policyType: props.policyType,
            roleName: props.roleName,
            userName: props.userName,
            policyName: props.policyName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPolicies;
        this.attrPolicies = rosPolicies.attrPolicies;
        this.attrPolicyNames = rosPolicies.attrPolicyNames;
    }
}
exports.Policies = Policies;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9saWNpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2xpY2llcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBa0N4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQnRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQXVCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sV0FBVyxHQUFHLElBQUksMkJBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQztJQUN2RCxDQUFDO0NBQ0o7QUF2Q0QsNEJBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUG9saWNpZXMgfSBmcm9tICcuL3JhbS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NQb2xpY2llcyBhcyBQb2xpY2llc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUG9saWNpZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXJhbS1wb2xpY2llc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFBvbGljaWVzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ3JvdXBOYW1lOiBUaGUgc3BlY2lmaWMgZ3JvdXAgdG8gd2hpY2ggcG9saWNpZXMgYXR0YWNoZWQuT25seSBvbmUgb2YgVXNlck5hbWUsIEdyb3VwTmFtZSwgYW5kIFJvbGVOYW1lIGNhbiBiZSBzcGVjaWZpZWQgYXQgbW9zdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwb2xpY3lOYW1lOiBGaWx0ZXIgdGhlIHJlc3VsdHMgYnkgYSBzcGVjaWZpYyBwb2xpY3kgbmFtZS4gU3VwcG9ydHMgdXNpbmcgKiBhbmQgPyAgdG8gZnV6enkgbWF0Y2guXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBvbGljeVR5cGU6IEZpbHRlciB0aGUgcmVzdWx0cyBieSBhIHNwZWNpZmljIHBvbGljeSB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGljeVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb2xlTmFtZTogVGhlIHNwZWNpZmljIHJvbGUgdG8gd2hpY2ggcG9saWNpZXMgYXR0YWNoZWQuT25seSBvbmUgb2YgVXNlck5hbWUsIEdyb3VwTmFtZSwgYW5kIFJvbGVOYW1lIGNhbiBiZSBzcGVjaWZpZWQgYXQgbW9zdC5cbiAgICAgKi9cbiAgICByZWFkb25seSByb2xlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzZXJOYW1lOiBUaGUgc3BlY2lmaWMgdXNlciB0byB3aGljaCBwb2xpY2llcyBhdHRhY2hlZC4gT25seSBvbmUgb2YgVXNlck5hbWUsIEdyb3VwTmFtZSwgYW5kIFJvbGVOYW1lIGNhbiBiZSBzcGVjaWZpZWQgYXQgbW9zdC5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VyTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlJBTTo6UG9saWNpZXNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IHBvbGljaWVzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zUG9saWNpZXNgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtcmFtLXBvbGljaWVzXG4gKi9cbmV4cG9ydCBjbGFzcyBQb2xpY2llcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogUG9saWNpZXNQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUG9saWNpZXM6IFRoZSBsaXN0IG9mIHBvbGljaWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG9saWNpZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQb2xpY3lOYW1lczogVGhlIGxpc3Qgb2YgcG9saWN5IG5hbWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG9saWN5TmFtZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBQb2xpY2llc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NQb2xpY2llcyA9IG5ldyBSb3NQb2xpY2llcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGdyb3VwTmFtZTogcHJvcHMuZ3JvdXBOYW1lLFxuICAgICAgICAgICAgcG9saWN5VHlwZTogcHJvcHMucG9saWN5VHlwZSxcbiAgICAgICAgICAgIHJvbGVOYW1lOiBwcm9wcy5yb2xlTmFtZSxcbiAgICAgICAgICAgIHVzZXJOYW1lOiBwcm9wcy51c2VyTmFtZSxcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IHByb3BzLnBvbGljeU5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUG9saWNpZXM7XG4gICAgICAgIHRoaXMuYXR0clBvbGljaWVzID0gcm9zUG9saWNpZXMuYXR0clBvbGljaWVzO1xuICAgICAgICB0aGlzLmF0dHJQb2xpY3lOYW1lcyA9IHJvc1BvbGljaWVzLmF0dHJQb2xpY3lOYW1lcztcbiAgICB9XG59XG4iXX0=