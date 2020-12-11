"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Namespace = exports.NamespaceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cr_generated_1 = require("./cr.generated");
Object.defineProperty(exports, "NamespaceProperty", { enumerable: true, get: function () { return cr_generated_1.RosNamespace; } });
/**
 * A ROS resource type:  `ALIYUN::CR::Namespace`
 */
class Namespace extends ros.Resource {
    /**
     * Create a new `ALIYUN::CR::Namespace`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosNamespace = new cr_generated_1.RosNamespace(this, id, {
            autoCreate: props.autoCreate ? props.autoCreate : true,
            defaultVisibility: props.defaultVisibility ? props.defaultVisibility : 'PRIVATE',
            namespace: props.namespace,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespace;
        this.attrNamespaceId = rosNamespace.attrNamespaceId;
    }
}
exports.Namespace = Namespace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmFtZXNwYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpREFBOEM7QUFFckIsa0dBRmhCLDJCQUFZLE9BRXFCO0FBdUIxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWXZDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBcUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNoSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3RELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ2hGLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztTQUM3QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUM7SUFDeEQsQ0FBQztDQUNKO0FBOUJELDhCQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc05hbWVzcGFjZSB9IGZyb20gJy4vY3IuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zTmFtZXNwYWNlIGFzIE5hbWVzcGFjZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDUjo6TmFtZXNwYWNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5hbWVzcGFjZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lc3BhY2U6IGRvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZXNwYWNlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXV0b0NyZWF0ZTogd2hldGhlciBhdXRvIGNyZWF0ZSByZXBvc2l0b3J5XG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b0NyZWF0ZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVmYXVsdFZpc2liaWxpdHk6IHJlcG9zaXRvcnkgZGVmYXVsdCB2aXNpYmlsaXR5LCBwdWJsaWMgb3IgcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlZmF1bHRWaXNpYmlsaXR5Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpDUjo6TmFtZXNwYWNlYFxuICovXG5leHBvcnQgY2xhc3MgTmFtZXNwYWNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmFtZXNwYWNlSWQ6IFRoZSBuYW1lc3BhY2UgaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWVzcGFjZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q1I6Ok5hbWVzcGFjZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTmFtZXNwYWNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zTmFtZXNwYWNlID0gbmV3IFJvc05hbWVzcGFjZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGF1dG9DcmVhdGU6IHByb3BzLmF1dG9DcmVhdGUgPyBwcm9wcy5hdXRvQ3JlYXRlIDogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmF1bHRWaXNpYmlsaXR5OiBwcm9wcy5kZWZhdWx0VmlzaWJpbGl0eSA/IHByb3BzLmRlZmF1bHRWaXNpYmlsaXR5IDogJ1BSSVZBVEUnLFxuICAgICAgICAgICAgbmFtZXNwYWNlOiBwcm9wcy5uYW1lc3BhY2UsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zTmFtZXNwYWNlO1xuICAgICAgICB0aGlzLmF0dHJOYW1lc3BhY2VJZCA9IHJvc05hbWVzcGFjZS5hdHRyTmFtZXNwYWNlSWQ7XG4gICAgfVxufVxuIl19