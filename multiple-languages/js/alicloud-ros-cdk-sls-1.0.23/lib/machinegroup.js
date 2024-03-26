"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineGroup = exports.MachineGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sls_generated_1 = require("./sls.generated");
Object.defineProperty(exports, "MachineGroupProperty", { enumerable: true, get: function () { return sls_generated_1.RosMachineGroup; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::MachineGroup`, which is used to create a machine group. Log Service manages all the ECS instances whose logs need to be collected using the Logtail client in the form of machine groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMachineGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup
 */
class MachineGroup extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosMachineGroup = new sls_generated_1.RosMachineGroup(this, id, {
            machineList: props.machineList,
            groupName: props.groupName,
            groupType: props.groupType,
            projectName: props.projectName,
            machineIdentifyType: props.machineIdentifyType,
            groupAttribute: props.groupAttribute,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMachineGroup;
        this.attrGroupName = rosMachineGroup.attrGroupName;
        this.attrProjectName = rosMachineGroup.attrProjectName;
    }
}
exports.MachineGroup = MachineGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFjaGluZWdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFjaGluZWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBdUNoRDs7OztHQUlHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQjFDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQTJCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUN4SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sZUFBZSxHQUFHLElBQUksK0JBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25ELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztTQUN2QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDO0lBQzNELENBQUM7Q0FDSjtBQXhDRCxvQ0F3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NNYWNoaW5lR3JvdXAgfSBmcm9tICcuL3Nscy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NNYWNoaW5lR3JvdXAgYXMgTWFjaGluZUdyb3VwUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBNYWNoaW5lR3JvdXBgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tc2xzLW1hY2hpbmVncm91cFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hY2hpbmVHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGdyb3VwQXR0cmlidXRlOiBHcm91cCBhdHRyaWJ1dGUsIGRlZmF1bHQgaXMgbnVsbC4gVGhlIG9iamVjdCB2YWx1ZSBpcyBncm91cFRvaWMgYW5kIGV4dGVybmFsTmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwQXR0cmlidXRlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ3JvdXBOYW1lOiBEaXNwbGF5IG5hbWUgb2YgdGhlIGdyb3VwIG5hbWUsIHRoZSBQcm9qZWN0IG9ubHkuIFsyLCAxMjhdIEVuZ2xpc2ggb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBpbiBzaXplLCBjYW4gY29udGFpbiBudW1iZXJzLCAnXycgb3IgJy4nLCAnLSdcbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBncm91cFR5cGU6IE1hY2hpbmVHcm91cCB0eXBlLCB0aGUgdmFsdWUgaXMgZW1wdHkgb3IgQXJtb3J5XG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFjaGluZUlkZW50aWZ5VHlwZTogTWFjaGluZSBpbmRlbnRpZnkgdHlwZSwgdGhlIHZhbHVlIGlzICdpcCcgb3IgJ3VzZXJkZWZpbmVkJ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hY2hpbmVJZGVudGlmeVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYWNoaW5lTGlzdDogVGhlIG1hY2hpbmUgdGFnLCB0aGUgdmFsdWUgaXMgaXAgb3IgdXNlcmRlZmluZWQtaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFjaGluZUxpc3Q/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvamVjdE5hbWU6IE1hY2hpbmVHcm91cCBjcmVhdGVkIGluIHByb2plY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvamVjdE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlNMUzo6TWFjaGluZUdyb3VwYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBtYWNoaW5lIGdyb3VwLiBMb2cgU2VydmljZSBtYW5hZ2VzIGFsbCB0aGUgRUNTIGluc3RhbmNlcyB3aG9zZSBsb2dzIG5lZWQgdG8gYmUgY29sbGVjdGVkIHVzaW5nIHRoZSBMb2d0YWlsIGNsaWVudCBpbiB0aGUgZm9ybSBvZiBtYWNoaW5lIGdyb3Vwcy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc01hY2hpbmVHcm91cGBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXNscy1tYWNoaW5lZ3JvdXBcbiAqL1xuZXhwb3J0IGNsYXNzIE1hY2hpbmVHcm91cCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogTWFjaGluZUdyb3VwUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEdyb3VwTmFtZTogR3JvdXBOYW1lIG9mIFNMUy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdyb3VwTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFByb2plY3ROYW1lOiBQcm9qZWN0TmFtZSBvZiBTTFMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcm9qZWN0TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IE1hY2hpbmVHcm91cFByb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NNYWNoaW5lR3JvdXAgPSBuZXcgUm9zTWFjaGluZUdyb3VwKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgbWFjaGluZUxpc3Q6IHByb3BzLm1hY2hpbmVMaXN0LFxuICAgICAgICAgICAgZ3JvdXBOYW1lOiBwcm9wcy5ncm91cE5hbWUsXG4gICAgICAgICAgICBncm91cFR5cGU6IHByb3BzLmdyb3VwVHlwZSxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9wcy5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIG1hY2hpbmVJZGVudGlmeVR5cGU6IHByb3BzLm1hY2hpbmVJZGVudGlmeVR5cGUsXG4gICAgICAgICAgICBncm91cEF0dHJpYnV0ZTogcHJvcHMuZ3JvdXBBdHRyaWJ1dGUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zTWFjaGluZUdyb3VwO1xuICAgICAgICB0aGlzLmF0dHJHcm91cE5hbWUgPSByb3NNYWNoaW5lR3JvdXAuYXR0ckdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyUHJvamVjdE5hbWUgPSByb3NNYWNoaW5lR3JvdXAuYXR0clByb2plY3ROYW1lO1xuICAgIH1cbn1cbiJdfQ==