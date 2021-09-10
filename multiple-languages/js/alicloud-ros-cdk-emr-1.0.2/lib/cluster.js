"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cluster = exports.ClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const emr_generated_1 = require("./emr.generated");
Object.defineProperty(exports, "ClusterProperty", { enumerable: true, get: function () { return emr_generated_1.RosCluster; } });
/**
 * A ROS resource type:  `ALIYUN::EMR::Cluster`
 */
class Cluster extends ros.Resource {
    /**
     * Create a new `ALIYUN::EMR::Cluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCluster = new emr_generated_1.RosCluster(this, id, {
            bootstrapAction: props.bootstrapAction,
            securityGroupName: props.securityGroupName,
            config: props.config,
            autoRenew: props.autoRenew,
            hostGroup: props.hostGroup,
            userInfo: props.userInfo,
            highAvailabilityEnable: props.highAvailabilityEnable,
            name: props.name,
            optionSoftWareList: props.optionSoftWareList,
            masterPwd: props.masterPwd,
            sshEnable: props.sshEnable,
            useCustomHiveMetaDb: props.useCustomHiveMetaDb,
            isOpenPublicIp: props.isOpenPublicIp,
            configurations: props.configurations,
            authorizeContent: props.authorizeContent,
            netType: props.netType,
            userDefinedEmrEcsRole: props.userDefinedEmrEcsRole,
            useLocalMetaDb: props.useLocalMetaDb,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized === undefined || props.ioOptimized === null ? true : props.ioOptimized,
            zoneId: props.zoneId,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            machineType: props.machineType,
            depositType: props.depositType,
            metaStoreType: props.metaStoreType,
            period: props.period,
            emrVer: props.emrVer,
            clusterType: props.clusterType,
            easEnable: props.easEnable,
            relatedClusterId: props.relatedClusterId,
            vpcId: props.vpcId,
            chargeType: props.chargeType,
            whiteListType: props.whiteListType,
            metaStoreConf: props.metaStoreConf,
            instanceGeneration: props.instanceGeneration,
            logPath: props.logPath,
            initCustomHiveMetaDb: props.initCustomHiveMetaDb,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrHostGroups = rosCluster.attrHostGroups;
        this.attrMasterNodeInnerIps = rosCluster.attrMasterNodeInnerIps;
        this.attrMasterNodePubIps = rosCluster.attrMasterNodePubIps;
    }
}
exports.Cluster = Cluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE2QztBQUV0QixnR0FGZCwwQkFBVSxPQUVtQjtBQXlOdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQTJCckM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxVQUFVLEdBQUcsSUFBSSwwQkFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0I7WUFDcEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUNyRyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtTQUNuRCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ2hELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxVQUFVLENBQUMsc0JBQXNCLENBQUM7UUFDaEUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztJQUNoRSxDQUFDO0NBQ0o7QUFuRkQsMEJBbUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ2x1c3RlciB9IGZyb20gJy4vZW1yLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0NsdXN0ZXIgYXMgQ2x1c3RlclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFTVI6OkNsdXN0ZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2x1c3RlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZC4gVmFsaWQgdmFsdWVzOiBQb3N0UGFpZCBhbmQgUHJlUGFpZC4gUG9zdFBhaWQ6IHBheS1hcy15b3UtZ28uIFByZVBhaWQ6XG4gICAgICogc3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNoYXJnZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNsdXN0ZXJUeXBlOiBUaGUgdHlwZSBvZiB0aGUgY2x1c3Rlci4gQWxsb3dkIHZhbHVlczogSEFET09QLCBLQUZLQSwgRFJVSUQsIFpPT0tFRVBFUiwgREFUQV9TQ0lFTkNFLCBHQVRFV0FZIGV0Yy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVyVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW1yVmVyOiBUaGUgdmVyc2lvbiBvZiBFTVIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW1yVmVyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBob3N0R3JvdXA6XG4gICAgICovXG4gICAgcmVhZG9ubHkgaG9zdEdyb3VwOiBBcnJheTxSb3NDbHVzdGVyLkhvc3RHcm91cFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBjbHVzdGVyLiBUaGUgbmFtZSBjYW4gYmUgMSB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgb25seSBjb250YWluXG4gICAgICogQ2hpbmVzZSBjaGFyYWN0ZXJzLCBsZXR0ZXJzLCBudW1iZXJzLCBoeXBoZW5zICgtKSwgYW5kIHVuZGVyc2NvcmVzIChfKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgbmV0d29yay5cbiAgICAgKi9cbiAgICByZWFkb25seSBuZXRUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1c2VMb2NhbE1ldGFEYjogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGxvY2FsIEhpdmUgbWV0YWRhdGFiYXNlIGlzIHVzZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlTG9jYWxNZXRhRGI6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IFRoZSB6b25lIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0aG9yaXplQ29udGVudDogTm90IHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dGhvcml6ZUNvbnRlbnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXc6IEluZGljYXRlcyB3aGV0aGVyIHRoZSBzdWJzY3JpcHRpb24gY2x1c3RlciBpcyBhdXRvLXJlbmV3ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJvb3RzdHJhcEFjdGlvbjpcbiAgICAgKi9cbiAgICByZWFkb25seSBib290c3RyYXBBY3Rpb24/OiBBcnJheTxSb3NDbHVzdGVyLkJvb3RzdHJhcEFjdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbmZpZzpcbiAgICAgKi9cbiAgICByZWFkb25seSBjb25maWc/OiBBcnJheTxSb3NDbHVzdGVyLkNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbmZpZ3VyYXRpb25zOiBOb3QgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29uZmlndXJhdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXBvc2l0VHlwZTogVGhlIGhvc3RpbmcgdHlwZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXBvc2l0VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVhc0VuYWJsZTogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNsdXN0ZXIgaXMgYSBoaWdoLXNlY3VyaXR5IGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWFzRW5hYmxlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGhpZ2hBdmFpbGFiaWxpdHlFbmFibGU6IEluZGljYXRlcyB3aGV0aGVyIHRoZSBjbHVzdGVyIGlzIGEgaGlnaC1hdmFpbGFiaWxpdHkgY2x1c3Rlci4gQSB2YWx1ZSBvZiB0cnVlIGluZGljYXRlc1xuICAgICAqIHRoYXQgdHdvIG1hc3RlciBub2RlcyBhcmUgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGlnaEF2YWlsYWJpbGl0eUVuYWJsZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbml0Q3VzdG9tSGl2ZU1ldGFEYjogQSByZXNlcnZlZCBwYXJhbWV0ZXIuIE5vdCByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbml0Q3VzdG9tSGl2ZU1ldGFEYj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUdlbmVyYXRpb246IFRoZSBnZW5lcmF0aW9uIG9mIHRoZSBFQ1MgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlR2VuZXJhdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlvT3B0aW1pemVkOiBJbmRpY2F0ZXMgd2V0aGVyIEkvTyBvcHRpbWl6YXRpb24gaXMgZW5hYmxlZC4gRGVmYXVsdCB2YWx1ZTogdHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpb09wdGltaXplZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpc09wZW5QdWJsaWNJcDogSW5kaWNhdGVzIHdoZXRoZXIgYSBwdWJsaWMgSVAgYWRkcmVzcyBpcyBhc3NpZ25lZC4gQSB2YWx1ZSBvZiB0cnVlIGluZGljYXRlcyB0aGF0XG4gICAgICogYSBiYW5kd2lkdGggb2YgOCBNQiBpcyBzZXQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc09wZW5QdWJsaWNJcD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBrZXlQYWlyTmFtZTogVGhlIG5hbWUgb2YgdGhlIGtleSBwYWlyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVBhaXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9nUGF0aDogVGhlIGxvZyBwYXRoIGluIE9TUy5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dQYXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFjaGluZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBtYWNoaW5lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hY2hpbmVUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFzdGVyUHdkOiBUaGUgU1NIIHBhc3N3b3JkIGZvciB0aGUgbWFzdGVyIG5vZGUuIFRoZSBwYXNzd29yZCBtdXN0IG1lZXQgdGhlIGZvbGxvd2luZyByZXF1aXJlbWVudHMuXG4gICAgICogTGVuZ3RoIGNvbnN0cmFpbnRzOiBNaW5pbXVtIGxlbmd0aCBvZiA4IGNoYXJhY3RlcnMuIE1heGltdW0gbGVuZ3RoIG9mIDMwIGNoYXJhY3RlcnMuXG4gICAgICogSXQgbXVzdCBjb250YWluIHRocmVlIHR5cGVzIG9mIGNoYXJhY3RlcnMgKHVwcGVyY2FzZSBsZXR0ZXJzLCBsb3dlcmNhc2UgbGV0dGVycywgbnVtYmVycyxcbiAgICAgKiBhbmQgc3BlY2lhbCBzeW1ib2xzKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJQd2Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtZXRhU3RvcmVDb25mOiBNZXRhIHN0b3JlIGNvbmYgb2Ygc3BlY2lmaWMgbWV0YSBzdG9yZSB0eXBlLiBJZiBNZXRhU3RvcmVUeXBlPXVzZXJfcmRzLCBNZXRhU3RvcmVDb25mIHNob3VsZCBiZSBsaWtlIHtcImRiVXJsXCI6XCJqZGJjOm15c3FsOi8veHh4eHh4XCIsIFwiZGJVc2VyTmFtZVwiOlwidXNlcm5hbWVcIiwgXCJkYlBhc3N3b3JkXCI6XCJwYXNzd29yZFwifVxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1ldGFTdG9yZUNvbmY/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtZXRhU3RvcmVUeXBlOiBNZXRhIHN0b3JlIHR5cGUuIEFsbG93IHR5cGVzOlxuICAgICAqIGxvY2FsOiBMb2NhbCBjbHVzdGVyXG4gICAgICogdW5pZmllZDogVW5pZmllZCBtZXRhIGRhdGFcbiAgICAgKiB1c2VyX3JkczogVXNlcidzIFJEU1xuICAgICAqL1xuICAgIHJlYWRvbmx5IG1ldGFTdG9yZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBvcHRpb25Tb2Z0V2FyZUxpc3Q6IFRoZSBsaXN0IG9mIG9wdGlvbmFsIHNlcnZpY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9wdGlvblNvZnRXYXJlTGlzdD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSBsZW5ndGggb2YgdGhlIHN1YnNjcmlwdGlvbi4gVW5pdDogbW9udGhzLiBWYWxpZCB2YWx1ZXM6IDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsXG4gICAgICogOSwgMTIsIDI0LCBhbmQgMzYuIEEgdmFsdWUgaXMgcmVxdWlyZWQgd2hlbiBDaGFyZ2VUeXBlPVByZVBhaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVsYXRlZENsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBwcmltYXJ5IGNsdXN0ZXIgKHdoZW4gdGhlIGNsdXN0ZXIgdGhhdCB5b3UgY3JlYXRlIGlzIGEgR2F0ZXdheSBjbHVzdGVyKS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWxhdGVkQ2x1c3RlcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBUaGUgSUQgb2YgdGhlIHNlY3VyaXR5IGdyb3VwLiBZb3UgY2FuIGNyZWF0ZSBhIHNlY3VyaXR5IGdyb3VwIGluIHRoZSBFQ1MgY29uc29sZSBhbmRcbiAgICAgKiB1c2UgaXQuIE5vdGU6IElmIHlvdSB1c2UgYW4gZXhpc3Rpbmcgc2VjdXJpdHkgZ3JvdXAsIHRoZSBkZWZhdWx0IHNlY3VyaXR5IGdyb3VwIHBvbGljeVxuICAgICAqIGlzIGFwcGxpZWQgdG8gdGhpcyBzZWN1cml0eSBncm91cDogT25seSBwb3J0IDIyIGlzIG9wZW4gYXQgdGhlIGluYm91bmQgYW5kIGFsbCBwb3J0c1xuICAgICAqIGFyZSBvcGVuIGF0IHRoZSBvdXRib3VuZC4gWW91IG5lZWQgdG8gc3BlY2lmeSBlaXRoZXIgU2VjdXJpdHlHcm91cElkIG9yIFNlY3VyaXR5R3JvdXBOYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgc2VjdXJpdHkgZ3JvdXAgdG8gY3JlYXRlLiBJZiB0aGUgSUQgb2YgdGhlIHNlY3VyaXR5IGdyb3VwIGlzIG5vdCBzcGVjaWZpZWQsXG4gICAgICogdGhpcyBuYW1lIGlzIHVzZWQgdG8gY3JlYXRlIGEgbmV3IHNlY3VyaXR5IGdyb3VwLiBBZnRlciB0aGUgY2x1c3RlciBpcyBjcmVhdGVkLCB5b3VcbiAgICAgKiBjYW4gdmlldyB0aGUgSUQgb2YgdGhlIHNlY3VyaXR5IGdyb3VwIG9uIHRoZSBDbHVzdGVyIE1hbmFnZW1lbnQgcGFnZS4gVGhlIGRlZmF1bHRcbiAgICAgKiBzZWN1cml0eSBncm91cCBwb2xpY3kgaXMgYXBwbGllZCB0byB0aGlzIHNlY3VyaXR5IGdyb3VwOiBPbmx5IHBvcnQgMjIgaXMgb3BlbiBhdCB0aGVcbiAgICAgKiBpbmJvdW5kIGFuZCBhbGwgcG9ydHMgYXJlIG9wZW4gYXQgdGhlIG91dGJvdW5kLiBZb3UgbmVlZCB0byBzcGVjaWZ5IGVpdGhlciBTZWN1cml0eUdyb3VwSWRcbiAgICAgKiBvciBTZWN1cml0eUdyb3VwTmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNzaEVuYWJsZTogSW5kaWNhdGVzIHdoZXRoZXIgU1NIIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3NoRW5hYmxlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzZUN1c3RvbUhpdmVNZXRhRGI6IEEgcmVzZXJ2ZWQgcGFyYW1ldGVyLiBOb3QgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlQ3VzdG9tSGl2ZU1ldGFEYj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1c2VyRGVmaW5lZEVtckVjc1JvbGU6IFRoZSByb2xlIHRoYXQgaXMgYXNzaWduZWQgdG8gRU1SIGZvciBjYWxsaW5nIEVDUyByZXNvdXJjZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlckRlZmluZWRFbXJFY3NSb2xlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlckluZm86XG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlckluZm8/OiBBcnJheTxSb3NDbHVzdGVyLlVzZXJJbmZvUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBJRCBvZiB0aGUgVlBDLiBBIHZhbHVlIGlzIHJlcXVpcmVkIHdoZW4gTmV0VHlwZT12cGMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSBJRCBvZiB0aGUgVnN3aXRjaC4gQSB2YWx1ZSBpcyByZXF1aXJlZCB3aGVuIE5ldFR5cGU9dnBjLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdoaXRlTGlzdFR5cGU6IE5vdCByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB3aGl0ZUxpc3RUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpFTVI6OkNsdXN0ZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBDbHVzdGVyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEhvc3RHcm91cHM6IFRoZSBob3N0IGdyb3VwIGxpc3Qgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIb3N0R3JvdXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTWFzdGVyTm9kZUlubmVySXBzOiBUaGUgaW5uZXIgaXAgbGlzdCBvZiB0aGUgY2x1c3RlciBtYXN0ZXIgbm9kZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXN0ZXJOb2RlSW5uZXJJcHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBNYXN0ZXJOb2RlUHViSXBzOiBUaGUgcHVibGljIGlwIGxpc3Qgb2YgdGhlIGNsdXN0ZXIgbWFzdGVyIG5vZGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWFzdGVyTm9kZVB1Yklwczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVNUjo6Q2x1c3RlcmAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQ2x1c3RlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0NsdXN0ZXIgPSBuZXcgUm9zQ2x1c3Rlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGJvb3RzdHJhcEFjdGlvbjogcHJvcHMuYm9vdHN0cmFwQWN0aW9uLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cE5hbWU6IHByb3BzLnNlY3VyaXR5R3JvdXBOYW1lLFxuICAgICAgICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcsXG4gICAgICAgICAgICBhdXRvUmVuZXc6IHByb3BzLmF1dG9SZW5ldyxcbiAgICAgICAgICAgIGhvc3RHcm91cDogcHJvcHMuaG9zdEdyb3VwLFxuICAgICAgICAgICAgdXNlckluZm86IHByb3BzLnVzZXJJbmZvLFxuICAgICAgICAgICAgaGlnaEF2YWlsYWJpbGl0eUVuYWJsZTogcHJvcHMuaGlnaEF2YWlsYWJpbGl0eUVuYWJsZSxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICBvcHRpb25Tb2Z0V2FyZUxpc3Q6IHByb3BzLm9wdGlvblNvZnRXYXJlTGlzdCxcbiAgICAgICAgICAgIG1hc3RlclB3ZDogcHJvcHMubWFzdGVyUHdkLFxuICAgICAgICAgICAgc3NoRW5hYmxlOiBwcm9wcy5zc2hFbmFibGUsXG4gICAgICAgICAgICB1c2VDdXN0b21IaXZlTWV0YURiOiBwcm9wcy51c2VDdXN0b21IaXZlTWV0YURiLFxuICAgICAgICAgICAgaXNPcGVuUHVibGljSXA6IHByb3BzLmlzT3BlblB1YmxpY0lwLFxuICAgICAgICAgICAgY29uZmlndXJhdGlvbnM6IHByb3BzLmNvbmZpZ3VyYXRpb25zLFxuICAgICAgICAgICAgYXV0aG9yaXplQ29udGVudDogcHJvcHMuYXV0aG9yaXplQ29udGVudCxcbiAgICAgICAgICAgIG5ldFR5cGU6IHByb3BzLm5ldFR5cGUsXG4gICAgICAgICAgICB1c2VyRGVmaW5lZEVtckVjc1JvbGU6IHByb3BzLnVzZXJEZWZpbmVkRW1yRWNzUm9sZSxcbiAgICAgICAgICAgIHVzZUxvY2FsTWV0YURiOiBwcm9wcy51c2VMb2NhbE1ldGFEYixcbiAgICAgICAgICAgIGtleVBhaXJOYW1lOiBwcm9wcy5rZXlQYWlyTmFtZSxcbiAgICAgICAgICAgIGlvT3B0aW1pemVkOiBwcm9wcy5pb09wdGltaXplZCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmlvT3B0aW1pemVkID09PSBudWxsID8gdHJ1ZSA6IHByb3BzLmlvT3B0aW1pemVkLFxuICAgICAgICAgICAgem9uZUlkOiBwcm9wcy56b25lSWQsXG4gICAgICAgICAgICB2U3dpdGNoSWQ6IHByb3BzLnZTd2l0Y2hJZCxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZDogcHJvcHMuc2VjdXJpdHlHcm91cElkLFxuICAgICAgICAgICAgbWFjaGluZVR5cGU6IHByb3BzLm1hY2hpbmVUeXBlLFxuICAgICAgICAgICAgZGVwb3NpdFR5cGU6IHByb3BzLmRlcG9zaXRUeXBlLFxuICAgICAgICAgICAgbWV0YVN0b3JlVHlwZTogcHJvcHMubWV0YVN0b3JlVHlwZSxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kLFxuICAgICAgICAgICAgZW1yVmVyOiBwcm9wcy5lbXJWZXIsXG4gICAgICAgICAgICBjbHVzdGVyVHlwZTogcHJvcHMuY2x1c3RlclR5cGUsXG4gICAgICAgICAgICBlYXNFbmFibGU6IHByb3BzLmVhc0VuYWJsZSxcbiAgICAgICAgICAgIHJlbGF0ZWRDbHVzdGVySWQ6IHByb3BzLnJlbGF0ZWRDbHVzdGVySWQsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBjaGFyZ2VUeXBlOiBwcm9wcy5jaGFyZ2VUeXBlLFxuICAgICAgICAgICAgd2hpdGVMaXN0VHlwZTogcHJvcHMud2hpdGVMaXN0VHlwZSxcbiAgICAgICAgICAgIG1ldGFTdG9yZUNvbmY6IHByb3BzLm1ldGFTdG9yZUNvbmYsXG4gICAgICAgICAgICBpbnN0YW5jZUdlbmVyYXRpb246IHByb3BzLmluc3RhbmNlR2VuZXJhdGlvbixcbiAgICAgICAgICAgIGxvZ1BhdGg6IHByb3BzLmxvZ1BhdGgsXG4gICAgICAgICAgICBpbml0Q3VzdG9tSGl2ZU1ldGFEYjogcHJvcHMuaW5pdEN1c3RvbUhpdmVNZXRhRGIsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQ2x1c3RlcjtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gcm9zQ2x1c3Rlci5hdHRyQ2x1c3RlcklkO1xuICAgICAgICB0aGlzLmF0dHJIb3N0R3JvdXBzID0gcm9zQ2x1c3Rlci5hdHRySG9zdEdyb3VwcztcbiAgICAgICAgdGhpcy5hdHRyTWFzdGVyTm9kZUlubmVySXBzID0gcm9zQ2x1c3Rlci5hdHRyTWFzdGVyTm9kZUlubmVySXBzO1xuICAgICAgICB0aGlzLmF0dHJNYXN0ZXJOb2RlUHViSXBzID0gcm9zQ2x1c3Rlci5hdHRyTWFzdGVyTm9kZVB1YklwcztcbiAgICB9XG59XG4iXX0=