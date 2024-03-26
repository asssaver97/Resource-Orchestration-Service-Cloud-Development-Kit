"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = exports.ApplicationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ram_generated_1 = require("./ram.generated");
Object.defineProperty(exports, "ApplicationProperty", { enumerable: true, get: function () { return ram_generated_1.RosApplication; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::Application`, which is used to create an application.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
 */
class Application extends ros.Resource {
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
        const rosApplication = new ram_generated_1.RosApplication(this, id, {
            predefinedScopes: props.predefinedScopes,
            secretRequired: props.secretRequired,
            displayName: props.displayName,
            isMultiTenant: props.isMultiTenant,
            accessTokenValidity: props.accessTokenValidity,
            redirectUris: props.redirectUris,
            refreshTokenValidity: props.refreshTokenValidity,
            appType: props.appType,
            requiredScopes: props.requiredScopes,
            appName: props.appName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApplication;
        this.attrAppId = rosApplication.attrAppId;
        this.attrAppName = rosApplication.attrAppName;
    }
}
exports.Application = Application;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQTBFOUM7Ozs7R0FJRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0J6Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxjQUFjLEdBQUcsSUFBSSw4QkFBYyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3pCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUM7SUFDbEQsQ0FBQztDQUNKO0FBNUNELGtDQTRDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0FwcGxpY2F0aW9uIH0gZnJvbSAnLi9yYW0uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQXBwbGljYXRpb24gYXMgQXBwbGljYXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFwcGxpY2F0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1hcHBsaWNhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXBwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFwcGxpY2F0aW9uLiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gNjQgY2hhcmFjdGVycyBpbiBsZW5ndGguIFRoZSBuYW1lIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFwcFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBhcHBsaWNhdGlvbi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gKipXZWJBcHAqKjogYSB3ZWIgYXBwbGljYXRpb24gdGhhdCBpbnRlcmFjdHMgd2l0aCBhIGJyb3dzZXIuXG4gICAgICogLSAqKk5hdGl2ZUFwcCoqOiBhIG5hdGl2ZSBhcHBsaWNhdGlvbiB0aGF0IHJ1bnMgb24gYW4gb3BlcmF0aW5nIHN5c3RlbSwgc3VjaCBhcyBhIGRlc2t0b3Agb3BlcmF0aW5nIHN5c3RlbSBvciBhIG1vYmlsZSBvcGVyYXRpbmcgc3lzdGVtLlxuICAgICAqIC0gKipTZXJ2ZXJBcHAqKjogYW4gYXBwbGljYXRpb24gdGhhdCBhY2Nlc3NlcyBBbGliYWJhIENsb3VkIHNlcnZpY2VzIHdpdGhvdXQgdGhlIG5lZWQgb2YgbWFudWFsIHVzZXIgbG9nb24uIFVzZXIgcHJvdmlzaW9uaW5nIGlzIGF1dG9tYXRlZCBiYXNlZCBvbiB0aGUgU3lzdGVtIGZvciBDcm9zcy1Eb21haW4gSWRlbnRpdHkgTWFuYWdlbWVudCAoU0NJTSkgcHJvdG9jb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBwVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGlzcGxheU5hbWU6IFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIGFwcGxpY2F0aW9uLiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gMjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlzcGxheU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjY2Vzc1Rva2VuVmFsaWRpdHk6IFRoZSB2YWxpZGl0eSBwZXJpb2Qgb2YgdGhlIGFjY2VzcyB0b2tlbi5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IDkwMCB0byAxMDgwMC4gVW5pdDogc2Vjb25kcy5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiAzNjAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2Vzc1Rva2VuVmFsaWRpdHk/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpc011bHRpVGVuYW50OiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgYXBwbGljYXRpb24gY2FuIGJlIGluc3RhbGxlZCBieSB1c2luZyBvdGhlciBBbGliYWJhIENsb3VkIGFjY291bnRzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSAqKnRydWUqKjogSWYgeW91IGRvIG5vdCBzZXQgdGhpcyBwYXJhbWV0ZXIgZm9yIGFwcGxpY2F0aW9ucyBvZiB0aGUgTmF0aXZlQXBwIGFuZCBTZXJ2ZXJBcHAgdHlwZXMsIHRydWUgaXMgdXNlZC5cbiAgICAgKiAtICoqZmFsc2UqKjogSWYgeW91IGRvIG5vdCBzZXQgdGhpcyBwYXJhbWV0ZXIgZm9yIGFwcGxpY2F0aW9ucyBvZiB0aGUgV2ViQXBwIHR5cGUsIGZhbHNlIGlzIHVzZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNNdWx0aVRlbmFudD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcmVkZWZpbmVkU2NvcGVzOiBMaXN0IG9mIHRoZSBzY29wZXMgb2YgYXBwbGljYXRpb24gcGVybWlzc2lvbnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlZGVmaW5lZFNjb3Blcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZWRpcmVjdFVyaXM6IExpc3Qgb2YgdGhlIGNhbGxiYWNrIFVSTHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVkaXJlY3RVcmlzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlZnJlc2hUb2tlblZhbGlkaXR5OiBUaGUgdmFsaWRpdHkgcGVyaW9kIG9mIHRoZSByZWZyZXNoZWQgdG9rZW4uXG4gICAgICogVmFsaWQgdmFsdWVzOiA3MjAwIHRvIDMxNTM2MDAwLiBVbml0OiBzZWNvbmRzLlxuICAgICAqIERlZmF1bHQgdmFsdWU6XG4gICAgICogLSBGb3IgYXBwbGljYXRpb25zIG9mIHRoZSBXZWJBcHAgYW5kIFNlcnZlckFwcCB0eXBlcywgaWYgdGhpcyBwYXJhbWV0ZXIgaXMgbGVmdCBlbXB0eSwgdGhlIHZhbHVlIDI1OTIwMDAgaXMgdXNlZC4gVGhlIHZhbHVlIDI1OTIwMDAgaW5kaWNhdGVzIHRoYXQgdGhlIHZhbGlkaXR5IHBlcmlvZCBvZiB0aGUgcmVmcmVzaGVkIHRva2VuIGlzIDMwIGRheXMuXG4gICAgICogLSBGb3IgYXBwbGljYXRpb25zIG9mIHRoZSBOYXRpdmVBcHAgdHlwZSwgaWYgdGhpcyBwYXJhbWV0ZXIgaXMgbGVmdCBlbXB0eSwgdGhlIHZhbHVlIDc3NzYwMDAgaXMgdXNlZC4gVGhlIHZhbHVlIDc3NzYwMDAgaW5kaWNhdGVzIHRoYXQgdGhlIHZhbGlkaXR5IHBlcmlvZCBvZiB0aGUgcmVmcmVzaGVkIHRva2VuIGlzIDkwIGRheXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmcmVzaFRva2VuVmFsaWRpdHk/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXF1aXJlZFNjb3BlczogUmVxdWlyZWQgc2NvcGUgb2YgYXBwbGljYXRpb24gcGVybWlzc2lvbnMuIFlvdSBjYW4gc2V0IG9uZSBvciBtb3JlIG9mIHRoZSBzY29wZXMgc2V0IGluIHRoZSAqKlByZWRlZmluZWRTY29wZXMqKiB0byBiZSByZXF1aXJlZCwgc28gdGhhdCB3aGVuIGEgdXNlciBhdXRob3JpemVzIHRoZSBhcHBsaWNhdGlvbiwgdGhlIHJlcXVpcmVkIHNjb3BlcyBhcmUgc2VsZWN0ZWQgYnkgZGVmYXVsdCBhbmQgY2Fubm90IGJlIGNhbmNlbGVkLlxuICAgICAqICoqTm90ZXMqKjogSWYgeW91IHNldCBhICoqUmVxdWlyZWRTY29wZXMqKiBlbnRyeSB0aGF0IGlzIG5vdCB3aXRoaW4gdGhlIHNjb3BlIG9mICoqUHJlZGVmaW5lZFNjb3BlcyoqLCB0aGUgcmVxdWlyZWQgcmFuZ2Ugd2lsbCBub3QgdGFrZSBlZmZlY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVxdWlyZWRTY29wZXM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjcmV0UmVxdWlyZWQ6IEluZGljYXRlcyB3aGV0aGVyIGEgc2VjcmV0IGlzIHJlcXVpcmVkLiBWYWxpZCB2YWx1ZXM6ICoqdHJ1ZSoqIGFuZCAqKmZhbHNlKiouXG4gICAgICogKipOb3RlKio6XG4gICAgICogLSBGb3IgYXBwbGljYXRpb25zIG9mIHRoZSBXZWJBcHAgYW5kIFNlcnZlckFwcCB0eXBlcywgdGhpcyBwYXJhbWV0ZXIgaXMgYXV0b21hdGljYWxseSBzZXQgdG8gKip0cnVlKiogYW5kIGNhbm5vdCBiZSBjaGFuZ2VkLlxuICAgICAqIC0gRm9yIGFwcGxpY2F0aW9ucyBvZiB0aGUgTmF0aXZlQXBwIHR5cGUsIHRoaXMgcGFyYW1ldGVyIGNhbiBiZSBzZXQgdG8gdHJ1ZSBvciBmYWxzZS4gSWYgeW91IGRvIG5vdCBzZXQgdGhpcyBwYXJhbWV0ZXIsIGZhbHNlIGlzIHVzZWQuIEFwcGxpY2F0aW9ucyBvZiB0aGUgTmF0aXZlQXBwIHR5cGUgcnVuIGluIHVudHJ1c3RlZCBlbnZpcm9ubWVudHMgYW5kIHRoZSBzZWNyZXRzIG9mIHRoZXNlIGFwcGxpY2F0aW9ucyBhcmUgbm90IHByb3RlY3RlZC4gVGhlcmVmb3JlLCB3ZSByZWNvbW1lbmQgdGhhdCB5b3UgZG8gbm90IHNldCB0aGlzIHBhcmFtZXRlciB0byB0cnVlIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3JldFJlcXVpcmVkPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UkFNOjpBcHBsaWNhdGlvbmAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGFwcGxpY2F0aW9uLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zQXBwbGljYXRpb25gZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yYW0tYXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBBcHBsaWNhdGlvblByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBcHBJZDogVGhlIElEIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwcElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQXBwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBwTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEFwcGxpY2F0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NBcHBsaWNhdGlvbiA9IG5ldyBSb3NBcHBsaWNhdGlvbih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHByZWRlZmluZWRTY29wZXM6IHByb3BzLnByZWRlZmluZWRTY29wZXMsXG4gICAgICAgICAgICBzZWNyZXRSZXF1aXJlZDogcHJvcHMuc2VjcmV0UmVxdWlyZWQsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogcHJvcHMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBpc011bHRpVGVuYW50OiBwcm9wcy5pc011bHRpVGVuYW50LFxuICAgICAgICAgICAgYWNjZXNzVG9rZW5WYWxpZGl0eTogcHJvcHMuYWNjZXNzVG9rZW5WYWxpZGl0eSxcbiAgICAgICAgICAgIHJlZGlyZWN0VXJpczogcHJvcHMucmVkaXJlY3RVcmlzLFxuICAgICAgICAgICAgcmVmcmVzaFRva2VuVmFsaWRpdHk6IHByb3BzLnJlZnJlc2hUb2tlblZhbGlkaXR5LFxuICAgICAgICAgICAgYXBwVHlwZTogcHJvcHMuYXBwVHlwZSxcbiAgICAgICAgICAgIHJlcXVpcmVkU2NvcGVzOiBwcm9wcy5yZXF1aXJlZFNjb3BlcyxcbiAgICAgICAgICAgIGFwcE5hbWU6IHByb3BzLmFwcE5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQXBwbGljYXRpb247XG4gICAgICAgIHRoaXMuYXR0ckFwcElkID0gcm9zQXBwbGljYXRpb24uYXR0ckFwcElkO1xuICAgICAgICB0aGlzLmF0dHJBcHBOYW1lID0gcm9zQXBwbGljYXRpb24uYXR0ckFwcE5hbWU7XG4gICAgfVxufVxuIl19