"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cloudfw_generated_1 = require("./cloudfw.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return cloudfw_generated_1.RosInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CLOUDFW::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
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
        const rosInstance = new cloudfw_generated_1.RosInstance(this, id, {
            ignoreExisting: props.ignoreExisting === undefined || props.ignoreExisting === null ? false : props.ignoreExisting,
            vpcBandwidth: props.vpcBandwidth,
            aclExtension: props.aclExtension,
            natFirewallNum: props.natFirewallNum,
            natBandwidth: props.natBandwidth,
            ipNum: props.ipNum,
            autoRenew: props.autoRenew,
            period: props.period,
            payType: props.payType,
            autoPay: props.autoPay === undefined || props.autoPay === null ? false : props.autoPay,
            logStorage: props.logStorage,
            logAnalysis: props.logAnalysis,
            vpcFirewallNum: props.vpcFirewallNum,
            accountNum: props.accountNum,
            multiAccountManagement: props.multiAccountManagement === undefined || props.multiAccountManagement === null ? false : props.multiAccountManagement,
            bandwidth: props.bandwidth,
            spec: props.spec,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrInstanceId = rosInstance.attrInstanceId;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsMkRBQWtEO0FBRTFCLGlHQUZmLCtCQUFXLE9BRW9CO0FBNEd4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXdEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBb0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUMvRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sV0FBVyxHQUFHLElBQUksK0JBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYztZQUNsSCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTztZQUN0RixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBc0I7WUFDbEosU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDO0lBQ3JELENBQUM7Q0FDSjtBQTlDRCw0QkE4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NJbnN0YW5jZSB9IGZyb20gJy4vY2xvdWRmdy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NJbnN0YW5jZSBhcyBJbnN0YW5jZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgSW5zdGFuY2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRmdy1pbnN0YW5jZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluc3RhbmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGF5VHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kIG9mIHRoZSBmaXJld2FsbCBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFBheUFzWW91R286IHBheS1hcy15b3UtZ29cbiAgICAgKiBTdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBheVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjY291bnROdW06IFRoZSBudW1iZXIgb2YgbXVsdGktYWNjb3VudCBtYW5hZ2VtZW50IGFuZCBjb250cm9sIGlzIHRoZSBudW1iZXIgb2YgbWVtYmVyIGFjY291bnRzIHRoYXQgeW91IG5lZWQgdG8gdW5pZm9ybWx5IGNvbnRyb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjb3VudE51bT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjbEV4dGVuc2lvbjogV2hlbiB0aGUgZGVmYXVsdCBhY2Nlc3MgY29udHJvbCBhdXRob3JpemF0aW9uIHNwZWNpZmljYXRpb25zIG9mIHlvdXIgdmVyc2lvbiBhcmUgbm90IGVub3VnaCwgeW91IGNhbiBwdXJjaGFzZSBnbG9iYWwgZXh0ZW5zaW9uIHNwZWNpZmljYXRpb25zIG9mIGFjY2VzcyBjb250cm9sLiBUaGlzIGV4dGVuc2lvbiBzdXBwb3J0cyBzaGFyZWQgb2NjdXBhbmN5IHdpdGggSW50ZXJuZXQgYW5kIFZQQyBib3VuZGFyeSBBQ0wgc3BlY2lmaWNhdGlvbnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNsRXh0ZW5zaW9uPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1BheTogV2hldGhlciB0byBhdXRvIHBheSB0aGUgYmlsbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUGF5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9SZW5ldzogV2hldGhlciB0byBhdXRvIHJlbmV3IHRoZSBwcmVwYXkgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJhbmR3aWR0aDogUHVibGljIG5ldHdvcmsgcHJvY2Vzc2luZyBjYXBhYmlsaXR5LiBWYWxpZCB2YWx1ZXM6IDEwIHRvIDE1MDAwLiBVbml0OiBNYnBzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhbmR3aWR0aD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlnbm9yZUV4aXN0aW5nOiBXaGV0aGVyIHRvIGlnbm9yZSBleGlzdGluZyBjbG91ZCBmaXJld2FsbCBpbnN0YW5jZVxuICAgICAqIEZhbHNlOiBST1Mgd2lsbCBwZXJmb3JtIGEgdW5pcXVlbmVzcyBjaGVjay5JZiB0aGUgY2xvdWQgZmlyZXdhbGwgaW5zdGFuY2UgZXhpc3RzLCBhbiBlcnJvciB3aWxsIGJlIHJlcG9ydGVkIHdoZW4gY3JlYXRpbmcgaXQuXG4gICAgICogVHJ1ZTogUk9TIHdpbGwgbm90IGNoZWNrIHRoZSB1bmlxdWVuZXNzLklmIHRoZSBjbG91ZCBmaXJld2FsbCBpbnN0YW5jZSBleGlzdHMsIHRoZSBjcmVhdGlvbiBwcm9jZXNzIHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKiBJZiB0aGUgY2xvdWQgZmlyZXdhbGwgaW5zdGFuY2UgaXMgbm90IGNyZWF0ZWQgYnkgUk9TLCBpdCB3aWxsIGJlIGlnbm9yZWQgZHVyaW5nIHVwZGF0ZSBhbmQgZGVsZXRlIHN0YWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlnbm9yZUV4aXN0aW5nPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlwTnVtOiBUaGUgbnVtYmVyIG9mIHB1YmxpYyBJUHMgdGhhdCBjYW4gYmUgcHJvdGVjdGVkLiBWYWxpZCB2YWx1ZXM6IDIwIHRvIDQwMDAuUHJlbWl1bVZlcnNpb246IFsyMCwgMTAwMF1cbiAgICAgKi9cbiAgICByZWFkb25seSBpcE51bT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvZ0FuYWx5c2lzOiBUaGUgY2xvdWQgZmlyZXdhbGwgaW5jbHVkZXMgNyBkYXlzIG9mIGZyZWUgbG9nIHN0b3JhZ2UgYW5kIGF1ZGl0aW5nIGJ5IGRlZmF1bHQuIElmIHlvdSBuZWVkIGxvbmdlciBzdG9yYWdlIHRpbWUgb3IgbWVldCB0aGUgcmVxdWlyZW1lbnRzIGZvciBlcXVhbCBwcm90ZWN0aW9uLCBpdCBpcyByZWNvbW1lbmRlZCB0byBwdXJjaGFzZSB0aGUgbG9nIGFuYWx5c2lzIHNlcnZpY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9nQW5hbHlzaXM/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9nU3RvcmFnZTogUmVmZXJlbmNlIGZvciBwdXJjaGFzaW5nIHN0b3JhZ2UgY2FwYWNpdHk6IDEwTSBwdWJsaWMgbmV0d29yayBiYW5kd2lkdGgsIDYgbW9udGhzIG9mIGxvZyBzdG9yYWdlLCByZWNvbW1lbmRlZCBwdXJjaGFzZSBvZiAxMDAwR0IgbG9nIHN0b3JhZ2UgY2FwYWNpdHlcbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dTdG9yYWdlPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbXVsdGlBY2NvdW50TWFuYWdlbWVudDogTXVsdGlwbGUgYWNjb3VudHMgb24gdGhlIGVudGVycHJpc2UgY2xvdWQgY2FuIGJlIG1hbmFnZWQgY2VudHJhbGx5IG9uIHRoZSBjbG91ZCBmaXJld2FsbCwgaW5jbHVkaW5nIGFzc2V0IGludmVudG9yeSwgQUNMIHBvbGljaWVzLCBhdHRhY2sgcHJvdGVjdGlvbiwgbG9nIHJlcG9ydHMsIGV0Yy4gQWZ0ZXIgdGhlIG1lbWJlciBhY2NvdW50IGlzIG1hbmFnZWQgYnkgdGhlIGN1cnJlbnQgYWNjb3VudCwgdGhlcmUgd2lsbCBiZSBubyBuZWVkIHRvIHB1cmNoYXNlIGl0IHNlcGFyYXRlbHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbXVsdGlBY2NvdW50TWFuYWdlbWVudD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYXRCYW5kd2lkdGg6IFRoZSBiYW5kd2lkdGggb2YgcHJpdmF0ZSBuZXR3b3JrIHRyYWZmaWMgcHJvY2Vzc2VkIGJ5IHRoZSBOQVQgZmlyZXdhbGwuIFRoZSBwcmVtaXVtIHZlcnNpb24gZG9lcyBub3QgaW5jbHVkZSBpdCBieSBkZWZhdWx0LCB0aGUgZW50ZXJwcmlzZSB2ZXJzaW9uIGhhcyAxME1icHMgYnkgZGVmYXVsdCwgYW5kIHRoZSB1bHRpbWF0ZSB2ZXJzaW9uIGhhcyAyME1icHMgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYXRCYW5kd2lkdGg/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYXRGaXJld2FsbE51bTogVGhlIG51bWJlciBvZiBOQVQgZ2F0ZXdheSBpbnN0YW5jZXMgb2YgdGhlIE5BVCBmaXJld2FsbCB5b3UgbmVlZCB0byBlbmFibGUuIEVhY2ggTkFUIGdhdGV3YXkgaW5zdGFuY2UgY29ycmVzcG9uZHMgdG8gb25lIE5BVCBmaXJld2FsbCBpbnN0YW5jZS4gVGhlIHByZW1pdW0gdmVyc2lvbiBkb2VzIG5vdCBpbmNsdWRlIGl0IGJ5IGRlZmF1bHQsIHRoZSBlbnRlcnByaXNlIHZlcnNpb24gY29tZXMgd2l0aCAxIHNwZWNpZmljYXRpb24gYnkgZGVmYXVsdCxhbmQgdGhlIHVsdGltYXRlIHZlcnNpb24gY29tZXMgd2l0aCAyIHNwZWNpZmljYXRpb25zIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmF0RmlyZXdhbGxOdW0/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSBzdWJzY3JpcHRpb24gcGVyaW9kIG9mIHRoZSBmaXJld2FsbElmIFBlcmlvZFVuaXQgaXMgbW9udGgsIHRoZSB2YWxpZCByYW5nZSBpcyAxLCAzLCA2XG4gICAgICogSWYgcGVyaW9kVW5pdCBpcyB5ZWFyLCB0aGUgdmFsaWQgcmFuZ2UgaXMgMSwgMiwgM1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZFVuaXQ6IFRoZSB1bml0IG9mIHRoZSBzdWJzY3JpcHRpb24gZHVyYXRpb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiBNb250aFxuICAgICAqIFllYXJcbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBNb250aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2RVbml0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BlYzogVGhlIHZlcnNpb24gb2YgQ2xvdWQgRmlyZXdhbGwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BlYz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0JhbmR3aWR0aDogVlBDIG5ldHdvcmsgcHJvY2Vzc2luZyBjYXBhYmlsaXR5LiBWYWxpZCB2YWx1ZXM6IDEwMDAgdG8gMTUwMDAuIFVuaXQ6IE1icHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjQmFuZHdpZHRoPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjRmlyZXdhbGxOdW06IFRoZSBudW1iZXIgb2YgcHJvdGVjdGVkIFZQQ3MuIEl0IHdpbGwgYmUgaWdub3JlZCB3aGVuIHNwZWMgPSBcInByZW1pdW1fdmVyc2lvblwiLiBWYWxpZCB2YWx1ZXMgYmV0d2VlbiAyIGFuZCA1MDAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjRmlyZXdhbGxOdW0/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNMT1VERlc6Okluc3RhbmNlYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0luc3RhbmNlYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRmdy1pbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEluc3RhbmNlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWQ6IEluc3RhbmNlIElkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEluc3RhbmNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NJbnN0YW5jZSA9IG5ldyBSb3NJbnN0YW5jZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGlnbm9yZUV4aXN0aW5nOiBwcm9wcy5pZ25vcmVFeGlzdGluZyA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmlnbm9yZUV4aXN0aW5nID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5pZ25vcmVFeGlzdGluZyxcbiAgICAgICAgICAgIHZwY0JhbmR3aWR0aDogcHJvcHMudnBjQmFuZHdpZHRoLFxuICAgICAgICAgICAgYWNsRXh0ZW5zaW9uOiBwcm9wcy5hY2xFeHRlbnNpb24sXG4gICAgICAgICAgICBuYXRGaXJld2FsbE51bTogcHJvcHMubmF0RmlyZXdhbGxOdW0sXG4gICAgICAgICAgICBuYXRCYW5kd2lkdGg6IHByb3BzLm5hdEJhbmR3aWR0aCxcbiAgICAgICAgICAgIGlwTnVtOiBwcm9wcy5pcE51bSxcbiAgICAgICAgICAgIGF1dG9SZW5ldzogcHJvcHMuYXV0b1JlbmV3LFxuICAgICAgICAgICAgcGVyaW9kOiBwcm9wcy5wZXJpb2QsXG4gICAgICAgICAgICBwYXlUeXBlOiBwcm9wcy5wYXlUeXBlLFxuICAgICAgICAgICAgYXV0b1BheTogcHJvcHMuYXV0b1BheSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmF1dG9QYXkgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLmF1dG9QYXksXG4gICAgICAgICAgICBsb2dTdG9yYWdlOiBwcm9wcy5sb2dTdG9yYWdlLFxuICAgICAgICAgICAgbG9nQW5hbHlzaXM6IHByb3BzLmxvZ0FuYWx5c2lzLFxuICAgICAgICAgICAgdnBjRmlyZXdhbGxOdW06IHByb3BzLnZwY0ZpcmV3YWxsTnVtLFxuICAgICAgICAgICAgYWNjb3VudE51bTogcHJvcHMuYWNjb3VudE51bSxcbiAgICAgICAgICAgIG11bHRpQWNjb3VudE1hbmFnZW1lbnQ6IHByb3BzLm11bHRpQWNjb3VudE1hbmFnZW1lbnQgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5tdWx0aUFjY291bnRNYW5hZ2VtZW50ID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5tdWx0aUFjY291bnRNYW5hZ2VtZW50LFxuICAgICAgICAgICAgYmFuZHdpZHRoOiBwcm9wcy5iYW5kd2lkdGgsXG4gICAgICAgICAgICBzcGVjOiBwcm9wcy5zcGVjLFxuICAgICAgICAgICAgcGVyaW9kVW5pdDogcHJvcHMucGVyaW9kVW5pdCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0luc3RhbmNlLmF0dHJJbnN0YW5jZUlkO1xuICAgIH1cbn1cbiJdfQ==