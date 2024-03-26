"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalDatabaseNetworks = exports.GlobalDatabaseNetworksProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const polardb_generated_1 = require("./polardb.generated");
Object.defineProperty(exports, "GlobalDatabaseNetworksProperty", { enumerable: true, get: function () { return polardb_generated_1.RosGlobalDatabaseNetworks; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::POLARDB::GlobalDatabaseNetworks`, which is used to query all global database networks (GDNs) within the current Alibaba Cloud account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGlobalDatabaseNetworks`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
 */
class GlobalDatabaseNetworks extends ros.Resource {
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
        const rosGlobalDatabaseNetworks = new polardb_generated_1.RosGlobalDatabaseNetworks(this, id, {
            dbClusterId: props.dbClusterId,
            gdnId: props.gdnId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGlobalDatabaseNetworks;
        this.attrGdnIds = rosGlobalDatabaseNetworks.attrGdnIds;
        this.attrGlobalDatabaseNetworks = rosGlobalDatabaseNetworks.attrGlobalDatabaseNetworks;
    }
}
exports.GlobalDatabaseNetworks = GlobalDatabaseNetworks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsZGF0YWJhc2VuZXR3b3Jrcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdsb2JhbGRhdGFiYXNlbmV0d29ya3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDJEQUFnRTtBQUUxQiwrR0FGN0IsNkNBQXlCLE9BRWtDO0FBbUJwRTs7OztHQUlHO0FBQ0gsTUFBYSxzQkFBdUIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCcEQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBcUMsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ2xJLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLDZDQUF5QixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkUsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztTQUNyQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHlCQUF5QixDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcseUJBQXlCLENBQUMsVUFBVSxDQUFDO1FBQ3ZELElBQUksQ0FBQywwQkFBMEIsR0FBRyx5QkFBeUIsQ0FBQywwQkFBMEIsQ0FBQztJQUMzRixDQUFDO0NBQ0o7QUFwQ0Qsd0RBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zR2xvYmFsRGF0YWJhc2VOZXR3b3JrcyB9IGZyb20gJy4vcG9sYXJkYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NHbG9iYWxEYXRhYmFzZU5ldHdvcmtzIGFzIEdsb2JhbERhdGFiYXNlTmV0d29ya3NQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEdsb2JhbERhdGFiYXNlTmV0d29ya3NgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXBvbGFyZGItZ2xvYmFsZGF0YWJhc2VuZXR3b3Jrc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbERhdGFiYXNlTmV0d29ya3NQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkNsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiQ2x1c3RlcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ2RuSWQ6IFRoZSBJRCBvZiB0aGUgR0ROLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdkbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6UE9MQVJEQjo6R2xvYmFsRGF0YWJhc2VOZXR3b3Jrc2AsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgYWxsIGdsb2JhbCBkYXRhYmFzZSBuZXR3b3JrcyAoR0ROcykgd2l0aGluIHRoZSBjdXJyZW50IEFsaWJhYmEgQ2xvdWQgYWNjb3VudC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0dsb2JhbERhdGFiYXNlTmV0d29ya3NgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtcG9sYXJkYi1nbG9iYWxkYXRhYmFzZW5ldHdvcmtzXG4gKi9cbmV4cG9ydCBjbGFzcyBHbG9iYWxEYXRhYmFzZU5ldHdvcmtzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBHbG9iYWxEYXRhYmFzZU5ldHdvcmtzUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEdkbklkczogVGhlIGxpc3Qgb2YgZ2RuIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdkbklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEdsb2JhbERhdGFiYXNlTmV0d29ya3M6IFRoZSBsaXN0IG9mIGdsb2JhbCBkYXRhYmFzZSBuZXR3b3Jrcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdsb2JhbERhdGFiYXNlTmV0d29ya3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBHbG9iYWxEYXRhYmFzZU5ldHdvcmtzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0dsb2JhbERhdGFiYXNlTmV0d29ya3MgPSBuZXcgUm9zR2xvYmFsRGF0YWJhc2VOZXR3b3Jrcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRiQ2x1c3RlcklkOiBwcm9wcy5kYkNsdXN0ZXJJZCxcbiAgICAgICAgICAgIGdkbklkOiBwcm9wcy5nZG5JZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NHbG9iYWxEYXRhYmFzZU5ldHdvcmtzO1xuICAgICAgICB0aGlzLmF0dHJHZG5JZHMgPSByb3NHbG9iYWxEYXRhYmFzZU5ldHdvcmtzLmF0dHJHZG5JZHM7XG4gICAgICAgIHRoaXMuYXR0ckdsb2JhbERhdGFiYXNlTmV0d29ya3MgPSByb3NHbG9iYWxEYXRhYmFzZU5ldHdvcmtzLmF0dHJHbG9iYWxEYXRhYmFzZU5ldHdvcmtzO1xuICAgIH1cbn1cbiJdfQ==