"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Images = exports.ImagesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "ImagesProperty", { enumerable: true, get: function () { return ecs_generated_1.RosImages; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Images`, which is used to query available images.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImages`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-images
 */
class Images extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosImages = new ecs_generated_1.RosImages(this, id, {
            status: props.status,
            imageOwnerAlias: props.imageOwnerAlias,
            usage: props.usage,
            actionType: props.actionType,
            resourceGroupId: props.resourceGroupId,
            architecture: props.architecture,
            imageFamily: props.imageFamily,
            isSupportIoOptimized: props.isSupportIoOptimized,
            isSupportCloudinit: props.isSupportCloudinit,
            imageName: props.imageName,
            snapshotId: props.snapshotId,
            isPublic: props.isPublic,
            osType: props.osType,
            imageId: props.imageId,
            instanceType: props.instanceType,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImages;
        this.attrImageIds = rosImages.attrImageIds;
        this.attrImages = rosImages.attrImages;
    }
}
exports.Images = Images;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBNEM7QUFFdEIsK0ZBRmIseUJBQVMsT0FFa0I7QUFvSHBDOzs7O0dBSUc7QUFDSCxNQUFhLE1BQU8sU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCcEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBcUIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxTQUFTLEdBQUcsSUFBSSx5QkFBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUFsREQsd0JBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW1hZ2VzIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW1hZ2VzIGFzIEltYWdlc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgSW1hZ2VzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1lY3MtaW1hZ2VzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWN0aW9uVHlwZTogVGhlIHNjZW5hcmlvIGluIHdoaWNoIHRoZSBpbWFnZSBpcyB1c2VkLiBEZWZhdWx0IHZhbHVlOiBDcmVhdGVFY3MuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDcmVhdGVFY3M6IGluc3RhbmNlIGNyZWF0aW9uXG4gICAgICogQ2hhbmdlT1M6IHJlcGxhY2VtZW50IG9mIHRoZSBzeXN0ZW0gZGlzayBvciBvcGVyYXRpbmcgc3lzdGVtXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWN0aW9uVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFyY2hpdGVjdHVyZTogVGhlIGltYWdlIGFyY2hpdGVjdHVyZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGkzOFxuICAgICAqIHg4Nl82NFxuICAgICAqIGFybTY0XG4gICAgICovXG4gICAgcmVhZG9ubHkgYXJjaGl0ZWN0dXJlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW1hZ2VGYW1pbHk6IFRoZSBuYW1lIG9mIHRoZSBpbWFnZSBmYW1pbHkuIFlvdSBjYW4gc2V0IHRoaXMgcGFyYW1ldGVyIHRvIHF1ZXJ5IGltYWdlcyBvZiB0aGUgc3BlY2lmaWVkIGltYWdlIGZhbWlseS5cbiAgICAgKiBUaGlzIHBhcmFtZXRlciBpcyBlbXB0eSBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGltYWdlRmFtaWx5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW1hZ2VJZDogVGhlIElEIG9mIHRoZSBpbWFnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW1hZ2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW1hZ2UuIFN1cHBvcnQgZm9yIGZ1enp5IHF1ZXJpZXMgdXNpbmcgKi5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbWFnZU93bmVyQWxpYXM6IFRoZSBzb3VyY2Ugb2YgdGhlIGltYWdlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogc3lzdGVtOiBwdWJsaWMgaW1hZ2VzIHByb3ZpZGVkIGJ5IEFsaWJhYmEgQ2xvdWQuXG4gICAgICogc2VsZjogeW91ciBjdXN0b20gaW1hZ2VzLlxuICAgICAqIG90aGVyczogc2hhcmVkIGltYWdlcyBmcm9tIG90aGVyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudHMsIG9yIGNvbW11bml0eSBpbWFnZXMgcHVibGlzaGVkIGJ5IG90aGVyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudHMuIFRha2Ugbm90ZSBvZiB0aGUgZm9sbG93aW5nIGl0ZW1zOlxuICAgICAqIC0gVG8gcXVlcnkgY29tbXVuaXR5IGltYWdlcywgeW91IG11c3Qgc2V0IElzUHVibGljIHRvIHRydWUuXG4gICAgICogVG8gcXVlcnkgc2hhcmVkIGltYWdlcywgeW91IG11c3Qgc2V0IElzUHVibGljIHRvIGZhbHNlIG9yIGxlYXZlIHRoZSBJc1B1YmxpYyBwYXJhbWV0ZXIgZW1wdHkuXG4gICAgICogbWFya2V0cGxhY2U6IEFsaWJhYmEgQ2xvdWQgTWFya2V0cGxhY2UgaW1hZ2VzLiBJZiBBbGliYWJhIENsb3VkIE1hcmtldHBsYWNlIGltYWdlcyBhcmUgcmV0dXJuZWQgaW4gdGhlIHJlc3BvbnNlLCB5b3UgY2FuIHVzZSB0aGUgaW1hZ2VzIHdpdGhvdXQgc3Vic2NyaXB0aW9uLiBZb3UgbXVzdCBwYXkgYXR0ZW50aW9uIHRvIHRoZSBiaWxsaW5nIGRldGFpbHMgb2YgQWxpYmFiYSBDbG91ZCBNYXJrZXRwbGFjZSBpbWFnZXMuXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgaXMgZW1wdHkgYnkgZGVmYXVsdCwgd2hpY2ggaW5kaWNhdGVzIHRoYXQgdGhlIHJlc3VsdHMgdGhhdCBtYXRjaCBzeXN0ZW0sIHNlbGYsIGFuZCBvdGhlcnMgYXJlIHJldHVybmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGltYWdlT3duZXJBbGlhcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlVHlwZTogVGhlIGluc3RhbmNlIHR5cGUgZm9yIHdoaWNoIHRoZSBpbWFnZSBjYW4gYmUgdXNlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpc1B1YmxpYzogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcXVlcnkgcHVibGlzaGVkIGNvbW11bml0eSBpbWFnZXMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBxdWVyaWVzIHB1Ymxpc2hlZCBjb21tdW5pdHkgaW1hZ2VzLiBXaGVuIHlvdSBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gdHJ1ZSwgeW91IG11c3Qgc2V0IEltYWdlT3duZXJBbGlhcyB0byBvdGhlcnMuXG4gICAgICogZmFsc2U6IHF1ZXJpZXMgb3RoZXIgaW1hZ2UgdHlwZXMgdGhhbiBjb21tdW5pdHkgaW1hZ2VzLiBUaGUgc3BlY2lmaWMgaW1hZ2UgdHlwZXMgdG8gYmUgcXVlcmllZCBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgSW1hZ2VPd25lckFsaWFzIHZhbHVlLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzUHVibGljPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlzU3VwcG9ydENsb3VkaW5pdDogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGltYWdlIHN1cHBvcnRzIGNsb3VkLWluaXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNTdXBwb3J0Q2xvdWRpbml0PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlzU3VwcG9ydElvT3B0aW1pemVkOiBTcGVjaWZpZXMgd2hldGhlciB0aGUgaW1hZ2UgY2FuIGJlIHVzZWQgb24gSVxcL08gb3B0aW1pemVkIGluc3RhbmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc1N1cHBvcnRJb09wdGltaXplZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBvc1R5cGU6IFRoZSBvcGVyYXRpbmcgc3lzdGVtIHR5cGUgb2YgdGhlIGltYWdlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogd2luZG93c1xuICAgICAqIGxpbnV4XG4gICAgICovXG4gICAgcmVhZG9ubHkgb3NUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSBjdXN0b20gaW1hZ2UgYmVsb25ncy4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkIHRvIHF1ZXJ5IHJlc291cmNlcywgdXAgdG8gMSwwMDAgcmVzb3VyY2VzIHRoYXQgYmVsb25nIHRvIHRoZSBzcGVjaWZpZWQgcmVzb3VyY2UgZ3JvdXAgY2FuIGJlIGRpc3BsYXllZCBpbiB0aGUgcmVzcG9uc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc25hcHNob3RJZDogVGhlIElEIG9mIHRoZSBzbmFwc2hvdCB1c2VkIHRvIGNyZWF0ZSB0aGUgY3VzdG9tIGltYWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNuYXBzaG90SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzdGF0dXM6IFRoZSBzdGF0ZSBvZiB0aGUgaW1hZ2UuIERlZmF1bHQgdmFsdWU6IEF2YWlsYWJsZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIENyZWF0aW5nOiBUaGUgaW1hZ2UgaXMgYmVpbmcgY3JlYXRlZC5cbiAgICAgKiBXYWl0aW5nOiBUaGUgaW1hZ2UgaXMgd2FpdGluZyB0byBiZSBwcm9jZXNzZWQuXG4gICAgICogQXZhaWxhYmxlOiBUaGUgaW1hZ2UgaXMgYXZhaWxhYmxlLlxuICAgICAqIFVuQXZhaWxhYmxlOiBUaGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUuXG4gICAgICogQ3JlYXRlRmFpbGVkOiBUaGUgaW1hZ2UgZmFpbGVkIHRvIGJlIGNyZWF0ZWQuXG4gICAgICogRGVwcmVjYXRlZDogVGhlIGltYWdlIGlzIGRpc2NvbnRpbnVlZC5cbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgbXVsdGlwbGUgdmFsdWVzLiBTZXBhcmF0ZSBtdWx0aXBsZSB2YWx1ZXMgd2l0aCBjb21tYXMgKCwpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0YXR1cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3Mgb2YgaW1hZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0ltYWdlcy5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzYWdlOiBTcGVjaWZpZXMgd2hldGhlciB0aGUgaW1hZ2UgaXMgcnVubmluZyBvbiBhbiBFbGFzdGljIENvbXB1dGUgU2VydmljZSAoRUNTKSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGluc3RhbmNlOiBUaGUgaW1hZ2UgaXMgYWxyZWFkeSBpbiB1c2UgYW5kIHJ1bm5pbmcgb24gYW4gRUNTIGluc3RhbmNlLlxuICAgICAqIG5vbmU6IFRoZSBpbWFnZSBpcyBub3QgaW4gdXNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzYWdlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6RUNTOjpJbWFnZXNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IGF2YWlsYWJsZSBpbWFnZXMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NJbWFnZXNgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtZWNzLWltYWdlc1xuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBJbWFnZXNQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW1hZ2VJZHM6IFRoZSBsaXN0IG9mIGltYWdlIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckltYWdlSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW1hZ2VzOiBUaGUgbGlzdCBvZiBpbWFnZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbWFnZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJbWFnZXNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zSW1hZ2VzID0gbmV3IFJvc0ltYWdlcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHN0YXR1czogcHJvcHMuc3RhdHVzLFxuICAgICAgICAgICAgaW1hZ2VPd25lckFsaWFzOiBwcm9wcy5pbWFnZU93bmVyQWxpYXMsXG4gICAgICAgICAgICB1c2FnZTogcHJvcHMudXNhZ2UsXG4gICAgICAgICAgICBhY3Rpb25UeXBlOiBwcm9wcy5hY3Rpb25UeXBlLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBhcmNoaXRlY3R1cmU6IHByb3BzLmFyY2hpdGVjdHVyZSxcbiAgICAgICAgICAgIGltYWdlRmFtaWx5OiBwcm9wcy5pbWFnZUZhbWlseSxcbiAgICAgICAgICAgIGlzU3VwcG9ydElvT3B0aW1pemVkOiBwcm9wcy5pc1N1cHBvcnRJb09wdGltaXplZCxcbiAgICAgICAgICAgIGlzU3VwcG9ydENsb3VkaW5pdDogcHJvcHMuaXNTdXBwb3J0Q2xvdWRpbml0LFxuICAgICAgICAgICAgaW1hZ2VOYW1lOiBwcm9wcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICBzbmFwc2hvdElkOiBwcm9wcy5zbmFwc2hvdElkLFxuICAgICAgICAgICAgaXNQdWJsaWM6IHByb3BzLmlzUHVibGljLFxuICAgICAgICAgICAgb3NUeXBlOiBwcm9wcy5vc1R5cGUsXG4gICAgICAgICAgICBpbWFnZUlkOiBwcm9wcy5pbWFnZUlkLFxuICAgICAgICAgICAgaW5zdGFuY2VUeXBlOiBwcm9wcy5pbnN0YW5jZVR5cGUsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0ltYWdlcztcbiAgICAgICAgdGhpcy5hdHRySW1hZ2VJZHMgPSByb3NJbWFnZXMuYXR0ckltYWdlSWRzO1xuICAgICAgICB0aGlzLmF0dHJJbWFnZXMgPSByb3NJbWFnZXMuYXR0ckltYWdlcztcbiAgICB9XG59XG4iXX0=