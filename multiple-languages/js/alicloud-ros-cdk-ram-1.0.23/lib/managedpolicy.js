"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedPolicy = exports.ManagedPolicyProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ram_generated_1 = require("./ram.generated");
Object.defineProperty(exports, "ManagedPolicyProperty", { enumerable: true, get: function () { return ram_generated_1.RosManagedPolicy; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::ManagedPolicy`, which is used to create a Resource Access Management (RAM) policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosManagedPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-managedpolicy
 */
class ManagedPolicy extends ros.Resource {
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
        const rosManagedPolicy = new ram_generated_1.RosManagedPolicy(this, id, {
            ignoreExisting: props.ignoreExisting === undefined || props.ignoreExisting === null ? false : props.ignoreExisting,
            description: props.description,
            groups: props.groups,
            policyName: props.policyName,
            policyDocumentUnchecked: props.policyDocumentUnchecked,
            policyDocument: props.policyDocument,
            roles: props.roles,
            users: props.users,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosManagedPolicy;
        this.attrPolicyName = rosManagedPolicy.attrPolicyName;
    }
}
exports.ManagedPolicy = ManagedPolicy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlZHBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hbmFnZWRwb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBb0RsRDs7OztHQUlHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXM0M7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBeUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JELGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYztZQUNsSCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1Qix1QkFBdUIsRUFBRSxLQUFLLENBQUMsdUJBQXVCO1lBQ3RELGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ3JCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7SUFDMUQsQ0FBQztDQUNKO0FBcENELHNDQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc01hbmFnZWRQb2xpY3kgfSBmcm9tICcuL3JhbS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NNYW5hZ2VkUG9saWN5IGFzIE1hbmFnZWRQb2xpY3lQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYE1hbmFnZWRQb2xpY3lgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmFtLW1hbmFnZWRwb2xpY3lcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYW5hZ2VkUG9saWN5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcG9saWN5TmFtZTogU3BlY2lmaWVzIHRoZSBhdXRob3JpemF0aW9uIHBvbGljeSBuYW1lLCBjb250YWluaW5nIHVwIHRvIDEyOCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGljeU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBTcGVjaWZpZXMgdGhlIGF1dGhvcml6YXRpb24gcG9saWN5IGRlc2NyaXB0aW9uLCBjb250YWluaW5nIHVwIHRvIDEwMjQgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGdyb3VwczogVGhlIG5hbWVzIG9mIGdyb3VwcyB0byBhdHRhY2ggdG8gdGhpcyBwb2xpY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBzPzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlnbm9yZUV4aXN0aW5nOiBXaGV0aGVyIHRvIGlnbm9yZSBleGlzdGluZyBwb2xpY3lcbiAgICAgKiBGYWxzZTogUk9TIHdpbGwgcGVyZm9ybSBhIHVuaXF1ZW5lc3MgY2hlY2suSWYgYSBwb2xpY3kgd2l0aCB0aGUgc2FtZSBuYW1lIGV4aXN0cywgYW4gZXJyb3Igd2lsbCBiZSByZXBvcnRlZCB3aGVuIGNyZWF0aW5nIGl0LlxuICAgICAqIFRydWU6IFJPUyB3aWxsIG5vdCBjaGVjayB0aGUgdW5pcXVlbmVzcy5JZiB0aGVyZSBpcyBhIHBvbGljeSB3aXRoIHRoZSBzYW1lIG5hbWUsIHRoZSBwb2xpY3kgY3JlYXRpb24gcHJvY2VzcyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICogSWYgdGhlIHBvbGljeSBpcyBub3QgY3JlYXRlZCBieSBST1MsIGl0IHdpbGwgYmUgaWdub3JlZCBkdXJpbmcgdXBkYXRlIGFuZCBkZWxldGUgc3RhZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWdub3JlRXhpc3Rpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcG9saWN5RG9jdW1lbnQ6IEEgcG9saWN5IGRvY3VtZW50IHRoYXQgZGVzY3JpYmVzIHdoYXQgYWN0aW9ucyBhcmUgYWxsb3dlZCBvbiB3aGljaCByZXNvdXJjZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5RG9jdW1lbnQ/OiBSb3NNYW5hZ2VkUG9saWN5LlBvbGljeURvY3VtZW50UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwb2xpY3lEb2N1bWVudFVuY2hlY2tlZDogQSBwb2xpY3kgZG9jdW1lbnQgdGhhdCBkZXNjcmliZXMgd2hhdCBhY3Rpb25zIGFyZSBhbGxvd2VkIG9uIHdoaWNoIHJlc291cmNlcy4gSWYgaXQgaXMgc3BlY2lmaWVkLCBQb2xpY3lEb2N1bWVudCB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5RG9jdW1lbnRVbmNoZWNrZWQ/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb2xlczogVGhlIG5hbWVzIG9mIHJvbGVzIHRvIGF0dGFjaCB0byB0aGlzIHBvbGljeS5cbiAgICAgKi9cbiAgICByZWFkb25seSByb2xlcz86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1c2VyczogVGhlIG5hbWVzIG9mIHVzZXJzIHRvIGF0dGFjaCB0byB0aGlzIHBvbGljeS5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2Vycz86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJBTTo6TWFuYWdlZFBvbGljeWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgUmVzb3VyY2UgQWNjZXNzIE1hbmFnZW1lbnQgKFJBTSkgcG9saWN5LlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zTWFuYWdlZFBvbGljeWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1tYW5hZ2VkcG9saWN5XG4gKi9cbmV4cG9ydCBjbGFzcyBNYW5hZ2VkUG9saWN5IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBNYW5hZ2VkUG9saWN5UHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBvbGljeU5hbWU6IFdoZW4gdGhlIGxvZ2ljYWwgSUQgb2YgdGhpcyByZXNvdXJjZSBpcyBwcm92aWRlZCB0byB0aGUgUmVmIGludHJpbnNpYyBmdW5jdGlvbiwgUmVmIHJldHVybnMgdGhlIEFSTi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBvbGljeU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBNYW5hZ2VkUG9saWN5UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NNYW5hZ2VkUG9saWN5ID0gbmV3IFJvc01hbmFnZWRQb2xpY3kodGhpcywgaWQsICB7XG4gICAgICAgICAgICBpZ25vcmVFeGlzdGluZzogcHJvcHMuaWdub3JlRXhpc3RpbmcgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5pZ25vcmVFeGlzdGluZyA9PT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuaWdub3JlRXhpc3RpbmcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBncm91cHM6IHByb3BzLmdyb3VwcyxcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IHByb3BzLnBvbGljeU5hbWUsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudFVuY2hlY2tlZDogcHJvcHMucG9saWN5RG9jdW1lbnRVbmNoZWNrZWQsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudDogcHJvcHMucG9saWN5RG9jdW1lbnQsXG4gICAgICAgICAgICByb2xlczogcHJvcHMucm9sZXMsXG4gICAgICAgICAgICB1c2VyczogcHJvcHMudXNlcnMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zTWFuYWdlZFBvbGljeTtcbiAgICAgICAgdGhpcy5hdHRyUG9saWN5TmFtZSA9IHJvc01hbmFnZWRQb2xpY3kuYXR0clBvbGljeU5hbWU7XG4gICAgfVxufVxuIl19