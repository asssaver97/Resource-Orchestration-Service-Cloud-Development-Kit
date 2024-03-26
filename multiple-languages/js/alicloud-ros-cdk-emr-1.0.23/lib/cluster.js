"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cluster = exports.ClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const emr_generated_1 = require("./emr.generated");
Object.defineProperty(exports, "ClusterProperty", { enumerable: true, get: function () { return emr_generated_1.RosCluster; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EMR::Cluster`, which is used to create an E-MapReduce (EMR) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster
 */
class Cluster extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosCluster = new emr_generated_1.RosCluster(this, id, {
            bootstrapAction: props.bootstrapAction,
            resourceGroupId: props.resourceGroupId,
            securityGroupName: props.securityGroupName,
            config: props.config,
            clickHouseConf: props.clickHouseConf,
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
            authorizeContent: props.authorizeContent,
            configurations: props.configurations,
            netType: props.netType,
            userDefinedEmrEcsRole: props.userDefinedEmrEcsRole,
            tags: props.tags,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE2QztBQUV0QixnR0FGZCwwQkFBVSxPQUVtQjtBQXlPdEM7Ozs7R0FJRztBQUNILE1BQWEsT0FBUSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBMEJyQzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxVQUFVLEdBQUcsSUFBSSwwQkFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQjtZQUNwRCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1lBQ2xELElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUNyRyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtTQUNuRCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ2hELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxVQUFVLENBQUMsc0JBQXNCLENBQUM7UUFDaEUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztJQUNoRSxDQUFDO0NBQ0o7QUF2RkQsMEJBdUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ2x1c3RlciB9IGZyb20gJy4vZW1yLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0NsdXN0ZXIgYXMgQ2x1c3RlclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQ2x1c3RlcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lbXItY2x1c3RlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIENsdXN0ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjaGFyZ2VUeXBlOiBUaGUgYmlsbGluZyBtZXRob2QuIFZhbGlkIHZhbHVlczogUG9zdFBhaWQgYW5kIFByZVBhaWQuIFBvc3RQYWlkOiBwYXktYXMteW91LWdvLiBQcmVQYWlkOlxuICAgICAqIHN1YnNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGFyZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbHVzdGVyVHlwZTogVGhlIHR5cGUgb2YgdGhlIGNsdXN0ZXIuIEFsbG93ZCB2YWx1ZXM6IEhBRE9PUCwgS0FGS0EsIERSVUlELCBaT09LRUVQRVIsIERBVEFfU0NJRU5DRSwgR0FURVdBWSBldGMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2x1c3RlclR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVtclZlcjogVGhlIHZlcnNpb24gb2YgRU1SLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVtclZlcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaG9zdEdyb3VwOlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhvc3RHcm91cDogQXJyYXk8Um9zQ2x1c3Rlci5Ib3N0R3JvdXBQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgY2x1c3Rlci4gVGhlIG5hbWUgY2FuIGJlIDEgdG8gNjQgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIG9ubHkgY29udGFpblxuICAgICAqIENoaW5lc2UgY2hhcmFjdGVycywgbGV0dGVycywgbnVtYmVycywgaHlwaGVucyAoLSksIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmV0VHlwZTogVGhlIHR5cGUgb2YgdGhlIG5ldHdvcmsuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlTG9jYWxNZXRhRGI6IEluZGljYXRlcyB3aGV0aGVyIHRoZSBsb2NhbCBIaXZlIG1ldGFkYXRhYmFzZSBpcyB1c2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZUxvY2FsTWV0YURiOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgem9uZUlkOiBUaGUgem9uZSBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dGhvcml6ZUNvbnRlbnQ6IE5vdCByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRob3JpemVDb250ZW50Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1JlbmV3OiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3Vic2NyaXB0aW9uIGNsdXN0ZXIgaXMgYXV0by1yZW5ld2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZW5ldz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBib290c3RyYXBBY3Rpb246XG4gICAgICovXG4gICAgcmVhZG9ubHkgYm9vdHN0cmFwQWN0aW9uPzogQXJyYXk8Um9zQ2x1c3Rlci5Cb290c3RyYXBBY3Rpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbGlja0hvdXNlQ29uZjogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2xpY2tIb3VzZUNvbmY/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb25maWc6XG4gICAgICovXG4gICAgcmVhZG9ubHkgY29uZmlnPzogQXJyYXk8Um9zQ2x1c3Rlci5Db25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb25maWd1cmF0aW9uczogTm90IHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb25zPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVwb3NpdFR5cGU6IFRoZSBob3N0aW5nIHR5cGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVwb3NpdFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlYXNFbmFibGU6IEluZGljYXRlcyB3aGV0aGVyIHRoZSBjbHVzdGVyIGlzIGEgaGlnaC1zZWN1cml0eSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVhc0VuYWJsZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoaWdoQXZhaWxhYmlsaXR5RW5hYmxlOiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY2x1c3RlciBpcyBhIGhpZ2gtYXZhaWxhYmlsaXR5IGNsdXN0ZXIuIEEgdmFsdWUgb2YgdHJ1ZSBpbmRpY2F0ZXNcbiAgICAgKiB0aGF0IHR3byBtYXN0ZXIgbm9kZXMgYXJlIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhpZ2hBdmFpbGFiaWxpdHlFbmFibGU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5pdEN1c3RvbUhpdmVNZXRhRGI6IEEgcmVzZXJ2ZWQgcGFyYW1ldGVyLiBOb3QgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5pdEN1c3RvbUhpdmVNZXRhRGI/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VHZW5lcmF0aW9uOiBUaGUgZ2VuZXJhdGlvbiBvZiB0aGUgRUNTIGluc3RhbmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUdlbmVyYXRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpb09wdGltaXplZDogSW5kaWNhdGVzIHdldGhlciBJXFwvTyBvcHRpbWl6YXRpb24gaXMgZW5hYmxlZC4gRGVmYXVsdCB2YWx1ZTogdHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpb09wdGltaXplZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpc09wZW5QdWJsaWNJcDogSW5kaWNhdGVzIHdoZXRoZXIgYSBwdWJsaWMgSVAgYWRkcmVzcyBpcyBhc3NpZ25lZC4gQSB2YWx1ZSBvZiB0cnVlIGluZGljYXRlcyB0aGF0XG4gICAgICogYSBiYW5kd2lkdGggb2YgOCBNQiBpcyBzZXQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc09wZW5QdWJsaWNJcD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBrZXlQYWlyTmFtZTogVGhlIG5hbWUgb2YgdGhlIGtleSBwYWlyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVBhaXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9nUGF0aDogVGhlIGxvZyBwYXRoIGluIE9TUy5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dQYXRoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFjaGluZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBtYWNoaW5lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hY2hpbmVUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFzdGVyUHdkOiBUaGUgU1NIIHBhc3N3b3JkIGZvciB0aGUgbWFzdGVyIG5vZGUuIFRoZSBwYXNzd29yZCBtdXN0IG1lZXQgdGhlIGZvbGxvd2luZyByZXF1aXJlbWVudHMuXG4gICAgICogTGVuZ3RoIGNvbnN0cmFpbnRzOiBNaW5pbXVtIGxlbmd0aCBvZiA4IGNoYXJhY3RlcnMuIE1heGltdW0gbGVuZ3RoIG9mIDMwIGNoYXJhY3RlcnMuXG4gICAgICogSXQgbXVzdCBjb250YWluIHRocmVlIHR5cGVzIG9mIGNoYXJhY3RlcnMgKHVwcGVyY2FzZSBsZXR0ZXJzLCBsb3dlcmNhc2UgbGV0dGVycywgbnVtYmVycyxcbiAgICAgKiBhbmQgc3BlY2lhbCBzeW1ib2xzKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJQd2Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtZXRhU3RvcmVDb25mOiBNZXRhIHN0b3JlIGNvbmYgb2Ygc3BlY2lmaWMgbWV0YSBzdG9yZSB0eXBlLiBJZiBNZXRhU3RvcmVUeXBlPXVzZXJfcmRzLCBNZXRhU3RvcmVDb25mIHNob3VsZCBiZSBsaWtlIHtcImRiVXJsXCI6XCJqZGJjOm15c3FsOlxcL1xcL3h4eHh4eFwiLCBcImRiVXNlck5hbWVcIjpcInVzZXJuYW1lXCIsIFwiZGJQYXNzd29yZFwiOlwicGFzc3dvcmRcIn1cbiAgICAgKi9cbiAgICByZWFkb25seSBtZXRhU3RvcmVDb25mPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWV0YVN0b3JlVHlwZTogTWV0YSBzdG9yZSB0eXBlLiBBbGxvdyB0eXBlczpcbiAgICAgKiBsb2NhbDogTG9jYWwgY2x1c3RlclxuICAgICAqIHVuaWZpZWQ6IFVuaWZpZWQgbWV0YSBkYXRhXG4gICAgICogdXNlcl9yZHM6IFVzZXIncyBSRFNcbiAgICAgKi9cbiAgICByZWFkb25seSBtZXRhU3RvcmVUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3B0aW9uU29mdFdhcmVMaXN0OiBUaGUgbGlzdCBvZiBvcHRpb25hbCBzZXJ2aWNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHRpb25Tb2Z0V2FyZUxpc3Q/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOiBUaGUgbGVuZ3RoIG9mIHRoZSBzdWJzY3JpcHRpb24uIFVuaXQ6IG1vbnRocy4gVmFsaWQgdmFsdWVzOiAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LFxuICAgICAqIDksIDEyLCAyNCwgYW5kIDM2LiBBIHZhbHVlIGlzIHJlcXVpcmVkIHdoZW4gQ2hhcmdlVHlwZT1QcmVQYWlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlbGF0ZWRDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgcHJpbWFyeSBjbHVzdGVyICh3aGVuIHRoZSBjbHVzdGVyIHRoYXQgeW91IGNyZWF0ZSBpcyBhIEdhdGV3YXkgY2x1c3RlcikuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVsYXRlZENsdXN0ZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBUaGUgSUQgb2YgdGhlIHNlY3VyaXR5IGdyb3VwLiBZb3UgY2FuIGNyZWF0ZSBhIHNlY3VyaXR5IGdyb3VwIGluIHRoZSBFQ1MgY29uc29sZSBhbmRcbiAgICAgKiB1c2UgaXQuIE5vdGU6IElmIHlvdSB1c2UgYW4gZXhpc3Rpbmcgc2VjdXJpdHkgZ3JvdXAsIHRoZSBkZWZhdWx0IHNlY3VyaXR5IGdyb3VwIHBvbGljeVxuICAgICAqIGlzIGFwcGxpZWQgdG8gdGhpcyBzZWN1cml0eSBncm91cDogT25seSBwb3J0IDIyIGlzIG9wZW4gYXQgdGhlIGluYm91bmQgYW5kIGFsbCBwb3J0c1xuICAgICAqIGFyZSBvcGVuIGF0IHRoZSBvdXRib3VuZC4gWW91IG5lZWQgdG8gc3BlY2lmeSBlaXRoZXIgU2VjdXJpdHlHcm91cElkIG9yIFNlY3VyaXR5R3JvdXBOYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgc2VjdXJpdHkgZ3JvdXAgdG8gY3JlYXRlLiBJZiB0aGUgSUQgb2YgdGhlIHNlY3VyaXR5IGdyb3VwIGlzIG5vdCBzcGVjaWZpZWQsXG4gICAgICogdGhpcyBuYW1lIGlzIHVzZWQgdG8gY3JlYXRlIGEgbmV3IHNlY3VyaXR5IGdyb3VwLiBBZnRlciB0aGUgY2x1c3RlciBpcyBjcmVhdGVkLCB5b3VcbiAgICAgKiBjYW4gdmlldyB0aGUgSUQgb2YgdGhlIHNlY3VyaXR5IGdyb3VwIG9uIHRoZSBDbHVzdGVyIE1hbmFnZW1lbnQgcGFnZS4gVGhlIGRlZmF1bHRcbiAgICAgKiBzZWN1cml0eSBncm91cCBwb2xpY3kgaXMgYXBwbGllZCB0byB0aGlzIHNlY3VyaXR5IGdyb3VwOiBPbmx5IHBvcnQgMjIgaXMgb3BlbiBhdCB0aGVcbiAgICAgKiBpbmJvdW5kIGFuZCBhbGwgcG9ydHMgYXJlIG9wZW4gYXQgdGhlIG91dGJvdW5kLiBZb3UgbmVlZCB0byBzcGVjaWZ5IGVpdGhlciBTZWN1cml0eUdyb3VwSWRcbiAgICAgKiBvciBTZWN1cml0eUdyb3VwTmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNzaEVuYWJsZTogSW5kaWNhdGVzIHdoZXRoZXIgU1NIIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3NoRW5hYmxlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0NsdXN0ZXIuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1c2VDdXN0b21IaXZlTWV0YURiOiBBIHJlc2VydmVkIHBhcmFtZXRlci4gTm90IHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZUN1c3RvbUhpdmVNZXRhRGI/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlckRlZmluZWRFbXJFY3NSb2xlOiBUaGUgcm9sZSB0aGF0IGlzIGFzc2lnbmVkIHRvIEVNUiBmb3IgY2FsbGluZyBFQ1MgcmVzb3VyY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJEZWZpbmVkRW1yRWNzUm9sZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzZXJJbmZvOlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJJbmZvPzogQXJyYXk8Um9zQ2x1c3Rlci5Vc2VySW5mb1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQy4gQSB2YWx1ZSBpcyByZXF1aXJlZCB3aGVuIE5ldFR5cGU9dnBjLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgSUQgb2YgdGhlIFZzd2l0Y2guIEEgdmFsdWUgaXMgcmVxdWlyZWQgd2hlbiBOZXRUeXBlPXZwYy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3aGl0ZUxpc3RUeXBlOiBOb3QgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2hpdGVMaXN0VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6RU1SOjpDbHVzdGVyYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gRS1NYXBSZWR1Y2UgKEVNUikgY2x1c3Rlci5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0NsdXN0ZXJgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lbXItY2x1c3RlclxuICovXG5leHBvcnQgY2xhc3MgQ2x1c3RlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogQ2x1c3RlclByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEhvc3RHcm91cHM6IFRoZSBob3N0IGdyb3VwIGxpc3Qgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIb3N0R3JvdXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTWFzdGVyTm9kZUlubmVySXBzOiBUaGUgaW5uZXIgaXAgbGlzdCBvZiB0aGUgY2x1c3RlciBtYXN0ZXIgbm9kZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXN0ZXJOb2RlSW5uZXJJcHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBNYXN0ZXJOb2RlUHViSXBzOiBUaGUgcHVibGljIGlwIGxpc3Qgb2YgdGhlIGNsdXN0ZXIgbWFzdGVyIG5vZGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWFzdGVyTm9kZVB1Yklwczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENsdXN0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0NsdXN0ZXIgPSBuZXcgUm9zQ2x1c3Rlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGJvb3RzdHJhcEFjdGlvbjogcHJvcHMuYm9vdHN0cmFwQWN0aW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwTmFtZTogcHJvcHMuc2VjdXJpdHlHcm91cE5hbWUsXG4gICAgICAgICAgICBjb25maWc6IHByb3BzLmNvbmZpZyxcbiAgICAgICAgICAgIGNsaWNrSG91c2VDb25mOiBwcm9wcy5jbGlja0hvdXNlQ29uZixcbiAgICAgICAgICAgIGF1dG9SZW5ldzogcHJvcHMuYXV0b1JlbmV3LFxuICAgICAgICAgICAgaG9zdEdyb3VwOiBwcm9wcy5ob3N0R3JvdXAsXG4gICAgICAgICAgICB1c2VySW5mbzogcHJvcHMudXNlckluZm8sXG4gICAgICAgICAgICBoaWdoQXZhaWxhYmlsaXR5RW5hYmxlOiBwcm9wcy5oaWdoQXZhaWxhYmlsaXR5RW5hYmxlLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgICAgIG9wdGlvblNvZnRXYXJlTGlzdDogcHJvcHMub3B0aW9uU29mdFdhcmVMaXN0LFxuICAgICAgICAgICAgbWFzdGVyUHdkOiBwcm9wcy5tYXN0ZXJQd2QsXG4gICAgICAgICAgICBzc2hFbmFibGU6IHByb3BzLnNzaEVuYWJsZSxcbiAgICAgICAgICAgIHVzZUN1c3RvbUhpdmVNZXRhRGI6IHByb3BzLnVzZUN1c3RvbUhpdmVNZXRhRGIsXG4gICAgICAgICAgICBpc09wZW5QdWJsaWNJcDogcHJvcHMuaXNPcGVuUHVibGljSXAsXG4gICAgICAgICAgICBhdXRob3JpemVDb250ZW50OiBwcm9wcy5hdXRob3JpemVDb250ZW50LFxuICAgICAgICAgICAgY29uZmlndXJhdGlvbnM6IHByb3BzLmNvbmZpZ3VyYXRpb25zLFxuICAgICAgICAgICAgbmV0VHlwZTogcHJvcHMubmV0VHlwZSxcbiAgICAgICAgICAgIHVzZXJEZWZpbmVkRW1yRWNzUm9sZTogcHJvcHMudXNlckRlZmluZWRFbXJFY3NSb2xlLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgICAgIHVzZUxvY2FsTWV0YURiOiBwcm9wcy51c2VMb2NhbE1ldGFEYixcbiAgICAgICAgICAgIGtleVBhaXJOYW1lOiBwcm9wcy5rZXlQYWlyTmFtZSxcbiAgICAgICAgICAgIGlvT3B0aW1pemVkOiBwcm9wcy5pb09wdGltaXplZCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmlvT3B0aW1pemVkID09PSBudWxsID8gdHJ1ZSA6IHByb3BzLmlvT3B0aW1pemVkLFxuICAgICAgICAgICAgem9uZUlkOiBwcm9wcy56b25lSWQsXG4gICAgICAgICAgICB2U3dpdGNoSWQ6IHByb3BzLnZTd2l0Y2hJZCxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZDogcHJvcHMuc2VjdXJpdHlHcm91cElkLFxuICAgICAgICAgICAgbWFjaGluZVR5cGU6IHByb3BzLm1hY2hpbmVUeXBlLFxuICAgICAgICAgICAgZGVwb3NpdFR5cGU6IHByb3BzLmRlcG9zaXRUeXBlLFxuICAgICAgICAgICAgbWV0YVN0b3JlVHlwZTogcHJvcHMubWV0YVN0b3JlVHlwZSxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kLFxuICAgICAgICAgICAgZW1yVmVyOiBwcm9wcy5lbXJWZXIsXG4gICAgICAgICAgICBjbHVzdGVyVHlwZTogcHJvcHMuY2x1c3RlclR5cGUsXG4gICAgICAgICAgICBlYXNFbmFibGU6IHByb3BzLmVhc0VuYWJsZSxcbiAgICAgICAgICAgIHJlbGF0ZWRDbHVzdGVySWQ6IHByb3BzLnJlbGF0ZWRDbHVzdGVySWQsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBjaGFyZ2VUeXBlOiBwcm9wcy5jaGFyZ2VUeXBlLFxuICAgICAgICAgICAgd2hpdGVMaXN0VHlwZTogcHJvcHMud2hpdGVMaXN0VHlwZSxcbiAgICAgICAgICAgIG1ldGFTdG9yZUNvbmY6IHByb3BzLm1ldGFTdG9yZUNvbmYsXG4gICAgICAgICAgICBpbnN0YW5jZUdlbmVyYXRpb246IHByb3BzLmluc3RhbmNlR2VuZXJhdGlvbixcbiAgICAgICAgICAgIGxvZ1BhdGg6IHByb3BzLmxvZ1BhdGgsXG4gICAgICAgICAgICBpbml0Q3VzdG9tSGl2ZU1ldGFEYjogcHJvcHMuaW5pdEN1c3RvbUhpdmVNZXRhRGIsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQ2x1c3RlcjtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gcm9zQ2x1c3Rlci5hdHRyQ2x1c3RlcklkO1xuICAgICAgICB0aGlzLmF0dHJIb3N0R3JvdXBzID0gcm9zQ2x1c3Rlci5hdHRySG9zdEdyb3VwcztcbiAgICAgICAgdGhpcy5hdHRyTWFzdGVyTm9kZUlubmVySXBzID0gcm9zQ2x1c3Rlci5hdHRyTWFzdGVyTm9kZUlubmVySXBzO1xuICAgICAgICB0aGlzLmF0dHJNYXN0ZXJOb2RlUHViSXBzID0gcm9zQ2x1c3Rlci5hdHRyTWFzdGVyTm9kZVB1YklwcztcbiAgICB9XG59XG4iXX0=