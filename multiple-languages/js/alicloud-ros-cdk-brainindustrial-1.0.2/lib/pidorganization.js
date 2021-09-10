"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PidOrganization = exports.PidOrganizationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const brainindustrial_generated_1 = require("./brainindustrial.generated");
Object.defineProperty(exports, "PidOrganizationProperty", { enumerable: true, get: function () { return brainindustrial_generated_1.RosPidOrganization; } });
/**
 * A ROS resource type:  `ALIYUN::BrainIndustrial::PidOrganization`
 */
class PidOrganization extends ros.Resource {
    /**
     * Create a new `ALIYUN::BrainIndustrial::PidOrganization`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosPidOrganization = new brainindustrial_generated_1.RosPidOrganization(this, id, {
            pidOrganizationName: props.pidOrganizationName,
            parentPidOrganizationId: props.parentPidOrganizationId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPidOrganization;
        this.attrParentPidOrganizationId = rosPidOrganization.attrParentPidOrganizationId;
        this.attrPidOrganizationId = rosPidOrganization.attrPidOrganizationId;
        this.attrPidOrganizationLevel = rosPidOrganization.attrPidOrganizationLevel;
        this.attrPidOrganizationName = rosPidOrganization.attrPidOrganizationName;
    }
}
exports.PidOrganization = PidOrganization;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlkb3JnYW5pemF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGlkb3JnYW5pemF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QywyRUFBaUU7QUFFbEMsd0dBRnRCLDhDQUFrQixPQUUyQjtBQWtCdEQ7O0dBRUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUEyQjdDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMkIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN0SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSw4Q0FBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3pELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLHVCQUF1QjtTQUN6RCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQ25DLElBQUksQ0FBQywyQkFBMkIsR0FBRyxrQkFBa0IsQ0FBQywyQkFBMkIsQ0FBQztRQUNsRixJQUFJLENBQUMscUJBQXFCLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQUM7UUFDdEUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDO1FBQzVFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQztJQUM5RSxDQUFDO0NBQ0o7QUEvQ0QsMENBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUGlkT3JnYW5pemF0aW9uIH0gZnJvbSAnLi9icmFpbmluZHVzdHJpYWwuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUGlkT3JnYW5pemF0aW9uIGFzIFBpZE9yZ2FuaXphdGlvblByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpCcmFpbkluZHVzdHJpYWw6OlBpZE9yZ2FuaXphdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQaWRPcmdhbml6YXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwaWRPcmdhbml6YXRpb25OYW1lOiBQaWRPcmdhbml6YXRpb25OYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGlkT3JnYW5pemF0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGFyZW50UGlkT3JnYW5pemF0aW9uSWQ6IFBhcmVudFBpZE9yZ2FuaXphdGlvbklkXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFyZW50UGlkT3JnYW5pemF0aW9uSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkJyYWluSW5kdXN0cmlhbDo6UGlkT3JnYW5pemF0aW9uYFxuICovXG5leHBvcnQgY2xhc3MgUGlkT3JnYW5pemF0aW9uIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQYXJlbnRQaWRPcmdhbml6YXRpb25JZDogUGFyZW50UGlkT3JnYW5pemF0aW9uSWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBhcmVudFBpZE9yZ2FuaXphdGlvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUGlkT3JnYW5pemF0aW9uSWQ6IFBpZE9yZ2FuaXphdGlvbklkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQaWRPcmdhbml6YXRpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBpZE9yZ2FuaXphdGlvbkxldmVsOiBQaWRPcmdhbml6YXRpb25MZXZlbFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGlkT3JnYW5pemF0aW9uTGV2ZWw6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQaWRPcmdhbml6YXRpb25OYW1lOiBQaWRPcmdhbml6YXRpb25OYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQaWRPcmdhbml6YXRpb25OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6QnJhaW5JbmR1c3RyaWFsOjpQaWRPcmdhbml6YXRpb25gLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFBpZE9yZ2FuaXphdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1BpZE9yZ2FuaXphdGlvbiA9IG5ldyBSb3NQaWRPcmdhbml6YXRpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICBwaWRPcmdhbml6YXRpb25OYW1lOiBwcm9wcy5waWRPcmdhbml6YXRpb25OYW1lLFxuICAgICAgICAgICAgcGFyZW50UGlkT3JnYW5pemF0aW9uSWQ6IHByb3BzLnBhcmVudFBpZE9yZ2FuaXphdGlvbklkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1BpZE9yZ2FuaXphdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyUGFyZW50UGlkT3JnYW5pemF0aW9uSWQgPSByb3NQaWRPcmdhbml6YXRpb24uYXR0clBhcmVudFBpZE9yZ2FuaXphdGlvbklkO1xuICAgICAgICB0aGlzLmF0dHJQaWRPcmdhbml6YXRpb25JZCA9IHJvc1BpZE9yZ2FuaXphdGlvbi5hdHRyUGlkT3JnYW5pemF0aW9uSWQ7XG4gICAgICAgIHRoaXMuYXR0clBpZE9yZ2FuaXphdGlvbkxldmVsID0gcm9zUGlkT3JnYW5pemF0aW9uLmF0dHJQaWRPcmdhbml6YXRpb25MZXZlbDtcbiAgICAgICAgdGhpcy5hdHRyUGlkT3JnYW5pemF0aW9uTmFtZSA9IHJvc1BpZE9yZ2FuaXphdGlvbi5hdHRyUGlkT3JnYW5pemF0aW9uTmFtZTtcbiAgICB9XG59XG4iXX0=