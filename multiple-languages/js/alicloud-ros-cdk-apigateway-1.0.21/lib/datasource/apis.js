"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apis = exports.ApisProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const apigateway_generated_1 = require("./apigateway.generated");
Object.defineProperty(exports, "ApisProperty", { enumerable: true, get: function () { return apigateway_generated_1.RosApis; } });
/**
 * A ROS resource type:  `DATASOURCE::ApiGateway::Apis`
 */
class Apis extends ros.Resource {
    /**
     * Create a new `DATASOURCE::ApiGateway::Apis`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosApis = new apigateway_generated_1.RosApis(this, id, {
            enableTagAuth: props.enableTagAuth,
            apiName: props.apiName,
            visibility: props.visibility,
            apiId: props.apiId,
            catalogId: props.catalogId,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApis;
        this.attrApiIds = rosApis.attrApiIds;
        this.attrApis = rosApis.attrApis;
    }
}
exports.Apis = Apis;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLGlFQUFpRDtBQUU3Qiw2RkFGWCw4QkFBTyxPQUVnQjtBQXNDaEM7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCbEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUFtQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDaEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLE9BQU8sR0FBRyxJQUFJLDhCQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztTQUN6QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7Q0FDSjtBQXZDRCxvQkF1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBcGlzIH0gZnJvbSAnLi9hcGlnYXRld2F5LmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0FwaXMgYXMgQXBpc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6QXBpR2F0ZXdheTo6QXBpc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcGlzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXBpSWQ6IElEIG9mIHRoZSBzcGVjaWZpZWQgQVBJLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwaUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXBpTmFtZTogQVBJIG5hbWUgKGZ1enp5IG1hdGNoaW5nKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcGlOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2F0YWxvZ0lkOiBDYXRhbG9nIG51bWJlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjYXRhbG9nSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmFibGVUYWdBdXRoOiBFbmFibGUgbGFiZWwgdmFsaWRhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVUYWdBdXRoPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGdyb3VwSWQ6IElEIG9mIHRoZSBzcGVjaWZpZWQgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZpc2liaWxpdHk6IFdoZXRoZXIgdGhlIEFQSSBpcyBwdWJsaWMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmlzaWJpbGl0eT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYERBVEFTT1VSQ0U6OkFwaUdhdGV3YXk6OkFwaXNgXG4gKi9cbmV4cG9ydCBjbGFzcyBBcGlzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBcGlJZHM6IFRoZSBsaXN0IG9mIFRoZSBBcGlHYXRld2F5IGFwaSBpZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcGlJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBcGlzOiBUaGUgaW5mb3JtYXRpb24gYWJvdXQgQXBpR2F0ZXdheSBhcGlzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBpczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpBcGlHYXRld2F5OjpBcGlzYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBcGlzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NBcGlzID0gbmV3IFJvc0FwaXModGhpcywgaWQsICB7XG4gICAgICAgICAgICBlbmFibGVUYWdBdXRoOiBwcm9wcy5lbmFibGVUYWdBdXRoLFxuICAgICAgICAgICAgYXBpTmFtZTogcHJvcHMuYXBpTmFtZSxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHByb3BzLnZpc2liaWxpdHksXG4gICAgICAgICAgICBhcGlJZDogcHJvcHMuYXBpSWQsXG4gICAgICAgICAgICBjYXRhbG9nSWQ6IHByb3BzLmNhdGFsb2dJZCxcbiAgICAgICAgICAgIGdyb3VwSWQ6IHByb3BzLmdyb3VwSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQXBpcztcbiAgICAgICAgdGhpcy5hdHRyQXBpSWRzID0gcm9zQXBpcy5hdHRyQXBpSWRzO1xuICAgICAgICB0aGlzLmF0dHJBcGlzID0gcm9zQXBpcy5hdHRyQXBpcztcbiAgICB9XG59XG4iXX0=