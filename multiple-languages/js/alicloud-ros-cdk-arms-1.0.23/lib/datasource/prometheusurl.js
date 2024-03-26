"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrometheusUrl = exports.PrometheusUrlProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const arms_generated_1 = require("./arms.generated");
Object.defineProperty(exports, "PrometheusUrlProperty", { enumerable: true, get: function () { return arms_generated_1.RosPrometheusUrl; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::PrometheusUrl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheusUrl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
 */
class PrometheusUrl extends ros.Resource {
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
        const rosPrometheusUrl = new arms_generated_1.RosPrometheusUrl(this, id, {
            clusterId: props.clusterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrometheusUrl;
        this.attrClusterId = rosPrometheusUrl.attrClusterId;
        this.attrClusterType = rosPrometheusUrl.attrClusterType;
        this.attrGrafanaUrl = rosPrometheusUrl.attrGrafanaUrl;
        this.attrInternetGrafanaUrl = rosPrometheusUrl.attrInternetGrafanaUrl;
        this.attrInternetOpenTelemetryUrl = rosPrometheusUrl.attrInternetOpenTelemetryUrl;
        this.attrInternetPushGatewayUrl = rosPrometheusUrl.attrInternetPushGatewayUrl;
        this.attrInternetRemoteReadUrl = rosPrometheusUrl.attrInternetRemoteReadUrl;
        this.attrInternetRemoteWriteUrl = rosPrometheusUrl.attrInternetRemoteWriteUrl;
        this.attrOpenTelemetryUrl = rosPrometheusUrl.attrOpenTelemetryUrl;
        this.attrPushGatewayUrl = rosPrometheusUrl.attrPushGatewayUrl;
        this.attrRemoteReadUrl = rosPrometheusUrl.attrRemoteReadUrl;
        this.attrRemoteWriteUrl = rosPrometheusUrl.attrRemoteWriteUrl;
        this.attrToken = rosPrometheusUrl.attrToken;
    }
}
exports.PrometheusUrl = PrometheusUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWV0aGV1c3VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb21ldGhldXN1cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUFvRDtBQUV2QixzR0FGcEIsaUNBQWdCLE9BRXlCO0FBY2xEOzs7O0dBSUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxHQUFHLENBQUMsUUFBUTtJQXVFM0M7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBNEIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ3pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGlDQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDckQsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1NBQzdCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDdEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO1FBQ3RFLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQztRQUNsRixJQUFJLENBQUMsMEJBQTBCLEdBQUcsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7UUFDOUUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDO1FBQzVFLElBQUksQ0FBQywwQkFBMEIsR0FBRyxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQztRQUM5RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7UUFDbEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO1FBQzlELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7SUFDaEQsQ0FBQztDQUNKO0FBckdELHNDQXFHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1Byb21ldGhldXNVcmwgfSBmcm9tICcuL2FybXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUHJvbWV0aGV1c1VybCBhcyBQcm9tZXRoZXVzVXJsUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBQcm9tZXRoZXVzVXJsYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1hcm1zLXByb21ldGhldXN1cmxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcm9tZXRoZXVzVXJsUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2x1c3RlcklkOiBDbHVzdGVyIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkFSTVM6OlByb21ldGhldXNVcmxgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zUHJvbWV0aGV1c1VybGBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1hcm1zLXByb21ldGhldXN1cmxcbiAqL1xuZXhwb3J0IGNsYXNzIFByb21ldGhldXNVcmwgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFByb21ldGhldXNVcmxQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBDbHVzdGVyIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2x1c3RlclR5cGU6IENsdXN0ZXIgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgR3JhZmFuYVVybDogSW50ZXJuYWwgSFRUUCBBUEkgVVJMIChHcmFmYW5hIHJlYWQgVVJMKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdyYWZhbmFVcmw6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnRlcm5ldEdyYWZhbmFVcmw6IEludGVybmV0IEhUVFAgQVBJIFVSTCAoR3JhZmFuYSByZWFkIFVSTCkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnRlcm5ldEdyYWZhbmFVcmw6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnRlcm5ldE9wZW5UZWxlbWV0cnlVcmw6IEludGVybmV0IE9wZW5UZWxlbWV0cnkgVVJMLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW50ZXJuZXRPcGVuVGVsZW1ldHJ5VXJsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW50ZXJuZXRQdXNoR2F0ZXdheVVybDogSW50ZXJuZXQgcHVzaCBnYXRld2F5IFVSTC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckludGVybmV0UHVzaEdhdGV3YXlVcmw6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnRlcm5ldFJlbW90ZVJlYWRVcmw6IEludGVybmV0IHJlbW90ZSByZWFkIFVSTC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckludGVybmV0UmVtb3RlUmVhZFVybDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEludGVybmV0UmVtb3RlV3JpdGVVcmw6IEludGVybmV0IHJlbW90ZSB3cml0ZSBVUkwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnRlcm5ldFJlbW90ZVdyaXRlVXJsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3BlblRlbGVtZXRyeVVybDogSW50ZXJuYWwgT3BlblRlbGVtZXRyeSBVUkwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcGVuVGVsZW1ldHJ5VXJsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVzaEdhdGV3YXlVcmw6IEludGVybmFsIHB1c2ggZ2F0ZXdheSBVUkwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdXNoR2F0ZXdheVVybDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlbW90ZVJlYWRVcmw6IEludGVybmFsIHJlbW90ZSByZWFkIFVSTC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlbW90ZVJlYWRVcmw6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZW1vdGVXcml0ZVVybDogSW50ZXJuYWwgcmVtb3RlIHdyaXRlIFVSTC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlbW90ZVdyaXRlVXJsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVG9rZW46IFRoZSB0b2tlbiBmb3IgR3JhZmFuYSByZWFkIFVSTC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRva2VuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUHJvbWV0aGV1c1VybFByb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NQcm9tZXRoZXVzVXJsID0gbmV3IFJvc1Byb21ldGhldXNVcmwodGhpcywgaWQsICB7XG4gICAgICAgICAgICBjbHVzdGVySWQ6IHByb3BzLmNsdXN0ZXJJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NQcm9tZXRoZXVzVXJsO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSByb3NQcm9tZXRoZXVzVXJsLmF0dHJDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJUeXBlID0gcm9zUHJvbWV0aGV1c1VybC5hdHRyQ2x1c3RlclR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckdyYWZhbmFVcmwgPSByb3NQcm9tZXRoZXVzVXJsLmF0dHJHcmFmYW5hVXJsO1xuICAgICAgICB0aGlzLmF0dHJJbnRlcm5ldEdyYWZhbmFVcmwgPSByb3NQcm9tZXRoZXVzVXJsLmF0dHJJbnRlcm5ldEdyYWZhbmFVcmw7XG4gICAgICAgIHRoaXMuYXR0ckludGVybmV0T3BlblRlbGVtZXRyeVVybCA9IHJvc1Byb21ldGhldXNVcmwuYXR0ckludGVybmV0T3BlblRlbGVtZXRyeVVybDtcbiAgICAgICAgdGhpcy5hdHRySW50ZXJuZXRQdXNoR2F0ZXdheVVybCA9IHJvc1Byb21ldGhldXNVcmwuYXR0ckludGVybmV0UHVzaEdhdGV3YXlVcmw7XG4gICAgICAgIHRoaXMuYXR0ckludGVybmV0UmVtb3RlUmVhZFVybCA9IHJvc1Byb21ldGhldXNVcmwuYXR0ckludGVybmV0UmVtb3RlUmVhZFVybDtcbiAgICAgICAgdGhpcy5hdHRySW50ZXJuZXRSZW1vdGVXcml0ZVVybCA9IHJvc1Byb21ldGhldXNVcmwuYXR0ckludGVybmV0UmVtb3RlV3JpdGVVcmw7XG4gICAgICAgIHRoaXMuYXR0ck9wZW5UZWxlbWV0cnlVcmwgPSByb3NQcm9tZXRoZXVzVXJsLmF0dHJPcGVuVGVsZW1ldHJ5VXJsO1xuICAgICAgICB0aGlzLmF0dHJQdXNoR2F0ZXdheVVybCA9IHJvc1Byb21ldGhldXNVcmwuYXR0clB1c2hHYXRld2F5VXJsO1xuICAgICAgICB0aGlzLmF0dHJSZW1vdGVSZWFkVXJsID0gcm9zUHJvbWV0aGV1c1VybC5hdHRyUmVtb3RlUmVhZFVybDtcbiAgICAgICAgdGhpcy5hdHRyUmVtb3RlV3JpdGVVcmwgPSByb3NQcm9tZXRoZXVzVXJsLmF0dHJSZW1vdGVXcml0ZVVybDtcbiAgICAgICAgdGhpcy5hdHRyVG9rZW4gPSByb3NQcm9tZXRoZXVzVXJsLmF0dHJUb2tlbjtcbiAgICB9XG59XG4iXX0=