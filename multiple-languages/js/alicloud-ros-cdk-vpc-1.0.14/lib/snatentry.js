"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnatEntry = exports.SnatEntryProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "SnatEntryProperty", { enumerable: true, get: function () { return vpc_generated_1.RosSnatEntry; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::SnatEntry`
 */
class SnatEntry extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::SnatEntry`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSnatEntry = new vpc_generated_1.RosSnatEntry(this, id, {
            eipAffinity: props.eipAffinity,
            snatEntryName: props.snatEntryName,
            sourceVSwitchIds: props.sourceVSwitchIds,
            sourceCidr: props.sourceCidr,
            snatIp: props.snatIp,
            snatTableId: props.snatTableId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSnatEntry;
        this.attrSnatEntryIds = rosSnatEntry.attrSnatEntryIds;
    }
}
exports.SnatEntry = SnatEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hdGVudHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic25hdGVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBeUMxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWXZDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBcUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNoSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztTQUNqQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0lBQzFELENBQUM7Q0FDSjtBQWpDRCw4QkFpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTbmF0RW50cnkgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTbmF0RW50cnkgYXMgU25hdEVudHJ5UHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6U25hdEVudHJ5YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNuYXRFbnRyeVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNuYXRJcDogVGhlIHB1YmxpYyBJUCBhZGRyZXNzLiBTZXBhcmF0ZSBtdWx0aXBsZSBFSVBzIHdpdGggY29tbWFzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNuYXRJcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc25hdFRhYmxlSWQ6IFRoZSBJRCBvZiB0aGUgU05BVCB0YWJsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzbmF0VGFibGVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZWlwQWZmaW5pdHk6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSBFSVAgYWZmaW5pdHkuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAwOiBub1xuICAgICAqIDE6IHllc1xuICAgICAqIElmIEVJUCBhZmZpbml0eSBpcyBlbmFibGVkIGFuZCB0aGUgU05BVCBlbnRyeSBpcyBhc3NvY2lhdGVkIHdpdGggbXVsdGlwbGUgRUlQcywgYSBjbGllbnQgdXNlcyB0aGUgc2FtZSBFSVAgdG8gYWNjZXNzIHRoZSBJbnRlcm5ldC4gT3RoZXJ3aXNlLCB0aGUgY2xpZW50IHVzZXMgYW4gRUlQIHNlbGVjdGVkIGZyb20gdGhlIGFzc29jaWF0ZWQgRUlQcyB0byBhY2Nlc3MgdGhlIEludGVybmV0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVpcEFmZmluaXR5PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc25hdEVudHJ5TmFtZTogaGUgbmFtZSBvZiB0aGUgU05BVCBydWxlIGlzIDItMTI4IGNoYXJhY3RlcnMgbG9uZyBhbmQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UsIGJ1dCBjYW5ub3QgYmVnaW4gd2l0aCBIVFRQOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNuYXRFbnRyeU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzb3VyY2VDaWRyOiBTcGVjaWZpZXMgdGhlIG5ldHdvcmsgc2VnbWVudCBvZiB0aGUgc3dpdGNoLiBGb3IgZXhhbXBsZSwgMTAuMC4wLjEvMjQuIFRoaXMgcGFyYW1ldGVyIGFuZCB0aGUgU291cmNlVlN3dGljaElkIHBhcmFtZXRlciBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlIGFuZCBjYW5ub3QgYXBwZWFyIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlQ2lkcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZVZTd2l0Y2hJZHM6IFRoZSBJRCBvZiB0aGUgVlN3aXRjaCB0byBhY2Nlc3MgdGhlIEludGVybmV0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZVZTd2l0Y2hJZHM/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OlNuYXRFbnRyeWBcbiAqL1xuZXhwb3J0IGNsYXNzIFNuYXRFbnRyeSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU25hdEVudHJ5SWRzOiBUaGUgSURTIG9mIHRoZSBTTkFUIGVudHJ5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU25hdEVudHJ5SWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpTbmF0RW50cnlgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNuYXRFbnRyeVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1NuYXRFbnRyeSA9IG5ldyBSb3NTbmF0RW50cnkodGhpcywgaWQsICB7XG4gICAgICAgICAgICBlaXBBZmZpbml0eTogcHJvcHMuZWlwQWZmaW5pdHksXG4gICAgICAgICAgICBzbmF0RW50cnlOYW1lOiBwcm9wcy5zbmF0RW50cnlOYW1lLFxuICAgICAgICAgICAgc291cmNlVlN3aXRjaElkczogcHJvcHMuc291cmNlVlN3aXRjaElkcyxcbiAgICAgICAgICAgIHNvdXJjZUNpZHI6IHByb3BzLnNvdXJjZUNpZHIsXG4gICAgICAgICAgICBzbmF0SXA6IHByb3BzLnNuYXRJcCxcbiAgICAgICAgICAgIHNuYXRUYWJsZUlkOiBwcm9wcy5zbmF0VGFibGVJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTbmF0RW50cnk7XG4gICAgICAgIHRoaXMuYXR0clNuYXRFbnRyeUlkcyA9IHJvc1NuYXRFbnRyeS5hdHRyU25hdEVudHJ5SWRzO1xuICAgIH1cbn1cbiJdfQ==