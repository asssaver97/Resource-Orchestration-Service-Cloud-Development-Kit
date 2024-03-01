"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendServerToVServerGroupAddition = exports.BackendServerToVServerGroupAdditionProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const slb_generated_1 = require("./slb.generated");
Object.defineProperty(exports, "BackendServerToVServerGroupAdditionProperty", { enumerable: true, get: function () { return slb_generated_1.RosBackendServerToVServerGroupAddition; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::BackendServerToVServerGroupAddition`, which is used to add backend servers to an existing server group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackendServerToVServerGroupAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendservertovservergroupaddition
 */
class BackendServerToVServerGroupAddition extends ros.Resource {
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
        const rosBackendServerToVServerGroupAddition = new slb_generated_1.RosBackendServerToVServerGroupAddition(this, id, {
            vServerGroupId: props.vServerGroupId,
            backendServers: props.backendServers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackendServerToVServerGroupAddition;
        this.attrVServerGroupId = rosBackendServerToVServerGroupAddition.attrVServerGroupId;
    }
}
exports.BackendServerToVServerGroupAddition = BackendServerToVServerGroupAddition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZHNlcnZlcnRvdnNlcnZlcmdyb3VwYWRkaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrZW5kc2VydmVydG92c2VydmVyZ3JvdXBhZGRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQXlFO0FBRXRCLDRIQUYxQyxzREFBc0MsT0FFK0M7QUFtQjlGOzs7O0dBSUc7QUFDSCxNQUFhLG1DQUFvQyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBV2pFOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQStDLEVBQUUsbUNBQTJDLElBQUk7UUFDMUksS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLHNDQUFzQyxHQUFHLElBQUksc0RBQXNDLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1NBQ3ZDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsc0NBQXNDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHNDQUFzQyxDQUFDLGtCQUFrQixDQUFDO0lBQ3hGLENBQUM7Q0FDSjtBQTlCRCxrRkE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvbiB9IGZyb20gJy4vc2xiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0JhY2tlbmRTZXJ2ZXJUb1ZTZXJ2ZXJHcm91cEFkZGl0aW9uIGFzIEJhY2tlbmRTZXJ2ZXJUb1ZTZXJ2ZXJHcm91cEFkZGl0aW9uUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1zbGItYmFja2VuZHNlcnZlcnRvdnNlcnZlcmdyb3VwYWRkaXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJhY2tlbmRTZXJ2ZXJzOiBUaGUgbGlzdCBvZiBhIGNvbWJpbmF0aW9uIG9mIEVDUyBJbnN0YW5jZS1Qb3J0LVdlaWdodC5TYW1lIGVjcyBpbnN0YW5jZSB3aXRoIGRpZmZlcmVudCBwb3J0IGlzIGFsbG93ZWQsIGJ1dCBzYW1lIGVjcyBpbnN0YW5jZSB3aXRoIHNhbWUgcG9ydCBpc24ndC5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYWNrZW5kU2VydmVyczogQXJyYXk8Um9zQmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb24uQmFja2VuZFNlcnZlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U2VydmVyR3JvdXBJZDogVGhlIElEIG9mIHZpcnR1YWwgc2VydmVyIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTZXJ2ZXJHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlNMQjo6QmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb25gLCB3aGljaCBpcyB1c2VkIHRvIGFkZCBiYWNrZW5kIHNlcnZlcnMgdG8gYW4gZXhpc3Rpbmcgc2VydmVyIGdyb3VwLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zQmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb25gZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1zbGItYmFja2VuZHNlcnZlcnRvdnNlcnZlcmdyb3VwYWRkaXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2ZXJUb1ZTZXJ2ZXJHcm91cEFkZGl0aW9uIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvblByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWU2VydmVyR3JvdXBJZDogVGhlIElEIG9mIHZpcnR1YWwgc2VydmVyIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVlNlcnZlckdyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBCYWNrZW5kU2VydmVyVG9WU2VydmVyR3JvdXBBZGRpdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zQmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb24gPSBuZXcgUm9zQmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICB2U2VydmVyR3JvdXBJZDogcHJvcHMudlNlcnZlckdyb3VwSWQsXG4gICAgICAgICAgICBiYWNrZW5kU2VydmVyczogcHJvcHMuYmFja2VuZFNlcnZlcnMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb247XG4gICAgICAgIHRoaXMuYXR0clZTZXJ2ZXJHcm91cElkID0gcm9zQmFja2VuZFNlcnZlclRvVlNlcnZlckdyb3VwQWRkaXRpb24uYXR0clZTZXJ2ZXJHcm91cElkO1xuICAgIH1cbn1cbiJdfQ==