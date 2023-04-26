"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = exports.CommandProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "CommandProperty", { enumerable: true, get: function () { return ecs_generated_1.RosCommand; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::Command`
 */
class Command extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::Command`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCommand = new ecs_generated_1.RosCommand(this, id, {
            workingDir: props.workingDir,
            commandContent: props.commandContent,
            type: props.type,
            description: props.description,
            timeout: props.timeout,
            enableParameter: props.enableParameter,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCommand;
        this.attrCommandId = rosCommand.attrCommandId;
    }
}
exports.Command = Command;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE2QztBQUV0QixnR0FGZCwwQkFBVSxPQUVtQjtBQTRDdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVlyQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW1CLEVBQUUsbUNBQTJDLElBQUk7UUFDOUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFVBQVUsR0FBRyxJQUFJLDBCQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUN6QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ2xELENBQUM7Q0FDSjtBQWxDRCwwQkFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NDb21tYW5kIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQ29tbWFuZCBhcyBDb21tYW5kUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVDUzo6Q29tbWFuZGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHlwZTogVGhlIHR5cGUgb2YgY29tbWFuZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0eXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb21tYW5kQ29udGVudDogVGhlIGNvbnRlbnQgb2YgY29tbWFuZC4gQ29udGVudCByZXF1aXJlcyBiYXNlNjQgZW5jb2RpbmcuIE1heGltdW0gc2l6ZSBzdXBwb3J0IDE2S0IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tbWFuZENvbnRlbnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIGNvbW1hbmQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmFibGVQYXJhbWV0ZXI6IFNwZWNpZmllcyB3aGV0aGVyIHRoZSBzY3JpcHQgY29udGFpbnMgY3VzdG9tIHBhcmFtZXRlcnMuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVQYXJhbWV0ZXI/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgY29tbWFuZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGltZW91dDogVG90YWwgdGltZW91dCB3aGVuIHRoZSBjb21tYW5kIGlzIGV4ZWN1dGVkIGluIHRoZSBpbnN0YW5jZS4gSW5wdXQgdGhlIHRpbWUgdW5pdCBhcyBzZWNvbmQuIERlZmF1bHQgaXMgNjBzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3b3JraW5nRGlyOiBUaGUgcGF0aCB3aGVyZSBjb21tYW5kIHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdvcmtpbmdEaXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVDUzo6Q29tbWFuZGBcbiAqL1xuZXhwb3J0IGNsYXNzIENvbW1hbmQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbW1hbmRJZDogVGhlIGlkIG9mIGNvbW1hbmQgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbW1hbmRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVDUzo6Q29tbWFuZGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQ29tbWFuZFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0NvbW1hbmQgPSBuZXcgUm9zQ29tbWFuZCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHdvcmtpbmdEaXI6IHByb3BzLndvcmtpbmdEaXIsXG4gICAgICAgICAgICBjb21tYW5kQ29udGVudDogcHJvcHMuY29tbWFuZENvbnRlbnQsXG4gICAgICAgICAgICB0eXBlOiBwcm9wcy50eXBlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGltZW91dDogcHJvcHMudGltZW91dCxcbiAgICAgICAgICAgIGVuYWJsZVBhcmFtZXRlcjogcHJvcHMuZW5hYmxlUGFyYW1ldGVyLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDb21tYW5kO1xuICAgICAgICB0aGlzLmF0dHJDb21tYW5kSWQgPSByb3NDb21tYW5kLmF0dHJDb21tYW5kSWQ7XG4gICAgfVxufVxuIl19