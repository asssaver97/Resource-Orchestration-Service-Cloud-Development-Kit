"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instances = exports.InstancesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mongodb_generated_1 = require("./mongodb.generated");
Object.defineProperty(exports, "InstancesProperty", { enumerable: true, get: function () { return mongodb_generated_1.RosInstances; } });
/**
 * A ROS resource type:  `DATASOURCE::MONGODB::Instances`
 */
class Instances extends ros.Resource {
    /**
     * Create a new `DATASOURCE::MONGODB::Instances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstances = new mongodb_generated_1.RosInstances(this, id, {
            engineVersion: props.engineVersion,
            replicationFactor: props.replicationFactor,
            dbInstanceStatus: props.dbInstanceStatus,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            dbInstanceClass: props.dbInstanceClass,
            vSwitchId: props.vSwitchId,
            dbInstanceType: props.dbInstanceType === undefined || props.dbInstanceType === null ? 'replicate' : props.dbInstanceType,
            expired: props.expired,
            connectionDomain: props.connectionDomain,
            vpcId: props.vpcId,
            dbInstanceId: props.dbInstanceId,
            chargeType: props.chargeType === undefined || props.chargeType === null ? 'PostPaid' : props.chargeType,
            networkType: props.networkType,
            dbInstanceDescription: props.dbInstanceDescription,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstances;
        this.attrInstanceIds = rosInstances.attrInstanceIds;
        this.attrInstances = rosInstances.attrInstances;
    }
}
exports.Instances = Instances;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QywyREFBbUQ7QUFFMUIsa0dBRmhCLGdDQUFZLE9BRXFCO0FBd0cxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ2Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQXdCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUNySCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksZ0NBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYztZQUN4SCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVTtZQUN2RyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQztJQUNwRCxDQUFDO0NBQ0o7QUFqREQsOEJBaURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW5zdGFuY2VzIH0gZnJvbSAnLi9tb25nb2RiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0luc3RhbmNlcyBhcyBJbnN0YW5jZXNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERBVEFTT1VSQ0U6Ok1PTkdPREI6Okluc3RhbmNlc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjaGFyZ2VUeXBlOiBUaGUgYmlsbGluZyBtZXRob2Qgb2YgdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogUG9zdFBhaWQ6IHBheS1hcy15b3UtZ29cbiAgICAgKiBQcmVQYWlkOiBzdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29ubmVjdGlvbkRvbWFpbjogVGhlIGVuZHBvaW50IG9mIHRoZSBub2RlLiBZb3UgY2FuIGNhbGwgdGhlIERlc2NyaWJlREJJbnN0YW5jZUF0dHJpYnV0ZSBvcGVyYXRpb24gdG8gcXVlcnkgdGhlIGVuZHBvaW50IG9mIHRoZSBub2RlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbm5lY3Rpb25Eb21haW4/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlQ2xhc3M6IFRoZSBpbnN0YW5jZSB0eXBlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB2YWxpZCB2YWx1ZXMsIHNlZSBJbnN0YW5jZSB0eXBlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlQ2xhc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZURlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiSW5zdGFuY2VTdGF0dXM6IFRoZSBzdGF0ZSBvZiB0aGUgaW5zdGFuY2UuIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHZhbGlkIHZhbHVlcywgc2VlIEluc3RhbmNlIHN0YXRlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlU3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZVR5cGU6IFRoZSBjYXRlZ29yeSBvZiB0aGUgaW5zdGFuY2UuIERlZmF1bHQgdmFsdWU6IHJlcGxpY2F0ZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHNoYXJkaW5nOiBzaGFyZGVkIGNsdXN0ZXIgaW5zdGFuY2VcbiAgICAgKiByZXBsaWNhdGU6IHJlcGxpY2Egc2V0IG9yIHN0YW5kYWxvbmUgaW5zdGFuY2VcbiAgICAgKiBOb3RlXG4gICAgICogVG8gcXVlcnkgdGhlIGxpc3Qgb2Ygc2hhcmRlZCBjbHVzdGVyIGluc3RhbmNlcywgeW91IG11c3Qgc2V0IHRoZSBwYXJhbWV0ZXIgdG8gc2hhcmRpbmcuXG4gICAgICogVGhpcyBvcGVyYXRpb24gZGlzcGxheXMgdGhlIGxpc3Qgb2YgcmVwbGljYSBzZXQgYW5kIHN0YW5kYWxvbmUgaW5zdGFuY2VzIHdoZW4gdGhlIHBhcmFtZXRlciB1c2VzIHRoZSBkZWZhdWx0IHZhbHVlIHJlcGxpY2F0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuZ2luZVZlcnNpb246IFRoZSBkYXRhYmFzZSBlbmdpbmUgdmVyc2lvbiBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiA1LjBcbiAgICAgKiA0LjRcbiAgICAgKiA0LjJcbiAgICAgKiA0LjBcbiAgICAgKiAzLjRcbiAgICAgKi9cbiAgICByZWFkb25seSBlbmdpbmVWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZXhwaXJlZDogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGluc3RhbmNlIGV4cGlyZXMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBUaGUgaW5zdGFuY2UgZXhwaXJlcy5cbiAgICAgKiBmYWxzZTogVGhlIGluc3RhbmNlIGRvZXMgbm90IGV4cGlyZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBleHBpcmVkPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5ldHdvcmtUeXBlOiBUaGUgbmV0d29yayB0eXBlIG9mIHRoZSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIENsYXNzaWNcbiAgICAgKiBWcGNcbiAgICAgKi9cbiAgICByZWFkb25seSBuZXR3b3JrVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlcGxpY2F0aW9uRmFjdG9yOiBUaGUgbnVtYmVyIG9mIG5vZGVzIGluIGEgcmVwbGljYSBzZXQgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczogMywgNSwgYW5kIDcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVwbGljYXRpb25GYWN0b3I/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyBvZiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zSW5zdGFuY2VzLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBWUEMgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgdlN3aXRjaCBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgem9uZUlkOiBUaGUgem9uZSBJRCBvZiB0aGUgaW5zdGFuY2UuIFlvdSBjYW4gY2FsbCB0aGUgRGVzY3JpYmVSZWdpb25zIG9wZXJhdGlvbiB0byBxdWVyeSB0aGUgbW9zdCByZWNlbnQgem9uZSBsaXN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYERBVEFTT1VSQ0U6Ok1PTkdPREI6Okluc3RhbmNlc2BcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VJZHM6IFRoZSBsaXN0IG9mIFRoZSBpbnN0YW5jZSBJZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlczogVGhlIGxpc3Qgb2YgVGhlIGluc3RhbmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpNT05HT0RCOjpJbnN0YW5jZXNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEluc3RhbmNlc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zSW5zdGFuY2VzID0gbmV3IFJvc0luc3RhbmNlcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGVuZ2luZVZlcnNpb246IHByb3BzLmVuZ2luZVZlcnNpb24sXG4gICAgICAgICAgICByZXBsaWNhdGlvbkZhY3RvcjogcHJvcHMucmVwbGljYXRpb25GYWN0b3IsXG4gICAgICAgICAgICBkYkluc3RhbmNlU3RhdHVzOiBwcm9wcy5kYkluc3RhbmNlU3RhdHVzLFxuICAgICAgICAgICAgem9uZUlkOiBwcm9wcy56b25lSWQsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VDbGFzczogcHJvcHMuZGJJbnN0YW5jZUNsYXNzLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBkYkluc3RhbmNlVHlwZTogcHJvcHMuZGJJbnN0YW5jZVR5cGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5kYkluc3RhbmNlVHlwZSA9PT0gbnVsbCA/ICdyZXBsaWNhdGUnIDogcHJvcHMuZGJJbnN0YW5jZVR5cGUsXG4gICAgICAgICAgICBleHBpcmVkOiBwcm9wcy5leHBpcmVkLFxuICAgICAgICAgICAgY29ubmVjdGlvbkRvbWFpbjogcHJvcHMuY29ubmVjdGlvbkRvbWFpbixcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VJZDogcHJvcHMuZGJJbnN0YW5jZUlkLFxuICAgICAgICAgICAgY2hhcmdlVHlwZTogcHJvcHMuY2hhcmdlVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmNoYXJnZVR5cGUgPT09IG51bGwgPyAnUG9zdFBhaWQnIDogcHJvcHMuY2hhcmdlVHlwZSxcbiAgICAgICAgICAgIG5ldHdvcmtUeXBlOiBwcm9wcy5uZXR3b3JrVHlwZSxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VEZXNjcmlwdGlvbjogcHJvcHMuZGJJbnN0YW5jZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnN0YW5jZXM7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWRzID0gcm9zSW5zdGFuY2VzLmF0dHJJbnN0YW5jZUlkcztcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VzID0gcm9zSW5zdGFuY2VzLmF0dHJJbnN0YW5jZXM7XG4gICAgfVxufVxuIl19