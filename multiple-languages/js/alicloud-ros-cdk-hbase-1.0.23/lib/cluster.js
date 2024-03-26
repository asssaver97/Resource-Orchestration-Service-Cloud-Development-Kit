"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cluster = exports.ClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const hbase_generated_1 = require("./hbase.generated");
Object.defineProperty(exports, "ClusterProperty", { enumerable: true, get: function () { return hbase_generated_1.RosCluster; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBase::Cluster`, which is used to create an ApsaraDB for HBase cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
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
        const rosCluster = new hbase_generated_1.RosCluster(this, id, {
            autoRenewPeriod: props.autoRenewPeriod,
            coldStorageSize: props.coldStorageSize,
            engineVersion: props.engineVersion,
            resourceGroupId: props.resourceGroupId,
            nodeCount: props.nodeCount,
            zoneId: props.zoneId,
            vSwitchId: props.vSwitchId,
            period: props.period,
            encryptionKey: props.encryptionKey,
            payType: props.payType,
            masterInstanceType: props.masterInstanceType,
            diskType: props.diskType,
            vpcId: props.vpcId,
            securityIpList: props.securityIpList,
            coreInstanceType: props.coreInstanceType,
            diskSize: props.diskSize,
            clusterName: props.clusterName,
            engine: props.engine,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrServiceConnAddrs = rosCluster.attrServiceConnAddrs;
        this.attrSlbConnAddrs = rosCluster.attrSlbConnAddrs;
        this.attrThriftConn = rosCluster.attrThriftConn;
        this.attrUiProxyConnAddrInfo = rosCluster.attrUiProxyConnAddrInfo;
        this.attrZkConnAddrs = rosCluster.attrZkConnAddrs;
    }
}
exports.Cluster = Cluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHVEQUErQztBQUV4QixnR0FGZCw0QkFBVSxPQUVtQjtBQThKdEM7Ozs7R0FJRztBQUNILE1BQWEsT0FBUSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBb0NyQzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxVQUFVLEdBQUcsSUFBSSw0QkFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUMsb0JBQW9CLENBQUM7UUFDNUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDaEQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztRQUNsRSxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDdEQsQ0FBQztDQUNKO0FBN0VELDBCQTZFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0NsdXN0ZXIgfSBmcm9tICcuL2hiYXNlLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0NsdXN0ZXIgYXMgQ2x1c3RlclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQ2x1c3RlcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1oYmFzZS1jbHVzdGVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2x1c3RlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvcmVJbnN0YW5jZVR5cGU6IFlvdSBjYW4gY2FsbCB0aGUgRGVzY3JpYmVBdmFpbGFibGVSZXNvdXJjZSBvcGVyYXRpb24gdG8gb2J0YWluIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb3JlSW5zdGFuY2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmdpbmU6IFRoZSB0eXBlIG9mIHRoZSBzZXJ2aWNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogaGJhc2VcbiAgICAgKiBoYmFzZXVlXG4gICAgICogYmRzXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5naW5lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmdpbmVWZXJzaW9uOiBUaGUgdmVyc2lvbiBvZiB0aGUgZW5naW5lLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogaGJhc2U6MS4xLCAyLjBcbiAgICAgKiBoYmFzZXVlOjIuMFxuICAgICAqIGJkczoxLjBcbiAgICAgKi9cbiAgICByZWFkb25seSBlbmdpbmVWZXJzaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBub2RlQ291bnQ6IFRoZSBudW1iZXIgb2Ygbm9kZXMuIFZhbGlkIHZhbHVlczogMSB0byAxMDAuXG4gICAgICogQXBzYXJhREIgZm9yIEhCYXNlIGluIHNpbmdsZS1ub2RlIG1vZGU6IG9uZSBub2RlXG4gICAgICogQXBzYXJhREIgZm9yIEhCYXNlIHRoYXQgcnVucyBpbiBjbHVzdGVyIG1vZGUgYW5kIHVzZXMgZGlza3M6IGF0IGxlYXN0IHR3byBub2Rlc1xuICAgICAqIEFwc2FyYURCIGZvciBIQmFzZSB0aGF0IHJ1bnMgaW4gY2x1c3RlciBtb2RlIGFuZCB1c2VzIGxvY2FsIGRpc2tzOiBhdCBsZWFzdCB0aHJlZVxuICAgICAqIG5vZGVzXG4gICAgICovXG4gICAgcmVhZG9ubHkgbm9kZUNvdW50OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXlUeXBlOiBUaGUgYmlsbGluZyBtZXRob2QuXG4gICAgICogUHJlcGFpZDogVGhlIHN1YnNjcmlwdGlvbiBiaWxsaW5nIG1ldGhvZCBpcyB1c2VkLlxuICAgICAqIFBvc3RwYWlkOiBUaGUgcGF5LWFzLXlvdS1nbyBiaWxsaW5nIG1ldGhvZCBpcyB1c2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBheVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHpvbmVJZDogVGhlIElEIG9mIHRoZSB6b25lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1JlbmV3UGVyaW9kOiBUaGUgYXV0by1yZW5ld2FsIHBlcmlvZC4gVW5pdDogbW9udGguXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgaXMgMC4gVGhpcyB2YWx1ZSBpbmRpY2F0ZXMgdGhhdCBhdXRvLXJlbmV3YWwgaXNcbiAgICAgKiBkaXNhYmxlZC5cbiAgICAgKiBJZiB0aGlzIHBhcmFtZXRlciBpcyBzZXQgdG8gMiwgdGhlIGluc3RhbmNlIGlzIGF1dG9tYXRpY2FsbHkgcmVuZXdlZCBmb3IgYSB0d28tbW9udGhcbiAgICAgKiBzdWJzY3JpcHRpb24gYWZ0ZXIgdGhlIGluc3RhbmNlIGV4cGlyZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3UGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2x1c3Rlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBwZXJpb2RzXG4gICAgICogKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29sZFN0b3JhZ2VTaXplOiBUaGUgc2l6ZSBvZiBjb2xkIGRhdGEgc3RvcmFnZS5cbiAgICAgKiBJZiB0aGlzIHBhcmFtZXRlciBpcyBzZXQgdG8gMCwgY29sZCBkYXRhIHN0b3JhZ2UgaXMgZGlzYWJsZWQuXG4gICAgICogSWYgdGhpcyBwYXJhbWV0ZXIgaXMgc2V0IHRvIGEgdmFsdWUgZ3JlYXRlciB0aGFuIDAsIGNvbGQgZGF0YSBzdG9yYWdlIGlzIGVuYWJsZWQuXG4gICAgICogVGhlIHN0b3JhZ2Ugc2l6ZSByYW5nZXMgZnJvbSA4MDAgR0IgdG8gMTAwLDAwMCBHQiBhbmQgdGhlIHN0ZXAgc2l6ZSBpcyAxMCBHQi5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb2xkU3RvcmFnZVNpemU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNrU2l6ZTogVGhlIGRpc2sgc2l6ZSBvZiB0aGUgbm9kZS4gVW5pdDogR0IuXG4gICAgICogRm9yIEFwc2FyYURCIGZvciBIQmFzZSBpbiBzaW5nbGUtbm9kZSBtb2RlLCB0aGUgZGlzayBzaXplIHJhbmdlcyBmcm9tIDIwIEdCIHRvIDUwMFxuICAgICAqIEdCIGFuZCB0aGUgc3RlcCBzaXplIGlzIDEgR0IuXG4gICAgICogRm9yIEFwc2FyYURCIGZvciBIQmFzZSB0aGF0IHJ1bnMgaW4gY2x1c3RlciBtb2RlIGFuZCB1c2VzIGRpc2tzLCB0aGUgZGlzayBzaXplIHJhbmdlc1xuICAgICAqIGZyb20gNDAwIEdCIHRvIDY0LDAwMCBHQiBhbmQgdGhlIHN0ZXAgc2l6ZSBpcyA0MCBHQi5cbiAgICAgKiBGb3IgQXBzYXJhREIgZm9yIEhCYXNlIHRoYXQgcnVucyBpbiBjbHVzdGVyIG1vZGUgYW5kIHVzZXMgbG9jYWwgZGlza3MsIHRoZSBkaXNrIHNpemVcbiAgICAgKiB2YXJpZXMgYnkgaW5zdGFuY2UgdHlwZS4gVGhlIGZvbGxvd2luZyBsaXN0IHByb3ZpZGVzIHRoZSBtYXBwaW5ncyBiZXR3ZWVuIGRpc2tzIHNpemVzXG4gICAgICogYW5kIGluc3RhbmNlIHR5cGVzOlxuICAgICAqIGhiYXNlLmQxLjR4bGFyZ2UgPTQ0MDAwXG4gICAgICogaGJhc2UuZDEuNnhsYXJnZSA9NjYwMDBcbiAgICAgKiBoYmFzZS5kMS44eGxhcmdlID04ODAwMFxuICAgICAqIGhiYXNlLmkyLnhsYXJnZSA9ODk0XG4gICAgICogaGJhc2UuaTIuMnhsYXJnZSA9MTc4OFxuICAgICAqIGhiYXNlLmkyLjR4bGFyZ2UgPTM1NzZcbiAgICAgKiBoYmFzZS5pMi44eGxhcmdlID03MTUyXG4gICAgICogaGJhc2UuZDJzLjV4bGFyZ2UgPTU4NDAwXG4gICAgICogaGJhc2UuZDJzLjEweGxhcmdlID0xMDk1MDBcbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNrU2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRpc2tUeXBlOiBUaGUgdHlwZSBvZiB0aGUgZGlzay4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGNsb3VkX2VmZmljaWVuY3lcbiAgICAgKiBjbG91ZF9zc2RcbiAgICAgKiBsb2NhbF9oZGRfcHJvXG4gICAgICogbG9jYWxfc3NkX3Byb1xuICAgICAqIGNsb3VkX2Vzc2RfcGwxXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlza1R5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmNyeXB0aW9uS2V5OiBUaGUgZW5jcnlwdGVkIGtleSBJRCBpcyBlbXB0eSBpZiB0aGUgZW5jcnlwdGlvbiBpcyBub3QgZW5hYmxlZC5cbiAgICAgKiBJdCBzaG93cyB0aGF0IHRoZSBjdXJyZW50IGNsb3VkIGRpc2sgdmVyc2lvbiBpcyB1bmFibGUgdG8gY2xvc2UgYWZ0ZXIgdGhlIGVuY3J5cHRpb24gaXMgdHVybmVkIG9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuY3J5cHRpb25LZXk/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXN0ZXJJbnN0YW5jZVR5cGU6IFRoZSBpbnN0YW5jZSB0eXBlIG9mIHRoZSBtYXN0ZXIgbm9kZS4gWW91IGNhbiBjYWxsIHRoZSBEZXNjcmliZUF2YWlsYWJsZVJlc291cmNlIG9wZXJhdGlvbiB0byBvYnRhaW4gdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3Rlckluc3RhbmNlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZDogVGhlIHN1YnNjcmlwdGlvbiBwZXJpb2QuXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgb25seSB0YWtlcyBlZmZlY3Qgd2hlbiB0aGUgUGF5VHlwZSBwYXJhbWV0ZXIgaXMgc2V0IHRvIFByZXBhaWQuXG4gICAgICogV2hlbiB0aGUgUGVyaW9kVW5pdCBwYXJhbWV0ZXIgaXMgc2V0IHRvIHllYXIsIHRoZSB2YWx1ZSBvZiB0aGUgUGVyaW9kIHBhcmFtZXRlciByYW5nZXNcbiAgICAgKiBmcm9tIDEgdG8gNS5cbiAgICAgKiBXaGVuIHRoZSBQZXJpb2RVbml0IHBhcmFtZXRlciBpcyBzZXQgdG8gbW9udGgsIHRoZSB2YWx1ZSBvZiB0aGUgUGVyaW9kIHBhcmFtZXRlciByYW5nZXNcbiAgICAgKiBmcm9tIDEgdG8gOS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2RVbml0OiBUaGUgdW5pdCBvZiB0aGUgc3Vic2NyaXB0aW9uIHBlcmlvZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHllYXJcbiAgICAgKiBtb250aFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZFVuaXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuIFlvdSBjYW4gcXVlcnkgdGhlIGdyb3VwIElEIGluIHRoZSByZXNvdXJjZSBncm91cCBjb25zb2xlLlxuICAgICAqIElmIHlvdSBsZWF2ZSB0aGlzIHBhcmFtZXRlciBlbXB0eSwgdGhlIGluc3RhbmNlIGlzIGFsbG9jYXRlZCB0byB0aGUgZGVmYXVsdCByZXNvdXJjZVxuICAgICAqIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5SXBMaXN0OiBUaGUgSVAgYWRkcmVzc2VzIGluIHRoZSB3aGl0ZWxpc3QuIEV4YW1wbGU6IDE5Mi4xNjguKi4qXFwvMjQuIFRoZSAwLjAuMC4wXFwvMCB2YWx1ZSBjYW5ub3RcbiAgICAgKiBiZSBhZGRlZCB0byB0aGUgd2hpdGVsaXN0LiBTZXBhcmF0ZSBtdWx0aXBsZSBJUCBhZGRyZXNzZXMgd2l0aCBjb21tYXMgKCwpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5SXBMaXN0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBJRCBvZiB0aGUgdmlydHVhbCBwcml2YXRlIGNsb3VkIChWUEMpLiBJZiB5b3UgbGVhdmUgdGhpcyBwYXJhbWV0ZXIgYW5kIHRoZSBWU3dpdGNoSWRcbiAgICAgKiBwYXJhbWV0ZXIgZW1wdHksIHRoZSBjbGFzc2ljIG5ldHdvcmsgdHlwZSBpcyB1c2VkLiBUaGUgVlBDIG5ldHdvcmsgdHlwZSBpcyBwcmVmZXJyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSBJRCBvZiB0aGUgdlN3aXRjaC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkhCYXNlOjpDbHVzdGVyYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gQXBzYXJhREIgZm9yIEhCYXNlIGNsdXN0ZXIuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NDbHVzdGVyYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4taGJhc2UtY2x1c3RlclxuICovXG5leHBvcnQgY2xhc3MgQ2x1c3RlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogQ2x1c3RlclByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZXJ2aWNlQ29ubkFkZHJzOiBMSVNUIG9mIFNlcnZpY2VDb25uQWRkci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VDb25uQWRkcnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTbGJDb25uQWRkcnM6IExJU1Qgb2YgU2xiQ29ubkFkZHIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTbGJDb25uQWRkcnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUaHJpZnRDb25uOiBUaHJpZnQgQ29ubmVjdGlvbiBhZGRyZXNzIGxpc3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUaHJpZnRDb25uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVWlQcm94eUNvbm5BZGRySW5mbzogV2ViVUkgY29ubmVjdGlvbiBpbmZvcm1hdGlvbiBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVWlQcm94eUNvbm5BZGRySW5mbzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFprQ29ubkFkZHJzOiBMaXN0IG9mIFprQ29ubkFkZHIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJaa0Nvbm5BZGRyczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENsdXN0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0NsdXN0ZXIgPSBuZXcgUm9zQ2x1c3Rlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGF1dG9SZW5ld1BlcmlvZDogcHJvcHMuYXV0b1JlbmV3UGVyaW9kLFxuICAgICAgICAgICAgY29sZFN0b3JhZ2VTaXplOiBwcm9wcy5jb2xkU3RvcmFnZVNpemUsXG4gICAgICAgICAgICBlbmdpbmVWZXJzaW9uOiBwcm9wcy5lbmdpbmVWZXJzaW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBub2RlQ291bnQ6IHByb3BzLm5vZGVDb3VudCxcbiAgICAgICAgICAgIHpvbmVJZDogcHJvcHMuem9uZUlkLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIGVuY3J5cHRpb25LZXk6IHByb3BzLmVuY3J5cHRpb25LZXksXG4gICAgICAgICAgICBwYXlUeXBlOiBwcm9wcy5wYXlUeXBlLFxuICAgICAgICAgICAgbWFzdGVySW5zdGFuY2VUeXBlOiBwcm9wcy5tYXN0ZXJJbnN0YW5jZVR5cGUsXG4gICAgICAgICAgICBkaXNrVHlwZTogcHJvcHMuZGlza1R5cGUsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBzZWN1cml0eUlwTGlzdDogcHJvcHMuc2VjdXJpdHlJcExpc3QsXG4gICAgICAgICAgICBjb3JlSW5zdGFuY2VUeXBlOiBwcm9wcy5jb3JlSW5zdGFuY2VUeXBlLFxuICAgICAgICAgICAgZGlza1NpemU6IHByb3BzLmRpc2tTaXplLFxuICAgICAgICAgICAgY2x1c3Rlck5hbWU6IHByb3BzLmNsdXN0ZXJOYW1lLFxuICAgICAgICAgICAgZW5naW5lOiBwcm9wcy5lbmdpbmUsXG4gICAgICAgICAgICBwZXJpb2RVbml0OiBwcm9wcy5wZXJpb2RVbml0LFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0NsdXN0ZXI7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJJZCA9IHJvc0NsdXN0ZXIuYXR0ckNsdXN0ZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZUNvbm5BZGRycyA9IHJvc0NsdXN0ZXIuYXR0clNlcnZpY2VDb25uQWRkcnM7XG4gICAgICAgIHRoaXMuYXR0clNsYkNvbm5BZGRycyA9IHJvc0NsdXN0ZXIuYXR0clNsYkNvbm5BZGRycztcbiAgICAgICAgdGhpcy5hdHRyVGhyaWZ0Q29ubiA9IHJvc0NsdXN0ZXIuYXR0clRocmlmdENvbm47XG4gICAgICAgIHRoaXMuYXR0clVpUHJveHlDb25uQWRkckluZm8gPSByb3NDbHVzdGVyLmF0dHJVaVByb3h5Q29ubkFkZHJJbmZvO1xuICAgICAgICB0aGlzLmF0dHJaa0Nvbm5BZGRycyA9IHJvc0NsdXN0ZXIuYXR0clprQ29ubkFkZHJzO1xuICAgIH1cbn1cbiJdfQ==