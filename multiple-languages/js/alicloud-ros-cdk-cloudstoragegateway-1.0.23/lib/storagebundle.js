"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageBundle = exports.StorageBundleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cloudstoragegateway_generated_1 = require("./cloudstoragegateway.generated");
Object.defineProperty(exports, "StorageBundleProperty", { enumerable: true, get: function () { return cloudstoragegateway_generated_1.RosStorageBundle; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudStorageGateway::StorageBundle`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStorageBundle`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
 */
class StorageBundle extends ros.Resource {
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
        const rosStorageBundle = new cloudstoragegateway_generated_1.RosStorageBundle(this, id, {
            description: props.description,
            storageBundleName: props.storageBundleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStorageBundle;
        this.attrCreateTime = rosStorageBundle.attrCreateTime;
        this.attrDescription = rosStorageBundle.attrDescription;
        this.attrStorageBundleId = rosStorageBundle.attrStorageBundleId;
        this.attrStorageBundleName = rosStorageBundle.attrStorageBundleName;
    }
}
exports.StorageBundle = StorageBundle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZWJ1bmRsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0b3JhZ2VidW5kbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1GQUFtRTtBQUV0QyxzR0FGcEIsZ0RBQWdCLE9BRXlCO0FBbUJsRDs7OztHQUlHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUEwQjNDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGdCQUFnQixHQUFHLElBQUksZ0RBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtTQUM3QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO1FBQ3RELElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUNoRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7SUFDeEUsQ0FBQztDQUNKO0FBaERELHNDQWdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1N0b3JhZ2VCdW5kbGUgfSBmcm9tICcuL2Nsb3Vkc3RvcmFnZWdhdGV3YXkuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU3RvcmFnZUJ1bmRsZSBhcyBTdG9yYWdlQnVuZGxlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBTdG9yYWdlQnVuZGxlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3RvcmFnZWdhdGV3YXktc3RvcmFnZWJ1bmRsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VCdW5kbGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzdG9yYWdlQnVuZGxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGdhdGV3YXkgY2x1c3Rlci4gVGhlIG5hbWUgbXVzdCBiZSAxIHRvIDYwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIHBlcmlvZHMgKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0b3JhZ2VCdW5kbGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBnYXRld2F5IGNsdXN0ZXIuIFRoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIDAgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDbG91ZFN0b3JhZ2VHYXRld2F5OjpTdG9yYWdlQnVuZGxlYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1N0b3JhZ2VCdW5kbGVgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHN0b3JhZ2VnYXRld2F5LXN0b3JhZ2VidW5kbGVcbiAqL1xuZXhwb3J0IGNsYXNzIFN0b3JhZ2VCdW5kbGUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFN0b3JhZ2VCdW5kbGVQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ3JlYXRlVGltZTogQ3JlYXRlIGEgZ2F0ZXdheSBjbHVzdGVyIHRpbWVzdGFtcC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZXNjcmlwdGlvbjogR2F0ZXdheSBjbHVzdGVyIGRlc2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVzY3JpcHRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTdG9yYWdlQnVuZGxlSWQ6IFRoZSBJRCBvZiB0aGUgZ2F0ZXdheSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3RvcmFnZUJ1bmRsZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3RvcmFnZUJ1bmRsZU5hbWU6IEdhdGV3YXkgY2x1c3RlciBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3RvcmFnZUJ1bmRsZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTdG9yYWdlQnVuZGxlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NTdG9yYWdlQnVuZGxlID0gbmV3IFJvc1N0b3JhZ2VCdW5kbGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBzdG9yYWdlQnVuZGxlTmFtZTogcHJvcHMuc3RvcmFnZUJ1bmRsZU5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU3RvcmFnZUJ1bmRsZTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHJvc1N0b3JhZ2VCdW5kbGUuYXR0ckNyZWF0ZVRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckRlc2NyaXB0aW9uID0gcm9zU3RvcmFnZUJ1bmRsZS5hdHRyRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYXR0clN0b3JhZ2VCdW5kbGVJZCA9IHJvc1N0b3JhZ2VCdW5kbGUuYXR0clN0b3JhZ2VCdW5kbGVJZDtcbiAgICAgICAgdGhpcy5hdHRyU3RvcmFnZUJ1bmRsZU5hbWUgPSByb3NTdG9yYWdlQnVuZGxlLmF0dHJTdG9yYWdlQnVuZGxlTmFtZTtcbiAgICB9XG59XG4iXX0=