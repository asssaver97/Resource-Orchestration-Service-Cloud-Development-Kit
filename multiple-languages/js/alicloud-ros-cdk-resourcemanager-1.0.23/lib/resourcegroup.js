"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceGroup = exports.ResourceGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const resourcemanager_generated_1 = require("./resourcemanager.generated");
Object.defineProperty(exports, "ResourceGroupProperty", { enumerable: true, get: function () { return resourcemanager_generated_1.RosResourceGroup; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ResourceGroup`, which is used to create a resource group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
 */
class ResourceGroup extends ros.Resource {
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
        const rosResourceGroup = new resourcemanager_generated_1.RosResourceGroup(this, id, {
            displayName: props.displayName,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceGroup;
        this.attrAccountId = rosResourceGroup.attrAccountId;
        this.attrDisplayName = rosResourceGroup.attrDisplayName;
        this.attrId = rosResourceGroup.attrId;
        this.attrName = rosResourceGroup.attrName;
        this.attrRegionStatuses = rosResourceGroup.attrRegionStatuses;
    }
}
exports.ResourceGroup = ResourceGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2Vncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc291cmNlZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDJFQUErRDtBQUVsQyxzR0FGcEIsNENBQWdCLE9BRXlCO0FBbUJsRDs7OztHQUlHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUErQjNDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGdCQUFnQixHQUFHLElBQUksNENBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO0lBQ2xFLENBQUM7Q0FDSjtBQXRERCxzQ0FzREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NSZXNvdXJjZUdyb3VwIH0gZnJvbSAnLi9yZXNvdXJjZW1hbmFnZXIuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUmVzb3VyY2VHcm91cCBhcyBSZXNvdXJjZUdyb3VwUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSZXNvdXJjZUdyb3VwYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1yZXNvdXJjZWdyb3VwXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRpc3BsYXlOYW1lOiBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSByZXNvdXJjZSBncm91cFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc3BsYXlOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHJlc291cmNlIGdyb3VwXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlJlc291cmNlR3JvdXBgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIHJlc291cmNlIGdyb3VwLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zUmVzb3VyY2VHcm91cGBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1yZXNvdXJjZWdyb3VwXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUdyb3VwIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBSZXNvdXJjZUdyb3VwUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFjY291bnRJZDogVGhlIElEIG9mIHRoZSBBbGliYWJhIENsb3VkIGFjY291bnQgdG8gd2hpY2ggdGhlIHJlc291cmNlIGdyb3VwIGJlbG9uZ3NcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY291bnRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERpc3BsYXlOYW1lOiBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSByZXNvdXJjZSBncm91cFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGlzcGxheU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOYW1lOiBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHJlc291cmNlIGdyb3VwXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVnaW9uU3RhdHVzZXM6IFRoZSBzdGF0dXMgb2YgdGhlIHJlc291cmNlIGdyb3VwIGluIGFsbCByZWdpb25zXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZWdpb25TdGF0dXNlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJlc291cmNlR3JvdXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc1Jlc291cmNlR3JvdXAgPSBuZXcgUm9zUmVzb3VyY2VHcm91cCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBwcm9wcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUmVzb3VyY2VHcm91cDtcbiAgICAgICAgdGhpcy5hdHRyQWNjb3VudElkID0gcm9zUmVzb3VyY2VHcm91cC5hdHRyQWNjb3VudElkO1xuICAgICAgICB0aGlzLmF0dHJEaXNwbGF5TmFtZSA9IHJvc1Jlc291cmNlR3JvdXAuYXR0ckRpc3BsYXlOYW1lO1xuICAgICAgICB0aGlzLmF0dHJJZCA9IHJvc1Jlc291cmNlR3JvdXAuYXR0cklkO1xuICAgICAgICB0aGlzLmF0dHJOYW1lID0gcm9zUmVzb3VyY2VHcm91cC5hdHRyTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyUmVnaW9uU3RhdHVzZXMgPSByb3NSZXNvdXJjZUdyb3VwLmF0dHJSZWdpb25TdGF0dXNlcztcbiAgICB9XG59XG4iXX0=