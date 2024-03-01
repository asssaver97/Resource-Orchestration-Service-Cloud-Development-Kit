"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = exports.ServiceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const pai_generated_1 = require("./pai.generated");
Object.defineProperty(exports, "ServiceProperty", { enumerable: true, get: function () { return pai_generated_1.RosService; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::Service`, which is used to create an Elastic Algorithm Service (EAS) service in Machine Learning Platform for AI (PAI).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
 */
class Service extends ros.Resource {
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
        const rosService = new pai_generated_1.RosService(this, id, {
            develop: props.develop,
            serviceConfig: props.serviceConfig,
            labels: props.labels,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosService;
        this.attrAccessToken = rosService.attrAccessToken;
        this.attrCallerUid = rosService.attrCallerUid;
        this.attrCpu = rosService.attrCpu;
        this.attrCreateTime = rosService.attrCreateTime;
        this.attrCurrentVersion = rosService.attrCurrentVersion;
        this.attrExtraData = rosService.attrExtraData;
        this.attrGpu = rosService.attrGpu;
        this.attrImage = rosService.attrImage;
        this.attrInternetEndpoint = rosService.attrInternetEndpoint;
        this.attrIntranetEndpoint = rosService.attrIntranetEndpoint;
        this.attrLabels = rosService.attrLabels;
        this.attrLatestVersion = rosService.attrLatestVersion;
        this.attrMemory = rosService.attrMemory;
        this.attrMessage = rosService.attrMessage;
        this.attrNamespace = rosService.attrNamespace;
        this.attrParentUid = rosService.attrParentUid;
        this.attrPendingInstance = rosService.attrPendingInstance;
        this.attrReason = rosService.attrReason;
        this.attrResource = rosService.attrResource;
        this.attrResourceAlias = rosService.attrResourceAlias;
        this.attrRole = rosService.attrRole;
        this.attrRoleAttrs = rosService.attrRoleAttrs;
        this.attrRunningInstance = rosService.attrRunningInstance;
        this.attrSafetyLock = rosService.attrSafetyLock;
        this.attrServiceConfig = rosService.attrServiceConfig;
        this.attrServiceGroup = rosService.attrServiceGroup;
        this.attrServiceName = rosService.attrServiceName;
        this.attrServiceUid = rosService.attrServiceUid;
        this.attrTotalInstance = rosService.attrTotalInstance;
        this.attrUpdateTime = rosService.attrUpdateTime;
        this.attrWeight = rosService.attrWeight;
    }
}
exports.Service = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE2QztBQUV0QixnR0FGZCwwQkFBVSxPQUVtQjtBQXdCdEM7Ozs7R0FJRztBQUNILE1BQWEsT0FBUSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUtyQzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxVQUFVLEdBQUcsSUFBSSwwQkFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDdkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUM7UUFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDdEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztRQUM1RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLG9CQUFvQixDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLGlCQUFpQixDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxDQUFDLG1CQUFtQixDQUFDO1FBQzFELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUM7UUFDMUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUM7UUFDdEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7UUFDbEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztJQUM1QyxDQUFDO0NBQ0o7QUFuTkQsMEJBbU5DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU2VydmljZSB9IGZyb20gJy4vcGFpLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1NlcnZpY2UgYXMgU2VydmljZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgU2VydmljZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1wYWktc2VydmljZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2aWNlQ29uZmlnOiBTZXJ2aWNlIGNvbmZpZ3VyYXRpb24gaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZUNvbmZpZzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGV2ZWxvcDogV2hldGhlciB0byBlbnRlciB0aGUgZGV2ZWxvcG1lbnQgbW9kZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXZlbG9wPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGFiZWxzOiBTZXJ2aWNlIFRhZy5cbiAgICAgKi9cbiAgICByZWFkb25seSBsYWJlbHM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlBBSTo6U2VydmljZWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIEVsYXN0aWMgQWxnb3JpdGhtIFNlcnZpY2UgKEVBUykgc2VydmljZSBpbiBNYWNoaW5lIExlYXJuaW5nIFBsYXRmb3JtIGZvciBBSSAoUEFJKS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1NlcnZpY2VgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1wYWktc2VydmljZVxuICovXG5leHBvcnQgY2xhc3MgU2VydmljZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogU2VydmljZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBY2Nlc3NUb2tlbjogU2VydmljZSBSZXF1ZXN0IGF1dGhlbnRpY2F0aW9uIHRva2VuLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjZXNzVG9rZW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDYWxsZXJVaWQ6IFRoZSBJRCBvZiB0aGUgc2VydmljZSBjcmVhdG9yLCB3aGljaCBjYW4gYmUgdGhlIElEIG9mIHRoZSBSQU0gYWNjb3VudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNhbGxlclVpZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENwdTogTnVtYmVyIG9mIHNlcnZpY2UgQ1BVIGNvcmVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3B1OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ3JlYXRlVGltZTogQ3JlYXRpb24gdGltZSBvZiB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDdXJyZW50VmVyc2lvbjogQ3VycmVudCBydW5uaW5nIHZlcnNpb24gb2YgdGhlIHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDdXJyZW50VmVyc2lvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEV4dHJhRGF0YTogU2VydmljZSBFeHRyYSBJbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckV4dHJhRGF0YTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEdwdTogTnVtYmVyIG9mIHNlcnZpY2UgR1BVIGNhcmRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3B1OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW1hZ2U6IFNlcnZpY2UgRGVwbG95bWVudCBNaXJyb3JpbmcuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbWFnZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEludGVybmV0RW5kcG9pbnQ6IFB1YmxpYyBuZXR3b3JrIEVuZHBvaW50IG9mIHRoZSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW50ZXJuZXRFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEludHJhbmV0RW5kcG9pbnQ6IFRoZSBpbnRyYW5ldCBFbmRwb2ludCBvZiB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckludHJhbmV0RW5kcG9pbnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMYWJlbHM6IFNlcnZpY2UgVGFnLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGFiZWxzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTGF0ZXN0VmVyc2lvbjogVGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGF0ZXN0VmVyc2lvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1lbW9yeTogTWVtb3J5IG9mIHNlcnZpY2UgKE1CKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1lbW9yeTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1lc3NhZ2U6IExhdGVzdCBpbmZvcm1hdGlvbiBvbiBzZXJ2aWNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1lc3NhZ2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOYW1lc3BhY2U6IFRoZSBuYW1lc3BhY2UgdG8gd2hpY2ggdGhlIHNlcnZpY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWVzcGFjZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBhcmVudFVpZDogUHJpbWFyeSBhY2NvdW50IElEIG9mIHRoZSBjcmVhdG9yLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGFyZW50VWlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUGVuZGluZ0luc3RhbmNlOiBOdW1iZXIgb2YgaW5zdGFuY2VzIHdoZXJlIHRoZSBzZXJ2aWNlIGlzIG5vdCBjdXJyZW50bHkgcmVhZHkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQZW5kaW5nSW5zdGFuY2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZWFzb246IFNlcnZpY2UgZGVwbG95bWVudCBmYWlsdXJlIHJlYXNvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlYXNvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc291cmNlOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSBzZXJ2aWNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc291cmNlQWxpYXM6IE5hbWUgb2YgdGhlIHJlc291cmNlIGdyb3VwIHdoZXJlIHRoZSBzZXJ2aWNlIHJlc2lkZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZUFsaWFzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUm9sZTogR3JvdXBpbmcgU2VydmljZSBSb2xlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm9sZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJvbGVBdHRyczogR3JvdXBpbmcgU2VydmljZSBSb2xlIFByb3BlcnRpZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb2xlQXR0cnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSdW5uaW5nSW5zdGFuY2U6IE51bWJlciBvZiBpbnN0YW5jZXMgaW4gc2VydmljZSBydW5uaW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUnVubmluZ0luc3RhbmNlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2FmZXR5TG9jazogU2VydmljZSBTZWN1cml0eSBMb2NrIFN0YXR1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNhZmV0eUxvY2s6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZXJ2aWNlQ29uZmlnOiBTZXJ2aWNlIGNvbmZpZ3VyYXRpb24gaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlQ29uZmlnOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmljZUdyb3VwOiBHcm91cCB0byB3aGljaCB0aGUgc2VydmljZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZUdyb3VwOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmljZU5hbWU6IFNlcnZpY2UgTmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmljZVVpZDogVW5pcXVlIFNlcnZpY2UgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlVWlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVG90YWxJbnN0YW5jZTogVG90YWwgbnVtYmVyIG9mIGluc3RhbmNlcyByZXF1aXJlZCBieSB0aGUgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRvdGFsSW5zdGFuY2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBVcGRhdGVUaW1lOiBTZXJ2aWNlIExhc3QgVXBkYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVwZGF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBXZWlnaHQ6IFBhY2tldCBTZXJ2aWNlIFRyYWZmaWMgV2VpZ2h0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyV2VpZ2h0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU2VydmljZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zU2VydmljZSA9IG5ldyBSb3NTZXJ2aWNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGV2ZWxvcDogcHJvcHMuZGV2ZWxvcCxcbiAgICAgICAgICAgIHNlcnZpY2VDb25maWc6IHByb3BzLnNlcnZpY2VDb25maWcsXG4gICAgICAgICAgICBsYWJlbHM6IHByb3BzLmxhYmVscyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTZXJ2aWNlO1xuICAgICAgICB0aGlzLmF0dHJBY2Nlc3NUb2tlbiA9IHJvc1NlcnZpY2UuYXR0ckFjY2Vzc1Rva2VuO1xuICAgICAgICB0aGlzLmF0dHJDYWxsZXJVaWQgPSByb3NTZXJ2aWNlLmF0dHJDYWxsZXJVaWQ7XG4gICAgICAgIHRoaXMuYXR0ckNwdSA9IHJvc1NlcnZpY2UuYXR0ckNwdTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHJvc1NlcnZpY2UuYXR0ckNyZWF0ZVRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckN1cnJlbnRWZXJzaW9uID0gcm9zU2VydmljZS5hdHRyQ3VycmVudFZlcnNpb247XG4gICAgICAgIHRoaXMuYXR0ckV4dHJhRGF0YSA9IHJvc1NlcnZpY2UuYXR0ckV4dHJhRGF0YTtcbiAgICAgICAgdGhpcy5hdHRyR3B1ID0gcm9zU2VydmljZS5hdHRyR3B1O1xuICAgICAgICB0aGlzLmF0dHJJbWFnZSA9IHJvc1NlcnZpY2UuYXR0ckltYWdlO1xuICAgICAgICB0aGlzLmF0dHJJbnRlcm5ldEVuZHBvaW50ID0gcm9zU2VydmljZS5hdHRySW50ZXJuZXRFbmRwb2ludDtcbiAgICAgICAgdGhpcy5hdHRySW50cmFuZXRFbmRwb2ludCA9IHJvc1NlcnZpY2UuYXR0ckludHJhbmV0RW5kcG9pbnQ7XG4gICAgICAgIHRoaXMuYXR0ckxhYmVscyA9IHJvc1NlcnZpY2UuYXR0ckxhYmVscztcbiAgICAgICAgdGhpcy5hdHRyTGF0ZXN0VmVyc2lvbiA9IHJvc1NlcnZpY2UuYXR0ckxhdGVzdFZlcnNpb247XG4gICAgICAgIHRoaXMuYXR0ck1lbW9yeSA9IHJvc1NlcnZpY2UuYXR0ck1lbW9yeTtcbiAgICAgICAgdGhpcy5hdHRyTWVzc2FnZSA9IHJvc1NlcnZpY2UuYXR0ck1lc3NhZ2U7XG4gICAgICAgIHRoaXMuYXR0ck5hbWVzcGFjZSA9IHJvc1NlcnZpY2UuYXR0ck5hbWVzcGFjZTtcbiAgICAgICAgdGhpcy5hdHRyUGFyZW50VWlkID0gcm9zU2VydmljZS5hdHRyUGFyZW50VWlkO1xuICAgICAgICB0aGlzLmF0dHJQZW5kaW5nSW5zdGFuY2UgPSByb3NTZXJ2aWNlLmF0dHJQZW5kaW5nSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuYXR0clJlYXNvbiA9IHJvc1NlcnZpY2UuYXR0clJlYXNvbjtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2UgPSByb3NTZXJ2aWNlLmF0dHJSZXNvdXJjZTtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VBbGlhcyA9IHJvc1NlcnZpY2UuYXR0clJlc291cmNlQWxpYXM7XG4gICAgICAgIHRoaXMuYXR0clJvbGUgPSByb3NTZXJ2aWNlLmF0dHJSb2xlO1xuICAgICAgICB0aGlzLmF0dHJSb2xlQXR0cnMgPSByb3NTZXJ2aWNlLmF0dHJSb2xlQXR0cnM7XG4gICAgICAgIHRoaXMuYXR0clJ1bm5pbmdJbnN0YW5jZSA9IHJvc1NlcnZpY2UuYXR0clJ1bm5pbmdJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5hdHRyU2FmZXR5TG9jayA9IHJvc1NlcnZpY2UuYXR0clNhZmV0eUxvY2s7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VDb25maWcgPSByb3NTZXJ2aWNlLmF0dHJTZXJ2aWNlQ29uZmlnO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlR3JvdXAgPSByb3NTZXJ2aWNlLmF0dHJTZXJ2aWNlR3JvdXA7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gcm9zU2VydmljZS5hdHRyU2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VVaWQgPSByb3NTZXJ2aWNlLmF0dHJTZXJ2aWNlVWlkO1xuICAgICAgICB0aGlzLmF0dHJUb3RhbEluc3RhbmNlID0gcm9zU2VydmljZS5hdHRyVG90YWxJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5hdHRyVXBkYXRlVGltZSA9IHJvc1NlcnZpY2UuYXR0clVwZGF0ZVRpbWU7XG4gICAgICAgIHRoaXMuYXR0cldlaWdodCA9IHJvc1NlcnZpY2UuYXR0cldlaWdodDtcbiAgICB9XG59XG4iXX0=