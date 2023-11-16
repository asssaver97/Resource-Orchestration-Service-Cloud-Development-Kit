"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vault = exports.VaultProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const hbr_generated_1 = require("./hbr.generated");
Object.defineProperty(exports, "VaultProperty", { enumerable: true, get: function () { return hbr_generated_1.RosVault; } });
/**
 * A ROS resource type:  `ALIYUN::HBR::Vault`
 */
class Vault extends ros.Resource {
    /**
     * Create a new `ALIYUN::HBR::Vault`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosVault = new hbr_generated_1.RosVault(this, id, {
            vaultType: props.vaultType,
            description: props.description,
            encryptType: props.encryptType,
            resourceGroupId: props.resourceGroupId,
            kmsKeyId: props.kmsKeyId,
            vaultName: props.vaultName,
            redundancyType: props.redundancyType,
            vaultStorageClass: props.vaultStorageClass,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVault;
        this.attrBackupPlanStatistics = rosVault.attrBackupPlanStatistics;
        this.attrBytesDone = rosVault.attrBytesDone;
        this.attrCreateTime = rosVault.attrCreateTime;
        this.attrDedup = rosVault.attrDedup;
        this.attrDescription = rosVault.attrDescription;
        this.attrIndexAvailable = rosVault.attrIndexAvailable;
        this.attrIndexLevel = rosVault.attrIndexLevel;
        this.attrIndexUpdateTime = rosVault.attrIndexUpdateTime;
        this.attrLatestReplicationTime = rosVault.attrLatestReplicationTime;
        this.attrPaymentType = rosVault.attrPaymentType;
        this.attrRedundancyType = rosVault.attrRedundancyType;
        this.attrReplication = rosVault.attrReplication;
        this.attrReplicationProgress = rosVault.attrReplicationProgress;
        this.attrReplicationSourceRegionId = rosVault.attrReplicationSourceRegionId;
        this.attrReplicationSourceVaultId = rosVault.attrReplicationSourceVaultId;
        this.attrResourceGroupId = rosVault.attrResourceGroupId;
        this.attrRetention = rosVault.attrRetention;
        this.attrSearchEnabled = rosVault.attrSearchEnabled;
        this.attrSourceTypes = rosVault.attrSourceTypes;
        this.attrStorageSize = rosVault.attrStorageSize;
        this.attrTags = rosVault.attrTags;
        this.attrTrialInfo = rosVault.attrTrialInfo;
        this.attrUpdatedTime = rosVault.attrUpdatedTime;
        this.attrVaultId = rosVault.attrVaultId;
        this.attrVaultName = rosVault.attrVaultName;
        this.attrVaultStatusMessage = rosVault.attrVaultStatusMessage;
        this.attrVaultStorageClass = rosVault.attrVaultStorageClass;
        this.attrVaultType = rosVault.attrVaultType;
    }
}
exports.Vault = Vault;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTJDO0FBRXRCLDhGQUZaLHdCQUFRLE9BRWlCO0FBMkRsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBNEpuQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWlCLEVBQUUsbUNBQTJDLElBQUk7UUFDNUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtZQUMxQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztRQUNsRSxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztRQUN0RCxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQUN4RCxJQUFJLENBQUMseUJBQXlCLEdBQUcsUUFBUSxDQUFDLHlCQUF5QixDQUFDO1FBQ3BFLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1FBQ3RELElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUNoRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1FBQ2hFLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxRQUFRLENBQUMsNkJBQTZCLENBQUM7UUFDNUUsSUFBSSxDQUFDLDRCQUE0QixHQUFHLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQztRQUMxRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1FBQzlELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMscUJBQXFCLENBQUM7UUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ2hELENBQUM7Q0FDSjtBQS9NRCxzQkErTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NWYXVsdCB9IGZyb20gJy4vaGJyLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1ZhdWx0IGFzIFZhdWx0UHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkhCUjo6VmF1bHRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmF1bHRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2YXVsdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBiYWNrdXAgdmF1bHQuIFRoZSBuYW1lIG11c3QgYmUgMSB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2YXVsdE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZhdWx0VHlwZTogVGhlIHR5cGUgb2YgdGhlIGJhY2t1cCB2YXVsdC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gKipTVEFOREFSRCoqOiBzdGFuZGFyZCBiYWNrdXAgdmF1bHQuXG4gICAgICogLSAqKk9UU19CQUNLVVAqKjogYmFja3VwIHZhdWx0IGZvciBUYWJsZXN0b3JlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZhdWx0VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYmFja3VwIHZhdWx0LiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAwIHRvIDI1NSBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuY3J5cHRUeXBlOiBUaGUgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBlbmNyeXB0IHRoZSBzb3VyY2UgZGF0YS4gVGhpcyBwYXJhbWV0ZXIgaXMgdmFsaWQgb25seSBpZiB5b3Ugc2V0IHRoZSBWYXVsdFR5cGUgcGFyYW1ldGVyIHRvIFNUQU5EQVJEIG9yIE9UU19CQUNLVVAuIFxuICAgICAqIFZhbGlkIHZhbHVlczotICoqSEJSX1BSSVZBVEUqKjogVGhlIHNvdXJjZSBkYXRhIGlzIGVuY3J5cHRlZCBieSB1c2luZyB0aGUgYnVpbHQtaW4gZW5jcnlwdGlvbiBtZXRob2Qgb2YgSHlicmlkIEJhY2t1cCBSZWNvdmVyeSAoSEJSKS5cbiAgICAgKiAtICoqS01TKio6IFRoZSBzb3VyY2UgZGF0YSBpcyBlbmNyeXB0ZWQgYnkgdXNpbmcgS2V5IE1hbmFnZW1lbnQgU2VydmljZSAoS01TKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmNyeXB0VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGttc0tleUlkOiBUaGUgY3VzdG9tZXIgbWFzdGVyIGtleSAoQ01LKSBjcmVhdGVkIGluIEtNUyBvciB0aGUgYWxpYXMgb2YgdGhlIGtleS4gVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgb25seSBpZiB5b3Ugc2V0IHRoZSBFbmNyeXB0VHlwZSBwYXJhbWV0ZXIgdG8gS01TLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVkdW5kYW5jeVR5cGU6IFRoZSBkYXRhIHJlZHVuZGFuY3kgdHlwZSBvZiB0aGUgYmFja3VwIHZhdWx0LiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSAqKkxSUyoqOiBMb2NhbGx5IHJlZHVuZGFudCBzdG9yYWdlIChMUlMpIGlzIGVuYWJsZWQgZm9yIHRoZSBiYWNrdXAgdmF1bHQuIEhCUiBzdG9yZXMgdGhlIGNvcGllcyBvZiBlYWNoIG9iamVjdCBvbiBtdWx0aXBsZSBkZXZpY2VzIG9mIGRpZmZlcmVudCBmYWNpbGl0aWVzIGluIHRoZSBzYW1lIHpvbmUuIFRoaXMgd2F5LCBIQlIgZW5zdXJlcyBkYXRhIGR1cmFiaWxpdHkgYW5kIGF2YWlsYWJpbGl0eSBldmVuIGlmIGhhcmR3YXJlIGZhaWx1cmVzIG9jY3VyLlxuICAgICAqIC0gKipaUlMqKjogWm9uZS1yZWR1bmRhbnQgc3RvcmFnZSAoWlJTKSBpcyBlbmFibGVkIGZvciB0aGUgYmFja3VwIHZhdWx0LiBIQlIgdXNlcyB0aGUgbXVsdGktem9uZSBtZWNoYW5pc20gdG8gZGlzdHJpYnV0ZSBkYXRhIGFjcm9zcyB0aHJlZSB6b25lcyB3aXRoaW4gdGhlIHNhbWUgcmVnaW9uLiBJZiBhIHpvbmUgZmFpbHMsIHRoZSBkYXRhIHRoYXQgaXMgc3RvcmVkIGluIHRoZSBvdGhlciB0d28gem9uZXMgaXMgc3RpbGwgYWNjZXNzaWJsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWR1bmRhbmN5VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIG9mIFRoZSByZXNvdXJjZSBhdHRyaWJ1dGUgZmllbGQgcmVwcmVzZW50aW5nIHRoZSByZXNvdXJjZSB0YWcuLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NWYXVsdC5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZhdWx0U3RvcmFnZUNsYXNzOiBUaGUgc3RvcmFnZSB0eXBlIG9mIHRoZSBiYWNrdXAgdmF1bHQuIFRoZSB2YWx1ZSBpcyBvbmx5ICoqU1RBTkRBUkQqKiwgd2hpY2ggaW5kaWNhdGVzIFNUQU5EQVJEIHN0b3JhZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmF1bHRTdG9yYWdlQ2xhc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkhCUjo6VmF1bHRgXG4gKi9cbmV4cG9ydCBjbGFzcyBWYXVsdCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQmFja3VwUGxhblN0YXRpc3RpY3M6IFRoZSBzdGF0aXN0aWNzIG9mIGJhY2t1cCBwbGFucyB0aGF0IHVzZSB0aGUgYmFja3VwIHZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmFja3VwUGxhblN0YXRpc3RpY3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBCeXRlc0RvbmU6IFRoZSBhbW91bnQgb2YgZGF0YSB0aGF0IGlzIGJhY2tlZCB1cC4gVW5pdDogYnl0ZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCeXRlc0RvbmU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDcmVhdGVUaW1lOiBUaGUgdGltZSB3aGVuIHRoZSBiYWNrdXAgdmF1bHQgd2FzIGNyZWF0ZWQuIFRoaXMgdmFsdWUgaXMgYSBVTklYIHRpbWVzdGFtcC4gVW5pdDogc2Vjb25kcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZWR1cDogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRlZHVwbGljYXRpb24gZmVhdHVyZSBpcyBlbmFibGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVkdXA6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBiYWNrdXAgdmF1bHQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluZGV4QXZhaWxhYmxlOiBJbmRpY2F0ZXMgd2hldGhlciBpbmRleGVzIGFyZSBhdmFpbGFibGUuIEluZGV4ZXMgYXJlIGF2YWlsYWJsZSB3aGVuIHRoZXkgYXJlIG5vdCBiZWluZyB1cGRhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5kZXhBdmFpbGFibGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbmRleExldmVsOiBUaGUgaW5kZXggbGV2ZWwuXG4tICoqT0ZGKio6IE5vIGluZGV4ZXMgYXJlIGNyZWF0ZWQuXG4tICoqTUVUQSoqOiBNZXRhZGF0YSBpbmRleGVzIGFyZSBjcmVhdGVkLlxuLSAqKkFMTCoqOiBGdWxsLXRleHQgaW5kZXhlcyBhcmUgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluZGV4TGV2ZWw6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbmRleFVwZGF0ZVRpbWU6IFRoZSB0aW1lIHdoZW4gdGhlIGluZGV4IHdhcyB1cGRhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5kZXhVcGRhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTGF0ZXN0UmVwbGljYXRpb25UaW1lOiBUaGUgdGltZSB3aGVuIHRoZSBsYXN0IHJlbW90ZSBiYWNrdXAgd2FzIHN5bmNocm9uaXplZC4gVGhpcyB2YWx1ZSBpcyBhIFVOSVggdGltZXN0YW1wLiBVbml0OiBzZWNvbmRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGF0ZXN0UmVwbGljYXRpb25UaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUGF5bWVudFR5cGU6IFBheW1lbnRUeXBlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGF5bWVudFR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZWR1bmRhbmN5VHlwZTogVGhlIGRhdGEgcmVkdW5kYW5jeSB0eXBlIG9mIHRoZSBiYWNrdXAgdmF1bHQuIFZhbGlkIHZhbHVlczpcbi0gKipMUlMqKjogTG9jYWxseSByZWR1bmRhbnQgc3RvcmFnZSAoTFJTKSBpcyBlbmFibGVkIGZvciB0aGUgYmFja3VwIHZhdWx0LiBIQlIgc3RvcmVzIHRoZSBjb3BpZXMgb2YgZWFjaCBvYmplY3Qgb24gbXVsdGlwbGUgZGV2aWNlcyBvZiBkaWZmZXJlbnQgZmFjaWxpdGllcyBpbiB0aGUgc2FtZSB6b25lLiBUaGlzIHdheSwgSEJSIGVuc3VyZXMgZGF0YSBkdXJhYmlsaXR5IGFuZCBhdmFpbGFiaWxpdHkgZXZlbiBpZiBoYXJkd2FyZSBmYWlsdXJlcyBvY2N1ci5cbi0gKipaUlMqKjogWm9uZS1yZWR1bmRhbnQgc3RvcmFnZSAoWlJTKSBpcyBlbmFibGVkIGZvciB0aGUgYmFja3VwIHZhdWx0LiBIQlIgdXNlcyB0aGUgbXVsdGktem9uZSBtZWNoYW5pc20gdG8gZGlzdHJpYnV0ZSBkYXRhIGFjcm9zcyB0aHJlZSB6b25lcyB3aXRoaW4gdGhlIHNhbWUgcmVnaW9uLiBJZiBhIHpvbmUgZmFpbHMsIHRoZSBkYXRhIHRoYXQgaXMgc3RvcmVkIGluIHRoZSBvdGhlciB0d28gem9uZXMgaXMgc3RpbGwgYWNjZXNzaWJsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlZHVuZGFuY3lUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVwbGljYXRpb246IEluZGljYXRlcyB3aGV0aGVyIHRoZSBiYWNrdXAgdmF1bHQgaXMgYSByZW1vdGUgYmFja3VwIHZhdWx0LiBWYWxpZCB2YWx1ZXM6XG4tICoqdHJ1ZSoqOiBUaGUgYmFja3VwIHZhdWx0IGlzIGEgcmVtb3RlIGJhY2t1cCB2YXVsdC5cbi0gKipmYWxzZSoqOiBUaGUgYmFja3VwIHZhdWx0IGlzIGFuIG9uLXByZW1pc2VzIGJhY2t1cCB2YXVsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlcGxpY2F0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVwbGljYXRpb25Qcm9ncmVzczogVGhlIHByb2dyZXNzIG9mIGRhdGEgc3luY2hyb25pemF0aW9uIGZyb20gdGhlIGJhY2t1cCB2YXVsdCB0byB0aGUgbWlycm9yIHZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVwbGljYXRpb25Qcm9ncmVzczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlcGxpY2F0aW9uU291cmNlUmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgcmVnaW9uIHdoZXJlIHRoZSByZW1vdGUgYmFja3VwIHZhdWx0IHJlc2lkZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXBsaWNhdGlvblNvdXJjZVJlZ2lvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVwbGljYXRpb25Tb3VyY2VWYXVsdElkOiBUaGUgSUQgb2YgdGhlIHNvdXJjZSB2YXVsdCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSByZW1vdGUgYmFja3VwIHZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVwbGljYXRpb25Tb3VyY2VWYXVsdElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmV0ZW50aW9uOiBUaGUgcmV0ZW50aW9uIHBlcmlvZCBvZiB0aGUgYmFja3VwIHZhdWx0LiBVbml0OiBkYXlzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmV0ZW50aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VhcmNoRW5hYmxlZDogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGJhY2t1cCBzZWFyY2ggZmVhdHVyZSBpcyBlbmFibGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VhcmNoRW5hYmxlZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNvdXJjZVR5cGVzOiBUaGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGRhdGEgc291cmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU291cmNlVHlwZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTdG9yYWdlU2l6ZTogVGhlIHVzYWdlIG9mIHRoZSBiYWNrdXAgdmF1bHQuIFVuaXQ6IGJ5dGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3RvcmFnZVNpemU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUYWdzOiBUaGUgdGFncyBvZiB0aGUgYmFja3VwIHZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFnczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRyaWFsSW5mbzogVGhlIGZyZWUgdHJpYWwgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmlhbEluZm86IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBVcGRhdGVkVGltZTogVGhlIHRpbWUgd2hlbiB0aGUgYmFja3VwIHZhdWx0IHdhcyB1cGRhdGVkLiBUaGlzIHZhbHVlIGlzIGEgVU5JWCB0aW1lc3RhbXAuIFVuaXQ6IHNlY29uZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVcGRhdGVkVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZhdWx0SWQ6IFRoZSBJRCBvZiB0aGUgYmFja3VwIHZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVmF1bHRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZhdWx0TmFtZTogVGhlIG5hbWUgb2YgdGhlIGJhY2t1cCB2YXVsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZhdWx0TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZhdWx0U3RhdHVzTWVzc2FnZTogVGhlIHN0YXR1cyBtZXNzYWdlIHRoYXQgaXMgcmV0dXJuZWQgd2hlbiB0aGUgYmFja3VwIHZhdWx0IGlzIGluIHRoZSBFUlJPUiBzdGF0ZS4gVGhpcyBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIG9ubHkgZm9yIHJlbW90ZSBiYWNrdXAgdmF1bHRzLiBWYWxpZCB2YWx1ZXM6XG4tICoqVU5LTk9XTl9FUlJPUio6IEFuIHVua25vd24gZXJyb3Igb2NjdXJzLlxuLSAqKlNPVVJDRV9WQVVMVF9BTFJFQURZX0hBU19SRVBMSUNBVElPTioqOiBBIG1pcnJvciB2YXVsdCBpcyBjb25maWd1cmVkIGZvciB0aGUgc291cmNlIHZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVmF1bHRTdGF0dXNNZXNzYWdlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVmF1bHRTdG9yYWdlQ2xhc3M6IFRoZSBzdG9yYWdlIHR5cGUgb2YgdGhlIGJhY2t1cCB2YXVsdC4gVmFsaWQgdmFsdWU6ICoqU1RBTkRBUkQqKiwgd2hpY2ggaW5kaWNhdGVzIHN0YW5kYXJkIHN0b3JhZ2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWYXVsdFN0b3JhZ2VDbGFzczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZhdWx0VHlwZTogVGhlIHR5cGUgb2YgdGhlIGJhY2t1cCB2YXVsdC4gVmFsaWQgdmFsdWU6ICoqU1RBTkRBUkQqKiwgd2hpY2ggaW5kaWNhdGVzIGEgc3RhbmRhcmQgYmFja3VwIHZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVmF1bHRUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6SEJSOjpWYXVsdGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVmF1bHRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NWYXVsdCA9IG5ldyBSb3NWYXVsdCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHZhdWx0VHlwZTogcHJvcHMudmF1bHRUeXBlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZW5jcnlwdFR5cGU6IHByb3BzLmVuY3J5cHRUeXBlLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBrbXNLZXlJZDogcHJvcHMua21zS2V5SWQsXG4gICAgICAgICAgICB2YXVsdE5hbWU6IHByb3BzLnZhdWx0TmFtZSxcbiAgICAgICAgICAgIHJlZHVuZGFuY3lUeXBlOiBwcm9wcy5yZWR1bmRhbmN5VHlwZSxcbiAgICAgICAgICAgIHZhdWx0U3RvcmFnZUNsYXNzOiBwcm9wcy52YXVsdFN0b3JhZ2VDbGFzcyxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVmF1bHQ7XG4gICAgICAgIHRoaXMuYXR0ckJhY2t1cFBsYW5TdGF0aXN0aWNzID0gcm9zVmF1bHQuYXR0ckJhY2t1cFBsYW5TdGF0aXN0aWNzO1xuICAgICAgICB0aGlzLmF0dHJCeXRlc0RvbmUgPSByb3NWYXVsdC5hdHRyQnl0ZXNEb25lO1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gcm9zVmF1bHQuYXR0ckNyZWF0ZVRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckRlZHVwID0gcm9zVmF1bHQuYXR0ckRlZHVwO1xuICAgICAgICB0aGlzLmF0dHJEZXNjcmlwdGlvbiA9IHJvc1ZhdWx0LmF0dHJEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5hdHRySW5kZXhBdmFpbGFibGUgPSByb3NWYXVsdC5hdHRySW5kZXhBdmFpbGFibGU7XG4gICAgICAgIHRoaXMuYXR0ckluZGV4TGV2ZWwgPSByb3NWYXVsdC5hdHRySW5kZXhMZXZlbDtcbiAgICAgICAgdGhpcy5hdHRySW5kZXhVcGRhdGVUaW1lID0gcm9zVmF1bHQuYXR0ckluZGV4VXBkYXRlVGltZTtcbiAgICAgICAgdGhpcy5hdHRyTGF0ZXN0UmVwbGljYXRpb25UaW1lID0gcm9zVmF1bHQuYXR0ckxhdGVzdFJlcGxpY2F0aW9uVGltZTtcbiAgICAgICAgdGhpcy5hdHRyUGF5bWVudFR5cGUgPSByb3NWYXVsdC5hdHRyUGF5bWVudFR5cGU7XG4gICAgICAgIHRoaXMuYXR0clJlZHVuZGFuY3lUeXBlID0gcm9zVmF1bHQuYXR0clJlZHVuZGFuY3lUeXBlO1xuICAgICAgICB0aGlzLmF0dHJSZXBsaWNhdGlvbiA9IHJvc1ZhdWx0LmF0dHJSZXBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyUmVwbGljYXRpb25Qcm9ncmVzcyA9IHJvc1ZhdWx0LmF0dHJSZXBsaWNhdGlvblByb2dyZXNzO1xuICAgICAgICB0aGlzLmF0dHJSZXBsaWNhdGlvblNvdXJjZVJlZ2lvbklkID0gcm9zVmF1bHQuYXR0clJlcGxpY2F0aW9uU291cmNlUmVnaW9uSWQ7XG4gICAgICAgIHRoaXMuYXR0clJlcGxpY2F0aW9uU291cmNlVmF1bHRJZCA9IHJvc1ZhdWx0LmF0dHJSZXBsaWNhdGlvblNvdXJjZVZhdWx0SWQ7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlR3JvdXBJZCA9IHJvc1ZhdWx0LmF0dHJSZXNvdXJjZUdyb3VwSWQ7XG4gICAgICAgIHRoaXMuYXR0clJldGVudGlvbiA9IHJvc1ZhdWx0LmF0dHJSZXRlbnRpb247XG4gICAgICAgIHRoaXMuYXR0clNlYXJjaEVuYWJsZWQgPSByb3NWYXVsdC5hdHRyU2VhcmNoRW5hYmxlZDtcbiAgICAgICAgdGhpcy5hdHRyU291cmNlVHlwZXMgPSByb3NWYXVsdC5hdHRyU291cmNlVHlwZXM7XG4gICAgICAgIHRoaXMuYXR0clN0b3JhZ2VTaXplID0gcm9zVmF1bHQuYXR0clN0b3JhZ2VTaXplO1xuICAgICAgICB0aGlzLmF0dHJUYWdzID0gcm9zVmF1bHQuYXR0clRhZ3M7XG4gICAgICAgIHRoaXMuYXR0clRyaWFsSW5mbyA9IHJvc1ZhdWx0LmF0dHJUcmlhbEluZm87XG4gICAgICAgIHRoaXMuYXR0clVwZGF0ZWRUaW1lID0gcm9zVmF1bHQuYXR0clVwZGF0ZWRUaW1lO1xuICAgICAgICB0aGlzLmF0dHJWYXVsdElkID0gcm9zVmF1bHQuYXR0clZhdWx0SWQ7XG4gICAgICAgIHRoaXMuYXR0clZhdWx0TmFtZSA9IHJvc1ZhdWx0LmF0dHJWYXVsdE5hbWU7XG4gICAgICAgIHRoaXMuYXR0clZhdWx0U3RhdHVzTWVzc2FnZSA9IHJvc1ZhdWx0LmF0dHJWYXVsdFN0YXR1c01lc3NhZ2U7XG4gICAgICAgIHRoaXMuYXR0clZhdWx0U3RvcmFnZUNsYXNzID0gcm9zVmF1bHQuYXR0clZhdWx0U3RvcmFnZUNsYXNzO1xuICAgICAgICB0aGlzLmF0dHJWYXVsdFR5cGUgPSByb3NWYXVsdC5hdHRyVmF1bHRUeXBlO1xuICAgIH1cbn1cbiJdfQ==