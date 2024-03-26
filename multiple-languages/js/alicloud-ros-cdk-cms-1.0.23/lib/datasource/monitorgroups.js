"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorGroups = exports.MonitorGroupsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cms_generated_1 = require("./cms.generated");
Object.defineProperty(exports, "MonitorGroupsProperty", { enumerable: true, get: function () { return cms_generated_1.RosMonitorGroups; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::MonitorGroups`, which is used to query the basic information about application groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMonitorGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroups
 */
class MonitorGroups extends ros.Resource {
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
        const rosMonitorGroups = new cms_generated_1.RosMonitorGroups(this, id, {
            type: props.type,
            dynamicTagRuleId: props.dynamicTagRuleId,
            monitorGroupName: props.monitorGroupName,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMonitorGroups;
        this.attrGroupIds = rosMonitorGroups.attrGroupIds;
        this.attrMonitorGroups = rosMonitorGroups.attrMonitorGroups;
    }
}
exports.MonitorGroups = MonitorGroups;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uaXRvcmdyb3Vwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbml0b3Jncm91cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBZ0NsRDs7OztHQUlHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQjNDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQTRCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUN6SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JELElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3pCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7UUFDbEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0lBQ2hFLENBQUM7Q0FDSjtBQXRDRCxzQ0FzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NNb25pdG9yR3JvdXBzIH0gZnJvbSAnLi9jbXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zTW9uaXRvckdyb3VwcyBhcyBNb25pdG9yR3JvdXBzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBNb25pdG9yR3JvdXBzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jbXMtbW9uaXRvcmdyb3Vwc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE1vbml0b3JHcm91cHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkeW5hbWljVGFnUnVsZUlkOiBUaGUgSUQgb2YgdGhlIHRhZyBydWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGR5bmFtaWNUYWdSdWxlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBncm91cElkOiBUaGUgSURzIG9mIHRoZSBhcHBsaWNhdGlvbiBncm91cHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBJZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1vbml0b3JHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhcHBsaWNhdGlvbiBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtb25pdG9yR3JvdXBOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHlwZTogVGhlIHR5cGUgb2YgdGhlIGFwcGxpY2F0aW9uIGdyb3VwLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogY3VzdG9tOiBhIHNlbGYtbWFuYWdlZCBhcHBsaWNhdGlvbiBncm91cC5cbiAgICAgKiBlaHBjX2NsdXN0ZXI6IGFuIGFwcGxpY2F0aW9uIGdyb3VwIHRoYXQgaXMgc3luY2hyb25pemVkIGZyb20gYW4gRWxhc3RpYyBIaWdoIFBlcmZvcm1hbmNlIENvbXB1dGluZyAoRS1IUEMpIGNsdXN0ZXIuXG4gICAgICoga3ViZXJuZXRlczogYW4gYXBwbGljYXRpb24gZ3JvdXAgdGhhdCBpcyBzeW5jaHJvbml6ZWQgZnJvbSBhIENvbnRhaW5lciBTZXJ2aWNlIGZvciBLdWJlcm5ldGVzIChBQ0spIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkNNUzo6TW9uaXRvckdyb3Vwc2AsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgdGhlIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGFwcGxpY2F0aW9uIGdyb3Vwcy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc01vbml0b3JHcm91cHNgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtY21zLW1vbml0b3Jncm91cHNcbiAqL1xuZXhwb3J0IGNsYXNzIE1vbml0b3JHcm91cHMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IE1vbml0b3JHcm91cHNQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgR3JvdXBJZHM6IFRoZSBsaXN0IG9mIGdyb3VwIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdyb3VwSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTW9uaXRvckdyb3VwczogVGhlIGxpc3Qgb2YgbW9uaXRvciBncm91cHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNb25pdG9yR3JvdXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTW9uaXRvckdyb3Vwc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NNb25pdG9yR3JvdXBzID0gbmV3IFJvc01vbml0b3JHcm91cHModGhpcywgaWQsICB7XG4gICAgICAgICAgICB0eXBlOiBwcm9wcy50eXBlLFxuICAgICAgICAgICAgZHluYW1pY1RhZ1J1bGVJZDogcHJvcHMuZHluYW1pY1RhZ1J1bGVJZCxcbiAgICAgICAgICAgIG1vbml0b3JHcm91cE5hbWU6IHByb3BzLm1vbml0b3JHcm91cE5hbWUsXG4gICAgICAgICAgICBncm91cElkOiBwcm9wcy5ncm91cElkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc01vbml0b3JHcm91cHM7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwSWRzID0gcm9zTW9uaXRvckdyb3Vwcy5hdHRyR3JvdXBJZHM7XG4gICAgICAgIHRoaXMuYXR0ck1vbml0b3JHcm91cHMgPSByb3NNb25pdG9yR3JvdXBzLmF0dHJNb25pdG9yR3JvdXBzO1xuICAgIH1cbn1cbiJdfQ==