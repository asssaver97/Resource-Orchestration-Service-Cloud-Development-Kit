"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterInterface = exports.RouterInterfaceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "RouterInterfaceProperty", { enumerable: true, get: function () { return vpc_generated_1.RosRouterInterface; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::RouterInterface`
 */
class RouterInterface extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::RouterInterface`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosRouterInterface = new vpc_generated_1.RosRouterInterface(this, id, {
            oppositeInterfaceId: props.oppositeInterfaceId,
            oppositeInterfaceOwnerId: props.oppositeInterfaceOwnerId,
            description: props.description,
            oppositeRouterId: props.oppositeRouterId,
            oppositeRegionId: props.oppositeRegionId,
            instanceChargeType: props.instanceChargeType ? props.instanceChargeType : 'PostPaid',
            pricingCycle: props.pricingCycle,
            healthCheckSourceIp: props.healthCheckSourceIp,
            period: props.period,
            routerId: props.routerId,
            autoPay: props.autoPay,
            name: props.name,
            role: props.role,
            oppositeRouterType: props.oppositeRouterType ? props.oppositeRouterType : 'VRouter',
            routerType: props.routerType ? props.routerType : 'VRouter',
            accessPointId: props.accessPointId,
            oppositeAccessPointId: props.oppositeAccessPointId,
            spec: props.spec,
            healthCheckTargetIp: props.healthCheckTargetIp,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRouterInterface;
        this.attrRouterInterfaceId = rosRouterInterface.attrRouterInterfaceId;
    }
}
exports.RouterInterface = RouterInterface;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQXVHdEQ7O0dBRUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZN0M7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEyQixFQUFFLG1DQUEyQyxJQUFJO1FBQ3RILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtDQUFrQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5Qyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCO1lBQ3hELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFVBQVU7WUFDcEYsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNuRixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMzRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtTQUNqRCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQ25DLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQztJQUMxRSxDQUFDO0NBQ0o7QUE5Q0QsMENBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUm91dGVySW50ZXJmYWNlIH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUm91dGVySW50ZXJmYWNlIGFzIFJvdXRlckludGVyZmFjZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OlJvdXRlckludGVyZmFjZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3V0ZXJJbnRlcmZhY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb2xlOiBSb3V0ZXJJbnRlcmZhY2Ugcm9sZS4gTm93IHN1cHBvcnQgJ0luaXRpYXRpbmdTaWRlfEFjY2VwdGluZ1NpZGUnLiBJZiAnUm91dGVyVHlwZScgaXMgc3BlY2lmaWVkIGFzICdWQlInLCB0aGUgdmFsdWUgbXVzdCBiZSAnSW5pdGlhdGluZ1NpZGUnLklmICdPcHBvc2l0ZVJvdXRlclR5cGUnIGlzIHNwZWNpZmllZCBhcyAnVkJSJywgdGhlIHZhbHVlIG11c3QgYmUgJ0FjY2VwdGluZ1NpZGUnLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvbGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJvdXRlcklkOiBUaGUgcm91dGVyIElEIHRvIGNyZWF0ZSBSb3V0ZXJJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjY2Vzc1BvaW50SWQ6IEFjY2VzcyBwb2ludCBJRC4gSWYgJ1JvdXRlclR5cGUnIGlzIHNwZWNpZmllZCBhcyAnVkJSJywgdGhlIHZhbHVlIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2Vzc1BvaW50SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUGF5OiBJbmRpY2F0ZXMgd2hldGhlciBhdXRvbWF0aWMgcGF5bWVudCBpcyBlbmFibGVkLiBWYWxpZCB2YWx1ZXM6ZmFsc2U6IEF1dG9tYXRpYyBwYXltZW50IGlzIGRpc2FibGVkLiBZb3UgbmVlZCB0byBnbyB0byBPcmRlcnMgdG8gbWFrZSB0aGUgcGF5bWVudCBvbmNlIGFuIG9yZGVyIGlzIGdlbmVyYXRlZC4gdHJ1ZTogQXV0b21hdGljIHBheW1lbnQgaXMgZW5hYmxlZC4gVGhlIHBheW1lbnQgaXMgYXV0b21hdGljYWxseSBtYWRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9QYXk/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IEN1c3RvbSBkZXNjcmlwdGlvbiBvZiB0aGUgUm91dGVySW50ZXJmYWNlLCBbMiwgMjU2XSBjaGFyYWN0ZXJzLiBEb24ndCBmaWxsIG9yIGVtcHR5LCB0aGUgZGVmYXVsdCBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGhlYWx0aENoZWNrU291cmNlSXA6IFNvdXJjZSBJUCBhZGRyZXNzIG9mIHRoZSBwYWNrZXQgZm9yIGxlYXNlZCBsaW5lIEhlYWx0aENoZWNrIGluIGxlYXNlZCBsaW5lIGRpc2FzdGVyIHRvbGVyYW5jZSBhbmQgRUNNUCBzY2VuYXJpb3MuIEl0IGlzIHZhbGlkIG9ubHkgZm9yIGEgVlJvdXRlciBSb3V0ZXJJbnRlcmZhY2Ugd2l0aCBhIHBlZXIgb24gYSBWQlIuIFRoZSBzb3VyY2UgSVAgYWRkcmVzcyBtdXN0IGJlIGluIHRoZSBWUEMgb2YgdGhlIGxvY2FsIFZSb3V0ZXIgYW5kIGlzIG5vdCB1c2VkLiBIZWFsdGhDaGVja1NvdXJjZUlwIGFuZCBIZWFsdGhDaGVja1RhcmdldElwIHBhcmFtZXRlcnMgbXVzdCBiZSBib3RoIHNwZWNpZmllZCBvciBsZWZ0IHVuc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhlYWx0aENoZWNrU291cmNlSXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoZWFsdGhDaGVja1RhcmdldElwOiBUYXJnZXQgSVAgYWRkcmVzcyBvZiB0aGUgcGFja2V0IGZvciBsZWFzZWQgbGluZSBIZWFsdGhDaGVjayBpbiBsZWFzZWQgbGluZSBkaXNhc3RlciB0b2xlcmFuY2UgYW5kIEVDTVAgc2NlbmFyaW9zLiBJdCBpcyB2YWxpZCBvbmx5IGZvciBhIFZSb3V0ZXIgUm91dGVySW50ZXJmYWNlIHdpdGggYSBwZWVyIG9uIGEgVkJSLiBVc3VhbGx5IHlvdSBjYW4gdXNlIHRoZSBDUEUgSVAgYWRkcmVzcyBvZiB0aGUgbGVhc2VkIGxpbmUgdXNlcidzIGNsaWVudCAodGhhdCBpcywgdGhlIFBlZXJHYXRld2F5SVAgb24gdGhlIFZCUiBvZiB0aGUgcGVlciBSb3V0ZXJJbnRlcmZhY2UpLCB5b3UgY2FuIGFsc28gc3BlY2lmeSBhbm90aGVyIElQIGFkZHJlc3Mgb2YgdGhlIGxlYXNlZCBsaW5lIHVzZXIncyBjbGllbnQgYXMgdGhlIEhlYWx0aENoZWNrIHRhcmdldCBJUCBhZGRyZXNzLiBIZWFsdGhDaGVja1NvdXJjZUlwIGFuZCBIZWFsdGhDaGVja1RhcmdldElwIHBhcmFtZXRlcnMgbXVzdCBiZSBib3RoIHNwZWNpZmllZCBvciBsZWZ0IHVuc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhlYWx0aENoZWNrVGFyZ2V0SXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUNoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZCBvZiB0aGUgcm91dGVyIGludGVyZmFjZS4gVmFsaWQgdmFsdWVzOiBQcmVQYWlkIChTdWJzY3JpcHRpb24pLCBQb3N0UGFpZCAoZGVmYXVsdCwgUGF5LUFzLVlvdS1HbylcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBDdXN0b20gbmFtZSBvZiB0aGUgUm91dGVySW50ZXJmYWNlLCBbMiwgMTI4XSBFbmdsaXNoIG9yIENoaW5lc2UgY2hhcmFjdGVycywgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UgaW4gc2l6ZSwgY2FuIGNvbnRhaW4gbnVtYmVycywgJ18nIG9yICcuJywgJy0nXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG9wcG9zaXRlQWNjZXNzUG9pbnRJZDogQWNjZXNzIHBvaW50IElEIG9mIHRoZSBjb25uZWN0aW9uIHBlZXIgUm91dGVySW50ZXJmYWNlLiBJZiAnT3Bwb3NpdGVSb3V0ZXJUeXBlJyBpcyBzcGVjaWZpZWQgYXMgJ1ZCUicsIHRoZSB2YWx1ZSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHBvc2l0ZUFjY2Vzc1BvaW50SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBvcHBvc2l0ZUludGVyZmFjZUlkOiBUaGUgSUQgb2YgdGhlIHBlZXIgcm91dGVyIGludGVyZmFjZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHBvc2l0ZUludGVyZmFjZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkOiBPd25lciBhY2NvdW50IElEIG9mIHRoZSBjb25uZWN0aW9uIHBlZXIgUm91dGVySW50ZXJmYWNlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBjdXJyZW50IHVzZXIgSWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3Bwb3NpdGVSZWdpb25JZDogVGhlIHJlZ2lvbiB3aGVyZSB0aGUgY29ubmVjdGlvbiBwZWVyIFJvdXRlckludGVyZmFjZSBsb2NhdGVzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyByZWdpb24gd2hlcmUgc3RhY2sgaXMgY3JlYXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHBvc2l0ZVJlZ2lvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3Bwb3NpdGVSb3V0ZXJJZDogVGhlIHJvdXRlciBJRCBvZiB0aGUgY29ubmVjdGlvbiBwZWVyIFJvdXRlckludGVyZmFjZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHBvc2l0ZVJvdXRlcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3Bwb3NpdGVSb3V0ZXJUeXBlOiBSb3V0ZXIgdHlwZSBvZiB0aGUgY29ubmVjdGlvbiBwZWVyIHJvdXRlci4gTm93IHN1cHBvcnQgJ1ZSb3V0ZXJ8VkJSJy4gSWYgJ1JvdXRlclR5cGUnIGlzIHNwZWNpZmllZCBhcyAnVkJSJywgdGhlIHZhbHVlIG11c3QgYmUgJ1ZSb3V0ZXInLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9wcG9zaXRlUm91dGVyVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZDogUHJlcGFpZCB0aW1lIHBlcmlvZC4gSXQgY291bGQgYmUgZnJvbSAxIHRvIDkgd2hlbiBQcmljaW5nQ3ljbGUgaXMgTW9udGgsIG9yIDEgdG8gMyB3aGVuIFByaWNpbmdDeWNsZSBpcyBZZWFyLiBEZWZhdWx0IHZhbHVlIGlzIDMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJpY2luZ0N5Y2xlOiBVbml0IG9mIHRoZSBwYXltZW50IGN5Y2xlLiBJdCBjb3VsZCBiZSBNb250aCAoZGVmYXVsdCkgb3IgWWVhci5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmljaW5nQ3ljbGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb3V0ZXJUeXBlOiBSb3V0ZXIgdHlwZS4gTm93IHN1cHBvcnQgJ1ZSb3V0ZXJ8VkJSJ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlclR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzcGVjOiBSb3V0ZXJJbnRlcmZhY2Ugc3BlY2lmaWNhdGlvbi4gSWYgJ1JvbGUnIGlzIHNwZWNpZmllZCBhcyAnSW5pdGlhdGluZ1NpZGUnLCB0aGUgdmFsdWUgaXMgcmVxdWlyZWQuIElmICdSb2xlJyBpcyBzcGVjaWZpZWQgYXMgJ0FjY2VwdGluZ1NpZGUnLCB0aGUgdmFsdWUgaXMgc2V0IGFzICdOZWdhdGl2ZScgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcGVjPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OlJvdXRlckludGVyZmFjZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvdXRlckludGVyZmFjZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUm91dGVySW50ZXJmYWNlSWQ6IFRoZSBJRCBvZiBjcmVhdGVkIFJvdXRlckludGVyZmFjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlckludGVyZmFjZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpSb3V0ZXJJbnRlcmZhY2VgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvdXRlckludGVyZmFjZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1JvdXRlckludGVyZmFjZSA9IG5ldyBSb3NSb3V0ZXJJbnRlcmZhY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBvcHBvc2l0ZUludGVyZmFjZUlkOiBwcm9wcy5vcHBvc2l0ZUludGVyZmFjZUlkLFxuICAgICAgICAgICAgb3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkOiBwcm9wcy5vcHBvc2l0ZUludGVyZmFjZU93bmVySWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvcHBvc2l0ZVJvdXRlcklkOiBwcm9wcy5vcHBvc2l0ZVJvdXRlcklkLFxuICAgICAgICAgICAgb3Bwb3NpdGVSZWdpb25JZDogcHJvcHMub3Bwb3NpdGVSZWdpb25JZCxcbiAgICAgICAgICAgIGluc3RhbmNlQ2hhcmdlVHlwZTogcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlID8gcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlIDogJ1Bvc3RQYWlkJyxcbiAgICAgICAgICAgIHByaWNpbmdDeWNsZTogcHJvcHMucHJpY2luZ0N5Y2xlLFxuICAgICAgICAgICAgaGVhbHRoQ2hlY2tTb3VyY2VJcDogcHJvcHMuaGVhbHRoQ2hlY2tTb3VyY2VJcCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kLFxuICAgICAgICAgICAgcm91dGVySWQ6IHByb3BzLnJvdXRlcklkLFxuICAgICAgICAgICAgYXV0b1BheTogcHJvcHMuYXV0b1BheSxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICByb2xlOiBwcm9wcy5yb2xlLFxuICAgICAgICAgICAgb3Bwb3NpdGVSb3V0ZXJUeXBlOiBwcm9wcy5vcHBvc2l0ZVJvdXRlclR5cGUgPyBwcm9wcy5vcHBvc2l0ZVJvdXRlclR5cGUgOiAnVlJvdXRlcicsXG4gICAgICAgICAgICByb3V0ZXJUeXBlOiBwcm9wcy5yb3V0ZXJUeXBlID8gcHJvcHMucm91dGVyVHlwZSA6ICdWUm91dGVyJyxcbiAgICAgICAgICAgIGFjY2Vzc1BvaW50SWQ6IHByb3BzLmFjY2Vzc1BvaW50SWQsXG4gICAgICAgICAgICBvcHBvc2l0ZUFjY2Vzc1BvaW50SWQ6IHByb3BzLm9wcG9zaXRlQWNjZXNzUG9pbnRJZCxcbiAgICAgICAgICAgIHNwZWM6IHByb3BzLnNwZWMsXG4gICAgICAgICAgICBoZWFsdGhDaGVja1RhcmdldElwOiBwcm9wcy5oZWFsdGhDaGVja1RhcmdldElwLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1JvdXRlckludGVyZmFjZTtcbiAgICAgICAgdGhpcy5hdHRyUm91dGVySW50ZXJmYWNlSWQgPSByb3NSb3V0ZXJJbnRlcmZhY2UuYXR0clJvdXRlckludGVyZmFjZUlkO1xuICAgIH1cbn1cbiJdfQ==