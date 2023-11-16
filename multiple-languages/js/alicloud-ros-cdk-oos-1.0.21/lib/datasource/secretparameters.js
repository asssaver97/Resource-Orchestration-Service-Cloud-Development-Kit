"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretParameters = exports.SecretParametersProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const oos_generated_1 = require("./oos.generated");
Object.defineProperty(exports, "SecretParametersProperty", { enumerable: true, get: function () { return oos_generated_1.RosSecretParameters; } });
/**
 * A ROS resource type:  `DATASOURCE::OOS::SecretParameters`
 */
class SecretParameters extends ros.Resource {
    /**
     * Create a new `DATASOURCE::OOS::SecretParameters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSecretParameters = new oos_generated_1.RosSecretParameters(this, id, {
            resourceGroupId: props.resourceGroupId,
            secretParameterName: props.secretParameterName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecretParameters;
        this.attrSecretParameterNames = rosSecretParameters.attrSecretParameterNames;
        this.attrSecretParameters = rosSecretParameters.attrSecretParameters;
    }
}
exports.SecretParameters = SecretParameters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjcmV0cGFyYW1ldGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3JldHBhcmFtZXRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFzRDtBQUV0Qix5R0FGdkIsbUNBQW1CLE9BRTRCO0FBa0J4RDs7R0FFRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQjlDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBK0IsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQzVILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLG1DQUFtQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDM0QsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7U0FDakQsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUNwQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsbUJBQW1CLENBQUMsd0JBQXdCLENBQUM7UUFDN0UsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDO0lBQ3pFLENBQUM7Q0FDSjtBQW5DRCw0Q0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NTZWNyZXRQYXJhbWV0ZXJzIH0gZnJvbSAnLi9vb3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU2VjcmV0UGFyYW1ldGVycyBhcyBTZWNyZXRQYXJhbWV0ZXJzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBEQVRBU09VUkNFOjpPT1M6OlNlY3JldFBhcmFtZXRlcnNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VjcmV0UGFyYW1ldGVyc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNlY3JldFBhcmFtZXRlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSBlbmNyeXB0aW9uIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWNyZXRQYXJhbWV0ZXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgREFUQVNPVVJDRTo6T09TOjpTZWNyZXRQYXJhbWV0ZXJzYFxuICovXG5leHBvcnQgY2xhc3MgU2VjcmV0UGFyYW1ldGVycyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VjcmV0UGFyYW1ldGVyTmFtZXM6IFRoZSBsaXN0IG9mIHNlY3JldCBwYXJhbWV0ZXIgbmFtZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZWNyZXRQYXJhbWV0ZXJOYW1lczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlY3JldFBhcmFtZXRlcnM6IFRoZSBsaXN0IG9mIHNlY3JldCBwYXJhbWV0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VjcmV0UGFyYW1ldGVyczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpPT1M6OlNlY3JldFBhcmFtZXRlcnNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNlY3JldFBhcmFtZXRlcnNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1NlY3JldFBhcmFtZXRlcnMgPSBuZXcgUm9zU2VjcmV0UGFyYW1ldGVycyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgc2VjcmV0UGFyYW1ldGVyTmFtZTogcHJvcHMuc2VjcmV0UGFyYW1ldGVyTmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTZWNyZXRQYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLmF0dHJTZWNyZXRQYXJhbWV0ZXJOYW1lcyA9IHJvc1NlY3JldFBhcmFtZXRlcnMuYXR0clNlY3JldFBhcmFtZXRlck5hbWVzO1xuICAgICAgICB0aGlzLmF0dHJTZWNyZXRQYXJhbWV0ZXJzID0gcm9zU2VjcmV0UGFyYW1ldGVycy5hdHRyU2VjcmV0UGFyYW1ldGVycztcbiAgICB9XG59XG4iXX0=