"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return ecs_generated_1.RosInstance; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::Instance`
 */
class Instance extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstance = new ecs_generated_1.RosInstance(this, id, {
            dedicatedHostId: props.dedicatedHostId,
            privateIpAddress: props.privateIpAddress,
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            diskMappings: props.diskMappings,
            userData: props.userData,
            systemDiskSize: props.systemDiskSize,
            systemDiskDescription: props.systemDiskDescription,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            autoRenew: props.autoRenew === undefined || props.autoRenew === null ? 'False' : props.autoRenew,
            spotDuration: props.spotDuration,
            ramRoleName: props.ramRoleName,
            systemDiskPerformanceLevel: props.systemDiskPerformanceLevel,
            imageId: props.imageId,
            systemDiskDiskName: props.systemDiskDiskName,
            spotPriceLimit: props.spotPriceLimit,
            zoneIds: props.zoneIds,
            instanceType: props.instanceType,
            allocatePublicIp: props.allocatePublicIp === undefined || props.allocatePublicIp === null ? true : props.allocatePublicIp,
            tags: props.tags,
            hostName: props.hostName,
            spotStrategy: props.spotStrategy,
            passwordInherit: props.passwordInherit,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod === undefined || props.autoRenewPeriod === null ? 1 : props.autoRenewPeriod,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized === undefined || props.ioOptimized === null ? 'optimized' : props.ioOptimized,
            zoneId: props.zoneId,
            hpcClusterId: props.hpcClusterId,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            deletionProtection: props.deletionProtection,
            securityGroupIds: props.securityGroupIds,
            internetChargeType: props.internetChargeType === undefined || props.internetChargeType === null ? 'PayByTraffic' : props.internetChargeType,
            systemDiskCategory: props.systemDiskCategory === undefined || props.systemDiskCategory === null ? 'cloud_efficiency' : props.systemDiskCategory,
            spotInterruptionBehavior: props.spotInterruptionBehavior,
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut === undefined || props.internetMaxBandwidthOut === null ? 1 : props.internetMaxBandwidthOut,
            vpcId: props.vpcId,
            securityEnhancementStrategy: props.securityEnhancementStrategy,
            periodUnit: props.periodUnit === undefined || props.periodUnit === null ? 'Month' : props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrHostName = rosInstance.attrHostName;
        this.attrInnerIp = rosInstance.attrInnerIp;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrPrimaryNetworkInterfaceId = rosInstance.attrPrimaryNetworkInterfaceId;
        this.attrPrivateIp = rosInstance.attrPrivateIp;
        this.attrPublicIp = rosInstance.attrPublicIp;
        this.attrSecurityGroupIds = rosInstance.attrSecurityGroupIds;
        this.attrZoneId = rosInstance.attrZoneId;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBcU94Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBK0N0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUI7WUFDbEQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7WUFDdkksU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTO1lBQ2hHLFlBQVksRUFBRSxLQUFLLENBQUMs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QUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsNkJBQTZCLEdBQUcsV0FBVyxDQUFDLDZCQUE2QixDQUFDO1FBQy9FLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDN0MsQ0FBQztDQUNKO0FBaEhELDRCQWdIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0luc3RhbmNlIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2UgYXMgSW5zdGFuY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RUNTOjpJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGltYWdlSWQ6IEltYWdlIElEIHRvIGNyZWF0ZSBlY3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW1hZ2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VUeXBlOiBFY3MgaW5zdGFuY2Ugc3VwcG9ydGVkIGluc3RhbmNlIHR5cGUsIG1ha2Ugc3VyZSBpdCBzaG91bGQgYmUgY29ycmVjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFsbG9jYXRlUHVibGljSXA6IFRoZSBwdWJsaWMgaXAgZm9yIGVjcyBpbnN0YW5jZSwgaWYgcHJvcGVydGllcyBpcyB0cnVlLCB3aWxsIGFsbG9jYXRlIHB1YmxpYyBpcC4gSWYgcHJvcGVydHkgSW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQgc2V0IHRvIDAsIGl0IHdpbGwgbm90IGFzc2lnbiBwdWJsaWMgaXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxsb2NhdGVQdWJsaWNJcD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXc6IFdoZXRoZXIgcmVuZXcgdGhlIGZlZSBhdXRvbWF0aWNhbGx5PyBXaGVuIHRoZSBwYXJhbWV0ZXIgSW5zdGFuY2VDaGFyZ2VUeXBlIGlzIFByZVBhaWQsIGl0IHdpbGwgdGFrZSBlZmZlY3QuIFJhbmdlIG9mIHZhbHVlOlRydWU6IGF1dG9tYXRpYyByZW5ld2FsLkZhbHNlOiBubyBhdXRvbWF0aWMgcmVuZXdhbC4gRGVmYXVsdCB2YWx1ZSBpcyBGYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUmVuZXc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXdQZXJpb2Q6IFRoZSB0aW1lIHBlcmlvZCBvZiBhdXRvIHJlbmV3LiBXaGVuIHRoZSBwYXJhbWV0ZXIgSW5zdGFuY2VDaGFyZ2VUeXBlIGlzIFByZVBhaWQsIGl0IHdpbGwgdGFrZSBlZmZlY3QuSXQgY291bGQgYmUgMSwgMiwgMywgNiwgMTIsIDI0LCAzNiwgNDgsIDYwLiBEZWZhdWx0IHZhbHVlIGlzIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3UGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVkaWNhdGVkSG9zdElkOiB3aGljaCBkZWRpY2F0ZWQgaG9zdCB3aWxsIGJlIGRlcGxveWVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVkaWNhdGVkSG9zdElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVsZXRpb25Qcm90ZWN0aW9uOiBXaGV0aGVyIGFuIGluc3RhbmNlIGNhbiBiZSByZWxlYXNlZCBtYW51YWxseSB0aHJvdWdoIHRoZSBjb25zb2xlIG9yIEFQSSwgZGVsZXRpb24gcHJvdGVjdGlvbiBvbmx5IHN1cHBvcnQgcG9zdFBhaWQgaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvblByb3RlY3Rpb24/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVwbG95bWVudFNldElkOiBEZXBsb3ltZW50IHNldCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXBsb3ltZW50U2V0SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIGluc3RhbmNlLCBbMiwgMjU2XSBjaGFyYWN0ZXJzLiBEbyBub3QgZmlsbCBvciBlbXB0eSwgdGhlIGRlZmF1bHQgaXMgZW1wdHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNrTWFwcGluZ3M6IERpc2sgbWFwcGluZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAxNiBkaXNrcy5cbiAgICAgKiBJZiB0aGUgaW1hZ2UgY29udGFpbnMgYSBkYXRhIGRpc2ssIHlvdSBjYW4gc3BlY2lmeSBvdGhlciBwYXJhbWV0ZXJzIG9mIHRoZSBkYXRhIGRpc2sgdmlhIHRoZSBzYW1lIHZhbHVlIG9mIHBhcmFtZXRlciBcIkRldmljZVwiLiBJZiBwYXJhbWV0ZXIgXCJDYXRlZ29yeVwiIGlzIG5vdCBzcGVjaWZpZWQsIGl0IHdpbGwgYmUgY2xvdWRfZWZmaWNpZW5jeSBpbnN0ZWFkIG9mIFwiQ2F0ZWdvcnlcIiBvZiBkYXRhIGRpc2sgaW4gdGhlIGltYWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2tNYXBwaW5ncz86IEFycmF5PFJvc0luc3RhbmNlLkRpc2tNYXBwaW5nc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGhvc3ROYW1lOiBIb3N0IG5hbWUgb2YgY3JlYXRlZCBlY3MgaW5zdGFuY2UuIGF0IGxlYXN0IDIgY2hhcmFjdGVycywgYW5kICcuJyAnLScgSXMgbm90IHRoZSBmaXJzdCBhbmQgbGFzdCBjaGFyYWN0ZXJzIGFzIGhvc3RuYW1lLCBub3QgY29udGludW91cyB1c2UuIFdpbmRvd3MgcGxhdGZvcm0gY2FuIGJlIHVwIHRvIDE1IGNoYXJhY3RlcnMsIGFsbG93aW5nIGxldHRlcnMgKHdpdGhvdXQgbGltaXRpbmcgY2FzZSksIG51bWJlcnMgYW5kICctJywgYW5kIGRvZXMgbm90IHN1cHBvcnQgdGhlIG51bWJlciBvZiBwb2ludHMsIG5vdCBhbGwgaXMgZGlnaXRhbCAoJy4nKS5PdGhlciAoTGludXgsIGV0Yy4pIHBsYXRmb3JtIHVwIHRvIDY0IGNoYXJhY3RlcnMsIGFsbG93aW5nIHN1cHBvcnQgbnVtYmVyIG11bHRpcGxlIHBvaW50cyBmb3IgdGhlIHBlcmlvZCBiZXR3ZWVuIHRoZSBwb2ludHMsIGVhY2ggcGVybWl0IGxldHRlcnMgKHdpdGhvdXQgbGltaXRpbmcgY2FzZSksIG51bWJlcnMgYW5kICctJyBjb21wb25lbnRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhvc3ROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaHBjQ2x1c3RlcklkOiBUaGUgSFBDIGNsdXN0ZXIgSUQgdG8gd2hpY2ggdGhlIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaHBjQ2x1c3RlcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBJbnN0YW5jZSBDaGFyZ2UgdHlwZSwgYWxsb3dlZCB2YWx1ZTogUHJlcGFpZCBhbmQgUG9zdHBhaWQuIElmIHNwZWNpZmllZCBQcmVwYWlkLCBwbGVhc2UgZW5zdXJlIHlvdSBoYXZlIHN1ZmZpY2llbnQgYmFsYW5jZSBpbiB5b3VyIGFjY291bnQuIE9yIGluc3RhbmNlIGNyZWF0aW9uIHdpbGwgYmUgZmFpbHVyZS4gRGVmYXVsdCB2YWx1ZSBpcyBQb3N0cGFpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IERpc3BsYXkgbmFtZSBvZiB0aGUgaW5zdGFuY2UsIFsyLCAxMjhdIEVuZ2xpc2ggb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBpbiBzaXplLCBjYW4gY29udGFpbiBudW1iZXJzLCAnXycgb3IgJy4nLCAnLSdcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnRlcm5ldENoYXJnZVR5cGU6IEluc3RhbmNlIGludGVybmV0IGFjY2VzcyBjaGFyZ2UgdHlwZS5TdXBwb3J0ICdQYXlCeUJhbmR3aWR0aCcgYW5kICdQYXlCeVRyYWZmaWMnIG9ubHkuIERlZmF1bHQgaXMgUGF5QnlUcmFmZmljXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQ6IFNldCBpbnRlcm5ldCBvdXRwdXQgYmFuZHdpZHRoIG9mIGluc3RhbmNlLiBVbml0IGlzIE1icHMoTWVnYSBiaXQgcGVyIHNlY29uZCkuIFJhbmdlIGlzIFswLDIwMF0uIERlZmF1bHQgaXMgMS5XaGlsZSB0aGUgcHJvcGVydHkgaXMgbm90IDAsIHB1YmxpYyBpcCB3aWxsIGJlIGFzc2lnbmVkIGZvciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldE1heEJhbmR3aWR0aE91dD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlvT3B0aW1pemVkOiBUaGUgJ29wdGltaXplZCcgaW5zdGFuY2UgY2FuIHByb3ZpZGUgYmV0dGVyIElPIHBlcmZvcm1hbmNlLiBTdXBwb3J0ICdub25lJyBhbmQgJ29wdGltaXplZCcgb25seSwgZGVmYXVsdCBpcyAnb3B0aW1pemVkJy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpb09wdGltaXplZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGtleVBhaXJOYW1lOiBTU0gga2V5IHBhaXIgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBrZXlQYWlyTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhc3N3b3JkOiBQYXNzd29yZCBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZS4gTXVzdCBjb250YWluIGF0IGxlYXN0IDMgdHlwZXMgb2Ygc3BlY2lhbCBjaGFyYWN0ZXIsIGxvd2VyIGNoYXJhY3RlciwgdXBwZXIgY2hhcmFjdGVyLCBudW1iZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFzc3dvcmQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXNzd29yZEluaGVyaXQ6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHVzZSB0aGUgcGFzc3dvcmQgcHJlc2V0IGluIHRoZSBpbWFnZS4gVG8gdXNlIHRoZSBQYXNzd29yZEluaGVyaXQgcGFyYW1ldGVyLCB0aGUgUGFzc3dvcmQgcGFyYW1ldGVyIG11c3QgYmUgZW1wdHkgYW5kIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGF0IHRoZSBzZWxlY3RlZCBpbWFnZSBoYXMgYSBwYXNzd29yZCBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkSW5oZXJpdD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFByZXBhaWQgdGltZSBwZXJpb2QuIFVuaXQgaXMgbW9udGgsIGl0IGNvdWxkIGJlIGZyb20gMSB0byA5IG9yIDEyLCAyNCwgMzYsIDQ4LCA2MC4gRGVmYXVsdCB2YWx1ZSBpcyAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZFVuaXQ6IFVuaXQgb2YgcHJlcGFpZCB0aW1lIHBlcmlvZCwgaXQgY291bGQgYmUgV2Vlay9Nb250aC9ZZWFyLiBEZWZhdWx0IHZhbHVlIGlzIE1vbnRoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZFVuaXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcml2YXRlSXBBZGRyZXNzOiBQcml2YXRlIElQIGZvciB0aGUgaW5zdGFuY2UgY3JlYXRlZC4gT25seSB3b3JrcyBmb3IgVlBDIGluc3RhbmNlIGFuZCBjYW5ub3QgZHVwbGljYXRlZCB3aXRoIGV4aXN0aW5nIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaXZhdGVJcEFkZHJlc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByYW1Sb2xlTmFtZTogSW5zdGFuY2UgUkFNIHJvbGUgbmFtZS4gVGhlIG5hbWUgaXMgcHJvdmlkZWQgYW5kIG1haW50YWluZWQgYnkgUmVzb3VyY2UgQWNjZXNzIE1hbmFnZW1lbnQgKFJBTSkgYW5kIGNhbiBiZSBxdWVyaWVkIHVzaW5nIExpc3RSb2xlcy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBSQU0gQVBJIENyZWF0ZVJvbGUgYW5kIExpc3RSb2xlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSByYW1Sb2xlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlFbmhhbmNlbWVudFN0cmF0ZWd5OlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5RW5oYW5jZW1lbnRTdHJhdGVneT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZDogU2VjdXJpdHkgZ3JvdXAgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS4gRm9yIGNsYXNzaWMgaW5zdGFuY2UgbmVlZCB0aGUgc2VjdXJpdHkgZ3JvdXAgbm90IGJlbG9uZyB0byBWUEMsIGZvciBWUEMgaW5zdGFuY2UsIHBsZWFzZSBtYWtlIHN1cmUgdGhlIHNlY3VyaXR5IGdyb3VwIGJlbG9uZyB0byBzcGVjaWZpZWQgVlBDLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZHM6IFRoZSBJRCBsaXN0IG9mIHNlY3VyaXR5IGdyb3VwIHRvIHdoaWNoIHRvIGFzc2lnbiB0aGUgaW5zdGFuY2UuIFRoZSBtYXggbGVuZ3RoIGlzIGJhc2VkIG9uIHRoZSBtYXhpbXVtIG51bWJlciBvZiBzZWN1cml0eSBncm91cHMgdG8gd2hpY2ggYW4gaW5zdGFuY2UgY2FuIGJlbG9uZy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgXCJTZWN1cml0eSBncm91cCBsaW1pdHNcIiBzZWN0aW9uIGluIExpbWl0cy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNwb3REdXJhdGlvbjogVGhlIHByb3RlY3Rpb24gcGVyaW9kIG9mIHRoZSBwcmVlbXB0aWJsZSBpbnN0YW5jZS4gVW5pdDogaG91cnMuIFZhbGlkIHZhbHVlczogMCwgMSwgMiwgMywgNCwgNSwgYW5kIDYuXG4gICAgICogUHJvdGVjdGlvbiBwZXJpb2RzIG9mIDIsIDMsIDQsIDUsIGFuZCA2IGhvdXJzIGFyZSBpbiBpbnZpdGF0aW9uYWwgcHJldmlldy4gSWYgeW91IHdhbnQgdG8gc2V0IHRoaXMgcGFyYW1ldGVyIHRvIG9uZSBvZiB0aGVzZSB2YWx1ZXMsIHN1Ym1pdCBhIHRpY2tldC5cbiAgICAgKiBJZiB0aGlzIHBhcmFtZXRlciBpcyBzZXQgdG8gMCwgbm8gcHJvdGVjdGlvbiBwZXJpb2QgaXMgY29uZmlndXJlZCBmb3IgdGhlIHByZWVtcHRpYmxlIGluc3RhbmNlLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BvdER1cmF0aW9uPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BvdEludGVycnVwdGlvbkJlaGF2aW9yOiBUaGUgaW50ZXJydXB0aW9uIG1vZGUgb2YgdGhlIHByZWVtcHRpYmxlIGluc3RhbmNlLiBEZWZhdWx0IHZhbHVlOiBUZXJtaW5hdGUuIFNldCB0aGUgdmFsdWUgdG8gVGVybWluYXRlLCB3aGljaCBzcGVjaWZpZXMgdG8gcmVsZWFzZSB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BvdEludGVycnVwdGlvbkJlaGF2aW9yPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BvdFByaWNlTGltaXQ6IFRoZSBob3VybHkgcHJpY2UgdGhyZXNob2xkIG9mIGEgaW5zdGFuY2UsIGFuZCBpdCB0YWtlcyBlZmZlY3Qgb25seSB3aGVuIHBhcmFtZXRlciBJbnN0YW5jZUNoYXJnZVR5cGUgaXMgUG9zdFBhaWQuIFRocmVlIGRlY2ltYWxzIGlzIGFsbG93ZWQgYXQgbW9zdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcG90UHJpY2VMaW1pdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNwb3RTdHJhdGVneTogVGhlIHNwb3Qgc3RyYXRlZ3kgb2YgYSBQYXktQXMtWW91LUdvIGluc3RhbmNlLCBhbmQgaXQgdGFrZXMgZWZmZWN0IG9ubHkgd2hlbiBwYXJhbWV0ZXIgSW5zdGFuY2VDaGFyZ2VUeXBlIGlzIFBvc3RQYWlkLiBWYWx1ZSByYW5nZTogXCJOb1Nwb3Q6IEEgcmVndWxhciBQYXktQXMtWW91LUdvIGluc3RhbmNlXCIsIFwiU3BvdFdpdGhQcmljZUxpbWl0OiBBIHByaWNlIHRocmVzaG9sZCBmb3IgYSBzcG90IGluc3RhbmNlLCBcIlwiU3BvdEFzUHJpY2VHbzogQSBwcmljZSB0aGF0IGlzIGJhc2VkIG9uIHRoZSBoaWdoZXN0IFBheS1Bcy1Zb3UtR28gaW5zdGFuY2UuIFwiRGVmYXVsdCB2YWx1ZTogTm9TcG90LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNwb3RTdHJhdGVneT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5c3RlbURpc2tDYXRlZ29yeTogQ2F0ZWdvcnkgb2Ygc3lzdGVtIGRpc2suIERlZmF1bHQgaXMgY2xvdWRfZWZmaWNpZW5jeS4gc3VwcG9ydCBjbG91ZHxjbG91ZF9lZmZpY2llbmN5fGNsb3VkX3NzZHxjbG91ZF9lc3NkfGVwaGVtZXJhbF9zc2RcbiAgICAgKi9cbiAgICByZWFkb25seSBzeXN0ZW1EaXNrQ2F0ZWdvcnk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzeXN0ZW1EaXNrRGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIGNyZWF0ZWQgc3lzdGVtIGRpc2suXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0Rlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza0Rpc2tOYW1lOiBOYW1lIG9mIGNyZWF0ZWQgc3lzdGVtIGRpc2suXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0Rpc2tOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza1BlcmZvcm1hbmNlTGV2ZWw6IFRoZSBwZXJmb3JtYW5jZSBsZXZlbCBvZiB0aGUgZW5oYW5jZWQgU1NEIHVzZWQgYXMgdGhlIHN5c3RlbSBkaXNrLkRlZmF1bHQgdmFsdWU6IFBMMS4gVmFsaWQgdmFsdWVzOlBMMDogQSBzaW5nbGUgZW5oYW5jZWQgU1NEIGRlbGl2ZXJzIHVwIHRvIDEwLDAwMCByYW5kb20gcmVhZC93cml0ZSBJT1BTLlBMMTogQSBzaW5nbGUgZW5oYW5jZWQgU1NEIGRlbGl2ZXJzIHVwIHRvIDUwLDAwMCByYW5kb20gcmVhZC93cml0ZSBJT1BTLlBMMjogQSBzaW5nbGUgZW5oYW5jZWQgU1NEIGRlbGl2ZXJzIHVwIHRvIDEwMCwwMDAgcmFuZG9tIHJlYWQvd3JpdGUgSU9QUy5QTDM6IEEgc2luZ2xlIGVuaGFuY2VkIFNTRCBkZWxpdmVycyB1cCB0byAxLDAwMCwwMDAgcmFuZG9tIHJlYWQvd3JpdGUgSU9QUy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzeXN0ZW1EaXNrUGVyZm9ybWFuY2VMZXZlbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5c3RlbURpc2tTaXplOiBEaXNrIHNpemUgb2YgdGhlIHN5c3RlbSBkaXNrLCByYW5nZSBmcm9tIDIwIHRvIDUwMCBHQi4gSWYgeW91IHNwZWNpZnkgd2l0aCB5b3VyIG93biBpbWFnZSwgbWFrZSBzdXJlIHRoZSBzeXN0ZW0gZGlzayBzaXplIGJpZ2dlciB0aGFuIGltYWdlIHNpemUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza1NpemU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NJbnN0YW5jZS5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzZXJEYXRhOiBVc2VyIGRhdGEgdG8gcGFzcyB0byBpbnN0YW5jZS4gWzEsIDE2S0JdIGNoYXJhY3RlcnMuVXNlciBkYXRhIHNob3VsZCBub3QgYmUgYmFzZTY0IGVuY29kZWQuIElmIHlvdSB3YW50IHRvIHBhc3MgYmFzZTY0IGVuY29kZWQgc3RyaW5nIHRvIHRoZSBwcm9wZXJ0eSwgdXNlIGZ1bmN0aW9uIEZuOjpCYXNlNjREZWNvZGUgdG8gZGVjb2RlIHRoZSBiYXNlNjQgc3RyaW5nIGZpcnN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJEYXRhPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBWUEMgaWQgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIHZTd2l0Y2ggSWQgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IFRoZSBJRCBvZiB0aGUgem9uZSB0byB3aGljaCB0aGUgaW5zdGFuY2UgYmVsb25ncy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIFxuICAgICAqIGNhbGwgdGhlIERlc2NyaWJlWm9uZXMgb3BlcmF0aW9uIHRvIHF1ZXJ5IHRoZSBtb3N0IHJlY2VudCB6b25lIGxpc3QuIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgZW1wdHksIHdoaWNoIG1lYW5zIHJhbmRvbSBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgem9uZUlkczogWm9uZSBpZHMgZm9yIHF1ZXJ5IHBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RUNTOjpJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBIb3N0TmFtZTogSG9zdCBuYW1lIG9mIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIb3N0TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIElubmVySXA6IElubmVyIElQIGFkZHJlc3Mgb2YgdGhlIHNwZWNpZmllZCBpbnN0YW5jZS4gT25seSBmb3IgY2xhc3NpY2FsIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5uZXJJcDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBpbnN0YW5jZSBJRCBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFByaW1hcnlOZXR3b3JrSW50ZXJmYWNlSWQ6IFByaW1hcnkgbmV0d29yayBpbnRlcmZhY2UgSUQgb2YgY3JlYXRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaW1hcnlOZXR3b3JrSW50ZXJmYWNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQcml2YXRlSXA6IFByaXZhdGUgSVAgYWRkcmVzcyBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZS4gT25seSBmb3IgVlBDIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJpdmF0ZUlwOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljSXA6IFB1YmxpYyBJUCBhZGRyZXNzIG9mIGNyZWF0ZWQgZWNzIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHVibGljSXA6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZWN1cml0eUdyb3VwSWRzOiBTZWN1cml0eSBncm91cCBJRCBsaXN0IG9mIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZWN1cml0eUdyb3VwSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgWm9uZUlkOiBab25lIElEIG9mIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJab25lSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFQ1M6Okluc3RhbmNlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJbnN0YW5jZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0luc3RhbmNlID0gbmV3IFJvc0luc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVkaWNhdGVkSG9zdElkOiBwcm9wcy5kZWRpY2F0ZWRIb3N0SWQsXG4gICAgICAgICAgICBwcml2YXRlSXBBZGRyZXNzOiBwcm9wcy5wcml2YXRlSXBBZGRyZXNzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBkaXNrTWFwcGluZ3M6IHByb3BzLmRpc2tNYXBwaW5ncyxcbiAgICAgICAgICAgIHVzZXJEYXRhOiBwcm9wcy51c2VyRGF0YSxcbiAgICAgICAgICAgIHN5c3RlbURpc2tTaXplOiBwcm9wcy5zeXN0ZW1EaXNrU2l6ZSxcbiAgICAgICAgICAgIHN5c3RlbURpc2tEZXNjcmlwdGlvbjogcHJvcHMuc3lzdGVtRGlza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW5zdGFuY2VDaGFyZ2VUeXBlOiBwcm9wcy5pbnN0YW5jZUNoYXJnZVR5cGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5pbnN0YW5jZUNoYXJnZVR5cGUgPT09IG51bGwgPyAnUG9zdFBhaWQnIDogcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgYXV0b1JlbmV3OiBwcm9wcy5hdXRvUmVuZXcgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5hdXRvUmVuZXcgPT09IG51bGwgPyAnRmFsc2UnIDogcHJvcHMuYXV0b1JlbmV3LFxuICAgICAgICAgICAgc3BvdER1cmF0aW9uOiBwcm9wcy5zcG90RHVyYXRpb24sXG4gICAgICAgICAgICByYW1Sb2xlTmFtZTogcHJvcHMucmFtUm9sZU5hbWUsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrUGVyZm9ybWFuY2VMZXZlbDogcHJvcHMuc3lzdGVtRGlza1BlcmZvcm1hbmNlTGV2ZWwsXG4gICAgICAgICAgICBpbWFnZUlkOiBwcm9wcy5pbWFnZUlkLFxuICAgICAgICAgICAgc3lzdGVtRGlza0Rpc2tOYW1lOiBwcm9wcy5zeXN0ZW1EaXNrRGlza05hbWUsXG4gICAgICAgICAgICBzcG90UHJpY2VMaW1pdDogcHJvcHMuc3BvdFByaWNlTGltaXQsXG4gICAgICAgICAgICB6b25lSWRzOiBwcm9wcy56b25lSWRzLFxuICAgICAgICAgICAgaW5zdGFuY2VUeXBlOiBwcm9wcy5pbnN0YW5jZVR5cGUsXG4gICAgICAgICAgICBhbGxvY2F0ZVB1YmxpY0lwOiBwcm9wcy5hbGxvY2F0ZVB1YmxpY0lwID09PSB1bmRlZmluZWQgfHwgcHJvcHMuYWxsb2NhdGVQdWJsaWNJcCA9PT0gbnVsbCA/IHRydWUgOiBwcm9wcy5hbGxvY2F0ZVB1YmxpY0lwLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgICAgIGhvc3ROYW1lOiBwcm9wcy5ob3N0TmFtZSxcbiAgICAgICAgICAgIHNwb3RTdHJhdGVneTogcHJvcHMuc3BvdFN0cmF0ZWd5LFxuICAgICAgICAgICAgcGFzc3dvcmRJbmhlcml0OiBwcm9wcy5wYXNzd29yZEluaGVyaXQsXG4gICAgICAgICAgICBwYXNzd29yZDogcHJvcHMucGFzc3dvcmQsXG4gICAgICAgICAgICBhdXRvUmVuZXdQZXJpb2Q6IHByb3BzLmF1dG9SZW5ld1BlcmlvZCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmF1dG9SZW5ld1BlcmlvZCA9PT0gbnVsbCA/IDEgOiBwcm9wcy5hdXRvUmVuZXdQZXJpb2QsXG4gICAgICAgICAgICBrZXlQYWlyTmFtZTogcHJvcHMua2V5UGFpck5hbWUsXG4gICAgICAgICAgICBpb09wdGltaXplZDogcHJvcHMuaW9PcHRpbWl6ZWQgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5pb09wdGltaXplZCA9PT0gbnVsbCA/ICdvcHRpbWl6ZWQnIDogcHJvcHMuaW9PcHRpbWl6ZWQsXG4gICAgICAgICAgICB6b25lSWQ6IHByb3BzLnpvbmVJZCxcbiAgICAgICAgICAgIGhwY0NsdXN0ZXJJZDogcHJvcHMuaHBjQ2x1c3RlcklkLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kID09PSB1bmRlZmluZWQgfHwgcHJvcHMucGVyaW9kID09PSBudWxsID8gMSA6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIGRlbGV0aW9uUHJvdGVjdGlvbjogcHJvcHMuZGVsZXRpb25Qcm90ZWN0aW9uLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cElkczogcHJvcHMuc2VjdXJpdHlHcm91cElkcyxcbiAgICAgICAgICAgIGludGVybmV0Q2hhcmdlVHlwZTogcHJvcHMuaW50ZXJuZXRDaGFyZ2VUeXBlID09PSB1bmRlZmluZWQgfHwgcHJvcHMuaW50ZXJuZXRDaGFyZ2VUeXBlID09PSBudWxsID8gJ1BheUJ5VHJhZmZpYycgOiBwcm9wcy5pbnRlcm5ldENoYXJnZVR5cGUsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrQ2F0ZWdvcnk6IHByb3BzLnN5c3RlbURpc2tDYXRlZ29yeSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnN5c3RlbURpc2tDYXRlZ29yeSA9PT0gbnVsbCA/ICdjbG91ZF9lZmZpY2llbmN5JyA6IHByb3BzLnN5c3RlbURpc2tDYXRlZ29yeSxcbiAgICAgICAgICAgIHNwb3RJbnRlcnJ1cHRpb25CZWhhdmlvcjogcHJvcHMuc3BvdEludGVycnVwdGlvbkJlaGF2aW9yLFxuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiBwcm9wcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgICBkZXBsb3ltZW50U2V0SWQ6IHByb3BzLmRlcGxveW1lbnRTZXRJZCxcbiAgICAgICAgICAgIGludGVybmV0TWF4QmFuZHdpZHRoT3V0OiBwcm9wcy5pbnRlcm5ldE1heEJhbmR3aWR0aE91dCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmludGVybmV0TWF4QmFuZHdpZHRoT3V0ID09PSBudWxsID8gMSA6IHByb3BzLmludGVybmV0TWF4QmFuZHdpZHRoT3V0LFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgc2VjdXJpdHlFbmhhbmNlbWVudFN0cmF0ZWd5OiBwcm9wcy5zZWN1cml0eUVuaGFuY2VtZW50U3RyYXRlZ3ksXG4gICAgICAgICAgICBwZXJpb2RVbml0OiBwcm9wcy5wZXJpb2RVbml0ID09PSB1bmRlZmluZWQgfHwgcHJvcHMucGVyaW9kVW5pdCA9PT0gbnVsbCA/ICdNb250aCcgOiBwcm9wcy5wZXJpb2RVbml0LFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0luc3RhbmNlO1xuICAgICAgICB0aGlzLmF0dHJIb3N0TmFtZSA9IHJvc0luc3RhbmNlLmF0dHJIb3N0TmFtZTtcbiAgICAgICAgdGhpcy5hdHRySW5uZXJJcCA9IHJvc0luc3RhbmNlLmF0dHJJbm5lcklwO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clByaW1hcnlOZXR3b3JrSW50ZXJmYWNlSWQgPSByb3NJbnN0YW5jZS5hdHRyUHJpbWFyeU5ldHdvcmtJbnRlcmZhY2VJZDtcbiAgICAgICAgdGhpcy5hdHRyUHJpdmF0ZUlwID0gcm9zSW5zdGFuY2UuYXR0clByaXZhdGVJcDtcbiAgICAgICAgdGhpcy5hdHRyUHVibGljSXAgPSByb3NJbnN0YW5jZS5hdHRyUHVibGljSXA7XG4gICAgICAgIHRoaXMuYXR0clNlY3VyaXR5R3JvdXBJZHMgPSByb3NJbnN0YW5jZS5hdHRyU2VjdXJpdHlHcm91cElkcztcbiAgICAgICAgdGhpcy5hdHRyWm9uZUlkID0gcm9zSW5zdGFuY2UuYXR0clpvbmVJZDtcbiAgICB9XG59XG4iXX0=