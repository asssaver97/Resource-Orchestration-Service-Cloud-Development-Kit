"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alias = exports.AliasProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const fc_generated_1 = require("./fc.generated");
Object.defineProperty(exports, "AliasProperty", { enumerable: true, get: function () { return fc_generated_1.RosAlias; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC::Alias`, which is used to create an Alias.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlias`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-alias
 */
class Alias extends ros.Resource {
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
        const rosAlias = new fc_generated_1.RosAlias(this, id, {
            versionId: props.versionId,
            description: props.description,
            serviceName: props.serviceName,
            additionalVersion: props.additionalVersion,
            aliasName: props.aliasName,
            additionalWeight: props.additionalWeight,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlias;
        this.attrAliasName = rosAlias.attrAliasName;
        this.attrServiceName = rosAlias.attrServiceName;
        this.attrVersionId = rosAlias.attrVersionId;
    }
}
exports.Alias = Alias;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGlhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaURBQTBDO0FBRXJCLDhGQUZaLHVCQUFRLE9BRWlCO0FBdUNsQzs7OztHQUlHO0FBQ0gsTUFBYSxLQUFNLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFxQm5DOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWlCLEVBQUUsbUNBQTJDLElBQUk7UUFDNUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFFBQVEsR0FBRyxJQUFJLHVCQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1NBQzNDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ2hELENBQUM7Q0FDSjtBQTlDRCxzQkE4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBbGlhcyB9IGZyb20gJy4vZmMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQWxpYXMgYXMgQWxpYXNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFsaWFzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWZjLWFsaWFzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWxpYXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhbGlhc05hbWU6IEFsaWFzIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBhbGlhc05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlcnZpY2VOYW1lOiBTZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWRkaXRpb25hbFZlcnNpb246IEFkZGl0aW9uYWwgdmVyc2lvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFkZGl0aW9uYWxWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWRkaXRpb25hbFdlaWdodDogVHJhZmZpYyB3ZWlnaHQgb2YgYWRkaXRpb25hbCB2ZXJzaW9uLiBGcm9tIDAgdG8gMTAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFkZGl0aW9uYWxXZWlnaHQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVmVyc2lvbiBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdmVyc2lvbklkOiBWZXJzaW9uIElEXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmVyc2lvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpGQzo6QWxpYXNgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhbiBBbGlhcy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0FsaWFzYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZmMtYWxpYXNcbiAqL1xuZXhwb3J0IGNsYXNzIEFsaWFzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBBbGlhc1Byb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBbGlhc05hbWU6IFRoZSBhbGlhcyBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBbGlhc05hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZXJ2aWNlTmFtZTogVGhlIHNlcnZpY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWZXJzaW9uSWQ6IFRoZSB2ZXJzaW9uIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWZXJzaW9uSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBbGlhc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zQWxpYXMgPSBuZXcgUm9zQWxpYXModGhpcywgaWQsICB7XG4gICAgICAgICAgICB2ZXJzaW9uSWQ6IHByb3BzLnZlcnNpb25JZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBwcm9wcy5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxWZXJzaW9uOiBwcm9wcy5hZGRpdGlvbmFsVmVyc2lvbixcbiAgICAgICAgICAgIGFsaWFzTmFtZTogcHJvcHMuYWxpYXNOYW1lLFxuICAgICAgICAgICAgYWRkaXRpb25hbFdlaWdodDogcHJvcHMuYWRkaXRpb25hbFdlaWdodCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NBbGlhcztcbiAgICAgICAgdGhpcy5hdHRyQWxpYXNOYW1lID0gcm9zQWxpYXMuYXR0ckFsaWFzTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZU5hbWUgPSByb3NBbGlhcy5hdHRyU2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMuYXR0clZlcnNpb25JZCA9IHJvc0FsaWFzLmF0dHJWZXJzaW9uSWQ7XG4gICAgfVxufVxuIl19