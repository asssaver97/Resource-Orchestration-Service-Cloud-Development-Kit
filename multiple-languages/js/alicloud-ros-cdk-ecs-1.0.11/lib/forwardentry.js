"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForwardEntry = exports.ForwardEntryProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "ForwardEntryProperty", { enumerable: true, get: function () { return ecs_generated_1.RosForwardEntry; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::ForwardEntry`
 */
class ForwardEntry extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::ForwardEntry`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosForwardEntry = new ecs_generated_1.RosForwardEntry(this, id, {
            externalPort: props.externalPort,
            externalIp: props.externalIp,
            ipProtocol: props.ipProtocol,
            portBreak: props.portBreak,
            internalPort: props.internalPort,
            forwardEntryName: props.forwardEntryName,
            internalIp: props.internalIp,
            forwardTableId: props.forwardTableId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosForwardEntry;
        this.attrForwardEntryId = rosForwardEntry.attrForwardEntryId;
    }
}
exports.ForwardEntry = ForwardEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yd2FyZGVudHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9yd2FyZGVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBZ0RoRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWTFDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBd0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNuSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZUFBZSxHQUFHLElBQUksK0JBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25ELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1NBQ3ZDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUM7SUFDakUsQ0FBQztDQUNKO0FBbkNELG9DQW1DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0ZvcndhcmRFbnRyeSB9IGZyb20gJy4vZWNzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0ZvcndhcmRFbnRyeSBhcyBGb3J3YXJkRW50cnlQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RUNTOjpGb3J3YXJkRW50cnlgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRm9yd2FyZEVudHJ5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZXh0ZXJuYWxJcDogU291cmNlIElQLCBtdXN0IGJlbG9uZ3MgdG8gYmFuZHdpZHRoIHBhY2thZ2UgaW50ZXJuZXQgSVBcbiAgICAgKi9cbiAgICByZWFkb25seSBleHRlcm5hbElwOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBleHRlcm5hbFBvcnQ6IFNvdXJjZSBwb3J0LCBub3cgc3VwcG9ydCBbMS02NTUzNV18QW55fHgveVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGV4dGVybmFsUG9ydDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZm9yd2FyZFRhYmxlSWQ6IENyZWF0ZSBmb3J3YXJkIGVudHJ5IGluIHNwZWNpZmllZCBmb3J3YXJkIHRhYmxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZvcndhcmRUYWJsZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnRlcm5hbElwOiBEZXN0aW5hdGlvbiBJUCwgbXVzdCBiZWxvbmcgdG8gVlBDIHByaXZhdGUgSVBcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5hbElwOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnRlcm5hbFBvcnQ6IERlc3RpbmF0aW9uIHBvcnQsIG5vdyBzdXBwb3J0IFsxLTY1NTM1XXxBbnl8eC95XG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuYWxQb3J0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpcFByb3RvY29sOiBTdXBwb3J0ZWQgcHJvdG9jb2wsIE5vdyBzdXBwb3J0ICdUQ1B8VURQfEFueSdcbiAgICAgKi9cbiAgICByZWFkb25seSBpcFByb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBmb3J3YXJkRW50cnlOYW1lOiB0aGUgbmFtZSBvZiB0aGUgRE5BVCBydWxlIGlzIDItMTI4IGNoYXJhY3RlcnMgbG9uZyBhbmQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UsIGJ1dCBjYW5ub3QgYmVnaW4gd2l0aCBIVFRQOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZvcndhcmRFbnRyeU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwb3J0QnJlYWs6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHJlbW92ZSBsaW1pdHMgb24gdGhlIHBvcnQgcmFuZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9ydEJyZWFrPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RUNTOjpGb3J3YXJkRW50cnlgXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3J3YXJkRW50cnkgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEZvcndhcmRFbnRyeUlkOiBUaGUgaWQgb2YgY3JlYXRlZCBmb3J3YXJkIGVudHJ5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRm9yd2FyZEVudHJ5SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFQ1M6OkZvcndhcmRFbnRyeWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRm9yd2FyZEVudHJ5UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zRm9yd2FyZEVudHJ5ID0gbmV3IFJvc0ZvcndhcmRFbnRyeSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGV4dGVybmFsUG9ydDogcHJvcHMuZXh0ZXJuYWxQb3J0LFxuICAgICAgICAgICAgZXh0ZXJuYWxJcDogcHJvcHMuZXh0ZXJuYWxJcCxcbiAgICAgICAgICAgIGlwUHJvdG9jb2w6IHByb3BzLmlwUHJvdG9jb2wsXG4gICAgICAgICAgICBwb3J0QnJlYWs6IHByb3BzLnBvcnRCcmVhayxcbiAgICAgICAgICAgIGludGVybmFsUG9ydDogcHJvcHMuaW50ZXJuYWxQb3J0LFxuICAgICAgICAgICAgZm9yd2FyZEVudHJ5TmFtZTogcHJvcHMuZm9yd2FyZEVudHJ5TmFtZSxcbiAgICAgICAgICAgIGludGVybmFsSXA6IHByb3BzLmludGVybmFsSXAsXG4gICAgICAgICAgICBmb3J3YXJkVGFibGVJZDogcHJvcHMuZm9yd2FyZFRhYmxlSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zRm9yd2FyZEVudHJ5O1xuICAgICAgICB0aGlzLmF0dHJGb3J3YXJkRW50cnlJZCA9IHJvc0ZvcndhcmRFbnRyeS5hdHRyRm9yd2FyZEVudHJ5SWQ7XG4gICAgfVxufVxuIl19