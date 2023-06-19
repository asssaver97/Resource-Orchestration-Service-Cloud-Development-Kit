"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessGroup = exports.AccessGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const nas_generated_1 = require("./nas.generated");
Object.defineProperty(exports, "AccessGroupProperty", { enumerable: true, get: function () { return nas_generated_1.RosAccessGroup; } });
/**
 * A ROS resource type:  `ALIYUN::NAS::AccessGroup`
 */
class AccessGroup extends ros.Resource {
    /**
     * Create a new `ALIYUN::NAS::AccessGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAccessGroup = new nas_generated_1.RosAccessGroup(this, id, {
            accessGroupType: props.accessGroupType,
            description: props.description,
            fileSystemType: props.fileSystemType === undefined || props.fileSystemType === null ? 'standard' : props.fileSystemType,
            accessGroupName: props.accessGroupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessGroup;
        this.attrAccessGroupName = rosAccessGroup.attrAccessGroupName;
    }
}
exports.AccessGroup = AccessGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2Nlc3Nncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQTZCOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQVl6Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYztZQUN2SCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7U0FDekMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRSxDQUFDO0NBQ0o7QUEvQkQsa0NBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQWNjZXNzR3JvdXAgfSBmcm9tICcuL25hcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBY2Nlc3NHcm91cCBhcyBBY2Nlc3NHcm91cFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpOQVM6OkFjY2Vzc0dyb3VwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjY2Vzc0dyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNjZXNzR3JvdXBOYW1lOiBQZXJtaXNzaW9uIGdyb3VwIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBhY2Nlc3NHcm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjY2Vzc0dyb3VwVHlwZTogUGVybWlzc2lvbiBncm91cCB0eXBlLCBpbmNsdWRpbmcgdGhlIFZwYyBhbmQgQ2xhc3NpYyB0eXBlc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2Vzc0dyb3VwVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFBlcm1pc3Npb24gZ3JvdXAgZGVzY3JpcHRpb24uIEl0IGlzIHRoZSBzYW1lIGFzIHRoZSBwZXJtaXNzaW9uIGdyb3VwIG5hbWUgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGZpbGVTeXN0ZW1UeXBlOiBGaWxlIHN5c3RlbSB0eXBlLlxuICAgICAqIFZhbHVlczogc3RhbmRhcmQgKGRlZmF1bHQpLCBleHRyZW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmlsZVN5c3RlbVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46Ok5BUzo6QWNjZXNzR3JvdXBgXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2Nlc3NHcm91cCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWNjZXNzR3JvdXBOYW1lOiBQZXJtaXNzaW9uIGdyb3VwIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY2Vzc0dyb3VwTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46Ok5BUzo6QWNjZXNzR3JvdXBgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEFjY2Vzc0dyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQWNjZXNzR3JvdXAgPSBuZXcgUm9zQWNjZXNzR3JvdXAodGhpcywgaWQsICB7XG4gICAgICAgICAgICBhY2Nlc3NHcm91cFR5cGU6IHByb3BzLmFjY2Vzc0dyb3VwVHlwZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGZpbGVTeXN0ZW1UeXBlOiBwcm9wcy5maWxlU3lzdGVtVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmZpbGVTeXN0ZW1UeXBlID09PSBudWxsID8gJ3N0YW5kYXJkJyA6IHByb3BzLmZpbGVTeXN0ZW1UeXBlLFxuICAgICAgICAgICAgYWNjZXNzR3JvdXBOYW1lOiBwcm9wcy5hY2Nlc3NHcm91cE5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQWNjZXNzR3JvdXA7XG4gICAgICAgIHRoaXMuYXR0ckFjY2Vzc0dyb3VwTmFtZSA9IHJvc0FjY2Vzc0dyb3VwLmF0dHJBY2Nlc3NHcm91cE5hbWU7XG4gICAgfVxufVxuIl19