"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = exports.ServiceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const fc_generated_1 = require("./fc.generated");
Object.defineProperty(exports, "ServiceProperty", { enumerable: true, get: function () { return fc_generated_1.RosService; } });
/**
 * A ROS resource type:  `ALIYUN::FC::Service`
 */
class Service extends ros.Resource {
    /**
     * Create a new `ALIYUN::FC::Service`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosService = new fc_generated_1.RosService(this, id, {
            role: props.role,
            internetAccess: props.internetAccess,
            description: props.description,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            tracingConfig: props.tracingConfig,
            vpcConfig: props.vpcConfig,
            serviceName: props.serviceName,
            tags: props.tags,
            nasConfig: props.nasConfig,
            logConfig: props.logConfig,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosService;
        this.attrInternetAccess = rosService.attrInternetAccess;
        this.attrLogProject = rosService.attrLogProject;
        this.attrLogstore = rosService.attrLogstore;
        this.attrRole = rosService.attrRole;
        this.attrServiceId = rosService.attrServiceId;
        this.attrServiceName = rosService.attrServiceName;
        this.attrTags = rosService.attrTags;
        this.attrVpcId = rosService.attrVpcId;
    }
}
exports.Service = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLGlEQUE0QztBQUVyQixnR0FGZCx5QkFBVSxPQUVtQjtBQTBEdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQStDckM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxVQUFVLEdBQUcsSUFBSSx5QkFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQzlHLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1NBQzdCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7Q0FDSjtBQS9FRCwwQkErRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTZXJ2aWNlIH0gZnJvbSAnLi9mYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTZXJ2aWNlIGFzIFNlcnZpY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RkM6OlNlcnZpY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVsZXRpb25Gb3JjZTogV2hldGhlciBmb3JjZSBkZWxldGUgdGhlIHNlcnZpY2Ugd2l0aG91dCB3YWl0aW5nIGZvciBuZXR3b3JrIGludGVyZmFjZXMgdG8gYmUgY2xlYW5lZCB1cCBpZiBWcGNDb25maWcgaXMgc3BlY2lmaWVkLiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uRm9yY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFNlcnZpY2UgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGludGVybmV0QWNjZXNzOiBTZXQgaXQgdG8gdHJ1ZSB0byBlbmFibGUgSW50ZXJuZXQgYWNjZXNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0QWNjZXNzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvZ0NvbmZpZzogTG9nIGNvbmZpZ3VyYXRpb24uIEZ1bmN0aW9uIENvbXB1dGUgcHVzaGVzIGZ1bmN0aW9uIGV4ZWN1dGlvbiBsb2dzIHRvIHRoZSBjb25maWd1cmVkIGxvZyBzdG9yZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dDb25maWc/OiBSb3NTZXJ2aWNlLkxvZ0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFzQ29uZmlnOiBOQVMgY29uZmlndXJhdGlvbi4gRnVuY3Rpb24gQ29tcHV0ZSB1c2VzIGEgc3BlY2lmaWVkIE5BUyBjb25maWd1cmVkIG9uIHRoZSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hc0NvbmZpZz86IFJvc1NlcnZpY2UuTmFzQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb2xlOiBUaGUgcm9sZSBncmFudHMgRnVuY3Rpb24gQ29tcHV0ZSB0aGUgcGVybWlzc2lvbiB0byBhY2Nlc3MgdXNlcuKAmXMgY2xvdWQgcmVzb3VyY2VzLCBzdWNoIGFzIHB1c2hpbmcgbG9ncyB0byB1c2Vy4oCZcyBsb2cgc3RvcmUuIFRoZSB0ZW1wb3JhcnkgU1RTIHRva2VuIGdlbmVyYXRlZCBmcm9tIHRoaXMgcm9sZSBjYW4gYmUgcmV0cmlldmVkIGZyb20gZnVuY3Rpb24gY29udGV4dCBhbmQgdXNlZCB0byBhY2Nlc3MgY2xvdWQgcmVzb3VyY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvbGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBzZXJ2aWNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIHNlcnZpY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zU2VydmljZS5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRyYWNpbmdDb25maWc6IFRoZSBUcmFjaW5nIEFuYWx5c2lzIGNvbmZpZ3VyYXRpb24uIEFmdGVyIEZ1bmN0aW9uIENvbXB1dGUgaW50ZWdyYXRlcyB3aXRoIFRyYWNpbmcgQW5hbHlzaXMsIHlvdSBjYW4gcmVjb3JkIHRoZSBzdGF5IHRpbWUgb2YgYSByZXF1ZXN0IGluIEZ1bmN0aW9uIENvbXB1dGUsIHZpZXcgdGhlIGNvbGQgc3RhcnQgdGltZSBmb3IgYSBmdW5jdGlvbiwgYW5kIHJlY29yZCB0aGUgZXhlY3V0aW9uIHRpbWUgb2YgYSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFjaW5nQ29uZmlnPzogUm9zU2VydmljZS5UcmFjaW5nQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNDb25maWc6IFZQQyBjb25maWd1cmF0aW9uLiBGdW5jdGlvbiBDb21wdXRlIHVzZXMgdGhlIGNvbmZpZyB0byBzZXR1cCBFTkkgaW4gdGhlIHNwZWNpZmljIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNDb25maWc/OiBSb3NTZXJ2aWNlLlZwY0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpGQzo6U2VydmljZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZpY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEludGVybmV0QWNjZXNzOiBXaGV0aGVyIGVuYWJsZSBJbnRlcm5ldCBhY2Nlc3NcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckludGVybmV0QWNjZXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTG9nUHJvamVjdDogTG9nIHByb2plY3Qgb2Ygc2VydmljZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9nUHJvamVjdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExvZ3N0b3JlOiBMb2cgc3RvcmUgb2Ygc2VydmljZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9nc3RvcmU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSb2xlOiBSb2xlIG9mIHNlcnZpY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvbGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZXJ2aWNlSWQ6IFRoZSBzZXJ2aWNlIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZXJ2aWNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZXJ2aWNlTmFtZTogVGhlIHNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUYWdzOiBUYWdzIG9mIHNlcnZpY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhZ3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcGNJZDogVlBDIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkZDOjpTZXJ2aWNlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTZXJ2aWNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zU2VydmljZSA9IG5ldyBSb3NTZXJ2aWNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcm9sZTogcHJvcHMucm9sZSxcbiAgICAgICAgICAgIGludGVybmV0QWNjZXNzOiBwcm9wcy5pbnRlcm5ldEFjY2VzcyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRlbGV0aW9uRm9yY2U6IHByb3BzLmRlbGV0aW9uRm9yY2UgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5kZWxldGlvbkZvcmNlID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5kZWxldGlvbkZvcmNlLFxuICAgICAgICAgICAgdHJhY2luZ0NvbmZpZzogcHJvcHMudHJhY2luZ0NvbmZpZyxcbiAgICAgICAgICAgIHZwY0NvbmZpZzogcHJvcHMudnBjQ29uZmlnLFxuICAgICAgICAgICAgc2VydmljZU5hbWU6IHByb3BzLnNlcnZpY2VOYW1lLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgICAgIG5hc0NvbmZpZzogcHJvcHMubmFzQ29uZmlnLFxuICAgICAgICAgICAgbG9nQ29uZmlnOiBwcm9wcy5sb2dDb25maWcsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU2VydmljZTtcbiAgICAgICAgdGhpcy5hdHRySW50ZXJuZXRBY2Nlc3MgPSByb3NTZXJ2aWNlLmF0dHJJbnRlcm5ldEFjY2VzcztcbiAgICAgICAgdGhpcy5hdHRyTG9nUHJvamVjdCA9IHJvc1NlcnZpY2UuYXR0ckxvZ1Byb2plY3Q7XG4gICAgICAgIHRoaXMuYXR0ckxvZ3N0b3JlID0gcm9zU2VydmljZS5hdHRyTG9nc3RvcmU7XG4gICAgICAgIHRoaXMuYXR0clJvbGUgPSByb3NTZXJ2aWNlLmF0dHJSb2xlO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlSWQgPSByb3NTZXJ2aWNlLmF0dHJTZXJ2aWNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gcm9zU2VydmljZS5hdHRyU2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMuYXR0clRhZ3MgPSByb3NTZXJ2aWNlLmF0dHJUYWdzO1xuICAgICAgICB0aGlzLmF0dHJWcGNJZCA9IHJvc1NlcnZpY2UuYXR0clZwY0lkO1xuICAgIH1cbn1cbiJdfQ==