"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const redis_generated_1 = require("./redis.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return redis_generated_1.RosInstance; } });
/**
 * A ROS resource type:  `ALIYUN::REDIS::Instance`
 */
class Instance extends ros.Resource {
    /**
     * Create a new `ALIYUN::REDIS::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstance = new redis_generated_1.RosInstance(this, id, {
            connections: props.connections,
            resourceGroupId: props.resourceGroupId,
            shardCount: props.shardCount,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            sslEnabled: props.sslEnabled,
            tairConfig: props.tairConfig,
            tags: props.tags,
            backupPolicy: props.backupPolicy,
            password: props.password,
            engineVersion: props.engineVersion,
            zoneId: props.zoneId,
            evictionPolicy: props.evictionPolicy,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            productType: props.productType,
            instanceMaintainTime: props.instanceMaintainTime,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            instanceClass: props.instanceClass,
            vpcPasswordFree: props.vpcPasswordFree,
            secondaryZoneId: props.secondaryZoneId,
            autoRenewDuration: props.autoRenewDuration,
            instanceName: props.instanceName,
            vpcId: props.vpcId,
            chargeType: props.chargeType,
            nodeType: props.nodeType,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrArchitectureType = rosInstance.attrArchitectureType;
        this.attrBandwidth = rosInstance.attrBandwidth;
        this.attrCapacity = rosInstance.attrCapacity;
        this.attrChargeType = rosInstance.attrChargeType;
        this.attrClassicInnerConnectionPort = rosInstance.attrClassicInnerConnectionPort;
        this.attrClassicInnerConnectionString = rosInstance.attrClassicInnerConnectionString;
        this.attrConnectionDomain = rosInstance.attrConnectionDomain;
        this.attrConnections = rosInstance.attrConnections;
        this.attrDirectConnectionPort = rosInstance.attrDirectConnectionPort;
        this.attrDirectConnectionString = rosInstance.attrDirectConnectionString;
        this.attrEngineVersion = rosInstance.attrEngineVersion;
        this.attrHasRenewChangeOrder = rosInstance.attrHasRenewChangeOrder;
        this.attrInstanceClass = rosInstance.attrInstanceClass;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrNetworkType = rosInstance.attrNetworkType;
        this.attrNodeType = rosInstance.attrNodeType;
        this.attrOrderId = rosInstance.attrOrderId;
        this.attrPackageType = rosInstance.attrPackageType;
        this.attrPort = rosInstance.attrPort;
        this.attrPrivateIp = rosInstance.attrPrivateIp;
        this.attrPublicConnectionPort = rosInstance.attrPublicConnectionPort;
        this.attrPublicConnectionString = rosInstance.attrPublicConnectionString;
        this.attrQps = rosInstance.attrQps;
        this.attrResourceGroupId = rosInstance.attrResourceGroupId;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
        this.attrVpcId = rosInstance.attrVpcId;
        this.attrVpcPrivateConnectionPort = rosInstance.attrVpcPrivateConnectionPort;
        this.attrVpcPrivateConnectionString = rosInstance.attrVpcPrivateConnectionString;
        this.attrZoneId = rosInstance.attrZoneId;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsdURBQWdEO0FBRXhCLGlHQUZmLDZCQUFXLE9BRW9CO0FBNkp4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBa0t0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQXVCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sV0FBVyxHQUFHLElBQUksNkJBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYTtZQUM5RyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFD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QUMsbUJBQW1CLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUN2QyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsV0FBVyxDQUFDLDRCQUE0QixDQUFDO1FBQzdFLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxXQUFXLENBQUMsOEJBQThCLENBQUM7UUFDakYsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQXpPRCw0QkF5T0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NJbnN0YW5jZSB9IGZyb20gJy4vcmVkaXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2UgYXMgSW5zdGFuY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UkVESVM6Okluc3RhbmNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluc3RhbmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1JlbmV3RHVyYXRpb246IFRoZSBhdXRvLXJlbmV3YWwgcGVyaW9kLiBWYWxpZCB2YWx1ZXM6IDEgdG8gMTIuIFxuICAgICAqICBXaGVuIHRoZSBpbnN0YW5jZSBpcyBhYm91dCB0byBleHBpcmUsIHRoZSBpbnN0YW5jZSBpcyBhdXRvbWF0aWNhbGx5IHJlbmV3ZWQgXG4gICAgICogYmFzZWQgb24gdGhlIG51bWJlciBvZiBtb250aHMgc3BlY2lmaWVkIGJ5IHRoaXMgcGFyYW1ldGVyLiBcbiAgICAgKiBOb3RlIFRoaXMgcGFyYW1ldGVyIGlzIHZhbGlkIG9ubHkgd2hlbiBDaGFyZ2VUeXBlIGlzIHNldCB0byBQcmVQYWlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZW5ld0R1cmF0aW9uPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFja3VwUG9saWN5OiBCYWNrdXAgcG9saWN5XG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFja3VwUG9saWN5PzogUm9zSW5zdGFuY2UuQmFja3VwUG9saWN5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjaGFyZ2VUeXBlOiBUaGUgYmlsbGluZyBtZXRob2Qgb2YgdGhlIEFwc2FyYURCIGZvciBSZWRpcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29ubmVjdGlvbnM6IENvbm5lY3Rpb24gYWRkcmVzc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbm5lY3Rpb25zPzogUm9zSW5zdGFuY2UuQ29ubmVjdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZGVzdHJveSBpbnN0YW5jZSB3aGVuIGl0IGlzIGluIHJlY3ljbGUuIERlZmF1bHQgaXMgZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvbkZvcmNlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuZ2luZVZlcnNpb246IEVuZ2luZSB2ZXJzaW9uLiBTdXBwb3J0ZWQgdmFsdWVzOiAyLjgsIDQuMCwgNS4wLCA2LjAgYW5kIDcuMFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuZ2luZVZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBldmljdGlvblBvbGljeTogVGhlIGV2aWN0aW9uIHBvbGljeSBvZiBjYWNoZSBkYXRhIHN0b3JhZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZXZpY3Rpb25Qb2xpY3k/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUNsYXNzOiBSZWRpcyBpbnN0YW5jZSB0eXBlLiBSZWZlciB0aGUgUmVkaXMgaW5zdGFuY2UgdHlwZSByZWZlcmVuY2UsIHN1Y2ggYXMgJ3JlZGlzLm1hc3Rlci5zbWFsbC5kZWZhdWx0JywgJ3JlZGlzLm1hc3Rlci40eGxhcmdlLmRlZmF1bHQnLCAncmVkaXMuc2hhcmRpbmcubWlkLmRlZmF1bHQnIGV0Y1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlQ2xhc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZU1haW50YWluVGltZTogSW5zdGFuY2UgbWFpbnRhaW4gdGltZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU1haW50YWluVGltZT86IFJvc0luc3RhbmNlLkluc3RhbmNlTWFpbnRhaW5UaW1lUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IERpc3BsYXkgbmFtZSBvZiB0aGUgaW5zdGFuY2UsIFsyLCAxMjhdIEVuZ2xpc2ggb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBpbiBzaXplLCBjYW4gY29udGFpbiBudW1iZXJzLCAnXycgb3IgJy4nLCAnLSdcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBub2RlVHlwZTogVGhlIHR5cGUgb2Ygbm9kZS4gVmFsaWQgdmFsdWU6XG4gICAgICogLSAqKlNUQU5EX0FMT05FKipcbiAgICAgKiAtICoqTUFTVEVSX1NMQVZFKipcbiAgICAgKiAtICoqZG91YmxlKipcbiAgICAgKiAtICoqc2luZ2xlKipcbiAgICAgKi9cbiAgICByZWFkb25seSBub2RlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhc3N3b3JkOiBUaGUgcGFzc3dvcmQgb2YgcmVkaXMgaW5zdGFuY2UubGVuZ3RoIDggdG8gMzAgY2hhcmFjdGVycywgbmVlZCB0byBjb250YWluIGJvdGggdXBwZXJjYXNlIGFuZCBsb3dlcmNhc2UgbGV0dGVycyBhbmQgbnVtYmVyc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOiBUaGUgcGVyaW9kIG9mIG9yZGVyLCB3aGVuIGNob29zZSBQcmVwYWlkIHJlcXVpcmVkLm9wdGlvbmFsIHZhbHVlIDEtOSwgMTIsIDI0LCAzNiwgNjAgVW5pdCBpbiBtb250aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2RVbml0OiBUaGUgdW5pdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGR1cmF0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogTW9udGhcbiAgICAgKiBZZWFyXG4gICAgICogRGVmYXVsdCB2YWx1ZTogTW9udGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kVW5pdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByb2R1Y3RUeXBlOiBQcm9kdWN0IHR5cGUuIFZhbGlkIHZhbHVlczpMb2NhbDogQ29tbXVuaXR5IEVkaXRpb24oTG9jYWwpIG9yIEVuaGFuY2VkIEVkaXRpb24oTG9jYWwpVGFpcl9yZGI6IFBlcmZvcm1hbmNlIEVuaGFuY2VkKENsb3VkIERpc2spVGFpcl9zY206IFBlcnNpc3RlbnQgTWVtb3J5KENsb3VkIERpc2spVGFpcl9lc3NkOiBDYXBhY2l0eSBTdG9yYWdlKENsb3VkIERpc2spT25FQ1M6IENvbW11bml0eSBFZGl0aW9uKENsb3VkIERpc2spXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvZHVjdFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY29uZGFyeVpvbmVJZDogVGhlIHNlY29uZGFyeSB6b25lIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWNvbmRhcnlab25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFRoZSBJRHMgb2Ygc2VjdXJpdHkgZ3JvdXBzLiBTZXBhcmF0ZSBtdWx0aXBsZSBzZWN1cml0eSBncm91cCBJRHMgd2l0aCBjb21tYXMgKCwpIGFuZCB1cCB0byAxMCBjYW4gYmUgc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNoYXJkQ291bnQ6IFRoZSBudW1iZXIgb2YgZGF0YSBub2RlcyBpbiB0aGUgaW5zdGFuY2UuIERlZmF1bHQgdmFsdWU6IDEuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAxOiBZb3UgY2FuIGNyZWF0ZSBhbiBpbnN0YW5jZSBpbiB0aGUgc3RhbmRhcmQgYXJjaGl0ZWN0dXJlIHRoYXQgY29udGFpbnMgb25seSBhIHNpbmdsZSBkYXRhIG5vZGUuIFxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGFuZGFyZCBhcmNoaXRlY3R1cmUsIHNlZSBDbHVzdGVyIG1hc3Rlci1yZXBsaWNhIGluc3RhbmNlcy5cbiAgICAgKiAyIHRvIDMyOiBZb3UgY2FuIGNyZWF0ZSBhbiBpbnN0YW5jZSBpbiB0aGUgY2x1c3RlciBhcmNoaXRlY3R1cmV0aGF0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRhdGEgbm9kZXMuIFxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbHVzdGVyIGFyY2hpdGVjdHVyZSwgc2VlIENsdXN0ZXIgbWFzdGVyLXJlcGxpY2EgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNoYXJkQ291bnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzc2xFbmFibGVkOiBNb2RpZmllcyB0aGUgU1NMIHN0YXR1cy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIERpc2FibGU6IGRpc2FibGVzIFNTTCBlbmNyeXB0aW9uLlxuICAgICAqIEVuYWJsZTogZW5hYmxlcyBTU0wgZW5jcnlwdGlvbi5cbiAgICAgKiBVcGRhdGU6IHVwZGF0ZXMgdGhlIFNTTCBjZXJ0aWZpY2F0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzc2xFbmFibGVkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gcmVkaXMuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgcmVkaXMuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zSW5zdGFuY2UuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWlyQ29uZmlnOiBUYWlyIGNvbmZpZy4gVGhpcyBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIG9ubHkgaWYgdGhlIEluc3RhbmNlQ2xhc3MgcGFyYW1ldGVyIGlzIHN0YXJ0IHdpdGggdGFpci5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWlyQ29uZmlnPzogUm9zSW5zdGFuY2UuVGFpckNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBWUEMgaWQgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY1Bhc3N3b3JkRnJlZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIHBhc3N3b3JkIGZyZWUgZm9yIGFjY2VzcyB3aXRoaW4gdGhlIFZQQy4gSWYgc2V0IHRvOlxuICAgICAqIC0gdHJ1ZTogZW5hYmxlcyBwYXNzd29yZCBmcmVlLlxuICAgICAqIC0gZmFsc2U6IGRpc2FibGVzIHBhc3N3b3JkIGZyZWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjUGFzc3dvcmRGcmVlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIHZTd2l0Y2ggSWQgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IFRoZSB6b25lIGlkIG9mIGlucHV0IHJlZ2lvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlJFRElTOjpJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBcmNoaXRlY3R1cmVUeXBlOiBUaGUgYXJjaGl0ZWN0dXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXJjaGl0ZWN0dXJlVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEJhbmR3aWR0aDogVGhlIGJhbmR3aWR0aCBvZiB0aGUgaW5zdGFuY2UuIFVuaXQ6IE1iaXQvcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckJhbmR3aWR0aDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENhcGFjaXR5OiBUaGUgc3RvcmFnZSBjYXBhY2l0eSBvZiB0aGUgaW5zdGFuY2UuIFVuaXQ6IE1CLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2FwYWNpdHk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDaGFyZ2VUeXBlOiBUaGUgYmlsbGluZyBtZXRob2Qgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2hhcmdlVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENsYXNzaWNJbm5lckNvbm5lY3Rpb25Qb3J0OiBUaGUgY2xhc3NpYyBpbm5lciBjb25uZWN0aW9uIHBvcnQgb2YgdGhlIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbGFzc2ljSW5uZXJDb25uZWN0aW9uUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENsYXNzaWNJbm5lckNvbm5lY3Rpb25TdHJpbmc6IFRoZSBjbGFzc2ljIGlubmVyIGNvbm5lY3Rpb24gc3RyaW5nIG9mIHRoZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2xhc3NpY0lubmVyQ29ubmVjdGlvblN0cmluZzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbm5lY3Rpb25Eb21haW46IENvbm5lY3Rpb24gZG9tYWluIG9mIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb25uZWN0aW9uRG9tYWluOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29ubmVjdGlvbnM6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBjb25uZWN0aW9ucyBzdXBwb3J0ZWQgYnkgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29ubmVjdGlvbnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEaXJlY3RDb25uZWN0aW9uUG9ydDogVGhlIGRpcmVjdCBjb25uZWN0aW9uIHBvcnQgb2YgdGhlIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEaXJlY3RDb25uZWN0aW9uUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERpcmVjdENvbm5lY3Rpb25TdHJpbmc6IFRoZSBkaXJlY3QgY29ubmVjdGlvbiBzdHJpbmcgb2YgdGhlIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEaXJlY3RDb25uZWN0aW9uU3RyaW5nOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRW5naW5lVmVyc2lvbjogVGhlIGVuZ2luZSB2ZXJzaW9uIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZ2luZVZlcnNpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBIYXNSZW5ld0NoYW5nZU9yZGVyOiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50IGhhcyBwZW5kaW5nIHJlbmV3YWwgb3Igc2NhbGluZyBvcmRlcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckhhc1JlbmV3Q2hhbmdlT3JkZXI6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZUNsYXNzOiBSZWRpcyBpbnN0YW5jZSB0eXBlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VDbGFzczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWQ6IEluc3RhbmNlIGlkIG9mIGNyZWF0ZWQgcmVkaXMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VOYW1lOiBOYW1lIG9mIGNyZWF0ZWQgcmVkaXMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZVR5cGU6IFRoZSBlbmdpbmUgdHlwZSBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOZXR3b3JrVHlwZTogVGhlIG5ldHdvcmsgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5ldHdvcmtUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTm9kZVR5cGU6IFRoZSB0eXBlIG9mIG5vZGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOb2RlVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE9yZGVySWQ6IE9yZGVyIElkIG9mIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUGFja2FnZVR5cGU6IFRoZSBwbGFuIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQYWNrYWdlVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBvcnQ6IFBvcnQgb2YgY3JlYXRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBvcnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQcml2YXRlSXA6IFRoZSBpbnRlcm5hbCBJUCBhZGRyZXNzIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaXZhdGVJcDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFB1YmxpY0Nvbm5lY3Rpb25Qb3J0OiBUaGUgcHVibGljIGNvbm5lY3Rpb24gcG9ydCBvZiB0aGUgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clB1YmxpY0Nvbm5lY3Rpb25Qb3J0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljQ29ubmVjdGlvblN0cmluZzogVGhlIHB1YmxpYyBjb25uZWN0aW9uIHN0cmluZyBvZiB0aGUgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clB1YmxpY0Nvbm5lY3Rpb25TdHJpbmc6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBRUFM6IFRoZSBxdWVyaWVzIHBlciBzZWNvbmQgKFFQUykgc3VwcG9ydGVkIGJ5IHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clFwczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZTd2l0Y2hJZDogVGhlIElEIG9mIHRoZSB2U3dpdGNoLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVlN3aXRjaElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVnBjSWQ6IFRoZSBJRCBvZiB0aGUgVlBDLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcGNQcml2YXRlQ29ubmVjdGlvblBvcnQ6IFRoZSB2cGMgcHJpdmF0ZSBjb25uZWN0aW9uIHBvcnQgb2YgdGhlIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNQcml2YXRlQ29ubmVjdGlvblBvcnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcGNQcml2YXRlQ29ubmVjdGlvblN0cmluZzogVGhlIHZwYyBwcml2YXRlIGNvbm5lY3Rpb24gc3RyaW5nIG9mIHRoZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjUHJpdmF0ZUNvbm5lY3Rpb25TdHJpbmc6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBab25lSWQ6IFRoZSBJRCBvZiB0aGUgem9uZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clpvbmVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJFRElTOjpJbnN0YW5jZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW5zdGFuY2VQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0luc3RhbmNlID0gbmV3IFJvc0luc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgY29ubmVjdGlvbnM6IHByb3BzLmNvbm5lY3Rpb25zLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBzaGFyZENvdW50OiBwcm9wcy5zaGFyZENvdW50LFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogcHJvcHMuZGVsZXRpb25Gb3JjZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmRlbGV0aW9uRm9yY2UgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLmRlbGV0aW9uRm9yY2UsXG4gICAgICAgICAgICBzc2xFbmFibGVkOiBwcm9wcy5zc2xFbmFibGVkLFxuICAgICAgICAgICAgdGFpckNvbmZpZzogcHJvcHMudGFpckNvbmZpZyxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgICAgICBiYWNrdXBQb2xpY3k6IHByb3BzLmJhY2t1cFBvbGljeSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9wcy5wYXNzd29yZCxcbiAgICAgICAgICAgIGVuZ2luZVZlcnNpb246IHByb3BzLmVuZ2luZVZlcnNpb24sXG4gICAgICAgICAgICB6b25lSWQ6IHByb3BzLnpvbmVJZCxcbiAgICAgICAgICAgIGV2aWN0aW9uUG9saWN5OiBwcm9wcy5ldmljdGlvblBvbGljeSxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogcHJvcHMudlN3aXRjaElkLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cElkOiBwcm9wcy5zZWN1cml0eUdyb3VwSWQsXG4gICAgICAgICAgICBwcm9kdWN0VHlwZTogcHJvcHMucHJvZHVjdFR5cGUsXG4gICAgICAgICAgICBpbnN0YW5jZU1haW50YWluVGltZTogcHJvcHMuaW5zdGFuY2VNYWludGFpblRpbWUsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBlcmlvZCA9PT0gbnVsbCA/IDEgOiBwcm9wcy5wZXJpb2QsXG4gICAgICAgICAgICBpbnN0YW5jZUNsYXNzOiBwcm9wcy5pbnN0YW5jZUNsYXNzLFxuICAgICAgICAgICAgdnBjUGFzc3dvcmRGcmVlOiBwcm9wcy52cGNQYXNzd29yZEZyZWUsXG4gICAgICAgICAgICBzZWNvbmRhcnlab25lSWQ6IHByb3BzLnNlY29uZGFyeVpvbmVJZCxcbiAgICAgICAgICAgIGF1dG9SZW5ld0R1cmF0aW9uOiBwcm9wcy5hdXRvUmVuZXdEdXJhdGlvbixcbiAgICAgICAgICAgIGluc3RhbmNlTmFtZTogcHJvcHMuaW5zdGFuY2VOYW1lLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgY2hhcmdlVHlwZTogcHJvcHMuY2hhcmdlVHlwZSxcbiAgICAgICAgICAgIG5vZGVUeXBlOiBwcm9wcy5ub2RlVHlwZSxcbiAgICAgICAgICAgIHBlcmlvZFVuaXQ6IHByb3BzLnBlcmlvZFVuaXQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuYXR0ckFyY2hpdGVjdHVyZVR5cGUgPSByb3NJbnN0YW5jZS5hdHRyQXJjaGl0ZWN0dXJlVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyQmFuZHdpZHRoID0gcm9zSW5zdGFuY2UuYXR0ckJhbmR3aWR0aDtcbiAgICAgICAgdGhpcy5hdHRyQ2FwYWNpdHkgPSByb3NJbnN0YW5jZS5hdHRyQ2FwYWNpdHk7XG4gICAgICAgIHRoaXMuYXR0ckNoYXJnZVR5cGUgPSByb3NJbnN0YW5jZS5hdHRyQ2hhcmdlVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyQ2xhc3NpY0lubmVyQ29ubmVjdGlvblBvcnQgPSByb3NJbnN0YW5jZS5hdHRyQ2xhc3NpY0lubmVyQ29ubmVjdGlvblBvcnQ7XG4gICAgICAgIHRoaXMuYXR0ckNsYXNzaWNJbm5lckNvbm5lY3Rpb25TdHJpbmcgPSByb3NJbnN0YW5jZS5hdHRyQ2xhc3NpY0lubmVyQ29ubmVjdGlvblN0cmluZztcbiAgICAgICAgdGhpcy5hdHRyQ29ubmVjdGlvbkRvbWFpbiA9IHJvc0luc3RhbmNlLmF0dHJDb25uZWN0aW9uRG9tYWluO1xuICAgICAgICB0aGlzLmF0dHJDb25uZWN0aW9ucyA9IHJvc0luc3RhbmNlLmF0dHJDb25uZWN0aW9ucztcbiAgICAgICAgdGhpcy5hdHRyRGlyZWN0Q29ubmVjdGlvblBvcnQgPSByb3NJbnN0YW5jZS5hdHRyRGlyZWN0Q29ubmVjdGlvblBvcnQ7XG4gICAgICAgIHRoaXMuYXR0ckRpcmVjdENvbm5lY3Rpb25TdHJpbmcgPSByb3NJbnN0YW5jZS5hdHRyRGlyZWN0Q29ubmVjdGlvblN0cmluZztcbiAgICAgICAgdGhpcy5hdHRyRW5naW5lVmVyc2lvbiA9IHJvc0luc3RhbmNlLmF0dHJFbmdpbmVWZXJzaW9uO1xuICAgICAgICB0aGlzLmF0dHJIYXNSZW5ld0NoYW5nZU9yZGVyID0gcm9zSW5zdGFuY2UuYXR0ckhhc1JlbmV3Q2hhbmdlT3JkZXI7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlQ2xhc3MgPSByb3NJbnN0YW5jZS5hdHRySW5zdGFuY2VDbGFzcztcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0luc3RhbmNlLmF0dHJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZU5hbWUgPSByb3NJbnN0YW5jZS5hdHRySW5zdGFuY2VOYW1lO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZVR5cGUgPSByb3NJbnN0YW5jZS5hdHRySW5zdGFuY2VUeXBlO1xuICAgICAgICB0aGlzLmF0dHJOZXR3b3JrVHlwZSA9IHJvc0luc3RhbmNlLmF0dHJOZXR3b3JrVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyTm9kZVR5cGUgPSByb3NJbnN0YW5jZS5hdHRyTm9kZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0ck9yZGVySWQgPSByb3NJbnN0YW5jZS5hdHRyT3JkZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyUGFja2FnZVR5cGUgPSByb3NJbnN0YW5jZS5hdHRyUGFja2FnZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0clBvcnQgPSByb3NJbnN0YW5jZS5hdHRyUG9ydDtcbiAgICAgICAgdGhpcy5hdHRyUHJpdmF0ZUlwID0gcm9zSW5zdGFuY2UuYXR0clByaXZhdGVJcDtcbiAgICAgICAgdGhpcy5hdHRyUHVibGljQ29ubmVjdGlvblBvcnQgPSByb3NJbnN0YW5jZS5hdHRyUHVibGljQ29ubmVjdGlvblBvcnQ7XG4gICAgICAgIHRoaXMuYXR0clB1YmxpY0Nvbm5lY3Rpb25TdHJpbmcgPSByb3NJbnN0YW5jZS5hdHRyUHVibGljQ29ubmVjdGlvblN0cmluZztcbiAgICAgICAgdGhpcy5hdHRyUXBzID0gcm9zSW5zdGFuY2UuYXR0clFwcztcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VHcm91cElkID0gcm9zSW5zdGFuY2UuYXR0clJlc291cmNlR3JvdXBJZDtcbiAgICAgICAgdGhpcy5hdHRyVlN3aXRjaElkID0gcm9zSW5zdGFuY2UuYXR0clZTd2l0Y2hJZDtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSByb3NJbnN0YW5jZS5hdHRyVnBjSWQ7XG4gICAgICAgIHRoaXMuYXR0clZwY1ByaXZhdGVDb25uZWN0aW9uUG9ydCA9IHJvc0luc3RhbmNlLmF0dHJWcGNQcml2YXRlQ29ubmVjdGlvblBvcnQ7XG4gICAgICAgIHRoaXMuYXR0clZwY1ByaXZhdGVDb25uZWN0aW9uU3RyaW5nID0gcm9zSW5zdGFuY2UuYXR0clZwY1ByaXZhdGVDb25uZWN0aW9uU3RyaW5nO1xuICAgICAgICB0aGlzLmF0dHJab25lSWQgPSByb3NJbnN0YW5jZS5hdHRyWm9uZUlkO1xuICAgIH1cbn1cbiJdfQ==