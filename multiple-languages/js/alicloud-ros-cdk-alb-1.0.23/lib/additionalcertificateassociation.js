"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionalCertificateAssociation = exports.AdditionalCertificateAssociationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const alb_generated_1 = require("./alb.generated");
Object.defineProperty(exports, "AdditionalCertificateAssociationProperty", { enumerable: true, get: function () { return alb_generated_1.RosAdditionalCertificateAssociation; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::AdditionalCertificateAssociation`, which is used to add additional certificates to a listener.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAdditionalCertificateAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-additionalcertificateassociation
 */
class AdditionalCertificateAssociation extends ros.Resource {
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
        const rosAdditionalCertificateAssociation = new alb_generated_1.RosAdditionalCertificateAssociation(this, id, {
            certificates: props.certificates,
            listenerId: props.listenerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAdditionalCertificateAssociation;
        this.attrListenerId = rosAdditionalCertificateAssociation.attrListenerId;
    }
}
exports.AdditionalCertificateAssociation = AdditionalCertificateAssociation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkaXRpb25hbGNlcnRpZmljYXRlYXNzb2NpYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGRpdGlvbmFsY2VydGlmaWNhdGVhc3NvY2lhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQXNFO0FBRXRCLHlIQUZ2QyxtREFBbUMsT0FFNEM7QUFtQnhGOzs7O0dBSUc7QUFDSCxNQUFhLGdDQUFpQyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBVzlEOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTRDLEVBQUUsbUNBQTJDLElBQUk7UUFDdkksS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLG1DQUFtQyxHQUFHLElBQUksbURBQW1DLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzRixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQy9CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsbUNBQW1DLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxtQ0FBbUMsQ0FBQyxjQUFjLENBQUM7SUFDN0UsQ0FBQztDQUNKO0FBOUJELDRFQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0FkZGl0aW9uYWxDZXJ0aWZpY2F0ZUFzc29jaWF0aW9uIH0gZnJvbSAnLi9hbGIuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQWRkaXRpb25hbENlcnRpZmljYXRlQXNzb2NpYXRpb24gYXMgQWRkaXRpb25hbENlcnRpZmljYXRlQXNzb2NpYXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFkZGl0aW9uYWxDZXJ0aWZpY2F0ZUFzc29jaWF0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFsYi1hZGRpdGlvbmFsY2VydGlmaWNhdGVhc3NvY2lhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFkZGl0aW9uYWxDZXJ0aWZpY2F0ZUFzc29jaWF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2VydGlmaWNhdGVzOiBUaGUgbGlzdCBvZiB0aGUgYWRkaXRpb25hbCBjZXJ0aWZpY2F0ZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VydGlmaWNhdGVzOiBBcnJheTxSb3NBZGRpdGlvbmFsQ2VydGlmaWNhdGVBc3NvY2lhdGlvbi5DZXJ0aWZpY2F0ZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsaXN0ZW5lcklkOiBUaGUgSUQgb2YgdGhlIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxpc3RlbmVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6QUxCOjpBZGRpdGlvbmFsQ2VydGlmaWNhdGVBc3NvY2lhdGlvbmAsIHdoaWNoIGlzIHVzZWQgdG8gYWRkIGFkZGl0aW9uYWwgY2VydGlmaWNhdGVzIHRvIGEgbGlzdGVuZXIuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NBZGRpdGlvbmFsQ2VydGlmaWNhdGVBc3NvY2lhdGlvbmBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWFsYi1hZGRpdGlvbmFsY2VydGlmaWNhdGVhc3NvY2lhdGlvblxuICovXG5leHBvcnQgY2xhc3MgQWRkaXRpb25hbENlcnRpZmljYXRlQXNzb2NpYXRpb24gZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEFkZGl0aW9uYWxDZXJ0aWZpY2F0ZUFzc29jaWF0aW9uUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExpc3RlbmVySWQ6IFRoZSBJRCBvZiB0aGUgbGlzdGVuZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMaXN0ZW5lcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQWRkaXRpb25hbENlcnRpZmljYXRlQXNzb2NpYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0FkZGl0aW9uYWxDZXJ0aWZpY2F0ZUFzc29jaWF0aW9uID0gbmV3IFJvc0FkZGl0aW9uYWxDZXJ0aWZpY2F0ZUFzc29jaWF0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgY2VydGlmaWNhdGVzOiBwcm9wcy5jZXJ0aWZpY2F0ZXMsXG4gICAgICAgICAgICBsaXN0ZW5lcklkOiBwcm9wcy5saXN0ZW5lcklkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0FkZGl0aW9uYWxDZXJ0aWZpY2F0ZUFzc29jaWF0aW9uO1xuICAgICAgICB0aGlzLmF0dHJMaXN0ZW5lcklkID0gcm9zQWRkaXRpb25hbENlcnRpZmljYXRlQXNzb2NpYXRpb24uYXR0ckxpc3RlbmVySWQ7XG4gICAgfVxufVxuIl19