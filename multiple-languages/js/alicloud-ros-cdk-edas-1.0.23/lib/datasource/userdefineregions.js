"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDefineRegions = exports.UserDefineRegionsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const edas_generated_1 = require("./edas.generated");
Object.defineProperty(exports, "UserDefineRegionsProperty", { enumerable: true, get: function () { return edas_generated_1.RosUserDefineRegions; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EDAS::UserDefineRegions`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserDefineRegions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-userdefineregions
 */
class UserDefineRegions extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosUserDefineRegions = new edas_generated_1.RosUserDefineRegions(this, id, {}, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosUserDefineRegions;
        this.attrIds = rosUserDefineRegions.attrIds;
        this.attrUserDefineRegions = rosUserDefineRegions.attrUserDefineRegions;
    }
}
exports.UserDefineRegions = UserDefineRegions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmRlZmluZXJlZ2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyZGVmaW5lcmVnaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMscURBQXdEO0FBRXZCLDBHQUZ4QixxQ0FBb0IsT0FFNkI7QUFTMUQ7Ozs7R0FJRztBQUNILE1BQWEsaUJBQWtCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQi9DOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQWdDLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUM3SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxxQ0FBb0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHLEVBQ2hFLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLEtBQUssQ0FBQztRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7UUFDNUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDO0lBQzVFLENBQUM7Q0FDSjtBQW5DRCw4Q0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NVc2VyRGVmaW5lUmVnaW9ucyB9IGZyb20gJy4vZWRhcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NVc2VyRGVmaW5lUmVnaW9ucyBhcyBVc2VyRGVmaW5lUmVnaW9uc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgVXNlckRlZmluZVJlZ2lvbnNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWVkYXMtdXNlcmRlZmluZXJlZ2lvbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VyRGVmaW5lUmVnaW9uc1Byb3BzIHtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkVEQVM6OlVzZXJEZWZpbmVSZWdpb25zYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1VzZXJEZWZpbmVSZWdpb25zYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWVkYXMtdXNlcmRlZmluZXJlZ2lvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJEZWZpbmVSZWdpb25zIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBVc2VyRGVmaW5lUmVnaW9uc1Byb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJZHM6IFRoZSBsaXN0IG9mIHVzZXIgZGVmaW5lIHJlZ2lvbiBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBVc2VyRGVmaW5lUmVnaW9uczogVGhlIGxpc3Qgb2YgdXNlciBkZWZpbmUgcmVnaW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVzZXJEZWZpbmVSZWdpb25zOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVXNlckRlZmluZVJlZ2lvbnNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zVXNlckRlZmluZVJlZ2lvbnMgPSBuZXcgUm9zVXNlckRlZmluZVJlZ2lvbnModGhpcywgaWQsICB7XG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICBwcm9wcztcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1VzZXJEZWZpbmVSZWdpb25zO1xuICAgICAgICB0aGlzLmF0dHJJZHMgPSByb3NVc2VyRGVmaW5lUmVnaW9ucy5hdHRySWRzO1xuICAgICAgICB0aGlzLmF0dHJVc2VyRGVmaW5lUmVnaW9ucyA9IHJvc1VzZXJEZWZpbmVSZWdpb25zLmF0dHJVc2VyRGVmaW5lUmVnaW9ucztcbiAgICB9XG59XG4iXX0=