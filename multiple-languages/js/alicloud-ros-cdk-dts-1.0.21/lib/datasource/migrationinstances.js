"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationInstances = exports.MigrationInstancesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const dts_generated_1 = require("./dts.generated");
Object.defineProperty(exports, "MigrationInstancesProperty", { enumerable: true, get: function () { return dts_generated_1.RosMigrationInstances; } });
/**
 * A ROS resource type:  `DATASOURCE::DTS::MigrationInstances`
 */
class MigrationInstances extends ros.Resource {
    /**
     * Create a new `DATASOURCE::DTS::MigrationInstances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosMigrationInstances = new dts_generated_1.RosMigrationInstances(this, id, {
            dtsInstanceId: props.dtsInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMigrationInstances;
        this.attrDtsInstanceIds = rosMigrationInstances.attrDtsInstanceIds;
        this.attrMigrationInstances = rosMigrationInstances.attrMigrationInstances;
    }
}
exports.MigrationInstances = MigrationInstances;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlncmF0aW9uaW5zdGFuY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWlncmF0aW9uaW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBd0Q7QUFFdEIsMkdBRnpCLHFDQUFxQixPQUU4QjtBQWE1RDs7R0FFRztBQUNILE1BQWEsa0JBQW1CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQmhEOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBaUMsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQzlILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLHFDQUFxQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0QsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQ3JDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUM7UUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDO1FBQ25FLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQztJQUMvRSxDQUFDO0NBQ0o7QUFsQ0QsZ0RBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTWlncmF0aW9uSW5zdGFuY2VzIH0gZnJvbSAnLi9kdHMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zTWlncmF0aW9uSW5zdGFuY2VzIGFzIE1pZ3JhdGlvbkluc3RhbmNlc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6RFRTOjpNaWdyYXRpb25JbnN0YW5jZXNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWlncmF0aW9uSW5zdGFuY2VzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZHRzSW5zdGFuY2VJZDogU3luY2hyb25pemF0aW9uIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGR0c0luc3RhbmNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBEQVRBU09VUkNFOjpEVFM6Ok1pZ3JhdGlvbkluc3RhbmNlc2BcbiAqL1xuZXhwb3J0IGNsYXNzIE1pZ3JhdGlvbkluc3RhbmNlcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRHRzSW5zdGFuY2VJZHM6IFRoZSBsaXN0IG9mIGR0cyBpbnN0YW5jZSBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEdHNJbnN0YW5jZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1pZ3JhdGlvbkluc3RhbmNlczogVGhlIGxpc3Qgb2YgbWlncmF0aW9uIGluc3RhbmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1pZ3JhdGlvbkluc3RhbmNlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpEVFM6Ok1pZ3JhdGlvbkluc3RhbmNlc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTWlncmF0aW9uSW5zdGFuY2VzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NNaWdyYXRpb25JbnN0YW5jZXMgPSBuZXcgUm9zTWlncmF0aW9uSW5zdGFuY2VzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZHRzSW5zdGFuY2VJZDogcHJvcHMuZHRzSW5zdGFuY2VJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NNaWdyYXRpb25JbnN0YW5jZXM7XG4gICAgICAgIHRoaXMuYXR0ckR0c0luc3RhbmNlSWRzID0gcm9zTWlncmF0aW9uSW5zdGFuY2VzLmF0dHJEdHNJbnN0YW5jZUlkcztcbiAgICAgICAgdGhpcy5hdHRyTWlncmF0aW9uSW5zdGFuY2VzID0gcm9zTWlncmF0aW9uSW5zdGFuY2VzLmF0dHJNaWdyYXRpb25JbnN0YW5jZXM7XG4gICAgfVxufVxuIl19