"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBInstance = exports.DBInstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const rds_generated_1 = require("./rds.generated");
Object.defineProperty(exports, "DBInstanceProperty", { enumerable: true, get: function () { return rds_generated_1.RosDBInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RDS::DBInstance`, which is used to query an ApsaraDB RDS instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
 */
class DBInstance extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosDBInstance = new rds_generated_1.RosDBInstance(this, id, {
            dbInstanceId: props.dbInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstance;
        this.attrAccountMaxQuantity = rosDBInstance.attrAccountMaxQuantity;
        this.attrAdvancedFeatures = rosDBInstance.attrAdvancedFeatures;
        this.attrAutoUpgradeMinorVersion = rosDBInstance.attrAutoUpgradeMinorVersion;
        this.attrAvailabilityValue = rosDBInstance.attrAvailabilityValue;
        this.attrBabelfishConfig = rosDBInstance.attrBabelfishConfig;
        this.attrCategory = rosDBInstance.attrCategory;
        this.attrCollation = rosDBInstance.attrCollation;
        this.attrConnectionMode = rosDBInstance.attrConnectionMode;
        this.attrConnectionString = rosDBInstance.attrConnectionString;
        this.attrConsoleVersion = rosDBInstance.attrConsoleVersion;
        this.attrCreationTime = rosDBInstance.attrCreationTime;
        this.attrCurrentKernelVersion = rosDBInstance.attrCurrentKernelVersion;
        this.attrDbClusterNodes = rosDBInstance.attrDbClusterNodes;
        this.attrDbInstanceCpu = rosDBInstance.attrDbInstanceCpu;
        this.attrDbInstanceClass = rosDBInstance.attrDbInstanceClass;
        this.attrDbInstanceClassType = rosDBInstance.attrDbInstanceClassType;
        this.attrDbInstanceDescription = rosDBInstance.attrDbInstanceDescription;
        this.attrDbInstanceDiskUsed = rosDBInstance.attrDbInstanceDiskUsed;
        this.attrDbInstanceId = rosDBInstance.attrDbInstanceId;
        this.attrDbInstanceMemory = rosDBInstance.attrDbInstanceMemory;
        this.attrDbInstanceNetType = rosDBInstance.attrDbInstanceNetType;
        this.attrDbInstanceStatus = rosDBInstance.attrDbInstanceStatus;
        this.attrDbInstanceStorage = rosDBInstance.attrDbInstanceStorage;
        this.attrDbInstanceStorageType = rosDBInstance.attrDbInstanceStorageType;
        this.attrDbInstanceType = rosDBInstance.attrDbInstanceType;
        this.attrDbMaxQuantity = rosDBInstance.attrDbMaxQuantity;
        this.attrDedicatedHostGroupId = rosDBInstance.attrDedicatedHostGroupId;
        this.attrDeletionProtection = rosDBInstance.attrDeletionProtection;
        this.attrEngine = rosDBInstance.attrEngine;
        this.attrEngineVersion = rosDBInstance.attrEngineVersion;
        this.attrExpireTime = rosDBInstance.attrExpireTime;
        this.attrExtra = rosDBInstance.attrExtra;
        this.attrGeneralGroupName = rosDBInstance.attrGeneralGroupName;
        this.attrGuardDbInstanceId = rosDBInstance.attrGuardDbInstanceId;
        this.attrIpType = rosDBInstance.attrIpType;
        this.attrIncrementSourceDbInstanceId = rosDBInstance.attrIncrementSourceDbInstanceId;
        this.attrInstanceNetworkType = rosDBInstance.attrInstanceNetworkType;
        this.attrInstructionSetArch = rosDBInstance.attrInstructionSetArch;
        this.attrLatestKernelVersion = rosDBInstance.attrLatestKernelVersion;
        this.attrLockMode = rosDBInstance.attrLockMode;
        this.attrLockReason = rosDBInstance.attrLockReason;
        this.attrMaintainTime = rosDBInstance.attrMaintainTime;
        this.attrMasterInstanceId = rosDBInstance.attrMasterInstanceId;
        this.attrMasterZone = rosDBInstance.attrMasterZone;
        this.attrMaxConnections = rosDBInstance.attrMaxConnections;
        this.attrMaxIombps = rosDBInstance.attrMaxIombps;
        this.attrMaxIops = rosDBInstance.attrMaxIops;
        this.attrPgBouncerEnabled = rosDBInstance.attrPgBouncerEnabled;
        this.attrPayType = rosDBInstance.attrPayType;
        this.attrPort = rosDBInstance.attrPort;
        this.attrProxyType = rosDBInstance.attrProxyType;
        this.attrReadOnlyDbInstanceIds = rosDBInstance.attrReadOnlyDbInstanceIds;
        this.attrReadonlyInstanceSqlDelayedTime = rosDBInstance.attrReadonlyInstanceSqlDelayedTime;
        this.attrResourceGroupId = rosDBInstance.attrResourceGroupId;
        this.attrSecurityIpList = rosDBInstance.attrSecurityIpList;
        this.attrSecurityIpMode = rosDBInstance.attrSecurityIpMode;
        this.attrServerlessConfig = rosDBInstance.attrServerlessConfig;
        this.attrSlaveZones = rosDBInstance.attrSlaveZones;
        this.attrSuperPermissionMode = rosDBInstance.attrSuperPermissionMode;
        this.attrTempDbInstanceId = rosDBInstance.attrTempDbInstanceId;
        this.attrTimeZone = rosDBInstance.attrTimeZone;
        this.attrTips = rosDBInstance.attrTips;
        this.attrTipsLevel = rosDBInstance.attrTipsLevel;
        this.attrVSwitchId = rosDBInstance.attrVSwitchId;
        this.attrVpcCloudInstanceId = rosDBInstance.attrVpcCloudInstanceId;
        this.attrVpcId = rosDBInstance.attrVpcId;
        this.attrZoneId = rosDBInstance.attrZoneId;
    }
}
exports.DBInstance = DBInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJpbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRiaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFjNUM7Ozs7R0FJRztBQUNILE1BQWEsVUFBVyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBNll4Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUF5QixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDdEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGFBQWEsR0FBRyxJQUFJLDZCQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMvQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7U0FDbkMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDOUIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztRQUNuRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDLG9CQUFvQixDQUFDO1FBQy9ELElBQUksQ0FBQywyQkFBMkIsR0FBRyxhQUFhLENBQUMsMkJBQTJCLENBQUM7UUFDN0UsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUNqRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLG1CQUFtQixDQUFD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SSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ2pELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxhQUFhLENBQUMsc0JBQXNCLENBQUM7UUFDbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUMvQyxDQUFDO0NBQ0o7QUFqZUQsZ0NBaWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zREJJbnN0YW5jZSB9IGZyb20gJy4vcmRzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RCSW5zdGFuY2UgYXMgREJJbnN0YW5jZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREJJbnN0YW5jZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtcmRzLWRiaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEQkluc3RhbmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlJEUzo6REJJbnN0YW5jZWAsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgYW4gQXBzYXJhREIgUkRTIGluc3RhbmNlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zREJJbnN0YW5jZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1yZHMtZGJpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgREJJbnN0YW5jZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogREJJbnN0YW5jZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBY2NvdW50TWF4UXVhbnRpdHk6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBhY2NvdW50cyB0aGF0IGNhbiBiZSBjcmVhdGVkIG9uIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY291bnRNYXhRdWFudGl0eTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFkdmFuY2VkRmVhdHVyZXM6IFRoZSBhZHZhbmNlZCBmZWF0dXJlcyB0aGF0IGFyZSBlbmFibGVkIGZvciB0aGUgaW5zdGFuY2UuIElmIG11bHRpcGxlIGFkdmFuY2VkIGZlYXR1cmVzIGFyZSBlbmFibGVkLCB0aGUgYWR2YW5jZWQgZmVhdHVyZXMgYXJlIHNlcGFyYXRlZCBieSBjb21tYXMgKCwpLiBUaGlzIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgb25seSB0byBpbnN0YW5jZXMgdGhhdCBydW4gU1FMIFNlcnZlci4gVmFsaWQgdmFsdWVzOlxuTGlua2VkU2VydmVyXG5EaXN0cmlidXRlVHJhbnNhY3Rpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFkdmFuY2VkRmVhdHVyZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBdXRvVXBncmFkZU1pbm9yVmVyc2lvbjogVGhlIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gdXBkYXRlIHRoZSBtaW5vciBlbmdpbmUgdmVyc2lvbiBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbkF1dG86IGF1dG9tYXRpYyB1cGRhdGUuXG5NYW51YWw6IG1hbnVhbCB1cGRhdGUuIFRoZSBtaW5vciBlbmdpbmUgdmVyc2lvbiBvZiB0aGUgaW5zdGFuY2UgaXMgZm9yY2VmdWxseSB1cGRhdGVkIG9ubHkgd2hlbiB0aGUgaW4tdXNlIG1pbm9yIGVuZ2luZSB2ZXJzaW9uIGlzIHBoYXNlZCBvdXQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBdXRvVXBncmFkZU1pbm9yVmVyc2lvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEF2YWlsYWJpbGl0eVZhbHVlOiBUaGUgYXZhaWxhYmlsaXR5IHN0YXR1cyBvZiB0aGUgaW5zdGFuY2UgaW4gcGVyY2VudGFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckF2YWlsYWJpbGl0eVZhbHVlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQmFiZWxmaXNoQ29uZmlnOiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUgQmFiZWxmaXNoIGZlYXR1cmUgZm9yIHRoZSBBcHNhcmFEQiBSRFMgZm9yIFBvc3RncmVTUUwgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCYWJlbGZpc2hDb25maWc6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDYXRlZ29yeTogVGhlIFJEUyBlZGl0aW9uIG9mIHRoZSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuQmFzaWM6IFJEUyBCYXNpYyBFZGl0aW9uXG5IaWdoQXZhaWxhYmlsaXR5OiBSRFMgSGlnaC1hdmFpbGFiaWxpdHkgRWRpdGlvblxuY2x1c3RlcjogUkRTIENsdXN0ZXIgRWRpdGlvbiBmb3IgQXBzYXJhREIgUkRTIGZvciBNeVNRTFxuQWx3YXlzT246IFJEUyBDbHVzdGVyIEVkaXRpb24gZm9yIEFwc2FyYURCIFJEUyBmb3IgU1FMIFNlcnZlclxuRmluYW5jZTogUkRTIEVudGVycHJpc2UgRWRpdGlvblxuU2VydmVybGVzc19iYXNpYzogUkRTIEJhc2ljIEVkaXRpb24gZm9yIHNlcnZlcmxlc3MgaW5zdGFuY2VzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDYXRlZ29yeTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbGxhdGlvbjogVGhlIGNoYXJhY3RlciBzZXQgY29sbGF0aW9uIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbGxhdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbm5lY3Rpb25Nb2RlOiBUaGUgY29ubmVjdGlvbiBtb2RlIG9mIHRoZSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuU3RhbmRhcmQ6IHN0YW5kYXJkIG1vZGVcblNhZmU6IGRhdGFiYXNlIHByb3h5IG1vZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbm5lY3Rpb25Nb2RlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29ubmVjdGlvblN0cmluZzogVGhlIGludGVybmFsIGVuZHBvaW50IG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbm5lY3Rpb25TdHJpbmc6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDb25zb2xlVmVyc2lvbjogVGhlIHR5cGUgb2YgdGhlIHByb3h5IHRoYXQgaXMgdXNlZCBieSB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbjE6IHNoYXJlZCBwcm94eVxuMjogZGVkaWNhdGVkIHByb3h5XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb25zb2xlVmVyc2lvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENyZWF0aW9uVGltZTogVGhlIGNyZWF0aW9uIHRpbWUuIFRoZSB0aW1lIGZvbGxvd3MgdGhlIElTTyA4NjAxIHN0YW5kYXJkIGluIHRoZSB5eXl5LU1NLWRkVEhIOm1tOnNzWiBmb3JtYXQuIFRoZSB0aW1lIGlzIGRpc3BsYXllZCBpbiBVVEMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGlvblRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDdXJyZW50S2VybmVsVmVyc2lvbjogVGhlIG1pbm9yIGVuZ2luZSB2ZXJzaW9uIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckN1cnJlbnRLZXJuZWxWZXJzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJDbHVzdGVyTm9kZXM6IFRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbm9kZSBpbiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiQ2x1c3Rlck5vZGVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJJbnN0YW5jZUNQVTogVGhlIG51bWJlciBvZiBDUFUgY29yZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYkluc3RhbmNlQ3B1OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJJbnN0YW5jZUNsYXNzOiBUaGUgaW5zdGFuY2UgdHlwZSBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYkluc3RhbmNlQ2xhc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEQkluc3RhbmNlQ2xhc3NUeXBlOiBUaGUgaW5zdGFuY2UgZmFtaWx5IHRvIHdoaWNoIHRoZSBpbnN0YW5jZSBiZWxvbmdzLiBWYWxpZCB2YWx1ZXM6XG5zOiBzaGFyZWQgaW5zdGFuY2UgZmFtaWx5XG54OiBnZW5lcmFsLXB1cnBvc2UgaW5zdGFuY2UgZmFtaWx5XG5kOiBkZWRpY2F0ZWQgaW5zdGFuY2UgZmFtaWx5XG5oOiBkZWRpY2F0ZWQgaG9zdCBpbnN0YW5jZSBmYW1pbHlcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiSW5zdGFuY2VDbGFzc1R5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEQkluc3RhbmNlRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYkluc3RhbmNlRGVzY3JpcHRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEQkluc3RhbmNlRGlza1VzZWQ6IFRoZSBkaXNrIHVzYWdlIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiSW5zdGFuY2VEaXNrVXNlZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERCSW5zdGFuY2VJZDogVGhlIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJJbnN0YW5jZU1lbW9yeTogVGhlIG1lbW9yeSBjYXBhY2l0eSBvZiB0aGUgaW5zdGFuY2UuIFVuaXQ6IE1CLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJJbnN0YW5jZU1lbW9yeTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERCSW5zdGFuY2VOZXRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgbmV0d29yayBvdmVyIHdoaWNoIHRoZSBpbnN0YW5jZSBpcyBjb25uZWN0ZWQuIFZhbGlkIHZhbHVlczpcbkludGVybmV0OiBJbnRlcm5ldFxuSW50cmFuZXQ6IGludGVybmFsIG5ldHdvcmtcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiSW5zdGFuY2VOZXRUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJJbnN0YW5jZVN0YXR1czogVGhlIHN0YXR1cyBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYkluc3RhbmNlU3RhdHVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJJbnN0YW5jZVN0b3JhZ2U6IFRoZSBzdG9yYWdlIGNhcGFjaXR5IG9mIHRoZSBpbnN0YW5jZS4gVW5pdDogR0IuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYkluc3RhbmNlU3RvcmFnZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERCSW5zdGFuY2VTdG9yYWdlVHlwZTogVGhlIHN0b3JhZ2UgdHlwZSBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbmxvY2FsX3NzZCBhbmQgZXBoZW1lcmFsX3NzZDogbG9jYWwgU1NEXG5jbG91ZF9zc2Q6IHN0YW5kYXJkIFNTRFxuY2xvdWRfZXNzZDogZW5oYW5jZWQgU1NEIChFU1NEKVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJJbnN0YW5jZVN0b3JhZ2VUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJJbnN0YW5jZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuUHJpbWFyeTogcHJpbWFyeSBpbnN0YW5jZVxuUmVhZG9ubHk6IHJlYWQtb25seSBpbnN0YW5jZVxuR3VhcmQ6IGRpc2FzdGVyIHJlY292ZXJ5IGluc3RhbmNlXG5UZW1wOiB0ZW1wb3JhcnkgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiSW5zdGFuY2VUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJNYXhRdWFudGl0eTogVGhlIG1heGltdW0gbnVtYmVyIG9mIGRhdGFiYXNlcyB0aGF0IGNhbiBiZSBjcmVhdGVkIG9uIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiTWF4UXVhbnRpdHk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZWRpY2F0ZWRIb3N0R3JvdXBJZDogVGhlIElEIG9mIHRoZSBkZWRpY2F0ZWQgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlZGljYXRlZEhvc3RHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVsZXRpb25Qcm90ZWN0aW9uOiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcmVsZWFzZSBwcm90ZWN0aW9uIGZlYXR1cmUgaXMgZW5hYmxlZC4gVmFsaWQgdmFsdWVzOlxudHJ1ZVxuZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlbGV0aW9uUHJvdGVjdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEVuZ2luZTogVGhlIGRhdGFiYXNlIGVuZ2luZSBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbk15U1FMXG5Qb3N0Z3JlU1FMXG5TUUxTZXJ2ZXJcbk1hcmlhREJcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZ2luZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEVuZ2luZVZlcnNpb246IFRoZSBkYXRhYmFzZSBlbmdpbmUgdmVyc2lvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZ2luZVZlcnNpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFeHBpcmVUaW1lOiBUaGUgZXhwaXJhdGlvbiB0aW1lLiBUaGUgdGltZSBmb2xsb3dzIHRoZSBJU08gODYwMSBzdGFuZGFyZCBpbiB0aGUgeXl5eS1NTS1kZFRISDptbTpzc1ogZm9ybWF0LiBUaGUgdGltZSBpcyBkaXNwbGF5ZWQgaW4gVVRDLlxuTm90ZTogUGF5LWFzLXlvdS1nbyBpbnN0YW5jZXMgbmV2ZXIgZXhwaXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRXhwaXJlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEV4dHJhOiBUaGUgZXh0ZW5kZWQgaW5mb3JtYXRpb24gb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRXh0cmE6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBHZW5lcmFsR3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZGVkaWNhdGVkIGNsdXN0ZXIgdG8gd2hpY2ggdGhlIGluc3RhbmNlIGJlbG9uZ3MuIFRoaXMgcGFyYW1ldGVyIGlzIHJldHVybmVkIG9ubHkgd2hlbiB0aGUgaW5zdGFuY2UgaXMgY3JlYXRlZCBpbiBhbiBBcHNhcmFEQiBNeUJhc2UgY2x1c3RlciB0aGF0IHJ1bnMgTXlTUUwgb24gU3RhbmRhcmQgRWRpdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdlbmVyYWxHcm91cE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBHdWFyZERCSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBkaXNhc3RlciByZWNvdmVyeSBpbnN0YW5jZSB0aGF0IGlzIGF0dGFjaGVkIHRvIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckd1YXJkRGJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSVBUeXBlOiBUaGUgdHlwZSBvZiB0aGUgSVAgYWRkcmVzcy4gT25seSBJUHY0IGFkZHJlc3NlcyBhcmUgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXBUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5jcmVtZW50U291cmNlREJJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlIGZyb20gd2hpY2ggaW5jcmVtZW50YWwgZGF0YSBjb21lcy4gVGhlIGluY3JlbWVudGFsIGRhdGEgb2YgYSBkaXNhc3RlciByZWNvdmVyeSBpbnN0YW5jZSBvciByZWFkLW9ubHkgaW5zdGFuY2UgY29tZXMgZnJvbSBpdHMgcHJpbWFyeSBpbnN0YW5jZS4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHJldHVybmVkLCB0aGUgaW5zdGFuY2UgaXMgYSBwcmltYXJ5IGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5jcmVtZW50U291cmNlRGJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VOZXR3b3JrVHlwZTogVGhlIG5ldHdvcmsgdHlwZSBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbkNsYXNzaWNcblZQQ1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VOZXR3b3JrVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RydWN0aW9uU2V0QXJjaDogVGhlIGFyY2hpdGVjdHVyZSB0eXBlIG9mIHRoZSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxueDg2XG5hcm1cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RydWN0aW9uU2V0QXJjaDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExhdGVzdEtlcm5lbFZlcnNpb246IFRoZSBsYXRlc3QgbWlub3IgZW5naW5lIHZlcnNpb24gdGhhdCBpcyBzdXBwb3J0ZWQgYnkgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGF0ZXN0S2VybmVsVmVyc2lvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExvY2tNb2RlOiBUaGUgbG9jayBtb2RlIG9mIHRoZSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuVW5sb2NrOiBUaGUgaW5zdGFuY2UgaXMgbm90IGxvY2tlZC5cbk1hbnVhbExvY2s6IFRoZSBpbnN0YW5jZSBpcyBtYW51YWxseSBsb2NrZWQuXG5Mb2NrQnlFeHBpcmF0aW9uOiBUaGUgaW5zdGFuY2UgaXMgYXV0b21hdGljYWxseSBsb2NrZWQgZHVlIHRvIGluc3RhbmNlIGV4cGlyYXRpb24uXG5Mb2NrQnlSZXN0b3JhdGlvbjogVGhlIGluc3RhbmNlIGlzIGF1dG9tYXRpY2FsbHkgbG9ja2VkIGR1ZSB0byBpbnN0YW5jZSByZXN0b3JhdGlvbi5cbkxvY2tCeURpc2tRdW90YTogVGhlIGluc3RhbmNlIGlzIGF1dG9tYXRpY2FsbHkgbG9ja2VkIGR1ZSB0byBleGhhdXN0ZWQgc3RvcmFnZSBzcGFjZS5cbkxvY2tSZWFkSW5zdGFuY2VCeURpc2tRdW90YTogVGhlIGluc3RhbmNlIGlzIGEgcmVhZC1vbmx5IGluc3RhbmNlIGFuZCBpcyBhdXRvbWF0aWNhbGx5IGxvY2tlZCBkdWUgdG8gZXhoYXVzdGVkIHN0b3JhZ2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2NrTW9kZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExvY2tSZWFzb246IFRoZSByZWFzb24gd2h5IHRoZSBpbnN0YW5jZSB3YXMgbG9ja2VkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9ja1JlYXNvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1haW50YWluVGltZTogVGhlIG1haW50ZW5hbmNlIHdpbmRvdyBvZiB0aGUgaW5zdGFuY2UuIFRoZSB0aW1lIGlzIGRpc3BsYXllZCBpbiBVVEMuIFRha2Ugbm90ZSB0aGF0IHRoZSBtYWludGVuYW5jZSB3aW5kb3cgZGlzcGxheWVkIGluIHRoZSBBcHNhcmFEQiBSRFMgY29uc29sZSBpcyBlcXVhbCB0byB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgcGx1cyA4IGhvdXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWFpbnRhaW5UaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTWFzdGVySW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBwcmltYXJ5IGluc3RhbmNlLlxuTm90ZTogSWYgdGhpcyBwYXJhbWV0ZXIgaXMgbm90IHJldHVybmVkLCB0aGUgaW5zdGFuY2UgaXMgdGhlIHByaW1hcnkgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXN0ZXJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTWFzdGVyWm9uZTogVGhlIHpvbmUgSUQgb2YgdGhlIHByaW1hcnkgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXN0ZXJab25lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTWF4Q29ubmVjdGlvbnM6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBjb25jdXJyZW50IGNvbm5lY3Rpb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWF4Q29ubmVjdGlvbnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBNYXhJT01CUFM6IFRoZSBtYXhpbXVtIEkvTyB0aHJvdWdocHV0LiBVbml0OiBNQi9zLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWF4SW9tYnBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTWF4SU9QUzogVGhlIG1heGltdW0gbnVtYmVyIG9mIEkvTyByZXF1ZXN0cyBwZXIgc2Vjb25kLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWF4SW9wczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBHQm91bmNlckVuYWJsZWQ6IEluZGljYXRlcyB3aGV0aGVyIFBnQm91bmNlciBpcyBlbmFibGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGdCb3VuY2VyRW5hYmxlZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBheVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZCBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcblBvc3RwYWlkOiBwYXktYXMteW91LWdvXG5QcmVwYWlkOiBzdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBheVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQb3J0OiBUaGUgcG9ydCB0aGF0IGlzIHVzZWQgdG8gY29ubmVjdCB0byB0aGUgaW5zdGFuY2Ugb3ZlciBhbiBpbnRlcm5hbCBuZXR3b3JrLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFByb3h5VHlwZTogVGhlIHR5cGUgb2YgdGhlIHByb3h5IHRoYXQgaXMgc3VwcG9ydGVkIGJ5IHRoZSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuMDogVGhlIGluc3RhbmNlIGRvZXMgbm90IHN1cHBvcnQgZGF0YWJhc2UgcHJveGllcy5cbjE6IFRoZSBpbnN0YW5jZSBzdXBwb3J0cyBzaGFyZWQgcHJveGllcywgd2l0aCB3aGljaCB0aGUgaW5zdGFuY2UgcnVucyBpbiBtdWx0aS10ZW5hbnQgbW9kZS5cbjI6IFRoZSBpbnN0YW5jZSBzdXBwb3J0cyBkZWRpY2F0ZWQgcHJveGllcywgd2l0aCB3aGljaCB0aGUgaW5zdGFuY2UgcnVucyBpbiBzaW5nbGUtdGVuYW50IG1vZGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcm94eVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZWFkT25seURCSW5zdGFuY2VJZHM6IFRoZSBJRHMgb2YgdGhlIHJlYWQtb25seSBpbnN0YW5jZXMgdGhhdCBhcmUgYXR0YWNoZWQgdG8gdGhlIHByaW1hcnkgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZWFkT25seURiSW5zdGFuY2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZWFkb25seUluc3RhbmNlU1FMRGVsYXllZFRpbWU6IFRoZSBsYXRlbmN5IGF0IHdoaWNoIHRoZSBzeXN0ZW0gcmVwbGljYXRlcyBkYXRhIHRvIHJlYWQtb25seSBpbnN0YW5jZXMuIFRoZSBzeXN0ZW0gcmVwbGljYXRlcyBkYXRhIGZyb20gdGhlIHByaW1hcnkgaW5zdGFuY2UgdG8gdGhlIHJlYWQtb25seSBpbnN0YW5jZXMgYXQgdGhlIGxhdGVuY3kgdGhhdCBpcyBzcGVjaWZpZWQgYnkgdGhlIFJlYWRvbmx5SW5zdGFuY2VTUUxEZWxheWVkVGltZSBwYXJhbWV0ZXIuIFVuaXQ6IHNlY29uZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZWFkb25seUluc3RhbmNlU3FsRGVsYXllZFRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZXNvdXJjZUdyb3VwSWQ6IFRoZSByZXNvdXJjZSBncm91cCBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlY3VyaXR5SVBMaXN0OiBUaGUgSVAgYWRkcmVzc2VzIGluIHRoZSBJUCBhZGRyZXNzIHdoaXRlbGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlY3VyaXR5SXBMaXN0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VjdXJpdHlJUE1vZGU6IFRoZSB3aGl0ZWxpc3QgbW9kZSBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbm5vcm1hbDogc3RhbmRhcmQgd2hpdGVsaXN0IG1vZGVcbnNhZmV0eTogZW5oYW5jZWQgd2hpdGVsaXN0IG1vZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlY3VyaXR5SXBNb2RlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmVybGVzc0NvbmZpZzogVGhlIHNldHRpbmdzIG9mIHRoZSBzZXJ2ZXJsZXNzIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmVybGVzc0NvbmZpZzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNsYXZlWm9uZXM6IFRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgem9uZSBvZiB0aGUgc2Vjb25kYXJ5IGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2xhdmVab25lczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFN1cGVyUGVybWlzc2lvbk1vZGU6IEluZGljYXRlcyB3aGV0aGVyIHRoZSBpbnN0YW5jZSBzdXBwb3J0cyBzdXBlcnVzZXIgYWNjb3VudHMsIHN1Y2ggYXMgdGhlIHN5c3RlbSBhZG1pbmlzdHJhdG9yIChTQSkgYWNjb3VudCwgdGhlIEFjdGl2ZSBEaXJlY3RvcnkgKEFEKSBhY2NvdW50LCBhbmQgdGhlIGhvc3QgYWNjb3VudC5cbkVuYWJsZVxuRGlzYWJsZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN1cGVyUGVybWlzc2lvbk1vZGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUZW1wREJJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIHRlbXBvcmFyeSBpbnN0YW5jZSB0aGF0IGlzIGF0dGFjaGVkIHRvIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRlbXBEYkluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUaW1lWm9uZTogVGhlIHRpbWUgem9uZSBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUaW1lWm9uZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRpcHM6IFRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXhjZXB0aW9uIHRoYXQgaXMgZGV0ZWN0ZWQgb24gdGhlIGluc3RhbmNlLiBUaGlzIHBhcmFtZXRlciBpcyByZXR1cm5lZCBvbmx5IHdoZW4gdGhlIGluc3RhbmNlIGlzIGNyZWF0ZWQgaW4gYW4gQXBzYXJhREIgTXlCYXNlIGNsdXN0ZXIgdGhhdCBydW5zIE15U1FMIG9uIFN0YW5kYXJkIEVkaXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUaXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVGlwc0xldmVsOiBUaGUgc2V2ZXJpdHkgbGV2ZWwgb2YgdGhlIGV4Y2VwdGlvbiB0aGF0IGlzIGRldGVjdGVkIG9uIHRoZSBpbnN0YW5jZS4gVGhpcyBwYXJhbWV0ZXIgaXMgcmV0dXJuZWQgb25seSB3aGVuIHRoZSBpbnN0YW5jZSBpcyBjcmVhdGVkIGluIGFuIEFwc2FyYURCIE15QmFzZSBjbHVzdGVyIHRoYXQgcnVucyBNeVNRTCBvbiBTdGFuZGFyZCBFZGl0aW9uLiBWYWxpZCB2YWx1ZXM6XG4xOiBUaGUgaW5zdGFuY2UgaXMgbm9ybWFsLlxuMjogVGhlIHNwZWNpZmljYXRpb25zIG9mIHRoZSByZWFkLW9ubHkgaW5zdGFuY2VzIGRvIG5vdCBtYXRjaCB0aGUgc3BlY2lmaWNhdGlvbnMgb2YgdGhlIHByaW1hcnkgaW5zdGFuY2UuIFlvdSBtdXN0IGFkanVzdCB0aGUgc3BlY2lmaWNhdGlvbnMgb2YgdGhlc2UgaW5zdGFuY2VzIGJhc2VkIG9uIHlvdXIgYnVzaW5lc3MgcmVxdWlyZW1lbnRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGlwc0xldmVsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVlN3aXRjaElkOiBUaGUgdlN3aXRjaCBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZTd2l0Y2hJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY0Nsb3VkSW5zdGFuY2VJZDogVGhlIFZQQyBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0Nsb3VkSW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY0lkOiBUaGUgdmlydHVhbCBwcml2YXRlIGNsb3VkIChWUEMpIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgWm9uZUlkOiBUaGUgem9uZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clpvbmVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERCSW5zdGFuY2VQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zREJJbnN0YW5jZSA9IG5ldyBSb3NEQkluc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGJJbnN0YW5jZUlkOiBwcm9wcy5kYkluc3RhbmNlSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zREJJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5hdHRyQWNjb3VudE1heFF1YW50aXR5ID0gcm9zREJJbnN0YW5jZS5hdHRyQWNjb3VudE1heFF1YW50aXR5O1xuICAgICAgICB0aGlzLmF0dHJBZHZhbmNlZEZlYXR1cmVzID0gcm9zREJJbnN0YW5jZS5hdHRyQWR2YW5jZWRGZWF0dXJlcztcbiAgICAgICAgdGhpcy5hdHRyQXV0b1VwZ3JhZGVNaW5vclZlcnNpb24gPSByb3NEQkluc3RhbmNlLmF0dHJBdXRvVXBncmFkZU1pbm9yVmVyc2lvbjtcbiAgICAgICAgdGhpcy5hdHRyQXZhaWxhYmlsaXR5VmFsdWUgPSByb3NEQkluc3RhbmNlLmF0dHJBdmFpbGFiaWxpdHlWYWx1ZTtcbiAgICAgICAgdGhpcy5hdHRyQmFiZWxmaXNoQ29uZmlnID0gcm9zREJJbnN0YW5jZS5hdHRyQmFiZWxmaXNoQ29uZmlnO1xuICAgICAgICB0aGlzLmF0dHJDYXRlZ29yeSA9IHJvc0RCSW5zdGFuY2UuYXR0ckNhdGVnb3J5O1xuICAgICAgICB0aGlzLmF0dHJDb2xsYXRpb24gPSByb3NEQkluc3RhbmNlLmF0dHJDb2xsYXRpb247XG4gICAgICAgIHRoaXMuYXR0ckNvbm5lY3Rpb25Nb2RlID0gcm9zREJJbnN0YW5jZS5hdHRyQ29ubmVjdGlvbk1vZGU7XG4gICAgICAgIHRoaXMuYXR0ckNvbm5lY3Rpb25TdHJpbmcgPSByb3NEQkluc3RhbmNlLmF0dHJDb25uZWN0aW9uU3RyaW5nO1xuICAgICAgICB0aGlzLmF0dHJDb25zb2xlVmVyc2lvbiA9IHJvc0RCSW5zdGFuY2UuYXR0ckNvbnNvbGVWZXJzaW9uO1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGlvblRpbWUgPSByb3NEQkluc3RhbmNlLmF0dHJDcmVhdGlvblRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckN1cnJlbnRLZXJuZWxWZXJzaW9uID0gcm9zREJJbnN0YW5jZS5hdHRyQ3VycmVudEtlcm5lbFZlcnNpb247XG4gICAgICAgIHRoaXMuYXR0ckRiQ2x1c3Rlck5vZGVzID0gcm9zREJJbnN0YW5jZS5hdHRyRGJDbHVzdGVyTm9kZXM7XG4gICAgICAgIHRoaXMuYXR0ckRiSW5zdGFuY2VDcHUgPSByb3NEQkluc3RhbmNlLmF0dHJEYkluc3RhbmNlQ3B1O1xuICAgICAgICB0aGlzLmF0dHJEYkluc3RhbmNlQ2xhc3MgPSByb3NEQkluc3RhbmNlLmF0dHJEYkluc3RhbmNlQ2xhc3M7XG4gICAgICAgIHRoaXMuYXR0ckRiSW5zdGFuY2VDbGFzc1R5cGUgPSByb3NEQkluc3RhbmNlLmF0dHJEYkluc3RhbmNlQ2xhc3NUeXBlO1xuICAgICAgICB0aGlzLmF0dHJEYkluc3RhbmNlRGVzY3JpcHRpb24gPSByb3NEQkluc3RhbmNlLmF0dHJEYkluc3RhbmNlRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYXR0ckRiSW5zdGFuY2VEaXNrVXNlZCA9IHJvc0RCSW5zdGFuY2UuYXR0ckRiSW5zdGFuY2VEaXNrVXNlZDtcbiAgICAgICAgdGhpcy5hdHRyRGJJbnN0YW5jZUlkID0gcm9zREJJbnN0YW5jZS5hdHRyRGJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJEYkluc3RhbmNlTWVtb3J5ID0gcm9zREJJbnN0YW5jZS5hdHRyRGJJbnN0YW5jZU1lbW9yeTtcbiAgICAgICAgdGhpcy5hdHRyRGJJbnN0YW5jZU5ldFR5cGUgPSByb3NEQkluc3RhbmNlLmF0dHJEYkluc3RhbmNlTmV0VHlwZTtcbiAgICAgICAgdGhpcy5hdHRyRGJJbnN0YW5jZVN0YXR1cyA9IHJvc0RCSW5zdGFuY2UuYXR0ckRiSW5zdGFuY2VTdGF0dXM7XG4gICAgICAgIHRoaXMuYXR0ckRiSW5zdGFuY2VTdG9yYWdlID0gcm9zREJJbnN0YW5jZS5hdHRyRGJJbnN0YW5jZVN0b3JhZ2U7XG4gICAgICAgIHRoaXMuYXR0ckRiSW5zdGFuY2VTdG9yYWdlVHlwZSA9IHJvc0RCSW5zdGFuY2UuYXR0ckRiSW5zdGFuY2VTdG9yYWdlVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyRGJJbnN0YW5jZVR5cGUgPSByb3NEQkluc3RhbmNlLmF0dHJEYkluc3RhbmNlVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyRGJNYXhRdWFudGl0eSA9IHJvc0RCSW5zdGFuY2UuYXR0ckRiTWF4UXVhbnRpdHk7XG4gICAgICAgIHRoaXMuYXR0ckRlZGljYXRlZEhvc3RHcm91cElkID0gcm9zREJJbnN0YW5jZS5hdHRyRGVkaWNhdGVkSG9zdEdyb3VwSWQ7XG4gICAgICAgIHRoaXMuYXR0ckRlbGV0aW9uUHJvdGVjdGlvbiA9IHJvc0RCSW5zdGFuY2UuYXR0ckRlbGV0aW9uUHJvdGVjdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyRW5naW5lID0gcm9zREJJbnN0YW5jZS5hdHRyRW5naW5lO1xuICAgICAgICB0aGlzLmF0dHJFbmdpbmVWZXJzaW9uID0gcm9zREJJbnN0YW5jZS5hdHRyRW5naW5lVmVyc2lvbjtcbiAgICAgICAgdGhpcy5hdHRyRXhwaXJlVGltZSA9IHJvc0RCSW5zdGFuY2UuYXR0ckV4cGlyZVRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckV4dHJhID0gcm9zREJJbnN0YW5jZS5hdHRyRXh0cmE7XG4gICAgICAgIHRoaXMuYXR0ckdlbmVyYWxHcm91cE5hbWUgPSByb3NEQkluc3RhbmNlLmF0dHJHZW5lcmFsR3JvdXBOYW1lO1xuICAgICAgICB0aGlzLmF0dHJHdWFyZERiSW5zdGFuY2VJZCA9IHJvc0RCSW5zdGFuY2UuYXR0ckd1YXJkRGJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJJcFR5cGUgPSByb3NEQkluc3RhbmNlLmF0dHJJcFR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckluY3JlbWVudFNvdXJjZURiSW5zdGFuY2VJZCA9IHJvc0RCSW5zdGFuY2UuYXR0ckluY3JlbWVudFNvdXJjZURiSW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VOZXR3b3JrVHlwZSA9IHJvc0RCSW5zdGFuY2UuYXR0ckluc3RhbmNlTmV0d29ya1R5cGU7XG4gICAgICAgIHRoaXMuYXR0ckluc3RydWN0aW9uU2V0QXJjaCA9IHJvc0RCSW5zdGFuY2UuYXR0ckluc3RydWN0aW9uU2V0QXJjaDtcbiAgICAgICAgdGhpcy5hdHRyTGF0ZXN0S2VybmVsVmVyc2lvbiA9IHJvc0RCSW5zdGFuY2UuYXR0ckxhdGVzdEtlcm5lbFZlcnNpb247XG4gICAgICAgIHRoaXMuYXR0ckxvY2tNb2RlID0gcm9zREJJbnN0YW5jZS5hdHRyTG9ja01vZGU7XG4gICAgICAgIHRoaXMuYXR0ckxvY2tSZWFzb24gPSByb3NEQkluc3RhbmNlLmF0dHJMb2NrUmVhc29uO1xuICAgICAgICB0aGlzLmF0dHJNYWludGFpblRpbWUgPSByb3NEQkluc3RhbmNlLmF0dHJNYWludGFpblRpbWU7XG4gICAgICAgIHRoaXMuYXR0ck1hc3Rlckluc3RhbmNlSWQgPSByb3NEQkluc3RhbmNlLmF0dHJNYXN0ZXJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJNYXN0ZXJab25lID0gcm9zREJJbnN0YW5jZS5hdHRyTWFzdGVyWm9uZTtcbiAgICAgICAgdGhpcy5hdHRyTWF4Q29ubmVjdGlvbnMgPSByb3NEQkluc3RhbmNlLmF0dHJNYXhDb25uZWN0aW9ucztcbiAgICAgICAgdGhpcy5hdHRyTWF4SW9tYnBzID0gcm9zREJJbnN0YW5jZS5hdHRyTWF4SW9tYnBzO1xuICAgICAgICB0aGlzLmF0dHJNYXhJb3BzID0gcm9zREJJbnN0YW5jZS5hdHRyTWF4SW9wcztcbiAgICAgICAgdGhpcy5hdHRyUGdCb3VuY2VyRW5hYmxlZCA9IHJvc0RCSW5zdGFuY2UuYXR0clBnQm91bmNlckVuYWJsZWQ7XG4gICAgICAgIHRoaXMuYXR0clBheVR5cGUgPSByb3NEQkluc3RhbmNlLmF0dHJQYXlUeXBlO1xuICAgICAgICB0aGlzLmF0dHJQb3J0ID0gcm9zREJJbnN0YW5jZS5hdHRyUG9ydDtcbiAgICAgICAgdGhpcy5hdHRyUHJveHlUeXBlID0gcm9zREJJbnN0YW5jZS5hdHRyUHJveHlUeXBlO1xuICAgICAgICB0aGlzLmF0dHJSZWFkT25seURiSW5zdGFuY2VJZHMgPSByb3NEQkluc3RhbmNlLmF0dHJSZWFkT25seURiSW5zdGFuY2VJZHM7XG4gICAgICAgIHRoaXMuYXR0clJlYWRvbmx5SW5zdGFuY2VTcWxEZWxheWVkVGltZSA9IHJvc0RCSW5zdGFuY2UuYXR0clJlYWRvbmx5SW5zdGFuY2VTcWxEZWxheWVkVGltZTtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VHcm91cElkID0gcm9zREJJbnN0YW5jZS5hdHRyUmVzb3VyY2VHcm91cElkO1xuICAgICAgICB0aGlzLmF0dHJTZWN1cml0eUlwTGlzdCA9IHJvc0RCSW5zdGFuY2UuYXR0clNlY3VyaXR5SXBMaXN0O1xuICAgICAgICB0aGlzLmF0dHJTZWN1cml0eUlwTW9kZSA9IHJvc0RCSW5zdGFuY2UuYXR0clNlY3VyaXR5SXBNb2RlO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2ZXJsZXNzQ29uZmlnID0gcm9zREJJbnN0YW5jZS5hdHRyU2VydmVybGVzc0NvbmZpZztcbiAgICAgICAgdGhpcy5hdHRyU2xhdmVab25lcyA9IHJvc0RCSW5zdGFuY2UuYXR0clNsYXZlWm9uZXM7XG4gICAgICAgIHRoaXMuYXR0clN1cGVyUGVybWlzc2lvbk1vZGUgPSByb3NEQkluc3RhbmNlLmF0dHJTdXBlclBlcm1pc3Npb25Nb2RlO1xuICAgICAgICB0aGlzLmF0dHJUZW1wRGJJbnN0YW5jZUlkID0gcm9zREJJbnN0YW5jZS5hdHRyVGVtcERiSW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRyVGltZVpvbmUgPSByb3NEQkluc3RhbmNlLmF0dHJUaW1lWm9uZTtcbiAgICAgICAgdGhpcy5hdHRyVGlwcyA9IHJvc0RCSW5zdGFuY2UuYXR0clRpcHM7XG4gICAgICAgIHRoaXMuYXR0clRpcHNMZXZlbCA9IHJvc0RCSW5zdGFuY2UuYXR0clRpcHNMZXZlbDtcbiAgICAgICAgdGhpcy5hdHRyVlN3aXRjaElkID0gcm9zREJJbnN0YW5jZS5hdHRyVlN3aXRjaElkO1xuICAgICAgICB0aGlzLmF0dHJWcGNDbG91ZEluc3RhbmNlSWQgPSByb3NEQkluc3RhbmNlLmF0dHJWcGNDbG91ZEluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clZwY0lkID0gcm9zREJJbnN0YW5jZS5hdHRyVnBjSWQ7XG4gICAgICAgIHRoaXMuYXR0clpvbmVJZCA9IHJvc0RCSW5zdGFuY2UuYXR0clpvbmVJZDtcbiAgICB9XG59XG4iXX0=