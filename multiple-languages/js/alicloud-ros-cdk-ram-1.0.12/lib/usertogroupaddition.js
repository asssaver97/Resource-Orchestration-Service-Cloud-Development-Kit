"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserToGroupAddition = exports.UserToGroupAdditionProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ram_generated_1 = require("./ram.generated");
Object.defineProperty(exports, "UserToGroupAdditionProperty", { enumerable: true, get: function () { return ram_generated_1.RosUserToGroupAddition; } });
/**
 * A ROS resource type:  `ALIYUN::RAM::UserToGroupAddition`
 */
class UserToGroupAddition extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::RAM::UserToGroupAddition`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosUserToGroupAddition = new ram_generated_1.RosUserToGroupAddition(this, id, {
            groupName: props.groupName,
            users: props.users,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUserToGroupAddition;
    }
}
exports.UserToGroupAddition = UserToGroupAddition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnRvZ3JvdXBhZGRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJ0b2dyb3VwYWRkaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUF5RDtBQUV0Qiw0R0FGMUIsc0NBQXNCLE9BRStCO0FBa0I5RDs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFFakQ7OztPQUdHO0lBRUg7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUErQixFQUFFLG1DQUEyQyxJQUFJO1FBQzFILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLHNDQUFzQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakUsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztTQUNyQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO0lBQzNDLENBQUM7Q0FDSjtBQXZCRCxrREF1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uIH0gZnJvbSAnLi9yYW0uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zVXNlclRvR3JvdXBBZGRpdGlvbiBhcyBVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJBTTo6VXNlclRvR3JvdXBBZGRpdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ3JvdXBOYW1lOiBTcGVjaWZpZXMgdGhlIGdyb3VwIG5hbWUsIGNvbnRhaW5pbmcgdXAgdG8gNjQgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzZXJzOiBsaXN0IG5hbWUgb2YgYSB1c2VycyB0byB3aGljaCB5b3Ugd2FudCB0byBhZGQgdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpSQU06OlVzZXJUb0dyb3VwQWRkaXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyVG9Hcm91cEFkZGl0aW9uIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpSQU06OlVzZXJUb0dyb3VwQWRkaXRpb25gLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFVzZXJUb0dyb3VwQWRkaXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NVc2VyVG9Hcm91cEFkZGl0aW9uID0gbmV3IFJvc1VzZXJUb0dyb3VwQWRkaXRpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICBncm91cE5hbWU6IHByb3BzLmdyb3VwTmFtZSxcbiAgICAgICAgICAgIHVzZXJzOiBwcm9wcy51c2VycyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NVc2VyVG9Hcm91cEFkZGl0aW9uO1xuICAgIH1cbn1cbiJdfQ==