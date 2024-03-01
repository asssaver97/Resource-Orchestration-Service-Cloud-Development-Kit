"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceShareAssociation = exports.ResourceShareAssociationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const resourcemanager_generated_1 = require("./resourcemanager.generated");
Object.defineProperty(exports, "ResourceShareAssociationProperty", { enumerable: true, get: function () { return resourcemanager_generated_1.RosResourceShareAssociation; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ResourceShareAssociation`, which is used to associate a shared resource or a resource user.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceShareAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
 */
class ResourceShareAssociation extends ros.Resource {
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
        const rosResourceShareAssociation = new resourcemanager_generated_1.RosResourceShareAssociation(this, id, {
            resourceShareId: props.resourceShareId,
            targets: props.targets,
            resources: props.resources,
            permissionNames: props.permissionNames,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceShareAssociation;
        this.attrResourceShareId = rosResourceShareAssociation.attrResourceShareId;
    }
}
exports.ResourceShareAssociation = ResourceShareAssociation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzaGFyZWFzc29jaWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzb3VyY2VzaGFyZWFzc29jaWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QywyRUFBMEU7QUFFbEMsaUhBRi9CLHVEQUEyQixPQUVvQztBQWdDeEU7Ozs7R0FJRztBQUNILE1BQWEsd0JBQXlCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXdEQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBb0MsRUFBRSxtQ0FBMkMsSUFBSTtRQUMvSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSx1REFBMkIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNFLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtTQUN6QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUEyQixDQUFDO1FBQzVDLElBQUksQ0FBQyxtQkFBbUIsR0FBRywyQkFBMkIsQ0FBQyxtQkFBbUIsQ0FBQztJQUMvRSxDQUFDO0NBQ0o7QUFoQ0QsNERBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uIH0gZnJvbSAnLi9yZXNvdXJjZW1hbmFnZXIuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uIGFzIFJlc291cmNlU2hhcmVBc3NvY2lhdGlvblByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1yZXNvdXJjZXNoYXJlYXNzb2NpYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZVNoYXJlQXNzb2NpYXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZVNoYXJlSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2Ugc2hhcmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VTaGFyZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJtaXNzaW9uTmFtZXM6IFNoYXJpbmcgcGVybWlzc2lvbiBuYW1lLiBXaGVuIGVtcHR5LCB0aGUgc3lzdGVtIGF1dG9tYXRpY2FsbHkgYmluZHMgdGhlIGRlZmF1bHQgcGVybWlzc2lvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXNvdXJjZSB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcm1pc3Npb25OYW1lcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZXM6XG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VzPzogQXJyYXk8Um9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uLlJlc291cmNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhcmdldHM6IFRoZSBzaGFyZWQgdGFyZ2V0LlxuICAgICAqIEEgc2hhcmVkIHRhcmdldCBzaGFyZXMgdGhlIHJlc291cmNlcyBvZiByZXNvdXJjZSBvd25lcnMuIFlvdSBjYW4gc2hhcmUgeW91ciByZXNvdXJjZXNcbiAgICAgKiBvbmx5IHdpdGggdGhlIG1lbWJlciBhY2NvdW50cyBpbiB5b3VyIHJlc291cmNlIGRpcmVjdG9yeS4gQSBzaGFyZWQgdGFyZ2V0IGlzIGluZGljYXRlZFxuICAgICAqIGJ5IGl0cyBhY2NvdW50IElELiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gb2J0YWluIHRoZSBJRCwgc2VlIFZpZXcgdGhlIGJhc2ljIGluZm9ybWF0aW9uIG9mIGEgbWVtYmVyIGFjY291bnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0cz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uYCwgd2hpY2ggaXMgdXNlZCB0byBhc3NvY2lhdGUgYSBzaGFyZWQgcmVzb3VyY2Ugb3IgYSByZXNvdXJjZSB1c2VyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLXJlc291cmNlc2hhcmVhc3NvY2lhdGlvblxuICovXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBSZXNvdXJjZVNoYXJlQXNzb2NpYXRpb25Qcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVzb3VyY2VTaGFyZUlkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIHNoYXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VTaGFyZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NSZXNvdXJjZVNoYXJlQXNzb2NpYXRpb24gPSBuZXcgUm9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcmVzb3VyY2VTaGFyZUlkOiBwcm9wcy5yZXNvdXJjZVNoYXJlSWQsXG4gICAgICAgICAgICB0YXJnZXRzOiBwcm9wcy50YXJnZXRzLFxuICAgICAgICAgICAgcmVzb3VyY2VzOiBwcm9wcy5yZXNvdXJjZXMsXG4gICAgICAgICAgICBwZXJtaXNzaW9uTmFtZXM6IHByb3BzLnBlcm1pc3Npb25OYW1lcyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NSZXNvdXJjZVNoYXJlQXNzb2NpYXRpb247XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlU2hhcmVJZCA9IHJvc1Jlc291cmNlU2hhcmVBc3NvY2lhdGlvbi5hdHRyUmVzb3VyY2VTaGFyZUlkO1xuICAgIH1cbn1cbiJdfQ==