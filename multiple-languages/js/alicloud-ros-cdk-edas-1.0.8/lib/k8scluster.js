"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.K8sCluster = exports.K8sClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const edas_generated_1 = require("./edas.generated");
Object.defineProperty(exports, "K8sClusterProperty", { enumerable: true, get: function () { return edas_generated_1.RosK8sCluster; } });
/**
 * A ROS resource type:  `ALIYUN::EDAS::K8sCluster`
 */
class K8sCluster extends ros.Resource {
    /**
     * Create a new `ALIYUN::EDAS::K8sCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosK8sCluster = new edas_generated_1.RosK8sCluster(this, id, {
            enableAsm: props.enableAsm,
            namespaceId: props.namespaceId,
            csClusterId: props.csClusterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosK8sCluster;
        this.attrClusterId = rosK8sCluster.attrClusterId;
        this.attrClusterName = rosK8sCluster.attrClusterName;
        this.attrClusterType = rosK8sCluster.attrClusterType;
        this.attrCsClusterId = rosK8sCluster.attrCsClusterId;
        this.attrNetworkMode = rosK8sCluster.attrNetworkMode;
        this.attrNodeNum = rosK8sCluster.attrNodeNum;
        this.attrSubNetCidr = rosK8sCluster.attrSubNetCidr;
        this.attrVpcId = rosK8sCluster.attrVpcId;
        this.attrVswitchId = rosK8sCluster.attrVswitchId;
    }
}
exports.K8sCluster = K8sCluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiazhzY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIms4c2NsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUFpRDtBQUV2QixtR0FGakIsOEJBQWEsT0FFc0I7QUF1QjVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUF3RHhDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sYUFBYSxHQUFHLElBQUksOEJBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9DLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1NBQ2pDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBQ3JELENBQUM7Q0FDSjtBQWxGRCxnQ0FrRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NLOHNDbHVzdGVyIH0gZnJvbSAnLi9lZGFzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0s4c0NsdXN0ZXIgYXMgSzhzQ2x1c3RlclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFREFTOjpLOHNDbHVzdGVyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEs4c0NsdXN0ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjc0NsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBDUyBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNzQ2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmFibGVBc206IFdoZXRoZXIgZW5hYmxlIEFTTS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVBc20/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lc3BhY2VJZDogVGhlIElEIG9mIHRoZSBuYW1lc3BhY2UgdG8gd2hpY2ggdGhlIGNsdXN0ZXIgdGhhdCB5b3Ugd2FudCB0byBpbXBvcnQgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lc3BhY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RURBUzo6SzhzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIEs4c0NsdXN0ZXIgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2x1c3Rlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3Rlck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVyVHlwZTogVGhlIHR5cGUgb2YgdGhlIGNsdXN0ZXI6XG4yOiBFQ1MgY2x1c3RlclxuNTogQ29udGFpbmVyIFNlcnZpY2UgSzhzIGNsdXN0ZXIgb3IgU2VydmVybGVzcyBLOHMgY2x1c3RlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlclR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDc0NsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBLOHMgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNzQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTmV0d29ya01vZGU6IE5ldHdvcmsgbm9kZTpcbjE6IENsYXNzaWMgbmV0d29ya1xuMjogVlBDXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOZXR3b3JrTW9kZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5vZGVOdW06IE51bWJlciBvZiBub2Rlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5vZGVOdW06IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTdWJOZXRDaWRyOiBTdWIgbmV0IENJRFIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdWJOZXRDaWRyOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVnBjSWQ6IFRoZSBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVnN3aXRjaElkOiBUaGUgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWc3dpdGNoSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFREFTOjpLOHNDbHVzdGVyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBLOHNDbHVzdGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zSzhzQ2x1c3RlciA9IG5ldyBSb3NLOHNDbHVzdGVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZW5hYmxlQXNtOiBwcm9wcy5lbmFibGVBc20sXG4gICAgICAgICAgICBuYW1lc3BhY2VJZDogcHJvcHMubmFtZXNwYWNlSWQsXG4gICAgICAgICAgICBjc0NsdXN0ZXJJZDogcHJvcHMuY3NDbHVzdGVySWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSzhzQ2x1c3RlcjtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gcm9zSzhzQ2x1c3Rlci5hdHRyQ2x1c3RlcklkO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyTmFtZSA9IHJvc0s4c0NsdXN0ZXIuYXR0ckNsdXN0ZXJOYW1lO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyVHlwZSA9IHJvc0s4c0NsdXN0ZXIuYXR0ckNsdXN0ZXJUeXBlO1xuICAgICAgICB0aGlzLmF0dHJDc0NsdXN0ZXJJZCA9IHJvc0s4c0NsdXN0ZXIuYXR0ckNzQ2x1c3RlcklkO1xuICAgICAgICB0aGlzLmF0dHJOZXR3b3JrTW9kZSA9IHJvc0s4c0NsdXN0ZXIuYXR0ck5ldHdvcmtNb2RlO1xuICAgICAgICB0aGlzLmF0dHJOb2RlTnVtID0gcm9zSzhzQ2x1c3Rlci5hdHRyTm9kZU51bTtcbiAgICAgICAgdGhpcy5hdHRyU3ViTmV0Q2lkciA9IHJvc0s4c0NsdXN0ZXIuYXR0clN1Yk5ldENpZHI7XG4gICAgICAgIHRoaXMuYXR0clZwY0lkID0gcm9zSzhzQ2x1c3Rlci5hdHRyVnBjSWQ7XG4gICAgICAgIHRoaXMuYXR0clZzd2l0Y2hJZCA9IHJvc0s4c0NsdXN0ZXIuYXR0clZzd2l0Y2hJZDtcbiAgICB9XG59XG4iXX0=