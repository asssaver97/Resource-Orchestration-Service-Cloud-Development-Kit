"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertContactGroup = exports.AlertContactGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const arms_generated_1 = require("./arms.generated");
Object.defineProperty(exports, "AlertContactGroupProperty", { enumerable: true, get: function () { return arms_generated_1.RosAlertContactGroup; } });
/**
 * A ROS resource type:  `ALIYUN::ARMS::AlertContactGroup`
 */
class AlertContactGroup extends ros.Resource {
    /**
     * Create a new `ALIYUN::ARMS::AlertContactGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAlertContactGroup = new arms_generated_1.RosAlertContactGroup(this, id, {
            proxyUserId: props.proxyUserId,
            contactGroupName: props.contactGroupName,
            regionId: props.regionId,
            contactIds: props.contactIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlertContactGroup;
        this.attrContactGroupId = rosAlertContactGroup.attrContactGroupId;
    }
}
exports.AlertContactGroup = AlertContactGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnRjb250YWN0Z3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGVydGNvbnRhY3Rncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMscURBQXdEO0FBRXZCLDBHQUZ4QixxQ0FBb0IsT0FFNkI7QUE0QjFEOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVkvQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTZCLEVBQUUsbUNBQTJDLElBQUk7UUFDeEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLG9CQUFvQixHQUFHLElBQUkscUNBQW9CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3RCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQy9CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDO0lBQ3RFLENBQUM7Q0FDSjtBQS9CRCw4Q0ErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBbGVydENvbnRhY3RHcm91cCB9IGZyb20gJy4vYXJtcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBbGVydENvbnRhY3RHcm91cCBhcyBBbGVydENvbnRhY3RHcm91cFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpBUk1TOjpBbGVydENvbnRhY3RHcm91cGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbGVydENvbnRhY3RHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbnRhY3RHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0IGdyb3VwIHRoYXQgeW91IHdhbnQgdG8gY3JlYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRhY3RHcm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbnRhY3RJZHM6IFRoZSBsaXN0IG9mIGFsZXJ0IGNvbnRhY3QgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFjdElkczogQXJyYXk8bnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByb3h5VXNlcklkOiBJbnRlcm5hbCBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJveHlVc2VySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZWdpb25JZDogUmVnaW9uIElELiBEZWZhdWx0IHRvIHJlZ2lvbiBvZiBzdGFjay5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6QVJNUzo6QWxlcnRDb250YWN0R3JvdXBgXG4gKi9cbmV4cG9ydCBjbGFzcyBBbGVydENvbnRhY3RHcm91cCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29udGFjdEdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgYWxlcnQgY29udGFjdCBncm91cCB0aGF0IHlvdSBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29udGFjdEdyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpBUk1TOjpBbGVydENvbnRhY3RHcm91cGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQWxlcnRDb250YWN0R3JvdXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NBbGVydENvbnRhY3RHcm91cCA9IG5ldyBSb3NBbGVydENvbnRhY3RHcm91cCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHByb3h5VXNlcklkOiBwcm9wcy5wcm94eVVzZXJJZCxcbiAgICAgICAgICAgIGNvbnRhY3RHcm91cE5hbWU6IHByb3BzLmNvbnRhY3RHcm91cE5hbWUsXG4gICAgICAgICAgICByZWdpb25JZDogcHJvcHMucmVnaW9uSWQsXG4gICAgICAgICAgICBjb250YWN0SWRzOiBwcm9wcy5jb250YWN0SWRzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0FsZXJ0Q29udGFjdEdyb3VwO1xuICAgICAgICB0aGlzLmF0dHJDb250YWN0R3JvdXBJZCA9IHJvc0FsZXJ0Q29udGFjdEdyb3VwLmF0dHJDb250YWN0R3JvdXBJZDtcbiAgICB9XG59XG4iXX0=