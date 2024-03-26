"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const lindorm_generated_1 = require("./lindorm.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return lindorm_generated_1.RosInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Lindorm::Instance`, which is used to create a Lindorm instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-instance
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
        const rosInstance = new lindorm_generated_1.RosInstance(this, id, {
            streamSpec: props.streamSpec,
            instanceStorage: props.instanceStorage,
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'POSTPAY' : props.instanceChargeType,
            streamNum: props.streamNum,
            coldStorage: props.coldStorage,
            vSwitchId: props.vSwitchId,
            diskCategory: props.diskCategory,
            period: props.period,
            instanceName: props.instanceName,
            solrNum: props.solrNum,
            solrSpec: props.solrSpec,
            filestoreNum: props.filestoreNum,
            vpcId: props.vpcId,
            securityIpList: props.securityIpList,
            lindormSpec: props.lindormSpec,
            tsdbSpec: props.tsdbSpec,
            coreSpec: props.coreSpec,
            lindormNum: props.lindormNum,
            filestoreSpec: props.filestoreSpec,
            tsdbNum: props.tsdbNum,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrAuthInfos = rosInstance.attrAuthInfos;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrJdbcUrlList = rosInstance.attrJdbcUrlList;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsMkRBQWtEO0FBRTFCLGlHQUZmLCtCQUFXLE9BRW9CO0FBa0x4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFxQnRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFdBQVcsR0FBRyxJQUFJLCtCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7WUFDdEksU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7SUFDdkQsQ0FBQztDQUNKO0FBL0RELDRCQStEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0luc3RhbmNlIH0gZnJvbSAnLi9saW5kb3JtLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0luc3RhbmNlIGFzIEluc3RhbmNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBJbnN0YW5jZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1saW5kb3JtLWluc3RhbmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNrQ2F0ZWdvcnk6IFRoZSBzdG9yYWdlIHR5cGUgb2YgdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogY2xvdWRfZWZmaWNpZW5jeTogVGhpcyBpbnN0YW5jZSB1c2VzIHRoZSBTdGFuZGFyZCB0eXBlIG9mIHN0b3JhZ2UuXG4gICAgICogY2xvdWRfc3NkOiBUaGlzIGluc3RhbmNlIHVzZXMgdGhlIFBlcmZvcm1hbmNlIHR5cGUgb2Ygc3RvcmFnZS5cbiAgICAgKiBjYXBhY2l0eV9jbG91ZF9zdG9yYWdlOiBUaGlzIGluc3RhbmNlIHVzZXMgdGhlIENhcGFjaXR5IHR5cGUgb2Ygc3RvcmFnZS5cbiAgICAgKiBsb2NhbF9zc2RfcHJvOiBUaGlzIGluc3RhbmNlIHVzZXMgbG9jYWwgU1NEcy5cbiAgICAgKiBsb2NhbF9oZGRfcHJvOiBUaGlzIGluc3RhbmNlIHVzZXMgbG9jYWwgSEREcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNrQ2F0ZWdvcnk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGluc3RhbmNlIHRoYXQgeW91IHdhbnQgdG8gY3JlYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBJRCBvZiB0aGUgVlBDIGluIHdoaWNoIHlvdSB3YW50IHRvIGNyZWF0ZSB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbGRTdG9yYWdlOiBUaGUgY29sZCBzdG9yYWdlIGNhcGFjaXR5IG9mIHRoZSBpbnN0YW5jZS4gQnkgZGVmYXVsdCwgaWYgeW91IGxlYXZlIHRoaXMgcGFyYW1ldGVyIHVuc3BlY2lmaWVkLCBjb2xkIHN0b3JhZ2UgaXMgbm90IGVuYWJsZWQgZm9yIHRoZSBpbnN0YW5jZS4gVW5pdDogR0IuIFZhbGlkIHZhbHVlczogODAwIHRvIDEwMDAwMDAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29sZFN0b3JhZ2U/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb3JlU3BlYzogVGhlIHNwZWNpZmljYXRpb24gb2YgdGhlIG5vZGVzIGluIHRoZSBpbnN0YW5jZSBpZiB5b3Ugc2V0IERpc2tDYXRlZ29yeSB0byBsb2NhbF9zc2RfcHJvIG9yIGxvY2FsX2hkZF9wcm8uXG4gICAgICogV2hlbiBEaXNrQ2F0ZWdvcnkgaXMgc2V0IHRvIGxvY2FsX3NzZF9wcm8sIHlvdSBjYW4gc2V0IHRoaXMgcGFyYW1ldGVyIHRvIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuICAgICAqIGxpbmRvcm0uaTIueGxhcmdlOiBFYWNoIG5vZGUgaGFzIDQgZGVkaWNhdGVkIENQVSBjb3JlcyBhbmQgMzIgR0Igb2YgZGVkaWNhdGVkIG1lbW9yeS5cbiAgICAgKiBsaW5kb3JtLmkyLjJ4bGFyZ2U6IEVhY2ggbm9kZSBoYXMgOCBkZWRpY2F0ZWQgQ1BVIGNvcmVzIGFuZCA2NCBHQiBvZiBkZWRpY2F0ZWQgbWVtb3J5LlxuICAgICAqIGxpbmRvcm0uaTIuNHhsYXJnZTogRWFjaCBub2RlIGhhcyAxNiBkZWRpY2F0ZWQgQ1BVIGNvcmVzIGFuZCAxMjggR0Igb2YgZGVkaWNhdGVkIG1lbW9yeS5cbiAgICAgKiBsaW5kb3JtLmkyLjh4bGFyZ2U6IEVhY2ggbm9kZSBoYXMgMzIgZGVkaWNhdGVkIENQVSBjb3JlcyBhbmQgMjU2IEdCIG9mIGRlZGljYXRlZCBtZW1vcnkuXG4gICAgICogV2hlbiBEaXNrQ2F0ZWdvcnkgaXMgc2V0IHRvIGxvY2FsX2hkZF9wcm8sIHlvdSBjYW4gc2V0IHRoaXMgcGFyYW1ldGVyIHRvIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuICAgICAqIGxpbmRvcm0uZDEuMnhsYXJnZTogRWFjaCBub2RlIGhhcyA4IGRlZGljYXRlZCBDUFUgY29yZXMgYW5kIDMyIEdCIG9mIGRlZGljYXRlZCBtZW1vcnkuXG4gICAgICogbGluZG9ybS5kMS40eGxhcmdlOiBFYWNoIG5vZGUgaGFzIDE2IGRlZGljYXRlZCBDUFUgY29yZXMgYW5kIDY0IEdCIG9mIGRlZGljYXRlZCBtZW1vcnkuXG4gICAgICogbGluZG9ybS5kMS42eGxhcmdlOiBFYWNoIG5vZGUgaGFzIDI0IGRlZGljYXRlZCBDUFUgY29yZXMgYW5kIDk2IEdCIG9mIGRlZGljYXRlZCBtZW1vcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29yZVNwZWM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBmaWxlc3RvcmVOdW06IFRoZSBudW1iZXIgb2YgTGluZG9ybURGUyBub2RlcyBpbiB0aGUgaW5zdGFuY2UuIFRoZSB2YWxpZCB2YWx1ZXMgb2YgdGhpcyBwYXJhbWV0ZXIgZGVwZW5kIG9uIHRoZSB2YWx1ZSBvZiB0aGUgUGF5VHlwZSBwYXJhbWV0ZXIuXG4gICAgICogSWYgdGhlIFBheVR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBQUkVQQVksIHNldCB0aGlzIHBhcmFtZXRlciB0byBhbiBpbnRlZ2VyIHRoYXQgcmFuZ2VzIGZyb20gMCB0byA2MC5cbiAgICAgKiBJZiB0aGUgUGF5VHlwZSBwYXJhbWV0ZXIgaXMgc2V0IHRvIFBPU1RQQVksIHNldCB0aGlzIHBhcmFtZXRlciB0byBhbiBpbnRlZ2VyIHRoYXQgcmFuZ2VzIGZyb20gMCB0byA4LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZpbGVzdG9yZU51bT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGZpbGVzdG9yZVNwZWM6IFRoZSBzcGVjaWZpY2F0aW9uIG9mIExpbmRvcm1ERlMgbm9kZXMgaW4gdGhlIGluc3RhbmNlLiBTZXQgdGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIHRvIGxpbmRvcm0uYy54bGFyZ2UsIHdoaWNoIGluZGljYXRlcyB0aGF0IGVhY2ggbm9kZSBoYXMgNCBkZWRpY2F0ZWQgQ1BVIGNvcmVzIGFuZCA4IEdCIG9mIGRlZGljYXRlZCBtZW1vcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmlsZXN0b3JlU3BlYz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlQ2hhcmdlVHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kIG9mIHRoZSBpbnN0YW5jZSB5b3Ugd2FudCB0byBjcmVhdGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBQUkVQQVk6IHN1YnNjcmlwdGlvbi5cbiAgICAgKiBQT1NUUEFZOiBwYXktYXMteW91LWdvLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IFBPU1RQQVlcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZVN0b3JhZ2U6IFRoZSBzdG9yYWdlIGNhcGFjaXR5IG9mIHRoZSBpbnN0YW5jZSB5b3Ugd2FudCB0byBjcmVhdGUuIFVuaXQ6IEdCLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlU3RvcmFnZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxpbmRvcm1OdW06IFRoZSBudW1iZXIgb2YgTGluZG9ybVRhYmxlIG5vZGVzIGluIHRoZSBpbnN0YW5jZS4gVGhlIHZhbGlkIHZhbHVlcyBvZiB0aGlzIHBhcmFtZXRlciBkZXBlbmQgb24gdGhlIHZhbHVlIG9mIHRoZSBQYXlUeXBlIHBhcmFtZXRlci5cbiAgICAgKiBJZiB0aGUgUGF5VHlwZSBwYXJhbWV0ZXIgaXMgc2V0IHRvIFBSRVBBWSwgc2V0IHRoaXMgcGFyYW1ldGVyIHRvIGFuIGludGVnZXIgdGhhdCByYW5nZXMgZnJvbSAwIHRvIDkwLlxuICAgICAqIElmIHRoZSBQYXlUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gUE9TVFBBWSwgc2V0IHRoaXMgcGFyYW1ldGVyIHRvIGFuIGludGVnZXIgdGhhdCByYW5nZXMgZnJvbSAwIHRvIDQwMC5cbiAgICAgKiAqKiBUaGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBpZiB5b3Ugd2FudCB0byBjcmVhdGUgYSBtdWx0aS16b25lIGluc3RhbmNlLiAqKiBUaGUgdmFsaWQgdmFsdWVzIG9mIHRoaXMgcGFyYW1ldGVyIHJhbmdlIGZyb20gNCB0byA0MDAgaWYgeW91IHdhbnQgdG8gY3JlYXRlIGEgbXVsdGktem9uZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsaW5kb3JtTnVtPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGluZG9ybVNwZWM6IFRoZSBzcGVjaWZpY2F0aW9uIG9mIExpbmRvcm1UYWJsZSBub2RlcyBpbiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBsaW5kb3JtLmcueGxhcmdlOiBFYWNoIG5vZGUgaGFzIDQgZGVkaWNhdGVkIENQVSBjb3JlcyBhbmQgMTYgR0Igb2YgZGVkaWNhdGVkIG1lbW9yeS5cbiAgICAgKiBsaW5kb3JtLmcuMnhsYXJnZTogRWFjaCBub2RlIGhhcyA4IGRlZGljYXRlZCBDUFUgY29yZXMgYW5kIDMyIEdCIG9mIGRlZGljYXRlZCBtZW1vcnkuXG4gICAgICogbGluZG9ybS5nLjR4bGFyZ2U6IEVhY2ggbm9kZSBoYXMgMTYgZGVkaWNhdGVkIENQVSBjb3JlcyBhbmQgNjQgR0Igb2YgZGVkaWNhdGVkIG1lbW9yeS5cbiAgICAgKiBsaW5kb3JtLmcuOHhsYXJnZTogRWFjaCBub2RlIGhhcyAzMiBkZWRpY2F0ZWQgQ1BVIGNvcmVzIGFuZCAxMjggR0Igb2YgZGVkaWNhdGVkIG1lbW9yeS5cbiAgICAgKiBsaW5kb3JtLmMueGxhcmdlOiBFYWNoIG5vZGUgaGFzIDQgZGVkaWNhdGVkIENQVSBjb3JlcyBhbmQgOCBHQiBvZiBkZWRpY2F0ZWQgbWVtb3J5LlxuICAgICAqIGxpbmRvcm0uYy4yeGxhcmdlOiBFYWNoIG5vZGUgaGFzIDggZGVkaWNhdGVkIENQVSBjb3JlcyBhbmQgMTYgR0Igb2YgZGVkaWNhdGVkIG1lbW9yeS5cbiAgICAgKiBsaW5kb3JtLmMuNHhsYXJnZTogRWFjaCBub2RlIGhhcyAxNiBkZWRpY2F0ZWQgQ1BVIGNvcmVzIGFuZCAzMiBHQiBvZiBkZWRpY2F0ZWQgbWVtb3J5LlxuICAgICAqIGxpbmRvcm0uYy44eGxhcmdlOiBFYWNoIG5vZGUgaGFzIDMyIGRlZGljYXRlZCBDUFUgY29yZXMgYW5kIDY0IEdCIG9mIGRlZGljYXRlZCBtZW1vcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGluZG9ybVNwZWM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSBzdWJzY3JpcHRpb24gcGVyaW9kIG9mIHRoZSBpbnN0YW5jZS4gVGhlIHZhbGlkIHZhbHVlcyBvZiB0aGlzIHBhcmFtZXRlciBkZXBlbmQgb24gdGhlIHZhbHVlIG9mIHRoZSBQZXJpb2RVbml0IHBhcmFtZXRlci5cbiAgICAgKiBJZiBQZXJpb2RVbml0IGlzIHNldCB0byBNb250aCwgVmFsaWQgdmFsdWVzIGFyZSAxLDIsMyw0LDUsNiw3LDgsOSwxMiwyNCwzNi5cbiAgICAgKiBJZiBQZXJpb2RVbml0IGlzIHNldCB0byBZZWFyLCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gYW4gaW50ZWdlciB0aGF0IHJhbmdlcyBmcm9tIDEgdG8gMy5cbiAgICAgKiBOb3RlVGhpcyBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIGFuZCByZXF1aXJlZCB3aGVuIHRoZSBQYXlUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gUFJFUEFZLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZFVuaXQ6IFRoZSBwZXJpb2QgYmFzZWQgb24gd2hpY2ggeW91IGFyZSBjaGFyZ2VkIGZvciB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBNb250aDogWW91IGFyZSBjaGFyZ2VkIGZvciB0aGUgaW5zdGFuY2Ugb24gYSBtb250aGx5IGJhc2lzLlxuICAgICAqIFllYXI6IFlvdSBhcmUgY2hhcmdlZCBmb3IgdGhlIGluc3RhbmNlIG9uIGEgeWVhcmx5IGJhc2lzLlxuICAgICAqIE5vdGVUaGlzIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYW5kIHJlcXVpcmVkIHdoZW4gdGhlIFBheVR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBQUkVQQVkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kVW5pdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgTGluZG9ybSBpbnN0YW5jZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5SXBMaXN0OiBUaGUgaXAgd2hpdGUgbGlzdCBvZiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUlwTGlzdD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzb2xyTnVtOiBUaGUgbnVtYmVyIG9mIExpbmRvcm1TZWFyY2ggbm9kZXMgaW4gdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6IGludGVnZXJzIGZyb20gMCB0byA2MC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb2xyTnVtPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc29sclNwZWM6IFRoZSBzcGVjaWZpY2F0aW9uIG9mIHRoZSBMaW5kb3JtU2VhcmNoIG5vZGVzIGluIHRoZSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGxpbmRvcm0uZy54bGFyZ2U6IEVhY2ggbm9kZSBoYXMgNCBkZWRpY2F0ZWQgQ1BVIGNvcmVzIGFuZCAxNiBHQiBvZiBkZWRpY2F0ZWQgbWVtb3J5LlxuICAgICAqIGxpbmRvcm0uZy4yeGxhcmdlOiBFYWNoIG5vZGUgaGFzIDggZGVkaWNhdGVkIENQVSBjb3JlcyBhbmQgMzIgR0Igb2YgZGVkaWNhdGVkIG1lbW9yeS5cbiAgICAgKiBsaW5kb3JtLmcuNHhsYXJnZTogRWFjaCBub2RlIGhhcyAxNiBkZWRpY2F0ZWQgQ1BVIGNvcmVzIGFuZCA2NCBHQiBvZiBkZWRpY2F0ZWQgbWVtb3J5LlxuICAgICAqIGxpbmRvcm0uZy44eGxhcmdlOiBFYWNoIG5vZGUgaGFzIDMyIGRlZGljYXRlZCBDUFUgY29yZXMgYW5kIDEyOCBHQiBvZiBkZWRpY2F0ZWQgbWVtb3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvbHJTcGVjPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3RyZWFtTnVtOiBUaGUgbnVtYmVyIG9mIExpbmRvcm1TdHJlYW0gbm9kZXMgaW4gdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6IGludGVnZXJzIGZyb20gMCB0byA5MC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdHJlYW1OdW0/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzdHJlYW1TcGVjOiBUaGUgc3BlY2lmaWNhdGlvbiBvZiBMaW5kb3JtU3RyZWFtIG5vZGVzIGluIHRoZSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGxpbmRvcm0uZy54bGFyZ2U6IEVhY2ggbm9kZSBoYXMgNCBkZWRpY2F0ZWQgQ1BVIGNvcmVzIGFuZCAxNiBHQiBvZiBkZWRpY2F0ZWQgbWVtb3J5LlxuICAgICAqIGxpbmRvcm0uZy4yeGxhcmdlOiBFYWNoIG5vZGUgaGFzIDggZGVkaWNhdGVkIENQVSBjb3JlcyBhbmQgMzIgR0Igb2YgZGVkaWNhdGVkIG1lbW9yeS5cbiAgICAgKiBsaW5kb3JtLmcuNHhsYXJnZTogRWFjaCBub2RlIGhhcyAxNiBkZWRpY2F0ZWQgQ1BVIGNvcmVzIGFuZCA2NCBHQiBvZiBkZWRpY2F0ZWQgbWVtb3J5LlxuICAgICAqIGxpbmRvcm0uZy44eGxhcmdlOiBFYWNoIG5vZGUgaGFzIDMyIGRlZGljYXRlZCBDUFUgY29yZXMgYW5kIDEyOCBHQiBvZiBkZWRpY2F0ZWQgbWVtb3J5LlxuICAgICAqIGxpbmRvcm0uYy54bGFyZ2U6IEVhY2ggbm9kZSBoYXMgNCBkZWRpY2F0ZWQgQ1BVIGNvcmVzIGFuZCA4IEdCIG9mIGRlZGljYXRlZCBtZW1vcnkuXG4gICAgICogbGluZG9ybS5jLjJ4bGFyZ2U6IEVhY2ggbm9kZSBoYXMgOCBkZWRpY2F0ZWQgQ1BVIGNvcmVzIGFuZCAxNiBHQiBvZiBkZWRpY2F0ZWQgbWVtb3J5LlxuICAgICAqIGxpbmRvcm0uYy40eGxhcmdlOiBFYWNoIG5vZGUgaGFzIDE2IGRlZGljYXRlZCBDUFUgY29yZXMgYW5kIDMyIEdCIG9mIGRlZGljYXRlZCBtZW1vcnkuXG4gICAgICogbGluZG9ybS5jLjh4bGFyZ2U6IEVhY2ggbm9kZSBoYXMgMzIgZGVkaWNhdGVkIENQVSBjb3JlcyBhbmQgNjQgR0Igb2YgZGVkaWNhdGVkIG1lbW9yeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdHJlYW1TcGVjPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHNkYk51bTogVGhlIG51bWJlciBvZiB0aGUgTGluZG9ybVRTREIgbm9kZXMgaW4gdGhlIGluc3RhbmNlLiBUaGUgdmFsaWQgdmFsdWVzIG9mIHRoaXMgcGFyYW1ldGVyIGRlcGVuZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFBheVR5cGUgcGFyYW1ldGVyLlxuICAgICAqIElmIHRoZSBQYXlUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gUFJFUEFZLCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gYW4gaW50ZWdlciB0aGF0IHJhbmdlcyBmcm9tIDAgdG8gMjQuXG4gICAgICogSWYgdGhlIFBheVR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBQT1NUUEFZLCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gYW4gaW50ZWdlciB0aGF0IHJhbmdlcyBmcm9tIDAgdG8gMzIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHNkYk51bT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRzZGJTcGVjOiBUaGUgc3BlY2lmaWNhdGlvbiBvZiB0aGUgTGluZG9ybVRTREIgbm9kZXMgaW4gdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogbGluZG9ybS5nLnhsYXJnZTogRWFjaCBub2RlIGhhcyA0IGRlZGljYXRlZCBDUFUgY29yZXMgYW5kIDE2IEdCIG9mIGRlZGljYXRlZCBtZW1vcnkuXG4gICAgICogbGluZG9ybS5nLjJ4bGFyZ2U6IEVhY2ggbm9kZSBoYXMgOCBkZWRpY2F0ZWQgQ1BVIGNvcmVzIGFuZCAzMiBHQiBvZiBkZWRpY2F0ZWQgbWVtb3J5LlxuICAgICAqIGxpbmRvcm0uZy40eGxhcmdlOiBFYWNoIG5vZGUgaGFzIDE2IGRlZGljYXRlZCBDUFUgY29yZXMgYW5kIDY0IEdCIG9mIGRlZGljYXRlZCBtZW1vcnkuXG4gICAgICogbGluZG9ybS5nLjh4bGFyZ2U6IEVhY2ggbm9kZSBoYXMgMzIgZGVkaWNhdGVkIENQVSBjb3JlcyBhbmQgMTI4IEdCIG9mIGRlZGljYXRlZCBtZW1vcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHNkYlNwZWM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSBJRCBvZiB0aGUgdlN3aXRjaCB0byB3aGljaCB5b3Ugd2FudCB0aGUgaW5zdGFuY2UgdG8gY29ubmVjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IFRoZSBJRCBvZiB0aGUgem9uZSBpbiB3aGljaCB5b3Ugd2FudCB0byBjcmVhdGUgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6TGluZG9ybTo6SW5zdGFuY2VgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIExpbmRvcm0gaW5zdGFuY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NJbnN0YW5jZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWxpbmRvcm0taW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBJbnN0YW5jZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBdXRoSW5mb3M6IFRoZSBsaXN0IG9mIHRoZSBMaW5kb3JtIGluc3RhbmNlIGF1dGggaW5mb3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBdXRoSW5mb3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIExpbmRvcm0gaW5zdGFuY2UgdGhhdCBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEpkYmNVcmxMaXN0OiBUaGUgbGlzdCBvZiB0aGUgamRiYyBjb25uZWN0aW9uIGFkZHJlc3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJKZGJjVXJsTGlzdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEluc3RhbmNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NJbnN0YW5jZSA9IG5ldyBSb3NJbnN0YW5jZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHN0cmVhbVNwZWM6IHByb3BzLnN0cmVhbVNwZWMsXG4gICAgICAgICAgICBpbnN0YW5jZVN0b3JhZ2U6IHByb3BzLmluc3RhbmNlU3RvcmFnZSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgem9uZUlkOiBwcm9wcy56b25lSWQsXG4gICAgICAgICAgICBpbnN0YW5jZUNoYXJnZVR5cGU6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA9PT0gbnVsbCA/ICdQT1NUUEFZJyA6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSxcbiAgICAgICAgICAgIHN0cmVhbU51bTogcHJvcHMuc3RyZWFtTnVtLFxuICAgICAgICAgICAgY29sZFN0b3JhZ2U6IHByb3BzLmNvbGRTdG9yYWdlLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBkaXNrQ2F0ZWdvcnk6IHByb3BzLmRpc2tDYXRlZ29yeSxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kLFxuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiBwcm9wcy5pbnN0YW5jZU5hbWUsXG4gICAgICAgICAgICBzb2xyTnVtOiBwcm9wcy5zb2xyTnVtLFxuICAgICAgICAgICAgc29sclNwZWM6IHByb3BzLnNvbHJTcGVjLFxuICAgICAgICAgICAgZmlsZXN0b3JlTnVtOiBwcm9wcy5maWxlc3RvcmVOdW0sXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBzZWN1cml0eUlwTGlzdDogcHJvcHMuc2VjdXJpdHlJcExpc3QsXG4gICAgICAgICAgICBsaW5kb3JtU3BlYzogcHJvcHMubGluZG9ybVNwZWMsXG4gICAgICAgICAgICB0c2RiU3BlYzogcHJvcHMudHNkYlNwZWMsXG4gICAgICAgICAgICBjb3JlU3BlYzogcHJvcHMuY29yZVNwZWMsXG4gICAgICAgICAgICBsaW5kb3JtTnVtOiBwcm9wcy5saW5kb3JtTnVtLFxuICAgICAgICAgICAgZmlsZXN0b3JlU3BlYzogcHJvcHMuZmlsZXN0b3JlU3BlYyxcbiAgICAgICAgICAgIHRzZGJOdW06IHByb3BzLnRzZGJOdW0sXG4gICAgICAgICAgICBwZXJpb2RVbml0OiBwcm9wcy5wZXJpb2RVbml0LFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0luc3RhbmNlO1xuICAgICAgICB0aGlzLmF0dHJBdXRoSW5mb3MgPSByb3NJbnN0YW5jZS5hdHRyQXV0aEluZm9zO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0ckpkYmNVcmxMaXN0ID0gcm9zSW5zdGFuY2UuYXR0ckpkYmNVcmxMaXN0O1xuICAgIH1cbn1cbiJdfQ==