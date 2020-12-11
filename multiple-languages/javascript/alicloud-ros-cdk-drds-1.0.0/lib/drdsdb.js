"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrdsDB = exports.DrdsDBProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const drds_generated_1 = require("./drds.generated");
Object.defineProperty(exports, "DrdsDBProperty", { enumerable: true, get: function () { return drds_generated_1.RosDrdsDB; } });
/**
 * A ROS resource type:  `ALIYUN::DRDS::DrdsDB`
 */
class DrdsDB extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::DRDS::DrdsDB`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDrdsDB = new drds_generated_1.RosDrdsDB(this, id, {
            dbInstType: props.dbInstType,
            type: props.type ? props.type : 'HORIZONTAL',
            drdsInstanceId: props.drdsInstanceId,
            rdsInstance: props.rdsInstance,
            dbInstanceIsCreating: props.dbInstanceIsCreating,
            instDbName: props.instDbName,
            dbName: props.dbName,
            encode: props.encode,
            accountName: props.accountName,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDrdsDB;
    }
}
exports.DrdsDB = DrdsDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJkc2RiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHJkc2RiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxxREFBNkM7QUFFdkIsK0ZBRmIsMEJBQVMsT0FFa0I7QUE4RHBDOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFFcEM7OztPQUdHO0lBRUg7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFrQixFQUFFLG1DQUEyQyxJQUFJO1FBQzdHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxTQUFTLEdBQUcsSUFBSSwwQkFBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZO1lBQzVDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQzNCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7Q0FDSjtBQS9CRCx3QkErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEcmRzREIgfSBmcm9tICcuL2RyZHMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zRHJkc0RCIGFzIERyZHNEQlByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpEUkRTOjpEcmRzREJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRHJkc0RCUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRyZHNJbnN0YW5jZUlkOiBEUkRTIGluc3RhbmNlIElEXG4gICAgICovXG4gICAgcmVhZG9ubHkgZHJkc0luc3RhbmNlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2NvdW50TmFtZTogSW4gdGhlIHZlcnRpY2FsIHNwbGl0IHNjZW5hcmlvLCBhbiBhY2NvdW50IG5hbWUgd2l0aCBhY2Nlc3MgcmlnaHRzIHRvIHRoZSBjb3JyZXNwb25kaW5nIGRhdGFiYXNlIG9uIGFsbCBSRFNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY291bnROYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRiSW5zdGFuY2VJc0NyZWF0aW5nOiBDaGVjayB3aGV0aGVyIHRoZSBSRFMgaW5zdGFuY2UgaXMgYmVpbmcgY3JlYXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlSXNDcmVhdGluZz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJJbnN0VHlwZTogVGhlIHR5cGUgb2YgdGhlIGF0dGFjaGVkIHN0b3JhZ2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBSRFMgb3IgUE9MQVJEQlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdFR5cGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJOYW1lOiBEYXRhYmFzZSBOYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJOYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuY29kZTogRW5jb2RpbmcgdXNlZCBieSB0aGUgZGF0YWJhc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBlbmNvZGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdERiTmFtZTpcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0RGJOYW1lPzogQXJyYXk8Um9zRHJkc0RCLkluc3REYk5hbWVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGFzc3dvcmQ6IFRoZSBsb2dvbiBwYXNzd29yZCBvZiB0aGUgZGF0YWJhc2UgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFzc3dvcmQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmRzSW5zdGFuY2U6IFRoaXMgcHJvcGVydHkgaXMgcmVxdWlyZWQgb25seSBmb3IgdmVydGljYWwgcGFydGl0aW9uaW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJkc0luc3RhbmNlPzogc3RyaW5nW107XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHlwZTogRGF0YWJhc2UgU2hhcmRpbmcgbWV0aG9kLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHNjYWxhYmlsaXR5IHByaW5jaXBsZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEhPUklaT05UQUw6IGluZGljYXRlcyBIT1JJWk9OVEFMIHBhcnRpdGlvbmluZywgd2hpY2ggaXMgY29tbW9ubHkga25vd24gYXMgZGF0YWJhc2VcbiAgICAgKiBhbmQgdGFibGUgc2hhcmRpbmcuXG4gICAgICogVkVSVElDQUw6IGluZGljYXRlcyBWRVJUSUNBTCBwYXJ0aXRpb25pbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHlwZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RFJEUzo6RHJkc0RCYFxuICovXG5leHBvcnQgY2xhc3MgRHJkc0RCIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpEUkRTOjpEcmRzREJgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERyZHNEQlByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0RyZHNEQiA9IG5ldyBSb3NEcmRzREIodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkYkluc3RUeXBlOiBwcm9wcy5kYkluc3RUeXBlLFxuICAgICAgICAgICAgdHlwZTogcHJvcHMudHlwZSA/IHByb3BzLnR5cGUgOiAnSE9SSVpPTlRBTCcsXG4gICAgICAgICAgICBkcmRzSW5zdGFuY2VJZDogcHJvcHMuZHJkc0luc3RhbmNlSWQsXG4gICAgICAgICAgICByZHNJbnN0YW5jZTogcHJvcHMucmRzSW5zdGFuY2UsXG4gICAgICAgICAgICBkYkluc3RhbmNlSXNDcmVhdGluZzogcHJvcHMuZGJJbnN0YW5jZUlzQ3JlYXRpbmcsXG4gICAgICAgICAgICBpbnN0RGJOYW1lOiBwcm9wcy5pbnN0RGJOYW1lLFxuICAgICAgICAgICAgZGJOYW1lOiBwcm9wcy5kYk5hbWUsXG4gICAgICAgICAgICBlbmNvZGU6IHByb3BzLmVuY29kZSxcbiAgICAgICAgICAgIGFjY291bnROYW1lOiBwcm9wcy5hY2NvdW50TmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9wcy5wYXNzd29yZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NEcmRzREI7XG4gICAgfVxufVxuIl19