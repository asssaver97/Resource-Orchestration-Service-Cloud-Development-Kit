"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceCleaner = exports.ResourceCleanerProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ros_generated_1 = require("./ros.generated");
Object.defineProperty(exports, "ResourceCleanerProperty", { enumerable: true, get: function () { return ros_generated_1.RosResourceCleaner; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::ResourceCleaner`, which is used to create a resource cleaner.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceCleaner`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-resourcecleaner
 */
class ResourceCleaner extends ros.Resource {
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
        const rosResourceCleaner = new ros_generated_1.RosResourceCleaner(this, id, {
            failureOption: props.failureOption === undefined || props.failureOption === null ? 'Normal' : props.failureOption,
            resourceFilters: props.resourceFilters,
            action: props.action,
            cleanUpAlgorithm: props.cleanUpAlgorithm === undefined || props.cleanUpAlgorithm === null ? 'ResourceDependency' : props.cleanUpAlgorithm,
            mode: props.mode === undefined || props.mode === null ? 'Loose' : props.mode,
            cleanUpRetryCount: props.cleanUpRetryCount === undefined || props.cleanUpRetryCount === null ? 1 : props.cleanUpRetryCount,
            resourceTypeOrder: props.resourceTypeOrder,
            resources: props.resources,
            cleanUpTimeout: props.cleanUpTimeout === undefined || props.cleanUpTimeout === null ? 3600 : props.cleanUpTimeout,
            disabledSideEffects: props.disabledSideEffects,
            excludedResources: props.excludedResources,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceCleaner;
        this.attrCleanResult = rosResourceCleaner.attrCleanResult;
        this.attrNoCleanupResourceDetails = rosResourceCleaner.attrNoCleanupResourceDetails;
        this.attrNoCleanupResourcePartialDetails = rosResourceCleaner.attrNoCleanupResourcePartialDetails;
        this.attrResourceDetails = rosResourceCleaner.attrResourceDetails;
        this.attrResourcePartialDetails = rosResourceCleaner.attrResourcePartialDetails;
        this.attrResourceSummary = rosResourceCleaner.attrResourceSummary;
        this.attrScanErrors = rosResourceCleaner.attrScanErrors;
    }
}
exports.ResourceCleaner = ResourceCleaner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VjbGVhbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzb3VyY2VjbGVhbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQTZGdEQ7Ozs7R0FJRztBQUNILE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWtHN0M7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMkIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN0SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxrQ0FBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3pELGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYTtZQUNqSCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGdCQUFnQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7WUFDekksSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQzVFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCO1lBQzFILGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYztZQUNqSCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7U0FDN0MsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLGtCQUFrQixDQUFDLGVBQWUsQ0FBQztRQUMxRCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsa0JBQWtCLENBQUMsNEJBQTRCLENBQUM7UUFDcEYsSUFBSSxDQUFDLG1DQUFtQyxHQUFHLGtCQUFrQixDQUFDLG1DQUFtQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRSxJQUFJLENBQUMsMEJBQTBCLEdBQUcsa0JBQWtCLENBQUMsMEJBQTBCLENBQUM7UUFDaEYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDO1FBQ2xFLElBQUksQ0FBQyxjQUFjLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxDQUFDO0lBQzVELENBQUM7Q0FDSjtBQXBJRCwwQ0FvSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NSZXNvdXJjZUNsZWFuZXIgfSBmcm9tICcuL3Jvcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NSZXNvdXJjZUNsZWFuZXIgYXMgUmVzb3VyY2VDbGVhbmVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSZXNvdXJjZUNsZWFuZXJgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcm9zLXJlc291cmNlY2xlYW5lclxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlQ2xlYW5lclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjdGlvbjogUmVzb3VyY2UgY2xlYW5lciBhY3Rpb25zOlxuICAgICAqIC0gU2NhbjogU2Nhbm5pbmcgcGhhc2UuIFNjYW4gb3V0IHRoZSByZXNvdXJjZXMgdG8gYmUgY2xlYW5lZCB1cC5cbiAgICAgKiAtIENsZWFuVXA6IENsZWFudXAgcGhhc2UuIENsZWFuIHVwIHRoZSBzY2FubmVkIHJlc291cmNlcy4gSXQgaXQgbm90IGFsbG93ZWQgZm9yIHJlc291cmNlIGNyZWF0aW9uLlxuICAgICAqIC0gU2NhbitDbGVhblVwOiBTY2FuIGZpcnN0LCB0aGVuIENsZWFuVXAuXG4gICAgICogLSBTY2FuV2hlbkNyZWF0aW5nQW5kVXBkYXRpbmcrQ2xlYW5VcFdoZW5EZWxldGluZzogU2NhbiB3aGVuIGNyZWF0aW5nIG9yIHVwZGF0aW5nIHJlc291cmNlLCBhbmQgQ2xlYW5VcCB3aGVuIGRlbGV0aW5nIHN0YWNrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2xlYW5VcEFsZ29yaXRobTogVGhlIGNsZWFudXAgYWxnb3JpdGhtIG9mIGNsZWFudXAgcGhhc2U6XG4gICAgICogLSBSZXNvdXJjZURlcGVuZGVuY3k6IENsZWFuIHVwIGJ5IHJlc291cmNlIGRlcGVuZGVuY3kgdHJlZS5cbiAgICAgKiAtIFJlc291cmNlVHlwZU9yZGVyOiBDbGVhbiB1cCBieSByZXNvdXJjZSB0eXBlIG9yZGVyLiBQcm9wZXJ0eSBSZXNvdXJjZVR5cGVPcmRlciBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHJlc291cmNlIHR5cGUgb3JkZXIuIElmIGl0IGlzIG5vdCBzcGVjaWZpZWQsIGEgZGVmYXVsdCBvcmRlciB3aWxsIGJlIHVzZWQuXG4gICAgICogRGVmYXVsdCB0byBSZXNvdXJjZURlcGVuZGVuY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2xlYW5VcEFsZ29yaXRobT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNsZWFuVXBSZXRyeUNvdW50OiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZXhlY3V0aW9ucyBvZiBjbGVhbnVwIHBoYXNlLlxuICAgICAqIERlZmF1bHQgdG8gMSwgd2hpY2ggbWVhbnMgbm8gcmV0cnkuXG4gICAgICogQ29uZGl0aW9ucyB0aGF0IHRyaWdnZXIgYSByZXRyeTogKHRoZSByZWxhdGlvbnNoaXAgaXMgb3IpXG4gICAgICogMS5UaGVyZSBhcmUgcmVzb3VyY2VzIHdoaWNoIGZhaWwgdG8gYmUgY2xlYW5lZCB1cC5cbiAgICAgKiAyLlRoZSBjbGVhbnVwIGlzIHRpbWVvdXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2xlYW5VcFJldHJ5Q291bnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbGVhblVwVGltZW91dDogVGhlIHRpbWVvdXQgc2Vjb25kcyBvZiBleGVjdXRpb25zIG9mIGNsZWFudXAgcGhhc2UuXG4gICAgICogRGVmYXVsdCB0byAxIGhvdXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2xlYW5VcFRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNhYmxlZFNpZGVFZmZlY3RzOiBTaWRlIGVmZmVjdHMgdG8gYmUgZGlzYWJsZWQuXG4gICAgICogQ2xlYW5pbmcgdXAgc29tZSByZXNvdXJjZXMgd2lsbCBjYXVzZSBzb21lIHNpZGUgZWZmZWN0cy4gSWYgaXMgbm90IGV4cGVjdGVkLCB1c2UgdGhlIHByb3BlcnR5IHRvIGRpc2FibGUgdGhlbS5cbiAgICAgKiBUaGUgc2lkZSBlZmZlY3RzIGNhbiBiZSBmb3VuZCBpbiByZXNwb25zZShSZXNvdXJjZUNsZWFuZXIpIG9mIEFQSSBHZXRGZWF0dXJlRGV0YWlscy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNhYmxlZFNpZGVFZmZlY3RzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGV4Y2x1ZGVkUmVzb3VyY2VzOiBFeGNsdWRlIHBhcnRzIGZyb20gcmVzb3VyY2VzIHRvIGJlIGNsZWFuZWQgdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZXhjbHVkZWRSZXNvdXJjZXM/OiBBcnJheTxSb3NSZXNvdXJjZUNsZWFuZXIuRXhjbHVkZWRSZXNvdXJjZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBmYWlsdXJlT3B0aW9uOiBUaGUgZmFpbHVyZSBvcHRpb24gb2YgY2xlYW51cCBwaGFzZTpcbiAgICAgKiAtIE5vcm1hbDogUmVzb3VyY2UgZmFpbHVyZSBkb2VzIG5vdCBhZmZlY3QgdGhlIHJlc291cmNlcyB0aGF0IGRlcGVuZCBvbiBpdC5cbiAgICAgKiAtIEZhc3Q6IFJlc291cmNlIGZhaWx1cmUgY2F1c2VzIGFsbCByZXNvdXJjZXMgdGhhdCBkZXBlbmQgb24gaXQgdG8gZmFpbC5cbiAgICAgKiBEZWZhdWx0IHRvIE5vcm1hbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBmYWlsdXJlT3B0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbW9kZTogVGhlIHJlc3VsdCBtb2RlIG9mIHJlc291cmNlIGNsZWFuZXI6XG4gICAgICogLSBTdHJpY3Q6IEFueSBzY2FubmluZyBvciBjbGVhbnVwIGZhaWx1cmUgbGVhZHMgdG8gdGhlIGZhaWx1cmUgb2YgdGhlIGNsZWFuZXIuXG4gICAgICogLSBMb29zZTogT25seSBhIGxpdHRsZSBzY2FubmluZyBhbmQgY2xlYW51cCBmYWlsdXJlcyBsZWFkIHRvIHRoZSBmYWlsdXJlIG9mIHRoZSBjbGVhbmVyLiBNb3N0IHNjYW5uaW5nIGZhaWx1cmVzIHdpbGwgYmUgaWdub3JlZCwgZmFpbHVyZSBtZXNzYWdlcyBjYW4gYmUgZm91bmQgaW4gU2NhbkVycm9ycyBvciBSZXNvdXJjZURldGFpbHMuIE1vc3QgY2xlYW51cCBmYWlsdXJlcyB3aWxsIGJlIGlnbm9yZWQsIGZhaWx1cmUgbWVzc2FnZXMgY2FuIGJlIGZvdW5kIGluIFJlc291cmNlRGV0YWlscy5cbiAgICAgKiBEZWZhdWx0IHRvIExvb3NlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUZpbHRlcnM6IFJlc291cmNlIGZpbHRlcnMgdGhhdCBSZXNvdXJjZUNsZWFuZXIgdXNlcyB0byBmaWx0ZXIgb3V0IHRoZSByZXNvdXJjZXMgdG8gYmUgY2xlYW5lZCB1cCBkdXJpbmcgc2Nhbm5pbmcuXG4gICAgICogT25seSBvbmUgb2YgUmVzb3VyY2VGaWx0ZXJzIGFuZCBSZXNvdXJjZXMgY2FuIGJlIHNwZWNpZmllZC5cbiAgICAgKiBUaGVyZSBhcmUgdHdvIGZpbHRlcmluZyBiZWhhdmlvcnMoRWZmZWN0KTogQWxsb3cgYW5kIERlbnkuIFRoZSBmaWx0ZXJzIHdvcmsgYXMgYmVsb3c6XG4gICAgICogMS5BbnkgcmVzb3VyY2UgZGVuaWVkIGJ5IGFueSBEZW55IGZpbHRlciB3aWxsIG5vdCBiZSBjbGVhbmVkIHVwLlxuICAgICAqIDIuT25seSByZXNvdXJjZXMgYWxsb3dlZCBieSBzb21lIEFsbG93IGZpbHRlciBhbmQgbm90IGRlbmllZCBieSBhbnkgRGVueSBmaWx0ZXIgd2lsbCBiZSBjbGVhbmVkIHVwLlxuICAgICAqIElmIGZpbHRlcnMgYXJlIGNoYW5nZWQgZHVyaW5nIHJlc291cmNlIHVwZGF0ZSwgUmVzb3VyY2VDbGVhbmVyIHJlcXVpcmVzIHRvIHJlc2Nhbi4gQW5kIGlmIEFjdGlvbiBlcXVhbHMgQ2xlYW5VcCwgYW4gZXJyb3Igb2NjdXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlRmlsdGVycz86IEFycmF5PFJvc1Jlc291cmNlQ2xlYW5lci5SZXNvdXJjZUZpbHRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZXM6IFJlc291cmNlcyB0byBiZSBjbGVhbmVkIHVwLlxuICAgICAqIE9ubHkgb25lIG9mIFJlc291cmNlcyBhbmQgUmVzb3VyY2VGaWx0ZXJzIGNhbiBiZSBzcGVjaWZpZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VzPzogQXJyYXk8Um9zUmVzb3VyY2VDbGVhbmVyLlJlc291cmNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlVHlwZU9yZGVyOiBUaGlzIHByb3BlcnR5IHRha2VzIGVmZmVjdCBvbmx5IHdoZW4gcHJvcGVydHkgQ2xlYW5VcEFsZ29yaXRobSBpcyBSZXNvdXJjZVR5cGVPcmRlci5cbiAgICAgKiBJZiBpdCB0YWtlcyBlZmZlY3Q6XG4gICAgICogLSBSZXNvdXJjZXMgd2lsbCBiZSBjbGVhbmVkIHVwIGluIG9yZGVyIGZyb20gZnJvbnQgdG8gYmFjay5cbiAgICAgKiAtIFJlc291cmNlIHdpdGggcmVzb3VyY2UgdHlwZSBub3Qgc3BlY2lmaWVkIGluIHRoaXMgcHJvcGVydHkgd2lsbCBub3QgYmUgY2xlYW5lZCB1cC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZVR5cGVPcmRlcj86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJPUzo6UmVzb3VyY2VDbGVhbmVyYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSByZXNvdXJjZSBjbGVhbmVyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zUmVzb3VyY2VDbGVhbmVyYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcm9zLXJlc291cmNlY2xlYW5lclxuICovXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VDbGVhbmVyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBSZXNvdXJjZUNsZWFuZXJQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2xlYW5SZXN1bHQ6IFRoZSBjbGVhbnVwIHJlc3VsdC4gVmFsaWQgdmFsdWVzOlxuLSBTdWNjZXNzOiBBbGwgcmVzb3VyY2VzIGFyZSBjbGVhbmVkIHVwIHN1Y2Nlc3NmdWxseS5cbi0gUmVzb3VyY2VGYWlsdXJlOiBQYXJ0aWFsIHJlc291cmNlcyBmYWlsIHRvIGNsZWFuIHVwLlxuLSBUaW1lb3V0OiBUaW1lb3V0IHRvIGNsZWFuIHVwLlxuLSBDaGVja0ZhaWx1cmU6IFByZSBjaGVjayBvZiBjbGVhbnVwIGZhaWxzLlxuLSBVbmtub3duRmFpbHVyZTogVW5leHBlY3RlZCBmYWlsdXJlLlxuLSBVc2VyQ2FuY2VsbGVkOiBDbGVhbnVwIGlzIGNhbmNlbGxlZCBieSB1c2VyLlxuLSBOb25lOiBDbGVhbnVwIGlzIG5vdCB0cmlnZ2VyZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbGVhblJlc3VsdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5vQ2xlYW51cFJlc291cmNlRGV0YWlsczogVGhlIGRldGFpbHMgb2YgdGhlIHJlc291cmNlcyB0aGF0IGFyZSBzY2FubmVkIGJ1dCBmaWx0ZXJlZC5cbk9ubHkgcmVzb3VyY2VzIHdpdGggdGhlIHJlc291cmNlIHR5cGVzIFJlc291cmNlQ2xlYW5lciBzdXBwb3J0cyBhbmQgdGhlIHJlZ2lvbnMgbm90IGZpbHRlcmVkIGFyZSBzY2FubmVkLlxuVGhlIGZvcm1hdCBpcyB0aGUgc2FtZSBhcyBSZXNvdXJjZURldGFpbHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOb0NsZWFudXBSZXNvdXJjZURldGFpbHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOb0NsZWFudXBSZXNvdXJjZVBhcnRpYWxEZXRhaWxzOiBUaGUgcGFydGlhbCBkZXRhaWxzIG9mIHRoZSByZXNvdXJjZXMgdGhhdCBhcmUgc2Nhbm5lZCBidXQgZmlsdGVyZWQuXG5Pbmx5IHJlc291cmNlcyB3aXRoIHRoZSByZXNvdXJjZSB0eXBlcyBSZXNvdXJjZUNsZWFuZXIgc3VwcG9ydHMgYW5kIHRoZSByZWdpb25zIG5vdCBmaWx0ZXJlZCBhcmUgc2Nhbm5lZC5cblRoZSBmb3JtYXQgaXMgdGhlIHNhbWUgYXMgUmVzb3VyY2VQYXJ0aWFsRGV0YWlscy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5vQ2xlYW51cFJlc291cmNlUGFydGlhbERldGFpbHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZXNvdXJjZURldGFpbHM6IFRoZSBkZXRhaWxzIG9mIHJlc291cmNlcyB0byBiZSBjbGVhbmVkIHVwLlxuVGhlIHZhbHVlIGlzIGEgbGlzdCBvZiBkaWN0LiBUaGUgZGljdCBjb250YWlucyB0aGUgZmllbGRzIGJlbG93OlxuLSBSZXNvdXJjZVR5cGU6IFJlc291cmNlIHR5cGUgb2YgdGhlIHJlc291cmNlLlxuLSBSZWdpb25JZDogUmVnaW9uIElEIG9mIHRoZSByZXNvdXJjZS5cbi0gUmVzb3VyY2VJZDogSUQgb2YgdGhlIHJlc291cmNlLlxuLSBSZXNvdXJjZU5hbWU6IE5hbWUgb2YgdGhlIHJlc291cmNlLlxuLSBDbGVhbnVwVHlwZTogQ2xlYW51cCB0eXBlIG9mIHRoZSByZXNvdXJjZS4gVmFsaWQgdmFsdWVzOlxuICAtIE5vcm1hbDogVGhlIHJlc291cmNlIGNhbiBiZSBkZWxldGVkIG5vcm1hbGx5LlxuICAtIERlbGV0ZVdpdGhJbnN0YW5jZTogVGhlIHJlc291cmNlIHdpbGwgYmUgZGVsZXRlZCB3aXRoIHRoZSByZXNvdXJjZSBpdCBiZWxvbmdzIHRvLiBJZiB0aGUgcmVzb3VyY2UgaXQgYmVsb25ncyB0byBpcyBmaWx0ZXJlZCBvciBleGNsdWRlZCwgdGhlIGRlbGV0aW9uIHByb2JhYmx5IGZhaWxzLiBDbGVhbnVwVHlwZVJlYXNvbnMgZ2l2ZSBtb3JlIGluZm9ybWF0aW9uLlxuICAtIFVuYWJsZVRvRGVsZXRlOiBVbmFibGUgdG8gZGVsZXRlIHRoZSByZXNvdXJjZS4gQ2xlYW51cFR5cGVSZWFzb25zIGdpdmUgbW9yZSBpbmZvcm1hdGlvbi5cbi0gQ2xlYW51cFR5cGVSZWFzb25zOiBUaGUgaW5mb3JtYXRpb24gb2YgdGhlIHJlbGF0ZWQgQ2xlYW51cFR5cGUuXG4tIFJlc291cmNlU3RhdHVzOiBTdGF0dXMgb2YgdGhlIHJlc291cmNlLiBWYWxpZCB2YWx1ZXM6XG4gIC0gRGVsZXRpbmc6IFRoZSByZXNvdXJjZSBpcyBkZWxldGluZy5cbiAgLSBGYWlsdXJlOiBUaGUgZGVsZXRpb24gb2YgdGhlIHJlc291cmNlIGZhaWxlZC5cbiAgLSBTdWNjZXNzOiBUaGUgcmVzb3VyY2UgaXMgZGVsZXRlZC5cbiAgLSBTa2lwcGVkOiBUaGUgZGVsZXRpb24gb2YgdGhlIHJlc291cmNlIGlzIHNraXBwZWQuXG4gIC0gUGVuZGluZzogVGhlIGRlbGV0aW9uIG9mIHRoZSByZXNvdXJjZSBpcyBub3Qgc3RhcnRlZC5cbi0gUmVzb3VyY2VTdGF0dXNSZWFzb246IFRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgcmVsYXRlZCBSZXNvdXJjZVN0YXR1cy5cbi0gRGVwZW5kZW5jaWVzOiBUaGUgcmVzb3VyY2VzIHRoYXQgbmVlZCB0byBiZSBkZWxldGVkIGJlZm9yZSB0aGUgZGVsZXRpb24gb2YgdGhlIHJlc291cmNlLiBUaGUgdmFsdWUgaXMgYSBsaXN0IG9mIGRpY3QuIFRoZSBkaWN0IGNvbnRhaW5zIHRoZSBmaWVsZHMgYmVsb3c6XG4gIC0gUmVzb3VyY2VUeXBlOiBSZXNvdXJjZSB0eXBlIG9mIHRoZSBkZXBlbmRlbmN5IHJlc291cmNlLlxuICAtIFJlZ2lvbklkOiBSZWdpb24gSUQgb2YgdGhlIGRlcGVuZGVuY3kgcmVzb3VyY2UuXG4gIC0gUmVzb3VyY2VJZDogSUQgb2YgdGhlIGRlcGVuZGVuY3kgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZURldGFpbHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZXNvdXJjZVBhcnRpYWxEZXRhaWxzOiBUaGUgcGFydGlhbCBkZXRhaWxzIG9mIHJlc291cmNlcyB0byBiZSBjbGVhbmVkIHVwLlxuVGhlIHZhbHVlIGlzIGEgbGlzdCBvZiBkaWN0LiBUaGUgZGljdCBjb250YWlucyB0aGUgZmllbGRzIGJlbG93OlxuLSBSZXNvdXJjZVR5cGU6IFJlc291cmNlIHR5cGUgb2YgdGhlIHJlc291cmNlLlxuLSBSZWdpb25JZDogUmVnaW9uIElEIG9mIHRoZSByZXNvdXJjZS5cbi0gUmVzb3VyY2VJZDogSUQgb2YgdGhlIHJlc291cmNlLlxuLSBSZXNvdXJjZU5hbWU6IE5hbWUgb2YgdGhlIHJlc291cmNlLlxuLSBSZXNvdXJjZVN0YXR1czogU3RhdHVzIG9mIHRoZSByZXNvdXJjZS4gVmFsaWQgdmFsdWVzOlxuICAtIERlbGV0aW5nOiBUaGUgcmVzb3VyY2UgaXMgZGVsZXRpbmcuXG4gIC0gRmFpbHVyZTogVGhlIGRlbGV0aW9uIG9mIHRoZSByZXNvdXJjZSBmYWlsZWQuXG4gIC0gU3VjY2VzczogVGhlIHJlc291cmNlIGlzIGRlbGV0ZWQuXG4gIC0gU2tpcHBlZDogVGhlIGRlbGV0aW9uIG9mIHRoZSByZXNvdXJjZSBpcyBza2lwcGVkLlxuICAtIFBlbmRpbmc6IFRoZSBkZWxldGlvbiBvZiB0aGUgcmVzb3VyY2UgaXMgbm90IHN0YXJ0ZWQuXG4tIFJlc291cmNlU3RhdHVzUmVhc29uOiBUaGUgaW5mb3JtYXRpb24gb2YgdGhlIHJlbGF0ZWQgUmVzb3VyY2VTdGF0dXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZVBhcnRpYWxEZXRhaWxzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVzb3VyY2VTdW1tYXJ5OiBUaGUgZGV0YWlscyBvZiByZXNvdXJjZXMgdG8gYmUgY2xlYW5lZCB1cC5cblRoZSB2YWx1ZSBpcyBhIGxpc3Qgb2YgZGljdC4gVGhlIGRpY3QgY29udGFpbnMgdGhlIGZpZWxkcyBiZWxvdzpcbi0gUmVzb3VyY2VUeXBlOiBSZXNvdXJjZSB0eXBlIG9mIHRoZSByZXNvdXJjZXMuXG4tIERlbGV0aW5nQ291bnQ6IE51bWJlciBvZiBkZWxldGluZyByZXNvdXJjZXMgb2YgdGhlIHJlc291cmNlIHR5cGUuXG4tIFN1Y2Nlc3NDb3VudDogTnVtYmVyIG9mIGRlbGV0ZWQgcmVzb3VyY2VzIG9mIHRoZSByZXNvdXJjZSB0eXBlLlxuLSBGYWlsdXJlQ291bnQ6IE51bWJlciBvZiByZXNvdXJjZXMgdGhhdCBmYWlsZWQgdG8gZGVsZXRlIG9mIHRoZSByZXNvdXJjZSB0eXBlLlxuLSBTa2lwcGVkQ291bnQ6IE51bWJlciBvZiBza2lwcGVkIHJlc291cmNlcyBvZiB0aGUgcmVzb3VyY2UgdHlwZS5cbi0gUGVuZGluZ0NvdW50OiBOdW1iZXIgb2YgcmVzb3VyY2VzIHRoYXQgaGF2ZSBub3QgYmVlbiBkZWxldGVkIG9mIHRoZSByZXNvdXJjZSB0eXBlLlxuLSBPdGhlckNvdW50OiBOdW1iZXIgb2Ygb3RoZXIgcmVzb3VyY2VzIG9mIHRoZSByZXNvdXJjZSB0eXBlLlxuLSBUb3RhbENvdW50OiBOdW1iZXIgb2YgdG90YWwgcmVzb3VyY2VzIG9mIHRoZSByZXNvdXJjZSB0eXBlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VTdW1tYXJ5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2NhbkVycm9yczogVGhlIHNjYW4gZXJyb3JzLiBJdCB0YWtlcyBlZmZlY3Qgb25seSB3aGVuIHByb3BlcnR5IE1vZGUgaXMgTG9vc2UuXG5UaGUgdmFsdWUgaXMgYSBsaXN0IG9mIGRpY3QuIFRoZSBkaWN0IGNvbnRhaW5zIHRoZSBmaWVsZHMgYmVsb3c6XG4tIFJlc291cmNlVHlwZTogUmVzb3VyY2UgdHlwZSBmb3Igc2Nhbm5pbmcuXG4tIFJlZ2lvbklkOiBSZWdpb24gSUQgZm9yIHNjYW5uaW5nLlxuLSBFcnJvck1lc3NhZ2U6IEVycm9yIG1lc3NhZ2Ugb2Ygc2Nhbm5pbmcgd2l0aCBzcGVjaWZpZWQgcmVzb3VyY2UgdHlwZSBhbmQgcmVnaW9uIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2NhbkVycm9yczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJlc291cmNlQ2xlYW5lclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zUmVzb3VyY2VDbGVhbmVyID0gbmV3IFJvc1Jlc291cmNlQ2xlYW5lcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGZhaWx1cmVPcHRpb246IHByb3BzLmZhaWx1cmVPcHRpb24gPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5mYWlsdXJlT3B0aW9uID09PSBudWxsID8gJ05vcm1hbCcgOiBwcm9wcy5mYWlsdXJlT3B0aW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VGaWx0ZXJzOiBwcm9wcy5yZXNvdXJjZUZpbHRlcnMsXG4gICAgICAgICAgICBhY3Rpb246IHByb3BzLmFjdGlvbixcbiAgICAgICAgICAgIGNsZWFuVXBBbGdvcml0aG06IHByb3BzLmNsZWFuVXBBbGdvcml0aG0gPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5jbGVhblVwQWxnb3JpdGhtID09PSBudWxsID8gJ1Jlc291cmNlRGVwZW5kZW5jeScgOiBwcm9wcy5jbGVhblVwQWxnb3JpdGhtLFxuICAgICAgICAgICAgbW9kZTogcHJvcHMubW9kZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLm1vZGUgPT09IG51bGwgPyAnTG9vc2UnIDogcHJvcHMubW9kZSxcbiAgICAgICAgICAgIGNsZWFuVXBSZXRyeUNvdW50OiBwcm9wcy5jbGVhblVwUmV0cnlDb3VudCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmNsZWFuVXBSZXRyeUNvdW50ID09PSBudWxsID8gMSA6IHByb3BzLmNsZWFuVXBSZXRyeUNvdW50LFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlT3JkZXI6IHByb3BzLnJlc291cmNlVHlwZU9yZGVyLFxuICAgICAgICAgICAgcmVzb3VyY2VzOiBwcm9wcy5yZXNvdXJjZXMsXG4gICAgICAgICAgICBjbGVhblVwVGltZW91dDogcHJvcHMuY2xlYW5VcFRpbWVvdXQgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5jbGVhblVwVGltZW91dCA9PT0gbnVsbCA/IDM2MDAgOiBwcm9wcy5jbGVhblVwVGltZW91dCxcbiAgICAgICAgICAgIGRpc2FibGVkU2lkZUVmZmVjdHM6IHByb3BzLmRpc2FibGVkU2lkZUVmZmVjdHMsXG4gICAgICAgICAgICBleGNsdWRlZFJlc291cmNlczogcHJvcHMuZXhjbHVkZWRSZXNvdXJjZXMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUmVzb3VyY2VDbGVhbmVyO1xuICAgICAgICB0aGlzLmF0dHJDbGVhblJlc3VsdCA9IHJvc1Jlc291cmNlQ2xlYW5lci5hdHRyQ2xlYW5SZXN1bHQ7XG4gICAgICAgIHRoaXMuYXR0ck5vQ2xlYW51cFJlc291cmNlRGV0YWlscyA9IHJvc1Jlc291cmNlQ2xlYW5lci5hdHRyTm9DbGVhbnVwUmVzb3VyY2VEZXRhaWxzO1xuICAgICAgICB0aGlzLmF0dHJOb0NsZWFudXBSZXNvdXJjZVBhcnRpYWxEZXRhaWxzID0gcm9zUmVzb3VyY2VDbGVhbmVyLmF0dHJOb0NsZWFudXBSZXNvdXJjZVBhcnRpYWxEZXRhaWxzO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZURldGFpbHMgPSByb3NSZXNvdXJjZUNsZWFuZXIuYXR0clJlc291cmNlRGV0YWlscztcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VQYXJ0aWFsRGV0YWlscyA9IHJvc1Jlc291cmNlQ2xlYW5lci5hdHRyUmVzb3VyY2VQYXJ0aWFsRGV0YWlscztcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VTdW1tYXJ5ID0gcm9zUmVzb3VyY2VDbGVhbmVyLmF0dHJSZXNvdXJjZVN1bW1hcnk7XG4gICAgICAgIHRoaXMuYXR0clNjYW5FcnJvcnMgPSByb3NSZXNvdXJjZUNsZWFuZXIuYXR0clNjYW5FcnJvcnM7XG4gICAgfVxufVxuIl19