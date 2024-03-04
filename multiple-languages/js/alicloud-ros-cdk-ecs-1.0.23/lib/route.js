"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = exports.RouteProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "RouteProperty", { enumerable: true, get: function () { return ecs_generated_1.RosRoute; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::Route`, which is used to create a custom route entry.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRoute`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
 */
class Route extends ros.Resource {
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
        const rosRoute = new ecs_generated_1.RosRoute(this, id, {
            nextHopType: props.nextHopType === undefined || props.nextHopType === null ? 'Instance' : props.nextHopType,
            routeTableId: props.routeTableId,
            nextHopId: props.nextHopId,
            nextHopList: props.nextHopList,
            destinationCidrBlock: props.destinationCidrBlock,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRoute;
        this.attrRouteEntryId = rosRoute.attrRouteEntryId;
    }
}
exports.Route = Route;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTJDO0FBRXRCLDhGQUZaLHdCQUFRLE9BRWlCO0FBa0NsQzs7OztHQUlHO0FBQ0gsTUFBYSxLQUFNLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXbkM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUMzRyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1NBQ25ELEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7SUFDdEQsQ0FBQztDQUNKO0FBakNELHNCQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1JvdXRlIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUm91dGUgYXMgUm91dGVQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvdXRlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVjcy1yb3V0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdGluYXRpb25DaWRyQmxvY2s6IFRoZSBSb3V0ZUVudHJ5J3MgdGFyZ2V0IG5ldHdvcmsgc2VnbWVudC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0aW5hdGlvbkNpZHJCbG9jazogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcm91dGVUYWJsZUlkOiBSb3V0ZVRhYmxlSWQgb2YgY3JlYXRlZCByb3V0ZSBlbnRyeS5cbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZVRhYmxlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5leHRIb3BJZDogVGhlIHJvdXRlIGVudHJ5J3MgbmV4dCBob3AuIFdoZW4gdGhlIE5leHRIb3BMaXN0IGlzIHNwZWNpZmllZCwgdGhlIHZhbHVlIHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuZXh0SG9wSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXh0SG9wTGlzdDogVGhlIHJvdXRlIGVudHJ5J3MgbmV4dCBob3AgbGlzdC4gSWYgcm91dGVyIGlzIHZpcnR1YWwgYm9yZGVyIHJvdXRlciwgdGhlIHZhbHVlIHdpbGwgYmUgaWdub3JlLiBUaGUgbGlzdCBzaG91bGQgY29udGFpbiAyLTQgbmV4dCBob3AuIE5leHRIb3BJZCBvZiBlYWNoIG5leHQgaG9wIG11c3QgYmUgUm91dGVySW50ZXJmYWNlIHRoYXQgVlJvdXRlciBmb3J3YXJkcyB0byBWQlIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV4dEhvcExpc3Q/OiBBcnJheTxSb3NSb3V0ZS5OZXh0SG9wTGlzdFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5leHRIb3BUeXBlOiBUaGUgbmV4dCBob3AgdHlwZS4gTm93IHN1cHBvcnQgJ0luc3RhbmNlfEhhVmlwfFJvdXRlckludGVyZmFjZXxOZXR3b3JrSW50ZXJmYWNlfFZwbkdhdGV3YXl8SVB2NkdhdGV3YXl8TmF0R2F0ZXdheXxBdHRhY2htZW50Jy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgSW5zdGFuY2UuV2hlbiB0aGUgTmV4dEhvcExpc3QgaXMgc3BlY2lmaWVkLCB0aGUgdmFsdWUgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5leHRIb3BUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpFQ1M6OlJvdXRlYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBjdXN0b20gcm91dGUgZW50cnkuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NSb3V0ZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVjcy1yb3V0ZVxuICovXG5leHBvcnQgY2xhc3MgUm91dGUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFJvdXRlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJvdXRlRW50cnlJZDogVGhlIElEIG9mIHRoZSByb3V0ZSBlbnRyeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlRW50cnlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvdXRlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NSb3V0ZSA9IG5ldyBSb3NSb3V0ZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIG5leHRIb3BUeXBlOiBwcm9wcy5uZXh0SG9wVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLm5leHRIb3BUeXBlID09PSBudWxsID8gJ0luc3RhbmNlJyA6IHByb3BzLm5leHRIb3BUeXBlLFxuICAgICAgICAgICAgcm91dGVUYWJsZUlkOiBwcm9wcy5yb3V0ZVRhYmxlSWQsXG4gICAgICAgICAgICBuZXh0SG9wSWQ6IHByb3BzLm5leHRIb3BJZCxcbiAgICAgICAgICAgIG5leHRIb3BMaXN0OiBwcm9wcy5uZXh0SG9wTGlzdCxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uQ2lkckJsb2NrOiBwcm9wcy5kZXN0aW5hdGlvbkNpZHJCbG9jayxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NSb3V0ZTtcbiAgICAgICAgdGhpcy5hdHRyUm91dGVFbnRyeUlkID0gcm9zUm91dGUuYXR0clJvdXRlRW50cnlJZDtcbiAgICB9XG59XG4iXX0=