"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntiBruteForceRule = exports.AntiBruteForceRuleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const threatdetection_generated_1 = require("./threatdetection.generated");
Object.defineProperty(exports, "AntiBruteForceRuleProperty", { enumerable: true, get: function () { return threatdetection_generated_1.RosAntiBruteForceRule; } });
/**
 * A ROS resource type:  `ALIYUN::ThreatDetection::AntiBruteForceRule`
 */
class AntiBruteForceRule extends ros.Resource {
    /**
     * Create a new `ALIYUN::ThreatDetection::AntiBruteForceRule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAntiBruteForceRule = new threatdetection_generated_1.RosAntiBruteForceRule(this, id, {
            defaultRule: props.defaultRule,
            antiBruteForceRuleName: props.antiBruteForceRuleName,
            forbiddenTime: props.forbiddenTime,
            uuidList: props.uuidList,
            failCount: props.failCount,
            span: props.span,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAntiBruteForceRule;
        this.attrAntiBruteForceRuleId = rosAntiBruteForceRule.attrAntiBruteForceRuleId;
        this.attrAntiBruteForceRuleName = rosAntiBruteForceRule.attrAntiBruteForceRuleName;
        this.attrDefaultRule = rosAntiBruteForceRule.attrDefaultRule;
        this.attrFailCount = rosAntiBruteForceRule.attrFailCount;
        this.attrForbiddenTime = rosAntiBruteForceRule.attrForbiddenTime;
        this.attrSpan = rosAntiBruteForceRule.attrSpan;
        this.attrUuidList = rosAntiBruteForceRule.attrUuidList;
    }
}
exports.AntiBruteForceRule = AntiBruteForceRule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW50aWJydXRlZm9yY2VydWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW50aWJydXRlZm9yY2VydWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QywyRUFBb0U7QUFFbEMsMkdBRnpCLGlEQUFxQixPQUU4QjtBQTJENUQ7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBNkNoRDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQThCLEVBQUUsbUNBQTJDLElBQUk7UUFDekgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLHFCQUFxQixHQUFHLElBQUksaURBQXFCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMvRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQjtZQUNwRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcscUJBQXFCLENBQUMsd0JBQXdCLENBQUM7UUFDL0UsSUFBSSxDQUFDLDBCQUEwQixHQUFHLHFCQUFxQixDQUFDLDBCQUEwQixDQUFDO1FBQ25GLElBQUksQ0FBQyxlQUFlLEdBQUcscUJBQXFCLENBQUMsZUFBZSxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcscUJBQXFCLENBQUMsYUFBYSxDQUFDO1FBQ3pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQztJQUMzRCxDQUFDO0NBQ0o7QUF4RUQsZ0RBd0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQW50aUJydXRlRm9yY2VSdWxlIH0gZnJvbSAnLi90aHJlYXRkZXRlY3Rpb24uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQW50aUJydXRlRm9yY2VSdWxlIGFzIEFudGlCcnV0ZUZvcmNlUnVsZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpUaHJlYXREZXRlY3Rpb246OkFudGlCcnV0ZUZvcmNlUnVsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbnRpQnJ1dGVGb3JjZVJ1bGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhbnRpQnJ1dGVGb3JjZVJ1bGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZGVmZW5zZSBydWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFudGlCcnV0ZUZvcmNlUnVsZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGZhaWxDb3VudDogVGhlIG1heGltdW0gbnVtYmVyIG9mIGZhaWxlZCBsb2dvbiBhdHRlbXB0cyBmcm9tIGFuIGFjY291bnQuIFxuICAgICAqIFZhbGlkIHZhbHVlczogMiwgMywgNCwgNSwgMTAsIDUwLCA4MCwgYW5kIDEwMC5cbiAgICAgKi9cbiAgICByZWFkb25seSBmYWlsQ291bnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGZvcmJpZGRlblRpbWU6IFRoZSBwZXJpb2Qgb2YgdGltZSBkdXJpbmcgd2hpY2ggbG9nb25zIGZyb20gYW4gYWNjb3VudCBhcmUgbm90IGFsbG93ZWQuXG4gICAgICogVW5pdDogbWludXRlcy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gNTogNSBtaW51dGVzXG4gICAgICogLSAxNTogMTUgbWludXRlc1xuICAgICAqIC0gMzA6IDMwIG1pbnV0ZXNcbiAgICAgKiAtIDYwOiAxIGhvdXJcbiAgICAgKiAtIDEyMDogMiBob3Vyc1xuICAgICAqIC0gMzYwOiA2IGhvdXJzXG4gICAgICogLSA3MjA6IDEyIGhvdXJzXG4gICAgICogLSAxNDQwOiAyNCBob3Vyc1xuICAgICAqIC0gMTAwODA6IDcgZGF5c1xuICAgICAqIC0gNTI1NjAwMDA6IHBlcm1hbmVudFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZvcmJpZGRlblRpbWU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNwYW46IFRoZSBtYXhpbXVtIHBlcmlvZCBvZiB0aW1lIGR1cmluZyB3aGljaCBmYWlsZWQgbG9nb24gYXR0ZW1wdHMgZnJvbSBhbiBhY2NvdW50IGNhbiBvY2N1ci5cbiAgICAgKiBVbml0OiBtaW51dGVzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSAxXG4gICAgICogLSAyXG4gICAgICogLSA1XG4gICAgICogLSAxMFxuICAgICAqIC0gMTVcbiAgICAgKi9cbiAgICByZWFkb25seSBzcGFuOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1dWlkTGlzdDogVGhlIFVVSURzIG9mIHRoZSBzZXJ2ZXJzIHRvIHdoaWNoIHlvdSB3YW50IHRvIGFwcGx5IHRoZSBkZWZlbnNlIHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXVpZExpc3Q6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWZhdWx0UnVsZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gc2V0IHRoZSBkZWZlbnNlIHJ1bGUgYXMgdGhlIGRlZmF1bHQgcnVsZS4gXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gdHJ1ZTogeWVzXG4gICAgICogLSBmYWxzZTogbm9cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWZhdWx0UnVsZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlRocmVhdERldGVjdGlvbjo6QW50aUJydXRlRm9yY2VSdWxlYFxuICovXG5leHBvcnQgY2xhc3MgQW50aUJydXRlRm9yY2VSdWxlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBbnRpQnJ1dGVGb3JjZVJ1bGVJZDogVGhlIElEIG9mIHRoZSBkZWZlbnNlIHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBbnRpQnJ1dGVGb3JjZVJ1bGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFudGlCcnV0ZUZvcmNlUnVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkZWZlbnNlIHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBbnRpQnJ1dGVGb3JjZVJ1bGVOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVmYXVsdFJ1bGU6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHNldCB0aGUgZGVmZW5zZSBydWxlIGFzIHRoZSBkZWZhdWx0IHJ1bGUuIFxuVmFsaWQgdmFsdWVzOlxuLSB0cnVlOiB5ZXNcbi0gZmFsc2U6IG5vXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWZhdWx0UnVsZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEZhaWxDb3VudDogVGhlIHRocmVzaG9sZCBmb3IgdGhlIG51bWJlciBvZiBmYWlsZWQgdXNlciBsb2dpbnMgd2hlbiB0aGUgYnJ1dGUtZm9yY2UgZGVmZW5zZSBydWxlIHRha2VzIGVmZmVjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZhaWxDb3VudDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEZvcmJpZGRlblRpbWU6IFRoZSBwZXJpb2Qgb2YgdGltZSBkdXJpbmcgd2hpY2ggbG9nb25zIGZyb20gYW4gYWNjb3VudCBhcmUgbm90IGFsbG93ZWQuIFVuaXQ6IG1pbnV0ZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGb3JiaWRkZW5UaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3BhbjogVGhlIHBlcmlvZCBvZiB0aW1lIGR1cmluZyB3aGljaCBsb2dvbiBmYWlsdXJlcyBmcm9tIGFuIGFjY291bnQgYXJlIG1lYXN1cmVkLiBVbml0OiBtaW51dGVzLiBJZiBTcGFuIGlzIHNldCB0byAxMCwgdGhlIGRlZmVuc2UgcnVsZSB0YWtlcyBlZmZlY3Qgd2hlbiB0aGUgbG9nb24gZmFpbHVyZXMgbWVhc3VyZWQgd2l0aGluIDEwIG1pbnV0ZXMgcmVhY2hlcyB0aGUgc3BlY2lmaWVkIHRocmVzaG9sZC4gVGhlIElQIGFkZHJlc3NlcyBvZiBhdHRhY2tlcnMgY2Fubm90IGJlIHVzZWQgdG8gbG9nIG9uIHRvIHRoZSBzZXJ2ZXIgd2l0aGluIHRoZSBzcGVjaWZpZWQgcGVyaW9kIG9mIHRpbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTcGFuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVXVpZExpc3Q6IFRoZSBVVUlEcyBvZiB0aGUgc2VydmVyIHRvIHdoaWNoIHRoZSBkZWZlbnNlIHJ1bGUgaXMgYXBwbGllZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clV1aWRMaXN0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VGhyZWF0RGV0ZWN0aW9uOjpBbnRpQnJ1dGVGb3JjZVJ1bGVgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEFudGlCcnV0ZUZvcmNlUnVsZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0FudGlCcnV0ZUZvcmNlUnVsZSA9IG5ldyBSb3NBbnRpQnJ1dGVGb3JjZVJ1bGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZWZhdWx0UnVsZTogcHJvcHMuZGVmYXVsdFJ1bGUsXG4gICAgICAgICAgICBhbnRpQnJ1dGVGb3JjZVJ1bGVOYW1lOiBwcm9wcy5hbnRpQnJ1dGVGb3JjZVJ1bGVOYW1lLFxuICAgICAgICAgICAgZm9yYmlkZGVuVGltZTogcHJvcHMuZm9yYmlkZGVuVGltZSxcbiAgICAgICAgICAgIHV1aWRMaXN0OiBwcm9wcy51dWlkTGlzdCxcbiAgICAgICAgICAgIGZhaWxDb3VudDogcHJvcHMuZmFpbENvdW50LFxuICAgICAgICAgICAgc3BhbjogcHJvcHMuc3BhbixcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NBbnRpQnJ1dGVGb3JjZVJ1bGU7XG4gICAgICAgIHRoaXMuYXR0ckFudGlCcnV0ZUZvcmNlUnVsZUlkID0gcm9zQW50aUJydXRlRm9yY2VSdWxlLmF0dHJBbnRpQnJ1dGVGb3JjZVJ1bGVJZDtcbiAgICAgICAgdGhpcy5hdHRyQW50aUJydXRlRm9yY2VSdWxlTmFtZSA9IHJvc0FudGlCcnV0ZUZvcmNlUnVsZS5hdHRyQW50aUJydXRlRm9yY2VSdWxlTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyRGVmYXVsdFJ1bGUgPSByb3NBbnRpQnJ1dGVGb3JjZVJ1bGUuYXR0ckRlZmF1bHRSdWxlO1xuICAgICAgICB0aGlzLmF0dHJGYWlsQ291bnQgPSByb3NBbnRpQnJ1dGVGb3JjZVJ1bGUuYXR0ckZhaWxDb3VudDtcbiAgICAgICAgdGhpcy5hdHRyRm9yYmlkZGVuVGltZSA9IHJvc0FudGlCcnV0ZUZvcmNlUnVsZS5hdHRyRm9yYmlkZGVuVGltZTtcbiAgICAgICAgdGhpcy5hdHRyU3BhbiA9IHJvc0FudGlCcnV0ZUZvcmNlUnVsZS5hdHRyU3BhbjtcbiAgICAgICAgdGhpcy5hdHRyVXVpZExpc3QgPSByb3NBbnRpQnJ1dGVGb3JjZVJ1bGUuYXR0clV1aWRMaXN0O1xuICAgIH1cbn1cbiJdfQ==