"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activation = exports.ActivationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "ActivationProperty", { enumerable: true, get: function () { return ecs_generated_1.RosActivation; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::Activation`, which is used to create an activation code.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosActivation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-activation
 */
class Activation extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosActivation = new ecs_generated_1.RosActivation(this, id, {
            instanceName: props.instanceName,
            instanceCount: props.instanceCount,
            description: props.description,
            timeToLiveInHours: props.timeToLiveInHours,
            ipAddressRange: props.ipAddressRange,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosActivation;
        this.attrActivationCode = rosActivation.attrActivationCode;
        this.attrActivationId = rosActivation.attrActivationId;
        this.attrDeregisteredCount = rosActivation.attrDeregisteredCount;
        this.attrRegisteredCount = rosActivation.attrRegisteredCount;
    }
}
exports.Activation = Activation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUF1QzVDOzs7O0dBSUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxHQUFHLENBQUMsUUFBUTtJQTBCeEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBeUIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ3RILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtZQUMxQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7UUFDM0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsYUFBYSxDQUFDLHFCQUFxQixDQUFDO1FBQ2pFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDakUsQ0FBQztDQUNKO0FBcERELGdDQW9EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0FjdGl2YXRpb24gfSBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBY3RpdmF0aW9uIGFzIEFjdGl2YXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFjdGl2YXRpb25gLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZWNzLWFjdGl2YXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY3RpdmF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYWN0aXZhdGlvbiBjb2RlLiBJdCBtdXN0IGJlIDEgdG8gMTAwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDb3VudDogVGhlIG1heGltdW0gbnVtYmVyIG9mIHRpbWVzIHRoYXQgeW91IGNhbiB1c2UgdGhlIGFjdGl2YXRpb24gY29kZSB0byByZWdpc3RlciBtYW5hZ2VkIGluc3RhbmNlcy4gVmFsaWQgdmFsdWVzOiAxIHRvIDEwMDAuRGVmYXVsdCB2YWx1ZTogMTAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VDb3VudD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlTmFtZTogVGhlIGRlZmF1bHQgaW5zdGFuY2UgbmFtZSBwcmVmaXguIFRoZSBpbnN0YW5jZSBuYW1lIHByZWZpeCBtdXN0IGJlIDIgdG8gNTAgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBhbmQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDpcXC9cXC8gb3IgaHR0cHM6XFwvXFwvLiBJdCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIHBlcmlvZHMgKC4pLCB1bmRlcnNjb3JlcyAoXyksIGh5cGhlbnMgKC0pLCBhbmQgY29sb25zICg6KS4gSWYgeW91IHVzZSB0aGUgYWN0aXZhdGlvbiBjb2RlIHRoYXQgaXMgY3JlYXRlZCBieSBjYWxsaW5nIHRoaXMgb3BlcmF0aW9uIChDcmVhdGVBY3RpdmF0aW9uKSB0byByZWdpc3RlciBtYW5hZ2VkIGluc3RhbmNlcywgdGhlIGluc3RhbmNlcyBhcmUgYXNzaWduZWQgc2VxdWVudGlhbCBuYW1lcyB0aGF0IGFyZSBwcmVmaXhlZCBieSB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIuIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IGEgbmV3IGluc3RhbmNlIG5hbWUgdG8gcmVwbGFjZSB0aGUgYXNzaWduZWQgc2VxdWVudGlhbCBuYW1lIHdoZW4geW91IHJlZ2lzdGVyIGEgbWFuYWdlZCBpbnN0YW5jZS5JZiB5b3Ugc3BlY2lmeSBJbnN0YW5jZU5hbWUgd2hlbiB5b3UgcmVnaXN0ZXIgYSBtYW5hZ2VkIGluc3RhbmNlLCBhbiBpbnN0YW5jZSBuYW1lIGluIHRoZWZvcm1hdCBvZiA8SW5zdGFuY2VOYW1lPi08TnVtYmVyPiBpcyBnZW5lcmF0ZWQuIFRoZSBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSA8TnVtYmVyPiB2YWx1ZSBpc2RldGVybWluZWQgYnkgdGhhdCBpbiB0aGUgSW5zdGFuY2VDb3VudCB2YWx1ZS4gRXhhbXBsZTogMDAxLiBJZiB5b3UgZG8gbm90IHNwZWNpZnkgSW5zdGFuY2VOYW1lLCB0aGUgaG9zdG5hbWUgKEhvc3RuYW1lKSBpcyB1c2VkIGFzIHRoZSBpbnN0YW5jZSBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlwQWRkcmVzc1JhbmdlOiBUaGUgSVAgYWRkcmVzc2VzIG9mIGhvc3RzIHRoYXQgYXJlIGFsbG93ZWQgdG8gdXNlIHRoZSBhY3RpdmF0aW9uIGNvZGUuIFRoZSB2YWx1ZSBjYW4gYmUgSVB2NCBhZGRyZXNzZXMsIElQdjYgYWRkcmVzc2VzLCBvciBDSURSIGJsb2Nrcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpcEFkZHJlc3NSYW5nZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0FjdGl2YXRpb24uVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0aW1lVG9MaXZlSW5Ib3VyczogVGhlIHZhbGlkaXR5IHBlcmlvZCBvZiB0aGUgYWN0aXZhdGlvbiBjb2RlLiBUaGUgYWN0aXZhdGlvbiBjb2RlIGNhbiBubyBsb25nZXIgYmUgdXNlZCB0byByZWdpc3RlciBpbnN0YW5jZXMgYWZ0ZXIgdGhlIHBlcmlvZCBlbmRzLiBVbml0OiBob3Vycy4gVmFsaWQgdmFsdWVzOiAxIHRvIDg3NjU3Niwgd2hpY2ggcmVwcmVzZW50cyBhIHJhbmdlIG9mIHRpbWUgZnJvbSAxIGhvdXIgdG8gMTAwIHllYXJzLkRlZmF1bHQgdmFsdWU6IDQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZVRvTGl2ZUluSG91cnM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkVDUzo6QWN0aXZhdGlvbmAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGFjdGl2YXRpb24gY29kZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0FjdGl2YXRpb25gZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lY3MtYWN0aXZhdGlvblxuICovXG5leHBvcnQgY2xhc3MgQWN0aXZhdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogQWN0aXZhdGlvblByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBY3RpdmF0aW9uQ29kZTogQWN0aXZhdGlvbiBjb2RlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWN0aXZhdGlvbkNvZGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBY3RpdmF0aW9uSWQ6IEFjdGl2YXRpb24gY29kZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjdGl2YXRpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERlcmVnaXN0ZXJlZENvdW50OiBUaGUgbnVtYmVyIG9mIGluc3RhbmNlcyB0aGF0IGhhdmUgYmVlbiBsb2dnZWQgb3V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVyZWdpc3RlcmVkQ291bnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZWdpc3RlcmVkQ291bnQ6IFRoZSBudW1iZXIgb2YgcmVnaXN0ZXJlZCBpbnN0YW5jZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZWdpc3RlcmVkQ291bnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBY3RpdmF0aW9uUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0FjdGl2YXRpb24gPSBuZXcgUm9zQWN0aXZhdGlvbih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGluc3RhbmNlTmFtZTogcHJvcHMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2VDb3VudDogcHJvcHMuaW5zdGFuY2VDb3VudCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRpbWVUb0xpdmVJbkhvdXJzOiBwcm9wcy50aW1lVG9MaXZlSW5Ib3VycyxcbiAgICAgICAgICAgIGlwQWRkcmVzc1JhbmdlOiBwcm9wcy5pcEFkZHJlc3NSYW5nZSxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQWN0aXZhdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyQWN0aXZhdGlvbkNvZGUgPSByb3NBY3RpdmF0aW9uLmF0dHJBY3RpdmF0aW9uQ29kZTtcbiAgICAgICAgdGhpcy5hdHRyQWN0aXZhdGlvbklkID0gcm9zQWN0aXZhdGlvbi5hdHRyQWN0aXZhdGlvbklkO1xuICAgICAgICB0aGlzLmF0dHJEZXJlZ2lzdGVyZWRDb3VudCA9IHJvc0FjdGl2YXRpb24uYXR0ckRlcmVnaXN0ZXJlZENvdW50O1xuICAgICAgICB0aGlzLmF0dHJSZWdpc3RlcmVkQ291bnQgPSByb3NBY3RpdmF0aW9uLmF0dHJSZWdpc3RlcmVkQ291bnQ7XG4gICAgfVxufVxuIl19