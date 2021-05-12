"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceGroup = exports.InstanceGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "InstanceGroupProperty", { enumerable: true, get: function () { return ecs_generated_1.RosInstanceGroup; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::InstanceGroup`
 */
class InstanceGroup extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::InstanceGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstanceGroup = new ecs_generated_1.RosInstanceGroup(this, id, {
            dedicatedHostId: props.dedicatedHostId,
            resourceGroupId: props.resourceGroupId,
            systemDiskDescription: props.systemDiskDescription,
            instanceChargeType: props.instanceChargeType ? props.instanceChargeType : 'PostPaid',
            ramRoleName: props.ramRoleName,
            systemDiskPerformanceLevel: props.systemDiskPerformanceLevel,
            imageId: props.imageId,
            systemDiskDiskName: props.systemDiskDiskName,
            tags: props.tags,
            hostName: props.hostName,
            launchTemplateName: props.launchTemplateName,
            vSwitchId: props.vSwitchId,
            period: props.period ? props.period : 1,
            launchTemplateId: props.launchTemplateId,
            deletionProtection: props.deletionProtection,
            securityGroupIds: props.securityGroupIds,
            internetChargeType: props.internetChargeType ? props.internetChargeType : 'PayByTraffic',
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut ? props.internetMaxBandwidthOut : 1,
            vpcId: props.vpcId,
            launchTemplateVersion: props.launchTemplateVersion,
            securityEnhancementStrategy: props.securityEnhancementStrategy,
            autoReleaseTime: props.autoReleaseTime,
            periodUnit: props.periodUnit ? props.periodUnit : 'Month',
            privateIpAddress: props.privateIpAddress,
            description: props.description,
            diskMappings: props.diskMappings,
            userData: props.userData,
            systemDiskSize: props.systemDiskSize,
            autoRenew: props.autoRenew ? props.autoRenew : 'False',
            ipv6Addresses: props.ipv6Addresses,
            maxAmount: props.maxAmount,
            systemDiskAutoSnapshotPolicyId: props.systemDiskAutoSnapshotPolicyId,
            networkType: props.networkType ? props.networkType : 'classic',
            ipv6AddressCount: props.ipv6AddressCount,
            spotPriceLimit: props.spotPriceLimit,
            instanceType: props.instanceType,
            allocatePublicIp: props.allocatePublicIp ? props.allocatePublicIp : true,
            spotStrategy: props.spotStrategy,
            passwordInherit: props.passwordInherit,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod ? props.autoRenewPeriod : 1,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized ? props.ioOptimized : 'optimized',
            zoneId: props.zoneId,
            hpcClusterId: props.hpcClusterId,
            securityGroupId: props.securityGroupId,
            systemDiskCategory: props.systemDiskCategory ? props.systemDiskCategory : 'cloud_efficiency',
            eniMappings: props.eniMappings,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn ? props.internetMaxBandwidthIn : 200,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceGroup;
        this.attrHostNames = rosInstanceGroup.attrHostNames;
        this.attrInnerIps = rosInstanceGroup.attrInnerIps;
        this.attrInstanceIds = rosInstanceGroup.attrInstanceIds;
        this.attrOrderId = rosInstanceGroup.attrOrderId;
        this.attrPrivateIps = rosInstanceGroup.attrPrivateIps;
        this.attrPublicIps = rosInstanceGroup.attrPublicIps;
        this.attrRelatedOrderIds = rosInstanceGroup.attrRelatedOrderIds;
        this.attrZoneIds = rosInstanceGroup.attrZoneIds;
    }
}
exports.InstanceGroup = InstanceGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2Vncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhbmNlZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBa1NsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBK0MzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksZ0NBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUI7WUFDbEQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFVBQVU7WUFDcEYsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLDBCQUEwQixFQUFFLEtBQUssQ0FBQywwQkFBMEI7WUFDNUQsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENB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Q0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDcEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3BELENBQUM7Q0FDSjtBQXhIRCxzQ0F3SEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NJbnN0YW5jZUdyb3VwIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2VHcm91cCBhcyBJbnN0YW5jZUdyb3VwUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVDUzo6SW5zdGFuY2VHcm91cGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZUdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW1hZ2VJZDogSW1hZ2UgSUQgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZVR5cGU6IEVjcyBpbnN0YW5jZSBzdXBwb3J0ZWQgaW5zdGFuY2UgdHlwZSwgbWFrZSBzdXJlIGl0IHNob3VsZCBiZSBjb3JyZWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWF4QW1vdW50OiBNYXggbnVtYmVyIG9mIGluc3RhbmNlcyB0byBjcmVhdGUsIHNob3VsZCBiZSBiaWdnZXIgdGhhbiAnTWluQW1vdW50JyBhbmQgc21hbGxlciB0aGFuIDEwMDAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF4QW1vdW50OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhbGxvY2F0ZVB1YmxpY0lwOiBUaGUgcHVibGljIGlwIGZvciBlY3MgaW5zdGFuY2UsIGlmIHByb3BlcnRpZXMgaXMgdHJ1ZSwgd2lsbCBhbGxvY2F0ZSBwdWJsaWMgaXAuIElmIHByb3BlcnR5IEludGVybmV0TWF4QmFuZHdpZHRoT3V0IHNldCB0byAwLCBpdCB3aWxsIG5vdCBhc3NpZ24gcHVibGljIGlwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsbG9jYXRlUHVibGljSXA/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1JlbGVhc2VUaW1lOiBBdXRvIHJlbGVhc2UgdGltZSBmb3IgY3JlYXRlZCBpbnN0YW5jZSwgRm9sbG93IElTTzg2MDEgc3RhbmRhcmQgdXNpbmcgVVRDIHRpbWUuIGZvcm1hdCBpcyAneXl5eS1NTS1kZFRISDptbTpzc1onLiBOb3QgYmlnZ2VyIHRoYW4gMyB5ZWFycyBmcm9tIHRoaXMgZGF5IG9ud2FyZHNcbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUmVsZWFzZVRpbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXc6IFdoZXRoZXIgcmVuZXcgdGhlIGZlZSBhdXRvbWF0aWNhbGx5PyBXaGVuIHRoZSBwYXJhbWV0ZXIgSW5zdGFuY2VDaGFyZ2VUeXBlIGlzIFByZVBhaWQsIGl0IHdpbGwgdGFrZSBlZmZlY3QuIFJhbmdlIG9mIHZhbHVlOlRydWU6IGF1dG9tYXRpYyByZW5ld2FsLkZhbHNlOiBubyBhdXRvbWF0aWMgcmVuZXdhbC4gRGVmYXVsdCB2YWx1ZSBpcyBGYWxzZS5PbGQgaW5zdGFuY2VzIHdpbGwgbm90IGJlIGNoYW5nZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1JlbmV3UGVyaW9kOiBUaGUgdGltZSBwZXJpb2Qgb2YgYXV0byByZW5ldy4gV2hlbiB0aGUgcGFyYW1ldGVyIEluc3RhbmNlQ2hhcmdlVHlwZSBpcyBQcmVQYWlkLCBpdCB3aWxsIHRha2UgZWZmZWN0Lkl0IGNvdWxkIGJlIDEsIDIsIDMsIDYsIDEyLiBEZWZhdWx0IHZhbHVlIGlzIDEuT2xkIGluc3RhbmNlcyB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZW5ld1BlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlZGljYXRlZEhvc3RJZDogd2hpY2ggZGVkaWNhdGVkIGhvc3Qgd2lsbCBiZSBkZXBsb3llZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlZGljYXRlZEhvc3RJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlbGV0aW9uUHJvdGVjdGlvbjogV2hldGhlciBhbiBpbnN0YW5jZSBjYW4gYmUgcmVsZWFzZWQgbWFudWFsbHkgdGhyb3VnaCB0aGUgY29uc29sZSBvciBBUEksIGRlbGV0aW9uIHByb3RlY3Rpb24gb25seSBzdXBwb3J0IHBvc3RQYWlkIGluc3RhbmNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRpb25Qcm90ZWN0aW9uPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlcGxveW1lbnRTZXRJZDogRGVwbG95bWVudCBzZXQgSUQuIFRoZSBjaGFuZ2Ugb2YgdGhlIHByb3BlcnR5IGRvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVwbG95bWVudFNldElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIHRoZSBpbnN0YW5jZSwgWzIsIDI1Nl0gY2hhcmFjdGVycy4gRG8gbm90IGZpbGwgb3IgZW1wdHksIHRoZSBkZWZhdWx0IGlzIGVtcHR5LiBPbGQgaW5zdGFuY2VzIHdpbGwgbm90IGJlIGNoYW5nZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNrTWFwcGluZ3M6IERpc2sgbWFwcGluZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAxNiBkaXNrcy5cbiAgICAgKiBJZiB0aGUgaW1hZ2UgY29udGFpbnMgYSBkYXRhIGRpc2ssIHlvdSBjYW4gc3BlY2lmeSBvdGhlciBwYXJhbWV0ZXJzIG9mIHRoZSBkYXRhIGRpc2sgdmlhIHRoZSBzYW1lIHZhbHVlIG9mIHBhcmFtZXRlciBcIkRldmljZVwiLiBJZiBwYXJhbWV0ZXIgXCJDYXRlZ29yeVwiIGlzIG5vdCBzcGVjaWZpZWQsIGl0IHdpbGwgYmUgY2xvdWRfZWZmaWNpZW5jeSBpbnN0ZWFkIG9mIFwiQ2F0ZWdvcnlcIiBvZiBkYXRhIGRpc2sgaW4gdGhlIGltYWdlLk9sZCBpbnN0YW5jZXMgd2lsbCBub3QgYmUgY2hhbmdlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNrTWFwcGluZ3M/OiBBcnJheTxSb3NJbnN0YW5jZUdyb3VwLkRpc2tNYXBwaW5nc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuaU1hcHBpbmdzOiBOZXR3b3JrSW50ZXJmYWNlIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMSBFTkkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5pTWFwcGluZ3M/OiBBcnJheTxSb3NJbnN0YW5jZUdyb3VwLkVuaU1hcHBpbmdzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaG9zdE5hbWU6IEhvc3QgbmFtZSBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZS4gYXQgbGVhc3QgMiBjaGFyYWN0ZXJzLCBhbmQgJy4nICctJyBJcyBub3QgdGhlIGZpcnN0IGFuZCBsYXN0IGNoYXJhY3RlcnMgYXMgaG9zdG5hbWUsIG5vdCBjb250aW51b3VzIHVzZS4gV2luZG93cyBwbGF0Zm9ybSBjYW4gYmUgdXAgdG8gMTUgY2hhcmFjdGVycywgYWxsb3dpbmcgbGV0dGVycyAod2l0aG91dCBsaW1pdGluZyBjYXNlKSwgbnVtYmVycyBhbmQgJy0nLCBhbmQgZG9lcyBub3Qgc3VwcG9ydCB0aGUgbnVtYmVyIG9mIHBvaW50cywgbm90IGFsbCBpcyBkaWdpdGFsICgnLicpLk90aGVyIChMaW51eCwgZXRjLikgcGxhdGZvcm0gdXAgdG8gMzAgY2hhcmFjdGVycywgYWxsb3dpbmcgc3VwcG9ydCBudW1iZXIgbXVsdGlwbGUgcG9pbnRzIGZvciB0aGUgcGVyaW9kIGJldHdlZW4gdGhlIHBvaW50cywgZWFjaCBwZXJtaXQgbGV0dGVycyAod2l0aG91dCBsaW1pdGluZyBjYXNlKSwgbnVtYmVycyBhbmQgJy0nIGNvbXBvbmVudHMuIFxuICAgICAqIFN1cHBvcnQgdG8gdXNlIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gc2V0IHRoZSBkaWZmZXJlbnQgaW5zdGFuY2UgbmFtZSBmb3IgZWFjaCBFQ1MgaW5zdGFuY2UuIEhvc3ROYW1lIGNvdWxkIGJlIHNwZWNpZmllZCBhcyAnbmFtZV9wcmVmaXhbYmVnaW5fbnVtYmVyLGJpdHNdbmFtZV9zdWZmaXgnLCBzdWNoIGFzICdob3N0WzEyMyw0XXRhaWwnLiBJZiB5b3UgY3JlYXRlcyAzIGluc3RhbmNlcyB3aXRoIGhvc3RuYW1lICdob3N0WzEyMyw0XXRhaWwnLCBhbGwgdGhlIGhvc3QgbmFtZXMgb2YgaW5zdGFuY2VzIGFyZSBob3N0MDEyM3RhaWwsIGhvc3QwMTI0dGFpbCwgaG9zdDAxMjV0YWlsLiBUaGUgJ25hbWVfcHJlZml4W2JlZ2luX251bWJlcixiaXRzXW5hbWVfc3VmZml4JyBzaG91bGQgZm9sbG93IHRob3NlIHJ1bGVzOiBcbiAgICAgKiAxLiAnbmFtZV9wcmVmaXgnIGlzIHJlcXVpcmVkLiBcbiAgICAgKiAyLiAnbmFtZV9zdWZmaXgnIGlzIG9wdGlvbmFsLiBcbiAgICAgKiAzLiBUaGUgbmFtZSByZWd1bGFyIGV4cHJlc3Npb24gY2FuJ3QgaW5jbHVkZSBhbnkgc3BhY2VzLiBcbiAgICAgKiA0LiBUaGUgJ2JpdHMnIG11c3QgYmUgaW4gcmFuZ2UgWzEsIDZdLiBcbiAgICAgKiA1LiBUaGUgJ2JlZ2luX251bWJlcicgbXVzdCBiZSBpbiByYW5nZSBbMCwgOTk5OTk5XS4gXG4gICAgICogNi4gWW91IGNvdWxkIG9ubHkgc3BlY2lmeSAnYmVnaW5fbnVtYmVyJy4gVGhlICdiaXRzJyB3aWxsIGJlIHNldCBhcyA2IGJ5IGRlZmF1bHQuIFxuICAgICAqIDcuIFlvdSBhbHNvIGNvdWxkIG9ubHkgc3BlY2lmeSB0aGUgW10gb3IgWyxdLiBUaGUgJ2JlZ2luX251bWJlcicgd2lsbCBiZSBzZXQgYXMgMCBieSBkZWZhdWx0LCB0aGUgJ2JpdHMnIHdpbGwgYmUgc2V0IGFzIDYgYnkgZGVmYXVsdC4gXG4gICAgICogOC4gSWYgdGhlIGJpdHMgb2YgJ2JlZ2luX251bWJlcicgaXMgbGVzcyB0aGFuIHRoZSAnYml0cycgeW91IHNwZWNpZmllZCwgbGlrZSBbMTIzNCwxXSwgdGhlICdiaXRzJyB3aWxsIGJlIHNldCBhcyA2IGJ5IGRlZmF1bHQuIFxuICAgICAqIFRoZSBob3N0IG5hbWUgaXMgc3BlY2lmaWVkIGJ5IHJlZ3VsYXIgZXhwcmVzc2lvbiB3b3JrcyBhZnRlciByZXN0YXJ0IGluc3RhbmNlIG1hbnVhbGx5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhvc3ROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaHBjQ2x1c3RlcklkOiBUaGUgSFBDIGNsdXN0ZXIgSUQgdG8gd2hpY2ggdGhlIGluc3RhbmNlIGJlbG9uZ3MuVGhlIGNoYW5nZSBvZiB0aGUgcHJvcGVydHkgZG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBocGNDbHVzdGVySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUNoYXJnZVR5cGU6IEluc3RhbmNlIENoYXJnZSB0eXBlLCBhbGxvd2VkIHZhbHVlOiBQcmVwYWlkIGFuZCBQb3N0cGFpZC4gSWYgc3BlY2lmaWVkIFByZXBhaWQsIHBsZWFzZSBlbnN1cmUgeW91IGhhdmUgc3VmZmljaWVudCBiYWxhbmNlIGluIHlvdXIgYWNjb3VudC4gT3IgaW5zdGFuY2UgY3JlYXRpb24gd2lsbCBiZSBmYWlsdXJlLiBEZWZhdWx0IHZhbHVlIGlzIFBvc3RwYWlkLk9sZCBpbnN0YW5jZXMgd2lsbCBub3QgYmUgY2hhbmdlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IERpc3BsYXkgbmFtZSBvZiB0aGUgaW5zdGFuY2UsIFsyLCAxMjhdIEVuZ2xpc2ggb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBpbiBzaXplLCBjYW4gY29udGFpbiBudW1iZXJzLCAnXycgb3IgJy4nLCAnLScuIFxuICAgICAqIFN1cHBvcnQgdG8gdXNlIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gc2V0IHRoZSBkaWZmZXJlbnQgaW5zdGFuY2UgbmFtZSBmb3IgZWFjaCBFQ1MgaW5zdGFuY2UuIEluc3RhbmNlTmFtZSBjb3VsZCBiZSBzcGVjaWZpZWQgYXMgJ25hbWVfcHJlZml4W2JlZ2luX251bWJlcixiaXRzXW5hbWVfc3VmZml4Jywgc3VjaCBhcyAndGVzdGluc3RhbmNlWzEyMyw0XXRhaWwnLiBJZiB5b3UgY3JlYXRlcyAzIGluc3RhbmNlcyB3aXRoIHRoZSBpbnN0YW5jZSBuYW1lICd0ZXN0aW5zdGFuY2VbMTIzLDRddGFpbCcsIGFsbCB0aGUgaW5zdGFuY2VzJyBuYW1lcyBhcmUgdGVzdGluc3RhbmNlMDEyM3RhaWwsIHRlc3RpbnN0YW5jZTAxMjR0YWlsLCB0ZXN0aW5zdGFuY2UwMTI1dGFpbC4gXG4gICAgICogVGhlICduYW1lX3ByZWZpeFtiZWdpbl9udW1iZXIsYml0c11uYW1lX3N1ZmZpeCcgc2hvdWxkIGZvbGxvdyB0aG9zZSBydWxlczogXG4gICAgICogMS4gJ25hbWVfcHJlZml4JyBpcyByZXF1aXJlZC4gXG4gICAgICogMi4gJ25hbWVfc3VmZml4JyBpcyBvcHRpb25hbC4gXG4gICAgICogMy4gVGhlIG5hbWUgcmVndWxhciBleHByZXNzaW9uIGNhbid0IGluY2x1ZGUgYW55IHNwYWNlcy4gXG4gICAgICogNC4gVGhlICdiaXRzJyBtdXN0IGJlIGluIHJhbmdlIFsxLCA2XS4gXG4gICAgICogNS4gVGhlICdiZWdpbl9udW1iZXInIG11c3QgYmUgaW4gcmFuZ2UgWzAsIDk5OTk5OV0uIFxuICAgICAqIDYuIFlvdSBjb3VsZCBvbmx5IHNwZWNpZnkgJ2JlZ2luX251bWJlcicuIFRoZSAnYml0cycgd2lsbCBiZSBzZXQgYXMgNiBieSBkZWZhdWx0LiBcbiAgICAgKiA3LiBZb3UgYWxzbyBjb3VsZCBvbmx5IHNwZWNpZnkgdGhlIFtdIG9yIFssXS4gVGhlICdiZWdpbl9udW1iZXInIHdpbGwgYmUgc2V0IGFzIDAgYnkgZGVmYXVsdCwgdGhlICdiaXRzJyB3aWxsIGJlIHNldCBhcyA2IGJ5IGRlZmF1bHQuIFxuICAgICAqIDguIElmIHRoZSBiaXRzIG9mICdiZWdpbl9udW1iZXInIGlzIGxlc3MgdGhhbiB0aGUgJ2JpdHMnIHlvdSBzcGVjaWZpZWQsIGxpa2UgWzEyMzQsMV0sIHRoZSAnYml0cycgd2lsbCBiZSBzZXQgYXMgNiBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGludGVybmV0Q2hhcmdlVHlwZTogSW5zdGFuY2UgaW50ZXJuZXQgYWNjZXNzIGNoYXJnZSB0eXBlLlN1cHBvcnQgJ1BheUJ5QmFuZHdpZHRoJyBhbmQgJ1BheUJ5VHJhZmZpYycgb25seS4gRGVmYXVsdCBpcyBQYXlCeVRyYWZmaWNcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldENoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnRlcm5ldE1heEJhbmR3aWR0aEluOiBNYXggaW50ZXJuZXQgb3V0IGJhbmQgd2lkdGggc2V0dGluZywgdW5pdCBpbiBNYnBzKE1lZ2EgYml0IHBlciBzZWNvbmQpLiBUaGUgcmFuZ2UgaXMgWzEsMjAwXSwgZGVmYXVsdCBpcyAyMDAgTWJwcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldE1heEJhbmR3aWR0aEluPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQ6IFNldCBpbnRlcm5ldCBvdXRwdXQgYmFuZHdpZHRoIG9mIGluc3RhbmNlLiBVbml0IGlzIE1icHMoTWVnYSBiaXQgcGVyIHNlY29uZCkuIFJhbmdlIGlzIFswLDIwMF0uIERlZmF1bHQgaXMgMS5XaGlsZSB0aGUgcHJvcGVydHkgaXMgbm90IDAsIHB1YmxpYyBpcCB3aWxsIGJlIGFzc2lnbmVkIGZvciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldE1heEJhbmR3aWR0aE91dD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlvT3B0aW1pemVkOiBUaGUgJ29wdGltaXplZCcgaW5zdGFuY2UgY2FuIHByb3ZpZGUgYmV0dGVyIElPIHBlcmZvcm1hbmNlLiBTdXBwb3J0ICdub25lJyBhbmQgJ29wdGltaXplZCcgb25seSwgZGVmYXVsdCBpcyAnb3B0aW1pemVkJy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpb09wdGltaXplZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlwdjZBZGRyZXNzQ291bnQ6IFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHJhbmRvbWx5IGdlbmVyYXRlZCBJUHY2IGFkZHJlc3NlcyBmb3IgdGhlIGVsYXN0aWMgTklDLlxuICAgICAqIE5vdGUgWW91IGNhbm5vdCBzcGVjaWZ5IHRoZSBwYXJhbWV0ZXJzIElwdjZBZGRyZXNzZXMgYW5kIElwdjZBZGRyZXNzQ291bnQgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAgKiBUaGUgY2hhbmdlIG9mIHRoZSBwcm9wZXJ0eSBkb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlwdjZBZGRyZXNzQ291bnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpcHY2QWRkcmVzc2VzOiBTcGVjaWZ5IG9uZSBvciBtb3JlIElQdjYgYWRkcmVzc2VzIGZvciB0aGUgZWxhc3RpYyBOSUMuIEN1cnJlbnRseSwgdGhlIG1heGltdW0gbGlzdCBzaXplIGlzIDEuIEV4YW1wbGUgdmFsdWU6IDIwMDE6ZGI4OjEyMzQ6MWEwMDo6KioqIC5cbiAgICAgKiBOb3RlIFlvdSBjYW5ub3Qgc3BlY2lmeSB0aGUgcGFyYW1ldGVycyBJcHY2QWRkcmVzc2VzIGFuZCBJcHY2QWRkcmVzc0NvdW50IGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgICogVGhlIGNoYW5nZSBvZiB0aGUgcHJvcGVydHkgZG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpcHY2QWRkcmVzc2VzPzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGtleVBhaXJOYW1lOiBTU0gga2V5IHBhaXIgbmFtZS5PbGQgaW5zdGFuY2VzIHdpbGwgbm90IGJlIGNoYW5nZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkga2V5UGFpck5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsYXVuY2hUZW1wbGF0ZUlkOiBJRCBvZiBsYXVuY2ggdGVtcGxhdGUuIExhdW5jaCB0ZW1wbGF0ZSBpZCBvciBuYW1lIG11c3QgYmUgc3BlY2lmaWVkIHRvIHVzZSBsYXVuY2ggdGVtcGxhdGVcbiAgICAgKi9cbiAgICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGF1bmNoVGVtcGxhdGVOYW1lOiBOYW1lIG9mIGxhdW5jaCB0ZW1wbGF0ZS4gTGF1bmNoIHRlbXBsYXRlIGlkIG9yIG5hbWUgbXVzdCBiZSBzcGVjaWZpZWQgdG8gdXNlIGxhdW5jaCB0ZW1wbGF0ZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxhdW5jaFRlbXBsYXRlVmVyc2lvbjogVmVyc2lvbiBvZiBsYXVuY2ggdGVtcGxhdGUuIERlZmF1bHQgdmVyc2lvbiBpcyB1c2VkIGlmIHZlcnNpb24gaXMgbm90IHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZVZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXR3b3JrVHlwZTogSW5zdGFuY2UgbmV0d29yayB0eXBlLiBTdXBwb3J0ICd2cGMnIGFuZCAnY2xhc3NpYycsIGZvciBjb21wYXRpYmxlIHJlYXNvbiwgZGVmYXVsdCBpcyAnY2xhc3NpYycuIElmIHZzd2l0Y2ggaWQgYW5kIHZwYyBpZCBpcyBzcGVjaWZpZWQsIHRoZSBwcm9wZXJ0eSB3aWxsIGJlIGZvcmNlZCB0byBiZSBzZXQgdG8gJ3ZwYydcbiAgICAgKi9cbiAgICByZWFkb25seSBuZXR3b3JrVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhc3N3b3JkOiBQYXNzd29yZCBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZS4gTXVzdCBjb250YWluIGF0IGxlYXN0IDMgdHlwZXMgb2Ygc3BlY2lhbCBjaGFyYWN0ZXIsIGxvd2VyIGNoYXJhY3RlciwgdXBwZXIgY2hhcmFjdGVyLCBudW1iZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFzc3dvcmQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXNzd29yZEluaGVyaXQ6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHVzZSB0aGUgcGFzc3dvcmQgcHJlc2V0IGluIHRoZSBpbWFnZS4gVG8gdXNlIHRoZSBQYXNzd29yZEluaGVyaXQgcGFyYW1ldGVyLCB0aGUgUGFzc3dvcmQgcGFyYW1ldGVyIG11c3QgYmUgZW1wdHkgYW5kIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGF0IHRoZSBzZWxlY3RlZCBpbWFnZSBoYXMgYSBwYXNzd29yZCBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkSW5oZXJpdD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFByZXBhaWQgdGltZSBwZXJpb2QuIFVuaXQgaXMgbW9udGgsIGl0IGNvdWxkIGJlIGZyb20gMSB0byA5IG9yIDEyLCAyNCwgMzYsIDQ4LCA2MC4gRGVmYXVsdCB2YWx1ZSBpcyAxLk9sZCBpbnN0YW5jZXMgd2lsbCBub3QgYmUgY2hhbmdlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2RVbml0OiBVbml0IG9mIHByZXBhaWQgdGltZSBwZXJpb2QsIGl0IGNvdWxkIGJlIFdlZWsvTW9udGguIERlZmF1bHQgdmFsdWUgaXMgTW9udGguT2xkIGluc3RhbmNlcyB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZFVuaXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcml2YXRlSXBBZGRyZXNzOiBQcml2YXRlIElQIGZvciB0aGUgaW5zdGFuY2UgY3JlYXRlZC4gT25seSB3b3JrcyBmb3IgVlBDIGluc3RhbmNlIGFuZCBjYW5ub3QgZHVwbGljYXRlZCB3aXRoIGV4aXN0aW5nIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaXZhdGVJcEFkZHJlc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByYW1Sb2xlTmFtZTogSW5zdGFuY2UgUkFNIHJvbGUgbmFtZS4gVGhlIG5hbWUgaXMgcHJvdmlkZWQgYW5kIG1haW50YWluZWQgYnkgUmVzb3VyY2UgQWNjZXNzIE1hbmFnZW1lbnQgKFJBTSkgYW5kIGNhbiBiZSBxdWVyaWVkIHVzaW5nIExpc3RSb2xlcy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBSQU0gQVBJIENyZWF0ZVJvbGUgYW5kIExpc3RSb2xlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSByYW1Sb2xlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlFbmhhbmNlbWVudFN0cmF0ZWd5OlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5RW5oYW5jZW1lbnRTdHJhdGVneT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZDogU2VjdXJpdHkgZ3JvdXAgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS4gRm9yIGNsYXNzaWMgaW5zdGFuY2UgbmVlZCB0aGUgc2VjdXJpdHkgZ3JvdXAgbm90IGJlbG9uZyB0byBWUEMsIGZvciBWUEMgaW5zdGFuY2UsIHBsZWFzZSBtYWtlIHN1cmUgdGhlIHNlY3VyaXR5IGdyb3VwIGJlbG9uZyB0byBzcGVjaWZpZWQgVlBDLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZHM6IFRoZSBJRHMgb2Ygc2VjdXJpdHkgZ3JvdXBzIE4gdG8gd2hpY2ggdGhlIGluc3RhbmNlIGJlbG9uZ3MuIFRoZSB2YWxpZCB2YWx1ZXMgb2YgTiBhcmUgYmFzZWQgb24gdGhlIG1heGltdW0gbnVtYmVyIG9mIHNlY3VyaXR5IGdyb3VwcyB0byB3aGljaCBhbiBpbnN0YW5jZSBjYW4gYmVsb25nLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIFNlY3VyaXR5IGdyb3VwIGxpbWl0cy5Ob3RlOiBZb3UgY2Fubm90IHNwZWNpZnkgYm90aCBTZWN1cml0eUdyb3VwSWQgYW5kIFNlY3VyaXR5R3JvdXBJZHMgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzPzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNwb3RQcmljZUxpbWl0OiBUaGUgaG91cmx5IHByaWNlIHRocmVzaG9sZCBvZiBhIGluc3RhbmNlLCBhbmQgaXQgdGFrZXMgZWZmZWN0IG9ubHkgd2hlbiBwYXJhbWV0ZXIgSW5zdGFuY2VDaGFyZ2VUeXBlIGlzIFBvc3RQYWlkLiBUaHJlZSBkZWNpbWFscyBpcyBhbGxvd2VkIGF0IG1vc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BvdFByaWNlTGltaXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzcG90U3RyYXRlZ3k6IFRoZSBzcG90IHN0cmF0ZWd5IG9mIGEgUGF5LUFzLVlvdS1HbyBpbnN0YW5jZSwgYW5kIGl0IHRha2VzIGVmZmVjdCBvbmx5IHdoZW4gcGFyYW1ldGVyIEluc3RhbmNlQ2hhcmdlVHlwZSBpcyBQb3N0UGFpZC4gVmFsdWUgcmFuZ2U6IFwiTm9TcG90OiBBIHJlZ3VsYXIgUGF5LUFzLVlvdS1HbyBpbnN0YW5jZVwiLCBcIlNwb3RXaXRoUHJpY2VMaW1pdDogQSBwcmljZSB0aHJlc2hvbGQgZm9yIGEgc3BvdCBpbnN0YW5jZSwgXCJcIlNwb3RBc1ByaWNlR286IEEgcHJpY2UgdGhhdCBpcyBiYXNlZCBvbiB0aGUgaGlnaGVzdCBQYXktQXMtWW91LUdvIGluc3RhbmNlLiBcIkRlZmF1bHQgdmFsdWU6IE5vU3BvdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcG90U3RyYXRlZ3k/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzeXN0ZW1EaXNrQXV0b1NuYXBzaG90UG9saWN5SWQ6IEF1dG8gc25hcHNob3QgcG9saWN5IElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tBdXRvU25hcHNob3RQb2xpY3lJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5c3RlbURpc2tDYXRlZ29yeTogQ2F0ZWdvcnkgb2Ygc3lzdGVtIGRpc2suIERlZmF1bHQgaXMgY2xvdWRfZWZmaWNpZW5jeS4gc3VwcG9ydCBjbG91ZHxjbG91ZF9lZmZpY2llbmN5fGNsb3VkX3NzZHxjbG91ZF9lc3NkfGVwaGVtZXJhbF9zc2QuT2xkIGluc3RhbmNlcyB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tDYXRlZ29yeT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5c3RlbURpc2tEZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgY3JlYXRlZCBzeXN0ZW0gZGlzay5PbGQgaW5zdGFuY2VzIHdpbGwgbm90IGJlIGNoYW5nZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0Rlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza0Rpc2tOYW1lOiBOYW1lIG9mIGNyZWF0ZWQgc3lzdGVtIGRpc2suT2xkIGluc3RhbmNlcyB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tEaXNrTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5c3RlbURpc2tQZXJmb3JtYW5jZUxldmVsOiBUaGUgcGVyZm9ybWFuY2UgbGV2ZWwgb2YgdGhlIGVuaGFuY2VkIFNTRCB1c2VkIGFzIHRoZSBzeXN0ZW0gZGlzay5EZWZhdWx0IHZhbHVlOiBQTDEuIFZhbGlkIHZhbHVlczpQTDA6IEEgc2luZ2xlIGVuaGFuY2VkIFNTRCBkZWxpdmVycyB1cCB0byAxMCwwMDAgcmFuZG9tIHJlYWQvd3JpdGUgSU9QUy5QTDE6IEEgc2luZ2xlIGVuaGFuY2VkIFNTRCBkZWxpdmVycyB1cCB0byA1MCwwMDAgcmFuZG9tIHJlYWQvd3JpdGUgSU9QUy5QTDI6IEEgc2luZ2xlIGVuaGFuY2VkIFNTRCBkZWxpdmVycyB1cCB0byAxMDAsMDAwIHJhbmRvbSByZWFkL3dyaXRlIElPUFMuUEwzOiBBIHNpbmdsZSBlbmhhbmNlZCBTU0QgZGVsaXZlcnMgdXAgdG8gMSwwMDAsMDAwIHJhbmRvbSByZWFkL3dyaXRlIElPUFMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza1BlcmZvcm1hbmNlTGV2ZWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzeXN0ZW1EaXNrU2l6ZTogRGlzayBzaXplIG9mIHRoZSBzeXN0ZW0gZGlzaywgcmFuZ2UgZnJvbSAyMCB0byA1MDAgR0IuIElmIHlvdSBzcGVjaWZ5IHdpdGggeW91ciBvd24gaW1hZ2UsIG1ha2Ugc3VyZSB0aGUgc3lzdGVtIGRpc2sgc2l6ZSBiaWdnZXIgdGhhbiBpbWFnZSBzaXplLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tTaXplPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zSW5zdGFuY2VHcm91cC5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzZXJEYXRhOiBVc2VyIGRhdGEgdG8gcGFzcyB0byBpbnN0YW5jZS4gWzEsIDE2S0JdIGNoYXJhY3RlcnMuVXNlciBkYXRhIHNob3VsZCBub3QgYmUgYmFzZTY0IGVuY29kZWQuIElmIHlvdSB3YW50IHRvIHBhc3MgYmFzZTY0IGVuY29kZWQgc3RyaW5nIHRvIHRoZSBwcm9wZXJ0eSwgdXNlIGZ1bmN0aW9uIEZuOjpCYXNlNjREZWNvZGUgdG8gZGVjb2RlIHRoZSBiYXNlNjQgc3RyaW5nIGZpcnN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJEYXRhPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBWUEMgaWQgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIHZTd2l0Y2ggSWQgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IFRoZSBJRCBvZiB0aGUgem9uZSB0byB3aGljaCB0aGUgaW5zdGFuY2UgYmVsb25ncy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIFxuICAgICAqIGNhbGwgdGhlIERlc2NyaWJlWm9uZXMgb3BlcmF0aW9uIHRvIHF1ZXJ5IHRoZSBtb3N0IHJlY2VudCB6b25lIGxpc3QuIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgZW1wdHksIHdoaWNoIG1lYW5zIHJhbmRvbSBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpFQ1M6Okluc3RhbmNlR3JvdXBgXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZUdyb3VwIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBIb3N0TmFtZXM6IEhvc3QgbmFtZXMgb2YgY3JlYXRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckhvc3ROYW1lczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIElubmVySXBzOiBJbm5lciBJUCBhZGRyZXNzIGxpc3Qgb2YgdGhlIHNwZWNpZmllZCBpbnN0YW5jZS4gT25seSBmb3IgY2xhc3NpY2FsIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5uZXJJcHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZUlkczogVGhlIGluc3RhbmNlIGlkIGxpc3Qgb2YgY3JlYXRlZCBlY3MgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3JkZXJJZDogVGhlIG9yZGVyIGlkIGxpc3Qgb2YgY3JlYXRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9yZGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQcml2YXRlSXBzOiBQcml2YXRlIElQIGFkZHJlc3MgbGlzdCBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZS4gT25seSBmb3IgVlBDIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJpdmF0ZUlwczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFB1YmxpY0lwczogUHVibGljIElQIGFkZHJlc3MgbGlzdCBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clB1YmxpY0lwczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlbGF0ZWRPcmRlcklkczogVGhlIHJlbGF0ZWQgb3JkZXIgaWQgbGlzdCBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlbGF0ZWRPcmRlcklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFpvbmVJZHM6IFpvbmUgaWQgb2YgY3JlYXRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clpvbmVJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFQ1M6Okluc3RhbmNlR3JvdXBgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEluc3RhbmNlR3JvdXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NJbnN0YW5jZUdyb3VwID0gbmV3IFJvc0luc3RhbmNlR3JvdXAodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZWRpY2F0ZWRIb3N0SWQ6IHByb3BzLmRlZGljYXRlZEhvc3RJZCxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgc3lzdGVtRGlza0Rlc2NyaXB0aW9uOiBwcm9wcy5zeXN0ZW1EaXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbnN0YW5jZUNoYXJnZVR5cGU6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA/IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA6ICdQb3N0UGFpZCcsXG4gICAgICAgICAgICByYW1Sb2xlTmFtZTogcHJvcHMucmFtUm9sZU5hbWUsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrUGVyZm9ybWFuY2VMZXZlbDogcHJvcHMuc3lzdGVtRGlza1BlcmZvcm1hbmNlTGV2ZWwsXG4gICAgICAgICAgICBpbWFnZUlkOiBwcm9wcy5pbWFnZUlkLFxuICAgICAgICAgICAgc3lzdGVtRGlza0Rpc2tOYW1lOiBwcm9wcy5zeXN0ZW1EaXNrRGlza05hbWUsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgaG9zdE5hbWU6IHByb3BzLmhvc3ROYW1lLFxuICAgICAgICAgICAgbGF1bmNoVGVtcGxhdGVOYW1lOiBwcm9wcy5sYXVuY2hUZW1wbGF0ZU5hbWUsXG4gICAgICAgICAgICB2U3dpdGNoSWQ6IHByb3BzLnZTd2l0Y2hJZCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kID8gcHJvcHMucGVyaW9kIDogMSxcbiAgICAgICAgICAgIGxhdW5jaFRlbXBsYXRlSWQ6IHByb3BzLmxhdW5jaFRlbXBsYXRlSWQsXG4gICAgICAgICAgICBkZWxldGlvblByb3RlY3Rpb246IHByb3BzLmRlbGV0aW9uUHJvdGVjdGlvbixcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZHM6IHByb3BzLnNlY3VyaXR5R3JvdXBJZHMsXG4gICAgICAgICAgICBpbnRlcm5ldENoYXJnZVR5cGU6IHByb3BzLmludGVybmV0Q2hhcmdlVHlwZSA/IHByb3BzLmludGVybmV0Q2hhcmdlVHlwZSA6ICdQYXlCeVRyYWZmaWMnLFxuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiBwcm9wcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgICBkZXBsb3ltZW50U2V0SWQ6IHByb3BzLmRlcGxveW1lbnRTZXRJZCxcbiAgICAgICAgICAgIGludGVybmV0TWF4QmFuZHdpZHRoT3V0OiBwcm9wcy5pbnRlcm5ldE1heEJhbmR3aWR0aE91dCA/IHByb3BzLmludGVybmV0TWF4QmFuZHdpZHRoT3V0IDogMSxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIGxhdW5jaFRlbXBsYXRlVmVyc2lvbjogcHJvcHMubGF1bmNoVGVtcGxhdGVWZXJzaW9uLFxuICAgICAgICAgICAgc2VjdXJpdHlFbmhhbmNlbWVudFN0cmF0ZWd5OiBwcm9wcy5zZWN1cml0eUVuaGFuY2VtZW50U3RyYXRlZ3ksXG4gICAgICAgICAgICBhdXRvUmVsZWFzZVRpbWU6IHByb3BzLmF1dG9SZWxlYXNlVGltZSxcbiAgICAgICAgICAgIHBlcmlvZFVuaXQ6IHByb3BzLnBlcmlvZFVuaXQgPyBwcm9wcy5wZXJpb2RVbml0IDogJ01vbnRoJyxcbiAgICAgICAgICAgIHByaXZhdGVJcEFkZHJlc3M6IHByb3BzLnByaXZhdGVJcEFkZHJlc3MsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkaXNrTWFwcGluZ3M6IHByb3BzLmRpc2tNYXBwaW5ncyxcbiAgICAgICAgICAgIHVzZXJEYXRhOiBwcm9wcy51c2VyRGF0YSxcbiAgICAgICAgICAgIHN5c3RlbURpc2tTaXplOiBwcm9wcy5zeXN0ZW1EaXNrU2l6ZSxcbiAgICAgICAgICAgIGF1dG9SZW5ldzogcHJvcHMuYXV0b1JlbmV3ID8gcHJvcHMuYXV0b1JlbmV3IDogJ0ZhbHNlJyxcbiAgICAgICAgICAgIGlwdjZBZGRyZXNzZXM6IHByb3BzLmlwdjZBZGRyZXNzZXMsXG4gICAgICAgICAgICBtYXhBbW91bnQ6IHByb3BzLm1heEFtb3VudCxcbiAgICAgICAgICAgIHN5c3RlbURpc2tBdXRvU25hcHNob3RQb2xpY3lJZDogcHJvcHMuc3lzdGVtRGlza0F1dG9TbmFwc2hvdFBvbGljeUlkLFxuICAgICAgICAgICAgbmV0d29ya1R5cGU6IHByb3BzLm5ldHdvcmtUeXBlID8gcHJvcHMubmV0d29ya1R5cGUgOiAnY2xhc3NpYycsXG4gICAgICAgICAgICBpcHY2QWRkcmVzc0NvdW50OiBwcm9wcy5pcHY2QWRkcmVzc0NvdW50LFxuICAgICAgICAgICAgc3BvdFByaWNlTGltaXQ6IHByb3BzLnNwb3RQcmljZUxpbWl0LFxuICAgICAgICAgICAgaW5zdGFuY2VUeXBlOiBwcm9wcy5pbnN0YW5jZVR5cGUsXG4gICAgICAgICAgICBhbGxvY2F0ZVB1YmxpY0lwOiBwcm9wcy5hbGxvY2F0ZVB1YmxpY0lwID8gcHJvcHMuYWxsb2NhdGVQdWJsaWNJcCA6IHRydWUsXG4gICAgICAgICAgICBzcG90U3RyYXRlZ3k6IHByb3BzLnNwb3RTdHJhdGVneSxcbiAgICAgICAgICAgIHBhc3N3b3JkSW5oZXJpdDogcHJvcHMucGFzc3dvcmRJbmhlcml0LFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3BzLnBhc3N3b3JkLFxuICAgICAgICAgICAgYXV0b1JlbmV3UGVyaW9kOiBwcm9wcy5hdXRvUmVuZXdQZXJpb2QgPyBwcm9wcy5hdXRvUmVuZXdQZXJpb2QgOiAxLFxuICAgICAgICAgICAga2V5UGFpck5hbWU6IHByb3BzLmtleVBhaXJOYW1lLFxuICAgICAgICAgICAgaW9PcHRpbWl6ZWQ6IHByb3BzLmlvT3B0aW1pemVkID8gcHJvcHMuaW9PcHRpbWl6ZWQgOiAnb3B0aW1pemVkJyxcbiAgICAgICAgICAgIHpvbmVJZDogcHJvcHMuem9uZUlkLFxuICAgICAgICAgICAgaHBjQ2x1c3RlcklkOiBwcm9wcy5ocGNDbHVzdGVySWQsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHN5c3RlbURpc2tDYXRlZ29yeTogcHJvcHMuc3lzdGVtRGlza0NhdGVnb3J5ID8gcHJvcHMuc3lzdGVtRGlza0NhdGVnb3J5IDogJ2Nsb3VkX2VmZmljaWVuY3knLFxuICAgICAgICAgICAgZW5pTWFwcGluZ3M6IHByb3BzLmVuaU1hcHBpbmdzLFxuICAgICAgICAgICAgaW50ZXJuZXRNYXhCYW5kd2lkdGhJbjogcHJvcHMuaW50ZXJuZXRNYXhCYW5kd2lkdGhJbiA/IHByb3BzLmludGVybmV0TWF4QmFuZHdpZHRoSW4gOiAyMDAsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSW5zdGFuY2VHcm91cDtcbiAgICAgICAgdGhpcy5hdHRySG9zdE5hbWVzID0gcm9zSW5zdGFuY2VHcm91cC5hdHRySG9zdE5hbWVzO1xuICAgICAgICB0aGlzLmF0dHJJbm5lcklwcyA9IHJvc0luc3RhbmNlR3JvdXAuYXR0cklubmVySXBzO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkcyA9IHJvc0luc3RhbmNlR3JvdXAuYXR0ckluc3RhbmNlSWRzO1xuICAgICAgICB0aGlzLmF0dHJPcmRlcklkID0gcm9zSW5zdGFuY2VHcm91cC5hdHRyT3JkZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyUHJpdmF0ZUlwcyA9IHJvc0luc3RhbmNlR3JvdXAuYXR0clByaXZhdGVJcHM7XG4gICAgICAgIHRoaXMuYXR0clB1YmxpY0lwcyA9IHJvc0luc3RhbmNlR3JvdXAuYXR0clB1YmxpY0lwcztcbiAgICAgICAgdGhpcy5hdHRyUmVsYXRlZE9yZGVySWRzID0gcm9zSW5zdGFuY2VHcm91cC5hdHRyUmVsYXRlZE9yZGVySWRzO1xuICAgICAgICB0aGlzLmF0dHJab25lSWRzID0gcm9zSW5zdGFuY2VHcm91cC5hdHRyWm9uZUlkcztcbiAgICB9XG59XG4iXX0=