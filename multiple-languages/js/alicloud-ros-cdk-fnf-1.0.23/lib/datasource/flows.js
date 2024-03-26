"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flows = exports.FlowsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const fnf_generated_1 = require("./fnf.generated");
Object.defineProperty(exports, "FlowsProperty", { enumerable: true, get: function () { return fnf_generated_1.RosFlows; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FNF::Flows`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlows`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
 */
class Flows extends ros.Resource {
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
        const rosFlows = new fnf_generated_1.RosFlows(this, id, {}, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosFlows;
        this.attrFlowNames = rosFlows.attrFlowNames;
        this.attrFlows = rosFlows.attrFlows;
    }
}
exports.Flows = Flows;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvd3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbG93cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTJDO0FBRXRCLDhGQUZaLHdCQUFRLE9BRWlCO0FBU2xDOzs7O0dBSUc7QUFDSCxNQUFhLEtBQU0sU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCbkM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBb0IsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUcsRUFDeEMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsS0FBSyxDQUFDO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUFuQ0Qsc0JBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zRmxvd3MgfSBmcm9tICcuL2ZuZi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NGbG93cyBhcyBGbG93c1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgRmxvd3NgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWZuZi1mbG93c1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEZsb3dzUHJvcHMge1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6Rk5GOjpGbG93c2AuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NGbG93c2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1mbmYtZmxvd3NcbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBGbG93c1Byb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBGbG93TmFtZXM6IFRoZSBsaXN0IG9mIGZsb3cgbmFtZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGbG93TmFtZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBGbG93czogVGhlIGRldGFpbHMgYWJvdXQgZmxvd3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGbG93czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEZsb3dzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0Zsb3dzID0gbmV3IFJvc0Zsb3dzKHRoaXMsIGlkLCAge1xuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgcHJvcHM7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NGbG93cztcbiAgICAgICAgdGhpcy5hdHRyRmxvd05hbWVzID0gcm9zRmxvd3MuYXR0ckZsb3dOYW1lcztcbiAgICAgICAgdGhpcy5hdHRyRmxvd3MgPSByb3NGbG93cy5hdHRyRmxvd3M7XG4gICAgfVxufVxuIl19