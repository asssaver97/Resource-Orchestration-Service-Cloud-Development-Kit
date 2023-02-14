"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosDiskReplicaPairAddition = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosDiskReplicaPairAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosDiskReplicaPairAdditionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('replicaPairId', ros.requiredValidator)(properties.replicaPairId));
    errors.collect(ros.propertyValidator('replicaPairId', ros.validateString)(properties.replicaPairId));
    errors.collect(ros.propertyValidator('replicaGroupId', ros.requiredValidator)(properties.replicaGroupId));
    errors.collect(ros.propertyValidator('replicaGroupId', ros.validateString)(properties.replicaGroupId));
    return errors.wrap('supplied properties not correct for "RosDiskReplicaPairAdditionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaPairAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaPairAddition` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaPairAdditionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDiskReplicaPairAdditionPropsValidator(properties).assertSuccess();
    }
    return {
        ReplicaGroupId: ros.stringToRosTemplate(properties.replicaGroupId),
        ReplicaPairId: ros.stringToRosTemplate(properties.replicaPairId),
    };
}
/**
 * A ROS template type:  `ALIYUN::EBS::DiskReplicaPairAddition`
 */
class RosDiskReplicaPairAddition extends ros.RosResource {
    /**
     * Create a new `ALIYUN::EBS::DiskReplicaPairAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDiskReplicaPairAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrReplicaGroupId = this.getAtt('ReplicaGroupId');
        this.attrReplicaPairId = this.getAtt('ReplicaPairId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.replicaGroupId = props.replicaGroupId;
        this.replicaPairId = props.replicaPairId;
    }
    get rosProperties() {
        return {
            replicaGroupId: this.replicaGroupId,
            replicaPairId: this.replicaPairId,
        };
    }
    renderProperties(props) {
        return rosDiskReplicaPairAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDiskReplicaPairAddition = RosDiskReplicaPairAddition;
/**
 * The resource type name for this resource class.
 */
RosDiskReplicaPairAddition.ROS_RESOURCE_TYPE_NAME = "ALIYUN::EBS::DiskReplicaPairAddition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWJzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVicy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWtCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx3Q0FBd0MsQ0FBQyxVQUFlO0lBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN2RyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUVBQXVFLENBQUMsQ0FBQztBQUNoRyxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMsNENBQTRDLENBQUMsVUFBZSxFQUFFLGdDQUF5QztJQUM1RyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsSUFBRyxnQ0FBZ0MsRUFBRTtRQUNqQyx3Q0FBd0MsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN4RTtJQUNELE9BQU87UUFDTCxjQUFjLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDbEUsYUFBYSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ2pFLENBQUM7QUFDTixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFhLDBCQUEyQixTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBa0MzRDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNDLEVBQUUsZ0NBQXlDO1FBQzNILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sNENBQTRDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7O0FBNURMLGdFQTZEQztBQTVERzs7R0FFRztBQUNvQixpREFBc0IsR0FBRyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFQlM6OkRpc2tSZXBsaWNhUGFpckFkZGl0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0Rpc2tSZXBsaWNhUGFpckFkZGl0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcGxpY2FHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlcGxpY2F0aW9uIHBhaXItY29uc2lzdGVudCBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXBsaWNhR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcGxpY2FQYWlySWQ6IFRoZSBJRCBvZiB0aGUgcmVwbGljYXRpb24gcGFpci4gWW91IGNhbiBjYWxsIHRoZSBEZXNjcmliZURpc2tSZXBsaWNhUGFpcnMgb3BlcmF0aW9uIHRvIHF1ZXJ5IHRoZSBJRHMgb2YgZXhpc3RpbmcgcmVwbGljYXRpb24gcGFpcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVwbGljYVBhaXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0Rpc2tSZXBsaWNhUGFpckFkZGl0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0Rpc2tSZXBsaWNhUGFpckFkZGl0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRGlza1JlcGxpY2FQYWlyQWRkaXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlcGxpY2FQYWlySWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVwbGljYVBhaXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwbGljYVBhaXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXBsaWNhUGFpcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXBsaWNhR3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZXBsaWNhR3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVwbGljYUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVwbGljYUdyb3VwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRGlza1JlcGxpY2FQYWlyQWRkaXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RUJTOjpEaXNrUmVwbGljYVBhaXJBZGRpdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGlza1JlcGxpY2FQYWlyQWRkaXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6RUJTOjpEaXNrUmVwbGljYVBhaXJBZGRpdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEaXNrUmVwbGljYVBhaXJBZGRpdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRGlza1JlcGxpY2FQYWlyQWRkaXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBSZXBsaWNhR3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXBsaWNhR3JvdXBJZCksXG4gICAgICBSZXBsaWNhUGFpcklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlcGxpY2FQYWlySWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkVCUzo6RGlza1JlcGxpY2FQYWlyQWRkaXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NEaXNrUmVwbGljYVBhaXJBZGRpdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6RUJTOjpEaXNrUmVwbGljYVBhaXJBZGRpdGlvblwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlcGxpY2FHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlcGxpY2F0aW9uIHBhaXItY29uc2lzdGVudCBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlcGxpY2FHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlcGxpY2FQYWlySWQ6IFRoZSBJRCBvZiB0aGUgcmVwbGljYXRpb24gcGFpci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlcGxpY2FQYWlySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlcGxpY2FHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlcGxpY2F0aW9uIHBhaXItY29uc2lzdGVudCBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwbGljYUdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXBsaWNhUGFpcklkOiBUaGUgSUQgb2YgdGhlIHJlcGxpY2F0aW9uIHBhaXIuIFlvdSBjYW4gY2FsbCB0aGUgRGVzY3JpYmVEaXNrUmVwbGljYVBhaXJzIG9wZXJhdGlvbiB0byBxdWVyeSB0aGUgSURzIG9mIGV4aXN0aW5nIHJlcGxpY2F0aW9uIHBhaXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXBsaWNhUGFpcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUJTOjpEaXNrUmVwbGljYVBhaXJBZGRpdGlvbmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRGlza1JlcGxpY2FQYWlyQWRkaXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0Rpc2tSZXBsaWNhUGFpckFkZGl0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJSZXBsaWNhR3JvdXBJZCA9IHRoaXMuZ2V0QXR0KCdSZXBsaWNhR3JvdXBJZCcpO1xuICAgICAgICB0aGlzLmF0dHJSZXBsaWNhUGFpcklkID0gdGhpcy5nZXRBdHQoJ1JlcGxpY2FQYWlySWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucmVwbGljYUdyb3VwSWQgPSBwcm9wcy5yZXBsaWNhR3JvdXBJZDtcbiAgICAgICAgdGhpcy5yZXBsaWNhUGFpcklkID0gcHJvcHMucmVwbGljYVBhaXJJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXBsaWNhR3JvdXBJZDogdGhpcy5yZXBsaWNhR3JvdXBJZCxcbiAgICAgICAgICAgIHJlcGxpY2FQYWlySWQ6IHRoaXMucmVwbGljYVBhaXJJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRGlza1JlcGxpY2FQYWlyQWRkaXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==