"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceClone = exports.InstanceCloneProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "InstanceCloneProperty", { enumerable: true, get: function () { return ecs_generated_1.RosInstanceClone; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::InstanceClone`
 */
class InstanceClone extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::InstanceClone`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstanceClone = new ecs_generated_1.RosInstanceClone(this, id, {
            backendServerWeight: props.backendServerWeight ? props.backendServerWeight : 100,
            keyPairName: props.keyPairName,
            description: props.description,
            diskMappings: props.diskMappings,
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            instanceChargeType: props.instanceChargeType ? props.instanceChargeType : 'PostPaid',
            securityGroupId: props.securityGroupId,
            period: props.period ? props.period : 1,
            deletionProtection: props.deletionProtection,
            sourceInstanceId: props.sourceInstanceId,
            loadBalancerIdToAttach: props.loadBalancerIdToAttach,
            instanceName: props.instanceName,
            ramRoleName: props.ramRoleName,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn ? props.internetMaxBandwidthIn : 200,
            imageId: props.imageId,
            spotPriceLimit: props.spotPriceLimit,
            tags: props.tags,
            spotStrategy: props.spotStrategy,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceClone;
        this.attrHostName = rosInstanceClone.attrHostName;
        this.attrInnerIp = rosInstanceClone.attrInnerIp;
        this.attrInstanceId = rosInstanceClone.attrInstanceId;
        this.attrPrimaryNetworkInterfaceId = rosInstanceClone.attrPrimaryNetworkInterfaceId;
        this.attrPrivateIp = rosInstanceClone.attrPrivateIp;
        this.attrPublicIp = rosInstanceClone.attrPublicIp;
        this.attrZoneId = rosInstanceClone.attrZoneId;
    }
}
exports.InstanceClone = InstanceClone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2VjbG9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhbmNlY2xvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBK0dsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBMEMzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksZ0NBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRztZQUNoRixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQ3BGLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQjtZQUNwRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ3pGLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDLFlBQVksQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztRQUN0RCxJQUFJLENBQUMsNkJBQTZCLEdBQUcsZ0JBQWdCLENBQUMsNkJBQTZCLENBQUM7UUFDcEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7SUFDbEQsQ0FBQztDQUNKO0FBbkZELHNDQW1GQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0luc3RhbmNlQ2xvbmUgfSBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NJbnN0YW5jZUNsb25lIGFzIEluc3RhbmNlQ2xvbmVQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6RUNTOjpJbnN0YW5jZUNsb25lYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluc3RhbmNlQ2xvbmVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzb3VyY2VJbnN0YW5jZUlkOiBTb3VyY2UgZWNzIGluc3RhbmNlIHVzZWQgdG8gY29weSBwcm9wZXJ0aWVzIHRvIGNsb25lIG5ldyBlY3MgaW5zdGFuY2UuIEl0IHdpbGwgY29weSB0aGUgSW5zdGFuY2VUeXBlLCBJbWFnZUlkLCBJbnRlcm5ldENoYXJnZVR5cGUsIEludGVybmV0TWF4QmFuZHdpZHRoSW4sIEludGVybmV0TWF4QmFuZHdpZHRoT3V0IGFuZCB0aGUgc3lzdGVtIGRpc2sgYW5kIGRhdGEgZGlzayBjb25maWd1cmF0aW9ucy4gSWYgdGhlIGluc3RhbmNlIG5ldHdvcmsgaXMgVlBDLCBpdCB3aWxsIGFsc28gY2xvbmUgdGhlIHJlbGF0aXZlIHByb3BlcnRpZXMuIElmIHNwZWNpZmllZCBpbnN0YW5jZSB3aXRoIG1vcmUgdGhhbiBvbmUgc2VjdXJpdHkgZ3JvdXAsIGl0IHdpbGwgdXNlIHRoZSBmaXJzdCBzZWN1cml0eSBncm91cCB0byBjcmVhdGUgaW5zdGFuY2UuIHlvdSBjYW4gYWxzbyBzcGVjaWZ5IHRoZSBTZWN1cml0eUdyb3VwSWQgdG8gb3ZlcnJpZGUgaXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlSW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFja2VuZFNlcnZlcldlaWdodDogVGhlIHdlaWdodCBvZiBiYWNrZW5kIHNlcnZlciBvZiBsb2FkIGJhbGFuY2VyLiBGcm9tIDAgdG8gMTAwLCAwIG1lYW5zIG9mZmxpbmUuIERlZmF1bHQgaXMgMTAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2tlbmRTZXJ2ZXJXZWlnaHQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxldGlvblByb3RlY3Rpb246IFdoZXRoZXIgYW4gaW5zdGFuY2UgY2FuIGJlIHJlbGVhc2VkIG1hbnVhbGx5IHRocm91Z2ggdGhlIGNvbnNvbGUgb3IgQVBJLCBkZWxldGlvbiBwcm90ZWN0aW9uIG9ubHkgc3VwcG9ydCBwb3N0UGFpZCBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uUHJvdGVjdGlvbj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIGluc3RhbmNlLCBbMiwgMjU2XSBjaGFyYWN0ZXJzLiBEbyBub3QgZmlsbCBvciBlbXB0eSwgdGhlIGRlZmF1bHQgaXMgZW1wdHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNrTWFwcGluZ3M6IERpc2sgbWFwcGluZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAxNiBkaXNrcy5cbiAgICAgKiBJZiB0aGUgaW1hZ2UgY29udGFpbnMgYSBkYXRhIGRpc2ssIHlvdSBjYW4gc3BlY2lmeSBvdGhlciBwYXJhbWV0ZXJzIG9mIHRoZSBkYXRhIGRpc2sgdmlhIHRoZSBzYW1lIHZhbHVlIG9mIHBhcmFtZXRlciBcIkRldmljZVwiLiBJZiBwYXJhbWV0ZXIgXCJDYXRlZ29yeVwiIGlzIG5vdCBzcGVjaWZpZWQsIGl0IHdpbGwgYmUgY2xvdWRfZWZmaWNpZW5jeSBpbnN0ZWFkIG9mIFwiQ2F0ZWdvcnlcIiBvZiBkYXRhIGRpc2sgaW4gdGhlIGltYWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpc2tNYXBwaW5ncz86IEFycmF5PFJvc0luc3RhbmNlQ2xvbmUuRGlza01hcHBpbmdzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW1hZ2VJZDogSW1hZ2UgSUQgdG8gY3JlYXRlIGVjcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBJbnN0YW5jZSBDaGFyZ2UgdHlwZSwgYWxsb3dlZCB2YWx1ZTogUHJlcGFpZCBhbmQgUG9zdHBhaWQuIElmIHNwZWNpZmllZCBQcmVwYWlkLCBwbGVhc2UgZW5zdXJlIHlvdSBoYXZlIHN1ZmZpY2llbnQgYmFsYW5jZSBpbiB5b3VyIGFjY291bnQuIE9yIGluc3RhbmNlIGNyZWF0aW9uIHdpbGwgYmUgZmFpbHVyZS4gRGVmYXVsdCB2YWx1ZSBpcyBQb3N0cGFpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IERpc3BsYXkgbmFtZSBvZiB0aGUgaW5zdGFuY2UsIFsyLCAxMjhdIEVuZ2xpc2ggb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBpbiBzaXplLCBjYW4gY29udGFpbiBudW1iZXJzLCAnXycgb3IgJy4nLCAnLSdcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnRlcm5ldE1heEJhbmR3aWR0aEluOiBNYXggaW50ZXJuZXQgb3V0IGJhbmQgd2lkdGggc2V0dGluZywgdW5pdCBpbiBNYnBzKE1lZ2EgYml0IHBlciBzZWNvbmQpLiBUaGUgcmFuZ2UgaXMgWzEsMjAwXSwgZGVmYXVsdCBpcyAyMDAgTWJwcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldE1heEJhbmR3aWR0aEluPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkga2V5UGFpck5hbWU6IFNTSCBrZXkgcGFpciBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVBhaXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9hZEJhbGFuY2VySWRUb0F0dGFjaDogQWZ0ZXIgdGhlIGluc3RhbmNlIGlzIGNyZWF0ZWQuIEF1dG9tYXRpYyBhdHRhY2ggaXQgdG8gdGhlIGxvYWQgYmFsYW5jZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VySWRUb0F0dGFjaD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhc3N3b3JkOiBQYXNzd29yZCBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZS4gTXVzdCBjb250YWluIGF0IGxlYXN0IDMgdHlwZXMgb2Ygc3BlY2lhbCBjaGFyYWN0ZXIsIGxvd2VyIGNoYXJhY3RlciwgdXBwZXIgY2hhcmFjdGVyLCBudW1iZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFzc3dvcmQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFByZXBhaWQgdGltZSBwZXJpb2QuIFVuaXQgaXMgbW9udGgsIGl0IGNvdWxkIGJlIGZyb20gMSB0byA5IG9yIDEyLCAyNCwgMzYsIDQ4LCA2MC4gRGVmYXVsdCB2YWx1ZSBpcyAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJhbVJvbGVOYW1lOiBJbnN0YW5jZSBSQU0gcm9sZSBuYW1lLiBUaGUgbmFtZSBpcyBwcm92aWRlZCBhbmQgbWFpbnRhaW5lZCBieSBSZXNvdXJjZSBBY2Nlc3MgTWFuYWdlbWVudCAoUkFNKSBhbmQgY2FuIGJlIHF1ZXJpZWQgdXNpbmcgTGlzdFJvbGVzLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIFJBTSBBUEkgQ3JlYXRlUm9sZSBhbmQgTGlzdFJvbGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJhbVJvbGVOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFNlY3VyaXR5IGdyb3VwIHRvIGNyZWF0ZSBlY3MgaW5zdGFuY2UuIEZvciBjbGFzc2ljIGluc3RhbmNlIG5lZWQgdGhlIHNlY3VyaXR5IGdyb3VwIG5vdCBiZWxvbmcgdG8gVlBDLCBmb3IgVlBDIGluc3RhbmNlLCBwbGVhc2UgbWFrZSBzdXJlIHRoZSBzZWN1cml0eSBncm91cCBiZWxvbmcgdG8gc3BlY2lmaWVkIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzcG90UHJpY2VMaW1pdDogVGhlIGhvdXJseSBwcmljZSB0aHJlc2hvbGQgb2YgYSBpbnN0YW5jZSwgYW5kIGl0IHRha2VzIGVmZmVjdCBvbmx5IHdoZW4gcGFyYW1ldGVyIEluc3RhbmNlQ2hhcmdlVHlwZSBpcyBQb3N0UGFpZC4gVGhyZWUgZGVjaW1hbHMgaXMgYWxsb3dlZCBhdCBtb3N0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNwb3RQcmljZUxpbWl0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BvdFN0cmF0ZWd5OiBUaGUgc3BvdCBzdHJhdGVneSBvZiBhIFBheS1Bcy1Zb3UtR28gaW5zdGFuY2UsIGFuZCBpdCB0YWtlcyBlZmZlY3Qgb25seSB3aGVuIHBhcmFtZXRlciBJbnN0YW5jZUNoYXJnZVR5cGUgaXMgUG9zdFBhaWQuIFZhbHVlIHJhbmdlOiBcIk5vU3BvdDogQSByZWd1bGFyIFBheS1Bcy1Zb3UtR28gaW5zdGFuY2VcIiwgXCJTcG90V2l0aFByaWNlTGltaXQ6IEEgcHJpY2UgdGhyZXNob2xkIGZvciBhIHNwb3QgaW5zdGFuY2UsIFwiXCJTcG90QXNQcmljZUdvOiBBIHByaWNlIHRoYXQgaXMgYmFzZWQgb24gdGhlIGhpZ2hlc3QgUGF5LUFzLVlvdS1HbyBpbnN0YW5jZS4gXCJEZWZhdWx0IHZhbHVlOiBOb1Nwb3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BvdFN0cmF0ZWd5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zSW5zdGFuY2VDbG9uZS5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHpvbmVJZDogVGhlIElEIG9mIHRoZSB6b25lIHRvIHdoaWNoIHRoZSBpbnN0YW5jZSBiZWxvbmdzLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgXG4gICAgICogY2FsbCB0aGUgRGVzY3JpYmVab25lcyBvcGVyYXRpb24gdG8gcXVlcnkgdGhlIG1vc3QgcmVjZW50IHpvbmUgbGlzdC4gXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBlbXB0eSwgd2hpY2ggbWVhbnMgcmFuZG9tIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkVDUzo6SW5zdGFuY2VDbG9uZWBcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlQ2xvbmUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEhvc3ROYW1lOiBIb3N0IG5hbWUgb2YgY3JlYXRlZCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckhvc3ROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5uZXJJcDogSW5uZXIgSVAgYWRkcmVzcyBvZiB0aGUgc3BlY2lmaWVkIGluc3RhbmNlLiBPbmx5IGZvciBjbGFzc2ljYWwgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbm5lcklwOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIGluc3RhbmNlIGlkIG9mIGNyZWF0ZWQgZWNzIGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJpbWFyeU5ldHdvcmtJbnRlcmZhY2VJZDogUHJpbWFyeSBuZXR3b3JrIGludGVyZmFjZSBpZCBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJpbWFyeU5ldHdvcmtJbnRlcmZhY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFByaXZhdGVJcDogUHJpdmF0ZSBJUCBhZGRyZXNzIG9mIGNyZWF0ZWQgZWNzIGluc3RhbmNlLiBPbmx5IGZvciBWUEMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcml2YXRlSXA6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQdWJsaWNJcDogUHVibGljIElQIGFkZHJlc3Mgb2YgY3JlYXRlZCBlY3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNJcDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFpvbmVJZDogWm9uZSBpZCBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyWm9uZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUNTOjpJbnN0YW5jZUNsb25lYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJbnN0YW5jZUNsb25lUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zSW5zdGFuY2VDbG9uZSA9IG5ldyBSb3NJbnN0YW5jZUNsb25lKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYmFja2VuZFNlcnZlcldlaWdodDogcHJvcHMuYmFja2VuZFNlcnZlcldlaWdodCA/IHByb3BzLmJhY2tlbmRTZXJ2ZXJXZWlnaHQgOiAxMDAsXG4gICAgICAgICAgICBrZXlQYWlyTmFtZTogcHJvcHMua2V5UGFpck5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkaXNrTWFwcGluZ3M6IHByb3BzLmRpc2tNYXBwaW5ncyxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgem9uZUlkOiBwcm9wcy56b25lSWQsXG4gICAgICAgICAgICBpbnN0YW5jZUNoYXJnZVR5cGU6IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA/IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZSA6ICdQb3N0UGFpZCcsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kID8gcHJvcHMucGVyaW9kIDogMSxcbiAgICAgICAgICAgIGRlbGV0aW9uUHJvdGVjdGlvbjogcHJvcHMuZGVsZXRpb25Qcm90ZWN0aW9uLFxuICAgICAgICAgICAgc291cmNlSW5zdGFuY2VJZDogcHJvcHMuc291cmNlSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGxvYWRCYWxhbmNlcklkVG9BdHRhY2g6IHByb3BzLmxvYWRCYWxhbmNlcklkVG9BdHRhY2gsXG4gICAgICAgICAgICBpbnN0YW5jZU5hbWU6IHByb3BzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICAgIHJhbVJvbGVOYW1lOiBwcm9wcy5yYW1Sb2xlTmFtZSxcbiAgICAgICAgICAgIGludGVybmV0TWF4QmFuZHdpZHRoSW46IHByb3BzLmludGVybmV0TWF4QmFuZHdpZHRoSW4gPyBwcm9wcy5pbnRlcm5ldE1heEJhbmR3aWR0aEluIDogMjAwLFxuICAgICAgICAgICAgaW1hZ2VJZDogcHJvcHMuaW1hZ2VJZCxcbiAgICAgICAgICAgIHNwb3RQcmljZUxpbWl0OiBwcm9wcy5zcG90UHJpY2VMaW1pdCxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgICAgICBzcG90U3RyYXRlZ3k6IHByb3BzLnNwb3RTdHJhdGVneSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9wcy5wYXNzd29yZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnN0YW5jZUNsb25lO1xuICAgICAgICB0aGlzLmF0dHJIb3N0TmFtZSA9IHJvc0luc3RhbmNlQ2xvbmUuYXR0ckhvc3ROYW1lO1xuICAgICAgICB0aGlzLmF0dHJJbm5lcklwID0gcm9zSW5zdGFuY2VDbG9uZS5hdHRySW5uZXJJcDtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0luc3RhbmNlQ2xvbmUuYXR0ckluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clByaW1hcnlOZXR3b3JrSW50ZXJmYWNlSWQgPSByb3NJbnN0YW5jZUNsb25lLmF0dHJQcmltYXJ5TmV0d29ya0ludGVyZmFjZUlkO1xuICAgICAgICB0aGlzLmF0dHJQcml2YXRlSXAgPSByb3NJbnN0YW5jZUNsb25lLmF0dHJQcml2YXRlSXA7XG4gICAgICAgIHRoaXMuYXR0clB1YmxpY0lwID0gcm9zSW5zdGFuY2VDbG9uZS5hdHRyUHVibGljSXA7XG4gICAgICAgIHRoaXMuYXR0clpvbmVJZCA9IHJvc0luc3RhbmNlQ2xvbmUuYXR0clpvbmVJZDtcbiAgICB9XG59XG4iXX0=