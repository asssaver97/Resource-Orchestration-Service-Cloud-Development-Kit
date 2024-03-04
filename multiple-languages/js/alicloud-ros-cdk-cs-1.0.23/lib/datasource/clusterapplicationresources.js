"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterApplicationResources = exports.ClusterApplicationResourcesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cs_generated_1 = require("./cs.generated");
Object.defineProperty(exports, "ClusterApplicationResourcesProperty", { enumerable: true, get: function () { return cs_generated_1.RosClusterApplicationResources; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CS::ClusterApplicationResources`, which is used to query the details of specified types of resources in a Container Service for Kubernetes (ACK) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterApplicationResources`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources
 */
class ClusterApplicationResources extends ros.Resource {
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
        const rosClusterApplicationResources = new cs_generated_1.RosClusterApplicationResources(this, id, {
            firstMatch: props.firstMatch === undefined || props.firstMatch === null ? false : props.firstMatch,
            clusterId: props.clusterId,
            kind: props.kind,
            jsonPath: props.jsonPath,
            namespace: props.namespace === undefined || props.namespace === null ? 'default' : props.namespace,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterApplicationResources;
        this.attrResponse = rosClusterApplicationResources.attrResponse;
    }
}
exports.ClusterApplicationResources = ClusterApplicationResources;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3RlcmFwcGxpY2F0aW9ucmVzb3VyY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2x1c3RlcmFwcGxpY2F0aW9ucmVzb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpREFBZ0U7QUFFckIsb0hBRmxDLDZDQUE4QixPQUV1QztBQXVDOUU7Ozs7R0FJRztBQUNILE1BQWEsMkJBQTRCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXekQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBdUMsRUFBRSxtQ0FBMkMsSUFBSTtRQUNsSSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sOEJBQThCLEdBQUcsSUFBSSw2Q0FBOEIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ2pGLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVTtZQUNsRyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVM7WUFDbEcsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsOEJBQThCLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyw4QkFBOEIsQ0FBQyxZQUFZLENBQUM7SUFDcEUsQ0FBQztDQUNKO0FBbENELGtFQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0NsdXN0ZXJBcHBsaWNhdGlvblJlc291cmNlcyB9IGZyb20gJy4vY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQ2x1c3RlckFwcGxpY2F0aW9uUmVzb3VyY2VzIGFzIENsdXN0ZXJBcHBsaWNhdGlvblJlc291cmNlc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQ2x1c3RlckFwcGxpY2F0aW9uUmVzb3VyY2VzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jcy1jbHVzdGVyYXBwbGljYXRpb25yZXNvdXJjZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDbHVzdGVyQXBwbGljYXRpb25SZXNvdXJjZXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUga3ViZXJuZXRlcyBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkga2luZDogVGhlIGtpbmQgb2Yga3ViZXJuZXRlcyByZXNvdXJjZXMgdG8gcXVlcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkga2luZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZmlyc3RNYXRjaDogT25seSB0aGUgZmlyc3QgbWF0Y2hpbmcgcmVzdWx0IGluIGpzb25wYXRoJ3MgZmlsdGVyZWQgcmVzdWx0cyBpcyByZXR1cm5lZC4gRGVmYXVsdCBGYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZpcnN0TWF0Y2g/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkganNvblBhdGg6IEpzb24gcGF0aCBleHByZXNzaW9uIHRvIGZpbHRlciB0aGUgb3V0cHV0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGpzb25QYXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIGt1YmVybmV0ZXMgcmVzb3VyY2UgdG8gcXVlcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWVzcGFjZTogVGhlIG5hbWVzcGFjZSBvZiBrdWJlcm5ldGVzIGNvbnRhaW5pbmcgdGhlIHJlc291cmNlLiBEZWZhdWx0IHZhbHVlIGlzIGRlZmF1bHRcbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lc3BhY2U/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpDUzo6Q2x1c3RlckFwcGxpY2F0aW9uUmVzb3VyY2VzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgZGV0YWlscyBvZiBzcGVjaWZpZWQgdHlwZXMgb2YgcmVzb3VyY2VzIGluIGEgQ29udGFpbmVyIFNlcnZpY2UgZm9yIEt1YmVybmV0ZXMgKEFDSykgY2x1c3Rlci5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0NsdXN0ZXJBcHBsaWNhdGlvblJlc291cmNlc2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jcy1jbHVzdGVyYXBwbGljYXRpb25yZXNvdXJjZXNcbiAqL1xuZXhwb3J0IGNsYXNzIENsdXN0ZXJBcHBsaWNhdGlvblJlc291cmNlcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogQ2x1c3RlckFwcGxpY2F0aW9uUmVzb3VyY2VzUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc3BvbnNlOiBRdWVyeSByZXN1bHQgb2Yga3ViZXJuZXRlcyByZXNvdXJjZShzKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc3BvbnNlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQ2x1c3RlckFwcGxpY2F0aW9uUmVzb3VyY2VzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NDbHVzdGVyQXBwbGljYXRpb25SZXNvdXJjZXMgPSBuZXcgUm9zQ2x1c3RlckFwcGxpY2F0aW9uUmVzb3VyY2VzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZmlyc3RNYXRjaDogcHJvcHMuZmlyc3RNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmZpcnN0TWF0Y2ggPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLmZpcnN0TWF0Y2gsXG4gICAgICAgICAgICBjbHVzdGVySWQ6IHByb3BzLmNsdXN0ZXJJZCxcbiAgICAgICAgICAgIGtpbmQ6IHByb3BzLmtpbmQsXG4gICAgICAgICAgICBqc29uUGF0aDogcHJvcHMuanNvblBhdGgsXG4gICAgICAgICAgICBuYW1lc3BhY2U6IHByb3BzLm5hbWVzcGFjZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLm5hbWVzcGFjZSA9PT0gbnVsbCA/ICdkZWZhdWx0JyA6IHByb3BzLm5hbWVzcGFjZSxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQ2x1c3RlckFwcGxpY2F0aW9uUmVzb3VyY2VzO1xuICAgICAgICB0aGlzLmF0dHJSZXNwb25zZSA9IHJvc0NsdXN0ZXJBcHBsaWNhdGlvblJlc291cmNlcy5hdHRyUmVzcG9uc2U7XG4gICAgfVxufVxuIl19