"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicTagGroup = exports.DynamicTagGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cms_generated_1 = require("./cms.generated");
Object.defineProperty(exports, "DynamicTagGroupProperty", { enumerable: true, get: function () { return cms_generated_1.RosDynamicTagGroup; } });
/**
 * A ROS resource type:  `ALIYUN::CMS::DynamicTagGroup`
 */
class DynamicTagGroup extends ros.Resource {
    /**
     * Create a new `ALIYUN::CMS::DynamicTagGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDynamicTagGroup = new cms_generated_1.RosDynamicTagGroup(this, id, {
            contactGroupList: props.contactGroupList,
            matchExpressFilterRelation: props.matchExpressFilterRelation,
            enableSubscribeEvent: props.enableSubscribeEvent,
            templateIdList: props.templateIdList,
            tagKey: props.tagKey,
            enableInstallAgent: props.enableInstallAgent,
            matchExpress: props.matchExpress,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDynamicTagGroup;
        this.attrDynamicTagRuleId = rosDynamicTagGroup.attrDynamicTagRuleId;
        this.attrTagKey = rosDynamicTagGroup.attrTagKey;
    }
}
exports.DynamicTagGroup = DynamicTagGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY3RhZ2dyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHluYW1pY3RhZ2dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQW9EdEQ7O0dBRUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQjdDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMkIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN0SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxrQ0FBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3pELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLDBCQUEwQjtZQUM1RCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7U0FDbkMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztRQUNuQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsa0JBQWtCLENBQUMsb0JBQW9CLENBQUM7UUFDcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7SUFDcEQsQ0FBQztDQUNKO0FBeENELDBDQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0R5bmFtaWNUYWdHcm91cCB9IGZyb20gJy4vY21zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0R5bmFtaWNUYWdHcm91cCBhcyBEeW5hbWljVGFnR3JvdXBQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q01TOjpEeW5hbWljVGFnR3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY1RhZ0dyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29udGFjdEdyb3VwTGlzdDogQWxhcm0gY29udGFjdHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFjdEdyb3VwTGlzdDogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ0tleTogVGFnIGtleS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdLZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuYWJsZUluc3RhbGxBZ2VudDogV2hldGhlciB0byBlbmFibGUgaW5pdGlhbCBpbnN0YWxsYXRpb24gbW9uaXRvcmluZyBwbHVnLCBub3QgaW5zdGFsbGVkIGJ5IGRlZmF1bHQuIFZhbHVlcyBhcmU6XG4gICAgICogdHJ1ZTogZW5hYmxlIGluc3RhbGxhdGlvblxuICAgICAqIE5vdGUgSWYgRUNTIGdlbmVyYXRlZCBpbnN0YW5jZXMgZ3JvdXAgZG9lcyBub3QgbW9uaXRvciBwbHVnLWluIGluc3RhbGxlZCB3aWxsIGF0dGVtcHQgdG8gYXV0b21hdGljYWxseSBpbnN0YWxsLlxuICAgICAqIGZhbHNlOiBkaXNhYmxlIGluc3RhbGxhdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZUluc3RhbGxBZ2VudD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmFibGVTdWJzY3JpYmVFdmVudDogV2hldGhlciB0aGUgZXZlbnQgc3Vic2NyaXB0aW9uIGlzIGVuYWJsZWQuIFZhbHVlcyBhcmVcbiAgICAgKiA6dHJ1ZTogZW5hYmxlIGV2ZW50IHN1YnNjcmlwdGlvblxuICAgICAqIGZhbHNlOiBkaXNhYmxlIGV2ZW50IHN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZVN1YnNjcmliZUV2ZW50PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1hdGNoRXhwcmVzczogTWF0Y2hpbmcgbGlzdC4gT25seSBzdXBwb3J0cyBvbmUgY3VycmVudGx5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hdGNoRXhwcmVzcz86IEFycmF5PFJvc0R5bmFtaWNUYWdHcm91cC5NYXRjaEV4cHJlc3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbjogVGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSBjb25kaXRpb25hbCBleHByZXNzaW9ucy4gVmFsdWVzIGFyZTpcbiAgICAgKiBhbmQ6IHRoZSByZWxhdGlvbnNoaXAgYmV0d2VlblxuICAgICAqIG9yOiB0aGUgcmVsYXRpb25zaGlwIG9yIHRoZVxuICAgICAqIERlc2NyaXB0aW9uIGN1cnJlbnRseSBzdXBwb3J0cyBvbmx5IG9uZSBjb21iaW5hdGlvbiBvZiBjb25kaXRpb25zLCB0aGUgZm9sbG93LXVwIEFsaSBjbG91ZCB3aWxsIHN1cHBvcnQgYSB2YXJpZXR5IG9mIGNvbWJpbmF0aW9ucyBvZiBjb25kaXRpb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGVtcGxhdGVJZExpc3Q6IEFsYXJtIHRlbXBsYXRlIElEIGxpc3QuXG4gICAgICogV2hlbiB0aGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYXBwbGljYXRpb24gZ3JvdXAgc3luY2hyb25pemVzIHRhZ3MsIGl0IHdpbGwgZ2VuZXJhdGUgYWxhcm0gcnVsZXMgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgYWxhcm0gdGVtcGxhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGVtcGxhdGVJZExpc3Q/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpDTVM6OkR5bmFtaWNUYWdHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIER5bmFtaWNUYWdHcm91cCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRHluYW1pY1RhZ1J1bGVJZDogRHluYW1pYyB0YWcgcnVsZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckR5bmFtaWNUYWdSdWxlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUYWdLZXk6IFRhZyBrZXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYWdLZXk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDTVM6OkR5bmFtaWNUYWdHcm91cGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRHluYW1pY1RhZ0dyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zRHluYW1pY1RhZ0dyb3VwID0gbmV3IFJvc0R5bmFtaWNUYWdHcm91cCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGNvbnRhY3RHcm91cExpc3Q6IHByb3BzLmNvbnRhY3RHcm91cExpc3QsXG4gICAgICAgICAgICBtYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbjogcHJvcHMubWF0Y2hFeHByZXNzRmlsdGVyUmVsYXRpb24sXG4gICAgICAgICAgICBlbmFibGVTdWJzY3JpYmVFdmVudDogcHJvcHMuZW5hYmxlU3Vic2NyaWJlRXZlbnQsXG4gICAgICAgICAgICB0ZW1wbGF0ZUlkTGlzdDogcHJvcHMudGVtcGxhdGVJZExpc3QsXG4gICAgICAgICAgICB0YWdLZXk6IHByb3BzLnRhZ0tleSxcbiAgICAgICAgICAgIGVuYWJsZUluc3RhbGxBZ2VudDogcHJvcHMuZW5hYmxlSW5zdGFsbEFnZW50LFxuICAgICAgICAgICAgbWF0Y2hFeHByZXNzOiBwcm9wcy5tYXRjaEV4cHJlc3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zRHluYW1pY1RhZ0dyb3VwO1xuICAgICAgICB0aGlzLmF0dHJEeW5hbWljVGFnUnVsZUlkID0gcm9zRHluYW1pY1RhZ0dyb3VwLmF0dHJEeW5hbWljVGFnUnVsZUlkO1xuICAgICAgICB0aGlzLmF0dHJUYWdLZXkgPSByb3NEeW5hbWljVGFnR3JvdXAuYXR0clRhZ0tleTtcbiAgICB9XG59XG4iXX0=