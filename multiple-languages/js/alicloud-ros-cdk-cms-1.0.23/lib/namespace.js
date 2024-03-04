"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Namespace = exports.NamespaceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cms_generated_1 = require("./cms.generated");
Object.defineProperty(exports, "NamespaceProperty", { enumerable: true, get: function () { return cms_generated_1.RosNamespace; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::Namespace`, which is used to create a namespace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-namespace
 */
class Namespace extends ros.Resource {
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
        const rosNamespace = new cms_generated_1.RosNamespace(this, id, {
            description: props.description,
            specification: props.specification,
            namespace: props.namespace,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespace;
        this.attrCreateTime = rosNamespace.attrCreateTime;
        this.attrDescription = rosNamespace.attrDescription;
        this.attrModifyTime = rosNamespace.attrModifyTime;
        this.attrNamespace = rosNamespace.attrNamespace;
        this.attrSpecification = rosNamespace.attrSpecification;
    }
}
exports.Namespace = Namespace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmFtZXNwYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBK0IxQzs7OztHQUlHO0FBQ0gsTUFBYSxTQUFVLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFzQ3ZDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFCLEVBQUUsbUNBQTJDLElBQUk7UUFDaEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFlBQVksR0FBRyxJQUFJLDRCQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztTQUM3QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDLGNBQWMsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztJQUM1RCxDQUFDO0NBQ0o7QUE5REQsOEJBOERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTmFtZXNwYWNlIH0gZnJvbSAnLi9jbXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zTmFtZXNwYWNlIGFzIE5hbWVzcGFjZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgTmFtZXNwYWNlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNtcy1uYW1lc3BhY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOYW1lc3BhY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lc3BhY2U6IFRoZSBuYW1lIG9mIHRoZSBuYW1lc3BhY2UuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gbG93ZXJjYXNlIGxldHRlcnMsIGRpZ2l0cywgYW5kIGh5cGhlbnMgKC0pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BlY2lmaWNhdGlvbjogVGhlIGRhdGEgcmV0ZW50aW9uIHBlcmlvZCBvZiB0aGUgbmFtZXNwYWNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBjbXMuczEubGFyZ2U6IERhdGEgc3RvcmFnZSBkdXJhdGlvbiBpcyAxNSBkYXlzLlxuICAgICAqIC0gY21zLnMxLnhsYXJnZTogRGF0YSBzdG9yYWdlIGR1cmF0aW9uIGlzIDMyIGRheXMuXG4gICAgICogLSBjbXMuczEuMnhsYXJnZTogRGF0YSBzdG9yYWdlIGR1cmF0aW9uIDYzIGRheXMuXG4gICAgICogLSBjbXMuczEuM3hsYXJnZTogRGF0YSBzdG9yYWdlIGR1cmF0aW9uIDkzIGRheXMuXG4gICAgICogLSBjbXMuczEuNnhsYXJnZTogRGF0YSBzdG9yYWdlIGR1cmF0aW9uIDE4NSBkYXlzLlxuICAgICAqIC0gY21zLnMxLjEyeGxhcmdlOiBEYXRhIHN0b3JhZ2UgZHVyYXRpb24gMzc2IGRheXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BlY2lmaWNhdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q01TOjpOYW1lc3BhY2VgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIG5hbWVzcGFjZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc05hbWVzcGFjZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNtcy1uYW1lc3BhY2VcbiAqL1xuZXhwb3J0IGNsYXNzIE5hbWVzcGFjZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogTmFtZXNwYWNlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENyZWF0ZVRpbWU6IFRoZSB0aW1lc3RhbXAgdGhhdCB3YXMgZ2VuZXJhdGVkIHdoZW4gdGhlIG5hbWVzcGFjZSB3YXMgY3JlYXRlZC5cblVuaXQ6IG1pbGxpc2Vjb25kcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1vZGlmeVRpbWU6IFRoZSB0aW1lc3RhbXAgdGhhdCB3YXMgZ2VuZXJhdGVkIHdoZW4gdGhlIG5hbWVzcGFjZSB3YXMgbGFzdCBtb2RpZmllZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1vZGlmeVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOYW1lc3BhY2U6IFRoZSBuYW1lc3BhY2UgZm9yIHRoZSBBbGliYWJhIENsb3VkIHNlcnZpY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lc3BhY2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTcGVjaWZpY2F0aW9uOiBUaGUgZGF0YSByZXRlbnRpb24gcGVyaW9kIG9mIHRoZSBuYW1lc3BhY2UuIFZhbGlkIHZhbHVlczpcbi0gY21zLnMxLmxhcmdlOiBEYXRhIHN0b3JhZ2UgZHVyYXRpb24gaXMgMTUgZGF5cy5cbi0gY21zLnMxLnhsYXJnZTogRGF0YSBzdG9yYWdlIGR1cmF0aW9uIGlzIDMyIGRheXMuXG4tIGNtcy5zMS4yeGxhcmdlOiBEYXRhIHN0b3JhZ2UgZHVyYXRpb24gNjMgZGF5cy5cbi0gY21zLnMxLjN4bGFyZ2U6IERhdGEgc3RvcmFnZSBkdXJhdGlvbiA5MyBkYXlzLlxuLSBjbXMuczEuNnhsYXJnZTogRGF0YSBzdG9yYWdlIGR1cmF0aW9uIDE4NSBkYXlzLlxuLSBjbXMuczEuMTJ4bGFyZ2U6IERhdGEgc3RvcmFnZSBkdXJhdGlvbiAzNzYgZGF5cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNwZWNpZmljYXRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBOYW1lc3BhY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc05hbWVzcGFjZSA9IG5ldyBSb3NOYW1lc3BhY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBzcGVjaWZpY2F0aW9uOiBwcm9wcy5zcGVjaWZpY2F0aW9uLFxuICAgICAgICAgICAgbmFtZXNwYWNlOiBwcm9wcy5uYW1lc3BhY2UsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zTmFtZXNwYWNlO1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gcm9zTmFtZXNwYWNlLmF0dHJDcmVhdGVUaW1lO1xuICAgICAgICB0aGlzLmF0dHJEZXNjcmlwdGlvbiA9IHJvc05hbWVzcGFjZS5hdHRyRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYXR0ck1vZGlmeVRpbWUgPSByb3NOYW1lc3BhY2UuYXR0ck1vZGlmeVRpbWU7XG4gICAgICAgIHRoaXMuYXR0ck5hbWVzcGFjZSA9IHJvc05hbWVzcGFjZS5hdHRyTmFtZXNwYWNlO1xuICAgICAgICB0aGlzLmF0dHJTcGVjaWZpY2F0aW9uID0gcm9zTmFtZXNwYWNlLmF0dHJTcGVjaWZpY2F0aW9uO1xuICAgIH1cbn1cbiJdfQ==