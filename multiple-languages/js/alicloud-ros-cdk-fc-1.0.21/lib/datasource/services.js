"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = exports.ServicesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const fc_generated_1 = require("./fc.generated");
Object.defineProperty(exports, "ServicesProperty", { enumerable: true, get: function () { return fc_generated_1.RosServices; } });
/**
 * A ROS resource type:  `DATASOURCE::FC::Services`
 */
class Services extends ros.Resource {
    /**
     * Create a new `DATASOURCE::FC::Services`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosServices = new fc_generated_1.RosServices(this, id, {
            prefix: props.prefix,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServices;
        this.attrServiceNames = rosServices.attrServiceNames;
        this.attrServices = rosServices.attrServices;
    }
}
exports.Services = Services;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaURBQTZDO0FBRXJCLGlHQUZmLDBCQUFXLE9BRW9CO0FBYXhDOztHQUVHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQnRDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBdUIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ3BILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDM0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1NBQ3ZCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBQ2pELENBQUM7Q0FDSjtBQWxDRCw0QkFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTZXJ2aWNlcyB9IGZyb20gJy4vZmMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2VydmljZXMgYXMgU2VydmljZXNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERBVEFTT1VSQ0U6OkZDOjpTZXJ2aWNlc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByZWZpeDogUXVhbGlmaWVkIHJldHVybmVkIHNlcnZpY2UgbmFtZXMgbXVzdCBiZSBwcmVmaXhlZCB3aXRoIFByZWZpeC4gRm9yIGV4YW1wbGUsIGlmIHRoZSBQcmVmaXggaXMgXCJhXCIsIHRoZSByZXR1cm5lZCBzZXJ2aWNlIG5hbWVzIHNob3VsZCBiZSBzdGFydGVkIHdpdGggXCJhXCIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlZml4Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgREFUQVNPVVJDRTo6RkM6OlNlcnZpY2VzYFxuICovXG5leHBvcnQgY2xhc3MgU2VydmljZXMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlcnZpY2VOYW1lczogVGhlIGxpc3Qgb2Ygc2VydmljZSBuYW1lcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlcnZpY2VzOiBUaGUgbGlzdCBvZiBzZXJ2aWNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYERBVEFTT1VSQ0U6OkZDOjpTZXJ2aWNlc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU2VydmljZXNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1NlcnZpY2VzID0gbmV3IFJvc1NlcnZpY2VzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcHJlZml4OiBwcm9wcy5wcmVmaXgsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU2VydmljZXM7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lcyA9IHJvc1NlcnZpY2VzLmF0dHJTZXJ2aWNlTmFtZXM7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VzID0gcm9zU2VydmljZXMuYXR0clNlcnZpY2VzO1xuICAgIH1cbn1cbiJdfQ==