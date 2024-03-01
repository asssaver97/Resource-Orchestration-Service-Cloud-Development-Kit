"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = exports.ListenerProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const nlb_generated_1 = require("./nlb.generated");
Object.defineProperty(exports, "ListenerProperty", { enumerable: true, get: function () { return nlb_generated_1.RosListener; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLB::Listener`, which is used to create a listener.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosListener`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
 */
class Listener extends ros.Resource {
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
        const rosListener = new nlb_generated_1.RosListener(this, id, {
            caEnabled: props.caEnabled,
            listenerPort: props.listenerPort,
            startPort: props.startPort,
            cps: props.cps,
            serverGroupId: props.serverGroupId,
            idleTimeout: props.idleTimeout,
            loadBalancerId: props.loadBalancerId,
            mss: props.mss,
            listenerProtocol: props.listenerProtocol,
            securityPolicyId: props.securityPolicyId,
            listenerDescription: props.listenerDescription,
            alpnPolicy: props.alpnPolicy,
            caCertificateIds: props.caCertificateIds,
            endPort: props.endPort,
            proxyProtocolEnabled: props.proxyProtocolEnabled,
            certificateIds: props.certificateIds,
            secSensorEnabled: props.secSensorEnabled,
            enable: props.enable,
            tags: props.tags,
            alpnEnabled: props.alpnEnabled,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosListener;
        this.attrListenerId = rosListener.attrListenerId;
        this.attrListenerPort = rosListener.attrListenerPort;
    }
}
exports.Listener = Listener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBNkd4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQnRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztTQUNqQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6RCxDQUFDO0NBQ0o7QUF0REQsNEJBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTGlzdGVuZXIgfSBmcm9tICcuL25sYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NMaXN0ZW5lciBhcyBMaXN0ZW5lclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgTGlzdGVuZXJgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbmxiLWxpc3RlbmVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdGVuZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsaXN0ZW5lclByb3RvY29sOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBsaXN0ZW5lclByb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogSUQgb2YgdGhlIExvYWRCYWxhbmNlclxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2ZXJHcm91cElkOiBJRCBvZiB0aGUgU2VydmVyR3JvdXBcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2ZXJHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhbHBuRW5hYmxlZDogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxwbkVuYWJsZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWxwblBvbGljeTogUHJveHkgb2YgYWxwblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFscG5Qb2xpY3k/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjYUNlcnRpZmljYXRlSWRzOiBMaXN0IG9mIHRoZSBjYSBjZXJ0aWZpY2F0ZSBpZHNcbiAgICAgKi9cbiAgICByZWFkb25seSBjYUNlcnRpZmljYXRlSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNhRW5hYmxlZDogV2hldGhlciB0byBvcGVuIENBXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2FFbmFibGVkPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNlcnRpZmljYXRlSWRzOiBMaXN0IG9mIHRoZSBjZXJ0aWZpY2F0ZSBpZHNcbiAgICAgKi9cbiAgICByZWFkb25seSBjZXJ0aWZpY2F0ZUlkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjcHM6IE5ldyBjb25uZWN0aW9uIHJhdGUgbGltaXQgb2YgSW5zdGFuY2VcbiAgICAgKi9cbiAgICByZWFkb25seSBjcHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmFibGU6IFdoZXRoZXIgdG8gc3RhcnQgbGlzdGVuZXIgb3Igbm90LiBEZWZhdWx0IFRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuZFBvcnQ6IEVuZFBvcnQgb2YgdGhlIHBvcnRSYW5nZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuZFBvcnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpZGxlVGltZW91dDogU3BlY2lmaWVzIHRoZSBjb25uZWN0aW9uIGlkbGUgdGltZW91dFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlkbGVUaW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGlzdGVuZXJEZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIGxpc3RlbmVyLCBbMiwgMjU2XSBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxpc3RlbmVyRGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsaXN0ZW5lclBvcnQ6IFBvcnQgb2YgdGhlIGxpc3RlbmVyLFswLCA2NTUzNV0gdGhlIHBvcnRSYW5nZSBzZXR0aW5nIG5lZWQgMFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxpc3RlbmVyUG9ydD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1zczogTWF4IGxlbmd0aCBvZiB0aGUgVENQIHBhY2tldFxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1zcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByb3h5UHJvdG9jb2xFbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSBwcHYyIGZ1bmN0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJveHlQcm90b2NvbEVuYWJsZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjU2Vuc29yRW5hYmxlZDogV2hldGhlciB0byBlbmFibGUgdGhlIHNlY29uZC1sZXZlbCBtb25pdG9yaW5nIGZ1bmN0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjU2Vuc29yRW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eVBvbGljeUlkOiBPbmx5IHZhbGlkIGZvciBUY3BTU0wgcHJvdG9jb2wgbW9uaXRvcmluZ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5UG9saWN5SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzdGFydFBvcnQ6IFN0YXJ0UG9ydCBvZiB0aGUgcG9ydFJhbmdlXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RhcnRQb3J0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zTGlzdGVuZXIuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok5MQjo6TGlzdGVuZXJgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGxpc3RlbmVyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zTGlzdGVuZXJgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1ubGItbGlzdGVuZXJcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RlbmVyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBMaXN0ZW5lclByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMaXN0ZW5lcklkOiBJZCBvZiBjcmVhdGVkIExpc3RlbmVyXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMaXN0ZW5lcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTGlzdGVuZXJQb3J0OiBMaXN0ZW5lclBvcnQgb2YgY3JlYXRlZCBMaXN0ZW5lclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGlzdGVuZXJQb3J0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTGlzdGVuZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0xpc3RlbmVyID0gbmV3IFJvc0xpc3RlbmVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgY2FFbmFibGVkOiBwcm9wcy5jYUVuYWJsZWQsXG4gICAgICAgICAgICBsaXN0ZW5lclBvcnQ6IHByb3BzLmxpc3RlbmVyUG9ydCxcbiAgICAgICAgICAgIHN0YXJ0UG9ydDogcHJvcHMuc3RhcnRQb3J0LFxuICAgICAgICAgICAgY3BzOiBwcm9wcy5jcHMsXG4gICAgICAgICAgICBzZXJ2ZXJHcm91cElkOiBwcm9wcy5zZXJ2ZXJHcm91cElkLFxuICAgICAgICAgICAgaWRsZVRpbWVvdXQ6IHByb3BzLmlkbGVUaW1lb3V0LFxuICAgICAgICAgICAgbG9hZEJhbGFuY2VySWQ6IHByb3BzLmxvYWRCYWxhbmNlcklkLFxuICAgICAgICAgICAgbXNzOiBwcm9wcy5tc3MsXG4gICAgICAgICAgICBsaXN0ZW5lclByb3RvY29sOiBwcm9wcy5saXN0ZW5lclByb3RvY29sLFxuICAgICAgICAgICAgc2VjdXJpdHlQb2xpY3lJZDogcHJvcHMuc2VjdXJpdHlQb2xpY3lJZCxcbiAgICAgICAgICAgIGxpc3RlbmVyRGVzY3JpcHRpb246IHByb3BzLmxpc3RlbmVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBhbHBuUG9saWN5OiBwcm9wcy5hbHBuUG9saWN5LFxuICAgICAgICAgICAgY2FDZXJ0aWZpY2F0ZUlkczogcHJvcHMuY2FDZXJ0aWZpY2F0ZUlkcyxcbiAgICAgICAgICAgIGVuZFBvcnQ6IHByb3BzLmVuZFBvcnQsXG4gICAgICAgICAgICBwcm94eVByb3RvY29sRW5hYmxlZDogcHJvcHMucHJveHlQcm90b2NvbEVuYWJsZWQsXG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZUlkczogcHJvcHMuY2VydGlmaWNhdGVJZHMsXG4gICAgICAgICAgICBzZWNTZW5zb3JFbmFibGVkOiBwcm9wcy5zZWNTZW5zb3JFbmFibGVkLFxuICAgICAgICAgICAgZW5hYmxlOiBwcm9wcy5lbmFibGUsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgYWxwbkVuYWJsZWQ6IHByb3BzLmFscG5FbmFibGVkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0xpc3RlbmVyO1xuICAgICAgICB0aGlzLmF0dHJMaXN0ZW5lcklkID0gcm9zTGlzdGVuZXIuYXR0ckxpc3RlbmVySWQ7XG4gICAgICAgIHRoaXMuYXR0ckxpc3RlbmVyUG9ydCA9IHJvc0xpc3RlbmVyLmF0dHJMaXN0ZW5lclBvcnQ7XG4gICAgfVxufVxuIl19