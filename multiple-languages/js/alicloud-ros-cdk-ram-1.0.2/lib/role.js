"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.RoleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ram_generated_1 = require("./ram.generated");
Object.defineProperty(exports, "RoleProperty", { enumerable: true, get: function () { return ram_generated_1.RosRole; } });
/**
 * A ROS resource type:  `ALIYUN::RAM::Role`
 */
class Role extends ros.Resource {
    /**
     * Create a new `ALIYUN::RAM::Role`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosRole = new ram_generated_1.RosRole(this, id, {
            maxSessionDuration: props.maxSessionDuration,
            roleName: props.roleName,
            description: props.description,
            policies: props.policies,
            assumeRolePolicyDocument: props.assumeRolePolicyDocument,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRole;
        this.attrArn = rosRole.attrArn;
        this.attrRoleId = rosRole.attrRoleId;
        this.attrRoleName = rosRole.attrRoleName;
    }
}
exports.Role = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUEwQztBQUV0Qiw2RkFGWCx1QkFBTyxPQUVnQjtBQW1DaEM7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxHQUFHLENBQUMsUUFBUTtJQXNCbEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFnQixFQUFFLG1DQUEyQyxJQUFJO1FBQzNHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxPQUFPLEdBQUcsSUFBSSx1QkFBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDbkMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4Qix3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCO1NBQzNELEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQTVDRCxvQkE0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NSb2xlIH0gZnJvbSAnLi9yYW0uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUm9sZSBhcyBSb2xlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJBTTo6Um9sZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb2xlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiBUaGUgUkFNIGFzc3VtZSByb2xlIHBvbGljeSB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHJvbGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiBSb3NSb2xlLkFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcm9sZU5hbWU6IFNwZWNpZmllcyB0aGUgcm9sZSBuYW1lLCBjb250YWluaW5nIHVwIHRvIDY0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm9sZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBSZW1hcmsgaW5mb3JtYXRpb24sIHVwIHRvIDEwMjQgY2hhcmFjdGVycyBvciBDaGluZXNlIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXhTZXNzaW9uRHVyYXRpb246IFRoZSBtYXhpbXVtIHNlc3Npb24gZHVyYXRpb24gb2YgdGhlIFJBTSByb2xlLlxuICAgICAqIFZhbGlkIHZhbHVlczogMzYwMCB0byA0MzIwMC4gVW5pdDogc2Vjb25kcy4gRGVmYXVsdCB2YWx1ZTogMzYwMC5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB1c2VkIGlmIHRoZSBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhTZXNzaW9uRHVyYXRpb24/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwb2xpY2llczogRGVzY3JpYmVzIHdoYXQgYWN0aW9ucyBhcmUgYWxsb3dlZCBvbiB3aGF0IHJlc291cmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY2llcz86IEFycmF5PFJvc1JvbGUuUG9saWNpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlJBTTo6Um9sZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvbGUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFybjogTmFtZSBvZiBhbGljbG91ZCByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFybjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJvbGVJZDogSWQgb2YgcmFtIHJvbGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb2xlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSb2xlTmFtZTogTmFtZSBvZiByYW0gcm9sZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvbGVOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6UkFNOjpSb2xlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb2xlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zUm9sZSA9IG5ldyBSb3NSb2xlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgbWF4U2Vzc2lvbkR1cmF0aW9uOiBwcm9wcy5tYXhTZXNzaW9uRHVyYXRpb24sXG4gICAgICAgICAgICByb2xlTmFtZTogcHJvcHMucm9sZU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwb2xpY2llczogcHJvcHMucG9saWNpZXMsXG4gICAgICAgICAgICBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHByb3BzLmFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NSb2xlO1xuICAgICAgICB0aGlzLmF0dHJBcm4gPSByb3NSb2xlLmF0dHJBcm47XG4gICAgICAgIHRoaXMuYXR0clJvbGVJZCA9IHJvc1JvbGUuYXR0clJvbGVJZDtcbiAgICAgICAgdGhpcy5hdHRyUm9sZU5hbWUgPSByb3NSb2xlLmF0dHJSb2xlTmFtZTtcbiAgICB9XG59XG4iXX0=