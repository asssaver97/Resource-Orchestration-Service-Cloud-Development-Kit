"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = exports.DeviceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const iot_generated_1 = require("./iot.generated");
Object.defineProperty(exports, "DeviceProperty", { enumerable: true, get: function () { return iot_generated_1.RosDevice; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::IOT::Device`, which is used to register a Device.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDevice`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
 */
class Device extends ros.Resource {
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
        const rosDevice = new iot_generated_1.RosDevice(this, id, {
            iotInstanceId: props.iotInstanceId,
            devEui: props.devEui,
            productKey: props.productKey,
            deviceName: props.deviceName,
            pinCode: props.pinCode,
            nickname: props.nickname,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDevice;
        this.attrDeviceName = rosDevice.attrDeviceName;
        this.attrDeviceSecret = rosDevice.attrDeviceSecret;
        this.attrIotId = rosDevice.attrIotId;
        this.attrIotInstanceId = rosDevice.attrIotInstanceId;
        this.attrIpAddress = rosDevice.attrIpAddress;
        this.attrNickName = rosDevice.attrNickName;
        this.attrNodeType = rosDevice.attrNodeType;
        this.attrProductKey = rosDevice.attrProductKey;
        this.attrProductName = rosDevice.attrProductName;
    }
}
exports.Device = Device;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBNEM7QUFFdEIsK0ZBRmIseUJBQVMsT0FFa0I7QUErQ3BDOzs7O0dBSUc7QUFDSCxNQUFhLE1BQU8sU0FBUSxHQUFHLENBQUMsUUFBUTtJQW9EcEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBa0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUM3RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sU0FBUyxHQUFHLElBQUkseUJBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQzNCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUM7SUFDckQsQ0FBQztDQUNKO0FBbkZELHdCQW1GQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0RldmljZSB9IGZyb20gJy4vaW90LmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RldmljZSBhcyBEZXZpY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERldmljZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1pb3QtZGV2aWNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvZHVjdEtleTogVGhlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gd2hpY2ggdGhlIGRldmljZSB0byBiZSByZWdpc3RlcmVkIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvZHVjdEtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGV2RXVpOiBEZXZFVUkgTG9SYVdBTiBlcXVpcG1lbnQuXG4gICAgICogV2hlbiB5b3UgY3JlYXRlIGEgTG9SYVdBTiBkZXZpY2VzLCB0aGlzIHdpbGwgcGFzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXZFdWk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXZpY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZGV2aWNlIHRoYXQgeW91IHdhbnQgdG8gcmVnaXN0ZXIuIFRoZSBkZXZpY2UgbmFtZSBtdXN0IGNvbnNpc3Qgb2ZcbiAgICAgKiA0IHRvIDMyIGNoYXJhY3RlcnMsIGluY2x1ZGluZyBFbmdsaXNoIGxldHRlcnMsIGRpZ2l0cywgYW5kIHNwZWNpYWwgY2hhcmFjdGVycywgZm9yXG4gICAgICogZXhhbXBsZSwgaHlwaGVucyAoLSksIHVuZGVyc2NvcmVzIChfKSwgYXQgc2lnbnMgKEApLCBwZXJpb2RzICguKSAsIGFuZCBjb2xvbnMgKDopLlxuICAgICAqIERldmljZU5hbWUgaXMgdXNlZCB3aXRoIFByb2R1Y3RLZXkgdG8gaWRlbnRpZnkgYSBzcGVjaWZpZWQgZGV2aWNlLlxuICAgICAqIE5vdGUgSWYgeW91IGRvIG5vdCBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLCB0aGUgc3lzdGVtIHdpbGwgZ2VuZXJhdGUgYSBuYW1lIGZvciB0aGUgZGV2aWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRldmljZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpb3RJbnN0YW5jZUlkOiBQdWJsaWMgaW5zdGFuY2UgZG9lcyBub3QgcGFzcyB0aGlzIHBhcmFtZXRlcjsgaW5zdGFuY2UgdGhhdCB5b3UgbmVlZCB0byBidXkgdGhlIGluY29taW5nIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlvdEluc3RhbmNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuaWNrbmFtZTogQWRkIGEgbmlja25hbWUgZm9yIHRoZSBkZXZpY2UuIEEgbmlja25hbWUgY2FuIGJlIDQtNjQgY2hhcmFjdGVycyBpbiBsZW5ndGgsIGFuZCBjYW5cbiAgICAgKiBjb250YWluIENoaW5lc2UgY2hhcmFjdGVycywgRW5nbGlzaCBsZXR0ZXJzLCBudW1iZXJzIGFuZCB1bmRlcnNjb3JlcyAoXykuIEEgQ2hpbmVzZVxuICAgICAqIGNoYXJhY3RlciBjb3VudHMgYXMgdHdvIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmlja25hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwaW5Db2RlOiBQSU4gQ29kZSBMb1JhV0FOIGRldmljZSBmb3IgY2hlY2tpbmcgdGhlIGxlZ2l0aW1hY3kgb2YgRGV2RVVJLlxuICAgICAqIFdoZW4geW91IGNyZWF0ZSBhIExvUmFXQU4gZGV2aWNlcywgdGhpcyB3aWxsIHBhc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGluQ29kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6SU9UOjpEZXZpY2VgLCB3aGljaCBpcyB1c2VkIHRvIHJlZ2lzdGVyIGEgRGV2aWNlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zRGV2aWNlYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4taW90LWRldmljZVxuICovXG5leHBvcnQgY2xhc3MgRGV2aWNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBEZXZpY2VQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGV2aWNlTmFtZTogRGV2aWNlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXZpY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGV2aWNlU2VjcmV0OiBEZXZpY2Uga2V5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGV2aWNlU2VjcmV0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW90SWQ6IFRoaW5ncyBpbnRlcm5ldCBkZXZpY2UgSUQgaXNzdWVkIGZvciB0aGUgZGV2aWNlLCBhcyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGRldmljZS5cbkRlc2NyaXB0aW9uIEtlZXAsIGRvIG5vdCBsZWFrLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW90SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJb3RJbnN0YW5jZUlkOiBJT1QgaW5zdGFuY2UgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJb3RJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSXBBZGRyZXNzOiBJUCBhZGRyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXBBZGRyZXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTmlja05hbWU6IE5pY2sgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5pY2tOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTm9kZVR5cGU6IE5vZGUgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5vZGVUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJvZHVjdEtleTogUHJvZHVjdCBrZXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcm9kdWN0S2V5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJvZHVjdE5hbWU6IFByb2R1Y3QgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByb2R1Y3ROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRGV2aWNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NEZXZpY2UgPSBuZXcgUm9zRGV2aWNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaW90SW5zdGFuY2VJZDogcHJvcHMuaW90SW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGRldkV1aTogcHJvcHMuZGV2RXVpLFxuICAgICAgICAgICAgcHJvZHVjdEtleTogcHJvcHMucHJvZHVjdEtleSxcbiAgICAgICAgICAgIGRldmljZU5hbWU6IHByb3BzLmRldmljZU5hbWUsXG4gICAgICAgICAgICBwaW5Db2RlOiBwcm9wcy5waW5Db2RlLFxuICAgICAgICAgICAgbmlja25hbWU6IHByb3BzLm5pY2tuYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0RldmljZTtcbiAgICAgICAgdGhpcy5hdHRyRGV2aWNlTmFtZSA9IHJvc0RldmljZS5hdHRyRGV2aWNlTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyRGV2aWNlU2VjcmV0ID0gcm9zRGV2aWNlLmF0dHJEZXZpY2VTZWNyZXQ7XG4gICAgICAgIHRoaXMuYXR0cklvdElkID0gcm9zRGV2aWNlLmF0dHJJb3RJZDtcbiAgICAgICAgdGhpcy5hdHRySW90SW5zdGFuY2VJZCA9IHJvc0RldmljZS5hdHRySW90SW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRySXBBZGRyZXNzID0gcm9zRGV2aWNlLmF0dHJJcEFkZHJlc3M7XG4gICAgICAgIHRoaXMuYXR0ck5pY2tOYW1lID0gcm9zRGV2aWNlLmF0dHJOaWNrTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyTm9kZVR5cGUgPSByb3NEZXZpY2UuYXR0ck5vZGVUeXBlO1xuICAgICAgICB0aGlzLmF0dHJQcm9kdWN0S2V5ID0gcm9zRGV2aWNlLmF0dHJQcm9kdWN0S2V5O1xuICAgICAgICB0aGlzLmF0dHJQcm9kdWN0TmFtZSA9IHJvc0RldmljZS5hdHRyUHJvZHVjdE5hbWU7XG4gICAgfVxufVxuIl19