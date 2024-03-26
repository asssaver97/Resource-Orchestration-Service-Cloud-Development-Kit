"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DedicatedHostGroups = exports.DedicatedHostGroupsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cddc_generated_1 = require("./cddc.generated");
Object.defineProperty(exports, "DedicatedHostGroupsProperty", { enumerable: true, get: function () { return cddc_generated_1.RosDedicatedHostGroups; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CDDC::DedicatedHostGroups`, which is used to query the resources in a dedicated cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHostGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
 */
class DedicatedHostGroups extends ros.Resource {
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
        const rosDedicatedHostGroups = new cddc_generated_1.RosDedicatedHostGroups(this, id, {
            dedicatedHostGroupId: props.dedicatedHostGroupId,
            engine: props.engine,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedHostGroups;
        this.attrDedicatedHostGroupIds = rosDedicatedHostGroups.attrDedicatedHostGroupIds;
        this.attrDedicatedHostGroups = rosDedicatedHostGroups.attrDedicatedHostGroups;
    }
}
exports.DedicatedHostGroups = DedicatedHostGroups;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVkaWNhdGVkaG9zdGdyb3Vwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZGljYXRlZGhvc3Rncm91cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUEwRDtBQUV2Qiw0R0FGMUIsdUNBQXNCLE9BRStCO0FBbUI5RDs7OztHQUlHO0FBQ0gsTUFBYSxtQkFBb0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCakQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBa0MsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQy9ILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLHVDQUFzQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakUsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDdkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQztRQUN2QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsc0JBQXNCLENBQUMseUJBQXlCLENBQUM7UUFDbEYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDO0lBQ2xGLENBQUM7Q0FDSjtBQXBDRCxrREFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEZWRpY2F0ZWRIb3N0R3JvdXBzIH0gZnJvbSAnLi9jZGRjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RlZGljYXRlZEhvc3RHcm91cHMgYXMgRGVkaWNhdGVkSG9zdEdyb3Vwc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgRGVkaWNhdGVkSG9zdEdyb3Vwc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtY2RkYy1kZWRpY2F0ZWRob3N0Z3JvdXBzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVkaWNhdGVkSG9zdEdyb3Vwc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlZGljYXRlZEhvc3RHcm91cElkOiBEZWRpY2F0ZWQgSG9zdCBHcm91cCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWRpY2F0ZWRIb3N0R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuZ2luZTogRGF0YWJhc2UgRW5naW5lIFR5cGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5naW5lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6Q0REQzo6RGVkaWNhdGVkSG9zdEdyb3Vwc2AsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgdGhlIHJlc291cmNlcyBpbiBhIGRlZGljYXRlZCBjbHVzdGVyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zRGVkaWNhdGVkSG9zdEdyb3Vwc2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jZGRjLWRlZGljYXRlZGhvc3Rncm91cHNcbiAqL1xuZXhwb3J0IGNsYXNzIERlZGljYXRlZEhvc3RHcm91cHMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IERlZGljYXRlZEhvc3RHcm91cHNQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVkaWNhdGVkSG9zdEdyb3VwSWRzOiBUaGUgbGlzdCBvZiBkZWRpY2F0ZWQgaG9zdCBncm91cCBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWRpY2F0ZWRIb3N0R3JvdXBJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZWRpY2F0ZWRIb3N0R3JvdXBzOiBUaGUgbGlzdCBvZiBkZWRpY2F0ZWQgaG9zdCBncm91cHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWRpY2F0ZWRIb3N0R3JvdXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRGVkaWNhdGVkSG9zdEdyb3Vwc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NEZWRpY2F0ZWRIb3N0R3JvdXBzID0gbmV3IFJvc0RlZGljYXRlZEhvc3RHcm91cHModGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZWRpY2F0ZWRIb3N0R3JvdXBJZDogcHJvcHMuZGVkaWNhdGVkSG9zdEdyb3VwSWQsXG4gICAgICAgICAgICBlbmdpbmU6IHByb3BzLmVuZ2luZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NEZWRpY2F0ZWRIb3N0R3JvdXBzO1xuICAgICAgICB0aGlzLmF0dHJEZWRpY2F0ZWRIb3N0R3JvdXBJZHMgPSByb3NEZWRpY2F0ZWRIb3N0R3JvdXBzLmF0dHJEZWRpY2F0ZWRIb3N0R3JvdXBJZHM7XG4gICAgICAgIHRoaXMuYXR0ckRlZGljYXRlZEhvc3RHcm91cHMgPSByb3NEZWRpY2F0ZWRIb3N0R3JvdXBzLmF0dHJEZWRpY2F0ZWRIb3N0R3JvdXBzO1xuICAgIH1cbn1cbiJdfQ==