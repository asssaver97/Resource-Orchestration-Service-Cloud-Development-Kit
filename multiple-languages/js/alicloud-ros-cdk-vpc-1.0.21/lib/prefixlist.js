"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrefixList = exports.PrefixListProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "PrefixListProperty", { enumerable: true, get: function () { return vpc_generated_1.RosPrefixList; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::PrefixList`
 */
class PrefixList extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::PrefixList`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosPrefixList = new vpc_generated_1.RosPrefixList(this, id, {
            maxEntries: props.maxEntries,
            resourceGroupId: props.resourceGroupId,
            prefixListDescription: props.prefixListDescription,
            ipVersion: props.ipVersion,
            prefixListName: props.prefixListName,
            entries: props.entries,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrefixList;
        this.attrCreateTime = rosPrefixList.attrCreateTime;
        this.attrEntries = rosPrefixList.attrEntries;
        this.attrIpVersion = rosPrefixList.attrIpVersion;
        this.attrMaxEntries = rosPrefixList.attrMaxEntries;
        this.attrOwnerId = rosPrefixList.attrOwnerId;
        this.attrPrefixListDescription = rosPrefixList.attrPrefixListDescription;
        this.attrPrefixListId = rosPrefixList.attrPrefixListId;
        this.attrPrefixListName = rosPrefixList.attrPrefixListName;
        this.attrResourceGroupId = rosPrefixList.attrResourceGroupId;
        this.attrShareType = rosPrefixList.attrShareType;
        this.attrTags = rosPrefixList.attrTags;
    }
}
exports.PrefixList = PrefixList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4bGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZWZpeGxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUE4QzVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUE4RHhDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBeUIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ3RILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1lBQ2xELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzdDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxhQUFhLENBQUMseUJBQXlCLENBQUM7UUFDekUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLGtCQUFrQixDQUFDO1FBQzNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxhQUFhLENBQUMsbUJBQW1CLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUE5RkQsZ0NBOEZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUHJlZml4TGlzdCB9IGZyb20gJy4vdnBjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1ByZWZpeExpc3QgYXMgUHJlZml4TGlzdFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OlByZWZpeExpc3RgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJlZml4TGlzdFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVudHJpZXM6IFRoZSBDSURSIGFkZHJlc3MgYmxvY2sgbGlzdCBvZiB0aGUgcHJlZml4IGxpc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW50cmllcz86IEFycmF5PFJvc1ByZWZpeExpc3QuRW50cmllc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlwVmVyc2lvbjogVGhlIElQIHZlcnNpb24gb2YgdGhlIHByZWZpeCBsaXN0LiBWYWx1ZTpcbiAgICAgKiAtICoqSVB2djQqKjpJUHY0IHZlcnNpb24uXG4gICAgICogLSAqKklQdjYqKjpJUHY2LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlwVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1heEVudHJpZXM6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBlbnRyaWVzIGZvciBDSURSIGFkZHJlc3MgYmxvY2tzIGluIHRoZSBwcmVmaXggbGlzdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhFbnRyaWVzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJlZml4TGlzdERlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHByZWZpeCBsaXN0LlxuICAgICAqIEl0IG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlLCBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmVmaXhMaXN0RGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcmVmaXhMaXN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByZWZpeExpc3ROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSBWUEMgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIG9mIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NQcmVmaXhMaXN0LlRhZ3NQcm9wZXJ0eVtdO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OlByZWZpeExpc3RgXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmVmaXhMaXN0IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDcmVhdGVUaW1lOiBUaGUgdGltZSB3aGVuIHRoZSBwcmVmaXggbGlzdCB3YXMgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFbnRyaWVzOiBUaGUgQ0lEUiBhZGRyZXNzIGJsb2NrIGxpc3Qgb2YgdGhlIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRW50cmllczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIElwVmVyc2lvbjogVGhlIElQIHZlcnNpb24gb2YgdGhlIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXBWZXJzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTWF4RW50cmllczogVGhlIG1heGltdW0gbnVtYmVyIG9mIGVudHJpZXMgZm9yIENJRFIgYWRkcmVzcyBibG9ja3MgaW4gdGhlIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWF4RW50cmllczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE93bmVySWQ6IFRoZSBBbGliYWJhIENsb3VkIGFjY291bnQgKHByaW1hcnkgYWNjb3VudCkgdG8gd2hpY2ggdGhlIHByZWZpeCBsaXN0IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPd25lcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJlZml4TGlzdERlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJlZml4TGlzdERlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJlZml4TGlzdElkOiBUaGUgSUQgb2YgdGhlIHF1ZXJ5IFByZWZpeCBMaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJlZml4TGlzdElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJlZml4TGlzdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcmVmaXggbGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByZWZpeExpc3ROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSBWUEMgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNoYXJlVHlwZTogVGhlIHNoYXJlIHR5cGUgb2YgdGhlIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2hhcmVUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVGFnczogVGhlIHRhZ3Mgb2YgUHJlZml4TGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhZ3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpWUEM6OlByZWZpeExpc3RgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFByZWZpeExpc3RQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1ByZWZpeExpc3QgPSBuZXcgUm9zUHJlZml4TGlzdCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIG1heEVudHJpZXM6IHByb3BzLm1heEVudHJpZXMsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHByZWZpeExpc3REZXNjcmlwdGlvbjogcHJvcHMucHJlZml4TGlzdERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaXBWZXJzaW9uOiBwcm9wcy5pcFZlcnNpb24sXG4gICAgICAgICAgICBwcmVmaXhMaXN0TmFtZTogcHJvcHMucHJlZml4TGlzdE5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzOiBwcm9wcy5lbnRyaWVzLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NQcmVmaXhMaXN0O1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gcm9zUHJlZml4TGlzdC5hdHRyQ3JlYXRlVGltZTtcbiAgICAgICAgdGhpcy5hdHRyRW50cmllcyA9IHJvc1ByZWZpeExpc3QuYXR0ckVudHJpZXM7XG4gICAgICAgIHRoaXMuYXR0cklwVmVyc2lvbiA9IHJvc1ByZWZpeExpc3QuYXR0cklwVmVyc2lvbjtcbiAgICAgICAgdGhpcy5hdHRyTWF4RW50cmllcyA9IHJvc1ByZWZpeExpc3QuYXR0ck1heEVudHJpZXM7XG4gICAgICAgIHRoaXMuYXR0ck93bmVySWQgPSByb3NQcmVmaXhMaXN0LmF0dHJPd25lcklkO1xuICAgICAgICB0aGlzLmF0dHJQcmVmaXhMaXN0RGVzY3JpcHRpb24gPSByb3NQcmVmaXhMaXN0LmF0dHJQcmVmaXhMaXN0RGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYXR0clByZWZpeExpc3RJZCA9IHJvc1ByZWZpeExpc3QuYXR0clByZWZpeExpc3RJZDtcbiAgICAgICAgdGhpcy5hdHRyUHJlZml4TGlzdE5hbWUgPSByb3NQcmVmaXhMaXN0LmF0dHJQcmVmaXhMaXN0TmFtZTtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VHcm91cElkID0gcm9zUHJlZml4TGlzdC5hdHRyUmVzb3VyY2VHcm91cElkO1xuICAgICAgICB0aGlzLmF0dHJTaGFyZVR5cGUgPSByb3NQcmVmaXhMaXN0LmF0dHJTaGFyZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0clRhZ3MgPSByb3NQcmVmaXhMaXN0LmF0dHJUYWdzO1xuICAgIH1cbn1cbiJdfQ==