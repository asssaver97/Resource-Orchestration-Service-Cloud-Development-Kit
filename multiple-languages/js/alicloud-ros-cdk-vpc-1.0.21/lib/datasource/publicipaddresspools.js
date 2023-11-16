"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicIpAddressPools = exports.PublicIpAddressPoolsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "PublicIpAddressPoolsProperty", { enumerable: true, get: function () { return vpc_generated_1.RosPublicIpAddressPools; } });
/**
 * A ROS resource type:  `DATASOURCE::VPC::PublicIpAddressPools`
 */
class PublicIpAddressPools extends ros.Resource {
    /**
     * Create a new `DATASOURCE::VPC::PublicIpAddressPools`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosPublicIpAddressPools = new vpc_generated_1.RosPublicIpAddressPools(this, id, {
            resourceGroupId: props.resourceGroupId,
            publicIpAddressPoolName: props.publicIpAddressPoolName,
            isp: props.isp,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPublicIpAddressPools;
        this.attrPublicIpAddressPoolIds = rosPublicIpAddressPools.attrPublicIpAddressPoolIds;
        this.attrPublicIpAddressPools = rosPublicIpAddressPools.attrPublicIpAddressPools;
    }
}
exports.PublicIpAddressPools = PublicIpAddressPools;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljaXBhZGRyZXNzcG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdWJsaWNpcGFkZHJlc3Nwb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTBEO0FBRXRCLDZHQUYzQix1Q0FBdUIsT0FFZ0M7QUFzQ2hFOztHQUVHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCbEQ7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUFtQyxFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDaEksS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLHVCQUF1QixHQUFHLElBQUksdUNBQXVCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuRSxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLHVCQUF1QjtZQUN0RCxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7U0FDakIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQztRQUN4QyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsdUJBQXVCLENBQUMsMEJBQTBCLENBQUM7UUFDckYsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDO0lBQ3JGLENBQUM7Q0FDSjtBQXBDRCxvREFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NQdWJsaWNJcEFkZHJlc3NQb29scyB9IGZyb20gJy4vdnBjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1B1YmxpY0lwQWRkcmVzc1Bvb2xzIGFzIFB1YmxpY0lwQWRkcmVzc1Bvb2xzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBEQVRBU09VUkNFOjpWUEM6OlB1YmxpY0lwQWRkcmVzc1Bvb2xzYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFB1YmxpY0lwQWRkcmVzc1Bvb2xzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaXNwOiBUaGUgbGluZSB0eXBlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQkdQIChkZWZhdWx0KTogQkdQIChNdWx0aS1JU1ApIGxpbmVzXG4gICAgICogQkdQX1BSTzogQkdQIChNdWx0aS1JU1ApIFBybyBsaW5lc1xuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IEJHUCAoTXVsdGktSVNQKSBhbmQgQkdQIChNdWx0aS1JU1ApIFBybywgc2VlIEVJUCBsaW5lIHR5cGVzLlxuICAgICAqIElmIHlvdSBhcmUgYWxsb3dlZCB0byB1c2Ugc2luZ2xlLUlTUCBiYW5kd2lkdGgsIHlvdSBjYW4gYWxzbyBjaG9vc2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuICAgICAqIENoaW5hVGVsZWNvbTogQ2hpbmEgVGVsZWNvbVxuICAgICAqIENoaW5hVW5pY29tOiBDaGluYSBVbmljb21cbiAgICAgKiBDaGluYU1vYmlsZTogQ2hpbmEgTW9iaWxlXG4gICAgICogQ2hpbmFUZWxlY29tX0wyOiBDaGluYSBUZWxlY29tIEwyXG4gICAgICogQ2hpbmFVbmljb21fTDI6IENoaW5hIFVuaWNvbSBMMlxuICAgICAqIENoaW5hTW9iaWxlX0wyOiBDaGluYSBNb2JpbGUgTDJcbiAgICAgKiBJZiB5b3VyIHNlcnZpY2VzIGFyZSBkZXBsb3llZCBpbiBDaGluYSBFYXN0IDEgRmluYW5jZSwgXG4gICAgICogdGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgYW5kIHlvdSBtdXN0IHNldCB0aGUgdmFsdWUgdG8gQkdQX0ZpbmFuY2VDbG91ZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc3A/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwdWJsaWNJcEFkZHJlc3NQb29sTmFtZTogVGhlIG5hbWUgb2YgdGhlIElQIGFkZHJlc3MgcG9vbC5cbiAgICAgKiBUaGlzIHBhcmFtZXRlciBpcyBvcHRpb25hbC4gVGhlIG5hbWUgbXVzdCBiZSAxIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCwgXG4gICAgICogYW5kIGNhbiBjb250YWluIGRpZ2l0cywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBcbiAgICAgKiBUaGUgbmFtZSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHVibGljSXBBZGRyZXNzUG9vbE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIElQIGFkZHJlc3MgcG9vbCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYERBVEFTT1VSQ0U6OlZQQzo6UHVibGljSXBBZGRyZXNzUG9vbHNgXG4gKi9cbmV4cG9ydCBjbGFzcyBQdWJsaWNJcEFkZHJlc3NQb29scyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljSXBBZGRyZXNzUG9vbElkczogVGhlIGxpc3Qgb2YgcHVibGljIGlwIGFkZHJlc3MgcG9vbCBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNJcEFkZHJlc3NQb29sSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljSXBBZGRyZXNzUG9vbHM6IFRoZSBsaXN0IG9mIHB1YmxpYyBpcCBhZGRyZXNzIHBvb2xzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHVibGljSXBBZGRyZXNzUG9vbHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgREFUQVNPVVJDRTo6VlBDOjpQdWJsaWNJcEFkZHJlc3NQb29sc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUHVibGljSXBBZGRyZXNzUG9vbHNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1B1YmxpY0lwQWRkcmVzc1Bvb2xzID0gbmV3IFJvc1B1YmxpY0lwQWRkcmVzc1Bvb2xzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBwdWJsaWNJcEFkZHJlc3NQb29sTmFtZTogcHJvcHMucHVibGljSXBBZGRyZXNzUG9vbE5hbWUsXG4gICAgICAgICAgICBpc3A6IHByb3BzLmlzcCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NQdWJsaWNJcEFkZHJlc3NQb29scztcbiAgICAgICAgdGhpcy5hdHRyUHVibGljSXBBZGRyZXNzUG9vbElkcyA9IHJvc1B1YmxpY0lwQWRkcmVzc1Bvb2xzLmF0dHJQdWJsaWNJcEFkZHJlc3NQb29sSWRzO1xuICAgICAgICB0aGlzLmF0dHJQdWJsaWNJcEFkZHJlc3NQb29scyA9IHJvc1B1YmxpY0lwQWRkcmVzc1Bvb2xzLmF0dHJQdWJsaWNJcEFkZHJlc3NQb29scztcbiAgICB9XG59XG4iXX0=