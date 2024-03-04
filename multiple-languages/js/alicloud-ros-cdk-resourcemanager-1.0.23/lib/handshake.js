"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handshake = exports.HandshakeProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const resourcemanager_generated_1 = require("./resourcemanager.generated");
Object.defineProperty(exports, "HandshakeProperty", { enumerable: true, get: function () { return resourcemanager_generated_1.RosHandshake; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::Handshake`, which is used to create an invitation.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHandshake`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-handshake
 */
class Handshake extends ros.Resource {
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
        const rosHandshake = new resourcemanager_generated_1.RosHandshake(this, id, {
            note: props.note,
            targetType: props.targetType,
            targetEntity: props.targetEntity,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHandshake;
        this.attrHandshakeId = rosHandshake.attrHandshakeId;
        this.attrMasterAccountId = rosHandshake.attrMasterAccountId;
        this.attrMasterAccountName = rosHandshake.attrMasterAccountName;
        this.attrNote = rosHandshake.attrNote;
        this.attrResourceDirectoryId = rosHandshake.attrResourceDirectoryId;
        this.attrTargetEntity = rosHandshake.attrTargetEntity;
        this.attrTargetType = rosHandshake.attrTargetType;
    }
}
exports.Handshake = Handshake;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZHNoYWtlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFuZHNoYWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QywyRUFBMkQ7QUFFbEMsa0dBRmhCLHdDQUFZLE9BRXFCO0FBd0IxQzs7OztHQUlHO0FBQ0gsTUFBYSxTQUFVLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUF5Q3ZDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFCLEVBQUUsbUNBQTJDLElBQUk7UUFDaEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFlBQVksR0FBRyxJQUFJLHdDQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3QyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtTQUNuQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUM7UUFDcEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztRQUM1RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsWUFBWSxDQUFDLHFCQUFxQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUN0QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsWUFBWSxDQUFDLHVCQUF1QixDQUFDO1FBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDO0lBQ3RELENBQUM7Q0FDSjtBQW5FRCw4QkFtRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NIYW5kc2hha2UgfSBmcm9tICcuL3Jlc291cmNlbWFuYWdlci5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NIYW5kc2hha2UgYXMgSGFuZHNoYWtlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBIYW5kc2hha2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLWhhbmRzaGFrZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhhbmRzaGFrZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhcmdldEVudGl0eTogSW52aXRlZCBhY2NvdW50IElEIG9yIGxvZ2luIGVtYWlsXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0RW50aXR5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YXJnZXRUeXBlOiBUeXBlIG9mIGFjY291bnQgYmVpbmcgaW52aXRlZC4gVmFsaWQgdmFsdWVzOiBBY2NvdW50LCBFbWFpbFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5vdGU6IFJlbWFya3NcbiAgICAgKi9cbiAgICByZWFkb25seSBub3RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkhhbmRzaGFrZWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGludml0YXRpb24uXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NIYW5kc2hha2VgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yZXNvdXJjZW1hbmFnZXItaGFuZHNoYWtlXG4gKi9cbmV4cG9ydCBjbGFzcyBIYW5kc2hha2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEhhbmRzaGFrZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBIYW5kc2hha2VJZDogVGhpcyBJRCBvZiBSZXNvdXJjZSBNYW5hZ2VyIGhhbmRzaGFrZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySGFuZHNoYWtlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBNYXN0ZXJBY2NvdW50SWQ6IFJlc291cmNlIGFjY291bnQgbWFzdGVyIGFjY291bnQgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1hc3RlckFjY291bnRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1hc3RlckFjY291bnROYW1lOiBUaGUgbmFtZSBvZiB0aGUgbWFpbiBhY2NvdW50IG9mIHRoZSByZXNvdXJjZSBkaXJlY3RvcnlcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1hc3RlckFjY291bnROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTm90ZTogUmVtYXJrc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTm90ZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc291cmNlRGlyZWN0b3J5SWQ6IFJlc291cmNlIGRpcmVjdG9yeSBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VEaXJlY3RvcnlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRhcmdldEVudGl0eTogSW52aXRlZCBhY2NvdW50IElEIG9yIGxvZ2luIGVtYWlsXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYXJnZXRFbnRpdHk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUYXJnZXRUeXBlOiBUeXBlIG9mIGFjY291bnQgYmVpbmcgaW52aXRlZC4gVmFsaWQgdmFsdWVzOiBBY2NvdW50LCBFbWFpbFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFyZ2V0VHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEhhbmRzaGFrZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zSGFuZHNoYWtlID0gbmV3IFJvc0hhbmRzaGFrZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIG5vdGU6IHByb3BzLm5vdGUsXG4gICAgICAgICAgICB0YXJnZXRUeXBlOiBwcm9wcy50YXJnZXRUeXBlLFxuICAgICAgICAgICAgdGFyZ2V0RW50aXR5OiBwcm9wcy50YXJnZXRFbnRpdHksXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSGFuZHNoYWtlO1xuICAgICAgICB0aGlzLmF0dHJIYW5kc2hha2VJZCA9IHJvc0hhbmRzaGFrZS5hdHRySGFuZHNoYWtlSWQ7XG4gICAgICAgIHRoaXMuYXR0ck1hc3RlckFjY291bnRJZCA9IHJvc0hhbmRzaGFrZS5hdHRyTWFzdGVyQWNjb3VudElkO1xuICAgICAgICB0aGlzLmF0dHJNYXN0ZXJBY2NvdW50TmFtZSA9IHJvc0hhbmRzaGFrZS5hdHRyTWFzdGVyQWNjb3VudE5hbWU7XG4gICAgICAgIHRoaXMuYXR0ck5vdGUgPSByb3NIYW5kc2hha2UuYXR0ck5vdGU7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlRGlyZWN0b3J5SWQgPSByb3NIYW5kc2hha2UuYXR0clJlc291cmNlRGlyZWN0b3J5SWQ7XG4gICAgICAgIHRoaXMuYXR0clRhcmdldEVudGl0eSA9IHJvc0hhbmRzaGFrZS5hdHRyVGFyZ2V0RW50aXR5O1xuICAgICAgICB0aGlzLmF0dHJUYXJnZXRUeXBlID0gcm9zSGFuZHNoYWtlLmF0dHJUYXJnZXRUeXBlO1xuICAgIH1cbn1cbiJdfQ==