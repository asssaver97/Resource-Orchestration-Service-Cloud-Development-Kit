"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenBandwidthPackage = exports.CenBandwidthPackageProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cen_generated_1 = require("./cen.generated");
Object.defineProperty(exports, "CenBandwidthPackageProperty", { enumerable: true, get: function () { return cen_generated_1.RosCenBandwidthPackage; } });
/**
 * A ROS resource type:  `ALIYUN::CEN::CenBandwidthPackage`
 */
class CenBandwidthPackage extends ros.Resource {
    /**
     * Create a new `ALIYUN::CEN::CenBandwidthPackage`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCenBandwidthPackage = new cen_generated_1.RosCenBandwidthPackage(this, id, {
            bandwidthPackageChargeType: props.bandwidthPackageChargeType,
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            geographicRegionBId: props.geographicRegionBId,
            geographicRegionAId: props.geographicRegionAId,
            pricingCycle: props.pricingCycle === undefined || props.pricingCycle === null ? 'Month' : props.pricingCycle,
            autoRenew: props.autoRenew,
            bandwidth: props.bandwidth,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            autoPay: props.autoPay === undefined || props.autoPay === null ? false : props.autoPay,
            name: props.name,
            autoRenewDuration: props.autoRenewDuration,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenBandwidthPackage;
        this.attrCenBandwidthPackageId = rosCenBandwidthPackage.attrCenBandwidthPackageId;
    }
}
exports.CenBandwidthPackage = CenBandwidthPackage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VuYmFuZHdpZHRocGFja2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNlbmJhbmR3aWR0aHBhY2thZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUF5RDtBQUV0Qiw0R0FGMUIsc0NBQXNCLE9BRStCO0FBMEU5RDs7R0FFRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZakQ7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUErQixFQUFFLG1DQUEyQyxJQUFJO1FBQzFILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLHNDQUFzQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakUsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLDBCQUEwQjtZQUM1RCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVk7WUFDNUcsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDOUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ3RGLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1NBQzdDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUM7UUFDdkMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDO0lBQ3RGLENBQUM7Q0FDSjtBQXZDRCxrREF1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlIH0gZnJvbSAnLi9jZW4uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQ2VuQmFuZHdpZHRoUGFja2FnZSBhcyBDZW5CYW5kd2lkdGhQYWNrYWdlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNFTjo6Q2VuQmFuZHdpZHRoUGFja2FnZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZW5CYW5kd2lkdGhQYWNrYWdlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFuZHdpZHRoOiBUaGUgYmFuZHdpZHRoIGluIE1icHMgb2YgdGhlIGJhbmR3aWR0aCBwYWNrYWdlLiBUaGUgYmFuZHdpZHRoIGNhbm5vdCBiZSBsZXNzIHRoYW4gMiBNYnBzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhbmR3aWR0aDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ2VvZ3JhcGhpY1JlZ2lvbkFJZDogVGhlIG90aGVyIGFyZWEgQSB0byBjb25uZWN0LlxuICAgICAqIFZhbGlkIHZhbHVlOiBDaGluYSB8IE5vcnRoLUFtZXJpY2EgfCBBc2lhLVBhY2lmaWMgfCBFdXJvcGUgfCBBdXN0cmFsaWFcbiAgICAgKi9cbiAgICByZWFkb25seSBnZW9ncmFwaGljUmVnaW9uQUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBnZW9ncmFwaGljUmVnaW9uQklkOiBUaGUgb3RoZXIgYXJlYSBCIHRvIGNvbm5lY3QuXG4gICAgICogVmFsaWQgdmFsdWU6IENoaW5hIHwgTm9ydGgtQW1lcmljYSB8IEFzaWEtUGFjaWZpYyB8IEV1cm9wZSB8IEF1c3RyYWxpYVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdlb2dyYXBoaWNSZWdpb25CSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9QYXk6IFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBwYXkgdGhlIGJpbGwuIFZhbGlkIHZhbHVlOlxuICAgICAqIHRydWVcbiAgICAgKiBmYWxzZSAoRGVmYXVsdClcbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUGF5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9SZW5ldzogSW5kaWNhdGVzIHdoZXRoZXIgYXV0b21hdGljIHJlbmV3YWwgaXMgZW5hYmxlZC4gVmFsaWQgdmFsdWVzOnRydWU6IEF1dG9tYXRpYyByZW5ld2FsIGlzIGVuYWJsZWQuZmFsc2U6IEF1dG9tYXRpYyByZW5ld2FsIGlzIG5vdCBlbmFibGVkLiBZb3UgbXVzdCByZW5ldyB0aGUgaW5zdGFuY2UgbWFudWFsbHkuRGVmYXVsdCB2YWx1ZTogZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9SZW5ld0R1cmF0aW9uOiBEdXJhdGlvbiBvZiBlYWNoIGF1dG9tYXRpYyByZW5ld2Fscy4gSXQgdGFrZXMgZWZmZWN0IHdoZW4gQXV0b1JlbmV3IGlzIHRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3RHVyYXRpb24/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBiYW5kd2lkdGhQYWNrYWdlQ2hhcmdlVHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kLiBWYWxpZCB2YWx1ZTogUFJFUEFZLCBQT1NUUEFZIChEZWZhdWx0KVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhbmR3aWR0aFBhY2thZ2VDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYmFuZHdpZHRoIHBhY2thZ2UuXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIGNhbiBjb250YWluIFsyLDI1Nl0gY2hhcmFjdGVycywgbnVtYmVycywgdW5kZXJzY29yZXMsIGFuZCBoeXBoZW5zLCBhbmQgdGhlIG5hbWUgbXVzdCBzdGFydCB3aXRoIEVuZ2xpc2ggbGV0dGVycywgYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgYmFuZHdpZHRoIHBhY2thZ2UuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gMi0xMjggY2hhcmFjdGVycyBpbmNsdWRpbmcgYS16LCBBLVosIDAtOSwgcGVyaW9kcywgdW5kZXJsaW5lcywgYW5kIGh5cGhlbnMuIEl0IG11c3Qgc3RhcnQgd2l0aCBFbmdsaXNoIGxldHRlcnMsIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSBwdXJjaGFzZSBwZXJpb2QuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJpY2luZ0N5Y2xlOiBUaGUgcHJpY2luZyBjeWNsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmljaW5nQ3ljbGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q0VOOjpDZW5CYW5kd2lkdGhQYWNrYWdlYFxuICovXG5leHBvcnQgY2xhc3MgQ2VuQmFuZHdpZHRoUGFja2FnZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2VuQmFuZHdpZHRoUGFja2FnZUlkOiBUaGUgSUQgb2YgdGhlIGJhbmR3aWR0aCBwYWNrYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2VuQmFuZHdpZHRoUGFja2FnZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q0VOOjpDZW5CYW5kd2lkdGhQYWNrYWdlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDZW5CYW5kd2lkdGhQYWNrYWdlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQ2VuQmFuZHdpZHRoUGFja2FnZSA9IG5ldyBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYmFuZHdpZHRoUGFja2FnZUNoYXJnZVR5cGU6IHByb3BzLmJhbmR3aWR0aFBhY2thZ2VDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBnZW9ncmFwaGljUmVnaW9uQklkOiBwcm9wcy5nZW9ncmFwaGljUmVnaW9uQklkLFxuICAgICAgICAgICAgZ2VvZ3JhcGhpY1JlZ2lvbkFJZDogcHJvcHMuZ2VvZ3JhcGhpY1JlZ2lvbkFJZCxcbiAgICAgICAgICAgIHByaWNpbmdDeWNsZTogcHJvcHMucHJpY2luZ0N5Y2xlID09PSB1bmRlZmluZWQgfHwgcHJvcHMucHJpY2luZ0N5Y2xlID09PSBudWxsID8gJ01vbnRoJyA6IHByb3BzLnByaWNpbmdDeWNsZSxcbiAgICAgICAgICAgIGF1dG9SZW5ldzogcHJvcHMuYXV0b1JlbmV3LFxuICAgICAgICAgICAgYmFuZHdpZHRoOiBwcm9wcy5iYW5kd2lkdGgsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBlcmlvZCA9PT0gbnVsbCA/IDEgOiBwcm9wcy5wZXJpb2QsXG4gICAgICAgICAgICBhdXRvUGF5OiBwcm9wcy5hdXRvUGF5ID09PSB1bmRlZmluZWQgfHwgcHJvcHMuYXV0b1BheSA9PT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuYXV0b1BheSxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICBhdXRvUmVuZXdEdXJhdGlvbjogcHJvcHMuYXV0b1JlbmV3RHVyYXRpb24sXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQ2VuQmFuZHdpZHRoUGFja2FnZTtcbiAgICAgICAgdGhpcy5hdHRyQ2VuQmFuZHdpZHRoUGFja2FnZUlkID0gcm9zQ2VuQmFuZHdpZHRoUGFja2FnZS5hdHRyQ2VuQmFuZHdpZHRoUGFja2FnZUlkO1xuICAgIH1cbn1cbiJdfQ==