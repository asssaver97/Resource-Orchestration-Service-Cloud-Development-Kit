"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficControl = exports.TrafficControlProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const apigateway_generated_1 = require("./apigateway.generated");
Object.defineProperty(exports, "TrafficControlProperty", { enumerable: true, get: function () { return apigateway_generated_1.RosTrafficControl; } });
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::TrafficControl`
 */
class TrafficControl extends ros.Resource {
    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControl`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosTrafficControl = new apigateway_generated_1.RosTrafficControl(this, id, {
            description: props.description,
            trafficControlUnit: props.trafficControlUnit,
            trafficControlName: props.trafficControlName,
            appDefault: props.appDefault,
            special: props.special,
            userDefault: props.userDefault,
            apiDefault: props.apiDefault,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficControl;
        this.attrTrafficControlId = rosTrafficControl.attrTrafficControlId;
    }
}
exports.TrafficControl = TrafficControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpY2NvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFmZmljY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaUVBQTJEO0FBRTdCLHVHQUZyQix3Q0FBaUIsT0FFMEI7QUEyQ3BEOztHQUVHO0FBQ0gsTUFBYSxjQUFlLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZNUM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEwQixFQUFFLG1DQUEyQyxJQUFJO1FBQ3JILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHdDQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkQsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUNsQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsaUJBQWlCLENBQUMsb0JBQW9CLENBQUM7SUFDdkUsQ0FBQztDQUNKO0FBbENELHdDQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1RyYWZmaWNDb250cm9sIH0gZnJvbSAnLi9hcGlnYXRld2F5LmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1RyYWZmaWNDb250cm9sIGFzIFRyYWZmaWNDb250cm9sUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkFwaUdhdGV3YXk6OlRyYWZmaWNDb250cm9sYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYWZmaWNDb250cm9sUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXBpRGVmYXVsdDogRGVmYXVsdCBBUEkgdHJhZmZpYyB2YWx1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcGlEZWZhdWx0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0cmFmZmljQ29udHJvbE5hbWU6IFRoZSBuYW1lIG9mIHRoZSB0cmFmZmljIGNvbnRyb2wuTmVlZCBbNCwgNTBdIENoaW5lc2VcXEVuZ2xpc2hcXE51bWJlciBjaGFyYWN0ZXJzIG9yIFwiX1wiLGFuZCBzaG91bGQgc3RhcnQgd2l0aCBDaGluZXNlL0VuZ2xpc2ggY2hhcmFjdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYWZmaWNDb250cm9sTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHJhZmZpY0NvbnRyb2xVbml0OiBUcmFmZmljIGNvbnRyb2wgdW5pdCwgREFZL0hPVVIvTUlOVVRFLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYWZmaWNDb250cm9sVW5pdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXBwRGVmYXVsdDogRGVmYXVsdCBBUFAgdHJhZmZpYyB2YWx1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBEZWZhdWx0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIHRoZSB0cmFmZmljIGNvbnRyb2wsIGxlc3MgdGhhbiAxODAgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNwZWNpYWw6IFNwZWNpYWwgdHJhZmZpYyBjb250cm9scy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcGVjaWFsPzogQXJyYXk8Um9zVHJhZmZpY0NvbnRyb2wuU3BlY2lhbFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzZXJEZWZhdWx0OiBEZWZhdWx0IHVzZXIgdHJhZmZpYyB2YWx1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VyRGVmYXVsdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6QXBpR2F0ZXdheTo6VHJhZmZpY0NvbnRyb2xgXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFmZmljQ29udHJvbCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVHJhZmZpY0NvbnRyb2xJZDogVGhlIGlkIG9mIHRoZSB0cmFmZmljIGNvbnRyb2xcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYWZmaWNDb250cm9sSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpBcGlHYXRld2F5OjpUcmFmZmljQ29udHJvbGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVHJhZmZpY0NvbnRyb2xQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NUcmFmZmljQ29udHJvbCA9IG5ldyBSb3NUcmFmZmljQ29udHJvbCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRyYWZmaWNDb250cm9sVW5pdDogcHJvcHMudHJhZmZpY0NvbnRyb2xVbml0LFxuICAgICAgICAgICAgdHJhZmZpY0NvbnRyb2xOYW1lOiBwcm9wcy50cmFmZmljQ29udHJvbE5hbWUsXG4gICAgICAgICAgICBhcHBEZWZhdWx0OiBwcm9wcy5hcHBEZWZhdWx0LFxuICAgICAgICAgICAgc3BlY2lhbDogcHJvcHMuc3BlY2lhbCxcbiAgICAgICAgICAgIHVzZXJEZWZhdWx0OiBwcm9wcy51c2VyRGVmYXVsdCxcbiAgICAgICAgICAgIGFwaURlZmF1bHQ6IHByb3BzLmFwaURlZmF1bHQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVHJhZmZpY0NvbnRyb2w7XG4gICAgICAgIHRoaXMuYXR0clRyYWZmaWNDb250cm9sSWQgPSByb3NUcmFmZmljQ29udHJvbC5hdHRyVHJhZmZpY0NvbnRyb2xJZDtcbiAgICB9XG59XG4iXX0=