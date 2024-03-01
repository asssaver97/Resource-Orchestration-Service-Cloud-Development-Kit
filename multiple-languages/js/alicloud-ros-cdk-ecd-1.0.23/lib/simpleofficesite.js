"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleOfficeSite = exports.SimpleOfficeSiteProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecd_generated_1 = require("./ecd.generated");
Object.defineProperty(exports, "SimpleOfficeSiteProperty", { enumerable: true, get: function () { return ecd_generated_1.RosSimpleOfficeSite; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECD::SimpleOfficeSite`, which is used to create a workspace of the convenience account type.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSimpleOfficeSite`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-simpleofficesite
 */
class SimpleOfficeSite extends ros.Resource {
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
        const rosSimpleOfficeSite = new ecd_generated_1.RosSimpleOfficeSite(this, id, {
            verifyCode: props.verifyCode,
            needVerifyZeroDevice: props.needVerifyZeroDevice,
            cenOwnerId: props.cenOwnerId,
            bandwidth: props.bandwidth,
            vSwitchId: props.vSwitchId,
            enableAdminAccess: props.enableAdminAccess,
            cloudBoxOfficeSite: props.cloudBoxOfficeSite,
            cenId: props.cenId,
            officeSiteName: props.officeSiteName,
            desktopAccessType: props.desktopAccessType,
            cidrBlock: props.cidrBlock,
            enableInternetAccess: props.enableInternetAccess,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSimpleOfficeSite;
        this.attrOfficeSiteId = rosSimpleOfficeSite.attrOfficeSiteId;
    }
}
exports.SimpleOfficeSite = SimpleOfficeSite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlb2ZmaWNlc2l0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbXBsZW9mZmljZXNpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFzRDtBQUV0Qix5R0FGdkIsbUNBQW1CLE9BRTRCO0FBcUZ4RDs7OztHQUlHO0FBQ0gsTUFBYSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVc5Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUErQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDNUgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLG1CQUFtQixHQUFHLElBQUksbUNBQW1CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1NBQ25ELEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUM7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0lBQ2pFLENBQUM7Q0FDSjtBQXhDRCw0Q0F3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTaW1wbGVPZmZpY2VTaXRlIH0gZnJvbSAnLi9lY2QuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2ltcGxlT2ZmaWNlU2l0ZSBhcyBTaW1wbGVPZmZpY2VTaXRlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBTaW1wbGVPZmZpY2VTaXRlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVjZC1zaW1wbGVvZmZpY2VzaXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlT2ZmaWNlU2l0ZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJhbmR3aWR0aDogVGhlIG1heGltdW0gcHVibGljIGJhbmR3aWR0aC4gVmFsdWUgcmFuZ2U6IDEwIHRvIDIwMC4gVW5pdDogTWJpdFxcL3MuIFRoaXMgcGFyYW1ldGVyIGlzIGF2YWlsYWJsZSBpZiB5b3Ugc2V0IEVuYWJsZUludGVybmV0QWNjZXNzIHRvIHRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFuZHdpZHRoPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2VuSWQ6IFRoZSBJRCBvZiB0aGUgQ2xvdWQgRW50ZXJwcmlzZSBOZXR3b3JrIChDRU4pIGluc3RhbmNlLlxuICAgICAqIE5vdGVJZiB5b3Ugd2FudCB0byBjb25uZWN0IHRvIHlvdXIgY2xvdWQgZGVza3RvcHMgb3ZlciBhIFZQQywgeW91IGNhbiBhdHRhY2ggdGhlIG5ldHdvcmsgb2YgdGhlIHdvcmtzcGFjZSB0byB0aGUgQ0VOIGluc3RhbmNlLiBUaGUgQ0VOIGluc3RhbmNlIGlzIGNvbm5lY3RlZCB0byB0aGUgb24tcHJlbWlzZXMgbmV0d29yayBvdmVyIFZQTiBHYXRld2F5IG9yIEV4cHJlc3MgQ29ubmVjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZW5JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNlbk93bmVySWQ6IFRoZSBJRCBvZiB0aGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50IHRvIHdoaWNoIHRoZSBDbG91ZCBFbnRlcnByaXNlIE5ldHdvcmsgKENFTikgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKiBJZiB5b3UgZG8gbm90IHNwZWNpZnkgdGhlIENlbklkIHBhcmFtZXRlciwgb3IgdGhlIENFTiBpbnN0YW5jZSB0aGF0IGlzIHNwZWNpZmllZCBieSB0aGUgQ2VuSWQgcGFyYW1ldGVyIGJlbG9uZ3MgdG8gdGhlIGN1cnJlbnQgQWxpYmFiYSBDbG91ZCBhY2NvdW50LCBza2lwIHRoaXMgcGFyYW1ldGVyLlxuICAgICAqIElmIHlvdSBzcGVjaWZ5IHRoZSBDZW5JZCBwYXJhbWV0ZXIgYW5kIHRoZSBDRU4gaW5zdGFuY2UgdGhhdCB5b3Ugc3BlY2lmeSBmb3IgdGhlIENlbklkIHBhcmFtZXRlciBiZWxvbmdzIHRvIGFub3RoZXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50LCBlbnRlciB0aGUgSUQgb2YgdGhlIEFsaWJhYmEgQ2xvdWQgYWNjb3VudC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZW5Pd25lcklkPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2lkckJsb2NrOiBUaGUgSVB2NCBDSURSIGJsb2NrIGluIHRoZSBzZWN1cmUgb2ZmaWNlIG5ldHdvcmsgb2YgdGhlIHdvcmtzcGFjZS4gVGhlIElQdjQgQ0lEUiBibG9jayB0aGF0IHRoZSBzeXN0ZW0gdXNlcyB0byBjcmVhdGUgYSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQykgZm9yIHRoZSB3b3Jrc3BhY2UuIFdlIHJlY29tbWVuZCB0aGF0IHlvdSBzZXQgdGhlIElQdjQgQ0lEUiBibG9jayB0byAxMC4wLjAuMFxcLzEyLCAxNzIuMTYuMC4wXFwvMTIsIDE5Mi4xNjguMC4wXFwvMTYsIG9yIGEgc3VibmV0IG9mIHRoZXNlIENJRFIgYmxvY2tzLiBJZiB5b3Ugc2V0IHRoZSBJUHY0IENJRFIgYmxvY2sgdG8gMTAuMC4wLjBcXC8xMiBvciAxNzIuMTYuMC4wXFwvMTIsIHRoZSBtYXNrIGlzIDEyMjQgYml0cyBpbiBsZW5ndGguIElmIHlvdSBzZXQgdGhlIElQdjQgQ0lEUiBibG9jayB0byAxOTIuMTY4LjAuMFxcLzE2LCB0aGUgbWFzayBpcyAxNjI0IGJpdHMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNpZHJCbG9jaz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNsb3VkQm94T2ZmaWNlU2l0ZTogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdvcmtzcGFjZSBpcyBhIENsb3VkQm94LWJhc2VkIHdvcmtzcGFjZS5cbiAgICAgKiBFbnVtZXJhdGlvbiBWYWx1ZTpcbiAgICAgKiB0cnVlXG4gICAgICogZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBjbG91ZEJveE9mZmljZVNpdGU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVza3RvcEFjY2Vzc1R5cGU6IFRoZSBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGNvbm5lY3QgdGhlIGNsaWVudCB0byBjbG91ZCBkZXNrdG9wcy5cbiAgICAgKiBOb3RlVlBDIGNvbm5lY3Rpb25zIGFyZSBlc3RhYmxpc2hlZCBieSB1c2luZyBBbGliYWJhIENsb3VkIFByaXZhdGVMaW5rLiBZb3UgY2FuIHVzZSBQcml2YXRlTGluayBmb3IgZnJlZS4gV2hlbiB5b3Ugc2V0IHRoaXMgcGFyYW1ldGVyIHRvIFZQQyBvciBBbnksIFByaXZhdGVMaW5rIGlzIGF1dG9tYXRpY2FsbHkgYWN0aXZhdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2t0b3BBY2Nlc3NUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5hYmxlQWRtaW5BY2Nlc3M6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGdyYW50IHRoZSBwZXJtaXNzaW9ucyBvZiB0aGUgbG9jYWwgYWRtaW5pc3RyYXRvciB0byB0aGUgcmVndWxhciB1c2VyIG9mIHRoZSBjbG91ZCBkZXNrdG9wLlxuICAgICAqIEVudW1lcmF0aW9uIFZhbHVlOlxuICAgICAqIHRydWVcbiAgICAgKiBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZUFkbWluQWNjZXNzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuYWJsZUludGVybmV0QWNjZXNzOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgSW50ZXJuZXQgYWNjZXNzLiBCeSBkZWZhdWx0LCBJbnRlcm5ldCBhY2Nlc3MgaXMgbm90IGVuYWJsZWQuXG4gICAgICogRW51bWVyYXRpb24gVmFsdWU6XG4gICAgICogdHJ1ZVxuICAgICAqIGZhbHNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlSW50ZXJuZXRBY2Nlc3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmVlZFZlcmlmeVplcm9EZXZpY2U6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSB0cnVzdGVkIGRldmljZSB2ZXJpZmljYXRpb24uXG4gICAgICogRW51bWVyYXRpb24gVmFsdWU6XG4gICAgICogdHJ1ZVxuICAgICAqIGZhbHNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmVlZFZlcmlmeVplcm9EZXZpY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb2ZmaWNlU2l0ZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSB3b3Jrc3BhY2UuIFRoZSBuYW1lIG11c3QgYmUgMiB0byAyNTUgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBhbmQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDpcXC9cXC8gb3IgaHR0cHM6XFwvXFwvLiBUaGUgbmFtZSBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGNvbG9ucyAoOiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9mZmljZVNpdGVOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdmVyaWZ5Q29kZTogVGhlIHZlcmlmaWNhdGlvbiBjb2RlLiBJZiB0aGUgQ0VOIGluc3RhbmNlIHRoYXQgeW91IHNwZWNpZnkgZm9yIHRoZSBDZW5JZCBwYXJhbWV0ZXIgYmVsb25ncyB0byBhbm90aGVyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudCwgeW91IG11c3QgY2FsbCB0aGUgU2VuZFZlcmlmeUNvZGUgb3BlcmF0aW9uIHRvIG9idGFpbiB0aGUgdmVyaWZpY2F0aW9uIGNvZGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmVyaWZ5Q29kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIElEcyBvZiB0aGUgdlN3aXRjaGVzIGluIHRoZSBWUEMuIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIHdoZW4geW91IGNyZWF0ZSBhIENsb3VkQm94LWJhc2VkIHdvcmtzcGFjZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkVDRDo6U2ltcGxlT2ZmaWNlU2l0ZWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgd29ya3NwYWNlIG9mIHRoZSBjb252ZW5pZW5jZSBhY2NvdW50IHR5cGUuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NTaW1wbGVPZmZpY2VTaXRlYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZWNkLXNpbXBsZW9mZmljZXNpdGVcbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZU9mZmljZVNpdGUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFNpbXBsZU9mZmljZVNpdGVQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT2ZmaWNlU2l0ZUlkOiBUaGUgSUQgb2YgdGhlIHdvcmtzcGFjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9mZmljZVNpdGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNpbXBsZU9mZmljZVNpdGVQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zU2ltcGxlT2ZmaWNlU2l0ZSA9IG5ldyBSb3NTaW1wbGVPZmZpY2VTaXRlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdmVyaWZ5Q29kZTogcHJvcHMudmVyaWZ5Q29kZSxcbiAgICAgICAgICAgIG5lZWRWZXJpZnlaZXJvRGV2aWNlOiBwcm9wcy5uZWVkVmVyaWZ5WmVyb0RldmljZSxcbiAgICAgICAgICAgIGNlbk93bmVySWQ6IHByb3BzLmNlbk93bmVySWQsXG4gICAgICAgICAgICBiYW5kd2lkdGg6IHByb3BzLmJhbmR3aWR0aCxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogcHJvcHMudlN3aXRjaElkLFxuICAgICAgICAgICAgZW5hYmxlQWRtaW5BY2Nlc3M6IHByb3BzLmVuYWJsZUFkbWluQWNjZXNzLFxuICAgICAgICAgICAgY2xvdWRCb3hPZmZpY2VTaXRlOiBwcm9wcy5jbG91ZEJveE9mZmljZVNpdGUsXG4gICAgICAgICAgICBjZW5JZDogcHJvcHMuY2VuSWQsXG4gICAgICAgICAgICBvZmZpY2VTaXRlTmFtZTogcHJvcHMub2ZmaWNlU2l0ZU5hbWUsXG4gICAgICAgICAgICBkZXNrdG9wQWNjZXNzVHlwZTogcHJvcHMuZGVza3RvcEFjY2Vzc1R5cGUsXG4gICAgICAgICAgICBjaWRyQmxvY2s6IHByb3BzLmNpZHJCbG9jayxcbiAgICAgICAgICAgIGVuYWJsZUludGVybmV0QWNjZXNzOiBwcm9wcy5lbmFibGVJbnRlcm5ldEFjY2VzcyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTaW1wbGVPZmZpY2VTaXRlO1xuICAgICAgICB0aGlzLmF0dHJPZmZpY2VTaXRlSWQgPSByb3NTaW1wbGVPZmZpY2VTaXRlLmF0dHJPZmZpY2VTaXRlSWQ7XG4gICAgfVxufVxuIl19