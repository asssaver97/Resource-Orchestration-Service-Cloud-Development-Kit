"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const bastionhost_generated_1 = require("./bastionhost.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return bastionhost_generated_1.RosInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::BastionHost::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
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
        const rosInstance = new bastionhost_generated_1.RosInstance(this, id, {
            extraBandwidth: props.extraBandwidth,
            resourceGroupId: props.resourceGroupId,
            version: props.version,
            extendedStoragePlans: props.extendedStoragePlans,
            autoRenew: props.autoRenew,
            period: props.period,
            autoPay: props.autoPay === undefined || props.autoPay === null ? false : props.autoPay,
            plan: props.plan,
            startInstanceParam: props.startInstanceParam,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrInstanceId = rosInstance.attrInstanceId;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbUVBQXNEO0FBRTlCLGlHQUZmLG1DQUFXLE9BRW9CO0FBMEV4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXdEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBb0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUMvRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sV0FBVyxHQUFHLElBQUksbUNBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDdEYsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQy9CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUNyRCxDQUFDO0NBQ0o7QUF0Q0QsNEJBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW5zdGFuY2UgfSBmcm9tICcuL2Jhc3Rpb25ob3N0LmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0luc3RhbmNlIGFzIEluc3RhbmNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBJbnN0YW5jZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1iYXN0aW9uaG9zdC1pbnN0YW5jZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluc3RhbmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZXh0ZW5kZWRTdG9yYWdlUGxhbnM6IElmIHRoZSBkZWZhdWx0IHN0b3JhZ2UgY2FwYWNpdHkgaXMgaW5zdWZmaWNpZW50LCB5b3UgY2FuIHB1cmNoYXNlIGV4dGVuZGVkIHN0b3JhZ2UgcGxhbnMuVW5pdDogVEJcbiAgICAgKi9cbiAgICByZWFkb25seSBleHRlbmRlZFN0b3JhZ2VQbGFuczogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZXh0cmFCYW5kd2lkdGg6IEFkZGl0aW9uYWwgYmFuZHdpZHRoIGlzIGFkZGVkIHRvIHRoZSBkZWZhdWx0IHNldHRpbmdzIHRvIGVuc3VyZSBlZmZpY2llbnQgTyZNLlVuaXQ6IE1icHNcbiAgICAgKi9cbiAgICByZWFkb25seSBleHRyYUJhbmR3aWR0aDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGxhbjogVGhlIG51bWJlciBvZiBhc3NldCBhdXRob3JpemF0aW9uIGFuZCBjb25jdXJyZW5jeSBsaW1pdC5Vbml0OiBBc3NldCBudW1iZXJcbiAgICAgKi9cbiAgICByZWFkb25seSBwbGFuOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzdGFydEluc3RhbmNlUGFyYW06IFBhcmFtZXRlcnMgcmVxdWlyZWQgdG8gc3RhcnQgYSBiYXN0aW9uIGhvc3QgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RhcnRJbnN0YW5jZVBhcmFtOiBSb3NJbnN0YW5jZS5TdGFydEluc3RhbmNlUGFyYW1Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZlcnNpb246IEVudGVycHJpc2UgdmVyc2lvbjotIERlcGxveW1lbnQgaW5zdHJ1Y3Rpb25zOiBkdWFsLWVuZ2luZSBhcmNoaXRlY3R1cmUsIHN1cHBvcnRzIG11bHRpcGxlIGF2YWlsYWJpbGl0eSB6b25lcywgYW5kIGVuc3VyZXMgaGlnaCBzdGFiaWxpdHlcbiAgICAgKiAtIE9wZXJhdGlvbiBhbmQgbWFpbnRlbmFuY2Ugc2NlbmFyaW9zOiB1bmlmaWVkIG9wZXJhdGlvbiBhbmQgbWFpbnRlbmFuY2Ugb2YgYXNzZXRzIG9uIEFsaWJhYmEgQ2xvdWQsIG9mZmxpbmUgSURDIHNlcnZlcnMsIGFuZCB0aGlyZC1wYXJ0eSBjbG91ZHNcbiAgICAgKiAtIEFzc2V0IHR5cGU6IExpbnV4XFwvV2luZG93cywgZGF0YWJhc2UgYXNzZXRzXG4gICAgICogLSBVc2VyIG1hbmFnZW1lbnQ6IFJBTSwgQURcXC9MREFQIGFuZCBsb2NhbCB1c2Vyc1xuICAgICAqIC0gQ29udHJvbCBzdHJhdGVneTogZmluZS1ncmFpbmVkIHN0cmF0ZWdpYyBjb250cm9sIHN1Y2ggYXMgb3BlcmF0aW9uIGFuZCBtYWludGVuYW5jZSBhcHByb3ZhbCwgaGlnaC1yaXNrIGNvbW1hbmQgYmxvY2tpbmcsIGV0Yy5cbiAgICAgKiAtIE9wZXJhdGlvbiBhbmQgbWFpbnRlbmFuY2UgYXVkaXQ6IGZ1bGwgdHJhY2VhYmlsaXR5IG9mIG9wZXJhdGlvbiBhbmQgbWFpbnRlbmFuY2UgbG9nIGF1ZGl0IGFuZCB2aWRlbyBhdWRpdFxuICAgICAqIFZhbHVlLWFkZGVkIGNhcGFiaWxpdGllczogYXV0b21hdGljIHBhc3N3b3JkIGNoYW5nZSBvZiBMaW51eCBhc3NldHMsIGRhdGFiYXNlIG9wZXJhdGlvbiBhbmQgbWFpbnRlbmFuY2UgbWFuYWdlbWVudCBhbmQgY29udHJvbCwgY29udmVuaWVudCBvcGVyYXRpb24gYW5kIG1haW50ZW5hbmNlIG9mIFdlYiBhbmQgY2xpZW50LCBuZXR3b3JrIGRvbWFpbiBhZ2VudCBoeWJyaWQgY2xvdWQgc2NlbmFyaW8gb3BlcmF0aW9uIGFuZCBtYWludGVuYW5jZSBtb2RlLCBldGMuQmFzaWMgdmVyc2lvbjotIERlcGxveW1lbnQgaW5zdHJ1Y3Rpb25zOiBUaGUgYmFzaWMgdmVyc2lvbiBpcyBkZXBsb3llZCBvbiBhIHNpbmdsZSBtYWNoaW5lIGFuZCBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGxlIGF2YWlsYWJpbGl0eSB6b25lcy5cbiAgICAgKiAtIE9wZXJhdGlvbiBhbmQgbWFpbnRlbmFuY2Ugc2NlbmFyaW9zOiB1bmlmaWVkIG9wZXJhdGlvbiBhbmQgbWFpbnRlbmFuY2Ugb2YgYXNzZXRzIG9uIEFsaWJhYmEgQ2xvdWQsIG9mZmxpbmUgSURDIHNlcnZlcnMsIGFuZCB0aGlyZC1wYXJ0eSBjbG91ZHNcbiAgICAgKiAtIEFzc2V0IHR5cGU6IExpbnV4XFwvV2luZG93cyBhc3NldHNcbiAgICAgKiAtIFVzZXIgbWFuYWdlbWVudDogUkFNLCBBRFxcL0xEQVAgYW5kIGxvY2FsIHVzZXJzXG4gICAgICogLSBDb250cm9sIHN0cmF0ZWd5OiBPcGVyYXRpb24gYW5kIG1haW50ZW5hbmNlIGFwcHJvdmFsLCBoaWdoLXJpc2sgY29tbWFuZCBibG9ja2luZyBhbmQgb3RoZXIgc3RyYXRlZ2ljIG1hbmFnZW1lbnQgYW5kIGNvbnRyb2xcbiAgICAgKiAtIE9wZXJhdGlvbiBhbmQgbWFpbnRlbmFuY2UgYXVkaXQ6IGZ1bGwgdHJhY2VhYmlsaXR5IG9mIG9wZXJhdGlvbiBhbmQgbWFpbnRlbmFuY2UgbG9nIGF1ZGl0IGFuZCB2aWRlbyBhdWRpdFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9QYXk6IFdoZXRoZXIgdG8gYXV0byBwYXkgdGhlIGJpbGwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1BheT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXc6IFdoZXRoZXIgdG8gYXV0byByZW5ldyB0aGUgcHJlcGF5IGluc3RhbmNlLiBUaGUgYXV0by1yZW5ld2FsIHBlcmlvZCBpcyBNb250aGx5LkFmdGVyIHlvdSBlbmFibGUgYXV0by1yZW5ld2FsLCB0aGUgc3lzdGVtIGRlZHVjdHMgdGhlIHJlbmV3YWwgZmVlIG5pbmUgZGF5cyBiZWZvcmUgdGhlIHJlc291cmNlIGV4cGlyZXMuSWYgdGhlIHBheW1lbnQgZmFpbHMsIHRoZSBzeXN0ZW0gZG9lcyBub3Qgc3RvcCBkZWR1Y3RpbmcgdGhlIGZlZSB1bnRpbCB0aGUgZGVkdWN0aW9uIGlzIHN1Y2Nlc3NmdWwgb3Igb25lIGRheSBiZWZvcmUgdGhlIHJlc291cmNlIGV4cGlyZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZDogVGhlIHN1YnNjcmlwdGlvbiBwZXJpb2Qgb2YgdGhlIGJhc3Rpb25ob3N0IGluc3RhbmNlSWYgUGVyaW9kVW5pdCBpcyBtb250aCwgdGhlIHZhbGlkIHJhbmdlIGlzIDEsIDMsIDZcbiAgICAgKiBJZiBwZXJpb2RVbml0IGlzIHllYXIsIHRoZSB2YWxpZCByYW5nZSBpcyAxLCAyLCAzXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kVW5pdDogVGhlIHVuaXQgb2YgdGhlIHN1YnNjcmlwdGlvbiBkdXJhdGlvbi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIE1vbnRoXG4gICAgICogWWVhclxuICAgICAqIERlZmF1bHQgdmFsdWU6IE1vbnRoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZFVuaXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6QmFzdGlvbkhvc3Q6Okluc3RhbmNlYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0luc3RhbmNlYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYmFzdGlvbmhvc3QtaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBJbnN0YW5jZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZUlkOiBJbnN0YW5jZSBJZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJbnN0YW5jZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zSW5zdGFuY2UgPSBuZXcgUm9zSW5zdGFuY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBleHRyYUJhbmR3aWR0aDogcHJvcHMuZXh0cmFCYW5kd2lkdGgsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHZlcnNpb246IHByb3BzLnZlcnNpb24sXG4gICAgICAgICAgICBleHRlbmRlZFN0b3JhZ2VQbGFuczogcHJvcHMuZXh0ZW5kZWRTdG9yYWdlUGxhbnMsXG4gICAgICAgICAgICBhdXRvUmVuZXc6IHByb3BzLmF1dG9SZW5ldyxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kLFxuICAgICAgICAgICAgYXV0b1BheTogcHJvcHMuYXV0b1BheSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmF1dG9QYXkgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLmF1dG9QYXksXG4gICAgICAgICAgICBwbGFuOiBwcm9wcy5wbGFuLFxuICAgICAgICAgICAgc3RhcnRJbnN0YW5jZVBhcmFtOiBwcm9wcy5zdGFydEluc3RhbmNlUGFyYW0sXG4gICAgICAgICAgICBwZXJpb2RVbml0OiBwcm9wcy5wZXJpb2RVbml0LFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0luc3RhbmNlO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlSWQ7XG4gICAgfVxufVxuIl19