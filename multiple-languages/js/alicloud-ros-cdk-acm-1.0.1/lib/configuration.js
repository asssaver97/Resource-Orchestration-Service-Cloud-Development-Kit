"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = exports.ConfigurationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const acm_generated_1 = require("./acm.generated");
Object.defineProperty(exports, "ConfigurationProperty", { enumerable: true, get: function () { return acm_generated_1.RosConfiguration; } });
/**
 * A ROS resource type:  `ALIYUN::ACM::Configuration`
 */
class Configuration extends ros.Resource {
    /**
     * Create a new `ALIYUN::ACM::Configuration`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosConfiguration = new acm_generated_1.RosConfiguration(this, id, {
            group: props.group ? props.group : 'DEFAULT_GROUP',
            desc: props.desc,
            type: props.type ? props.type : 'text',
            dataId: props.dataId,
            content: props.content,
            namespaceId: props.namespaceId,
            tags: props.tags,
            appName: props.appName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConfiguration;
        this.attrDataId = rosConfiguration.attrDataId;
        this.attrGroup = rosConfiguration.attrGroup;
        this.attrNamespaceId = rosConfiguration.attrNamespaceId;
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBbURsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0IzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksZ0NBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZUFBZTtZQUNsRCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU07WUFDdEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztTQUN6QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBQzVELENBQUM7Q0FDSjtBQS9DRCxzQ0ErQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9hY20uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQ29uZmlndXJhdGlvbiBhcyBDb25maWd1cmF0aW9uUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkFDTTo6Q29uZmlndXJhdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29udGVudDogVGhlIGNvbnRlbnRzIG9mIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGVudDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGF0YUlkOiBUaGUgSUQgb2YgdGhlIGNvbmZpZ3VyYXRpb24uIEFsbG93ZWQgY2hhcmFjdGVycyBhcmUgdXBwZXIgYW5kIGxvd2VyIGNhc2UgbGV0dGVycywgbnVtYmVycywgZGVjaW1hbCBwb2ludHMgKC4pLCBDb2xvbnMgKDopLCBhc3Rlcmlza3MgKCopLCB1bmRlcnNjb3JlcyAoXyksIGFuZCB1bmRlcnNjb3JlcyAoLSkuIFdoZW4gdGhlIElEIHByZWZpeCBpcyB0aGUgZm9sbG93aW5nIHZhbHVlLCBBQ00gd2lsbCBhdXRvbWF0aWNhbGx5IHVzZSBLTVMgc2VydmljZSB0byBlbmNyeXB0IHRoaXMgY29uZmlndXJhdGlvbjpcbiAgICAgKiBUaGUgcHJlZml4IGlzIGNpcGhlci06IHRoZSBLTVMgc2VydmljZSBpcyBjYWxsZWQgdG8gZW5jcnlwdCBhbmQgZGVjcnlwdCB0aGUgY29uZmlndXJhdGlvbi4gVGhlIHNpemUgb2YgdGhlIGVuY3J5cHRlZCBkYXRhIGRvZXMgbm90IGV4Y2VlZCA0IEtCLCBhbmQgdGhlIG1heGltdW0gZG9lcyBub3QgZXhjZWVkIDYgS0IuIFNwZWNpYWwgc3ltYm9scyBzdWNoIGFzIGFuZCAoJmFtcDspIHdpbGwgZGVjcnlwdCBlcnJvcnMgYW5kIGFyZSBub3QgcmVjb21tZW5kZWQuXG4gICAgICogVGhlIHByZWZpeCBpcyBjaXBoZXIta21zLWFlcy0xMjgtOiB1c2luZyBLTVMncyBlbnZlbG9wZSBlbmNyeXB0aW9uIGFuZCBkZWNyeXB0aW9uIG1ldGhvZCwgdGhlIGNvbmZpZ3VyYXRpb24gY29udGVudCBjYW4gZXhjZWVkICA2IEtCLCB1cCB0byAxMDAgS0IuIFRoZSBwbGFpbiB0ZXh0IGRhdGEgb2YgdGhlIGNvbmZpZ3VyYXRpb24gY29udGVudCB3aWxsIG5vdCBiZSB0cmFuc21pdHRlZCB0byB0aGUgS01TIHN5c3RlbSwgd2hpY2ggaXMgbW9yZSBzZWN1cmUgYW5kIHJlY29tbWVuZGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRhdGFJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZXNwYWNlSWQ6IElEIG9mIG5hbWVzcGFjZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhcHBOYW1lOiBDb25maWd1cmF0aW9uIGFwcGxpY2F0aW9uIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzYzogQ29uZmlndXJhdGlvbiBkZXNjcmlwdGlvbiBleHBsYWluc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBncm91cDogR3JvdXBcbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IExhYmVsIGNvbmZpZ3VyYXRpb25zLCBzdWNoIGFzIHRoZSBwcmVzZW5jZSBvZiBhIHBsdXJhbGl0eSBvZiB0YWdzLCBzZXBhcmF0ZWQgYnkgY29tbWFzXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHR5cGU6IFByb3Zpc2lvbmluZyBjb250ZW50IGZvcm1hdCwgb3B0aW9uYWwgdmFsdWVzIGFzIGZvbGxvd3M6XG4gICAgICogdGV4dCwganNvbiwgeG1sLCB5YW1sLCB0ZXh0L2h0bWwsIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICByZWFkb25seSB0eXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpBQ006OkNvbmZpZ3VyYXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEYXRhSWQ6IFRoZSBJRCBvZiB0aGUgY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGF0YUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgR3JvdXA6IEdyb3VwXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5hbWVzcGFjZUlkOiBJRCBvZiBuYW1lc3BhY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWVzcGFjZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6QUNNOjpDb25maWd1cmF0aW9uYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDb25maWd1cmF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQ29uZmlndXJhdGlvbiA9IG5ldyBSb3NDb25maWd1cmF0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZ3JvdXA6IHByb3BzLmdyb3VwID8gcHJvcHMuZ3JvdXAgOiAnREVGQVVMVF9HUk9VUCcsXG4gICAgICAgICAgICBkZXNjOiBwcm9wcy5kZXNjLFxuICAgICAgICAgICAgdHlwZTogcHJvcHMudHlwZSA/IHByb3BzLnR5cGUgOiAndGV4dCcsXG4gICAgICAgICAgICBkYXRhSWQ6IHByb3BzLmRhdGFJZCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHByb3BzLmNvbnRlbnQsXG4gICAgICAgICAgICBuYW1lc3BhY2VJZDogcHJvcHMubmFtZXNwYWNlSWQsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgYXBwTmFtZTogcHJvcHMuYXBwTmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLmF0dHJEYXRhSWQgPSByb3NDb25maWd1cmF0aW9uLmF0dHJEYXRhSWQ7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwID0gcm9zQ29uZmlndXJhdGlvbi5hdHRyR3JvdXA7XG4gICAgICAgIHRoaXMuYXR0ck5hbWVzcGFjZUlkID0gcm9zQ29uZmlndXJhdGlvbi5hdHRyTmFtZXNwYWNlSWQ7XG4gICAgfVxufVxuIl19