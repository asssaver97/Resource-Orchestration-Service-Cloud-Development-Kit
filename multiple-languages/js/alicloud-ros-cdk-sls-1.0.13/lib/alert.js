"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = exports.AlertProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sls_generated_1 = require("./sls.generated");
Object.defineProperty(exports, "AlertProperty", { enumerable: true, get: function () { return sls_generated_1.RosAlert; } });
/**
 * A ROS resource type:  `ALIYUN::SLS::Alert`
 */
class Alert extends ros.Resource {
    /**
     * Create a new `ALIYUN::SLS::Alert`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAlert = new sls_generated_1.RosAlert(this, id, {
            project: props.project,
            detail: props.detail,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlert;
        this.attrName = rosAlert.attrName;
    }
}
exports.Alert = Alert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTJDO0FBRXRCLDhGQUZaLHdCQUFRLE9BRWlCO0FBcUJsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWW5DOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDdkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3RDLENBQUM7Q0FDSjtBQTdCRCxzQkE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBbGVydCB9IGZyb20gJy4vc2xzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0FsZXJ0IGFzIEFsZXJ0UHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMUzo6QWxlcnRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXRhaWw6XG4gICAgICovXG4gICAgcmVhZG9ubHkgZGV0YWlsOiBSb3NBbGVydC5EZXRhaWxQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByb2plY3Q6IFByb2plY3QgbmFtZTpcbiAgICAgKiAxLiBPbmx5IHN1cHBvcnRzIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBoeXBoZW5zICgtKSBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIDIuIE11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBudW1iZXJzLlxuICAgICAqIDMuIFRoZSBuYW1lIGxlbmd0aCBpcyAzLTYzIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvamVjdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpTTFM6OkFsZXJ0YFxuICovXG5leHBvcnQgY2xhc3MgQWxlcnQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5hbWU6IEFsZXJ0IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xTOjpBbGVydGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQWxlcnRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NBbGVydCA9IG5ldyBSb3NBbGVydCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHByb2plY3Q6IHByb3BzLnByb2plY3QsXG4gICAgICAgICAgICBkZXRhaWw6IHByb3BzLmRldGFpbCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NBbGVydDtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IHJvc0FsZXJ0LmF0dHJOYW1lO1xuICAgIH1cbn1cbiJdfQ==