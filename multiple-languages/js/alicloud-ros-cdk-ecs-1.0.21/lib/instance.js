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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBcU94Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBK0N0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUI7WUFDbEQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7WUFDdkksU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTO1lBQ2hHLFlBQVksRUFBRSxLQUFLLENBQUMs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QUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsNkJBQTZCLEdBQUcsV0FBVyxDQUFDLDZCQUE2QixDQUFDO1FBQy9FLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDN0MsQ0FBQztDQUNKO0FBaEhELDRCQWdIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0luc3RhbmNlIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2UgYXMgSW5zdGFuY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RUNTOjpJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGltYWdlSWQ6IEltYWdlIElEIHRvIGNyZWF0ZSBlY3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW1hZ2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VUeXBlOiBFY3MgaW5zdGFuY2Ugc3VwcG9ydGVkIGluc3RhbmNlIHR5cGUsIG1ha2Ugc3VyZSBpdCBzaG91bGQgYmUgY29ycmVjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFsbG9jYXRlUHVibGljSXA6IFRoZSBwdWJsaWMgaXAgZm9yIGVjcyBpbnN0YW5jZSwgaWYgcHJvcGVydGllcyBpcyB0cnVlLCB3aWxsIGFsbG9jYXRlIHB1YmxpYyBpcC4gSWYgcHJvcGVydHkgSW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQgc2V0IHRvIDAsIGl0IHdpbGwgbm90IGFzc2lnbiBwdWJsaWMgaXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxsb2NhdGVQdWJsaWNJcD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXc6IFdoZXRoZXIgcmVuZXcgdGhlIGZlZSBhdXRvbWF0aWNhbGx5PyBXaGVuIHRoZSBwYXJhbWV0ZXIgSW5zdGFuY2VDaGFyZ2VUeXBlIGlzIFByZVBhaWQsIGl0IHdpbGwgdGFrZSBlZmZlY3QuIFJhbmdlIG9mIHZhbHVlOlRydWU6IGF1dG9tYXRpYyByZW5ld2FsLkZhbHNlOiBubyBhdXRvbWF0aWMgcmVuZXdhbC4gRGVmYXVsdCB2YWx1ZSBpcyBGYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUmVuZXc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXdQZXJpb2Q6IFRoZSB0aW1lIHBlcmlvZCBvZiBhdXRvIHJlbmV3LiBXaGVuIHRoZSBwYXJhbWV0ZXIgSW5zdGFuY2VDaGFyZ2VUeXBlIGlzIFByZVBhaWQsIGl0IHdpbGwgdGFrZSBlZmZlY3QuSXQgY291bGQgYmUgMSwgMiwgMywgNiwgMTIsIDI0LCAzNiwgNDgsIDYwLiBEZWZhdWx0IHZhbHVlIGlzIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3UGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVkaWNhdGVkSG9zdElkOiB3aGljaCBkZWRpY2F0ZWQgaG9zdCB3aWxsIGJlIGRlcGxveWVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVkaWNhdGVkSG9zdElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVsZXRpb25Qcm90ZWN0aW9uOiBXaGV0aGVyIGFuIGluc3RhbmNlIGNhbiBiZSByZWxlYXNlZCBtYW51YWxseSB0aHJvdWdoIHRoZSBjb25zb2xlIG9yIEFQSSwgZGVsZXRpb24gcHJvdGVjdGlvbiBvbmx5IHN1cHBvcnQgcG9zdFBhaWQgaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvblByb3RlY3Rpb24/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVwbG95bWVudFNldElkOiBEZXBsb3ltZW50IHNldCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXBsb3ltZW50U2V0SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIGluc3RhbmNlLCBbMiwgMjU2XSBjaGFyYWN0ZXJzLiBEbyBub3QgZmlsbCBvciBlbXB0eSwgdGhlIGRlZmF1bHQgaXMgZW1wdHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNrTWFwcGluZ3M6IERpc2sgbWFwcGluZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAxNiBkaXNrcy5cbiAgICAgKiBJZiB0aGUgaW1hZ2UgY29udGFpbnMgYSBkYXRhIGRpc2ssIHlvdSBjYW4gc3BlY2lmeSBvdGhlciBwYXJhbWV0ZXJzIG9mIHRoZSBkYXRhIGRpc2sgdmlhIHRoZSBzYW1lIHZhbHVlIG9mIHBhcmFtZXRlciBcIkRldmljZVwiLiBJZiBwYXJhbWV0ZXIgXCJDYXRlZ29yeVwiIGlzIG5vdCBzcGVjaWZpZWQsIGl0IHdpbGwgYmUgY2xvdWRfZWZmaWNpZW5jeSBpbnN0ZWFkIG9mIFwiQ2F0ZWdvcnlcIiBvZiBkYXRhIGRpc2sgaW4gdGhlIGltYWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2tNYXBwaW5ncz86IEFycmF5PFJvc0luc3RhbmNlLkRpc2tNYXBwaW5nc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGhvc3ROYW1lOiBIb3N0IG5hbWUgb2YgY3JlYXRlZCBlY3MgaW5zdGFuY2UuIGF0IGxlYXN0IDIgY2hhcmFjdGVycywgYW5kICcuJyAnLScgSXMgbm90IHRoZSBmaXJzdCBhbmQgbGFzdCBjaGFyYWN0ZXJzIGFzIGhvc3RuYW1lLCBub3QgY29udGludW91cyB1c2UuIFdpbmRvd3MgcGxhdGZvcm0gY2FuIGJlIHVwIHRvIDE1IGNoYXJhY3RlcnMsIGFsbG93aW5nIGxldHRlcnMgKHdpdGhvdXQgbGltaXRpbmcgY2FzZSksIG51bWJlcnMgYW5kICctJywgYW5kIGRvZXMgbm90IHN1cHBvcnQgdGhlIG51bWJlciBvZiBwb2ludHMsIG5vdCBhbGwgaXMgZGlnaXRhbCAoJy4nKS5PdGhlciAoTGludXgsIGV0Yy4pIHBsYXRmb3JtIHVwIHRvIDY0IGNoYXJhY3RlcnMsIGFsbG93aW5nIHN1cHBvcnQgbnVtYmVyIG11bHRpcGxlIHBvaW50cyBmb3IgdGhlIHBlcmlvZCBiZXR3ZWVuIHRoZSBwb2ludHMsIGVhY2ggcGVybWl0IGxldHRlcnMgKHdpdGhvdXQgbGltaXRpbmcgY2FzZSksIG51bWJlcnMgYW5kICctJyBjb21wb25lbnRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhvc3ROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaHBjQ2x1c3RlcklkOiBUaGUgSFBDIGNsdXN0ZXIgSUQgdG8gd2hpY2ggdGhlIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaHBjQ2x1c3RlcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBJbnN0YW5jZSBDaGFyZ2UgdHlwZSwgYWxsb3dlZCB2YWx1ZTogUHJlcGFpZCBhbmQgUG9zdHBhaWQuIElmIHNwZWNpZmllZCBQcmVwYWlkLCBwbGVhc2UgZW5zdXJlIHlvdSBoYXZlIHN1ZmZpY2llbnQgYmFsYW5jZSBpbiB5b3VyIGFjY291bnQuIE9yIGluc3RhbmNlIGNyZWF0aW9uIHdpbGwgYmUgZmFpbHVyZS4gRGVmYXVsdCB2YWx1ZSBpcyBQb3N0cGFpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IERpc3BsYXkgbmFtZSBvZiB0aGUgaW5zdGFuY2UsIFsyLCAxMjhdIEVuZ2xpc2ggb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBpbiBzaXplLCBjYW4gY29udGFpbiBudW1iZXJzLCAnXycgb3IgJy4nLCAnLSdcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnRlcm5ldENoYXJnZVR5cGU6IEluc3RhbmNlIGludGVybmV0IGFjY2VzcyBjaGFyZ2UgdHlwZS5TdXBwb3J0ICdQYXlCeUJhbmR3aWR0aCcgYW5kICdQYXlCeVRyYWZmaWMnIG9ubHkuIERlZmF1bHQgaXMgUGF5QnlUcmFmZmljXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQ6IFNldCBpbnRlcm5ldCBvdXRwdXQgYmFuZHdpZHRoIG9mIGluc3RhbmNlLiBVbml0IGlzIE1icHMoTWVnYSBiaXQgcGVyIHNlY29uZCkuIFJhbmdlIGlzIFswLDIwMF0uIERlZmF1bHQgaXMgMS5XaGlsZSB0aGUgcHJvcGVydHkgaXMgbm90IDAsIHB1YmxpYyBpcCB3aWxsIGJlIGFzc2lnbmVkIGZvciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldE1heEJhbmR3aWR0aE91dD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlvT3B0aW1pemVkOiBUaGUgJ29wdGltaXplZCcgaW5zdGFuY2UgY2FuIHByb3ZpZGUgYmV0dGVyIElPIHBlcmZvcm1hbmNlLiBTdXBwb3J0ICdub25lJyBhbmQgJ29wdGltaXplZCcgb25seSwgZGVmYXVsdCBpcyAnb3B0aW1pemVkJy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpb09wdGltaXplZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGtleVBhaXJOYW1lOiBTU0gga2V5IHBhaXIgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBrZXlQYWlyTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhc3N3b3JkOiBQYXNzd29yZCBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZS4gTXVzdCBjb250YWluIGF0IGxlYXN0IDMgdHlwZXMgb2Ygc3BlY2lhbCBjaGFyYWN0ZXIsIGxvd2VyIGNoYXJhY3RlciwgdXBwZXIgY2hhcmFjdGVyLCBudW1iZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFzc3dvcmQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXNzd29yZEluaGVyaXQ6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHVzZSB0aGUgcGFzc3dvcmQgcHJlc2V0IGluIHRoZSBpbWFnZS4gVG8gdXNlIHRoZSBQYXNzd29yZEluaGVyaXQgcGFyYW1ldGVyLCB0aGUgUGFzc3dvcmQgcGFyYW1ldGVyIG11c3QgYmUgZW1wdHkgYW5kIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGF0IHRoZSBzZWxlY3RlZCBpbWFnZSBoYXMgYSBwYXNzd29yZCBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkSW5oZXJpdD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFByZXBhaWQgdGltZSBwZXJpb2QuIFVuaXQgaXMgbW9udGgsIGl0IGNvdWxkIGJlIGZyb20gMSB0byA5IG9yIDEyLCAyNCwgMzYsIDQ4LCA2MC4gRGVmYXVsdCB2YWx1ZSBpcyAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZFVuaXQ6IFVuaXQgb2YgcHJlcGFpZCB0aW1lIHBlcmlvZCwgaXQgY291bGQgYmUgV2Vlay9Nb250aC9ZZWFyLiBEZWZhdWx0IHZhbHVlIGlzIE1vbnRoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZFVuaXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcml2YXRlSXBBZGRyZXNzOiBQcml2YXRlIElQIGZvciB0aGUgaW5zdGFuY2UgY3JlYXRlZC4gT25seSB3b3JrcyBmb3IgVlBDIGluc3RhbmNlIGFuZCBjYW5ub3QgZHVwbGljYXRlZCB3aXRoIGV4aXN0aW5nIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaXZhdGVJcEFkZHJlc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByYW1Sb2xlTmFtZTogSW5zdGFuY2UgUkFNIHJvbGUgbmFtZS4gVGhlIG5hbWUgaXMgcHJvdmlkZWQgYW5kIG1haW50YWluZWQgYnkgUmVzb3VyY2UgQWNjZXNzIE1hbmFnZW1lbnQgKFJBTSkgYW5kIGNhbiBiZSBxdWVyaWVkIHVzaW5nIExpc3RSb2xlcy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBSQU0gQVBJIENyZWF0ZVJvbGUgYW5kIExpc3RSb2xlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSByYW1Sb2xlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlFbmhhbmNlbWVudFN0cmF0ZWd5OlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5RW5oYW5jZW1lbnRTdHJhdGVneT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZDogU2VjdXJpdHkgZ3JvdXAgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS4gRm9yIGNsYXNzaWMgaW5zdGFuY2UgbmVlZCB0aGUgc2VjdXJpdHkgZ3JvdXAgbm90IGJlbG9uZyB0byBWUEMsIGZvciBWUEMgaW5zdGFuY2UsIHBsZWFzZSBtYWtlIHN1cmUgdGhlIHNlY3VyaXR5IGdyb3VwIGJlbG9uZyB0byBzcGVjaWZpZWQgVlBDLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZHM6IFRoZSBJRCBsaXN0IG9mIHNlY3VyaXR5IGdyb3VwIHRvIHdoaWNoIHRvIGFzc2lnbiB0aGUgaW5zdGFuY2UuIFRoZSBtYXggbGVuZ3RoIGlzIGJhc2VkIG9uIHRoZSBtYXhpbXVtIG51bWJlciBvZiBzZWN1cml0eSBncm91cHMgdG8gd2hpY2ggYW4gaW5zdGFuY2UgY2FuIGJlbG9uZy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgXCJTZWN1cml0eSBncm91cCBsaW1pdHNcIiBzZWN0aW9uIGluIExpbWl0cy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNwb3REdXJhdGlvbjogVGhlIHByb3RlY3Rpb24gcGVyaW9kIG9mIHRoZSBwcmVlbXB0aWJsZSBpbnN0YW5jZS4gVW5pdDogaG91cnMuIFZhbGlkIHZhbHVlczogMCwgMSwgMiwgMywgNCwgNSwgYW5kIDYuXG4gICAgICogUHJvdGVjdGlvbiBwZXJpb2RzIG9mIDIsIDMsIDQsIDUsIGFuZCA2IGhvdXJzIGFyZSBpbiBpbnZpdGF0aW9uYWwgcHJldmlldy4gSWYgeW91IHdhbnQgdG8gc2V0IHRoaXMgcGFyYW1ldGVyIHRvIG9uZSBvZiB0aGVzZSB2YWx1ZXMsIHN1Ym1pdCBhIHRpY2tldC5cbiAgICAgKiBJZiB0aGlzIHBhcmFtZXRlciBpcyBzZXQgdG8gMCwgbm8gcHJvdGVjdGlvbiBwZXJpb2QgaXMgY29uZmlndXJlZCBmb3IgdGhlIHByZWVtcHRpYmxlIGluc3RhbmNlLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BvdER1cmF0aW9uPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BvdEludGVycnVwdGlvbkJlaGF2aW9yOiBUaGUgaW50ZXJydXB0aW9uIG1vZGUgb2YgdGhlIHByZWVtcHRpYmxlIGluc3RhbmNlLiBEZWZhdWx0IHZhbHVlOiBUZXJtaW5hdGUuIFNldCB0aGUgdmFsdWUgdG8gVGVybWluYXRlLCB3aGljaCBzcGVjaWZpZXMgdG8gcmVsZWFzZSB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BvdEludGVycnVwdGlvbkJlaGF2aW9yPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BvdFByaWNlTGltaXQ6IFRoZSBob3VybHkgcHJpY2UgdGhyZXNob2xkIG9mIGEgaW5zdGFuY2UsIGFuZCBpdCB0YWtlcyBlZmZlY3Qgb25seSB3aGVuIHBhcmFtZXRlciBJbnN0YW5jZUNoYXJnZVR5cGUgaXMgUG9zdFBhaWQuIFRocmVlIGRlY2ltYWxzIGlzIGFsbG93ZWQgYXQgbW9zdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcG90UHJpY2VMaW1pdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNwb3RTdHJhdGVneTogVGhlIHNwb3Qgc3RyYXRlZ3kgb2YgYSBQYXktQXMtWW91LUdvIGluc3RhbmNlLCBhbmQgaXQgdGFrZXMgZWZmZWN0IG9ubHkgd2hlbiBwYXJhbWV0ZXIgSW5zdGFuY2VDaGFyZ2VUeXBlIGlzIFBvc3RQYWlkLiBWYWx1ZSByYW5nZTogXCJOb1Nwb3Q6IEEgcmVndWxhciBQYXktQXMtWW91LUdvIGluc3RhbmNlXCIsIFwiU3BvdFdpdGhQcmljZUxpbWl0OiBBIHByaWNlIHRocmVzaG9sZCBmb3IgYSBzcG90IGluc3RhbmNlLCBcIlwiU3BvdEFzUHJpY2VHbzogQSBwcmljZSB0aGF0IGlzIGJhc2VkIG9uIHRoZSBoaWdoZXN0IFBheS1Bcy1Zb3UtR28gaW5zdGFuY2UuIFwiRGVmYXVsdCB2YWx1ZTogTm9TcG90LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNwb3RTdHJhdGVneT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5c3RlbURpc2tDYXRlZ29yeTogQ2F0ZWdvcnkgb2Ygc3lzdGVtIGRpc2suIERlZmF1bHQgaXMgY2xvdWRfZWZmaWNpZW5jeS4gc3VwcG9ydCBjbG91ZHxjbG91ZF9lZmZpY2llbmN5fGNsb3VkX3NzZHxjbG91ZF9lc3NkfGVwaGVtZXJhbF9zc2R8Y2xvdWRfYXV0b3xjbG91ZF9lc3NkX2VudHJ5XG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0NhdGVnb3J5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza0Rlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiBjcmVhdGVkIHN5c3RlbSBkaXNrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tEZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5c3RlbURpc2tEaXNrTmFtZTogTmFtZSBvZiBjcmVhdGVkIHN5c3RlbSBkaXNrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tEaXNrTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5c3RlbURpc2tQZXJmb3JtYW5jZUxldmVsOiBUaGUgcGVyZm9ybWFuY2UgbGV2ZWwgb2YgdGhlIGVuaGFuY2VkIFNTRCB1c2VkIGFzIHRoZSBzeXN0ZW0gZGlzay5EZWZhdWx0IHZhbHVlOiBQTDEuIFZhbGlkIHZhbHVlczpQTDA6IEEgc2luZ2xlIGVuaGFuY2VkIFNTRCBkZWxpdmVycyB1cCB0byAxMCwwMDAgcmFuZG9tIHJlYWQvd3JpdGUgSU9QUy5QTDE6IEEgc2luZ2xlIGVuaGFuY2VkIFNTRCBkZWxpdmVycyB1cCB0byA1MCwwMDAgcmFuZG9tIHJlYWQvd3JpdGUgSU9QUy5QTDI6IEEgc2luZ2xlIGVuaGFuY2VkIFNTRCBkZWxpdmVycyB1cCB0byAxMDAsMDAwIHJhbmRvbSByZWFkL3dyaXRlIElPUFMuUEwzOiBBIHNpbmdsZSBlbmhhbmNlZCBTU0QgZGVsaXZlcnMgdXAgdG8gMSwwMDAsMDAwIHJhbmRvbSByZWFkL3dyaXRlIElPUFMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza1BlcmZvcm1hbmNlTGV2ZWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzeXN0ZW1EaXNrU2l6ZTogRGlzayBzaXplIG9mIHRoZSBzeXN0ZW0gZGlzaywgcmFuZ2UgZnJvbSAyMCB0byA1MDAgR0IuIElmIHlvdSBzcGVjaWZ5IHdpdGggeW91ciBvd24gaW1hZ2UsIG1ha2Ugc3VyZSB0aGUgc3lzdGVtIGRpc2sgc2l6ZSBiaWdnZXIgdGhhbiBpbWFnZSBzaXplLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tTaXplPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zSW5zdGFuY2UuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1c2VyRGF0YTogVXNlciBkYXRhIHRvIHBhc3MgdG8gaW5zdGFuY2UuIFsxLCAxNktCXSBjaGFyYWN0ZXJzLlVzZXIgZGF0YSBzaG91bGQgbm90IGJlIGJhc2U2NCBlbmNvZGVkLiBJZiB5b3Ugd2FudCB0byBwYXNzIGJhc2U2NCBlbmNvZGVkIHN0cmluZyB0byB0aGUgcHJvcGVydHksIHVzZSBmdW5jdGlvbiBGbjo6QmFzZTY0RGVjb2RlIHRvIGRlY29kZSB0aGUgYmFzZTY0IHN0cmluZyBmaXJzdC5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VyRGF0YT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBUaGUgVlBDIGlkIHRvIGNyZWF0ZSBlY3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSB2U3dpdGNoIElkIHRvIGNyZWF0ZSBlY3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgem9uZUlkOiBUaGUgSUQgb2YgdGhlIHpvbmUgdG8gd2hpY2ggdGhlIGluc3RhbmNlIGJlbG9uZ3MuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBcbiAgICAgKiBjYWxsIHRoZSBEZXNjcmliZVpvbmVzIG9wZXJhdGlvbiB0byBxdWVyeSB0aGUgbW9zdCByZWNlbnQgem9uZSBsaXN0LiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGVtcHR5LCB3aGljaCBtZWFucyByYW5kb20gc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHpvbmVJZHM6IFpvbmUgaWRzIGZvciBxdWVyeSBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZUlkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVDUzo6SW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSG9zdE5hbWU6IEhvc3QgbmFtZSBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySG9zdE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbm5lcklwOiBJbm5lciBJUCBhZGRyZXNzIG9mIHRoZSBzcGVjaWZpZWQgaW5zdGFuY2UuIE9ubHkgZm9yIGNsYXNzaWNhbCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklubmVySXA6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZUlkOiBUaGUgaW5zdGFuY2UgSUQgb2YgY3JlYXRlZCBlY3MgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQcmltYXJ5TmV0d29ya0ludGVyZmFjZUlkOiBQcmltYXJ5IG5ldHdvcmsgaW50ZXJmYWNlIElEIG9mIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcmltYXJ5TmV0d29ya0ludGVyZmFjZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJpdmF0ZUlwOiBQcml2YXRlIElQIGFkZHJlc3Mgb2YgY3JlYXRlZCBlY3MgaW5zdGFuY2UuIE9ubHkgZm9yIFZQQyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaXZhdGVJcDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFB1YmxpY0lwOiBQdWJsaWMgSVAgYWRkcmVzcyBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clB1YmxpY0lwOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VjdXJpdHlHcm91cElkczogU2VjdXJpdHkgZ3JvdXAgSUQgbGlzdCBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VjdXJpdHlHcm91cElkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFpvbmVJZDogWm9uZSBJRCBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyWm9uZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUNTOjpJbnN0YW5jZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NJbnN0YW5jZSA9IG5ldyBSb3NJbnN0YW5jZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRlZGljYXRlZEhvc3RJZDogcHJvcHMuZGVkaWNhdGVkSG9zdElkLFxuICAgICAgICAgICAgcHJpdmF0ZUlwQWRkcmVzczogcHJvcHMucHJpdmF0ZUlwQWRkcmVzcyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgZGlza01hcHBpbmdzOiBwcm9wcy5kaXNrTWFwcGluZ3MsXG4gICAgICAgICAgICB1c2VyRGF0YTogcHJvcHMudXNlckRhdGEsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrU2l6ZTogcHJvcHMuc3lzdGVtRGlza1NpemUsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrRGVzY3JpcHRpb246IHByb3BzLnN5c3RlbURpc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGluc3RhbmNlQ2hhcmdlVHlwZTogcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlID09PSB1bmRlZmluZWQgfHwgcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlID09PSBudWxsID8gJ1Bvc3RQYWlkJyA6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSxcbiAgICAgICAgICAgIGF1dG9SZW5ldzogcHJvcHMuYXV0b1JlbmV3ID09PSB1bmRlZmluZWQgfHwgcHJvcHMuYXV0b1JlbmV3ID09PSBudWxsID8gJ0ZhbHNlJyA6IHByb3BzLmF1dG9SZW5ldyxcbiAgICAgICAgICAgIHNwb3REdXJhdGlvbjogcHJvcHMuc3BvdER1cmF0aW9uLFxuICAgICAgICAgICAgcmFtUm9sZU5hbWU6IHByb3BzLnJhbVJvbGVOYW1lLFxuICAgICAgICAgICAgc3lzdGVtRGlza1BlcmZvcm1hbmNlTGV2ZWw6IHByb3BzLnN5c3RlbURpc2tQZXJmb3JtYW5jZUxldmVsLFxuICAgICAgICAgICAgaW1hZ2VJZDogcHJvcHMuaW1hZ2VJZCxcbiAgICAgICAgICAgIHN5c3RlbURpc2tEaXNrTmFtZTogcHJvcHMuc3lzdGVtRGlza0Rpc2tOYW1lLFxuICAgICAgICAgICAgc3BvdFByaWNlTGltaXQ6IHByb3BzLnNwb3RQcmljZUxpbWl0LFxuICAgICAgICAgICAgem9uZUlkczogcHJvcHMuem9uZUlkcyxcbiAgICAgICAgICAgIGluc3RhbmNlVHlwZTogcHJvcHMuaW5zdGFuY2VUeXBlLFxuICAgICAgICAgICAgYWxsb2NhdGVQdWJsaWNJcDogcHJvcHMuYWxsb2NhdGVQdWJsaWNJcCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmFsbG9jYXRlUHVibGljSXAgPT09IG51bGwgPyB0cnVlIDogcHJvcHMuYWxsb2NhdGVQdWJsaWNJcCxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgICAgICBob3N0TmFtZTogcHJvcHMuaG9zdE5hbWUsXG4gICAgICAgICAgICBzcG90U3RyYXRlZ3k6IHByb3BzLnNwb3RTdHJhdGVneSxcbiAgICAgICAgICAgIHBhc3N3b3JkSW5oZXJpdDogcHJvcHMucGFzc3dvcmRJbmhlcml0LFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3BzLnBhc3N3b3JkLFxuICAgICAgICAgICAgYXV0b1JlbmV3UGVyaW9kOiBwcm9wcy5hdXRvUmVuZXdQZXJpb2QgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5hdXRvUmVuZXdQZXJpb2QgPT09IG51bGwgPyAxIDogcHJvcHMuYXV0b1JlbmV3UGVyaW9kLFxuICAgICAgICAgICAga2V5UGFpck5hbWU6IHByb3BzLmtleVBhaXJOYW1lLFxuICAgICAgICAgICAgaW9PcHRpbWl6ZWQ6IHByb3BzLmlvT3B0aW1pemVkID09PSB1bmRlZmluZWQgfHwgcHJvcHMuaW9PcHRpbWl6ZWQgPT09IG51bGwgPyAnb3B0aW1pemVkJyA6IHByb3BzLmlvT3B0aW1pemVkLFxuICAgICAgICAgICAgem9uZUlkOiBwcm9wcy56b25lSWQsXG4gICAgICAgICAgICBocGNDbHVzdGVySWQ6IHByb3BzLmhwY0NsdXN0ZXJJZCxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogcHJvcHMudlN3aXRjaElkLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cElkOiBwcm9wcy5zZWN1cml0eUdyb3VwSWQsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBlcmlvZCA9PT0gbnVsbCA/IDEgOiBwcm9wcy5wZXJpb2QsXG4gICAgICAgICAgICBkZWxldGlvblByb3RlY3Rpb246IHByb3BzLmRlbGV0aW9uUHJvdGVjdGlvbixcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZHM6IHByb3BzLnNlY3VyaXR5R3JvdXBJZHMsXG4gICAgICAgICAgICBpbnRlcm5ldENoYXJnZVR5cGU6IHByb3BzLmludGVybmV0Q2hhcmdlVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmludGVybmV0Q2hhcmdlVHlwZSA9PT0gbnVsbCA/ICdQYXlCeVRyYWZmaWMnIDogcHJvcHMuaW50ZXJuZXRDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgc3lzdGVtRGlza0NhdGVnb3J5OiBwcm9wcy5zeXN0ZW1EaXNrQ2F0ZWdvcnkgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5zeXN0ZW1EaXNrQ2F0ZWdvcnkgPT09IG51bGwgPyAnY2xvdWRfZWZmaWNpZW5jeScgOiBwcm9wcy5zeXN0ZW1EaXNrQ2F0ZWdvcnksXG4gICAgICAgICAgICBzcG90SW50ZXJydXB0aW9uQmVoYXZpb3I6IHByb3BzLnNwb3RJbnRlcnJ1cHRpb25CZWhhdmlvcixcbiAgICAgICAgICAgIGluc3RhbmNlTmFtZTogcHJvcHMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgICAgZGVwbG95bWVudFNldElkOiBwcm9wcy5kZXBsb3ltZW50U2V0SWQsXG4gICAgICAgICAgICBpbnRlcm5ldE1heEJhbmR3aWR0aE91dDogcHJvcHMuaW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5pbnRlcm5ldE1heEJhbmR3aWR0aE91dCA9PT0gbnVsbCA/IDEgOiBwcm9wcy5pbnRlcm5ldE1heEJhbmR3aWR0aE91dCxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIHNlY3VyaXR5RW5oYW5jZW1lbnRTdHJhdGVneTogcHJvcHMuc2VjdXJpdHlFbmhhbmNlbWVudFN0cmF0ZWd5LFxuICAgICAgICAgICAgcGVyaW9kVW5pdDogcHJvcHMucGVyaW9kVW5pdCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBlcmlvZFVuaXQgPT09IG51bGwgPyAnTW9udGgnIDogcHJvcHMucGVyaW9kVW5pdCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5hdHRySG9zdE5hbWUgPSByb3NJbnN0YW5jZS5hdHRySG9zdE5hbWU7XG4gICAgICAgIHRoaXMuYXR0cklubmVySXAgPSByb3NJbnN0YW5jZS5hdHRySW5uZXJJcDtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0luc3RhbmNlLmF0dHJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJQcmltYXJ5TmV0d29ya0ludGVyZmFjZUlkID0gcm9zSW5zdGFuY2UuYXR0clByaW1hcnlOZXR3b3JrSW50ZXJmYWNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clByaXZhdGVJcCA9IHJvc0luc3RhbmNlLmF0dHJQcml2YXRlSXA7XG4gICAgICAgIHRoaXMuYXR0clB1YmxpY0lwID0gcm9zSW5zdGFuY2UuYXR0clB1YmxpY0lwO1xuICAgICAgICB0aGlzLmF0dHJTZWN1cml0eUdyb3VwSWRzID0gcm9zSW5zdGFuY2UuYXR0clNlY3VyaXR5R3JvdXBJZHM7XG4gICAgICAgIHRoaXMuYXR0clpvbmVJZCA9IHJvc0luc3RhbmNlLmF0dHJab25lSWQ7XG4gICAgfVxufVxuIl19