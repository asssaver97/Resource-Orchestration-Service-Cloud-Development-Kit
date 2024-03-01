"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BgpGroup = exports.BgpGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "BgpGroupProperty", { enumerable: true, get: function () { return vpc_generated_1.RosBgpGroup; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::BgpGroup`, which is used to create a Border Gateway Protocol (BGP) (Multi-ISP) group for a specified virtual border router (VBR).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBgpGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
 */
class BgpGroup extends ros.Resource {
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
        const rosBgpGroup = new vpc_generated_1.RosBgpGroup(this, id, {
            description: props.description,
            localAsn: props.localAsn,
            authKey: props.authKey,
            routerId: props.routerId,
            peerAsn: props.peerAsn,
            isFakeAsn: props.isFakeAsn,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBgpGroup;
        this.attrBgpGroupId = rosBgpGroup.attrBgpGroupId;
        this.attrName = rosBgpGroup.attrName;
    }
}
exports.BgpGroup = BgpGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmdwZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiZ3Bncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBaUR4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQnRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUF6Q0QsNEJBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQmdwR3JvdXAgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NCZ3BHcm91cCBhcyBCZ3BHcm91cFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQmdwR3JvdXBgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLWJncGdyb3VwXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmdwR3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZWVyQXNuOiBUaGUgQVMgbnVtYmVyIG9mIHRoZSBCR1AgcGVlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZWVyQXNuOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb3V0ZXJJZDogVGhlIElEIG9mIHRoZSBWQlIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dGhLZXk6IFRoZSBhdXRoZW50aWNhdGlvbiBrZXkgb2YgdGhlIEJHUCBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRoS2V5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgQkdQIGdyb3VwLiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAyIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6XFwvXFwvIG9yIGh0dHBzOlxcL1xcLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlzRmFrZUFzbjogQSByb3V0ZXIgdGhhdCBydW5zIEJHUCB0eXBpY2FsbHkgYmVsb25ncyB0byBvbmx5IG9uZSBBUy4gSW4gc29tZSBjYXNlcywgZm9yIGV4YW1wbGUsXG4gICAgICogdGhlIEFTIG5lZWRzIHRvIGJlIG1pZ3JhdGVkIG9yIGlzIG1lcmdlZCB3aXRoIGFub3RoZXIgQVMsIGEgbmV3IEFTIG51bWJlciByZXBsYWNlc1xuICAgICAqIHRoZSBvcmlnaW5hbCBvbmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNGYWtlQXNuPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvY2FsQXNuOiBUaGUgQVMgbnVtYmVyIG9uIHRoZSBBbGliYWJhIENsb3VkIHNpZGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9jYWxBc24/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgQkdQIGdyb3VwLiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW5cbiAgICAgKiBjb250YWluIGRpZ2l0cywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBUaGUgbmFtZSBtdXN0IHN0YXJ0XG4gICAgICogd2l0aCBhIGxldHRlciBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDpcXC9cXC8gb3IgaHR0cHM6XFwvXFwvLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlZQQzo6QmdwR3JvdXBgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIEJvcmRlciBHYXRld2F5IFByb3RvY29sIChCR1ApIChNdWx0aS1JU1ApIGdyb3VwIGZvciBhIHNwZWNpZmllZCB2aXJ0dWFsIGJvcmRlciByb3V0ZXIgKFZCUikuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NCZ3BHcm91cGBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXZwYy1iZ3Bncm91cFxuICovXG5leHBvcnQgY2xhc3MgQmdwR3JvdXAgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEJncEdyb3VwUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEJncEdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgQkdQIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmdwR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBCR1AgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQmdwR3JvdXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0JncEdyb3VwID0gbmV3IFJvc0JncEdyb3VwKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbG9jYWxBc246IHByb3BzLmxvY2FsQXNuLFxuICAgICAgICAgICAgYXV0aEtleTogcHJvcHMuYXV0aEtleSxcbiAgICAgICAgICAgIHJvdXRlcklkOiBwcm9wcy5yb3V0ZXJJZCxcbiAgICAgICAgICAgIHBlZXJBc246IHByb3BzLnBlZXJBc24sXG4gICAgICAgICAgICBpc0Zha2VBc246IHByb3BzLmlzRmFrZUFzbixcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQmdwR3JvdXA7XG4gICAgICAgIHRoaXMuYXR0ckJncEdyb3VwSWQgPSByb3NCZ3BHcm91cC5hdHRyQmdwR3JvdXBJZDtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IHJvc0JncEdyb3VwLmF0dHJOYW1lO1xuICAgIH1cbn1cbiJdfQ==