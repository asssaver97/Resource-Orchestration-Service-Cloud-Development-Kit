"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitRouterPeerAttachment = exports.TransitRouterPeerAttachmentProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cen_generated_1 = require("./cen.generated");
Object.defineProperty(exports, "TransitRouterPeerAttachmentProperty", { enumerable: true, get: function () { return cen_generated_1.RosTransitRouterPeerAttachment; } });
/**
 * A ROS resource type:  `ALIYUN::CEN::TransitRouterPeerAttachment`
 */
class TransitRouterPeerAttachment extends ros.Resource {
    /**
     * Create a new `ALIYUN::CEN::TransitRouterPeerAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosTransitRouterPeerAttachment = new cen_generated_1.RosTransitRouterPeerAttachment(this, id, {
            autoPublishRouteEnabled: props.autoPublishRouteEnabled,
            routeTableAssociationEnabled: props.routeTableAssociationEnabled,
            routeTablePropagationEnabled: props.routeTablePropagationEnabled,
            bandwidth: props.bandwidth,
            cenId: props.cenId,
            transitRouterAttachmentName: props.transitRouterAttachmentName,
            resourceType: props.resourceType,
            peerTransitRouterId: props.peerTransitRouterId,
            cenBandwidthPackageId: props.cenBandwidthPackageId,
            transitRouterAttachmentDescription: props.transitRouterAttachmentDescription,
            transitRouterId: props.transitRouterId,
            peerTransitRouterRegionId: props.peerTransitRouterRegionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterPeerAttachment;
        this.attrAutoPublishRouteEnabled = rosTransitRouterPeerAttachment.attrAutoPublishRouteEnabled;
        this.attrBandwidth = rosTransitRouterPeerAttachment.attrBandwidth;
        this.attrCenBandwidthPackageId = rosTransitRouterPeerAttachment.attrCenBandwidthPackageId;
        this.attrCenId = rosTransitRouterPeerAttachment.attrCenId;
        this.attrClientToken = rosTransitRouterPeerAttachment.attrClientToken;
        this.attrGeographicSpanId = rosTransitRouterPeerAttachment.attrGeographicSpanId;
        this.attrPeerTransitRouterId = rosTransitRouterPeerAttachment.attrPeerTransitRouterId;
        this.attrPeerTransitRouterOwnerId = rosTransitRouterPeerAttachment.attrPeerTransitRouterOwnerId;
        this.attrPeerTransitRouterRegionId = rosTransitRouterPeerAttachment.attrPeerTransitRouterRegionId;
        this.attrResourceType = rosTransitRouterPeerAttachment.attrResourceType;
        this.attrTransitRouterAttachmentDescription = rosTransitRouterPeerAttachment.attrTransitRouterAttachmentDescription;
        this.attrTransitRouterAttachmentId = rosTransitRouterPeerAttachment.attrTransitRouterAttachmentId;
        this.attrTransitRouterAttachmentName = rosTransitRouterPeerAttachment.attrTransitRouterAttachmentName;
        this.attrTransitRouterId = rosTransitRouterPeerAttachment.attrTransitRouterId;
    }
}
exports.TransitRouterPeerAttachment = TransitRouterPeerAttachment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdHJvdXRlcnBlZXJhdHRhY2htZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhbnNpdHJvdXRlcnBlZXJhdHRhY2htZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBaUU7QUFFdEIsb0hBRmxDLDhDQUE4QixPQUV1QztBQW9FOUU7O0dBRUc7QUFDSCxNQUFhLDJCQUE0QixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBNkV6RDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVDLEVBQUUsbUNBQTJDLElBQUk7UUFDbEksS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLDhCQUE4QixHQUFHLElBQUksOENBQThCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRix1QkFBdUIsRUFBRSxLQUFLLENBQUMsdUJBQXVCO1lBQ3RELDRCQUE0QixFQUFFLEtBQUssQ0FBQyw0QkFBNEI7WUFDaEUsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLDRCQUE0QjtZQUNoRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLDJCQUEyQixFQUFFLEtBQUssQ0FBQywyQkFBMkI7WUFDOUQsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxrQ0FBa0MsRUFBRSxLQUFLLENBQUMsa0NBQWtDO1lBQzVFLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0Qyx5QkFBeUIsRUFBRSxLQUFLLENBQUMseUJBQXlCO1NBQzdELEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsOEJBQThCLENBQUM7UUFDL0MsSUFBSSxDQUFDLDJCQUEyQixHQUFHLDhCQUE4QixDQUFDLDJCQUEyQixDQUFDO1FBQzlGLElBQUksQ0FBQyxhQUFhLEdBQUcsOEJBQThCLENBQUMsYUFBYSxDQUFDO1FBQ2xFLElBQUksQ0FBQyx5QkFBeUIsR0FBRyw4QkFBOEIsQ0FBQyx5QkFBeUIsQ0FBQztRQUMxRixJQUFJLENBQUMsU0FBUyxHQUFHLDhCQUE4QixDQUFDLFNBQVMsQ0FBQztRQUMxRCxJQUFJLENBQUMsZUFBZSxHQUFHLDhCQUE4QixDQUFDLGVBQWUsQ0FBQztRQUN0RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsOEJBQThCLENBQUMsb0JBQW9CLENBQUM7UUFDaEYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLDhCQUE4QixDQUFDLHVCQUF1QixDQUFDO1FBQ3RGLElBQUksQ0FBQyw0QkFBNEIsR0FBRyw4QkFBOEIsQ0FBQyw0QkFBNEIsQ0FBQztRQUNoRyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsOEJBQThCLENBQUMsNkJBQTZCLENBQUM7UUFDbEcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLDhCQUE4QixDQUFDLGdCQUFnQixDQUFDO1FBQ3hFLElBQUksQ0FBQyxzQ0FBc0MsR0FBRyw4QkFBOEIsQ0FBQyxzQ0FBc0MsQ0FBQztRQUNwSCxJQUFJLENBQUMsNkJBQTZCLEdBQUcsOEJBQThCLENBQUMsNkJBQTZCLENBQUM7UUFDbEcsSUFBSSxDQUFDLCtCQUErQixHQUFHLDhCQUE4QixDQUFDLCtCQUErQixDQUFDO1FBQ3RHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyw4QkFBOEIsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRixDQUFDO0NBQ0o7QUFySEQsa0VBcUhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zVHJhbnNpdFJvdXRlclBlZXJBdHRhY2htZW50IH0gZnJvbSAnLi9jZW4uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zVHJhbnNpdFJvdXRlclBlZXJBdHRhY2htZW50IGFzIFRyYW5zaXRSb3V0ZXJQZWVyQXR0YWNobWVudFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDRU46OlRyYW5zaXRSb3V0ZXJQZWVyQXR0YWNobWVudGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmFuc2l0Um91dGVyUGVlckF0dGFjaG1lbnRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZWVyVHJhbnNpdFJvdXRlcklkOiBQZWVyVHJhbnNpdFJvdXRlcklkXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVlclRyYW5zaXRSb3V0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1B1Ymxpc2hSb3V0ZUVuYWJsZWQ6IEF1dG9QdWJsaXNoUm91dGVFbmFibGVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1B1Ymxpc2hSb3V0ZUVuYWJsZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFuZHdpZHRoOiBCYW5kd2lkdGhcbiAgICAgKi9cbiAgICByZWFkb25seSBiYW5kd2lkdGg/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjZW5CYW5kd2lkdGhQYWNrYWdlSWQ6IEJhbmR3aWR0aFBhY2thZ2VJZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlbkJhbmR3aWR0aFBhY2thZ2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNlbklkOiBDZW5JZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVlclRyYW5zaXRSb3V0ZXJSZWdpb25JZDogUGVlclRyYW5zaXRSb3V0ZXJSZWdpb25JZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlZXJUcmFuc2l0Um91dGVyUmVnaW9uSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJvdXRlVGFibGVBc3NvY2lhdGlvbkVuYWJsZWQ6XG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVUYWJsZUFzc29jaWF0aW9uRW5hYmxlZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJvdXRlVGFibGVQcm9wYWdhdGlvbkVuYWJsZWQ6XG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVUYWJsZVByb3BhZ2F0aW9uRW5hYmxlZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJBdHRhY2htZW50RGVzY3JpcHRpb246IFRyYW5zaXRSb3V0ZXJBdHRhY2htZW50RGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc2l0Um91dGVyQXR0YWNobWVudERlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHJhbnNpdFJvdXRlckF0dGFjaG1lbnROYW1lOiBUcmFuc2l0Um91dGVyQXR0YWNobWVudE5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc2l0Um91dGVyQXR0YWNobWVudE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0cmFuc2l0Um91dGVySWQ6IFRyYW5zaXRSb3V0ZXJJZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYW5zaXRSb3V0ZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q0VOOjpUcmFuc2l0Um91dGVyUGVlckF0dGFjaG1lbnRgXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2l0Um91dGVyUGVlckF0dGFjaG1lbnQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEF1dG9QdWJsaXNoUm91dGVFbmFibGVkOiBBdXRvUHVibGlzaFJvdXRlRW5hYmxlZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXV0b1B1Ymxpc2hSb3V0ZUVuYWJsZWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBCYW5kd2lkdGg6IEJhbmR3aWR0aFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmFuZHdpZHRoOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2VuQmFuZHdpZHRoUGFja2FnZUlkOiBCYW5kd2lkdGhQYWNrYWdlSWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNlbkJhbmR3aWR0aFBhY2thZ2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENlbklkOiBDZW5JZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2VuSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbGllbnRUb2tlbjogQ2xpZW50VG9rZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsaWVudFRva2VuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgR2VvZ3JhcGhpY1NwYW5JZDogR2VvZ3JhcGhpY1NwYW5JZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR2VvZ3JhcGhpY1NwYW5JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBlZXJUcmFuc2l0Um91dGVySWQ6IFBlZXJUcmFuc2l0Um91dGVySWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBlZXJUcmFuc2l0Um91dGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQZWVyVHJhbnNpdFJvdXRlck93bmVySWQ6IFBlZXJUcmFuc2l0Um91dGVyT3duZXJJZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGVlclRyYW5zaXRSb3V0ZXJPd25lcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUGVlclRyYW5zaXRSb3V0ZXJSZWdpb25JZDogUGVlclRyYW5zaXRSb3V0ZXJSZWdpb25JZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGVlclRyYW5zaXRSb3V0ZXJSZWdpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc291cmNlVHlwZTogUmVzb3VyY2VUeXBlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUcmFuc2l0Um91dGVyQXR0YWNobWVudERlc2NyaXB0aW9uOiBUcmFuc2l0Um91dGVyQXR0YWNobWVudERlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmFuc2l0Um91dGVyQXR0YWNobWVudERlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVHJhbnNpdFJvdXRlckF0dGFjaG1lbnRJZDogVGhlIGZpcnN0IElEIG9mIHRoZSByZXNvdXJjZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhbnNpdFJvdXRlckF0dGFjaG1lbnRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRyYW5zaXRSb3V0ZXJBdHRhY2htZW50TmFtZTogVHJhbnNpdFJvdXRlckF0dGFjaG1lbnROYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmFuc2l0Um91dGVyQXR0YWNobWVudE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUcmFuc2l0Um91dGVySWQ6IFRyYW5zaXRSb3V0ZXJJZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhbnNpdFJvdXRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q0VOOjpUcmFuc2l0Um91dGVyUGVlckF0dGFjaG1lbnRgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFRyYW5zaXRSb3V0ZXJQZWVyQXR0YWNobWVudFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1RyYW5zaXRSb3V0ZXJQZWVyQXR0YWNobWVudCA9IG5ldyBSb3NUcmFuc2l0Um91dGVyUGVlckF0dGFjaG1lbnQodGhpcywgaWQsICB7XG4gICAgICAgICAgICBhdXRvUHVibGlzaFJvdXRlRW5hYmxlZDogcHJvcHMuYXV0b1B1Ymxpc2hSb3V0ZUVuYWJsZWQsXG4gICAgICAgICAgICByb3V0ZVRhYmxlQXNzb2NpYXRpb25FbmFibGVkOiBwcm9wcy5yb3V0ZVRhYmxlQXNzb2NpYXRpb25FbmFibGVkLFxuICAgICAgICAgICAgcm91dGVUYWJsZVByb3BhZ2F0aW9uRW5hYmxlZDogcHJvcHMucm91dGVUYWJsZVByb3BhZ2F0aW9uRW5hYmxlZCxcbiAgICAgICAgICAgIGJhbmR3aWR0aDogcHJvcHMuYmFuZHdpZHRoLFxuICAgICAgICAgICAgY2VuSWQ6IHByb3BzLmNlbklkLFxuICAgICAgICAgICAgdHJhbnNpdFJvdXRlckF0dGFjaG1lbnROYW1lOiBwcm9wcy50cmFuc2l0Um91dGVyQXR0YWNobWVudE5hbWUsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHByb3BzLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIHBlZXJUcmFuc2l0Um91dGVySWQ6IHByb3BzLnBlZXJUcmFuc2l0Um91dGVySWQsXG4gICAgICAgICAgICBjZW5CYW5kd2lkdGhQYWNrYWdlSWQ6IHByb3BzLmNlbkJhbmR3aWR0aFBhY2thZ2VJZCxcbiAgICAgICAgICAgIHRyYW5zaXRSb3V0ZXJBdHRhY2htZW50RGVzY3JpcHRpb246IHByb3BzLnRyYW5zaXRSb3V0ZXJBdHRhY2htZW50RGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0cmFuc2l0Um91dGVySWQ6IHByb3BzLnRyYW5zaXRSb3V0ZXJJZCxcbiAgICAgICAgICAgIHBlZXJUcmFuc2l0Um91dGVyUmVnaW9uSWQ6IHByb3BzLnBlZXJUcmFuc2l0Um91dGVyUmVnaW9uSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVHJhbnNpdFJvdXRlclBlZXJBdHRhY2htZW50O1xuICAgICAgICB0aGlzLmF0dHJBdXRvUHVibGlzaFJvdXRlRW5hYmxlZCA9IHJvc1RyYW5zaXRSb3V0ZXJQZWVyQXR0YWNobWVudC5hdHRyQXV0b1B1Ymxpc2hSb3V0ZUVuYWJsZWQ7XG4gICAgICAgIHRoaXMuYXR0ckJhbmR3aWR0aCA9IHJvc1RyYW5zaXRSb3V0ZXJQZWVyQXR0YWNobWVudC5hdHRyQmFuZHdpZHRoO1xuICAgICAgICB0aGlzLmF0dHJDZW5CYW5kd2lkdGhQYWNrYWdlSWQgPSByb3NUcmFuc2l0Um91dGVyUGVlckF0dGFjaG1lbnQuYXR0ckNlbkJhbmR3aWR0aFBhY2thZ2VJZDtcbiAgICAgICAgdGhpcy5hdHRyQ2VuSWQgPSByb3NUcmFuc2l0Um91dGVyUGVlckF0dGFjaG1lbnQuYXR0ckNlbklkO1xuICAgICAgICB0aGlzLmF0dHJDbGllbnRUb2tlbiA9IHJvc1RyYW5zaXRSb3V0ZXJQZWVyQXR0YWNobWVudC5hdHRyQ2xpZW50VG9rZW47XG4gICAgICAgIHRoaXMuYXR0ckdlb2dyYXBoaWNTcGFuSWQgPSByb3NUcmFuc2l0Um91dGVyUGVlckF0dGFjaG1lbnQuYXR0ckdlb2dyYXBoaWNTcGFuSWQ7XG4gICAgICAgIHRoaXMuYXR0clBlZXJUcmFuc2l0Um91dGVySWQgPSByb3NUcmFuc2l0Um91dGVyUGVlckF0dGFjaG1lbnQuYXR0clBlZXJUcmFuc2l0Um91dGVySWQ7XG4gICAgICAgIHRoaXMuYXR0clBlZXJUcmFuc2l0Um91dGVyT3duZXJJZCA9IHJvc1RyYW5zaXRSb3V0ZXJQZWVyQXR0YWNobWVudC5hdHRyUGVlclRyYW5zaXRSb3V0ZXJPd25lcklkO1xuICAgICAgICB0aGlzLmF0dHJQZWVyVHJhbnNpdFJvdXRlclJlZ2lvbklkID0gcm9zVHJhbnNpdFJvdXRlclBlZXJBdHRhY2htZW50LmF0dHJQZWVyVHJhbnNpdFJvdXRlclJlZ2lvbklkO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZVR5cGUgPSByb3NUcmFuc2l0Um91dGVyUGVlckF0dGFjaG1lbnQuYXR0clJlc291cmNlVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyVHJhbnNpdFJvdXRlckF0dGFjaG1lbnREZXNjcmlwdGlvbiA9IHJvc1RyYW5zaXRSb3V0ZXJQZWVyQXR0YWNobWVudC5hdHRyVHJhbnNpdFJvdXRlckF0dGFjaG1lbnREZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyVHJhbnNpdFJvdXRlckF0dGFjaG1lbnRJZCA9IHJvc1RyYW5zaXRSb3V0ZXJQZWVyQXR0YWNobWVudC5hdHRyVHJhbnNpdFJvdXRlckF0dGFjaG1lbnRJZDtcbiAgICAgICAgdGhpcy5hdHRyVHJhbnNpdFJvdXRlckF0dGFjaG1lbnROYW1lID0gcm9zVHJhbnNpdFJvdXRlclBlZXJBdHRhY2htZW50LmF0dHJUcmFuc2l0Um91dGVyQXR0YWNobWVudE5hbWU7XG4gICAgICAgIHRoaXMuYXR0clRyYW5zaXRSb3V0ZXJJZCA9IHJvc1RyYW5zaXRSb3V0ZXJQZWVyQXR0YWNobWVudC5hdHRyVHJhbnNpdFJvdXRlcklkO1xuICAgIH1cbn1cbiJdfQ==