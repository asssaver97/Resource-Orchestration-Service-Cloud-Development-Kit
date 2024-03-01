"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterApplication = exports.ClusterApplicationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cs_generated_1 = require("./cs.generated");
Object.defineProperty(exports, "ClusterApplicationProperty", { enumerable: true, get: function () { return cs_generated_1.RosClusterApplication; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::ClusterApplication`, which is used to deploy a container application.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
 */
class ClusterApplication extends ros.Resource {
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
        const rosClusterApplication = new cs_generated_1.RosClusterApplication(this, id, {
            rolePolicy: props.rolePolicy === undefined || props.rolePolicy === null ? 'EnsureAdminRoleAndBinding' : props.rolePolicy,
            yamlContent: props.yamlContent,
            clusterId: props.clusterId,
            defaultNamespace: props.defaultNamespace === undefined || props.defaultNamespace === null ? 'default' : props.defaultNamespace,
            stage: props.stage === undefined || props.stage === null ? 'All' : props.stage,
            validationMode: props.validationMode === undefined || props.validationMode === null ? 'Strict' : props.validationMode,
            waitUntil: props.waitUntil,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterApplication;
        this.attrClusterId = rosClusterApplication.attrClusterId;
        this.attrWaitUntilData = rosClusterApplication.attrWaitUntilData;
    }
}
exports.ClusterApplication = ClusterApplication;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3RlcmFwcGxpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2x1c3RlcmFwcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpREFBdUQ7QUFFckIsMkdBRnpCLG9DQUFxQixPQUU4QjtBQXNENUQ7Ozs7R0FJRztBQUNILE1BQWEsa0JBQW1CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQmhEOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQThCLEVBQUUsbUNBQTJDLElBQUk7UUFDekgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLHFCQUFxQixHQUFHLElBQUksb0NBQXFCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMvRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVTtZQUN4SCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGdCQUFnQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO1lBQzlILEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSztZQUM5RSxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWMsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWM7WUFDckgsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1NBQzdCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDO0lBQ3JFLENBQUM7Q0FDSjtBQXpDRCxnREF5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NDbHVzdGVyQXBwbGljYXRpb24gfSBmcm9tICcuL2NzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0NsdXN0ZXJBcHBsaWNhdGlvbiBhcyBDbHVzdGVyQXBwbGljYXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYENsdXN0ZXJBcHBsaWNhdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jcy1jbHVzdGVyYXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDbHVzdGVyQXBwbGljYXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUga3ViZXJuZXRlcyBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgeWFtbENvbnRlbnQ6IFRoZSB5YW1sIGNvbnRlbnQgb2YgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgeWFtbENvbnRlbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlZmF1bHROYW1lc3BhY2U6IFRoZSBkZWZhdWx0IG5hbWVzcGFjZSBmb3IgdGhlIGFwcGxpY2F0aW9uLCBkZWZhdWx0IHZhbHVlIGlzIGRlZmF1bHQuXG4gICAgICogSWYgYSBuYW1lc3BhY2UgaXMgZGVmaW5lZCBpbiB5YW1sIG1ldGFkYXRhLCBpdHMgcHJpb3JpdHkgaXMgaGlnaGVyIHRoYW4gRGVmYXVsdE5hbWVzcGFjZS5cbiAgICAgKiBJZiB0aGUgRGVmYXVsdE5hbWVzcGFjZSBkb2VzIG5vdCBleGlzdCwgUk9TIHdpbGwgYXV0b21hdGljYWxseSBjcmVhdGUgaXQgYW5kIGRlbGV0ZSBpdCBkdXJpbmcgdGhlIGRlbGV0aW9uIHBoYXNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlZmF1bHROYW1lc3BhY2U/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb2xlUG9saWN5OiBCZWZvcmUgZGVwbG95aW5nIHRoZSBhcHBsaWNhdGlvbiwgY2hlY2sgdGhlIHBvbGljaWVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcm9sZXMgb2YgdGhlIGN1cnJlbnQgdXNlci4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gRW5zdXJlQWRtaW5Sb2xlQW5kQmluZGluZzogQXV0b21hdGljYWxseSBjcmVhdGUgYSByb2xlIG5hbWVkIFwicm9zOmFwcGxpY2F0aW9uLWFkbWluOiR7dXNlci1pZH1cIiB3aXRoIGFkbWluaXN0cmF0b3IgcGVybWlzc2lvbnMgYW5kIGJpbmQgaXQgdG8gdGhlIGN1cnJlbnQgdXNlci5cbiAgICAgKiAtIE5vbmU6IERvIG5vdGhpbmcuXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgRW5zdXJlQWRtaW5Sb2xlQW5kQmluZGluZy5cbiAgICAgKi9cbiAgICByZWFkb25seSByb2xlUG9saWN5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3RhZ2U6IEF0IHdoYXQgc3RhZ2UgdG8gcnVuLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBBbGw6IGFsbCBzdGFnZXMsIGluY2x1ZGluZyBjcmVhdGUsIHVwZGF0ZSwgYW5kIGRlbGV0ZS5cbiAgICAgKiAtIERlbGV0ZTogdGhlIGRlbGV0ZSBzdGFnZS4gVGhpcyBtZWFucyB0aGF0IG9ubHkgaW4gdGhlIGRlbGV0aW9uIHN0YWdlIG9mIHRoaXMgcmVzb3VyY2Ugd2lsbCBhcHBseSB5YW1sIHRvIHRoZSBjbHVzdGVyLlxuICAgICAqIFRoZSBkZWZhdWx0IGlzIEFsbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdGFnZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZhbGlkYXRpb25Nb2RlOiBWYWxpZGF0aW9uIG1vZGVzIGluY2x1ZGU6XG4gICAgICogLSBCYXNpYzogYmFzaWMgdmFsaWRhdGlvbiwgc3VjaCBhcyB2ZXJpZnlpbmcgdGhlIGV4aXN0ZW5jZSBvZiBhIGNsdXN0ZXIuXG4gICAgICogLSBTdHJpY3Q6IGluIGFkZGl0aW9uIHRvIGJhc2ljIHZhbGlkYXRpb24sIGFsc28gdmFsaWRhdGUgdGhlIGxlZ2FsaXR5IG9mIFlhbWxDb250ZW50IGFuZCBXYWl0VW50aWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmFsaWRhdGlvbk1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3YWl0VW50aWw6IEFmdGVyIHN0YXJ0aW5nIGEgY3JlYXRpb24gb3IgdXBkYXRlLCB3YWl0IHVudGlsIGFsbCBjb25kaXRpb25zIGFyZSBtZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2FpdFVudGlsPzogQXJyYXk8Um9zQ2x1c3RlckFwcGxpY2F0aW9uLldhaXRVbnRpbFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q1M6OkNsdXN0ZXJBcHBsaWNhdGlvbmAsIHdoaWNoIGlzIHVzZWQgdG8gZGVwbG95IGEgY29udGFpbmVyIGFwcGxpY2F0aW9uLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zQ2x1c3RlckFwcGxpY2F0aW9uYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY3MtY2x1c3RlcmFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDbHVzdGVyQXBwbGljYXRpb24gZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IENsdXN0ZXJBcHBsaWNhdGlvblByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFdhaXRVbnRpbERhdGE6IEEgbGlzdCBvZiB2YWx1ZXMgZm9yIGVhY2ggSnNvblBhdGggaW4gV2FpdFVudGlsLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyV2FpdFVudGlsRGF0YTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENsdXN0ZXJBcHBsaWNhdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zQ2x1c3RlckFwcGxpY2F0aW9uID0gbmV3IFJvc0NsdXN0ZXJBcHBsaWNhdGlvbih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHJvbGVQb2xpY3k6IHByb3BzLnJvbGVQb2xpY3kgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5yb2xlUG9saWN5ID09PSBudWxsID8gJ0Vuc3VyZUFkbWluUm9sZUFuZEJpbmRpbmcnIDogcHJvcHMucm9sZVBvbGljeSxcbiAgICAgICAgICAgIHlhbWxDb250ZW50OiBwcm9wcy55YW1sQ29udGVudCxcbiAgICAgICAgICAgIGNsdXN0ZXJJZDogcHJvcHMuY2x1c3RlcklkLFxuICAgICAgICAgICAgZGVmYXVsdE5hbWVzcGFjZTogcHJvcHMuZGVmYXVsdE5hbWVzcGFjZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmRlZmF1bHROYW1lc3BhY2UgPT09IG51bGwgPyAnZGVmYXVsdCcgOiBwcm9wcy5kZWZhdWx0TmFtZXNwYWNlLFxuICAgICAgICAgICAgc3RhZ2U6IHByb3BzLnN0YWdlID09PSB1bmRlZmluZWQgfHwgcHJvcHMuc3RhZ2UgPT09IG51bGwgPyAnQWxsJyA6IHByb3BzLnN0YWdlLFxuICAgICAgICAgICAgdmFsaWRhdGlvbk1vZGU6IHByb3BzLnZhbGlkYXRpb25Nb2RlID09PSB1bmRlZmluZWQgfHwgcHJvcHMudmFsaWRhdGlvbk1vZGUgPT09IG51bGwgPyAnU3RyaWN0JyA6IHByb3BzLnZhbGlkYXRpb25Nb2RlLFxuICAgICAgICAgICAgd2FpdFVudGlsOiBwcm9wcy53YWl0VW50aWwsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQ2x1c3RlckFwcGxpY2F0aW9uO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSByb3NDbHVzdGVyQXBwbGljYXRpb24uYXR0ckNsdXN0ZXJJZDtcbiAgICAgICAgdGhpcy5hdHRyV2FpdFVudGlsRGF0YSA9IHJvc0NsdXN0ZXJBcHBsaWNhdGlvbi5hdHRyV2FpdFVudGlsRGF0YTtcbiAgICB9XG59XG4iXX0=