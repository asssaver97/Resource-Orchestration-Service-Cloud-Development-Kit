"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoEnableService = exports.AutoEnableServiceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ros_generated_1 = require("./ros.generated");
Object.defineProperty(exports, "AutoEnableServiceProperty", { enumerable: true, get: function () { return ros_generated_1.RosAutoEnableService; } });
/**
 * A ROS resource type:  `ALIYUN::ROS::AutoEnableService`
 */
class AutoEnableService extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ROS::AutoEnableService`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAutoEnableService = new ros_generated_1.RosAutoEnableService(this, id, {
            serviceName: props.serviceName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAutoEnableService;
    }
}
exports.AutoEnableService = AutoEnableService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2VuYWJsZXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRvZW5hYmxlc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQXVEO0FBRXRCLDBHQUZ4QixvQ0FBb0IsT0FFNkI7QUFpRDFEOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQUUvQzs7O09BR0c7SUFFSDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTZCLEVBQUUsbUNBQTJDLElBQUk7UUFDeEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLG9CQUFvQixHQUFHLElBQUksb0NBQW9CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3RCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDakMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUF0QkQsOENBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQXV0b0VuYWJsZVNlcnZpY2UgfSBmcm9tICcuL3Jvcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBdXRvRW5hYmxlU2VydmljZSBhcyBBdXRvRW5hYmxlU2VydmljZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpST1M6OkF1dG9FbmFibGVTZXJ2aWNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9FbmFibGVTZXJ2aWNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VydmljZU5hbWU6IFdoaWNoIHNlcnZpY2UgdG8gZW5hYmxlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQUhBUzogQXBwbGljYXRpb24gSGlnaCBBdmFpbGFiaWxpdHkgU2VydmljZVxuICAgICAqIEFSTVM6IFJlYWx0aW1lIE1vbml0b3JpbmcgU2VydmljZVxuICAgICAqIEFwaUdhdGV3YXk6IEFQSSBHYXRld2F5XG4gICAgICogQmF0Y2hDb21wdXRlOiBCYXRjaCBDb21wdXRlXG4gICAgICogQnJhaW5JbmR1c3RyaWFsOiBCcmFpbiBJbmR1c3RyaWFsXG4gICAgICogQ2xvdWRTdG9yYWdlR2F0ZXdheTogQ2xvdWQgU3RvcmFnZSBHYXRld2F5XG4gICAgICogQ01TOiBDbG91ZCBNb25pdG9yIFNlcnZpY2VcbiAgICAgKiBDUjogQ29udGFpbmVyIFJlZ2lzdHJ5XG4gICAgICogQ1M6IENvbnRhaW5lciBTZXJ2aWNlXG4gICAgICogRGF0YUh1YjogRGF0YSBIdWJcbiAgICAgKiBEYXRhV29ya3M6IERhdGFXb3Jrc1xuICAgICAqIERDRE46IER5bmFtaWMgUm91dGUgZm9yIENETlxuICAgICAqIEVEQVM6IEVudGVycHJpc2UgRGlzdHJpYnV0ZWQgQXBwbGljYXRpb24gU2VydmljZVxuICAgICAqIEVNQVM6IEVudGVycHJpc2UgTW9iaWxlIEFwcGxpY2F0aW9uIFN0dWRpb1xuICAgICAqIEZDOiBGdW5jdGlvbiBDb21wdXRlXG4gICAgICogRk5GOiBTZXJ2ZXJsZXNzIFdvcmtmbG93XG4gICAgICogTWF4Q29tcHV0ZTogTWF4Q29tcHV0ZVxuICAgICAqIE5BUzogTmV0d29yayBBdHRhY2hlZCBTdG9yYWdlXG4gICAgICogTU5TOiBNZXNzYWdlIFNlcnZpY2UgKE1OUylcbiAgICAgKiBIQlI6IEh5YnJpZCBCYWNrdXAgUmVjb3ZlcnlcbiAgICAgKiBJTU06IEludGVsbGlnZW50IE1lZGlhIE1hbmFnZW1lbnRcbiAgICAgKiBJT1Q6IElvVCBQbGF0Zm9ybVxuICAgICAqIEtNUzogS2V5IE1hbmFnZW1lbnQgU2VydmljZVxuICAgICAqIE5MUDogTmF0dXJhbCBMYW5ndWFnZSBQcm9jZXNzaW5nXG4gICAgICogT1NTOiBPYmplY3QgU3RvcmFnZSBTZXJ2aWNlXG4gICAgICogT1RTOiBUYWJsZSBTdG9yZVxuICAgICAqIFByaXZhdGVMaW5rOiBQcml2YXRlIExpbmtcbiAgICAgKiBQcml2YXRlWm9uZTogUHJpdmF0ZSBab25lXG4gICAgICogUm9ja2V0TVE6IFJvY2tldE1RXG4gICAgICogU0FFOiBTZXJ2ZXJsZXNzIEFwcCBFbmdpbmVcbiAgICAgKiBTTFM6IExvZyBTZXJ2aWNlXG4gICAgICogVHJhZmZpY01pcnJvcjogVlBDIFRyYWZmaWMgTWlycm9yaW5nXG4gICAgICogVlM6IFZpZGVvIFN1cnZlaWxsYW5jZVxuICAgICAqIFh0cmFjZTogVHJhY2luZyBBbmxheXNpc1xuICAgICAqIENETjogQ29udGVudCBEZWxpdmVyeSBOZXR3b3JrXG4gICAgICpcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpST1M6OkF1dG9FbmFibGVTZXJ2aWNlYFxuICovXG5leHBvcnQgY2xhc3MgQXV0b0VuYWJsZVNlcnZpY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJPUzo6QXV0b0VuYWJsZVNlcnZpY2VgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEF1dG9FbmFibGVTZXJ2aWNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQXV0b0VuYWJsZVNlcnZpY2UgPSBuZXcgUm9zQXV0b0VuYWJsZVNlcnZpY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogcHJvcHMuc2VydmljZU5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQXV0b0VuYWJsZVNlcnZpY2U7XG4gICAgfVxufVxuIl19