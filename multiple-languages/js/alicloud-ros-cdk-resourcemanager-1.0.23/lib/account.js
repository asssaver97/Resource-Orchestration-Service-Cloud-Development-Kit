"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = exports.AccountProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const resourcemanager_generated_1 = require("./resourcemanager.generated");
Object.defineProperty(exports, "AccountProperty", { enumerable: true, get: function () { return resourcemanager_generated_1.RosAccount; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::Account`, which is used to create a resource account as a member account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
 */
class Account extends ros.Resource {
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
        const rosAccount = new resourcemanager_generated_1.RosAccount(this, id, {
            payerAccountId: props.payerAccountId,
            displayName: props.displayName,
            folderId: props.folderId,
            deleteAccount: props.deleteAccount,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
        this.attrAccountId = rosAccount.attrAccountId;
        this.attrDisplayName = rosAccount.attrDisplayName;
        this.attrFolderId = rosAccount.attrFolderId;
        this.attrJoinMethod = rosAccount.attrJoinMethod;
        this.attrResourceDirectoryId = rosAccount.attrResourceDirectoryId;
        this.attrType = rosAccount.attrType;
    }
}
exports.Account = Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDJFQUF5RDtBQUVsQyxnR0FGZCxzQ0FBVSxPQUVtQjtBQTZCdEM7Ozs7R0FJRztBQUNILE1BQWEsT0FBUSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBb0NyQzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxVQUFVLEdBQUcsSUFBSSxzQ0FBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQ3JDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQztRQUNoRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsVUFBVSxDQUFDLHVCQUF1QixDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUE5REQsMEJBOERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQWNjb3VudCB9IGZyb20gJy4vcmVzb3VyY2VtYW5hZ2VyLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0FjY291bnQgYXMgQWNjb3VudFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQWNjb3VudGAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yZXNvdXJjZW1hbmFnZXItYWNjb3VudFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNwbGF5TmFtZTogTWVtYmVyIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNwbGF5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVsZXRlQWNjb3VudDogV2hldGhlciBkZWxldGUgdGhlIGFjY291bnQuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRlQWNjb3VudD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBmb2xkZXJJZDogVGhlIElEIG9mIHRoZSBwYXJlbnQgZm9sZGVyXG4gICAgICovXG4gICAgcmVhZG9ubHkgZm9sZGVySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXllckFjY291bnRJZDpcbiAgICAgKi9cbiAgICByZWFkb25seSBwYXllckFjY291bnRJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpBY2NvdW50YCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSByZXNvdXJjZSBhY2NvdW50IGFzIGEgbWVtYmVyIGFjY291bnQuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NBY2NvdW50YGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLWFjY291bnRcbiAqL1xuZXhwb3J0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEFjY291bnRQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWNjb3VudElkOiBUaGlzIElEIG9mIFJlc291cmNlIE1hbmFnZXIgQWNjb3VudFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjb3VudElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGlzcGxheU5hbWU6IE1lbWJlciBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEaXNwbGF5TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEZvbGRlcklkOiBUaGUgSUQgb2YgdGhlIHBhcmVudCBmb2xkZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZvbGRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSm9pbk1ldGhvZDogV2F5cyBmb3IgbWVtYmVycyB0byBqb2luIHRoZSByZXNvdXJjZSBkaXJlY3RvcnkuIFZhbGlkIHZhbHVlczogaW52aXRlZCwgY3JlYXRlZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySm9pbk1ldGhvZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc291cmNlRGlyZWN0b3J5SWQ6IFJlc291cmNlIGRpcmVjdG9yeSBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VEaXJlY3RvcnlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFR5cGU6IE1lbWJlciB0eXBlLiBUaGUgdmFsdWUgb2YgUmVzb3VyY2VBY2NvdW50IGluZGljYXRlcyB0aGUgcmVzb3VyY2UgYWNjb3VudFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEFjY291bnRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0FjY291bnQgPSBuZXcgUm9zQWNjb3VudCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHBheWVyQWNjb3VudElkOiBwcm9wcy5wYXllckFjY291bnRJZCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBwcm9wcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGZvbGRlcklkOiBwcm9wcy5mb2xkZXJJZCxcbiAgICAgICAgICAgIGRlbGV0ZUFjY291bnQ6IHByb3BzLmRlbGV0ZUFjY291bnQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQWNjb3VudDtcbiAgICAgICAgdGhpcy5hdHRyQWNjb3VudElkID0gcm9zQWNjb3VudC5hdHRyQWNjb3VudElkO1xuICAgICAgICB0aGlzLmF0dHJEaXNwbGF5TmFtZSA9IHJvc0FjY291bnQuYXR0ckRpc3BsYXlOYW1lO1xuICAgICAgICB0aGlzLmF0dHJGb2xkZXJJZCA9IHJvc0FjY291bnQuYXR0ckZvbGRlcklkO1xuICAgICAgICB0aGlzLmF0dHJKb2luTWV0aG9kID0gcm9zQWNjb3VudC5hdHRySm9pbk1ldGhvZDtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VEaXJlY3RvcnlJZCA9IHJvc0FjY291bnQuYXR0clJlc291cmNlRGlyZWN0b3J5SWQ7XG4gICAgICAgIHRoaXMuYXR0clR5cGUgPSByb3NBY2NvdW50LmF0dHJUeXBlO1xuICAgIH1cbn1cbiJdfQ==