"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Namespaces = exports.NamespacesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sae_generated_1 = require("./sae.generated");
Object.defineProperty(exports, "NamespacesProperty", { enumerable: true, get: function () { return sae_generated_1.RosNamespaces; } });
/**
 * A ROS resource type:  `DATASOURCE::SAE::Namespaces`
 */
class Namespaces extends ros.Resource {
    /**
     * Create a new `DATASOURCE::SAE::Namespaces`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosNamespaces = new sae_generated_1.RosNamespaces(this, id, {}, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosNamespaces;
        this.attrNamespaceIds = rosNamespaces.attrNamespaceIds;
        this.attrNamespaces = rosNamespaces.attrNamespaces;
    }
}
exports.Namespaces = Namespaces;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hbWVzcGFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFRNUM7O0dBRUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCeEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUF5QixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDdEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGFBQWEsR0FBRyxJQUFJLDZCQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRyxFQUNsRCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixLQUFLLENBQUM7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUN2RCxDQUFDO0NBQ0o7QUFsQ0QsZ0NBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTmFtZXNwYWNlcyB9IGZyb20gJy4vc2FlLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc05hbWVzcGFjZXMgYXMgTmFtZXNwYWNlc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6U0FFOjpOYW1lc3BhY2VzYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5hbWVzcGFjZXNQcm9wcyB7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBEQVRBU09VUkNFOjpTQUU6Ok5hbWVzcGFjZXNgXG4gKi9cbmV4cG9ydCBjbGFzcyBOYW1lc3BhY2VzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOYW1lc3BhY2VJZHM6IFRoZSBsaXN0IG9mIG5hbWVzcGFjZSBuYW1lcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWVzcGFjZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5hbWVzcGFjZXM6IFRoZSBsaXN0IG9mIG5hbWVzcGFjZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lc3BhY2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYERBVEFTT1VSQ0U6OlNBRTo6TmFtZXNwYWNlc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTmFtZXNwYWNlc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zTmFtZXNwYWNlcyA9IG5ldyBSb3NOYW1lc3BhY2VzKHRoaXMsIGlkLCAge1xuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgcHJvcHM7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NOYW1lc3BhY2VzO1xuICAgICAgICB0aGlzLmF0dHJOYW1lc3BhY2VJZHMgPSByb3NOYW1lc3BhY2VzLmF0dHJOYW1lc3BhY2VJZHM7XG4gICAgICAgIHRoaXMuYXR0ck5hbWVzcGFjZXMgPSByb3NOYW1lc3BhY2VzLmF0dHJOYW1lc3BhY2VzO1xuICAgIH1cbn1cbiJdfQ==