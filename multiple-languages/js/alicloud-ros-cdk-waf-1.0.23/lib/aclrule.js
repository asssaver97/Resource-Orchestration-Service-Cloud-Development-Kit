"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AclRule = exports.AclRuleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const waf_generated_1 = require("./waf.generated");
Object.defineProperty(exports, "AclRuleProperty", { enumerable: true, get: function () { return waf_generated_1.RosAclRule; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::WAF::AclRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAclRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-aclrule
 */
class AclRule extends ros.Resource {
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
        const rosAclRule = new waf_generated_1.RosAclRule(this, id, {
            instanceId: props.instanceId,
            ruleId: props.ruleId,
            region: props.region,
            domain: props.domain,
            rules: props.rules,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAclRule;
    }
}
exports.AclRule = AclRule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNscnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjbHJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE2QztBQUV0QixnR0FGZCwwQkFBVSxPQUVtQjtBQXFDdEM7Ozs7R0FJRztBQUNILE1BQWEsT0FBUSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBTXJDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW1CLEVBQUUsbUNBQTJDLElBQUk7UUFDOUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFVBQVUsR0FBRyxJQUFJLDBCQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUN6QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ3JCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7Q0FDSjtBQTNCRCwwQkEyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBY2xSdWxlIH0gZnJvbSAnLi93YWYuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQWNsUnVsZSBhcyBBY2xSdWxlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBY2xSdWxlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXdhZi1hY2xydWxlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWNsUnVsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRvbWFpbjogRG9tYWluIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG9tYWluOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBXQUYgaW5zdGFuY2UgSUQuXG4gICAgICogRGVzY3JpcHRpb24gSW50ZXJmYWNlIFlvdSBjYW4gdmlldyB5b3VyIGN1cnJlbnQgV0FGIGluc3RhbmNlIElEIGJ5IGNhbGxpbmcgRGVzY3JpYmVQYXlJbmZvLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJ1bGVzOiBEZXRhaWxlZCBpbmZvcm1hdGlvbiBvZiBwcmVjaXNlIGFjY2VzcyBjb250cm9sIHJ1bGVzLCBleHByZXNzZWQgaW4gSlNPTiBmb3JtYXQgc3RyaW5ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBydWxlczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVnaW9uOiBFeGFtcGxlcyBvZiBhcmVhcyB3aGVyZSB0aGUgV0FGLiBWYWx1ZTpcbiAgICAgKiBjbjogQ2hpbmEgbWFpbmxhbmQgKGRlZmF1bHQpXG4gICAgICogY24taG9uZ2tvbmc6IENoaW5hIEhvbmdLb25nIGFuZCBvdGhlciBvdmVyc2Vhc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZ2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJ1bGVJZDogUHJlY2lzZSBhY2Nlc3MgY29udHJvbCBydWxlIElEXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVsZUlkPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpXQUY6OkFjbFJ1bGVgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zQWNsUnVsZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXdhZi1hY2xydWxlXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2xSdWxlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBBY2xSdWxlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEFjbFJ1bGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0FjbFJ1bGUgPSBuZXcgUm9zQWNsUnVsZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHByb3BzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBydWxlSWQ6IHByb3BzLnJ1bGVJZCxcbiAgICAgICAgICAgIHJlZ2lvbjogcHJvcHMucmVnaW9uLFxuICAgICAgICAgICAgZG9tYWluOiBwcm9wcy5kb21haW4sXG4gICAgICAgICAgICBydWxlczogcHJvcHMucnVsZXMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQWNsUnVsZTtcbiAgICB9XG59XG4iXX0=