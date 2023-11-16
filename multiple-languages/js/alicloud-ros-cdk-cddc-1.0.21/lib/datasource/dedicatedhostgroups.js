"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DedicatedHostGroups = exports.DedicatedHostGroupsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cddc_generated_1 = require("./cddc.generated");
Object.defineProperty(exports, "DedicatedHostGroupsProperty", { enumerable: true, get: function () { return cddc_generated_1.RosDedicatedHostGroups; } });
/**
 * A ROS resource type:  `DATASOURCE::CDDC::DedicatedHostGroups`
 */
class DedicatedHostGroups extends ros.Resource {
    /**
     * Create a new `DATASOURCE::CDDC::DedicatedHostGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVkaWNhdGVkaG9zdGdyb3Vwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZGljYXRlZGhvc3Rncm91cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUEwRDtBQUV2Qiw0R0FGMUIsdUNBQXNCLE9BRStCO0FBa0I5RDs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQmpEOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBa0MsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQy9ILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLHVDQUFzQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakUsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDdkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQztRQUN2QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsc0JBQXNCLENBQUMseUJBQXlCLENBQUM7UUFDbEYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDO0lBQ2xGLENBQUM7Q0FDSjtBQW5DRCxrREFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEZWRpY2F0ZWRIb3N0R3JvdXBzIH0gZnJvbSAnLi9jZGRjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RlZGljYXRlZEhvc3RHcm91cHMgYXMgRGVkaWNhdGVkSG9zdEdyb3Vwc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6Q0REQzo6RGVkaWNhdGVkSG9zdEdyb3Vwc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZWRpY2F0ZWRIb3N0R3JvdXBzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVkaWNhdGVkSG9zdEdyb3VwSWQ6IERlZGljYXRlZCBIb3N0IEdyb3VwIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlZGljYXRlZEhvc3RHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5naW5lOiBEYXRhYmFzZSBFbmdpbmUgVHlwZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmdpbmU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBEQVRBU09VUkNFOjpDRERDOjpEZWRpY2F0ZWRIb3N0R3JvdXBzYFxuICovXG5leHBvcnQgY2xhc3MgRGVkaWNhdGVkSG9zdEdyb3VwcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVkaWNhdGVkSG9zdEdyb3VwSWRzOiBUaGUgbGlzdCBvZiBkZWRpY2F0ZWQgaG9zdCBncm91cCBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWRpY2F0ZWRIb3N0R3JvdXBJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZWRpY2F0ZWRIb3N0R3JvdXBzOiBUaGUgbGlzdCBvZiBkZWRpY2F0ZWQgaG9zdCBncm91cHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWRpY2F0ZWRIb3N0R3JvdXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYERBVEFTT1VSQ0U6OkNEREM6OkRlZGljYXRlZEhvc3RHcm91cHNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERlZGljYXRlZEhvc3RHcm91cHNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0RlZGljYXRlZEhvc3RHcm91cHMgPSBuZXcgUm9zRGVkaWNhdGVkSG9zdEdyb3Vwcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRlZGljYXRlZEhvc3RHcm91cElkOiBwcm9wcy5kZWRpY2F0ZWRIb3N0R3JvdXBJZCxcbiAgICAgICAgICAgIGVuZ2luZTogcHJvcHMuZW5naW5lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0RlZGljYXRlZEhvc3RHcm91cHM7XG4gICAgICAgIHRoaXMuYXR0ckRlZGljYXRlZEhvc3RHcm91cElkcyA9IHJvc0RlZGljYXRlZEhvc3RHcm91cHMuYXR0ckRlZGljYXRlZEhvc3RHcm91cElkcztcbiAgICAgICAgdGhpcy5hdHRyRGVkaWNhdGVkSG9zdEdyb3VwcyA9IHJvc0RlZGljYXRlZEhvc3RHcm91cHMuYXR0ckRlZGljYXRlZEhvc3RHcm91cHM7XG4gICAgfVxufVxuIl19