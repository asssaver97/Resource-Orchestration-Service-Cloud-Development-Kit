"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitoringAgentProcess = exports.MonitoringAgentProcessProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cms_generated_1 = require("./cms.generated");
Object.defineProperty(exports, "MonitoringAgentProcessProperty", { enumerable: true, get: function () { return cms_generated_1.RosMonitoringAgentProcess; } });
/**
 * A ROS resource type:  `ALIYUN::CMS::MonitoringAgentProcess`
 */
class MonitoringAgentProcess extends ros.Resource {
    /**
     * Create a new `ALIYUN::CMS::MonitoringAgentProcess`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosMonitoringAgentProcess = new cms_generated_1.RosMonitoringAgentProcess(this, id, {
            processName: props.processName,
            instanceId: props.instanceId,
            processUser: props.processUser,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMonitoringAgentProcess;
        this.attrId = rosMonitoringAgentProcess.attrId;
    }
}
exports.MonitoringAgentProcess = MonitoringAgentProcess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uaXRvcmluZ2FnZW50cHJvY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbml0b3JpbmdhZ2VudHByb2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE0RDtBQUV0QiwrR0FGN0IseUNBQXlCLE9BRWtDO0FBdUJwRTs7R0FFRztBQUNILE1BQWEsc0JBQXVCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZcEQ7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFrQyxFQUFFLG1DQUEyQyxJQUFJO1FBQzdILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLHlDQUF5QixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkUsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDakMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyx5QkFBeUIsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLHlCQUF5QixDQUFDLE1BQU0sQ0FBQztJQUNuRCxDQUFDO0NBQ0o7QUE5QkQsd0RBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTW9uaXRvcmluZ0FnZW50UHJvY2VzcyB9IGZyb20gJy4vY21zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc01vbml0b3JpbmdBZ2VudFByb2Nlc3MgYXMgTW9uaXRvcmluZ0FnZW50UHJvY2Vzc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDTVM6Ok1vbml0b3JpbmdBZ2VudFByb2Nlc3NgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTW9uaXRvcmluZ0FnZW50UHJvY2Vzc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvY2Vzc05hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9jZXNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2Nlc3NOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvY2Vzc1VzZXI6IFRoZSB1c2VyIHdobyBsYXVuY2hlZCB0aGUgcHJvY2Vzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9jZXNzVXNlcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q01TOjpNb25pdG9yaW5nQWdlbnRQcm9jZXNzYFxuICovXG5leHBvcnQgY2xhc3MgTW9uaXRvcmluZ0FnZW50UHJvY2VzcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSWQ6IFRoZSBwcm9jZXNzIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDTVM6Ok1vbml0b3JpbmdBZ2VudFByb2Nlc3NgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IE1vbml0b3JpbmdBZ2VudFByb2Nlc3NQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NNb25pdG9yaW5nQWdlbnRQcm9jZXNzID0gbmV3IFJvc01vbml0b3JpbmdBZ2VudFByb2Nlc3ModGhpcywgaWQsICB7XG4gICAgICAgICAgICBwcm9jZXNzTmFtZTogcHJvcHMucHJvY2Vzc05hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiBwcm9wcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgcHJvY2Vzc1VzZXI6IHByb3BzLnByb2Nlc3NVc2VyLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc01vbml0b3JpbmdBZ2VudFByb2Nlc3M7XG4gICAgICAgIHRoaXMuYXR0cklkID0gcm9zTW9uaXRvcmluZ0FnZW50UHJvY2Vzcy5hdHRySWQ7XG4gICAgfVxufVxuIl19