"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntiBruteForceRules = exports.AntiBruteForceRulesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const threatdetection_generated_1 = require("./threatdetection.generated");
Object.defineProperty(exports, "AntiBruteForceRulesProperty", { enumerable: true, get: function () { return threatdetection_generated_1.RosAntiBruteForceRules; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ThreatDetection::AntiBruteForceRules`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAntiBruteForceRules`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
 */
class AntiBruteForceRules extends ros.Resource {
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
        const rosAntiBruteForceRules = new threatdetection_generated_1.RosAntiBruteForceRules(this, id, {}, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosAntiBruteForceRules;
        this.attrAntiBruteForceRuleIds = rosAntiBruteForceRules.attrAntiBruteForceRuleIds;
        this.attrAntiBruteForceRules = rosAntiBruteForceRules.attrAntiBruteForceRules;
    }
}
exports.AntiBruteForceRules = AntiBruteForceRules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW50aWJydXRlZm9yY2VydWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFudGlicnV0ZWZvcmNlcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDJFQUFxRTtBQUVsQyw0R0FGMUIsa0RBQXNCLE9BRStCO0FBUzlEOzs7O0dBSUc7QUFDSCxNQUFhLG1CQUFvQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0JqRDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUFrQyxFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDL0gsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLHNCQUFzQixHQUFHLElBQUksa0RBQXNCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRyxFQUNwRSxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixLQUFLLENBQUM7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO1FBQ3ZDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQztRQUNsRixJQUFJLENBQUMsdUJBQXVCLEdBQUcsc0JBQXNCLENBQUMsdUJBQXVCLENBQUM7SUFDbEYsQ0FBQztDQUNKO0FBbkNELGtEQW1DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0FudGlCcnV0ZUZvcmNlUnVsZXMgfSBmcm9tICcuL3RocmVhdGRldGVjdGlvbi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBbnRpQnJ1dGVGb3JjZVJ1bGVzIGFzIEFudGlCcnV0ZUZvcmNlUnVsZXNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFudGlCcnV0ZUZvcmNlUnVsZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXRocmVhdGRldGVjdGlvbi1hbnRpYnJ1dGVmb3JjZXJ1bGVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW50aUJydXRlRm9yY2VSdWxlc1Byb3BzIHtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlRocmVhdERldGVjdGlvbjo6QW50aUJydXRlRm9yY2VSdWxlc2AuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NBbnRpQnJ1dGVGb3JjZVJ1bGVzYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXRocmVhdGRldGVjdGlvbi1hbnRpYnJ1dGVmb3JjZXJ1bGVzXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnRpQnJ1dGVGb3JjZVJ1bGVzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBBbnRpQnJ1dGVGb3JjZVJ1bGVzUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFudGlCcnV0ZUZvcmNlUnVsZUlkczogVGhlIGxpc3Qgb2YgYW50aSBicnV0ZSBmb3JjZSBydWxlIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFudGlCcnV0ZUZvcmNlUnVsZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFudGlCcnV0ZUZvcmNlUnVsZXM6IFRoZSBsaXN0IG9mIGFudGkgYnJ1dGUgZm9yY2UgcnVsZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBbnRpQnJ1dGVGb3JjZVJ1bGVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQW50aUJydXRlRm9yY2VSdWxlc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NBbnRpQnJ1dGVGb3JjZVJ1bGVzID0gbmV3IFJvc0FudGlCcnV0ZUZvcmNlUnVsZXModGhpcywgaWQsICB7XG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICBwcm9wcztcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0FudGlCcnV0ZUZvcmNlUnVsZXM7XG4gICAgICAgIHRoaXMuYXR0ckFudGlCcnV0ZUZvcmNlUnVsZUlkcyA9IHJvc0FudGlCcnV0ZUZvcmNlUnVsZXMuYXR0ckFudGlCcnV0ZUZvcmNlUnVsZUlkcztcbiAgICAgICAgdGhpcy5hdHRyQW50aUJydXRlRm9yY2VSdWxlcyA9IHJvc0FudGlCcnV0ZUZvcmNlUnVsZXMuYXR0ckFudGlCcnV0ZUZvcmNlUnVsZXM7XG4gICAgfVxufVxuIl19