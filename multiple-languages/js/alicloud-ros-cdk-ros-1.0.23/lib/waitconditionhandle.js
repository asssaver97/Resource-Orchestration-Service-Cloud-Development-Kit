"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitConditionHandle = exports.WaitConditionHandleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ros_generated_1 = require("./ros.generated");
Object.defineProperty(exports, "WaitConditionHandleProperty", { enumerable: true, get: function () { return ros_generated_1.RosWaitConditionHandle; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::WaitConditionHandle`, which is used to receive signals. You can use ALIYUN::ROS::WaitConditionHandle together with ALIYUN::ROS::WaitCondition to manage the execution process of a stack. When you create an Elastic Compute Service (ECS) instance, a signal is sent during the execution of the user data.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWaitConditionHandle`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-waitconditionhandle
 */
class WaitConditionHandle extends ros.Resource {
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
        const rosWaitConditionHandle = new ros_generated_1.RosWaitConditionHandle(this, id, {
            mode: props.mode === undefined || props.mode === null ? 'Full' : props.mode,
            count: props.count === undefined || props.count === null ? -1 : props.count,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWaitConditionHandle;
        this.attrCurlCli = rosWaitConditionHandle.attrCurlCli;
        this.attrHeaders = rosWaitConditionHandle.attrHeaders;
        this.attrPowerShellCurlCli = rosWaitConditionHandle.attrPowerShellCurlCli;
        this.attrUrl = rosWaitConditionHandle.attrUrl;
        this.attrWindowsCurlCli = rosWaitConditionHandle.attrWindowsCurlCli;
    }
}
exports.WaitConditionHandle = WaitConditionHandle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdGNvbmRpdGlvbmhhbmRsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndhaXRjb25kaXRpb25oYW5kbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUF5RDtBQUV0Qiw0R0FGMUIsc0NBQXNCLE9BRStCO0FBOEI5RDs7OztHQUlHO0FBQ0gsTUFBYSxtQkFBb0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQStCakQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBa0MsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQy9ILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLHNDQUFzQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakUsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQzNFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLO1NBQzlFLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQyxXQUFXLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQyxXQUFXLENBQUM7UUFDdEQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHNCQUFzQixDQUFDLHFCQUFxQixDQUFDO1FBQzFFLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUMsT0FBTyxDQUFDO1FBQzlDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUN4RSxDQUFDO0NBQ0o7QUF0REQsa0RBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zV2FpdENvbmRpdGlvbkhhbmRsZSB9IGZyb20gJy4vcm9zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1dhaXRDb25kaXRpb25IYW5kbGUgYXMgV2FpdENvbmRpdGlvbkhhbmRsZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgV2FpdENvbmRpdGlvbkhhbmRsZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yb3Mtd2FpdGNvbmRpdGlvbmhhbmRsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFdhaXRDb25kaXRpb25IYW5kbGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb3VudDogVGhlcmUgYXJlIDMgcHJlY29uZGl0aW9ucyB0aGF0IG1ha2UgQ291bnQgdGFraW5nIGVmZmVjdDpcbiAgICAgKiAxLk1vZGUgaXMgc2V0IHRvIEZ1bGwuXG4gICAgICogMi5Db3VudCA+PSAwLlxuICAgICAqIDMuVGhlIGlkIG9mIHNpZ25hbCBpcyBub3Qgc3BlY2lmaWVkLiBJZiBzbywgaXQgd2lsbCBiZSBhIHNlbGYtaW5jcmVhc2luZyBpbnRlZ2VyIHN0YXJ0ZWQgZnJvbSAxLiBGb3IgZXhhbXBsZSwgdGhlIGlkIG9mIHRoZSBmaXJzdCBzaWduYWwgaXMgMSwgdGhlIGlkIG9mIHRoZSBzZWNvbmQgc2lnbmFsIGlzIDIsIGFuZCBzbyBvbi5cbiAgICAgKiBcbiAgICAgKiBJZiBDb3VudCB0YWtlcyBlZmZlY3QsIHNpZ25hbHMgd2l0aCBpZCA+IENvdW50IHdpbGwgYmUgZGVsZXRlZCBiZWZvcmUgdXBkYXRlLlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIC0xLCB3aGljaCBtZWFucyBubyBlZmZlY3QuXG4gICAgICogSXQgaXMgcmVjb21tZW5kZWQgdG8gcXVvdGUgdGhlIHNhbWUgdmFsdWUgd2l0aCBXYWl0Q29uZGl0aW9uLkNvdW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvdW50PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbW9kZTogSWYgc2V0IHRvIEluY3JlbWVudCwgYWxsIG9sZCBzaWduYWxzIHdpbGwgYmUgZGVsZXRlZCBiZWZvcmUgdXBkYXRlLiBJbiB0aGlzIG1vZGUsIFdhaXRDb25kaXRpb24uQ291bnQgc2hvdWxkIHJlZmVyZW5jZSBhbiBpbmNyZW1lbnRhbCB2YWx1ZSBpbnN0ZWFkIG9mIGEgZnVsbCB2YWx1ZSwgc3VjaCBhcyBTY2FsaW5nR3JvdXBFbmFibGUuU2NhbGluZ1J1bGVBcmlzRXhlY3V0ZVJlc3VsdE51bWJlck9mQWRkZWRJbnN0YW5jZXMuXG4gICAgICogXG4gICAgICogSWYgc2V0IHRvIEZ1bGwsIG5vIG9sZCBzaWduYWwgd2lsbCBiZSBkZWxldGVkIHVubGVzcyBDb3VudCBpcyBzZXQuIEluIHRoaXMgbW9kZSwgV2FpdENvbmRpdGlvbi5Db3VudCBzaG91bGQgcmVmZXJlbmNlIGEgZnVsbCB2YWx1ZSwgc3VjaCBhcyB0aGUgc2FtZSB2YWx1ZSB3aXRoIEluc3RhbmNlR3JvdXAuTWF4QW1vdW50LiBJdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBtb2RlIHdpdGggQ291bnQuXG4gICAgICogXG4gICAgICogRGVmYXVsdCB0byBGdWxsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbkhhbmRsZWAsIHdoaWNoIGlzIHVzZWQgdG8gcmVjZWl2ZSBzaWduYWxzLiBZb3UgY2FuIHVzZSBBTElZVU46OlJPUzo6V2FpdENvbmRpdGlvbkhhbmRsZSB0b2dldGhlciB3aXRoIEFMSVlVTjo6Uk9TOjpXYWl0Q29uZGl0aW9uIHRvIG1hbmFnZSB0aGUgZXhlY3V0aW9uIHByb2Nlc3Mgb2YgYSBzdGFjay4gV2hlbiB5b3UgY3JlYXRlIGFuIEVsYXN0aWMgQ29tcHV0ZSBTZXJ2aWNlIChFQ1MpIGluc3RhbmNlLCBhIHNpZ25hbCBpcyBzZW50IGR1cmluZyB0aGUgZXhlY3V0aW9uIG9mIHRoZSB1c2VyIGRhdGEuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NXYWl0Q29uZGl0aW9uSGFuZGxlYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcm9zLXdhaXRjb25kaXRpb25oYW5kbGVcbiAqL1xuZXhwb3J0IGNsYXNzIFdhaXRDb25kaXRpb25IYW5kbGUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFdhaXRDb25kaXRpb25IYW5kbGVQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ3VybENsaTogQ29udmVuaWVuY2UgYXR0cmlidXRlLCBwcm92aWRlcyBjdXJsIENMSSBjb21tYW5kIHByZWZpeCwgd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHNpZ25hbGxpbmcgaGFuZGxlIGNvbXBsZXRpb24gb3IgZmFpbHVyZS4gIFlvdSBjYW4gc2lnbmFsIHN1Y2Nlc3MgYnkgYWRkaW5nIC0tZGF0YS1iaW5hcnkgJ3tcInN0YXR1c1wiOiBcIlNVQ0NFU1NcIn0nICwgb3Igc2lnbmFsIGZhaWx1cmUgYnkgYWRkaW5nIC0tZGF0YS1iaW5hcnkgJ3tcInN0YXR1c1wiOiBcIkZBSUxVUkVcIn0nXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDdXJsQ2xpOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSGVhZGVyczogSFRUUCBQT1NUIEhlYWRlcnMgdXNlZCBmb3Igc2lnbmFsbGluZyBoYW5kbGUgY29tcGxldGlvbiBvciBmYWlsdXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySGVhZGVyczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBvd2VyU2hlbGxDdXJsQ2xpOiBDb252ZW5pZW5jZSBhdHRyaWJ1dGUsIHByb3ZpZGVzIGN1cmwgQ0xJIGNvbW1hbmQgcHJlZml4IGZvciBQb3dlclNoZWxsLCB3aGljaCBjYW4gYmUgdXNlZCBmb3Igc2lnbmFsbGluZyBoYW5kbGUgY29tcGxldGlvbiBvciBmYWlsdXJlLiBBcyB0aGlzIGNtZGxldCB3YXMgaW50cm9kdWNlZCBpbiBQb3dlclNoZWxsIDMuMCwgZW5zdXJlIHRoZSB2ZXJzaW9uIG9mIFBvd2VyU2hlbGwgc2F0aXNmaWVzIHRoZSBjb25zdHJhaW50LiAoU2hvdyB0aGUgdmVyc2lvbiB2aWEgJFBTVmVyc2lvblRhYmxlLlBTVmVyc2lvbi4pIFlvdSBjYW4gc2lnbmFsIHN1Y2Nlc3MgYnkgYWRkaW5nIC1Cb2R5ICd7XCJzdGF0dXNcIjogXCJTVUNDRVNTXCJ9JyAsIG9yIHNpZ25hbCBmYWlsdXJlIGJ5IGFkZGluZyAtQm9keSAne1wic3RhdHVzXCI6IFwiRkFJTFVSRVwifSdcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBvd2VyU2hlbGxDdXJsQ2xpOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVVJMOiBIVFRQIFBPU1QgVVJMIHVzZWQgZm9yIHNpZ25hbGxpbmcgaGFuZGxlIGNvbXBsZXRpb24gb3IgZmFpbHVyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVybDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFdpbmRvd3NDdXJsQ2xpOiBDb252ZW5pZW5jZSBhdHRyaWJ1dGUsIHByb3ZpZGVzIGN1cmwgQ0xJIGNvbW1hbmQgcHJlZml4IGZvciBXaW5kb3dzLCB3aGljaCBjYW4gYmUgdXNlZCBmb3Igc2lnbmFsbGluZyBoYW5kbGUgY29tcGxldGlvbiBvciBmYWlsdXJlLiBBcyBXaW5kb3dzIGRvZXMgbm90IHN1cHBvcnQgY3VybCBjb21tYW5kLCB5b3UgbmVlZCB0byBpbnN0YWxsIGN1cmwuZXhlIGFuZCBhZGQgaXQgdG8gUEFUSCBmaXJzdC4gWW91IGNhbiBzaWduYWwgc3VjY2VzcyBieSBhZGRpbmcgLS1kYXRhLWJpbmFyeSBcIntcXFwic3RhdHVzXFxcIjogXFxcIlNVQ0NFU1NcXFwifVwiICwgb3Igc2lnbmFsIGZhaWx1cmUgYnkgYWRkaW5nIC0tZGF0YS1iaW5hcnkgXCJ7XFxcInN0YXR1c1xcXCI6IFxcXCJGQUlMVVJFXFxcIn1cIlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyV2luZG93c0N1cmxDbGk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBXYWl0Q29uZGl0aW9uSGFuZGxlUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc1dhaXRDb25kaXRpb25IYW5kbGUgPSBuZXcgUm9zV2FpdENvbmRpdGlvbkhhbmRsZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIG1vZGU6IHByb3BzLm1vZGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5tb2RlID09PSBudWxsID8gJ0Z1bGwnIDogcHJvcHMubW9kZSxcbiAgICAgICAgICAgIGNvdW50OiBwcm9wcy5jb3VudCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmNvdW50ID09PSBudWxsID8gLTEgOiBwcm9wcy5jb3VudCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NXYWl0Q29uZGl0aW9uSGFuZGxlO1xuICAgICAgICB0aGlzLmF0dHJDdXJsQ2xpID0gcm9zV2FpdENvbmRpdGlvbkhhbmRsZS5hdHRyQ3VybENsaTtcbiAgICAgICAgdGhpcy5hdHRySGVhZGVycyA9IHJvc1dhaXRDb25kaXRpb25IYW5kbGUuYXR0ckhlYWRlcnM7XG4gICAgICAgIHRoaXMuYXR0clBvd2VyU2hlbGxDdXJsQ2xpID0gcm9zV2FpdENvbmRpdGlvbkhhbmRsZS5hdHRyUG93ZXJTaGVsbEN1cmxDbGk7XG4gICAgICAgIHRoaXMuYXR0clVybCA9IHJvc1dhaXRDb25kaXRpb25IYW5kbGUuYXR0clVybDtcbiAgICAgICAgdGhpcy5hdHRyV2luZG93c0N1cmxDbGkgPSByb3NXYWl0Q29uZGl0aW9uSGFuZGxlLmF0dHJXaW5kb3dzQ3VybENsaTtcbiAgICB9XG59XG4iXX0=