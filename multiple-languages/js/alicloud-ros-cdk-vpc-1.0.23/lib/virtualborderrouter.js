"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualBorderRouter = exports.VirtualBorderRouterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "VirtualBorderRouterProperty", { enumerable: true, get: function () { return vpc_generated_1.RosVirtualBorderRouter; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VirtualBorderRouter`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVirtualBorderRouter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-virtualborderrouter
 */
class VirtualBorderRouter extends ros.Resource {
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
        const rosVirtualBorderRouter = new vpc_generated_1.RosVirtualBorderRouter(this, id, {
            peerGatewayIp: props.peerGatewayIp,
            localGatewayIp: props.localGatewayIp,
            description: props.description,
            circuitCode: props.circuitCode,
            physicalConnectionId: props.physicalConnectionId,
            peeringSubnetMask: props.peeringSubnetMask,
            vlanId: props.vlanId,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVirtualBorderRouter;
        this.attrName = rosVirtualBorderRouter.attrName;
        this.attrRouteTableId = rosVirtualBorderRouter.attrRouteTableId;
        this.attrVbrId = rosVirtualBorderRouter.attrVbrId;
        this.attrVlanInterfaceId = rosVirtualBorderRouter.attrVlanInterfaceId;
    }
}
exports.VirtualBorderRouter = VirtualBorderRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbGJvcmRlcnJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpcnR1YWxib3JkZXJyb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUF5RDtBQUV0Qiw0R0FGMUIsc0NBQXNCLE9BRStCO0FBOEQ5RDs7OztHQUlHO0FBQ0gsTUFBYSxtQkFBb0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQTBCakQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBK0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUMxSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxzQ0FBc0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ2pFLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDLFNBQVMsQ0FBQztRQUNsRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsc0JBQXNCLENBQUMsbUJBQW1CLENBQUM7SUFDMUUsQ0FBQztDQUNKO0FBdERELGtEQXNEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1ZpcnR1YWxCb3JkZXJSb3V0ZXIgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NWaXJ0dWFsQm9yZGVyUm91dGVyIGFzIFZpcnR1YWxCb3JkZXJSb3V0ZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFZpcnR1YWxCb3JkZXJSb3V0ZXJgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLXZpcnR1YWxib3JkZXJyb3V0ZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaXJ0dWFsQm9yZGVyUm91dGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9jYWxHYXRld2F5SXA6IFRoZSBJUCBhZGRyZXNzIG9mIHRoZSBWQlIgb24gdGhlIEFsaWJhYmEgQ2xvdWQgc2lkZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2NhbEdhdGV3YXlJcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVlckdhdGV3YXlJcDogVGhlIElQIGFkZHJlc3Mgb2YgdGhlIHBlZXIgcm91dGVyIGludGVyZmFjZSBvZiB0aGUgVkJSLlxuICAgICAqIE9ubHkgdGhlIG93bmVyIG9mIHRoZSBWQlIgY2FuIHNldCBvciBtb2RpZnkgdGhlIHZhbHVlLlxuICAgICAqIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIHdoZW4geW91IGNyZWF0ZSBhIFZCUiBmb3IgdGhlIG93bmVyIG9mIHRoZSBwaHlzaWNhbCBjb25uZWN0aW9uLlxuICAgICAqIFlvdSBjYW4gaWdub3JlIHRoaXMgcGFyYW1ldGVyIHdoZW4geW91IGNyZWF0ZSBhIFZCUiBmb3IgYW5vdGhlciBBbGliYWJhIENsb3VkIGFjY291bnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVlckdhdGV3YXlJcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVlcmluZ1N1Ym5ldE1hc2s6IFRoZSBzdWJuZXQgbWFzayBmb3IgdGhlIElQIGFkZHJlc3NlcyBvZiB0aGUgVkJSIG9uIHRoZSBBbGliYWJhIENsb3VkIHNpZGUgYW5kIG9uIHRoZVxuICAgICAqIHVzZXIgc2lkZS5cbiAgICAgKiBUaGUgdHdvIElQIGFkZHJlc3NlcyBtdXN0IGZhbGwgd2l0aGluIHRoZSBzYW1lIHN1Ym5ldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZWVyaW5nU3VibmV0TWFzazogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGh5c2ljYWxDb25uZWN0aW9uSWQ6IFRoZSBJRCBvZiB0aGUgcGh5c2ljYWwgY29ubmVjdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBwaHlzaWNhbENvbm5lY3Rpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdmxhbklkOiBUaGUgVkxBTiBJRCBvZiB0aGUgVkJSLiBWYWxpZCB2YWx1ZXM6IDAgdG8gMjk5OS5cbiAgICAgKiBOb3RlIE9ubHkgdGhlIG93bmVyIG9mIHRoZSBwaHlzaWNhbCBjb25uZWN0aW9uIGNhbiBzZXQgdGhpcyBwYXJhbWV0ZXIuIFRoZSBWTEFOIElEcyBvZlxuICAgICAqIHR3byBWQlJzIG9mIHRoZSBzYW1lIHBoeXNpY2FsIGNvbm5lY3Rpb24gbXVzdCBiZSBkaWZmZXJlbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmxhbklkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjaXJjdWl0Q29kZTogVGhlIGNpcmN1aXQgY29kZSBwcm92aWRlZCBieSB0aGUgSW50ZXJuZXQgc2VydmljZSBwcm92aWRlciAoSVNQKSBmb3IgdGhlIHBoeXNpY2FsXG4gICAgICogY29ubmVjdGlvbi5cbiAgICAgKiBOb3RlIE9ubHkgdGhlIG93bmVyIG9mIHRoZSBwaHlzaWNhbCBjb25uZWN0aW9uIGNhbiBzZXQgdGhpcyBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2lyY3VpdENvZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBWQlIuXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlclxuICAgICAqIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOlxcL1xcLyBvciBodHRwczpcXC9cXC8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgVkJSLlxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGgsIGFuZCBjYW4gY29udGFpbiwgZGlnaXRzLCBwZXJpb2RzICguKSxcbiAgICAgKiB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gVGhlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDpcXC9cXC8gb3IgaHR0cHM6XFwvXFwvLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlZQQzo6VmlydHVhbEJvcmRlclJvdXRlcmAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NWaXJ0dWFsQm9yZGVyUm91dGVyYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLXZpcnR1YWxib3JkZXJyb3V0ZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFZpcnR1YWxCb3JkZXJSb3V0ZXIgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFZpcnR1YWxCb3JkZXJSb3V0ZXJQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTmFtZTogVGhlIG5hbWUgb2YgdGhlIFZCUi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSb3V0ZVRhYmxlSWQ6IFRoZSBJRCBvZiB0aGUgcm91dGUgdGFibGUgb2YgdGhlIFZCUi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlVGFibGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZicklkOiBUaGUgSUQgb2YgdGhlIFZCUi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZicklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVmxhbkludGVyZmFjZUlkOiBUaGUgSUQgb2YgdGhlIFZCUiBpbnRlcmZhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWbGFuSW50ZXJmYWNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBWaXJ0dWFsQm9yZGVyUm91dGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NWaXJ0dWFsQm9yZGVyUm91dGVyID0gbmV3IFJvc1ZpcnR1YWxCb3JkZXJSb3V0ZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICBwZWVyR2F0ZXdheUlwOiBwcm9wcy5wZWVyR2F0ZXdheUlwLFxuICAgICAgICAgICAgbG9jYWxHYXRld2F5SXA6IHByb3BzLmxvY2FsR2F0ZXdheUlwLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY2lyY3VpdENvZGU6IHByb3BzLmNpcmN1aXRDb2RlLFxuICAgICAgICAgICAgcGh5c2ljYWxDb25uZWN0aW9uSWQ6IHByb3BzLnBoeXNpY2FsQ29ubmVjdGlvbklkLFxuICAgICAgICAgICAgcGVlcmluZ1N1Ym5ldE1hc2s6IHByb3BzLnBlZXJpbmdTdWJuZXRNYXNrLFxuICAgICAgICAgICAgdmxhbklkOiBwcm9wcy52bGFuSWQsXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1ZpcnR1YWxCb3JkZXJSb3V0ZXI7XG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSByb3NWaXJ0dWFsQm9yZGVyUm91dGVyLmF0dHJOYW1lO1xuICAgICAgICB0aGlzLmF0dHJSb3V0ZVRhYmxlSWQgPSByb3NWaXJ0dWFsQm9yZGVyUm91dGVyLmF0dHJSb3V0ZVRhYmxlSWQ7XG4gICAgICAgIHRoaXMuYXR0clZicklkID0gcm9zVmlydHVhbEJvcmRlclJvdXRlci5hdHRyVmJySWQ7XG4gICAgICAgIHRoaXMuYXR0clZsYW5JbnRlcmZhY2VJZCA9IHJvc1ZpcnR1YWxCb3JkZXJSb3V0ZXIuYXR0clZsYW5JbnRlcmZhY2VJZDtcbiAgICB9XG59XG4iXX0=