"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DhcpOptionsSetAttachment = exports.DhcpOptionsSetAttachmentProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "DhcpOptionsSetAttachmentProperty", { enumerable: true, get: function () { return vpc_generated_1.RosDhcpOptionsSetAttachment; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::DhcpOptionsSetAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDhcpOptionsSetAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionssetattachment
 */
class DhcpOptionsSetAttachment extends ros.Resource {
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
        const rosDhcpOptionsSetAttachment = new vpc_generated_1.RosDhcpOptionsSetAttachment(this, id, {
            dhcpOptionsSetId: props.dhcpOptionsSetId,
            vpcId: props.vpcId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDhcpOptionsSetAttachment;
        this.attrDhcpOptionsSetId = rosDhcpOptionsSetAttachment.attrDhcpOptionsSetId;
        this.attrVpcId = rosDhcpOptionsSetAttachment.attrVpcId;
    }
}
exports.DhcpOptionsSetAttachment = DhcpOptionsSetAttachment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGhjcG9wdGlvbnNzZXRhdHRhY2htZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGhjcG9wdGlvbnNzZXRhdHRhY2htZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBOEQ7QUFFdEIsaUhBRi9CLDJDQUEyQixPQUVvQztBQW1CeEU7Ozs7R0FJRztBQUNILE1BQWEsd0JBQXlCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQnREOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9DLEVBQUUsbUNBQTJDLElBQUk7UUFDL0gsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLDJCQUEyQixHQUFHLElBQUksMkNBQTJCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztTQUNyQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUEyQixDQUFDO1FBQzVDLElBQUksQ0FBQyxvQkFBb0IsR0FBRywyQkFBMkIsQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSxJQUFJLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDLFNBQVMsQ0FBQztJQUMzRCxDQUFDO0NBQ0o7QUFwQ0QsNERBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zRGhjcE9wdGlvbnNTZXRBdHRhY2htZW50IH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zRGhjcE9wdGlvbnNTZXRBdHRhY2htZW50IGFzIERoY3BPcHRpb25zU2V0QXR0YWNobWVudFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgRGhjcE9wdGlvbnNTZXRBdHRhY2htZW50YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXZwYy1kaGNwb3B0aW9uc3NldGF0dGFjaG1lbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaGNwT3B0aW9uc1NldElkOiBUaGUgSUQgb2YgdGhlIERIQ1Agb3B0aW9ucyBzZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGhjcE9wdGlvbnNTZXRJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBJRCBvZiB0aGUgVlBDIG5ldHdvcmsgdGhhdCBpcyB0byBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIERIQ1Agb3B0aW9ucyBzZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6VlBDOjpEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnRgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zRGhjcE9wdGlvbnNTZXRBdHRhY2htZW50YGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLWRoY3BvcHRpb25zc2V0YXR0YWNobWVudFxuICovXG5leHBvcnQgY2xhc3MgRGhjcE9wdGlvbnNTZXRBdHRhY2htZW50IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnRQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGhjcE9wdGlvbnNTZXRJZDogVGhlIElEIG9mIHRoZSBESENQIG9wdGlvbnMgc2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGhjcE9wdGlvbnNTZXRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQyBuZXR3b3JrLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0RoY3BPcHRpb25zU2V0QXR0YWNobWVudCA9IG5ldyBSb3NEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnQodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkaGNwT3B0aW9uc1NldElkOiBwcm9wcy5kaGNwT3B0aW9uc1NldElkLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0RoY3BPcHRpb25zU2V0QXR0YWNobWVudDtcbiAgICAgICAgdGhpcy5hdHRyRGhjcE9wdGlvbnNTZXRJZCA9IHJvc0RoY3BPcHRpb25zU2V0QXR0YWNobWVudC5hdHRyRGhjcE9wdGlvbnNTZXRJZDtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSByb3NEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnQuYXR0clZwY0lkO1xuICAgIH1cbn1cbiJdfQ==