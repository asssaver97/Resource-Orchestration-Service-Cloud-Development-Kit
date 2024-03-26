"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceEndpointAclPolicy = exports.InstanceEndpointAclPolicyProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cr_generated_1 = require("./cr.generated");
Object.defineProperty(exports, "InstanceEndpointAclPolicyProperty", { enumerable: true, get: function () { return cr_generated_1.RosInstanceEndpointAclPolicy; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CR::InstanceEndpointAclPolicy`, which is used to create a whitelist for the access port of a public-facing instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceEndpointAclPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
 */
class InstanceEndpointAclPolicy extends ros.Resource {
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
        const rosInstanceEndpointAclPolicy = new cr_generated_1.RosInstanceEndpointAclPolicy(this, id, {
            comment: props.comment,
            entry: props.entry,
            instanceId: props.instanceId,
            moduleName: props.moduleName === undefined || props.moduleName === null ? 'Registry' : props.moduleName,
            endpointType: props.endpointType === undefined || props.endpointType === null ? 'internet' : props.endpointType,
            regionId: props.regionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceEndpointAclPolicy;
        this.attrEntry = rosInstanceEndpointAclPolicy.attrEntry;
        this.attrInstanceId = rosInstanceEndpointAclPolicy.attrInstanceId;
    }
}
exports.InstanceEndpointAclPolicy = InstanceEndpointAclPolicy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2VlbmRwb2ludGFjbHBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhbmNlZW5kcG9pbnRhY2xwb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLGlEQUE4RDtBQUVyQixrSEFGaEMsMkNBQTRCLE9BRXFDO0FBd0MxRTs7OztHQUlHO0FBQ0gsTUFBYSx5QkFBMEIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCdkQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBcUMsRUFBRSxtQ0FBMkMsSUFBSTtRQUNoSSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sNEJBQTRCLEdBQUcsSUFBSSwyQ0FBNEIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVTtZQUN2RyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVk7WUFDL0csUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQzNCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsNEJBQTRCLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyw0QkFBNEIsQ0FBQyxTQUFTLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyw0QkFBNEIsQ0FBQyxjQUFjLENBQUM7SUFDdEUsQ0FBQztDQUNKO0FBeENELDhEQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3kgfSBmcm9tICcuL2NyLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3kgYXMgSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jci1pbnN0YW5jZWVuZHBvaW50YWNscG9saWN5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVudHJ5OiBUaGUgSVAgYWRkcmVzcyByYW5nZSB0aGF0IGlzIGFsbG93ZWQgdG8gYWNjZXNzIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbnRyeTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb21tZW50OiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGVudHJ5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbW1lbnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmRwb2ludFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBlbmRwb2ludC5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmRwb2ludFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtb2R1bGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgbW9kdWxlIGluIHRoZSBpbnN0YW5jZSBmb3Igd2hpY2ggYSB3aGl0ZWxpc3QgaXMgY29uZmlndXJlZC4gVmFsaWRcbiAgICAgKiB2YWx1ZXM6IFJlZ2lzdHJ5IGFuZCBDaGFydC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtb2R1bGVOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVnaW9uSWQ6IFJlZ2lvbiBJRCBvZiBpbnN0YW5jZS4gRGVmYXVsdCBpcyBjdXJyZW50IHJlZ2lvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q1I6Okluc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIHdoaXRlbGlzdCBmb3IgdGhlIGFjY2VzcyBwb3J0IG9mIGEgcHVibGljLWZhY2luZyBpbnN0YW5jZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3lgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jci1pbnN0YW5jZWVuZHBvaW50YWNscG9saWN5XG4gKi9cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5UHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEVudHJ5OiBUaGUgSVAgYWRkcmVzcyByYW5nZSB0aGF0IGlzIGFsbG93ZWQgdG8gYWNjZXNzIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVudHJ5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5ID0gbmV3IFJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3kodGhpcywgaWQsICB7XG4gICAgICAgICAgICBjb21tZW50OiBwcm9wcy5jb21tZW50LFxuICAgICAgICAgICAgZW50cnk6IHByb3BzLmVudHJ5LFxuICAgICAgICAgICAgaW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IHByb3BzLm1vZHVsZU5hbWUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5tb2R1bGVOYW1lID09PSBudWxsID8gJ1JlZ2lzdHJ5JyA6IHByb3BzLm1vZHVsZU5hbWUsXG4gICAgICAgICAgICBlbmRwb2ludFR5cGU6IHByb3BzLmVuZHBvaW50VHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmVuZHBvaW50VHlwZSA9PT0gbnVsbCA/ICdpbnRlcm5ldCcgOiBwcm9wcy5lbmRwb2ludFR5cGUsXG4gICAgICAgICAgICByZWdpb25JZDogcHJvcHMucmVnaW9uSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSW5zdGFuY2VFbmRwb2ludEFjbFBvbGljeTtcbiAgICAgICAgdGhpcy5hdHRyRW50cnkgPSByb3NJbnN0YW5jZUVuZHBvaW50QWNsUG9saWN5LmF0dHJFbnRyeTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0luc3RhbmNlRW5kcG9pbnRBY2xQb2xpY3kuYXR0ckluc3RhbmNlSWQ7XG4gICAgfVxufVxuIl19