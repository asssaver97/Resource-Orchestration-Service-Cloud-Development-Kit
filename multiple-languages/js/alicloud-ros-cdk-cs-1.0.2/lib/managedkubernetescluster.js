"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedKubernetesCluster = exports.ManagedKubernetesClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cs_generated_1 = require("./cs.generated");
Object.defineProperty(exports, "ManagedKubernetesClusterProperty", { enumerable: true, get: function () { return cs_generated_1.RosManagedKubernetesCluster; } });
/**
 * A ROS resource type:  `ALIYUN::CS::ManagedKubernetesCluster`
 */
class ManagedKubernetesCluster extends ros.Resource {
    /**
     * Create a new `ALIYUN::CS::ManagedKubernetesCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosManagedKubernetesCluster = new cs_generated_1.RosManagedKubernetesCluster(this, id, {
            endpointPublicAccess: props.endpointPublicAccess === undefined || props.endpointPublicAccess === null ? false : props.endpointPublicAccess,
            workerPeriod: props.workerPeriod === undefined || props.workerPeriod === null ? 1 : props.workerPeriod,
            workerPeriodUnit: props.workerPeriodUnit === undefined || props.workerPeriodUnit === null ? 'Month' : props.workerPeriodUnit,
            addons: props.addons,
            workerSystemDiskCategory: props.workerSystemDiskCategory === undefined || props.workerSystemDiskCategory === null ? 'cloud_efficiency' : props.workerSystemDiskCategory,
            workerSystemDiskSize: props.workerSystemDiskSize === undefined || props.workerSystemDiskSize === null ? 120 : props.workerSystemDiskSize,
            name: props.name,
            taint: props.taint,
            cloudMonitorFlags: props.cloudMonitorFlags === undefined || props.cloudMonitorFlags === null ? false : props.cloudMonitorFlags,
            serviceCidr: props.serviceCidr === undefined || props.serviceCidr === null ? '172.19.0.0/20' : props.serviceCidr,
            podVswitchIds: props.podVswitchIds,
            workerAutoRenew: props.workerAutoRenew === undefined || props.workerAutoRenew === null ? true : props.workerAutoRenew,
            proxyMode: props.proxyMode === undefined || props.proxyMode === null ? 'iptables' : props.proxyMode,
            disableRollback: props.disableRollback === undefined || props.disableRollback === null ? true : props.disableRollback,
            tags: props.tags,
            workerInstanceTypes: props.workerInstanceTypes,
            loginPassword: props.loginPassword,
            kubernetesVersion: props.kubernetesVersion,
            containerCidr: props.containerCidr === undefined || props.containerCidr === null ? '172.16.0.0/16' : props.containerCidr,
            workerInstanceChargeType: props.workerInstanceChargeType === undefined || props.workerInstanceChargeType === null ? 'PostPaid' : props.workerInstanceChargeType,
            keyPair: props.keyPair,
            vSwitchIds: props.vSwitchIds,
            workerDataDisks: props.workerDataDisks,
            securityGroupId: props.securityGroupId,
            timeoutMins: props.timeoutMins === undefined || props.timeoutMins === null ? 60 : props.timeoutMins,
            clusterSpec: props.clusterSpec,
            workerDataDisk: props.workerDataDisk === undefined || props.workerDataDisk === null ? false : props.workerDataDisk,
            vpcId: props.vpcId,
            numOfNodes: props.numOfNodes === undefined || props.numOfNodes === null ? 3 : props.numOfNodes,
            encryptionProviderKey: props.encryptionProviderKey,
            workerAutoRenewPeriod: props.workerAutoRenewPeriod === undefined || props.workerAutoRenewPeriod === null ? 1 : props.workerAutoRenewPeriod,
            snatEntry: props.snatEntry === undefined || props.snatEntry === null ? true : props.snatEntry,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosManagedKubernetesCluster;
        this.attrClusterId = rosManagedKubernetesCluster.attrClusterId;
        this.attrTaskId = rosManagedKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosManagedKubernetesCluster.attrWorkerRamRoleName;
    }
}
exports.ManagedKubernetesCluster = ManagedKubernetesCluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlZGt1YmVybmV0ZXNjbHVzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFuYWdlZGt1YmVybmV0ZXNjbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpREFBNkQ7QUFFckIsaUhBRi9CLDBDQUEyQixPQUVvQztBQXdOeEU7O0dBRUc7QUFDSCxNQUFhLHdCQUF5QixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0J0RDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9DLEVBQUUsbUNBQTJDLElBQUk7UUFDL0gsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLDJCQUEyQixHQUFHLElBQUksMENBQTJCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzRSxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQjtZQUMxSSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVk7WUFDdEcsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7WUFDNUgsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLHdCQUF3QixFQUFFLEtBQUssQ0FBQyx3QkFBd0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLHdCQUF3QixLQUFLLElBQUksQ0FBQyxD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QUFLLENBQUMsVUFBVTtZQUM5RixxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1lBQ2xELHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUIsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLHFCQUFxQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCO1lBQzFJLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUztTQUNoRyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUEyQixDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsMkJBQTJCLENBQUMsYUFBYSxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLEdBQUcsMkJBQTJCLENBQUMsVUFBVSxDQUFDO1FBQ3pELElBQUksQ0FBQyxxQkFBcUIsR0FBRywyQkFBMkIsQ0FBQyxxQkFBcUIsQ0FBQztJQUNuRixDQUFDO0NBQ0o7QUF2RUQsNERBdUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTWFuYWdlZEt1YmVybmV0ZXNDbHVzdGVyIH0gZnJvbSAnLi9jcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXIgYXMgTWFuYWdlZEt1YmVybmV0ZXNDbHVzdGVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNTOjpNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFuYWdlZEt1YmVybmV0ZXNDbHVzdGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIGNsdXN0ZXIuIFRoZSBjbHVzdGVyIG5hbWUgY2FuIHVzZSB1cHBlcmNhc2UgYW5kIGxvd2VyY2FzZSBsZXR0ZXJzLCBDaGluZXNlIGNoYXJhY3RlcnMsIG51bWJlcnMsIGFuZCBkYXNoZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFZQQyBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkczogVGhlIHZpcnR1YWwgc3dpdGNoIElEIG9mIHRoZSB3b3JrZXIgbm9kZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWRzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VySW5zdGFuY2VUeXBlczogV29ya2VyIG5vZGUgRUNTIHNwZWNpZmljYXRpb24gdHlwZSBjb2RlLiBGb3IgbW9yZSBkZXRhaWxzLCBzZWUgSW5zdGFuY2UgU3BlY2lmaWNhdGlvbiBGYW1pbHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VySW5zdGFuY2VUeXBlczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFkZG9uczogQSBjb21iaW5hdGlvbiBvZiBhZGRvbiBwbHVnaW5zIGZvciBLdWJlcm5ldGVzIGNsdXN0ZXJzLlxuICAgICAqIE5ldHdvcmsgcGx1Zy1pbjogaW5jbHVkaW5nIEZsYW5uZWwgYW5kIFRlcndheSBuZXR3b3JrIHBsdWctaW5zXG4gICAgICogTG9nIHNlcnZpY2U6IE9wdGlvbmFsLiBJZiB0aGUgbG9nIHNlcnZpY2UgaXMgbm90IGVuYWJsZWQsIHRoZSBjbHVzdGVyIGF1ZGl0IGZ1bmN0aW9uIGNhbm5vdCBiZSB1c2VkLlxuICAgICAqIEluZ3Jlc3M6IFRoZSBpbnN0YWxsYXRpb24gb2YgdGhlIEluZ3Jlc3MgY29tcG9uZW50IGlzIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhZGRvbnM/OiBBcnJheTxSb3NNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXIuQWRkb25zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2xvdWRNb25pdG9yRmxhZ3M6IFdoZXRoZXIgdG8gaW5zdGFsbCB0aGUgY2xvdWQgbW9uaXRvcmluZyBwbHVnaW46XG4gICAgICogdHJ1ZTogaW5kaWNhdGVzIGluc3RhbGxhdGlvblxuICAgICAqIGZhbHNlOiBEbyBub3QgaW5zdGFsbFxuICAgICAqIERlZmF1bHQgdG8gZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBjbG91ZE1vbml0b3JGbGFncz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbHVzdGVyU3BlYzogVGhlIG1hbmFnZWQgY2x1c3RlciBzcGVjLiBWYWx1ZTpcbiAgICAgKiBhY2sucHJvLnNtYWxsOiBQcm9mZXNzaW9uYWwgaG9zdGluZyBjbHVzdGVyLCBuYW1lbHk6IFwiQUNLIFBybyB2ZXJzaW9uIGNsdXN0ZXJcIi5cbiAgICAgKiBhY2suc3RhbmRhcmQ6IFN0YW5kYXJkIGhvc3RpbmcgY2x1c3Rlci5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBhY2suc3RhbmRhcmQuIFRoZSB2YWx1ZSBjYW4gYmUgZW1wdHkuIFdoZW4gaXQgaXMgZW1wdHksIGEgc3RhbmRhcmQgbWFuYWdlZCBjbHVzdGVyIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVyU3BlYz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbnRhaW5lckNpZHI6IFRoZSBjb250YWluZXIgbmV0d29yayBzZWdtZW50IGNhbm5vdCBjb25mbGljdCB3aXRoIHRoZSBWUEMgbmV0d29yayBzZWdtZW50LiBXaGVuIHRoZSBzeXN0ZW0gaXMgc2VsZWN0ZWQgdG8gYXV0b21hdGljYWxseSBjcmVhdGUgYSBWUEMsIHRoZSBuZXR3b3JrIHNlZ21lbnQgMTcyLjE2LjAuMC8xNiBpcyB1c2VkIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFpbmVyQ2lkcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRpc2FibGVSb2xsYmFjazogV2hldGhlciB0aGUgZmFpbHVyZSB3YXMgcm9sbGVkIGJhY2s6XG4gICAgICogdHJ1ZTogaW5kaWNhdGVzIHRoYXQgaXQgZmFpbHMgdG8gcm9sbCBiYWNrXG4gICAgICogZmFsc2U6IHJvbGxiYWNrIGZhaWxlZFxuICAgICAqIFRoZSBkZWZhdWx0IGlzIHRydWUuIElmIHJvbGxiYWNrIGZhaWxzLCByZXNvdXJjZXMgcHJvZHVjZWQgZHVyaW5nIHRoZSBjcmVhdGlvbiBwcm9jZXNzIHdpbGwgYmUgcmVsZWFzZWQuIEZhbHNlIGlzIG5vdCByZWNvbW1lbmRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNhYmxlUm9sbGJhY2s/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5jcnlwdGlvblByb3ZpZGVyS2V5OiBUaGUgSUQgb2YgdGhlIGtleSB0aGF0IGlzIG1hbmFnZWQgYnkgS2V5IE1hbmFnZW1lbnQgU2VydmljZSAoS01TKS4gVGhpcyBrZXkgaXMgdXNlZCB0byBlbmNyeXB0IGRhdGEgZGlza3MuWW91IGNhbiB1c2UgS01TIGluIG9ubHkgcHJvZmVzc2lvbmFsIG1hbmFnZWQgS3ViZXJuZXRlcyBjbHVzdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmNyeXB0aW9uUHJvdmlkZXJLZXk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmRwb2ludFB1YmxpY0FjY2VzczogV2hldGhlciB0byBlbmFibGUgdGhlIHB1YmxpYyBuZXR3b3JrIEFQSSBTZXJ2ZXI6XG4gICAgICogdHJ1ZTogd2hpY2ggbWVhbnMgdGhhdCB0aGUgcHVibGljIG5ldHdvcmsgQVBJIFNlcnZlciBpcyBvcGVuLlxuICAgICAqIGZhbHNlOiBJZiBzZXQgdG8gZmFsc2UsIHRoZSBBUEkgc2VydmVyIG9uIHRoZSBwdWJsaWMgbmV0d29yayB3aWxsIG5vdCBiZSBjcmVhdGVkLCBvbmx5IHRoZSBBUEkgc2VydmVyIG9uIHRoZSBwcml2YXRlIG5ldHdvcmsgd2lsbCBiZSBjcmVhdGVkLkRlZmF1bHQgdG8gZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnRQdWJsaWNBY2Nlc3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkga2V5UGFpcjogS2V5IHBhaXIgbmFtZS4gU3BlY2lmeSBvbmUgb2YgS2V5UGFpciBvciBMb2dpblBhc3N3b3JkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVBhaXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBrdWJlcm5ldGVzVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgdGhlIEt1YmVybmV0ZXMgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBrdWJlcm5ldGVzVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvZ2luUGFzc3dvcmQ6IFNTSCBsb2dpbiBwYXNzd29yZC4gUGFzc3dvcmQgcnVsZXMgYXJlIDgtMzAgY2hhcmFjdGVycyBhbmQgY29udGFpbiB0aHJlZSBpdGVtcyAodXBwZXIgYW5kIGxvd2VyIGNhc2UgbGV0dGVycywgbnVtYmVycywgYW5kIHNwZWNpYWwgc3ltYm9scykuIFNwZWNpZnkgb25lIG9mIEtleVBhaXIgb3IgTG9naW5QYXNzd29yZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dpblBhc3N3b3JkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbnVtT2ZOb2RlczogTnVtYmVyIG9mIHdvcmtlciBub2Rlcy4gVGhlIHJhbmdlIGlzIFswLDMwMF0uXG4gICAgICogRGVmYXVsdCB0byAzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG51bU9mTm9kZXM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwb2RWc3dpdGNoSWRzOiBUaGUgbGlzdCBvZiBwb2QgdlN3aXRjaGVzLiBGb3IgZWFjaCB2U3dpdGNoIHRoYXQgaXMgYWxsb2NhdGVkIHRvIG5vZGVzLCBcbiAgICAgKiAgeW91IG11c3Qgc3BlY2lmeSBhdCBsZWFzdCBvbmUgcG9kIHZTd2l0Y2ggaW4gdGhlIHNhbWUgem9uZS4gXG4gICAgICogIFRoZSBwb2QgdlN3aXRjaGVzIGNhbm5vdCBiZSB0aGUgc2FtZSBhcyB0aGUgbm9kZSB2U3dpdGNoZXMuIFxuICAgICAqICBXZSByZWNvbW1lbmQgdGhhdCB5b3Ugc2V0IHRoZSBtYXNrIGxlbmd0aCBvZiB0aGUgQ0lEUiBibG9jayB0byBhIHZhbHVlIG5vIFxuICAgICAqIGdyZWF0ZXIgdGhhbiAxOSBmb3IgdGhlIHBvZCB2U3dpdGNoZXMuXG4gICAgICogVGhlIHBvZF92c3dpdGNoX2lkcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgd2hlbiB0aGUgVGVyd2F5IG5ldHdvcmsgXG4gICAgICogcGx1Zy1pbiBpcyBzZWxlY3RlZCBmb3IgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9kVnN3aXRjaElkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm94eU1vZGU6IGt1YmUtcHJveHkgcHJveHkgbW9kZSwgc3VwcG9ydHMgYm90aCBpcHRhYmxlcyBhbmQgaXB2cyBtb2Rlcy4gVGhlIGRlZmF1bHQgaXMgaXB0YWJsZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJveHlNb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBTcGVjaWZpZXMgdGhlIElEIG9mIHRoZSBzZWN1cml0eSBncm91cCB0byB3aGljaCB0aGUgY2x1c3RlciBFQ1MgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2aWNlQ2lkcjogVGhlIHNlcnZpY2UgbmV0d29yayBzZWdtZW50IGNhbm5vdCBjb25mbGljdCB3aXRoIHRoZSBWUEMgbmV0d29yayBzZWdtZW50IGFuZCB0aGUgY29udGFpbmVyIG5ldHdvcmsgc2VnbWVudC4gV2hlbiB0aGUgc3lzdGVtIGlzIHNlbGVjdGVkIHRvIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGEgVlBDLCB0aGUgbmV0d29yayBzZWdtZW50IDE3Mi4xOS4wLjAvMjAgaXMgdXNlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VDaWRyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc25hdEVudHJ5OiBXaGV0aGVyIHRvIGNvbmZpZ3VyZSBTTkFUIGZvciB0aGUgbmV0d29yay5cbiAgICAgKiBXaGVuIGEgVlBDIGNhbiBhY2Nlc3MgdGhlIHB1YmxpYyBuZXR3b3JrIGVudmlyb25tZW50LCBzZXQgaXQgdG8gZmFsc2UuXG4gICAgICogV2hlbiBhbiBleGlzdGluZyBWUEMgY2Fubm90IGFjY2VzcyB0aGUgcHVibGljIG5ldHdvcmsgZW52aXJvbm1lbnQ6XG4gICAgICogV2hlbiBzZXQgdG8gVHJ1ZSwgU05BVCBpcyBjb25maWd1cmVkIGFuZCB0aGUgcHVibGljIG5ldHdvcmsgZW52aXJvbm1lbnQgY2FuIGJlIGFjY2Vzc2VkIGF0IHRoaXMgdGltZS5cbiAgICAgKiBJZiBzZXQgdG8gZmFsc2UsIGl0IG1lYW5zIHRoYXQgU05BVCBpcyBub3QgY29uZmlndXJlZCBhbmQgdGhlIHB1YmxpYyBuZXR3b3JrIGVudmlyb25tZW50IGNhbm5vdCBiZSBhY2Nlc3NlZCBhdCB0aGlzIHRpbWUuXG4gICAgICogRGVmYXVsdCB0byB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNuYXRFbnRyeT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWcgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc01hbmFnZWRLdWJlcm5ldGVzQ2x1c3Rlci5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhaW50OiBJdCBpcyB1c2VkIHRvIG1hcmsgbm9kZXMgd2l0aCB0YWludHMuIEl0IGlzIHVzdWFsbHkgdXNlZCBmb3IgdGhlIHNjaGVkdWxpbmcgc3RyYXRlZ3kgb2YgUG9kcy4gVGhlIGNvcnJlc3BvbmRpbmcgY29uY2VwdCBpczogdG9sZXJhbmNlLiBJZiB0aGVyZSBpcyBhIGNvcnJlc3BvbmRpbmcgdG9sZXJhbmNlIG1hcmsgb24gdGhlIFBvZHMsIHRoZSBzdGFpbiBvbiB0aGUgbm9kZSBjYW4gYmUgdG9sZXJhdGVkIGFuZCBzY2hlZHVsZWQgdG8gdGhlIG5vZGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFpbnQ/OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IGFueSB9PiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRpbWVvdXRNaW5zOiBDbHVzdGVyIHJlc291cmNlIHN0YWNrIGNyZWF0aW9uIHRpbWVvdXQsIGluIG1pbnV0ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDYwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXRNaW5zPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VyQXV0b1JlbmV3OiBXaGV0aGVyIHRvIGVuYWJsZSBhdXRvbWF0aWMgcmVuZXdhbCBvZiBXb3JrZXIgbm9kZXMuIFRoZSBvcHRpb25hbCB2YWx1ZXMgYXJlOlxuICAgICAqIHRydWU6IGF1dG9tYXRpYyByZW5ld2FsXG4gICAgICogZmFsc2U6IGRvIG5vdCByZW5ldyBhdXRvbWF0aWNhbGx5XG4gICAgICogRGVmYXVsdCB0byB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlckF1dG9SZW5ldz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JrZXJBdXRvUmVuZXdQZXJpb2Q6IEF1dG9tYXRpYyByZW5ld2FsIGN5Y2xlLCB3aGljaCB0YWtlcyBlZmZlY3Qgd2hlbiBwcmVwYWlkIGFuZCBhdXRvbWF0aWMgcmVuZXdhbCBhcmUgc2VsZWN0ZWQsIGFuZCBpcyByZXF1aXJlZDpcbiAgICAgKiBXaGVuIFBlcmlvZFVuaXQgPSBXZWVrLCB0aGUgdmFsdWVzIGFyZToge1wiMVwiLCBcIjJcIiwgXCIzXCJ9XG4gICAgICogV2hlbiBQZXJpb2RVbml0ID0gTW9udGgsIHRoZSB2YWx1ZSBpcyB7XCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI2XCIsIFwiMTJcIn1cbiAgICAgKiBEZWZhdWx0IHRvIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyQXV0b1JlbmV3UGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VyRGF0YURpc2s6IFdoZXRoZXIgdG8gbW91bnQgdGhlIGRhdGEgZGlzay4gVGhlIG9wdGlvbnMgYXJlIGFzIGZvbGxvd3M6XG4gICAgICogdHJ1ZTogaW5kaWNhdGVzIHRoYXQgdGhlIHdvcmtlciBub2RlIG1vdW50cyBkYXRhIGRpc2tzLlxuICAgICAqIGZhbHNlOiBpbmRpY2F0ZXMgdGhhdCB0aGUgd29ya2VyIG5vZGUgZG9lcyBub3QgbW91bnQgZGF0YSBkaXNrcy5cbiAgICAgKiBEZWZhdWx0IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlckRhdGFEaXNrPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdvcmtlckRhdGFEaXNrczogQSBjb21iaW5hdGlvbiBvZiBjb25maWd1cmF0aW9ucyBzdWNoIGFzIHdvcmtlciBkYXRhIGRpc2sgdHlwZSBhbmQgc2l6ZS4gVGhpcyBwYXJhbWV0ZXIgaXMgdmFsaWQgb25seSB3aGVuIHRoZSB3b3JrZXIgbm9kZSBkYXRhIGRpc2sgaXMgbW91bnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJEYXRhRGlza3M/OiBBcnJheTxSb3NNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXIuV29ya2VyRGF0YURpc2tzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VySW5zdGFuY2VDaGFyZ2VUeXBlOiBXb3JrZXIgbm9kZSBwYXltZW50IHR5cGUuIFRoZSBvcHRpb25hbCB2YWx1ZXMgYXJlOlxuICAgICAqIFByZVBhaWQ6IHByZXBhaWRcbiAgICAgKiBQb3N0UGFpZDogUGF5IGFzIHlvdSBnb1xuICAgICAqIERlZmF1bHQgdG8gUG9zdFBhaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VySW5zdGFuY2VDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VyUGVyaW9kOiBUaGUgZHVyYXRpb24gb2YgdGhlIGFubnVhbCBhbmQgbW9udGhseSBzdWJzY3JpcHRpb24uIEl0IHRha2VzIGVmZmVjdCB3aGVuIHRoZSB3b3JrZXJfaW5zdGFuY2VfY2hhcmdlX3R5cGUgdmFsdWUgaXMgUHJlUGFpZCBhbmQgaXMgcmVxdWlyZWQuIFRoZSB2YWx1ZSByYW5nZSBpczpcbiAgICAgKiBXaGVuIFBlcmlvZFVuaXQgPSBXZWVrLCBQZXJpb2QgdmFsdWVzIGFyZToge1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwifVxuICAgICAqIFdoZW4gUGVyaW9kVW5pdCA9IE1vbnRoLCBQZXJpb2QgdmFsdWVzIGFyZToge1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTJcIiwgXCIyNFwiLCBcIjM2XCIsIFwiNDhcIiwgXCI2MFwifVxuICAgICAqIERlZmF1bHQgdG8gMS5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJQZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JrZXJQZXJpb2RVbml0OiBXaGVuIHlvdSBzcGVjaWZ5IFByZVBhaWQsIHlvdSBuZWVkIHRvIHNwZWNpZnkgdGhlIHBlcmlvZC4gVGhlIG9wdGlvbnMgYXJlOlxuICAgICAqIFdlZWs6IFRpbWUgaXMgbWVhc3VyZWQgaW4gd2Vla3NcbiAgICAgKiBNb250aDogdGltZSBpbiBtb250aHNcbiAgICAgKiBEZWZhdWx0IHRvIE1vbnRoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlclBlcmlvZFVuaXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnk6IFdvcmtlciBub2RlIHN5c3RlbSBkaXNrIHR5cGUuIFRoZSB2YWx1ZSBpbmNsdWRlczpcbiAgICAgKiBjbG91ZF9lZmZpY2llbmN5OiBlZmZpY2llbnQgY2xvdWQgZGlza1xuICAgICAqIGNsb3VkX3NzZDogU1NEIGNsb3VkIGRpc2tcbiAgICAgKiBEZWZhdWx0IHRvIGNsb3VkX2VmZmljaWVuY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyU3lzdGVtRGlza0NhdGVnb3J5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VyU3lzdGVtRGlza1NpemU6IFdvcmtlciBkaXNrIHN5c3RlbSBkaXNrIHNpemUsIHRoZSB1bml0IGlzIEdpQi5cbiAgICAgKiBEZWZhdWx0IHRvIDEyMC5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJTeXN0ZW1EaXNrU2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q1M6Ok1hbmFnZWRLdWJlcm5ldGVzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIE1hbmFnZWRLdWJlcm5ldGVzQ2x1c3RlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBDbHVzdGVyIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVGFza0lkOiBUYXNrIElELiBBdXRvbWF0aWNhbGx5IGFzc2lnbmVkIGJ5IHRoZSBzeXN0ZW0sIHRoZSB1c2VyIHF1ZXJpZXMgdGhlIHRhc2sgc3RhdHVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFza0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgV29ya2VyUmFtUm9sZU5hbWU6IFdvcmtlciByYW0gcm9sZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyV29ya2VyUmFtUm9sZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDUzo6TWFuYWdlZEt1YmVybmV0ZXNDbHVzdGVyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXIgPSBuZXcgUm9zTWFuYWdlZEt1YmVybmV0ZXNDbHVzdGVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZW5kcG9pbnRQdWJsaWNBY2Nlc3M6IHByb3BzLmVuZHBvaW50UHVibGljQWNjZXNzID09PSB1bmRlZmluZWQgfHwgcHJvcHMuZW5kcG9pbnRQdWJsaWNBY2Nlc3MgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLmVuZHBvaW50UHVibGljQWNjZXNzLFxuICAgICAgICAgICAgd29ya2VyUGVyaW9kOiBwcm9wcy53b3JrZXJQZXJpb2QgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy53b3JrZXJQZXJpb2QgPT09IG51bGwgPyAxIDogcHJvcHMud29ya2VyUGVyaW9kLFxuICAgICAgICAgICAgd29ya2VyUGVyaW9kVW5pdDogcHJvcHMud29ya2VyUGVyaW9kVW5pdCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLndvcmtlclBlcmlvZFVuaXQgPT09IG51bGwgPyAnTW9udGgnIDogcHJvcHMud29ya2VyUGVyaW9kVW5pdCxcbiAgICAgICAgICAgIGFkZG9uczogcHJvcHMuYWRkb25zLFxuICAgICAgICAgICAgd29ya2VyU3lzdGVtRGlza0NhdGVnb3J5OiBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnkgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnkgPT09IG51bGwgPyAnY2xvdWRfZWZmaWNpZW5jeScgOiBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnksXG4gICAgICAgICAgICB3b3JrZXJTeXN0ZW1EaXNrU2l6ZTogcHJvcHMud29ya2VyU3lzdGVtRGlza1NpemUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrU2l6ZSA9PT0gbnVsbCA/IDEyMCA6IHByb3BzLndvcmtlclN5c3RlbURpc2tTaXplLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgICAgIHRhaW50OiBwcm9wcy50YWludCxcbiAgICAgICAgICAgIGNsb3VkTW9uaXRvckZsYWdzOiBwcm9wcy5jbG91ZE1vbml0b3JGbGFncyA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmNsb3VkTW9uaXRvckZsYWdzID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5jbG91ZE1vbml0b3JGbGFncyxcbiAgICAgICAgICAgIHNlcnZpY2VDaWRyOiBwcm9wcy5zZXJ2aWNlQ2lkciA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnNlcnZpY2VDaWRyID09PSBudWxsID8gJzE3Mi4xOS4wLjAvMjAnIDogcHJvcHMuc2VydmljZUNpZHIsXG4gICAgICAgICAgICBwb2RWc3dpdGNoSWRzOiBwcm9wcy5wb2RWc3dpdGNoSWRzLFxuICAgICAgICAgICAgd29ya2VyQXV0b1JlbmV3OiBwcm9wcy53b3JrZXJBdXRvUmVuZXcgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy53b3JrZXJBdXRvUmVuZXcgPT09IG51bGwgPyB0cnVlIDogcHJvcHMud29ya2VyQXV0b1JlbmV3LFxuICAgICAgICAgICAgcHJveHlNb2RlOiBwcm9wcy5wcm94eU1vZGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5wcm94eU1vZGUgPT09IG51bGwgPyAnaXB0YWJsZXMnIDogcHJvcHMucHJveHlNb2RlLFxuICAgICAgICAgICAgZGlzYWJsZVJvbGxiYWNrOiBwcm9wcy5kaXNhYmxlUm9sbGJhY2sgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5kaXNhYmxlUm9sbGJhY2sgPT09IG51bGwgPyB0cnVlIDogcHJvcHMuZGlzYWJsZVJvbGxiYWNrLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgICAgIHdvcmtlckluc3RhbmNlVHlwZXM6IHByb3BzLndvcmtlckluc3RhbmNlVHlwZXMsXG4gICAgICAgICAgICBsb2dpblBhc3N3b3JkOiBwcm9wcy5sb2dpblBhc3N3b3JkLFxuICAgICAgICAgICAga3ViZXJuZXRlc1ZlcnNpb246IHByb3BzLmt1YmVybmV0ZXNWZXJzaW9uLFxuICAgICAgICAgICAgY29udGFpbmVyQ2lkcjogcHJvcHMuY29udGFpbmVyQ2lkciA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmNvbnRhaW5lckNpZHIgPT09IG51bGwgPyAnMTcyLjE2LjAuMC8xNicgOiBwcm9wcy5jb250YWluZXJDaWRyLFxuICAgICAgICAgICAgd29ya2VySW5zdGFuY2VDaGFyZ2VUeXBlOiBwcm9wcy53b3JrZXJJbnN0YW5jZUNoYXJnZVR5cGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy53b3JrZXJJbnN0YW5jZUNoYXJnZVR5cGUgPT09IG51bGwgPyAnUG9zdFBhaWQnIDogcHJvcHMud29ya2VySW5zdGFuY2VDaGFyZ2VUeXBlLFxuICAgICAgICAgICAga2V5UGFpcjogcHJvcHMua2V5UGFpcixcbiAgICAgICAgICAgIHZTd2l0Y2hJZHM6IHByb3BzLnZTd2l0Y2hJZHMsXG4gICAgICAgICAgICB3b3JrZXJEYXRhRGlza3M6IHByb3BzLndvcmtlckRhdGFEaXNrcyxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZDogcHJvcHMuc2VjdXJpdHlHcm91cElkLFxuICAgICAgICAgICAgdGltZW91dE1pbnM6IHByb3BzLnRpbWVvdXRNaW5zID09PSB1bmRlZmluZWQgfHwgcHJvcHMudGltZW91dE1pbnMgPT09IG51bGwgPyA2MCA6IHByb3BzLnRpbWVvdXRNaW5zLFxuICAgICAgICAgICAgY2x1c3RlclNwZWM6IHByb3BzLmNsdXN0ZXJTcGVjLFxuICAgICAgICAgICAgd29ya2VyRGF0YURpc2s6IHByb3BzLndvcmtlckRhdGFEaXNrID09PSB1bmRlZmluZWQgfHwgcHJvcHMud29ya2VyRGF0YURpc2sgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLndvcmtlckRhdGFEaXNrLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgbnVtT2ZOb2RlczogcHJvcHMubnVtT2ZOb2RlcyA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLm51bU9mTm9kZXMgPT09IG51bGwgPyAzIDogcHJvcHMubnVtT2ZOb2RlcyxcbiAgICAgICAgICAgIGVuY3J5cHRpb25Qcm92aWRlcktleTogcHJvcHMuZW5jcnlwdGlvblByb3ZpZGVyS2V5LFxuICAgICAgICAgICAgd29ya2VyQXV0b1JlbmV3UGVyaW9kOiBwcm9wcy53b3JrZXJBdXRvUmVuZXdQZXJpb2QgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy53b3JrZXJBdXRvUmVuZXdQZXJpb2QgPT09IG51bGwgPyAxIDogcHJvcHMud29ya2VyQXV0b1JlbmV3UGVyaW9kLFxuICAgICAgICAgICAgc25hdEVudHJ5OiBwcm9wcy5zbmF0RW50cnkgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5zbmF0RW50cnkgPT09IG51bGwgPyB0cnVlIDogcHJvcHMuc25hdEVudHJ5LFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc01hbmFnZWRLdWJlcm5ldGVzQ2x1c3RlcjtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gcm9zTWFuYWdlZEt1YmVybmV0ZXNDbHVzdGVyLmF0dHJDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYXR0clRhc2tJZCA9IHJvc01hbmFnZWRLdWJlcm5ldGVzQ2x1c3Rlci5hdHRyVGFza0lkO1xuICAgICAgICB0aGlzLmF0dHJXb3JrZXJSYW1Sb2xlTmFtZSA9IHJvc01hbmFnZWRLdWJlcm5ldGVzQ2x1c3Rlci5hdHRyV29ya2VyUmFtUm9sZU5hbWU7XG4gICAgfVxufVxuIl19