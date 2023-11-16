"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vaults = exports.VaultsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const hbr_generated_1 = require("./hbr.generated");
Object.defineProperty(exports, "VaultsProperty", { enumerable: true, get: function () { return hbr_generated_1.RosVaults; } });
/**
 * A ROS resource type:  `DATASOURCE::HBR::Vaults`
 */
class Vaults extends ros.Resource {
    /**
     * Create a new `DATASOURCE::HBR::Vaults`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosVaults = new hbr_generated_1.RosVaults(this, id, {
            vaultType: props.vaultType,
            vaultId: props.vaultId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVaults;
        this.attrVaultIds = rosVaults.attrVaultIds;
        this.attrVaults = rosVaults.attrVaults;
    }
}
exports.Vaults = Vaults;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmF1bHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmF1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBNEM7QUFFdEIsK0ZBRmIseUJBQVMsT0FFa0I7QUFvQnBDOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQnBDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBcUIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxTQUFTLEdBQUcsSUFBSSx5QkFBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztTQUN6QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO0lBQzNDLENBQUM7Q0FDSjtBQW5DRCx3QkFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NWYXVsdHMgfSBmcm9tICcuL2hici5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NWYXVsdHMgYXMgVmF1bHRzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBEQVRBU09VUkNFOjpIQlI6OlZhdWx0c2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWYXVsdHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2YXVsdElkOiBWYXVsdElkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZhdWx0SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2YXVsdFR5cGU6IFZhdWx0IHR5cGUuIFZhbHVlXG4gICAgICogLSAqKlNUQU5EQVJEKiosIHdoaWNoIGluZGljYXRlcyBhIGNvbW1vbiBiYWNrdXAgdmF1bHQuXG4gICAgICogLSAqKk9UU19CQUNLVVAqKiwgaW5kaWNhdGluZyBPVFMgYmFja3VwIHZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZhdWx0VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYERBVEFTT1VSQ0U6OkhCUjo6VmF1bHRzYFxuICovXG5leHBvcnQgY2xhc3MgVmF1bHRzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWYXVsdElkczogVGhlIGxpc3Qgb2YgdmF1bHQgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVmF1bHRJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWYXVsdHM6IFRoZSBsaXN0IG9mIHZhdWx0cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZhdWx0czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpIQlI6OlZhdWx0c2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVmF1bHRzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NWYXVsdHMgPSBuZXcgUm9zVmF1bHRzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdmF1bHRUeXBlOiBwcm9wcy52YXVsdFR5cGUsXG4gICAgICAgICAgICB2YXVsdElkOiBwcm9wcy52YXVsdElkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1ZhdWx0cztcbiAgICAgICAgdGhpcy5hdHRyVmF1bHRJZHMgPSByb3NWYXVsdHMuYXR0clZhdWx0SWRzO1xuICAgICAgICB0aGlzLmF0dHJWYXVsdHMgPSByb3NWYXVsdHMuYXR0clZhdWx0cztcbiAgICB9XG59XG4iXX0=