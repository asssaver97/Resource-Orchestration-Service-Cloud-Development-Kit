"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const rocketmq_generated_1 = require("./rocketmq.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return rocketmq_generated_1.RosInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROCKETMQ::Instance`, which is used to create a Standard Edition instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-instance
 */
class Instance extends ros.Resource {
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
        const rosInstance = new rocketmq_generated_1.RosInstance(this, id, {
            instanceName: props.instanceName,
            tags: props.tags,
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrHttpInternalEndpoint = rosInstance.attrHttpInternalEndpoint;
        this.attrHttpInternetEndpoint = rosInstance.attrHttpInternetEndpoint;
        this.attrHttpInternetSecureEndpoint = rosInstance.attrHttpInternetSecureEndpoint;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrTcpEndpoint = rosInstance.attrTcpEndpoint;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsNkRBQW1EO0FBRTNCLGlHQUZmLGdDQUFXLE9BRW9CO0FBd0J4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUF5Q3RDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFdBQVcsR0FBRyxJQUFJLGdDQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtTQUN2QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsV0FBVyxDQUFDLHdCQUF3QixDQUFDO1FBQ3JFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxXQUFXLENBQUMsd0JBQXdCLENBQUM7UUFDckUsSUFBSSxDQUFDLDhCQUE4QixHQUFHLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQztRQUNqRixJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQztJQUN2RCxDQUFDO0NBQ0o7QUFuRUQsNEJBbUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW5zdGFuY2UgfSBmcm9tICcuL3JvY2tldG1xLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0luc3RhbmNlIGFzIEluc3RhbmNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBJbnN0YW5jZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yb2NrZXRtcS1pbnN0YW5jZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluc3RhbmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW5zdGFuY2UsIHdoaWNoIGNvbnRhaW5zIDMgdG8gNjQgY2hhcmFjdGVycyBpbiBDaGluZXNlIG9yIEVuZ2xpc2guXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZW1hcms6IFRoZSByZW1hcmsgb2YgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVtYXJrPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zSW5zdGFuY2UuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJPQ0tFVE1ROjpJbnN0YW5jZWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgU3RhbmRhcmQgRWRpdGlvbiBpbnN0YW5jZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0luc3RhbmNlYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcm9ja2V0bXEtaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBJbnN0YW5jZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBIdHRwSW50ZXJuYWxFbmRwb2ludDogVGhlIGludGVybmFsIEhUVFAgZW5kcG9pbnQgZm9yIHRoZSBNZXNzYWdlIFF1ZXVlIGZvciBBcGFjaGUgUm9ja2V0TVEgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIdHRwSW50ZXJuYWxFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEh0dHBJbnRlcm5ldEVuZHBvaW50OiBUaGUgSW50ZXJuZXQgSFRUUCBlbmRwb2ludCBmb3IgdGhlIE1lc3NhZ2UgUXVldWUgZm9yIEFwYWNoZSBSb2NrZXRNUSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckh0dHBJbnRlcm5ldEVuZHBvaW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSHR0cEludGVybmV0U2VjdXJlRW5kcG9pbnQ6IFRoZSBJbnRlcm5ldCBIVFRQUyBlbmRwb2ludCBmb3IgdGhlIE1lc3NhZ2UgUXVldWUgZm9yIEFwYWNoZSBSb2NrZXRNUSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckh0dHBJbnRlcm5ldFNlY3VyZUVuZHBvaW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogSW5zdGFuY2UgSUQgY3JlYXRlZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlTmFtZTogSW5zdGFuY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VUeXBlOiBJbnN0YW5jZSBUeXBlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUY3BFbmRwb2ludDogVGhlIFRDUCBlbmRwb2ludCBmb3IgdGhlIE1lc3NhZ2UgUXVldWUgZm9yIEFwYWNoZSBSb2NrZXRNUSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRjcEVuZHBvaW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0luc3RhbmNlID0gbmV3IFJvc0luc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiBwcm9wcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgcmVtYXJrOiBwcm9wcy5yZW1hcmssXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuYXR0ckh0dHBJbnRlcm5hbEVuZHBvaW50ID0gcm9zSW5zdGFuY2UuYXR0ckh0dHBJbnRlcm5hbEVuZHBvaW50O1xuICAgICAgICB0aGlzLmF0dHJIdHRwSW50ZXJuZXRFbmRwb2ludCA9IHJvc0luc3RhbmNlLmF0dHJIdHRwSW50ZXJuZXRFbmRwb2ludDtcbiAgICAgICAgdGhpcy5hdHRySHR0cEludGVybmV0U2VjdXJlRW5kcG9pbnQgPSByb3NJbnN0YW5jZS5hdHRySHR0cEludGVybmV0U2VjdXJlRW5kcG9pbnQ7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWQgPSByb3NJbnN0YW5jZS5hdHRySW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VOYW1lID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlTmFtZTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VUeXBlID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyVGNwRW5kcG9pbnQgPSByb3NJbnN0YW5jZS5hdHRyVGNwRW5kcG9pbnQ7XG4gICAgfVxufVxuIl19