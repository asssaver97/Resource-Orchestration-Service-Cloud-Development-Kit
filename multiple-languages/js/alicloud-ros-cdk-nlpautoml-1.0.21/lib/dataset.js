"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dataset = exports.DatasetProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const nlpautoml_generated_1 = require("./nlpautoml.generated");
Object.defineProperty(exports, "DatasetProperty", { enumerable: true, get: function () { return nlpautoml_generated_1.RosDataset; } });
/**
 * A ROS resource type:  `ALIYUN::NLPAUTOML::Dataset`
 */
class Dataset extends ros.Resource {
    /**
     * Create a new `ALIYUN::NLPAUTOML::Dataset`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDataset = new nlpautoml_generated_1.RosDataset(this, id, {
            datasetName: props.datasetName,
            projectId: props.projectId,
            datasetRecord: props.datasetRecord,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDataset;
        this.attrDatasetId = rosDataset.attrDatasetId;
    }
}
exports.Dataset = Dataset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLCtEQUFtRDtBQUU1QixnR0FGZCxnQ0FBVSxPQUVtQjtBQXVCdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVlyQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW1CLEVBQUUsbUNBQTJDLElBQUk7UUFDOUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFVBQVUsR0FBRyxJQUFJLGdDQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUN6QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtTQUNyQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDbEQsQ0FBQztDQUNKO0FBOUJELDBCQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0RhdGFzZXQgfSBmcm9tICcuL25scGF1dG9tbC5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NEYXRhc2V0IGFzIERhdGFzZXRQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6TkxQQVVUT01MOjpEYXRhc2V0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhdGFzZXRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYXRhc2V0TmFtZTogVGhlIG5hbWUgb2YgZGF0YXNldC4gQ2Fubm90IHN0YXJ0IHdpdGggbnVtYmVycyBhbmQgc3ltYm9scywgYW5kIHRoZSBsZW5ndGggY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAzMiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRhdGFzZXROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm9qZWN0SWQ6IFRoZSBJRCBvZiBwcm9qZWN0LiBUbyBjcmVhdGUgYSBkYXRhc2V0IHVuZGVyIGEgY2VydGFpbiBwcm9qZWN0LCBmaWxsIGluIHRoZSB0YXJnZXQgcHJvamVjdCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9qZWN0SWQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRhdGFzZXRSZWNvcmQ6IFVwbG9hZCBsYWJlbGVkIGRhdGEgdG8gdGhlIGRhdGFzZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YXNldFJlY29yZD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46Ok5MUEFVVE9NTDo6RGF0YXNldGBcbiAqL1xuZXhwb3J0IGNsYXNzIERhdGFzZXQgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERhdGFzZXRJZDogVGhlIGRhdGFzZXQgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYXRhc2V0SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpOTFBBVVRPTUw6OkRhdGFzZXRgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERhdGFzZXRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NEYXRhc2V0ID0gbmV3IFJvc0RhdGFzZXQodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkYXRhc2V0TmFtZTogcHJvcHMuZGF0YXNldE5hbWUsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IHByb3BzLnByb2plY3RJZCxcbiAgICAgICAgICAgIGRhdGFzZXRSZWNvcmQ6IHByb3BzLmRhdGFzZXRSZWNvcmQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zRGF0YXNldDtcbiAgICAgICAgdGhpcy5hdHRyRGF0YXNldElkID0gcm9zRGF0YXNldC5hdHRyRGF0YXNldElkO1xuICAgIH1cbn1cbiJdfQ==