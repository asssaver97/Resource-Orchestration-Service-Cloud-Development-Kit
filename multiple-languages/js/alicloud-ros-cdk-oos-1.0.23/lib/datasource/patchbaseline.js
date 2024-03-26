"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchBaseline = exports.PatchBaselineProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const oos_generated_1 = require("./oos.generated");
Object.defineProperty(exports, "PatchBaselineProperty", { enumerable: true, get: function () { return oos_generated_1.RosPatchBaseline; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::PatchBaseline`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPatchBaseline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
 */
class PatchBaseline extends ros.Resource {
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
        const rosPatchBaseline = new oos_generated_1.RosPatchBaseline(this, id, {
            patchBaselineName: props.patchBaselineName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPatchBaseline;
        this.attrApprovalRules = rosPatchBaseline.attrApprovalRules;
        this.attrApprovedPatches = rosPatchBaseline.attrApprovedPatches;
        this.attrApprovedPatchesEnableNonSecurity = rosPatchBaseline.attrApprovedPatchesEnableNonSecurity;
        this.attrCreateTime = rosPatchBaseline.attrCreateTime;
        this.attrCreatedBy = rosPatchBaseline.attrCreatedBy;
        this.attrDescription = rosPatchBaseline.attrDescription;
        this.attrIsDefault = rosPatchBaseline.attrIsDefault;
        this.attrOperationSystem = rosPatchBaseline.attrOperationSystem;
        this.attrPatchBaselineId = rosPatchBaseline.attrPatchBaselineId;
        this.attrPatchBaselineName = rosPatchBaseline.attrPatchBaselineName;
        this.attrRejectedPatches = rosPatchBaseline.attrRejectedPatches;
        this.attrRejectedPatchesAction = rosPatchBaseline.attrRejectedPatchesAction;
        this.attrResourceGroupId = rosPatchBaseline.attrResourceGroupId;
        this.attrShareType = rosPatchBaseline.attrShareType;
        this.attrSources = rosPatchBaseline.attrSources;
        this.attrTags = rosPatchBaseline.attrTags;
        this.attrUpdatedBy = rosPatchBaseline.attrUpdatedBy;
        this.attrUpdatedDate = rosPatchBaseline.attrUpdatedDate;
    }
}
exports.PatchBaseline = PatchBaseline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2hiYXNlbGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhdGNoYmFzZWxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBY2xEOzs7O0dBSUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdHM0M7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBeUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7U0FDN0MsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7UUFDNUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxnQkFBZ0IsQ0FBQyxvQ0FBb0MsQ0FBQztRQUNsRyxJQUFJLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7UUFDaEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztRQUNwRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7UUFDaEUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDO1FBQzVFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztJQUM1RCxDQUFDO0NBQ0o7QUFuSUQsc0NBbUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUGF0Y2hCYXNlbGluZSB9IGZyb20gJy4vb29zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1BhdGNoQmFzZWxpbmUgYXMgUGF0Y2hCYXNlbGluZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUGF0Y2hCYXNlbGluZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2Utb29zLXBhdGNoYmFzZWxpbmVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXRjaEJhc2VsaW5lUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGF0Y2hCYXNlbGluZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwYXRjaCBiYXNlbGluZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXRjaEJhc2VsaW5lTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6T09TOjpQYXRjaEJhc2VsaW5lYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1BhdGNoQmFzZWxpbmVgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2Utb29zLXBhdGNoYmFzZWxpbmVcbiAqL1xuZXhwb3J0IGNsYXNzIFBhdGNoQmFzZWxpbmUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFBhdGNoQmFzZWxpbmVQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQXBwcm92YWxSdWxlczogQWNjZXB0IHRoZSBydWxlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwcHJvdmFsUnVsZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBcHByb3ZlZFBhdGNoZXM6IEFwcHJvdmVkIHBhdGNoIGxpc3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHByb3ZlZFBhdGNoZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBcHByb3ZlZFBhdGNoZXNFbmFibGVOb25TZWN1cml0eTogQXBwcm92ZSB3aGV0aGVyIHRoZSBwYXRjaCBpbmNsdWRlcyB1cGRhdGVzIG90aGVyIHRoYW4gc2VjdXJpdHkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHByb3ZlZFBhdGNoZXNFbmFibGVOb25TZWN1cml0eTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENyZWF0ZVRpbWU6IENyZWF0aW9uIHRpbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ3JlYXRlZEJ5OiBQYXRjaCBiYXNlbGluZSBjcmVhdG9yLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlZEJ5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVzY3JpcHRpb246IFBhdGNoZXMgYmFzZWxpbmUgZGVzY3JpcHRpb24gaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIElzRGVmYXVsdDogV2hldGhlciBpdCBpcyB0aGUgZGVmYXVsdCBwYXRjaCBiYXNlbGluZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklzRGVmYXVsdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE9wZXJhdGlvblN5c3RlbTogT3BlcmF0aW5nIHN5c3RlbSB0eXBlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT3BlcmF0aW9uU3lzdGVtOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUGF0Y2hCYXNlbGluZUlkOiBQYXRjaCBiYXNlbGluZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBhdGNoQmFzZWxpbmVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBhdGNoQmFzZWxpbmVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcGF0Y2ggYmFzZWxpbmUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQYXRjaEJhc2VsaW5lTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlamVjdGVkUGF0Y2hlczogUmVqZWN0IHRoZSBuYW1lIG9mIHRoZSBwYXRjaC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlamVjdGVkUGF0Y2hlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlamVjdGVkUGF0Y2hlc0FjdGlvbjogVGhlIG9wZXJhdGlvbiBvZiByZWplY3RpbmcgdGhlIHBhdGNoLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVqZWN0ZWRQYXRjaGVzQWN0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVzb3VyY2VHcm91cElkOiBBcHByb3ZlIHdoZXRoZXIgdGhlIHBhdGNoIGluY2x1ZGVzIHVwZGF0ZXMgb3RoZXIgdGhhbiBzZWN1cml0eVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2hhcmVUeXBlOiBQYXRjaCBiYXNlbGluZSBzaGFyaW5nIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTaGFyZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTb3VyY2VzOiBQYXRjaCBzb3VyY2UgY29uZmlndXJhdGlvbiBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU291cmNlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRhZ3M6IFRhZ3Mgb2YgcGF0Y2ggYmFzZWxpbmUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYWdzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVXBkYXRlZEJ5OiBQYXRjaCBiYXNlbGluZSB1cGRhdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVXBkYXRlZEJ5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVXBkYXRlZERhdGU6IFVwZGF0ZSB0aW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVXBkYXRlZERhdGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBQYXRjaEJhc2VsaW5lUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NQYXRjaEJhc2VsaW5lID0gbmV3IFJvc1BhdGNoQmFzZWxpbmUodGhpcywgaWQsICB7XG4gICAgICAgICAgICBwYXRjaEJhc2VsaW5lTmFtZTogcHJvcHMucGF0Y2hCYXNlbGluZU5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUGF0Y2hCYXNlbGluZTtcbiAgICAgICAgdGhpcy5hdHRyQXBwcm92YWxSdWxlcyA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0ckFwcHJvdmFsUnVsZXM7XG4gICAgICAgIHRoaXMuYXR0ckFwcHJvdmVkUGF0Y2hlcyA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0ckFwcHJvdmVkUGF0Y2hlcztcbiAgICAgICAgdGhpcy5hdHRyQXBwcm92ZWRQYXRjaGVzRW5hYmxlTm9uU2VjdXJpdHkgPSByb3NQYXRjaEJhc2VsaW5lLmF0dHJBcHByb3ZlZFBhdGNoZXNFbmFibGVOb25TZWN1cml0eTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0ckNyZWF0ZVRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckNyZWF0ZWRCeSA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0ckNyZWF0ZWRCeTtcbiAgICAgICAgdGhpcy5hdHRyRGVzY3JpcHRpb24gPSByb3NQYXRjaEJhc2VsaW5lLmF0dHJEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5hdHRySXNEZWZhdWx0ID0gcm9zUGF0Y2hCYXNlbGluZS5hdHRySXNEZWZhdWx0O1xuICAgICAgICB0aGlzLmF0dHJPcGVyYXRpb25TeXN0ZW0gPSByb3NQYXRjaEJhc2VsaW5lLmF0dHJPcGVyYXRpb25TeXN0ZW07XG4gICAgICAgIHRoaXMuYXR0clBhdGNoQmFzZWxpbmVJZCA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0clBhdGNoQmFzZWxpbmVJZDtcbiAgICAgICAgdGhpcy5hdHRyUGF0Y2hCYXNlbGluZU5hbWUgPSByb3NQYXRjaEJhc2VsaW5lLmF0dHJQYXRjaEJhc2VsaW5lTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyUmVqZWN0ZWRQYXRjaGVzID0gcm9zUGF0Y2hCYXNlbGluZS5hdHRyUmVqZWN0ZWRQYXRjaGVzO1xuICAgICAgICB0aGlzLmF0dHJSZWplY3RlZFBhdGNoZXNBY3Rpb24gPSByb3NQYXRjaEJhc2VsaW5lLmF0dHJSZWplY3RlZFBhdGNoZXNBY3Rpb247XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlR3JvdXBJZCA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0clJlc291cmNlR3JvdXBJZDtcbiAgICAgICAgdGhpcy5hdHRyU2hhcmVUeXBlID0gcm9zUGF0Y2hCYXNlbGluZS5hdHRyU2hhcmVUeXBlO1xuICAgICAgICB0aGlzLmF0dHJTb3VyY2VzID0gcm9zUGF0Y2hCYXNlbGluZS5hdHRyU291cmNlcztcbiAgICAgICAgdGhpcy5hdHRyVGFncyA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0clRhZ3M7XG4gICAgICAgIHRoaXMuYXR0clVwZGF0ZWRCeSA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0clVwZGF0ZWRCeTtcbiAgICAgICAgdGhpcy5hdHRyVXBkYXRlZERhdGUgPSByb3NQYXRjaEJhc2VsaW5lLmF0dHJVcGRhdGVkRGF0ZTtcbiAgICB9XG59XG4iXX0=