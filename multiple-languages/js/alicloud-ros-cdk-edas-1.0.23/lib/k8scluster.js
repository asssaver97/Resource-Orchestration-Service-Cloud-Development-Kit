"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.K8sCluster = exports.K8sClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const edas_generated_1 = require("./edas.generated");
Object.defineProperty(exports, "K8sClusterProperty", { enumerable: true, get: function () { return edas_generated_1.RosK8sCluster; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::K8sCluster`, which is used to create a cluster of Container Service for Kubernetes (ACK).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosK8sCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8scluster
 */
class K8sCluster extends ros.Resource {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiazhzY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIms4c2NsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUFpRDtBQUV2QixtR0FGakIsOEJBQWEsT0FFc0I7QUF3QjVDOzs7O0dBSUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxHQUFHLENBQUMsUUFBUTtJQXVEeEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sYUFBYSxHQUFHLElBQUksOEJBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9DLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1NBQ2pDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBQ3JELENBQUM7Q0FDSjtBQW5GRCxnQ0FtRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NLOHNDbHVzdGVyIH0gZnJvbSAnLi9lZGFzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0s4c0NsdXN0ZXIgYXMgSzhzQ2x1c3RlclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgSzhzQ2x1c3RlcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lZGFzLWs4c2NsdXN0ZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBLOHNDbHVzdGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY3NDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgQ1MgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjc0NsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5hYmxlQXNtOiBXaGV0aGVyIGVuYWJsZSBBU00uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlQXNtPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZXNwYWNlSWQ6IFRoZSBJRCBvZiB0aGUgbmFtZXNwYWNlIHRvIHdoaWNoIHRoZSBjbHVzdGVyIHRoYXQgeW91IHdhbnQgdG8gaW1wb3J0IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZXNwYWNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkVEQVM6Oks4c0NsdXN0ZXJgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGNsdXN0ZXIgb2YgQ29udGFpbmVyIFNlcnZpY2UgZm9yIEt1YmVybmV0ZXMgKEFDSykuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NLOHNDbHVzdGVyYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZWRhcy1rOHNjbHVzdGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBLOHNDbHVzdGVyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBLOHNDbHVzdGVyUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2x1c3Rlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3Rlck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVyVHlwZTogVGhlIHR5cGUgb2YgdGhlIGNsdXN0ZXI6XG4yOiBFQ1MgY2x1c3RlclxuNTogQ29udGFpbmVyIFNlcnZpY2UgSzhzIGNsdXN0ZXIgb3IgU2VydmVybGVzcyBLOHMgY2x1c3RlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlclR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDc0NsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBLOHMgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNzQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTmV0d29ya01vZGU6IE5ldHdvcmsgbm9kZTpcbjE6IENsYXNzaWMgbmV0d29ya1xuMjogVlBDXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOZXR3b3JrTW9kZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5vZGVOdW06IE51bWJlciBvZiBub2Rlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5vZGVOdW06IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTdWJOZXRDaWRyOiBTdWIgbmV0IENJRFIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdWJOZXRDaWRyOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVnBjSWQ6IFRoZSBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVnN3aXRjaElkOiBUaGUgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWc3dpdGNoSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBLOHNDbHVzdGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NLOHNDbHVzdGVyID0gbmV3IFJvc0s4c0NsdXN0ZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICBlbmFibGVBc206IHByb3BzLmVuYWJsZUFzbSxcbiAgICAgICAgICAgIG5hbWVzcGFjZUlkOiBwcm9wcy5uYW1lc3BhY2VJZCxcbiAgICAgICAgICAgIGNzQ2x1c3RlcklkOiBwcm9wcy5jc0NsdXN0ZXJJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NLOHNDbHVzdGVyO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSByb3NLOHNDbHVzdGVyLmF0dHJDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJOYW1lID0gcm9zSzhzQ2x1c3Rlci5hdHRyQ2x1c3Rlck5hbWU7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJUeXBlID0gcm9zSzhzQ2x1c3Rlci5hdHRyQ2x1c3RlclR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckNzQ2x1c3RlcklkID0gcm9zSzhzQ2x1c3Rlci5hdHRyQ3NDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYXR0ck5ldHdvcmtNb2RlID0gcm9zSzhzQ2x1c3Rlci5hdHRyTmV0d29ya01vZGU7XG4gICAgICAgIHRoaXMuYXR0ck5vZGVOdW0gPSByb3NLOHNDbHVzdGVyLmF0dHJOb2RlTnVtO1xuICAgICAgICB0aGlzLmF0dHJTdWJOZXRDaWRyID0gcm9zSzhzQ2x1c3Rlci5hdHRyU3ViTmV0Q2lkcjtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSByb3NLOHNDbHVzdGVyLmF0dHJWcGNJZDtcbiAgICAgICAgdGhpcy5hdHRyVnN3aXRjaElkID0gcm9zSzhzQ2x1c3Rlci5hdHRyVnN3aXRjaElkO1xuICAgIH1cbn1cbiJdfQ==