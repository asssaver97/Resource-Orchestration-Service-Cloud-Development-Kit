"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ipv6Gateway = exports.Ipv6GatewayProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "Ipv6GatewayProperty", { enumerable: true, get: function () { return vpc_generated_1.RosIpv6Gateway; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::Ipv6Gateway`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpv6Gateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6gateway
 */
class Ipv6Gateway extends ros.Resource {
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
        const rosIpv6Gateway = new vpc_generated_1.RosIpv6Gateway(this, id, {
            description: props.description,
            vpcId: props.vpcId,
            spec: props.spec,
            tags: props.tags,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpv6Gateway;
        this.attrIpv6GatewayId = rosIpv6Gateway.attrIpv6GatewayId;
    }
}
exports.Ipv6Gateway = Ipv6Gateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXB2NmdhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpcHY2Z2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQXdDOUM7Ozs7R0FJRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBV3pDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7SUFDOUQsQ0FBQztDQUNKO0FBakNELGtDQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0lwdjZHYXRld2F5IH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSXB2NkdhdGV3YXkgYXMgSXB2NkdhdGV3YXlQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYElwdjZHYXRld2F5YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXZwYy1pcHY2Z2F0ZXdheVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElwdjZHYXRld2F5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRvIG9wZW4gVlBDIElEIElQdjYgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIElQdjYgZ2F0ZXdheS5cbiAgICAgKiBMZW5ndGggb2YgMiB0byAyNTYgY2hhcmFjdGVycywgbXVzdCBiZWdpbiB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UsIG1heSBjb250YWluIG51bWJlcnMsIG51bWJlcnMsIHVuZGVyc2NvcmUgKF8pIGFuZCBkb3QgZGFzaCAoLSksIGJ1dCBub3QgYXQgdGhlIGh0dHAgKC4pOiBcXC9cXC8gb3IgaHR0cHM6IFxcL1xcLyBhdCB0aGUgYmVnaW5uaW5nIC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWU6IE5hbWUgb2YgdGhlIElQdjYgZ2F0ZXdheS5cbiAgICAgKiBMZW5ndGggb2YgMiB0byAxMjggY2hhcmFjdGVycywgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSwgY2FuIGNvbnRhaW4gbnVtYmVycywgZG90LCB1bmRlcnNjb3JlIChfKSBhbmQgZGFzaCAoLSksIGJ1dCBub3QgYXQgaHR0cCAoLik6IFxcL1xcLyBvciB3aXRoIGh0dHBzOiBcXC9cXC8gLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzcGVjOiBTcGVjaWZpY2F0aW9ucyBJUHY2IGdhdGV3YXksIHRoZSB2YWx1ZTpcbiAgICAgKiBTbWFsbCAoZGVmYXVsdCk6IEZyZWUuXG4gICAgICogTWVkaXVtOiBFbnRlcnByaXNlIEVkaXRpb24uXG4gICAgICogTGFyZ2U6IEVudGVycHJpc2UgRW5oYW5jZWQgRWRpdGlvbi5cbiAgICAgKiBEaWZmZXJlbnQgc3BlY2lmaWNhdGlvbnMgb2YgdGhlIElQdjYgZm9yd2FyZGluZyBjYXBhYmlsaXR5IG9mIHRoZSBnYXRld2F5IGlzIGRpZmZlcmVudC4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBJUHY2IGdhdGV3YXkgc3BlY2lmaWNhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcGVjPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zSXB2NkdhdGV3YXkuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlZQQzo6SXB2NkdhdGV3YXlgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zSXB2NkdhdGV3YXlgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi12cGMtaXB2NmdhdGV3YXlcbiAqL1xuZXhwb3J0IGNsYXNzIElwdjZHYXRld2F5IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBJcHY2R2F0ZXdheVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJcHY2R2F0ZXdheUlkOiBJRCBJUHY2IGdhdGV3YXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJcHY2R2F0ZXdheUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSXB2NkdhdGV3YXlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0lwdjZHYXRld2F5ID0gbmV3IFJvc0lwdjZHYXRld2F5KHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgc3BlYzogcHJvcHMuc3BlYyxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0lwdjZHYXRld2F5O1xuICAgICAgICB0aGlzLmF0dHJJcHY2R2F0ZXdheUlkID0gcm9zSXB2NkdhdGV3YXkuYXR0cklwdjZHYXRld2F5SWQ7XG4gICAgfVxufVxuIl19