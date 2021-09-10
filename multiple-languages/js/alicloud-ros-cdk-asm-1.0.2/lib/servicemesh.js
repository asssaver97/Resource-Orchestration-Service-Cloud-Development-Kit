"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceMesh = exports.ServiceMeshProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const asm_generated_1 = require("./asm.generated");
Object.defineProperty(exports, "ServiceMeshProperty", { enumerable: true, get: function () { return asm_generated_1.RosServiceMesh; } });
/**
 * A ROS resource type:  `ALIYUN::ASM::ServiceMesh`
 */
class ServiceMesh extends ros.Resource {
    /**
     * Create a new `ALIYUN::ASM::ServiceMesh`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosServiceMesh = new asm_generated_1.RosServiceMesh(this, id, {
            enableAudit: props.enableAudit,
            opa: props.opa,
            istioVersion: props.istioVersion,
            apiServerPublicEip: props.apiServerPublicEip,
            localityLoadBalancing: props.localityLoadBalancing,
            telemetry: props.telemetry,
            outboundTrafficPolicy: props.outboundTrafficPolicy,
            auditProject: props.auditProject,
            traceSampling: props.traceSampling,
            name: props.name,
            proxy: props.proxy,
            vpcId: props.vpcId,
            pilotPublicEip: props.pilotPublicEip,
            includeIpRanges: props.includeIpRanges,
            vSwitches: props.vSwitches,
            tracing: props.tracing,
            customizedZipkin: props.customizedZipkin,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceMesh;
        this.attrServiceMeshId = rosServiceMesh.attrServiceMeshId;
    }
}
exports.ServiceMesh = ServiceMesh;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZW1lc2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlbWVzaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQTBHOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQVl6Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1NBQzNDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7SUFDOUQsQ0FBQztDQUNKO0FBNUNELGtDQTRDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NlcnZpY2VNZXNoIH0gZnJvbSAnLi9hc20uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2VydmljZU1lc2ggYXMgU2VydmljZU1lc2hQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6QVNNOjpTZXJ2aWNlTWVzaGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlTWVzaFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCAoVlBDKS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaGVzOiBUaGUgSUQgb2YgdGhlIHZTd2l0Y2gsIGVnOiBbXCJ2c3cteHplZ2Y1ZG5ka2JmNG02ZWcqKioqXCJdXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaGVzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXBpU2VydmVyUHVibGljRWlwOiBTcGVjaWZpZXMgd2hldGhlciB0byBleHBvc2UgdGhlIEFQSSBzZXJ2ZXIgdG8gdGhlIEludGVybmV0LlxuICAgICAqIFZhbGlkIHZhbHVlczogdHJ1ZSBhbmQgZmFsc2UuIERlZmF1bHQgdmFsdWU6IGZhbHNlLlxuICAgICAqIElmIHlvdSBkbyBub3Qgc2V0IHRoaXMgcGFyYW1ldGVyLCB0aGUgQVBJIHNlcnZlciBvZiBjbHVzdGVycyBhZGRlZCB0byB0aGUgQVNNIGluc3RhbmNlXG4gICAgICogY2Fubm90IGJlIGFjY2Vzc2VkIGZyb20gdGhlIEludGVybmV0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwaVNlcnZlclB1YmxpY0VpcD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdWRpdFByb2plY3Q6IFRoZSBuYW1lIG9mIHRoZSBMb2cgU2VydmljZSBwcm9qZWN0IHRoYXQgaXMgdXNlZCBmb3IgbWVzaCBhdWRpdC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBtZXNoLWxvZy17bWVzaElkfS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdWRpdFByb2plY3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjdXN0b21pemVkWmlwa2luOiBTcGVjaWZpZXMgd2hldGhlciB0byB1c2UgYSB1c2VyLWNyZWF0ZWQgWmlwa2luIHN5c3RlbS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjdXN0b21pemVkWmlwa2luPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuYWJsZUF1ZGl0OiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgdGhlIG1lc2ggYXVkaXQgZmVhdHVyZS4gVG8gZW5hYmxlIHRoaXMgZmVhdHVyZSwgbWFrZSBzdXJlXG4gICAgICogdGhhdCB5b3UgaGF2ZSBhY3RpdmF0ZWQgQWxpYmFiYSBDbG91ZCBMb2cgU2VydmljZS5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IHRydWUgYW5kIGZhbHNlLiBEZWZhdWx0IHZhbHVlOiBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVBdWRpdD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbmNsdWRlSXBSYW5nZXM6IFRoZSBDbGFzc2xlc3MgSW50ZXItRG9tYWluIFJvdXRpbmcgKENJRFIpIGJsb2NrIGluIHRoZSBBU00gaW5zdGFuY2UgdGhhdCBhcmUgZGVuaWVkXG4gICAgICogdG8gYWNjZXNzIGV4dGVybmFsIHNlcnZpY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluY2x1ZGVJcFJhbmdlcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlzdGlvVmVyc2lvbjogVGhlIElzdGlvIHZlcnNpb24gb2YgdGhlIEFTTSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc3Rpb1ZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2NhbGl0eUxvYWRCYWxhbmNpbmc6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHJvdXRlIHRyYWZmaWMgdG8gdGhlIG5lYXJlc3QgaW5zdGFuY2UuXG4gICAgICogVmFsaWQgdmFsdWVzOiB0cnVlIGFuZCBmYWxzZS4gRGVmYXVsdCB2YWx1ZTogZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9jYWxpdHlMb2FkQmFsYW5jaW5nPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBBU00gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG9wYTogT1BBIHNldHRpbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9wYT86IFJvc1NlcnZpY2VNZXNoLk9QQVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3V0Ym91bmRUcmFmZmljUG9saWN5OiBUaGUgb3V0Ym91bmQgdHJhZmZpYyBwb2xpY3kgb2YgdGhlIEFTTSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBvdXRib3VuZFRyYWZmaWNQb2xpY3k/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwaWxvdFB1YmxpY0VpcDogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZXhwb3NlIElzdGlvIFBpbG90IHRvIHRoZSBJbnRlcm5ldC5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IHRydWUgYW5kIGZhbHNlLiBEZWZhdWx0IHZhbHVlOiBmYWxzZS5cbiAgICAgKiBJZiB5b3UgZG8gbm90IHNldCB0aGlzIHBhcmFtZXRlciwgb25seSBjbHVzdGVycyBpbiB0aGUgc2FtZSBWUEMgYXMgdGhlIEFTTSBpbnN0YW5jZVxuICAgICAqIGNhbiBhY2Nlc3MgSXN0aW8gUGlsb3Qgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBpbG90UHVibGljRWlwPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByb3h5OiBQcm94eSBzZXR0aW5ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm94eT86IFJvc1NlcnZpY2VNZXNoLlByb3h5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0ZWxlbWV0cnk6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSBQcm9tZXRoZXVzIG1vbml0b3JpbmcuIFdlIHJlY29tbWVuZCB0aGF0IHlvdSB1c2UgQXBwbGljYXRpb24gUmVhbC1UaW1lIE1vbml0b3JpbmcgU2VydmljZSAoQVJNUykuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGVsZW1ldHJ5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRyYWNlU2FtcGxpbmc6IFRoZSBzYW1wbGluZyBwZXJjZW50YWdlIG9mIHRyYWNpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhY2VTYW1wbGluZz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRyYWNpbmc6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSB0aGUgdHJhY2luZyBmZWF0dXJlLiBUbyBlbmFibGUgdGhpcyBmZWF0dXJlLCBtYWtlIHN1cmVcbiAgICAgKiB0aGF0IHlvdSBoYXZlIGFjdGl2YXRlZCBBbGliYWJhIENsb3VkIFRyYWNpbmcgQW5hbHlzaXMuXG4gICAgICogVmFsaWQgdmFsdWVzOiB0cnVlIGFuZCBmYWxzZS4gRGVmYXVsdCB2YWx1ZTogZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhY2luZz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkFTTTo6U2VydmljZU1lc2hgXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlTWVzaCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmljZU1lc2hJZDogVGhlIElEIG9mIHRoZSBBU00gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlTWVzaElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6QVNNOjpTZXJ2aWNlTWVzaGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU2VydmljZU1lc2hQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NTZXJ2aWNlTWVzaCA9IG5ldyBSb3NTZXJ2aWNlTWVzaCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGVuYWJsZUF1ZGl0OiBwcm9wcy5lbmFibGVBdWRpdCxcbiAgICAgICAgICAgIG9wYTogcHJvcHMub3BhLFxuICAgICAgICAgICAgaXN0aW9WZXJzaW9uOiBwcm9wcy5pc3Rpb1ZlcnNpb24sXG4gICAgICAgICAgICBhcGlTZXJ2ZXJQdWJsaWNFaXA6IHByb3BzLmFwaVNlcnZlclB1YmxpY0VpcCxcbiAgICAgICAgICAgIGxvY2FsaXR5TG9hZEJhbGFuY2luZzogcHJvcHMubG9jYWxpdHlMb2FkQmFsYW5jaW5nLFxuICAgICAgICAgICAgdGVsZW1ldHJ5OiBwcm9wcy50ZWxlbWV0cnksXG4gICAgICAgICAgICBvdXRib3VuZFRyYWZmaWNQb2xpY3k6IHByb3BzLm91dGJvdW5kVHJhZmZpY1BvbGljeSxcbiAgICAgICAgICAgIGF1ZGl0UHJvamVjdDogcHJvcHMuYXVkaXRQcm9qZWN0LFxuICAgICAgICAgICAgdHJhY2VTYW1wbGluZzogcHJvcHMudHJhY2VTYW1wbGluZyxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICBwcm94eTogcHJvcHMucHJveHksXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBwaWxvdFB1YmxpY0VpcDogcHJvcHMucGlsb3RQdWJsaWNFaXAsXG4gICAgICAgICAgICBpbmNsdWRlSXBSYW5nZXM6IHByb3BzLmluY2x1ZGVJcFJhbmdlcyxcbiAgICAgICAgICAgIHZTd2l0Y2hlczogcHJvcHMudlN3aXRjaGVzLFxuICAgICAgICAgICAgdHJhY2luZzogcHJvcHMudHJhY2luZyxcbiAgICAgICAgICAgIGN1c3RvbWl6ZWRaaXBraW46IHByb3BzLmN1c3RvbWl6ZWRaaXBraW4sXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU2VydmljZU1lc2g7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VNZXNoSWQgPSByb3NTZXJ2aWNlTWVzaC5hdHRyU2VydmljZU1lc2hJZDtcbiAgICB9XG59XG4iXX0=