"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainGroups = exports.DomainGroupsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const dns_generated_1 = require("./dns.generated");
Object.defineProperty(exports, "DomainGroupsProperty", { enumerable: true, get: function () { return dns_generated_1.RosDomainGroups; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DNS::DomainGroups`, which is used to query domain name groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domaingroups
 */
class DomainGroups extends ros.Resource {
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
        const rosDomainGroups = new dns_generated_1.RosDomainGroups(this, id, {
            keyWord: props.keyWord,
            lang: props.lang,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomainGroups;
        this.attrDomainGroupIds = rosDomainGroups.attrDomainGroupIds;
        this.attrDomainGroups = rosDomainGroups.attrDomainGroups;
    }
}
exports.DomainGroups = DomainGroups;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluZ3JvdXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG9tYWluZ3JvdXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBbUJoRDs7OztHQUlHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQjFDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQTJCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUN4SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sZUFBZSxHQUFHLElBQUksK0JBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25ELE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUFDO0lBQzdELENBQUM7Q0FDSjtBQXBDRCxvQ0FvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEb21haW5Hcm91cHMgfSBmcm9tICcuL2Rucy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NEb21haW5Hcm91cHMgYXMgRG9tYWluR3JvdXBzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBEb21haW5Hcm91cHNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWRucy1kb21haW5ncm91cHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEb21haW5Hcm91cHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBrZXlXb3JkOiBUaGUga2V5d29yZCBmb3Igc2VhcmNoZXMgaW4gXCIlS2V5V29yZCVcIiBtb2RlLiBUaGUgdmFsdWUgaXMgbm90IGNhc2Utc2Vuc2l0aXZlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVdvcmQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsYW5nOiBUaGUgbGFuZ3VhZ2UgdHlwZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsYW5nPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6RE5TOjpEb21haW5Hcm91cHNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IGRvbWFpbiBuYW1lIGdyb3Vwcy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0RvbWFpbkdyb3Vwc2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1kbnMtZG9tYWluZ3JvdXBzXG4gKi9cbmV4cG9ydCBjbGFzcyBEb21haW5Hcm91cHMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IERvbWFpbkdyb3Vwc1Byb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEb21haW5Hcm91cElkczogVGhlIGxpc3Qgb2YgVGhlIEROUyBkb21haW4gZ3JvdXAgaWRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRG9tYWluR3JvdXBJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEb21haW5Hcm91cHM6IFRoZSBpbmZvcm1hdGlvbiBhYm91dCBETlMgZG9tYWluIGdyb3Vwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRvbWFpbkdyb3Vwczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERvbWFpbkdyb3Vwc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NEb21haW5Hcm91cHMgPSBuZXcgUm9zRG9tYWluR3JvdXBzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAga2V5V29yZDogcHJvcHMua2V5V29yZCxcbiAgICAgICAgICAgIGxhbmc6IHByb3BzLmxhbmcsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zRG9tYWluR3JvdXBzO1xuICAgICAgICB0aGlzLmF0dHJEb21haW5Hcm91cElkcyA9IHJvc0RvbWFpbkdyb3Vwcy5hdHRyRG9tYWluR3JvdXBJZHM7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbkdyb3VwcyA9IHJvc0RvbWFpbkdyb3Vwcy5hdHRyRG9tYWluR3JvdXBzO1xuICAgIH1cbn1cbiJdfQ==