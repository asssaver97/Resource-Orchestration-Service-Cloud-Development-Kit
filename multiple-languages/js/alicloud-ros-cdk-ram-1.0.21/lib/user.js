"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ram_generated_1 = require("./ram.generated");
Object.defineProperty(exports, "UserProperty", { enumerable: true, get: function () { return ram_generated_1.RosUser; } });
/**
 * A ROS resource type:  `ALIYUN::RAM::User`
 */
class User extends ros.Resource {
    /**
     * Create a new `ALIYUN::RAM::User`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosUser = new ram_generated_1.RosUser(this, id, {
            userName: props.userName,
            policies: props.policies,
            email: props.email,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            policyAttachments: props.policyAttachments,
            comments: props.comments,
            groups: props.groups,
            displayName: props.displayName,
            loginProfile: props.loginProfile,
            mobilePhone: props.mobilePhone,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUser;
        this.attrCreateDate = rosUser.attrCreateDate;
        this.attrLastLoginDate = rosUser.attrLastLoginDate;
        this.attrUserId = rosUser.attrUserId;
        this.attrUserName = rosUser.attrUserName;
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUEwQztBQUV0Qiw2RkFGWCx1QkFBTyxPQUVnQjtBQTBEaEM7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxHQUFHLENBQUMsUUFBUTtJQTJCbEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFnQixFQUFFLG1DQUEyQyxJQUFJO1FBQzNHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxPQUFPLEdBQUcsSUFBSSx1QkFBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDbkMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQzlHLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztTQUNqQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQXZERCxvQkF1REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NVc2VyIH0gZnJvbSAnLi9yYW0uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zVXNlciBhcyBVc2VyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJBTTo6VXNlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlck5hbWU6IFNwZWNpZmllcyB0aGUgdXNlciBuYW1lLCBjb250YWluaW5nIHVwIHRvIDY0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbW1lbnRzOiBDb21tZW50cyBvZiByYW0gdXNlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21tZW50cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGV0YWNoIHRoZSBwb2xpY2llcyBhbmQgZ3JvdXBzIGF0dGFjaGVkIHRvIHRoZSB1c2VyLiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uRm9yY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGlzcGxheU5hbWU6IERpc3BsYXkgbmFtZSwgdXAgdG8gMTI4IGNoYXJhY3RlcnMgb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc3BsYXlOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW1haWw6IEVtYWlsIG9mIHJhbSB1c2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVtYWlsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ3JvdXBzOiBBIG5hbWUgb2YgYSBncm91cCB0byB3aGljaCB5b3Ugd2FudCB0byBhZGQgdGhlIHVzZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBzPzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvZ2luUHJvZmlsZTogQ3JlYXRlcyBhIGxvZ2luIHByb2ZpbGUgZm9yIHVzZXJzIHNvIHRoYXQgdGhleSBjYW4gYWNjZXNzIHRoZSBBbGlDbG91ZCBNYW5hZ2VtZW50IENvbnNvbGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9naW5Qcm9maWxlPzogUm9zVXNlci5Mb2dpblByb2ZpbGVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1vYmlsZVBob25lOiBQaG9uZSBudW1iZXIgb2YgcmFtIHVzZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9iaWxlUGhvbmU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwb2xpY2llczogRGVzY3JpYmVzIHdoYXQgYWN0aW9ucyBhcmUgYWxsb3dlZCBvbiB3aGF0IHJlc291cmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY2llcz86IEFycmF5PFJvc1VzZXIuUG9saWNpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwb2xpY3lBdHRhY2htZW50czogU3lzdGVtIGFuZCBjdXN0b20gcG9saWN5IG5hbWVzIHRvIGF0dGFjaC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY3lBdHRhY2htZW50cz86IFJvc1VzZXIuUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6UkFNOjpVc2VyYFxuICovXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ3JlYXRlRGF0ZTogQ3JlYXRlIGRhdGUgb2YgcmFtIHVzZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVEYXRlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTGFzdExvZ2luRGF0ZTogTGFzdCBsb2dpbiBkYXRlIG9mIHJhbSB1c2VyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGFzdExvZ2luRGF0ZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFVzZXJJZDogSWQgb2YgcmFtIHVzZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVc2VySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBVc2VyTmFtZTogTmFtZSBvZiByYW0gdXNlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVzZXJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6UkFNOjpVc2VyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBVc2VyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zVXNlciA9IG5ldyBSb3NVc2VyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdXNlck5hbWU6IHByb3BzLnVzZXJOYW1lLFxuICAgICAgICAgICAgcG9saWNpZXM6IHByb3BzLnBvbGljaWVzLFxuICAgICAgICAgICAgZW1haWw6IHByb3BzLmVtYWlsLFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogcHJvcHMuZGVsZXRpb25Gb3JjZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmRlbGV0aW9uRm9yY2UgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLmRlbGV0aW9uRm9yY2UsXG4gICAgICAgICAgICBwb2xpY3lBdHRhY2htZW50czogcHJvcHMucG9saWN5QXR0YWNobWVudHMsXG4gICAgICAgICAgICBjb21tZW50czogcHJvcHMuY29tbWVudHMsXG4gICAgICAgICAgICBncm91cHM6IHByb3BzLmdyb3VwcyxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBwcm9wcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGxvZ2luUHJvZmlsZTogcHJvcHMubG9naW5Qcm9maWxlLFxuICAgICAgICAgICAgbW9iaWxlUGhvbmU6IHByb3BzLm1vYmlsZVBob25lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1VzZXI7XG4gICAgICAgIHRoaXMuYXR0ckNyZWF0ZURhdGUgPSByb3NVc2VyLmF0dHJDcmVhdGVEYXRlO1xuICAgICAgICB0aGlzLmF0dHJMYXN0TG9naW5EYXRlID0gcm9zVXNlci5hdHRyTGFzdExvZ2luRGF0ZTtcbiAgICAgICAgdGhpcy5hdHRyVXNlcklkID0gcm9zVXNlci5hdHRyVXNlcklkO1xuICAgICAgICB0aGlzLmF0dHJVc2VyTmFtZSA9IHJvc1VzZXIuYXR0clVzZXJOYW1lO1xuICAgIH1cbn1cbiJdfQ==