"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = exports.ListenerProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const slb_generated_1 = require("./slb.generated");
Object.defineProperty(exports, "ListenerProperty", { enumerable: true, get: function () { return slb_generated_1.RosListener; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::Listener`, which is used to create a Server Load Balancer (SLB) listener.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosListener`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-listener
 */
class Listener extends ros.Resource {
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
        const rosListener = new slb_generated_1.RosListener(this, id, {
            vServerGroupId: props.vServerGroupId,
            description: props.description,
            proxyProtocolV2Enabled: props.proxyProtocolV2Enabled,
            scheduler: props.scheduler === undefined || props.scheduler === null ? 'wrr' : props.scheduler,
            healthCheck: props.healthCheck,
            idleTimeout: props.idleTimeout,
            loadBalancerId: props.loadBalancerId,
            backendServerPort: props.backendServerPort,
            connectionDrainTimeout: props.connectionDrainTimeout,
            bandwidth: props.bandwidth,
            gzip: props.gzip,
            serverCertificateId: props.serverCertificateId,
            httpConfig: props.httpConfig,
            protocol: props.protocol,
            tags: props.tags,
            requestTimeout: props.requestTimeout,
            listenerPort: props.listenerPort,
            tlsCipherPolicy: props.tlsCipherPolicy,
            caCertificateId: props.caCertificateId,
            aclId: props.aclId,
            connectionDrain: props.connectionDrain,
            persistence: props.persistence,
            portRange: props.portRange,
            aclStatus: props.aclStatus === undefined || props.aclStatus === null ? 'off' : props.aclStatus,
            masterSlaveServerGroupId: props.masterSlaveServerGroupId,
            startListener: props.startListener === undefined || props.startListener === null ? true : props.startListener,
            aclType: props.aclType,
            enableHttp2: props.enableHttp2,
            aclIds: props.aclIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosListener;
        this.attrListenerPortsAndProtocol = rosListener.attrListenerPortsAndProtocol;
        this.attrLoadBalancerId = rosListener.attrLoadBalancerId;
    }
}
exports.Listener = Listener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBcUx4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQnRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0I7WUFDcEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTO1lBQzlGLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQjtZQUNwRCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVM7WUFDOUYsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLHdCQUF3QjtZQUN4RCxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWE7WUFDN0csT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDdkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLDRCQUE0QixHQUFHLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQztRQUM3RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0lBQzdELENBQUM7Q0FDSjtBQS9ERCw0QkErREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NMaXN0ZW5lciB9IGZyb20gJy4vc2xiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0xpc3RlbmVyIGFzIExpc3RlbmVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBMaXN0ZW5lcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1zbGItbGlzdGVuZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMaXN0ZW5lclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJhbmR3aWR0aDogVGhlIGJhbmR3aWR0aCBvZiBuZXR3b3JrLCB1bml0IGluIE1icHMoTWlsbGlvbiBiaXRzIHBlciBzZWNvbmQpLiBJZiB0aGUgc3BlY2lmaWVkIGxvYWQgYmFsYW5jZXIgd2l0aCBcIkxPQURfQkFMQU5DRV9JRFwiIGlzIGNoYXJnZWQgYnkgXCJwYXlieWJhbmR3aWR0aFwiIGFuZCBpcyBjcmVhdGVkIGluIGNsYXNzaWMgbmV0d29yaywgZWFjaCBMaXN0ZW5lcidzIGJhbmR3aWR0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwIGFuZCB0aGUgc3VtIG9mIGFsbCBvZiBpdHMgTGlzdGVuZXJzJyBiYW5kd2lkdGggY2FuJ3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBiYW5kd2lkdGggb2YgdGhlIGxvYWQgYmFsYW5jZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFuZHdpZHRoOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsaXN0ZW5lclBvcnQ6IFBvcnQgZm9yIGZyb250IGxpc3RlbmVyLiBSYW5nZSBmcm9tIDAgdG8gNjU1MzUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGlzdGVuZXJQb3J0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIGlkIG9mIGxvYWQgYmFsYW5jZXIgdG8gY3JlYXRlIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvYWRCYWxhbmNlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm90b2NvbDogVGhlIGxvYWQgYmFsYW5jZXIgdHJhbnNwb3J0IHByb3RvY29sIHRvIHVzZSBmb3Igcm91dGluZzogaHR0cCwgaHR0cHMsIHRjcCwgb3IgdWRwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2xJZDogVGhlIElEIG9mIHRoZSBhY2Nlc3MgY29udHJvbCBhc3NvY2lhdGVkIHdpdGggdGhlIGxpc3RlbmVyIHRvIGJlIGNyZWF0ZWQuXG4gICAgICogSWYgdGhlIHZhbHVlIG9mIHRoZSBBY2xTdGF0dXMgcGFyYW1ldGVyIGlzIG9uLCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2xJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjbElkczogVGhlIElEIGxpc3Qgb2YgdGhlIGFjY2VzcyBjb250cm9scyBhc3NvY2lhdGVkIHdpdGggdGhlIGxpc3RlbmVyIHRvIGJlIGNyZWF0ZWQuXG4gICAgICogSWYgdGhlIHZhbHVlIG9mIHRoZSBBY2xTdGF0dXMgcGFyYW1ldGVyIGlzIG9uLCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZC5BY2xJZHMgaGF2ZSBoaWdoZXIgcHJpb3JpdHkgdGhhbiBBY2xJZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2xJZHM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNsU3RhdHVzOiBJbmRpY2F0ZXMgd2hldGhlciB0byBlbmFibGUgYWNjZXNzIGNvbnRyb2wuXG4gICAgICogVmFsaWQgdmFsdWVzOiBvbiB8IG9mZi4gRGVmYXVsdCB2YWx1ZTogb2ZmXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNsU3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNsVHlwZTogVGhlIGFjY2VzcyBjb250cm9sIHR5cGU6XG4gICAgICogKiB3aGl0ZTogSW5kaWNhdGVzIGEgd2hpdGVsaXN0LiBPbmx5IHJlcXVlc3RzIGZyb20gSVAgYWRkcmVzc2VzIG9yIENJRFIgYmxvY2tzIGluIHRoZSBzZWxlY3RlZCBhY2Nlc3MgY29udHJvbCBsaXN0cyBhcmUgZm9yd2FyZGVkLiBUaGlzIGFwcGxpZXMgdG8gc2NlbmFyaW9zIGluIHdoaWNoIGFuIGFwcGxpY2F0aW9uIG9ubHkgYWxsb3dzIGFjY2VzcyBmcm9tIHNwZWNpZmljIElQIGFkZHJlc3Nlcy5cbiAgICAgKiBFbmFibGluZyBhIHdoaXRlbGlzdCBwb3NlcyBzb21lIHJpc2tzIHRvIHlvdXIgc2VydmljZXMuXG4gICAgICogQWZ0ZXIgYSB3aGl0ZWxpc3QgaXMgZW5hYmxlZCwgb25seSB0aGUgSVAgYWRkcmVzc2VzIGluIHRoZSBsaXN0IGNhbiBhY2Nlc3MgdGhlIGxpc3RlbmVyLlxuICAgICAqIElmIHlvdSBlbmFibGUgYSB3aGl0ZWxpc3Qgd2l0aG91dCBhZGRpbmcgYW55IElQIGFkZHJlc3NlcyBpbiB0aGUgbGlzdCwgbm8gcmVxdWVzdHMgYXJlIGZvcndhcmRlZC5cbiAgICAgKiAqIGJsYWNrOiBJbmRpY2F0ZXMgYSBibGFja2xpc3QuIFJlcXVlc3RzIGZyb20gSVAgYWRkcmVzc2VzIG9yIENJRFIgYmxvY2tzIGluIHRoZSBzZWxlY3RlZCBhY2Nlc3MgY29udHJvbCBsaXN0cyBhcmUgbm90IGZvcndhcmRlZCAodGhhdCBpcywgdGhleSBhcmUgYmxvY2tlZCkuIFRoaXMgYXBwbGllcyB0byBzY2VuYXJpb3MgaW4gd2hpY2ggYW4gYXBwbGljYXRpb24gb25seSBkZW5pZXMgYWNjZXNzIGZyb20gc3BlY2lmaWMgSVAgYWRkcmVzc2VzLlxuICAgICAqIElmIHlvdSBlbmFibGUgYSBibGFja2xpc3Qgd2l0aG91dCBhZGRpbmcgYW55IElQIGFkZHJlc3NlcyBpbiB0aGUgbGlzdCwgYWxsIHJlcXVlc3RzIGFyZSBmb3J3YXJkZWQuXG4gICAgICogXG4gICAgICogSWYgdGhlIHZhbHVlIG9mIHRoZSBBY2xTdGF0dXMgcGFyYW1ldGVyIGlzIG9uLCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2xUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFja2VuZFNlcnZlclBvcnQ6IEJhY2tlbmQgc2VydmVyIGNhbiBsaXN0ZW4gb24gcG9ydHMgZnJvbSAxIHRvIDY1NTM1LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2tlbmRTZXJ2ZXJQb3J0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2FDZXJ0aWZpY2F0ZUlkOiBDQSBzZXJ2ZXIgY2VydGlmaWNhdGUgaWQsIGZvciBodHRwcyBsaXN0ZW5lciBvbmx5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNhQ2VydGlmaWNhdGVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbm5lY3Rpb25EcmFpbjogV2hldGhlciB0byBlbmFibGUgZ3JhY2VmdWwgY29ubmVjdGlvbiBpbnRlcnJ1cHRpb24uIFZhbHVlOm9uOiB0dXJuIG9uXG4gICAgICogb2ZmOiBOb3QgdHVybmVkIG9uXG4gICAgICogTm90ZTogT25seSBlZmZlY3RpdmUgVENQIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbm5lY3Rpb25EcmFpbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbm5lY3Rpb25EcmFpblRpbWVvdXQ6IFNldCB0aGUgY29ubmVjdGlvbiBncmFjZWZ1bCBpbnRlcnJ1cHRpb24gdGltZW91dC4gVW5pdDogc2Vjb25kcy4gVmFsdWUgcmFuZ2U6IDEwLTkwMC5cbiAgICAgKiBOb3RlOiBPbmx5IGVmZmVjdGl2ZSBmb3IgVENQIGxpc3RlbmVyLiBXaGVuIENvbm5lY3Rpb25EcmFpbiBpcyBvbiwgdGhpcyBvcHRpb24gaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29ubmVjdGlvbkRyYWluVGltZW91dD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGxpc3RlbmVyLkl0IG11c3QgYmUgMSB0byA4MCBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBoeXBoZW5zICgtKSwgZm9yd2FyZCBzbGFzaGVzIChcXC8pLCBwZXJpb2RzICguKSwgYW5kIHVuZGVyc2NvcmVzIChfKS4gQ2hpbmVzZSBjaGFyYWN0ZXJzIGFyZSBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmFibGVIdHRwMjogU3BlY2lmaWVzIHdoZXRoZXIgdG8gdXNlIEhUVFBcXC8yLiBJdCB0YWtlcyBlZmZlY3Qgd2hlbiBQcm90b2NvbD1odHRwcy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIG9uOiB5ZXNcbiAgICAgKiBvZmY6IG5vXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlSHR0cDI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBnemlwOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgR3ppcCBjb21wcmVzc2lvbiB0byBjb21wcmVzcyBzcGVjaWZpYyB0eXBlcyBvZiBmaWxlcy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIG9uIChkZWZhdWx0KTogeWVzXG4gICAgICogb2ZmOiBub1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGd6aXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoZWFsdGhDaGVjazogVGhlIHByb3BlcnRpZXMgb2YgaGVhbHRoIGNoZWNraW5nIHNldHRpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGVhbHRoQ2hlY2s/OiBSb3NMaXN0ZW5lci5IZWFsdGhDaGVja1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaHR0cENvbmZpZzogQ29uZmlnIGZvciBodHRwIHByb3RvY29sLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGh0dHBDb25maWc/OiBSb3NMaXN0ZW5lci5IdHRwQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpZGxlVGltZW91dDogU3BlY2lmeSB0aGUgaWRsZSBjb25uZWN0aW9uIHRpbWVvdXQgaW4gc2Vjb25kcy4gVmFsaWQgdmFsdWU6IDEtNjAgSWYgbm8gcmVxdWVzdCBpcyByZWNlaXZlZCBkdXJpbmcgdGhlIHNwZWNpZmllZCB0aW1lb3V0IHBlcmlvZCwgU2VydmVyIExvYWQgQmFsYW5jZXIgd2lsbCB0ZW1wb3JhcmlseSB0ZXJtaW5hdGUgdGhlIGNvbm5lY3Rpb24gYW5kIHJlc3RhcnQgdGhlIGNvbm5lY3Rpb24gd2hlbiB0aGUgbmV4dCByZXF1ZXN0IGNvbWVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlkbGVUaW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkOiBUaGUgaWQgb2YgdGhlIE1hc3RlclNsYXZlU2VydmVyR3JvdXAgd2hpY2ggdXNlIGluIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hc3RlclNsYXZlU2VydmVyR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcnNpc3RlbmNlOiBUaGUgcHJvcGVydGllcyBvZiBwZXJzaXN0ZW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJzaXN0ZW5jZT86IFJvc0xpc3RlbmVyLlBlcnNpc3RlbmNlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwb3J0UmFuZ2U6IFBvcnQgcmFuZ2UsIG9ubHkgc3VwcG9ydHMgVENQIG9yIFVEUCBsaXN0ZW5lci4gTGlzdGVuZXJQb3J0IHNob3VsZCBiZSAwIHdoZW4gUG9ydFJhbmdlIGlzIHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb3J0UmFuZ2U/OiBBcnJheTxSb3NMaXN0ZW5lci5Qb3J0UmFuZ2VQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm94eVByb3RvY29sVjJFbmFibGVkOiBXaGV0aGVyIHRvIHN1cHBvcnQgY2FycnlpbmcgdGhlIGNsaWVudCBzb3VyY2UgYWRkcmVzcyB0byB0aGUgYmFja2VuZCBzZXJ2ZXIgdGhyb3VnaCB0aGUgUHJveHkgUHJvdG9jb2wuIFZhbHVlOlxuICAgICAqIHRydWU6IFllc1xuICAgICAqIGZhbHNlIChkZWZhdWx0KTogTm9cbiAgICAgKiBOb3RlOiBPbmx5IGVmZmVjdGl2ZSBUQ1Agb3IgVURQIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb3h5UHJvdG9jb2xWMkVuYWJsZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVxdWVzdFRpbWVvdXQ6IFNwZWNpZnkgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBzZWNvbmRzLiBWYWxpZCB2YWx1ZTogMS0xODAgSWYgbm8gcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgYmFja2VuZCBzZXJ2ZXIgZHVyaW5nIHRoZSBzcGVjaWZpZWQgdGltZW91dCBwZXJpb2QsIFNlcnZlciBMb2FkIEJhbGFuY2VyIHdpbGwgc3RvcCB3YWl0aW5nIGFuZCBzZW5kIGFuIEhUVFAgNTA0IGVycm9yIHRvIHRoZSBjbGllbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVxdWVzdFRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzY2hlZHVsZXI6IFRoZSBzY2hlZHVsaW5nIGFsZ29yaXRobS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHdycjogQmFja2VuZCBzZXJ2ZXJzIHRoYXQgaGF2ZSBoaWdoZXIgd2VpZ2h0cyByZWNlaXZlIG1vcmUgcmVxdWVzdHMgdGhhbiB0aG9zZSB0aGF0IGhhdmUgbG93ZXIgd2VpZ2h0cy5cbiAgICAgKiB3bGM6IFJlcXVlc3RzIGFyZSBkaXN0cmlidXRlZCBiYXNlZCBvbiB0aGUgY29tYmluYXRpb24gb2YgdGhlIHdlaWdodHMgYW5kIGNvbm5lY3Rpb25zIHRvIGJhY2tlbmQgc2VydmVycy4gSWYgdHdvIGJhY2tlbmQgc2VydmVycyBoYXZlIHRoZSBzYW1lIHdlaWdodCwgdGhlIGJhY2tlbmQgc2VydmVyIHRoYXQgaGFzIGZld2VyIGNvbm5lY3Rpb25zIHJlY2VpdmVzIG1vcmUgcmVxdWVzdHMuXG4gICAgICogcnI6IFJlcXVlc3RzIGFyZSBkaXN0cmlidXRlZCB0byBiYWNrZW5kIHNlcnZlcnMgaW4gc2VxdWVuY2UuXG4gICAgICogc2NoOiBzcGVjaWZpZXMgY29uc2lzdGVudCBoYXNoaW5nIHRoYXQgaXMgYmFzZWQgb24gc291cmNlIElQIGFkZHJlc3Nlcy4gUmVxdWVzdHMgZnJvbSB0aGUgc2FtZSBzb3VyY2UgSVAgYWRkcmVzcyBhcmUgZGlzdHJpYnV0ZWQgdG8gdGhlIHNhbWUgYmFja2VuZCBzZXJ2ZXIuXG4gICAgICogdGNoOiBzcGVjaWZpZXMgY29uc2lzdGVudCBoYXNoaW5nIHRoYXQgaXMgYmFzZWQgb24gZm91ciBmYWN0b3JzOiBzb3VyY2UgSVAgYWRkcmVzcywgZGVzdGluYXRpb24gSVAgYWRkcmVzcywgc291cmNlIHBvcnQgbnVtYmVyLCBhbmQgZGVzdGluYXRpb24gcG9ydCBudW1iZXIuIFJlcXVlc3RzIHRoYXQgY29udGFpbiB0aGUgc2FtZSBwcmVjZWRpbmcgaW5mb3JtYXRpb24gYXJlIGRpc3RyaWJ1dGVkIHRvIHRoZSBzYW1lIGJhY2tlbmQgc2VydmVyLlxuICAgICAqIERlZmF1bHQ6IHdyclxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjaGVkdWxlcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlcnZlckNlcnRpZmljYXRlSWQ6IFNlcnZlciBjZXJ0aWZpY2F0ZSBpZCwgZm9yIGh0dHBzIGxpc3RlbmVyIG9ubHksIHRoaXMgcHJvcGVydGllcyBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2ZXJDZXJ0aWZpY2F0ZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3RhcnRMaXN0ZW5lcjogV2hldGhlciBzdGFydCBsaXN0ZW5lciBhZnRlciBsaXN0ZW5lciBjcmVhdGVkLiBEZWZhdWx0IFRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RhcnRMaXN0ZW5lcj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NMaXN0ZW5lci5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRsc0NpcGhlclBvbGljeTogVGhlIFRyYW5zcG9ydCBMYXllciBTZWN1cml0eSAoVExTKSBzZWN1cml0eSBwb2xpY3kuIEVhY2ggc2VjdXJpdHkgcG9saWN5IGNvbnRhaW5zIFRMUyBwcm90b2NvbCB2ZXJzaW9ucyBhbmQgY2lwaGVyIHN1aXRlcyBhdmFpbGFibGUgZm9yIEhUVFBTLiBJdCB0YWtlcyBlZmZlY3Qgd2hlbiBQcm90b2NvbD1odHRwcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB0bHNDaXBoZXJQb2xpY3k/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U2VydmVyR3JvdXBJZDogVGhlIGlkIG9mIHRoZSBWU2VydmVyR3JvdXAgd2hpY2ggdXNlIGluIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTZXJ2ZXJHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpTTEI6Okxpc3RlbmVyYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBTZXJ2ZXIgTG9hZCBCYWxhbmNlciAoU0xCKSBsaXN0ZW5lci5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0xpc3RlbmVyYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tc2xiLWxpc3RlbmVyXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0ZW5lciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogTGlzdGVuZXJQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTGlzdGVuZXJQb3J0c0FuZFByb3RvY29sOiBUaGUgY29sbGVjdGlvbiBvZiBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxpc3RlbmVyUG9ydHNBbmRQcm90b2NvbDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExvYWRCYWxhbmNlcklkOiBUaGUgaWQgb2YgbG9hZCBiYWxhbmNlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9hZEJhbGFuY2VySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBMaXN0ZW5lclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zTGlzdGVuZXIgPSBuZXcgUm9zTGlzdGVuZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICB2U2VydmVyR3JvdXBJZDogcHJvcHMudlNlcnZlckdyb3VwSWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcm94eVByb3RvY29sVjJFbmFibGVkOiBwcm9wcy5wcm94eVByb3RvY29sVjJFbmFibGVkLFxuICAgICAgICAgICAgc2NoZWR1bGVyOiBwcm9wcy5zY2hlZHVsZXIgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5zY2hlZHVsZXIgPT09IG51bGwgPyAnd3JyJyA6IHByb3BzLnNjaGVkdWxlcixcbiAgICAgICAgICAgIGhlYWx0aENoZWNrOiBwcm9wcy5oZWFsdGhDaGVjayxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0OiBwcm9wcy5pZGxlVGltZW91dCxcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlcklkOiBwcm9wcy5sb2FkQmFsYW5jZXJJZCxcbiAgICAgICAgICAgIGJhY2tlbmRTZXJ2ZXJQb3J0OiBwcm9wcy5iYWNrZW5kU2VydmVyUG9ydCxcbiAgICAgICAgICAgIGNvbm5lY3Rpb25EcmFpblRpbWVvdXQ6IHByb3BzLmNvbm5lY3Rpb25EcmFpblRpbWVvdXQsXG4gICAgICAgICAgICBiYW5kd2lkdGg6IHByb3BzLmJhbmR3aWR0aCxcbiAgICAgICAgICAgIGd6aXA6IHByb3BzLmd6aXAsXG4gICAgICAgICAgICBzZXJ2ZXJDZXJ0aWZpY2F0ZUlkOiBwcm9wcy5zZXJ2ZXJDZXJ0aWZpY2F0ZUlkLFxuICAgICAgICAgICAgaHR0cENvbmZpZzogcHJvcHMuaHR0cENvbmZpZyxcbiAgICAgICAgICAgIHByb3RvY29sOiBwcm9wcy5wcm90b2NvbCxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgICAgICByZXF1ZXN0VGltZW91dDogcHJvcHMucmVxdWVzdFRpbWVvdXQsXG4gICAgICAgICAgICBsaXN0ZW5lclBvcnQ6IHByb3BzLmxpc3RlbmVyUG9ydCxcbiAgICAgICAgICAgIHRsc0NpcGhlclBvbGljeTogcHJvcHMudGxzQ2lwaGVyUG9saWN5LFxuICAgICAgICAgICAgY2FDZXJ0aWZpY2F0ZUlkOiBwcm9wcy5jYUNlcnRpZmljYXRlSWQsXG4gICAgICAgICAgICBhY2xJZDogcHJvcHMuYWNsSWQsXG4gICAgICAgICAgICBjb25uZWN0aW9uRHJhaW46IHByb3BzLmNvbm5lY3Rpb25EcmFpbixcbiAgICAgICAgICAgIHBlcnNpc3RlbmNlOiBwcm9wcy5wZXJzaXN0ZW5jZSxcbiAgICAgICAgICAgIHBvcnRSYW5nZTogcHJvcHMucG9ydFJhbmdlLFxuICAgICAgICAgICAgYWNsU3RhdHVzOiBwcm9wcy5hY2xTdGF0dXMgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5hY2xTdGF0dXMgPT09IG51bGwgPyAnb2ZmJyA6IHByb3BzLmFjbFN0YXR1cyxcbiAgICAgICAgICAgIG1hc3RlclNsYXZlU2VydmVyR3JvdXBJZDogcHJvcHMubWFzdGVyU2xhdmVTZXJ2ZXJHcm91cElkLFxuICAgICAgICAgICAgc3RhcnRMaXN0ZW5lcjogcHJvcHMuc3RhcnRMaXN0ZW5lciA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnN0YXJ0TGlzdGVuZXIgPT09IG51bGwgPyB0cnVlIDogcHJvcHMuc3RhcnRMaXN0ZW5lcixcbiAgICAgICAgICAgIGFjbFR5cGU6IHByb3BzLmFjbFR5cGUsXG4gICAgICAgICAgICBlbmFibGVIdHRwMjogcHJvcHMuZW5hYmxlSHR0cDIsXG4gICAgICAgICAgICBhY2xJZHM6IHByb3BzLmFjbElkcyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5hdHRyTGlzdGVuZXJQb3J0c0FuZFByb3RvY29sID0gcm9zTGlzdGVuZXIuYXR0ckxpc3RlbmVyUG9ydHNBbmRQcm90b2NvbDtcbiAgICAgICAgdGhpcy5hdHRyTG9hZEJhbGFuY2VySWQgPSByb3NMaXN0ZW5lci5hdHRyTG9hZEJhbGFuY2VySWQ7XG4gICAgfVxufVxuIl19