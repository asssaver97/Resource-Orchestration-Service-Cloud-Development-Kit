"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenInstanceAttachment = exports.CenInstanceAttachmentProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cen_generated_1 = require("./cen.generated");
Object.defineProperty(exports, "CenInstanceAttachmentProperty", { enumerable: true, get: function () { return cen_generated_1.RosCenInstanceAttachment; } });
/**
 * A ROS resource type:  `ALIYUN::CEN::CenInstanceAttachment`
 */
class CenInstanceAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::CEN::CenInstanceAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCenInstanceAttachment = new cen_generated_1.RosCenInstanceAttachment(this, id, {
            childInstanceType: props.childInstanceType,
            cenId: props.cenId,
            childInstanceOwnerId: props.childInstanceOwnerId,
            childInstanceId: props.childInstanceId,
            childInstanceRegionId: props.childInstanceRegionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenInstanceAttachment;
    }
}
exports.CenInstanceAttachment = CenInstanceAttachment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VuaW5zdGFuY2VhdHRhY2htZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2VuaW5zdGFuY2VhdHRhY2htZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBMkQ7QUFFdEIsOEdBRjVCLHdDQUF3QixPQUVpQztBQWlDbEU7O0dBRUc7QUFDSCxNQUFhLHFCQUFzQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBRW5EOzs7T0FHRztJQUVIOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUMsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSx3Q0FBd0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUI7U0FDckQsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQztJQUM3QyxDQUFDO0NBQ0o7QUExQkQsc0RBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ2VuSW5zdGFuY2VBdHRhY2htZW50IH0gZnJvbSAnLi9jZW4uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQ2VuSW5zdGFuY2VBdHRhY2htZW50IGFzIENlbkluc3RhbmNlQXR0YWNobWVudFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDRU46OkNlbkluc3RhbmNlQXR0YWNobWVudGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZW5JbnN0YW5jZUF0dGFjaG1lbnRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjZW5JZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNoaWxkSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBuZXR3b3JrIHRvIGF0dGFjaC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGlsZEluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNoaWxkSW5zdGFuY2VSZWdpb25JZDogVGhlIElEIG9mIHRoZSByZWdpb24gd2hlcmUgdGhlIG5ldHdvcmsgaXMgbG9jYXRlZC4gVGhlIElEIG9mIHRoZSByZWdpb24gd2hlcmUgdGhlIG5ldHdvcmsgaXMgbG9jYXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGlsZEluc3RhbmNlUmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNoaWxkSW5zdGFuY2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgbmV0d29yayB0byBhdHRhY2guIFN1cHBvcnQgVlBDLCBWQlIgb3IgQ0NOLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNoaWxkSW5zdGFuY2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjaGlsZEluc3RhbmNlT3duZXJJZDogVGhlIGFjY291bnQgSUQgdG8gd2hpY2ggdGhlIG5ldHdvcmsgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGlsZEluc3RhbmNlT3duZXJJZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q0VOOjpDZW5JbnN0YW5jZUF0dGFjaG1lbnRgXG4gKi9cbmV4cG9ydCBjbGFzcyBDZW5JbnN0YW5jZUF0dGFjaG1lbnQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNFTjo6Q2VuSW5zdGFuY2VBdHRhY2htZW50YC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDZW5JbnN0YW5jZUF0dGFjaG1lbnRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NDZW5JbnN0YW5jZUF0dGFjaG1lbnQgPSBuZXcgUm9zQ2VuSW5zdGFuY2VBdHRhY2htZW50KHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgY2hpbGRJbnN0YW5jZVR5cGU6IHByb3BzLmNoaWxkSW5zdGFuY2VUeXBlLFxuICAgICAgICAgICAgY2VuSWQ6IHByb3BzLmNlbklkLFxuICAgICAgICAgICAgY2hpbGRJbnN0YW5jZU93bmVySWQ6IHByb3BzLmNoaWxkSW5zdGFuY2VPd25lcklkLFxuICAgICAgICAgICAgY2hpbGRJbnN0YW5jZUlkOiBwcm9wcy5jaGlsZEluc3RhbmNlSWQsXG4gICAgICAgICAgICBjaGlsZEluc3RhbmNlUmVnaW9uSWQ6IHByb3BzLmNoaWxkSW5zdGFuY2VSZWdpb25JZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDZW5JbnN0YW5jZUF0dGFjaG1lbnQ7XG4gICAgfVxufVxuIl19