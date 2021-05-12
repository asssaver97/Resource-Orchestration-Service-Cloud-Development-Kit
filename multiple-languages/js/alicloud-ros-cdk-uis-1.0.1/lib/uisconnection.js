"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UisConnection = exports.UisConnectionProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const uis_generated_1 = require("./uis.generated");
Object.defineProperty(exports, "UisConnectionProperty", { enumerable: true, get: function () { return uis_generated_1.RosUisConnection; } });
/**
 * A ROS resource type:  `ALIYUN::UIS::UisConnection`
 */
class UisConnection extends ros.Resource {
    /**
     * Create a new `ALIYUN::UIS::UisConnection`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosUisConnection = new uis_generated_1.RosUisConnection(this, id, {
            sslConfig: props.sslConfig,
            description: props.description,
            greConfig: props.greConfig,
            uisProtocol: props.uisProtocol ? props.uisProtocol : 'SSLVPN',
            uisNodeId: props.uisNodeId,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUisConnection;
        this.attrUisConnectionId = rosUisConnection.attrUisConnectionId;
    }
}
exports.UisConnection = UisConnection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWlzY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVpc2Nvbm5lY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBc0NsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWTNDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBeUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRO1lBQzdELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7SUFDcEUsQ0FBQztDQUNKO0FBakNELHNDQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1Vpc0Nvbm5lY3Rpb24gfSBmcm9tICcuL3Vpcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NVaXNDb25uZWN0aW9uIGFzIFVpc0Nvbm5lY3Rpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VUlTOjpVaXNDb25uZWN0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVpc0Nvbm5lY3Rpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1aXNOb2RlSWQ6IE5vZGUgaW5zdGFuY2UgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdWlzTm9kZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1aXNQcm90b2NvbDogVGhlIHByb3RvY29sIG5hbWUgdXNlZCBieSB0aGUgc29mdHdhcmUgYW5kIHNlcnZlci4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgU1NMVlBOLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVpc1Byb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogQSBkZXNjcmlwdGlvbiBvZiB0aGUgdHVubmVsIGNvbm5lY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBncmVDb25maWc6IFRoZSBjb25maWcgZm9yIEdSRS4gSXRlbSBjYW4gYmUgb3ZlcndyaXR0ZW4sIGJ1dCByZW1vdmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyZUNvbmZpZz86IEFycmF5PFJvc1Vpc0Nvbm5lY3Rpb24uR3JlQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIHR1bm5lbCBjb25uZWN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzc2xDb25maWc6IFRoZSBjb25maWcgZm9yIFNTTFZQTi5cbiAgICAgKi9cbiAgICByZWFkb25seSBzc2xDb25maWc/OiBSb3NVaXNDb25uZWN0aW9uLlNzbENvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpVSVM6OlVpc0Nvbm5lY3Rpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBVaXNDb25uZWN0aW9uIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBVaXNDb25uZWN0aW9uSWQ6IElEIG9mIHRoZSBWUE4gc2VydmVyLiBUaGlzIElEIGRvZXMgbm90IGRpc3Rpbmd1aXNoIGJldHdlZW4gcHJvdG9jb2xzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVWlzQ29ubmVjdGlvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VUlTOjpVaXNDb25uZWN0aW9uYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBVaXNDb25uZWN0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zVWlzQ29ubmVjdGlvbiA9IG5ldyBSb3NVaXNDb25uZWN0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgc3NsQ29uZmlnOiBwcm9wcy5zc2xDb25maWcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBncmVDb25maWc6IHByb3BzLmdyZUNvbmZpZyxcbiAgICAgICAgICAgIHVpc1Byb3RvY29sOiBwcm9wcy51aXNQcm90b2NvbCA/IHByb3BzLnVpc1Byb3RvY29sIDogJ1NTTFZQTicsXG4gICAgICAgICAgICB1aXNOb2RlSWQ6IHByb3BzLnVpc05vZGVJZCxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVWlzQ29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyVWlzQ29ubmVjdGlvbklkID0gcm9zVWlzQ29ubmVjdGlvbi5hdHRyVWlzQ29ubmVjdGlvbklkO1xuICAgIH1cbn1cbiJdfQ==