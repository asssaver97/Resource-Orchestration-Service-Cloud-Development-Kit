"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queues = exports.QueuesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mns_generated_1 = require("./mns.generated");
Object.defineProperty(exports, "QueuesProperty", { enumerable: true, get: function () { return mns_generated_1.RosQueues; } });
/**
 * A ROS resource type:  `DATASOURCE::MNS::Queues`
 */
class Queues extends ros.Resource {
    /**
     * Create a new `DATASOURCE::MNS::Queues`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosQueues = new mns_generated_1.RosQueues(this, id, {
            queueName: props.queueName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQueues;
        this.attrQueueNames = rosQueues.attrQueueNames;
        this.attrQueues = rosQueues.attrQueues;
    }
}
exports.Queues = Queues;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVldWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBNEM7QUFFdEIsK0ZBRmIseUJBQVMsT0FFa0I7QUFhcEM7O0dBRUc7QUFDSCxNQUFhLE1BQU8sU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCcEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUFxQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFNBQVMsR0FBRyxJQUFJLHlCQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUN2QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7U0FDN0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUFsQ0Qsd0JBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUXVldWVzIH0gZnJvbSAnLi9tbnMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUXVldWVzIGFzIFF1ZXVlc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6TU5TOjpRdWV1ZXNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVldWVzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcXVldWVOYW1lOiBRdWV1ZSBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHF1ZXVlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYERBVEFTT1VSQ0U6Ok1OUzo6UXVldWVzYFxuICovXG5leHBvcnQgY2xhc3MgUXVldWVzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBRdWV1ZU5hbWVzOiBUaGUgbGlzdCBvZiBxdWV1ZSBuYW1lcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clF1ZXVlTmFtZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBRdWV1ZXM6IFRoZSBsaXN0IG9mIHF1ZXVlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clF1ZXVlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpNTlM6OlF1ZXVlc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUXVldWVzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NRdWV1ZXMgPSBuZXcgUm9zUXVldWVzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcXVldWVOYW1lOiBwcm9wcy5xdWV1ZU5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUXVldWVzO1xuICAgICAgICB0aGlzLmF0dHJRdWV1ZU5hbWVzID0gcm9zUXVldWVzLmF0dHJRdWV1ZU5hbWVzO1xuICAgICAgICB0aGlzLmF0dHJRdWV1ZXMgPSByb3NRdWV1ZXMuYXR0clF1ZXVlcztcbiAgICB9XG59XG4iXX0=