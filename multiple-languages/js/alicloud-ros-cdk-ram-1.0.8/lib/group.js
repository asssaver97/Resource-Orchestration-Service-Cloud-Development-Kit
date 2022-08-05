"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = exports.GroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ram_generated_1 = require("./ram.generated");
Object.defineProperty(exports, "GroupProperty", { enumerable: true, get: function () { return ram_generated_1.RosGroup; } });
/**
 * A ROS resource type:  `ALIYUN::RAM::Group`
 */
class Group extends ros.Resource {
    /**
     * Create a new `ALIYUN::RAM::Group`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosGroup = new ram_generated_1.RosGroup(this, id, {
            groupName: props.groupName,
            policyAttachments: props.policyAttachments,
            policies: props.policies,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            comments: props.comments,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroup;
        this.attrGroupName = rosGroup.attrGroupName;
    }
}
exports.Group = Group;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTJDO0FBRXRCLDhGQUZaLHdCQUFRLE9BRWlCO0FBaUNsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWW5DOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWE7WUFDOUcsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQzNCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztJQUNoRCxDQUFDO0NBQ0o7QUFoQ0Qsc0JBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zR3JvdXAgfSBmcm9tICcuL3JhbS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NHcm91cCBhcyBHcm91cFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpSQU06Okdyb3VwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ3JvdXBOYW1lOiBTcGVjaWZpZXMgdGhlIGdyb3VwIG5hbWUsIGNvbnRhaW5pbmcgdXAgdG8gNjQgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbW1lbnRzOiBSZW1hcmsgaW5mb3JtYXRpb24sIHVwIHRvIDEyOCBjaGFyYWN0ZXJzIG9yIENoaW5lc2UgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21tZW50cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGV0YWNoIHRoZSBwb2xpY2llcyBhdHRhY2hlZCB0byB0aGUgZ3JvdXAuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRpb25Gb3JjZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwb2xpY2llczogRGVzY3JpYmVzIHdoYXQgYWN0aW9ucyBhcmUgYWxsb3dlZCBvbiB3aGF0IHJlc291cmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY2llcz86IEFycmF5PFJvc0dyb3VwLlBvbGljaWVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcG9saWN5QXR0YWNobWVudHM6IFN5c3RlbSBhbmQgY3VzdG9tIHBvbGljeSBuYW1lcyB0byBhdHRhY2guXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5QXR0YWNobWVudHM/OiBSb3NHcm91cC5Qb2xpY3lBdHRhY2htZW50c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpSQU06Okdyb3VwYFxuICovXG5leHBvcnQgY2xhc3MgR3JvdXAgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEdyb3VwTmFtZTogSWQgb2YgcmFtIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6UkFNOjpHcm91cGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogR3JvdXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NHcm91cCA9IG5ldyBSb3NHcm91cCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGdyb3VwTmFtZTogcHJvcHMuZ3JvdXBOYW1lLFxuICAgICAgICAgICAgcG9saWN5QXR0YWNobWVudHM6IHByb3BzLnBvbGljeUF0dGFjaG1lbnRzLFxuICAgICAgICAgICAgcG9saWNpZXM6IHByb3BzLnBvbGljaWVzLFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogcHJvcHMuZGVsZXRpb25Gb3JjZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmRlbGV0aW9uRm9yY2UgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLmRlbGV0aW9uRm9yY2UsXG4gICAgICAgICAgICBjb21tZW50czogcHJvcHMuY29tbWVudHMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zR3JvdXA7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwTmFtZSA9IHJvc0dyb3VwLmF0dHJHcm91cE5hbWU7XG4gICAgfVxufVxuIl19