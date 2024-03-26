"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.ImageProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cloudphone_generated_1 = require("./cloudphone.generated");
Object.defineProperty(exports, "ImageProperty", { enumerable: true, get: function () { return cloudphone_generated_1.RosImage; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudPhone::Image`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
 */
class Image extends ros.Resource {
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
        const rosImage = new cloudphone_generated_1.RosImage(this, id, {
            imageName: props.imageName,
            description: props.description,
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImage;
        this.attrCreateTime = rosImage.attrCreateTime;
        this.attrDescription = rosImage.attrDescription;
        this.attrImageCategory = rosImage.attrImageCategory;
        this.attrImageId = rosImage.attrImageId;
        this.attrImageName = rosImage.attrImageName;
        this.attrIsSelfShared = rosImage.attrIsSelfShared;
        this.attrOsName = rosImage.attrOsName;
        this.attrOsNameEn = rosImage.attrOsNameEn;
        this.attrOsType = rosImage.attrOsType;
        this.attrPlatform = rosImage.attrPlatform;
        this.attrProgress = rosImage.attrProgress;
        this.attrUsage = rosImage.attrUsage;
    }
}
exports.Image = Image;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaUVBQWtEO0FBRTdCLDhGQUZaLCtCQUFRLE9BRWlCO0FBd0JsQzs7OztHQUlHO0FBQ0gsTUFBYSxLQUFNLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFrRW5DOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWlCLEVBQUUsbUNBQTJDLElBQUk7UUFDNUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFFBQVEsR0FBRyxJQUFJLCtCQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUMvQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ3hDLENBQUM7Q0FDSjtBQWpHRCxzQkFpR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NJbWFnZSB9IGZyb20gJy4vY2xvdWRwaG9uZS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NJbWFnZSBhcyBJbWFnZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgSW1hZ2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRwaG9uZS1pbWFnZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBtb2JpbGUgcGhvbmUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBpbWFnZSBkZXNjcmlwdGlvbi4gVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6XFwvXFwvIG9yIGh0dHBzOlxcL1xcLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGltYWdlTmFtZTogVGhlIGltYWdlIG5hbWUuIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgY29sb25zICg6KSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDpcXC9cXC8gb3IgaHR0cHM6XFwvXFwvLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGltYWdlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q2xvdWRQaG9uZTo6SW1hZ2VgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zSW1hZ2VgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHBob25lLWltYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbWFnZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogSW1hZ2VQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ3JlYXRlVGltZTogVGhlIHRpbWUgd2hlbiB0aGUgaW1hZ2Ugd2FzIGNyZWF0ZWQuIFRoZSB0aW1lIGZvbGxvd3MgdGhlIElTTyA4NjAxIHN0YW5kYXJkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERlc2NyaXB0aW9uOiBUaGUgaW1hZ2UgZGVzY3JpcHRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEltYWdlQ2F0ZWdvcnk6IFRoZSBpbWFnZSB0eXBlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW1hZ2VDYXRlZ29yeTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEltYWdlSWQ6IFRoZSBpbWFnZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckltYWdlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbWFnZU5hbWU6IFRoZSBpbWFnZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW1hZ2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSXNTZWxmU2hhcmVkOiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaW1hZ2UgaXMgc2hhcmVkIHdpdGggb3RoZXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklzU2VsZlNoYXJlZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE9zTmFtZTogVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgT1MgaW4gQ2hpbmVzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9zTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE9zTmFtZUVuOiBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSBPUyBpbiBFbmdsaXNoLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT3NOYW1lRW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBPc1R5cGU6IFRoZSBpbWFnZSBPUy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9zVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBsYXRmb3JtOiBUaGUgT1MgZGlzdHJpYnV0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGxhdGZvcm06IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQcm9ncmVzczogVGhlIHByb2dyZXNzIG9mIGltYWdlIGNyZWF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJvZ3Jlc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBVc2FnZTogV2hldGhlciB0aGUgaW1hZ2UgaXMgYWxyZWFkeSBydW5uaW5nIGluIHRoZSBjbG91ZCBwaG9uZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVzYWdlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW1hZ2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0ltYWdlID0gbmV3IFJvc0ltYWdlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiBwcm9wcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiBwcm9wcy5pbnN0YW5jZUlkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0ltYWdlO1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gcm9zSW1hZ2UuYXR0ckNyZWF0ZVRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckRlc2NyaXB0aW9uID0gcm9zSW1hZ2UuYXR0ckRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmF0dHJJbWFnZUNhdGVnb3J5ID0gcm9zSW1hZ2UuYXR0ckltYWdlQ2F0ZWdvcnk7XG4gICAgICAgIHRoaXMuYXR0ckltYWdlSWQgPSByb3NJbWFnZS5hdHRySW1hZ2VJZDtcbiAgICAgICAgdGhpcy5hdHRySW1hZ2VOYW1lID0gcm9zSW1hZ2UuYXR0ckltYWdlTmFtZTtcbiAgICAgICAgdGhpcy5hdHRySXNTZWxmU2hhcmVkID0gcm9zSW1hZ2UuYXR0cklzU2VsZlNoYXJlZDtcbiAgICAgICAgdGhpcy5hdHRyT3NOYW1lID0gcm9zSW1hZ2UuYXR0ck9zTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyT3NOYW1lRW4gPSByb3NJbWFnZS5hdHRyT3NOYW1lRW47XG4gICAgICAgIHRoaXMuYXR0ck9zVHlwZSA9IHJvc0ltYWdlLmF0dHJPc1R5cGU7XG4gICAgICAgIHRoaXMuYXR0clBsYXRmb3JtID0gcm9zSW1hZ2UuYXR0clBsYXRmb3JtO1xuICAgICAgICB0aGlzLmF0dHJQcm9ncmVzcyA9IHJvc0ltYWdlLmF0dHJQcm9ncmVzcztcbiAgICAgICAgdGhpcy5hdHRyVXNhZ2UgPSByb3NJbWFnZS5hdHRyVXNhZ2U7XG4gICAgfVxufVxuIl19