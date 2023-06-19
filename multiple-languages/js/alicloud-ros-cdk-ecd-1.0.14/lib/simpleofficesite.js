"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleOfficeSite = exports.SimpleOfficeSiteProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecd_generated_1 = require("./ecd.generated");
Object.defineProperty(exports, "SimpleOfficeSiteProperty", { enumerable: true, get: function () { return ecd_generated_1.RosSimpleOfficeSite; } });
/**
 * A ROS resource type:  `ALIYUN::ECD::SimpleOfficeSite`
 */
class SimpleOfficeSite extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECD::SimpleOfficeSite`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlb2ZmaWNlc2l0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbXBsZW9mZmljZXNpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFzRDtBQUV0Qix5R0FGdkIsbUNBQW1CLE9BRTRCO0FBb0Z4RDs7R0FFRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZOUM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUErQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDNUgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLG1CQUFtQixHQUFHLElBQUksbUNBQW1CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1NBQ25ELEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUM7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0lBQ2pFLENBQUM7Q0FDSjtBQXZDRCw0Q0F1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTaW1wbGVPZmZpY2VTaXRlIH0gZnJvbSAnLi9lY2QuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2ltcGxlT2ZmaWNlU2l0ZSBhcyBTaW1wbGVPZmZpY2VTaXRlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVDRDo6U2ltcGxlT2ZmaWNlU2l0ZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVPZmZpY2VTaXRlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFuZHdpZHRoOiBUaGUgbWF4aW11bSBwdWJsaWMgYmFuZHdpZHRoLiBWYWx1ZSByYW5nZTogMTAgdG8gMjAwLiBVbml0OiBNYml0L3MuIFRoaXMgcGFyYW1ldGVyIGlzIGF2YWlsYWJsZSBpZiB5b3Ugc2V0IEVuYWJsZUludGVybmV0QWNjZXNzIHRvIHRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFuZHdpZHRoPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2VuSWQ6IFRoZSBJRCBvZiB0aGUgQ2xvdWQgRW50ZXJwcmlzZSBOZXR3b3JrIChDRU4pIGluc3RhbmNlLlxuICAgICAqIE5vdGVJZiB5b3Ugd2FudCB0byBjb25uZWN0IHRvIHlvdXIgY2xvdWQgZGVza3RvcHMgb3ZlciBhIFZQQywgeW91IGNhbiBhdHRhY2ggdGhlIG5ldHdvcmsgb2YgdGhlIHdvcmtzcGFjZSB0byB0aGUgQ0VOIGluc3RhbmNlLiBUaGUgQ0VOIGluc3RhbmNlIGlzIGNvbm5lY3RlZCB0byB0aGUgb24tcHJlbWlzZXMgbmV0d29yayBvdmVyIFZQTiBHYXRld2F5IG9yIEV4cHJlc3MgQ29ubmVjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZW5JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNlbk93bmVySWQ6IFRoZSBJRCBvZiB0aGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50IHRvIHdoaWNoIHRoZSBDbG91ZCBFbnRlcnByaXNlIE5ldHdvcmsgKENFTikgaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKiBJZiB5b3UgZG8gbm90IHNwZWNpZnkgdGhlIENlbklkIHBhcmFtZXRlciwgb3IgdGhlIENFTiBpbnN0YW5jZSB0aGF0IGlzIHNwZWNpZmllZCBieSB0aGUgQ2VuSWQgcGFyYW1ldGVyIGJlbG9uZ3MgdG8gdGhlIGN1cnJlbnQgQWxpYmFiYSBDbG91ZCBhY2NvdW50LCBza2lwIHRoaXMgcGFyYW1ldGVyLlxuICAgICAqIElmIHlvdSBzcGVjaWZ5IHRoZSBDZW5JZCBwYXJhbWV0ZXIgYW5kIHRoZSBDRU4gaW5zdGFuY2UgdGhhdCB5b3Ugc3BlY2lmeSBmb3IgdGhlIENlbklkIHBhcmFtZXRlciBiZWxvbmdzIHRvIGFub3RoZXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50LCBlbnRlciB0aGUgSUQgb2YgdGhlIEFsaWJhYmEgQ2xvdWQgYWNjb3VudC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZW5Pd25lcklkPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2lkckJsb2NrOiBUaGUgSVB2NCBDSURSIGJsb2NrIGluIHRoZSBzZWN1cmUgb2ZmaWNlIG5ldHdvcmsgb2YgdGhlIHdvcmtzcGFjZS4gVGhlIElQdjQgQ0lEUiBibG9jayB0aGF0IHRoZSBzeXN0ZW0gdXNlcyB0byBjcmVhdGUgYSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQykgZm9yIHRoZSB3b3Jrc3BhY2UuIFdlIHJlY29tbWVuZCB0aGF0IHlvdSBzZXQgdGhlIElQdjQgQ0lEUiBibG9jayB0byAxMC4wLjAuMC8xMiwgMTcyLjE2LjAuMC8xMiwgMTkyLjE2OC4wLjAvMTYsIG9yIGEgc3VibmV0IG9mIHRoZXNlIENJRFIgYmxvY2tzLiBJZiB5b3Ugc2V0IHRoZSBJUHY0IENJRFIgYmxvY2sgdG8gMTAuMC4wLjAvMTIgb3IgMTcyLjE2LjAuMC8xMiwgdGhlIG1hc2sgaXMgMTIyNCBiaXRzIGluIGxlbmd0aC4gSWYgeW91IHNldCB0aGUgSVB2NCBDSURSIGJsb2NrIHRvIDE5Mi4xNjguMC4wLzE2LCB0aGUgbWFzayBpcyAxNjI0IGJpdHMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNpZHJCbG9jaz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNsb3VkQm94T2ZmaWNlU2l0ZTogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHdvcmtzcGFjZSBpcyBhIENsb3VkQm94LWJhc2VkIHdvcmtzcGFjZS5cbiAgICAgKiBFbnVtZXJhdGlvbiBWYWx1ZTpcbiAgICAgKiB0cnVlXG4gICAgICogZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBjbG91ZEJveE9mZmljZVNpdGU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVza3RvcEFjY2Vzc1R5cGU6IFRoZSBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGNvbm5lY3QgdGhlIGNsaWVudCB0byBjbG91ZCBkZXNrdG9wcy5cbiAgICAgKiBOb3RlVlBDIGNvbm5lY3Rpb25zIGFyZSBlc3RhYmxpc2hlZCBieSB1c2luZyBBbGliYWJhIENsb3VkIFByaXZhdGVMaW5rLiBZb3UgY2FuIHVzZSBQcml2YXRlTGluayBmb3IgZnJlZS4gV2hlbiB5b3Ugc2V0IHRoaXMgcGFyYW1ldGVyIHRvIFZQQyBvciBBbnksIFByaXZhdGVMaW5rIGlzIGF1dG9tYXRpY2FsbHkgYWN0aXZhdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2t0b3BBY2Nlc3NUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5hYmxlQWRtaW5BY2Nlc3M6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGdyYW50IHRoZSBwZXJtaXNzaW9ucyBvZiB0aGUgbG9jYWwgYWRtaW5pc3RyYXRvciB0byB0aGUgcmVndWxhciB1c2VyIG9mIHRoZSBjbG91ZCBkZXNrdG9wLlxuICAgICAqIEVudW1lcmF0aW9uIFZhbHVlOlxuICAgICAqIHRydWVcbiAgICAgKiBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZUFkbWluQWNjZXNzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuYWJsZUludGVybmV0QWNjZXNzOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgSW50ZXJuZXQgYWNjZXNzLiBCeSBkZWZhdWx0LCBJbnRlcm5ldCBhY2Nlc3MgaXMgbm90IGVuYWJsZWQuXG4gICAgICogRW51bWVyYXRpb24gVmFsdWU6XG4gICAgICogdHJ1ZVxuICAgICAqIGZhbHNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlSW50ZXJuZXRBY2Nlc3M/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmVlZFZlcmlmeVplcm9EZXZpY2U6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSB0cnVzdGVkIGRldmljZSB2ZXJpZmljYXRpb24uXG4gICAgICogRW51bWVyYXRpb24gVmFsdWU6XG4gICAgICogdHJ1ZVxuICAgICAqIGZhbHNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmVlZFZlcmlmeVplcm9EZXZpY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb2ZmaWNlU2l0ZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSB3b3Jrc3BhY2UuIFRoZSBuYW1lIG11c3QgYmUgMiB0byAyNTUgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBhbmQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy4gVGhlIG5hbWUgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBjb2xvbnMgKDopLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBvZmZpY2VTaXRlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZlcmlmeUNvZGU6IFRoZSB2ZXJpZmljYXRpb24gY29kZS4gSWYgdGhlIENFTiBpbnN0YW5jZSB0aGF0IHlvdSBzcGVjaWZ5IGZvciB0aGUgQ2VuSWQgcGFyYW1ldGVyIGJlbG9uZ3MgdG8gYW5vdGhlciBBbGliYWJhIENsb3VkIGFjY291bnQsIHlvdSBtdXN0IGNhbGwgdGhlIFNlbmRWZXJpZnlDb2RlIG9wZXJhdGlvbiB0byBvYnRhaW4gdGhlIHZlcmlmaWNhdGlvbiBjb2RlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZlcmlmeUNvZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSBJRHMgb2YgdGhlIHZTd2l0Y2hlcyBpbiB0aGUgVlBDLiBUaGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCB3aGVuIHlvdSBjcmVhdGUgYSBDbG91ZEJveC1iYXNlZCB3b3Jrc3BhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpFQ0Q6OlNpbXBsZU9mZmljZVNpdGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVPZmZpY2VTaXRlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBPZmZpY2VTaXRlSWQ6IFRoZSBJRCBvZiB0aGUgd29ya3NwYWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT2ZmaWNlU2l0ZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUNEOjpTaW1wbGVPZmZpY2VTaXRlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTaW1wbGVPZmZpY2VTaXRlUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NTaW1wbGVPZmZpY2VTaXRlID0gbmV3IFJvc1NpbXBsZU9mZmljZVNpdGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICB2ZXJpZnlDb2RlOiBwcm9wcy52ZXJpZnlDb2RlLFxuICAgICAgICAgICAgbmVlZFZlcmlmeVplcm9EZXZpY2U6IHByb3BzLm5lZWRWZXJpZnlaZXJvRGV2aWNlLFxuICAgICAgICAgICAgY2VuT3duZXJJZDogcHJvcHMuY2VuT3duZXJJZCxcbiAgICAgICAgICAgIGJhbmR3aWR0aDogcHJvcHMuYmFuZHdpZHRoLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBlbmFibGVBZG1pbkFjY2VzczogcHJvcHMuZW5hYmxlQWRtaW5BY2Nlc3MsXG4gICAgICAgICAgICBjbG91ZEJveE9mZmljZVNpdGU6IHByb3BzLmNsb3VkQm94T2ZmaWNlU2l0ZSxcbiAgICAgICAgICAgIGNlbklkOiBwcm9wcy5jZW5JZCxcbiAgICAgICAgICAgIG9mZmljZVNpdGVOYW1lOiBwcm9wcy5vZmZpY2VTaXRlTmFtZSxcbiAgICAgICAgICAgIGRlc2t0b3BBY2Nlc3NUeXBlOiBwcm9wcy5kZXNrdG9wQWNjZXNzVHlwZSxcbiAgICAgICAgICAgIGNpZHJCbG9jazogcHJvcHMuY2lkckJsb2NrLFxuICAgICAgICAgICAgZW5hYmxlSW50ZXJuZXRBY2Nlc3M6IHByb3BzLmVuYWJsZUludGVybmV0QWNjZXNzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1NpbXBsZU9mZmljZVNpdGU7XG4gICAgICAgIHRoaXMuYXR0ck9mZmljZVNpdGVJZCA9IHJvc1NpbXBsZU9mZmljZVNpdGUuYXR0ck9mZmljZVNpdGVJZDtcbiAgICB9XG59XG4iXX0=