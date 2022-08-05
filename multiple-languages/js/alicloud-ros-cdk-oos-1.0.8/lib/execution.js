"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Execution = exports.ExecutionProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const oos_generated_1 = require("./oos.generated");
Object.defineProperty(exports, "ExecutionProperty", { enumerable: true, get: function () { return oos_generated_1.RosExecution; } });
/**
 * A ROS resource type:  `ALIYUN::OOS::Execution`
 */
class Execution extends ros.Resource {
    /**
     * Create a new `ALIYUN::OOS::Execution`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosExecution = new oos_generated_1.RosExecution(this, id, {
            parentExecutionId: props.parentExecutionId,
            resourceOptions: props.resourceOptions,
            parameters: props.parameters,
            safetyCheck: props.safetyCheck === undefined || props.safetyCheck === null ? 'ConfirmEveryHighRiskAction' : props.safetyCheck,
            resourceGroupId: props.resourceGroupId,
            mode: props.mode === undefined || props.mode === null ? 'Automatic' : props.mode,
            templateName: props.templateName,
            templateVersion: props.templateVersion,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosExecution;
        this.attrCounters = rosExecution.attrCounters;
        this.attrCurlCli = rosExecution.attrCurlCli;
        this.attrExecutionId = rosExecution.attrExecutionId;
        this.attrOutputs = rosExecution.attrOutputs;
        this.attrPowerShellCurlCli = rosExecution.attrPowerShellCurlCli;
        this.attrStatus = rosExecution.attrStatus;
        this.attrStatusMessage = rosExecution.attrStatusMessage;
        this.attrWindowsCurlCli = rosExecution.attrWindowsCurlCli;
    }
}
exports.Execution = Execution;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhlY3V0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBdUQxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0R2Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFCLEVBQUUsbUNBQTJDLElBQUk7UUFDaEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFlBQVksR0FBRyxJQUFJLDRCQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3QyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVc7WUFDN0gsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUNoRixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztRQUN4RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDO0lBQzlELENBQUM7Q0FDSjtBQXJGRCw4QkFxRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NFeGVjdXRpb24gfSBmcm9tICcuL29vcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NFeGVjdXRpb24gYXMgRXhlY3V0aW9uUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok9PUzo6RXhlY3V0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRlbXBsYXRlTmFtZTogVGVtcGxhdGUgbmFtZS4gQ29udGVudCBpcyBsaW1pdGVkIHRvIGxldHRlcnMsIG51bWJlcnMsIHVuZGVybGluZWQsIHVuZGVybGluZSwgdGhlIGxlbmd0aCBvZiAyMDAgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSB0ZW1wbGF0ZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1vZGU6IEV4ZWN1dGlvbiBtb2RlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJzIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhcmFtZXRlcnM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXJlbnRFeGVjdXRpb25JZDogUGFyZW50IGV4ZWN1dGlvbiBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXJlbnRFeGVjdXRpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VPcHRpb25zOiBSZXNvdXJjZSBvcHRpb25zIHVzZXIgYnkgUk9TLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlT3B0aW9ucz86IFJvc0V4ZWN1dGlvbi5SZXNvdXJjZU9wdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNhZmV0eUNoZWNrOiBTZWN1cml0eSBjaGVjayBtb2RlLiBBbGxvd2VkIHZhbHVlczpcbiAgICAgKiAtIFNraXA6IFRoaXMgb3B0aW9uIG1lYW5zIHRoYXQgY3VzdG9tZXJzIHVuZGVyc3RhbmQgdGhlIHJpc2tzLCB5b3UgY2FuIGRvIGFueXRoaW5nIHdpdGhvdXQgY29uZmlybWF0aW9uIEFjdGlvbiwgbm8gbWF0dGVyIHdoYXQgdGhlIGxldmVsIG9mIHJpc2suIEl0IHRha2VzIGVmZmVjdCBvbmx5IGlmIE1vZGUgaXMgQXV0b21hdGljLlxuICAgICAqIC0gQ29uZmlybUV2ZXJ5SGlnaFJpc2tBY3Rpb24gKGRlZmF1bHQpOiBUaGlzIG9wdGlvbiB3b3VsZCByZXF1aXJlIGN1c3RvbWVycyB0byBjb25maXJtIGVhY2ggQWN0aW9uIGEgaGlnaCByaXNrLiBOb3RpZnlFeGVjdXRpb24gYnkgY2FsbGluZyBjdXN0b21lciBpbnRlcmZhY2UgdG8gY29uZmlybSBvciBjYW5jZWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2FmZXR5Q2hlY2s/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWcgdmFsdWUgYW5kIHRoZSBrZXkgbWFwcGluZywgdGhlIGxhYmVsIG9mIHRoZSBrZXkgbnVtYmVyIGNhbiBiZSB1cCB0byAyMC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiAoYW55KSB9O1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGVtcGxhdGVWZXJzaW9uOiBWZXJzaW9uIG51bWJlciBvZiB0ZW1wbGF0ZS4gRGVmYXVsdCB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGVtcGxhdGVWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpPT1M6OkV4ZWN1dGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIEV4ZWN1dGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ291bnRlcnM6IFRhc2sgc3RhdGlzdGljczogRmFpbGVkVGFza3MsIFN1Y2Nlc3NUYXNrcywgVG90YWxUYXNrcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvdW50ZXJzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ3VybENsaTogQ29udmVuaWVuY2UgYXR0cmlidXRlLCBwcm92aWRlcyBjdXJsIENMSSBjb21tYW5kIHByZWZpeCwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gbm90aWZ5IG9vcyBleGVjdXRpb24gaW5zdGVhZCBvZiBPT1MgQVBJIE5vdGlmeUV4ZWN1dGlvbi5cbllvdSBjYW4gbm90aWZ5IGFwcHJvdmUgdG8gb29zIGV4ZWN1dGlvbiBieSBhZGRpbmcgLS1kYXRhLWJpbmFyeSAne1wiZGF0YVwiOiB7XCJOb3RpZnlUeXBlXCI6IFwiQXBwcm92ZVwifX0nIFxuRm9yIG1vcmUgcGFyYW1ldGVycyBpbiBkYXRhLCByZWZlciB0byBodHRwczovL2hlbHAuYWxpeXVuLmNvbS9kb2N1bWVudF9kZXRhaWwvMTIwNzc3Lmh0bWwuXG5Zb3UgY2FuIGFsc28gbm90aWZ5IGV4ZWN1dGlvbiB2aWEgUk9TIEFQSSBTaWduYWxSZXNvdXJjZS4gQVBJIHBhcmFtZXRlcnMgU3RhdHVzIGFuZCBVbmlxdWVJZCBhcmUgaWdub3JlZC4gVXNlIEFQSSBwYXJhbWV0ZXIgRGF0YSB0byBwYXNzIGRhdGEuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDdXJsQ2xpOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRXhlY3V0aW9uSWQ6IEV4ZWN1dGlvbiBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckV4ZWN1dGlvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3V0cHV0czogRXhlY3V0aW9uIG91dHB1dC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck91dHB1dHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQb3dlclNoZWxsQ3VybENsaTogQ29udmVuaWVuY2UgYXR0cmlidXRlLCBwcm92aWRlcyBjdXJsIENMSSBjb21tYW5kIHByZWZpeCBmb3IgUG93ZXJTaGVsbCwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gbm90aWZ5IG9vcyBleGVjdXRpb24gaW5zdGVhZCBvZiBPT1MgQVBJIE5vdGlmeUV4ZWN1dGlvbi5cbllvdSBjYW4gbm90aWZ5IGFwcHJvdmUgdG8gb29zIGV4ZWN1dGlvbiBieSBhZGRpbmcgLUJvZHkgJ3tcImRhdGFcIjoge1wiTm90aWZ5VHlwZVwiOiBcIkFwcHJvdmVcIn19JyBcbkZvciBtb3JlIHBhcmFtZXRlcnMgaW4gZGF0YSwgcmVmZXIgdG8gaHR0cHM6Ly9oZWxwLmFsaXl1bi5jb20vZG9jdW1lbnRfZGV0YWlsLzEyMDc3Ny5odG1sLllvdSBjYW4gYWxzbyBub3RpZnkgZXhlY3V0aW9uIHZpYSBST1MgQVBJIFNpZ25hbFJlc291cmNlLiBBUEkgcGFyYW1ldGVycyBTdGF0dXMgYW5kIFVuaXF1ZUlkIGFyZSBpZ25vcmVkLiBVc2UgQVBJIHBhcmFtZXRlciBEYXRhIHRvIHBhc3MgZGF0YS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBvd2VyU2hlbGxDdXJsQ2xpOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3RhdHVzOiBFeGVjdXRpb24gc3RhdHVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3RhdHVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3RhdHVzTWVzc2FnZTogRXhlY3V0aW9uIHN0YXR1cyBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN0YXR1c01lc3NhZ2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBXaW5kb3dzQ3VybENsaTogQ29udmVuaWVuY2UgYXR0cmlidXRlLCBwcm92aWRlcyBjdXJsIENMSSBjb21tYW5kIHByZWZpeCBmb3IgV2luZG93cywgd2hpY2ggY2FuIGJlIHVzZWQgdG8gbm90aWZ5IG9vcyBleGVjdXRpb24gaW5zdGVhZCBvZiBPT1MgQVBJIE5vdGlmeUV4ZWN1dGlvbi5cbllvdSBjYW4gbm90aWZ5IGFwcHJvdmUgdG8gb29zIGV4ZWN1dGlvbiBieSBhZGRpbmcgLS1kYXRhLWJpbmFyeSBcIntcXFwiZGF0YVxcXCI6IHtcXFwiTm90aWZ5VHlwZVxcXCI6IFxcXCJBcHByb3ZlXFxcIn19XCIgXG5Gb3IgbW9yZSBwYXJhbWV0ZXJzIGluIGRhdGEsIHJlZmVyIHRvIGh0dHBzOi8vaGVscC5hbGl5dW4uY29tL2RvY3VtZW50X2RldGFpbC8xMjA3NzcuaHRtbC5Zb3UgY2FuIGFsc28gbm90aWZ5IGV4ZWN1dGlvbiB2aWEgUk9TIEFQSSBTaWduYWxSZXNvdXJjZS4gQVBJIHBhcmFtZXRlcnMgU3RhdHVzIGFuZCBVbmlxdWVJZCBhcmUgaWdub3JlZC4gVXNlIEFQSSBwYXJhbWV0ZXIgRGF0YSB0byBwYXNzIGRhdGEuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJXaW5kb3dzQ3VybENsaTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46Ok9PUzo6RXhlY3V0aW9uYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBFeGVjdXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NFeGVjdXRpb24gPSBuZXcgUm9zRXhlY3V0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcGFyZW50RXhlY3V0aW9uSWQ6IHByb3BzLnBhcmVudEV4ZWN1dGlvbklkLFxuICAgICAgICAgICAgcmVzb3VyY2VPcHRpb25zOiBwcm9wcy5yZXNvdXJjZU9wdGlvbnMsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiBwcm9wcy5wYXJhbWV0ZXJzLFxuICAgICAgICAgICAgc2FmZXR5Q2hlY2s6IHByb3BzLnNhZmV0eUNoZWNrID09PSB1bmRlZmluZWQgfHwgcHJvcHMuc2FmZXR5Q2hlY2sgPT09IG51bGwgPyAnQ29uZmlybUV2ZXJ5SGlnaFJpc2tBY3Rpb24nIDogcHJvcHMuc2FmZXR5Q2hlY2ssXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIG1vZGU6IHByb3BzLm1vZGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5tb2RlID09PSBudWxsID8gJ0F1dG9tYXRpYycgOiBwcm9wcy5tb2RlLFxuICAgICAgICAgICAgdGVtcGxhdGVOYW1lOiBwcm9wcy50ZW1wbGF0ZU5hbWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZVZlcnNpb246IHByb3BzLnRlbXBsYXRlVmVyc2lvbixcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zRXhlY3V0aW9uO1xuICAgICAgICB0aGlzLmF0dHJDb3VudGVycyA9IHJvc0V4ZWN1dGlvbi5hdHRyQ291bnRlcnM7XG4gICAgICAgIHRoaXMuYXR0ckN1cmxDbGkgPSByb3NFeGVjdXRpb24uYXR0ckN1cmxDbGk7XG4gICAgICAgIHRoaXMuYXR0ckV4ZWN1dGlvbklkID0gcm9zRXhlY3V0aW9uLmF0dHJFeGVjdXRpb25JZDtcbiAgICAgICAgdGhpcy5hdHRyT3V0cHV0cyA9IHJvc0V4ZWN1dGlvbi5hdHRyT3V0cHV0cztcbiAgICAgICAgdGhpcy5hdHRyUG93ZXJTaGVsbEN1cmxDbGkgPSByb3NFeGVjdXRpb24uYXR0clBvd2VyU2hlbGxDdXJsQ2xpO1xuICAgICAgICB0aGlzLmF0dHJTdGF0dXMgPSByb3NFeGVjdXRpb24uYXR0clN0YXR1cztcbiAgICAgICAgdGhpcy5hdHRyU3RhdHVzTWVzc2FnZSA9IHJvc0V4ZWN1dGlvbi5hdHRyU3RhdHVzTWVzc2FnZTtcbiAgICAgICAgdGhpcy5hdHRyV2luZG93c0N1cmxDbGkgPSByb3NFeGVjdXRpb24uYXR0cldpbmRvd3NDdXJsQ2xpO1xuICAgIH1cbn1cbiJdfQ==