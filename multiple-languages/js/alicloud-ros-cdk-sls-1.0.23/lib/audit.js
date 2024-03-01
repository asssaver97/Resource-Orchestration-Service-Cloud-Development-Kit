"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audit = exports.AuditProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sls_generated_1 = require("./sls.generated");
Object.defineProperty(exports, "AuditProperty", { enumerable: true, get: function () { return sls_generated_1.RosAudit; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::Audit`, which is used to configure Log Audit Service.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAudit`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
 */
class Audit extends ros.Resource {
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
        const rosAudit = new sls_generated_1.RosAudit(this, id, {
            variableMap: props.variableMap,
            displayName: props.displayName,
            multiAccount: props.multiAccount,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAudit;
        this.attrDisplayName = rosAudit.attrDisplayName;
    }
}
exports.Audit = Audit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdWRpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTJDO0FBRXRCLDhGQUZaLHdCQUFRLE9BRWlCO0FBd0JsQzs7OztHQUlHO0FBQ0gsTUFBYSxLQUFNLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXbkM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1NBQ25DLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztJQUNwRCxDQUFDO0NBQ0o7QUEvQkQsc0JBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQXVkaXQgfSBmcm9tICcuL3Nscy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBdWRpdCBhcyBBdWRpdFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQXVkaXRgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tc2xzLWF1ZGl0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXVkaXRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNwbGF5TmFtZTogTmFtZSBvZiBTTFMgbG9nIGF1ZGl0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc3BsYXlOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2YXJpYWJsZU1hcDogTG9nIGF1ZGl0IGRldGFpbGVkIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmFyaWFibGVNYXA6IFJvc0F1ZGl0LlZhcmlhYmxlTWFwUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtdWx0aUFjY291bnQ6IE11bHRpLWFjY291bnQgY29uZmlndXJhdGlvbiwgcGxlYXNlIGZpbGwgaW4gbXVsdGlwbGUgYWxpdWlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG11bHRpQWNjb3VudD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlNMUzo6QXVkaXRgLCB3aGljaCBpcyB1c2VkIHRvIGNvbmZpZ3VyZSBMb2cgQXVkaXQgU2VydmljZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0F1ZGl0YGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tc2xzLWF1ZGl0XG4gKi9cbmV4cG9ydCBjbGFzcyBBdWRpdCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogQXVkaXRQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGlzcGxheU5hbWU6IE5hbWUgb2YgU0xTIGxvZyBhdWRpdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRpc3BsYXlOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQXVkaXRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0F1ZGl0ID0gbmV3IFJvc0F1ZGl0KHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdmFyaWFibGVNYXA6IHByb3BzLnZhcmlhYmxlTWFwLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHByb3BzLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgbXVsdGlBY2NvdW50OiBwcm9wcy5tdWx0aUFjY291bnQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQXVkaXQ7XG4gICAgICAgIHRoaXMuYXR0ckRpc3BsYXlOYW1lID0gcm9zQXVkaXQuYXR0ckRpc3BsYXlOYW1lO1xuICAgIH1cbn1cbiJdfQ==