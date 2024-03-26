"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mongodb_generated_1 = require("./mongodb.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return mongodb_generated_1.RosInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MONGODB::Instance`, which is used to create or clone an ApsaraDB for MongoDB replica set instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
 */
class Instance extends ros.Resource {
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
        const rosInstance = new mongodb_generated_1.RosInstance(this, id, {
            businessInfo: props.businessInfo,
            resourceGroupId: props.resourceGroupId,
            hiddenZoneId: props.hiddenZoneId,
            autoRenew: props.autoRenew,
            securityIpArray: props.securityIpArray,
            backupId: props.backupId,
            storageEngine: props.storageEngine === undefined || props.storageEngine === null ? 'WiredTiger' : props.storageEngine,
            restoreTime: props.restoreTime,
            networkType: props.networkType,
            dbInstanceStorage: props.dbInstanceStorage,
            tags: props.tags,
            dbInstanceDescription: props.dbInstanceDescription,
            couponNo: props.couponNo,
            tdeStatus: props.tdeStatus,
            engineVersion: props.engineVersion === undefined || props.engineVersion === null ? '3.4' : props.engineVersion,
            storageType: props.storageType,
            readonlyReplicas: props.readonlyReplicas,
            replicationFactor: props.replicationFactor,
            zoneId: props.zoneId,
            dbInstanceClass: props.dbInstanceClass,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            vpcPasswordFree: props.vpcPasswordFree,
            secondaryZoneId: props.secondaryZoneId,
            accountPassword: props.accountPassword,
            vpcId: props.vpcId,
            chargeType: props.chargeType === undefined || props.chargeType === null ? 'PostPaid' : props.chargeType,
            databaseNames: props.databaseNames,
            srcDbInstanceId: props.srcDbInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrConnectionUri = rosInstance.attrConnectionUri;
        this.attrDbInstanceId = rosInstance.attrDbInstanceId;
        this.attrDbInstanceStatus = rosInstance.attrDbInstanceStatus;
        this.attrOrderId = rosInstance.attrOrderId;
        this.attrReplicaSetName = rosInstance.attrReplicaSetName;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsMkRBQWtEO0FBRTFCLGlHQUZmLCtCQUFXLE9BRW9CO0FBMkt4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUErQnRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFdBQVcsR0FBRyxJQUFJLCtCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWE7WUFDckgsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1lBQ2xELFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQzlHLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUM5RSxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVO1lBQ3ZHLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7U0FDekMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUMsb0JBQW9CLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUM7SUFDN0QsQ0FBQztDQUNKO0FBbEZELDRCQWtGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0luc3RhbmNlIH0gZnJvbSAnLi9tb25nb2RiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0luc3RhbmNlIGFzIEluc3RhbmNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBJbnN0YW5jZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1tb25nb2RiLWluc3RhbmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlQ2xhc3M6IE1vbmdvREIgaW5zdGFuY2Ugc3VwcG9ydGVkIGluc3RhbmNlIHR5cGUsIG1ha2Ugc3VyZSBpdCBzaG91bGQgYmUgY29ycmVjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlQ2xhc3M6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiSW5zdGFuY2VTdG9yYWdlOiBEYXRhYmFzZSBpbnN0YW5jZSBzdG9yYWdlIHNpemUuIE1vbmdvREIgaXMgWzUsMzAwMF0sIGluY3JlYXNlZCBldmVyeSAxMCBHQiwgVW5pdCBpbiBHQlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdGFuY2VTdG9yYWdlOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2NvdW50UGFzc3dvcmQ6IFJvb3QgYWNjb3VudCBwYXNzd29yZCwgY2FuIGNvbnRhaW4gdGhlIGxldHRlcnMsIG51bWJlcnMgb3IgdW5kZXJzY29yZXMgdGhlIGNvbXBvc2l0aW9uLCBsZW5ndGggb2YgNn4zMiBiaXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjb3VudFBhc3N3b3JkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1JlbmV3OiBJbmRpY2F0ZXMgd2hldGhlciBhdXRvbWF0aWMgcmVuZXdhbCBpcyBlbmFibGVkIGZvciB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczp0cnVlOiBBdXRvbWF0aWMgcmVuZXdhbCBpcyBlbmFibGVkLmZhbHNlOiBBdXRvbWF0aWMgcmVuZXdhbCBpcyBub3QgZW5hYmxlZC4gWW91IG11c3QgcmVuZXcgdGhlIGluc3RhbmNlIG1hbnVhbGx5LkRlZmF1bHQgdmFsdWU6IGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZW5ldz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBiYWNrdXBJZDogU3BlY2lmaWMgYmFja3VwIHNldCBJZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYWNrdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJ1c2luZXNzSW5mbzogVGhlIGJ1c2luZXNzIGluZm9ybWF0aW9uLiBJdCBpcyBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBidXNpbmVzc0luZm8/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjaGFyZ2VUeXBlOiBUaGUgYmlsbGluZyBtZXRob2Qgb2YgdGhlIGluc3RhbmNlLnZhbHVlczpQb3N0UGFpZDogUGF5LUFzLVlvdS1Hby5QcmVQYWlkOiBTdWJzY3JpcHRpb24uRGVmYXVsdCB2YWx1ZTogUG9zdFBhaWRcbiAgICAgKi9cbiAgICByZWFkb25seSBjaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY291cG9uTm86IFRoZSBjb3Vwb24gY29kZS4gRGVmYXVsdCB2YWx1ZTp5b3VodWlxdWFuX3Byb21vdGlvbl9vcHRpb25faWRfZm9yX2JsYW5rLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvdXBvbk5vPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGF0YWJhc2VOYW1lczogVGhlIG5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRhdGFiYXNlTmFtZXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlRGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIGNyZWF0ZWQgZGF0YWJhc2UgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZURlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5naW5lVmVyc2lvbjogRGF0YWJhc2UgaW5zdGFuY2UgdmVyc2lvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmdpbmVWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaGlkZGVuWm9uZUlkOiBDb25maWd1cmUgdGhlIHpvbmUgd2hlcmUgdGhlIGhpZGRlbiBub2RlIHJlc2lkZXMgdG8gaW1wbGVtZW50IG11bHRpLWF2YWlsYWJpbGl0eSB6b25lIGRlcGxveW1lbnQuXG4gICAgICogV2hlbiB0aGUgdmFsdWUgb2YgdGhlIEVuZ2luZVZlcnNpb24gaXMgNC40IGFuZCBsYXRlciwgdGhpcyBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIGFuZCByZXF1aXJlZC5cbiAgICAgKiBUaGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgY2Fubm90IGJlIHRoZSBzYW1lIGFzIHRoYXQgb2YgWm9uZUlkIGFuZCBTZWNvbmRhcnlab25lSWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGlkZGVuWm9uZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmV0d29ya1R5cGU6IFRoZSBpbnN0YW5jZSBuZXR3b3JrIHR5cGUuIFN1cHBvcnQgJ0NMQVNTSUMnIGFuZCAnVlBDJyBvbmx5LCBkZWZhdWx0IGlzICdDTEFTU0lDJy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuZXR3b3JrVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZDogVGhlIHN1YnNjcmlwdGlvbiBwZXJpb2Qgb2YgdGhlIGluc3RhbmNlLkRlZmF1bHQgVW5pdDogTW9udGguVmFsaWQgdmFsdWVzOiBbMX45XSwgMTIsIDI0LCAzNi4gRGVmYXVsdCB0byAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlYWRvbmx5UmVwbGljYXM6IE51bWJlciBvZiByZWFkLW9ubHkgbm9kZXMsIGluIHRoZSByYW5nZSBvZiAxLTUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVhZG9ubHlSZXBsaWNhcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlcGxpY2F0aW9uRmFjdG9yOiBUaGUgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSByZXBsaWNhIHNldC4gQWxsb3dlZCB2YWx1ZXM6IFszLCA1LCA3XSwgZGVmYXVsdCB0byAzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcGxpY2F0aW9uRmFjdG9yPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc3RvcmVUaW1lOiBUaGUgdGltZSB0byByZXN0b3JlIHRoZSBjbG9uZWQgaW5zdGFuY2UgdG8uIFRoZSBmb3JtYXQgaXMgeXl5eS1NTS1kZFRISDptbTpzc1ouVGhpcyBwYXJhbWV0ZXIgY2FuIG9ubHkgYmUgc3BlY2lmaWVkIHdoZW4gdGhpcyBvcGVyYXRpb24gaXMgY2FsbGVkIHRvIGNsb25lIGluc3RhbmNlcy5Zb3UgbXVzdCBhbHNvIHNwZWNpZnkgdGhlU3JjREJJbnN0YW5jZUlkcGFyYW1ldGVyIGFuZCB0aGVCYWNrdXBJZHBhcmFtZXRlci5Zb3UgY2FuIGNsb25lIGluc3RhbmNlcyB0byBhbnkgcmVzdG9yZSB0aW1lIGluIHRoZSBwYXN0IHNldmVuIGRheXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzdG9yZVRpbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWNvbmRhcnlab25lSWQ6IENvbmZpZ3VyZSB0aGUgem9uZSB3aGVyZSB0aGUgc2Vjb25kYXJ5IG5vZGUgcmVzaWRlcyB0byBpbXBsZW1lbnQgbXVsdGktYXZhaWxhYmlsaXR5IHpvbmUgZGVwbG95bWVudC5cbiAgICAgKiBXaGVuIHRoZSB2YWx1ZSBvZiB0aGUgRW5naW5lVmVyc2lvbiBpcyA0LjQgYW5kIGxhdGVyLCB0aGlzIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYW5kIHJlcXVpcmVkLlRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciBjYW5ub3QgYmUgdGhlIHNhbWUgYXMgdGhhdCBvZiBab25lSWQgYW5kIEhpZGRlblpvbmVJZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWNvbmRhcnlab25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgRUNTIHNlY3VyaXR5IGdyb3VwLlxuICAgICAqIEVhY2ggQXBzYXJhREIgZm9yIE1vbmdvREIgaW5zdGFuY2UgY2FuIGJlIGFkZGVkIGluIHVwIHRvIDEwIHNlY3VyaXR5IGdyb3VwLiBcbiAgICAgKiBZb3UgY2FuIGNhbGwgdGhlIEVDUyBEZXNjcmliZVNlY3VyaXR5R3JvdXAgdG8gZGVzY3JpYmUgdGhlIElEIG9mIHRoZSBzZWN1cml0eSBncm91cCBpbiB0aGUgdGFyZ2V0IHJlZ2lvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eUlwQXJyYXk6IFNlY3VyaXR5IGlwcyB0byBhZGQgb3IgcmVtb3ZlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5SXBBcnJheT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNyY0RiSW5zdGFuY2VJZDogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBiYWNrdXAgc2V0IGJhc2VkIG9uIGFuIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNyY0RiSW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN0b3JhZ2VFbmdpbmU6IERhdGFiYXNlIHN0b3JhZ2UgZW5naW5lLlN1cHBvcnQgV2lyZWRUaWdlciwgUm9ja3NEQiwgVGVyYXJrREJcbiAgICAgKi9cbiAgICByZWFkb25seSBzdG9yYWdlRW5naW5lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3RvcmFnZVR5cGU6IFRoZSBzdG9yYWdlIHR5cGUgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqIEluc3RhbmNlcyBvZiBNb25nb0RCIDQuNCBhbmQgbGF0ZXIgb25seSBzdXBwb3J0IGNsb3VkIGRpc2tzLiBjbG91ZF9lc3NkMSBpcyBzZWxlY3RlZCBpZiB5b3UgbGVhdmUgdGhpcyBwYXJhbWV0ZXIgZW1wdHkuXG4gICAgICogSW5zdGFuY2VzIG9mIE1vbmdvREIgNC4yIGFuZCBlYXJsaWVyIHN1cHBvcnQgb25seSBsb2NhbCBkaXNrcy4gbG9jYWxfc3NkIGlzIHNlbGVjdGVkIGlmIHlvdSBsZWF2ZSB0aGlzIHBhcmFtZXRlciBlbXB0eS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdG9yYWdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0luc3RhbmNlLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGRlU3RhdHVzOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgVHJhbnNwYXJlbnQgRGF0YSBFbmNyeXB0aW9uIChUREUpLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZTogZW5hYmxlIFRERVxuICAgICAqIGZhbHNlOiBkaXNhYmxlIFRERSAoZGVmYXVsdClcbiAgICAgKiBOb3RlOiBZb3UgY2Fubm90IGRpc2FibGUgVERFIGFmdGVyIGl0IGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGRlU3RhdHVzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBUaGUgVlBDIGlkIHRvIGNyZWF0ZSBtb25nb2RiIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjUGFzc3dvcmRGcmVlOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgcGFzc3dvcmQgZnJlZSBmb3IgYWNjZXNzIHdpdGhpbiB0aGUgVlBDLiBJZiBzZXQgdG86XG4gICAgICogLSB0cnVlOiBlbmFibGVzIHBhc3N3b3JkIGZyZWUuXG4gICAgICogLSBmYWxzZTogZGlzYWJsZXMgcGFzc3dvcmQgZnJlZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNQYXNzd29yZEZyZWU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgdlN3aXRjaCBJZCB0byBjcmVhdGUgbW9uZ29kYiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IE9uIHdoaWNoIHpvbmUgdG8gY3JlYXRlIHRoZSBpbnN0YW5jZS4gSWYgVnBjSWQgYW5kIFZTd2l0Y2hJZCBpcyBzcGVjaWZpZWQsIFpvbmVJZCBpcyByZXF1aXJlZCBhbmQgVlN3aXRjaCBzaG91bGQgYmUgaW4gc2FtZSB6b25lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6TU9OR09EQjo6SW5zdGFuY2VgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBvciBjbG9uZSBhbiBBcHNhcmFEQiBmb3IgTW9uZ29EQiByZXBsaWNhIHNldCBpbnN0YW5jZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0luc3RhbmNlYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbW9uZ29kYi1pbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEluc3RhbmNlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbm5lY3Rpb25VUkk6IENvbm5lY3Rpb24gdXJpLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29ubmVjdGlvblVyaTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERCSW5zdGFuY2VJZDogVGhlIGluc3RhbmNlIGlkIG9mIGNyZWF0ZWQgbW9uZ29kYiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiSW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERCSW5zdGFuY2VTdGF0dXM6IFN0YXR1cyBvZiBtb25nb2RiIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJJbnN0YW5jZVN0YXR1czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE9yZGVySWQ6IE9yZGVyIElkIG9mIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVwbGljYVNldE5hbWU6IE5hbWUgb2YgcmVwbGljYSBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlcGxpY2FTZXROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0luc3RhbmNlID0gbmV3IFJvc0luc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYnVzaW5lc3NJbmZvOiBwcm9wcy5idXNpbmVzc0luZm8sXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGhpZGRlblpvbmVJZDogcHJvcHMuaGlkZGVuWm9uZUlkLFxuICAgICAgICAgICAgYXV0b1JlbmV3OiBwcm9wcy5hdXRvUmVuZXcsXG4gICAgICAgICAgICBzZWN1cml0eUlwQXJyYXk6IHByb3BzLnNlY3VyaXR5SXBBcnJheSxcbiAgICAgICAgICAgIGJhY2t1cElkOiBwcm9wcy5iYWNrdXBJZCxcbiAgICAgICAgICAgIHN0b3JhZ2VFbmdpbmU6IHByb3BzLnN0b3JhZ2VFbmdpbmUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5zdG9yYWdlRW5naW5lID09PSBudWxsID8gJ1dpcmVkVGlnZXInIDogcHJvcHMuc3RvcmFnZUVuZ2luZSxcbiAgICAgICAgICAgIHJlc3RvcmVUaW1lOiBwcm9wcy5yZXN0b3JlVGltZSxcbiAgICAgICAgICAgIG5ldHdvcmtUeXBlOiBwcm9wcy5uZXR3b3JrVHlwZSxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VTdG9yYWdlOiBwcm9wcy5kYkluc3RhbmNlU3RvcmFnZSxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgICAgICBkYkluc3RhbmNlRGVzY3JpcHRpb246IHByb3BzLmRiSW5zdGFuY2VEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGNvdXBvbk5vOiBwcm9wcy5jb3Vwb25ObyxcbiAgICAgICAgICAgIHRkZVN0YXR1czogcHJvcHMudGRlU3RhdHVzLFxuICAgICAgICAgICAgZW5naW5lVmVyc2lvbjogcHJvcHMuZW5naW5lVmVyc2lvbiA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmVuZ2luZVZlcnNpb24gPT09IG51bGwgPyAnMy40JyA6IHByb3BzLmVuZ2luZVZlcnNpb24sXG4gICAgICAgICAgICBzdG9yYWdlVHlwZTogcHJvcHMuc3RvcmFnZVR5cGUsXG4gICAgICAgICAgICByZWFkb25seVJlcGxpY2FzOiBwcm9wcy5yZWFkb25seVJlcGxpY2FzLFxuICAgICAgICAgICAgcmVwbGljYXRpb25GYWN0b3I6IHByb3BzLnJlcGxpY2F0aW9uRmFjdG9yLFxuICAgICAgICAgICAgem9uZUlkOiBwcm9wcy56b25lSWQsXG4gICAgICAgICAgICBkYkluc3RhbmNlQ2xhc3M6IHByb3BzLmRiSW5zdGFuY2VDbGFzcyxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogcHJvcHMudlN3aXRjaElkLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cElkOiBwcm9wcy5zZWN1cml0eUdyb3VwSWQsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBlcmlvZCA9PT0gbnVsbCA/IDEgOiBwcm9wcy5wZXJpb2QsXG4gICAgICAgICAgICB2cGNQYXNzd29yZEZyZWU6IHByb3BzLnZwY1Bhc3N3b3JkRnJlZSxcbiAgICAgICAgICAgIHNlY29uZGFyeVpvbmVJZDogcHJvcHMuc2Vjb25kYXJ5Wm9uZUlkLFxuICAgICAgICAgICAgYWNjb3VudFBhc3N3b3JkOiBwcm9wcy5hY2NvdW50UGFzc3dvcmQsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBjaGFyZ2VUeXBlOiBwcm9wcy5jaGFyZ2VUeXBlID09PSB1bmRlZmluZWQgfHwgcHJvcHMuY2hhcmdlVHlwZSA9PT0gbnVsbCA/ICdQb3N0UGFpZCcgOiBwcm9wcy5jaGFyZ2VUeXBlLFxuICAgICAgICAgICAgZGF0YWJhc2VOYW1lczogcHJvcHMuZGF0YWJhc2VOYW1lcyxcbiAgICAgICAgICAgIHNyY0RiSW5zdGFuY2VJZDogcHJvcHMuc3JjRGJJbnN0YW5jZUlkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0luc3RhbmNlO1xuICAgICAgICB0aGlzLmF0dHJDb25uZWN0aW9uVXJpID0gcm9zSW5zdGFuY2UuYXR0ckNvbm5lY3Rpb25Vcmk7XG4gICAgICAgIHRoaXMuYXR0ckRiSW5zdGFuY2VJZCA9IHJvc0luc3RhbmNlLmF0dHJEYkluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0ckRiSW5zdGFuY2VTdGF0dXMgPSByb3NJbnN0YW5jZS5hdHRyRGJJbnN0YW5jZVN0YXR1cztcbiAgICAgICAgdGhpcy5hdHRyT3JkZXJJZCA9IHJvc0luc3RhbmNlLmF0dHJPcmRlcklkO1xuICAgICAgICB0aGlzLmF0dHJSZXBsaWNhU2V0TmFtZSA9IHJvc0luc3RhbmNlLmF0dHJSZXBsaWNhU2V0TmFtZTtcbiAgICB9XG59XG4iXX0=