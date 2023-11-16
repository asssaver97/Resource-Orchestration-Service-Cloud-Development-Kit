"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VServerGroups = exports.VServerGroupsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const slb_generated_1 = require("./slb.generated");
Object.defineProperty(exports, "VServerGroupsProperty", { enumerable: true, get: function () { return slb_generated_1.RosVServerGroups; } });
/**
 * A ROS resource type:  `DATASOURCE::SLB::VServerGroups`
 */
class VServerGroups extends ros.Resource {
    /**
     * Create a new `DATASOURCE::SLB::VServerGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosVServerGroups = new slb_generated_1.RosVServerGroups(this, id, {
            loadBalancerId: props.loadBalancerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVServerGroups;
        this.attrVServerGroupIds = rosVServerGroups.attrVServerGroupIds;
        this.attrVServerGroups = rosVServerGroups.attrVServerGroups;
    }
}
exports.VServerGroups = VServerGroups;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNlcnZlcmdyb3Vwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZzZXJ2ZXJncm91cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBYWxEOztHQUVHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQjNDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBeUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JELGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztTQUN2QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUNoRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7SUFDaEUsQ0FBQztDQUNKO0FBbENELHNDQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1ZTZXJ2ZXJHcm91cHMgfSBmcm9tICcuL3NsYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NWU2VydmVyR3JvdXBzIGFzIFZTZXJ2ZXJHcm91cHNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERBVEFTT1VSQ0U6OlNMQjo6VlNlcnZlckdyb3Vwc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWU2VydmVyR3JvdXBzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9hZEJhbGFuY2VySWQ6IFRoZSBJRCBvZiB0aGUgQ0xCIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBEQVRBU09VUkNFOjpTTEI6OlZTZXJ2ZXJHcm91cHNgXG4gKi9cbmV4cG9ydCBjbGFzcyBWU2VydmVyR3JvdXBzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWU2VydmVyR3JvdXBJZHM6IFRoZSBsaXN0IG9mIFZTZXJ2ZXIgZ3JvdXAgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVlNlcnZlckdyb3VwSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVlNlcnZlckdyb3VwczogVGhlIGxpc3Qgb2YgVlNlcnZlciBncm91cHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWU2VydmVyR3JvdXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYERBVEFTT1VSQ0U6OlNMQjo6VlNlcnZlckdyb3Vwc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVlNlcnZlckdyb3Vwc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1ZTZXJ2ZXJHcm91cHMgPSBuZXcgUm9zVlNlcnZlckdyb3Vwcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlcklkOiBwcm9wcy5sb2FkQmFsYW5jZXJJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NWU2VydmVyR3JvdXBzO1xuICAgICAgICB0aGlzLmF0dHJWU2VydmVyR3JvdXBJZHMgPSByb3NWU2VydmVyR3JvdXBzLmF0dHJWU2VydmVyR3JvdXBJZHM7XG4gICAgICAgIHRoaXMuYXR0clZTZXJ2ZXJHcm91cHMgPSByb3NWU2VydmVyR3JvdXBzLmF0dHJWU2VydmVyR3JvdXBzO1xuICAgIH1cbn1cbiJdfQ==