"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = exports.RuleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const alb_generated_1 = require("./alb.generated");
Object.defineProperty(exports, "RuleProperty", { enumerable: true, get: function () { return alb_generated_1.RosRule; } });
/**
 * A ROS resource type:  `ALIYUN::ALB::Rule`
 */
class Rule extends ros.Resource {
    /**
     * Create a new `ALIYUN::ALB::Rule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosRule = new alb_generated_1.RosRule(this, id, {
            ruleActions: props.ruleActions,
            priority: props.priority,
            ruleConditions: props.ruleConditions,
            direction: props.direction,
            ruleName: props.ruleName,
            listenerId: props.listenerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRule;
        this.attrRuleId = rosRule.attrRuleId;
    }
}
exports.Rule = Rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUEwQztBQUV0Qiw2RkFGWCx1QkFBTyxPQUVnQjtBQTJDaEM7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxHQUFHLENBQUMsUUFBUTtJQVlsQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWdCLEVBQUUsbUNBQTJDLElBQUk7UUFDM0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUMvQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDekMsQ0FBQztDQUNKO0FBakNELG9CQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1J1bGUgfSBmcm9tICcuL2FsYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NSdWxlIGFzIFJ1bGVQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6QUxCOjpSdWxlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsaXN0ZW5lcklkOiBUaGUgSUQgb2YgdGhlIGxpc3RlbmVyIHRoYXQgaXMgY29uZmlndXJlZCBmb3IgdGhlIEFwcGxpY2F0aW9uIExvYWQgQmFsYW5jZXIgKEFMQilcbiAgICAgKiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsaXN0ZW5lcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcmlvcml0eTogVGhlIHByaW9yaXR5IG9mIHRoZSBmb3J3YXJkaW5nIHJ1bGUuIFZhbGlkIHZhbHVlczogMSB0byAxMDAwMC4gQSBsb3dlciB2YWx1ZSBzcGVjaWZpZXMgYSBoaWdoZXIgcHJpb3JpdHkuXG4gICAgICogTm90ZSBUaGUgcHJpb3JpdHkgb2YgZWFjaCBmb3J3YXJkaW5nIHJ1bGUgd2l0aGluIGEgbGlzdGVuZXIgbXVzdCBiZSB1bmlxdWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpb3JpdHk6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJ1bGVBY3Rpb25zOiBUaGUgYWN0aW9ucyBvZiB0aGUgZm9yd2FyZGluZyBydWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bGVBY3Rpb25zOiBBcnJheTxSb3NSdWxlLlJ1bGVBY3Rpb25zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcnVsZUNvbmRpdGlvbnM6IFRoZSBjb25kaXRpb25zIG9mIHRoZSBmb3J3YXJkaW5nIHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVsZUNvbmRpdGlvbnM6IEFycmF5PFJvc1J1bGUuUnVsZUNvbmRpdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBydWxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGZvcndhcmRpbmcgcnVsZS5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIEl0IGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBJdFxuICAgICAqIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBydWxlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGlyZWN0aW9uOiBSdWxlIGRpcmVjdGlvbi4gVmFsaWQgdmFsdWVzOiBSZXF1ZXN0IG9yIFJlc3BvbnNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpcmVjdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6QUxCOjpSdWxlYFxuICovXG5leHBvcnQgY2xhc3MgUnVsZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUnVsZUlkOiBUaGUgSUQgb2YgdGhlIGZvcndhcmRpbmcgcnVsZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSdWxlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpBTEI6OlJ1bGVgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJ1bGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NSdWxlID0gbmV3IFJvc1J1bGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICBydWxlQWN0aW9uczogcHJvcHMucnVsZUFjdGlvbnMsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJvcHMucHJpb3JpdHksXG4gICAgICAgICAgICBydWxlQ29uZGl0aW9uczogcHJvcHMucnVsZUNvbmRpdGlvbnMsXG4gICAgICAgICAgICBkaXJlY3Rpb246IHByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgICAgIHJ1bGVOYW1lOiBwcm9wcy5ydWxlTmFtZSxcbiAgICAgICAgICAgIGxpc3RlbmVySWQ6IHByb3BzLmxpc3RlbmVySWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUnVsZTtcbiAgICAgICAgdGhpcy5hdHRyUnVsZUlkID0gcm9zUnVsZS5hdHRyUnVsZUlkO1xuICAgIH1cbn1cbiJdfQ==