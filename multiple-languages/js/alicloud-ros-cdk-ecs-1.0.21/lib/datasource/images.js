"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Images = exports.ImagesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "ImagesProperty", { enumerable: true, get: function () { return ecs_generated_1.RosImages; } });
/**
 * A ROS resource type:  `DATASOURCE::ECS::Images`
 */
class Images extends ros.Resource {
    /**
     * Create a new `DATASOURCE::ECS::Images`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBNEM7QUFFdEIsK0ZBRmIseUJBQVMsT0FFa0I7QUFtSHBDOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQnBDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBcUIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxTQUFTLEdBQUcsSUFBSSx5QkFBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUFqREQsd0JBaURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW1hZ2VzIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW1hZ2VzIGFzIEltYWdlc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6RUNTOjpJbWFnZXNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWN0aW9uVHlwZTogVGhlIHNjZW5hcmlvIGluIHdoaWNoIHRoZSBpbWFnZSBpcyB1c2VkLiBEZWZhdWx0IHZhbHVlOiBDcmVhdGVFY3MuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDcmVhdGVFY3M6IGluc3RhbmNlIGNyZWF0aW9uXG4gICAgICogQ2hhbmdlT1M6IHJlcGxhY2VtZW50IG9mIHRoZSBzeXN0ZW0gZGlzayBvciBvcGVyYXRpbmcgc3lzdGVtXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWN0aW9uVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFyY2hpdGVjdHVyZTogVGhlIGltYWdlIGFyY2hpdGVjdHVyZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGkzOFxuICAgICAqIHg4Nl82NFxuICAgICAqIGFybTY0XG4gICAgICovXG4gICAgcmVhZG9ubHkgYXJjaGl0ZWN0dXJlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW1hZ2VGYW1pbHk6IFRoZSBuYW1lIG9mIHRoZSBpbWFnZSBmYW1pbHkuIFlvdSBjYW4gc2V0IHRoaXMgcGFyYW1ldGVyIHRvIHF1ZXJ5IGltYWdlcyBvZiB0aGUgc3BlY2lmaWVkIGltYWdlIGZhbWlseS5cbiAgICAgKiBUaGlzIHBhcmFtZXRlciBpcyBlbXB0eSBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGltYWdlRmFtaWx5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW1hZ2VJZDogVGhlIElEIG9mIHRoZSBpbWFnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW1hZ2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW1hZ2UuIFN1cHBvcnQgZm9yIGZ1enp5IHF1ZXJpZXMgdXNpbmcgKi5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbWFnZU93bmVyQWxpYXM6IFRoZSBzb3VyY2Ugb2YgdGhlIGltYWdlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogc3lzdGVtOiBwdWJsaWMgaW1hZ2VzIHByb3ZpZGVkIGJ5IEFsaWJhYmEgQ2xvdWQuXG4gICAgICogc2VsZjogeW91ciBjdXN0b20gaW1hZ2VzLlxuICAgICAqIG90aGVyczogc2hhcmVkIGltYWdlcyBmcm9tIG90aGVyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudHMsIG9yIGNvbW11bml0eSBpbWFnZXMgcHVibGlzaGVkIGJ5IG90aGVyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudHMuIFRha2Ugbm90ZSBvZiB0aGUgZm9sbG93aW5nIGl0ZW1zOlxuICAgICAqIC0gVG8gcXVlcnkgY29tbXVuaXR5IGltYWdlcywgeW91IG11c3Qgc2V0IElzUHVibGljIHRvIHRydWUuXG4gICAgICogVG8gcXVlcnkgc2hhcmVkIGltYWdlcywgeW91IG11c3Qgc2V0IElzUHVibGljIHRvIGZhbHNlIG9yIGxlYXZlIHRoZSBJc1B1YmxpYyBwYXJhbWV0ZXIgZW1wdHkuXG4gICAgICogbWFya2V0cGxhY2U6IEFsaWJhYmEgQ2xvdWQgTWFya2V0cGxhY2UgaW1hZ2VzLiBJZiBBbGliYWJhIENsb3VkIE1hcmtldHBsYWNlIGltYWdlcyBhcmUgcmV0dXJuZWQgaW4gdGhlIHJlc3BvbnNlLCB5b3UgY2FuIHVzZSB0aGUgaW1hZ2VzIHdpdGhvdXQgc3Vic2NyaXB0aW9uLiBZb3UgbXVzdCBwYXkgYXR0ZW50aW9uIHRvIHRoZSBiaWxsaW5nIGRldGFpbHMgb2YgQWxpYmFiYSBDbG91ZCBNYXJrZXRwbGFjZSBpbWFnZXMuXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgaXMgZW1wdHkgYnkgZGVmYXVsdCwgd2hpY2ggaW5kaWNhdGVzIHRoYXQgdGhlIHJlc3VsdHMgdGhhdCBtYXRjaCBzeXN0ZW0sIHNlbGYsIGFuZCBvdGhlcnMgYXJlIHJldHVybmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGltYWdlT3duZXJBbGlhcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlVHlwZTogVGhlIGluc3RhbmNlIHR5cGUgZm9yIHdoaWNoIHRoZSBpbWFnZSBjYW4gYmUgdXNlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpc1B1YmxpYzogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcXVlcnkgcHVibGlzaGVkIGNvbW11bml0eSBpbWFnZXMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBxdWVyaWVzIHB1Ymxpc2hlZCBjb21tdW5pdHkgaW1hZ2VzLiBXaGVuIHlvdSBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gdHJ1ZSwgeW91IG11c3Qgc2V0IEltYWdlT3duZXJBbGlhcyB0byBvdGhlcnMuXG4gICAgICogZmFsc2U6IHF1ZXJpZXMgb3RoZXIgaW1hZ2UgdHlwZXMgdGhhbiBjb21tdW5pdHkgaW1hZ2VzLiBUaGUgc3BlY2lmaWMgaW1hZ2UgdHlwZXMgdG8gYmUgcXVlcmllZCBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgSW1hZ2VPd25lckFsaWFzIHZhbHVlLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzUHVibGljPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlzU3VwcG9ydENsb3VkaW5pdDogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGltYWdlIHN1cHBvcnRzIGNsb3VkLWluaXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNTdXBwb3J0Q2xvdWRpbml0PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlzU3VwcG9ydElvT3B0aW1pemVkOiBTcGVjaWZpZXMgd2hldGhlciB0aGUgaW1hZ2UgY2FuIGJlIHVzZWQgb24gSS9PIG9wdGltaXplZCBpbnN0YW5jZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNTdXBwb3J0SW9PcHRpbWl6ZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3NUeXBlOiBUaGUgb3BlcmF0aW5nIHN5c3RlbSB0eXBlIG9mIHRoZSBpbWFnZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHdpbmRvd3NcbiAgICAgKiBsaW51eFxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9zVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgY3VzdG9tIGltYWdlIGJlbG9uZ3MuIElmIHRoaXMgcGFyYW1ldGVyIGlzIHNwZWNpZmllZCB0byBxdWVyeSByZXNvdXJjZXMsIHVwIHRvIDEsMDAwIHJlc291cmNlcyB0aGF0IGJlbG9uZyB0byB0aGUgc3BlY2lmaWVkIHJlc291cmNlIGdyb3VwIGNhbiBiZSBkaXNwbGF5ZWQgaW4gdGhlIHJlc3BvbnNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNuYXBzaG90SWQ6IFRoZSBJRCBvZiB0aGUgc25hcHNob3QgdXNlZCB0byBjcmVhdGUgdGhlIGN1c3RvbSBpbWFnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzbmFwc2hvdElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3RhdHVzOiBUaGUgc3RhdGUgb2YgdGhlIGltYWdlLiBEZWZhdWx0IHZhbHVlOiBBdmFpbGFibGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBDcmVhdGluZzogVGhlIGltYWdlIGlzIGJlaW5nIGNyZWF0ZWQuXG4gICAgICogV2FpdGluZzogVGhlIGltYWdlIGlzIHdhaXRpbmcgdG8gYmUgcHJvY2Vzc2VkLlxuICAgICAqIEF2YWlsYWJsZTogVGhlIGltYWdlIGlzIGF2YWlsYWJsZS5cbiAgICAgKiBVbkF2YWlsYWJsZTogVGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlLlxuICAgICAqIENyZWF0ZUZhaWxlZDogVGhlIGltYWdlIGZhaWxlZCB0byBiZSBjcmVhdGVkLlxuICAgICAqIERlcHJlY2F0ZWQ6IFRoZSBpbWFnZSBpcyBkaXNjb250aW51ZWQuXG4gICAgICogWW91IGNhbiBzcGVjaWZ5IG11bHRpcGxlIHZhbHVlcy4gU2VwYXJhdGUgbXVsdGlwbGUgdmFsdWVzIHdpdGggY29tbWFzICgsKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIG9mIGltYWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NJbWFnZXMuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1c2FnZTogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGltYWdlIGlzIHJ1bm5pbmcgb24gYW4gRWxhc3RpYyBDb21wdXRlIFNlcnZpY2UgKEVDUykgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBpbnN0YW5jZTogVGhlIGltYWdlIGlzIGFscmVhZHkgaW4gdXNlIGFuZCBydW5uaW5nIG9uIGFuIEVDUyBpbnN0YW5jZS5cbiAgICAgKiBub25lOiBUaGUgaW1hZ2UgaXMgbm90IGluIHVzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2FnZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYERBVEFTT1VSQ0U6OkVDUzo6SW1hZ2VzYFxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbWFnZUlkczogVGhlIGxpc3Qgb2YgaW1hZ2UgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW1hZ2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbWFnZXM6IFRoZSBsaXN0IG9mIGltYWdlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckltYWdlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpFQ1M6OkltYWdlc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW1hZ2VzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NJbWFnZXMgPSBuZXcgUm9zSW1hZ2VzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgc3RhdHVzOiBwcm9wcy5zdGF0dXMsXG4gICAgICAgICAgICBpbWFnZU93bmVyQWxpYXM6IHByb3BzLmltYWdlT3duZXJBbGlhcyxcbiAgICAgICAgICAgIHVzYWdlOiBwcm9wcy51c2FnZSxcbiAgICAgICAgICAgIGFjdGlvblR5cGU6IHByb3BzLmFjdGlvblR5cGUsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGFyY2hpdGVjdHVyZTogcHJvcHMuYXJjaGl0ZWN0dXJlLFxuICAgICAgICAgICAgaW1hZ2VGYW1pbHk6IHByb3BzLmltYWdlRmFtaWx5LFxuICAgICAgICAgICAgaXNTdXBwb3J0SW9PcHRpbWl6ZWQ6IHByb3BzLmlzU3VwcG9ydElvT3B0aW1pemVkLFxuICAgICAgICAgICAgaXNTdXBwb3J0Q2xvdWRpbml0OiBwcm9wcy5pc1N1cHBvcnRDbG91ZGluaXQsXG4gICAgICAgICAgICBpbWFnZU5hbWU6IHByb3BzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIHNuYXBzaG90SWQ6IHByb3BzLnNuYXBzaG90SWQsXG4gICAgICAgICAgICBpc1B1YmxpYzogcHJvcHMuaXNQdWJsaWMsXG4gICAgICAgICAgICBvc1R5cGU6IHByb3BzLm9zVHlwZSxcbiAgICAgICAgICAgIGltYWdlSWQ6IHByb3BzLmltYWdlSWQsXG4gICAgICAgICAgICBpbnN0YW5jZVR5cGU6IHByb3BzLmluc3RhbmNlVHlwZSxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSW1hZ2VzO1xuICAgICAgICB0aGlzLmF0dHJJbWFnZUlkcyA9IHJvc0ltYWdlcy5hdHRySW1hZ2VJZHM7XG4gICAgICAgIHRoaXMuYXR0ckltYWdlcyA9IHJvc0ltYWdlcy5hdHRySW1hZ2VzO1xuICAgIH1cbn1cbiJdfQ==