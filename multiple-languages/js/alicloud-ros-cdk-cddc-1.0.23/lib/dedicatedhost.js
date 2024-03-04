"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DedicatedHost = exports.DedicatedHostProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cddc_generated_1 = require("./cddc.generated");
Object.defineProperty(exports, "DedicatedHostProperty", { enumerable: true, get: function () { return cddc_generated_1.RosDedicatedHost; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDDC::DedicatedHost`, which is used to create a host in a dedicated cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHost`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
 */
class DedicatedHost extends ros.Resource {
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
        const rosDedicatedHost = new cddc_generated_1.RosDedicatedHost(this, id, {
            hostClass: props.hostClass,
            osPassword: props.osPassword,
            zoneId: props.zoneId,
            dedicatedHostGroupId: props.dedicatedHostGroupId,
            autoRenew: props.autoRenew,
            vSwitchId: props.vSwitchId,
            usedTime: props.usedTime,
            imageCategory: props.imageCategory,
            period: props.period,
            paymentType: props.paymentType,
            hostName: props.hostName,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedHost;
        this.attrAutoRenew = rosDedicatedHost.attrAutoRenew;
        this.attrCpuAllocationRatio = rosDedicatedHost.attrCpuAllocationRatio;
        this.attrCpuUsed = rosDedicatedHost.attrCpuUsed;
        this.attrDedicatedHostGroupId = rosDedicatedHost.attrDedicatedHostGroupId;
        this.attrDedicatedHostId = rosDedicatedHost.attrDedicatedHostId;
        this.attrDiskAllocationRatio = rosDedicatedHost.attrDiskAllocationRatio;
        this.attrEcsClassCode = rosDedicatedHost.attrEcsClassCode;
        this.attrHostClass = rosDedicatedHost.attrHostClass;
        this.attrHostCpu = rosDedicatedHost.attrHostCpu;
        this.attrHostMem = rosDedicatedHost.attrHostMem;
        this.attrHostName = rosDedicatedHost.attrHostName;
        this.attrHostStorage = rosDedicatedHost.attrHostStorage;
        this.attrHostType = rosDedicatedHost.attrHostType;
        this.attrImageCategory = rosDedicatedHost.attrImageCategory;
        this.attrIpAddress = rosDedicatedHost.attrIpAddress;
        this.attrMemAllocationRatio = rosDedicatedHost.attrMemAllocationRatio;
        this.attrMemoryUsed = rosDedicatedHost.attrMemoryUsed;
        this.attrOpenPermission = rosDedicatedHost.attrOpenPermission;
        this.attrPaymentType = rosDedicatedHost.attrPaymentType;
        this.attrStorageUsed = rosDedicatedHost.attrStorageUsed;
        this.attrVSwitchId = rosDedicatedHost.attrVSwitchId;
        this.attrVpcId = rosDedicatedHost.attrVpcId;
        this.attrZoneId = rosDedicatedHost.attrZoneId;
    }
}
exports.DedicatedHost = DedicatedHost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVkaWNhdGVkaG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZGljYXRlZGhvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUFvRDtBQUV2QixzR0FGcEIsaUNBQWdCLE9BRXlCO0FBcUVsRDs7OztHQUlHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUF5SDNDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGdCQUFnQixHQUFHLElBQUksaUNBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDO1FBQzFFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUNoRSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUM7UUFDeEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1FBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7UUFDdEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDdEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO1FBQzlELElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1FBQ3hELElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7Q0FDSjtBQTVLRCxzQ0E0S0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEZWRpY2F0ZWRIb3N0IH0gZnJvbSAnLi9jZGRjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RlZGljYXRlZEhvc3QgYXMgRGVkaWNhdGVkSG9zdFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgRGVkaWNhdGVkSG9zdGAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jZGRjLWRlZGljYXRlZGhvc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZWRpY2F0ZWRIb3N0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVkaWNhdGVkSG9zdEdyb3VwSWQ6IERlZGljYXRlZCBIb3N0IEdyb3VwIElEXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVkaWNhdGVkSG9zdEdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGhvc3RDbGFzczogSG9zdCBDbGFzc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGhvc3RDbGFzczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGF5bWVudFR5cGU6IFBheW1lbnQgVHlwZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBheW1lbnRUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFZTd2l0Y2ggSURcbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHpvbmVJZDogWm9uZSBJRFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1JlbmV3OiBXaGV0aGVyIEF1dG8gUmVuZXdcbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUmVuZXc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBob3N0TmFtZTogSG9zdCBOYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgaG9zdE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbWFnZUNhdGVnb3J5OiBIb3N0IEltYWdlIENhdGVnb3J5XG4gICAgICovXG4gICAgcmVhZG9ubHkgaW1hZ2VDYXRlZ29yeT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG9zUGFzc3dvcmQ6XG4gICAgICovXG4gICAgcmVhZG9ubHkgb3NQYXNzd29yZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZDpcbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUaGUgdGFnIG9mIHRoZSByZXNvdXJjZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NEZWRpY2F0ZWRIb3N0LlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlZFRpbWU6XG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlZFRpbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNEREM6OkRlZGljYXRlZEhvc3RgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGhvc3QgaW4gYSBkZWRpY2F0ZWQgY2x1c3Rlci5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0RlZGljYXRlZEhvc3RgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jZGRjLWRlZGljYXRlZGhvc3RcbiAqL1xuZXhwb3J0IGNsYXNzIERlZGljYXRlZEhvc3QgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IERlZGljYXRlZEhvc3RQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQXV0b1JlbmV3OiBXaGV0aGVyIEF1dG8gUmVuZXdcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckF1dG9SZW5ldzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENwdUFsbG9jYXRpb25SYXRpbzogQ1BVIEFsbG9jYXRpb24gUmF0aW9cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNwdUFsbG9jYXRpb25SYXRpbzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENwdVVzZWQ6IENQVSBVc2VkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcHVVc2VkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVkaWNhdGVkSG9zdEdyb3VwSWQ6IERlZGljYXRlZCBIb3N0IEdyb3VwIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWRpY2F0ZWRIb3N0R3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERlZGljYXRlZEhvc3RJZDogVGhlIGZpcnN0IElEIG9mIHRoZSByZXNvdXJjZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVkaWNhdGVkSG9zdElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGlza0FsbG9jYXRpb25SYXRpbzogRGlzayBBbGxvY2F0aW9uIFJhdGlvXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEaXNrQWxsb2NhdGlvblJhdGlvOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRWNzQ2xhc3NDb2RlOiBFQ1MgQ2xhc3MgQ29kZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRWNzQ2xhc3NDb2RlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSG9zdENsYXNzOiBIb3N0IENsYXNzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIb3N0Q2xhc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBIb3N0Q3B1OiBIb3N0IENQVVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySG9zdENwdTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEhvc3RNZW06IEhvc3QgTWVtb3J5XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIb3N0TWVtOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSG9zdE5hbWU6IEhvc3QgTmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySG9zdE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBIb3N0U3RvcmFnZTogSG9zdCBTdG9yYWdlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIb3N0U3RvcmFnZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEhvc3RUeXBlOiBIb3N0IFN0b3JhZ2UgVHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySG9zdFR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbWFnZUNhdGVnb3J5OiBIb3N0IEltYWdlIENhdGVnb3J5XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbWFnZUNhdGVnb3J5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSXBBZGRyZXNzOiBIb3N0IElQIEFkZHJlc3NcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklwQWRkcmVzczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1lbUFsbG9jYXRpb25SYXRpbzogTWVtb3J5IEFsbG9jYXRpb24gUmF0aW9cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1lbUFsbG9jYXRpb25SYXRpbzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1lbW9yeVVzZWQ6IEhvc3QgTWVtb3J5IFVzZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1lbW9yeVVzZWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBPcGVuUGVybWlzc2lvbjogV2hldGhlciBPcGVuIE9TIFBlcm1pc3Npb25cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9wZW5QZXJtaXNzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUGF5bWVudFR5cGU6IFBheW1lbnQgVHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGF5bWVudFR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTdG9yYWdlVXNlZDogU3RvcmFnZSBVc2VkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdG9yYWdlVXNlZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZTd2l0Y2hJZDogVlN3aXRjaCBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVlN3aXRjaElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVnBjSWQ6IFZQQyBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBab25lSWQ6IFpvbmUgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clpvbmVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERlZGljYXRlZEhvc3RQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0RlZGljYXRlZEhvc3QgPSBuZXcgUm9zRGVkaWNhdGVkSG9zdCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGhvc3RDbGFzczogcHJvcHMuaG9zdENsYXNzLFxuICAgICAgICAgICAgb3NQYXNzd29yZDogcHJvcHMub3NQYXNzd29yZCxcbiAgICAgICAgICAgIHpvbmVJZDogcHJvcHMuem9uZUlkLFxuICAgICAgICAgICAgZGVkaWNhdGVkSG9zdEdyb3VwSWQ6IHByb3BzLmRlZGljYXRlZEhvc3RHcm91cElkLFxuICAgICAgICAgICAgYXV0b1JlbmV3OiBwcm9wcy5hdXRvUmVuZXcsXG4gICAgICAgICAgICB2U3dpdGNoSWQ6IHByb3BzLnZTd2l0Y2hJZCxcbiAgICAgICAgICAgIHVzZWRUaW1lOiBwcm9wcy51c2VkVGltZSxcbiAgICAgICAgICAgIGltYWdlQ2F0ZWdvcnk6IHByb3BzLmltYWdlQ2F0ZWdvcnksXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIHBheW1lbnRUeXBlOiBwcm9wcy5wYXltZW50VHlwZSxcbiAgICAgICAgICAgIGhvc3ROYW1lOiBwcm9wcy5ob3N0TmFtZSxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zRGVkaWNhdGVkSG9zdDtcbiAgICAgICAgdGhpcy5hdHRyQXV0b1JlbmV3ID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRyQXV0b1JlbmV3O1xuICAgICAgICB0aGlzLmF0dHJDcHVBbGxvY2F0aW9uUmF0aW8gPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJDcHVBbGxvY2F0aW9uUmF0aW87XG4gICAgICAgIHRoaXMuYXR0ckNwdVVzZWQgPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJDcHVVc2VkO1xuICAgICAgICB0aGlzLmF0dHJEZWRpY2F0ZWRIb3N0R3JvdXBJZCA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ckRlZGljYXRlZEhvc3RHcm91cElkO1xuICAgICAgICB0aGlzLmF0dHJEZWRpY2F0ZWRIb3N0SWQgPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJEZWRpY2F0ZWRIb3N0SWQ7XG4gICAgICAgIHRoaXMuYXR0ckRpc2tBbGxvY2F0aW9uUmF0aW8gPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJEaXNrQWxsb2NhdGlvblJhdGlvO1xuICAgICAgICB0aGlzLmF0dHJFY3NDbGFzc0NvZGUgPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJFY3NDbGFzc0NvZGU7XG4gICAgICAgIHRoaXMuYXR0ckhvc3RDbGFzcyA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ckhvc3RDbGFzcztcbiAgICAgICAgdGhpcy5hdHRySG9zdENwdSA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ckhvc3RDcHU7XG4gICAgICAgIHRoaXMuYXR0ckhvc3RNZW0gPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJIb3N0TWVtO1xuICAgICAgICB0aGlzLmF0dHJIb3N0TmFtZSA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ckhvc3ROYW1lO1xuICAgICAgICB0aGlzLmF0dHJIb3N0U3RvcmFnZSA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ckhvc3RTdG9yYWdlO1xuICAgICAgICB0aGlzLmF0dHJIb3N0VHlwZSA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ckhvc3RUeXBlO1xuICAgICAgICB0aGlzLmF0dHJJbWFnZUNhdGVnb3J5ID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRySW1hZ2VDYXRlZ29yeTtcbiAgICAgICAgdGhpcy5hdHRySXBBZGRyZXNzID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRySXBBZGRyZXNzO1xuICAgICAgICB0aGlzLmF0dHJNZW1BbGxvY2F0aW9uUmF0aW8gPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJNZW1BbGxvY2F0aW9uUmF0aW87XG4gICAgICAgIHRoaXMuYXR0ck1lbW9yeVVzZWQgPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJNZW1vcnlVc2VkO1xuICAgICAgICB0aGlzLmF0dHJPcGVuUGVybWlzc2lvbiA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ck9wZW5QZXJtaXNzaW9uO1xuICAgICAgICB0aGlzLmF0dHJQYXltZW50VHlwZSA9IHJvc0RlZGljYXRlZEhvc3QuYXR0clBheW1lbnRUeXBlO1xuICAgICAgICB0aGlzLmF0dHJTdG9yYWdlVXNlZCA9IHJvc0RlZGljYXRlZEhvc3QuYXR0clN0b3JhZ2VVc2VkO1xuICAgICAgICB0aGlzLmF0dHJWU3dpdGNoSWQgPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJWU3dpdGNoSWQ7XG4gICAgICAgIHRoaXMuYXR0clZwY0lkID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRyVnBjSWQ7XG4gICAgICAgIHRoaXMuYXR0clpvbmVJZCA9IHJvc0RlZGljYXRlZEhvc3QuYXR0clpvbmVJZDtcbiAgICB9XG59XG4iXX0=