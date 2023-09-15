"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifecycleHook = exports.LifecycleHookProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ess_generated_1 = require("./ess.generated");
Object.defineProperty(exports, "LifecycleHookProperty", { enumerable: true, get: function () { return ess_generated_1.RosLifecycleHook; } });
/**
 * A ROS resource type:  `ALIYUN::ESS::LifecycleHook`
 */
class LifecycleHook extends ros.Resource {
    /**
     * Create a new `ALIYUN::ESS::LifecycleHook`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosLifecycleHook = new ess_generated_1.RosLifecycleHook(this, id, {
            lifecycleHookName: props.lifecycleHookName,
            notificationArn: props.notificationArn,
            scalingGroupId: props.scalingGroupId,
            lifecycleTransition: props.lifecycleTransition,
            heartbeatTimeout: props.heartbeatTimeout,
            notificationMetadata: props.notificationMetadata,
            defaultResult: props.defaultResult,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLifecycleHook;
        this.attrLifecycleHookId = rosLifecycleHook.attrLifecycleHookId;
        this.attrScalingGroupId = rosLifecycleHook.attrScalingGroupId;
    }
}
exports.LifecycleHook = LifecycleHook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpZmVjeWNsZWhvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBeURsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUIzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksZ0NBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQ3JDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUNsRSxDQUFDO0NBQ0o7QUF4Q0Qsc0NBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTGlmZWN5Y2xlSG9vayB9IGZyb20gJy4vZXNzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0xpZmVjeWNsZUhvb2sgYXMgTGlmZWN5Y2xlSG9va1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFU1M6OkxpZmVjeWNsZUhvb2tgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGlmZWN5Y2xlSG9va1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxpZmVjeWNsZVRyYW5zaXRpb246IFRoZSBzY2FsaW5nIGFjdGl2aXRpZXMgdG8gd2hpY2ggbGlmZWN5Y2xlIGhvb2tzIGFwcGx5IFZhbHVlIHJhbmdlOlxuICAgICAqICBTQ0FMRV9PVVQ6IHNjYWxlLW91dCBldmVudFxuICAgICAqICBTQ0FMRV9JTjogc2NhbGUtaW4gZXZlbnRcbiAgICAgKi9cbiAgICByZWFkb25seSBsaWZlY3ljbGVUcmFuc2l0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzY2FsaW5nR3JvdXBJZDogVGhlIElEIG9mIHRoZSBzY2FsaW5nIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjYWxpbmdHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWZhdWx0UmVzdWx0OiBUaGUgYWN0aW9uIHRoYXQgdGhlIHNjYWxpbmcgZ3JvdXAgdGFrZXMgd2hlbiB0aGUgbGlmZWN5Y2xlIGhvb2sgdGltZXMgb3V0LiBWYWx1ZSByYW5nZTpcbiAgICAgKiAgQ09OVElOVUU6IHRoZSBzY2FsaW5nIGdyb3VwIGNvbnRpbnVlcyB3aXRoIHRoZSBzY2FsZS1pbiBvciBzY2FsZS1vdXQgcHJvY2Vzcy5cbiAgICAgKiAgQUJBTkRPTjogdGhlIHNjYWxpbmcgZ3JvdXAgc3RvcHMgYW55IHJlbWFpbmluZyBhY3Rpb24gb2YgdGhlIHNjYWxlLWluIG9yIHNjYWxlLW91dCBldmVudC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBDT05USU5VRVxuICAgICAqIElmIHRoZSBzY2FsaW5nIGdyb3VwIGhhcyBtdWx0aXBsZSBsaWZlY3ljbGUgaG9va3MgYW5kIG9uZSBvZiB0aGVtIGlzIHRlcm1pbmF0ZWQgYnkgdGhlIERlZmF1bHRSZXN1bHQ9QUJBTkRPTiBwYXJhbWV0ZXIgZHVyaW5nIGEgc2NhbGUtaW4gZXZlbnQgKFNDQUxFX0lOKSwgdGhlIHJlbWFpbmluZyBsaWZlY3ljbGUgaG9va3MgdW5kZXIgdGhlIHNhbWUgc2NhbGluZyBncm91cCB3aWxsIGFsc28gYmUgdGVybWluYXRlZC4gT3RoZXJ3aXNlLCB0aGUgYWN0aW9uIGZvbGxvd2luZyB0aGUgd2FpdCBzdGF0ZSBpcyB0aGUgbmV4dCBhY3Rpb24sIGFzIHNwZWNpZmllZCBpbiB0aGUgcGFyYW1ldGVyIERlZmF1bHRSZXN1bHQsIGFmdGVyIHRoZSBsYXN0IGxpZmVjeWNsZSBldmVudCB1bmRlciB0aGUgc2FtZSBzY2FsaW5nIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlZmF1bHRSZXN1bHQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoZWFydGJlYXRUaW1lb3V0OiBUaGUgdGltZSwgaW4gc2Vjb25kcywgdGhhdCBjYW4gZWxhcHNlIGJlZm9yZSB0aGUgbGlmZWN5Y2xlIGhvb2sgdGltZXMgb3V0LiBJZiB0aGUgbGlmZWN5Y2xlIGhvb2sgdGltZXMgb3V0LCB0aGUgc2NhbGluZyBncm91cCBwZXJmb3JtcyB0aGUgZGVmYXVsdCBhY3Rpb24gKERlZmF1bHRSZXN1bHQpLiBUaGUgcmFuZ2UgaXMgZnJvbSAzMCB0byA4NjQwMCBzZWNvbmRzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA2MDAgc2Vjb25kcy5cbiAgICAgKiBZb3UgY2FuIHByZXZlbnQgdGhlIGxpZmVjeWNsZSBob29rIGZyb20gdGltaW5nIG91dCBieSBjYWxsaW5nIHRoZSBSZWNvcmRMaWZlY3ljbGVBY3Rpb25IZWFydGJlYXQgb3BlcmF0aW9uLiBZb3UgY2FuIGFsc28gdGVybWluYXRlIHRoZSBsaWZlY3ljbGUgYWN0aW9uIGJ5IGNhbGxpbmcgdGhlIENvbXBsZXRlTGlmZWN5Y2xlQWN0aW9uIG9wZXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBoZWFydGJlYXRUaW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGlmZWN5Y2xlSG9va05hbWU6IFRoZSBuYW1lIG9mIHRoZSBsaWZlY3ljbGUgaG9vay4gRWFjaCBuYW1lIG11c3QgYmUgdW5pcXVlIHdpdGhpbiBhIHNjYWxpbmcgZ3JvdXAuIFRoZSBuYW1lIG11c3QgYmUgMiB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgbnVtYmVycywgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBhbmQgc3BlY2lhbCBjaGFyYWN0ZXJzIGluY2x1ZGluZyB1bmRlcnNjb3JlcyAoXyksIGh5cGhlbnMgKC0pIGFuZCBwZXJpb2RzICguKS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBMaWZlY3ljbGUgSG9vayBJRFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxpZmVjeWNsZUhvb2tOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbm90aWZpY2F0aW9uQXJuOiBUaGUgQWxpYmFiYSBDbG91ZCBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIHRoZSBub3RpZmljYXRpb24gdGFyZ2V0IHRoYXQgQXV0byBTY2FsaW5nIHdpbGwgdXNlIHRvIG5vdGlmeSB5b3Ugd2hlbiBhbiBpbnN0YW5jZSBpcyBpbiB0aGUgdHJhbnNpdGlvbiBzdGF0ZSBmb3IgdGhlIGxpZmVjeWNsZSBob29rLiBUaGlzIHRhcmdldCBjYW4gYmUgZWl0aGVyIGFuIE1OUyBxdWV1ZSBvciBhbiBNTlMgdG9waWMuIFRoZSBmb3JtYXQgb2YgdGhlIHBhcmFtZXRlciB2YWx1ZSBpcyBhY3M6ZXNzOntyZWdpb259OnthY2NvdW50LWlkfTp7cmVzb3VyY2UtcmVsYXRpdmUtaWR9LlxuICAgICAqIHJlZ2lvbjogdGhlIHJlZ2lvbiB0byB3aGljaCB0aGUgc2NhbGluZyBncm91cCBsb2NhdGVzXG4gICAgICogYWNjb3VudC1pZDogQWxpYmFiYSBDbG91ZCBJRFxuICAgICAqIEZvciBleGFtcGxlOlxuICAgICAqIE1OUyBxdWV1ZTogYWNzOmVzczp7cmVnaW9ufTp7YWNjb3VudC1pZH06cXVldWUve3F1ZXVlbmFtZX1cbiAgICAgKiBNTlMgdG9waWM6IGFjczplc3M6e3JlZ2lvbn06e2FjY291bnQtaWR9OnRvcGljL3t0b3BpY25hbWV9XG4gICAgICogT09TIHRlbXBsYXRlOiBhY3M6ZXNzOntyZWdpb259OnthY2NvdW50LWlkfTpvb3Mve3RlbXBsYXRlbmFtZX1cbiAgICAgKi9cbiAgICByZWFkb25seSBub3RpZmljYXRpb25Bcm4/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBub3RpZmljYXRpb25NZXRhZGF0YTogVGhlIGZpeGVkIHN0cmluZyB0aGF0IHlvdSB3YW50IHRvIGluY2x1ZGUgd2hlbiBBdXRvIFNjYWxpbmcgc2VuZHMgYSBtZXNzYWdlIGFib3V0IHRoZSB3YWl0IHN0YXRlIG9mIHRoZSBzY2FsaW5nIGFjdGl2aXR5IHRvIHRoZSBub3RpZmljYXRpb24gdGFyZ2V0LiBUaGUgbGVuZ3RoIG9mIHRoZSBwYXJhbWV0ZXIgY2FuIGJlIHVwIHRvIDQwOTYgY2hhcmFjdGVycy4gQXV0byBTY2FsaW5nIHdpbGwgc2VuZCB0aGUgc3BlY2lmaWVkIE5vdGlmaWNhdGlvbk1ldGFkYXRhIHBhcmFtZXRlciBhbG9uZyB3aXRoIHRoZSBub3RpZmljYXRpb24gbWVzc2FnZSBzbyB0aGF0IHlvdSBjYW4gZWFzaWx5IGNhdGVnb3JpemUgeW91ciBub3RpZmljYXRpb25zLiBUaGUgTm90aWZpY2F0aW9uTWV0YWRhdGEgcGFyYW1ldGVyIHdpbGwgb25seSB0YWtlIGVmZmVjdCBhZnRlciB5b3Ugc3BlY2lmeSB0aGUgTm90aWZpY2F0aW9uQXJuIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBub3RpZmljYXRpb25NZXRhZGF0YT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RVNTOjpMaWZlY3ljbGVIb29rYFxuICovXG5leHBvcnQgY2xhc3MgTGlmZWN5Y2xlSG9vayBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTGlmZWN5Y2xlSG9va0lkOiBUaGUgbGlmZWN5Y2xlIGhvb2sgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxpZmVjeWNsZUhvb2tJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNjYWxpbmdHcm91cElkOiBUaGUgaWQgb2YgdGhlIHNjYWxpbmcgZ3JvdXAgdG8gd2hpY2ggdGhlIGxpZmVjeWNsZSBob29rIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTY2FsaW5nR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVTUzo6TGlmZWN5Y2xlSG9va2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTGlmZWN5Y2xlSG9va1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0xpZmVjeWNsZUhvb2sgPSBuZXcgUm9zTGlmZWN5Y2xlSG9vayh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZUhvb2tOYW1lOiBwcm9wcy5saWZlY3ljbGVIb29rTmFtZSxcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkFybjogcHJvcHMubm90aWZpY2F0aW9uQXJuLFxuICAgICAgICAgICAgc2NhbGluZ0dyb3VwSWQ6IHByb3BzLnNjYWxpbmdHcm91cElkLFxuICAgICAgICAgICAgbGlmZWN5Y2xlVHJhbnNpdGlvbjogcHJvcHMubGlmZWN5Y2xlVHJhbnNpdGlvbixcbiAgICAgICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQ6IHByb3BzLmhlYXJ0YmVhdFRpbWVvdXQsXG4gICAgICAgICAgICBub3RpZmljYXRpb25NZXRhZGF0YTogcHJvcHMubm90aWZpY2F0aW9uTWV0YWRhdGEsXG4gICAgICAgICAgICBkZWZhdWx0UmVzdWx0OiBwcm9wcy5kZWZhdWx0UmVzdWx0LFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0xpZmVjeWNsZUhvb2s7XG4gICAgICAgIHRoaXMuYXR0ckxpZmVjeWNsZUhvb2tJZCA9IHJvc0xpZmVjeWNsZUhvb2suYXR0ckxpZmVjeWNsZUhvb2tJZDtcbiAgICAgICAgdGhpcy5hdHRyU2NhbGluZ0dyb3VwSWQgPSByb3NMaWZlY3ljbGVIb29rLmF0dHJTY2FsaW5nR3JvdXBJZDtcbiAgICB9XG59XG4iXX0=