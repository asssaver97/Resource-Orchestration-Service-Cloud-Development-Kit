"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalDatabaseNetwork = exports.GlobalDatabaseNetworkProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const polardb_generated_1 = require("./polardb.generated");
Object.defineProperty(exports, "GlobalDatabaseNetworkProperty", { enumerable: true, get: function () { return polardb_generated_1.RosGlobalDatabaseNetwork; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::GlobalDatabaseNetwork`, which is used to create a global database network (GDN).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGlobalDatabaseNetwork`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globaldatabasenetwork
 */
class GlobalDatabaseNetwork extends ros.Resource {
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
        const rosGlobalDatabaseNetwork = new polardb_generated_1.RosGlobalDatabaseNetwork(this, id, {
            resourceGroupId: props.resourceGroupId,
            dbClusterId: props.dbClusterId,
            gdnDescription: props.gdnDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGlobalDatabaseNetwork;
        this.attrConnections = rosGlobalDatabaseNetwork.attrConnections;
        this.attrCreateTime = rosGlobalDatabaseNetwork.attrCreateTime;
        this.attrDbClusters = rosGlobalDatabaseNetwork.attrDbClusters;
        this.attrDbType = rosGlobalDatabaseNetwork.attrDbType;
        this.attrDbVersion = rosGlobalDatabaseNetwork.attrDbVersion;
        this.attrGdnDescription = rosGlobalDatabaseNetwork.attrGdnDescription;
        this.attrGdnId = rosGlobalDatabaseNetwork.attrGdnId;
    }
}
exports.GlobalDatabaseNetwork = GlobalDatabaseNetwork;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsZGF0YWJhc2VuZXR3b3JrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2xvYmFsZGF0YWJhc2VuZXR3b3JrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QywyREFBK0Q7QUFFMUIsOEdBRjVCLDRDQUF3QixPQUVpQztBQXdCbEU7Ozs7R0FJRztBQUNILE1BQWEscUJBQXNCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUF5Q25EOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWlDLEVBQUUsbUNBQTJDLElBQUk7UUFDNUgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLHdCQUF3QixHQUFHLElBQUksNENBQXdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRSxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztTQUN2QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsd0JBQXdCLENBQUMsZUFBZSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsd0JBQXdCLENBQUMsY0FBYyxDQUFDO1FBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsd0JBQXdCLENBQUMsY0FBYyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsd0JBQXdCLENBQUMsVUFBVSxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsd0JBQXdCLENBQUMsYUFBYSxDQUFDO1FBQzVELElBQUksQ0FBQyxrQkFBa0IsR0FBRyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0NBQ0o7QUFuRUQsc0RBbUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zR2xvYmFsRGF0YWJhc2VOZXR3b3JrIH0gZnJvbSAnLi9wb2xhcmRiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0dsb2JhbERhdGFiYXNlTmV0d29yayBhcyBHbG9iYWxEYXRhYmFzZU5ldHdvcmtQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEdsb2JhbERhdGFiYXNlTmV0d29ya2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1wb2xhcmRiLWdsb2JhbGRhdGFiYXNlbmV0d29ya1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbERhdGFiYXNlTmV0d29ya1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiQ2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIHByaW1hcnkgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ2RuRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgR0ROLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdkbkRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UE9MQVJEQjo6R2xvYmFsRGF0YWJhc2VOZXR3b3JrYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBnbG9iYWwgZGF0YWJhc2UgbmV0d29yayAoR0ROKS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0dsb2JhbERhdGFiYXNlTmV0d29ya2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXBvbGFyZGItZ2xvYmFsZGF0YWJhc2VuZXR3b3JrXG4gKi9cbmV4cG9ydCBjbGFzcyBHbG9iYWxEYXRhYmFzZU5ldHdvcmsgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEdsb2JhbERhdGFiYXNlTmV0d29ya1Byb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDb25uZWN0aW9uczogVGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb25uZWN0aW9uIHRvIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29ubmVjdGlvbnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDcmVhdGVUaW1lOiBUaGUgdGltZSBhdCB3aGljaCB0aGUgR0ROIHdhcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERiQ2x1c3RlcnM6IFRoZSBjbHVzdGVycyB0aGF0IGFyZSBpbmNsdWRlZCBpbiB0aGUgR0ROLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJDbHVzdGVyczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERiVHlwZTogVGhlIHR5cGUgb2YgdGhlIGRhdGFiYXNlIGVuZ2luZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERiVmVyc2lvbjogVGhlIHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIGVuZ2luZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiVmVyc2lvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEdkbkRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIEdETi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdkbkRlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgR2RuSWQ6IFRoZSBJRCBvZiB0aGUgR0ROLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR2RuSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBHbG9iYWxEYXRhYmFzZU5ldHdvcmtQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0dsb2JhbERhdGFiYXNlTmV0d29yayA9IG5ldyBSb3NHbG9iYWxEYXRhYmFzZU5ldHdvcmsodGhpcywgaWQsICB7XG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGRiQ2x1c3RlcklkOiBwcm9wcy5kYkNsdXN0ZXJJZCxcbiAgICAgICAgICAgIGdkbkRlc2NyaXB0aW9uOiBwcm9wcy5nZG5EZXNjcmlwdGlvbixcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NHbG9iYWxEYXRhYmFzZU5ldHdvcms7XG4gICAgICAgIHRoaXMuYXR0ckNvbm5lY3Rpb25zID0gcm9zR2xvYmFsRGF0YWJhc2VOZXR3b3JrLmF0dHJDb25uZWN0aW9ucztcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHJvc0dsb2JhbERhdGFiYXNlTmV0d29yay5hdHRyQ3JlYXRlVGltZTtcbiAgICAgICAgdGhpcy5hdHRyRGJDbHVzdGVycyA9IHJvc0dsb2JhbERhdGFiYXNlTmV0d29yay5hdHRyRGJDbHVzdGVycztcbiAgICAgICAgdGhpcy5hdHRyRGJUeXBlID0gcm9zR2xvYmFsRGF0YWJhc2VOZXR3b3JrLmF0dHJEYlR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckRiVmVyc2lvbiA9IHJvc0dsb2JhbERhdGFiYXNlTmV0d29yay5hdHRyRGJWZXJzaW9uO1xuICAgICAgICB0aGlzLmF0dHJHZG5EZXNjcmlwdGlvbiA9IHJvc0dsb2JhbERhdGFiYXNlTmV0d29yay5hdHRyR2RuRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYXR0ckdkbklkID0gcm9zR2xvYmFsRGF0YWJhc2VOZXR3b3JrLmF0dHJHZG5JZDtcbiAgICB9XG59XG4iXX0=