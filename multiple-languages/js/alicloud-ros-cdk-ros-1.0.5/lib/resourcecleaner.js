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
            cleanUpRetryCount: props.cleanUpRetryCount === undefined || props.cleanUpRetryCount === null ? 1 : props.cleanUpRetryCount,
            cleanUpTimeout: props.cleanUpTimeout === undefined || props.cleanUpTimeout === null ? 3600 : props.cleanUpTimeout,
            excludedResources: props.excludedResources,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceCleaner;
        this.attrNoCleanupResourceDetails = rosResourceCleaner.attrNoCleanupResourceDetails;
        this.attrResourceDetails = rosResourceCleaner.attrResourceDetails;
        this.attrResourceSummary = rosResourceCleaner.attrResourceSummary;
    }
}
exports.ResourceCleaner = ResourceCleaner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VjbGVhbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzb3VyY2VjbGVhbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQXVEdEQ7O0dBRUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFzRDdDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMkIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN0SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxrQ0FBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3pELGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYTtZQUNqSCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCO1lBQzFILGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYztZQUNqSCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1NBQzdDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWtCLENBQUM7UUFDbkMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLGtCQUFrQixDQUFDLDRCQUE0QixDQUFDO1FBQ3BGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7SUFDdEUsQ0FBQztDQUNKO0FBN0VELDBDQTZFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1Jlc291cmNlQ2xlYW5lciB9IGZyb20gJy4vcm9zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1Jlc291cmNlQ2xlYW5lciBhcyBSZXNvdXJjZUNsZWFuZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Uk9TOjpSZXNvdXJjZUNsZWFuZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VDbGVhbmVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWN0aW9uOiBSZXNvdXJjZSBjbGVhbmVyIGFjdGlvbnM6XG4gICAgICogLSBTY2FuOiBTY2FubmluZyBwaGFzZS4gU2NhbiBvdXQgdGhlIHJlc291cmNlcyB0byBiZSBjbGVhbmVkIHVwLlxuICAgICAqIC0gQ2xlYW5VcDogQ2xlYW51cCBwaGFzZS4gQ2xlYW4gdXAgdGhlIHNjYW5uZWQgcmVzb3VyY2VzLiBJdCBpdCBub3QgYWxsb3dlZCBmb3IgcmVzb3VyY2UgY3JlYXRpb24uXG4gICAgICogLSBTY2FuK0NsZWFuVXA6IFNjYW4gZmlyc3QsIHRoZW4gQ2xlYW5VcC5cbiAgICAgKiAtIFNjYW5XaGVuQ3JlYXRpbmdBbmRVcGRhdGluZytDbGVhblVwV2hlbkRlbGV0aW5nOiBTY2FuIHdoZW4gY3JlYXRpbmcgb3IgdXBkYXRpbmcgcmVzb3VyY2UsIGFuZCBDbGVhblVwIHdoZW4gZGVsZXRpbmcgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWN0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbGVhblVwUmV0cnlDb3VudDogVGhlIG1heGltdW0gbnVtYmVyIG9mIGV4ZWN1dGlvbnMgb2YgY2xlYW51cCBwaGFzZS5cbiAgICAgKiBEZWZhdWx0IHRvIDEsIHdoaWNoIG1lYW5zIG5vIHJldHJ5LlxuICAgICAqIENvbmRpdGlvbnMgdGhhdCB0cmlnZ2VyIGEgcmV0cnk6ICh0aGUgcmVsYXRpb25zaGlwIGlzIG9yKVxuICAgICAqIDEuVGhlcmUgYXJlIHJlc291cmNlcyB3aGljaCBmYWlsIHRvIGJlIGNsZWFuZWQgdXAuXG4gICAgICogMi5UaGUgY2xlYW51cCBpcyB0aW1lb3V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsZWFuVXBSZXRyeUNvdW50PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2xlYW5VcFRpbWVvdXQ6IFRoZSB0aW1lb3V0IHNlY29uZHMgb2YgZXhlY3V0aW9ucyBvZiBjbGVhbnVwIHBoYXNlLlxuICAgICAqIERlZmF1bHQgdG8gMSBob3VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsZWFuVXBUaW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZXhjbHVkZWRSZXNvdXJjZXM6IEV4Y2x1ZGUgcGFydHMgZnJvbSByZXNvdXJjZXMgdG8gYmUgY2xlYW5lZCB1cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBleGNsdWRlZFJlc291cmNlcz86IEFycmF5PFJvc1Jlc291cmNlQ2xlYW5lci5FeGNsdWRlZFJlc291cmNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGZhaWx1cmVPcHRpb246IFRoZSBmYWlsdXJlIG9wdGlvbiBvZiBjbGVhbnVwIHBoYXNlOlxuICAgICAqIC0gTm9ybWFsOiBSZXNvdXJjZSBmYWlsdXJlIGRvZXMgbm90IGFmZmVjdCB0aGUgcmVzb3VyY2VzIHRoYXQgZGVwZW5kIG9uIGl0LlxuICAgICAqIC0gRmFzdDogUmVzb3VyY2UgZmFpbHVyZSBjYXVzZXMgYWxsIHJlc291cmNlcyB0aGF0IGRlcGVuZCBvbiBpdCB0byBmYWlsLlxuICAgICAqIERlZmF1bHQgdG8gTm9ybWFsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZhaWx1cmVPcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUZpbHRlcnM6IFJlc291cmNlIGZpbHRlcnMgdGhhdCBSZXNvdXJjZUNsZWFuZXIgdXNlcyB0byBmaWx0ZXIgb3V0IHRoZSByZXNvdXJjZXMgdG8gYmUgY2xlYW5lZCB1cCBkdXJpbmcgc2Nhbm5pbmcuXG4gICAgICogVGhlcmUgYXJlIHR3byBmaWx0ZXJpbmcgYmVoYXZpb3JzKEVmZmVjdCk6IEFsbG93IGFuZCBEZW55LiBUaGUgZmlsdGVycyB3b3JrIGFzIGJlbG93OlxuICAgICAqIDEuQW55IHJlc291cmNlIGRlbmllZCBieSBhbnkgRGVueSBmaWx0ZXIgd2lsbCBub3QgYmUgY2xlYW5lZCB1cC5cbiAgICAgKiAyLklmIHRoZXJlIGlzIG5vdCBhbnkgQWxsb3cgZmlsdGVyLCBhbGwgcmVzb3VyY2VzIG5vdCBkZW5pZWQgYnkgYW55IERlbnkgZmlsdGVyIHdpbGwgYmUgY2xlYW5lZCB1cC5cbiAgICAgKiAzLklmIHRoZXJlIGFyZSBzb21lIEFsbG93IGZpbHRlcnMsIG9ubHkgcmVzb3VyY2VzIGFsbG93ZWQgYnkgc29tZSBBbGxvdyBmaWx0ZXIgYW5kIG5vdCBkZW5pZWQgYnkgYW55IERlbnkgZmlsdGVyIHdpbGwgYmUgY2xlYW5lZCB1cC5cbiAgICAgKiBJZiBmaWx0ZXJzIGFyZSBjaGFuZ2VkIGR1cmluZyByZXNvdXJjZSB1cGRhdGUsIFJlc291cmNlQ2xlYW5lciByZXF1aXJlcyB0byByZXNjYW4uIEFuZCBpZiBBY3Rpb24gZXF1YWxzIENsZWFuVXAsIGFuIGVycm9yIG9jY3Vycy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUZpbHRlcnM/OiBBcnJheTxSb3NSZXNvdXJjZUNsZWFuZXIuUmVzb3VyY2VGaWx0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpST1M6OlJlc291cmNlQ2xlYW5lcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJlc291cmNlQ2xlYW5lciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTm9DbGVhbnVwUmVzb3VyY2VEZXRhaWxzOiBUaGUgZGV0YWlscyBvZiB0aGUgcmVzb3VyY2VzIHRoYXQgYXJlIHNjYW5uZWQgYnV0IGZpbHRlcmVkLlxuT25seSByZXNvdXJjZXMgd2l0aCB0aGUgcmVzb3VyY2UgdHlwZXMgUmVzb3VyY2VDbGVhbmVyIHN1cHBvcnRzIGFuZCB0aGUgcmVnaW9ucyBub3QgZmlsdGVyZWQgYXJlIHNjYW5uZWQuXG5UaGUgZm9ybWF0IGlzIHRoZSBzYW1lIGFzIFJlc291cmNlRGV0YWlscy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5vQ2xlYW51cFJlc291cmNlRGV0YWlsczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc291cmNlRGV0YWlsczogVGhlIGRldGFpbHMgb2YgcmVzb3VyY2VzIHRvIGJlIGNsZWFuZWQgdXAuXG5UaGUgdmFsdWUgaXMgYSBsaXN0IG9mIGRpY3QuIFRoZSBkaWN0IGNvbnRhaW5zIHRoZSBmaWVsZHMgYmVsb3c6XG4tIFJlc291cmNlVHlwZTogUmVzb3VyY2UgdHlwZSBvZiB0aGUgcmVzb3VyY2UuXG4tIFJlZ2lvbklkOiBSZWdpb24gSUQgb2YgdGhlIHJlc291cmNlLlxuLSBSZXNvdXJjZUlkOiBJRCBvZiB0aGUgcmVzb3VyY2UuXG4tIFJlc291cmNlTmFtZTogTmFtZSBvZiB0aGUgcmVzb3VyY2UuXG4tIENsZWFudXBUeXBlOiBDbGVhbnVwIHR5cGUgb2YgdGhlIHJlc291cmNlLiBWYWxpZCB2YWx1ZXM6XG4gIC0gTm9ybWFsOiBUaGUgcmVzb3VyY2UgY2FuIGJlIGRlbGV0ZWQgbm9ybWFsbHkuXG4gIC0gRGVsZXRlV2l0aEluc3RhbmNlOiBUaGUgcmVzb3VyY2Ugd2lsbCBiZSBkZWxldGVkIHdpdGggdGhlIHJlc291cmNlIGl0IGJlbG9uZ3MgdG8uIElmIHRoZSByZXNvdXJjZSBpdCBiZWxvbmdzIHRvIGlzIGZpbHRlcmVkIG9yIGV4Y2x1ZGVkLCB0aGUgZGVsZXRpb24gcHJvYmFibHkgZmFpbHMuIENsZWFudXBUeXBlUmVhc29ucyBnaXZlIG1vcmUgaW5mb3JtYXRpb24uXG4gIC0gVW5hYmxlVG9EZWxldGU6IFVuYWJsZSB0byBkZWxldGUgdGhlIHJlc291cmNlLiBDbGVhbnVwVHlwZVJlYXNvbnMgZ2l2ZSBtb3JlIGluZm9ybWF0aW9uLlxuLSBDbGVhbnVwVHlwZVJlYXNvbnM6IFRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgcmVsYXRlZCBDbGVhbnVwVHlwZS5cbi0gUmVzb3VyY2VTdGF0dXM6IFN0YXR1cyBvZiB0aGUgcmVzb3VyY2UuIFZhbGlkIHZhbHVlczpcbiAgLSBEZWxldGluZzogVGhlIHJlc291cmNlIGlzIGRlbGV0aW5nLlxuICAtIEZhaWx1cmU6IFRoZSBkZWxldGlvbiBvZiB0aGUgcmVzb3VyY2UgZmFpbGVkLlxuICAtIFN1Y2Nlc3M6IFRoZSByZXNvdXJjZSBpcyBkZWxldGVkLlxuICAtIFNraXBwZWQ6IFRoZSBkZWxldGlvbiBvZiB0aGUgcmVzb3VyY2UgaXMgc2tpcHBlZC5cbiAgLSBQZW5kaW5nOiBUaGUgZGVsZXRpb24gb2YgdGhlIHJlc291cmNlIGlzIG5vdCBzdGFydGVkLlxuLSBSZXNvdXJjZVN0YXR1c1JlYXNvbjogVGhlIGluZm9ybWF0aW9uIG9mIHRoZSByZWxhdGVkIFJlc291cmNlU3RhdHVzLlxuLSBEZXBlbmRlbmNpZXM6IFRoZSByZXNvdXJjZXMgdGhhdCBuZWVkIHRvIGJlIGRlbGV0ZWQgYmVmb3JlIHRoZSBkZWxldGlvbiBvZiB0aGUgcmVzb3VyY2UuIFRoZSB2YWx1ZSBpcyBhIGxpc3Qgb2YgZGljdC4gVGhlIGRpY3QgY29udGFpbnMgdGhlIGZpZWxkcyBiZWxvdzpcbiAgLSBSZXNvdXJjZVR5cGU6IFJlc291cmNlIHR5cGUgb2YgdGhlIGRlcGVuZGVuY3kgcmVzb3VyY2UuXG4gIC0gUmVnaW9uSWQ6IFJlZ2lvbiBJRCBvZiB0aGUgZGVwZW5kZW5jeSByZXNvdXJjZS5cbiAgLSBSZXNvdXJjZUlkOiBJRCBvZiB0aGUgZGVwZW5kZW5jeSByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlRGV0YWlsczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc291cmNlU3VtbWFyeTogVGhlIGRldGFpbHMgb2YgcmVzb3VyY2VzIHRvIGJlIGNsZWFuZWQgdXAuXG5UaGUgdmFsdWUgaXMgYSBsaXN0IG9mIGRpY3QuIFRoZSBkaWN0IGNvbnRhaW5zIHRoZSBmaWVsZHMgYmVsb3c6XG4tIFJlc291cmNlVHlwZTogUmVzb3VyY2UgdHlwZSBvZiB0aGUgcmVzb3VyY2VzLlxuLSBEZWxldGluZ0NvdW50OiBOdW1iZXIgb2YgZGVsZXRpbmcgcmVzb3VyY2VzIG9mIHRoZSByZXNvdXJjZSB0eXBlLlxuLSBTdWNjZXNzQ291bnQ6IE51bWJlciBvZiBkZWxldGVkIHJlc291cmNlcyBvZiB0aGUgcmVzb3VyY2UgdHlwZS5cbi0gRmFpbHVyZUNvdW50OiBOdW1iZXIgb2YgcmVzb3VyY2VzIHRoYXQgZmFpbGVkIHRvIGRlbGV0ZSBvZiB0aGUgcmVzb3VyY2UgdHlwZS5cbi0gU2tpcHBlZENvdW50OiBOdW1iZXIgb2Ygc2tpcHBlZCByZXNvdXJjZXMgb2YgdGhlIHJlc291cmNlIHR5cGUuXG4tIFBlbmRpbmdDb3VudDogTnVtYmVyIG9mIHJlc291cmNlcyB0aGF0IGhhdmUgbm90IGJlZW4gZGVsZXRlZCBvZiB0aGUgcmVzb3VyY2UgdHlwZS5cbi0gT3RoZXJDb3VudDogTnVtYmVyIG9mIG90aGVyIHJlc291cmNlcyBvZiB0aGUgcmVzb3VyY2UgdHlwZS5cbi0gVG90YWxDb3VudDogTnVtYmVyIG9mIHRvdGFsIHJlc291cmNlcyBvZiB0aGUgcmVzb3VyY2UgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlU3VtbWFyeTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlJPUzo6UmVzb3VyY2VDbGVhbmVyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSZXNvdXJjZUNsZWFuZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NSZXNvdXJjZUNsZWFuZXIgPSBuZXcgUm9zUmVzb3VyY2VDbGVhbmVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZmFpbHVyZU9wdGlvbjogcHJvcHMuZmFpbHVyZU9wdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmZhaWx1cmVPcHRpb24gPT09IG51bGwgPyAnTm9ybWFsJyA6IHByb3BzLmZhaWx1cmVPcHRpb24sXG4gICAgICAgICAgICByZXNvdXJjZUZpbHRlcnM6IHByb3BzLnJlc291cmNlRmlsdGVycyxcbiAgICAgICAgICAgIGFjdGlvbjogcHJvcHMuYWN0aW9uLFxuICAgICAgICAgICAgY2xlYW5VcFJldHJ5Q291bnQ6IHByb3BzLmNsZWFuVXBSZXRyeUNvdW50ID09PSB1bmRlZmluZWQgfHwgcHJvcHMuY2xlYW5VcFJldHJ5Q291bnQgPT09IG51bGwgPyAxIDogcHJvcHMuY2xlYW5VcFJldHJ5Q291bnQsXG4gICAgICAgICAgICBjbGVhblVwVGltZW91dDogcHJvcHMuY2xlYW5VcFRpbWVvdXQgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5jbGVhblVwVGltZW91dCA9PT0gbnVsbCA/IDM2MDAgOiBwcm9wcy5jbGVhblVwVGltZW91dCxcbiAgICAgICAgICAgIGV4Y2x1ZGVkUmVzb3VyY2VzOiBwcm9wcy5leGNsdWRlZFJlc291cmNlcyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NSZXNvdXJjZUNsZWFuZXI7XG4gICAgICAgIHRoaXMuYXR0ck5vQ2xlYW51cFJlc291cmNlRGV0YWlscyA9IHJvc1Jlc291cmNlQ2xlYW5lci5hdHRyTm9DbGVhbnVwUmVzb3VyY2VEZXRhaWxzO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZURldGFpbHMgPSByb3NSZXNvdXJjZUNsZWFuZXIuYXR0clJlc291cmNlRGV0YWlscztcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VTdW1tYXJ5ID0gcm9zUmVzb3VyY2VDbGVhbmVyLmF0dHJSZXNvdXJjZVN1bW1hcnk7XG4gICAgfVxufVxuIl19