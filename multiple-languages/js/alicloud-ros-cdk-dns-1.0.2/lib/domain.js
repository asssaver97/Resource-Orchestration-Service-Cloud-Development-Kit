"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain = exports.DomainProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const dns_generated_1 = require("./dns.generated");
Object.defineProperty(exports, "DomainProperty", { enumerable: true, get: function () { return dns_generated_1.RosDomain; } });
/**
 * A ROS resource type:  `ALIYUN::DNS::Domain`
 */
class Domain extends ros.Resource {
    /**
     * Create a new `ALIYUN::DNS::Domain`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDomain = new dns_generated_1.RosDomain(this, id, {
            domainName: props.domainName,
            tags: props.tags,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomain;
        this.attrDnsServers = rosDomain.attrDnsServers;
        this.attrDomainId = rosDomain.attrDomainId;
        this.attrDomainName = rosDomain.attrDomainName;
        this.attrGroupId = rosDomain.attrGroupId;
        this.attrGroupName = rosDomain.attrGroupName;
        this.attrPunyCode = rosDomain.attrPunyCode;
    }
}
exports.Domain = Domain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBNEM7QUFFdEIsK0ZBRmIseUJBQVMsT0FFa0I7QUF1QnBDOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFxQ3BDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBa0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUM3RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sU0FBUyxHQUFHLElBQUkseUJBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3pCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO0lBQy9DLENBQUM7Q0FDSjtBQTVERCx3QkE0REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEb21haW4gfSBmcm9tICcuL2Rucy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NEb21haW4gYXMgRG9tYWluUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkROUzo6RG9tYWluYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERvbWFpblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRvbWFpbk5hbWU6IERvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG9tYWluTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ3JvdXBJZDogRG9tYWluIG5hbWUgZ3JvdXBpbmcsIHRoZSBkZWZhdWx0IGlzIHRoZSBcImRlZmF1bHQgZ3JvdXBpbmdcIiBHcm91cElkXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0RvbWFpbi5UYWdzUHJvcGVydHlbXTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RE5TOjpEb21haW5gXG4gKi9cbmV4cG9ydCBjbGFzcyBEb21haW4gZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERuc1NlcnZlcnM6IFRoZSBETlMgbGlzdCBmb3IgdGhlIGRvbWFpbiBuYW1lIHVuZGVyIHJlc29sdXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRuc1NlcnZlcnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEb21haW5JZDogRG9tYWluIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEb21haW5JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERvbWFpbk5hbWU6IERvbWFpbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEb21haW5OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgR3JvdXBJZDogRG9tYWluIG5hbWUgZ3JvdXAgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkb21haW4gbmFtZSBncm91cFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVueUNvZGU6IHB1bnljb2RlIHJldHVybmVkIG9ubHkgZm9yIGEgQ2hpbmVzZSBkb21haW4gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHVueUNvZGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpETlM6OkRvbWFpbmAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRG9tYWluUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zRG9tYWluID0gbmV3IFJvc0RvbWFpbih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRvbWFpbk5hbWU6IHByb3BzLmRvbWFpbk5hbWUsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgZ3JvdXBJZDogcHJvcHMuZ3JvdXBJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NEb21haW47XG4gICAgICAgIHRoaXMuYXR0ckRuc1NlcnZlcnMgPSByb3NEb21haW4uYXR0ckRuc1NlcnZlcnM7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbklkID0gcm9zRG9tYWluLmF0dHJEb21haW5JZDtcbiAgICAgICAgdGhpcy5hdHRyRG9tYWluTmFtZSA9IHJvc0RvbWFpbi5hdHRyRG9tYWluTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBJZCA9IHJvc0RvbWFpbi5hdHRyR3JvdXBJZDtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBOYW1lID0gcm9zRG9tYWluLmF0dHJHcm91cE5hbWU7XG4gICAgICAgIHRoaXMuYXR0clB1bnlDb2RlID0gcm9zRG9tYWluLmF0dHJQdW55Q29kZTtcbiAgICB9XG59XG4iXX0=