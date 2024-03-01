"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSource = exports.ServiceSourceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mse_generated_1 = require("./mse.generated");
Object.defineProperty(exports, "ServiceSourceProperty", { enumerable: true, get: function () { return mse_generated_1.RosServiceSource; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::ServiceSource`, which is used to create a Nacos service source.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServiceSource`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
 */
class ServiceSource extends ros.Resource {
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
        const rosServiceSource = new mse_generated_1.RosServiceSource(this, id, {
            gatewayUniqueId: props.gatewayUniqueId,
            ingressOptions: props.ingressOptions,
            groupList: props.groupList,
            address: props.address,
            pathList: props.pathList,
            source: props.source,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServiceSource;
        this.attrAddress = rosServiceSource.attrAddress;
        this.attrGatewayUniqueId = rosServiceSource.attrGatewayUniqueId;
        this.attrId = rosServiceSource.attrId;
        this.attrName = rosServiceSource.attrName;
    }
}
exports.ServiceSource = ServiceSource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2Vzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBbURsRDs7OztHQUlHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUE0QjNDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGdCQUFnQixHQUFHLElBQUksZ0NBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUFDOUMsQ0FBQztDQUNKO0FBdkRELHNDQXVEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NlcnZpY2VTb3VyY2UgfSBmcm9tICcuL21zZS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTZXJ2aWNlU291cmNlIGFzIFNlcnZpY2VTb3VyY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFNlcnZpY2VTb3VyY2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbXNlLXNlcnZpY2Vzb3VyY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlU291cmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ2F0ZXdheVVuaXF1ZUlkOiBUaGUgdW5pcXVlIElEIG9mIHRoZSBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdhdGV3YXlVbmlxdWVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUuXG4gICAgICogSWYgU291cmNlPUs4UywgdGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBBQ0sgY2x1c3Rlci5cbiAgICAgKiBJZiBTb3VyY2U9TVNFLCB0aGlzIHBhcmFtZXRlciBzcGVjaWZpZXMgdGhlIElEIG9mIHRoZSBOYWNvcyBpbnN0YW5jZS5cbiAgICAgKiBJZiBTb3VyY2U9TVNFX1pLLCB0aGlzIHBhcmFtZXRlciBzcGVjaWZpZXMgdGhlIElEIG9mIHRoZSBab29LZWVwZXIgaW5zdGFuY2UuXG4gICAgICogSWYgU291cmNlPUVEQVMsIHRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB0aGUgSUQgb2YgdGhlIEVEQVMgbmFtZXNwYWNlLlxuICAgICAqIElmIFNvdXJjZT1TQUUsIHRoaXMgcGFyYW1ldGVyIHNwZWNpZmllcyB0aGUgSUQgb2YgdGhlIFNBRSBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc291cmNlOiBUaGUgc2VydmljZSBzb3VyY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBLOFM6IEFDSyBjbHVzdGVyXG4gICAgICogTVNFOiBNU0UgTmFjb3MgaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2U6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFkZHJlc3M6IFJlZ2lzdHJhdGlvbiBBZGRyZXNzLiBJZiBub3Qgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhZGRyZXNzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ3JvdXBMaXN0OiBUaGUgbGlzdCBvZiBzZXJ2aWNlIGdyb3Vwcy4gVGhpcyBpcyByZXF1aXJlZCB3aGVuIFNvdXJjZT1FREFTLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwTGlzdD86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbmdyZXNzT3B0aW9uczogVGhlIEluZ3Jlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbmdyZXNzT3B0aW9ucz86IFJvc1NlcnZpY2VTb3VyY2UuSW5ncmVzc09wdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhdGhMaXN0OiBBbiBhcnJheSBvZiBzZXJ2aWNlIHJvb3QgcGF0aHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGF0aExpc3Q/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpNU0U6OlNlcnZpY2VTb3VyY2VgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIE5hY29zIHNlcnZpY2Ugc291cmNlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zU2VydmljZVNvdXJjZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW1zZS1zZXJ2aWNlc291cmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlU291cmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBTZXJ2aWNlU291cmNlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFkZHJlc3M6IFJlZ2lzdHJhdGlvbiBBZGRyZXNzLiBJZiBub3Qgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFkZHJlc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBHYXRld2F5VW5pcXVlSWQ6IFRoZSB1bmlxdWUgSUQgb2YgdGhlIGdhdGV3YXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHYXRld2F5VW5pcXVlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJZDogVGhlIElEIG9mIHNlcnZpY2Ugc291cmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOYW1lOiBUaGUgbmFtZS5cbklmIFR5cGUgaXMgc2V0IHRvIEs4UywgdGhpcyBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBBQ0sgY2x1c3Rlci5cbklmIFR5cGUgaXMgc2V0IHRvIE5BQ09TLCB0aGlzIHBhcmFtZXRlciBzcGVjaWZpZXMgdGhlIElEIG9mIHRoZSBOYWNvcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTZXJ2aWNlU291cmNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NTZXJ2aWNlU291cmNlID0gbmV3IFJvc1NlcnZpY2VTb3VyY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBnYXRld2F5VW5pcXVlSWQ6IHByb3BzLmdhdGV3YXlVbmlxdWVJZCxcbiAgICAgICAgICAgIGluZ3Jlc3NPcHRpb25zOiBwcm9wcy5pbmdyZXNzT3B0aW9ucyxcbiAgICAgICAgICAgIGdyb3VwTGlzdDogcHJvcHMuZ3JvdXBMaXN0LFxuICAgICAgICAgICAgYWRkcmVzczogcHJvcHMuYWRkcmVzcyxcbiAgICAgICAgICAgIHBhdGhMaXN0OiBwcm9wcy5wYXRoTGlzdCxcbiAgICAgICAgICAgIHNvdXJjZTogcHJvcHMuc291cmNlLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTZXJ2aWNlU291cmNlO1xuICAgICAgICB0aGlzLmF0dHJBZGRyZXNzID0gcm9zU2VydmljZVNvdXJjZS5hdHRyQWRkcmVzcztcbiAgICAgICAgdGhpcy5hdHRyR2F0ZXdheVVuaXF1ZUlkID0gcm9zU2VydmljZVNvdXJjZS5hdHRyR2F0ZXdheVVuaXF1ZUlkO1xuICAgICAgICB0aGlzLmF0dHJJZCA9IHJvc1NlcnZpY2VTb3VyY2UuYXR0cklkO1xuICAgICAgICB0aGlzLmF0dHJOYW1lID0gcm9zU2VydmljZVNvdXJjZS5hdHRyTmFtZTtcbiAgICB9XG59XG4iXX0=