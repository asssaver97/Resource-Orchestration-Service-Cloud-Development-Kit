"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpnPbrRouteEntry = exports.VpnPbrRouteEntryProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "VpnPbrRouteEntryProperty", { enumerable: true, get: function () { return vpc_generated_1.RosVpnPbrRouteEntry; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VpnPbrRouteEntry`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpnPbrRouteEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnpbrrouteentry
 */
class VpnPbrRouteEntry extends ros.Resource {
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
        const rosVpnPbrRouteEntry = new vpc_generated_1.RosVpnPbrRouteEntry(this, id, {
            description: props.description,
            routeDest: props.routeDest,
            overlayMode: props.overlayMode,
            vpnGatewayId: props.vpnGatewayId,
            nextHop: props.nextHop,
            routeSource: props.routeSource,
            publishVpc: props.publishVpc,
            weight: props.weight,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpnPbrRouteEntry;
        this.attrNextHop = rosVpnPbrRouteEntry.attrNextHop;
        this.attrRouteDest = rosVpnPbrRouteEntry.attrRouteDest;
        this.attrRouteSource = rosVpnPbrRouteEntry.attrRouteSource;
        this.attrVpnGatewayId = rosVpnPbrRouteEntry.attrVpnGatewayId;
    }
}
exports.VpnPbrRouteEntry = VpnPbrRouteEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBucGJycm91dGVlbnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZwbnBicnJvdXRlZW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFzRDtBQUV0Qix5R0FGdkIsbUNBQW1CLE9BRTRCO0FBbUR4RDs7OztHQUlHO0FBQ0gsTUFBYSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQTBCOUM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBNEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN2SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxtQ0FBbUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDdkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDLFdBQVcsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztRQUMzRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUM7SUFDakUsQ0FBQztDQUNKO0FBdERELDRDQXNEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1ZwblBiclJvdXRlRW50cnkgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NWcG5QYnJSb3V0ZUVudHJ5IGFzIFZwblBiclJvdXRlRW50cnlQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFZwblBiclJvdXRlRW50cnlgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLXZwbnBicnJvdXRlZW50cnlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWcG5QYnJSb3V0ZUVudHJ5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmV4dEhvcDogVGhlIG5leHQgaG9wIG9mIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSBlbnRyeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBuZXh0SG9wOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwdWJsaXNoVnBjOiBJbmRpY2F0ZXMgd2hldGhlciB0byBwdWJsaXNoIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSB0byB0aGUgVlBDLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZTogUHVibGlzaCB0aGUgZGVzdGluYXRpb24gcm91dGUgdG8gdGhlIFZQQy5cbiAgICAgKiBmYWxzZTogRG8gbm90IHB1Ymxpc2ggdGhlIGRlc3RpbmF0aW9uIHJvdXRlIHRvIHRoZSBWUEMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHVibGlzaFZwYzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJvdXRlRGVzdDogVGhlIGRlc3RpbmF0aW9uIENJRFIgYmxvY2sgb2YgdGhlIGRlc3RpbmF0aW9uIHJvdXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlRGVzdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcm91dGVTb3VyY2U6IFRoZSBzb3VyY2UgQ0lEUiBibG9jayBvZiB0aGUgcG9saWN5LWJhc2VkIHJvdXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlU291cmNlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cG5HYXRld2F5SWQ6IFRoZSBJRCBvZiB0aGUgVlBOIEdhdGV3YXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBuR2F0ZXdheUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3ZWlnaHQ6IFRoZSB3ZWlnaHQgb2YgdGhlIGRlc3RpbmF0aW9uIHJvdXRlLiBWYWxpZCB2YWx1ZXM6IDB8MTAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdlaWdodDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgVlBOIGRlc3RpbmF0aW9uIHJvdXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3ZlcmxheU1vZGU6IFRoZSBvdmVybGF5IG1vZGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3ZlcmxheU1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlZQQzo6VnBuUGJyUm91dGVFbnRyeWAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NWcG5QYnJSb3V0ZUVudHJ5YGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLXZwbnBicnJvdXRlZW50cnlcbiAqL1xuZXhwb3J0IGNsYXNzIFZwblBiclJvdXRlRW50cnkgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFZwblBiclJvdXRlRW50cnlQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTmV4dEhvcDogVGhlIG5leHQgaG9wIG9mIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSBlbnRyeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5leHRIb3A6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSb3V0ZURlc3Q6IFRoZSBkZXN0aW5hdGlvbiBDSURSIGJsb2NrIG9mIHRoZSBkZXN0aW5hdGlvbiByb3V0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlRGVzdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJvdXRlU291cmNlOiBUaGUgZGVzdGluYXRpb24gQ0lEUiBibG9jayBvZiB0aGUgcG9saWN5LWJhc2VkIHJvdXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVTb3VyY2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcG5HYXRld2F5SWQ6IFRoZSBJRCBvZiB0aGUgVlBOIEdhdGV3YXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcG5HYXRld2F5SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBWcG5QYnJSb3V0ZUVudHJ5UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NWcG5QYnJSb3V0ZUVudHJ5ID0gbmV3IFJvc1ZwblBiclJvdXRlRW50cnkodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByb3V0ZURlc3Q6IHByb3BzLnJvdXRlRGVzdCxcbiAgICAgICAgICAgIG92ZXJsYXlNb2RlOiBwcm9wcy5vdmVybGF5TW9kZSxcbiAgICAgICAgICAgIHZwbkdhdGV3YXlJZDogcHJvcHMudnBuR2F0ZXdheUlkLFxuICAgICAgICAgICAgbmV4dEhvcDogcHJvcHMubmV4dEhvcCxcbiAgICAgICAgICAgIHJvdXRlU291cmNlOiBwcm9wcy5yb3V0ZVNvdXJjZSxcbiAgICAgICAgICAgIHB1Ymxpc2hWcGM6IHByb3BzLnB1Ymxpc2hWcGMsXG4gICAgICAgICAgICB3ZWlnaHQ6IHByb3BzLndlaWdodCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NWcG5QYnJSb3V0ZUVudHJ5O1xuICAgICAgICB0aGlzLmF0dHJOZXh0SG9wID0gcm9zVnBuUGJyUm91dGVFbnRyeS5hdHRyTmV4dEhvcDtcbiAgICAgICAgdGhpcy5hdHRyUm91dGVEZXN0ID0gcm9zVnBuUGJyUm91dGVFbnRyeS5hdHRyUm91dGVEZXN0O1xuICAgICAgICB0aGlzLmF0dHJSb3V0ZVNvdXJjZSA9IHJvc1ZwblBiclJvdXRlRW50cnkuYXR0clJvdXRlU291cmNlO1xuICAgICAgICB0aGlzLmF0dHJWcG5HYXRld2F5SWQgPSByb3NWcG5QYnJSb3V0ZUVudHJ5LmF0dHJWcG5HYXRld2F5SWQ7XG4gICAgfVxufVxuIl19