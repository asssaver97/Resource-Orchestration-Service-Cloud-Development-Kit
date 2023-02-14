"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalingConfiguration = exports.ScalingConfigurationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ess_generated_1 = require("./ess.generated");
Object.defineProperty(exports, "ScalingConfigurationProperty", { enumerable: true, get: function () { return ess_generated_1.RosScalingConfiguration; } });
/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingConfiguration`
 */
class ScalingConfiguration extends ros.Resource {
    /**
     * Create a new `ALIYUN::ESS::ScalingConfiguration`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosScalingConfiguration = new ess_generated_1.RosScalingConfiguration(this, id, {
            scalingConfigurationName: props.scalingConfigurationName,
            resourceGroupId: props.resourceGroupId,
            diskMappings: props.diskMappings,
            systemDiskSize: props.systemDiskSize,
            userData: props.userData,
            systemDiskAutoSnapshotPolicyId: props.systemDiskAutoSnapshotPolicyId,
            ramRoleName: props.ramRoleName,
            systemDiskPerformanceLevel: props.systemDiskPerformanceLevel,
            spotPriceLimitForInstanceType: props.spotPriceLimitForInstanceType,
            ipv6AddressCount: props.ipv6AddressCount,
            imageId: props.imageId,
            spotPriceLimit: props.spotPriceLimit,
            tagList: props.tagList,
            instanceTypes: props.instanceTypes,
            instanceType: props.instanceType,
            hostName: props.hostName,
            spotStrategy: props.spotStrategy,
            passwordInherit: props.passwordInherit,
            password: props.password,
            keyPairName: props.keyPairName,
            loadBalancerWeight: props.loadBalancerWeight,
            ioOptimized: props.ioOptimized,
            instanceId: props.instanceId,
            hpcClusterId: props.hpcClusterId,
            scalingGroupId: props.scalingGroupId,
            securityGroupId: props.securityGroupId,
            imageFamily: props.imageFamily,
            systemDiskCategory: props.systemDiskCategory,
            internetChargeType: props.internetChargeType,
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn,
            creditSpecification: props.creditSpecification,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingConfiguration;
        this.attrScalingConfigurationId = rosScalingConfiguration.attrScalingConfigurationId;
    }
}
exports.ScalingConfiguration = ScalingConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGluZ2NvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FsaW5nY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTBEO0FBRXRCLDZHQUYzQix1Q0FBdUIsT0FFZ0M7QUFpTmhFOztHQUVHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVlsRDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWdDLEVBQUUsbUNBQTJDLElBQUk7UUFDM0gsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLHVCQUF1QixHQUFHLElBQUksdUNBQXVCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuRSx3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCO1lBQ3hELGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4Qiw4QkFBOEIsRUFBRSxLQUFLLENBQUMsOEJBQThCO1lBQ3BFLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QiwwQkFBMEIsRUFBRSxLQUFLLENBQUMsMEJBQTBCO1lBQzVELDZCQUE2QixFQUFFLEtBQUssQ0FBQyw2QkFBNkI7WUFDbEUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0Qyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsdUJBQXVCO1lBQ3RELHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0I7WUFDcEQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtTQUNqRCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBQ3hDLElBQUksQ0FBQywwQkFBMEIsR0FBRyx1QkFBdUIsQ0FBQywwQkFBMEIsQ0FBQztJQUN6RixDQUFDO0NBQ0o7QUE3REQsb0RBNkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU2NhbGluZ0NvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2Vzcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTY2FsaW5nQ29uZmlndXJhdGlvbiBhcyBTY2FsaW5nQ29uZmlndXJhdGlvblByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFU1M6OlNjYWxpbmdDb25maWd1cmF0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNjYWxpbmdDb25maWd1cmF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2NhbGluZ0dyb3VwSWQ6IFNjYWxpbmcgZ3JvdXAgaWQgdG8gY3JlYXRlIHRoZSBzY2FsaW5nIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NhbGluZ0dyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNyZWRpdFNwZWNpZmljYXRpb246IFRoZSBwZXJmb3JtYW5jZSBtb2RlIG9mIHRoZSBidXJzdGFibGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBTdGFuZGFyZDogdGhlIHN0YW5kYXJkIG1vZGUuXG4gICAgICogVW5saW1pdGVkOiB0aGUgdW5saW1pdGVkIG1vZGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3JlZGl0U3BlY2lmaWNhdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlcGxveW1lbnRTZXRJZDogRGVwbG95bWVudCBzZXQgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVwbG95bWVudFNldElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGlza01hcHBpbmdzOiBEaXNrIG1hcHBpbmdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNrTWFwcGluZ3M/OiBBcnJheTxSb3NTY2FsaW5nQ29uZmlndXJhdGlvbi5EaXNrTWFwcGluZ3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBob3N0TmFtZTogVGhlIGhvc3RuYW1lIG9mIHRoZSBFQ1MgaW5zdGFuY2UuIFRoZSBob3N0bmFtZSBjYW5ub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBwZXJpb2QgKC4pIG9yIGEgaHlwaGVuICgtKS4gVGhlIGhvc3RuYW1lIGNhbm5vdCBjb250YWluIGNvbnNlY3V0aXZlIHBlcmlvZHMgKC4pIG9yIGh5cGhlbnMgKC0pLiBOYW1pbmcgY29udmVudGlvbnMgZm9yIGRpZmZlcmVudCB0eXBlcyBvZiBpbnN0YW5jZXM6XG4gICAgICogV2luZG93cyBpbnN0YW5jZXM6IFRoZSBob3N0bmFtZSBtdXN0IGJlIDIgdG8gMTUgY2hhcmFjdGVycyBpbiBsZW5ndGgsIGFuZCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGFuZCBoeXBoZW5zICgtKS4gVGhlIGhvc3RuYW1lIGNhbm5vdCBjb250YWluIHBlcmlvZHMgKC4pIG9yIGNvbnRhaW4gb25seSBkaWdpdHMuXG4gICAgICogT3RoZXIgaW5zdGFuY2VzIHN1Y2ggYXMgTGludXggaW5zdGFuY2VzOiBUaGUgaG9zdG5hbWUgbXVzdCBiZSAyIHRvIDY0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBZb3UgY2FuIHVzZSBwZXJpb2RzICguKSB0byBzZXBhcmF0ZSBhIGhvc3RuYW1lIGludG8gbXVsdGlwbGUgc2VnbWVudHMuIEVhY2ggc2VnbWVudCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGFuZCBoeXBoZW5zICgtKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBob3N0TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGhwY0NsdXN0ZXJJZDogVGhlIEhQQyBjbHVzdGVyIElEIHRvIHdoaWNoIHRoZSBpbnN0YW5jZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhwY0NsdXN0ZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGltYWdlRmFtaWx5OiBUaGUgbmFtZSBvZiB0aGUgaW1hZ2UgZmFtaWx5LiBZb3UgY2FuIGNvbmZpZ3VyZSB0aGlzIHBhcmFtZXRlciB0byBvYnRhaW4gdGhlIGxhdGVzdCBhdmFpbGFibGUgY3VzdG9tIGltYWdlcyB3aXRoaW4gdGhlIHNwZWNpZmllZCBpbWFnZSBmYW1pbHkuIFRoZSBpbWFnZXMgYXJlIHVzZWQgdG8gY3JlYXRlIEVDUyBpbnN0YW5jZXMuIElmIHlvdSBoYXZlIHNldCB0aGUgSW1hZ2VJZCBwYXJhbWV0ZXIsIHlvdSBjYW5ub3Qgc2V0IHRoZSBJbWFnZUZhbWlseSBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW1hZ2VGYW1pbHk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbWFnZUlkOiBJbWFnZSBJRCB0byBjcmVhdGUgZWNzIGluc3RhbmNlIC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VJZDogU291cmNlIEVDUyBpbnN0YW5jZSB0byBjb3B5IGNvbmZpZ3VyYXRpb24sIGlmIHRoZSBwcm9wZXJ0aWVzIGlzIHNldHRpbmcsIFdoaWNoIHdpbGwgY29weSB0aGUgSW5zdGFuY2VUeXBlLCBJbWFnZUlkLCBJbnRlcm5ldENoYXJnZVR5cGUsIElvT3B0aW1pemVkLFVzZXJEYXRhLCBLZXlQYWlyTmFtZSwgUmFtUm9sZU5hbWUsIEludGVybmV0TWF4QmFuZHdpZHRoSW4sSW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQsIGFuZCBmaXJzdCBzZWN1cml0eSBncm91cCBpZCBmcm9tIHNvdXJjZSBpbnN0YW5jZSwgeW91IGNhbiBhbHNvIHNwZWNpZnkgdGhlIHJlbGF0aXZlIHByb3BlcnRpZXMgdG8gb3ZlcndyaXRlIHRoZSBwcm9wZXJ0aWVzIGNvcHkgZnJvbSBzb3VyY2UgaW5zdGFuY2UgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGluc3RhbmNlIGxhdW5jaGVkIGZyb20gdGhlIGN1cnJlbnQgc2NhbGluZyBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlVHlwZTogZWNzIHN1cHBvcnRlZCBpbnN0YW5jZSB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlVHlwZXM6IGVjcyBzdXBwb3J0ZWQgaW5zdGFuY2UgdHlwZXMuIExlbmd0aCBbMSwxMF0uIElmIEluc3RhbmNlVHlwZXMgaXMgc3BlY2lmaWVkLHRoZSBJbnN0YW5jZVR5cGUgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZXM/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW50ZXJuZXRDaGFyZ2VUeXBlOiBJbnN0YW5jZSBpbnRlcm5ldCBhY2Nlc3MgY2hhcmdlIHR5cGUuU3VwcG9ydCAnUGF5QnlCYW5kd2lkdGgnIGFuZCAnUGF5QnlUcmFmZmljJyBvbmx5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0Q2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGludGVybmV0TWF4QmFuZHdpZHRoSW46IE1heGltdW0gaW5jb21pbmcgYmFuZHdpZHRoIGZyb20gdGhlIHB1YmxpYyBuZXR3b3JrLCBtZWFzdXJlZCBpbiBNYnBzIChNZWdhIGJpdCBwZXIgc2Vjb25kKS4gVGhlIHZhbHVlIHJhbmdlIGlzIFsxLDIwMF0uIElmIHRoaXMgcGFyYW1ldGVyIHZhbHVlIGlzIG5vdCBzcGVjaWZpZWQsIEFsaXl1bkFQSSBhdXRvbWF0aWNhbGx5IHNldHMgdGhlIHZhbHVlIHRvIDIwMCBNYnBzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0TWF4QmFuZHdpZHRoSW4/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnRlcm5ldE1heEJhbmR3aWR0aE91dDogTWF4aW11bSBvdXRnb2luZyBiYW5kd2lkdGggZnJvbSB0aGUgcHVibGljIG5ldHdvcmssIG1lYXN1cmVkIGluIE1icHMgKE1lZ2EgYml0IHBlciBzZWNvbmQpLlxuICAgICAqIFRoZSB2YWx1ZSByYW5nZSBmb3IgUGF5QnlCYW5kd2lkdGggaXMgWzAsMTAwXS4gSWYgdGhpcyBwYXJhbWV0ZXIgdmFsdWUgaXMgbm90IHNwZWNpZmllZCwgQWxpeXVuQVBJIGF1dG9tYXRpY2FsbHkgc2V0cyB0aGUgdmFsdWUgdG8gMCBNYnBzLlxuICAgICAqIFRoZSB2YWx1ZSByYW5nZSBmb3IgUGF5QnlUcmFmZmljIGlzIFswLDEwMF0uIElmIHRoaXMgcGFyYW1ldGVyIHZhbHVlIGlzIG5vdCBzcGVjaWZpZWQsIGFuIGVycm9yIGlzIHJlcG9ydGVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpb09wdGltaXplZDogVGhlICdvcHRpbWl6ZWQnIGluc3RhbmNlIGNhbiBwcm92aWRlIGJldHRlciBJTyBwZXJmb3JtYW5jZS4gU3VwcG9ydCAnbm9uZScgYW5kICdvcHRpbWl6ZWQnIG9ubHksIGRlZmF1bHQgaXMgJ25vbmUnLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlvT3B0aW1pemVkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaXB2NkFkZHJlc3NDb3VudDogVGhlIG51bWJlciBvZiByYW5kb21seSBnZW5lcmF0ZWQgSVB2NiBhZGRyZXNzZXMgdG8gYmUgYXNzaWduZWQgdG8gdGhlIGVsYXN0aWMgbmV0d29yayBpbnRlcmZhY2UgKEVOSSkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXB2NkFkZHJlc3NDb3VudD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGtleVBhaXJOYW1lOiBTU0gga2V5IHBhaXIgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBrZXlQYWlyTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvYWRCYWxhbmNlcldlaWdodDogVGhlIHdlaWdodCBvZiB0aGUgRUNTIGluc3RhbmNlIGFzIGEgYmFja2VuZCBzZXJ2ZXIuIFZhbGlkIHZhbHVlczogMSB0byAxMDAuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogNTAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VyV2VpZ2h0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGFzc3dvcmQ6IFBhc3N3b3JkIG9mIGNyZWF0ZWQgZWNzIGluc3RhbmNlLiBNdXN0IGNvbnRhaW4gYXQgbGVhc3QgMyB0eXBlcyBvZiBzcGVjaWFsIGNoYXJhY3RlciwgbG93ZXIgY2hhcmFjdGVyLCB1cHBlciBjaGFyYWN0ZXIsIG51bWJlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXNzd29yZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhc3N3b3JkSW5oZXJpdDogV2hldGhlciB0byB1c2UgdGhlIHBhc3N3b3JkIHByZS1jb25maWd1cmVkIGluIHRoZSBpbWFnZSB5b3Ugc2VsZWN0IG9yIG5vdC4gV2hlbiBQYXNzd29yZEluaGVyaXQgaXMgc3BlY2lmaWVkLCB0aGUgUGFzc3dvcmQgbXVzdCBiZSBudWxsLiBGb3IgYSBzZWN1cmUgYWNjZXNzLCBtYWtlIHN1cmUgdGhhdCB0aGUgc2VsZWN0ZWQgaW1hZ2UgaGFzIHBhc3N3b3JkIGNvbmZpZ3VyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFzc3dvcmRJbmhlcml0PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJhbVJvbGVOYW1lOiBJbnN0YW5jZSBSQU0gcm9sZSBuYW1lLiBUaGUgbmFtZSBpcyBwcm92aWRlZCBhbmQgbWFpbnRhaW5lZCBieSBSZXNvdXJjZSBBY2Nlc3MgTWFuYWdlbWVudCAoUkFNKSBhbmQgY2FuIGJlIHF1ZXJpZWQgdXNpbmcgTGlzdFJvbGVzLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIFJBTSBBUEkgQ3JlYXRlUm9sZSBhbmQgTGlzdFJvbGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJhbVJvbGVOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzY2FsaW5nQ29uZmlndXJhdGlvbk5hbWU6IE5hbWUgb2YgY3JlYXRlZCBzY2FsaW5nIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBTZWN1cml0eSBHcm91cCB0byBjcmVhdGUgZWNzIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNwb3RQcmljZUxpbWl0OiBTZXQgdGhlIGhvdXJseSBtYXhpbXVtIHByaWNlIGZvciB0aGUgaW5zdGFuY2UuIFN1cHBvcnRzIGEgbWF4aW11bSBvZiAzIGRlY2ltYWwgcGxhY2VzLCBhbmQgdGhlIHBhcmFtZXRlciB0YWtlcyBlZmZlY3Qgb25seSB3aGVuIHRoZSB2YWx1ZSBvZiBTcG90U3RyYXRlZ3kgaXMgU3BvdFdpdGhQcmljZUxpbWl0Lkl0IGlzIGEgZGVmYXVsdCB2YWx1ZSBmb3IgYWxsIGluc3RhbmNlIHR5cGVzLCBhbmQgY2FuIGJlIG92ZXJ3cml0ZSBieSBTcG90UHJpY2VMaW1pdEZvckluc3RhbmNlVHlwZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNwb3RQcmljZUxpbWl0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BvdFByaWNlTGltaXRGb3JJbnN0YW5jZVR5cGU6IFNldCB0aGUgaG91cmx5IG1heGltdW0gcHJpY2UgZm9yIHRoZSBpbnN0YW5jZSBvZiBzcGVjaWZpZWQgaW5zdGFuY2UgdHlwZS5cbiAgICAgKiBUaGUgcGFyYW1ldGVyIHRha2VzIGVmZmVjdCBvbmx5IHdoZW4gdGhlIHZhbHVlIG9mIFNwb3RTdHJhdGVneSBpcyBTcG90V2l0aFByaWNlTGltaXQuXG4gICAgICogWW91IHNob3VsZCBpbnB1dCB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIHRhZyB3aXRoIHRoZSBmb3JtYXQgb2YgdGhlIEtleS1WYWx1ZSwgc3VjaCBhcyB7XCJrZXkxXCI6XCJ2YWx1ZTFcIixcImtleTJcIjpcInZhbHVlMlwiLCAuLi4gXCJrZXk1XCI6XCJ2YWx1ZTVcIn0uXG4gICAgICogQXQgbW9zdCA1MCBpdGVtcyBjYW4gYmUgc3BlY2lmaWVkLlxuICAgICAqIEtleVxuICAgICAqIFx0ZWNzIGluc3RhbmNlIHR5cGVcbiAgICAgKiBWYWx1ZVxuICAgICAqIFx0U3VwcG9ydHMgYSBtYXhpbXVtIG9mIDMgZGVjaW1hbCBwbGFjZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BvdFByaWNlTGltaXRGb3JJbnN0YW5jZVR5cGU/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzcG90U3RyYXRlZ3k6IFByZWVtcHRpb24gc3RyYXRlZ3kgZm9yIHBvc3QtcGFpZCBpbnN0YW5jZXMuIEl0IHRha2VzIGVmZmVjdCB3aGVuIHRoZSBwYXJhbWV0ZXIgSW5zdGFuY2VDaGFyZ2VUeXBlIHRha2VzIHRoZSB2YWx1ZSBvZiBQb3N0UGFpZC4gUmFuZ2VzOlxuICAgICAqIE5vU3BvdDogTm9ybWFsIHBheS1wZXItdXNlIGluc3RhbmNlXG4gICAgICogU3BvdFdpdGhQcmljZUxpbWl0OiBTZXQgYSBwcmVlbXB0aXZlIGluc3RhbmNlIG9mIHRoZSBjYXAgcHJpY2VcbiAgICAgKiBTcG90QXNQcmljZUdvOiBTeXN0ZW0gYXV0b21hdGljIGJpZGRpbmcsIGZvbGxvd2luZyB0aGUgY3VycmVudCBtYXJrZXQgYWN0dWFsIHByaWNlXG4gICAgICogRGVmYXVsdDogTm9TcG90LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNwb3RTdHJhdGVneT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5c3RlbURpc2tBdXRvU25hcHNob3RQb2xpY3lJZDogQXV0byBzbmFwc2hvdCBwb2xpY3kgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0F1dG9TbmFwc2hvdFBvbGljeUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza0NhdGVnb3J5OiBDYXRlZ29yeSBvZiBzeXN0ZW0gZGlzay4gRGVmYXVsdCBpcyBjbG91ZC5zdXBwb3J0IGNsb3VkfGNsb3VkX2VmZmljaWVuY3l8Y2xvdWRfc3NkfGNsb3VkX2Vzc2R8ZXBoZW1lcmFsX3NzZHxjbG91ZF9hdXRvXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0NhdGVnb3J5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza1BlcmZvcm1hbmNlTGV2ZWw6IFRoZSBwZXJmb3JtYW5jZSBsZXZlbCBvZiBhbiBFU1NELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tQZXJmb3JtYW5jZUxldmVsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza1NpemU6IFNpemUgb2Ygc3lzdGVtIGRpc2suIFVuaXQgaXMgR0IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza1NpemU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdMaXN0OiBUaGUgdGFncyBvZiBhbiBpbnN0YW5jZSBpbiBsaXN0IGZvcm1hdC5cbiAgICAgKiBEbyBub3QgdXNlIHdpdGggVGFncyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAqIFlvdSBzaG91bGQgaW5wdXQgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSB0YWcgd2l0aCB0aGUgZm9ybWF0IG9mIEtleS1WYWx1ZSBsaXN0LCBzdWNoIGFzIFt7XCJLZXlcIjpcImtleTFcIixcIlZhbHVlXCI6XCJ2YWx1ZTFcIn0sIC4uLl0uXG4gICAgICogQXQgbW9zdCAyMCB0YWdzIGNhbiBiZSBzcGVjaWZpZWQuXG4gICAgICogS2V5XG4gICAgICogSXQgY2FuIGJlIHVwIHRvIDY0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIENhbm5vdCBiZWdpbiB3aXRoIGFsaXl1bi5cbiAgICAgKiBDYW5ub3QgYmVnaW4gd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqIENhbm5vdCBiZSBhIG51bGwgc3RyaW5nLlxuICAgICAqIFZhbHVlXG4gICAgICogSXQgY2FuIGJlIHVwIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBDYW5ub3QgYmVnaW4gd2l0aCBhbGl5dW4uXG4gICAgICogQ2Fubm90IGJlZ2luIHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKiBDYW4gYmUgYSBudWxsIHN0cmluZy5JZiBsZXNzIHRoZW4gMjAgdGFncyBhcmUgc3BlY2lmaWVkLCByb3Mgd2lsbCBhZGQgYSB0YWcoS2V5OiBcInJvcy1hbGl5dW4tY3JlYXRlZFwiLCBWYWx1ZTpcIjxyZXNvdXJjZV9uYW1lPl9zdGFja188c3RhY2tfaWQ+XCIpIGlmIHBvc3NpYmxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ0xpc3Q/OiBBcnJheTxSb3NTY2FsaW5nQ29uZmlndXJhdGlvbi5UYWdMaXN0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlckRhdGE6IFVzZXIgZGF0YSB0byBwYXNzIHRvIGluc3RhbmNlLiBbMSwgMTZLQl0gY2hhcmFjdGVycy5Vc2VyIGRhdGEgc2hvdWxkIG5vdCBiZSBiYXNlNjQgZW5jb2RlZC4gSWYgeW91IHdhbnQgdG8gcGFzcyBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdG8gdGhlIHByb3BlcnR5LCB1c2UgZnVuY3Rpb24gRm46OkJhc2U2NERlY29kZSB0byBkZWNvZGUgdGhlIGJhc2U2NCBzdHJpbmcgZmlyc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlckRhdGE/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVTUzo6U2NhbGluZ0NvbmZpZ3VyYXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2FsaW5nQ29uZmlndXJhdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2NhbGluZ0NvbmZpZ3VyYXRpb25JZDogVGhlIHNjYWxpbmcgY29uZmlndXJhdGlvbiBpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2NhbGluZ0NvbmZpZ3VyYXRpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVTUzo6U2NhbGluZ0NvbmZpZ3VyYXRpb25gLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNjYWxpbmdDb25maWd1cmF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zU2NhbGluZ0NvbmZpZ3VyYXRpb24gPSBuZXcgUm9zU2NhbGluZ0NvbmZpZ3VyYXRpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICBzY2FsaW5nQ29uZmlndXJhdGlvbk5hbWU6IHByb3BzLnNjYWxpbmdDb25maWd1cmF0aW9uTmFtZSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgZGlza01hcHBpbmdzOiBwcm9wcy5kaXNrTWFwcGluZ3MsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrU2l6ZTogcHJvcHMuc3lzdGVtRGlza1NpemUsXG4gICAgICAgICAgICB1c2VyRGF0YTogcHJvcHMudXNlckRhdGEsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrQXV0b1NuYXBzaG90UG9saWN5SWQ6IHByb3BzLnN5c3RlbURpc2tBdXRvU25hcHNob3RQb2xpY3lJZCxcbiAgICAgICAgICAgIHJhbVJvbGVOYW1lOiBwcm9wcy5yYW1Sb2xlTmFtZSxcbiAgICAgICAgICAgIHN5c3RlbURpc2tQZXJmb3JtYW5jZUxldmVsOiBwcm9wcy5zeXN0ZW1EaXNrUGVyZm9ybWFuY2VMZXZlbCxcbiAgICAgICAgICAgIHNwb3RQcmljZUxpbWl0Rm9ySW5zdGFuY2VUeXBlOiBwcm9wcy5zcG90UHJpY2VMaW1pdEZvckluc3RhbmNlVHlwZSxcbiAgICAgICAgICAgIGlwdjZBZGRyZXNzQ291bnQ6IHByb3BzLmlwdjZBZGRyZXNzQ291bnQsXG4gICAgICAgICAgICBpbWFnZUlkOiBwcm9wcy5pbWFnZUlkLFxuICAgICAgICAgICAgc3BvdFByaWNlTGltaXQ6IHByb3BzLnNwb3RQcmljZUxpbWl0LFxuICAgICAgICAgICAgdGFnTGlzdDogcHJvcHMudGFnTGlzdCxcbiAgICAgICAgICAgIGluc3RhbmNlVHlwZXM6IHByb3BzLmluc3RhbmNlVHlwZXMsXG4gICAgICAgICAgICBpbnN0YW5jZVR5cGU6IHByb3BzLmluc3RhbmNlVHlwZSxcbiAgICAgICAgICAgIGhvc3ROYW1lOiBwcm9wcy5ob3N0TmFtZSxcbiAgICAgICAgICAgIHNwb3RTdHJhdGVneTogcHJvcHMuc3BvdFN0cmF0ZWd5LFxuICAgICAgICAgICAgcGFzc3dvcmRJbmhlcml0OiBwcm9wcy5wYXNzd29yZEluaGVyaXQsXG4gICAgICAgICAgICBwYXNzd29yZDogcHJvcHMucGFzc3dvcmQsXG4gICAgICAgICAgICBrZXlQYWlyTmFtZTogcHJvcHMua2V5UGFpck5hbWUsXG4gICAgICAgICAgICBsb2FkQmFsYW5jZXJXZWlnaHQ6IHByb3BzLmxvYWRCYWxhbmNlcldlaWdodCxcbiAgICAgICAgICAgIGlvT3B0aW1pemVkOiBwcm9wcy5pb09wdGltaXplZCxcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHByb3BzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBocGNDbHVzdGVySWQ6IHByb3BzLmhwY0NsdXN0ZXJJZCxcbiAgICAgICAgICAgIHNjYWxpbmdHcm91cElkOiBwcm9wcy5zY2FsaW5nR3JvdXBJZCxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZDogcHJvcHMuc2VjdXJpdHlHcm91cElkLFxuICAgICAgICAgICAgaW1hZ2VGYW1pbHk6IHByb3BzLmltYWdlRmFtaWx5LFxuICAgICAgICAgICAgc3lzdGVtRGlza0NhdGVnb3J5OiBwcm9wcy5zeXN0ZW1EaXNrQ2F0ZWdvcnksXG4gICAgICAgICAgICBpbnRlcm5ldENoYXJnZVR5cGU6IHByb3BzLmludGVybmV0Q2hhcmdlVHlwZSxcbiAgICAgICAgICAgIGluc3RhbmNlTmFtZTogcHJvcHMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgICAgZGVwbG95bWVudFNldElkOiBwcm9wcy5kZXBsb3ltZW50U2V0SWQsXG4gICAgICAgICAgICBpbnRlcm5ldE1heEJhbmR3aWR0aE91dDogcHJvcHMuaW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQsXG4gICAgICAgICAgICBpbnRlcm5ldE1heEJhbmR3aWR0aEluOiBwcm9wcy5pbnRlcm5ldE1heEJhbmR3aWR0aEluLFxuICAgICAgICAgICAgY3JlZGl0U3BlY2lmaWNhdGlvbjogcHJvcHMuY3JlZGl0U3BlY2lmaWNhdGlvbixcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTY2FsaW5nQ29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyU2NhbGluZ0NvbmZpZ3VyYXRpb25JZCA9IHJvc1NjYWxpbmdDb25maWd1cmF0aW9uLmF0dHJTY2FsaW5nQ29uZmlndXJhdGlvbklkO1xuICAgIH1cbn1cbiJdfQ==