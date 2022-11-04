"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = exports.ListenerProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const alb_generated_1 = require("./alb.generated");
Object.defineProperty(exports, "ListenerProperty", { enumerable: true, get: function () { return alb_generated_1.RosListener; } });
/**
 * A ROS resource type:  `ALIYUN::ALB::Listener`
 */
class Listener extends ros.Resource {
    /**
     * Create a new `ALIYUN::ALB::Listener`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosListener = new alb_generated_1.RosListener(this, id, {
            caEnabled: props.caEnabled,
            listenerPort: props.listenerPort,
            requestTimeout: props.requestTimeout,
            http2Enabled: props.http2Enabled,
            defaultActions: props.defaultActions,
            certificates: props.certificates,
            idleTimeout: props.idleTimeout,
            loadBalancerId: props.loadBalancerId,
            listenerProtocol: props.listenerProtocol,
            quicConfig: props.quicConfig,
            gzipEnabled: props.gzipEnabled,
            securityPolicyId: props.securityPolicyId,
            listenerDescription: props.listenerDescription,
            xForwardedForConfig: props.xForwardedForConfig,
            caCertificates: props.caCertificates,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosListener;
        this.attrListenerId = rosListener.attrListenerId;
    }
}
exports.Listener = Listener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBc0d4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWXRDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBb0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUMvRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sV0FBVyxHQUFHLElBQUksMkJBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztTQUN2QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7SUFDckQsQ0FBQztDQUNKO0FBMUNELDRCQTBDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0xpc3RlbmVyIH0gZnJvbSAnLi9hbGIuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zTGlzdGVuZXIgYXMgTGlzdGVuZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6QUxCOjpMaXN0ZW5lcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMaXN0ZW5lclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlZmF1bHRBY3Rpb25zOiBUaGUgYWN0aW9ucyBvZiB0aGUgcnVsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWZhdWx0QWN0aW9uczogQXJyYXk8Um9zTGlzdGVuZXIuRGVmYXVsdEFjdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsaXN0ZW5lclBvcnQ6IFRoZSBmcm9udGVuZCBwb3J0IHRoYXQgaXMgdXNlZCBieSB0aGUgQUxCIGluc3RhbmNlLlxuICAgICAqIFZhbGlkIHZhbHVlczogMSB0byA2NTUzNS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsaXN0ZW5lclBvcnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxpc3RlbmVyUHJvdG9jb2w6IFRoZSBsaXN0ZW5lciBwcm90b2NvbC5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IEhUVFAsIEhUVFBTLCBhbmQgUVVJQy5cbiAgICAgKi9cbiAgICByZWFkb25seSBsaXN0ZW5lclByb3RvY29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2FkQmFsYW5jZXJJZDogVGhlIElEIG9mIHRoZSBBTEIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNhQ2VydGlmaWNhdGVzOiBMaXN0IG9mIGNvbmZpZ3VyZWQgQ0EgY2VydGlmaWNhdGVzIGZvciBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjYUNlcnRpZmljYXRlcz86IEFycmF5PFJvc0xpc3RlbmVyLkNhQ2VydGlmaWNhdGVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2FFbmFibGVkOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgbXV0dWFsIGF1dGhlbnRpY2F0aW9uLiBEZWZhdWx0IGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNhRW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjZXJ0aWZpY2F0ZXM6IFRoZSBsaXN0IG9mIFNTTCBjZXJ0aWZpY2F0ZXMgZm9yIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlcnRpZmljYXRlcz86IEFycmF5PFJvc0xpc3RlbmVyLkNlcnRpZmljYXRlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGd6aXBFbmFibGVkOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgZ3ppcCBjb21wcmVzc2lvbiB0byBjb21wcmVzcyBmaWxlcyBvZiBhIHNwZWNpZmljIHR5cGUuXG4gICAgICogVmFsaWQgdmFsdWVzOiB0cnVlIGFuZCBmYWxzZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGd6aXBFbmFibGVkPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGh0dHAyRW5hYmxlZDogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIEhUVFAvMi4gRGVmYXVsdCB2YWx1ZTogb24uXG4gICAgICogVmFsaWQgdmFsdWVzOiB0cnVlIGFuZCBmYWxzZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiB0cnVlLlxuICAgICAqIE5vdGUgT25seSBIVFRQUyBsaXN0ZW5lcnMgc3VwcG9ydCB0aGlzIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBodHRwMkVuYWJsZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaWRsZVRpbWVvdXQ6IFRoZSB0aW1lb3V0IHBlcmlvZCBvZiBpZGxlIGNvbm5lY3Rpb25zLlxuICAgICAqIFZhbGlkIHZhbHVlczogMSB0byAxODAuIFVuaXQ6IHNlY29uZHMuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogMTUuXG4gICAgICogSWYgbm8gcmVxdWVzdCBpcyByZWNlaXZlZCB3aXRoaW4gdGhlIHNwZWNpZmllZCB0aW1lb3V0IHBlcmlvZCwgQUxCIGNsb3NlcyB0aGUgY29ubmVjdGlvbi5cbiAgICAgKiBBTEIgcmVjcmVhdGVzIHRoZSBjb25uZWN0aW9uIHdoZW4gYSBuZXcgY29ubmVjdGlvbiByZXF1ZXN0IGlzIHJlY2VpdmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlkbGVUaW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGlzdGVuZXJEZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBsaXN0ZW5lci4gXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGlzdGVuZXJEZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHF1aWNDb25maWc6IFNlbGVjdCBhIFFVSUMgbGlzdGVuZXIgYW5kIGFzc29jaWF0ZSBpdCB3aXRoIHRoZSBBTEIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcXVpY0NvbmZpZz86IFJvc0xpc3RlbmVyLlF1aWNDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlcXVlc3RUaW1lb3V0OiBUaGUgdGltZW91dCBwZXJpb2Qgb2YgdGhlIHJlcXVlc3QuXG4gICAgICogVmFsaWQgdmFsdWVzOiAxIHRvIDE4MC4gVW5pdDogc2Vjb25kcy5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiA2MC5cbiAgICAgKiBJZiBubyByZXNwb25zZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBiYWNrZW5kIHNlcnZlciBkdXJpbmcgdGhlIHJlcXVlc3QgdGltZW91dCBwZXJpb2QsXG4gICAgICogQUxCIHNlbmRzIGFuIEhUVFAgNTA0IGVycm9yIGNvZGUgdG8gdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXF1ZXN0VGltZW91dD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5UG9saWN5SWQ6IFRoZSBJRCBvZiB0aGUgc2VjdXJpdHkgcG9saWN5LiBTeXN0ZW0gc2VjdXJpdHkgcG9saWNpZXMgYW5kIGN1c3RvbSBzZWN1cml0eSBwb2xpY2llc1xuICAgICAqIGFyZSBzdXBwb3J0ZWQuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogdGxzX2NpcGhlcl9wb2xpY3lfMV8wLiBUaGlzIHZhbHVlIGluZGljYXRlcyBhIHN5c3RlbSBzZWN1cml0eSBwb2xpY3kuXG4gICAgICogTm90ZSBPbmx5IEhUVFBTIGxpc3RlbmVycyBzdXBwb3J0IHRoaXMgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5UG9saWN5SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB4Rm9yd2FyZGVkRm9yQ29uZmlnOiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUgWEZvcndhcmQgZmllbGQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgeEZvcndhcmRlZEZvckNvbmZpZz86IFJvc0xpc3RlbmVyLlhGb3J3YXJkZWRGb3JDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6QUxCOjpMaXN0ZW5lcmBcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RlbmVyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMaXN0ZW5lcklkOiBUaGUgSUQgb2YgdGhlIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGlzdGVuZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkFMQjo6TGlzdGVuZXJgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IExpc3RlbmVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zTGlzdGVuZXIgPSBuZXcgUm9zTGlzdGVuZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICBjYUVuYWJsZWQ6IHByb3BzLmNhRW5hYmxlZCxcbiAgICAgICAgICAgIGxpc3RlbmVyUG9ydDogcHJvcHMubGlzdGVuZXJQb3J0LFxuICAgICAgICAgICAgcmVxdWVzdFRpbWVvdXQ6IHByb3BzLnJlcXVlc3RUaW1lb3V0LFxuICAgICAgICAgICAgaHR0cDJFbmFibGVkOiBwcm9wcy5odHRwMkVuYWJsZWQsXG4gICAgICAgICAgICBkZWZhdWx0QWN0aW9uczogcHJvcHMuZGVmYXVsdEFjdGlvbnMsXG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZXM6IHByb3BzLmNlcnRpZmljYXRlcyxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0OiBwcm9wcy5pZGxlVGltZW91dCxcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlcklkOiBwcm9wcy5sb2FkQmFsYW5jZXJJZCxcbiAgICAgICAgICAgIGxpc3RlbmVyUHJvdG9jb2w6IHByb3BzLmxpc3RlbmVyUHJvdG9jb2wsXG4gICAgICAgICAgICBxdWljQ29uZmlnOiBwcm9wcy5xdWljQ29uZmlnLFxuICAgICAgICAgICAgZ3ppcEVuYWJsZWQ6IHByb3BzLmd6aXBFbmFibGVkLFxuICAgICAgICAgICAgc2VjdXJpdHlQb2xpY3lJZDogcHJvcHMuc2VjdXJpdHlQb2xpY3lJZCxcbiAgICAgICAgICAgIGxpc3RlbmVyRGVzY3JpcHRpb246IHByb3BzLmxpc3RlbmVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB4Rm9yd2FyZGVkRm9yQ29uZmlnOiBwcm9wcy54Rm9yd2FyZGVkRm9yQ29uZmlnLFxuICAgICAgICAgICAgY2FDZXJ0aWZpY2F0ZXM6IHByb3BzLmNhQ2VydGlmaWNhdGVzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0xpc3RlbmVyO1xuICAgICAgICB0aGlzLmF0dHJMaXN0ZW5lcklkID0gcm9zTGlzdGVuZXIuYXR0ckxpc3RlbmVySWQ7XG4gICAgfVxufVxuIl19