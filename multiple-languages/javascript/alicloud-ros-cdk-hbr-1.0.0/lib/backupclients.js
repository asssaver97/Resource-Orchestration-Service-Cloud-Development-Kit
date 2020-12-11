"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupClients = exports.BackupClientsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const hbr_generated_1 = require("./hbr.generated");
Object.defineProperty(exports, "BackupClientsProperty", { enumerable: true, get: function () { return hbr_generated_1.RosBackupClients; } });
/**
 * A ROS resource type:  `ALIYUN::HBR::BackupClients`
 */
class BackupClients extends ros.Resource {
    /**
     * Create a new `ALIYUN::HBR::BackupClients`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosBackupClients = new hbr_generated_1.RosBackupClients(this, id, {
            instanceIds: props.instanceIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackupClients;
        this.attrClientIds = rosBackupClients.attrClientIds;
        this.attrInstanceIds = rosBackupClients.attrInstanceIds;
    }
}
exports.BackupClients = BackupClients;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja3VwY2xpZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhY2t1cGNsaWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBYWxEOztHQUVHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQjNDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBeUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztTQUNqQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBQzVELENBQUM7Q0FDSjtBQWxDRCxzQ0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NCYWNrdXBDbGllbnRzIH0gZnJvbSAnLi9oYnIuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQmFja3VwQ2xpZW50cyBhcyBCYWNrdXBDbGllbnRzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkhCUjo6QmFja3VwQ2xpZW50c2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYWNrdXBDbGllbnRzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWRzOiBJRCBsaXN0IG9mIGluc3RhbmNlcyB0byBpbnN0YWxsIGJhY2t1cCBjbGllbnRcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkczogc3RyaW5nW107XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkhCUjo6QmFja3VwQ2xpZW50c2BcbiAqL1xuZXhwb3J0IGNsYXNzIEJhY2t1cENsaWVudHMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbGllbnRJZHM6IElEIGxpc3Qgb2YgY2xpZW50cyBpbnN0YWxsZWQgaW4gaW5zdGFuY2VzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbGllbnRJZHM6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZHM6IElEIGxpc3Qgb2YgaW5zdGFuY2VzIHRvIGluc3RhbGwgYmFja3VwIGNsaWVudFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZHM6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpIQlI6OkJhY2t1cENsaWVudHNgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEJhY2t1cENsaWVudHNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NCYWNrdXBDbGllbnRzID0gbmV3IFJvc0JhY2t1cENsaWVudHModGhpcywgaWQsICB7XG4gICAgICAgICAgICBpbnN0YW5jZUlkczogcHJvcHMuaW5zdGFuY2VJZHMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQmFja3VwQ2xpZW50cztcbiAgICAgICAgdGhpcy5hdHRyQ2xpZW50SWRzID0gcm9zQmFja3VwQ2xpZW50cy5hdHRyQ2xpZW50SWRzO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkcyA9IHJvc0JhY2t1cENsaWVudHMuYXR0ckluc3RhbmNlSWRzO1xuICAgIH1cbn1cbiJdfQ==