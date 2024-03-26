"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bundle = exports.BundleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecd_generated_1 = require("./ecd.generated");
Object.defineProperty(exports, "BundleProperty", { enumerable: true, get: function () { return ecd_generated_1.RosBundle; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECD::Bundle`, which is used to create a custom desktop template.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBundle`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-bundle
 */
class Bundle extends ros.Resource {
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
        const rosBundle = new ecd_generated_1.RosBundle(this, id, {
            description: props.description,
            rootDiskSizeGib: props.rootDiskSizeGib,
            language: props.language,
            rootDiskPerformanceLevel: props.rootDiskPerformanceLevel,
            desktopType: props.desktopType,
            bundleName: props.bundleName,
            imageId: props.imageId,
            userDiskPerformanceLevel: props.userDiskPerformanceLevel,
            userDiskSizeGib: props.userDiskSizeGib,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBundle;
        this.attrBundleId = rosBundle.attrBundleId;
    }
}
exports.Bundle = Bundle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBNEM7QUFFdEIsK0ZBRmIseUJBQVMsT0FFa0I7QUF1RXBDOzs7O0dBSUc7QUFDSCxNQUFhLE1BQU8sU0FBUSxHQUFHLENBQUMsUUFBUTtJQVdwQzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFrQixFQUFFLG1DQUEyQyxJQUFJO1FBQzdHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxTQUFTLEdBQUcsSUFBSSx5QkFBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLHdCQUF3QjtZQUN4RCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0Qix3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCO1lBQ3hELGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtTQUN6QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7SUFDL0MsQ0FBQztDQUNKO0FBckNELHdCQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0J1bmRsZSB9IGZyb20gJy4vZWNkLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0J1bmRsZSBhcyBCdW5kbGVQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEJ1bmRsZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lY2QtYnVuZGxlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQnVuZGxlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVza3RvcFR5cGU6IERlc2t0b3Agc3BlY2lmaWNhdGlvbnMuWW91IGNhbiBjYWxsIERlc2NyaWJ1bmRsZXMgdG8gcXVlcnkgdGhlIGRlc2t0b3AgYnVuZGxlIGFuZCBnZXQgdGhlIGN1cnJlbnRseSBzdXBwb3J0ZWQgZGVza3RvcCBzcGVjaWZpY2F0aW9uIGZyb20gdGhlIHJldHVybmVkIGRlc2t0b3BUeXBlLlxuICAgICAqIEV4cGxhaW4gdGhhdCBvcmRpbmFyeSBtaXJyb3JzIGNhbm5vdCBjaG9vc2UgdGhlIEdQVSBzcGVjaWZpY2F0aW9ucywgYW5kIHRoZSBHUFUgdHlwZSBtaXJyb3IgY2FuIG9ubHkgY2hvb3NlIHRoZSBHUFUgc3BlY2lmaWNhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNrdG9wVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW1hZ2VJZDogVGhlIElEIG9mIHRoZSBpbWFnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb290RGlza1NpemVHaWI6IFRoZSByb290IGRpc2sgc2l6ZSBnaWIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm9vdERpc2tTaXplR2liOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1c2VyRGlza1NpemVHaWI6IFRoZSBzaXplIG9mIHRoZSBkYXRhIGRpc2suIEN1cnJlbnRseSwgb25seSBvbmUgZGF0YSBkaXNrIGNhbiBiZSBzZXQuIFVuaXQ6IEdpQi5cbiAgICAgKiAtIFRoZSBzaXplIG9mIHRoZSBkYXRhIGRpc2sgdGhhdCBzdXBwb3J0cyB0aGUgc2V0dGluZyBjb3JyZXNwb25kcyB0byB0aGUgc3BlY2lmaWNhdGlvbi5cbiAgICAgKiAtIFRoZSBkYXRhIGRpc2sgc2l6ZSAodXNlcl9kaXNrX3NpemVfZ2liKSBzZXQgaW4gdGhlIHRlbXBsYXRlIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBkYXRhIGRpc2sgc2l6ZSAoZGF0YV9kaXNrX3NpemUpIGluIHRoZSBtaXJyb3IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlckRpc2tTaXplR2liOiBBcnJheTxudW1iZXIgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYnVuZGxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGJ1bmRsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBidW5kbGVOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYnVuZGxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGFuZ3VhZ2U6IFRoZSBsYW5ndWFnZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHpoLUNOOiBTaW1wbGlmaWVkIENoaW5lc2VcbiAgICAgKiB6aC1ISzogVHJhZGl0aW9uYWwgQ2hpbmVzZSAoSG9uZyBLb25nKVxuICAgICAqIGVuLVVTOiBFbmdsaXNoXG4gICAgICogamEtSlA6IEphcGFuZXNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGFuZ3VhZ2U/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb290RGlza1BlcmZvcm1hbmNlTGV2ZWw6IFRoZSByb290IGRpc2sgcGVyZm9ybWFuY2UgbGV2ZWwuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBQTDBcbiAgICAgKiBQTDFcbiAgICAgKiBQTDJcbiAgICAgKiBQTDNcbiAgICAgKlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvb3REaXNrUGVyZm9ybWFuY2VMZXZlbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzZXJEaXNrUGVyZm9ybWFuY2VMZXZlbDogVGhlIHVzZXIgZGlzayBwZXJmb3JtYW5jZSBsZXZlbC5WYWxpZCB2YWx1ZXM6XG4gICAgICogUEwwXG4gICAgICogUEwxXG4gICAgICogUEwyXG4gICAgICogUEwzXG4gICAgICpcbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VyRGlza1BlcmZvcm1hbmNlTGV2ZWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkVDRDo6QnVuZGxlYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBjdXN0b20gZGVza3RvcCB0ZW1wbGF0ZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0J1bmRsZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVjZC1idW5kbGVcbiAqL1xuZXhwb3J0IGNsYXNzIEJ1bmRsZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogQnVuZGxlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEJ1bmRsZUlkOiBEZXNrdG9wIGJ1bmRsZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckJ1bmRsZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQnVuZGxlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NCdW5kbGUgPSBuZXcgUm9zQnVuZGxlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcm9vdERpc2tTaXplR2liOiBwcm9wcy5yb290RGlza1NpemVHaWIsXG4gICAgICAgICAgICBsYW5ndWFnZTogcHJvcHMubGFuZ3VhZ2UsXG4gICAgICAgICAgICByb290RGlza1BlcmZvcm1hbmNlTGV2ZWw6IHByb3BzLnJvb3REaXNrUGVyZm9ybWFuY2VMZXZlbCxcbiAgICAgICAgICAgIGRlc2t0b3BUeXBlOiBwcm9wcy5kZXNrdG9wVHlwZSxcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IHByb3BzLmJ1bmRsZU5hbWUsXG4gICAgICAgICAgICBpbWFnZUlkOiBwcm9wcy5pbWFnZUlkLFxuICAgICAgICAgICAgdXNlckRpc2tQZXJmb3JtYW5jZUxldmVsOiBwcm9wcy51c2VyRGlza1BlcmZvcm1hbmNlTGV2ZWwsXG4gICAgICAgICAgICB1c2VyRGlza1NpemVHaWI6IHByb3BzLnVzZXJEaXNrU2l6ZUdpYixcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NCdW5kbGU7XG4gICAgICAgIHRoaXMuYXR0ckJ1bmRsZUlkID0gcm9zQnVuZGxlLmF0dHJCdW5kbGVJZDtcbiAgICB9XG59XG4iXX0=