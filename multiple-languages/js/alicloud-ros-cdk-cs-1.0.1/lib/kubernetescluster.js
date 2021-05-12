"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KubernetesCluster = exports.KubernetesClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cs_generated_1 = require("./cs.generated");
Object.defineProperty(exports, "KubernetesClusterProperty", { enumerable: true, get: function () { return cs_generated_1.RosKubernetesCluster; } });
/**
 * A ROS resource type:  `ALIYUN::CS::KubernetesCluster`
 */
class KubernetesCluster extends ros.Resource {
    /**
     * Create a new `ALIYUN::CS::KubernetesCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosKubernetesCluster = new cs_generated_1.RosKubernetesCluster(this, id, {
            endpointPublicAccess: props.endpointPublicAccess ? props.endpointPublicAccess : false,
            workerPeriod: props.workerPeriod ? props.workerPeriod : 1,
            workerPeriodUnit: props.workerPeriodUnit ? props.workerPeriodUnit : 'Month',
            masterSystemDiskCategory: props.masterSystemDiskCategory ? props.masterSystemDiskCategory : 'cloud_ssd',
            addons: props.addons,
            masterSystemDiskSize: props.masterSystemDiskSize ? props.masterSystemDiskSize : 120,
            workerSystemDiskCategory: props.workerSystemDiskCategory ? props.workerSystemDiskCategory : 'cloud_efficiency',
            nodePortRange: props.nodePortRange ? props.nodePortRange : '30000-65535',
            masterCount: props.masterCount ? props.masterCount : 3,
            workerSystemDiskSize: props.workerSystemDiskSize ? props.workerSystemDiskSize : 120,
            sshFlags: props.sshFlags,
            masterVSwitchIds: props.masterVSwitchIds,
            name: props.name,
            taint: props.taint,
            masterDataDisks: props.masterDataDisks,
            cloudMonitorFlags: props.cloudMonitorFlags ? props.cloudMonitorFlags : false,
            serviceCidr: props.serviceCidr ? props.serviceCidr : '172.19.0.0/20',
            workerAutoRenew: props.workerAutoRenew ? props.workerAutoRenew : true,
            proxyMode: props.proxyMode ? props.proxyMode : 'iptables',
            tags: props.tags,
            disableRollback: props.disableRollback ? props.disableRollback : true,
            workerInstanceTypes: props.workerInstanceTypes,
            loginPassword: props.loginPassword,
            masterPeriod: props.masterPeriod ? props.masterPeriod : 1,
            kubernetesVersion: props.kubernetesVersion,
            masterInstanceChargeType: props.masterInstanceChargeType ? props.masterInstanceChargeType : 'PostPaid',
            containerCidr: props.containerCidr ? props.containerCidr : '172.16.0.0/16',
            cpuPolicy: props.cpuPolicy,
            workerInstanceChargeType: props.workerInstanceChargeType ? props.workerInstanceChargeType : 'PostPaid',
            keyPair: props.keyPair,
            masterInstanceTypes: props.masterInstanceTypes,
            workerDataDisks: props.workerDataDisks,
            securityGroupId: props.securityGroupId,
            timeoutMins: props.timeoutMins ? props.timeoutMins : 60,
            masterPeriodUnit: props.masterPeriodUnit ? props.masterPeriodUnit : 'Month',
            masterAutoRenewPeriod: props.masterAutoRenewPeriod ? props.masterAutoRenewPeriod : 1,
            workerDataDisk: props.workerDataDisk ? props.workerDataDisk : false,
            vpcId: props.vpcId,
            numOfNodes: props.numOfNodes ? props.numOfNodes : 3,
            masterAutoRenew: props.masterAutoRenew ? props.masterAutoRenew : true,
            workerAutoRenewPeriod: props.workerAutoRenewPeriod ? props.workerAutoRenewPeriod : 1,
            workerVSwitchIds: props.workerVSwitchIds,
            snatEntry: props.snatEntry ? props.snatEntry : true,
            masterDataDisk: props.masterDataDisk ? props.masterDataDisk : false,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKubernetesCluster;
        this.attrClusterId = rosKubernetesCluster.attrClusterId;
        this.attrTaskId = rosKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosKubernetesCluster.attrWorkerRamRoleName;
    }
}
exports.KubernetesCluster = KubernetesCluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ViZXJuZXRlc2NsdXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrdWJlcm5ldGVzY2x1c3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaURBQXNEO0FBRXJCLDBHQUZ4QixtQ0FBb0IsT0FFNkI7QUFvUzFEOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQXNCL0M7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUE2QixFQUFFLG1DQUEyQyxJQUFJO1FBQ3hILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLG1DQUFvQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDN0Qsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDckYsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE9BQU87WUFDM0Usd0JBQXdCLEVBQUUsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLFdBQVc7WUFDdkcsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ25GLHdCQUF3QixFQUFFLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENB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QUFjLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDbkUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3JFLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkQsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDdEUsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztRQUNsRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsb0JBQW9CLENBQUMscUJBQXFCLENBQUM7SUFDNUUsQ0FBQztDQUNKO0FBbkZELDhDQW1GQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0t1YmVybmV0ZXNDbHVzdGVyIH0gZnJvbSAnLi9jcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NLdWJlcm5ldGVzQ2x1c3RlciBhcyBLdWJlcm5ldGVzQ2x1c3RlclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDUzo6S3ViZXJuZXRlc0NsdXN0ZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc0NsdXN0ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXN0ZXJJbnN0YW5jZVR5cGVzOiBNYXN0ZXIgbm9kZSBFQ1Mgc3BlY2lmaWNhdGlvbiB0eXBlIGNvZGUuIEZvciBtb3JlIGRldGFpbHMsIHNlZSBJbnN0YW5jZSBUeXBlIEZhbWlseS4gRWFjaCBpdGVtIGNvcnJlc3BvbmQgdG8gTWFzdGVyVlN3aXRjaElkcy5cbiAgICAgKiBMaXN0IHNpemUgbXVzdCBiZSAzLCBJbnN0YW5jZSBUeXBlIGNhbiBiZSByZXBlYXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJJbnN0YW5jZVR5cGVzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFzdGVyVlN3aXRjaElkczogTWFzdGVyIG5vZGUgc3dpdGNoIElELiBUbyBlbnN1cmUgaGlnaCBhdmFpbGFiaWxpdHkgb2YgdGhlIGNsdXN0ZXIsIGl0IGlzIHJlY29tbWVuZGVkIHRoYXQgeW91IHNlbGVjdCAzIHN3aXRjaGVzIGFuZCBkaXN0cmlidXRlIHRoZW0gaW4gZGlmZmVyZW50IEF2YWlsYWJpbGl0eSBab25lcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJWU3dpdGNoSWRzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIGNsdXN0ZXIuIFRoZSBjbHVzdGVyIG5hbWUgY2FuIHVzZSB1cHBlcmNhc2UgYW5kIGxvd2VyY2FzZSBsZXR0ZXJzLCBDaGluZXNlIGNoYXJhY3RlcnMsIG51bWJlcnMsIGFuZCBkYXNoZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFZQQyBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VySW5zdGFuY2VUeXBlczogV29ya2VyIG5vZGUgRUNTIHNwZWNpZmljYXRpb24gdHlwZSBjb2RlLiBGb3IgbW9yZSBkZXRhaWxzLCBzZWUgSW5zdGFuY2UgU3BlY2lmaWNhdGlvbiBGYW1pbHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VySW5zdGFuY2VUeXBlczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdvcmtlclZTd2l0Y2hJZHM6IFRoZSB2aXJ0dWFsIHN3aXRjaCBJRCBvZiB0aGUgd29ya2VyIG5vZGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyVlN3aXRjaElkczogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFkZG9uczogQSBjb21iaW5hdGlvbiBvZiBhZGRvbiBwbHVnaW5zIGZvciBLdWJlcm5ldGVzIGNsdXN0ZXJzLlxuICAgICAqIE5ldHdvcmsgcGx1Zy1pbjogaW5jbHVkaW5nIEZsYW5uZWwgYW5kIFRlcndheSBuZXR3b3JrIHBsdWctaW5zXG4gICAgICogTG9nIHNlcnZpY2U6IE9wdGlvbmFsLiBJZiB0aGUgbG9nIHNlcnZpY2UgaXMgbm90IGVuYWJsZWQsIHRoZSBjbHVzdGVyIGF1ZGl0IGZ1bmN0aW9uIGNhbm5vdCBiZSB1c2VkLlxuICAgICAqIEluZ3Jlc3M6IFRoZSBpbnN0YWxsYXRpb24gb2YgdGhlIEluZ3Jlc3MgY29tcG9uZW50IGlzIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhZGRvbnM/OiBBcnJheTxSb3NLdWJlcm5ldGVzQ2x1c3Rlci5BZGRvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbG91ZE1vbml0b3JGbGFnczogV2hldGhlciB0byBpbnN0YWxsIHRoZSBjbG91ZCBtb25pdG9yaW5nIHBsdWdpbjpcbiAgICAgKiB0cnVlOiBpbmRpY2F0ZXMgaW5zdGFsbGF0aW9uXG4gICAgICogZmFsc2U6IERvIG5vdCBpbnN0YWxsXG4gICAgICogRGVmYXVsdCB0byBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsb3VkTW9uaXRvckZsYWdzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbnRhaW5lckNpZHI6IFRoZSBjb250YWluZXIgbmV0d29yayBzZWdtZW50IGNhbm5vdCBjb25mbGljdCB3aXRoIHRoZSBWUEMgbmV0d29yayBzZWdtZW50LiBXaGVuIHRoZSBzeXN0ZW0gaXMgc2VsZWN0ZWQgdG8gYXV0b21hdGljYWxseSBjcmVhdGUgYSBWUEMsIHRoZSBuZXR3b3JrIHNlZ21lbnQgMTcyLjE2LjAuMC8xNiBpcyB1c2VkIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFpbmVyQ2lkcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNwdVBvbGljeTogQ1BVIHBvbGljeS4gVGhlIGNsdXN0ZXIgdmVyc2lvbiBpcyAxLjEyLjYgYW5kIGFib3ZlIHN1cHBvcnRzIGJvdGggc3RhdGljIGFuZCBub25lIHN0cmF0ZWdpZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3B1UG9saWN5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGlzYWJsZVJvbGxiYWNrOiBXaGV0aGVyIHRoZSBmYWlsdXJlIHdhcyByb2xsZWQgYmFjazpcbiAgICAgKiB0cnVlOiBpbmRpY2F0ZXMgdGhhdCBpdCBmYWlscyB0byByb2xsIGJhY2tcbiAgICAgKiBmYWxzZTogcm9sbGJhY2sgZmFpbGVkXG4gICAgICogVGhlIGRlZmF1bHQgaXMgdHJ1ZS4gSWYgcm9sbGJhY2sgZmFpbHMsIHJlc291cmNlcyBwcm9kdWNlZCBkdXJpbmcgdGhlIGNyZWF0aW9uIHByb2Nlc3Mgd2lsbCBiZSByZWxlYXNlZC4gRmFsc2UgaXMgbm90IHJlY29tbWVuZGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2FibGVSb2xsYmFjaz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmRwb2ludFB1YmxpY0FjY2VzczogV2hldGhlciB0byBlbmFibGUgdGhlIHB1YmxpYyBuZXR3b3JrIEFQSSBTZXJ2ZXI6XG4gICAgICogdHJ1ZTogd2hpY2ggbWVhbnMgdGhhdCB0aGUgcHVibGljIG5ldHdvcmsgQVBJIFNlcnZlciBpcyBvcGVuLlxuICAgICAqIGZhbHNlOiBJZiBzZXQgdG8gZmFsc2UsIHRoZSBBUEkgc2VydmVyIG9uIHRoZSBwdWJsaWMgbmV0d29yayB3aWxsIG5vdCBiZSBjcmVhdGVkLCBvbmx5IHRoZSBBUEkgc2VydmVyIG9uIHRoZSBwcml2YXRlIG5ldHdvcmsgd2lsbCBiZSBjcmVhdGVkLkRlZmF1bHQgdG8gZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnRQdWJsaWNBY2Nlc3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkga2V5UGFpcjogS2V5IHBhaXIgbmFtZS4gU3BlY2lmeSBvbmUgb2YgS2V5UGFpciBvciBMb2dpblBhc3N3b3JkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVBhaXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBrdWJlcm5ldGVzVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgdGhlIEt1YmVybmV0ZXMgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBrdWJlcm5ldGVzVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvZ2luUGFzc3dvcmQ6IFNTSCBsb2dpbiBwYXNzd29yZC4gUGFzc3dvcmQgcnVsZXMgYXJlIDgtMzAgY2hhcmFjdGVycyBhbmQgY29udGFpbiB0aHJlZSBpdGVtcyAodXBwZXIgYW5kIGxvd2VyIGNhc2UgbGV0dGVycywgbnVtYmVycywgYW5kIHNwZWNpYWwgc3ltYm9scykuIFNwZWNpZnkgb25lIG9mIEtleVBhaXIgb3IgTG9naW5QYXNzd29yZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dpblBhc3N3b3JkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFzdGVyQXV0b1JlbmV3OiBXaGV0aGVyIHRoZSBtYXN0ZXIgbm9kZSBhdXRvbWF0aWNhbGx5IHJlbmV3cy4gSXQgdGFrZXMgZWZmZWN0IHdoZW4gdGhlIHZhbHVlIG9mIE1hc3Rlckluc3RhbmNlQ2hhcmdlVHlwZSBpcyBQcmVQYWlkLiBUaGUgb3B0aW9uYWwgdmFsdWVzIGFyZTpcbiAgICAgKiB0cnVlOiBhdXRvbWF0aWMgcmVuZXdhbFxuICAgICAqIGZhbHNlOiBkbyBub3QgcmVuZXcgYXV0b21hdGljYWxseVxuICAgICAqIERlZmF1bHQgdG8gdHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJBdXRvUmVuZXc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFzdGVyQXV0b1JlbmV3UGVyaW9kOiBBdXRvbWF0aWMgcmVuZXdhbCBjeWNsZSwgd2hpY2ggdGFrZXMgZWZmZWN0IHdoZW4gcHJlcGFpZCBhbmQgYXV0b21hdGljIHJlbmV3YWwgYXJlIHNlbGVjdGVkLCBhbmQgaXMgcmVxdWlyZWQ6XG4gICAgICogV2hlbiBQZXJpb2RVbml0ID0gV2VlaywgdGhlIHZhbHVlcyBhcmU6IHtcIjFcIiwgXCIyXCIsIFwiM1wifVxuICAgICAqIFdoZW4gUGVyaW9kVW5pdCA9IE1vbnRoLCB0aGUgdmFsdWUgaXMge1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNlwiLCBcIjEyXCJ9XG4gICAgICogRGVmYXVsdCB0byAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3RlckF1dG9SZW5ld1BlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1hc3RlckNvdW50OiBOdW1iZXIgb2YgbWFzdGVyIGluc3RhbmNlcy4gVGhlIHZhbHVlIGNhbiBiZSAzIG9yIDUuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVyQ291bnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXN0ZXJEYXRhRGlzazogV2hldGhlciB0aGUgbWFzdGVyIG5vZGUgbW91bnRzIGRhdGEgZGlza3MgY2FuIGJlIHNlbGVjdGVkIGFzOlxuICAgICAqIHRydWU6IG1vdW50IHRoZSBkYXRhIGRpc2tcbiAgICAgKiBmYWxzZTogbm8gZGF0YSBkaXNrIGlzIG1vdW50ZWQsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJEYXRhRGlzaz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXN0ZXJEYXRhRGlza3M6IE1hc3RlciBkYXRhIGRpc2sgdHlwZSwgc2l6ZSBhbmQgb3RoZXIgY29uZmlndXJhdGlvbiBjb21iaW5hdGlvbnMuIFRoaXMgcGFyYW1ldGVyIGlzIHZhbGlkIG9ubHkgd2hlbiB0aGUgbWFzdGVyIG5vZGUgZGF0YSBkaXNrIGlzIG1vdW50ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVyRGF0YURpc2tzPzogQXJyYXk8Um9zS3ViZXJuZXRlc0NsdXN0ZXIuTWFzdGVyRGF0YURpc2tzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFzdGVySW5zdGFuY2VDaGFyZ2VUeXBlOiBNYXN0ZXIgbm9kZSBwYXltZW50IHR5cGUuIFRoZSBvcHRpb25hbCB2YWx1ZXMgYXJlOlxuICAgICAqIFByZVBhaWQ6IHByZXBhaWRcbiAgICAgKiBQb3N0UGFpZDogUGF5IGFzIHlvdSBnb1xuICAgICAqIERlZmF1bHQgdG8gUG9zdFBhaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVySW5zdGFuY2VDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFzdGVyUGVyaW9kOiBUaGUgZHVyYXRpb24gb2YgdGhlIGFubnVhbCBzdWJzY3JpcHRpb24gYW5kIG1vbnRobHkgc3Vic2NyaXB0aW9uLiBJdCB0YWtlcyBlZmZlY3Qgd2hlbiB0aGUgbWFzdGVyX2luc3RhbmNlX2NoYXJnZV90eXBlIHZhbHVlIGlzIFByZVBhaWQgYW5kIGlzIGEgcmVxdWlyZWQgdmFsdWUuIFRoZSB2YWx1ZSByYW5nZSBpczpcbiAgICAgKiBXaGVuIFBlcmlvZFVuaXQgPSBXZWVrLCBQZXJpb2QgdmFsdWVzIGFyZToge1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwifVxuICAgICAqIFdoZW4gUGVyaW9kVW5pdCA9IE1vbnRoLCBQZXJpb2QgdmFsdWVzIGFyZToge1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTJcIiwgXCIyNFwiLCBcIjM2XCIsIFwiNDhcIiwgXCI2MFwifVxuICAgICAqIERlZmF1bHQgdG8gMS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJQZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXN0ZXJQZXJpb2RVbml0OiBXaGVuIHlvdSBzcGVjaWZ5IFByZVBhaWQsIHlvdSBuZWVkIHRvIHNwZWNpZnkgdGhlIHBlcmlvZC4gVGhlIG9wdGlvbnMgYXJlOlxuICAgICAqIFdlZWs6IFRpbWUgaXMgbWVhc3VyZWQgaW4gd2Vla3NcbiAgICAgKiBNb250aDogdGltZSBpbiBtb250aHNcbiAgICAgKiBEZWZhdWx0IHRvIE1vbnRoXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVyUGVyaW9kVW5pdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1hc3RlclN5c3RlbURpc2tDYXRlZ29yeTogTWFzdGVyIGRpc2sgc3lzdGVtIGRpc2sgdHlwZS4gVGhlIHZhbHVlIGluY2x1ZGVzOlxuICAgICAqIGNsb3VkX2VmZmljaWVuY3k6IGVmZmljaWVudCBjbG91ZCBkaXNrXG4gICAgICogY2xvdWRfc3NkOiBTU0QgY2xvdWQgZGlza1xuICAgICAqIGNsb3VkX2Vzc2Q6IEVTU0QgY2xvdWQgZGlza0RlZmF1bHQgdG8gY2xvdWRfc3NkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3RlclN5c3RlbURpc2tDYXRlZ29yeT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1hc3RlclN5c3RlbURpc2tTaXplOiBNYXN0ZXIgZGlzayBzeXN0ZW0gZGlzayBzaXplIGluIEdpQi5cbiAgICAgKiBEZWZhdWx0IHRvIDEyMC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJTeXN0ZW1EaXNrU2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5vZGVQb3J0UmFuZ2U6IE5vZGUgc2VydmljZSBwb3J0LiBUaGUgdmFsdWUgcmFuZ2UgaXMgWzMwMDAwLCA2NTUzNV0uXG4gICAgICogRGVmYXVsdCB0byAzMDAwMC02NTUzNS5cbiAgICAgKi9cbiAgICByZWFkb25seSBub2RlUG9ydFJhbmdlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbnVtT2ZOb2RlczogTnVtYmVyIG9mIHdvcmtlciBub2Rlcy4gVGhlIHJhbmdlIGlzIFswLDMwMF0uXG4gICAgICogRGVmYXVsdCB0byAzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG51bU9mTm9kZXM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm94eU1vZGU6IGt1YmUtcHJveHkgcHJveHkgbW9kZSwgc3VwcG9ydHMgYm90aCBpcHRhYmxlcyBhbmQgaXB2cyBtb2Rlcy4gVGhlIGRlZmF1bHQgaXMgaXB0YWJsZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJveHlNb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBTcGVjaWZpZXMgdGhlIElEIG9mIHRoZSBzZWN1cml0eSBncm91cCB0byB3aGljaCB0aGUgY2x1c3RlciBFQ1MgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2aWNlQ2lkcjogVGhlIHNlcnZpY2UgbmV0d29yayBzZWdtZW50IGNhbm5vdCBjb25mbGljdCB3aXRoIHRoZSBWUEMgbmV0d29yayBzZWdtZW50IGFuZCB0aGUgY29udGFpbmVyIG5ldHdvcmsgc2VnbWVudC4gV2hlbiB0aGUgc3lzdGVtIGlzIHNlbGVjdGVkIHRvIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGEgVlBDLCB0aGUgbmV0d29yayBzZWdtZW50IDE3Mi4xOS4wLjAvMjAgaXMgdXNlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VDaWRyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc25hdEVudHJ5OiBXaGV0aGVyIHRvIGNvbmZpZ3VyZSBTTkFUIGZvciB0aGUgbmV0d29yay5cbiAgICAgKiBXaGVuIGEgVlBDIGNhbiBhY2Nlc3MgdGhlIHB1YmxpYyBuZXR3b3JrIGVudmlyb25tZW50LCBzZXQgaXQgdG8gZmFsc2UuXG4gICAgICogV2hlbiBhbiBleGlzdGluZyBWUEMgY2Fubm90IGFjY2VzcyB0aGUgcHVibGljIG5ldHdvcmsgZW52aXJvbm1lbnQ6XG4gICAgICogV2hlbiBzZXQgdG8gVHJ1ZSwgU05BVCBpcyBjb25maWd1cmVkIGFuZCB0aGUgcHVibGljIG5ldHdvcmsgZW52aXJvbm1lbnQgY2FuIGJlIGFjY2Vzc2VkIGF0IHRoaXMgdGltZS5cbiAgICAgKiBJZiBzZXQgdG8gZmFsc2UsIGl0IG1lYW5zIHRoYXQgU05BVCBpcyBub3QgY29uZmlndXJlZCBhbmQgdGhlIHB1YmxpYyBuZXR3b3JrIGVudmlyb25tZW50IGNhbm5vdCBiZSBhY2Nlc3NlZCBhdCB0aGlzIHRpbWUuXG4gICAgICogRGVmYXVsdCB0byB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNuYXRFbnRyeT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzc2hGbGFnczogV2hldGhlciB0byBlbmFibGUgcHVibGljIG5ldHdvcmsgU1NIIGxvZ2luOlxuICAgICAqIHRydWU6IG9wZW5cbiAgICAgKiBmYWxzZTogbm90IG9wZW5cbiAgICAgKi9cbiAgICByZWFkb25seSBzc2hGbGFncz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWcgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0t1YmVybmV0ZXNDbHVzdGVyLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFpbnQ6IEl0IGlzIHVzZWQgdG8gbWFyayBub2RlcyB3aXRoIHRhaW50cy4gSXQgaXMgdXN1YWxseSB1c2VkIGZvciB0aGUgc2NoZWR1bGluZyBzdHJhdGVneSBvZiBQb2RzLiBUaGUgY29ycmVzcG9uZGluZyBjb25jZXB0IGlzOiB0b2xlcmFuY2UuIElmIHRoZXJlIGlzIGEgY29ycmVzcG9uZGluZyB0b2xlcmFuY2UgbWFyayBvbiB0aGUgUG9kcywgdGhlIHN0YWluIG9uIHRoZSBub2RlIGNhbiBiZSB0b2xlcmF0ZWQgYW5kIHNjaGVkdWxlZCB0byB0aGUgbm9kZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWludD86IEFycmF5PHsgW2tleTogc3RyaW5nXTogYW55IH0+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGltZW91dE1pbnM6IENsdXN0ZXIgcmVzb3VyY2Ugc3RhY2sgY3JlYXRpb24gdGltZW91dCwgaW4gbWludXRlcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgNjAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGltZW91dE1pbnM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JrZXJBdXRvUmVuZXc6IFdoZXRoZXIgdG8gZW5hYmxlIGF1dG9tYXRpYyByZW5ld2FsIG9mIFdvcmtlciBub2Rlcy4gVGhlIG9wdGlvbmFsIHZhbHVlcyBhcmU6XG4gICAgICogdHJ1ZTogYXV0b21hdGljIHJlbmV3YWxcbiAgICAgKiBmYWxzZTogZG8gbm90IHJlbmV3IGF1dG9tYXRpY2FsbHlcbiAgICAgKiBEZWZhdWx0IHRvIHRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyQXV0b1JlbmV3PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdvcmtlckF1dG9SZW5ld1BlcmlvZDogQXV0b21hdGljIHJlbmV3YWwgY3ljbGUsIHdoaWNoIHRha2VzIGVmZmVjdCB3aGVuIHByZXBhaWQgYW5kIGF1dG9tYXRpYyByZW5ld2FsIGFyZSBzZWxlY3RlZCwgYW5kIGlzIHJlcXVpcmVkOlxuICAgICAqIFdoZW4gUGVyaW9kVW5pdCA9IFdlZWssIHRoZSB2YWx1ZXMgYXJlOiB7XCIxXCIsIFwiMlwiLCBcIjNcIn1cbiAgICAgKiBXaGVuIFBlcmlvZFVuaXQgPSBNb250aCwgdGhlIHZhbHVlIGlzIHtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjZcIiwgXCIxMlwifVxuICAgICAqIERlZmF1bHQgdG8gMS5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJBdXRvUmVuZXdQZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JrZXJEYXRhRGlzazogV2hldGhlciB0byBtb3VudCB0aGUgZGF0YSBkaXNrLiBUaGUgb3B0aW9ucyBhcmUgYXMgZm9sbG93czpcbiAgICAgKiB0cnVlOiBpbmRpY2F0ZXMgdGhhdCB0aGUgd29ya2VyIG5vZGUgbW91bnRzIGRhdGEgZGlza3MuXG4gICAgICogZmFsc2U6IGluZGljYXRlcyB0aGF0IHRoZSB3b3JrZXIgbm9kZSBkb2VzIG5vdCBtb3VudCBkYXRhIGRpc2tzLlxuICAgICAqIERlZmF1bHQgdG8gZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyRGF0YURpc2s/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VyRGF0YURpc2tzOiBBIGNvbWJpbmF0aW9uIG9mIGNvbmZpZ3VyYXRpb25zIHN1Y2ggYXMgd29ya2VyIGRhdGEgZGlzayB0eXBlIGFuZCBzaXplLiBUaGlzIHBhcmFtZXRlciBpcyB2YWxpZCBvbmx5IHdoZW4gdGhlIHdvcmtlciBub2RlIGRhdGEgZGlzayBpcyBtb3VudGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlckRhdGFEaXNrcz86IEFycmF5PFJvc0t1YmVybmV0ZXNDbHVzdGVyLldvcmtlckRhdGFEaXNrc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdvcmtlckluc3RhbmNlQ2hhcmdlVHlwZTogV29ya2VyIG5vZGUgcGF5bWVudCB0eXBlLiBUaGUgb3B0aW9uYWwgdmFsdWVzIGFyZTpcbiAgICAgKiBQcmVQYWlkOiBwcmVwYWlkXG4gICAgICogUG9zdFBhaWQ6IFBheSBhcyB5b3UgZ29cbiAgICAgKiBEZWZhdWx0IHRvIFBvc3RQYWlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlckluc3RhbmNlQ2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdvcmtlclBlcmlvZDogVGhlIGR1cmF0aW9uIG9mIHRoZSBhbm51YWwgYW5kIG1vbnRobHkgc3Vic2NyaXB0aW9uLiBJdCB0YWtlcyBlZmZlY3Qgd2hlbiB0aGUgd29ya2VyX2luc3RhbmNlX2NoYXJnZV90eXBlIHZhbHVlIGlzIFByZVBhaWQgYW5kIGlzIHJlcXVpcmVkLiBUaGUgdmFsdWUgcmFuZ2UgaXM6XG4gICAgICogV2hlbiBQZXJpb2RVbml0ID0gV2VlaywgUGVyaW9kIHZhbHVlcyBhcmU6IHtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIn1cbiAgICAgKiBXaGVuIFBlcmlvZFVuaXQgPSBNb250aCwgUGVyaW9kIHZhbHVlcyBhcmU6IHtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEyXCIsIFwiMjRcIiwgXCIzNlwiLCBcIjQ4XCIsIFwiNjBcIn1cbiAgICAgKiBEZWZhdWx0IHRvIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyUGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VyUGVyaW9kVW5pdDogV2hlbiB5b3Ugc3BlY2lmeSBQcmVQYWlkLCB5b3UgbmVlZCB0byBzcGVjaWZ5IHRoZSBwZXJpb2QuIFRoZSBvcHRpb25zIGFyZTpcbiAgICAgKiBXZWVrOiBUaW1lIGlzIG1lYXN1cmVkIGluIHdlZWtzXG4gICAgICogTW9udGg6IHRpbWUgaW4gbW9udGhzXG4gICAgICogRGVmYXVsdCB0byBNb250aC5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJQZXJpb2RVbml0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VyU3lzdGVtRGlza0NhdGVnb3J5OiBXb3JrZXIgbm9kZSBzeXN0ZW0gZGlzayB0eXBlLiBUaGUgdmFsdWUgaW5jbHVkZXM6XG4gICAgICogY2xvdWRfZWZmaWNpZW5jeTogZWZmaWNpZW50IGNsb3VkIGRpc2tcbiAgICAgKiBjbG91ZF9zc2Q6IFNTRCBjbG91ZCBkaXNrXG4gICAgICogRGVmYXVsdCB0byBjbG91ZF9lZmZpY2llbmN5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlclN5c3RlbURpc2tDYXRlZ29yeT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdvcmtlclN5c3RlbURpc2tTaXplOiBXb3JrZXIgZGlzayBzeXN0ZW0gZGlzayBzaXplLCB0aGUgdW5pdCBpcyBHaUIuXG4gICAgICogRGVmYXVsdCB0byAxMjAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyU3lzdGVtRGlza1NpemU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkNTOjpLdWJlcm5ldGVzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIEt1YmVybmV0ZXNDbHVzdGVyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVySWQ6IENsdXN0ZXIgaW5zdGFuY2UgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUYXNrSWQ6IFRhc2sgSUQuIEF1dG9tYXRpY2FsbHkgYXNzaWduZWQgYnkgdGhlIHN5c3RlbSwgdGhlIHVzZXIgcXVlcmllcyB0aGUgdGFzayBzdGF0dXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYXNrSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBXb3JrZXJSYW1Sb2xlTmFtZTogV29ya2VyIHJhbSByb2xlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJXb3JrZXJSYW1Sb2xlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNTOjpLdWJlcm5ldGVzQ2x1c3RlcmAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogS3ViZXJuZXRlc0NsdXN0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NLdWJlcm5ldGVzQ2x1c3RlciA9IG5ldyBSb3NLdWJlcm5ldGVzQ2x1c3Rlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGVuZHBvaW50UHVibGljQWNjZXNzOiBwcm9wcy5lbmRwb2ludFB1YmxpY0FjY2VzcyA/IHByb3BzLmVuZHBvaW50UHVibGljQWNjZXNzIDogZmFsc2UsXG4gICAgICAgICAgICB3b3JrZXJQZXJpb2Q6IHByb3BzLndvcmtlclBlcmlvZCA/IHByb3BzLndvcmtlclBlcmlvZCA6IDEsXG4gICAgICAgICAgICB3b3JrZXJQZXJpb2RVbml0OiBwcm9wcy53b3JrZXJQZXJpb2RVbml0ID8gcHJvcHMud29ya2VyUGVyaW9kVW5pdCA6ICdNb250aCcsXG4gICAgICAgICAgICBtYXN0ZXJTeXN0ZW1EaXNrQ2F0ZWdvcnk6IHByb3BzLm1hc3RlclN5c3RlbURpc2tDYXRlZ29yeSA/IHByb3BzLm1hc3RlclN5c3RlbURpc2tDYXRlZ29yeSA6ICdjbG91ZF9zc2QnLFxuICAgICAgICAgICAgYWRkb25zOiBwcm9wcy5hZGRvbnMsXG4gICAgICAgICAgICBtYXN0ZXJTeXN0ZW1EaXNrU2l6ZTogcHJvcHMubWFzdGVyU3lzdGVtRGlza1NpemUgPyBwcm9wcy5tYXN0ZXJTeXN0ZW1EaXNrU2l6ZSA6IDEyMCxcbiAgICAgICAgICAgIHdvcmtlclN5c3RlbURpc2tDYXRlZ29yeTogcHJvcHMud29ya2VyU3lzdGVtRGlza0NhdGVnb3J5ID8gcHJvcHMud29ya2VyU3lzdGVtRGlza0NhdGVnb3J5IDogJ2Nsb3VkX2VmZmljaWVuY3knLFxuICAgICAgICAgICAgbm9kZVBvcnRSYW5nZTogcHJvcHMubm9kZVBvcnRSYW5nZSA/IHByb3BzLm5vZGVQb3J0UmFuZ2UgOiAnMzAwMDAtNjU1MzUnLFxuICAgICAgICAgICAgbWFzdGVyQ291bnQ6IHByb3BzLm1hc3RlckNvdW50ID8gcHJvcHMubWFzdGVyQ291bnQgOiAzLFxuICAgICAgICAgICAgd29ya2VyU3lzdGVtRGlza1NpemU6IHByb3BzLndvcmtlclN5c3RlbURpc2tTaXplID8gcHJvcHMud29ya2VyU3lzdGVtRGlza1NpemUgOiAxMjAsXG4gICAgICAgICAgICBzc2hGbGFnczogcHJvcHMuc3NoRmxhZ3MsXG4gICAgICAgICAgICBtYXN0ZXJWU3dpdGNoSWRzOiBwcm9wcy5tYXN0ZXJWU3dpdGNoSWRzLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgICAgIHRhaW50OiBwcm9wcy50YWludCxcbiAgICAgICAgICAgIG1hc3RlckRhdGFEaXNrczogcHJvcHMubWFzdGVyRGF0YURpc2tzLFxuICAgICAgICAgICAgY2xvdWRNb25pdG9yRmxhZ3M6IHByb3BzLmNsb3VkTW9uaXRvckZsYWdzID8gcHJvcHMuY2xvdWRNb25pdG9yRmxhZ3MgOiBmYWxzZSxcbiAgICAgICAgICAgIHNlcnZpY2VDaWRyOiBwcm9wcy5zZXJ2aWNlQ2lkciA/IHByb3BzLnNlcnZpY2VDaWRyIDogJzE3Mi4xOS4wLjAvMjAnLFxuICAgICAgICAgICAgd29ya2VyQXV0b1JlbmV3OiBwcm9wcy53b3JrZXJBdXRvUmVuZXcgPyBwcm9wcy53b3JrZXJBdXRvUmVuZXcgOiB0cnVlLFxuICAgICAgICAgICAgcHJveHlNb2RlOiBwcm9wcy5wcm94eU1vZGUgPyBwcm9wcy5wcm94eU1vZGUgOiAnaXB0YWJsZXMnLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgICAgIGRpc2FibGVSb2xsYmFjazogcHJvcHMuZGlzYWJsZVJvbGxiYWNrID8gcHJvcHMuZGlzYWJsZVJvbGxiYWNrIDogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmtlckluc3RhbmNlVHlwZXM6IHByb3BzLndvcmtlckluc3RhbmNlVHlwZXMsXG4gICAgICAgICAgICBsb2dpblBhc3N3b3JkOiBwcm9wcy5sb2dpblBhc3N3b3JkLFxuICAgICAgICAgICAgbWFzdGVyUGVyaW9kOiBwcm9wcy5tYXN0ZXJQZXJpb2QgPyBwcm9wcy5tYXN0ZXJQZXJpb2QgOiAxLFxuICAgICAgICAgICAga3ViZXJuZXRlc1ZlcnNpb246IHByb3BzLmt1YmVybmV0ZXNWZXJzaW9uLFxuICAgICAgICAgICAgbWFzdGVySW5zdGFuY2VDaGFyZ2VUeXBlOiBwcm9wcy5tYXN0ZXJJbnN0YW5jZUNoYXJnZVR5cGUgPyBwcm9wcy5tYXN0ZXJJbnN0YW5jZUNoYXJnZVR5cGUgOiAnUG9zdFBhaWQnLFxuICAgICAgICAgICAgY29udGFpbmVyQ2lkcjogcHJvcHMuY29udGFpbmVyQ2lkciA/IHByb3BzLmNvbnRhaW5lckNpZHIgOiAnMTcyLjE2LjAuMC8xNicsXG4gICAgICAgICAgICBjcHVQb2xpY3k6IHByb3BzLmNwdVBvbGljeSxcbiAgICAgICAgICAgIHdvcmtlckluc3RhbmNlQ2hhcmdlVHlwZTogcHJvcHMud29ya2VySW5zdGFuY2VDaGFyZ2VUeXBlID8gcHJvcHMud29ya2VySW5zdGFuY2VDaGFyZ2VUeXBlIDogJ1Bvc3RQYWlkJyxcbiAgICAgICAgICAgIGtleVBhaXI6IHByb3BzLmtleVBhaXIsXG4gICAgICAgICAgICBtYXN0ZXJJbnN0YW5jZVR5cGVzOiBwcm9wcy5tYXN0ZXJJbnN0YW5jZVR5cGVzLFxuICAgICAgICAgICAgd29ya2VyRGF0YURpc2tzOiBwcm9wcy53b3JrZXJEYXRhRGlza3MsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHRpbWVvdXRNaW5zOiBwcm9wcy50aW1lb3V0TWlucyA/IHByb3BzLnRpbWVvdXRNaW5zIDogNjAsXG4gICAgICAgICAgICBtYXN0ZXJQZXJpb2RVbml0OiBwcm9wcy5tYXN0ZXJQZXJpb2RVbml0ID8gcHJvcHMubWFzdGVyUGVyaW9kVW5pdCA6ICdNb250aCcsXG4gICAgICAgICAgICBtYXN0ZXJBdXRvUmVuZXdQZXJpb2Q6IHByb3BzLm1hc3RlckF1dG9SZW5ld1BlcmlvZCA/IHByb3BzLm1hc3RlckF1dG9SZW5ld1BlcmlvZCA6IDEsXG4gICAgICAgICAgICB3b3JrZXJEYXRhRGlzazogcHJvcHMud29ya2VyRGF0YURpc2sgPyBwcm9wcy53b3JrZXJEYXRhRGlzayA6IGZhbHNlLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgbnVtT2ZOb2RlczogcHJvcHMubnVtT2ZOb2RlcyA/IHByb3BzLm51bU9mTm9kZXMgOiAzLFxuICAgICAgICAgICAgbWFzdGVyQXV0b1JlbmV3OiBwcm9wcy5tYXN0ZXJBdXRvUmVuZXcgPyBwcm9wcy5tYXN0ZXJBdXRvUmVuZXcgOiB0cnVlLFxuICAgICAgICAgICAgd29ya2VyQXV0b1JlbmV3UGVyaW9kOiBwcm9wcy53b3JrZXJBdXRvUmVuZXdQZXJpb2QgPyBwcm9wcy53b3JrZXJBdXRvUmVuZXdQZXJpb2QgOiAxLFxuICAgICAgICAgICAgd29ya2VyVlN3aXRjaElkczogcHJvcHMud29ya2VyVlN3aXRjaElkcyxcbiAgICAgICAgICAgIHNuYXRFbnRyeTogcHJvcHMuc25hdEVudHJ5ID8gcHJvcHMuc25hdEVudHJ5IDogdHJ1ZSxcbiAgICAgICAgICAgIG1hc3RlckRhdGFEaXNrOiBwcm9wcy5tYXN0ZXJEYXRhRGlzayA/IHByb3BzLm1hc3RlckRhdGFEaXNrIDogZmFsc2UsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zS3ViZXJuZXRlc0NsdXN0ZXI7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJJZCA9IHJvc0t1YmVybmV0ZXNDbHVzdGVyLmF0dHJDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYXR0clRhc2tJZCA9IHJvc0t1YmVybmV0ZXNDbHVzdGVyLmF0dHJUYXNrSWQ7XG4gICAgICAgIHRoaXMuYXR0cldvcmtlclJhbVJvbGVOYW1lID0gcm9zS3ViZXJuZXRlc0NsdXN0ZXIuYXR0cldvcmtlclJhbVJvbGVOYW1lO1xuICAgIH1cbn1cbiJdfQ==