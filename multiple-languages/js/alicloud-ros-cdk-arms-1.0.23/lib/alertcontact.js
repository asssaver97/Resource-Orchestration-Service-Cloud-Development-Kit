"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertContact = exports.AlertContactProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const arms_generated_1 = require("./arms.generated");
Object.defineProperty(exports, "AlertContactProperty", { enumerable: true, get: function () { return arms_generated_1.RosAlertContact; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::AlertContact`, which is used to create an alert contact.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlertContact`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
 */
class AlertContact extends ros.Resource {
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
        const rosAlertContact = new arms_generated_1.RosAlertContact(this, id, {
            proxyUserId: props.proxyUserId,
            email: props.email,
            dingRobotWebhookUrl: props.dingRobotWebhookUrl,
            phoneNum: props.phoneNum,
            regionId: props.regionId,
            systemNoc: props.systemNoc,
            contactName: props.contactName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlertContact;
        this.attrContactId = rosAlertContact.attrContactId;
    }
}
exports.AlertContact = AlertContact;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnRjb250YWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxlcnRjb250YWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxxREFBbUQ7QUFFdkIscUdBRm5CLGdDQUFlLE9BRXdCO0FBNENoRDs7OztHQUlHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXMUM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBd0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNuSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sZUFBZSxHQUFHLElBQUksZ0NBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25ELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDakMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDO0lBQ3ZELENBQUM7Q0FDSjtBQW5DRCxvQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBbGVydENvbnRhY3QgfSBmcm9tICcuL2FybXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQWxlcnRDb250YWN0IGFzIEFsZXJ0Q29udGFjdFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQWxlcnRDb250YWN0YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFybXMtYWxlcnRjb250YWN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRDb250YWN0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29udGFjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0IHRoYXQgeW91IHdhbnQgdG8gY3JlYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRhY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaW5nUm9ib3RXZWJob29rVXJsOiBUaGUgRGluZ1RhbGsgQ2hhdGJvdCBhZGRyZXNzIG9mIHRoZSBjb250YWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpbmdSb2JvdFdlYmhvb2tVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbWFpbDogVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIGNvbnRhY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW1haWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwaG9uZU51bTogVGhlIHBob25lIG51bWJlciBvZiB0aGUgY29udGFjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwaG9uZU51bT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByb3h5VXNlcklkOiBJbnRlcm5hbCBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJveHlVc2VySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZWdpb25JZDogUmVnaW9uIElELiBEZWZhdWx0IHRvIHJlZ2lvbiBvZiBzdGFjay5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5c3RlbU5vYzogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVjZWl2ZSBzeXN0ZW0gYWxlcnRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbU5vYz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFSTVM6OkFsZXJ0Q29udGFjdGAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGFsZXJ0IGNvbnRhY3QuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NBbGVydENvbnRhY3RgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hcm1zLWFsZXJ0Y29udGFjdFxuICovXG5leHBvcnQgY2xhc3MgQWxlcnRDb250YWN0IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBBbGVydENvbnRhY3RQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29udGFjdElkOiBUaGUgSUQgb2YgdGhlIGFsZXJ0IGNvbnRhY3QgdGhhdCB5b3UgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbnRhY3RJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEFsZXJ0Q29udGFjdFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zQWxlcnRDb250YWN0ID0gbmV3IFJvc0FsZXJ0Q29udGFjdCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHByb3h5VXNlcklkOiBwcm9wcy5wcm94eVVzZXJJZCxcbiAgICAgICAgICAgIGVtYWlsOiBwcm9wcy5lbWFpbCxcbiAgICAgICAgICAgIGRpbmdSb2JvdFdlYmhvb2tVcmw6IHByb3BzLmRpbmdSb2JvdFdlYmhvb2tVcmwsXG4gICAgICAgICAgICBwaG9uZU51bTogcHJvcHMucGhvbmVOdW0sXG4gICAgICAgICAgICByZWdpb25JZDogcHJvcHMucmVnaW9uSWQsXG4gICAgICAgICAgICBzeXN0ZW1Ob2M6IHByb3BzLnN5c3RlbU5vYyxcbiAgICAgICAgICAgIGNvbnRhY3ROYW1lOiBwcm9wcy5jb250YWN0TmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NBbGVydENvbnRhY3Q7XG4gICAgICAgIHRoaXMuYXR0ckNvbnRhY3RJZCA9IHJvc0FsZXJ0Q29udGFjdC5hdHRyQ29udGFjdElkO1xuICAgIH1cbn1cbiJdfQ==