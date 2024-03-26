"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = exports.TemplateProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const oos_generated_1 = require("./oos.generated");
Object.defineProperty(exports, "TemplateProperty", { enumerable: true, get: function () { return oos_generated_1.RosTemplate; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::Template`, which is used to create a template.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-template
 */
class Template extends ros.Resource {
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
        const rosTemplate = new oos_generated_1.RosTemplate(this, id, {
            resourceGroupId: props.resourceGroupId,
            content: props.content,
            templateName: props.templateName,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTemplate;
        this.attrExecutionPolicy = rosTemplate.attrExecutionPolicy;
        this.attrTemplateId = rosTemplate.attrTemplateId;
        this.attrTemplateName = rosTemplate.attrTemplateName;
    }
}
exports.Template = Template;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBNkJ4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFxQnRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFdBQVcsR0FBRyxJQUFJLDJCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6RCxDQUFDO0NBQ0o7QUE1Q0QsNEJBNENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zVGVtcGxhdGUgfSBmcm9tICcuL29vcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NUZW1wbGF0ZSBhcyBUZW1wbGF0ZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgVGVtcGxhdGVgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tb29zLXRlbXBsYXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb250ZW50OiBUaGUgY29udGVudCBvZiB0aGUgdGVtcGxhdGUuIFRoZSB0ZW1wbGF0ZSBtdXN0IGJlIGluIHRoZSBKU09OIG9yIFlBTUwgZm9ybWF0LiBNYXhpbXVtIHNpemU6IDY0IEtCLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRlbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRlbXBsYXRlTmFtZTogVGhlIG5hbWUgb2YgdGhlIHRlbXBsYXRlLiBUaGUgdGVtcGxhdGUgbmFtZSBjYW4gYmUgdXAgdG8gMjAwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBUaGUgbmFtZSBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGh5cGhlbnMgKC0pLCBhbmQgdW5kZXJzY29yZXMgKF8pLiBJdCBjYW5ub3Qgc3RhcnQgd2l0aCBBTElZVU4sIEFDUywgQUxJQkFCQSwgb3IgQUxJQ0xPVUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGVtcGxhdGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZyB2YWx1ZSBhbmQgdGhlIGtleSBtYXBwaW5nLCB0aGUgbGFiZWwgb2YgdGhlIGtleSBudW1iZXIgY2FuIGJlIHVwIHRvIDIwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IChhbnkpIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok9PUzo6VGVtcGxhdGVgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIHRlbXBsYXRlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zVGVtcGxhdGVgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vb3MtdGVtcGxhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBUZW1wbGF0ZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFeGVjdXRpb25Qb2xpY3k6IEV4ZWN1dGlvbiBQb2xpY3lcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckV4ZWN1dGlvblBvbGljeTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRlbXBsYXRlSWQ6IFRlbXBsYXRlIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUZW1wbGF0ZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVGVtcGxhdGVOYW1lOiBUZW1wbGF0ZSBOYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUZW1wbGF0ZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBUZW1wbGF0ZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zVGVtcGxhdGUgPSBuZXcgUm9zVGVtcGxhdGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHByb3BzLmNvbnRlbnQsXG4gICAgICAgICAgICB0ZW1wbGF0ZU5hbWU6IHByb3BzLnRlbXBsYXRlTmFtZSxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuYXR0ckV4ZWN1dGlvblBvbGljeSA9IHJvc1RlbXBsYXRlLmF0dHJFeGVjdXRpb25Qb2xpY3k7XG4gICAgICAgIHRoaXMuYXR0clRlbXBsYXRlSWQgPSByb3NUZW1wbGF0ZS5hdHRyVGVtcGxhdGVJZDtcbiAgICAgICAgdGhpcy5hdHRyVGVtcGxhdGVOYW1lID0gcm9zVGVtcGxhdGUuYXR0clRlbXBsYXRlTmFtZTtcbiAgICB9XG59XG4iXX0=