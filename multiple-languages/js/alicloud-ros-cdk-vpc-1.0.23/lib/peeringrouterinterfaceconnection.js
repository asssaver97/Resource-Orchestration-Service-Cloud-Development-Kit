"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeeringRouterInterfaceConnection = exports.PeeringRouterInterfaceConnectionProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "PeeringRouterInterfaceConnectionProperty", { enumerable: true, get: function () { return vpc_generated_1.RosPeeringRouterInterfaceConnection; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::PeeringRouterInterfaceConnection`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPeeringRouterInterfaceConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfaceconnection
 */
class PeeringRouterInterfaceConnection extends ros.Resource {
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
        const rosPeeringRouterInterfaceConnection = new vpc_generated_1.RosPeeringRouterInterfaceConnection(this, id, {
            oppositeInterfaceId: props.oppositeInterfaceId,
            routerInterfaceId: props.routerInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPeeringRouterInterfaceConnection;
        this.attrOppositeInterfaceId = rosPeeringRouterInterfaceConnection.attrOppositeInterfaceId;
        this.attrRouterInterfaceId = rosPeeringRouterInterfaceConnection.attrRouterInterfaceId;
    }
}
exports.PeeringRouterInterfaceConnection = PeeringRouterInterfaceConnection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVlcmluZ3JvdXRlcmludGVyZmFjZWNvbm5lY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZWVyaW5ncm91dGVyaW50ZXJmYWNlY29ubmVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQXNFO0FBRXRCLHlIQUZ2QyxtREFBbUMsT0FFNEM7QUFtQnhGOzs7O0dBSUc7QUFDSCxNQUFhLGdDQUFpQyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0I5RDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUE0QyxFQUFFLG1DQUEyQyxJQUFJO1FBQ3ZJLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxtQ0FBbUMsR0FBRyxJQUFJLG1EQUFtQyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDM0YsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1NBQzdDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsbUNBQW1DLENBQUM7UUFDcEQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLG1DQUFtQyxDQUFDLHVCQUF1QixDQUFDO1FBQzNGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxtQ0FBbUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUMzRixDQUFDO0NBQ0o7QUFwQ0QsNEVBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUGVlcmluZ1JvdXRlckludGVyZmFjZUNvbm5lY3Rpb24gfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvbiBhcyBQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvblByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUGVlcmluZ1JvdXRlckludGVyZmFjZUNvbm5lY3Rpb25gLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLXBlZXJpbmdyb3V0ZXJpbnRlcmZhY2Vjb25uZWN0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGVlcmluZ1JvdXRlckludGVyZmFjZUNvbm5lY3Rpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBvcHBvc2l0ZUludGVyZmFjZUlkOiBUaGUgUmVjZWl2ZXIgUm91dGVySW50ZXJmYWNlIElEIHRvIGFjY2VwdCBwZWVyIFJvdXRlckludGVyZmFjZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHBvc2l0ZUludGVyZmFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb3V0ZXJJbnRlcmZhY2VJZDogVGhlIEluaXRpYXRvciBSb3V0ZXJJbnRlcmZhY2UgSUQgdG8gY29ubmVjdCBwZWVyIFJvdXRlckludGVyZmFjZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZXJJbnRlcmZhY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpWUEM6OlBlZXJpbmdSb3V0ZXJJbnRlcmZhY2VDb25uZWN0aW9uYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1BlZXJpbmdSb3V0ZXJJbnRlcmZhY2VDb25uZWN0aW9uYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLXBlZXJpbmdyb3V0ZXJpbnRlcmZhY2Vjb25uZWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogUGVlcmluZ1JvdXRlckludGVyZmFjZUNvbm5lY3Rpb25Qcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3Bwb3NpdGVJbnRlcmZhY2VJZDogVGhlIHJlY2VpdmVyIFJvdXRlckludGVyZmFjZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9wcG9zaXRlSW50ZXJmYWNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSb3V0ZXJJbnRlcmZhY2VJZDogVGhlIGluaXRpYXRvciBSb3V0ZXJJbnRlcmZhY2UgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb3V0ZXJJbnRlcmZhY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFBlZXJpbmdSb3V0ZXJJbnRlcmZhY2VDb25uZWN0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvbiA9IG5ldyBSb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvbih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIG9wcG9zaXRlSW50ZXJmYWNlSWQ6IHByb3BzLm9wcG9zaXRlSW50ZXJmYWNlSWQsXG4gICAgICAgICAgICByb3V0ZXJJbnRlcmZhY2VJZDogcHJvcHMucm91dGVySW50ZXJmYWNlSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUGVlcmluZ1JvdXRlckludGVyZmFjZUNvbm5lY3Rpb247XG4gICAgICAgIHRoaXMuYXR0ck9wcG9zaXRlSW50ZXJmYWNlSWQgPSByb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvbi5hdHRyT3Bwb3NpdGVJbnRlcmZhY2VJZDtcbiAgICAgICAgdGhpcy5hdHRyUm91dGVySW50ZXJmYWNlSWQgPSByb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvbi5hdHRyUm91dGVySW50ZXJmYWNlSWQ7XG4gICAgfVxufVxuIl19