"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitCondition = exports.WaitConditionProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ros_generated_1 = require("./ros.generated");
Object.defineProperty(exports, "WaitConditionProperty", { enumerable: true, get: function () { return ros_generated_1.RosWaitCondition; } });
/**
 * A ROS resource type:  `ALIYUN::ROS::WaitCondition`
 */
class WaitCondition extends ros.Resource {
    /**
     * Create a new `ALIYUN::ROS::WaitCondition`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosWaitCondition = new ros_generated_1.RosWaitCondition(this, id, {
            timeout: props.timeout,
            count: props.count ? props.count : 1,
            handle: props.handle,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWaitCondition;
        this.attrData = rosWaitCondition.attrData;
        this.attrErrorData = rosWaitCondition.attrErrorData;
        this.attrJoinedErrorData = rosWaitCondition.attrJoinedErrorData;
    }
}
exports.WaitCondition = WaitCondition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdGNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndhaXRjb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBdUJsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0IzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksZ0NBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1NBQ3ZCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDcEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO0lBQ3BFLENBQUM7Q0FDSjtBQTFDRCxzQ0EwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NXYWl0Q29uZGl0aW9uIH0gZnJvbSAnLi9yb3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zV2FpdENvbmRpdGlvbiBhcyBXYWl0Q29uZGl0aW9uUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBXYWl0Q29uZGl0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaGFuZGxlOiBBIHJlZmVyZW5jZSB0byB0aGUgd2FpdCBjb25kaXRpb24gaGFuZGxlIHVzZWQgdG8gc2lnbmFsIHRoaXMgd2FpdCBjb25kaXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGFuZGxlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0aW1lb3V0OiBUaGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gd2FpdCBmb3IgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHNpZ25hbHMgdG8gYXJyaXZlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvdW50OiBUaGUgbnVtYmVyIG9mIHN1Y2Nlc3Mgc2lnbmFscyB0aGF0IG11c3QgYmUgcmVjZWl2ZWQgYmVmb3JlIHRoZSBzdGFjayBjcmVhdGlvbiBwcm9jZXNzIGNvbnRpbnVlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb3VudD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uYFxuICovXG5leHBvcnQgY2xhc3MgV2FpdENvbmRpdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGF0YTogSlNPTiBzZXJpYWxpemVkIGRpY3QgY29udGFpbmluZyBkYXRhIGFzc29jaWF0ZWQgd2l0aCB3YWl0IGNvbmRpdGlvbiBzaWduYWxzIHNlbnQgdG8gdGhlIGhhbmRsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRhdGE6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFcnJvckRhdGE6IEpTT04gc2VyaWFsaXplZCBkaWN0IGNvbnRhaW5pbmcgZGF0YSBhc3NvY2lhdGVkIHdpdGggd2FpdCBjb25kaXRpb24gZXJyb3Igc2lnbmFscyBzZW50IHRvIHRoZSBoYW5kbGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFcnJvckRhdGE6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBKb2luZWRFcnJvckRhdGE6IFN0cmluZyBjb250YWluaW5nIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHdhaXQgY29uZGl0aW9uIGVycm9yIHNpZ25hbHMgc2VudCB0byB0aGUgaGFuZGxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySm9pbmVkRXJyb3JEYXRhOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBXYWl0Q29uZGl0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zV2FpdENvbmRpdGlvbiA9IG5ldyBSb3NXYWl0Q29uZGl0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdGltZW91dDogcHJvcHMudGltZW91dCxcbiAgICAgICAgICAgIGNvdW50OiBwcm9wcy5jb3VudCA/IHByb3BzLmNvdW50IDogMSxcbiAgICAgICAgICAgIGhhbmRsZTogcHJvcHMuaGFuZGxlLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1dhaXRDb25kaXRpb247XG4gICAgICAgIHRoaXMuYXR0ckRhdGEgPSByb3NXYWl0Q29uZGl0aW9uLmF0dHJEYXRhO1xuICAgICAgICB0aGlzLmF0dHJFcnJvckRhdGEgPSByb3NXYWl0Q29uZGl0aW9uLmF0dHJFcnJvckRhdGE7XG4gICAgICAgIHRoaXMuYXR0ckpvaW5lZEVycm9yRGF0YSA9IHJvc1dhaXRDb25kaXRpb24uYXR0ckpvaW5lZEVycm9yRGF0YTtcbiAgICB9XG59XG4iXX0=