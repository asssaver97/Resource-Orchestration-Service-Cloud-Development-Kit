"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrdsInstance = exports.DrdsInstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const drds_generated_1 = require("./drds.generated");
Object.defineProperty(exports, "DrdsInstanceProperty", { enumerable: true, get: function () { return drds_generated_1.RosDrdsInstance; } });
/**
 * A ROS resource type:  `ALIYUN::DRDS::DrdsInstance`
 */
class DrdsInstance extends ros.Resource {
    /**
     * Create a new `ALIYUN::DRDS::DrdsInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDrdsInstance = new drds_generated_1.RosDrdsInstance(this, id, {
            description: props.description,
            zoneId: props.zoneId,
            pricingCycle: props.pricingCycle,
            instanceSeries: props.instanceSeries,
            quantity: props.quantity,
            specification: props.specification,
            duration: props.duration,
            payType: props.payType,
            vswitchId: props.vswitchId,
            type: props.type,
            mySqlVersion: props.mySqlVersion ? props.mySqlVersion : '5',
            vpcId: props.vpcId,
            isAutoRenew: props.isAutoRenew,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDrdsInstance;
        this.attrDrdsInstanceId = rosDrdsInstance.attrDrdsInstanceId;
        this.attrInternetEndpoint = rosDrdsInstance.attrInternetEndpoint;
        this.attrIntranetEndpoint = rosDrdsInstance.attrIntranetEndpoint;
        this.attrOrderId = rosDrdsInstance.attrOrderId;
    }
}
exports.DrdsInstance = DrdsInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJkc2luc3RhbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHJkc2luc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxxREFBbUQ7QUFFdkIscUdBRm5CLGdDQUFlLE9BRXdCO0FBOEVoRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBMkIxQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXdCLEVBQUUsbUNBQTJDLElBQUk7UUFDbkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGVBQWUsR0FBRyxJQUFJLGdDQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDM0QsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsZUFBZSxDQUFDLG9CQUFvQixDQUFDO1FBQ2pFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxlQUFlLENBQUMsb0JBQW9CLENBQUM7UUFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDO0lBQ25ELENBQUM7Q0FDSjtBQTNERCxvQ0EyREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEcmRzSW5zdGFuY2UgfSBmcm9tICcuL2RyZHMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zRHJkc0luc3RhbmNlIGFzIERyZHNJbnN0YW5jZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpEUkRTOjpEcmRzSW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRHJkc0luc3RhbmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIHRoZSBEUkRTIGluc3RhbmNlLCAyLTEyOCBjaGFyYWN0ZXJzXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlU2VyaWVzOiBkcmRzLnNuMS40YzhnIFN0YXJ0ZXIgRWRpdGlvbjsgZHJkcy5zbjEuOGMxNmcgU3RhbmRhcmQgRWRpdGlvbjsgZHJkcy5zbjEuMTZjMzJnIEJ1c2luZXNzIEVkaXRpb247IGRyZHMuc24xLjMyYzY0ZyBVbHRpbWF0ZSBFZGl0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VTZXJpZXM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBheVR5cGU6IEZvciB0aGUgdHlwZSBvZiBwYXltZW50LCBzZWUgXCJQYXltZW50IFR5cGUgUGFyYW1ldGVyIFRhYmxlXCJcbiAgICAgKi9cbiAgICByZWFkb25seSBwYXlUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBxdWFudGl0eTogUHVyY2hhc2UgcXVhbnRpdHlcbiAgICAgKi9cbiAgICByZWFkb25seSBxdWFudGl0eTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BlY2lmaWNhdGlvbjogVGhlIGV4YW1wbGUgc3BlY2lmaWNhdGlvbiwgZm9yIGV4YW1wbGUsIGRyZHMuc24xLjRjOGcuOEMxNkcsIGNvbnNpc3RzIG9mIHRoZSBEUkRTIGluc3RhbmNlIHNlcmllcyAoZHJkcy5zbjEuNGM4ZykgcGx1cyBhIHNwZWNpZmljIGV4YW1wbGUgc3BlY2lmaWNhdGlvbiAoOEMxNkcpLiBGb3IgdGhlIERSRFMgaW5zdGFuY2Ugc3BlY2lmaWNhdGlvbiB2YWx1ZSByYW5nZSwgc2VlOiBEaXN0cmlidXRlZCBSZWxhdGlvbmFsIERhdGFiYXNlIFNlcnZpY2UgU3BlY2lmaWNhdGlvbnMgYW5kIFByaWNpbmdcbiAgICAgKi9cbiAgICByZWFkb25seSBzcGVjaWZpY2F0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0eXBlOiBJbnN0YW5jZSB0eXBlLCBpbnN0YW5jZSB0eXBlIDAgLSBzaGFyZWQgaW5zdGFuY2UgMSAtIGV4Y2x1c2l2ZSBpbnN0YW5jZSwgaW4gYWRkaXRpb24sIHRoaXMgcGFyYW1ldGVyIGNhbiBhbHNvIHBhc3MgUFJJVkFURSBhbmQgUFVCTElDIHRvIHJlcHJlc2VudCBleGNsdXNpdmUgaW5zdGFuY2UgYW5kIHNoYXJlZCBpbnN0YW5jZSByZXNwZWN0aXZlbHlcbiAgICAgKi9cbiAgICByZWFkb25seSB0eXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IEF2YWlsYWJpbGl0eSB6b25lLCBhbiBhdmFpbGFibGUgem9uZSBiZWxvbmdzIHRvIGEgY2VydGFpbiB6b25lLCBzdWNoIGFzIEhhbmd6aG91IEF2YWlsYWJpbGl0eSBab25lIEEgKGNuLWhhbmd6aG91LWEpIGJlbG9uZ3MgdG8gdGhlIHJlZ2lvbiBIYW5nemhvdSAoY24taGFuZ3pob3UpXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkdXJhdGlvbjogVGhlIG51bWJlciBvZiBjeWNsZXMgb3JkZXJlZC4gV2hlbiBQcmljaW5nQ3ljbGU9eWVhciwgdGhlIHZhbHVlIGlzIDEtMzsgd2hlbiBQcmljaW5nQ3ljbGU9bW9udGgsIHRoZSB2YWx1ZSBpcyAxLTkuIFRoZSBwYXJhbWV0ZXIgdGFrZXMgZWZmZWN0IHdoZW4gdGhlIHBheW1lbnQgdHlwZSBpcyBkcmRzUHJlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGR1cmF0aW9uPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaXNBdXRvUmVuZXc6IFdoZXRoZXIgdG8gcmVuZXcgdGhlIGZlZSBhdXRvbWF0aWNhbGx5LCBpZiBpdCBpcyBwdXJjaGFzZWQgb24gYSBtb250aGx5IGJhc2lzLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgcmVuZXcgZm9yIG9uZSBtb250aCwgYW5kIGlmIGl0IGlzIHB1cmNoYXNlZCBvbiBhbiBhbm51YWwgYmFzaXMsIGl0IHdpbGwgYXV0b21hdGljYWxseSByZW5ldyBmb3Igb25lIHllYXIuIFRoZSBwYXJhbWV0ZXIgdGFrZXMgZWZmZWN0IHdoZW4gdGhlIHBheW1lbnQgdHlwZSBpcyBkcmRzUHJlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzQXV0b1JlbmV3PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG15U3FsVmVyc2lvbjogVGhlIE15U1FMIHByb3RvY29sIHZlcnNpb24gc3VwcG9ydGVkIGJ5IERSRFMuIFZhbGlkIHZhbHVlczogNSBhbmQgOC4gRGVmYXVsdCB2YWx1ZTogNS4gVGhpcyBwYXJhbWV0ZXIgaXMgdmFsaWQgb25seSB3aGVuIHRoZSBwcmltYXJ5IGluc3RhbmNlIGlzIGNyZWF0ZWQuIFRoZSByZWFkLW9ubHkgaW5zdGFuY2UgaXMgdGhlIHNhbWUgYXMgdGhlIHByaW1hcnkgaW5zdGFuY2UgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBteVNxbFZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcmljaW5nQ3ljbGU6IFRoZSB1bml0IG9mIHRoZSBvcmRlciBwZXJpb2QsIHllYXI6IHllYXIsIG1vbnRoOiBtb250aC4gVGhlIHBhcmFtZXRlciB0YWtlcyBlZmZlY3Qgd2hlbiB0aGUgcGF5bWVudCB0eXBlIGlzIGRyZHNQcmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpY2luZ0N5Y2xlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zRHJkc0luc3RhbmNlLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFZpcnR1YWwgcHJpdmF0ZSBuZXR3b3JrIElELCBtdXN0IGJlIHNwZWNpZmllZCB3aGVuIGNyZWF0aW5nIGEgRFJEUyBmb3IgVlBDIG5ldHdvcmsgdHlwZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnN3aXRjaElkOiBWaXJ0dWFsIHN3aXRjaCBJRCwgbXVzdCBiZSBzcGVjaWZpZWQgd2hlbiBjcmVhdGluZyBhIERSRFMgZm9yIFZQQyBuZXR3b3JrIHR5cGVcbiAgICAgKi9cbiAgICByZWFkb25seSB2c3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkRSRFM6OkRyZHNJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGNsYXNzIERyZHNJbnN0YW5jZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRHJkc0luc3RhbmNlSWQ6IGluc3RhbmNlIGlkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEcmRzSW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEludGVybmV0RW5kcG9pbnQ6IFB1YmxpYyBlbmRwb2ludFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW50ZXJuZXRFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEludHJhbmV0RW5kcG9pbnQ6IFZQQyBlbmRwb2ludFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW50cmFuZXRFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE9yZGVySWQ6IG9yZGVyIG51bWJlclxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT3JkZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkRSRFM6OkRyZHNJbnN0YW5jZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRHJkc0luc3RhbmNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zRHJkc0luc3RhbmNlID0gbmV3IFJvc0RyZHNJbnN0YW5jZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHpvbmVJZDogcHJvcHMuem9uZUlkLFxuICAgICAgICAgICAgcHJpY2luZ0N5Y2xlOiBwcm9wcy5wcmljaW5nQ3ljbGUsXG4gICAgICAgICAgICBpbnN0YW5jZVNlcmllczogcHJvcHMuaW5zdGFuY2VTZXJpZXMsXG4gICAgICAgICAgICBxdWFudGl0eTogcHJvcHMucXVhbnRpdHksXG4gICAgICAgICAgICBzcGVjaWZpY2F0aW9uOiBwcm9wcy5zcGVjaWZpY2F0aW9uLFxuICAgICAgICAgICAgZHVyYXRpb246IHByb3BzLmR1cmF0aW9uLFxuICAgICAgICAgICAgcGF5VHlwZTogcHJvcHMucGF5VHlwZSxcbiAgICAgICAgICAgIHZzd2l0Y2hJZDogcHJvcHMudnN3aXRjaElkLFxuICAgICAgICAgICAgdHlwZTogcHJvcHMudHlwZSxcbiAgICAgICAgICAgIG15U3FsVmVyc2lvbjogcHJvcHMubXlTcWxWZXJzaW9uID8gcHJvcHMubXlTcWxWZXJzaW9uIDogJzUnLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgaXNBdXRvUmVuZXc6IHByb3BzLmlzQXV0b1JlbmV3LFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NEcmRzSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuYXR0ckRyZHNJbnN0YW5jZUlkID0gcm9zRHJkc0luc3RhbmNlLmF0dHJEcmRzSW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRySW50ZXJuZXRFbmRwb2ludCA9IHJvc0RyZHNJbnN0YW5jZS5hdHRySW50ZXJuZXRFbmRwb2ludDtcbiAgICAgICAgdGhpcy5hdHRySW50cmFuZXRFbmRwb2ludCA9IHJvc0RyZHNJbnN0YW5jZS5hdHRySW50cmFuZXRFbmRwb2ludDtcbiAgICAgICAgdGhpcy5hdHRyT3JkZXJJZCA9IHJvc0RyZHNJbnN0YW5jZS5hdHRyT3JkZXJJZDtcbiAgICB9XG59XG4iXX0=