"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkInterfaceAttachment = exports.NetworkInterfaceAttachmentProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "NetworkInterfaceAttachmentProperty", { enumerable: true, get: function () { return ecs_generated_1.RosNetworkInterfaceAttachment; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::NetworkInterfaceAttachment`, which is used to bind an elastic network interface (ENI) to an Elastic Compute Service (ECS) instance in a virtual private cloud (VPC).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkInterfaceAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
 */
class NetworkInterfaceAttachment extends ros.Resource {
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
        const rosNetworkInterfaceAttachment = new ecs_generated_1.RosNetworkInterfaceAttachment(this, id, {
            trunkNetworkInstanceId: props.trunkNetworkInstanceId,
            instanceId: props.instanceId,
            ecsRestartOption: props.ecsRestartOption,
            networkInterfaceId: props.networkInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkInterfaceAttachment;
        this.attrInstanceId = rosNetworkInterfaceAttachment.attrInstanceId;
        this.attrNetworkInterfaceId = rosNetworkInterfaceAttachment.attrNetworkInterfaceId;
        this.attrTrunkNetworkInstanceId = rosNetworkInterfaceAttachment.attrTrunkNetworkInstanceId;
    }
}
exports.NetworkInterfaceAttachment = NetworkInterfaceAttachment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya2ludGVyZmFjZWF0dGFjaG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXR3b3JraW50ZXJmYWNlYXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWdFO0FBRXRCLG1IQUZqQyw2Q0FBNkIsT0FFc0M7QUE2QjVFOzs7O0dBSUc7QUFDSCxNQUFhLDBCQUEyQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBcUJ4RDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQyxFQUFFLG1DQUEyQyxJQUFJO1FBQ2pJLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSw2QkFBNkIsR0FBRyxJQUFJLDZDQUE2QixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0Usc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQjtZQUNwRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1NBQy9DLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsNkJBQTZCLENBQUM7UUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyw2QkFBNkIsQ0FBQyxjQUFjLENBQUM7UUFDbkUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLDZCQUE2QixDQUFDLHNCQUFzQixDQUFDO1FBQ25GLElBQUksQ0FBQywwQkFBMEIsR0FBRyw2QkFBNkIsQ0FBQywwQkFBMEIsQ0FBQztJQUMvRixDQUFDO0NBQ0o7QUE1Q0QsZ0VBNENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTmV0d29ya0ludGVyZmFjZUF0dGFjaG1lbnQgfSBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NOZXR3b3JrSW50ZXJmYWNlQXR0YWNobWVudCBhcyBOZXR3b3JrSW50ZXJmYWNlQXR0YWNobWVudFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgTmV0d29ya0ludGVyZmFjZUF0dGFjaG1lbnRgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZWNzLW5ldHdvcmtpbnRlcmZhY2VhdHRhY2htZW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya0ludGVyZmFjZUF0dGFjaG1lbnRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBFQ1MgaW5zdGFuY2UgaWRcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXR3b3JrSW50ZXJmYWNlSWQ6IE5ldHdvcmsgaW50ZXJmYWNlIGlkXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0d29ya0ludGVyZmFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlY3NSZXN0YXJ0T3B0aW9uOiBDb250cm9sIHdoZXRoZXIgdG8gcmVzdGFydCB0aGUgRUNTIGluc3RhbmNlIHdoZW4gYmluZGluZyBhbiBlbGFzdGljIG5ldHdvcmsgY2FyZC5Pbmx5IGVmZmVjdGl2ZSBmb3IgRU5JIHRoYXQgZG9lcyBub3Qgc3VwcG9ydCBob3Qgc3dhcHBpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWNzUmVzdGFydE9wdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRydW5rTmV0d29ya0luc3RhbmNlSWQ6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRydW5rTmV0d29ya0luc3RhbmNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkVDUzo6TmV0d29ya0ludGVyZmFjZUF0dGFjaG1lbnRgLCB3aGljaCBpcyB1c2VkIHRvIGJpbmQgYW4gZWxhc3RpYyBuZXR3b3JrIGludGVyZmFjZSAoRU5JKSB0byBhbiBFbGFzdGljIENvbXB1dGUgU2VydmljZSAoRUNTKSBpbnN0YW5jZSBpbiBhIHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCAoVlBDKS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc05ldHdvcmtJbnRlcmZhY2VBdHRhY2htZW50YGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZWNzLW5ldHdvcmtpbnRlcmZhY2VhdHRhY2htZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBOZXR3b3JrSW50ZXJmYWNlQXR0YWNobWVudCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogTmV0d29ya0ludGVyZmFjZUF0dGFjaG1lbnRQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogSUQgb2YgRUNTIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5ldHdvcmtJbnRlcmZhY2VJZDogSUQgb2YgeW91ciBOZXR3b3JrIEludGVyZmFjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5ldHdvcmtJbnRlcmZhY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRydW5rTmV0d29ya0luc3RhbmNlSWQ6IElEIG9mIFRydW5rIE5ldHdvcmsgSW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJ1bmtOZXR3b3JrSW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IE5ldHdvcmtJbnRlcmZhY2VBdHRhY2htZW50UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NOZXR3b3JrSW50ZXJmYWNlQXR0YWNobWVudCA9IG5ldyBSb3NOZXR3b3JrSW50ZXJmYWNlQXR0YWNobWVudCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHRydW5rTmV0d29ya0luc3RhbmNlSWQ6IHByb3BzLnRydW5rTmV0d29ya0luc3RhbmNlSWQsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiBwcm9wcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgZWNzUmVzdGFydE9wdGlvbjogcHJvcHMuZWNzUmVzdGFydE9wdGlvbixcbiAgICAgICAgICAgIG5ldHdvcmtJbnRlcmZhY2VJZDogcHJvcHMubmV0d29ya0ludGVyZmFjZUlkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc05ldHdvcmtJbnRlcmZhY2VBdHRhY2htZW50O1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gcm9zTmV0d29ya0ludGVyZmFjZUF0dGFjaG1lbnQuYXR0ckluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0ck5ldHdvcmtJbnRlcmZhY2VJZCA9IHJvc05ldHdvcmtJbnRlcmZhY2VBdHRhY2htZW50LmF0dHJOZXR3b3JrSW50ZXJmYWNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clRydW5rTmV0d29ya0luc3RhbmNlSWQgPSByb3NOZXR3b3JrSW50ZXJmYWNlQXR0YWNobWVudC5hdHRyVHJ1bmtOZXR3b3JrSW5zdGFuY2VJZDtcbiAgICB9XG59XG4iXX0=