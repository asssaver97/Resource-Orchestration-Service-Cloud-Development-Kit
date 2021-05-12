"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadOnlyDBInstance = exports.ReadOnlyDBInstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const rds_generated_1 = require("./rds.generated");
Object.defineProperty(exports, "ReadOnlyDBInstanceProperty", { enumerable: true, get: function () { return rds_generated_1.RosReadOnlyDBInstance; } });
/**
 * A ROS resource type:  `ALIYUN::RDS::ReadOnlyDBInstance`
 */
class ReadOnlyDBInstance extends ros.Resource {
    /**
     * Create a new `ALIYUN::RDS::ReadOnlyDBInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosReadOnlyDBInstance = new rds_generated_1.RosReadOnlyDBInstance(this, id, {
            category: props.category,
            engineVersion: props.engineVersion,
            privateIpAddress: props.privateIpAddress,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            vpcId: props.vpcId,
            dbInstanceClass: props.dbInstanceClass,
            vSwitchId: props.vSwitchId,
            payType: props.payType ? props.payType : 'Postpaid',
            dbInstanceStorageType: props.dbInstanceStorageType,
            dbInstanceId: props.dbInstanceId,
            dbInstanceStorage: props.dbInstanceStorage,
            dbInstanceDescription: props.dbInstanceDescription,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosReadOnlyDBInstance;
        this.attrConnectionString = rosReadOnlyDBInstance.attrConnectionString;
        this.attrDbInstanceId = rosReadOnlyDBInstance.attrDbInstanceId;
        this.attrPort = rosReadOnlyDBInstance.attrPort;
    }
}
exports.ReadOnlyDBInstance = ReadOnlyDBInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZG9ubHlkYmluc3RhbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVhZG9ubHlkYmluc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBd0Q7QUFFdEIsMkdBRnpCLHFDQUFxQixPQUU4QjtBQW9HNUQ7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0JoRDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQThCLEVBQUUsbUNBQTJDLElBQUk7UUFDekgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLHFCQUFxQixHQUFHLElBQUkscUNBQXFCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMvRCxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVTtZQUNuRCxxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1lBQ2xELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUI7WUFDbEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUM7UUFDdEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDO1FBQ3ZFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztJQUNuRCxDQUFDO0NBQ0o7QUFyREQsZ0RBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUmVhZE9ubHlEQkluc3RhbmNlIH0gZnJvbSAnLi9yZHMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUmVhZE9ubHlEQkluc3RhbmNlIGFzIFJlYWRPbmx5REJJbnN0YW5jZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpSRFM6OlJlYWRPbmx5REJJbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWFkT25seURCSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlQ2xhc3M6IFRoZSB0eXBlIG9mIHRoZSBpbnN0YW5jZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBJbnN0YW5jZSB0eXBlIGxpc3QuIFRoZSB0eXBlIG9mIHRoZSByZWFkLW9ubHkgaW5zdGFuY2UgbXVzdCBiZSBubyBsZXNzIHRoYW4gdGhhdCBvZiB0aGUgbWFzdGVyIGluc3RhbmNlLiBPdGhlcndpc2UsIHRoZSByZWFkLW9ubHkgaW5zdGFuY2UgaW5jdXJzIGhpZ2ggbGF0ZW5jeSBhbmQgaGlnaCBsb2FkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdGFuY2VDbGFzczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIG1hc3RlciBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiSW5zdGFuY2VTdG9yYWdlOiBUaGUgc3RvcmFnZSBzcGFjZSBvZiB0aGUgaW5zdGFuY2UuIFZhbHVlIHJhbmdlOiA1IHRvIDMwMDAuIFRoZSB2YWx1ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNS4gVW5pdDogR0IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZVN0b3JhZ2U6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuZ2luZVZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZS4gVGhlIGRhdGFiYXNlIGFuZCB0aGUgbWFzdGVyIGluc3RhbmNlIG11c3QgaGF2ZSB0aGUgc2FtZSBkYXRhYmFzZSB2ZXJzaW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSA1LjZcbiAgICAgKiAtIDUuN1xuICAgICAqIC0gOC4wXG4gICAgICogLSAyMDE3X2VudFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuZ2luZVZlcnNpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHpvbmVJZDogVGhlIElEIG9mIHRoZSB6b25lLiBZb3UgY2FuIGNhbGwgdGhlIERlc2NyaWJlUmVnaW9ucyBBUEkgb3BlcmF0aW9uIHRvIHZpZXcgdGhlIGxhdGVzdCB6b25lcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNhdGVnb3J5OiBUaGUgZWRpdGlvbiBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEJhc2ljXG4gICAgICogLSBIaWdoQXZhaWxhYmlsaXR5XG4gICAgICogLSBBbHdheXNPblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNhdGVnb3J5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZURlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiBjcmVhdGVkIGRhdGFiYXNlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdGFuY2VEZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiSW5zdGFuY2VTdG9yYWdlVHlwZTogVGhlIHN0b3JhZ2UgdHlwZSBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGxvY2FsX3NzZC9lcGhlbWVyYWxfc3NkOiBsb2NhbCBTU0RzLlxuICAgICAqIC0gY2xvdWRfc3NkOiBTU0RzLlxuICAgICAqIC0gY2xvdWRfZXNzZDogRVNTRHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZVN0b3JhZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGF5VHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kLiBUaGUgc3lzdGVtIG9ubHkgc3VwcG9ydHMgUGF5LUFzLVlvdS1Hby4gVmFsaWQgdmFsdWU6IFBvc3RwYWlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBheVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcml2YXRlSXBBZGRyZXNzOiBUaGUgcHJpdmF0ZSBJUCBhZGRyZXNzIG9mIHRoZSByZWFkLW9ubHkgaW5zdGFuY2UuIEl0IG11c3QgYmUgd2l0aGluIHRoZSBJUCBhZGRyZXNzIHJhbmdlIHByb3ZpZGVkIGJ5IHRoZSBzd2l0Y2guIFRoZSBzeXN0ZW0gYXV0b21hdGljYWxseSBhc3NpZ25zIGFuIElQIGFkZHJlc3MgYmFzZWQgb24gdGhlIFZQQ0lkIGFuZCBWU3dpdGNoSWQgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcml2YXRlSXBBZGRyZXNzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUaGUgdGFncyBvZiBhbiBpbnN0YW5jZS5cbiAgICAgKiBZb3Ugc2hvdWxkIGlucHV0IHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgdGFnIHdpdGggdGhlIGZvcm1hdCBvZiB0aGUgS2V5LVZhbHVlLCBzdWNoIGFzIHtcImtleTFcIjpcInZhbHVlMVwiLFwia2V5MlwiOlwidmFsdWUyXCIsIC4uLiBcImtleTVcIjpcInZhbHVlNVwifS5cbiAgICAgKiBBdCBtb3N0IDUgdGFncyBjYW4gYmUgc3BlY2lmaWVkLlxuICAgICAqIEtleVxuICAgICAqIEl0IGNhbiBiZSB1cCB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBDYW5ub3QgYmVnaW4gd2l0aCBhbGl5dW4uXG4gICAgICogQ2Fubm90IGJlZ2luIHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKiBDYW5ub3QgYmUgYSBudWxsIHN0cmluZy5cbiAgICAgKiBWYWx1ZVxuICAgICAqIEl0IGNhbiBiZSB1cCB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICogQ2Fubm90IGJlZ2luIHdpdGggYWxpeXVuLlxuICAgICAqIENhbm5vdCBiZWdpbiB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICogQ2FuIGJlIGEgbnVsbCBzdHJpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogKGFueSkgfTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIElEIG9mIHRoZSBWU3dpdGNoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6UkRTOjpSZWFkT25seURCSW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWFkT25seURCSW5zdGFuY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbm5lY3Rpb25TdHJpbmc6IERCIGluc3RhbmNlIGNvbm5lY3Rpb24gdXJsIGJ5IEludHJhbmV0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29ubmVjdGlvblN0cmluZzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERCSW5zdGFuY2VJZDogVGhlIGluc3RhbmNlIGlkIG9mIGNyZWF0ZWQgZGF0YWJhc2UgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYkluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQb3J0OiBJbnRyYW5ldCBwb3J0IG9mIGNyZWF0ZWQgREIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQb3J0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6UkRTOjpSZWFkT25seURCSW5zdGFuY2VgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJlYWRPbmx5REJJbnN0YW5jZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1JlYWRPbmx5REJJbnN0YW5jZSA9IG5ldyBSb3NSZWFkT25seURCSW5zdGFuY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogcHJvcHMuY2F0ZWdvcnksXG4gICAgICAgICAgICBlbmdpbmVWZXJzaW9uOiBwcm9wcy5lbmdpbmVWZXJzaW9uLFxuICAgICAgICAgICAgcHJpdmF0ZUlwQWRkcmVzczogcHJvcHMucHJpdmF0ZUlwQWRkcmVzcyxcbiAgICAgICAgICAgIHpvbmVJZDogcHJvcHMuem9uZUlkLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBkYkluc3RhbmNlQ2xhc3M6IHByb3BzLmRiSW5zdGFuY2VDbGFzcyxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogcHJvcHMudlN3aXRjaElkLFxuICAgICAgICAgICAgcGF5VHlwZTogcHJvcHMucGF5VHlwZSA/IHByb3BzLnBheVR5cGUgOiAnUG9zdHBhaWQnLFxuICAgICAgICAgICAgZGJJbnN0YW5jZVN0b3JhZ2VUeXBlOiBwcm9wcy5kYkluc3RhbmNlU3RvcmFnZVR5cGUsXG4gICAgICAgICAgICBkYkluc3RhbmNlSWQ6IHByb3BzLmRiSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VTdG9yYWdlOiBwcm9wcy5kYkluc3RhbmNlU3RvcmFnZSxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VEZXNjcmlwdGlvbjogcHJvcHMuZGJJbnN0YW5jZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NSZWFkT25seURCSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuYXR0ckNvbm5lY3Rpb25TdHJpbmcgPSByb3NSZWFkT25seURCSW5zdGFuY2UuYXR0ckNvbm5lY3Rpb25TdHJpbmc7XG4gICAgICAgIHRoaXMuYXR0ckRiSW5zdGFuY2VJZCA9IHJvc1JlYWRPbmx5REJJbnN0YW5jZS5hdHRyRGJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJQb3J0ID0gcm9zUmVhZE9ubHlEQkluc3RhbmNlLmF0dHJQb3J0O1xuICAgIH1cbn1cbiJdfQ==