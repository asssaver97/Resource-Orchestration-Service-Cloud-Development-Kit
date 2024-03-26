"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunCommand = exports.RunCommandProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "RunCommandProperty", { enumerable: true, get: function () { return ecs_generated_1.RosRunCommand; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::RunCommand`, which is used to run a shell, PowerShell, or batch command on Elastic Compute Service (ECS) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRunCommand`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-runcommand
 */
class RunCommand extends ros.Resource {
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
        const rosRunCommand = new ecs_generated_1.RosRunCommand(this, id, {
            description: props.description,
            parameters: props.parameters,
            resourceGroupId: props.resourceGroupId,
            timeout: props.timeout,
            windowsPasswordName: props.windowsPasswordName,
            contentEncoding: props.contentEncoding,
            name: props.name,
            workingDir: props.workingDir,
            commandContent: props.commandContent,
            repeatMode: props.repeatMode,
            type: props.type,
            username: props.username,
            containerName: props.containerName,
            containerId: props.containerId,
            frequency: props.frequency,
            runAgainOn: props.runAgainOn,
            enableParameter: props.enableParameter,
            sync: props.sync === undefined || props.sync === null ? false : props.sync,
            instanceIds: props.instanceIds,
            keepCommand: props.keepCommand,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRunCommand;
        this.attrCommandId = rosRunCommand.attrCommandId;
        this.attrInvokeId = rosRunCommand.attrInvokeId;
        this.attrInvokeInstances = rosRunCommand.attrInvokeInstances;
        this.attrInvokeResults = rosRunCommand.attrInvokeResults;
    }
}
exports.RunCommand = RunCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFnSzVDOzs7O0dBSUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxHQUFHLENBQUMsUUFBUTtJQTBCeEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9DLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUMxRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDO1FBQy9DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxhQUFhLENBQUMsbUJBQW1CLENBQUM7UUFDN0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUM3RCxDQUFDO0NBQ0o7QUFuRUQsZ0NBbUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUnVuQ29tbWFuZCB9IGZyb20gJy4vZWNzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1J1bkNvbW1hbmQgYXMgUnVuQ29tbWFuZFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUnVuQ29tbWFuZGAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lY3MtcnVuY29tbWFuZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJ1bkNvbW1hbmRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb21tYW5kQ29udGVudDogVGhlIHBsYWludGV4dCBjb250ZW50IG9yIHRoZSBCYXNlNjQtZW5jb2RlZCBjb250ZW50IG9mIHRoZSBzY3JpcHQuIFRoZSBCYXNlNjQtZW5jb2RlZCBzY3JpcHQgY29udGVudCBjYW5ub3QgZXhjZWVkIDE2IEtCLlxuICAgICAqIFlvdSBjYW4gZW5hYmxlIHRoZSBjdXN0b20gcGFyYW1ldGVyIGZ1bmN0aW9uIGJ5IHNldHRpbmcgRW5hYmxlUGFyYW1ldGVyPXRydWUgaW4gdGhlIHNjcmlwdCBjb250ZW50OlxuICAgICAqIERlZmluZSBjdXN0b20gcGFyYW1ldGVycyBpbiB0aGUge3t9fSBmb3JtYXQuIFdpdGhpbiB7e319LCB0aGUgc3BhY2VzIGFuZCBsaW5lIGJyZWFrcyBiZWZvcmUgYW5kIGFmdGVyIHRoZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIgYXJlIGlnbm9yZWQuXG4gICAgICogVGhlIG51bWJlciBvZiBjdXN0b20gcGFyYW1ldGVycyBjYW5ub3QgZXhjZWVkIDIwLlxuICAgICAqIEEgY3VzdG9tIHBhcmFtZXRlciBuYW1lIGNhbiBjb250YWluIG9ubHkgbGV0dGVycywgZGlnaXRzLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gSXQgaXMgY2FzZSBpbnNlbnNpdGl2ZS5cbiAgICAgKiBFYWNoIGN1c3RvbSBwYXJhbWV0ZXIga2V5IGNhbm5vdCBleGNlZWQgNjQgYnl0ZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tbWFuZENvbnRlbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlSWRzOiBUaGUgaW5zdGFuY2UgaWQgbGlzdC4gSW5zdGFuY2VzIHN0YXR1cyBtdXN0IGJlIHJ1bm5pbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZHM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0eXBlOiBUaGUgbGFuZ3VhZ2UgdHlwZSBvZiB0aGUgTyZNIHNjcmlwdC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFJ1bkJhdFNjcmlwdDogYmF0Y2ggc2NyaXB0cyBmb3IgV2luZG93cyBpbnN0YW5jZXNcbiAgICAgKiBSdW5Qb3dlclNoZWxsU2NyaXB0OiBQb3dlclNoZWxsIHNjcmlwdHMgZm9yIFdpbmRvd3MgaW5zdGFuY2VzXG4gICAgICogUnVuU2hlbGxTY3JpcHQ6IHNoZWxsIHNjcmlwdHMgZm9yIExpbnV4IGluc3RhbmNlc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbnRhaW5lcklkOiBUaGUgSUQgb2YgdGhlIGNvbnRhaW5lci4gT25seSA2NC1iaXQgaGV4YWRlY2ltYWwgc3RyaW5ncyBhcmUgc3VwcG9ydGVkLiBZb3UgY2FuIHVzZSBjb250YWluZXIgSURzIHRoYXQgYXJlIHByZWZpeGVkIHdpdGggZG9ja2VyOlxcL1xcLywgY29udGFpbmVyZDpcXC9cXC8sIG9yIGNyaS1vOlxcL1xcLyB0byBzcGVjaWZ5IGNvbnRhaW5lciBydW50aW1lcy5cbiAgICAgKiBUYWtlIG5vdGUgb2YgdGhlIGZvbGxvd2luZyBpdGVtczpcbiAgICAgKiAtIElmIHlvdSBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLCBDbG91ZCBBc3Npc3RhbnQgcnVucyBzY3JpcHRzIGluIHRoZSBzcGVjaWZpZWQgY29udGFpbmVyIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKiAtIElmIHlvdSBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLCBtYWtlIHN1cmUgdGhhdCB0aGUgdmVyc2lvbiBvZiBDbG91ZCBBc3Npc3RhbnQgQWdlbnQgaW5zdGFsbGVkIG9uIExpbnV4IGluc3RhbmNlcyBpcyAyLjIuMy4zNDQgb3IgbGF0ZXIuLSBJZiB5b3Ugc3BlY2lmeSB0aGlzIHBhcmFtZXRlciwgVXNlcm5hbWUgdGhhdCBpcyBzcGVjaWZpZWQgaW4gYSByZXF1ZXN0IHRvIGNhbGwgdGhpcyBvcGVyYXRpb24gYW5kIFdvcmtpbmdEaXIgdGhhdCBpcyBzcGVjaWZpZWQgaW4gYSByZXF1ZXN0IHRvIGNhbGwgdGhlIENyZWF0ZUNvbW1hbmQgb3BlcmF0aW9uIGRvIG5vdCB0YWtlIGVmZmVjdC4gWW91IGNhbiBydW4gdGhlIGNvbW1hbmQgb25seSBpbiB0aGUgZGVmYXVsdCB3b3JraW5nIGRpcmVjdG9yeSBvZiB0aGUgY29udGFpbmVyIGJ5IHVzaW5nIHRoZSBkZWZhdWx0IHVzZXIgb2YgdGhlIGNvbnRhaW5lci4gXG4gICAgICogLSBJZiB5b3Ugc3BlY2lmeSB0aGlzIHBhcmFtZXRlciwgb25seSBzaGVsbCBzY3JpcHRzIGNhbiBiZSBydW4gaW4gTGludXggY29udGFpbmVycy4gWW91IGNhbm5vdCBhZGQgYSBjb21tYW5kIGluIHRoZSBmb3JtYXQgc2ltaWxhciB0byAjIVxcL3VzclxcL2JpblxcL3B5dGhvbiBhdCB0aGUgYmVnaW5uaW5nIG9mIGEgc2NyaXB0IHRvIHNwZWNpZnkgYSBzY3JpcHQgaW50ZXJwcmV0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFpbmVySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb250YWluZXJOYW1lOiBUaGUgbmFtZSBvZiB0aGUgY29udGFpbmVyLlxuICAgICAqIFRha2Ugbm90ZSBvZiB0aGUgZm9sbG93aW5nIGl0ZW1zOlxuICAgICAqIC0gSWYgeW91IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIsIENsb3VkIEFzc2lzdGFudCBydW5zIHNjcmlwdHMgaW4gdGhlIHNwZWNpZmllZCBjb250YWluZXIgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqIC0gSWYgeW91IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIsIG1ha2Ugc3VyZSB0aGF0IHRoZSB2ZXJzaW9uIG9mIENsb3VkIEFzc2lzdGFudCBBZ2VudCBpbnN0YWxsZWQgb24gTGludXggaW5zdGFuY2VzIGlzIDIuMi4zLjM0NCBvciBsYXRlci5cbiAgICAgKiAtIElmIHlvdSBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLCBVc2VybmFtZSB0aGF0IGlzIHNwZWNpZmllZCBpbiBhIHJlcXVlc3QgdG8gY2FsbCB0aGlzIG9wZXJhdGlvbiBhbmQgV29ya2luZ0RpciB0aGF0IGlzIHNwZWNpZmllZCBpbiBhIHJlcXVlc3QgdG8gY2FsbCB0aGUgQ3JlYXRlQ29tbWFuZCBvcGVyYXRpb24gZG8gbm90IHRha2UgZWZmZWN0LiBZb3UgY2FuIHJ1biB0aGUgY29tbWFuZCBvbmx5IGluIHRoZSBkZWZhdWx0IHdvcmtpbmcgZGlyZWN0b3J5IG9mIHRoZSBjb250YWluZXIgYnkgdXNpbmcgdGhlIGRlZmF1bHQgdXNlciBvZiB0aGUgY29udGFpbmVyLiBcbiAgICAgKiAtIElmIHlvdSBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLCBvbmx5IHNoZWxsIHNjcmlwdHMgY2FuIGJlIHJ1biBpbiBMaW51eCBjb250YWluZXJzLiBZb3UgY2Fubm90IGFkZCBhIGNvbW1hbmQgaW4gdGhlIGZvcm1hdCBzaW1pbGFyIHRvICMhXFwvdXNyXFwvYmluXFwvcHl0aG9uIGF0IHRoZSBiZWdpbm5pbmcgb2YgYSBzY3JpcHQgdG8gc3BlY2lmeSBhIHNjcmlwdCBpbnRlcnByZXRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb250YWluZXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29udGVudEVuY29kaW5nOiBUaGUgZW5jb2RpbmcgbW9kZSBvZiBzY3JpcHQgY29udGVudCAoQ29tbWFuZENvbnRlbnQpLiBWYWxpZCB2YWx1ZXMgKGNhc2UgaW5zZW5zaXRpdmUpOlxuICAgICAqIFBsYWluVGV4dDogVGhlIHNjcmlwdCBjb250ZW50IGlzIG5vdCBlbmNvZGVkLCBhbmQgdHJhbnNtaXR0ZWQgaW4gcGxhaW50ZXh0LlxuICAgICAqIEJhc2U2NDogYmFzZTY0LWVuY29kZWQuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogUGxhaW5UZXh0LiBJZiB0aGUgc3BlY2lmaWVkIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIGlzIGludmFsaWQsIFBsYWluVGV4dCBpcyB1c2VkIGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGVudEVuY29kaW5nPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgc2NyaXB0LCB3aGljaCBzdXBwb3J0cyBhbGwgY2hhcmFjdGVyIHNldHMuIEl0IGNhbiBiZSB1cCB0byA1MTIgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmFibGVQYXJhbWV0ZXI6IFNwZWNpZmllcyB3aGV0aGVyIHRoZSBzY3JpcHQgY29udGFpbnMgY3VzdG9tIHBhcmFtZXRlcnMuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVQYXJhbWV0ZXI/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZnJlcXVlbmN5OiBUaGUgZXhlY3V0aW9uIHBlcmlvZCBvZiByZWN1cnJpbmcgdGFza3MuIElmIHRoZSBUaW1lZCBwYXJhbWV0ZXIgaXMgc2V0IHRvIFRydWUsIHlvdSBtdXN0IHNwZWNpZnkgdGhlIEZyZXF1ZW5jeSBwYXJhbWV0ZXIuIFRoZSBpbnRlcnZhbCBiZXR3ZWVuIHR3byByZWN1cnJpbmcgdGFza3MgY2Fubm90IGJlIGxlc3MgdGhhbiAxMCBzZWNvbmRzLlxuICAgICAqIFRoZSBwYXJhbWV0ZXIgdmFsdWUgZm9sbG93cyB0aGUgY3JvbiBleHByZXNzaW9uLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIENvbmZpZ3VyZSBzY2hlZHVsZWQgY29tbWFuZHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZnJlcXVlbmN5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkga2VlcENvbW1hbmQ6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldGFpbiB0aGUgc2NyaXB0IGFmdGVyIGl0IGlzIHJ1bi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHRydWU6IFRoZSBzY3JpcHQgaXMgcmV0YWluZWQuIFlvdSBjYW4gY2FsbCB0aGUgSW52b2tlQ29tbWFuZCBvcGVyYXRpb24gdG8gcnVuIHRoZSBzY3JpcHQgYWdhaW4sIGNhbGwgdGhlIERlc2NyaWJlQ29tbWFuZHMgb3BlcmF0aW9uIHRvIHF1ZXJ5IHRoZSBzY3JpcHQsIGFuZCBjYWxsIHRoZSBEZWxldGVDb21tYW5kcyBvcGVyYXRpb24gdG8gZGVsZXRlIHRoZSBzY3JpcHQuIFRoZSByZXRhaW5lZCBzY3JpcHQgdGFrZXMgdXAgdGhlIHF1b3RhIG9mIENsb3VkIEFzc2lzdGFudCBzY3JpcHRzLlxuICAgICAqIGZhbHNlOiBUaGUgc2NyaXB0IGlzIG5vdCByZXRhaW5lZC4gSXQgaXMgYXV0b21hdGljYWxseSBkZWxldGVkIGFmdGVyIHJ1bm5pbmcsIHdpdGhvdXQgdGFraW5nIHVwIHRoZSBxdW90YSBvZiBDbG91ZCBBc3Npc3RhbnQgc2NyaXB0cy5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtlZXBDb21tYW5kPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBzY3JpcHQsIHdoaWNoIHN1cHBvcnRzIGFsbCBjaGFyYWN0ZXIgc2V0cy4gSXQgY2FuIGJlIHVwIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGFyYW1ldGVyczogVGhlIGtleS12YWx1ZSBwYWlycyBvZiBjdXN0b20gcGFyYW1ldGVycyBwYXNzZWQgaW4gd2hlbiB0aGUgc2NyaXB0IGNvbnRhaW5zIGN1c3RvbSBwYXJhbWV0ZXJzLlxuICAgICAqIE51bWJlciBvZiBjdXN0b20gcGFyYW1ldGVyczogMCB0byAxMC5cbiAgICAgKiBUaGUga2V5IGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmcuIEl0IGNhbiBiZSB1cCB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBUaGUgdmFsdWUgY2FuIGJlIGFuIGVtcHR5IHN0cmluZy5cbiAgICAgKiBBZnRlciB0aGUgY3VzdG9tIHBhcmFtZXRlcnMgYW5kIHRoZSBvcmlnaW5hbCBzY3JpcHQgY29udGVudCBhcmUgQmFzZTY0IGVuY29kZWQsIHRoZSB0b3RhbCBzaXplIGNhbm5vdCBleGNlZWQgMTYgS0IuXG4gICAgICogVGhlIHNldCBvZiBjdXN0b20gcGFyYW1ldGVyIG5hbWVzIG11c3QgYmUgYSBzdWJzZXQgb2YgdGhlIHBhcmFtZXRlciBzZXQgdGhhdCBpcyBkZWZpbmVkIHdoZW4geW91IGNyZWF0ZWQgdGhlIHNjcmlwdC4gWW91IGNhbiB1c2UgYW4gZW1wdHkgc3RyaW5nIHRvIHJlcHJlc2VudCB0aGUgcGFyYW1ldGVycyB0aGF0IGFyZSBub3QgcGFzc2VkIGluLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IG51bGwsIGluZGljYXRpbmcgdGhhdCB0aGlzIHBhcmFtZXRlciBpcyBjYW5jZWxlZCBhbmQgY3VzdG9tZXIgcGFyYW1ldGVycyBhcmUgZGlzYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlcGVhdE1vZGU6IFNwZWNpZmllcyBob3cgdG8gcnVuIHRoZSBjb21tYW5kLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSAqKk9uY2UqKjogaW1tZWRpYXRlbHkgcnVucyB0aGUgY29tbWFuZC5cbiAgICAgKiAtICoqUGVyaW9kKio6IHJ1bnMgdGhlIGNvbW1hbmQgb24gYSBzY2hlZHVsZS4gSWYgeW91IHNldCB0aGlzIHBhcmFtZXRlciB0byBQZXJpb2QsIHlvdSBtdXN0IHNwZWNpZnkgKipGcmVxdWVuY3kqKi5cbiAgICAgKiAtICoqTmV4dFJlYm9vdE9ubHkqKjogcnVucyB0aGUgY29tbWFuZCB0aGUgbmV4dCB0aW1lIHRoZSBpbnN0YW5jZSBpcyBzdGFydGVkLlxuICAgICAqIC0gKipFdmVyeVJlYm9vdCo6IHJ1bnMgdGhlIGNvbW1hbmQgZXZlcnkgdGltZSB0aGUgaW5zdGFuY2UgaXMgc3RhcnRlZC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOlxuICAgICAqIC0gSWYgeW91IGRvIG5vdCBzcGVjaWZ5IEZyZXF1ZW5jeSwgdGhlIGRlZmF1bHQgdmFsdWUgaXMgT25jZS5cbiAgICAgKiAtIElmIHlvdSBzcGVjaWZ5ICoqRnJlcXVlbmN5KiosICoqUGVyaW9kKiogaXMgdXNlZCBhcyB0aGUgdmFsdWUgb2YgUmVwZWF0TW9kZSByZWdhcmRsZXNzIG9mIHdoZXRoZXIgUmVwZWF0TW9kZSBpcyBzZXQgdG8gUGVyaW9kLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcGVhdE1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdG8gYXNzaWduIHRoZSBjb21tYW5kIGV4ZWN1dGlvbnMuIFRoZSBpbnN0YW5jZXMgc3BlY2lmaWVkIGJ5IEluc3RhbmNlSWRzIG11c3QgYmVsb25nIHRvIHRoZSBzcGVjaWZpZWQgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcnVuQWdhaW5PbjogVGhlIHN0YWdlIG9mIGV4ZWN1dGluZyB0aGUgY29tbWFuZCBhZ2Fpbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBydW5BZ2Fpbk9uPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5bmM6IFdoZXRoZXIgdG8gaW52b2tlIHN5bmNocm9ub3VzbHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3luYz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBydW5fY29tbWFuZC4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBydW5fY29tbWFuZC4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NSdW5Db21tYW5kLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGltZW91dDogVGhlIHRpbWVvdXQgcGVyaW9kIGZvciBzY3JpcHQgZXhlY3V0aW9uLiBVbml0OiBzZWNvbmRzLiBBIHRpbWVvdXQgZXJyb3Igb2NjdXJzIHdoZW4gYSBzY3JpcHQgY2Fubm90IGJlIHJ1biBiZWNhdXNlIHRoZSBwcm9jZXNzIHNsb3dzIGRvd24sIGEgc3BlY2lmaWMgbW9kdWxlIG9yIHRoZSBDbG91ZCBBc3Npc3RhbnQgY2xpZW50IGRvZXMgbm90IGV4aXN0LiBXaGVuIHRoZSBzY3JpcHQgdGltZXMgb3V0LCB0aGUgc2NyaXB0IHByb2Nlc3MgaXMgZm9yY2libHkgdGVybWluYXRlZC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiA2MC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlcm5hbWU6IFRoZSB1c2VybmFtZSB0byB1c2UgdG8gcnVuIHRoZSBjb21tYW5kIG9uIGluc3RhbmNlcy4gVGhlIHVzZXJuYW1lIGNhbiBiZSB1cCB0byAyNTUgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICogLSBGb3IgTGludXggaW5zdGFuY2VzLCB0aGUgcm9vdCB1c2VybmFtZSBpcyB1c2VkIGJ5IGRlZmF1bHQuXG4gICAgICogLSBGb3IgV2luZG93cyBpbnN0YW5jZXMsIHRoZSBTeXN0ZW0gdXNlcm5hbWUgaXMgdXNlZCBieSBkZWZhdWx0LlxuICAgICAqIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IG90aGVyIHVzZXJuYW1lcyB0aGF0IGFscmVhZHkgZXhpc3QgaW4gdGhlIGluc3RhbmNlcyB0byBydW4gdGhlIGNvbW1hbmQuIEZvciBzZWN1cml0eSBwdXJwb3Nlcywgd2UgcmVjb21tZW5kIHRoYXQgeW91IHJ1biBDbG91ZCBBc3Npc3RhbnQgY29tbWFuZHMgYXMgYSByZWd1bGFyIHVzZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlcm5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3aW5kb3dzUGFzc3dvcmROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcGFzc3dvcmQgdG8gdXNlIHRvIHJ1biB0aGUgY29tbWFuZCBvbiBXaW5kb3dzIGluc3RhbmNlcy4gVGhlIG5hbWUgY2FuIGJlIHVwIHRvIDI1NSBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBJZiB5b3UgZG8gbm90IHdhbnQgdG8gdXNlIHRoZSBkZWZhdWx0IFN5c3RlbSB1c2VyIHRvIHJ1biB0aGUgY29tbWFuZCBvbiBXaW5kb3dzIGluc3RhbmNlcywgc3BlY2lmeSBib3RoICoqV2luZG93c1Bhc3N3b3JkTmFtZSoqIGFuZCAqKlVzZXJuYW1lKiouIFRvIG1pdGlnYXRlIHRoZSByaXNrIG9mIHBhc3N3b3JkIGxlYWtzLCB0aGUgcGFzc3dvcmQgaXMgc3RvcmVkIGluIHBsYWludGV4dCBpbiBPcGVyYXRpb24gT3JjaGVzdHJhdGlvbiBTZXJ2aWNlIChPT1MpIFBhcmFtZXRlciBTdG9yZSwgYW5kIG9ubHkgdGhlIG5hbWUgb2YgdGhlIHBhc3N3b3JkIGlzIHBhc3NlZCBpbiBieSB1c2luZyBXaW5kb3dzUGFzc3dvcmROYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdpbmRvd3NQYXNzd29yZE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JraW5nRGlyOiBUaGUgcnVubmluZyBkaXJlY3Rvcnkgb2YgdGhlIHNjcmlwdCBpbiB0aGUgRUNTIGluc3RhbmNlLlxuICAgICAqIERlZmF1bHQgdmFsdWU6XG4gICAgICogTGludXggaW5zdGFuY2VzOiB1bmRlciB0aGUgaG9tZSBkaXJlY3Rvcnkgb2YgdGhlIGFkbWluaXN0cmF0b3IgKHJvb3QgdXNlcik6IFxcL3Jvb3QuXG4gICAgICogV2luZG93cyBpbnN0YW5jZXM6IHVuZGVyIHRoZSBkaXJlY3Rvcnkgd2hlcmUgdGhlIHByb2Nlc3Mgb2YgdGhlIENsb3VkIEFzc2lzdGFudCBjbGllbnQgaXMgbG9jYXRlZCwgc3VjaCBhcyBDOlxcUHJvZ3JhbURhdGFcXGFsaXl1blxcYXNzaXN0XFwkKHZlcnNpb24pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtpbmdEaXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkVDUzo6UnVuQ29tbWFuZGAsIHdoaWNoIGlzIHVzZWQgdG8gcnVuIGEgc2hlbGwsIFBvd2VyU2hlbGwsIG9yIGJhdGNoIGNvbW1hbmQgb24gRWxhc3RpYyBDb21wdXRlIFNlcnZpY2UgKEVDUykgaW5zdGFuY2VzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zUnVuQ29tbWFuZGBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVjcy1ydW5jb21tYW5kXG4gKi9cbmV4cG9ydCBjbGFzcyBSdW5Db21tYW5kIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBSdW5Db21tYW5kUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbW1hbmRJZDogVGhlIGlkIG9mIGNvbW1hbmQgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbW1hbmRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEludm9rZUlkOiBUaGUgaW52b2tlIGlkIG9mIGNvbW1hbmQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnZva2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEludm9rZUluc3RhbmNlczogVGhlIEludm9rZUluc3RhbmNlcyBvZiBjb21tYW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW52b2tlSW5zdGFuY2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW52b2tlUmVzdWx0czogVGhlIHJlc3VsdHMgb2YgaW52b2tlIGNvbW1hbmQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnZva2VSZXN1bHRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUnVuQ29tbWFuZFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zUnVuQ29tbWFuZCA9IG5ldyBSb3NSdW5Db21tYW5kKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogcHJvcHMucGFyYW1ldGVycyxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgdGltZW91dDogcHJvcHMudGltZW91dCxcbiAgICAgICAgICAgIHdpbmRvd3NQYXNzd29yZE5hbWU6IHByb3BzLndpbmRvd3NQYXNzd29yZE5hbWUsXG4gICAgICAgICAgICBjb250ZW50RW5jb2Rpbmc6IHByb3BzLmNvbnRlbnRFbmNvZGluZyxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICB3b3JraW5nRGlyOiBwcm9wcy53b3JraW5nRGlyLFxuICAgICAgICAgICAgY29tbWFuZENvbnRlbnQ6IHByb3BzLmNvbW1hbmRDb250ZW50LFxuICAgICAgICAgICAgcmVwZWF0TW9kZTogcHJvcHMucmVwZWF0TW9kZSxcbiAgICAgICAgICAgIHR5cGU6IHByb3BzLnR5cGUsXG4gICAgICAgICAgICB1c2VybmFtZTogcHJvcHMudXNlcm5hbWUsXG4gICAgICAgICAgICBjb250YWluZXJOYW1lOiBwcm9wcy5jb250YWluZXJOYW1lLFxuICAgICAgICAgICAgY29udGFpbmVySWQ6IHByb3BzLmNvbnRhaW5lcklkLFxuICAgICAgICAgICAgZnJlcXVlbmN5OiBwcm9wcy5mcmVxdWVuY3ksXG4gICAgICAgICAgICBydW5BZ2Fpbk9uOiBwcm9wcy5ydW5BZ2Fpbk9uLFxuICAgICAgICAgICAgZW5hYmxlUGFyYW1ldGVyOiBwcm9wcy5lbmFibGVQYXJhbWV0ZXIsXG4gICAgICAgICAgICBzeW5jOiBwcm9wcy5zeW5jID09PSB1bmRlZmluZWQgfHwgcHJvcHMuc3luYyA9PT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuc3luYyxcbiAgICAgICAgICAgIGluc3RhbmNlSWRzOiBwcm9wcy5pbnN0YW5jZUlkcyxcbiAgICAgICAgICAgIGtlZXBDb21tYW5kOiBwcm9wcy5rZWVwQ29tbWFuZCxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUnVuQ29tbWFuZDtcbiAgICAgICAgdGhpcy5hdHRyQ29tbWFuZElkID0gcm9zUnVuQ29tbWFuZC5hdHRyQ29tbWFuZElkO1xuICAgICAgICB0aGlzLmF0dHJJbnZva2VJZCA9IHJvc1J1bkNvbW1hbmQuYXR0ckludm9rZUlkO1xuICAgICAgICB0aGlzLmF0dHJJbnZva2VJbnN0YW5jZXMgPSByb3NSdW5Db21tYW5kLmF0dHJJbnZva2VJbnN0YW5jZXM7XG4gICAgICAgIHRoaXMuYXR0ckludm9rZVJlc3VsdHMgPSByb3NSdW5Db21tYW5kLmF0dHJJbnZva2VSZXN1bHRzO1xuICAgIH1cbn1cbiJdfQ==