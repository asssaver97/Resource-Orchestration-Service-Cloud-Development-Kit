"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrefixList = exports.PrefixListProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "PrefixListProperty", { enumerable: true, get: function () { return vpc_generated_1.RosPrefixList; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::PrefixList`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrefixList`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
 */
class PrefixList extends ros.Resource {
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
        const rosPrefixList = new vpc_generated_1.RosPrefixList(this, id, {
            prefixListId: props.prefixListId,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4bGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZWZpeGxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFjNUM7Ozs7R0FJRztBQUNILE1BQWEsVUFBVyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBNkR4Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQixFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1NBQ25DLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLHlCQUF5QixHQUFHLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztRQUN6RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7UUFDM0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7Q0FDSjtBQXpGRCxnQ0F5RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NQcmVmaXhMaXN0IH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUHJlZml4TGlzdCBhcyBQcmVmaXhMaXN0UHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBQcmVmaXhMaXN0YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtcHJlZml4bGlzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFByZWZpeExpc3RQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcmVmaXhMaXN0SWQ6IFRoZSBJRCBvZiB0aGUgcXVlcnkgUHJlZml4IExpc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlZml4TGlzdElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpWUEM6OlByZWZpeExpc3RgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zUHJlZml4TGlzdGBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtcHJlZml4bGlzdFxuICovXG5leHBvcnQgY2xhc3MgUHJlZml4TGlzdCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogUHJlZml4TGlzdFByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDcmVhdGVUaW1lOiBUaGUgdGltZSB3aGVuIHRoZSBwcmVmaXggbGlzdCB3YXMgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFbnRyaWVzOiBUaGUgQ0lEUiBhZGRyZXNzIGJsb2NrIGxpc3Qgb2YgdGhlIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRW50cmllczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIElwVmVyc2lvbjogVGhlIElQIHZlcnNpb24gb2YgdGhlIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXBWZXJzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTWF4RW50cmllczogVGhlIG1heGltdW0gbnVtYmVyIG9mIGVudHJpZXMgZm9yIENJRFIgYWRkcmVzcyBibG9ja3MgaW4gdGhlIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWF4RW50cmllczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE93bmVySWQ6IFRoZSBBbGliYWJhIENsb3VkIGFjY291bnQgKHByaW1hcnkgYWNjb3VudCkgdG8gd2hpY2ggdGhlIHByZWZpeCBsaXN0IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPd25lcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJlZml4TGlzdERlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJlZml4TGlzdERlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJlZml4TGlzdElkOiBUaGUgSUQgb2YgdGhlIHF1ZXJ5IFByZWZpeCBMaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJlZml4TGlzdElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJlZml4TGlzdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcmVmaXggbGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByZWZpeExpc3ROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSBWUEMgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNoYXJlVHlwZTogVGhlIHNoYXJlIHR5cGUgb2YgdGhlIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2hhcmVUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVGFnczogVGhlIHRhZ3Mgb2YgUHJlZml4TGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhZ3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBQcmVmaXhMaXN0UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NQcmVmaXhMaXN0ID0gbmV3IFJvc1ByZWZpeExpc3QodGhpcywgaWQsICB7XG4gICAgICAgICAgICBwcmVmaXhMaXN0SWQ6IHByb3BzLnByZWZpeExpc3RJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NQcmVmaXhMaXN0O1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gcm9zUHJlZml4TGlzdC5hdHRyQ3JlYXRlVGltZTtcbiAgICAgICAgdGhpcy5hdHRyRW50cmllcyA9IHJvc1ByZWZpeExpc3QuYXR0ckVudHJpZXM7XG4gICAgICAgIHRoaXMuYXR0cklwVmVyc2lvbiA9IHJvc1ByZWZpeExpc3QuYXR0cklwVmVyc2lvbjtcbiAgICAgICAgdGhpcy5hdHRyTWF4RW50cmllcyA9IHJvc1ByZWZpeExpc3QuYXR0ck1heEVudHJpZXM7XG4gICAgICAgIHRoaXMuYXR0ck93bmVySWQgPSByb3NQcmVmaXhMaXN0LmF0dHJPd25lcklkO1xuICAgICAgICB0aGlzLmF0dHJQcmVmaXhMaXN0RGVzY3JpcHRpb24gPSByb3NQcmVmaXhMaXN0LmF0dHJQcmVmaXhMaXN0RGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYXR0clByZWZpeExpc3RJZCA9IHJvc1ByZWZpeExpc3QuYXR0clByZWZpeExpc3RJZDtcbiAgICAgICAgdGhpcy5hdHRyUHJlZml4TGlzdE5hbWUgPSByb3NQcmVmaXhMaXN0LmF0dHJQcmVmaXhMaXN0TmFtZTtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VHcm91cElkID0gcm9zUHJlZml4TGlzdC5hdHRyUmVzb3VyY2VHcm91cElkO1xuICAgICAgICB0aGlzLmF0dHJTaGFyZVR5cGUgPSByb3NQcmVmaXhMaXN0LmF0dHJTaGFyZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0clRhZ3MgPSByb3NQcmVmaXhMaXN0LmF0dHJUYWdzO1xuICAgIH1cbn1cbiJdfQ==