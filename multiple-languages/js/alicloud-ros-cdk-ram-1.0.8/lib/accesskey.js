"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessKey = exports.AccessKeyProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ram_generated_1 = require("./ram.generated");
Object.defineProperty(exports, "AccessKeyProperty", { enumerable: true, get: function () { return ram_generated_1.RosAccessKey; } });
/**
 * A ROS resource type:  `ALIYUN::RAM::AccessKey`
 */
class AccessKey extends ros.Resource {
    /**
     * Create a new `ALIYUN::RAM::AccessKey`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAccessKey = new ram_generated_1.RosAccessKey(this, id, {
            userName: props.userName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessKey;
        this.attrAccessKeyId = rosAccessKey.attrAccessKeyId;
        this.attrAccessKeySecret = rosAccessKey.attrAccessKeySecret;
        this.attrStatus = rosAccessKey.attrStatus;
    }
}
exports.AccessKey = AccessKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNza2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNza2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBYTFDOztHQUVHO0FBQ0gsTUFBYSxTQUFVLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFzQnZDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBcUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNoSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUMzQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUM7UUFDcEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFDOUMsQ0FBQztDQUNKO0FBeENELDhCQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0FjY2Vzc0tleSB9IGZyb20gJy4vcmFtLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0FjY2Vzc0tleSBhcyBBY2Nlc3NLZXlQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UkFNOjpBY2Nlc3NLZXlgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWNjZXNzS2V5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlck5hbWU6IFNwZWNpZmllcyB0aGUgdXNlciBuYW1lLCBjb250YWluaW5nIHVwIHRvIDY0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6UkFNOjpBY2Nlc3NLZXlgXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2Nlc3NLZXkgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFjY2Vzc0tleUlkOiBJZCBvZiBhY2Nlc3Mga2V5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjZXNzS2V5SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBY2Nlc3NLZXlTZWNyZXQ6IFNlY3JldCBvZiBhY2Nlc3Mga2V5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjZXNzS2V5U2VjcmV0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3RhdHVzOiBTdGF0dXMgb2YgYWNjZXNzIGtleS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN0YXR1czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJBTTo6QWNjZXNzS2V5YC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBY2Nlc3NLZXlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NBY2Nlc3NLZXkgPSBuZXcgUm9zQWNjZXNzS2V5KHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdXNlck5hbWU6IHByb3BzLnVzZXJOYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0FjY2Vzc0tleTtcbiAgICAgICAgdGhpcy5hdHRyQWNjZXNzS2V5SWQgPSByb3NBY2Nlc3NLZXkuYXR0ckFjY2Vzc0tleUlkO1xuICAgICAgICB0aGlzLmF0dHJBY2Nlc3NLZXlTZWNyZXQgPSByb3NBY2Nlc3NLZXkuYXR0ckFjY2Vzc0tleVNlY3JldDtcbiAgICAgICAgdGhpcy5hdHRyU3RhdHVzID0gcm9zQWNjZXNzS2V5LmF0dHJTdGF0dXM7XG4gICAgfVxufVxuIl19