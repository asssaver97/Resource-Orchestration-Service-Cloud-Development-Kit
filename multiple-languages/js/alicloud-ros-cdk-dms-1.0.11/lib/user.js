"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const dms_generated_1 = require("./dms.generated");
Object.defineProperty(exports, "UserProperty", { enumerable: true, get: function () { return dms_generated_1.RosUser; } });
/**
 * A ROS resource type:  `ALIYUN::DMS::User`
 */
class User extends ros.Resource {
    /**
     * Create a new `ALIYUN::DMS::User`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosUser = new dms_generated_1.RosUser(this, id, {
            status: props.status,
            uid: props.uid,
            userName: props.userName,
            roleNames: props.roleNames,
            mobile: props.mobile,
            tid: props.tid,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUser;
        this.attrMobile = rosUser.attrMobile;
        this.attrParentUid = rosUser.attrParentUid;
        this.attrRoleIds = rosUser.attrRoleIds;
        this.attrRoleNames = rosUser.attrRoleNames;
        this.attrUid = rosUser.attrUid;
        this.attrUserId = rosUser.attrUserId;
        this.attrUserName = rosUser.attrUserName;
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUEwQztBQUV0Qiw2RkFGWCx1QkFBTyxPQUVnQjtBQXNDaEM7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxHQUFHLENBQUMsUUFBUTtJQTBDbEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFnQixFQUFFLG1DQUEyQyxJQUFJO1FBQzNHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxPQUFPLEdBQUcsSUFBSSx1QkFBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDbkMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztZQUNkLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztTQUNqQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFDN0MsQ0FBQztDQUNKO0FBckVELG9CQXFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1VzZXIgfSBmcm9tICcuL2Rtcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NVc2VyIGFzIFVzZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RE1TOjpVc2VyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1aWQ6IFVzZXJBbGlZdW5VaWRcbiAgICAgKi9cbiAgICByZWFkb25seSB1aWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1vYmlsZTogVXNlck1vYmlsZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vYmlsZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJvbGVOYW1lczogVXNlclJvbGVcbiAgICAgKi9cbiAgICByZWFkb25seSByb2xlTmFtZXM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3RhdHVzOiBVc2VyU3RhdHVzXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGlkOlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzZXJOYW1lOiBVc2VyTmlja05hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VyTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RE1TOjpVc2VyYFxuICovXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTW9iaWxlOiBVc2VyTW9iaWxlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNb2JpbGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQYXJlbnRVaWQ6IFBhcmVudEFsaVl1blVpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGFyZW50VWlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUm9sZUlkczogVXNlclJvbGVJZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm9sZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJvbGVOYW1lczogVXNlclJvbGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvbGVOYW1lczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFVpZDogVXNlckFsaVl1blVpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVWlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVXNlcklkOiBVc2VySWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVzZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFVzZXJOYW1lOiBVc2VyTmlja05hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVzZXJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RE1TOjpVc2VyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBVc2VyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zVXNlciA9IG5ldyBSb3NVc2VyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgc3RhdHVzOiBwcm9wcy5zdGF0dXMsXG4gICAgICAgICAgICB1aWQ6IHByb3BzLnVpZCxcbiAgICAgICAgICAgIHVzZXJOYW1lOiBwcm9wcy51c2VyTmFtZSxcbiAgICAgICAgICAgIHJvbGVOYW1lczogcHJvcHMucm9sZU5hbWVzLFxuICAgICAgICAgICAgbW9iaWxlOiBwcm9wcy5tb2JpbGUsXG4gICAgICAgICAgICB0aWQ6IHByb3BzLnRpZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NVc2VyO1xuICAgICAgICB0aGlzLmF0dHJNb2JpbGUgPSByb3NVc2VyLmF0dHJNb2JpbGU7XG4gICAgICAgIHRoaXMuYXR0clBhcmVudFVpZCA9IHJvc1VzZXIuYXR0clBhcmVudFVpZDtcbiAgICAgICAgdGhpcy5hdHRyUm9sZUlkcyA9IHJvc1VzZXIuYXR0clJvbGVJZHM7XG4gICAgICAgIHRoaXMuYXR0clJvbGVOYW1lcyA9IHJvc1VzZXIuYXR0clJvbGVOYW1lcztcbiAgICAgICAgdGhpcy5hdHRyVWlkID0gcm9zVXNlci5hdHRyVWlkO1xuICAgICAgICB0aGlzLmF0dHJVc2VySWQgPSByb3NVc2VyLmF0dHJVc2VySWQ7XG4gICAgICAgIHRoaXMuYXR0clVzZXJOYW1lID0gcm9zVXNlci5hdHRyVXNlck5hbWU7XG4gICAgfVxufVxuIl19