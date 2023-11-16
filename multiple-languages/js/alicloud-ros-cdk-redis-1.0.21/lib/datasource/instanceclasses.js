"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceClasses = exports.InstanceClassesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const redis_generated_1 = require("./redis.generated");
Object.defineProperty(exports, "InstanceClassesProperty", { enumerable: true, get: function () { return redis_generated_1.RosInstanceClasses; } });
/**
 * A ROS resource type:  `DATASOURCE::REDIS::InstanceClasses`
 */
class InstanceClasses extends ros.Resource {
    /**
     * Create a new `DATASOURCE::REDIS::InstanceClasses`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstanceClasses = new redis_generated_1.RosInstanceClasses(this, id, {
            orderType: props.orderType,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            instanceId: props.instanceId,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PrePaid' : props.instanceChargeType,
            nodeId: props.nodeId,
            productType: props.productType,
            acceptLanguage: props.acceptLanguage,
            engine: props.engine,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceClasses;
        this.attrInstanceClassIds = rosInstanceClasses.attrInstanceClassIds;
        this.attrInstanceClasses = rosInstanceClasses.attrInstanceClasses;
    }
}
exports.InstanceClasses = InstanceClasses;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2VjbGFzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5zdGFuY2VjbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5Qyx1REFBdUQ7QUFFeEIsd0dBRnRCLG9DQUFrQixPQUUyQjtBQXNFdEQ7O0dBRUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQjdDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBOEIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQzNILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLG9DQUFrQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekQsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGtCQUFrQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCO1lBQ3RJLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtTQUN2QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQ25DLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQztRQUNwRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7SUFDdEUsQ0FBQztDQUNKO0FBMUNELDBDQTBDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0luc3RhbmNlQ2xhc3NlcyB9IGZyb20gJy4vcmVkaXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2VDbGFzc2VzIGFzIEluc3RhbmNlQ2xhc3Nlc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6UkVESVM6Okluc3RhbmNlQ2xhc3Nlc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZUNsYXNzZXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2NlcHRMYW5ndWFnZTogVGhlIGxhbmd1YWdlIG9mIHRoZSByZXR1cm4gdmFsdWVzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogIHpoLUNOOiBDaGluZXNlLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAqICBlbi1VUzogRW5nbGlzaC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NlcHRMYW5ndWFnZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuZ2luZTogVGhlIGVuZ2luZSB0eXBlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogUmVkaXNcbiAgICAgKiBNZW1jYWNoZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuZ2luZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlQ2hhcmdlVHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogUHJlUGFpZDogc3Vic2NyaXB0aW9uXG4gICAgICogUG9zdFBhaWQ6IHBheS1hcy15b3UtZ29cbiAgICAgKiBOb3RlIERlZmF1bHQgdmFsdWU6IFByZVBhaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cC4gWW91IGNhbiBjYWxsIHRoZSBMaXN0UmVzb3VyY2VHcm91cHMgb3BlcmF0aW9uIHRvIHF1ZXJ5IHRoZSBJRHMgb2YgcmVzb3VyY2UgZ3JvdXBzLlxuICAgICAqICBOb3RlIFlvdSBjYW4gYWxzbyBxdWVyeSB0aGUgSURzIG9mIHJlc291cmNlIGdyb3VwcyBpbiB0aGUgUmVzb3VyY2UgTWFuYWdlbWVudCBjb25zb2xlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIFZpZXcgYmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgYSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbm9kZUlkOiBUaGUgSUQgb2YgdGhlIGRhdGEgbm9kZSBmb3Igd2hpY2ggeW91IHdhbnQgdG8gcXVlcnkgYXZhaWxhYmxlIGluc3RhbmNlIHR5cGVzLiBZb3UgY2FuIGNhbGwgdGhlIERlc2NyaWJlTG9naWNJbnN0YW5jZVRvcG9sb2d5IG9wZXJhdGlvbiB0byBxdWVyeSB0aGUgSUQgb2YgdGhlIGRhdGEgbm9kZS4gUmVtb3ZlIHRoZSBudW1iZXIgc2lnbiAoIykgYW5kIHRoZSBjb250ZW50IHRoYXQgZm9sbG93cyB0aGUgbnVtYmVyIHNpZ24uIEZvciBleGFtcGxlLCByZXRhaW4gb25seSByLWJwMTBub3hsaGNvaW0yKioqKi1kYi0wLlxuICAgICAqICBOb3RlIEJlZm9yZSB5b3Ugc2V0IHRoaXMgcGFyYW1ldGVyLCB5b3UgbXVzdCBzZXQgdGhlIEluc3RhbmNlSWQgcGFyYW1ldGVyIHRvIHRoZSBJRCBvZiBhbiBpbnN0YW5jZSBpbiB0aGUgY2x1c3RlciBvciByZWFkL3dyaXRlIHNwbGl0dGluZyBhcmNoaXRlY3R1cmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbm9kZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3JkZXJUeXBlOiBUaGUgb3JkZXIgdHlwZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEJVWTogdGhlIG9yZGVycyB0aGF0IGFyZSB1c2VkIHRvIHB1cmNoYXNlIGluc3RhbmNlcy5cbiAgICAgKiBVUEdSQURFOiB0aGUgb3JkZXJzIHRoYXQgYXJlIHVzZWQgdG8gdXBncmFkZSBpbnN0YW5jZXMuXG4gICAgICogRE9XTkdSQURFOiB0aGUgb3JkZXJzIHRoYXQgYXJlIHVzZWQgdG8gZG93bmdyYWRlIGluc3RhbmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcmRlclR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm9kdWN0VHlwZTogVGhlIGVkaXRpb24gb3Igc2VyaWVzIG9mIGluc3RhbmNlcy4gVmFsaWQgdmFsdWVzOlxuICAgICAqICBMb2NhbDogQXBzYXJhREIgZm9yIFJlZGlzIENvbW11bml0eSBFZGl0aW9uIGluc3RhbmNlcyBvciBwZXJmb3JtYW5jZS1lbmhhbmNlZCBpbnN0YW5jZXMgb2YgQXBzYXJhREIgZm9yIFJlZGlzIEVuaGFuY2VkIEVkaXRpb24gKFRhaXIpXG4gICAgICogIFRhaXJfc2NtOiBwZXJzaXN0ZW50IG1lbW9yeS1vcHRpbWl6ZWQgaW5zdGFuY2VzXG4gICAgICogIFRhaXJfZXNzZDogc3RvcmFnZS1vcHRpbWl6ZWQgaW5zdGFuY2VzXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvZHVjdFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICogIE5vdGUgVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgb25seSBpZiB0aGUgT3JkZXJUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gVVBHUkFERSBvciBSRU5FVy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IFRoZSBJRCBvZiB0aGUgem9uZSB3aGVyZSBQb2xhckRCIHJlc291cmNlcyB0aGF0IHlvdSB3YW50IHRvIHF1ZXJ5IHJlc2lkZS5cbiAgICAgKiBOb3RlIFlvdSBjYW4gY2FsbCB0aGUgRGVzY3JpYmVSZWdpb25zIG9wZXJhdGlvbiB0byBxdWVyeSBpbmZvcm1hdGlvbiBhYm91dCB6b25lcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBEQVRBU09VUkNFOjpSRURJUzo6SW5zdGFuY2VDbGFzc2VzYFxuICovXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VDbGFzc2VzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZUNsYXNzSWRzOiBUaGUgbGlzdCBvZiBkYiBpbnN0YW5jZSBjbGFzcyBpZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUNsYXNzSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VDbGFzc2VzOiBUaGUgbGlzdCBvZiBpbnN0YW5jZSBjbGFzc2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VDbGFzc2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYERBVEFTT1VSQ0U6OlJFRElTOjpJbnN0YW5jZUNsYXNzZXNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEluc3RhbmNlQ2xhc3Nlc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zSW5zdGFuY2VDbGFzc2VzID0gbmV3IFJvc0luc3RhbmNlQ2xhc3Nlcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIG9yZGVyVHlwZTogcHJvcHMub3JkZXJUeXBlLFxuICAgICAgICAgICAgem9uZUlkOiBwcm9wcy56b25lSWQsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHByb3BzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBpbnN0YW5jZUNoYXJnZVR5cGU6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA9PT0gbnVsbCA/ICdQcmVQYWlkJyA6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSxcbiAgICAgICAgICAgIG5vZGVJZDogcHJvcHMubm9kZUlkLFxuICAgICAgICAgICAgcHJvZHVjdFR5cGU6IHByb3BzLnByb2R1Y3RUeXBlLFxuICAgICAgICAgICAgYWNjZXB0TGFuZ3VhZ2U6IHByb3BzLmFjY2VwdExhbmd1YWdlLFxuICAgICAgICAgICAgZW5naW5lOiBwcm9wcy5lbmdpbmUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSW5zdGFuY2VDbGFzc2VzO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUNsYXNzSWRzID0gcm9zSW5zdGFuY2VDbGFzc2VzLmF0dHJJbnN0YW5jZUNsYXNzSWRzO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUNsYXNzZXMgPSByb3NJbnN0YW5jZUNsYXNzZXMuYXR0ckluc3RhbmNlQ2xhc3NlcztcbiAgICB9XG59XG4iXX0=