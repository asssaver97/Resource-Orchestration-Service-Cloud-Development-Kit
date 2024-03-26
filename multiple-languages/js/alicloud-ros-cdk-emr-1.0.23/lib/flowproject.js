"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowProject = exports.FlowProjectProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const emr_generated_1 = require("./emr.generated");
Object.defineProperty(exports, "FlowProjectProperty", { enumerable: true, get: function () { return emr_generated_1.RosFlowProject; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EMR::FlowProject`, which is used to create a data development project.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlowProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-flowproject
 */
class FlowProject extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosFlowProject = new emr_generated_1.RosFlowProject(this, id, {
            description: props.description,
            flowProjectName: props.flowProjectName,
            resourceGroupId: props.resourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFlowProject;
        this.attrCreateTime = rosFlowProject.attrCreateTime;
        this.attrDescription = rosFlowProject.attrDescription;
        this.attrFlowProjectId = rosFlowProject.attrFlowProjectId;
        this.attrFlowProjectName = rosFlowProject.attrFlowProjectName;
        this.attrGmtModified = rosFlowProject.attrGmtModified;
        this.attrUserId = rosFlowProject.attrUserId;
    }
}
exports.FlowProject = FlowProject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvd3Byb2plY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbG93cHJvamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQXdCOUM7Ozs7R0FJRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBb0N6Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxjQUFjLEdBQUcsSUFBSSw4QkFBYyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakQsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7U0FDekMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQztRQUN0RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1FBQzFELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxjQUFjLENBQUMsbUJBQW1CLENBQUM7UUFDOUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsZUFBZSxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUNoRCxDQUFDO0NBQ0o7QUE3REQsa0NBNkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zRmxvd1Byb2plY3QgfSBmcm9tICcuL2Vtci5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NGbG93UHJvamVjdCBhcyBGbG93UHJvamVjdFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgRmxvd1Byb2plY3RgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZW1yLWZsb3dwcm9qZWN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmxvd1Byb2plY3RQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBmbG93UHJvamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZsb3dQcm9qZWN0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIGVudGVycHJpc2UgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIEVNUiBpbnN0YW5jZXMgYW5kIEVDUyBub2RlIGluc3RhbmNlcyBiZWxvbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpFTVI6OkZsb3dQcm9qZWN0YCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBkYXRhIGRldmVsb3BtZW50IHByb2plY3QuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NGbG93UHJvamVjdGBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVtci1mbG93cHJvamVjdFxuICovXG5leHBvcnQgY2xhc3MgRmxvd1Byb2plY3QgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEZsb3dQcm9qZWN0UHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENyZWF0ZVRpbWU6IFRoZSB0aW1lIHdoZW4gdGhlIHByb2plY3Qgd2FzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRmxvd1Byb2plY3RJZDogVGhlIElEIG9mIHRoZSBwcm9qZWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRmxvd1Byb2plY3RJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEZsb3dQcm9qZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGbG93UHJvamVjdE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBHbXRNb2RpZmllZDogVGhlIHRpbWUgd2hlbiB0aGUgcHJvamVjdCB3YXMgbW9kaWZpZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHbXRNb2RpZmllZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFVzZXJJZDogVGhlIElEIG9mIHRoZSBwcmltYXJ5IGFjY291bnQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVc2VySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBGbG93UHJvamVjdFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zRmxvd1Byb2plY3QgPSBuZXcgUm9zRmxvd1Byb2plY3QodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBmbG93UHJvamVjdE5hbWU6IHByb3BzLmZsb3dQcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0Zsb3dQcm9qZWN0O1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gcm9zRmxvd1Byb2plY3QuYXR0ckNyZWF0ZVRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckRlc2NyaXB0aW9uID0gcm9zRmxvd1Byb2plY3QuYXR0ckRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmF0dHJGbG93UHJvamVjdElkID0gcm9zRmxvd1Byb2plY3QuYXR0ckZsb3dQcm9qZWN0SWQ7XG4gICAgICAgIHRoaXMuYXR0ckZsb3dQcm9qZWN0TmFtZSA9IHJvc0Zsb3dQcm9qZWN0LmF0dHJGbG93UHJvamVjdE5hbWU7XG4gICAgICAgIHRoaXMuYXR0ckdtdE1vZGlmaWVkID0gcm9zRmxvd1Byb2plY3QuYXR0ckdtdE1vZGlmaWVkO1xuICAgICAgICB0aGlzLmF0dHJVc2VySWQgPSByb3NGbG93UHJvamVjdC5hdHRyVXNlcklkO1xuICAgIH1cbn1cbiJdfQ==