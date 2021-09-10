"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const elasticsearch_generated_1 = require("./elasticsearch.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return elasticsearch_generated_1.RosInstance; } });
/**
 * A ROS resource type:  `ALIYUN::ElasticSearch::Instance`
 */
class Instance extends ros.Resource {
    /**
     * Create a new `ALIYUN::ElasticSearch::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstance = new elasticsearch_generated_1.RosInstance(this, id, {
            masterNode: props.masterNode,
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            publicWhitelist: props.publicWhitelist,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            vSwitchId: props.vSwitchId,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            enablePublic: props.enablePublic,
            privateWhitelist: props.privateWhitelist,
            version: props.version,
            dataNode: props.dataNode,
            kibanaWhitelist: props.kibanaWhitelist,
            tags: props.tags,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrDomain = rosInstance.attrDomain;
        this.attrInstanceChargeType = rosInstance.attrInstanceChargeType;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrKibanaDomain = rosInstance.attrKibanaDomain;
        this.attrKibanaPort = rosInstance.attrKibanaPort;
        this.attrPort = rosInstance.attrPort;
        this.attrPublicDomain = rosInstance.attrPublicDomain;
        this.attrStatus = rosInstance.attrStatus;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
        this.attrVersion = rosInstance.attrVersion;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsdUVBQXdEO0FBRWhDLGlHQUZmLHFDQUFXLE9BRW9CO0FBOEV4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBeUR0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLHFDQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7WUFDdkksU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUM5RSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQzNCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUN6QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsV0FBVyxDQUFDLHNCQUFzQixDQUFDO1FBQ2pFLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztJQUMvQyxDQUFDO0NBQ0o7QUEvRkQsNEJBK0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW5zdGFuY2UgfSBmcm9tICcuL2VsYXN0aWNzZWFyY2guZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2UgYXMgSW5zdGFuY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RWxhc3RpY1NlYXJjaDo6SW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYXRhTm9kZTogVGhlIEVsYXN0aWNzZWFyY2ggY2x1c3RlcidzIGRhdGEgbm9kZSBzZXR0aW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRhdGFOb2RlOiBSb3NJbnN0YW5jZS5EYXRhTm9kZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGFzc3dvcmQ6IFRoZSBwYXNzd29yZCBvZiB0aGUgaW5zdGFuY2UuIFRoZSBwYXNzd29yZCBjYW4gYmUgOCB0byAzMiBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgbXVzdCBjb250YWluIHRocmVlIG9mIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczogdXBwZXJjYXNlIGxldHRlcnMsIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBhbmQgc3BlY2lhbCBjaGFyYWN0ZXJzICghQCMkJSYqKClfKy09KS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXNzd29yZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdmVyc2lvbjogRWxhc3RpY3NlYXJjaCB2ZXJzaW9uLiBTdXBwb3J0ZWQgdmFsdWVzOiA1LjUuM193aXRoX1gtUGFjaywgNi4zX3dpdGhfWC1QYWNrLCA2Ljdfd2l0aF9YLVBhY2ssIDcuNF93aXRoX1gtUGFjaywgNi44LCA3LjQsIDcuNyBhbmQgc28gb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgSUQgb2YgVlN3aXRjaC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgaW5zdGFuY2UuIEl0IGEgc3RyaW5nIG9mIDAgdG8gMzAgY2hhcmFjdGVycy4gSXQgY2FuIGNvbnRhaW4gbnVtYmVycywgbGV0dGVycywgdW5kZXJzY29yZXMsIChfKSBhbmQgaHlwaGVucyAoLSkuIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgYSBudW1iZXIgb3IgQ2hpbmVzZSBjaGFyYWN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmFibGVQdWJsaWM6IFdoZXRoZXIgZW5hYmxlIHB1YmxpYyBhY2Nlc3MuIElmIHByb3BlcnRpZXMgaXMgdHJ1ZSwgd2lsbCBhbGxvY2F0ZSBwdWJsaWMgYWRkcmVzcy5EZWZhdWx0OiBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVQdWJsaWM/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBWYWxpZCB2YWx1ZXMgYXJlIFByZVBhaWQsIFBvc3RQYWlkLCBEZWZhdWx0IHRvIFBvc3RQYWlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlQ2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGtpYmFuYVdoaXRlbGlzdDogU2V0IHRoZSBLaWJhbmEncyBJUCB3aGl0ZWxpc3QgaW4gaW50ZXJuZXQgbmV0d29yay5cbiAgICAgKi9cbiAgICByZWFkb25seSBraWJhbmFXaGl0ZWxpc3Q/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFzdGVyTm9kZTogVGhlIGRlZGljYXRlZCBtYXN0ZXIgbm9kZSBzZXR0aW5nLiBJZiBzcGVjaWZpZWQsIGRlZGljYXRlZCBtYXN0ZXIgbm9kZSB3aWxsIGJlIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVyTm9kZT86IFJvc0luc3RhbmNlLk1hc3Rlck5vZGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZDogVGhlIGR1cmF0aW9uIHRoYXQgeW91IHdpbGwgYnV5IEVsYXN0aWNzZWFyY2ggaW5zdGFuY2UgKGluIG1vbnRoKS4gSXQgaXMgdmFsaWQgd2hlbiBpbnN0YW5jZV9jaGFyZ2VfdHlwZSBpcyBQcmVQYWlkLiBWYWxpZCB2YWx1ZXM6IFsxfjldLCAxMiwgMjQsIDM2LiBEZWZhdWx0IHRvIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJpdmF0ZVdoaXRlbGlzdDogU2V0IHRoZSBpbnN0YW5jZSdzIElQIHdoaXRlbGlzdCBpbiBWUEMgbmV0d29yay5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcml2YXRlV2hpdGVsaXN0PzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHB1YmxpY1doaXRlbGlzdDogU2V0IHRoZSBpbnN0YW5jZSdzIElQIHdoaXRlbGlzdCBpbiBJbnRlcm5ldC4gVGhlIEFsbG9jYXRlUHVibGljQWRkcmVzcyBzaG91bGQgYmUgdHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwdWJsaWNXaGl0ZWxpc3Q/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0luc3RhbmNlLlRhZ3NQcm9wZXJ0eVtdO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpFbGFzdGljU2VhcmNoOjpJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEb21haW46IEluc3RhbmNlIGNvbm5lY3Rpb24gZG9tYWluIChvbmx5IFZQQyBuZXR3b3JrIGFjY2VzcyBzdXBwb3J0ZWQpLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRG9tYWluOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VDaGFyZ2VUeXBlOiBJbnN0YW5jZSBjaGFyZ2UgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlQ2hhcmdlVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgRWxhc3RpY3NlYXJjaCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBLaWJhbmFEb21haW46IEtpYmFuYSBjb25zb2xlIGRvbWFpbiAoSW50ZXJuZXQgYWNjZXNzIHN1cHBvcnRlZCkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJLaWJhbmFEb21haW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBLaWJhbmFQb3J0OiBLaWJhbmEgY29uc29sZSBwb3J0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyS2liYW5hUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBvcnQ6ICBJbnN0YW5jZSBjb25uZWN0aW9uIHBvcnQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQb3J0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljRG9tYWluOiBJbnN0YW5jZSBwdWJsaWMgY29ubmVjdGlvbiBkb21haW4uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNEb21haW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTdGF0dXM6IFRoZSBFbGFzdGljc2VhcmNoIGluc3RhbmNlIHN0YXR1cy4gSW5jbHVkZXMgYWN0aXZlLCBhY3RpdmF0aW5nLCBpbmFjdGl2ZS4gU29tZSBvcGVyYXRpb25zIGFyZSBkZW5pZWQgd2hlbiBzdGF0dXMgaXMgbm90IGFjdGl2ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN0YXR1czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZTd2l0Y2hJZDogVGhlIElEIG9mIFZTd2l0Y2guXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWU3dpdGNoSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWZXJzaW9uOiBFbGFzdGljc2VhcmNoIHZlcnNpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWZXJzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RWxhc3RpY1NlYXJjaDo6SW5zdGFuY2VgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEluc3RhbmNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zSW5zdGFuY2UgPSBuZXcgUm9zSW5zdGFuY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBtYXN0ZXJOb2RlOiBwcm9wcy5tYXN0ZXJOb2RlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBwdWJsaWNXaGl0ZWxpc3Q6IHByb3BzLnB1YmxpY1doaXRlbGlzdCxcbiAgICAgICAgICAgIGluc3RhbmNlQ2hhcmdlVHlwZTogcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlID09PSB1bmRlZmluZWQgfHwgcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlID09PSBudWxsID8gJ1Bvc3RQYWlkJyA6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogcHJvcHMudlN3aXRjaElkLFxuICAgICAgICAgICAgcGVyaW9kOiBwcm9wcy5wZXJpb2QgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5wZXJpb2QgPT09IG51bGwgPyAxIDogcHJvcHMucGVyaW9kLFxuICAgICAgICAgICAgZW5hYmxlUHVibGljOiBwcm9wcy5lbmFibGVQdWJsaWMsXG4gICAgICAgICAgICBwcml2YXRlV2hpdGVsaXN0OiBwcm9wcy5wcml2YXRlV2hpdGVsaXN0LFxuICAgICAgICAgICAgdmVyc2lvbjogcHJvcHMudmVyc2lvbixcbiAgICAgICAgICAgIGRhdGFOb2RlOiBwcm9wcy5kYXRhTm9kZSxcbiAgICAgICAgICAgIGtpYmFuYVdoaXRlbGlzdDogcHJvcHMua2liYW5hV2hpdGVsaXN0LFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9wcy5wYXNzd29yZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5hdHRyRG9tYWluID0gcm9zSW5zdGFuY2UuYXR0ckRvbWFpbjtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VDaGFyZ2VUeXBlID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlQ2hhcmdlVHlwZTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0luc3RhbmNlLmF0dHJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJLaWJhbmFEb21haW4gPSByb3NJbnN0YW5jZS5hdHRyS2liYW5hRG9tYWluO1xuICAgICAgICB0aGlzLmF0dHJLaWJhbmFQb3J0ID0gcm9zSW5zdGFuY2UuYXR0cktpYmFuYVBvcnQ7XG4gICAgICAgIHRoaXMuYXR0clBvcnQgPSByb3NJbnN0YW5jZS5hdHRyUG9ydDtcbiAgICAgICAgdGhpcy5hdHRyUHVibGljRG9tYWluID0gcm9zSW5zdGFuY2UuYXR0clB1YmxpY0RvbWFpbjtcbiAgICAgICAgdGhpcy5hdHRyU3RhdHVzID0gcm9zSW5zdGFuY2UuYXR0clN0YXR1cztcbiAgICAgICAgdGhpcy5hdHRyVlN3aXRjaElkID0gcm9zSW5zdGFuY2UuYXR0clZTd2l0Y2hJZDtcbiAgICAgICAgdGhpcy5hdHRyVmVyc2lvbiA9IHJvc0luc3RhbmNlLmF0dHJWZXJzaW9uO1xuICAgIH1cbn1cbiJdfQ==