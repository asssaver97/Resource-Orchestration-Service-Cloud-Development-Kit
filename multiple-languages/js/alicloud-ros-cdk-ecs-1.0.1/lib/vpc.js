"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vpc = exports.VPCProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "VPCProperty", { enumerable: true, get: function () { return ecs_generated_1.RosVPC; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::VPC`
 */
class Vpc extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::VPC`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosVPC = new ecs_generated_1.RosVPC(this, id, {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            cidrBlock: props.cidrBlock,
            vpcName: props.vpcName,
            ipv6CidrBlock: props.ipv6CidrBlock,
            tags: props.tags,
            enableIpv6: props.enableIpv6 ? props.enableIpv6 : false,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVPC;
        this.attrRouteTableId = rosVPC.attrRouteTableId;
        this.attrVRouterId = rosVPC.attrVRouterId;
        this.attrVpcId = rosVPC.attrVpcId;
    }
}
exports.Vpc = Vpc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBeUM7QUFFdEIsNEZBRlYsc0JBQU0sT0FFZTtBQThDOUI7O0dBRUc7QUFDSCxNQUFhLEdBQUksU0FBUSxHQUFHLENBQUMsUUFBUTtJQXNCakM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUFrQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLE1BQU0sR0FBRyxJQUFJLHNCQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUMxRCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztDQUNKO0FBOUNELGtCQThDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1ZQQyB9IGZyb20gJy4vZWNzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1ZQQyBhcyBWUENQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RUNTOjpWUENgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVlBDUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2lkckJsb2NrOiBUaGUgSVAgYWRkcmVzcyByYW5nZSBvZiB0aGUgVlBDIGluIHRoZSBDSURSIGJsb2NrIGZvcm0uIFlvdSBjYW4gdXNlIHRoZSBmb2xsb3dpbmcgSVAgYWRkcmVzcyByYW5nZXMgYW5kIHRoZWlyIHN1Ym5ldHM6XG4gICAgICogMTAuMC4wLjAvOFxuICAgICAqIDE3Mi4xNi4wLjAvMTIgKERlZmF1bHQpXG4gICAgICogMTkyLjE2OC4wLjAvMTZcbiAgICAgKi9cbiAgICByZWFkb25seSBjaWRyQmxvY2s/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIHZwYywgWzIsIDI1Nl0gY2hhcmFjdGVycy4gRG8gbm90IGZpbGwgb3IgZW1wdHksIHRoZSBkZWZhdWx0IGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5hYmxlSXB2NjogV2hldGhlciB0byBlbmFibGUgYW4gSVB2NiBuZXR3b3JrIGNpZHIsIHRoZSB2YWx1ZSBpczpGYWxzZSAoZGVmYXVsdCk6IG5vdCB0dXJuZWQgb24uVHJ1ZTogT24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlSXB2Nj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpcHY2Q2lkckJsb2NrOiBJUHY2IG5ldHdvcmsgY2lkciBvZiB0aGUgVlBDLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlwdjZDaWRyQmxvY2s/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIHZwYy4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSB2cGMuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zVlBDLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjTmFtZTogRGlzcGxheSBuYW1lIG9mIHRoZSB2cGMgaW5zdGFuY2UsIFsyLCAxMjhdIEVuZ2xpc2ggb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBpbiBzaXplLCBjYW4gY29udGFpbiBudW1iZXJzLCAnXycgb3IgJy4nLCAnLSdcbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpFQ1M6OlZQQ2BcbiAqL1xuZXhwb3J0IGNsYXNzIFZwYyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUm91dGVUYWJsZUlkOiBUaGUgcm91dGVyIHRhYmxlIGlkIG9mIGNyZWF0ZWQgVlBDLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVUYWJsZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVlJvdXRlcklkOiBSb3V0ZXIgaWQgb2YgY3JlYXRlZCBWUEMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWUm91dGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcGNJZDogSWQgb2YgY3JlYXRlZCBWUEMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcGNJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVDUzo6VlBDYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBWUENQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1ZQQyA9IG5ldyBSb3NWUEModGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGNpZHJCbG9jazogcHJvcHMuY2lkckJsb2NrLFxuICAgICAgICAgICAgdnBjTmFtZTogcHJvcHMudnBjTmFtZSxcbiAgICAgICAgICAgIGlwdjZDaWRyQmxvY2s6IHByb3BzLmlwdjZDaWRyQmxvY2ssXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgZW5hYmxlSXB2NjogcHJvcHMuZW5hYmxlSXB2NiA/IHByb3BzLmVuYWJsZUlwdjYgOiBmYWxzZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NWUEM7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlVGFibGVJZCA9IHJvc1ZQQy5hdHRyUm91dGVUYWJsZUlkO1xuICAgICAgICB0aGlzLmF0dHJWUm91dGVySWQgPSByb3NWUEMuYXR0clZSb3V0ZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSByb3NWUEMuYXR0clZwY0lkO1xuICAgIH1cbn1cbiJdfQ==