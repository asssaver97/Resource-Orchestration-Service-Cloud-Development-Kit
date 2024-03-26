"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topic = exports.TopicProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mns_generated_1 = require("./mns.generated");
Object.defineProperty(exports, "TopicProperty", { enumerable: true, get: function () { return mns_generated_1.RosTopic; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MNS::Topic`, which is used to create a topic.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopic`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-topic
 */
class Topic extends ros.Resource {
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
        const rosTopic = new mns_generated_1.RosTopic(this, id, {
            maximumMessageSize: props.maximumMessageSize === undefined || props.maximumMessageSize === null ? 65536 : props.maximumMessageSize,
            loggingEnabled: props.loggingEnabled === undefined || props.loggingEnabled === null ? false : props.loggingEnabled,
            topicName: props.topicName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTopic;
        this.attrArnWithSlash = rosTopic.attrArnWithSlash;
        this.attrTopicName = rosTopic.attrTopicName;
        this.attrTopicUrl = rosTopic.attrTopicUrl;
    }
}
exports.Topic = Topic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b3BpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTJDO0FBRXRCLDhGQUZaLHdCQUFRLE9BRWlCO0FBMEJsQzs7OztHQUlHO0FBQ0gsTUFBYSxLQUFNLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFxQm5DOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWlCLEVBQUUsbUNBQTJDLElBQUk7UUFDNUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQjtZQUNsSSxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWMsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWM7WUFDbEgsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1NBQzdCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztJQUM5QyxDQUFDO0NBQ0o7QUEzQ0Qsc0JBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zVG9waWMgfSBmcm9tICcuL21ucy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NUb3BpYyBhcyBUb3BpY1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgVG9waWNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbW5zLXRvcGljXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVG9waWNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0b3BpY05hbWU6IFRvcGljIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSB0b3BpY05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvZ2dpbmdFbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSBsb2cgbWFuYWdlbWVudC4gXCJ0cnVlXCIgaW5kaWNhdGVzIHRoYXQgbG9nIG1hbmFnZW1lbnQgaXMgZW5hYmxlZCwgd2hlcmVhcyBcImZhbHNlXCIgaW5kaWNhdGVzIHRoYXQgbG9nIG1hbmFnZW1lbnQgaXMgZGlzYWJsZWQuIFxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9nZ2luZ0VuYWJsZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWF4aW11bU1lc3NhZ2VTaXplOiBNYXhpbXVtIGJvZHkgbGVuZ3RoIG9mIGEgbWVzc2FnZSBzZW50IHRvIHRoZSB0b3BpYywgaW4gdGhlIHVuaXQgb2YgYnl0ZXMuXG4gICAgICogQW4gaW50ZWdlciBpbiB0aGUgcmFuZ2Ugb2YgMSwwMjQgKDEgS0IpIHRvIDY1LCA1MzYgKDY0IEtCKTsgZGVmYXVsdCB2YWx1ZTogNjUsNTM2ICg2NCBLQikuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF4aW11bU1lc3NhZ2VTaXplPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpNTlM6OlRvcGljYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSB0b3BpYy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1RvcGljYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbW5zLXRvcGljXG4gKi9cbmV4cG9ydCBjbGFzcyBUb3BpYyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogVG9waWNQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQVJOLldpdGhTbGFzaDogVGhlIEFSTjogYWNzOm1uczokcmVnaW9uOiRhY2NvdW50aWQ6L3RvcGljcy8kdG9waWNOYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcm5XaXRoU2xhc2g6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUb3BpY05hbWU6IFRvcGljIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRvcGljTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRvcGljVXJsOiBVUkwgb2YgY3JlYXRlZCB0b3BpY1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVG9waWNVcmw6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBUb3BpY1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zVG9waWMgPSBuZXcgUm9zVG9waWModGhpcywgaWQsICB7XG4gICAgICAgICAgICBtYXhpbXVtTWVzc2FnZVNpemU6IHByb3BzLm1heGltdW1NZXNzYWdlU2l6ZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLm1heGltdW1NZXNzYWdlU2l6ZSA9PT0gbnVsbCA/IDY1NTM2IDogcHJvcHMubWF4aW11bU1lc3NhZ2VTaXplLFxuICAgICAgICAgICAgbG9nZ2luZ0VuYWJsZWQ6IHByb3BzLmxvZ2dpbmdFbmFibGVkID09PSB1bmRlZmluZWQgfHwgcHJvcHMubG9nZ2luZ0VuYWJsZWQgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLmxvZ2dpbmdFbmFibGVkLFxuICAgICAgICAgICAgdG9waWNOYW1lOiBwcm9wcy50b3BpY05hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVG9waWM7XG4gICAgICAgIHRoaXMuYXR0ckFybldpdGhTbGFzaCA9IHJvc1RvcGljLmF0dHJBcm5XaXRoU2xhc2g7XG4gICAgICAgIHRoaXMuYXR0clRvcGljTmFtZSA9IHJvc1RvcGljLmF0dHJUb3BpY05hbWU7XG4gICAgICAgIHRoaXMuYXR0clRvcGljVXJsID0gcm9zVG9waWMuYXR0clRvcGljVXJsO1xuICAgIH1cbn1cbiJdfQ==