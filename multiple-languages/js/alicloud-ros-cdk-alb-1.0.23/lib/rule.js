"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = exports.RuleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const alb_generated_1 = require("./alb.generated");
Object.defineProperty(exports, "RuleProperty", { enumerable: true, get: function () { return alb_generated_1.RosRule; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::Rule`ALIYUN::Config::Rule is used to create a forwarding rule.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-rule
 */
class Rule extends ros.Resource {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUEwQztBQUV0Qiw2RkFGWCx1QkFBTyxPQUVnQjtBQTRDaEM7Ozs7R0FJRztBQUNILE1BQWEsSUFBSyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBV2xDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWdCLEVBQUUsbUNBQTJDLElBQUk7UUFDM0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUMvQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDekMsQ0FBQztDQUNKO0FBbENELG9CQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1J1bGUgfSBmcm9tICcuL2FsYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NSdWxlIGFzIFJ1bGVQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJ1bGVgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYWxiLXJ1bGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSdWxlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGlzdGVuZXJJZDogVGhlIElEIG9mIHRoZSBsaXN0ZW5lciB0aGF0IGlzIGNvbmZpZ3VyZWQgZm9yIHRoZSBBcHBsaWNhdGlvbiBMb2FkIEJhbGFuY2VyIChBTEIpXG4gICAgICogaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGlzdGVuZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJpb3JpdHk6IFRoZSBwcmlvcml0eSBvZiB0aGUgZm9yd2FyZGluZyBydWxlLiBWYWxpZCB2YWx1ZXM6IDEgdG8gMTAwMDAuIEEgbG93ZXIgdmFsdWUgc3BlY2lmaWVzIGEgaGlnaGVyIHByaW9yaXR5LlxuICAgICAqIE5vdGUgVGhlIHByaW9yaXR5IG9mIGVhY2ggZm9yd2FyZGluZyBydWxlIHdpdGhpbiBhIGxpc3RlbmVyIG11c3QgYmUgdW5pcXVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaW9yaXR5OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBydWxlQWN0aW9uczogVGhlIGFjdGlvbnMgb2YgdGhlIGZvcndhcmRpbmcgcnVsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBydWxlQWN0aW9uczogQXJyYXk8Um9zUnVsZS5SdWxlQWN0aW9uc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJ1bGVDb25kaXRpb25zOiBUaGUgY29uZGl0aW9ucyBvZiB0aGUgZm9yd2FyZGluZyBydWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bGVDb25kaXRpb25zOiBBcnJheTxSb3NSdWxlLlJ1bGVDb25kaXRpb25zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcnVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBmb3J3YXJkaW5nIHJ1bGUuXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBJdCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIHBlcmlvZHMgKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gSXRcbiAgICAgKiBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVsZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRpcmVjdGlvbjogUnVsZSBkaXJlY3Rpb24uIFZhbGlkIHZhbHVlczogUmVxdWVzdCBvciBSZXNwb25zZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXJlY3Rpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkFMQjo6UnVsZWBBTElZVU46OkNvbmZpZzo6UnVsZSBpcyB1c2VkIHRvIGNyZWF0ZSBhIGZvcndhcmRpbmcgcnVsZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1J1bGVgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hbGItcnVsZVxuICovXG5leHBvcnQgY2xhc3MgUnVsZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogUnVsZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSdWxlSWQ6IFRoZSBJRCBvZiB0aGUgZm9yd2FyZGluZyBydWxlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJ1bGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJ1bGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc1J1bGUgPSBuZXcgUm9zUnVsZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHJ1bGVBY3Rpb25zOiBwcm9wcy5ydWxlQWN0aW9ucyxcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcm9wcy5wcmlvcml0eSxcbiAgICAgICAgICAgIHJ1bGVDb25kaXRpb25zOiBwcm9wcy5ydWxlQ29uZGl0aW9ucyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgICAgICAgcnVsZU5hbWU6IHByb3BzLnJ1bGVOYW1lLFxuICAgICAgICAgICAgbGlzdGVuZXJJZDogcHJvcHMubGlzdGVuZXJJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NSdWxlO1xuICAgICAgICB0aGlzLmF0dHJSdWxlSWQgPSByb3NSdWxlLmF0dHJSdWxlSWQ7XG4gICAgfVxufVxuIl19