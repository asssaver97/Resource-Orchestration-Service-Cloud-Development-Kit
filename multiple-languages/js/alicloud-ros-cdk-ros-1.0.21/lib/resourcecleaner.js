"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceCleaner = exports.ResourceCleanerProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ros_generated_1 = require("./ros.generated");
Object.defineProperty(exports, "ResourceCleanerProperty", { enumerable: true, get: function () { return ros_generated_1.RosResourceCleaner; } });
/**
 * A ROS resource type:  `ALIYUN::ROS::ResourceCleaner`
 */
class ResourceCleaner extends ros.Resource {
    /**
     * Create a new `ALIYUN::ROS::ResourceCleaner`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VjbGVhbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzb3VyY2VjbGVhbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQTRGdEQ7O0dBRUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFtRzdDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMkIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN0SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxrQ0FBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3pELGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYTtZQUNqSCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGdCQUFnQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7WUFDekksSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQzVFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCO1lBQzFILGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYztZQUNqSCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7U0FDN0MsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLGtCQUFrQixDQUFDLGVBQWUsQ0FBQztRQUMxRCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsa0JBQWtCLENBQUMsNEJBQTRCLENBQUM7UUFDcEYsSUFBSSxDQUFDLG1DQUFtQyxHQUFHLGtCQUFrQixDQUFDLG1DQUFtQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRSxJQUFJLENBQUMsMEJBQTBCLEdBQUcsa0JBQWtCLENBQUMsMEJBQTBCLENBQUM7UUFDaEYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDO1FBQ2xFLElBQUksQ0FBQyxjQUFjLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxDQUFDO0lBQzVELENBQUM7Q0FDSjtBQW5JRCwwQ0FtSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NSZXNvdXJjZUNsZWFuZXIgfSBmcm9tICcuL3Jvcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NSZXNvdXJjZUNsZWFuZXIgYXMgUmVzb3VyY2VDbGVhbmVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPUzo6UmVzb3VyY2VDbGVhbmVyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlQ2xlYW5lclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjdGlvbjogUmVzb3VyY2UgY2xlYW5lciBhY3Rpb25zOlxuICAgICAqIC0gU2NhbjogU2Nhbm5pbmcgcGhhc2UuIFNjYW4gb3V0IHRoZSByZXNvdXJjZXMgdG8gYmUgY2xlYW5lZCB1cC5cbiAgICAgKiAtIENsZWFuVXA6IENsZWFudXAgcGhhc2UuIENsZWFuIHVwIHRoZSBzY2FubmVkIHJlc291cmNlcy4gSXQgaXQgbm90IGFsbG93ZWQgZm9yIHJlc291cmNlIGNyZWF0aW9uLlxuICAgICAqIC0gU2NhbitDbGVhblVwOiBTY2FuIGZpcnN0LCB0aGVuIENsZWFuVXAuXG4gICAgICogLSBTY2FuV2hlbkNyZWF0aW5nQW5kVXBkYXRpbmcrQ2xlYW5VcFdoZW5EZWxldGluZzogU2NhbiB3aGVuIGNyZWF0aW5nIG9yIHVwZGF0aW5nIHJlc291cmNlLCBhbmQgQ2xlYW5VcCB3aGVuIGRlbGV0aW5nIHN0YWNrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2xlYW5VcEFsZ29yaXRobTogVGhlIGNsZWFudXAgYWxnb3JpdGhtIG9mIGNsZWFudXAgcGhhc2U6XG4gICAgICogLSBSZXNvdXJjZURlcGVuZGVuY3k6IENsZWFuIHVwIGJ5IHJlc291cmNlIGRlcGVuZGVuY3kgdHJlZS5cbiAgICAgKiAtIFJlc291cmNlVHlwZU9yZGVyOiBDbGVhbiB1cCBieSByZXNvdXJjZSB0eXBlIG9yZGVyLiBQcm9wZXJ0eSBSZXNvdXJjZVR5cGVPcmRlciBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHJlc291cmNlIHR5cGUgb3JkZXIuIElmIGl0IGlzIG5vdCBzcGVjaWZpZWQsIGEgZGVmYXVsdCBvcmRlciB3aWxsIGJlIHVzZWQuXG4gICAgICogRGVmYXVsdCB0byBSZXNvdXJjZURlcGVuZGVuY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2xlYW5VcEFsZ29yaXRobT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNsZWFuVXBSZXRyeUNvdW50OiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZXhlY3V0aW9ucyBvZiBjbGVhbnVwIHBoYXNlLlxuICAgICAqIERlZmF1bHQgdG8gMSwgd2hpY2ggbWVhbnMgbm8gcmV0cnkuXG4gICAgICogQ29uZGl0aW9ucyB0aGF0IHRyaWdnZXIgYSByZXRyeTogKHRoZSByZWxhdGlvbnNoaXAgaXMgb3IpXG4gICAgICogMS5UaGVyZSBhcmUgcmVzb3VyY2VzIHdoaWNoIGZhaWwgdG8gYmUgY2xlYW5lZCB1cC5cbiAgICAgKiAyLlRoZSBjbGVhbnVwIGlzIHRpbWVvdXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2xlYW5VcFJldHJ5Q291bnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbGVhblVwVGltZW91dDogVGhlIHRpbWVvdXQgc2Vjb25kcyBvZiBleGVjdXRpb25zIG9mIGNsZWFudXAgcGhhc2UuXG4gICAgICogRGVmYXVsdCB0byAxIGhvdXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2xlYW5VcFRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNhYmxlZFNpZGVFZmZlY3RzOiBTaWRlIGVmZmVjdHMgdG8gYmUgZGlzYWJsZWQuXG4gICAgICogQ2xlYW5pbmcgdXAgc29tZSByZXNvdXJjZXMgd2lsbCBjYXVzZSBzb21lIHNpZGUgZWZmZWN0cy4gSWYgaXMgbm90IGV4cGVjdGVkLCB1c2UgdGhlIHByb3BlcnR5IHRvIGRpc2FibGUgdGhlbS5cbiAgICAgKiBUaGUgc2lkZSBlZmZlY3RzIGNhbiBiZSBmb3VuZCBpbiByZXNwb25zZShSZXNvdXJjZUNsZWFuZXIpIG9mIEFQSSBHZXRGZWF0dXJlRGV0YWlscy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNhYmxlZFNpZGVFZmZlY3RzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGV4Y2x1ZGVkUmVzb3VyY2VzOiBFeGNsdWRlIHBhcnRzIGZyb20gcmVzb3VyY2VzIHRvIGJlIGNsZWFuZWQgdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZXhjbHVkZWRSZXNvdXJjZXM/OiBBcnJheTxSb3NSZXNvdXJjZUNsZWFuZXIuRXhjbHVkZWRSZXNvdXJjZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBmYWlsdXJlT3B0aW9uOiBUaGUgZmFpbHVyZSBvcHRpb24gb2YgY2xlYW51cCBwaGFzZTpcbiAgICAgKiAtIE5vcm1hbDogUmVzb3VyY2UgZmFpbHVyZSBkb2VzIG5vdCBhZmZlY3QgdGhlIHJlc291cmNlcyB0aGF0IGRlcGVuZCBvbiBpdC5cbiAgICAgKiAtIEZhc3Q6IFJlc291cmNlIGZhaWx1cmUgY2F1c2VzIGFsbCByZXNvdXJjZXMgdGhhdCBkZXBlbmQgb24gaXQgdG8gZmFpbC5cbiAgICAgKiBEZWZhdWx0IHRvIE5vcm1hbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBmYWlsdXJlT3B0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbW9kZTogVGhlIHJlc3VsdCBtb2RlIG9mIHJlc291cmNlIGNsZWFuZXI6XG4gICAgICogLSBTdHJpY3Q6IEFueSBzY2FubmluZyBvciBjbGVhbnVwIGZhaWx1cmUgbGVhZHMgdG8gdGhlIGZhaWx1cmUgb2YgdGhlIGNsZWFuZXIuXG4gICAgICogLSBMb29zZTogT25seSBhIGxpdHRsZSBzY2FubmluZyBhbmQgY2xlYW51cCBmYWlsdXJlcyBsZWFkIHRvIHRoZSBmYWlsdXJlIG9mIHRoZSBjbGVhbmVyLiBNb3N0IHNjYW5uaW5nIGZhaWx1cmVzIHdpbGwgYmUgaWdub3JlZCwgZmFpbHVyZSBtZXNzYWdlcyBjYW4gYmUgZm91bmQgaW4gU2NhbkVycm9ycyBvciBSZXNvdXJjZURldGFpbHMuIE1vc3QgY2xlYW51cCBmYWlsdXJlcyB3aWxsIGJlIGlnbm9yZWQsIGZhaWx1cmUgbWVzc2FnZXMgY2FuIGJlIGZvdW5kIGluIFJlc291cmNlRGV0YWlscy5cbiAgICAgKiBEZWZhdWx0IHRvIExvb3NlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUZpbHRlcnM6IFJlc291cmNlIGZpbHRlcnMgdGhhdCBSZXNvdXJjZUNsZWFuZXIgdXNlcyB0byBmaWx0ZXIgb3V0IHRoZSByZXNvdXJjZXMgdG8gYmUgY2xlYW5lZCB1cCBkdXJpbmcgc2Nhbm5pbmcuXG4gICAgICogT25seSBvbmUgb2YgUmVzb3VyY2VGaWx0ZXJzIGFuZCBSZXNvdXJjZXMgY2FuIGJlIHNwZWNpZmllZC5cbiAgICAgKiBUaGVyZSBhcmUgdHdvIGZpbHRlcmluZyBiZWhhdmlvcnMoRWZmZWN0KTogQWxsb3cgYW5kIERlbnkuIFRoZSBmaWx0ZXJzIHdvcmsgYXMgYmVsb3c6XG4gICAgICogMS5BbnkgcmVzb3VyY2UgZGVuaWVkIGJ5IGFueSBEZW55IGZpbHRlciB3aWxsIG5vdCBiZSBjbGVhbmVkIHVwLlxuICAgICAqIDIuT25seSByZXNvdXJjZXMgYWxsb3dlZCBieSBzb21lIEFsbG93IGZpbHRlciBhbmQgbm90IGRlbmllZCBieSBhbnkgRGVueSBmaWx0ZXIgd2lsbCBiZSBjbGVhbmVkIHVwLlxuICAgICAqIElmIGZpbHRlcnMgYXJlIGNoYW5nZWQgZHVyaW5nIHJlc291cmNlIHVwZGF0ZSwgUmVzb3VyY2VDbGVhbmVyIHJlcXVpcmVzIHRvIHJlc2Nhbi4gQW5kIGlmIEFjdGlvbiBlcXVhbHMgQ2xlYW5VcCwgYW4gZXJyb3Igb2NjdXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlRmlsdGVycz86IEFycmF5PFJvc1Jlc291cmNlQ2xlYW5lci5SZXNvdXJjZUZpbHRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZXM6IFJlc291cmNlcyB0byBiZSBjbGVhbmVkIHVwLlxuICAgICAqIE9ubHkgb25lIG9mIFJlc291cmNlcyBhbmQgUmVzb3VyY2VGaWx0ZXJzIGNhbiBiZSBzcGVjaWZpZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VzPzogQXJyYXk8Um9zUmVzb3VyY2VDbGVhbmVyLlJlc291cmNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlVHlwZU9yZGVyOiBUaGlzIHByb3BlcnR5IHRha2VzIGVmZmVjdCBvbmx5IHdoZW4gcHJvcGVydHkgQ2xlYW5VcEFsZ29yaXRobSBpcyBSZXNvdXJjZVR5cGVPcmRlci5cbiAgICAgKiBJZiBpdCB0YWtlcyBlZmZlY3Q6XG4gICAgICogLSBSZXNvdXJjZXMgd2lsbCBiZSBjbGVhbmVkIHVwIGluIG9yZGVyIGZyb20gZnJvbnQgdG8gYmFjay5cbiAgICAgKiAtIFJlc291cmNlIHdpdGggcmVzb3VyY2UgdHlwZSBub3Qgc3BlY2lmaWVkIGluIHRoaXMgcHJvcGVydHkgd2lsbCBub3QgYmUgY2xlYW5lZCB1cC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZVR5cGVPcmRlcj86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlJPUzo6UmVzb3VyY2VDbGVhbmVyYFxuICovXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VDbGVhbmVyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbGVhblJlc3VsdDogVGhlIGNsZWFudXAgcmVzdWx0LiBWYWxpZCB2YWx1ZXM6XG4tIFN1Y2Nlc3M6IEFsbCByZXNvdXJjZXMgYXJlIGNsZWFuZWQgdXAgc3VjY2Vzc2Z1bGx5LlxuLSBSZXNvdXJjZUZhaWx1cmU6IFBhcnRpYWwgcmVzb3VyY2VzIGZhaWwgdG8gY2xlYW4gdXAuXG4tIFRpbWVvdXQ6IFRpbWVvdXQgdG8gY2xlYW4gdXAuXG4tIENoZWNrRmFpbHVyZTogUHJlIGNoZWNrIG9mIGNsZWFudXAgZmFpbHMuXG4tIFVua25vd25GYWlsdXJlOiBVbmV4cGVjdGVkIGZhaWx1cmUuXG4tIFVzZXJDYW5jZWxsZWQ6IENsZWFudXAgaXMgY2FuY2VsbGVkIGJ5IHVzZXIuXG4tIE5vbmU6IENsZWFudXAgaXMgbm90IHRyaWdnZXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsZWFuUmVzdWx0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTm9DbGVhbnVwUmVzb3VyY2VEZXRhaWxzOiBUaGUgZGV0YWlscyBvZiB0aGUgcmVzb3VyY2VzIHRoYXQgYXJlIHNjYW5uZWQgYnV0IGZpbHRlcmVkLlxuT25seSByZXNvdXJjZXMgd2l0aCB0aGUgcmVzb3VyY2UgdHlwZXMgUmVzb3VyY2VDbGVhbmVyIHN1cHBvcnRzIGFuZCB0aGUgcmVnaW9ucyBub3QgZmlsdGVyZWQgYXJlIHNjYW5uZWQuXG5UaGUgZm9ybWF0IGlzIHRoZSBzYW1lIGFzIFJlc291cmNlRGV0YWlscy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5vQ2xlYW51cFJlc291cmNlRGV0YWlsczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5vQ2xlYW51cFJlc291cmNlUGFydGlhbERldGFpbHM6IFRoZSBwYXJ0aWFsIGRldGFpbHMgb2YgdGhlIHJlc291cmNlcyB0aGF0IGFyZSBzY2FubmVkIGJ1dCBmaWx0ZXJlZC5cbk9ubHkgcmVzb3VyY2VzIHdpdGggdGhlIHJlc291cmNlIHR5cGVzIFJlc291cmNlQ2xlYW5lciBzdXBwb3J0cyBhbmQgdGhlIHJlZ2lvbnMgbm90IGZpbHRlcmVkIGFyZSBzY2FubmVkLlxuVGhlIGZvcm1hdCBpcyB0aGUgc2FtZSBhcyBSZXNvdXJjZVBhcnRpYWxEZXRhaWxzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTm9DbGVhbnVwUmVzb3VyY2VQYXJ0aWFsRGV0YWlsczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc291cmNlRGV0YWlsczogVGhlIGRldGFpbHMgb2YgcmVzb3VyY2VzIHRvIGJlIGNsZWFuZWQgdXAuXG5UaGUgdmFsdWUgaXMgYSBsaXN0IG9mIGRpY3QuIFRoZSBkaWN0IGNvbnRhaW5zIHRoZSBmaWVsZHMgYmVsb3c6XG4tIFJlc291cmNlVHlwZTogUmVzb3VyY2UgdHlwZSBvZiB0aGUgcmVzb3VyY2UuXG4tIFJlZ2lvbklkOiBSZWdpb24gSUQgb2YgdGhlIHJlc291cmNlLlxuLSBSZXNvdXJjZUlkOiBJRCBvZiB0aGUgcmVzb3VyY2UuXG4tIFJlc291cmNlTmFtZTogTmFtZSBvZiB0aGUgcmVzb3VyY2UuXG4tIENsZWFudXBUeXBlOiBDbGVhbnVwIHR5cGUgb2YgdGhlIHJlc291cmNlLiBWYWxpZCB2YWx1ZXM6XG4gIC0gTm9ybWFsOiBUaGUgcmVzb3VyY2UgY2FuIGJlIGRlbGV0ZWQgbm9ybWFsbHkuXG4gIC0gRGVsZXRlV2l0aEluc3RhbmNlOiBUaGUgcmVzb3VyY2Ugd2lsbCBiZSBkZWxldGVkIHdpdGggdGhlIHJlc291cmNlIGl0IGJlbG9uZ3MgdG8uIElmIHRoZSByZXNvdXJjZSBpdCBiZWxvbmdzIHRvIGlzIGZpbHRlcmVkIG9yIGV4Y2x1ZGVkLCB0aGUgZGVsZXRpb24gcHJvYmFibHkgZmFpbHMuIENsZWFudXBUeXBlUmVhc29ucyBnaXZlIG1vcmUgaW5mb3JtYXRpb24uXG4gIC0gVW5hYmxlVG9EZWxldGU6IFVuYWJsZSB0byBkZWxldGUgdGhlIHJlc291cmNlLiBDbGVhbnVwVHlwZVJlYXNvbnMgZ2l2ZSBtb3JlIGluZm9ybWF0aW9uLlxuLSBDbGVhbnVwVHlwZVJlYXNvbnM6IFRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgcmVsYXRlZCBDbGVhbnVwVHlwZS5cbi0gUmVzb3VyY2VTdGF0dXM6IFN0YXR1cyBvZiB0aGUgcmVzb3VyY2UuIFZhbGlkIHZhbHVlczpcbiAgLSBEZWxldGluZzogVGhlIHJlc291cmNlIGlzIGRlbGV0aW5nLlxuICAtIEZhaWx1cmU6IFRoZSBkZWxldGlvbiBvZiB0aGUgcmVzb3VyY2UgZmFpbGVkLlxuICAtIFN1Y2Nlc3M6IFRoZSByZXNvdXJjZSBpcyBkZWxldGVkLlxuICAtIFNraXBwZWQ6IFRoZSBkZWxldGlvbiBvZiB0aGUgcmVzb3VyY2UgaXMgc2tpcHBlZC5cbiAgLSBQZW5kaW5nOiBUaGUgZGVsZXRpb24gb2YgdGhlIHJlc291cmNlIGlzIG5vdCBzdGFydGVkLlxuLSBSZXNvdXJjZVN0YXR1c1JlYXNvbjogVGhlIGluZm9ybWF0aW9uIG9mIHRoZSByZWxhdGVkIFJlc291cmNlU3RhdHVzLlxuLSBEZXBlbmRlbmNpZXM6IFRoZSByZXNvdXJjZXMgdGhhdCBuZWVkIHRvIGJlIGRlbGV0ZWQgYmVmb3JlIHRoZSBkZWxldGlvbiBvZiB0aGUgcmVzb3VyY2UuIFRoZSB2YWx1ZSBpcyBhIGxpc3Qgb2YgZGljdC4gVGhlIGRpY3QgY29udGFpbnMgdGhlIGZpZWxkcyBiZWxvdzpcbiAgLSBSZXNvdXJjZVR5cGU6IFJlc291cmNlIHR5cGUgb2YgdGhlIGRlcGVuZGVuY3kgcmVzb3VyY2UuXG4gIC0gUmVnaW9uSWQ6IFJlZ2lvbiBJRCBvZiB0aGUgZGVwZW5kZW5jeSByZXNvdXJjZS5cbiAgLSBSZXNvdXJjZUlkOiBJRCBvZiB0aGUgZGVwZW5kZW5jeSByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlRGV0YWlsczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc291cmNlUGFydGlhbERldGFpbHM6IFRoZSBwYXJ0aWFsIGRldGFpbHMgb2YgcmVzb3VyY2VzIHRvIGJlIGNsZWFuZWQgdXAuXG5UaGUgdmFsdWUgaXMgYSBsaXN0IG9mIGRpY3QuIFRoZSBkaWN0IGNvbnRhaW5zIHRoZSBmaWVsZHMgYmVsb3c6XG4tIFJlc291cmNlVHlwZTogUmVzb3VyY2UgdHlwZSBvZiB0aGUgcmVzb3VyY2UuXG4tIFJlZ2lvbklkOiBSZWdpb24gSUQgb2YgdGhlIHJlc291cmNlLlxuLSBSZXNvdXJjZUlkOiBJRCBvZiB0aGUgcmVzb3VyY2UuXG4tIFJlc291cmNlTmFtZTogTmFtZSBvZiB0aGUgcmVzb3VyY2UuXG4tIFJlc291cmNlU3RhdHVzOiBTdGF0dXMgb2YgdGhlIHJlc291cmNlLiBWYWxpZCB2YWx1ZXM6XG4gIC0gRGVsZXRpbmc6IFRoZSByZXNvdXJjZSBpcyBkZWxldGluZy5cbiAgLSBGYWlsdXJlOiBUaGUgZGVsZXRpb24gb2YgdGhlIHJlc291cmNlIGZhaWxlZC5cbiAgLSBTdWNjZXNzOiBUaGUgcmVzb3VyY2UgaXMgZGVsZXRlZC5cbiAgLSBTa2lwcGVkOiBUaGUgZGVsZXRpb24gb2YgdGhlIHJlc291cmNlIGlzIHNraXBwZWQuXG4gIC0gUGVuZGluZzogVGhlIGRlbGV0aW9uIG9mIHRoZSByZXNvdXJjZSBpcyBub3Qgc3RhcnRlZC5cbi0gUmVzb3VyY2VTdGF0dXNSZWFzb246IFRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgcmVsYXRlZCBSZXNvdXJjZVN0YXR1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlUGFydGlhbERldGFpbHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZXNvdXJjZVN1bW1hcnk6IFRoZSBkZXRhaWxzIG9mIHJlc291cmNlcyB0byBiZSBjbGVhbmVkIHVwLlxuVGhlIHZhbHVlIGlzIGEgbGlzdCBvZiBkaWN0LiBUaGUgZGljdCBjb250YWlucyB0aGUgZmllbGRzIGJlbG93OlxuLSBSZXNvdXJjZVR5cGU6IFJlc291cmNlIHR5cGUgb2YgdGhlIHJlc291cmNlcy5cbi0gRGVsZXRpbmdDb3VudDogTnVtYmVyIG9mIGRlbGV0aW5nIHJlc291cmNlcyBvZiB0aGUgcmVzb3VyY2UgdHlwZS5cbi0gU3VjY2Vzc0NvdW50OiBOdW1iZXIgb2YgZGVsZXRlZCByZXNvdXJjZXMgb2YgdGhlIHJlc291cmNlIHR5cGUuXG4tIEZhaWx1cmVDb3VudDogTnVtYmVyIG9mIHJlc291cmNlcyB0aGF0IGZhaWxlZCB0byBkZWxldGUgb2YgdGhlIHJlc291cmNlIHR5cGUuXG4tIFNraXBwZWRDb3VudDogTnVtYmVyIG9mIHNraXBwZWQgcmVzb3VyY2VzIG9mIHRoZSByZXNvdXJjZSB0eXBlLlxuLSBQZW5kaW5nQ291bnQ6IE51bWJlciBvZiByZXNvdXJjZXMgdGhhdCBoYXZlIG5vdCBiZWVuIGRlbGV0ZWQgb2YgdGhlIHJlc291cmNlIHR5cGUuXG4tIE90aGVyQ291bnQ6IE51bWJlciBvZiBvdGhlciByZXNvdXJjZXMgb2YgdGhlIHJlc291cmNlIHR5cGUuXG4tIFRvdGFsQ291bnQ6IE51bWJlciBvZiB0b3RhbCByZXNvdXJjZXMgb2YgdGhlIHJlc291cmNlIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZVN1bW1hcnk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTY2FuRXJyb3JzOiBUaGUgc2NhbiBlcnJvcnMuIEl0IHRha2VzIGVmZmVjdCBvbmx5IHdoZW4gcHJvcGVydHkgTW9kZSBpcyBMb29zZS5cblRoZSB2YWx1ZSBpcyBhIGxpc3Qgb2YgZGljdC4gVGhlIGRpY3QgY29udGFpbnMgdGhlIGZpZWxkcyBiZWxvdzpcbi0gUmVzb3VyY2VUeXBlOiBSZXNvdXJjZSB0eXBlIGZvciBzY2FubmluZy5cbi0gUmVnaW9uSWQ6IFJlZ2lvbiBJRCBmb3Igc2Nhbm5pbmcuXG4tIEVycm9yTWVzc2FnZTogRXJyb3IgbWVzc2FnZSBvZiBzY2FubmluZyB3aXRoIHNwZWNpZmllZCByZXNvdXJjZSB0eXBlIGFuZCByZWdpb24gSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTY2FuRXJyb3JzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Uk9TOjpSZXNvdXJjZUNsZWFuZXJgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJlc291cmNlQ2xlYW5lclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1Jlc291cmNlQ2xlYW5lciA9IG5ldyBSb3NSZXNvdXJjZUNsZWFuZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICBmYWlsdXJlT3B0aW9uOiBwcm9wcy5mYWlsdXJlT3B0aW9uID09PSB1bmRlZmluZWQgfHwgcHJvcHMuZmFpbHVyZU9wdGlvbiA9PT0gbnVsbCA/ICdOb3JtYWwnIDogcHJvcHMuZmFpbHVyZU9wdGlvbixcbiAgICAgICAgICAgIHJlc291cmNlRmlsdGVyczogcHJvcHMucmVzb3VyY2VGaWx0ZXJzLFxuICAgICAgICAgICAgYWN0aW9uOiBwcm9wcy5hY3Rpb24sXG4gICAgICAgICAgICBjbGVhblVwQWxnb3JpdGhtOiBwcm9wcy5jbGVhblVwQWxnb3JpdGhtID09PSB1bmRlZmluZWQgfHwgcHJvcHMuY2xlYW5VcEFsZ29yaXRobSA9PT0gbnVsbCA/ICdSZXNvdXJjZURlcGVuZGVuY3knIDogcHJvcHMuY2xlYW5VcEFsZ29yaXRobSxcbiAgICAgICAgICAgIG1vZGU6IHByb3BzLm1vZGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5tb2RlID09PSBudWxsID8gJ0xvb3NlJyA6IHByb3BzLm1vZGUsXG4gICAgICAgICAgICBjbGVhblVwUmV0cnlDb3VudDogcHJvcHMuY2xlYW5VcFJldHJ5Q291bnQgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5jbGVhblVwUmV0cnlDb3VudCA9PT0gbnVsbCA/IDEgOiBwcm9wcy5jbGVhblVwUmV0cnlDb3VudCxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZU9yZGVyOiBwcm9wcy5yZXNvdXJjZVR5cGVPcmRlcixcbiAgICAgICAgICAgIHJlc291cmNlczogcHJvcHMucmVzb3VyY2VzLFxuICAgICAgICAgICAgY2xlYW5VcFRpbWVvdXQ6IHByb3BzLmNsZWFuVXBUaW1lb3V0ID09PSB1bmRlZmluZWQgfHwgcHJvcHMuY2xlYW5VcFRpbWVvdXQgPT09IG51bGwgPyAzNjAwIDogcHJvcHMuY2xlYW5VcFRpbWVvdXQsXG4gICAgICAgICAgICBkaXNhYmxlZFNpZGVFZmZlY3RzOiBwcm9wcy5kaXNhYmxlZFNpZGVFZmZlY3RzLFxuICAgICAgICAgICAgZXhjbHVkZWRSZXNvdXJjZXM6IHByb3BzLmV4Y2x1ZGVkUmVzb3VyY2VzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1Jlc291cmNlQ2xlYW5lcjtcbiAgICAgICAgdGhpcy5hdHRyQ2xlYW5SZXN1bHQgPSByb3NSZXNvdXJjZUNsZWFuZXIuYXR0ckNsZWFuUmVzdWx0O1xuICAgICAgICB0aGlzLmF0dHJOb0NsZWFudXBSZXNvdXJjZURldGFpbHMgPSByb3NSZXNvdXJjZUNsZWFuZXIuYXR0ck5vQ2xlYW51cFJlc291cmNlRGV0YWlscztcbiAgICAgICAgdGhpcy5hdHRyTm9DbGVhbnVwUmVzb3VyY2VQYXJ0aWFsRGV0YWlscyA9IHJvc1Jlc291cmNlQ2xlYW5lci5hdHRyTm9DbGVhbnVwUmVzb3VyY2VQYXJ0aWFsRGV0YWlscztcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VEZXRhaWxzID0gcm9zUmVzb3VyY2VDbGVhbmVyLmF0dHJSZXNvdXJjZURldGFpbHM7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlUGFydGlhbERldGFpbHMgPSByb3NSZXNvdXJjZUNsZWFuZXIuYXR0clJlc291cmNlUGFydGlhbERldGFpbHM7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlU3VtbWFyeSA9IHJvc1Jlc291cmNlQ2xlYW5lci5hdHRyUmVzb3VyY2VTdW1tYXJ5O1xuICAgICAgICB0aGlzLmF0dHJTY2FuRXJyb3JzID0gcm9zUmVzb3VyY2VDbGVhbmVyLmF0dHJTY2FuRXJyb3JzO1xuICAgIH1cbn1cbiJdfQ==