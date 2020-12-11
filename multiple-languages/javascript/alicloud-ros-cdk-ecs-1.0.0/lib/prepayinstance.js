"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepayInstance = exports.PrepayInstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "PrepayInstanceProperty", { enumerable: true, get: function () { return ecs_generated_1.RosPrepayInstance; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::PrepayInstance`
 */
class PrepayInstance extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::PrepayInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosPrepayInstance = new ecs_generated_1.RosPrepayInstance(this, id, {
            periodType: props.periodType,
            dedicatedHostId: props.dedicatedHostId,
            privateIpAddress: props.privateIpAddress,
            description: props.description,
            diskMappings: props.diskMappings,
            systemDiskSize: props.systemDiskSize,
            userData: props.userData,
            systemDiskDescription: props.systemDiskDescription,
            instanceChargeType: props.instanceChargeType ? props.instanceChargeType : 'PostPaid',
            autoRenew: props.autoRenew ? props.autoRenew : false,
            maxAmount: props.maxAmount,
            ramRoleName: props.ramRoleName,
            systemDiskPerformanceLevel: props.systemDiskPerformanceLevel,
            minAmount: props.minAmount ? props.minAmount : 1,
            imageId: props.imageId,
            systemDiskDiskName: props.systemDiskDiskName,
            instanceType: props.instanceType,
            allocatePublicIp: props.allocatePublicIp ? props.allocatePublicIp : true,
            tags: ros.tagFactory(props.tags),
            hostName: props.hostName,
            passwordInherit: props.passwordInherit,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod ? props.autoRenewPeriod : 1,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized ? props.ioOptimized : true,
            zoneId: props.zoneId,
            hpcClusterId: props.hpcClusterId,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            period: props.period ? props.period : 1,
            internetChargeType: props.internetChargeType ? props.internetChargeType : 'PayByBandwidth',
            systemDiskCategory: props.systemDiskCategory ? props.systemDiskCategory : 'cloud_efficiency',
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut ? props.internetMaxBandwidthOut : 1,
            vpcId: props.vpcId,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn ? props.internetMaxBandwidthIn : 200,
            securityEnhancementStrategy: props.securityEnhancementStrategy,
            periodUnit: props.periodUnit ? props.periodUnit : 'Month',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrepayInstance;
        this.attrHostNames = rosPrepayInstance.attrHostNames;
        this.attrInnerIps = rosPrepayInstance.attrInnerIps;
        this.attrInstanceIds = rosPrepayInstance.attrInstanceIds;
        this.attrOrderId = rosPrepayInstance.attrOrderId;
        this.attrPrivateIps = rosPrepayInstance.attrPrivateIps;
        this.attrPublicIps = rosPrepayInstance.attrPublicIps;
        this.attrRelatedOrderIds = rosPrepayInstance.attrRelatedOrderIds;
        this.attrZoneIds = rosPrepayInstance.attrZoneIds;
    }
}
exports.PrepayInstance = PrepayInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGF5aW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmVwYXlpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQW9EO0FBRXRCLHVHQUZyQixpQ0FBaUIsT0FFMEI7QUE4TXBEOztHQUVHO0FBQ0gsTUFBYSxjQUFlLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUErQzVDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNySCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxpQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZELFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsVUFBVTtZQUNwRixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNwRCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLDBCQUEwQixFQUFFLEtBQUssQ0FBQyww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Q0FBQyxtQkFBbUIsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztJQUNyRCxDQUFDO0NBQ0o7QUE1R0Qsd0NBNEdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUHJlcGF5SW5zdGFuY2UgfSBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NQcmVwYXlJbnN0YW5jZSBhcyBQcmVwYXlJbnN0YW5jZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFQ1M6OlByZXBheUluc3RhbmNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFByZXBheUluc3RhbmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGltYWdlSWQ6IEltYWdlIElEIHRvIGNyZWF0ZSBlY3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW1hZ2VJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlVHlwZTogRWNzIGluc3RhbmNlIHN1cHBvcnRlZCBpbnN0YW5jZSB0eXBlLCBtYWtlIHN1cmUgaXQgc2hvdWxkIGJlIGNvcnJlY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF4QW1vdW50OiBNYXggbnVtYmVyIG9mIGluc3RhbmNlcyB0byBjcmVhdGUsIHNob3VsZCBiZSBzbWFsbGVyIHRoYW4gJ01heEFtb3VudCcgYW5kIHNtYWxsZXIgdGhhbiAxMDAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF4QW1vdW50OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWluQW1vdW50OiBNYXggbnVtYmVyIG9mIGluc3RhbmNlcyB0byBjcmVhdGUsIHNob3VsZCBiZSBiaWdnZXIgdGhhbiAnTWluQW1vdW50JyBhbmQgc21hbGxlciB0aGFuIDEwMC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtaW5BbW91bnQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJpb2Q6IFByZXBhaWQgdGltZSBwZXJpb2QuIFdoaWxlIGNob29zZSBieSBwYXkgYnkgbW9udGgsIGl0IGNvdWxkIGJlIGZyb20gMSB0byA5LiBXaGlsZSBjaG9vc2UgcGF5IGJ5IHllYXIsIGl0IGNvdWxkIGJlIGZyb20gMSB0byAzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcmlvZFR5cGU6IENoYXJnZSBwZXJpb2QgZm9yIGNyZWF0ZWQgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZFR5cGU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGxvY2F0ZVB1YmxpY0lwOiBUaGUgcHVibGljIGlwIGZvciBlY3MgaW5zdGFuY2UsIGlmIHByb3BlcnRpZXMgaXMgdHJ1ZSwgd2lsbCBhbGxvY2F0ZSBwdWJsaWMgaXAuIElmIHByb3BlcnR5IEludGVybmV0TWF4QmFuZHdpZHRoT3V0IHNldCB0byAwLCBpdCB3aWxsIG5vdCBhc3NpZ24gcHVibGljIGlwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsbG9jYXRlUHVibGljSXA/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9SZW5ldzogQXV0byByZW5ldyB0aGUgcHJlcGF5IGluc3RhbmNlLiBJZiB0aGUgcGVyaW9kIHR5cGUgaXMgYnkgeWVhciwgaXQgd2lsbCByZW5ldyBieSB5ZWFyLCBlbHNlIGl0IHdpbGwgcmVuZXcgYnkgbW9udGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvUmVuZXdQZXJpb2Q6IFRoZSB0aW1lIHBlcmlvZCBvZiBhdXRvIHJlbmV3LiBXaGVuIHRoZSBwYXJhbWV0ZXIgSW5zdGFuY2VDaGFyZ2VUeXBlIGlzIFByZVBhaWQsIGl0IHdpbGwgdGFrZSBlZmZlY3QuSXQgY291bGQgYmUgMSwgMiwgMywgNiwgMTIuIERlZmF1bHQgdmFsdWUgaXMgMS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUmVuZXdQZXJpb2Q/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVkaWNhdGVkSG9zdElkOiB3aGljaCBkZWRpY2F0ZWQgaG9zdCB3aWxsIGJlIGRlcGxveWVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVkaWNhdGVkSG9zdElkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlcGxveW1lbnRTZXRJZDogRGVwbG95bWVudCBzZXQgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVwbG95bWVudFNldElkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgaW5zdGFuY2UsIFsyLCAyNTZdIGNoYXJhY3RlcnMuIERvIG5vdCBmaWxsIG9yIGVtcHR5LCB0aGUgZGVmYXVsdCBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNrTWFwcGluZ3M6IERpc2sgbWFwcGluZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAxNiBkaXNrcy5cbiAgICAgKiBJZiB0aGUgaW1hZ2UgY29udGFpbnMgYSBkYXRhIGRpc2ssIHlvdSBjYW4gc3BlY2lmeSBvdGhlciBwYXJhbWV0ZXJzIG9mIHRoZSBkYXRhIGRpc2sgdmlhIHRoZSBzYW1lIHZhbHVlIG9mIHBhcmFtZXRlciBcIkRldmljZVwiLiBJZiBwYXJhbWV0ZXIgXCJDYXRlZ29yeVwiIGlzIG5vdCBzcGVjaWZpZWQsIGl0IHdpbGwgYmUgY2xvdWRfZWZmaWNpZW5jeSBpbnN0ZWFkIG9mIFwiQ2F0ZWdvcnlcIiBvZiBkYXRhIGRpc2sgaW4gdGhlIGltYWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2tNYXBwaW5ncz86IEFycmF5PFJvc1ByZXBheUluc3RhbmNlLkRpc2tNYXBwaW5nc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBob3N0TmFtZTogSG9zdCBuYW1lIG9mIGNyZWF0ZWQgZWNzIGluc3RhbmNlLiBhdCBsZWFzdCAyIGNoYXJhY3RlcnMsIGFuZCAnLicgJy0nIElzIG5vdCB0aGUgZmlyc3QgYW5kIGxhc3QgY2hhcmFjdGVycyBhcyBob3N0bmFtZSwgbm90IGNvbnRpbnVvdXMgdXNlLiBXaW5kb3dzIHBsYXRmb3JtIGNhbiBiZSB1cCB0byAxNSBjaGFyYWN0ZXJzLCBhbGxvd2luZyBsZXR0ZXJzICh3aXRob3V0IGxpbWl0aW5nIGNhc2UpLCBudW1iZXJzIGFuZCAnLScsIGFuZCBkb2VzIG5vdCBzdXBwb3J0IHRoZSBudW1iZXIgb2YgcG9pbnRzLCBub3QgYWxsIGlzIGRpZ2l0YWwgKCcuJykuT3RoZXIgKExpbnV4LCBldGMuKSBwbGF0Zm9ybSB1cCB0byAzMCBjaGFyYWN0ZXJzLCBhbGxvd2luZyBzdXBwb3J0IG51bWJlciBtdWx0aXBsZSBwb2ludHMgZm9yIHRoZSBwZXJpb2QgYmV0d2VlbiB0aGUgcG9pbnRzLCBlYWNoIHBlcm1pdCBsZXR0ZXJzICh3aXRob3V0IGxpbWl0aW5nIGNhc2UpLCBudW1iZXJzIGFuZCAnLScgY29tcG9uZW50cy5cbiAgICAgKi9cbiAgICByZWFkb25seSBob3N0TmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBocGNDbHVzdGVySWQ6IFRoZSBIUEMgY2x1c3RlciBJRCB0byB3aGljaCB0aGUgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBocGNDbHVzdGVySWQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBJbnN0YW5jZSBDaGFyZ2UgdHlwZSwgYWxsb3dlZCB2YWx1ZTogUHJlcGFpZCBhbmQgUG9zdHBhaWQuIElmIHNwZWNpZmllZCBQcmVwYWlkLCBwbGVhc2UgZW5zdXJlIHlvdSBoYXZlIHN1ZmZpY2llbnQgYmFsYW5jZSBpbiB5b3VyIGFjY291bnQuIE9yIGluc3RhbmNlIGNyZWF0aW9uIHdpbGwgYmUgZmFpbHVyZS4gRGVmYXVsdCB2YWx1ZSBpcyBQb3N0cGFpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNoYXJnZVR5cGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBEaXNwbGF5IG5hbWUgb2YgdGhlIGluc3RhbmNlLCBbMiwgMTI4XSBFbmdsaXNoIG9yIENoaW5lc2UgY2hhcmFjdGVycywgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UgaW4gc2l6ZSwgY2FuIGNvbnRhaW4gbnVtYmVycywgJ18nIG9yICcuJywgJy0nXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0Q2hhcmdlVHlwZTogSW5zdGFuY2UgaW50ZXJuZXQgYWNjZXNzIGNoYXJnZSB0eXBlLlN1cHBvcnQgJ1BheUJ5QmFuZHdpZHRoJyBhbmQgJ1BheUJ5VHJhZmZpYycgb25seS4gRm9yIEFmdGVyUGF5IGluc3RhbmNlLCBkZWZhdWx0IGlzICdQYXlCeUJhbmR3aWR0aCcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRDaGFyZ2VUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0TWF4QmFuZHdpZHRoSW46IE1heCBpbnRlcm5ldCBvdXQgYmFuZCB3aWR0aCBzZXR0aW5nLCB1bml0IGluIE1icHMoTWVnYSBiaXQgcGVyIHNlY29uZCkuIFRoZSByYW5nZSBpcyBbMSwyMDBdLCBkZWZhdWx0IGlzIDIwMCBNYnBzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0TWF4QmFuZHdpZHRoSW4/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQ6IFNldCBpbnRlcm5ldCBvdXRwdXQgYmFuZHdpZHRoIG9mIGluc3RhbmNlLiBVbml0IGlzIE1icHMoTWVnYSBiaXQgcGVyIHNlY29uZCkuIFJhbmdlIGlzIFswLDIwMF0uIERlZmF1bHQgaXMgMS5XaGlsZSB0aGUgcHJvcGVydHkgaXMgbm90IDAsIHB1YmxpYyBpcCB3aWxsIGJlIGFzc2lnbmVkIGZvciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldE1heEJhbmR3aWR0aE91dD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpb09wdGltaXplZDogVGhlICdvcHRpbWl6ZWQnIGluc3RhbmNlIGNhbiBwcm92aWRlIGJldHRlciBJTyBwZXJmb3JtYW5jZS4gU3VwcG9ydCB0cnVlIG9yIGZhbHNlLCBEZWZhdWx0IGlzIHRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW9PcHRpbWl6ZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGtleVBhaXJOYW1lOiBTU0gga2V5IHBhaXIgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBrZXlQYWlyTmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXNzd29yZDogUGFzc3dvcmQgb2YgY3JlYXRlZCBlY3MgaW5zdGFuY2UuIE11c3QgY29udGFpbiBhdCBsZWFzdCAzIHR5cGVzIG9mIHNwZWNpYWwgY2hhcmFjdGVyLCBsb3dlciBjaGFyYWN0ZXIsIHVwcGVyIGNoYXJhY3RlciwgbnVtYmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhc3N3b3JkSW5oZXJpdDogU3BlY2lmaWVzIHdoZXRoZXIgdG8gdXNlIHRoZSBwYXNzd29yZCBwcmVzZXQgaW4gdGhlIGltYWdlLiBUbyB1c2UgdGhlIFBhc3N3b3JkSW5oZXJpdCBwYXJhbWV0ZXIsIHRoZSBQYXNzd29yZCBwYXJhbWV0ZXIgbXVzdCBiZSBlbXB0eSBhbmQgeW91IG11c3QgbWFrZSBzdXJlIHRoYXQgdGhlIHNlbGVjdGVkIGltYWdlIGhhcyBhIHBhc3N3b3JkIGNvbmZpZ3VyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFzc3dvcmRJbmhlcml0PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJpb2RVbml0OiBVbml0IG9mIHByZXBhaWQgdGltZSBwZXJpb2QsIGl0IGNvdWxkIGJlIFdlZWsvTW9udGgvWWVhci4gRGVmYXVsdCB2YWx1ZSBpcyBNb250aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2RVbml0Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaXZhdGVJcEFkZHJlc3M6IFByaXZhdGUgSVAgZm9yIHRoZSBpbnN0YW5jZSBjcmVhdGVkLiBPbmx5IHdvcmtzIGZvciBWUEMgaW5zdGFuY2UgYW5kIGNhbm5vdCBkdXBsaWNhdGVkIHdpdGggZXhpc3RpbmcgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpdmF0ZUlwQWRkcmVzcz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByYW1Sb2xlTmFtZTogSW5zdGFuY2UgUkFNIHJvbGUgbmFtZS4gVGhlIG5hbWUgaXMgcHJvdmlkZWQgYW5kIG1haW50YWluZWQgYnkgUmVzb3VyY2UgQWNjZXNzIE1hbmFnZW1lbnQgKFJBTSkgYW5kIGNhbiBiZSBxdWVyaWVkIHVzaW5nIExpc3RSb2xlcy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBSQU0gQVBJIENyZWF0ZVJvbGUgYW5kIExpc3RSb2xlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSByYW1Sb2xlTmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZWN1cml0eUVuaGFuY2VtZW50U3RyYXRlZ3k6XG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlFbmhhbmNlbWVudFN0cmF0ZWd5Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZDogU2VjdXJpdHkgZ3JvdXAgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS4gRm9yIGNsYXNzaWMgaW5zdGFuY2UgbmVlZCB0aGUgc2VjdXJpdHkgZ3JvdXAgbm90IGJlbG9uZyB0byBWUEMsIGZvciBWUEMgaW5zdGFuY2UsIHBsZWFzZSBtYWtlIHN1cmUgdGhlIHNlY3VyaXR5IGdyb3VwIGJlbG9uZyB0byBzcGVjaWZpZWQgVlBDLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzeXN0ZW1EaXNrQ2F0ZWdvcnk6IENhdGVnb3J5IG9mIHN5c3RlbSBkaXNrLiBEZWZhdWx0IGlzIGNsb3VkX2VmZmljaWVuY3kuIHN1cHBvcnQgY2xvdWR8Y2xvdWRfZWZmaWNpZW5jeXxjbG91ZF9zc2R8Y2xvdWRfZXNzZHxlcGhlbWVyYWxfc3NkXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0NhdGVnb3J5Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN5c3RlbURpc2tEZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgY3JlYXRlZCBzeXN0ZW0gZGlzay5cbiAgICAgKi9cbiAgICByZWFkb25seSBzeXN0ZW1EaXNrRGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3lzdGVtRGlza0Rpc2tOYW1lOiBOYW1lIG9mIGNyZWF0ZWQgc3lzdGVtIGRpc2suXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0Rpc2tOYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN5c3RlbURpc2tQZXJmb3JtYW5jZUxldmVsOiBUaGUgcGVyZm9ybWFuY2UgbGV2ZWwgb2YgdGhlIGVuaGFuY2VkIFNTRCB1c2VkIGFzIHRoZSBzeXN0ZW0gZGlzay5EZWZhdWx0IHZhbHVlOiBQTDEuIFZhbGlkIHZhbHVlczpQTDA6IEEgc2luZ2xlIGVuaGFuY2VkIFNTRCBkZWxpdmVycyB1cCB0byAxMCwwMDAgcmFuZG9tIHJlYWQvd3JpdGUgSU9QUy5QTDE6IEEgc2luZ2xlIGVuaGFuY2VkIFNTRCBkZWxpdmVycyB1cCB0byA1MCwwMDAgcmFuZG9tIHJlYWQvd3JpdGUgSU9QUy5QTDI6IEEgc2luZ2xlIGVuaGFuY2VkIFNTRCBkZWxpdmVycyB1cCB0byAxMDAsMDAwIHJhbmRvbSByZWFkL3dyaXRlIElPUFMuUEwzOiBBIHNpbmdsZSBlbmhhbmNlZCBTU0QgZGVsaXZlcnMgdXAgdG8gMSwwMDAsMDAwIHJhbmRvbSByZWFkL3dyaXRlIElPUFMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza1BlcmZvcm1hbmNlTGV2ZWw/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3lzdGVtRGlza1NpemU6IERpc2sgc2l6ZSBvZiB0aGUgc3lzdGVtIGRpc2ssIHJhbmdlIGZyb20gMjAgdG8gNTAwIEdCLiBJZiB5b3Ugc3BlY2lmeSB3aXRoIHlvdXIgb3duIGltYWdlLCBtYWtlIHN1cmUgdGhlIHN5c3RlbSBkaXNrIHNpemUgYmlnZ2VyIHRoYW4gaW1hZ2Ugc2l6ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzeXN0ZW1EaXNrU2l6ZT86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9W107XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXNlckRhdGE6IFVzZXIgZGF0YSB0byBwYXNzIHRvIGluc3RhbmNlLiBbMSwgMTZLQl0gY2hhcmFjdGVycy5Vc2VyIGRhdGEgc2hvdWxkIG5vdCBiZSBiYXNlNjQgZW5jb2RlZC4gSWYgeW91IHdhbnQgdG8gcGFzcyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdG8gdGhlIHByb3BlcnR5LCB1c2UgZnVuY3Rpb24gRm46OkJhc2U2NERlY29kZSB0byBkZWNvZGUgdGhlIGJhc2U2NCBzdHJpbmcgZmlyc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlckRhdGE/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFRoZSBWUEMgaWQgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSB2U3dpdGNoIElkIHRvIGNyZWF0ZSBlY3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHpvbmVJZDogVGhlIElEIG9mIHRoZSB6b25lIHRvIHdoaWNoIHRoZSBpbnN0YW5jZSBiZWxvbmdzLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgXG4gICAgICogY2FsbCB0aGUgRGVzY3JpYmVab25lcyBvcGVyYXRpb24gdG8gcXVlcnkgdGhlIG1vc3QgcmVjZW50IHpvbmUgbGlzdC4gXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBlbXB0eSwgd2hpY2ggbWVhbnMgcmFuZG9tIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVDUzo6UHJlcGF5SW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmVwYXlJbnN0YW5jZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEhvc3ROYW1lczogSG9zdCBuYW1lcyBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySG9zdE5hbWVzOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElubmVySXBzOiBJbm5lciBJUCBhZGRyZXNzIGxpc3Qgb2YgdGhlIHNwZWNpZmllZCBpbnN0YW5jZS4gT25seSBmb3IgY2xhc3NpY2FsIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5uZXJJcHM6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZHM6IFRoZSBpbnN0YW5jZSBpZCBsaXN0IG9mIGNyZWF0ZWQgZWNzIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBPcmRlcklkOiBUaGUgb3JkZXIgaWQgbGlzdCBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT3JkZXJJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQcml2YXRlSXBzOiBQcml2YXRlIElQIGFkZHJlc3MgbGlzdCBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZS4gT25seSBmb3IgVlBDIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJpdmF0ZUlwczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQdWJsaWNJcHM6IFB1YmxpYyBJUCBhZGRyZXNzIGxpc3Qgb2YgY3JlYXRlZCBlY3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNJcHM6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVsYXRlZE9yZGVySWRzOiBUaGUgcmVsYXRlZCBvcmRlciBpZCBsaXN0IG9mIGNyZWF0ZWQgZWNzIGluc3RhbmNlc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVsYXRlZE9yZGVySWRzOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFpvbmVJZHM6IFpvbmUgaWQgb2YgY3JlYXRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clpvbmVJZHM6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFQ1M6OlByZXBheUluc3RhbmNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBQcmVwYXlJbnN0YW5jZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1ByZXBheUluc3RhbmNlID0gbmV3IFJvc1ByZXBheUluc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcGVyaW9kVHlwZTogcHJvcHMucGVyaW9kVHlwZSxcbiAgICAgICAgICAgIGRlZGljYXRlZEhvc3RJZDogcHJvcHMuZGVkaWNhdGVkSG9zdElkLFxuICAgICAgICAgICAgcHJpdmF0ZUlwQWRkcmVzczogcHJvcHMucHJpdmF0ZUlwQWRkcmVzcyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRpc2tNYXBwaW5nczogcHJvcHMuZGlza01hcHBpbmdzLFxuICAgICAgICAgICAgc3lzdGVtRGlza1NpemU6IHByb3BzLnN5c3RlbURpc2tTaXplLFxuICAgICAgICAgICAgdXNlckRhdGE6IHByb3BzLnVzZXJEYXRhLFxuICAgICAgICAgICAgc3lzdGVtRGlza0Rlc2NyaXB0aW9uOiBwcm9wcy5zeXN0ZW1EaXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbnN0YW5jZUNoYXJnZVR5cGU6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA/IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA6ICdQb3N0UGFpZCcsXG4gICAgICAgICAgICBhdXRvUmVuZXc6IHByb3BzLmF1dG9SZW5ldyA/IHByb3BzLmF1dG9SZW5ldyA6IGZhbHNlLFxuICAgICAgICAgICAgbWF4QW1vdW50OiBwcm9wcy5tYXhBbW91bnQsXG4gICAgICAgICAgICByYW1Sb2xlTmFtZTogcHJvcHMucmFtUm9sZU5hbWUsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrUGVyZm9ybWFuY2VMZXZlbDogcHJvcHMuc3lzdGVtRGlza1BlcmZvcm1hbmNlTGV2ZWwsXG4gICAgICAgICAgICBtaW5BbW91bnQ6IHByb3BzLm1pbkFtb3VudCA/IHByb3BzLm1pbkFtb3VudCA6IDEsXG4gICAgICAgICAgICBpbWFnZUlkOiBwcm9wcy5pbWFnZUlkLFxuICAgICAgICAgICAgc3lzdGVtRGlza0Rpc2tOYW1lOiBwcm9wcy5zeXN0ZW1EaXNrRGlza05hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZVR5cGU6IHByb3BzLmluc3RhbmNlVHlwZSxcbiAgICAgICAgICAgIGFsbG9jYXRlUHVibGljSXA6IHByb3BzLmFsbG9jYXRlUHVibGljSXAgPyBwcm9wcy5hbGxvY2F0ZVB1YmxpY0lwIDogdHJ1ZSxcbiAgICAgICAgICAgIHRhZ3M6IHJvcy50YWdGYWN0b3J5KHByb3BzLnRhZ3MpLFxuICAgICAgICAgICAgaG9zdE5hbWU6IHByb3BzLmhvc3ROYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmRJbmhlcml0OiBwcm9wcy5wYXNzd29yZEluaGVyaXQsXG4gICAgICAgICAgICBwYXNzd29yZDogcHJvcHMucGFzc3dvcmQsXG4gICAgICAgICAgICBhdXRvUmVuZXdQZXJpb2Q6IHByb3BzLmF1dG9SZW5ld1BlcmlvZCA/IHByb3BzLmF1dG9SZW5ld1BlcmlvZCA6IDEsXG4gICAgICAgICAgICBrZXlQYWlyTmFtZTogcHJvcHMua2V5UGFpck5hbWUsXG4gICAgICAgICAgICBpb09wdGltaXplZDogcHJvcHMuaW9PcHRpbWl6ZWQgPyBwcm9wcy5pb09wdGltaXplZCA6IHRydWUsXG4gICAgICAgICAgICB6b25lSWQ6IHByb3BzLnpvbmVJZCxcbiAgICAgICAgICAgIGhwY0NsdXN0ZXJJZDogcHJvcHMuaHBjQ2x1c3RlcklkLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kID8gcHJvcHMucGVyaW9kIDogMSxcbiAgICAgICAgICAgIGludGVybmV0Q2hhcmdlVHlwZTogcHJvcHMuaW50ZXJuZXRDaGFyZ2VUeXBlID8gcHJvcHMuaW50ZXJuZXRDaGFyZ2VUeXBlIDogJ1BheUJ5QmFuZHdpZHRoJyxcbiAgICAgICAgICAgIHN5c3RlbURpc2tDYXRlZ29yeTogcHJvcHMuc3lzdGVtRGlza0NhdGVnb3J5ID8gcHJvcHMuc3lzdGVtRGlza0NhdGVnb3J5IDogJ2Nsb3VkX2VmZmljaWVuY3knLFxuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiBwcm9wcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgICBkZXBsb3ltZW50U2V0SWQ6IHByb3BzLmRlcGxveW1lbnRTZXRJZCxcbiAgICAgICAgICAgIGludGVybmV0TWF4QmFuZHdpZHRoT3V0OiBwcm9wcy5pbnRlcm5ldE1heEJhbmR3aWR0aE91dCA/IHByb3BzLmludGVybmV0TWF4QmFuZHdpZHRoT3V0IDogMSxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIGludGVybmV0TWF4QmFuZHdpZHRoSW46IHByb3BzLmludGVybmV0TWF4QmFuZHdpZHRoSW4gPyBwcm9wcy5pbnRlcm5ldE1heEJhbmR3aWR0aEluIDogMjAwLFxuICAgICAgICAgICAgc2VjdXJpdHlFbmhhbmNlbWVudFN0cmF0ZWd5OiBwcm9wcy5zZWN1cml0eUVuaGFuY2VtZW50U3RyYXRlZ3ksXG4gICAgICAgICAgICBwZXJpb2RVbml0OiBwcm9wcy5wZXJpb2RVbml0ID8gcHJvcHMucGVyaW9kVW5pdCA6ICdNb250aCcsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUHJlcGF5SW5zdGFuY2U7XG4gICAgICAgIHRoaXMuYXR0ckhvc3ROYW1lcyA9IHJvc1ByZXBheUluc3RhbmNlLmF0dHJIb3N0TmFtZXM7XG4gICAgICAgIHRoaXMuYXR0cklubmVySXBzID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0cklubmVySXBzO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkcyA9IHJvc1ByZXBheUluc3RhbmNlLmF0dHJJbnN0YW5jZUlkcztcbiAgICAgICAgdGhpcy5hdHRyT3JkZXJJZCA9IHJvc1ByZXBheUluc3RhbmNlLmF0dHJPcmRlcklkO1xuICAgICAgICB0aGlzLmF0dHJQcml2YXRlSXBzID0gcm9zUHJlcGF5SW5zdGFuY2UuYXR0clByaXZhdGVJcHM7XG4gICAgICAgIHRoaXMuYXR0clB1YmxpY0lwcyA9IHJvc1ByZXBheUluc3RhbmNlLmF0dHJQdWJsaWNJcHM7XG4gICAgICAgIHRoaXMuYXR0clJlbGF0ZWRPcmRlcklkcyA9IHJvc1ByZXBheUluc3RhbmNlLmF0dHJSZWxhdGVkT3JkZXJJZHM7XG4gICAgICAgIHRoaXMuYXR0clpvbmVJZHMgPSByb3NQcmVwYXlJbnN0YW5jZS5hdHRyWm9uZUlkcztcbiAgICB9XG59XG4iXX0=