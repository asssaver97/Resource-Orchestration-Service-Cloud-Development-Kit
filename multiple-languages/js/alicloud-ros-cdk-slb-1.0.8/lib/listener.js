"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = exports.ListenerProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const slb_generated_1 = require("./slb.generated");
Object.defineProperty(exports, "ListenerProperty", { enumerable: true, get: function () { return slb_generated_1.RosListener; } });
/**
 * A ROS resource type:  `ALIYUN::SLB::Listener`
 */
class Listener extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLB::Listener`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosListener = new slb_generated_1.RosListener(this, id, {
            requestTimeout: props.requestTimeout,
            vServerGroupId: props.vServerGroupId,
            listenerPort: props.listenerPort,
            description: props.description,
            caCertificateId: props.caCertificateId,
            scheduler: props.scheduler === undefined || props.scheduler === null ? 'wrr' : props.scheduler,
            aclId: props.aclId,
            healthCheck: props.healthCheck,
            idleTimeout: props.idleTimeout,
            loadBalancerId: props.loadBalancerId,
            backendServerPort: props.backendServerPort,
            persistence: props.persistence,
            portRange: props.portRange,
            aclStatus: props.aclStatus === undefined || props.aclStatus === null ? 'off' : props.aclStatus,
            bandwidth: props.bandwidth,
            serverCertificateId: props.serverCertificateId,
            masterSlaveServerGroupId: props.masterSlaveServerGroupId,
            startListener: props.startListener === undefined || props.startListener === null ? true : props.startListener,
            aclType: props.aclType,
            httpConfig: props.httpConfig,
            enableHttp2: props.enableHttp2,
            protocol: props.protocol,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosListener;
        this.attrListenerPortsAndProtocol = rosListener.attrListenerPortsAndProtocol;
        this.attrLoadBalancerId = rosListener.attrLoadBalancerId;
    }
}
exports.Listener = Listener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBd0l4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUztZQUM5RixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtZQUMxQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUztZQUM5RixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5Qyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCO1lBQ3hELGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYTtZQUM3RyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLDRCQUE0QixHQUFHLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQztRQUM3RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0lBQzdELENBQUM7Q0FDSjtBQXZERCw0QkF1REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NMaXN0ZW5lciB9IGZyb20gJy4vc2xiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0xpc3RlbmVyIGFzIExpc3RlbmVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMQjo6TGlzdGVuZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdGVuZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBiYWNrZW5kU2VydmVyUG9ydDogQmFja2VuZCBzZXJ2ZXIgY2FuIGxpc3RlbiBvbiBwb3J0cyBmcm9tIDEgdG8gNjU1MzUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFja2VuZFNlcnZlclBvcnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJhbmR3aWR0aDogVGhlIGJhbmR3aWR0aCBvZiBuZXR3b3JrLCB1bml0IGluIE1icHMoTWlsbGlvbiBiaXRzIHBlciBzZWNvbmQpLiBJZiB0aGUgc3BlY2lmaWVkIGxvYWQgYmFsYW5jZXIgd2l0aCBcIkxPQURfQkFMQU5DRV9JRFwiIGlzIGNoYXJnZWQgYnkgXCJwYXlieWJhbmR3aWR0aFwiIGFuZCBpcyBjcmVhdGVkIGluIGNsYXNzaWMgbmV0d29yaywgZWFjaCBMaXN0ZW5lcidzIGJhbmR3aWR0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwIGFuZCB0aGUgc3VtIG9mIGFsbCBvZiBpdHMgTGlzdGVuZXJzJyBiYW5kd2lkdGggY2FuJ3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBiYW5kd2lkdGggb2YgdGhlIGxvYWQgYmFsYW5jZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFuZHdpZHRoOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsaXN0ZW5lclBvcnQ6IFBvcnQgZm9yIGZyb250IGxpc3RlbmVyLiBSYW5nZSBmcm9tIDAgdG8gNjU1MzUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGlzdGVuZXJQb3J0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIGlkIG9mIGxvYWQgYmFsYW5jZXIgdG8gY3JlYXRlIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm90b2NvbDogVGhlIGxvYWQgYmFsYW5jZXIgdHJhbnNwb3J0IHByb3RvY29sIHRvIHVzZSBmb3Igcm91dGluZzogaHR0cCwgaHR0cHMsIHRjcCwgb3IgdWRwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2xJZDogVGhlIElEIG9mIHRoZSBhY2Nlc3MgY29udHJvbCBsaXN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgbGlzdGVuZXIgdG8gYmUgY3JlYXRlZC5cbiAgICAgKiBJZiB0aGUgdmFsdWUgb2YgdGhlIEFjbFN0YXR1cyBwYXJhbWV0ZXIgaXMgb24sIHRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjbElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNsU3RhdHVzOiBJbmRpY2F0ZXMgd2hldGhlciB0byBlbmFibGUgYWNjZXNzIGNvbnRyb2wuXG4gICAgICogVmFsaWQgdmFsdWVzOiBvbiB8IG9mZi4gRGVmYXVsdCB2YWx1ZTogb2ZmXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNsU3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNsVHlwZTogVGhlIGFjY2VzcyBjb250cm9sIHR5cGU6XG4gICAgICogKiB3aGl0ZTogSW5kaWNhdGVzIGEgd2hpdGVsaXN0LiBPbmx5IHJlcXVlc3RzIGZyb20gSVAgYWRkcmVzc2VzIG9yIENJRFIgYmxvY2tzIGluIHRoZSBzZWxlY3RlZCBhY2Nlc3MgY29udHJvbCBsaXN0cyBhcmUgZm9yd2FyZGVkLiBUaGlzIGFwcGxpZXMgdG8gc2NlbmFyaW9zIGluIHdoaWNoIGFuIGFwcGxpY2F0aW9uIG9ubHkgYWxsb3dzIGFjY2VzcyBmcm9tIHNwZWNpZmljIElQIGFkZHJlc3Nlcy5cbiAgICAgKiBFbmFibGluZyBhIHdoaXRlbGlzdCBwb3NlcyBzb21lIHJpc2tzIHRvIHlvdXIgc2VydmljZXMuXG4gICAgICogQWZ0ZXIgYSB3aGl0ZWxpc3QgaXMgZW5hYmxlZCwgb25seSB0aGUgSVAgYWRkcmVzc2VzIGluIHRoZSBsaXN0IGNhbiBhY2Nlc3MgdGhlIGxpc3RlbmVyLlxuICAgICAqIElmIHlvdSBlbmFibGUgYSB3aGl0ZWxpc3Qgd2l0aG91dCBhZGRpbmcgYW55IElQIGFkZHJlc3NlcyBpbiB0aGUgbGlzdCwgbm8gcmVxdWVzdHMgYXJlIGZvcndhcmRlZC5cbiAgICAgKiAqIGJsYWNrOiBJbmRpY2F0ZXMgYSBibGFja2xpc3QuIFJlcXVlc3RzIGZyb20gSVAgYWRkcmVzc2VzIG9yIENJRFIgYmxvY2tzIGluIHRoZSBzZWxlY3RlZCBhY2Nlc3MgY29udHJvbCBsaXN0cyBhcmUgbm90IGZvcndhcmRlZCAodGhhdCBpcywgdGhleSBhcmUgYmxvY2tlZCkuIFRoaXMgYXBwbGllcyB0byBzY2VuYXJpb3MgaW4gd2hpY2ggYW4gYXBwbGljYXRpb24gb25seSBkZW5pZXMgYWNjZXNzIGZyb20gc3BlY2lmaWMgSVAgYWRkcmVzc2VzLlxuICAgICAqIElmIHlvdSBlbmFibGUgYSBibGFja2xpc3Qgd2l0aG91dCBhZGRpbmcgYW55IElQIGFkZHJlc3NlcyBpbiB0aGUgbGlzdCwgYWxsIHJlcXVlc3RzIGFyZSBmb3J3YXJkZWQuXG4gICAgICogXG4gICAgICogSWYgdGhlIHZhbHVlIG9mIHRoZSBBY2xTdGF0dXMgcGFyYW1ldGVyIGlzIG9uLCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2xUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2FDZXJ0aWZpY2F0ZUlkOiBDQSBzZXJ2ZXIgY2VydGlmaWNhdGUgaWQsIGZvciBodHRwcyBsaXN0ZW5lciBvbmx5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNhQ2VydGlmaWNhdGVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGxpc3RlbmVyLkl0IG11c3QgYmUgMSB0byA4MCBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBoeXBoZW5zICgtKSwgZm9yd2FyZCBzbGFzaGVzICgvKSwgcGVyaW9kcyAoLiksIGFuZCB1bmRlcnNjb3JlcyAoXykuIENoaW5lc2UgY2hhcmFjdGVycyBhcmUgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5hYmxlSHR0cDI6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHVzZSBIVFRQLzIuIEl0IHRha2VzIGVmZmVjdCB3aGVuIFByb3RvY29sPWh0dHBzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogb246IHllc1xuICAgICAqIG9mZjogbm9cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVIdHRwMj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGhlYWx0aENoZWNrOiBUaGUgcHJvcGVydGllcyBvZiBoZWFsdGggY2hlY2tpbmcgc2V0dGluZy5cbiAgICAgKi9cbiAgICByZWFkb25seSBoZWFsdGhDaGVjaz86IFJvc0xpc3RlbmVyLkhlYWx0aENoZWNrUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBodHRwQ29uZmlnOiBDb25maWcgZm9yIGh0dHAgcHJvdG9jb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaHR0cENvbmZpZz86IFJvc0xpc3RlbmVyLkh0dHBDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlkbGVUaW1lb3V0OiBTcGVjaWZ5IHRoZSBpZGxlIGNvbm5lY3Rpb24gdGltZW91dCBpbiBzZWNvbmRzLiBWYWxpZCB2YWx1ZTogMS02MCBJZiBubyByZXF1ZXN0IGlzIHJlY2VpdmVkIGR1cmluZyB0aGUgc3BlY2lmaWVkIHRpbWVvdXQgcGVyaW9kLCBTZXJ2ZXIgTG9hZCBCYWxhbmNlciB3aWxsIHRlbXBvcmFyaWx5IHRlcm1pbmF0ZSB0aGUgY29ubmVjdGlvbiBhbmQgcmVzdGFydCB0aGUgY29ubmVjdGlvbiB3aGVuIHRoZSBuZXh0IHJlcXVlc3QgY29tZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWRsZVRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXN0ZXJTbGF2ZVNlcnZlckdyb3VwSWQ6IFRoZSBpZCBvZiB0aGUgTWFzdGVyU2xhdmVTZXJ2ZXJHcm91cCB3aGljaCB1c2UgaW4gbGlzdGVuZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyc2lzdGVuY2U6IFRoZSBwcm9wZXJ0aWVzIG9mIHBlcnNpc3RlbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlPzogUm9zTGlzdGVuZXIuUGVyc2lzdGVuY2VQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBvcnRSYW5nZTogUG9ydCByYW5nZSwgb25seSBzdXBwb3J0cyBUQ1Agb3IgVURQIGxpc3RlbmVyLiBMaXN0ZW5lclBvcnQgc2hvdWxkIGJlIDAgd2hlbiBQb3J0UmFuZ2UgaXMgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvcnRSYW5nZT86IEFycmF5PFJvc0xpc3RlbmVyLlBvcnRSYW5nZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlcXVlc3RUaW1lb3V0OiBTcGVjaWZ5IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gc2Vjb25kcy4gVmFsaWQgdmFsdWU6IDEtMTgwIElmIG5vIHJlc3BvbnNlIGlzIHJlY2VpdmVkIGZyb20gdGhlIGJhY2tlbmQgc2VydmVyIGR1cmluZyB0aGUgc3BlY2lmaWVkIHRpbWVvdXQgcGVyaW9kLCBTZXJ2ZXIgTG9hZCBCYWxhbmNlciB3aWxsIHN0b3Agd2FpdGluZyBhbmQgc2VuZCBhbiBIVFRQIDUwNCBlcnJvciB0byB0aGUgY2xpZW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcXVlc3RUaW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2NoZWR1bGVyOiBUaGUgc2NoZWR1bGluZyBhbGdvcml0aG0uIFZhbGlkIHZhbHVlczpcbiAgICAgKiB3cnI6IEJhY2tlbmQgc2VydmVycyB0aGF0IGhhdmUgaGlnaGVyIHdlaWdodHMgcmVjZWl2ZSBtb3JlIHJlcXVlc3RzIHRoYW4gdGhvc2UgdGhhdCBoYXZlIGxvd2VyIHdlaWdodHMuXG4gICAgICogd2xjOiBSZXF1ZXN0cyBhcmUgZGlzdHJpYnV0ZWQgYmFzZWQgb24gdGhlIGNvbWJpbmF0aW9uIG9mIHRoZSB3ZWlnaHRzIGFuZCBjb25uZWN0aW9ucyB0byBiYWNrZW5kIHNlcnZlcnMuIElmIHR3byBiYWNrZW5kIHNlcnZlcnMgaGF2ZSB0aGUgc2FtZSB3ZWlnaHQsIHRoZSBiYWNrZW5kIHNlcnZlciB0aGF0IGhhcyBmZXdlciBjb25uZWN0aW9ucyByZWNlaXZlcyBtb3JlIHJlcXVlc3RzLlxuICAgICAqIHJyOiBSZXF1ZXN0cyBhcmUgZGlzdHJpYnV0ZWQgdG8gYmFja2VuZCBzZXJ2ZXJzIGluIHNlcXVlbmNlLlxuICAgICAqIHNjaDogc3BlY2lmaWVzIGNvbnNpc3RlbnQgaGFzaGluZyB0aGF0IGlzIGJhc2VkIG9uIHNvdXJjZSBJUCBhZGRyZXNzZXMuIFJlcXVlc3RzIGZyb20gdGhlIHNhbWUgc291cmNlIElQIGFkZHJlc3MgYXJlIGRpc3RyaWJ1dGVkIHRvIHRoZSBzYW1lIGJhY2tlbmQgc2VydmVyLlxuICAgICAqIHRjaDogc3BlY2lmaWVzIGNvbnNpc3RlbnQgaGFzaGluZyB0aGF0IGlzIGJhc2VkIG9uIGZvdXIgZmFjdG9yczogc291cmNlIElQIGFkZHJlc3MsIGRlc3RpbmF0aW9uIElQIGFkZHJlc3MsIHNvdXJjZSBwb3J0IG51bWJlciwgYW5kIGRlc3RpbmF0aW9uIHBvcnQgbnVtYmVyLiBSZXF1ZXN0cyB0aGF0IGNvbnRhaW4gdGhlIHNhbWUgcHJlY2VkaW5nIGluZm9ybWF0aW9uIGFyZSBkaXN0cmlidXRlZCB0byB0aGUgc2FtZSBiYWNrZW5kIHNlcnZlci5cbiAgICAgKiBEZWZhdWx0OiB3cnJcbiAgICAgKi9cbiAgICByZWFkb25seSBzY2hlZHVsZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2ZXJDZXJ0aWZpY2F0ZUlkOiBTZXJ2ZXIgY2VydGlmaWNhdGUgaWQsIGZvciBodHRwcyBsaXN0ZW5lciBvbmx5LCB0aGlzIHByb3BlcnRpZXMgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmVyQ2VydGlmaWNhdGVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN0YXJ0TGlzdGVuZXI6IFdoZXRoZXIgc3RhcnQgbGlzdGVuZXIgYWZ0ZXIgbGlzdGVuZXIgY3JlYXRlZC4gRGVmYXVsdCBUcnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0YXJ0TGlzdGVuZXI/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlNlcnZlckdyb3VwSWQ6IFRoZSBpZCBvZiB0aGUgVlNlcnZlckdyb3VwIHdoaWNoIHVzZSBpbiBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U2VydmVyR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6U0xCOjpMaXN0ZW5lcmBcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RlbmVyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMaXN0ZW5lclBvcnRzQW5kUHJvdG9jb2w6IFRoZSBjb2xsZWN0aW9uIG9mIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGlzdGVuZXJQb3J0c0FuZFByb3RvY29sOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTG9hZEJhbGFuY2VySWQ6IFRoZSBpZCBvZiBsb2FkIGJhbGFuY2VyXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2FkQmFsYW5jZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNMQjo6TGlzdGVuZXJgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IExpc3RlbmVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zTGlzdGVuZXIgPSBuZXcgUm9zTGlzdGVuZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICByZXF1ZXN0VGltZW91dDogcHJvcHMucmVxdWVzdFRpbWVvdXQsXG4gICAgICAgICAgICB2U2VydmVyR3JvdXBJZDogcHJvcHMudlNlcnZlckdyb3VwSWQsXG4gICAgICAgICAgICBsaXN0ZW5lclBvcnQ6IHByb3BzLmxpc3RlbmVyUG9ydCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGNhQ2VydGlmaWNhdGVJZDogcHJvcHMuY2FDZXJ0aWZpY2F0ZUlkLFxuICAgICAgICAgICAgc2NoZWR1bGVyOiBwcm9wcy5zY2hlZHVsZXIgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5zY2hlZHVsZXIgPT09IG51bGwgPyAnd3JyJyA6IHByb3BzLnNjaGVkdWxlcixcbiAgICAgICAgICAgIGFjbElkOiBwcm9wcy5hY2xJZCxcbiAgICAgICAgICAgIGhlYWx0aENoZWNrOiBwcm9wcy5oZWFsdGhDaGVjayxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0OiBwcm9wcy5pZGxlVGltZW91dCxcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlcklkOiBwcm9wcy5sb2FkQmFsYW5jZXJJZCxcbiAgICAgICAgICAgIGJhY2tlbmRTZXJ2ZXJQb3J0OiBwcm9wcy5iYWNrZW5kU2VydmVyUG9ydCxcbiAgICAgICAgICAgIHBlcnNpc3RlbmNlOiBwcm9wcy5wZXJzaXN0ZW5jZSxcbiAgICAgICAgICAgIHBvcnRSYW5nZTogcHJvcHMucG9ydFJhbmdlLFxuICAgICAgICAgICAgYWNsU3RhdHVzOiBwcm9wcy5hY2xTdGF0dXMgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5hY2xTdGF0dXMgPT09IG51bGwgPyAnb2ZmJyA6IHByb3BzLmFjbFN0YXR1cyxcbiAgICAgICAgICAgIGJhbmR3aWR0aDogcHJvcHMuYmFuZHdpZHRoLFxuICAgICAgICAgICAgc2VydmVyQ2VydGlmaWNhdGVJZDogcHJvcHMuc2VydmVyQ2VydGlmaWNhdGVJZCxcbiAgICAgICAgICAgIG1hc3RlclNsYXZlU2VydmVyR3JvdXBJZDogcHJvcHMubWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkLFxuICAgICAgICAgICAgc3RhcnRMaXN0ZW5lcjogcHJvcHMuc3RhcnRMaXN0ZW5lciA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnN0YXJ0TGlzdGVuZXIgPT09IG51bGwgPyB0cnVlIDogcHJvcHMuc3RhcnRMaXN0ZW5lcixcbiAgICAgICAgICAgIGFjbFR5cGU6IHByb3BzLmFjbFR5cGUsXG4gICAgICAgICAgICBodHRwQ29uZmlnOiBwcm9wcy5odHRwQ29uZmlnLFxuICAgICAgICAgICAgZW5hYmxlSHR0cDI6IHByb3BzLmVuYWJsZUh0dHAyLFxuICAgICAgICAgICAgcHJvdG9jb2w6IHByb3BzLnByb3RvY29sLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0xpc3RlbmVyO1xuICAgICAgICB0aGlzLmF0dHJMaXN0ZW5lclBvcnRzQW5kUHJvdG9jb2wgPSByb3NMaXN0ZW5lci5hdHRyTGlzdGVuZXJQb3J0c0FuZFByb3RvY29sO1xuICAgICAgICB0aGlzLmF0dHJMb2FkQmFsYW5jZXJJZCA9IHJvc0xpc3RlbmVyLmF0dHJMb2FkQmFsYW5jZXJJZDtcbiAgICB9XG59XG4iXX0=