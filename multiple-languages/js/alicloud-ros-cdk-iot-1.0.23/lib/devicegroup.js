"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceGroup = exports.DeviceGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const iot_generated_1 = require("./iot.generated");
Object.defineProperty(exports, "DeviceGroupProperty", { enumerable: true, get: function () { return iot_generated_1.RosDeviceGroup; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::IOT::DeviceGroup`, which is used to create a group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDeviceGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-devicegroup
 */
class DeviceGroup extends ros.Resource {
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
        const rosDeviceGroup = new iot_generated_1.RosDeviceGroup(this, id, {
            groupName: props.groupName,
            superGroupId: props.superGroupId,
            iotInstanceId: props.iotInstanceId,
            groupDesc: props.groupDesc,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDeviceGroup;
        this.attrGroupId = rosDeviceGroup.attrGroupId;
        this.attrIotInstanceId = rosDeviceGroup.attrIotInstanceId;
    }
}
exports.DeviceGroup = DeviceGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXZpY2Vncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQThCOUM7Ozs7R0FJRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0J6Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxjQUFjLEdBQUcsSUFBSSw4QkFBYyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakQsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1NBQzdCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0lBQzlELENBQUM7Q0FDSjtBQXRDRCxrQ0FzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEZXZpY2VHcm91cCB9IGZyb20gJy4vaW90LmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RldmljZUdyb3VwIGFzIERldmljZUdyb3VwUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBEZXZpY2VHcm91cGAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1pb3QtZGV2aWNlZ3JvdXBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGdyb3VwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGdyb3VwLiBUaGUgbmFtZSBjYW4gY29udGFpbiBDaGluZXNlIGNoYXJhY3RlcnMsIEVuZ2xpc2ggbGV0dGVycywgZGlnaXRzLCBhbmQgdW5kZXJzY29yZXMgKF8pLiBUaGUgbGVuZ3RoIG11c3QgYmUgNCB0byAzMCBjaGFyYWN0ZXJzIChhIENoaW5lc2UgY2hhcmFjdGVyIGNvdW50cyBhcyB0d28gY2hhcmFjdGVycykuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBncm91cERlc2M6IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZ3JvdXAuIFlvdSBjYW4gZW50ZXIgYSBkZXNjcmlwdGlvbiB3aXRoIHVwIHRvIDEwMCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwRGVzYz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlvdEluc3RhbmNlSWQ6IFB1YmxpYyBpbnN0YW5jZSBkb2VzIG5vdCBwYXNzIHRoaXMgcGFyYW1ldGVyOyBpbnN0YW5jZSB0aGF0IHlvdSBuZWVkIHRvIGJ1eSB0aGUgaW5jb21pbmcgaW5zdGFuY2UgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW90SW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN1cGVyR3JvdXBJZDogVGhlIElEIG9mIHRoZSBwYXJlbnQgZ3JvdXAuXG4gICAgICogSWYgeW91IHdhbnQgdG8gY3JlYXRlIGEgZmlyc3QtbGV2ZWwgZ3JvdXAsIGRvIG5vdCBlbnRlciB0aGlzIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdXBlckdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OklPVDo6RGV2aWNlR3JvdXBgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGdyb3VwLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zRGV2aWNlR3JvdXBgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1pb3QtZGV2aWNlZ3JvdXBcbiAqL1xuZXhwb3J0IGNsYXNzIERldmljZUdyb3VwIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBEZXZpY2VHcm91cFByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBHcm91cElkOiBQYWNrZXQsIElELCBTeXN0ZW0gZm9yIHRoZSBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllciBnZW5lcmF0ZWQgcGFja2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIElvdEluc3RhbmNlSWQ6IElPVCBpbnN0YW5jZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklvdEluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBEZXZpY2VHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zRGV2aWNlR3JvdXAgPSBuZXcgUm9zRGV2aWNlR3JvdXAodGhpcywgaWQsICB7XG4gICAgICAgICAgICBncm91cE5hbWU6IHByb3BzLmdyb3VwTmFtZSxcbiAgICAgICAgICAgIHN1cGVyR3JvdXBJZDogcHJvcHMuc3VwZXJHcm91cElkLFxuICAgICAgICAgICAgaW90SW5zdGFuY2VJZDogcHJvcHMuaW90SW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGdyb3VwRGVzYzogcHJvcHMuZ3JvdXBEZXNjLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0RldmljZUdyb3VwO1xuICAgICAgICB0aGlzLmF0dHJHcm91cElkID0gcm9zRGV2aWNlR3JvdXAuYXR0ckdyb3VwSWQ7XG4gICAgICAgIHRoaXMuYXR0cklvdEluc3RhbmNlSWQgPSByb3NEZXZpY2VHcm91cC5hdHRySW90SW5zdGFuY2VJZDtcbiAgICB9XG59XG4iXX0=