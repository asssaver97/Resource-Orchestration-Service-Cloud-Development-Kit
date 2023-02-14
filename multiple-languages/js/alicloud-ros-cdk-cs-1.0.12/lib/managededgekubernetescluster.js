"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedEdgeKubernetesCluster = exports.ManagedEdgeKubernetesClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cs_generated_1 = require("./cs.generated");
Object.defineProperty(exports, "ManagedEdgeKubernetesClusterProperty", { enumerable: true, get: function () { return cs_generated_1.RosManagedEdgeKubernetesCluster; } });
/**
 * A ROS resource type:  `ALIYUN::CS::ManagedEdgeKubernetesCluster`
 */
class ManagedEdgeKubernetesCluster extends ros.Resource {
    /**
     * Create a new `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosManagedEdgeKubernetesCluster = new cs_generated_1.RosManagedEdgeKubernetesCluster(this, id, {
            endpointPublicAccess: props.endpointPublicAccess === undefined || props.endpointPublicAccess === null ? true : props.endpointPublicAccess,
            resourceGroupId: props.resourceGroupId,
            autoRenew: props.autoRenew,
            addons: props.addons,
            workerSystemDiskCategory: props.workerSystemDiskCategory === undefined || props.workerSystemDiskCategory === null ? 'cloud_efficiency' : props.workerSystemDiskCategory,
            workerSystemDiskSize: props.workerSystemDiskSize === undefined || props.workerSystemDiskSize === null ? 120 : props.workerSystemDiskSize,
            profile: props.profile === undefined || props.profile === null ? 'Edge' : props.profile,
            name: props.name,
            isEnterpriseSecurityGroup: props.isEnterpriseSecurityGroup,
            workerDataDiskSize: props.workerDataDiskSize,
            cloudMonitorFlags: props.cloudMonitorFlags === undefined || props.cloudMonitorFlags === null ? false : props.cloudMonitorFlags,
            serviceCidr: props.serviceCidr === undefined || props.serviceCidr === null ? '172.19.0.0/20' : props.serviceCidr,
            zoneIds: props.zoneIds,
            proxyMode: props.proxyMode === undefined || props.proxyMode === null ? 'iptables' : props.proxyMode,
            disableRollback: props.disableRollback === undefined || props.disableRollback === null ? true : props.disableRollback,
            tags: props.tags,
            workerInstanceTypes: props.workerInstanceTypes,
            loginPassword: props.loginPassword,
            autoRenewPeriod: props.autoRenewPeriod,
            containerCidr: props.containerCidr === undefined || props.containerCidr === null ? '172.16.0.0/16' : props.containerCidr,
            keyPair: props.keyPair,
            nodeCidrMask: props.nodeCidrMask,
            vSwitchIds: props.vSwitchIds,
            workerDataDisks: props.workerDataDisks,
            timeoutMins: props.timeoutMins === undefined || props.timeoutMins === null ? 60 : props.timeoutMins,
            period: props.period,
            clusterSpec: props.clusterSpec,
            deletionProtection: props.deletionProtection,
            workerDataDisk: props.workerDataDisk === undefined || props.workerDataDisk === null ? false : props.workerDataDisk,
            vpcId: props.vpcId,
            numOfNodes: props.numOfNodes,
            chargeType: props.chargeType,
            workerDataDiskCategory: props.workerDataDiskCategory,
            snatEntry: props.snatEntry === undefined || props.snatEntry === null ? true : props.snatEntry,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosManagedEdgeKubernetesCluster;
        this.attrApiServerSlbId = rosManagedEdgeKubernetesCluster.attrApiServerSlbId;
        this.attrClusterId = rosManagedEdgeKubernetesCluster.attrClusterId;
        this.attrDefaultUserKubeConfig = rosManagedEdgeKubernetesCluster.attrDefaultUserKubeConfig;
        this.attrNodes = rosManagedEdgeKubernetesCluster.attrNodes;
        this.attrPrivateUserKubConfig = rosManagedEdgeKubernetesCluster.attrPrivateUserKubConfig;
        this.attrScalingConfigurationId = rosManagedEdgeKubernetesCluster.attrScalingConfigurationId;
        this.attrScalingGroupId = rosManagedEdgeKubernetesCluster.attrScalingGroupId;
        this.attrScalingRuleId = rosManagedEdgeKubernetesCluster.attrScalingRuleId;
        this.attrTaskId = rosManagedEdgeKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosManagedEdgeKubernetesCluster.attrWorkerRamRoleName;
    }
}
exports.ManagedEdgeKubernetesCluster = ManagedEdgeKubernetesCluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlZGVkZ2VrdWJlcm5ldGVzY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hbmFnZWRlZGdla3ViZXJuZXRlc2NsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLGlEQUFpRTtBQUVyQixxSEFGbkMsOENBQStCLE9BRXdDO0FBeU9oRjs7R0FFRztBQUNILE1BQWEsNEJBQTZCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUF5RDFEOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBd0MsRUFBRSxtQ0FBMkMsSUFBSTtRQUNuSSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sK0JBQStCLEdBQUcsSUFBSSw4Q0FBK0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25GLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLG9CQUFvQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CO1lBQ3pJLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLHdCQUF3QixFQUFFLEtBQUssQ0FBQyx3QkFBd0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLHdCQUF3QixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx3QkFBd0I7WUFDdkssb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsb0JBQW9CLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0I7WUFD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SUFBSSxDQUFDLFFBQVEsR0FBRywrQkFBK0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsK0JBQStCLENBQUMsa0JBQWtCLENBQUM7UUFDN0UsSUFBSSxDQUFDLGFBQWEsR0FBRywrQkFBK0IsQ0FBQyxhQUFhLENBQUM7UUFDbkUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLCtCQUErQixDQUFDLHlCQUF5QixDQUFDO1FBQzNGLElBQUksQ0FBQyxTQUFTLEdBQUcsK0JBQStCLENBQUMsU0FBUyxDQUFDO1FBQzNELElBQUksQ0FBQyx3QkFBd0IsR0FBRywrQkFBK0IsQ0FBQyx3QkFBd0IsQ0FBQztRQUN6RixJQUFJLENBQUMsMEJBQTBCLEdBQUcsK0JBQStCLENBQUMsMEJBQTBCLENBQUM7UUFDN0YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLCtCQUErQixDQUFDLGtCQUFrQixDQUFDO1FBQzdFLElBQUksQ0FBQyxpQkFBaUIsR0FBRywrQkFBK0IsQ0FBQyxpQkFBaUIsQ0FBQztRQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLCtCQUErQixDQUFDLFVBQVUsQ0FBQztRQUM3RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsK0JBQStCLENBQUMscUJBQXFCLENBQUM7SUFDdkYsQ0FBQztDQUNKO0FBcEhELG9FQW9IQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc01hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXIgfSBmcm9tICcuL2NzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc01hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXIgYXMgTWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3RlclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDUzo6TWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIGNsdXN0ZXIuIFRoZSBjbHVzdGVyIG5hbWUgY2FuIHVzZSB1cHBlcmNhc2UgYW5kIGxvd2VyY2FzZSBsZXR0ZXJzLCBDaGluZXNlIGNoYXJhY3RlcnMsIG51bWJlcnMsIGFuZCBkYXNoZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbnVtT2ZOb2RlczogTnVtYmVyIG9mIHdvcmtlciBub2Rlcy4gVGhlIHJhbmdlIGlzIFswLDMwMF1cbiAgICAgKi9cbiAgICByZWFkb25seSBudW1PZk5vZGVzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhZGRvbnM6IFRoZSBhZGQtb25zIHRvIGJlIGluc3RhbGxlZCBmb3IgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWRkb25zPzogQXJyYXk8Um9zTWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3Rlci5BZGRvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXc6IFdoZXRoZXIgdGhlIGNsdXN0ZXIgYXV0b21hdGljYWxseSByZW5ld3MuIEl0IHRha2VzIGVmZmVjdCB3aGVuIHRoZSB2YWx1ZSBvZiBDaGFyZ2VUeXBlIGlzIFByZVBhaWQuIFRoZSBvcHRpb25hbCB2YWx1ZXMgYXJlOlxuICAgICAqIHRydWU6IGF1dG9tYXRpYyByZW5ld2FsXG4gICAgICogZmFsc2U6IGRvIG5vdCByZW5ldyBhdXRvbWF0aWNhbGx5XG4gICAgICogRGVmYXVsdCB0byB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZW5ldz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXdQZXJpb2Q6IEF1dG9tYXRpYyByZW5ld2FsIGN5Y2xlLCB3aGljaCB0YWtlcyBlZmZlY3Qgd2hlbiBwcmVwYWlkIGFuZCBhdXRvbWF0aWMgcmVuZXdhbCBhcmUgc2VsZWN0ZWQsIGFuZCBpcyByZXF1aXJlZDpcbiAgICAgKiBXaGVuIFBlcmlvZFVuaXQgPSBXZWVrLCB0aGUgdmFsdWVzIGFyZToge1wiMVwiLCBcIjJcIiwgXCIzXCJ9XG4gICAgICogV2hlbiBQZXJpb2RVbml0ID0gTW9udGgsIHRoZSB2YWx1ZSBpcyB7XCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI2XCIsIFwiMTJcIn1cbiAgICAgKiBEZWZhdWx0IHRvIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3UGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2hhcmdlVHlwZTogY2x1c3RlciBwYXltZW50IHR5cGUuIFRoZSBvcHRpb25hbCB2YWx1ZXMgYXJlOlxuICAgICAqIFByZVBhaWQ6IHByZXBhaWRcbiAgICAgKiBQb3N0UGFpZDogUGF5IGFzIHlvdSBnb1xuICAgICAqIERlZmF1bHQgdG8gUG9zdFBhaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNsb3VkTW9uaXRvckZsYWdzOiBXaGV0aGVyIHRvIGluc3RhbGwgdGhlIGNsb3VkIG1vbml0b3JpbmcgcGx1Z2luOlxuICAgICAqIHRydWU6IGluZGljYXRlcyBpbnN0YWxsYXRpb25cbiAgICAgKiBmYWxzZTogRG8gbm90IGluc3RhbGxcbiAgICAgKiBEZWZhdWx0IHRvIGZhbHNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2xvdWRNb25pdG9yRmxhZ3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2x1c3RlclNwZWM6IFRoZSBlZGdlIG1hbmFnZWQgY2x1c3RlciBzcGVjLiBWYWx1ZTpcbiAgICAgKiBhY2sucHJvLnNtYWxsOiBQcm9mZXNzaW9uYWwgaG9zdGluZyBjbHVzdGVyLCBuYW1lbHk6IFwiQUNLIFBybyB2ZXJzaW9uIGNsdXN0ZXJcIi5cbiAgICAgKiBhY2suc3RhbmRhcmQ6IFN0YW5kYXJkIGhvc3RpbmcgY2x1c3Rlci5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBhY2suc3RhbmRhcmQuIFRoZSB2YWx1ZSBjYW4gYmUgZW1wdHkuIFdoZW4gaXQgaXMgZW1wdHksIGEgc3RhbmRhcmQgbWFuYWdlZCBjbHVzdGVyIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVyU3BlYz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbnRhaW5lckNpZHI6IFRoZSBjb250YWluZXIgbmV0d29yayBzZWdtZW50IGNhbm5vdCBjb25mbGljdCB3aXRoIHRoZSBWUEMgbmV0d29yayBzZWdtZW50LiBXaGVuIHRoZSBzeXN0ZW0gaXMgc2VsZWN0ZWQgdG8gYXV0b21hdGljYWxseSBjcmVhdGUgYSBWUEMsIHRoZSBuZXR3b3JrIHNlZ21lbnQgMTcyLjE2LjAuMC8xNiBpcyB1c2VkIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFpbmVyQ2lkcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlbGV0aW9uUHJvdGVjdGlvbjogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIGRlbGV0aW9uIHByb3RlY3Rpb24gZm9yIHRoZSBjbHVzdGVyLiBcbiAgICAgKiBBZnRlciBkZWxldGlvbiBwcm90ZWN0aW9uIGlzIGVuYWJsZWQsIHRoZSBjbHVzdGVyIGNhbm5vdCBiZSBkZWxldGVkIFxuICAgICAqIGluIHRoZSBBQ0sgY29uc29sZSBvciBieSBjYWxsaW5nIEFQSSBvcGVyYXRpb25zLiBWYWxpZCB2YWx1ZXM6dHJ1ZTogZW5hYmxlcyBkZWxldGlvbiBwcm90ZWN0aW9uIGZvciB0aGUgY2x1c3Rlci5cbiAgICAgKiBmYWxzZTogZGlzYWJsZXMgZGVsZXRpb24gcHJvdGVjdGlvbiBmb3IgdGhlIGNsdXN0ZXIuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRpb25Qcm90ZWN0aW9uPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRpc2FibGVSb2xsYmFjazogV2hldGhlciB0aGUgZmFpbHVyZSB3YXMgcm9sbGVkIGJhY2s6XG4gICAgICogdHJ1ZTogaW5kaWNhdGVzIHRoYXQgaXQgZmFpbHMgdG8gcm9sbCBiYWNrXG4gICAgICogZmFsc2U6IHJvbGxiYWNrIGZhaWxlZFxuICAgICAqIFRoZSBkZWZhdWx0IGlzIHRydWUuIElmIHJvbGxiYWNrIGZhaWxzLCByZXNvdXJjZXMgcHJvZHVjZWQgZHVyaW5nIHRoZSBjcmVhdGlvbiBwcm9jZXNzIHdpbGwgYmUgcmVsZWFzZWQuIEZhbHNlIGlzIG5vdCByZWNvbW1lbmRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNhYmxlUm9sbGJhY2s/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5kcG9pbnRQdWJsaWNBY2Nlc3M6IFdoZXRoZXIgdG8gZW5hYmxlIHRoZSBwdWJsaWMgbmV0d29yayBBUEkgU2VydmVyOlxuICAgICAqIHRydWU6IHdoaWNoIG1lYW5zIHRoYXQgdGhlIHB1YmxpYyBuZXR3b3JrIEFQSSBTZXJ2ZXIgaXMgb3Blbi5cbiAgICAgKiBmYWxzZTogSWYgc2V0IHRvIGZhbHNlLCB0aGUgQVBJIHNlcnZlciBvbiB0aGUgcHVibGljIG5ldHdvcmsgd2lsbCBub3QgYmUgY3JlYXRlZCwgb25seSB0aGUgQVBJIHNlcnZlciBvbiB0aGUgcHJpdmF0ZSBuZXR3b3JrIHdpbGwgYmUgY3JlYXRlZC5EZWZhdWx0IHRvIHRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnRQdWJsaWNBY2Nlc3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaXNFbnRlcnByaXNlU2VjdXJpdHlHcm91cDogU3BlY2lmaWVzIHdoZXRoZXIgdG8gY3JlYXRlIGFuIGFkdmFuY2VkIHNlY3VyaXR5IGdyb3VwLiBcbiAgICAgKiBUaGlzIHBhcmFtZXRlciB0YWtlcyBlZmZlY3Qgb25seSBpZiBzZWN1cml0eV9ncm91cF9pZCBpcyBsZWZ0IGVtcHR5LlxuICAgICAqIE5vdGUgWW91IG11c3Qgc3BlY2lmeSBhbiBhZHZhbmNlZCBzZWN1cml0eSBncm91cCBmb3IgYSBjbHVzdGVyIHRoYXQgaGFzIFRlcndheSBpbnN0YWxsZWQuXG4gICAgICogdHJ1ZTogY3JlYXRlcyBhbiBhZHZhbmNlZCBzZWN1cml0eSBncm91cC5cbiAgICAgKiBmYWxzZTogZG9lcyBub3QgY3JlYXRlIGFuIGFkdmFuY2VkIHNlY3VyaXR5IGdyb3VwLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzRW50ZXJwcmlzZVNlY3VyaXR5R3JvdXA/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkga2V5UGFpcjogS2V5IHBhaXIgbmFtZS4gU3BlY2lmeSBvbmUgb2YgS2V5UGFpciBvciBMb2dpblBhc3N3b3JkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVBhaXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2dpblBhc3N3b3JkOiBTU0ggbG9naW4gcGFzc3dvcmQuIFBhc3N3b3JkIHJ1bGVzIGFyZSA4LTMwIGNoYXJhY3RlcnMgYW5kIGNvbnRhaW4gdGhyZWUgaXRlbXMgKHVwcGVyIGFuZCBsb3dlciBjYXNlIGxldHRlcnMsIG51bWJlcnMsIGFuZCBzcGVjaWFsIHN5bWJvbHMpLiBTcGVjaWZ5IG9uZSBvZiBLZXlQYWlyIG9yIExvZ2luUGFzc3dvcmQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9naW5QYXNzd29yZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5vZGVDaWRyTWFzazogVGhlIG1heGltdW0gbnVtYmVyIG9mIElQIGFkZHJlc3NlcyB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byBub2Rlcy4gXG4gICAgICogVGhpcyBudW1iZXIgaXMgZGV0ZXJtaW5lZCBieSB0aGUgc3BlY2lmaWVkIHBvZCBDSURSIGJsb2NrLiBcbiAgICAgKiBUaGlzIHBhcmFtZXRlciB0YWtlcyBlZmZlY3Qgb25seSBpZiB0aGUgY2x1c3RlciB1c2VzIHRoZSBGbGFubmVsIHBsdWctaW4uRGVmYXVsdCB2YWx1ZTogMjUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbm9kZUNpZHJNYXNrPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOiBUaGUgZHVyYXRpb24gb2YgdGhlIGFubnVhbCBzdWJzY3JpcHRpb24gYW5kIG1vbnRobHkgc3Vic2NyaXB0aW9uLiBJdCB0YWtlcyBlZmZlY3Qgd2hlbiB0aGUgQ2hhcmdlVHlwZSB2YWx1ZSBpcyBQcmVQYWlkIGFuZCBpcyBhIHJlcXVpcmVkIHZhbHVlLiBUaGUgdmFsdWUgcmFuZ2UgaXM6XG4gICAgICogV2hlbiBQZXJpb2RVbml0ID0gV2VlaywgUGVyaW9kIHZhbHVlcyBhcmU6IHtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIn1cbiAgICAgKiBXaGVuIFBlcmlvZFVuaXQgPSBNb250aCwgUGVyaW9kIHZhbHVlcyBhcmU6IHtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEyXCIsIFwiMjRcIiwgXCIzNlwiLCBcIjQ4XCIsIFwiNjBcIn1cbiAgICAgKiBXaGVuIFBlcmlvZFVuaXQgPSBZZWFyLCBQZXJpb2QgdmFsdWVzIGFyZToge1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIn1cbiAgICAgKiBEZWZhdWx0IHRvIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kVW5pdDogV2hlbiB5b3Ugc3BlY2lmeSBQcmVQYWlkLCB5b3UgbmVlZCB0byBzcGVjaWZ5IHRoZSBwZXJpb2QuIFRoZSBvcHRpb25zIGFyZTpcbiAgICAgKiBXZWVrOiBUaW1lIGlzIG1lYXN1cmVkIGluIHdlZWtzXG4gICAgICogTW9udGg6IHRpbWUgaW4gbW9udGhzXG4gICAgICogWWVhcjogdGltZSBpbiB5ZWFyc1xuICAgICAqIERlZmF1bHQgdG8gTW9udGhcbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2RVbml0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvZmlsZTogRWRnZSBjbHVzdGVyIElELiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBFZGdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2ZpbGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm94eU1vZGU6IGt1YmUtcHJveHkgcHJveHkgbW9kZSwgc3VwcG9ydHMgYm90aCBpcHRhYmxlcyBhbmQgaXB2cyBtb2Rlcy4gVGhlIGRlZmF1bHQgaXMgaXB0YWJsZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJveHlNb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VydmljZUNpZHI6IFRoZSBzZXJ2aWNlIG5ldHdvcmsgc2VnbWVudCBjYW5ub3QgY29uZmxpY3Qgd2l0aCB0aGUgVlBDIG5ldHdvcmsgc2VnbWVudCBhbmQgdGhlIGNvbnRhaW5lciBuZXR3b3JrIHNlZ21lbnQuIFdoZW4gdGhlIHN5c3RlbSBpcyBzZWxlY3RlZCB0byBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBhIFZQQywgdGhlIG5ldHdvcmsgc2VnbWVudCAxNzIuMTkuMC4wLzIwIGlzIHVzZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlQ2lkcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNuYXRFbnRyeTogV2hldGhlciB0byBjb25maWd1cmUgU05BVCBmb3IgdGhlIG5ldHdvcmsuXG4gICAgICogV2hlbiBhIFZQQyBjYW4gYWNjZXNzIHRoZSBwdWJsaWMgbmV0d29yayBlbnZpcm9ubWVudCwgc2V0IGl0IHRvIGZhbHNlLlxuICAgICAqIFdoZW4gYW4gZXhpc3RpbmcgVlBDIGNhbm5vdCBhY2Nlc3MgdGhlIHB1YmxpYyBuZXR3b3JrIGVudmlyb25tZW50OlxuICAgICAqIFdoZW4gc2V0IHRvIFRydWUsIFNOQVQgaXMgY29uZmlndXJlZCBhbmQgdGhlIHB1YmxpYyBuZXR3b3JrIGVudmlyb25tZW50IGNhbiBiZSBhY2Nlc3NlZCBhdCB0aGlzIHRpbWUuXG4gICAgICogSWYgc2V0IHRvIGZhbHNlLCBpdCBtZWFucyB0aGF0IFNOQVQgaXMgbm90IGNvbmZpZ3VyZWQgYW5kIHRoZSBwdWJsaWMgbmV0d29yayBlbnZpcm9ubWVudCBjYW5ub3QgYmUgYWNjZXNzZWQgYXQgdGhpcyB0aW1lLlxuICAgICAqIERlZmF1bHQgdG8gdHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzbmF0RW50cnk/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFnIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGltZW91dE1pbnM6IENsdXN0ZXIgcmVzb3VyY2Ugc3RhY2sgY3JlYXRpb24gdGltZW91dCwgaW4gbWludXRlcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgNjAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZW91dE1pbnM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNJZDogVlBDIElELiBJZiBub3Qgc2V0LCB0aGUgc3lzdGVtIHdpbGwgYXV0b21hdGljYWxseSBjcmVhdGUgYSBWUEMsIGFuZCB0aGUgVlBDIG5ldHdvcmsgc2VnbWVudCBjcmVhdGVkIGJ5IHRoZSBzeXN0ZW0gaXMgMTkyLjE2OC4wLjAvMTYuIFxuICAgICAqIFZwY0lkIGFuZCBWU3dpdGNoSWQgY2FuIG9ubHkgYmUgZW1wdHkgYXQgdGhlIHNhbWUgdGltZSBvciBzZXQgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWRzOiBUaGUgdmlydHVhbCBzd2l0Y2ggSUQgb2YgdGhlIHdvcmtlciBub2RlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZHM/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VyRGF0YURpc2s6IFdoZXRoZXIgdG8gbW91bnQgdGhlIGRhdGEgZGlzay4gVGhlIG9wdGlvbnMgYXJlIGFzIGZvbGxvd3M6XG4gICAgICogdHJ1ZTogaW5kaWNhdGVzIHRoYXQgdGhlIHdvcmtlciBub2RlIG1vdW50cyBkYXRhIGRpc2tzLlxuICAgICAqIGZhbHNlOiBpbmRpY2F0ZXMgdGhhdCB0aGUgd29ya2VyIG5vZGUgZG9lcyBub3QgbW91bnQgZGF0YSBkaXNrcy5cbiAgICAgKiBEZWZhdWx0IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlckRhdGFEaXNrPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdvcmtlckRhdGFEaXNrQ2F0ZWdvcnk6IERhdGEgZGlzayB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlckRhdGFEaXNrQ2F0ZWdvcnk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JrZXJEYXRhRGlza3M6IEEgY29tYmluYXRpb24gb2YgY29uZmlndXJhdGlvbnMgc3VjaCBhcyB3b3JrZXIgZGF0YSBkaXNrIHR5cGUgYW5kIHNpemUuIFRoaXMgcGFyYW1ldGVyIGlzIHZhbGlkIG9ubHkgd2hlbiB0aGUgd29ya2VyIG5vZGUgZGF0YSBkaXNrIGlzIG1vdW50ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyRGF0YURpc2tzPzogQXJyYXk8Um9zTWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3Rlci5Xb3JrZXJEYXRhRGlza3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JrZXJEYXRhRGlza1NpemU6IERhdGEgZGlzayBzaXplIGluIEdpQi5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJEYXRhRGlza1NpemU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JrZXJJbnN0YW5jZVR5cGVzOiBXb3JrZXIgbm9kZSBFQ1Mgc3BlY2lmaWNhdGlvbiB0eXBlIGNvZGUuIEZvciBtb3JlIGRldGFpbHMsIHNlZSBJbnN0YW5jZSBTcGVjaWZpY2F0aW9uIEZhbWlseS5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJJbnN0YW5jZVR5cGVzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdvcmtlclN5c3RlbURpc2tDYXRlZ29yeTogV29ya2VyIG5vZGUgc3lzdGVtIGRpc2sgdHlwZS4gXG4gICAgICogRGVmYXVsdCB0byBjbG91ZF9lZmZpY2llbmN5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlclN5c3RlbURpc2tDYXRlZ29yeT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdvcmtlclN5c3RlbURpc2tTaXplOiBXb3JrZXIgZGlzayBzeXN0ZW0gZGlzayBzaXplLCB0aGUgdW5pdCBpcyBHaUIuXG4gICAgICogRGVmYXVsdCB0byAxMjAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyU3lzdGVtRGlza1NpemU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWRzOiBab25lIGlkcyBvZiB3b3JrZXIgbm9kZSB2aXJ0dWFsIHN3aXRjaGVzIGJlbG9uZ3MgdG8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZUlkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkNTOjpNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyYFxuICovXG5leHBvcnQgY2xhc3MgTWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3RlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQVBJU2VydmVyU0xCSWQ6IFRoZSBpZCBvZiBBUEkgc2VydmVyIFNMQlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBpU2VydmVyU2xiSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVySWQ6IENsdXN0ZXIgaW5zdGFuY2UgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZWZhdWx0VXNlckt1YmVDb25maWc6IERlZmF1bHQgdXNlciBrdWJlcm5ldGVzIGNvbmZpZyB3aGljaCBpcyB1c2VkIGZvciBjb25maWd1cmluZyBjbHVzdGVyIGNyZWRlbnRpYWxzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVmYXVsdFVzZXJLdWJlQ29uZmlnOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTm9kZXM6IFRoZSBsaXN0IG9mIGNsdXN0ZXIgbm9kZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOb2Rlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFByaXZhdGVVc2VyS3ViQ29uZmlnOiBQcml2YXRlIHVzZXIga3ViZXJuZXRlcyBjb25maWcgd2hpY2ggaXMgdXNlZCBmb3IgY29uZmlndXJpbmcgY2x1c3RlciBjcmVkZW50aWFscy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaXZhdGVVc2VyS3ViQ29uZmlnOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2NhbGluZ0NvbmZpZ3VyYXRpb25JZDogU2NhbGluZyBjb25maWd1cmF0aW9uIGlkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTY2FsaW5nQ29uZmlndXJhdGlvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2NhbGluZ0dyb3VwSWQ6IFNjYWxpbmcgZ3JvdXAgaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNjYWxpbmdHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2NhbGluZ1J1bGVJZDogU2NhbGluZyBydWxlIGlkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTY2FsaW5nUnVsZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVGFza0lkOiBUYXNrIElELiBBdXRvbWF0aWNhbGx5IGFzc2lnbmVkIGJ5IHRoZSBzeXN0ZW0sIHRoZSB1c2VyIHF1ZXJpZXMgdGhlIHRhc2sgc3RhdHVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFza0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgV29ya2VyUmFtUm9sZU5hbWU6IFdvcmtlciByYW0gcm9sZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyV29ya2VyUmFtUm9sZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDUzo6TWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3RlcmAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3RlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc01hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXIgPSBuZXcgUm9zTWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3Rlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGVuZHBvaW50UHVibGljQWNjZXNzOiBwcm9wcy5lbmRwb2ludFB1YmxpY0FjY2VzcyA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmVuZHBvaW50UHVibGljQWNjZXNzID09PSBudWxsID8gdHJ1ZSA6IHByb3BzLmVuZHBvaW50UHVibGljQWNjZXNzLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBhdXRvUmVuZXc6IHByb3BzLmF1dG9SZW5ldyxcbiAgICAgICAgICAgIGFkZG9uczogcHJvcHMuYWRkb25zLFxuICAgICAgICAgICAgd29ya2VyU3lzdGVtRGlza0NhdGVnb3J5OiBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnkgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnkgPT09IG51bGwgPyAnY2xvdWRfZWZmaWNpZW5jeScgOiBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnksXG4gICAgICAgICAgICB3b3JrZXJTeXN0ZW1EaXNrU2l6ZTogcHJvcHMud29ya2VyU3lzdGVtRGlza1NpemUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrU2l6ZSA9PT0gbnVsbCA/IDEyMCA6IHByb3BzLndvcmtlclN5c3RlbURpc2tTaXplLFxuICAgICAgICAgICAgcHJvZmlsZTogcHJvcHMucHJvZmlsZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnByb2ZpbGUgPT09IG51bGwgPyAnRWRnZScgOiBwcm9wcy5wcm9maWxlLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgICAgIGlzRW50ZXJwcmlzZVNlY3VyaXR5R3JvdXA6IHByb3BzLmlzRW50ZXJwcmlzZVNlY3VyaXR5R3JvdXAsXG4gICAgICAgICAgICB3b3JrZXJEYXRhRGlza1NpemU6IHByb3BzLndvcmtlckRhdGFEaXNrU2l6ZSxcbiAgICAgICAgICAgIGNsb3VkTW9uaXRvckZsYWdzOiBwcm9wcy5jbG91ZE1vbml0b3JGbGFncyA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmNsb3VkTW9uaXRvckZsYWdzID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5jbG91ZE1vbml0b3JGbGFncyxcbiAgICAgICAgICAgIHNlcnZpY2VDaWRyOiBwcm9wcy5zZXJ2aWNlQ2lkciA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnNlcnZpY2VDaWRyID09PSBudWxsID8gJzE3Mi4xOS4wLjAvMjAnIDogcHJvcHMuc2VydmljZUNpZHIsXG4gICAgICAgICAgICB6b25lSWRzOiBwcm9wcy56b25lSWRzLFxuICAgICAgICAgICAgcHJveHlNb2RlOiBwcm9wcy5wcm94eU1vZGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5wcm94eU1vZGUgPT09IG51bGwgPyAnaXB0YWJsZXMnIDogcHJvcHMucHJveHlNb2RlLFxuICAgICAgICAgICAgZGlzYWJsZVJvbGxiYWNrOiBwcm9wcy5kaXNhYmxlUm9sbGJhY2sgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5kaXNhYmxlUm9sbGJhY2sgPT09IG51bGwgPyB0cnVlIDogcHJvcHMuZGlzYWJsZVJvbGxiYWNrLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgICAgIHdvcmtlckluc3RhbmNlVHlwZXM6IHByb3BzLndvcmtlckluc3RhbmNlVHlwZXMsXG4gICAgICAgICAgICBsb2dpblBhc3N3b3JkOiBwcm9wcy5sb2dpblBhc3N3b3JkLFxuICAgICAgICAgICAgYXV0b1JlbmV3UGVyaW9kOiBwcm9wcy5hdXRvUmVuZXdQZXJpb2QsXG4gICAgICAgICAgICBjb250YWluZXJDaWRyOiBwcm9wcy5jb250YWluZXJDaWRyID09PSB1bmRlZmluZWQgfHwgcHJvcHMuY29udGFpbmVyQ2lkciA9PT0gbnVsbCA/ICcxNzIuMTYuMC4wLzE2JyA6IHByb3BzLmNvbnRhaW5lckNpZHIsXG4gICAgICAgICAgICBrZXlQYWlyOiBwcm9wcy5rZXlQYWlyLFxuICAgICAgICAgICAgbm9kZUNpZHJNYXNrOiBwcm9wcy5ub2RlQ2lkck1hc2ssXG4gICAgICAgICAgICB2U3dpdGNoSWRzOiBwcm9wcy52U3dpdGNoSWRzLFxuICAgICAgICAgICAgd29ya2VyRGF0YURpc2tzOiBwcm9wcy53b3JrZXJEYXRhRGlza3MsXG4gICAgICAgICAgICB0aW1lb3V0TWluczogcHJvcHMudGltZW91dE1pbnMgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy50aW1lb3V0TWlucyA9PT0gbnVsbCA/IDYwIDogcHJvcHMudGltZW91dE1pbnMsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIGNsdXN0ZXJTcGVjOiBwcm9wcy5jbHVzdGVyU3BlYyxcbiAgICAgICAgICAgIGRlbGV0aW9uUHJvdGVjdGlvbjogcHJvcHMuZGVsZXRpb25Qcm90ZWN0aW9uLFxuICAgICAgICAgICAgd29ya2VyRGF0YURpc2s6IHByb3BzLndvcmtlckRhdGFEaXNrID09PSB1bmRlZmluZWQgfHwgcHJvcHMud29ya2VyRGF0YURpc2sgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLndvcmtlckRhdGFEaXNrLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgbnVtT2ZOb2RlczogcHJvcHMubnVtT2ZOb2RlcyxcbiAgICAgICAgICAgIGNoYXJnZVR5cGU6IHByb3BzLmNoYXJnZVR5cGUsXG4gICAgICAgICAgICB3b3JrZXJEYXRhRGlza0NhdGVnb3J5OiBwcm9wcy53b3JrZXJEYXRhRGlza0NhdGVnb3J5LFxuICAgICAgICAgICAgc25hdEVudHJ5OiBwcm9wcy5zbmF0RW50cnkgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5zbmF0RW50cnkgPT09IG51bGwgPyB0cnVlIDogcHJvcHMuc25hdEVudHJ5LFxuICAgICAgICAgICAgcGVyaW9kVW5pdDogcHJvcHMucGVyaW9kVW5pdCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyO1xuICAgICAgICB0aGlzLmF0dHJBcGlTZXJ2ZXJTbGJJZCA9IHJvc01hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXIuYXR0ckFwaVNlcnZlclNsYklkO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSByb3NNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyLmF0dHJDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYXR0ckRlZmF1bHRVc2VyS3ViZUNvbmZpZyA9IHJvc01hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXIuYXR0ckRlZmF1bHRVc2VyS3ViZUNvbmZpZztcbiAgICAgICAgdGhpcy5hdHRyTm9kZXMgPSByb3NNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyLmF0dHJOb2RlcztcbiAgICAgICAgdGhpcy5hdHRyUHJpdmF0ZVVzZXJLdWJDb25maWcgPSByb3NNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyLmF0dHJQcml2YXRlVXNlckt1YkNvbmZpZztcbiAgICAgICAgdGhpcy5hdHRyU2NhbGluZ0NvbmZpZ3VyYXRpb25JZCA9IHJvc01hbmFnZWRFZGdlS3ViZXJuZXRlc0NsdXN0ZXIuYXR0clNjYWxpbmdDb25maWd1cmF0aW9uSWQ7XG4gICAgICAgIHRoaXMuYXR0clNjYWxpbmdHcm91cElkID0gcm9zTWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3Rlci5hdHRyU2NhbGluZ0dyb3VwSWQ7XG4gICAgICAgIHRoaXMuYXR0clNjYWxpbmdSdWxlSWQgPSByb3NNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyLmF0dHJTY2FsaW5nUnVsZUlkO1xuICAgICAgICB0aGlzLmF0dHJUYXNrSWQgPSByb3NNYW5hZ2VkRWRnZUt1YmVybmV0ZXNDbHVzdGVyLmF0dHJUYXNrSWQ7XG4gICAgICAgIHRoaXMuYXR0cldvcmtlclJhbVJvbGVOYW1lID0gcm9zTWFuYWdlZEVkZ2VLdWJlcm5ldGVzQ2x1c3Rlci5hdHRyV29ya2VyUmFtUm9sZU5hbWU7XG4gICAgfVxufVxuIl19