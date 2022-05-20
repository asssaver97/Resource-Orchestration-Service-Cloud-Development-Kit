"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = exports.TemplateProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const oos_generated_1 = require("./oos.generated");
Object.defineProperty(exports, "TemplateProperty", { enumerable: true, get: function () { return oos_generated_1.RosTemplate; } });
/**
 * A ROS resource type:  `ALIYUN::OOS::Template`
 */
class Template extends ros.Resource {
    /**
     * Create a new `ALIYUN::OOS::Template`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosTemplate = new oos_generated_1.RosTemplate(this, id, {
            resourceGroupId: props.resourceGroupId,
            content: props.content,
            templateName: props.templateName,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTemplate;
        this.attrExecutionPolicy = rosTemplate.attrExecutionPolicy;
        this.attrTemplateId = rosTemplate.attrTemplateId;
        this.attrTemplateName = rosTemplate.attrTemplateName;
    }
}
exports.Template = Template;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBNEJ4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0J0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6RCxDQUFDO0NBQ0o7QUEzQ0QsNEJBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zVGVtcGxhdGUgfSBmcm9tICcuL29vcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NUZW1wbGF0ZSBhcyBUZW1wbGF0ZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpPT1M6OlRlbXBsYXRlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29udGVudDogVGhlIGNvbnRlbnQgb2YgdGhlIHRlbXBsYXRlLiBUaGUgdGVtcGxhdGUgbXVzdCBiZSBpbiB0aGUgSlNPTiBvciBZQU1MIGZvcm1hdC4gTWF4aW11bSBzaXplOiA2NCBLQi5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb250ZW50OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0ZW1wbGF0ZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSB0ZW1wbGF0ZS4gVGhlIHRlbXBsYXRlIG5hbWUgY2FuIGJlIHVwIHRvIDIwMCBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gVGhlIG5hbWUgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBoeXBoZW5zICgtKSwgYW5kIHVuZGVyc2NvcmVzIChfKS4gSXQgY2Fubm90IHN0YXJ0IHdpdGggQUxJWVVOLCBBQ1MsIEFMSUJBQkEsIG9yIEFMSUNMT1VELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWcgdmFsdWUgYW5kIHRoZSBrZXkgbWFwcGluZywgdGhlIGxhYmVsIG9mIHRoZSBrZXkgbnVtYmVyIGNhbiBiZSB1cCB0byAyMC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiAoYW55KSB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpPT1M6OlRlbXBsYXRlYFxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEV4ZWN1dGlvblBvbGljeTogRXhlY3V0aW9uIFBvbGljeVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRXhlY3V0aW9uUG9saWN5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVGVtcGxhdGVJZDogVGVtcGxhdGUgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRlbXBsYXRlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUZW1wbGF0ZU5hbWU6IFRlbXBsYXRlIE5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRlbXBsYXRlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46Ok9PUzo6VGVtcGxhdGVgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFRlbXBsYXRlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zVGVtcGxhdGUgPSBuZXcgUm9zVGVtcGxhdGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHByb3BzLmNvbnRlbnQsXG4gICAgICAgICAgICB0ZW1wbGF0ZU5hbWU6IHByb3BzLnRlbXBsYXRlTmFtZSxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuYXR0ckV4ZWN1dGlvblBvbGljeSA9IHJvc1RlbXBsYXRlLmF0dHJFeGVjdXRpb25Qb2xpY3k7XG4gICAgICAgIHRoaXMuYXR0clRlbXBsYXRlSWQgPSByb3NUZW1wbGF0ZS5hdHRyVGVtcGxhdGVJZDtcbiAgICAgICAgdGhpcy5hdHRyVGVtcGxhdGVOYW1lID0gcm9zVGVtcGxhdGUuYXR0clRlbXBsYXRlTmFtZTtcbiAgICB9XG59XG4iXX0=