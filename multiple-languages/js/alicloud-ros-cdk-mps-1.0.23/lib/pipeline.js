"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pipeline = exports.PipelineProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mps_generated_1 = require("./mps.generated");
Object.defineProperty(exports, "PipelineProperty", { enumerable: true, get: function () { return mps_generated_1.RosPipeline; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MPS::Pipeline`, which is used to create an ApsaraVideo Media Processing (MPS) queue.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPipeline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline
 */
class Pipeline extends ros.Resource {
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
        const rosPipeline = new mps_generated_1.RosPipeline(this, id, {
            role: props.role,
            speed: props.speed,
            speedLevel: props.speedLevel,
            state: props.state,
            notifyConfig: props.notifyConfig,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPipeline;
        this.attrPipelineId = rosPipeline.attrPipelineId;
    }
}
exports.Pipeline = Pipeline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZWxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXBlbGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBa0R4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXdEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBb0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUMvRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sV0FBVyxHQUFHLElBQUksMkJBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUNyRCxDQUFDO0NBQ0o7QUFsQ0QsNEJBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUGlwZWxpbmUgfSBmcm9tICcuL21wcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NQaXBlbGluZSBhcyBQaXBlbGluZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUGlwZWxpbmVgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbXBzLXBpcGVsaW5lXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGlwZWxpbmVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBUaGUgbmV3IG5hbWUgb2YgdGhlIE1QUyBxdWV1ZS4gVGhlIHZhbHVlIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgYW5kIHNwZWNpYWxcbiAgICAgKiBjaGFyYWN0ZXJzIHN1Y2ggYXMgaHlwaGVucyAoLSkgYW5kIGNhbiBiZSB1cCB0byAxMjggYnl0ZXMgaW4gc2l6ZS4gVGhlIHZhbHVlIGNhbm5vdFxuICAgICAqIHN0YXJ0IHdpdGggYSBzcGVjaWFsIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBub3RpZnlDb25maWc6IFRoZSBNZXNzYWdlIFNlcnZpY2UgKE1OUykgY29uZmlndXJhdGlvbiwgc3VjaCBhcyB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIE1OUyBxdWV1ZVxuICAgICAqIG9yIHRvcGljLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIE5vdGlmeUNvbmZpZy5cbiAgICAgKi9cbiAgICByZWFkb25seSBub3RpZnlDb25maWc/OiBSb3NQaXBlbGluZS5Ob3RpZnlDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJvbGU6IFRoZSByb2xlIHRoYXQgaXMgYXNzaWduZWQgdG8gdGhlIGN1cnJlbnQgUkFNIHVzZXIuIFRvIG9idGFpbiB0aGUgcm9sZSwgeW91IGNhbiBsb2cgb24gdG8gdGhlIFJBTSBjb25zb2xlIGFuZCBjaG9vc2UgSWRlbnRpdGllcyA+IFJvbGVzIGluIHRoZSBsZWZ0LXNpZGUgbmF2aWdhdGlvbiBwYW5lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvbGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzcGVlZDogUGlwZSB0eXBlLiBWYWx1ZTpcbiAgICAgKiBCb29zdDogRG91YmxlLXNwZWVkIHRyYW5zY29kaW5nXG4gICAgICogU3RhbmRhcmQ6IG9yZGluYXJ5IHBpcGVcbiAgICAgKiBOYXJyb3dCYW5kSERWMjogTmFycm93YmFuZCBIRCAyLjBcbiAgICAgKiBBSVZpZGVvQ292ZXI6IFNtYXJ0IFNjcmVlbnNob3RzXG4gICAgICogQUlWaWRlb1RhZzogdmlkZW8gdGFnIChzdXBwb3J0cyByZWdpb25zIFNoYW5naGFpLCBCZWlqaW5nLCBIYW5nemhvdSkuXG4gICAgICogRGVmYXVsdDogU3RhbmRhcmQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3BlZWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzcGVlZExldmVsOiBTcGVlZCBsZXZlbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcGVlZExldmVsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3RhdGU6IFRoZSBuZXcgc3RhdGUgb2YgdGhlIE1QUyBxdWV1ZS5cbiAgICAgKiBBY3RpdmU6IFRoZSBNUFMgcXVldWUgaXMgYWN0aXZlLiBKb2JzIGluIHRoZSBNUFMgcXVldWUgY2FuIGJlIHNjaGVkdWxlZCBhbmQgcnVuIGJ5IE1QUy5cbiAgICAgKiBQYXVzZWQ6IFRoZSBNUFMgcXVldWUgaXMgcGF1c2VkLiBKb2JzIGluIHRoZSBNUFMgcXVldWUgY2Fubm90IGJlIHNjaGVkdWxlZCBvciBydW4gYnkgTVBTLCBhbmQgYWxsIGpvYnMgcmVtYWluIGluIHRoZSBTdWJtaXR0ZWQgc3RhdGUuIEpvYnMgdGhhdCBhcmUgcnVubmluZyB3aWxsIG5vdCBiZSBhZmZlY3RlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdGF0ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6TVBTOjpQaXBlbGluZWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIEFwc2FyYVZpZGVvIE1lZGlhIFByb2Nlc3NpbmcgKE1QUykgcXVldWUuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NQaXBlbGluZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW1wcy1waXBlbGluZVxuICovXG5leHBvcnQgY2xhc3MgUGlwZWxpbmUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFBpcGVsaW5lUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBpcGVsaW5lSWQ6IFRoZSBJRCBvZiB0aGUgTVBTIHF1ZXVlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGlwZWxpbmVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFBpcGVsaW5lUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NQaXBlbGluZSA9IG5ldyBSb3NQaXBlbGluZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHJvbGU6IHByb3BzLnJvbGUsXG4gICAgICAgICAgICBzcGVlZDogcHJvcHMuc3BlZWQsXG4gICAgICAgICAgICBzcGVlZExldmVsOiBwcm9wcy5zcGVlZExldmVsLFxuICAgICAgICAgICAgc3RhdGU6IHByb3BzLnN0YXRlLFxuICAgICAgICAgICAgbm90aWZ5Q29uZmlnOiBwcm9wcy5ub3RpZnlDb25maWcsXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1BpcGVsaW5lO1xuICAgICAgICB0aGlzLmF0dHJQaXBlbGluZUlkID0gcm9zUGlwZWxpbmUuYXR0clBpcGVsaW5lSWQ7XG4gICAgfVxufVxuIl19