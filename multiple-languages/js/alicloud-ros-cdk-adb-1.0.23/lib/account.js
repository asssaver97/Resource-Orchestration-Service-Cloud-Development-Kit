"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = exports.AccountProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const adb_generated_1 = require("./adb.generated");
Object.defineProperty(exports, "AccountProperty", { enumerable: true, get: function () { return adb_generated_1.RosAccount; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ADB::Account`, which is used to create a database account for an AnalyticDB for MySQL cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
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
        const rosAccount = new adb_generated_1.RosAccount(this, id, {
            accountDescription: props.accountDescription,
            dbClusterId: props.dbClusterId,
            accountType: props.accountType,
            accountPassword: props.accountPassword,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
        this.attrAccountName = rosAccount.attrAccountName;
        this.attrAccountType = rosAccount.attrAccountType;
        this.attrDbClusterId = rosAccount.attrDbClusterId;
    }
}
exports.Account = Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE2QztBQUV0QixnR0FGZCwwQkFBVSxPQUVtQjtBQXlDdEM7Ozs7R0FJRztBQUNILE1BQWEsT0FBUSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBcUJyQzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxVQUFVLEdBQUcsSUFBSSwwQkFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDakMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDdEQsQ0FBQztDQUNKO0FBN0NELDBCQTZDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0FjY291bnQgfSBmcm9tICcuL2FkYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBY2NvdW50IGFzIEFjY291bnRQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFjY291bnRgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tYWRiLWFjY291bnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNjb3VudE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhY2NvdW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY291bnROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2NvdW50UGFzc3dvcmQ6IFRoZSBwYXNzd29yZCBvZiB0aGUgYWNjb3VudC5cbiAgICAgKiBUaGUgcGFzc3dvcmQgbXVzdCBjb250YWluIHVwcGVyY2FzZSBsZXR0ZXJzLCBsb3dlcmNhc2UgbGV0dGVycywgZGlnaXRzLCBhbmQgc3BlY2lhbFxuICAgICAqIGNoYXJhY3RlcnMuXG4gICAgICogU3BlY2lhbCBjaGFyYWN0ZXJzIGluY2x1ZGUgISBAICMgJCAlIF4gJiAqICgpICBfICsgLSBhbmQgPVxuICAgICAqIFRoZSBwYXNzd29yZCBtdXN0IGJlIDggdG8gMzIgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjb3VudFBhc3N3b3JkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkNsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiQ2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2NvdW50RGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYWNjb3VudC5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gY2Fubm90IHN0YXJ0IHdpdGggaHR0cDpcXC9cXC9vciBodHRwczpcXC9cXC8uXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIGNhbiBiZSB1cCB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjb3VudERlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNjb3VudFR5cGU6IE5vcm1hbDogc3RhbmRhcmQgYWNjb3VudFxuICAgICAqIFN1cGVyOiBwcml2aWxlZ2VkIGFjY291bnRcbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NvdW50VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6QURCOjpBY2NvdW50YCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBkYXRhYmFzZSBhY2NvdW50IGZvciBhbiBBbmFseXRpY0RCIGZvciBNeVNRTCBjbHVzdGVyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zQWNjb3VudGBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFkYi1hY2NvdW50XG4gKi9cbmV4cG9ydCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBBY2NvdW50UHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFjY291bnROYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWNjb3VudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY291bnROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWNjb3VudFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBhY2NvdW50LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjb3VudFR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEQkNsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJDbHVzdGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBY2NvdW50UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NBY2NvdW50ID0gbmV3IFJvc0FjY291bnQodGhpcywgaWQsICB7XG4gICAgICAgICAgICBhY2NvdW50RGVzY3JpcHRpb246IHByb3BzLmFjY291bnREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRiQ2x1c3RlcklkOiBwcm9wcy5kYkNsdXN0ZXJJZCxcbiAgICAgICAgICAgIGFjY291bnRUeXBlOiBwcm9wcy5hY2NvdW50VHlwZSxcbiAgICAgICAgICAgIGFjY291bnRQYXNzd29yZDogcHJvcHMuYWNjb3VudFBhc3N3b3JkLFxuICAgICAgICAgICAgYWNjb3VudE5hbWU6IHByb3BzLmFjY291bnROYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0FjY291bnQ7XG4gICAgICAgIHRoaXMuYXR0ckFjY291bnROYW1lID0gcm9zQWNjb3VudC5hdHRyQWNjb3VudE5hbWU7XG4gICAgICAgIHRoaXMuYXR0ckFjY291bnRUeXBlID0gcm9zQWNjb3VudC5hdHRyQWNjb3VudFR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckRiQ2x1c3RlcklkID0gcm9zQWNjb3VudC5hdHRyRGJDbHVzdGVySWQ7XG4gICAgfVxufVxuIl19