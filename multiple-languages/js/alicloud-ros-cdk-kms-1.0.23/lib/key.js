"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = exports.KeyProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const kms_generated_1 = require("./kms.generated");
Object.defineProperty(exports, "KeyProperty", { enumerable: true, get: function () { return kms_generated_1.RosKey; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::KMS::Key`, which is used to create a customer master key (CMK).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKey`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
 */
class Key extends ros.Resource {
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
        const rosKey = new kms_generated_1.RosKey(this, id, {
            protectionLevel: props.protectionLevel,
            description: props.description,
            rotationInterval: props.rotationInterval,
            pendingWindowInDays: props.pendingWindowInDays === undefined || props.pendingWindowInDays === null ? 30 : props.pendingWindowInDays,
            enableAutomaticRotation: props.enableAutomaticRotation,
            keySpec: props.keySpec,
            enable: props.enable === undefined || props.enable === null ? true : props.enable,
            keyUsage: props.keyUsage,
            dkmsInstanceId: props.dkmsInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKey;
        this.attrKeyId = rosKey.attrKeyId;
    }
}
exports.Key = Key;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsia2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBeUM7QUFFdEIsNEZBRlYsc0JBQU0sT0FFZTtBQTJEOUI7Ozs7R0FJRztBQUNILE1BQWEsR0FBSSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBV2pDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQWtCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUMvRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sTUFBTSxHQUFHLElBQUksc0JBQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ2pDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG1CQUFtQjtZQUNuSSx1QkFBdUIsRUFBRSxLQUFLLENBQUMsdUJBQXVCO1lBQ3RELE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDakYsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztTQUN2QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztDQUNKO0FBckNELGtCQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0tleSB9IGZyb20gJy4va21zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0tleSBhcyBLZXlQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEtleWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1rbXMta2V5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgS2V5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgQ01LLiBMZW5ndGggY29uc3RyYWludHM6IE1pbmltdW0gbGVuZ3RoIG9mIDAgY2hhcmFjdGVycy4gTWF4aW11bSBsZW5ndGggb2YgODE5MiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGttc0luc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgZGVkaWNhdGVkIEtNUyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBka21zSW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuYWJsZTogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGtleSBpcyBlbmFibGVkLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmFibGVBdXRvbWF0aWNSb3RhdGlvbjogV2hldGhlciB0byBlbmFibGUgYXV0b21hdGljIGtleSByb3RhdGlvbi4gVmFsaWQgdmFsdWU6IHRydWVcXC9mYWxzZSAoZGVmYXVsdClcbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVBdXRvbWF0aWNSb3RhdGlvbj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBrZXlTcGVjOiBLZXkgdHlwZS4gVmFsaWQgdmFsdWU6IEFsaXl1bl9BRVNfMjU2XFwvQWxpeXVuX1NNNFxcL1JTQV8yMDQ4XFwvRUNfUDI1NlxcL0VDX1AyNTZLXFwvRUNfU00yXG4gICAgICovXG4gICAgcmVhZG9ubHkga2V5U3BlYz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGtleVVzYWdlOiBUaGUgdXNhZ2Ugb2YgdGhlIENNSy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEVOQ1JZUFRcXC9ERUNSWVBUOiBlbmNyeXB0cyBvciBkZWNyeXB0cyBkYXRhLlxuICAgICAqIFNJR05cXC9WRVJJRlk6IGdlbmVyYXRlcyBvciB2ZXJpZmllcyBhIGRpZ2l0YWwgc2lnbmF0dXJlLlxuICAgICAqIElmIHRoZSBDTUsgc3VwcG9ydHMgc2lnbmF0dXJlIHZlcmlmaWNhdGlvbiwgdGhlIGRlZmF1bHQgdmFsdWUgaXMgU0lHTlxcL1ZFUklGWS4gSWYgdGhlIENNSyBkb2VzIG5vdCBzdXBwb3J0IHNpZ25hdHVyZSB2ZXJpZmljYXRpb24sIHRoZSBkZWZhdWx0IHZhbHVlIGlzIEVOQ1JZUFRcXC9ERUNSWVBULlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVVzYWdlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVuZGluZ1dpbmRvd0luRGF5czogVGhlIHdhaXRpbmcgcGVyaW9kLCBzcGVjaWZpZWQgaW4gbnVtYmVyIG9mIGRheXMuIER1cmluZyB0aGlzIHBlcmlvZCwgeW91IGNhbiBjYW5jZWwgdGhlIENNSyBpbiBQZW5kaW5nRGVsZXRpb24gc3RhdHVzLiBBZnRlciB0aGUgd2FpdGluZyBwZXJpb2QgZXhwaXJlcywgeW91IGNhbm5vdCBjYW5jZWwgdGhlIGRlbGV0aW9uLiBUaGUgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDcgYW5kIDM2Ni4gRGVmYXVsdCB2YWx1ZSBpcyAzMC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZW5kaW5nV2luZG93SW5EYXlzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvdGVjdGlvbkxldmVsOiBUaGUgcHJvdGVjdGlvbiBsZXZlbCBvZiB0aGUgQ01LIHRvIGNyZWF0ZS4gVmFsaWQgdmFsdWU6IFNPRlRXQVJFIGFuZCBIU00uIFdoZW4gdGhpcyBwYXJhbWV0ZXIgaXMgc2V0IHRvIEhTTTpcbiAgICAgKiBJZiB0aGUgT3JpZ2luIHBhcmFtZXRlciBpcyBzZXQgdG8gQWxpeXVuX0tNUywgdGhlIENNSyBpcyBjcmVhdGVkIGluIE1hbmFnZWQgSFNNLlxuICAgICAqIElmIHRoZSBPcmlnaW4gcGFyYW1ldGVyIGlzIHNldCB0byBFWFRFUk5BTCwgeW91IGNhbiBpbXBvcnQgZXh0ZXJuYWwga2V5cyB0byBNYW5hZ2VkIEhTTS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm90ZWN0aW9uTGV2ZWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb3RhdGlvbkludGVydmFsOiBUaGUgdGltZSBwZXJpb2QgZm9yIGF1dG9tYXRpYyByb3RhdGlvbi4gVGhlIGZvcm1hdCBpcyBpbnRlZ2VyW3VuaXRdLCB3aGVyZSBpbnRlZ2VyIHJlcHJlc2VudHMgdGhlIGxlbmd0aCBvZiB0aW1lIGFuZCB1bml0IHJlcHJlc2VudHMgdGhlIHRpbWUgdW5pdC4gVGhlIGxlZ2FsIHVuaXQgdW5pdHMgYXJlOiBkIChkYXkpLCBoIChob3VyKSwgbSAobWludXRlKSwgcyAoc2Vjb25kKS4gN2Qgb3IgNjA0ODAwcyBib3RoIHJlcHJlc2VudCBhIDctZGF5IGN5Y2xlLiBWYWx1ZTogN343MzAgZGF5cy5cbiAgICAgKi9cbiAgICByZWFkb25seSByb3RhdGlvbkludGVydmFsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpLTVM6OktleWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgY3VzdG9tZXIgbWFzdGVyIGtleSAoQ01LKS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0tleWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWttcy1rZXlcbiAqL1xuZXhwb3J0IGNsYXNzIEtleSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogS2V5UHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEtleUlkOiBUaGUgZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBDTUsuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJLZXlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEtleVByb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NLZXkgPSBuZXcgUm9zS2V5KHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcHJvdGVjdGlvbkxldmVsOiBwcm9wcy5wcm90ZWN0aW9uTGV2ZWwsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByb3RhdGlvbkludGVydmFsOiBwcm9wcy5yb3RhdGlvbkludGVydmFsLFxuICAgICAgICAgICAgcGVuZGluZ1dpbmRvd0luRGF5czogcHJvcHMucGVuZGluZ1dpbmRvd0luRGF5cyA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBlbmRpbmdXaW5kb3dJbkRheXMgPT09IG51bGwgPyAzMCA6IHByb3BzLnBlbmRpbmdXaW5kb3dJbkRheXMsXG4gICAgICAgICAgICBlbmFibGVBdXRvbWF0aWNSb3RhdGlvbjogcHJvcHMuZW5hYmxlQXV0b21hdGljUm90YXRpb24sXG4gICAgICAgICAgICBrZXlTcGVjOiBwcm9wcy5rZXlTcGVjLFxuICAgICAgICAgICAgZW5hYmxlOiBwcm9wcy5lbmFibGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5lbmFibGUgPT09IG51bGwgPyB0cnVlIDogcHJvcHMuZW5hYmxlLFxuICAgICAgICAgICAga2V5VXNhZ2U6IHByb3BzLmtleVVzYWdlLFxuICAgICAgICAgICAgZGttc0luc3RhbmNlSWQ6IHByb3BzLmRrbXNJbnN0YW5jZUlkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0tleTtcbiAgICAgICAgdGhpcy5hdHRyS2V5SWQgPSByb3NLZXkuYXR0cktleUlkO1xuICAgIH1cbn1cbiJdfQ==