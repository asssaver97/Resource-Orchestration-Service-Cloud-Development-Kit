"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Namespace = exports.NamespaceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const acm_generated_1 = require("./acm.generated");
Object.defineProperty(exports, "NamespaceProperty", { enumerable: true, get: function () { return acm_generated_1.RosNamespace; } });
/**
 * A ROS resource type:  `ALIYUN::ACM::Namespace`
 */
class Namespace extends ros.Resource {
    /**
     * Create a new `ALIYUN::ACM::Namespace`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosNamespace = new acm_generated_1.RosNamespace(this, id, {
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespace;
        this.attrEndpoint = rosNamespace.attrEndpoint;
        this.attrNamespaceId = rosNamespace.attrNamespaceId;
    }
}
exports.Namespace = Namespace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmFtZXNwYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBYTFDOztHQUVHO0FBQ0gsTUFBYSxTQUFVLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQnZDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBcUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNoSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO0lBQ3hELENBQUM7Q0FDSjtBQWxDRCw4QkFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NOYW1lc3BhY2UgfSBmcm9tICcuL2FjbS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NOYW1lc3BhY2UgYXMgTmFtZXNwYWNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkFDTTo6TmFtZXNwYWNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5hbWVzcGFjZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWU6IE5hbWVzcGFjZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpBQ006Ok5hbWVzcGFjZWBcbiAqL1xuZXhwb3J0IGNsYXNzIE5hbWVzcGFjZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRW5kcG9pbnQ6IEVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5hbWVzcGFjZUlkOiBJRCBuYW1lc3BhY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWVzcGFjZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6QUNNOjpOYW1lc3BhY2VgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IE5hbWVzcGFjZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc05hbWVzcGFjZSA9IG5ldyBSb3NOYW1lc3BhY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc05hbWVzcGFjZTtcbiAgICAgICAgdGhpcy5hdHRyRW5kcG9pbnQgPSByb3NOYW1lc3BhY2UuYXR0ckVuZHBvaW50O1xuICAgICAgICB0aGlzLmF0dHJOYW1lc3BhY2VJZCA9IHJvc05hbWVzcGFjZS5hdHRyTmFtZXNwYWNlSWQ7XG4gICAgfVxufVxuIl19