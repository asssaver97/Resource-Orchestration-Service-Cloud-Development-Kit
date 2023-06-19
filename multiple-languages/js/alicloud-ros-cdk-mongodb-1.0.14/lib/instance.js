"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mongodb_generated_1 = require("./mongodb.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return mongodb_generated_1.RosInstance; } });
/**
 * A ROS resource type:  `ALIYUN::MONGODB::Instance`
 */
class Instance extends ros.Resource {
    /**
     * Create a new `ALIYUN::MONGODB::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsMkRBQWtEO0FBRTFCLGlHQUZmLCtCQUFXLE9BRW9CO0FBMEt4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0N0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLCtCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWE7WUFDckgsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1lBQ2xELFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQzlHLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUM5RSxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVO1lBQ3ZHLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7U0FDekMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUMsb0JBQW9CLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUM7SUFDN0QsQ0FBQztDQUNKO0FBakZELDRCQWlGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0luc3RhbmNlIH0gZnJvbSAnLi9tb25nb2RiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0luc3RhbmNlIGFzIEluc3RhbmNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok1PTkdPREI6Okluc3RhbmNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluc3RhbmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZUNsYXNzOiBNb25nb0RCIGluc3RhbmNlIHN1cHBvcnRlZCBpbnN0YW5jZSB0eXBlLCBtYWtlIHN1cmUgaXQgc2hvdWxkIGJlIGNvcnJlY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZUNsYXNzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlU3RvcmFnZTogRGF0YWJhc2UgaW5zdGFuY2Ugc3RvcmFnZSBzaXplLiBNb25nb0RCIGlzIFs1LDMwMDBdLCBpbmNyZWFzZWQgZXZlcnkgMTAgR0IsIFVuaXQgaW4gR0JcbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlU3RvcmFnZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNjb3VudFBhc3N3b3JkOiBSb290IGFjY291bnQgcGFzc3dvcmQsIGNhbiBjb250YWluIHRoZSBsZXR0ZXJzLCBudW1iZXJzIG9yIHVuZGVyc2NvcmVzIHRoZSBjb21wb3NpdGlvbiwgbGVuZ3RoIG9mIDZ+MzIgYml0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY291bnRQYXNzd29yZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9SZW5ldzogSW5kaWNhdGVzIHdoZXRoZXIgYXV0b21hdGljIHJlbmV3YWwgaXMgZW5hYmxlZCBmb3IgdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6dHJ1ZTogQXV0b21hdGljIHJlbmV3YWwgaXMgZW5hYmxlZC5mYWxzZTogQXV0b21hdGljIHJlbmV3YWwgaXMgbm90IGVuYWJsZWQuIFlvdSBtdXN0IHJlbmV3IHRoZSBpbnN0YW5jZSBtYW51YWxseS5EZWZhdWx0IHZhbHVlOiBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUmVuZXc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFja3VwSWQ6IFNwZWNpZmljIGJhY2t1cCBzZXQgSWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFja3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBidXNpbmVzc0luZm86IFRoZSBidXNpbmVzcyBpbmZvcm1hdGlvbi4gSXQgaXMgYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYnVzaW5lc3NJbmZvPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2hhcmdlVHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kIG9mIHRoZSBpbnN0YW5jZS52YWx1ZXM6UG9zdFBhaWQ6IFBheS1Bcy1Zb3UtR28uUHJlUGFpZDogU3Vic2NyaXB0aW9uLkRlZmF1bHQgdmFsdWU6IFBvc3RQYWlkXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvdXBvbk5vOiBUaGUgY291cG9uIGNvZGUuIERlZmF1bHQgdmFsdWU6eW91aHVpcXVhbl9wcm9tb3Rpb25fb3B0aW9uX2lkX2Zvcl9ibGFuay5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb3Vwb25Obz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRhdGFiYXNlTmFtZXM6IFRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYXRhYmFzZU5hbWVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZURlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiBjcmVhdGVkIGRhdGFiYXNlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdGFuY2VEZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuZ2luZVZlcnNpb246IERhdGFiYXNlIGluc3RhbmNlIHZlcnNpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5naW5lVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGhpZGRlblpvbmVJZDogQ29uZmlndXJlIHRoZSB6b25lIHdoZXJlIHRoZSBoaWRkZW4gbm9kZSByZXNpZGVzIHRvIGltcGxlbWVudCBtdWx0aS1hdmFpbGFiaWxpdHkgem9uZSBkZXBsb3ltZW50LlxuICAgICAqIFdoZW4gdGhlIHZhbHVlIG9mIHRoZSBFbmdpbmVWZXJzaW9uIGlzIDQuNCBhbmQgbGF0ZXIsIHRoaXMgcGFyYW1ldGVyIGlzIGF2YWlsYWJsZSBhbmQgcmVxdWlyZWQuXG4gICAgICogVGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIGNhbm5vdCBiZSB0aGUgc2FtZSBhcyB0aGF0IG9mIFpvbmVJZCBhbmQgU2Vjb25kYXJ5Wm9uZUlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhpZGRlblpvbmVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5ldHdvcmtUeXBlOiBUaGUgaW5zdGFuY2UgbmV0d29yayB0eXBlLiBTdXBwb3J0ICdDTEFTU0lDJyBhbmQgJ1ZQQycgb25seSwgZGVmYXVsdCBpcyAnQ0xBU1NJQycuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0d29ya1R5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSBzdWJzY3JpcHRpb24gcGVyaW9kIG9mIHRoZSBpbnN0YW5jZS5EZWZhdWx0IFVuaXQ6IE1vbnRoLlZhbGlkIHZhbHVlczogWzF+OV0sIDEyLCAyNCwgMzYuIERlZmF1bHQgdG8gMS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZWFkb25seVJlcGxpY2FzOiBOdW1iZXIgb2YgcmVhZC1vbmx5IG5vZGVzLCBpbiB0aGUgcmFuZ2Ugb2YgMS01LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlYWRvbmx5UmVwbGljYXM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXBsaWNhdGlvbkZhY3RvcjogVGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgcmVwbGljYSBzZXQuIEFsbG93ZWQgdmFsdWVzOiBbMywgNSwgN10sIGRlZmF1bHQgdG8gMy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXBsaWNhdGlvbkZhY3Rvcj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXN0b3JlVGltZTogVGhlIHRpbWUgdG8gcmVzdG9yZSB0aGUgY2xvbmVkIGluc3RhbmNlIHRvLiBUaGUgZm9ybWF0IGlzIHl5eXktTU0tZGRUSEg6bW06c3NaLlRoaXMgcGFyYW1ldGVyIGNhbiBvbmx5IGJlIHNwZWNpZmllZCB3aGVuIHRoaXMgb3BlcmF0aW9uIGlzIGNhbGxlZCB0byBjbG9uZSBpbnN0YW5jZXMuWW91IG11c3QgYWxzbyBzcGVjaWZ5IHRoZVNyY0RCSW5zdGFuY2VJZHBhcmFtZXRlciBhbmQgdGhlQmFja3VwSWRwYXJhbWV0ZXIuWW91IGNhbiBjbG9uZSBpbnN0YW5jZXMgdG8gYW55IHJlc3RvcmUgdGltZSBpbiB0aGUgcGFzdCBzZXZlbiBkYXlzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc3RvcmVUaW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2Vjb25kYXJ5Wm9uZUlkOiBDb25maWd1cmUgdGhlIHpvbmUgd2hlcmUgdGhlIHNlY29uZGFyeSBub2RlIHJlc2lkZXMgdG8gaW1wbGVtZW50IG11bHRpLWF2YWlsYWJpbGl0eSB6b25lIGRlcGxveW1lbnQuXG4gICAgICogV2hlbiB0aGUgdmFsdWUgb2YgdGhlIEVuZ2luZVZlcnNpb24gaXMgNC40IGFuZCBsYXRlciwgdGhpcyBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIGFuZCByZXF1aXJlZC5UaGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgY2Fubm90IGJlIHRoZSBzYW1lIGFzIHRoYXQgb2YgWm9uZUlkIGFuZCBIaWRkZW5ab25lSWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2Vjb25kYXJ5Wm9uZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBUaGUgSUQgb2YgdGhlIEVDUyBzZWN1cml0eSBncm91cC5cbiAgICAgKiBFYWNoIEFwc2FyYURCIGZvciBNb25nb0RCIGluc3RhbmNlIGNhbiBiZSBhZGRlZCBpbiB1cCB0byAxMCBzZWN1cml0eSBncm91cC4gXG4gICAgICogWW91IGNhbiBjYWxsIHRoZSBFQ1MgRGVzY3JpYmVTZWN1cml0eUdyb3VwIHRvIGRlc2NyaWJlIHRoZSBJRCBvZiB0aGUgc2VjdXJpdHkgZ3JvdXAgaW4gdGhlIHRhcmdldCByZWdpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlJcEFycmF5OiBTZWN1cml0eSBpcHMgdG8gYWRkIG9yIHJlbW92ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUlwQXJyYXk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzcmNEYkluc3RhbmNlSWQ6IENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgYmFja3VwIHNldCBiYXNlZCBvbiBhbiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcmNEYkluc3RhbmNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzdG9yYWdlRW5naW5lOiBEYXRhYmFzZSBzdG9yYWdlIGVuZ2luZS5TdXBwb3J0IFdpcmVkVGlnZXIsIFJvY2tzREIsIFRlcmFya0RCXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RvcmFnZUVuZ2luZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN0b3JhZ2VUeXBlOiBUaGUgc3RvcmFnZSB0eXBlIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKiBJbnN0YW5jZXMgb2YgTW9uZ29EQiA0LjQgYW5kIGxhdGVyIG9ubHkgc3VwcG9ydCBjbG91ZCBkaXNrcy4gY2xvdWRfZXNzZDEgaXMgc2VsZWN0ZWQgaWYgeW91IGxlYXZlIHRoaXMgcGFyYW1ldGVyIGVtcHR5LlxuICAgICAqIEluc3RhbmNlcyBvZiBNb25nb0RCIDQuMiBhbmQgZWFybGllciBzdXBwb3J0IG9ubHkgbG9jYWwgZGlza3MuIGxvY2FsX3NzZCBpcyBzZWxlY3RlZCBpZiB5b3UgbGVhdmUgdGhpcyBwYXJhbWV0ZXIgZW1wdHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RvcmFnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NJbnN0YW5jZS5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRkZVN0YXR1czogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIFRyYW5zcGFyZW50IERhdGEgRW5jcnlwdGlvbiAoVERFKS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHRydWU6IGVuYWJsZSBUREVcbiAgICAgKiBmYWxzZTogZGlzYWJsZSBUREUgKGRlZmF1bHQpXG4gICAgICogTm90ZTogWW91IGNhbm5vdCBkaXNhYmxlIFRERSBhZnRlciBpdCBpcyBlbmFibGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRkZVN0YXR1cz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNJZDogVGhlIFZQQyBpZCB0byBjcmVhdGUgbW9uZ29kYiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY1Bhc3N3b3JkRnJlZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIHBhc3N3b3JkIGZyZWUgZm9yIGFjY2VzcyB3aXRoaW4gdGhlIFZQQy4gSWYgc2V0IHRvOlxuICAgICAqIC0gdHJ1ZTogZW5hYmxlcyBwYXNzd29yZCBmcmVlLlxuICAgICAqIC0gZmFsc2U6IGRpc2FibGVzIHBhc3N3b3JkIGZyZWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjUGFzc3dvcmRGcmVlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIHZTd2l0Y2ggSWQgdG8gY3JlYXRlIG1vbmdvZGIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgem9uZUlkOiBPbiB3aGljaCB6b25lIHRvIGNyZWF0ZSB0aGUgaW5zdGFuY2UuIElmIFZwY0lkIGFuZCBWU3dpdGNoSWQgaXMgc3BlY2lmaWVkLCBab25lSWQgaXMgcmVxdWlyZWQgYW5kIFZTd2l0Y2ggc2hvdWxkIGJlIGluIHNhbWUgem9uZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46Ok1PTkdPREI6Okluc3RhbmNlYFxuICovXG5leHBvcnQgY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbm5lY3Rpb25VUkk6IENvbm5lY3Rpb24gdXJpLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29ubmVjdGlvblVyaTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERCSW5zdGFuY2VJZDogVGhlIGluc3RhbmNlIGlkIG9mIGNyZWF0ZWQgbW9uZ29kYiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiSW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERCSW5zdGFuY2VTdGF0dXM6IFN0YXR1cyBvZiBtb25nb2RiIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJJbnN0YW5jZVN0YXR1czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE9yZGVySWQ6IE9yZGVyIElkIG9mIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVwbGljYVNldE5hbWU6IE5hbWUgb2YgcmVwbGljYSBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlcGxpY2FTZXROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6TU9OR09EQjo6SW5zdGFuY2VgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEluc3RhbmNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zSW5zdGFuY2UgPSBuZXcgUm9zSW5zdGFuY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBidXNpbmVzc0luZm86IHByb3BzLmJ1c2luZXNzSW5mbyxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgaGlkZGVuWm9uZUlkOiBwcm9wcy5oaWRkZW5ab25lSWQsXG4gICAgICAgICAgICBhdXRvUmVuZXc6IHByb3BzLmF1dG9SZW5ldyxcbiAgICAgICAgICAgIHNlY3VyaXR5SXBBcnJheTogcHJvcHMuc2VjdXJpdHlJcEFycmF5LFxuICAgICAgICAgICAgYmFja3VwSWQ6IHByb3BzLmJhY2t1cElkLFxuICAgICAgICAgICAgc3RvcmFnZUVuZ2luZTogcHJvcHMuc3RvcmFnZUVuZ2luZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnN0b3JhZ2VFbmdpbmUgPT09IG51bGwgPyAnV2lyZWRUaWdlcicgOiBwcm9wcy5zdG9yYWdlRW5naW5lLFxuICAgICAgICAgICAgcmVzdG9yZVRpbWU6IHByb3BzLnJlc3RvcmVUaW1lLFxuICAgICAgICAgICAgbmV0d29ya1R5cGU6IHByb3BzLm5ldHdvcmtUeXBlLFxuICAgICAgICAgICAgZGJJbnN0YW5jZVN0b3JhZ2U6IHByb3BzLmRiSW5zdGFuY2VTdG9yYWdlLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VEZXNjcmlwdGlvbjogcHJvcHMuZGJJbnN0YW5jZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY291cG9uTm86IHByb3BzLmNvdXBvbk5vLFxuICAgICAgICAgICAgdGRlU3RhdHVzOiBwcm9wcy50ZGVTdGF0dXMsXG4gICAgICAgICAgICBlbmdpbmVWZXJzaW9uOiBwcm9wcy5lbmdpbmVWZXJzaW9uID09PSB1bmRlZmluZWQgfHwgcHJvcHMuZW5naW5lVmVyc2lvbiA9PT0gbnVsbCA/ICczLjQnIDogcHJvcHMuZW5naW5lVmVyc2lvbixcbiAgICAgICAgICAgIHN0b3JhZ2VUeXBlOiBwcm9wcy5zdG9yYWdlVHlwZSxcbiAgICAgICAgICAgIHJlYWRvbmx5UmVwbGljYXM6IHByb3BzLnJlYWRvbmx5UmVwbGljYXMsXG4gICAgICAgICAgICByZXBsaWNhdGlvbkZhY3RvcjogcHJvcHMucmVwbGljYXRpb25GYWN0b3IsXG4gICAgICAgICAgICB6b25lSWQ6IHByb3BzLnpvbmVJZCxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VDbGFzczogcHJvcHMuZGJJbnN0YW5jZUNsYXNzLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kID09PSB1bmRlZmluZWQgfHwgcHJvcHMucGVyaW9kID09PSBudWxsID8gMSA6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIHZwY1Bhc3N3b3JkRnJlZTogcHJvcHMudnBjUGFzc3dvcmRGcmVlLFxuICAgICAgICAgICAgc2Vjb25kYXJ5Wm9uZUlkOiBwcm9wcy5zZWNvbmRhcnlab25lSWQsXG4gICAgICAgICAgICBhY2NvdW50UGFzc3dvcmQ6IHByb3BzLmFjY291bnRQYXNzd29yZCxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIGNoYXJnZVR5cGU6IHByb3BzLmNoYXJnZVR5cGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5jaGFyZ2VUeXBlID09PSBudWxsID8gJ1Bvc3RQYWlkJyA6IHByb3BzLmNoYXJnZVR5cGUsXG4gICAgICAgICAgICBkYXRhYmFzZU5hbWVzOiBwcm9wcy5kYXRhYmFzZU5hbWVzLFxuICAgICAgICAgICAgc3JjRGJJbnN0YW5jZUlkOiBwcm9wcy5zcmNEYkluc3RhbmNlSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuYXR0ckNvbm5lY3Rpb25VcmkgPSByb3NJbnN0YW5jZS5hdHRyQ29ubmVjdGlvblVyaTtcbiAgICAgICAgdGhpcy5hdHRyRGJJbnN0YW5jZUlkID0gcm9zSW5zdGFuY2UuYXR0ckRiSW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRyRGJJbnN0YW5jZVN0YXR1cyA9IHJvc0luc3RhbmNlLmF0dHJEYkluc3RhbmNlU3RhdHVzO1xuICAgICAgICB0aGlzLmF0dHJPcmRlcklkID0gcm9zSW5zdGFuY2UuYXR0ck9yZGVySWQ7XG4gICAgICAgIHRoaXMuYXR0clJlcGxpY2FTZXROYW1lID0gcm9zSW5zdGFuY2UuYXR0clJlcGxpY2FTZXROYW1lO1xuICAgIH1cbn1cbiJdfQ==