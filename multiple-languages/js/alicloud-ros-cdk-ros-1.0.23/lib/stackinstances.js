"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackInstances = exports.StackInstancesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ros_generated_1 = require("./ros.generated");
Object.defineProperty(exports, "StackInstancesProperty", { enumerable: true, get: function () { return ros_generated_1.RosStackInstances; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::StackInstances`, which is used to create stack instances within specified accounts in specified regions.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStackInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackinstances
 */
class StackInstances extends ros.Resource {
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
        const rosStackInstances = new ros_generated_1.RosStackInstances(this, id, {
            operationPreferences: props.operationPreferences,
            retainStacks: props.retainStacks === undefined || props.retainStacks === null ? false : props.retainStacks,
            regionIds: props.regionIds,
            accountIds: props.accountIds,
            parameterOverrides: props.parameterOverrides,
            stackGroupName: props.stackGroupName,
            deploymentTargets: props.deploymentTargets,
            operationDescription: props.operationDescription,
            disableRollback: props.disableRollback,
            timeoutInMinutes: props.timeoutInMinutes,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStackInstances;
        this.attrLastOperationId = rosStackInstances.attrLastOperationId;
        this.attrStacks = rosStackInstances.attrStacks;
    }
}
exports.StackInstances = StackInstances;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tpbnN0YW5jZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFja2luc3RhbmNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQW9EO0FBRXRCLHVHQUZyQixpQ0FBaUIsT0FFMEI7QUEyRHBEOzs7O0dBSUc7QUFDSCxNQUFhLGNBQWUsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCNUM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNySCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxpQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZELG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZO1lBQzFHLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtZQUMxQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1NBQzNDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDO1FBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDO0lBQ25ELENBQUM7Q0FDSjtBQTVDRCx3Q0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTdGFja0luc3RhbmNlcyB9IGZyb20gJy4vcm9zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1N0YWNrSW5zdGFuY2VzIGFzIFN0YWNrSW5zdGFuY2VzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBTdGFja0luc3RhbmNlc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yb3Mtc3RhY2tpbnN0YW5jZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGFja0luc3RhbmNlc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlZ2lvbklkczogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVnaW9uSWRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3RhY2tHcm91cE5hbWU6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0YWNrR3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2NvdW50SWRzOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NvdW50SWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlcGxveW1lbnRUYXJnZXRzOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBkZXBsb3ltZW50VGFyZ2V0cz86IFJvc1N0YWNrSW5zdGFuY2VzLkRlcGxveW1lbnRUYXJnZXRzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNhYmxlUm9sbGJhY2s6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2FibGVSb2xsYmFjaz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBvcGVyYXRpb25EZXNjcmlwdGlvbjogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3BlcmF0aW9uRGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBvcGVyYXRpb25QcmVmZXJlbmNlczogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3BlcmF0aW9uUHJlZmVyZW5jZXM/OiBSb3NTdGFja0luc3RhbmNlcy5PcGVyYXRpb25QcmVmZXJlbmNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGFyYW1ldGVyT3ZlcnJpZGVzOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBwYXJhbWV0ZXJPdmVycmlkZXM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXRhaW5TdGFja3M6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJldGFpblN0YWNrcz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0aW1lb3V0SW5NaW51dGVzOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lb3V0SW5NaW51dGVzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpST1M6OlN0YWNrSW5zdGFuY2VzYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgc3RhY2sgaW5zdGFuY2VzIHdpdGhpbiBzcGVjaWZpZWQgYWNjb3VudHMgaW4gc3BlY2lmaWVkIHJlZ2lvbnMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NTdGFja0luc3RhbmNlc2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJvcy1zdGFja2luc3RhbmNlc1xuICovXG5leHBvcnQgY2xhc3MgU3RhY2tJbnN0YW5jZXMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFN0YWNrSW5zdGFuY2VzUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExhc3RPcGVyYXRpb25JZDogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMYXN0T3BlcmF0aW9uSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTdGFja3M6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3RhY2tzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU3RhY2tJbnN0YW5jZXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc1N0YWNrSW5zdGFuY2VzID0gbmV3IFJvc1N0YWNrSW5zdGFuY2VzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgb3BlcmF0aW9uUHJlZmVyZW5jZXM6IHByb3BzLm9wZXJhdGlvblByZWZlcmVuY2VzLFxuICAgICAgICAgICAgcmV0YWluU3RhY2tzOiBwcm9wcy5yZXRhaW5TdGFja3MgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5yZXRhaW5TdGFja3MgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLnJldGFpblN0YWNrcyxcbiAgICAgICAgICAgIHJlZ2lvbklkczogcHJvcHMucmVnaW9uSWRzLFxuICAgICAgICAgICAgYWNjb3VudElkczogcHJvcHMuYWNjb3VudElkcyxcbiAgICAgICAgICAgIHBhcmFtZXRlck92ZXJyaWRlczogcHJvcHMucGFyYW1ldGVyT3ZlcnJpZGVzLFxuICAgICAgICAgICAgc3RhY2tHcm91cE5hbWU6IHByb3BzLnN0YWNrR3JvdXBOYW1lLFxuICAgICAgICAgICAgZGVwbG95bWVudFRhcmdldHM6IHByb3BzLmRlcGxveW1lbnRUYXJnZXRzLFxuICAgICAgICAgICAgb3BlcmF0aW9uRGVzY3JpcHRpb246IHByb3BzLm9wZXJhdGlvbkRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGlzYWJsZVJvbGxiYWNrOiBwcm9wcy5kaXNhYmxlUm9sbGJhY2ssXG4gICAgICAgICAgICB0aW1lb3V0SW5NaW51dGVzOiBwcm9wcy50aW1lb3V0SW5NaW51dGVzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1N0YWNrSW5zdGFuY2VzO1xuICAgICAgICB0aGlzLmF0dHJMYXN0T3BlcmF0aW9uSWQgPSByb3NTdGFja0luc3RhbmNlcy5hdHRyTGFzdE9wZXJhdGlvbklkO1xuICAgICAgICB0aGlzLmF0dHJTdGFja3MgPSByb3NTdGFja0luc3RhbmNlcy5hdHRyU3RhY2tzO1xuICAgIH1cbn1cbiJdfQ==