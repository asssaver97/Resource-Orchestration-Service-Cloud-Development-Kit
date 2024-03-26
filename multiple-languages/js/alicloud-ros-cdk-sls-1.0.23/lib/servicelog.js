"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLog = exports.ServiceLogProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sls_generated_1 = require("./sls.generated");
Object.defineProperty(exports, "ServiceLogProperty", { enumerable: true, get: function () { return sls_generated_1.RosServiceLog; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::ServiceLog`, which is used to enable the service log feature.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceLog`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
 */
class ServiceLog extends ros.Resource {
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
        const rosServiceLog = new sls_generated_1.RosServiceLog(this, id, {
            serviceLogTypes: props.serviceLogTypes,
            projectName: props.projectName,
            logStorageLocation: props.logStorageLocation,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceLog;
        this.attrProjectName = rosServiceLog.attrProjectName;
    }
}
exports.ServiceLog = ServiceLog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2Vsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUF3QjVDOzs7O0dBSUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVd4Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQixFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1NBQy9DLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUN6RCxDQUFDO0NBQ0o7QUEvQkQsZ0NBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU2VydmljZUxvZyB9IGZyb20gJy4vc2xzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1NlcnZpY2VMb2cgYXMgU2VydmljZUxvZ1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgU2VydmljZUxvZ2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1zbHMtc2VydmljZWxvZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VMb2dQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2dTdG9yYWdlTG9jYXRpb246IFRoZSBsb2NhdGlvbiBvZiB0aGUgc2VydmljZSBsb2cuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9nU3RvcmFnZUxvY2F0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm9qZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QgdGhhdCBuZWVkcyB0byBiZSBhY3RpdmF0ZWQuIElmIGl0IGhhcyBiZWVuIGFjdGl2YXRlZCwgaXQgd2lsbCBiZSByZWFjdGl2YXRlZCBhZ2Fpbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9qZWN0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VydmljZUxvZ1R5cGVzOiBUeXBlcyBvZiBzZXJ2aWNlIGxvZyB0aGF0IG5lZWRzIHRvIGJlIGFjdGl2YXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTG9nVHlwZXM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlNMUzo6U2VydmljZUxvZ2AsIHdoaWNoIGlzIHVzZWQgdG8gZW5hYmxlIHRoZSBzZXJ2aWNlIGxvZyBmZWF0dXJlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zU2VydmljZUxvZ2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXNscy1zZXJ2aWNlbG9nXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlTG9nIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBTZXJ2aWNlTG9nUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFByb2plY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdCB0aGF0IG5lZWRzIHRvIGJlIGFjdGl2YXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByb2plY3ROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU2VydmljZUxvZ1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zU2VydmljZUxvZyA9IG5ldyBSb3NTZXJ2aWNlTG9nKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgc2VydmljZUxvZ1R5cGVzOiBwcm9wcy5zZXJ2aWNlTG9nVHlwZXMsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvcHMucHJvamVjdE5hbWUsXG4gICAgICAgICAgICBsb2dTdG9yYWdlTG9jYXRpb246IHByb3BzLmxvZ1N0b3JhZ2VMb2NhdGlvbixcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTZXJ2aWNlTG9nO1xuICAgICAgICB0aGlzLmF0dHJQcm9qZWN0TmFtZSA9IHJvc1NlcnZpY2VMb2cuYXR0clByb2plY3ROYW1lO1xuICAgIH1cbn1cbiJdfQ==