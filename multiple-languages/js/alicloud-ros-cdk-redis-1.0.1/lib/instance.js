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
            engineVersion: props.engineVersion,
            evictionPolicy: props.evictionPolicy,
            zoneId: props.zoneId,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            instanceMaintainTime: props.instanceMaintainTime,
            instanceClass: props.instanceClass,
            vpcPasswordFree: props.vpcPasswordFree,
            instanceConnection: props.instanceConnection,
            instanceName: props.instanceName,
            vpcId: props.vpcId,
            sslEnabled: props.sslEnabled,
            capacity: props.capacity,
            tags: props.tags,
            backupPolicy: props.backupPolicy,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrConnectionDomain = rosInstance.attrConnectionDomain;
        this.attrInstanceClass = rosInstance.attrInstanceClass;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrOrderId = rosInstance.attrOrderId;
        this.attrPort = rosInstance.attrPort;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsdURBQWdEO0FBRXhCLGlHQUZmLDZCQUFXLE9BRW9CO0FBNkZ4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBcUN0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQXVCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sV0FBVyxHQUFHLElBQUksNkJBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQzNCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUMsb0JBQW9CLENBQUM7UUFDN0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ3pDLENBQUM7Q0FDSjtBQXpFRCw0QkF5RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NJbnN0YW5jZSB9IGZyb20gJy4vcmVkaXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2UgYXMgSW5zdGFuY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UkVESVM6Okluc3RhbmNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluc3RhbmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFja3VwUG9saWN5OiBCYWNrdXAgcG9saWN5XG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFja3VwUG9saWN5PzogUm9zSW5zdGFuY2UuQmFja3VwUG9saWN5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjYXBhY2l0eTogVGhlIHN0b3JhZ2UgY2FwYWNpdHkgb2YgcmVkaXMgaW5zdGFuY2UucmFuZ2UgZnJvbSAxIHRvIDUxMiwgaW4gR0IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2FwYWNpdHk/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmdpbmVWZXJzaW9uOiBFbmdpbmUgdmVyc2lvbi4gU3VwcG9ydGVkIHZhbHVlczogMi44LCA0LjAgYW5kIDUuMC5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmdpbmVWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZXZpY3Rpb25Qb2xpY3k6IFRoZSBldmljdGlvbiBwb2xpY3kgb2YgY2FjaGUgZGF0YSBzdG9yYWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGV2aWN0aW9uUG9saWN5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDbGFzczogUmVkaXMgaW5zdGFuY2UgdHlwZS4gUmVmZXIgdGhlIFJlZGlzIGluc3RhbmNlIHR5cGUgcmVmZXJlbmNlLCBzdWNoIGFzICdyZWRpcy5tYXN0ZXIuc21hbGwuZGVmYXVsdCcsICdyZWRpcy5tYXN0ZXIuNHhsYXJnZS5kZWZhdWx0JywgJ3JlZGlzLnNoYXJkaW5nLm1pZC5kZWZhdWx0JyBldGNcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNsYXNzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDb25uZWN0aW9uOiBJbnN0YW5jZSBjb25uZWN0aW9uIG1lc3NhZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VDb25uZWN0aW9uPzogUm9zSW5zdGFuY2UuSW5zdGFuY2VDb25uZWN0aW9uUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZU1haW50YWluVGltZTogSW5zdGFuY2UgbWFpbnRhaW4gdGltZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU1haW50YWluVGltZT86IFJvc0luc3RhbmNlLkluc3RhbmNlTWFpbnRhaW5UaW1lUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IERpc3BsYXkgbmFtZSBvZiB0aGUgaW5zdGFuY2UsIFsyLCAxMjhdIEVuZ2xpc2ggb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBpbiBzaXplLCBjYW4gY29udGFpbiBudW1iZXJzLCAnXycgb3IgJy4nLCAnLSdcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXNzd29yZDogVGhlIHBhc3N3b3JkIG9mIHJlZGlzIGluc3RhbmNlLmxlbmd0aCA4IHRvIDMwIGNoYXJhY3RlcnMsIG5lZWQgdG8gY29udGFpbiBib3RoIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMgYW5kIG51bWJlcnNcbiAgICAgKi9cbiAgICByZWFkb25seSBwYXNzd29yZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZDogVGhlIElEcyBvZiBzZWN1cml0eSBncm91cHMuIFNlcGFyYXRlIG11bHRpcGxlIHNlY3VyaXR5IGdyb3VwIElEcyB3aXRoIGNvbW1hcyAoLCkgYW5kIHVwIHRvIDEwIGNhbiBiZSBzZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3NsRW5hYmxlZDogTW9kaWZpZXMgdGhlIFNTTCBzdGF0dXMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBEaXNhYmxlOiBkaXNhYmxlcyBTU0wgZW5jcnlwdGlvbi5cbiAgICAgKiBFbmFibGU6IGVuYWJsZXMgU1NMIGVuY3J5cHRpb24uXG4gICAgICogVXBkYXRlOiB1cGRhdGVzIHRoZSBTU0wgY2VydGlmaWNhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3NsRW5hYmxlZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIHJlZGlzLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIHJlZGlzLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0luc3RhbmNlLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBWUEMgaWQgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY1Bhc3N3b3JkRnJlZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIHBhc3N3b3JkIGZyZWUgZm9yIGFjY2VzcyB3aXRoaW4gdGhlIFZQQy4gSWYgc2V0IHRvOlxuICAgICAqIC0gdHJ1ZTogZW5hYmxlcyBwYXNzd29yZCBmcmVlLlxuICAgICAqIC0gZmFsc2U6IGRpc2FibGVzIHBhc3N3b3JkIGZyZWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjUGFzc3dvcmRGcmVlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIHZTd2l0Y2ggSWQgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IFRoZSB6b25lIGlkIG9mIGlucHV0IHJlZ2lvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlJFRElTOjpJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDb25uZWN0aW9uRG9tYWluOiBDb25uZWN0aW9uIGRvbWFpbiBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29ubmVjdGlvbkRvbWFpbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlQ2xhc3M6IFJlZGlzIGluc3RhbmNlIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUNsYXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogSW5zdGFuY2UgaWQgb2YgY3JlYXRlZCByZWRpcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZU5hbWU6IE5hbWUgb2YgY3JlYXRlZCByZWRpcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE9yZGVySWQ6IE9yZGVyIElkIG9mIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUG9ydDogUG9ydCBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJFRElTOjpJbnN0YW5jZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW5zdGFuY2VQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0luc3RhbmNlID0gbmV3IFJvc0luc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZW5naW5lVmVyc2lvbjogcHJvcHMuZW5naW5lVmVyc2lvbixcbiAgICAgICAgICAgIGV2aWN0aW9uUG9saWN5OiBwcm9wcy5ldmljdGlvblBvbGljeSxcbiAgICAgICAgICAgIHpvbmVJZDogcHJvcHMuem9uZUlkLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIGluc3RhbmNlTWFpbnRhaW5UaW1lOiBwcm9wcy5pbnN0YW5jZU1haW50YWluVGltZSxcbiAgICAgICAgICAgIGluc3RhbmNlQ2xhc3M6IHByb3BzLmluc3RhbmNlQ2xhc3MsXG4gICAgICAgICAgICB2cGNQYXNzd29yZEZyZWU6IHByb3BzLnZwY1Bhc3N3b3JkRnJlZSxcbiAgICAgICAgICAgIGluc3RhbmNlQ29ubmVjdGlvbjogcHJvcHMuaW5zdGFuY2VDb25uZWN0aW9uLFxuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiBwcm9wcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBzc2xFbmFibGVkOiBwcm9wcy5zc2xFbmFibGVkLFxuICAgICAgICAgICAgY2FwYWNpdHk6IHByb3BzLmNhcGFjaXR5LFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgICAgIGJhY2t1cFBvbGljeTogcHJvcHMuYmFja3VwUG9saWN5LFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3BzLnBhc3N3b3JkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0luc3RhbmNlO1xuICAgICAgICB0aGlzLmF0dHJDb25uZWN0aW9uRG9tYWluID0gcm9zSW5zdGFuY2UuYXR0ckNvbm5lY3Rpb25Eb21haW47XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlQ2xhc3MgPSByb3NJbnN0YW5jZS5hdHRySW5zdGFuY2VDbGFzcztcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0luc3RhbmNlLmF0dHJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZU5hbWUgPSByb3NJbnN0YW5jZS5hdHRySW5zdGFuY2VOYW1lO1xuICAgICAgICB0aGlzLmF0dHJPcmRlcklkID0gcm9zSW5zdGFuY2UuYXR0ck9yZGVySWQ7XG4gICAgICAgIHRoaXMuYXR0clBvcnQgPSByb3NJbnN0YW5jZS5hdHRyUG9ydDtcbiAgICB9XG59XG4iXX0=