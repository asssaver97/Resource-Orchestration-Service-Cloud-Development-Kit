"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlbBinding = exports.SlbBindingProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sae_generated_1 = require("./sae.generated");
Object.defineProperty(exports, "SlbBindingProperty", { enumerable: true, get: function () { return sae_generated_1.RosSlbBinding; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAE::SlbBinding`, which is used to bind an SLB instance to an application.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSlbBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
 */
class SlbBinding extends ros.Resource {
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
        const rosSlbBinding = new sae_generated_1.RosSlbBinding(this, id, {
            internetSlbId: props.internetSlbId,
            appId: props.appId,
            intranet: props.intranet,
            intranetSlbId: props.intranetSlbId,
            internet: props.internet,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSlbBinding;
        this.attrAppId = rosSlbBinding.attrAppId;
        this.attrChangeOrderId = rosSlbBinding.attrChangeOrderId;
    }
}
exports.SlbBinding = SlbBinding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xiYmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNsYmJpbmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFrQzVDOzs7O0dBSUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCeEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9DLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFDN0QsQ0FBQztDQUNKO0FBdkNELGdDQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NsYkJpbmRpbmcgfSBmcm9tICcuL3NhZS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTbGJCaW5kaW5nIGFzIFNsYkJpbmRpbmdQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFNsYkJpbmRpbmdgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tc2FlLXNsYmJpbmRpbmdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTbGJCaW5kaW5nUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXBwSWQ6IFN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gZGVwbG95bWVudCB0YXJnZXQgSURcbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW50ZXJuZXQ6IEJpbmRpbmcgcHVibGljIFNMQi4gRm9yIGV4YW1wbGU6IFt7IFwicG9ydFwiOiA4MCwgXCJ0YXJnZXRQb3J0XCI6IDgwODAsIFwicHJvdG9jb2xcIjogXCJUQ1BcIn1dLCBzaG93cyBhIGNvbnRhaW5lciBwb3J0IDgwODAgdGhyb3VnaCBwb3J0IDgwIHNsYiBleHBvc2VkIHNlcnZpY2UsIHRoZSBwcm90b2NvbCBpcyBUQ1AsIHRoZSBibGFuayBpcyBpZ25vcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW50ZXJuZXRTbGJJZDogVXNlIFNMQiBwdXJjaGFzZWQgc3BlY2lmaWVkLCBjdXJyZW50bHkgb25seSBzdXBwb3J0cyBub24tc2hhcmVkIGV4YW1wbGVzXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRTbGJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGludHJhbmV0OiBCaW5kIHByaXZhdGUgU0xCLiBGb3IgZXhhbXBsZTogW3sgXCJwb3J0XCI6IDgwLCBcInRhcmdldFBvcnRcIjogODA4MCwgXCJwcm90b2NvbFwiOiBcIlRDUFwifV0sIHNob3dzIGEgY29udGFpbmVyIHBvcnQgODA4MCB0aHJvdWdoIHBvcnQgODAgc2xiIGV4cG9zZWQgc2VydmljZSwgdGhlIHByb3RvY29sIGlzIFRDUCwgdGhlIGJsYW5rIGlzIGlnbm9yZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50cmFuZXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnRyYW5ldFNsYklkOiBVc2UgU0xCIHB1cmNoYXNlZCBzcGVjaWZpZWQsIGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIG5vbi1zaGFyZWQgZXhhbXBsZXNcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRyYW5ldFNsYklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpTQUU6OlNsYkJpbmRpbmdgLCB3aGljaCBpcyB1c2VkIHRvIGJpbmQgYW4gU0xCIGluc3RhbmNlIHRvIGFuIGFwcGxpY2F0aW9uLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zU2xiQmluZGluZ2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXNhZS1zbGJiaW5kaW5nXG4gKi9cbmV4cG9ydCBjbGFzcyBTbGJCaW5kaW5nIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBTbGJCaW5kaW5nUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFwcElkOiBTdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGRlcGxveW1lbnQgdGFyZ2V0IElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENoYW5nZU9yZGVySWQ6IFJldHVybiB0byByZWxlYXNlIGEgc2luZ2xlIElELCB1c2VkIHRvIHF1ZXJ5IHRhc2sgZXhlY3V0aW9uIHN0YXR1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNoYW5nZU9yZGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTbGJCaW5kaW5nUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NTbGJCaW5kaW5nID0gbmV3IFJvc1NsYkJpbmRpbmcodGhpcywgaWQsICB7XG4gICAgICAgICAgICBpbnRlcm5ldFNsYklkOiBwcm9wcy5pbnRlcm5ldFNsYklkLFxuICAgICAgICAgICAgYXBwSWQ6IHByb3BzLmFwcElkLFxuICAgICAgICAgICAgaW50cmFuZXQ6IHByb3BzLmludHJhbmV0LFxuICAgICAgICAgICAgaW50cmFuZXRTbGJJZDogcHJvcHMuaW50cmFuZXRTbGJJZCxcbiAgICAgICAgICAgIGludGVybmV0OiBwcm9wcy5pbnRlcm5ldCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTbGJCaW5kaW5nO1xuICAgICAgICB0aGlzLmF0dHJBcHBJZCA9IHJvc1NsYkJpbmRpbmcuYXR0ckFwcElkO1xuICAgICAgICB0aGlzLmF0dHJDaGFuZ2VPcmRlcklkID0gcm9zU2xiQmluZGluZy5hdHRyQ2hhbmdlT3JkZXJJZDtcbiAgICB9XG59XG4iXX0=