"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBInstance = exports.DBInstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const polardbx_generated_1 = require("./polardbx.generated");
Object.defineProperty(exports, "DBInstanceProperty", { enumerable: true, get: function () { return polardbx_generated_1.RosDBInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PolarDBX::DBInstance`, which is used to create a PolarDB-X 1.0 instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-dbinstance
 */
class DBInstance extends ros.Resource {
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
        const rosDBInstance = new polardbx_generated_1.RosDBInstance(this, id, {
            topologyType: props.topologyType,
            engineVersion: props.engineVersion,
            resourceGroupId: props.resourceGroupId,
            vpcId: props.vpcId,
            vSwitchId: props.vSwitchId,
            autoRenew: props.autoRenew,
            period: props.period,
            payType: props.payType === undefined || props.payType === null ? 'POSTPAY' : props.payType,
            dbNodeClass: props.dbNodeClass,
            secondaryZone: props.secondaryZone,
            tertiaryZone: props.tertiaryZone,
            securityIpConfig: props.securityIpConfig,
            dbNodeCount: props.dbNodeCount,
            usedTime: props.usedTime,
            primaryZone: props.primaryZone,
            dbInstanceDescription: props.dbInstanceDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstance;
        this.attrConnectionString = rosDBInstance.attrConnectionString;
        this.attrDbInstanceName = rosDBInstance.attrDbInstanceName;
        this.attrOrderId = rosDBInstance.attrOrderId;
        this.attrPort = rosDBInstance.attrPort;
    }
}
exports.DBInstance = DBInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJpbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRiaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDZEQUFxRDtBQUUzQixtR0FGakIsa0NBQWEsT0FFc0I7QUF5RjVDOzs7O0dBSUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxHQUFHLENBQUMsUUFBUTtJQTBCeEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sYUFBYSxHQUFHLElBQUksa0NBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9DLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDMUYsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1NBQ3JELEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUMsb0JBQW9CLENBQUM7UUFDL0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztRQUMzRCxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7Q0FDSjtBQTlERCxnQ0E4REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEQkluc3RhbmNlIH0gZnJvbSAnLi9wb2xhcmRieC5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NEQkluc3RhbmNlIGFzIERCSW5zdGFuY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERCSW5zdGFuY2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcG9sYXJkYngtZGJpbnN0YW5jZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERCSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYk5vZGVDbGFzczogVGhlIHNwZWNpZmljYXRpb24gb2YgdGhlIG5vZGVzIGluIHRoZSBpbnN0YW5jZSB5b3Ugd2FudCB0byBjcmVhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJOb2RlQ2xhc3M6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiTm9kZUNvdW50OiBUaGUgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBpbnN0YW5jZSB5b3Ugd2FudCB0byBjcmVhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJOb2RlQ291bnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuZ2luZVZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSBlbmdpbmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5naW5lVmVyc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJpbWFyeVpvbmU6IFRoZSBwcmltYXJ5IHpvbmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpbWFyeVpvbmU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRvcG9sb2d5VHlwZTogVGhlIHRvcG9sb2d5IHR5cGUgb2YgdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6IDNhem9uZXM6IFRoZSBpbnN0YW5jZSBpcyBkZXBsb3llZCBpbiB0aHJlZSB6b25lcy4gMWF6b25lOiBUaGUgaW5zdGFuY2UgaXMgZGVwbG95ZWQgaW4gb25seSBvbmUgem9uZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0b3BvbG9neVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQyB0byB3aGljaCB0aGUgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgSUQgb2YgdGhlIHZTd2l0Y2guXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXc6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSBhdXRvLXJlbmV3YWwgZm9yIHRoZSBpbnN0YW5jZS4gRGVmYXVsdCB2YWx1ZTogdHJ1ZS4gdHJ1ZTogRW5hYmxlIGF1dG8tcmVuZXdhbC4gZmFsc2U6IERpc2FibGUgYXV0by1yZW5ld2FsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZW5ldz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZURlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGF5VHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kIG9mIHRoZSBpbnN0YW5jZS4gRGVmYXVsdDogUE9TVFBBWS5WYWxpZCB2YWx1ZXM6IFBSRVBBWTogc3Vic2NyaXB0aW9uIFBPU1RQQVk6IHBheS1hcy15b3UtZ29cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXlUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOiBUaGUgdW5pdCBvZiB0aGUgYmlsbGluZyBjeWNsZSBmb3IgdGhlIGluc3RhbmNlLiBUaGUgdmFsaWQgdmFsdWVzIHZhcnkgYmFzZWQgb24gdGhlIGJpbGxpbmcgbWV0aG9kLiBJZiB5b3UgdXNlIHRoZSBzdWJzY3JpcHRpb24gYmlsbGluZyBtZXRob2QsIHNldCB0aGUgdmFsdWUgdG8gWWVhciBvciBNb250aC4gSWYgeW91IHVzZSB0aGUgcGF5LWFzLXlvdS1nbyBiaWxsaW5nIG1ldGhvZCwgdGhlIHZhbHVlIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHRvIEhvdXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgcmVzb3VyY2UgZ3JvdXBcbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWNvbmRhcnlab25lOiBUaGUgc2Vjb25kYXJ5IHpvbmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2Vjb25kYXJ5Wm9uZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3VyaXR5SXBDb25maWc6IEluc3RhbmNlIHdoaXRlbGlzdCBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5SXBDb25maWc/OiBSb3NEQkluc3RhbmNlLlNlY3VyaXR5SXBDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRlcnRpYXJ5Wm9uZTogVGhlIHRlcnRpYXJ5IHpvbmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGVydGlhcnlab25lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlZFRpbWU6IFRoZSBzdWJzY3JpcHRpb24gcGVyaW9kIG9mIHRoZSBpbnN0YW5jZS4gVW5pdDogbW9udGggb3IgeWVhci4gTm90ZSBXaGVuIHBlcmlvZCBpcyBzZXQgdG8geWVhciwgdGhlIHN1cHBvcnRlZCB2YWx1ZXMgb2YgdGhpcyBwYXJhbWV0ZXIgYXJlIDEsIDIgYW5kIDMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlZFRpbWU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlBvbGFyREJYOjpEQkluc3RhbmNlYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBQb2xhckRCLVggMS4wIGluc3RhbmNlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zREJJbnN0YW5jZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXBvbGFyZGJ4LWRiaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIERCSW5zdGFuY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IERCSW5zdGFuY2VQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29ubmVjdGlvblN0cmluZzogSW50cmFuZXQgY29ubmVjdGlvbiBzdHJpbmcuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb25uZWN0aW9uU3RyaW5nOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJJbnN0YW5jZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBpbnN0YW5jZSB0aGF0IHlvdSBjcmVhdGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYkluc3RhbmNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE9yZGVySWQ6IFRoZSBJRCBvZiB0aGUgb3JkZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUG9ydDogSW50cmFuZXQgY29ubmVjdGlvbiBwb3J0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERCSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0RCSW5zdGFuY2UgPSBuZXcgUm9zREJJbnN0YW5jZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHRvcG9sb2d5VHlwZTogcHJvcHMudG9wb2xvZ3lUeXBlLFxuICAgICAgICAgICAgZW5naW5lVmVyc2lvbjogcHJvcHMuZW5naW5lVmVyc2lvbixcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBhdXRvUmVuZXc6IHByb3BzLmF1dG9SZW5ldyxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kLFxuICAgICAgICAgICAgcGF5VHlwZTogcHJvcHMucGF5VHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBheVR5cGUgPT09IG51bGwgPyAnUE9TVFBBWScgOiBwcm9wcy5wYXlUeXBlLFxuICAgICAgICAgICAgZGJOb2RlQ2xhc3M6IHByb3BzLmRiTm9kZUNsYXNzLFxuICAgICAgICAgICAgc2Vjb25kYXJ5Wm9uZTogcHJvcHMuc2Vjb25kYXJ5Wm9uZSxcbiAgICAgICAgICAgIHRlcnRpYXJ5Wm9uZTogcHJvcHMudGVydGlhcnlab25lLFxuICAgICAgICAgICAgc2VjdXJpdHlJcENvbmZpZzogcHJvcHMuc2VjdXJpdHlJcENvbmZpZyxcbiAgICAgICAgICAgIGRiTm9kZUNvdW50OiBwcm9wcy5kYk5vZGVDb3VudCxcbiAgICAgICAgICAgIHVzZWRUaW1lOiBwcm9wcy51c2VkVGltZSxcbiAgICAgICAgICAgIHByaW1hcnlab25lOiBwcm9wcy5wcmltYXJ5Wm9uZSxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VEZXNjcmlwdGlvbjogcHJvcHMuZGJJbnN0YW5jZURlc2NyaXB0aW9uLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0RCSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuYXR0ckNvbm5lY3Rpb25TdHJpbmcgPSByb3NEQkluc3RhbmNlLmF0dHJDb25uZWN0aW9uU3RyaW5nO1xuICAgICAgICB0aGlzLmF0dHJEYkluc3RhbmNlTmFtZSA9IHJvc0RCSW5zdGFuY2UuYXR0ckRiSW5zdGFuY2VOYW1lO1xuICAgICAgICB0aGlzLmF0dHJPcmRlcklkID0gcm9zREJJbnN0YW5jZS5hdHRyT3JkZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyUG9ydCA9IHJvc0RCSW5zdGFuY2UuYXR0clBvcnQ7XG4gICAgfVxufVxuIl19