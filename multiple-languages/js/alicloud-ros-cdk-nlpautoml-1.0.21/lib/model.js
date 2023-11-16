"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = exports.ModelProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const nlpautoml_generated_1 = require("./nlpautoml.generated");
Object.defineProperty(exports, "ModelProperty", { enumerable: true, get: function () { return nlpautoml_generated_1.RosModel; } });
/**
 * A ROS resource type:  `ALIYUN::NLPAUTOML::Model`
 */
class Model extends ros.Resource {
    /**
     * Create a new `ALIYUN::NLPAUTOML::Model`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosModel = new nlpautoml_generated_1.RosModel(this, id, {
            datasetIdList: props.datasetIdList,
            modelName: props.modelName,
            testDatasetIdList: props.testDatasetIdList,
            nepochs: props.nepochs,
            lr: props.lr,
            projectId: props.projectId,
            modelType: props.modelType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosModel;
        this.attrModelId = rosModel.attrModelId;
        this.attrModelVersion = rosModel.attrModelVersion;
    }
}
exports.Model = Model;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsK0RBQWlEO0FBRTVCLDhGQUZaLDhCQUFRLE9BRWlCO0FBNENsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJuQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWlCLEVBQUUsbUNBQTJDLElBQUk7UUFDNUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFFBQVEsR0FBRyxJQUFJLDhCQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNaLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7U0FDN0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7SUFDdEQsQ0FBQztDQUNKO0FBeENELHNCQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc01vZGVsIH0gZnJvbSAnLi9ubHBhdXRvbWwuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zTW9kZWwgYXMgTW9kZWxQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6TkxQQVVUT01MOjpNb2RlbGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNb2RlbFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRhdGFzZXRJZExpc3Q6IFRoZSB1cGxvYWRlZCBkYXRhc2V0IG11c3QgYmUgdW5kZXIgdGhlIHNhbWUgcHJvamVjdCwgYW5kIHRoZSB0b3RhbCBudW1iZXIgb2YgbWFya2VkIGRhdGEgaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YXNldElkTGlzdDogQXJyYXk8bnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1vZGVsTmFtZTogVGhlIG5hbWUgb2YgbW9kZWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9kZWxOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtb2RlbFR5cGU6IFRoZSB0eXBlIG9mIG1vZGVsLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBwYXJhbWV0ZXIgdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gZGlmZmVyZW50IHR5cGVzIG9mIG1vZGVscy5cbiAgICAgKiBVc2luZyB0aGUgc3BlY2lmaWVkIG1vZGVsIHR5cGUgdW5kZXIgZGlmZmVyZW50IHByb2plY3QsIGFuZCB0aGUgYmFja2VuZCB3aWxsIGRvIHRoZSB2ZXJpZmljYXRpb24uIElmIHRoZSBtb2RlbCB0eXBlIGRvZXMgbm90IGV4aXN0IHVuZGVyIHRoZSBwcm9qZWN0LCBpdCB3aWxsIHByb21wdCB0aGF0IHRoZSBiYXNlIG1vZGVsIGlzIG5vdCBmb3VuZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZGVsVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvamVjdElkOiBUaGUgcHJvamVjdCBpZCB0byB3aGljaCB0aGUgbW9kZWwgYmVsb25nc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2plY3RJZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbHI6IExlYXJuaW5nIHJhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbHI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXBvY2hzOiBOdW1iZXIgb2YgdHJhaW5pbmcgZGF0YXNldCBpdGVyYXRpb25zXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmVwb2Nocz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRlc3REYXRhc2V0SWRMaXN0OiBUZXN0IHNldCBJRCBsaXN0LiBTb21lIG1vZGVscyB1bmRlciB0ZXh0IGNsYXNzaWZpY2F0aW9uIHN1cHBvcnQgYWRkaW5nIHRlc3Qgc2V0IGRhdGEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGVzdERhdGFzZXRJZExpc3Q/OiBBcnJheTxudW1iZXIgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpOTFBBVVRPTUw6Ok1vZGVsYFxuICovXG5leHBvcnQgY2xhc3MgTW9kZWwgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1vZGVsSWQ6IFRoZSBJRCBvZiBtb2RlbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1vZGVsSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBNb2RlbFZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIG1vZGVsLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTW9kZWxWZXJzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6TkxQQVVUT01MOjpNb2RlbGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTW9kZWxQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NNb2RlbCA9IG5ldyBSb3NNb2RlbCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRhdGFzZXRJZExpc3Q6IHByb3BzLmRhdGFzZXRJZExpc3QsXG4gICAgICAgICAgICBtb2RlbE5hbWU6IHByb3BzLm1vZGVsTmFtZSxcbiAgICAgICAgICAgIHRlc3REYXRhc2V0SWRMaXN0OiBwcm9wcy50ZXN0RGF0YXNldElkTGlzdCxcbiAgICAgICAgICAgIG5lcG9jaHM6IHByb3BzLm5lcG9jaHMsXG4gICAgICAgICAgICBscjogcHJvcHMubHIsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IHByb3BzLnByb2plY3RJZCxcbiAgICAgICAgICAgIG1vZGVsVHlwZTogcHJvcHMubW9kZWxUeXBlLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc01vZGVsO1xuICAgICAgICB0aGlzLmF0dHJNb2RlbElkID0gcm9zTW9kZWwuYXR0ck1vZGVsSWQ7XG4gICAgICAgIHRoaXMuYXR0ck1vZGVsVmVyc2lvbiA9IHJvc01vZGVsLmF0dHJNb2RlbFZlcnNpb247XG4gICAgfVxufVxuIl19