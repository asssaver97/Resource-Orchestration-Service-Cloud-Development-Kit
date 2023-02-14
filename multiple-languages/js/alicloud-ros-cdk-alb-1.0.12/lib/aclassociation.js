"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AclAssociation = exports.AclAssociationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const alb_generated_1 = require("./alb.generated");
Object.defineProperty(exports, "AclAssociationProperty", { enumerable: true, get: function () { return alb_generated_1.RosAclAssociation; } });
/**
 * A ROS resource type:  `ALIYUN::ALB::AclAssociation`
 */
class AclAssociation extends ros.Resource {
    /**
     * Create a new `ALIYUN::ALB::AclAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAclAssociation = new alb_generated_1.RosAclAssociation(this, id, {
            aclType: props.aclType,
            aclIds: props.aclIds,
            listenerId: props.listenerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAclAssociation;
        this.attrListenerId = rosAclAssociation.attrListenerId;
    }
}
exports.AclAssociation = AclAssociation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsYXNzb2NpYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2xhc3NvY2lhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQW9EO0FBRXRCLHVHQUZyQixpQ0FBaUIsT0FFMEI7QUF1QnBEOztHQUVHO0FBQ0gsTUFBYSxjQUFlLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZNUM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEwQixFQUFFLG1DQUEyQyxJQUFJO1FBQ3JILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGlDQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkQsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztJQUMzRCxDQUFDO0NBQ0o7QUE5QkQsd0NBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQWNsQXNzb2NpYXRpb24gfSBmcm9tICcuL2FsYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBY2xBc3NvY2lhdGlvbiBhcyBBY2xBc3NvY2lhdGlvblByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpBTEI6OkFjbEFzc29jaWF0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjbEFzc29jaWF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNsSWRzOiBUaGUgSURzIG9mIHRoZSBBQ0xzLiBZb3UgY2FuIHNwZWNpZnkgdXAgdG8gdGhyZWUgSURzIGF0IGEgdGltZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2xJZHM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2xUeXBlOiBUaGUgdHlwZSBvZiBBQ0wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNsVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGlzdGVuZXJJZDogVGhlIElEIG9mIHRoZSBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICByZWFkb25seSBsaXN0ZW5lcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkFMQjo6QWNsQXNzb2NpYXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2xBc3NvY2lhdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTGlzdGVuZXJJZDogVGhlIElEIG9mIHRoZSBsaXN0ZW5lci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxpc3RlbmVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpBTEI6OkFjbEFzc29jaWF0aW9uYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBY2xBc3NvY2lhdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0FjbEFzc29jaWF0aW9uID0gbmV3IFJvc0FjbEFzc29jaWF0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYWNsVHlwZTogcHJvcHMuYWNsVHlwZSxcbiAgICAgICAgICAgIGFjbElkczogcHJvcHMuYWNsSWRzLFxuICAgICAgICAgICAgbGlzdGVuZXJJZDogcHJvcHMubGlzdGVuZXJJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NBY2xBc3NvY2lhdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyTGlzdGVuZXJJZCA9IHJvc0FjbEFzc29jaWF0aW9uLmF0dHJMaXN0ZW5lcklkO1xuICAgIH1cbn1cbiJdfQ==