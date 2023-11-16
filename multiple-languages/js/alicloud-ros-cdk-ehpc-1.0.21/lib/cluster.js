"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cluster = exports.ClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ehpc_generated_1 = require("./ehpc.generated");
Object.defineProperty(exports, "ClusterProperty", { enumerable: true, get: function () { return ehpc_generated_1.RosCluster; } });
/**
 * A ROS resource type:  `ALIYUN::EHPC::Cluster`
 */
class Cluster extends ros.Resource {
    /**
     * Create a new `ALIYUN::EHPC::Cluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCluster = new ehpc_generated_1.RosCluster(this, id, {
            volumeProtocol: props.volumeProtocol,
            resourceGroupId: props.resourceGroupId,
            computeEnableHt: props.computeEnableHt,
            withoutElasticIp: props.withoutElasticIp,
            systemDiskType: props.systemDiskType,
            remoteVisEnable: props.remoteVisEnable,
            name: props.name,
            volumeId: props.volumeId,
            ramRoleName: props.ramRoleName,
            deployMode: props.deployMode,
            postInstallScript: props.postInstallScript,
            imageId: props.imageId,
            isComputeEss: props.isComputeEss,
            ecsOrderLoginInstanceType: props.ecsOrderLoginInstanceType,
            jobQueue: props.jobQueue,
            vSwitchId: props.vSwitchId,
            period: props.period,
            computeSpotStrategy: props.computeSpotStrategy,
            ecsOrderManagerInstanceType: props.ecsOrderManagerInstanceType,
            ehpcVersion: props.ehpcVersion,
            volumeMountpoint: props.volumeMountpoint,
            ecsOrderManagerCount: props.ecsOrderManagerCount,
            ecsOrderComputeInstanceType: props.ecsOrderComputeInstanceType,
            vpcId: props.vpcId,
            application: props.application,
            periodUnit: props.periodUnit,
            imageOwnerAlias: props.imageOwnerAlias,
            ecsOrderComputeCount: props.ecsOrderComputeCount,
            description: props.description,
            securityGroupName: props.securityGroupName,
            systemDiskSize: props.systemDiskSize,
            additionalVolumes: props.additionalVolumes,
            autoRenew: props.autoRenew,
            computeSpotPriceLimit: props.computeSpotPriceLimit,
            ramNodeTypes: props.ramNodeTypes,
            clientVersion: props.clientVersion,
            volumeType: props.volumeType,
            inputFileUrl: props.inputFileUrl,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod,
            keyPairName: props.keyPairName,
            remoteDirectory: props.remoteDirectory,
            networkInterfaceTrafficMode: props.networkInterfaceTrafficMode,
            sccClusterId: props.sccClusterId,
            zoneId: props.zoneId,
            systemDiskLevel: props.systemDiskLevel,
            ecsOrderLoginCount: props.ecsOrderLoginCount,
            securityGroupId: props.securityGroupId,
            schedulerType: props.schedulerType,
            accountType: props.accountType,
            haEnable: props.haEnable,
            osTag: props.osTag,
            ecsChargeType: props.ecsChargeType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrEcsInfo = rosCluster.attrEcsInfo;
        this.attrName = rosCluster.attrName;
        this.attrSecurityGroupId = rosCluster.attrSecurityGroupId;
    }
}
exports.Cluster = Cluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUE4QztBQUV2QixnR0FGZCwyQkFBVSxPQUVtQjtBQWtVdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQTRCckM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxVQUFVLEdBQUcsSUFBSSwyQkFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLHlCQUF5QjtZQUMxRCxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLDJCQUEyQixFQUFFLEtBQUssQ0FBQywyQkFBMkI7WUFDOUQsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCwyQkFBMkIsRUFBRSxLQUFLLENBQUMsMkJBQTJCO1lBQzlELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1lBQ2xELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLDJCQUEyQjtZQUM5RCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQ3JDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUM7SUFDOUQsQ0FBQztDQUNKO0FBbkdELDBCQW1HQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0NsdXN0ZXIgfSBmcm9tICcuL2VocGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQ2x1c3RlciBhcyBDbHVzdGVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVIUEM6OkNsdXN0ZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2x1c3RlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVjc09yZGVyQ29tcHV0ZUNvdW50OiBDb21wdXRpbmcgbm9kZSBudW1iZXIsIHdoaWNoIHJhbmdlcyBmcm9tOiAwLTk5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVjc09yZGVyQ29tcHV0ZUNvdW50OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlY3NPcmRlckNvbXB1dGVJbnN0YW5jZVR5cGU6IENsdXN0ZXIgY29tcHV0aW5nIG5vZGUgaW5zdGFuY2Ugc3BlY2lmaWNhdGlvbnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWNzT3JkZXJDb21wdXRlSW5zdGFuY2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlY3NPcmRlckxvZ2luQ291bnQ6IExvZ2luIG5vZGUgbnVtYmVyIGNhbiBvbmx5IGJlIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWNzT3JkZXJMb2dpbkNvdW50OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlY3NPcmRlckxvZ2luSW5zdGFuY2VUeXBlOiBMb2cgY2x1c3RlciBub2RlIGluc3RhbmNlIHNwZWNpZmljYXRpb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVjc09yZGVyTG9naW5JbnN0YW5jZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVjc09yZGVyTWFuYWdlckluc3RhbmNlVHlwZTogQ2x1c3RlciBjb250cm9sIG5vZGUgaW5zdGFuY2Ugc3BlY2lmaWNhdGlvbnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWNzT3JkZXJNYW5hZ2VySW5zdGFuY2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBDbHVzdGVyIG5hbWUuIDItNjQgY2hhcmFjdGVycyBpbiBsZW5ndGgsIGFsbG93aW5nIG9ubHkgaW5jbHVkZSBDaGluZXNlLCBsZXR0ZXJzLCBudW1iZXJzLCBkYXNoZXMgKC0pIGFuZCB1bmRlcnNjb3JlIChfKSwgbXVzdCBiZWdpbiB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3NUYWc6IE9wZXJhdGluZyBzeXN0ZW0gaW1hZ2UgdGFnLiBZb3UgY2FuIGNhbGwgTGlzdEltYWdlcyBBUEkgdG8gcXVlcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3NUYWc6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZTd2l0Y2hJZDogVlBDIGluIHN3aXRjaCBJRC4gUHJvZHVjdHMgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgVlBDIG5ldHdvcmsuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2NvdW50VHlwZTogVGhlIHNlcnZpY2UgdHlwZSBvZiB0aGUgZG9tYWluIGFjY291bnQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBuaXNcbiAgICAgKiBsZGFwXG4gICAgICogRGVmYXVsdCB2YWx1ZTogbmlzXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjb3VudFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhZGRpdGlvbmFsVm9sdW1lczpcbiAgICAgKi9cbiAgICByZWFkb25seSBhZGRpdGlvbmFsVm9sdW1lcz86IEFycmF5PFJvc0NsdXN0ZXIuQWRkaXRpb25hbFZvbHVtZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhcHBsaWNhdGlvbjogQXBwbGljYXRpb24gc29mdHdhcmUgdGFnIChTb2Z0d2FyZVRhZykgbGlzdCwgWW91IGNhbiBjYWxsIExpc3RTb2Z0d2FyZXMgQVBJIHRvIHF1ZXJ5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcGxpY2F0aW9uPzogQXJyYXk8Um9zQ2x1c3Rlci5BcHBsaWNhdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9SZW5ldzogdHJ1ZTogYXV0b21hdGljIHJlbmV3YWxzOyBmYWxzZTogbm8gYXV0b21hdGljIHJlbmV3YWxzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZW5ldz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXdQZXJpb2Q6IER1cmF0aW9uIG9mIGVhY2ggYXV0b21hdGljIHJlbmV3YWxzLCBBdXRvUmVuZXcgdGFrZSBlZmZlY3Qgd2hlbiBBdXRvUmVuZXcgaXMgVHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUmVuZXdQZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbGllbnRWZXJzaW9uOiBUaGUgdmVyc2lvbiBvZiB0aGUgRS1IUEMgY2xpZW50LiBCeSBkZWZhdWx0LCB0aGUgcGFyYW1ldGVyIGlzIHNldCB0byB0aGUgbGF0ZXN0IHZlcnNpb24gbnVtYmVyLlxuICAgICAqIFlvdSBjYW4gY2FsbCB0aGUgTGlzdEN1cnJlbnRDbGllbnRWZXJzaW9uIG9wZXJhdGlvbiB0byBxdWVyeSB0aGUgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBFLUhQQyBjbGllbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2xpZW50VmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbXB1dGVFbmFibGVIdDogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGNvbXB1dGUgbm9kZXMgc3VwcG9ydCBoeXBlci10aHJlYWRpbmcuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBIeXBlci10aHJlYWRpbmcgaXMgc3VwcG9ydGVkLlxuICAgICAqIGZhbHNlOiBIeXBlci10aHJlYWRpbmcgaXMgbm90IHN1cHBvcnRlZC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiB0cnVlXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tcHV0ZUVuYWJsZUh0PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbXB1dGVTcG90UHJpY2VMaW1pdDogU2V0IGFuIGV4YW1wbGUgb2YgdGhlIGhpZ2hlc3QgcHJpY2UgcGVyIGhvdXIsIGFyZSBmbG9hdGluZy1wb2ludCB2YWx1ZXMsIGluIHRoZSByYW5nZSBvZiB0aGUgY3VycmVudCBwcmljZSByYW5nZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21wdXRlU3BvdFByaWNlTGltaXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb21wdXRlU3BvdFN0cmF0ZWd5OiBDb21wdXRlIG5vZGVzIGJpZGRpbmcgc3RyYXRlZ3ksIHZhbHVlIE5vU3BvdCwgU3BvdFdpdGhQcmljZUxpbWl0IG9yIFNwb3RBc1ByaWNlR29cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21wdXRlU3BvdFN0cmF0ZWd5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVwbG95TW9kZTogVGhlIG1vZGUgaW4gd2hpY2ggdGhlIGNsdXN0ZXIgaXMgZGVwbG95ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBTdGFuZGFyZDogQW4gYWNjb3VudCBub2RlLCBhIHNjaGVkdWxpbmcgbm9kZSwgYSBsb2dvbiBub2RlLCBhbmQgbXVsdGlwbGUgY29tcHV0ZSBub2RlcyBhcmUgc2VwYXJhdGVseSBkZXBsb3llZC5cbiAgICAgKiBTaW1wbGU6IEEgbWFuYWdlbWVudCBub2RlLCBhIGxvZ29uIG5vZGUsIGFuZCBtdWx0aXBsZSBjb21wdXRlIG5vZGVzIGFyZSBkZXBsb3llZC4gVGhlIG1hbmFnZW1lbnQgbm9kZSBjb25zaXN0cyBvZiBhbiBhY2NvdW50IG5vZGUgYW5kIGEgc2NoZWR1bGluZyBub2RlLiBUaGUgbG9nb24gbm9kZSBhbmQgY29tcHV0ZSBub2RlcyBhcmUgc2VwYXJhdGVseSBkZXBsb3llZC5cbiAgICAgKiBUaW55OiBBIG1hbmFnZW1lbnQgbm9kZSBhbmQgbXVsdGlwbGUgY29tcHV0ZSBub2RlcyBhcmUgZGVwbG95ZWQuIFRoZSBtYW5hZ2VtZW50IG5vZGUgY29uc2lzdHMgb2YgYW4gYWNjb3VudCBub2RlLCBhIHNjaGVkdWxpbmcgbm9kZSwgYW5kIGEgbG9nb24gbm9kZS4gVGhlIGNvbXB1dGUgbm9kZXMgYXJlIHNlcGFyYXRlbHkgZGVwbG95ZWQuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogU3RhbmRhcmRcbiAgICAgKi9cbiAgICByZWFkb25seSBkZXBsb3lNb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IENsdXN0ZXIgZGVzY3JpcHRpb24sIDIgdG8gMTI4IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlY3NDaGFyZ2VUeXBlOiBFQ1MgaW5zdGFuY2UgcGF5bWVudCB0eXBlLCBQb3N0UGFpZDogUGF5LUFzLVlvdS1Hby5QcmVQYWlkOiBTdWJzY3JpcHRpb24uSWYgeW91IGNob29zZSBQcmVQYWlkLCBhdXRvbWF0aWMgcmVuZXdhbCB3aWxsIGJlIGVuYWJsZWQgYnkgZGVmYXVsdCwgYW5kIGNsb3NlZCB3aGVuIG5vZGUgaXMgcmVsZWFzZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWNzQ2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVjc09yZGVyTWFuYWdlckNvdW50OiBDb250cm9sIG5vZGUgbnVtYmVyIGNhbiBiZSAxLCAyXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWNzT3JkZXJNYW5hZ2VyQ291bnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlaHBjVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgRS1IUEMuIEJ5IGRlZmF1bHQsIHRoZSBwYXJhbWV0ZXIgaXMgc2V0IHRvIHRoZSBsYXRlc3QgdmVyc2lvbiBudW1iZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWhwY1ZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoYUVuYWJsZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIHRoZSBoaWdoIGF2YWlsYWJpbGl0eSBmZWF0dXJlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZTogZW5hYmxlcyB0aGUgaGlnaCBhdmFpbGFiaWxpdHkgZmVhdHVyZVxuICAgICAqIGZhbHNlOiBkaXNhYmxlcyB0aGUgaGlnaCBhdmFpbGFiaWxpdHkgZmVhdHVyZVxuICAgICAqIERlZmF1bHQgdmFsdWU6IGZhbHNlXG4gICAgICogTm90ZSBJZiBoaWdoIGF2YWlsYWJpbGl0eSBpcyBlbmFibGVkLCBwcmltYXJ5IG1hbmFnZW1lbnQgbm9kZXMgYW5kIHNlY29uZGFyeSBtYW5hZ2VtZW50IG5vZGVzIGFyZSB1c2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhhRW5hYmxlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGltYWdlSWQ6IE1pcnJvciBJZCwgaWYgSW1hZ2VUeXBlIGEgc3lzdGVtLCBiYXNlZCBvbiB0aGUgaW1hZ2UgSUQgaXMgZGV0ZXJtaW5lZCBvbmx5IGFjY29yZGluZyBPc1RhZzsgaWYgc2VsZiwgb3RoZXJzLCBvciBtYXJrZXRwbGFjZSwgSW1hZ2VJZCBpcyBtYW5kYXRvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW1hZ2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGltYWdlT3duZXJBbGlhczogTWlycm9yIHR5cGU6IHN5c3RlbSwgc2VsZiwgb3RoZXJzIG9yIG1hcmtldHBsYWNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW1hZ2VPd25lckFsaWFzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5wdXRGaWxlVXJsOiBUaGUgVVJMIG9mIHRoZSBqb2IgZmlsZXMgdGhhdCBhcmUgdXBsb2FkZWQgdG8gYW4gT2JqZWN0IFN0b3JhZ2UgU2VydmljZSAoT1NTKSBidWNrZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5wdXRGaWxlVXJsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaXNDb21wdXRlRXNzOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgYXV0byBzY2FsaW5nLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZTogZW5hYmxlcyBhdXRvIHNjYWxpbmdcbiAgICAgKiBmYWxzZTogZGlzYWJsZXMgYXV0byBzY2FsaW5nXG4gICAgICogRGVmYXVsdCB2YWx1ZTogZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBpc0NvbXB1dGVFc3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgam9iUXVldWU6IFx0VGhlIHF1ZXVlIHRvIHdoaWNoIHRoZSBjb21wdXRlIG5vZGVzIGFyZSBhZGRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBqb2JRdWV1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGtleVBhaXJOYW1lOiBLZXkgcGFpciBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVBhaXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmV0d29ya0ludGVyZmFjZVRyYWZmaWNNb2RlOiBDb21tdW5pY2F0aW9uIG1vZGUgb2YgYW4gZWxhc3RpYyBOSUMuIFZhbHVlIHZhbHVlczpcbiAgICAgKiAtICoqU3RhbmRhcmQqKjogVGhlIFRDUCBjb21tdW5pY2F0aW9uIG1vZGUgaXMgdXNlZC5cbiAgICAgKiAtICoqSGlnaFBlcmZvcm1hbmNlKio6IEVuYWJsZXMgdGhlIEVsYXN0aWMgUkRNQSBJbnRlcmZhY2UgKEVSSSkgYW5kIHVzZXMgdGhlIFJETUEgY29tbXVuaWNhdGlvbiBtb2RlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcmtJbnRlcmZhY2VUcmFmZmljTW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhc3N3b3JkOiBSb290IHBhc3N3b3JkIG9mIGp1bXAgc2VydmVyIChsb2dpbiBub2RlKS4gOCB0byAzMCBjaGFyYWN0ZXJzLCBtdXN0IGNvbnRhaW4gdGhyZWUgKHVwcGVyIGFuZCBsb3dlciBjYXNlIGxldHRlcnMsIG51bWJlcnMgYW5kIHNwZWNpYWwgc3ltYm9scykuICEgU3VwcG9ydHMgdGhlIGZvbGxvd2luZyBzcGVjaWFsIGNoYXJhY3RlcnMgOigpIGB+IEAgIyAkJSBeICYgKiAtICsgPSB8IHt9IFtdOjsgJzw+LCAvIEJlIHN1cmUgdG8gdXNlIHRoZSBIVFRQUyBwcm90b2NvbCBBUEkgY2FsbCB0byBhdm9pZCBwYXNzd29yZCBsZWFrcyB0aGF0IG1heSBvY2N1ci4/LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOiBUaGUgcHVyY2hhc2Ugb2YgbG9uZyByZXNvdXJjZXMsIHVuaXRzOiB3ZWVrIC8gbW9udGggLyB5ZWFyLiBXaGVuIHRoZSB2YWx1ZSBvZiB0aGUgcGFyYW1ldGVyIEVjc0NoYXJnZVR5cGUgd2hlbiBQcmVQYWlkIHRha2UgZWZmZWN0IGFuZCBmb3IgdGhlIHNlbGVjdGVkIHZhbHVlIHdpbGwgYmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kVW5pdDogVGhlIHB1cmNoYXNlIG9mIGxvbmctcmVzb3VyY2VzIHVuaXQuIEFsdGVybmF0aXZlbHkgdmFsdWUgV2VlayAvIE1vbnRoIC8geWVhci5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2RVbml0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcG9zdEluc3RhbGxTY3JpcHQ6XG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9zdEluc3RhbGxTY3JpcHQ/OiBBcnJheTxSb3NDbHVzdGVyLlBvc3RJbnN0YWxsU2NyaXB0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmFtTm9kZVR5cGVzOiBXaGVuIGF1dGhvcml6aW5nIGluc3RhbmNlIGNvbmZpZ3VyYXRpb24sIHRoZSBub2RlIHR5cGUgdG8gd2hpY2ggdGhlIFJBTSByb2xlIGlzIGJvdW5kLlxuICAgICAqIFdoZW4gdGhlIHZhbHVlIG9mIERlcGxveU1vZGUgaXMgU3RhbmRhcmQsIHRoZSB2YWx1ZSByYW5nZTogc2NoZWR1bGVyLCBhY2NvdW50LCBsb2dpbiwgY29tcHV0ZS5cbiAgICAgKiBXaGVuIHRoZSB2YWx1ZSBvZiBEZXBsb3lNb2RlIGlzIFNpbXBsZSwgdGhlIHZhbHVlIHJhbmdlOiBtYW5hZ2VyLCBsb2dpbiwgY29tcHV0ZS5cbiAgICAgKiBXaGVuIHRoZSB2YWx1ZSBvZiBEZXBsb3lNb2RlIGlzIFRpbnksIHRoZSB2YWx1ZSByYW5nZTogbWFuYWdlciwgY29tcHV0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByYW1Ob2RlVHlwZXM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmFtUm9sZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBSZXNvdXJjZSBBY2Nlc3MgTWFuYWdlbWVudCAoUkFNKSByb2xlLlxuICAgICAqIFlvdSBjYW4gY2FsbCB0aGUgTGlzdFJvbGVzIG9wZXJhdGlvbiBwcm92aWRlZCBieSBSQU0gdG8gcXVlcnkgdGhlIGNyZWF0ZWQgUkFNIHJvbGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJhbVJvbGVOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVtb3RlRGlyZWN0b3J5OiBNb3VudCBzaGFyZWQgc3RvcmFnZSByZW1vdGUgZGlyZWN0b3J5LiBUaGUgZmluYWwgcGF0aCB0byB0aGUgbW91bnQgcG9pbnQgYW5kIG1vdW50IHRoZSByZW1vdGUgZGlyZWN0b3J5IGNvbXBvc2l0aW9uOiBOYXNNb3VudHBvaW50OiAvIFJlbW90ZURpcmVjdG9yeVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlbW90ZURpcmVjdG9yeT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlbW90ZVZpc0VuYWJsZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIFZpcnR1YWwgTmV0d29yayBDb21wdXRpbmcgKFZOQykuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBlbmFibGVzIFZOQ1xuICAgICAqIGZhbHNlOiBkaXNhYmxlcyBWTkNcbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlbW90ZVZpc0VuYWJsZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICogWW91IGNhbiBjYWxsIHRoZSBMaXN0UmVzb3VyY2VHcm91cHMgb3BlcmF0aW9uIHRvIG9idGFpbiB0aGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNjY0NsdXN0ZXJJZDogV2hlbiBTQ0MgbW9kZWxzLCBpZiB5b3UgcGFzcyB0aGlzIGZpZWxkLCB0aGVuIHRoZSBzcGVjaWZpZWQgU2NjQ2x1c3RlciBjcmVhdGUgU2NjIGluc3RhbmNlLCBvdGhlcndpc2UgaXQgd2lsbCBjcmVhdGUgYW4gaW5zdGFuY2UgZm9yIHRoZSB1c2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjY0NsdXN0ZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNjaGVkdWxlclR5cGU6IFRoZSB0eXBlIG9mIHRoZSBzY2hlZHVsZXIuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBwYnNcbiAgICAgKiBzbHVybVxuICAgICAqIG9wZW5ncmlkc2NoZWR1bGVyXG4gICAgICogZGVhZGxpbmVcbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBwYnNcbiAgICAgKi9cbiAgICByZWFkb25seSBzY2hlZHVsZXJUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBTZWN1cml0eSBncm91cCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwTmFtZTogSWYgeW91IGRvIG5vdCB1c2UgYW4gZXhpc3Rpbmcgc2VjdXJpdHkgZ3JvdXAgKFNlY3VyaXR5R3JvdXBJZCBpcyBlbXB0eSksIHRoZW4gdXNlIHRoaXMgbmFtZSB0byBjcmVhdGUgYSBuZXcgc2VjdXJpdHkgZ3JvdXAsIHRoZSBkZWZhdWx0IHBvbGljeS4gRm9ybWF0IFJlcXVpcmVtZW50cyBSZWZlcmVuY2UgRUNTIHNlY3VyaXR5IGdyb3VwIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzeXN0ZW1EaXNrTGV2ZWw6IFRoZSBwZXJmb3JtYW5jZSBsZXZlbCBvZiB0aGUgRVNTRCB0aGF0IGlzIGNyZWF0ZWQgYXMgdGhlIHN5c3RlbSBkaXNrLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogUEwwOiBBIHNpbmdsZSBFU1NEIGNhbiBkZWxpdmVyIHVwIHRvIDEwLDAwMCBpbnB1dC9vdXRwdXQgb3BlcmF0aW9ucyBwZXIgc2Vjb25kIChJT1BTKSBvZiByYW5kb20gcmVhZC93cml0ZS5cbiAgICAgKiBQTDE6IEEgc2luZ2xlIEVTU0QgY2FuIGRlbGl2ZXIgdXAgdG8gNTAsMDAwIElPUFMgb2YgcmFuZG9tIHJlYWQvd3JpdGUuXG4gICAgICogUEwyOiBBIHNpbmdsZSBFU1NEIGNhbiBkZWxpdmVyIHVwIHRvIDEwMCwwMDAgSU9QUyBvZiByYW5kb20gcmVhZC93cml0ZS5cbiAgICAgKiBQTDM6IEEgc2luZ2xlIEVTU0QgY2FuIGRlbGl2ZXIgdXAgdG8gMSwwMDAsMDAwIElPUFMgb2YgcmFuZG9tIHJlYWQvd3JpdGUuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogUEwxXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0xldmVsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza1NpemU6IFRoZSBzaXplIG9mIHRoZSBzeXN0ZW0gZGlzay4gVW5pdDogR0JcbiAgICAgKiBWYWxpZCB2YWx1ZXM6IDQwIHRvIDUwMFxuICAgICAqIERlZmF1bHQgdmFsdWU6IDQwXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza1NpemU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzeXN0ZW1EaXNrVHlwZTogVGhlIHR5cGUgb2YgdGhlIHN5c3RlbSBkaXNrLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogY2xvdWRfZWZmaWNpZW5jeTogdWx0cmEgZGlzay5cbiAgICAgKiBjbG91ZF9zc2Q6IFNTRC5cbiAgICAgKiBjbG91ZF9lc3NkOiBFU1NELlxuICAgICAqIERlZmF1bHQgdmFsdWU6IGNsb3VkX3NzZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbURpc2tUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdm9sdW1lSWQ6IFRoZSBJRCBvZiB0aGUgZmlsZSBzeXN0ZW0uIElmIHlvdSBsZWF2ZSB0aGUgcGFyYW1ldGVyIGVtcHR5LCBhIFBlcmZvcm1hbmNlIE5BUyBmaWxlIHN5c3RlbSBpcyBjcmVhdGVkIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdm9sdW1lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2b2x1bWVNb3VudHBvaW50OiBUaGUgbW91bnQgdGFyZ2V0IG9mIHRoZSBmaWxlIHN5c3RlbS4gVGFrZSBub3RlIG9mIHRoZSBmb2xsb3dpbmcgaW5mb3JtYXRpb246XG4gICAgICogSWYgeW91IGRvIG5vdCBzcGVjaWZ5IHRoZSBWb2x1bWVJZCBwYXJhbWV0ZXIsIHlvdSBjYW4gbGVhdmUgdGhlIFZvbHVtZU1vdW50cG9pbnQgcGFyYW1ldGVyIGVtcHR5LiBBIG1vdW50IHRhcmdldCBpcyBjcmVhdGVkIGJ5IGRlZmF1bHQuXG4gICAgICogSWYgeW91IHNwZWNpZnkgdGhlIFZvbHVtZUlkIHBhcmFtZXRlciwgdGhlIFZvbHVtZU1vdW50cG9pbnQgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZvbHVtZU1vdW50cG9pbnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2b2x1bWVQcm90b2NvbDogVGhlIHR5cGUgb2YgdGhlIHByb3RvY29sIHRoYXQgaXMgdXNlZCBieSB0aGUgZmlsZSBzeXN0ZW0uIFZhbGlkIHZhbHVlczpcbiAgICAgKiBuZnNcbiAgICAgKiBzbWJcbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBuZnNcbiAgICAgKi9cbiAgICByZWFkb25seSB2b2x1bWVQcm90b2NvbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZvbHVtZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBzaGFyZWQgc3RvcmFnZS4gT25seSBBcHNhcmEgRmlsZSBTdG9yYWdlIG5hcyBmaWxlIHN5c3RlbXMgYXJlIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2b2x1bWVUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBJRCBvZiB0aGUgdmlydHVhbCBwcml2YXRlIGNsb3VkIChWUEMpIHRvIHdoaWNoIHRoZSBFLUhQQyBjbHVzdGVyIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3aXRob3V0RWxhc3RpY0lwOiBTcGVjaWZpZXMgd2hldGhlciB0aGUgbG9nb24gbm9kZSB1c2VzIGFuIGVsYXN0aWMgSVAgYWRkcmVzcyAoRUlQKS4gRGVmYXVsdCB2YWx1ZTogZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSB3aXRob3V0RWxhc3RpY0lwPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHpvbmVJZDogQXZhaWxhYmxlIGFyZWEgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpFSFBDOjpDbHVzdGVyYFxuICovXG5leHBvcnQgY2xhc3MgQ2x1c3RlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBDbHVzdGVyIElkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRWNzSW5mbzogQSBkYXRhIHN0cnVjdHVyZSBkZXNjcmliaW5nIHRoZSBudW1iZXIgYW5kIHNwZWNpZmljYXRpb25zIG9mIEVDUyBmb3IgdmFyaW91cyBjb21wb25lbnRzIG9mIHRoZSBjbHVzdGVyLlxuWW91IHdpbGwgZ2V0IHJlc3VsdHMgc2ltaWxhciB0byB0aGUgZm9sbG93aW5nOiBFY3NJbmZvOiB7XCJNYW5hZ2VyXCI6IHtcIkNvdW50XCI6IDIsIFwiSW5zdGFuY2VUeXBlXCI6IFwiZWNzLm4xLmxhcmdlXCJ9LCBcIkNvbXB1dGVcIjoge1wiQ291bnRcIjogOCwgXCJJbnN0YW5jZVR5cGVcIjogXCJlY3MubjEubGFyZ2VcIn0sIFwiTG9naW5cIjoge1wiQ291bnRcIjogMSwgXCJJbnN0YW5jZVR5cGVcIjogXCJlY3MubjEubGFyZ2VcIn19XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFY3NJbmZvOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTmFtZTogQ2x1c3RlciBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlY3VyaXR5R3JvdXBJZDogU2VjdXJpdHkgZ3JvdXAgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZWN1cml0eUdyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpFSFBDOjpDbHVzdGVyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDbHVzdGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQ2x1c3RlciA9IG5ldyBSb3NDbHVzdGVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdm9sdW1lUHJvdG9jb2w6IHByb3BzLnZvbHVtZVByb3RvY29sLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBjb21wdXRlRW5hYmxlSHQ6IHByb3BzLmNvbXB1dGVFbmFibGVIdCxcbiAgICAgICAgICAgIHdpdGhvdXRFbGFzdGljSXA6IHByb3BzLndpdGhvdXRFbGFzdGljSXAsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrVHlwZTogcHJvcHMuc3lzdGVtRGlza1R5cGUsXG4gICAgICAgICAgICByZW1vdGVWaXNFbmFibGU6IHByb3BzLnJlbW90ZVZpc0VuYWJsZSxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICB2b2x1bWVJZDogcHJvcHMudm9sdW1lSWQsXG4gICAgICAgICAgICByYW1Sb2xlTmFtZTogcHJvcHMucmFtUm9sZU5hbWUsXG4gICAgICAgICAgICBkZXBsb3lNb2RlOiBwcm9wcy5kZXBsb3lNb2RlLFxuICAgICAgICAgICAgcG9zdEluc3RhbGxTY3JpcHQ6IHByb3BzLnBvc3RJbnN0YWxsU2NyaXB0LFxuICAgICAgICAgICAgaW1hZ2VJZDogcHJvcHMuaW1hZ2VJZCxcbiAgICAgICAgICAgIGlzQ29tcHV0ZUVzczogcHJvcHMuaXNDb21wdXRlRXNzLFxuICAgICAgICAgICAgZWNzT3JkZXJMb2dpbkluc3RhbmNlVHlwZTogcHJvcHMuZWNzT3JkZXJMb2dpbkluc3RhbmNlVHlwZSxcbiAgICAgICAgICAgIGpvYlF1ZXVlOiBwcm9wcy5qb2JRdWV1ZSxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogcHJvcHMudlN3aXRjaElkLFxuICAgICAgICAgICAgcGVyaW9kOiBwcm9wcy5wZXJpb2QsXG4gICAgICAgICAgICBjb21wdXRlU3BvdFN0cmF0ZWd5OiBwcm9wcy5jb21wdXRlU3BvdFN0cmF0ZWd5LFxuICAgICAgICAgICAgZWNzT3JkZXJNYW5hZ2VySW5zdGFuY2VUeXBlOiBwcm9wcy5lY3NPcmRlck1hbmFnZXJJbnN0YW5jZVR5cGUsXG4gICAgICAgICAgICBlaHBjVmVyc2lvbjogcHJvcHMuZWhwY1ZlcnNpb24sXG4gICAgICAgICAgICB2b2x1bWVNb3VudHBvaW50OiBwcm9wcy52b2x1bWVNb3VudHBvaW50LFxuICAgICAgICAgICAgZWNzT3JkZXJNYW5hZ2VyQ291bnQ6IHByb3BzLmVjc09yZGVyTWFuYWdlckNvdW50LFxuICAgICAgICAgICAgZWNzT3JkZXJDb21wdXRlSW5zdGFuY2VUeXBlOiBwcm9wcy5lY3NPcmRlckNvbXB1dGVJbnN0YW5jZVR5cGUsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBhcHBsaWNhdGlvbjogcHJvcHMuYXBwbGljYXRpb24sXG4gICAgICAgICAgICBwZXJpb2RVbml0OiBwcm9wcy5wZXJpb2RVbml0LFxuICAgICAgICAgICAgaW1hZ2VPd25lckFsaWFzOiBwcm9wcy5pbWFnZU93bmVyQWxpYXMsXG4gICAgICAgICAgICBlY3NPcmRlckNvbXB1dGVDb3VudDogcHJvcHMuZWNzT3JkZXJDb21wdXRlQ291bnQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwTmFtZTogcHJvcHMuc2VjdXJpdHlHcm91cE5hbWUsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrU2l6ZTogcHJvcHMuc3lzdGVtRGlza1NpemUsXG4gICAgICAgICAgICBhZGRpdGlvbmFsVm9sdW1lczogcHJvcHMuYWRkaXRpb25hbFZvbHVtZXMsXG4gICAgICAgICAgICBhdXRvUmVuZXc6IHByb3BzLmF1dG9SZW5ldyxcbiAgICAgICAgICAgIGNvbXB1dGVTcG90UHJpY2VMaW1pdDogcHJvcHMuY29tcHV0ZVNwb3RQcmljZUxpbWl0LFxuICAgICAgICAgICAgcmFtTm9kZVR5cGVzOiBwcm9wcy5yYW1Ob2RlVHlwZXMsXG4gICAgICAgICAgICBjbGllbnRWZXJzaW9uOiBwcm9wcy5jbGllbnRWZXJzaW9uLFxuICAgICAgICAgICAgdm9sdW1lVHlwZTogcHJvcHMudm9sdW1lVHlwZSxcbiAgICAgICAgICAgIGlucHV0RmlsZVVybDogcHJvcHMuaW5wdXRGaWxlVXJsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3BzLnBhc3N3b3JkLFxuICAgICAgICAgICAgYXV0b1JlbmV3UGVyaW9kOiBwcm9wcy5hdXRvUmVuZXdQZXJpb2QsXG4gICAgICAgICAgICBrZXlQYWlyTmFtZTogcHJvcHMua2V5UGFpck5hbWUsXG4gICAgICAgICAgICByZW1vdGVEaXJlY3Rvcnk6IHByb3BzLnJlbW90ZURpcmVjdG9yeSxcbiAgICAgICAgICAgIG5ldHdvcmtJbnRlcmZhY2VUcmFmZmljTW9kZTogcHJvcHMubmV0d29ya0ludGVyZmFjZVRyYWZmaWNNb2RlLFxuICAgICAgICAgICAgc2NjQ2x1c3RlcklkOiBwcm9wcy5zY2NDbHVzdGVySWQsXG4gICAgICAgICAgICB6b25lSWQ6IHByb3BzLnpvbmVJZCxcbiAgICAgICAgICAgIHN5c3RlbURpc2tMZXZlbDogcHJvcHMuc3lzdGVtRGlza0xldmVsLFxuICAgICAgICAgICAgZWNzT3JkZXJMb2dpbkNvdW50OiBwcm9wcy5lY3NPcmRlckxvZ2luQ291bnQsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHNjaGVkdWxlclR5cGU6IHByb3BzLnNjaGVkdWxlclR5cGUsXG4gICAgICAgICAgICBhY2NvdW50VHlwZTogcHJvcHMuYWNjb3VudFR5cGUsXG4gICAgICAgICAgICBoYUVuYWJsZTogcHJvcHMuaGFFbmFibGUsXG4gICAgICAgICAgICBvc1RhZzogcHJvcHMub3NUYWcsXG4gICAgICAgICAgICBlY3NDaGFyZ2VUeXBlOiBwcm9wcy5lY3NDaGFyZ2VUeXBlLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0NsdXN0ZXI7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJJZCA9IHJvc0NsdXN0ZXIuYXR0ckNsdXN0ZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyRWNzSW5mbyA9IHJvc0NsdXN0ZXIuYXR0ckVjc0luZm87XG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSByb3NDbHVzdGVyLmF0dHJOYW1lO1xuICAgICAgICB0aGlzLmF0dHJTZWN1cml0eUdyb3VwSWQgPSByb3NDbHVzdGVyLmF0dHJTZWN1cml0eUdyb3VwSWQ7XG4gICAgfVxufVxuIl19