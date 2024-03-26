"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMetricRule = exports.GroupMetricRuleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cms_generated_1 = require("./cms.generated");
Object.defineProperty(exports, "GroupMetricRuleProperty", { enumerable: true, get: function () { return cms_generated_1.RosGroupMetricRule; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::GroupMetricRule`, which is used to create an alert rule for an application group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroupMetricRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-groupmetricrule
 */
class GroupMetricRule extends ros.Resource {
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
        const rosGroupMetricRule = new cms_generated_1.RosGroupMetricRule(this, id, {
            noEffectiveInterval: props.noEffectiveInterval,
            silenceTime: props.silenceTime,
            category: props.category,
            ruleId: props.ruleId,
            dimensions: props.dimensions,
            period: props.period,
            effectiveInterval: props.effectiveInterval,
            namespace: props.namespace,
            groupId: props.groupId,
            metricName: props.metricName,
            escalations: props.escalations,
            emailSubject: props.emailSubject,
            webhook: props.webhook,
            ruleName: props.ruleName,
            interval: props.interval,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroupMetricRule;
        this.attrRuleId = rosGroupMetricRule.attrRuleId;
    }
}
exports.GroupMetricRule = GroupMetricRule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBtZXRyaWNydWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvdXBtZXRyaWNydWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQTBIdEQ7Ozs7R0FJRztBQUNILE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVc3Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEyQixFQUFFLG1DQUEyQyxJQUFJO1FBQ3RILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtDQUFrQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUMzQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxDQUFDO0lBQ3BELENBQUM7Q0FDSjtBQTNDRCwwQ0EyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NHcm91cE1ldHJpY1J1bGUgfSBmcm9tICcuL2Ntcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NHcm91cE1ldHJpY1J1bGUgYXMgR3JvdXBNZXRyaWNSdWxlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBHcm91cE1ldHJpY1J1bGVgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY21zLWdyb3VwbWV0cmljcnVsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwTWV0cmljUnVsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNhdGVnb3J5OiBUaGUgYWJicmV2aWF0aW9uIG9mIHRoZSBzZXJ2aWNlIG5hbWUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBFQ1MgKGluY2x1ZGluZyBBbGliYWJhIENsb3VkIGFuZCBub24tQWxpYmFiYSBDbG91ZCBob3N0cylcbiAgICAgKiBSRFMgKEFwc2FyYURCIGZvciBSRFMpXG4gICAgICogQURTIChBbmFseXRpY0RCKVxuICAgICAqIFNMQiAoU2VydmVyIExvYWQgQmFsYW5jZXIpXG4gICAgICogVlBDIChWaXJ0dWFsIFByaXZhdGUgQ2xvdWQpXG4gICAgICogQVBJR0FURVdBWSAoQVBJIEdhdGV3YXkpXG4gICAgICogQ0ROXG4gICAgICogQ1MgKENvbnRhaW5lciBTZXJ2aWNlIGZvciBTd2FybSlcbiAgICAgKiBEQ0ROIChEeW5hbWljIFJvdXRlIGZvciBDRE4pXG4gICAgICogRERvUyAoZGlzdHJpYnV0ZWQgZGVuaWFsIG9mIHNlcnZpY2UpXG4gICAgICogRUlQIChFbGFzdGljIElQKVxuICAgICAqIEVMQVNUSUNTRUFSQ0ggKEVsYXN0aWNzZWFyY2gpXG4gICAgICogRU1SIChFLU1hcFJlZHVjZSlcbiAgICAgKiBFU1MgKEF1dG8gU2NhbGluZylcbiAgICAgKiBIQkFTRSAoQXBzYXJhREIgZm9yIEhCYXNlKVxuICAgICAqIElPVF9FREdFIChJb1QgRWRnZSlcbiAgICAgKiBLOFNfUE9EIChrOHMgcG9kKVxuICAgICAqIEtWU1RPUkVfU0hBUkRJTkcgKEFwc2FyYURCIGZvciBSZWRpcyBjbHVzdGVyIHZlcnNpb24pXG4gICAgICogS1ZTVE9SRV9TUExJVFJXIChBcHNhcmFEQiBmb3IgUmVkaXMgcmVhZFxcL3dyaXRlIHNwbGl0dGluZyB2ZXJzaW9uKVxuICAgICAqIEtWU1RPUkVfU1RBTkRBUkQgKEFwc2FyYURCIGZvciBSZWRpcyBzdGFuZGFyZCB2ZXJzaW9uKVxuICAgICAqIE1FTUNBQ0hFIChBcHNhcmFEQiBmb3IgTWVtY2FjaGUpXG4gICAgICogTU5TIChNZXNzYWdlIFNlcnZpY2UpXG4gICAgICogTU9OR09EQiAoQXBzYXJhREIgZm9yIE1vbmdvREIgcmVwbGljYSBzZXQgaW5zdGFuY2VzKVxuICAgICAqIE1PTkdPREJfQ0xVU1RFUiAoQXBzYXJhREIgZm9yIE1vbmdvREIgY2x1c3RlciB2ZXJzaW9uKVxuICAgICAqIE1PTkdPREJfU0hBUkRJTkcgKEFwc2FyYURCIGZvciBNb25nb0RCIHNoYXJkZWQgY2x1c3RlcnMpXG4gICAgICogTVFfVE9QSUMgKE1lc3NhZ2UgU2VydmljZSB0b3BpYylcbiAgICAgKiBPQ1MgKG9yaWdpbmFsIHZlcnNpb24gb2YgQXBzYXJhREIgZm9yIE1lbWNhY2hlKVxuICAgICAqIE9QRU5TRUFSQ0ggKE9wZW4gU2VhcmNoKVxuICAgICAqIE9TUyAoT2JqZWN0IFN0b3JhZ2UgU2VydmljZSlcbiAgICAgKiBQT0xBUkRCIChBcHNhcmFEQiBmb3IgUE9MQVJEQilcbiAgICAgKiBQRVRBREFUQSAoSHlicmlkREIgZm9yIE15U1FMKVxuICAgICAqIFNDRE4gKFNlY3VyZSBDb250ZW50IERlbGl2ZXJ5IE5ldHdvcmspXG4gICAgICogU0hBUkVCQU5EV0lEVEhQQUNLQUdFUyAoc2hhcmVkIGJhbmR3aWR0aCBwYWNrYWdlKVxuICAgICAqIFNMUyAoTG9nIFNlcnZpY2UpXG4gICAgICogVlBOIChWUE4gR2F0ZXdheSlcbiAgICAgKi9cbiAgICByZWFkb25seSBjYXRlZ29yeTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZXNjYWxhdGlvbnM6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVzY2FsYXRpb25zOiBSb3NHcm91cE1ldHJpY1J1bGUuRXNjYWxhdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGdyb3VwSWQ6IFRoZSBJRCBvZiBhcHBsaWNhdGlvbiBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtZXRyaWNOYW1lOiBUaGUgbmFtZSBvZiB0aGUgbWV0cmljLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgY2FsbCBEZXNjcmliZU1ldHJpY01ldGFMaXN0IG9yIHNlZSBQcmVzZXQgbWV0cmljcyByZWZlcmVuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWV0cmljTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZXNwYWNlOiBUaGUgZGF0YSBuYW1lc3BhY2Ugb2YgdGhlIHNlcnZpY2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBjYWxsIERlc2NyaWJlTWV0cmljTWV0YUxpc3RcbiAgICAgKiBvciBzZWUgUHJlc2V0IG1ldHJpY3MgcmVmZXJlbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcnVsZUlkOiBUaGUgSUQgb2YgdGhlIGFsZXJ0IHJ1bGUuIFRoZSBJRHMgb2YgYWxlcnQgcnVsZXMgYXJlIGdlbmVyYXRlZCBieSBjYWxsZXJzIHRvIGVuc3VyZVxuICAgICAqIHVuaXF1ZW5lc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVsZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBydWxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVsZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRpbWVuc2lvbnM6IFRoZSBleHBlbmRlZCByZXNvdXJjZSBkaW1lbnNpb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpbWVuc2lvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlZmZlY3RpdmVJbnRlcnZhbDogVGhlIHBlcmlvZCB3aGVuIHRoZSBhbGVydCBydWxlIGlzIGVmZmVjdGl2ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlZmZlY3RpdmVJbnRlcnZhbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVtYWlsU3ViamVjdDogVGhlIHN1YmplY3Qgb2YgdGhlIGFsZXJ0IG5vdGlmaWNhdGlvbiBlbWFpbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbWFpbFN1YmplY3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnRlcnZhbDogVGhlIGRldGVjdGlvbiBwZXJpb2Qgb2YgYWxlcnRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVydmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbm9FZmZlY3RpdmVJbnRlcnZhbDogVGhlIHBlcmlvZCB3aGVuIHRoZSBhbGVydCBydWxlIGlzIGluZWZmZWN0aXZlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5vRWZmZWN0aXZlSW50ZXJ2YWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSBhZ2dyZWdhdGlvbiBwZXJpb2QuIFVuaXRlOiBzZWNvbmQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2lsZW5jZVRpbWU6IFRoZSBkdXJhdGlvbiBvZiB0aGUgbXV0ZSBwZXJpb2QgZHVyaW5nIHdoaWNoIG5ldyBhbGVydHMgYXJlIG5vdCBzZW50IGV2ZW4gaWYgdGhlIHRyaWdnZXJcbiAgICAgKiBjb25kaXRpb25zIGFyZSBtZXQuIFVuaXQ6IHNlY29uZC4gRGVmYXVsdCB2YWx1ZTogODY0MDAuIE1pbmltdW0gdmFsdWU6IDYwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNpbGVuY2VUaW1lPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd2ViaG9vazogVGhlIFVSTCBvZiB0aGUgY2FsbGJhY2sgdHJpZ2dlcmVkIHdoZW4gYW4gYWxlcnQgb2NjdXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdlYmhvb2s/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gYWxlcnQgcnVsZSBmb3IgYW4gYXBwbGljYXRpb24gZ3JvdXAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NHcm91cE1ldHJpY1J1bGVgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbXMtZ3JvdXBtZXRyaWNydWxlXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91cE1ldHJpY1J1bGUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEdyb3VwTWV0cmljUnVsZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSdWxlSWQ6IFJ1bGUgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSdWxlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBHcm91cE1ldHJpY1J1bGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0dyb3VwTWV0cmljUnVsZSA9IG5ldyBSb3NHcm91cE1ldHJpY1J1bGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICBub0VmZmVjdGl2ZUludGVydmFsOiBwcm9wcy5ub0VmZmVjdGl2ZUludGVydmFsLFxuICAgICAgICAgICAgc2lsZW5jZVRpbWU6IHByb3BzLnNpbGVuY2VUaW1lLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IHByb3BzLmNhdGVnb3J5LFxuICAgICAgICAgICAgcnVsZUlkOiBwcm9wcy5ydWxlSWQsXG4gICAgICAgICAgICBkaW1lbnNpb25zOiBwcm9wcy5kaW1lbnNpb25zLFxuICAgICAgICAgICAgcGVyaW9kOiBwcm9wcy5wZXJpb2QsXG4gICAgICAgICAgICBlZmZlY3RpdmVJbnRlcnZhbDogcHJvcHMuZWZmZWN0aXZlSW50ZXJ2YWwsXG4gICAgICAgICAgICBuYW1lc3BhY2U6IHByb3BzLm5hbWVzcGFjZSxcbiAgICAgICAgICAgIGdyb3VwSWQ6IHByb3BzLmdyb3VwSWQsXG4gICAgICAgICAgICBtZXRyaWNOYW1lOiBwcm9wcy5tZXRyaWNOYW1lLFxuICAgICAgICAgICAgZXNjYWxhdGlvbnM6IHByb3BzLmVzY2FsYXRpb25zLFxuICAgICAgICAgICAgZW1haWxTdWJqZWN0OiBwcm9wcy5lbWFpbFN1YmplY3QsXG4gICAgICAgICAgICB3ZWJob29rOiBwcm9wcy53ZWJob29rLFxuICAgICAgICAgICAgcnVsZU5hbWU6IHByb3BzLnJ1bGVOYW1lLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IHByb3BzLmludGVydmFsLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0dyb3VwTWV0cmljUnVsZTtcbiAgICAgICAgdGhpcy5hdHRyUnVsZUlkID0gcm9zR3JvdXBNZXRyaWNSdWxlLmF0dHJSdWxlSWQ7XG4gICAgfVxufVxuIl19