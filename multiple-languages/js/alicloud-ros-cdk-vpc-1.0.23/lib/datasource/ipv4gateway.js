"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ipv4Gateway = exports.Ipv4GatewayProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "Ipv4GatewayProperty", { enumerable: true, get: function () { return vpc_generated_1.RosIpv4Gateway; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::Ipv4Gateway`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpv4Gateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
 */
class Ipv4Gateway extends ros.Resource {
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
        const rosIpv4Gateway = new vpc_generated_1.RosIpv4Gateway(this, id, {
            ipv4GatewayId: props.ipv4GatewayId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpv4Gateway;
        this.attrCreateTime = rosIpv4Gateway.attrCreateTime;
        this.attrEnabled = rosIpv4Gateway.attrEnabled;
        this.attrIpv4GatewayDescription = rosIpv4Gateway.attrIpv4GatewayDescription;
        this.attrIpv4GatewayId = rosIpv4Gateway.attrIpv4GatewayId;
        this.attrIpv4GatewayName = rosIpv4Gateway.attrIpv4GatewayName;
        this.attrIpv4GatewayRouteTableId = rosIpv4Gateway.attrIpv4GatewayRouteTableId;
        this.attrVpcId = rosIpv4Gateway.attrVpcId;
    }
}
exports.Ipv4Gateway = Ipv4Gateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXB2NGdhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpcHY0Z2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQWM5Qzs7OztHQUlHO0FBQ0gsTUFBYSxXQUFZLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUF5Q3pDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7U0FDckMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsY0FBYyxDQUFDLDBCQUEwQixDQUFDO1FBQzVFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7UUFDMUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztRQUM5RCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsY0FBYyxDQUFDLDJCQUEyQixDQUFDO1FBQzlFLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0NBQ0o7QUFqRUQsa0NBaUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSXB2NEdhdGV3YXkgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NJcHY0R2F0ZXdheSBhcyBJcHY0R2F0ZXdheVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgSXB2NEdhdGV3YXlgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1pcHY0Z2F0ZXdheVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElwdjRHYXRld2F5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaXB2NEdhdGV3YXlJZDogVGhlIHJlc291cmNlIGF0dHJpYnV0ZSBmaWVsZCB0aGF0IHJlcHJlc2VudHMgdGhlIHJlc291cmNlIGxldmVsIDEgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXB2NEdhdGV3YXlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6VlBDOjpJcHY0R2F0ZXdheWAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NJcHY0R2F0ZXdheWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtaXB2NGdhdGV3YXlcbiAqL1xuZXhwb3J0IGNsYXNzIElwdjRHYXRld2F5IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBJcHY0R2F0ZXdheVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDcmVhdGVUaW1lOiBUaGUgY3JlYXRpb24gdGltZSBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRW5hYmxlZDogRW5hYmxlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuYWJsZWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJcHY0R2F0ZXdheURlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklwdjRHYXRld2F5RGVzY3JpcHRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJcHY0R2F0ZXdheUlkOiBUaGUgcmVzb3VyY2UgYXR0cmlidXRlIGZpZWxkIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVzb3VyY2UgbGV2ZWwgMSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklwdjRHYXRld2F5SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJcHY0R2F0ZXdheU5hbWU6IFJlc291cmNlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJcHY0R2F0ZXdheU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJcHY0R2F0ZXdheVJvdXRlVGFibGVJZDogSUQgb2YgdGhlIHJvdXRlIHRhYmxlIGFzc29jaWF0ZWQgd2l0aCBJUHY0IEdhdGV3YXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJcHY0R2F0ZXdheVJvdXRlVGFibGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQyBhc3NvY2lhdGVkIHdpdGggdGhlIElQdjQgR2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSXB2NEdhdGV3YXlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0lwdjRHYXRld2F5ID0gbmV3IFJvc0lwdjRHYXRld2F5KHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaXB2NEdhdGV3YXlJZDogcHJvcHMuaXB2NEdhdGV3YXlJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJcHY0R2F0ZXdheTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHJvc0lwdjRHYXRld2F5LmF0dHJDcmVhdGVUaW1lO1xuICAgICAgICB0aGlzLmF0dHJFbmFibGVkID0gcm9zSXB2NEdhdGV3YXkuYXR0ckVuYWJsZWQ7XG4gICAgICAgIHRoaXMuYXR0cklwdjRHYXRld2F5RGVzY3JpcHRpb24gPSByb3NJcHY0R2F0ZXdheS5hdHRySXB2NEdhdGV3YXlEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5hdHRySXB2NEdhdGV3YXlJZCA9IHJvc0lwdjRHYXRld2F5LmF0dHJJcHY0R2F0ZXdheUlkO1xuICAgICAgICB0aGlzLmF0dHJJcHY0R2F0ZXdheU5hbWUgPSByb3NJcHY0R2F0ZXdheS5hdHRySXB2NEdhdGV3YXlOYW1lO1xuICAgICAgICB0aGlzLmF0dHJJcHY0R2F0ZXdheVJvdXRlVGFibGVJZCA9IHJvc0lwdjRHYXRld2F5LmF0dHJJcHY0R2F0ZXdheVJvdXRlVGFibGVJZDtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSByb3NJcHY0R2F0ZXdheS5hdHRyVnBjSWQ7XG4gICAgfVxufVxuIl19