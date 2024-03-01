"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckTemplate = exports.HealthCheckTemplateProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const alb_generated_1 = require("./alb.generated");
Object.defineProperty(exports, "HealthCheckTemplateProperty", { enumerable: true, get: function () { return alb_generated_1.RosHealthCheckTemplate; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::HealthCheckTemplate`, which is used to create a health check template.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHealthCheckTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-healthchecktemplate
 */
class HealthCheckTemplate extends ros.Resource {
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
        const rosHealthCheckTemplate = new alb_generated_1.RosHealthCheckTemplate(this, id, {
            healthCheckInterval: props.healthCheckInterval,
            healthCheckConnectPort: props.healthCheckConnectPort,
            healthCheckCodes: props.healthCheckCodes,
            unhealthyThreshold: props.unhealthyThreshold,
            healthCheckMethod: props.healthCheckMethod,
            healthCheckPath: props.healthCheckPath,
            healthCheckTemplateName: props.healthCheckTemplateName,
            healthCheckHost: props.healthCheckHost,
            healthyThreshold: props.healthyThreshold,
            healthCheckProtocol: props.healthCheckProtocol,
            healthCheckTimeout: props.healthCheckTimeout,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHealthCheckTemplate;
        this.attrHealthCheckTemplateId = rosHealthCheckTemplate.attrHealthCheckTemplateId;
    }
}
exports.HealthCheckTemplate = HealthCheckTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhbHRoY2hlY2t0ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWx0aGNoZWNrdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUF5RDtBQUV0Qiw0R0FGMUIsc0NBQXNCLE9BRStCO0FBZ0g5RDs7OztHQUlHO0FBQ0gsTUFBYSxtQkFBb0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVdqRDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUErQixFQUFFLG1DQUEyQyxJQUFJO1FBQzFILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLHNDQUFzQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsc0JBQXNCO1lBQ3BELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0Qyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsdUJBQXVCO1lBQ3RELGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtTQUMvQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO1FBQ3ZDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQztJQUN0RixDQUFDO0NBQ0o7QUF2Q0Qsa0RBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSGVhbHRoQ2hlY2tUZW1wbGF0ZSB9IGZyb20gJy4vYWxiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0hlYWx0aENoZWNrVGVtcGxhdGUgYXMgSGVhbHRoQ2hlY2tUZW1wbGF0ZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgSGVhbHRoQ2hlY2tUZW1wbGF0ZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hbGItaGVhbHRoY2hlY2t0ZW1wbGF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhlYWx0aENoZWNrVGVtcGxhdGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoZWFsdGhDaGVja1RlbXBsYXRlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGhlYWx0aCBjaGVjayB0ZW1wbGF0ZS5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBwZXJpb2RzXG4gICAgICogKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gVGhlIG5hbWUgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhlYWx0aENoZWNrVGVtcGxhdGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoZWFsdGhDaGVja0NvZGVzOiBUaGUgSFRUUCBzdGF0dXMgY29kZSBmb3IgYSBzdWNjZXNzZnVsIGhlYWx0aCBjaGVjay5cbiAgICAgKiBJZiBIZWFsdGhDaGVja1Byb3RvY29sIGlzIHNldCB0byBIVFRQLCBIZWFsdGhDaGVja0NvZGVzIGNhbiBiZSBzZXQgdG8gaHR0cF8yeHggKGRlZmF1bHQpLCBodHRwXzN4eCwgaHR0cF80eHgsIGFuZCBodHRwXzV4eC4gU2VwYXJhdGUgbXVsdGlwbGUgSFRUUCBzdGF0dXMgY29kZXMgd2l0aCBjb21tYXMgKCwpLlxuICAgICAqIElmIEhlYWx0aENoZWNrUHJvdG9jb2wgaXMgc2V0IHRvIGdSUEMsIEhlYWx0aENoZWNrQ29kZXMgY2FuIGJlIHNldCB0byAwIHRvIDk5LiBEZWZhdWx0IHZhbHVlOiAwLiBWYWx1ZSByYW5nZXMgYXJlIHN1cHBvcnRlZC4gWW91IGNhbiBlbnRlciBhdCBtb3N0IDIwIHZhbHVlIHJhbmdlcyBhbmQgbXVzdCBzZXBhcmF0ZVxuICAgICAqIHRoZW0gd2l0aCBjb21tYXMgKCwpLlxuICAgICAqIE5vdGUgVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgb25seSBpZiB0aGUgSGVhbHRoQ2hlY2tQcm90b2NvbCBwYXJhbWV0ZXIgaXMgc2V0IHRvIEhUVFAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tDb2Rlcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoZWFsdGhDaGVja0Nvbm5lY3RQb3J0OiBUaGUgcG9ydCB0aGF0IGlzIHVzZWQgZm9yIGhlYWx0aCBjaGVja3MuXG4gICAgICogVmFsaWQgdmFsdWVzOiAwIHRvIDY1NTM1LlxuICAgICAqIERlZmF1bHQgdmFsdWU6IDAuIFRoaXMgdmFsdWUgaW5kaWNhdGVzIHRoYXQgdGhlIHBvcnQgb24gYSBiYWNrZW5kIHNlcnZlciBpcyB1c2VkIGZvciBoZWFsdGggY2hlY2tzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhlYWx0aENoZWNrQ29ubmVjdFBvcnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoZWFsdGhDaGVja0hvc3Q6IFRoZSBkb21haW4gbmFtZSB0aGF0IGlzIHVzZWQgZm9yIGhlYWx0aCBjaGVja3MuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogJFNFUlZFUl9JUC4gVGhlIGRvbWFpbiBuYW1lIGlzIDEgdG8gODAgY2hhcmFjdGVycyBpbiBsZW5ndGguIE1ha2Ugc3VyZSB0aGF0IHRoZSBkZXN0aW5hdGlvblxuICAgICAqIENJRFIgYmxvY2sgbWVldHMgdGhlIGZvbGxvd2luZyByZXF1aXJlbWVudHM6XG4gICAgICogVGhlIGRvbWFpbiBuYW1lIGNhbiBjb250YWluIGxvd2VyY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIGh5cGhlbnMgKC0pLCBhbmQgcGVyaW9kcyAoLikuXG4gICAgICogVGhlIGRvbWFpbiBuYW1lIGNvbnRhaW5zIGF0IGxlYXN0IG9uZSBwZXJpb2QgKC4pIGJ1dCBkb2VzIG5vdCBzdGFydCBvciBlbmQgd2l0aCBhXG4gICAgICogcGVyaW9kICguKS5cbiAgICAgKiBUaGUgcmlnaHRtb3N0IGRvbWFpbiBsYWJlbCBjYW4gY29udGFpbiBvbmx5IGxldHRlcnMsIGFuZCBjYW5ub3QgY29udGFpbiBkaWdpdHMgb3JcbiAgICAgKiBoeXBoZW5zICgtKS5cbiAgICAgKiBPdGhlciBkb21haW4gbGFiZWxzIGNhbm5vdCBzdGFydCBvciBlbmQgd2l0aCBhIGh5cGhlbiAoLSkuXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgb25seSBpZiB0aGUgSGVhbHRoQ2hlY2tQcm90b2NvbCBwYXJhbWV0ZXIgaXMgc2V0IHRvIEhUVFAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tIb3N0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaGVhbHRoQ2hlY2tJbnRlcnZhbDogVGhlIGludGVydmFsIGJldHdlZW4gdHdvIGNvbnNlY3V0aXZlIGhlYWx0aCBjaGVja3MuIFVuaXQ6IHNlY29uZHMuXG4gICAgICogVmFsaWQgdmFsdWVzOiAxIHRvIDUwLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IDIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tJbnRlcnZhbD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGhlYWx0aENoZWNrTWV0aG9kOiBUaGUgSFRUUCBtZXRob2QgdGhhdCBpcyB1c2VkIGZvciBoZWFsdGggY2hlY2tzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogSEVBRDogQnkgZGVmYXVsdCwgdGhlIEFMQiBpbnN0YW5jZSBzZW5kcyBIRUFEIHJlcXVlc3RzIHRvIGEgYmFja2VuZCBzZXJ2ZXIgdG8gcGVyZm9ybVxuICAgICAqIEhUVFAgaGVhbHRoIGNoZWNrcy5cbiAgICAgKiBQT1NUOiBCeSBkZWZhdWx0LCBnUlBDIGhlYWx0aCBjaGVja3MgdXNlIHRoZSBQT1NUIG1ldGhvZC5cbiAgICAgKiBHRVQ6IElmIHRoZSBsZW5ndGggb2YgYSByZXNwb25zZSBleGNlZWRzIDggS0IsIHRoZSByZXNwb25zZSBpcyB0cnVuY2F0ZWQuIEhvd2V2ZXIsIHRoZVxuICAgICAqIGhlYWx0aCBjaGVjayByZXN1bHQgaXMgbm90IGFmZmVjdGVkLlxuICAgICAqIE5vdGUgVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQgb25seSBpZiB0aGUgSGVhbHRoQ2hlY2tQcm90b2NvbCBwYXJhbWV0ZXIgaXMgc2V0IHRvIEhUVFAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tNZXRob2Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoZWFsdGhDaGVja1BhdGg6IFRoZSBVUkwgcGF0aCB0aGF0IGlzIHVzZWQgZm9yIGhlYWx0aCBjaGVja3MuXG4gICAgICogSXQgbXVzdCBiZSAxIHRvIDgwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBoeXBoZW5zXG4gICAgICogKC0pLCBmb3J3YXJkIHNsYXNoZXMgKFxcLyksIHBlcmlvZHMgKC4pLCBwZXJjZW50IHNpZ25zICglKSwgcXVlc3Rpb24gbWFya3MgKD8pLCBudW1iZXJcbiAgICAgKiBzaWducyAoIyksIGFuZCBhbXBlcnNhbmRzICgmKS4gSXQgY2FuIGFsc28gY29udGFpbiB0aGUgZm9sbG93aW5nIGV4dGVuZGVkIGNoYXJhY3RlcnM6XG4gICAgICogXyA7IH4gISAoICkgKiBbIF0gQCAkIF4gOiAnICwgKy4gVGhlIFVSTCBwYXRoIG11c3Qgc3RhcnQgd2l0aCBhIGZvcndhcmQgc2xhc2ggKFxcLykuXG4gICAgICogTm90ZSBUaGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBvbmx5IGlmIHRoZSBIZWFsdGhDaGVja1Byb3RvY29sIHBhcmFtZXRlciBpcyBzZXQgdG8gSFRUUC5cbiAgICAgKi9cbiAgICByZWFkb25seSBoZWFsdGhDaGVja1BhdGg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoZWFsdGhDaGVja1Byb3RvY29sOiBUaGUgcHJvdG9jb2wgdGhhdCBpcyB1c2VkIGZvciBoZWFsdGggY2hlY2tzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogSFRUUDogVGhlIEFMQiBpbnN0YW5jZSBzZW5kcyBIRUFEIG9yIEdFVCByZXF1ZXN0cyB0byBhIGJhY2tlbmQgc2VydmVyIHRvIHNpbXVsYXRlIGFjY2Vzc1xuICAgICAqIGZyb20gYSBicm93c2VyIGFuZCBjaGVjayB3aGV0aGVyIHRoZSBiYWNrZW5kIHNlcnZlciBpcyBoZWFsdGh5LiBUaGlzIGlzIHRoZSBkZWZhdWx0XG4gICAgICogcHJvdG9jb2wuXG4gICAgICogVENQOiBUbyBwZXJmb3JtIFRDUCBoZWFsdGggY2hlY2tzLCBBTEIgc2VuZHMgU1lOIHBhY2tldHMgdG8gYSBiYWNrZW5kIHNlcnZlciB0byBjaGVja1xuICAgICAqIHdoZXRoZXIgdGhlIHBvcnQgb2YgdGhlIGJhY2tlbmQgc2VydmVyIGlzIGF2YWlsYWJsZSB0byByZWNlaXZlIHJlcXVlc3RzLlxuICAgICAqIEdSUEM6IFRvIHBlcmZvcm0gZ1JQQyBoZWFsdGggY2hlY2tzLCBBTEIgc2VuZHMgUE9TVCBvciBHRVQgcmVxdWVzdHMgdG8gYSBiYWNrZW5kIHNlcnZlclxuICAgICAqIHRvIGNoZWNrIHdoZXRoZXIgdGhlIGJhY2tlbmQgc2VydmVyIGlzIGhlYWx0aHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tQcm90b2NvbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGhlYWx0aENoZWNrVGltZW91dDogVGhlIHRpbWVvdXQgcGVyaW9kIG9mIGEgaGVhbHRoIGNoZWNrLiBVbml0OiBzZWNvbmRzLiBJZiBhIGJhY2tlbmQgc2VydmVyIGRvZXMgbm90XG4gICAgICogcmVzcG9uZCB3aXRoaW4gdGhlIHNwZWNpZmllZCB0aW1lb3V0IHBlcmlvZCwgdGhlIGJhY2tlbmQgc2VydmVyIGZhaWxzIHRoZSBoZWFsdGggY2hlY2suXG4gICAgICogVmFsaWQgdmFsdWVzOiAxIHRvIDMwMC5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiA1LlxuICAgICAqIE5vdGUgSWYgdGhlIHZhbHVlIG9mIHRoZSBIZWFsdGhDaGVja1RpbWVvdXQgcGFyYW1ldGVyIGlzIHNtYWxsZXIgdGhhbiB0aGF0IG9mIHRoZSBIZWFsdGhDaGVja0ludGVydmFsIHBhcmFtZXRlciwgdGhlIHRpbWVvdXQgcGVyaW9kIHNwZWNpZmllZCBieSB0aGUgSGVhbHRoQ2hlY2tUaW1lb3V0IHBhcmFtZXRlciBpcyBpZ25vcmVkIGFuZCB0aGUgdmFsdWUgb2YgdGhlIEhlYWx0aENoZWNrSW50ZXJ2YWwgcGFyYW1ldGVyIGlzIHVzZWQgYXMgdGhlIHRpbWVvdXQgcGVyaW9kLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhlYWx0aENoZWNrVGltZW91dD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGhlYWx0aHlUaHJlc2hvbGQ6IFRoZSBudW1iZXIgb2YgdGltZXMgdGhhdCBhbiB1bmhlYWx0aHkgYmFja2VuZCBzZXJ2ZXIgbXVzdCBjb25zZWN1dGl2ZWx5IHBhc3MgaGVhbHRoXG4gICAgICogY2hlY2tzIGJlZm9yZSBpdCBpcyBkZWNsYXJlZCBoZWFsdGh5LiBJbiB0aGlzIGNhc2UsIHRoZSBoZWFsdGggc3RhdHVzIGlzIGNoYW5nZWQgZnJvbVxuICAgICAqIGZhaWwgdG8gc3VjY2Vzcy5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IDIgdG8gMTAuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogMy5cbiAgICAgKi9cbiAgICByZWFkb25seSBoZWFsdGh5VGhyZXNob2xkPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdW5oZWFsdGh5VGhyZXNob2xkOiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoYXQgYSBoZWFsdGh5IGJhY2tlbmQgc2VydmVyIG11c3QgY29uc2VjdXRpdmVseSBmYWlsIGhlYWx0aCBjaGVja3NcbiAgICAgKiBiZWZvcmUgaXQgaXMgZGVjbGFyZWQgdW5oZWFsdGh5LiBJbiB0aGlzIGNhc2UsIHRoZSBoZWFsdGggc3RhdHVzIGlzIGNoYW5nZWQgZnJvbSBzdWNjZXNzIHRvIGZhaWwuXG4gICAgICogVmFsaWQgdmFsdWVzOiAyIHRvIDEwLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IDMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdW5oZWFsdGh5VGhyZXNob2xkPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpBTEI6OkhlYWx0aENoZWNrVGVtcGxhdGVgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGhlYWx0aCBjaGVjayB0ZW1wbGF0ZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0hlYWx0aENoZWNrVGVtcGxhdGVgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1hbGItaGVhbHRoY2hlY2t0ZW1wbGF0ZVxuICovXG5leHBvcnQgY2xhc3MgSGVhbHRoQ2hlY2tUZW1wbGF0ZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogSGVhbHRoQ2hlY2tUZW1wbGF0ZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBIZWFsdGhDaGVja1RlbXBsYXRlSWQ6IFRoZSBJRCBvZiB0aGUgaGVhbHRoIGNoZWNrIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySGVhbHRoQ2hlY2tUZW1wbGF0ZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSGVhbHRoQ2hlY2tUZW1wbGF0ZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zSGVhbHRoQ2hlY2tUZW1wbGF0ZSA9IG5ldyBSb3NIZWFsdGhDaGVja1RlbXBsYXRlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaGVhbHRoQ2hlY2tJbnRlcnZhbDogcHJvcHMuaGVhbHRoQ2hlY2tJbnRlcnZhbCxcbiAgICAgICAgICAgIGhlYWx0aENoZWNrQ29ubmVjdFBvcnQ6IHByb3BzLmhlYWx0aENoZWNrQ29ubmVjdFBvcnQsXG4gICAgICAgICAgICBoZWFsdGhDaGVja0NvZGVzOiBwcm9wcy5oZWFsdGhDaGVja0NvZGVzLFxuICAgICAgICAgICAgdW5oZWFsdGh5VGhyZXNob2xkOiBwcm9wcy51bmhlYWx0aHlUaHJlc2hvbGQsXG4gICAgICAgICAgICBoZWFsdGhDaGVja01ldGhvZDogcHJvcHMuaGVhbHRoQ2hlY2tNZXRob2QsXG4gICAgICAgICAgICBoZWFsdGhDaGVja1BhdGg6IHByb3BzLmhlYWx0aENoZWNrUGF0aCxcbiAgICAgICAgICAgIGhlYWx0aENoZWNrVGVtcGxhdGVOYW1lOiBwcm9wcy5oZWFsdGhDaGVja1RlbXBsYXRlTmFtZSxcbiAgICAgICAgICAgIGhlYWx0aENoZWNrSG9zdDogcHJvcHMuaGVhbHRoQ2hlY2tIb3N0LFxuICAgICAgICAgICAgaGVhbHRoeVRocmVzaG9sZDogcHJvcHMuaGVhbHRoeVRocmVzaG9sZCxcbiAgICAgICAgICAgIGhlYWx0aENoZWNrUHJvdG9jb2w6IHByb3BzLmhlYWx0aENoZWNrUHJvdG9jb2wsXG4gICAgICAgICAgICBoZWFsdGhDaGVja1RpbWVvdXQ6IHByb3BzLmhlYWx0aENoZWNrVGltZW91dCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NIZWFsdGhDaGVja1RlbXBsYXRlO1xuICAgICAgICB0aGlzLmF0dHJIZWFsdGhDaGVja1RlbXBsYXRlSWQgPSByb3NIZWFsdGhDaGVja1RlbXBsYXRlLmF0dHJIZWFsdGhDaGVja1RlbXBsYXRlSWQ7XG4gICAgfVxufVxuIl19