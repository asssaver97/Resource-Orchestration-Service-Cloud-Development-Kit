"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbInstance = exports.DbInstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const graphdatabase_generated_1 = require("./graphdatabase.generated");
Object.defineProperty(exports, "DbInstanceProperty", { enumerable: true, get: function () { return graphdatabase_generated_1.RosDbInstance; } });
/**
 * A ROS resource type:  `ALIYUN::GraphDatabase::DbInstance`
 */
class DbInstance extends ros.Resource {
    /**
     * Create a new `ALIYUN::GraphDatabase::DbInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDbInstance = new graphdatabase_generated_1.RosDbInstance(this, id, {
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            dbInstanceNetworkType: props.dbInstanceNetworkType,
            vSwitchId: props.vSwitchId,
            ecsSecurityGroupRelations: props.ecsSecurityGroupRelations,
            dbInstanceStorageType: props.dbInstanceStorageType,
            dbNodeStorage: props.dbNodeStorage,
            backupSetId: props.backupSetId,
            dbInstanceCategory: props.dbInstanceCategory,
            sourceDbInstanceId: props.sourceDbInstanceId,
            vpcId: props.vpcId,
            dbInstanceIpArray: props.dbInstanceIpArray,
            dbVersion: props.dbVersion,
            createType: props.createType,
            paymentType: props.paymentType === undefined || props.paymentType === null ? 'PayAsYouGo' : props.paymentType,
            dbInstanceDescription: props.dbInstanceDescription,
            restoreType: props.restoreType,
            dbNodeClass: props.dbNodeClass,
            maintainTime: props.maintainTime,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDbInstance;
        this.attrConnectionString = rosDbInstance.attrConnectionString;
        this.attrCreateTime = rosDbInstance.attrCreateTime;
        this.attrCurrentMinorVersion = rosDbInstance.attrCurrentMinorVersion;
        this.attrDbInstanceIpArray = rosDbInstance.attrDbInstanceIpArray;
        this.attrDbInstanceCategory = rosDbInstance.attrDbInstanceCategory;
        this.attrDbInstanceCpu = rosDbInstance.attrDbInstanceCpu;
        this.attrDbInstanceDescription = rosDbInstance.attrDbInstanceDescription;
        this.attrDbInstanceId = rosDbInstance.attrDbInstanceId;
        this.attrDbInstanceMemory = rosDbInstance.attrDbInstanceMemory;
        this.attrDbInstanceNetworkType = rosDbInstance.attrDbInstanceNetworkType;
        this.attrDbInstanceStorageType = rosDbInstance.attrDbInstanceStorageType;
        this.attrDbInstanceType = rosDbInstance.attrDbInstanceType;
        this.attrDbNodeClass = rosDbInstance.attrDbNodeClass;
        this.attrDbNodeCount = rosDbInstance.attrDbNodeCount;
        this.attrDbNodeStorage = rosDbInstance.attrDbNodeStorage;
        this.attrDbVersion = rosDbInstance.attrDbVersion;
        this.attrEcsSecurityGroupRelations = rosDbInstance.attrEcsSecurityGroupRelations;
        this.attrExpireTime = rosDbInstance.attrExpireTime;
        this.attrExpired = rosDbInstance.attrExpired;
        this.attrLatestMinorVersion = rosDbInstance.attrLatestMinorVersion;
        this.attrLockMode = rosDbInstance.attrLockMode;
        this.attrLockReason = rosDbInstance.attrLockReason;
        this.attrMaintainTime = rosDbInstance.attrMaintainTime;
        this.attrPaymentType = rosDbInstance.attrPaymentType;
        this.attrPort = rosDbInstance.attrPort;
        this.attrPublicConnectionString = rosDbInstance.attrPublicConnectionString;
        this.attrPublicPort = rosDbInstance.attrPublicPort;
        this.attrReadOnlyDbInstanceIds = rosDbInstance.attrReadOnlyDbInstanceIds;
        this.attrResourceGroupId = rosDbInstance.attrResourceGroupId;
        this.attrTags = rosDbInstance.attrTags;
        this.attrVSwitchId = rosDbInstance.attrVSwitchId;
        this.attrVpcId = rosDbInstance.attrVpcId;
        this.attrZoneId = rosDbInstance.attrZoneId;
    }
}
exports.DbInstance = DbInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJpbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRiaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHVFQUEwRDtBQUVoQyxtR0FGakIsdUNBQWEsT0FFc0I7QUFrSDVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUE0S3hDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sYUFBYSxHQUFHLElBQUksdUNBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9DLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIseUJBQXlCLEVBQUUsS0FBSyxDQUFDLHlCQUF5QjtZQUMxRCxxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1lBQ2xELGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQzdHLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUI7WUFDbEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUMsb0JBQW9CLENBQUM7UUFDL0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ25ELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxhQUFhLENBQUMsdUJBQXVCLENBQUM7UUFDckUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUNqRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsYUFBYSxDQUFDLHNCQUFzQixDQUFDO1FBQ25FLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7UUFDekQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztRQUN6RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUMsb0JBQW9CLENBQUM7UUFDL0QsSUFBSSxDQUFDLHlCQUF5QixHQUFHLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztRQUN6RSxJQUFJLENBQUMseUJBQXlCLEdBQUcsYUFBYSxDQUFDLHlCQUF5QixDQUFDO1FBQ3pFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUNyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLGlCQUFpQixDQUFDO1FBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNqRCxJQUFJLENBQUMsNkJBQTZCLEdBQUcsYUFBYSxDQUFDLDZCQUE2QixDQUFDO1FBQ2pGLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztRQUNuRSxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsYUFBYSxDQUFDLDBCQUEwQixDQUFDO1FBQzNFLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNuRCxJQUFJLENBQUMseUJBQXlCLEdBQUcsYUFBYSxDQUFDLHlCQUF5QixDQUFDO1FBQ3pFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxhQUFhLENBQUMsbUJBQW1CLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQy9DLENBQUM7Q0FDSjtBQS9PRCxnQ0ErT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEYkluc3RhbmNlIH0gZnJvbSAnLi9ncmFwaGRhdGFiYXNlLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RiSW5zdGFuY2UgYXMgRGJJbnN0YW5jZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpHcmFwaERhdGFiYXNlOjpEYkluc3RhbmNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERiSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlQ2F0ZWdvcnk6IFRoZSBjYXRlZ29yeSBvZiB0aGUgZGIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZUNhdGVnb3J5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlTmV0d29ya1R5cGU6IFRoZSBuZXR3b3JrIHR5cGUgb2YgdGhlIGRiIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdGFuY2VOZXR3b3JrVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZVN0b3JhZ2VUeXBlOiBJbnN0YW5jZSBzdG9yYWdlIHR5cGUsIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGNsb3VkX2Vzc2QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZVN0b3JhZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYk5vZGVDbGFzczogVGhlIGNsYXNzIG9mIHRoZSBkYiBub2RlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogZ2RiLnIueGxhcmdlLCBnZGIuci4yeGxhcmdlLCBnZGIuci40eGxhcmdlLCBnZGIuci44eGxhcmdlLGdkYi5yLjE2eGxhcmdlLCBnZGIucmUuMTN4bGFyZ2UsIGdkYi5yZS4yNnhsYXJnZSwgZ2RiLnJlLjUyeGxhcmdlXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJOb2RlQ2xhc3M6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiTm9kZVN0b3JhZ2U6IEluc3RhbmNlIHN0b3JhZ2Ugc3BhY2UsIHdoaWNoIGlzIG1lYXN1cmVkIGluIEdCLiBUaGUgbWluaW11bSBzdG9yYWdlIHNwYWNlIGlzIDIwIEdCIGFuZCB0aGUgc3RlcCBzaXplIGlzIDEwR0IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJOb2RlU3RvcmFnZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJWZXJzaW9uOiBLZXJuZWwgdmVyc2lvbiAxLjAgaXMgcmVwcmVzZW50ZWQgYXMgZ3JlbWxpbiwxLjAtT3BlbkN5cGhlciBzYWlkIG9wZW5jeXBoZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJWZXJzaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBiYWNrdXBTZXRJZDogQmFja3VwIHNldCBpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYWNrdXBTZXRJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNyZWF0ZVR5cGU6IFRoZSBjcmVhdGlvbiBtZXRob2QuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIENyZWF0ZURCSW5zdGFuY2U6IENyZWF0ZSBpbnN0YW5jZVxuICAgICAqIC0gQ2xvbmVEQkluc3RhbmNlOiBDbG9uZSBpbnN0YW5jZVxuICAgICAqIC0gQ3JlYXRlUmVhZERCSW5zdGFuY2U6IENyZWF0ZSBhIHJlYWQtb25seSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNyZWF0ZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlRGVzY3JpcHRpb246IEFjY29yZGluZyB0byB0aGUgcHJhY3RpY2FsIGV4YW1wbGUgb3Igbm90ZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZURlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZUlwQXJyYXk6IElQIGFkZHJlc3Mgd2hpdGVsaXN0IGZvciB0aGUgaW5zdGFuY2UgZ3JvdXAgbGlzdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlSXBBcnJheT86IEFycmF5PFJvc0RiSW5zdGFuY2UuREJJbnN0YW5jZUlQQXJyYXlQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlY3NTZWN1cml0eUdyb3VwUmVsYXRpb25zOiBTZWN1cml0eSBncm91cCBpbmZvcm1hdGlvbiBhcnJheS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlY3NTZWN1cml0eUdyb3VwUmVsYXRpb25zPzogQXJyYXk8Um9zRGJJbnN0YW5jZS5FY3NTZWN1cml0eUdyb3VwUmVsYXRpb25zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFpbnRhaW5UaW1lOiBJbnN0YW5jZSBtYWludGVuYW5jZSB0aW1lIHN1Y2ggYXMgMDA6MDBaLTAyOjAwWiwgMCB0byAyIHBvaW50cyB0byBjYXJyeSBvdXQgcm91dGluZSBtYWludGVuYW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYWludGFpblRpbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXltZW50VHlwZTogVGhlIHJlc291cmNlIGF0dHJpYnV0ZSBmaWVsZCByZXByZXNlbnRpbmcgdGhlIHBhaWQgdHlwZSBpcyBkZXNpcmFibGU6XG4gICAgICogLSBQYXlBc1lvdUdvOiBQb3N0cGFpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXltZW50VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzdG9yZVR5cGU6IFJlc3RvcmUgdHlwZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXN0b3JlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZURiSW5zdGFuY2VJZDogU291cmNlIEluc3RhbmNlIElkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZURiSW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3Mgb2YgZGIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0RiSW5zdGFuY2UuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNJZDogVGhlIHZwYyBpZCBvZiB0aGUgZGIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSB2cGMgc3dpdGNoIGlkIG9mIHRoZSByZXNvdXJjZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IFpvbmVJZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkdyYXBoRGF0YWJhc2U6OkRiSW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBEYkluc3RhbmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDb25uZWN0aW9uU3RyaW5nOiBWaXJ0dWFsIFByaXZhdGUgQ2xvdWQgKHZwYyBjb25uZWN0aW9uIHN1Y2ggYXMgYSBWUE4gY29ubmVjdGlvbiBvciBsZWFzZWQgbGluZSBkb21haW4gbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbm5lY3Rpb25TdHJpbmc6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDcmVhdGVUaW1lOiBDcmVhdGlvbiB0aW1lLCB3aGljaCBmb2xsb3dzIHRoZSBmb3JtYXQgb2YgWVlZWS1NTS1ERCAnVCdoaDptbTpzc1osIHN1Y2ggYXMgMjAxMS0wNS0zMCBUMTI6MTE6NFouXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ3VycmVudE1pbm9yVmVyc2lvbjogVGhlIGN1cnJlbnQga2VybmVsIGltYWdlIHZlcnNpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDdXJyZW50TWlub3JWZXJzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJJbnN0YW5jZUlQQXJyYXk6IElQIEFERFJFU1Mgd2hpdGVsaXN0IGZvciB0aGUgaW5zdGFuY2UgZ3JvdXAgbGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiSW5zdGFuY2VJcEFycmF5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGJJbnN0YW5jZUNhdGVnb3J5OiBUaGUgY2F0ZWdvcnkgb2YgdGhlIGRiIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJJbnN0YW5jZUNhdGVnb3J5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGJJbnN0YW5jZUNwdTogRm9yIGV4YW1wbGUsIGluc3RhbmNlcyBjYW4gYmUgZ3JvdXBlZCBhY2NvcmRpbmcgdG8gQ3B1IGNvcmUgY291bnQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYkluc3RhbmNlQ3B1OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGJJbnN0YW5jZURlc2NyaXB0aW9uOiBBY2NvcmRpbmcgdG8gdGhlIHByYWN0aWNhbCBleGFtcGxlIG9yIG5vdGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJJbnN0YW5jZURlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGJJbnN0YW5jZUlkOiBUaGUgZmlyc3QgSUQgb2YgdGhlIHJlc291cmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGJJbnN0YW5jZU1lbW9yeTogSW5zdGFuY2UgbWVtb3J5LCB3aGljaCBpcyBtZWFzdXJlZCBpbiBNQi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiSW5zdGFuY2VNZW1vcnk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEYkluc3RhbmNlTmV0d29ya1R5cGU6IFRoZSBuZXR3b3JrIHR5cGUgb2YgdGhlIGRiIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJJbnN0YW5jZU5ldHdvcmtUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGJJbnN0YW5jZVN0b3JhZ2VUeXBlOiBDbG91ZCBEaXNrLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJJbnN0YW5jZVN0b3JhZ2VUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGJJbnN0YW5jZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBkYiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiSW5zdGFuY2VUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGJOb2RlQ2xhc3M6IFRoZSBjbGFzcyBvZiB0aGUgZGIgbm9kZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiTm9kZUNsYXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGJOb2RlQ291bnQ6IFRoZSBjb3VudCBvZiB0aGUgZGIgbm9kZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiTm9kZUNvdW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGJOb2RlU3RvcmFnZTogSW5zdGFuY2Ugc3RvcmFnZSBzcGFjZSwgd2hpY2ggaXMgbWVhc3VyZWQgaW4gR0IuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYk5vZGVTdG9yYWdlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGJWZXJzaW9uOiBLZXJuZWwgVmVyc2lvbiAxLjAgaXMgcmVwcmVzZW50ZWQgYXMgZ3JlbWxpbiwxLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJWZXJzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRWNzU2VjdXJpdHlHcm91cFJlbGF0aW9uczogU2VjdXJpdHkgZ3JvdXAgaW5mb3JtYXRpb24gYXJyYXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFY3NTZWN1cml0eUdyb3VwUmVsYXRpb25zOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRXhwaXJlVGltZTogVGhlIGluc3RhbmNlIGFmdGVyIGl0IGV4cGlyZXMgdGltZSBmb3Igc3Vic2NyaXB0aW9uIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRXhwaXJlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEV4cGlyZWQ6IFRoZSBleHBpcmUgc3RhdHVzIG9mIHRoZSBkYiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckV4cGlyZWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMYXRlc3RNaW5vclZlcnNpb246IFRoZSBsYXRlc3Qga2VybmVsIGltYWdlIHZlcnNpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMYXRlc3RNaW5vclZlcnNpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMb2NrTW9kZTogSW5zdGFuY2UgbG9jayBzdGF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvY2tNb2RlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTG9ja1JlYXNvbjogQW4gaW5zdGFuY2UgaXMgbG9ja2VkIHRoZSByZWFzb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2NrUmVhc29uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTWFpbnRhaW5UaW1lOiBJbnN0YW5jZSBtYWludGVuYW5jZSB0aW1lIHN1Y2ggYXMgMDA6MDBaLTAyOjAwWiwgMCB0byAyIHBvaW50cyB0byBjYXJyeSBvdXQgcm91dGluZSBtYWludGVuYW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1haW50YWluVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBheW1lbnRUeXBlOiBUaGUgcmVzb3VyY2UgYXR0cmlidXRlIGZpZWxkIHJlcHJlc2VudGluZyB0aGUgcGFpZCB0eXBlIGlzIGRlc2lyYWJsZTouXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQYXltZW50VHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBvcnQ6IEFwcGxpY2F0aW9uIFBvcnQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQb3J0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljQ29ubmVjdGlvblN0cmluZzogVGhlIHB1YmxpYyBjb25uZWN0aW9uIHN0cmluZyBJRCBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNDb25uZWN0aW9uU3RyaW5nOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljUG9ydDogVGhlIHB1YmxpYyBwb3J0IElEIG9mIHRoZSByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clB1YmxpY1BvcnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZWFkT25seURiSW5zdGFuY2VJZHM6IFRoZSBhcnJheSBvZiB0aGUgcmVhZG9ubHkgZGIgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVhZE9ubHlEYkluc3RhbmNlSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBHcm91cCBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRhZ3M6IHJlc291cmNlIFRhZyBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhZ3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWU3dpdGNoSWQ6IFRoZSB2cGMgc3dpdGNoIGlkIG9mIHRoZSByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZTd2l0Y2hJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY0lkOiBUaGUgdnBjIGlkIG9mIHRoZSBkYiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgWm9uZUlkOiBab25lSWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJab25lSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpHcmFwaERhdGFiYXNlOjpEYkluc3RhbmNlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBEYkluc3RhbmNlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zRGJJbnN0YW5jZSA9IG5ldyBSb3NEYkluc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgem9uZUlkOiBwcm9wcy56b25lSWQsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VOZXR3b3JrVHlwZTogcHJvcHMuZGJJbnN0YW5jZU5ldHdvcmtUeXBlLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBlY3NTZWN1cml0eUdyb3VwUmVsYXRpb25zOiBwcm9wcy5lY3NTZWN1cml0eUdyb3VwUmVsYXRpb25zLFxuICAgICAgICAgICAgZGJJbnN0YW5jZVN0b3JhZ2VUeXBlOiBwcm9wcy5kYkluc3RhbmNlU3RvcmFnZVR5cGUsXG4gICAgICAgICAgICBkYk5vZGVTdG9yYWdlOiBwcm9wcy5kYk5vZGVTdG9yYWdlLFxuICAgICAgICAgICAgYmFja3VwU2V0SWQ6IHByb3BzLmJhY2t1cFNldElkLFxuICAgICAgICAgICAgZGJJbnN0YW5jZUNhdGVnb3J5OiBwcm9wcy5kYkluc3RhbmNlQ2F0ZWdvcnksXG4gICAgICAgICAgICBzb3VyY2VEYkluc3RhbmNlSWQ6IHByb3BzLnNvdXJjZURiSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VJcEFycmF5OiBwcm9wcy5kYkluc3RhbmNlSXBBcnJheSxcbiAgICAgICAgICAgIGRiVmVyc2lvbjogcHJvcHMuZGJWZXJzaW9uLFxuICAgICAgICAgICAgY3JlYXRlVHlwZTogcHJvcHMuY3JlYXRlVHlwZSxcbiAgICAgICAgICAgIHBheW1lbnRUeXBlOiBwcm9wcy5wYXltZW50VHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBheW1lbnRUeXBlID09PSBudWxsID8gJ1BheUFzWW91R28nIDogcHJvcHMucGF5bWVudFR5cGUsXG4gICAgICAgICAgICBkYkluc3RhbmNlRGVzY3JpcHRpb246IHByb3BzLmRiSW5zdGFuY2VEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlc3RvcmVUeXBlOiBwcm9wcy5yZXN0b3JlVHlwZSxcbiAgICAgICAgICAgIGRiTm9kZUNsYXNzOiBwcm9wcy5kYk5vZGVDbGFzcyxcbiAgICAgICAgICAgIG1haW50YWluVGltZTogcHJvcHMubWFpbnRhaW5UaW1lLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NEYkluc3RhbmNlO1xuICAgICAgICB0aGlzLmF0dHJDb25uZWN0aW9uU3RyaW5nID0gcm9zRGJJbnN0YW5jZS5hdHRyQ29ubmVjdGlvblN0cmluZztcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHJvc0RiSW5zdGFuY2UuYXR0ckNyZWF0ZVRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckN1cnJlbnRNaW5vclZlcnNpb24gPSByb3NEYkluc3RhbmNlLmF0dHJDdXJyZW50TWlub3JWZXJzaW9uO1xuICAgICAgICB0aGlzLmF0dHJEYkluc3RhbmNlSXBBcnJheSA9IHJvc0RiSW5zdGFuY2UuYXR0ckRiSW5zdGFuY2VJcEFycmF5O1xuICAgICAgICB0aGlzLmF0dHJEYkluc3RhbmNlQ2F0ZWdvcnkgPSByb3NEYkluc3RhbmNlLmF0dHJEYkluc3RhbmNlQ2F0ZWdvcnk7XG4gICAgICAgIHRoaXMuYXR0ckRiSW5zdGFuY2VDcHUgPSByb3NEYkluc3RhbmNlLmF0dHJEYkluc3RhbmNlQ3B1O1xuICAgICAgICB0aGlzLmF0dHJEYkluc3RhbmNlRGVzY3JpcHRpb24gPSByb3NEYkluc3RhbmNlLmF0dHJEYkluc3RhbmNlRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYXR0ckRiSW5zdGFuY2VJZCA9IHJvc0RiSW5zdGFuY2UuYXR0ckRiSW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRyRGJJbnN0YW5jZU1lbW9yeSA9IHJvc0RiSW5zdGFuY2UuYXR0ckRiSW5zdGFuY2VNZW1vcnk7XG4gICAgICAgIHRoaXMuYXR0ckRiSW5zdGFuY2VOZXR3b3JrVHlwZSA9IHJvc0RiSW5zdGFuY2UuYXR0ckRiSW5zdGFuY2VOZXR3b3JrVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyRGJJbnN0YW5jZVN0b3JhZ2VUeXBlID0gcm9zRGJJbnN0YW5jZS5hdHRyRGJJbnN0YW5jZVN0b3JhZ2VUeXBlO1xuICAgICAgICB0aGlzLmF0dHJEYkluc3RhbmNlVHlwZSA9IHJvc0RiSW5zdGFuY2UuYXR0ckRiSW5zdGFuY2VUeXBlO1xuICAgICAgICB0aGlzLmF0dHJEYk5vZGVDbGFzcyA9IHJvc0RiSW5zdGFuY2UuYXR0ckRiTm9kZUNsYXNzO1xuICAgICAgICB0aGlzLmF0dHJEYk5vZGVDb3VudCA9IHJvc0RiSW5zdGFuY2UuYXR0ckRiTm9kZUNvdW50O1xuICAgICAgICB0aGlzLmF0dHJEYk5vZGVTdG9yYWdlID0gcm9zRGJJbnN0YW5jZS5hdHRyRGJOb2RlU3RvcmFnZTtcbiAgICAgICAgdGhpcy5hdHRyRGJWZXJzaW9uID0gcm9zRGJJbnN0YW5jZS5hdHRyRGJWZXJzaW9uO1xuICAgICAgICB0aGlzLmF0dHJFY3NTZWN1cml0eUdyb3VwUmVsYXRpb25zID0gcm9zRGJJbnN0YW5jZS5hdHRyRWNzU2VjdXJpdHlHcm91cFJlbGF0aW9ucztcbiAgICAgICAgdGhpcy5hdHRyRXhwaXJlVGltZSA9IHJvc0RiSW5zdGFuY2UuYXR0ckV4cGlyZVRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckV4cGlyZWQgPSByb3NEYkluc3RhbmNlLmF0dHJFeHBpcmVkO1xuICAgICAgICB0aGlzLmF0dHJMYXRlc3RNaW5vclZlcnNpb24gPSByb3NEYkluc3RhbmNlLmF0dHJMYXRlc3RNaW5vclZlcnNpb247XG4gICAgICAgIHRoaXMuYXR0ckxvY2tNb2RlID0gcm9zRGJJbnN0YW5jZS5hdHRyTG9ja01vZGU7XG4gICAgICAgIHRoaXMuYXR0ckxvY2tSZWFzb24gPSByb3NEYkluc3RhbmNlLmF0dHJMb2NrUmVhc29uO1xuICAgICAgICB0aGlzLmF0dHJNYWludGFpblRpbWUgPSByb3NEYkluc3RhbmNlLmF0dHJNYWludGFpblRpbWU7XG4gICAgICAgIHRoaXMuYXR0clBheW1lbnRUeXBlID0gcm9zRGJJbnN0YW5jZS5hdHRyUGF5bWVudFR5cGU7XG4gICAgICAgIHRoaXMuYXR0clBvcnQgPSByb3NEYkluc3RhbmNlLmF0dHJQb3J0O1xuICAgICAgICB0aGlzLmF0dHJQdWJsaWNDb25uZWN0aW9uU3RyaW5nID0gcm9zRGJJbnN0YW5jZS5hdHRyUHVibGljQ29ubmVjdGlvblN0cmluZztcbiAgICAgICAgdGhpcy5hdHRyUHVibGljUG9ydCA9IHJvc0RiSW5zdGFuY2UuYXR0clB1YmxpY1BvcnQ7XG4gICAgICAgIHRoaXMuYXR0clJlYWRPbmx5RGJJbnN0YW5jZUlkcyA9IHJvc0RiSW5zdGFuY2UuYXR0clJlYWRPbmx5RGJJbnN0YW5jZUlkcztcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VHcm91cElkID0gcm9zRGJJbnN0YW5jZS5hdHRyUmVzb3VyY2VHcm91cElkO1xuICAgICAgICB0aGlzLmF0dHJUYWdzID0gcm9zRGJJbnN0YW5jZS5hdHRyVGFncztcbiAgICAgICAgdGhpcy5hdHRyVlN3aXRjaElkID0gcm9zRGJJbnN0YW5jZS5hdHRyVlN3aXRjaElkO1xuICAgICAgICB0aGlzLmF0dHJWcGNJZCA9IHJvc0RiSW5zdGFuY2UuYXR0clZwY0lkO1xuICAgICAgICB0aGlzLmF0dHJab25lSWQgPSByb3NEYkluc3RhbmNlLmF0dHJab25lSWQ7XG4gICAgfVxufVxuIl19