"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityGroupEgress = exports.SecurityGroupEgressProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "SecurityGroupEgressProperty", { enumerable: true, get: function () { return ecs_generated_1.RosSecurityGroupEgress; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::SecurityGroupEgress`
 */
class SecurityGroupEgress extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ECS::SecurityGroupEgress`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSecurityGroupEgress = new ecs_generated_1.RosSecurityGroupEgress(this, id, {
            policy: props.policy,
            portRange: props.portRange,
            description: props.description,
            priority: props.priority === undefined || props.priority === null ? 1 : props.priority,
            securityGroupId: props.securityGroupId,
            destGroupOwnerId: props.destGroupOwnerId,
            ipProtocol: props.ipProtocol,
            destCidrIp: props.destCidrIp,
            nicType: props.nicType,
            ipv6DestCidrIp: props.ipv6DestCidrIp,
            destGroupId: props.destGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityGroupEgress;
    }
}
exports.SecurityGroupEgress = SecurityGroupEgress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHlncm91cGVncmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyaXR5Z3JvdXBlZ3Jlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUF5RDtBQUV0Qiw0R0FGMUIsc0NBQXNCLE9BRStCO0FBZ0U5RDs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFFakQ7OztPQUdHO0lBRUg7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUErQixFQUFFLG1DQUEyQyxJQUFJO1FBQzFILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLHNDQUFzQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ3RGLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDakMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUFoQ0Qsa0RBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU2VjdXJpdHlHcm91cEVncmVzcyB9IGZyb20gJy4vZWNzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1NlY3VyaXR5R3JvdXBFZ3Jlc3MgYXMgU2VjdXJpdHlHcm91cEVncmVzc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFQ1M6OlNlY3VyaXR5R3JvdXBFZ3Jlc3NgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdXJpdHlHcm91cEVncmVzc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlwUHJvdG9jb2w6IElwIHByb3RvY29sIGZvciBpbiBydWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlwUHJvdG9jb2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBvcnRSYW5nZTogSXAgcHJvdG9jb2wgcmVsYXRpdmUgcG9ydCByYW5nZS4gRm9yIHRjcCBhbmQgdWRwLCB0aGUgcG9ydCByYW5nIGlzIFsxLDY1NTM1XSwgdXNpbmcgZm9ybWF0ICcxLzIwMCdGb3IgaWNtcHxncmV8YWxsIHByb3RvY2VsLCB0aGUgcG9ydCByYW5nZSBzaG91bGQgYmUgJy0xLy0xJ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvcnRSYW5nZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIHRoZSBzZWN1cml0eSBncm91cCBydWxlLCBbMSwgNTEyXSBjaGFyYWN0ZXJzLiBUaGUgZGVmYXVsdCBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc3RDaWRySXA6IERlc3QgQ0lEUiBJcCBBZGRyZXNzIHJhbmdlLiBPbmx5IElQVjQgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RDaWRySXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXN0R3JvdXBJZDogRGVzdCBHcm91cCBJZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdEdyb3VwT3duZXJJZDogRGVzdCBHcm91cCBPd25lciBBY2NvdW50IElEXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdEdyb3VwT3duZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlwdjZEZXN0Q2lkcklwOiBEZXN0aW5hdGlvbiBJUHY2IENJRFIgYWRkcmVzcyBzZWdtZW50LiBTdXBwb3J0cyBJUCBhZGRyZXNzIHJhbmdlcyBpbiBDSURSIGZvcm1hdCBhbmQgSVB2NiBmb3JtYXQuXG4gICAgICogTm90ZSBPbmx5IFZQQyB0eXBlIElQIGFkZHJlc3NlcyBhcmUgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlwdjZEZXN0Q2lkcklwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmljVHlwZTogTmV0d29yayB0eXBlLCBjb3VsZCBiZSAnaW50ZXJuZXQnIG9yICdpbnRyYW5ldCcuIERlZmF1bHQgdmFsdWUgaXMgaW50ZXJuZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmljVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBvbGljeTogQXV0aG9yaXphdGlvbiBwb2xpY2llcywgcGFyYW1ldGVyIHZhbHVlcyBjYW4gYmU6IGFjY2VwdCAoYWNjZXB0ZWQgYWNjZXNzKSwgZHJvcCAoZGVuaWVkIGFjY2VzcykuIERlZmF1bHQgdmFsdWUgaXMgYWNjZXB0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGljeT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByaW9yaXR5OiBBdXRob3JpemF0aW9uIHBvbGljaWVzIHByaW9yaXR5IHJhbmdlWzEsIDEwMF1cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmlvcml0eT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5R3JvdXBJZDogSWQgb2YgdGhlIHNlY3VyaXR5IGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RUNTOjpTZWN1cml0eUdyb3VwRWdyZXNzYFxuICovXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlHcm91cEVncmVzcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUNTOjpTZWN1cml0eUdyb3VwRWdyZXNzYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTZWN1cml0eUdyb3VwRWdyZXNzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zU2VjdXJpdHlHcm91cEVncmVzcyA9IG5ldyBSb3NTZWN1cml0eUdyb3VwRWdyZXNzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcG9saWN5OiBwcm9wcy5wb2xpY3ksXG4gICAgICAgICAgICBwb3J0UmFuZ2U6IHByb3BzLnBvcnRSYW5nZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcm9wcy5wcmlvcml0eSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnByaW9yaXR5ID09PSBudWxsID8gMSA6IHByb3BzLnByaW9yaXR5LFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cElkOiBwcm9wcy5zZWN1cml0eUdyb3VwSWQsXG4gICAgICAgICAgICBkZXN0R3JvdXBPd25lcklkOiBwcm9wcy5kZXN0R3JvdXBPd25lcklkLFxuICAgICAgICAgICAgaXBQcm90b2NvbDogcHJvcHMuaXBQcm90b2NvbCxcbiAgICAgICAgICAgIGRlc3RDaWRySXA6IHByb3BzLmRlc3RDaWRySXAsXG4gICAgICAgICAgICBuaWNUeXBlOiBwcm9wcy5uaWNUeXBlLFxuICAgICAgICAgICAgaXB2NkRlc3RDaWRySXA6IHByb3BzLmlwdjZEZXN0Q2lkcklwLFxuICAgICAgICAgICAgZGVzdEdyb3VwSWQ6IHByb3BzLmRlc3RHcm91cElkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1NlY3VyaXR5R3JvdXBFZ3Jlc3M7XG4gICAgfVxufVxuIl19