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
            endpointPublicAccess: props.endpointPublicAccess ? props.endpointPublicAccess : false,
            workerPeriod: props.workerPeriod ? props.workerPeriod : 1,
            workerPeriodUnit: props.workerPeriodUnit ? props.workerPeriodUnit : 'Month',
            addons: props.addons,
            workerSystemDiskCategory: props.workerSystemDiskCategory ? props.workerSystemDiskCategory : 'cloud_efficiency',
            workerSystemDiskSize: props.workerSystemDiskSize ? props.workerSystemDiskSize : 120,
            name: props.name,
            taint: props.taint,
            cloudMonitorFlags: props.cloudMonitorFlags ? props.cloudMonitorFlags : false,
            serviceCidr: props.serviceCidr ? props.serviceCidr : '172.19.0.0/20',
            workerAutoRenew: props.workerAutoRenew ? props.workerAutoRenew : true,
            proxyMode: props.proxyMode ? props.proxyMode : 'iptables',
            tags: props.tags,
            disableRollback: props.disableRollback ? props.disableRollback : true,
            workerInstanceTypes: props.workerInstanceTypes,
            loginPassword: props.loginPassword,
            kubernetesVersion: props.kubernetesVersion,
            containerCidr: props.containerCidr ? props.containerCidr : '172.16.0.0/16',
            keyPair: props.keyPair,
            workerInstanceChargeType: props.workerInstanceChargeType ? props.workerInstanceChargeType : 'PostPaid',
            vSwitchIds: props.vSwitchIds,
            workerDataDisks: props.workerDataDisks,
            securityGroupId: props.securityGroupId,
            timeoutMins: props.timeoutMins ? props.timeoutMins : 60,
            clusterSpec: props.clusterSpec,
            workerDataDisk: props.workerDataDisk ? props.workerDataDisk : false,
            vpcId: props.vpcId,
            numOfNodes: props.numOfNodes ? props.numOfNodes : 3,
            workerAutoRenewPeriod: props.workerAutoRenewPeriod ? props.workerAutoRenewPeriod : 1,
            snatEntry: props.snatEntry ? props.snatEntry : true,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosManagedKubernetesCluster;
        this.attrClusterId = rosManagedKubernetesCluster.attrClusterId;
        this.attrTaskId = rosManagedKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosManagedKubernetesCluster.attrWorkerRamRoleName;
    }
}
exports.ManagedKubernetesCluster = ManagedKubernetesCluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlZGt1YmVybmV0ZXNjbHVzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFuYWdlZGt1YmVybmV0ZXNjbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpREFBNkQ7QUFFckIsaUhBRi9CLDBDQUEyQixPQUVvQztBQXdNeEU7O0dBRUc7QUFDSCxNQUFhLHdCQUF5QixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0J0RDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9DLEVBQUUsbUNBQTJDLElBQUk7UUFDL0gsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLDJCQUEyQixHQUFHLElBQUksMENBQTJCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzRSxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNyRixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsT0FBTztZQUMzRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtZQUM5RyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsR0FBRztZQUNuRixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzVFLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxlQUFlO1lBQ3BFLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3JFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQ3pELElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNyRSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxlQUFlO1lBQzFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0Qix3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsVUFBVTtZQUN0RyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2RCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDbkUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ3RELEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsMkJBQTJCLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRywyQkFBMkIsQ0FBQyxhQUFhLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBRywyQkFBMkIsQ0FBQyxVQUFVLENBQUM7UUFDekQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLDJCQUEyQixDQUFDLHFCQUFxQixDQUFDO0lBQ25GLENBQUM7Q0FDSjtBQXJFRCw0REFxRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXIgfSBmcm9tICcuL2NzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc01hbmFnZWRLdWJlcm5ldGVzQ2x1c3RlciBhcyBNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q1M6Ok1hbmFnZWRLdWJlcm5ldGVzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgY2x1c3Rlci4gVGhlIGNsdXN0ZXIgbmFtZSBjYW4gdXNlIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMsIENoaW5lc2UgY2hhcmFjdGVycywgbnVtYmVycywgYW5kIGRhc2hlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNJZDogVlBDIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWRzOiBUaGUgdmlydHVhbCBzd2l0Y2ggSUQgb2YgdGhlIHdvcmtlciBub2RlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZHM6IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JrZXJJbnN0YW5jZVR5cGVzOiBXb3JrZXIgbm9kZSBFQ1Mgc3BlY2lmaWNhdGlvbiB0eXBlIGNvZGUuIEZvciBtb3JlIGRldGFpbHMsIHNlZSBJbnN0YW5jZSBTcGVjaWZpY2F0aW9uIEZhbWlseS5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJJbnN0YW5jZVR5cGVzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWRkb25zOiBBIGNvbWJpbmF0aW9uIG9mIGFkZG9uIHBsdWdpbnMgZm9yIEt1YmVybmV0ZXMgY2x1c3RlcnMuXG4gICAgICogTmV0d29yayBwbHVnLWluOiBpbmNsdWRpbmcgRmxhbm5lbCBhbmQgVGVyd2F5IG5ldHdvcmsgcGx1Zy1pbnNcbiAgICAgKiBMb2cgc2VydmljZTogT3B0aW9uYWwuIElmIHRoZSBsb2cgc2VydmljZSBpcyBub3QgZW5hYmxlZCwgdGhlIGNsdXN0ZXIgYXVkaXQgZnVuY3Rpb24gY2Fubm90IGJlIHVzZWQuXG4gICAgICogSW5ncmVzczogVGhlIGluc3RhbGxhdGlvbiBvZiB0aGUgSW5ncmVzcyBjb21wb25lbnQgaXMgZW5hYmxlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFkZG9ucz86IEFycmF5PFJvc01hbmFnZWRLdWJlcm5ldGVzQ2x1c3Rlci5BZGRvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbG91ZE1vbml0b3JGbGFnczogV2hldGhlciB0byBpbnN0YWxsIHRoZSBjbG91ZCBtb25pdG9yaW5nIHBsdWdpbjpcbiAgICAgKiB0cnVlOiBpbmRpY2F0ZXMgaW5zdGFsbGF0aW9uXG4gICAgICogZmFsc2U6IERvIG5vdCBpbnN0YWxsXG4gICAgICogRGVmYXVsdCB0byBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsb3VkTW9uaXRvckZsYWdzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNsdXN0ZXJTcGVjOiBUaGUgbWFuYWdlZCBjbHVzdGVyIHNwZWMuIFZhbHVlOlxuICAgICAqIGFjay5wcm8uc21hbGw6IFByb2Zlc3Npb25hbCBob3N0aW5nIGNsdXN0ZXIsIG5hbWVseTogXCJBQ0sgUHJvIHZlcnNpb24gY2x1c3RlclwiLlxuICAgICAqIGFjay5zdGFuZGFyZDogU3RhbmRhcmQgaG9zdGluZyBjbHVzdGVyLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IGFjay5zdGFuZGFyZC4gVGhlIHZhbHVlIGNhbiBiZSBlbXB0eS4gV2hlbiBpdCBpcyBlbXB0eSwgYSBzdGFuZGFyZCBtYW5hZ2VkIGNsdXN0ZXIgd2lsbCBiZSBjcmVhdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJTcGVjPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29udGFpbmVyQ2lkcjogVGhlIGNvbnRhaW5lciBuZXR3b3JrIHNlZ21lbnQgY2Fubm90IGNvbmZsaWN0IHdpdGggdGhlIFZQQyBuZXR3b3JrIHNlZ21lbnQuIFdoZW4gdGhlIHN5c3RlbSBpcyBzZWxlY3RlZCB0byBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBhIFZQQywgdGhlIG5ldHdvcmsgc2VnbWVudCAxNzIuMTYuMC4wLzE2IGlzIHVzZWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb250YWluZXJDaWRyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGlzYWJsZVJvbGxiYWNrOiBXaGV0aGVyIHRoZSBmYWlsdXJlIHdhcyByb2xsZWQgYmFjazpcbiAgICAgKiB0cnVlOiBpbmRpY2F0ZXMgdGhhdCBpdCBmYWlscyB0byByb2xsIGJhY2tcbiAgICAgKiBmYWxzZTogcm9sbGJhY2sgZmFpbGVkXG4gICAgICogVGhlIGRlZmF1bHQgaXMgdHJ1ZS4gSWYgcm9sbGJhY2sgZmFpbHMsIHJlc291cmNlcyBwcm9kdWNlZCBkdXJpbmcgdGhlIGNyZWF0aW9uIHByb2Nlc3Mgd2lsbCBiZSByZWxlYXNlZC4gRmFsc2UgaXMgbm90IHJlY29tbWVuZGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2FibGVSb2xsYmFjaz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmRwb2ludFB1YmxpY0FjY2VzczogV2hldGhlciB0byBlbmFibGUgdGhlIHB1YmxpYyBuZXR3b3JrIEFQSSBTZXJ2ZXI6XG4gICAgICogdHJ1ZTogd2hpY2ggbWVhbnMgdGhhdCB0aGUgcHVibGljIG5ldHdvcmsgQVBJIFNlcnZlciBpcyBvcGVuLlxuICAgICAqIGZhbHNlOiBJZiBzZXQgdG8gZmFsc2UsIHRoZSBBUEkgc2VydmVyIG9uIHRoZSBwdWJsaWMgbmV0d29yayB3aWxsIG5vdCBiZSBjcmVhdGVkLCBvbmx5IHRoZSBBUEkgc2VydmVyIG9uIHRoZSBwcml2YXRlIG5ldHdvcmsgd2lsbCBiZSBjcmVhdGVkLkRlZmF1bHQgdG8gZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnRQdWJsaWNBY2Nlc3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkga2V5UGFpcjogS2V5IHBhaXIgbmFtZS4gU3BlY2lmeSBvbmUgb2YgS2V5UGFpciBvciBMb2dpblBhc3N3b3JkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVBhaXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBrdWJlcm5ldGVzVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgdGhlIEt1YmVybmV0ZXMgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBrdWJlcm5ldGVzVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvZ2luUGFzc3dvcmQ6IFNTSCBsb2dpbiBwYXNzd29yZC4gUGFzc3dvcmQgcnVsZXMgYXJlIDgtMzAgY2hhcmFjdGVycyBhbmQgY29udGFpbiB0aHJlZSBpdGVtcyAodXBwZXIgYW5kIGxvd2VyIGNhc2UgbGV0dGVycywgbnVtYmVycywgYW5kIHNwZWNpYWwgc3ltYm9scykuIFNwZWNpZnkgb25lIG9mIEtleVBhaXIgb3IgTG9naW5QYXNzd29yZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dpblBhc3N3b3JkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbnVtT2ZOb2RlczogTnVtYmVyIG9mIHdvcmtlciBub2Rlcy4gVGhlIHJhbmdlIGlzIFswLDMwMF0uXG4gICAgICogRGVmYXVsdCB0byAzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG51bU9mTm9kZXM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm94eU1vZGU6IGt1YmUtcHJveHkgcHJveHkgbW9kZSwgc3VwcG9ydHMgYm90aCBpcHRhYmxlcyBhbmQgaXB2cyBtb2Rlcy4gVGhlIGRlZmF1bHQgaXMgaXB0YWJsZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJveHlNb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBTcGVjaWZpZXMgdGhlIElEIG9mIHRoZSBzZWN1cml0eSBncm91cCB0byB3aGljaCB0aGUgY2x1c3RlciBFQ1MgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2aWNlQ2lkcjogVGhlIHNlcnZpY2UgbmV0d29yayBzZWdtZW50IGNhbm5vdCBjb25mbGljdCB3aXRoIHRoZSBWUEMgbmV0d29yayBzZWdtZW50IGFuZCB0aGUgY29udGFpbmVyIG5ldHdvcmsgc2VnbWVudC4gV2hlbiB0aGUgc3lzdGVtIGlzIHNlbGVjdGVkIHRvIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGEgVlBDLCB0aGUgbmV0d29yayBzZWdtZW50IDE3Mi4xOS4wLjAvMjAgaXMgdXNlZCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VDaWRyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc25hdEVudHJ5OiBXaGV0aGVyIHRvIGNvbmZpZ3VyZSBTTkFUIGZvciB0aGUgbmV0d29yay5cbiAgICAgKiBXaGVuIGEgVlBDIGNhbiBhY2Nlc3MgdGhlIHB1YmxpYyBuZXR3b3JrIGVudmlyb25tZW50LCBzZXQgaXQgdG8gZmFsc2UuXG4gICAgICogV2hlbiBhbiBleGlzdGluZyBWUEMgY2Fubm90IGFjY2VzcyB0aGUgcHVibGljIG5ldHdvcmsgZW52aXJvbm1lbnQ6XG4gICAgICogV2hlbiBzZXQgdG8gVHJ1ZSwgU05BVCBpcyBjb25maWd1cmVkIGFuZCB0aGUgcHVibGljIG5ldHdvcmsgZW52aXJvbm1lbnQgY2FuIGJlIGFjY2Vzc2VkIGF0IHRoaXMgdGltZS5cbiAgICAgKiBJZiBzZXQgdG8gZmFsc2UsIGl0IG1lYW5zIHRoYXQgU05BVCBpcyBub3QgY29uZmlndXJlZCBhbmQgdGhlIHB1YmxpYyBuZXR3b3JrIGVudmlyb25tZW50IGNhbm5vdCBiZSBhY2Nlc3NlZCBhdCB0aGlzIHRpbWUuXG4gICAgICogRGVmYXVsdCB0byB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNuYXRFbnRyeT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWcgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc01hbmFnZWRLdWJlcm5ldGVzQ2x1c3Rlci5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhaW50OiBJdCBpcyB1c2VkIHRvIG1hcmsgbm9kZXMgd2l0aCB0YWludHMuIEl0IGlzIHVzdWFsbHkgdXNlZCBmb3IgdGhlIHNjaGVkdWxpbmcgc3RyYXRlZ3kgb2YgUG9kcy4gVGhlIGNvcnJlc3BvbmRpbmcgY29uY2VwdCBpczogdG9sZXJhbmNlLiBJZiB0aGVyZSBpcyBhIGNvcnJlc3BvbmRpbmcgdG9sZXJhbmNlIG1hcmsgb24gdGhlIFBvZHMsIHRoZSBzdGFpbiBvbiB0aGUgbm9kZSBjYW4gYmUgdG9sZXJhdGVkIGFuZCBzY2hlZHVsZWQgdG8gdGhlIG5vZGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFpbnQ/OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IGFueSB9PiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRpbWVvdXRNaW5zOiBDbHVzdGVyIHJlc291cmNlIHN0YWNrIGNyZWF0aW9uIHRpbWVvdXQsIGluIG1pbnV0ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDYwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXRNaW5zPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VyQXV0b1JlbmV3OiBXaGV0aGVyIHRvIGVuYWJsZSBhdXRvbWF0aWMgcmVuZXdhbCBvZiBXb3JrZXIgbm9kZXMuIFRoZSBvcHRpb25hbCB2YWx1ZXMgYXJlOlxuICAgICAqIHRydWU6IGF1dG9tYXRpYyByZW5ld2FsXG4gICAgICogZmFsc2U6IGRvIG5vdCByZW5ldyBhdXRvbWF0aWNhbGx5XG4gICAgICogRGVmYXVsdCB0byB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlckF1dG9SZW5ldz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JrZXJBdXRvUmVuZXdQZXJpb2Q6IEF1dG9tYXRpYyByZW5ld2FsIGN5Y2xlLCB3aGljaCB0YWtlcyBlZmZlY3Qgd2hlbiBwcmVwYWlkIGFuZCBhdXRvbWF0aWMgcmVuZXdhbCBhcmUgc2VsZWN0ZWQsIGFuZCBpcyByZXF1aXJlZDpcbiAgICAgKiBXaGVuIFBlcmlvZFVuaXQgPSBXZWVrLCB0aGUgdmFsdWVzIGFyZToge1wiMVwiLCBcIjJcIiwgXCIzXCJ9XG4gICAgICogV2hlbiBQZXJpb2RVbml0ID0gTW9udGgsIHRoZSB2YWx1ZSBpcyB7XCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI2XCIsIFwiMTJcIn1cbiAgICAgKiBEZWZhdWx0IHRvIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyQXV0b1JlbmV3UGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VyRGF0YURpc2s6IFdoZXRoZXIgdG8gbW91bnQgdGhlIGRhdGEgZGlzay4gVGhlIG9wdGlvbnMgYXJlIGFzIGZvbGxvd3M6XG4gICAgICogdHJ1ZTogaW5kaWNhdGVzIHRoYXQgdGhlIHdvcmtlciBub2RlIG1vdW50cyBkYXRhIGRpc2tzLlxuICAgICAqIGZhbHNlOiBpbmRpY2F0ZXMgdGhhdCB0aGUgd29ya2VyIG5vZGUgZG9lcyBub3QgbW91bnQgZGF0YSBkaXNrcy5cbiAgICAgKiBEZWZhdWx0IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlckRhdGFEaXNrPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdvcmtlckRhdGFEaXNrczogQSBjb21iaW5hdGlvbiBvZiBjb25maWd1cmF0aW9ucyBzdWNoIGFzIHdvcmtlciBkYXRhIGRpc2sgdHlwZSBhbmQgc2l6ZS4gVGhpcyBwYXJhbWV0ZXIgaXMgdmFsaWQgb25seSB3aGVuIHRoZSB3b3JrZXIgbm9kZSBkYXRhIGRpc2sgaXMgbW91bnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJEYXRhRGlza3M/OiBBcnJheTxSb3NNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXIuV29ya2VyRGF0YURpc2tzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VySW5zdGFuY2VDaGFyZ2VUeXBlOiBXb3JrZXIgbm9kZSBwYXltZW50IHR5cGUuIFRoZSBvcHRpb25hbCB2YWx1ZXMgYXJlOlxuICAgICAqIFByZVBhaWQ6IHByZXBhaWRcbiAgICAgKiBQb3N0UGFpZDogUGF5IGFzIHlvdSBnb1xuICAgICAqIERlZmF1bHQgdG8gUG9zdFBhaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VySW5zdGFuY2VDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VyUGVyaW9kOiBUaGUgZHVyYXRpb24gb2YgdGhlIGFubnVhbCBhbmQgbW9udGhseSBzdWJzY3JpcHRpb24uIEl0IHRha2VzIGVmZmVjdCB3aGVuIHRoZSB3b3JrZXJfaW5zdGFuY2VfY2hhcmdlX3R5cGUgdmFsdWUgaXMgUHJlUGFpZCBhbmQgaXMgcmVxdWlyZWQuIFRoZSB2YWx1ZSByYW5nZSBpczpcbiAgICAgKiBXaGVuIFBlcmlvZFVuaXQgPSBXZWVrLCBQZXJpb2QgdmFsdWVzIGFyZToge1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwifVxuICAgICAqIFdoZW4gUGVyaW9kVW5pdCA9IE1vbnRoLCBQZXJpb2QgdmFsdWVzIGFyZToge1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTJcIiwgXCIyNFwiLCBcIjM2XCIsIFwiNDhcIiwgXCI2MFwifVxuICAgICAqIERlZmF1bHQgdG8gMS5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJQZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JrZXJQZXJpb2RVbml0OiBXaGVuIHlvdSBzcGVjaWZ5IFByZVBhaWQsIHlvdSBuZWVkIHRvIHNwZWNpZnkgdGhlIHBlcmlvZC4gVGhlIG9wdGlvbnMgYXJlOlxuICAgICAqIFdlZWs6IFRpbWUgaXMgbWVhc3VyZWQgaW4gd2Vla3NcbiAgICAgKiBNb250aDogdGltZSBpbiBtb250aHNcbiAgICAgKiBEZWZhdWx0IHRvIE1vbnRoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtlclBlcmlvZFVuaXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnk6IFdvcmtlciBub2RlIHN5c3RlbSBkaXNrIHR5cGUuIFRoZSB2YWx1ZSBpbmNsdWRlczpcbiAgICAgKiBjbG91ZF9lZmZpY2llbmN5OiBlZmZpY2llbnQgY2xvdWQgZGlza1xuICAgICAqIGNsb3VkX3NzZDogU1NEIGNsb3VkIGRpc2tcbiAgICAgKiBEZWZhdWx0IHRvIGNsb3VkX2VmZmljaWVuY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya2VyU3lzdGVtRGlza0NhdGVnb3J5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd29ya2VyU3lzdGVtRGlza1NpemU6IFdvcmtlciBkaXNrIHN5c3RlbSBkaXNrIHNpemUsIHRoZSB1bml0IGlzIEdpQi5cbiAgICAgKiBEZWZhdWx0IHRvIDEyMC5cbiAgICAgKi9cbiAgICByZWFkb25seSB3b3JrZXJTeXN0ZW1EaXNrU2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q1M6Ok1hbmFnZWRLdWJlcm5ldGVzQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIE1hbmFnZWRLdWJlcm5ldGVzQ2x1c3RlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBDbHVzdGVyIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVGFza0lkOiBUYXNrIElELiBBdXRvbWF0aWNhbGx5IGFzc2lnbmVkIGJ5IHRoZSBzeXN0ZW0sIHRoZSB1c2VyIHF1ZXJpZXMgdGhlIHRhc2sgc3RhdHVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFza0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgV29ya2VyUmFtUm9sZU5hbWU6IFdvcmtlciByYW0gcm9sZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyV29ya2VyUmFtUm9sZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDUzo6TWFuYWdlZEt1YmVybmV0ZXNDbHVzdGVyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NNYW5hZ2VkS3ViZXJuZXRlc0NsdXN0ZXIgPSBuZXcgUm9zTWFuYWdlZEt1YmVybmV0ZXNDbHVzdGVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZW5kcG9pbnRQdWJsaWNBY2Nlc3M6IHByb3BzLmVuZHBvaW50UHVibGljQWNjZXNzID8gcHJvcHMuZW5kcG9pbnRQdWJsaWNBY2Nlc3MgOiBmYWxzZSxcbiAgICAgICAgICAgIHdvcmtlclBlcmlvZDogcHJvcHMud29ya2VyUGVyaW9kID8gcHJvcHMud29ya2VyUGVyaW9kIDogMSxcbiAgICAgICAgICAgIHdvcmtlclBlcmlvZFVuaXQ6IHByb3BzLndvcmtlclBlcmlvZFVuaXQgPyBwcm9wcy53b3JrZXJQZXJpb2RVbml0IDogJ01vbnRoJyxcbiAgICAgICAgICAgIGFkZG9uczogcHJvcHMuYWRkb25zLFxuICAgICAgICAgICAgd29ya2VyU3lzdGVtRGlza0NhdGVnb3J5OiBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnkgPyBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrQ2F0ZWdvcnkgOiAnY2xvdWRfZWZmaWNpZW5jeScsXG4gICAgICAgICAgICB3b3JrZXJTeXN0ZW1EaXNrU2l6ZTogcHJvcHMud29ya2VyU3lzdGVtRGlza1NpemUgPyBwcm9wcy53b3JrZXJTeXN0ZW1EaXNrU2l6ZSA6IDEyMCxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICB0YWludDogcHJvcHMudGFpbnQsXG4gICAgICAgICAgICBjbG91ZE1vbml0b3JGbGFnczogcHJvcHMuY2xvdWRNb25pdG9yRmxhZ3MgPyBwcm9wcy5jbG91ZE1vbml0b3JGbGFncyA6IGZhbHNlLFxuICAgICAgICAgICAgc2VydmljZUNpZHI6IHByb3BzLnNlcnZpY2VDaWRyID8gcHJvcHMuc2VydmljZUNpZHIgOiAnMTcyLjE5LjAuMC8yMCcsXG4gICAgICAgICAgICB3b3JrZXJBdXRvUmVuZXc6IHByb3BzLndvcmtlckF1dG9SZW5ldyA/IHByb3BzLndvcmtlckF1dG9SZW5ldyA6IHRydWUsXG4gICAgICAgICAgICBwcm94eU1vZGU6IHByb3BzLnByb3h5TW9kZSA/IHByb3BzLnByb3h5TW9kZSA6ICdpcHRhYmxlcycsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgZGlzYWJsZVJvbGxiYWNrOiBwcm9wcy5kaXNhYmxlUm9sbGJhY2sgPyBwcm9wcy5kaXNhYmxlUm9sbGJhY2sgOiB0cnVlLFxuICAgICAgICAgICAgd29ya2VySW5zdGFuY2VUeXBlczogcHJvcHMud29ya2VySW5zdGFuY2VUeXBlcyxcbiAgICAgICAgICAgIGxvZ2luUGFzc3dvcmQ6IHByb3BzLmxvZ2luUGFzc3dvcmQsXG4gICAgICAgICAgICBrdWJlcm5ldGVzVmVyc2lvbjogcHJvcHMua3ViZXJuZXRlc1ZlcnNpb24sXG4gICAgICAgICAgICBjb250YWluZXJDaWRyOiBwcm9wcy5jb250YWluZXJDaWRyID8gcHJvcHMuY29udGFpbmVyQ2lkciA6ICcxNzIuMTYuMC4wLzE2JyxcbiAgICAgICAgICAgIGtleVBhaXI6IHByb3BzLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrZXJJbnN0YW5jZUNoYXJnZVR5cGU6IHByb3BzLndvcmtlckluc3RhbmNlQ2hhcmdlVHlwZSA/IHByb3BzLndvcmtlckluc3RhbmNlQ2hhcmdlVHlwZSA6ICdQb3N0UGFpZCcsXG4gICAgICAgICAgICB2U3dpdGNoSWRzOiBwcm9wcy52U3dpdGNoSWRzLFxuICAgICAgICAgICAgd29ya2VyRGF0YURpc2tzOiBwcm9wcy53b3JrZXJEYXRhRGlza3MsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHRpbWVvdXRNaW5zOiBwcm9wcy50aW1lb3V0TWlucyA/IHByb3BzLnRpbWVvdXRNaW5zIDogNjAsXG4gICAgICAgICAgICBjbHVzdGVyU3BlYzogcHJvcHMuY2x1c3RlclNwZWMsXG4gICAgICAgICAgICB3b3JrZXJEYXRhRGlzazogcHJvcHMud29ya2VyRGF0YURpc2sgPyBwcm9wcy53b3JrZXJEYXRhRGlzayA6IGZhbHNlLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgbnVtT2ZOb2RlczogcHJvcHMubnVtT2ZOb2RlcyA/IHByb3BzLm51bU9mTm9kZXMgOiAzLFxuICAgICAgICAgICAgd29ya2VyQXV0b1JlbmV3UGVyaW9kOiBwcm9wcy53b3JrZXJBdXRvUmVuZXdQZXJpb2QgPyBwcm9wcy53b3JrZXJBdXRvUmVuZXdQZXJpb2QgOiAxLFxuICAgICAgICAgICAgc25hdEVudHJ5OiBwcm9wcy5zbmF0RW50cnkgPyBwcm9wcy5zbmF0RW50cnkgOiB0cnVlLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc01hbmFnZWRLdWJlcm5ldGVzQ2x1c3RlcjtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gcm9zTWFuYWdlZEt1YmVybmV0ZXNDbHVzdGVyLmF0dHJDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYXR0clRhc2tJZCA9IHJvc01hbmFnZWRLdWJlcm5ldGVzQ2x1c3Rlci5hdHRyVGFza0lkO1xuICAgICAgICB0aGlzLmF0dHJXb3JrZXJSYW1Sb2xlTmFtZSA9IHJvc01hbmFnZWRLdWJlcm5ldGVzQ2x1c3Rlci5hdHRyV29ya2VyUmFtUm9sZU5hbWU7XG4gICAgfVxufVxuIl19