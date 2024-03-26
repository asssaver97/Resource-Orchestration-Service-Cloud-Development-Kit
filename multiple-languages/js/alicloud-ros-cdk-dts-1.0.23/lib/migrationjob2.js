"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationJob2 = exports.MigrationJob2Property = void 0;
const ros = require("@alicloud/ros-cdk-core");
const dts_generated_1 = require("./dts.generated");
Object.defineProperty(exports, "MigrationJob2Property", { enumerable: true, get: function () { return dts_generated_1.RosMigrationJob2; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DTS::MigrationJob2`, which is used to purchase a data migration instance and configure a data migration task of the new version.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMigrationJob2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
 */
class MigrationJob2 extends ros.Resource {
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
        const rosMigrationJob2 = new dts_generated_1.RosMigrationJob2(this, id, {
            status: props.status,
            reserve: props.reserve,
            dataSynchronization: props.dataSynchronization,
            dedicatedClusterId: props.dedicatedClusterId,
            delayPhone: props.delayPhone,
            errorNotice: props.errorNotice,
            dtsJobName: props.dtsJobName,
            delayRuleTime: props.delayRuleTime,
            dtsInstanceId: props.dtsInstanceId,
            dbList: props.dbList,
            fileOssUrl: props.fileOssUrl,
            dataCheckConfigure: props.dataCheckConfigure,
            dtsBisLabel: props.dtsBisLabel,
            checkpoint: props.checkpoint,
            disasterRecoveryJob: props.disasterRecoveryJob,
            dtsJobId: props.dtsJobId,
            delayNotice: props.delayNotice,
            dataInitialization: props.dataInitialization,
            destinationEndpoint: props.destinationEndpoint,
            sourceEndpoint: props.sourceEndpoint,
            errorPhone: props.errorPhone,
            structureInitialization: props.structureInitialization,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMigrationJob2;
        this.attrDtsInstanceId = rosMigrationJob2.attrDtsInstanceId;
        this.attrDtsJobId = rosMigrationJob2.attrDtsJobId;
        this.attrDtsJobName = rosMigrationJob2.attrDtsJobName;
    }
}
exports.MigrationJob2 = MigrationJob2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlncmF0aW9uam9iMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1pZ3JhdGlvbmpvYjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBNEhsRDs7OztHQUlHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFxQjNDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGdCQUFnQixHQUFHLElBQUksZ0NBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1Qix1QkFBdUIsRUFBRSxLQUFLLENBQUMsdUJBQXVCO1NBQ3pELEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0lBQzFELENBQUM7Q0FDSjtBQTlERCxzQ0E4REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NNaWdyYXRpb25Kb2IyIH0gZnJvbSAnLi9kdHMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zTWlncmF0aW9uSm9iMiBhcyBNaWdyYXRpb25Kb2IyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBNaWdyYXRpb25Kb2IyYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWR0cy1taWdyYXRpb25qb2IyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWlncmF0aW9uSm9iMlByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRhdGFJbml0aWFsaXphdGlvbjogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcGVyZm9ybSBmdWxsIGRhdGEgbWlncmF0aW9uIG9yIGZ1bGwgZGF0YSBzeW5jaHJvbml6YXRpb24uIERlZmF1bHQgdmFsdWU6ICoqdHJ1ZSoqLiBWYWxpZCB2YWx1ZXM6ICoqdHJ1ZSoqIGFuZCAqKmZhbHNlKiouXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YUluaXRpYWxpemF0aW9uOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGF0YVN5bmNocm9uaXphdGlvbjogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcGVyZm9ybSBpbmNyZW1lbnRhbCBkYXRhIG1pZ3JhdGlvbiBvciBpbmNyZW1lbnRhbCBkYXRhIHN5bmNocm9uaXphdGlvbi4gRGVmYXVsdCB2YWx1ZTogKipmYWxzZSoqLiBWYWxpZCB2YWx1ZXM6ICoqdHJ1ZSoqIGFuZCAqKmZhbHNlKiouXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YVN5bmNocm9uaXphdGlvbjogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiTGlzdDogVGhlIG9iamVjdHMgdGhhdCB5b3Ugd2FudCB0byBtaWdyYXRlIG9yIHN5bmNocm9uaXplLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiTGlzdDogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdGluYXRpb25FbmRwb2ludDogRGVzdGluYXRpb24gaW5zdGFuY2UgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0aW5hdGlvbkVuZHBvaW50OiBSb3NNaWdyYXRpb25Kb2IyLkRlc3RpbmF0aW9uRW5kcG9pbnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGR0c0pvYk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBEVFMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZHRzSm9iTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc291cmNlRW5kcG9pbnQ6IFNvdXJjZSBpbnN0YW5jZSBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZUVuZHBvaW50OiBSb3NNaWdyYXRpb25Kb2IyLlNvdXJjZUVuZHBvaW50UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzdHJ1Y3R1cmVJbml0aWFsaXphdGlvbjogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcGVyZm9ybSBzY2hlbWEgbWlncmF0aW9uIG9yIHNjaGVtYSBzeW5jaHJvbml6YXRpb24uIERlZmF1bHQgdmFsdWU6IHRydWUuIFZhbGlkIHZhbHVlczogKip0cnVlKiogYW5kICoqZmFsc2UqKi5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdHJ1Y3R1cmVJbml0aWFsaXphdGlvbjogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNoZWNrcG9pbnQ6IFRoZSBzdGFydCBvZmZzZXQgb2YgaW5jcmVtZW50YWwgZGF0YSBtaWdyYXRpb24gb3Igc3luY2hyb25pemF0aW9uLiBUaGlzIHZhbHVlIGlzIGEgVU5JWCB0aW1lc3RhbXAgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZSBKYW51YXJ5IDEsIDE5NzAsIDAwOjAwOjAwIFVUQy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGVja3BvaW50Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGF0YUNoZWNrQ29uZmlndXJlOiBUaGUgZGF0YSB2ZXJpZmljYXRpb24gdGFzayBmb3IgYSBkYXRhIG1pZ3JhdGlvbiBvciBzeW5jaHJvbml6YXRpb24gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YUNoZWNrQ29uZmlndXJlPzogUm9zTWlncmF0aW9uSm9iMi5EYXRhQ2hlY2tDb25maWd1cmVQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlZGljYXRlZENsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBEVFMgZGVkaWNhdGVkIGNsdXN0ZXIgb24gd2hpY2ggdGhlIHRhc2sgcnVucy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWRpY2F0ZWRDbHVzdGVySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxheU5vdGljZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gbW9uaXRvciB0aGUgdGFzayBsYXRlbmN5LiBWYWxpZCB2YWx1ZXM6ICoqdHJ1ZSoqIGFuZCAqKmZhbHNlKipcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxheU5vdGljZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxheVBob25lOiBUaGUgbW9iaWxlIG51bWJlcnMgdGhhdCByZWNlaXZlIGxhdGVuY3ktcmVsYXRlZCBhbGVydHMuIFNlcGFyYXRlIG11bHRpcGxlIG1vYmlsZSBudW1iZXJzIHdpdGggY29tbWFzICgsKS5cbiAgICAgKiAqKk5vdGUqKjogVGhpcyBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIG9ubHkgZm9yIHVzZXJzIG9mIHRoZSBDaGluYSBzaXRlIChhbGl5dW4uY29tKS4gT25seSBtb2JpbGUgbnVtYmVycyBpbiB0aGUgQ2hpbmVzZSBtYWlubGFuZCBhcmUgc3VwcG9ydGVkLiBZb3UgY2FuIHNwZWNpZnkgdXAgdG8gMTAgbW9iaWxlIG51bWJlcnMuIFVzZXJzIG9mIHRoZSBpbnRlcm5hdGlvbmFsIHNpdGUgKGFsaWJhYmFjbG91ZC5jb20pIGNhbm5vdCByZWNlaXZlIGFsZXJ0cyBieSB1c2luZyBtb2JpbGUgbnVtYmVycywgYnV0IGNhbiBjb25maWd1cmUgYWxlcnQgcnVsZXMgZm9yIERUUyB0YXNrcyBpbiB0aGUgQ2xvdWRNb25pdG9yIGNvbnNvbGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsYXlQaG9uZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlbGF5UnVsZVRpbWU6IFRoZSB0aHJlc2hvbGQgZm9yIGxhdGVuY3kgYWxlcnRzLiBVbml0OiBzZWNvbmRzLiBZb3UgY2FuIHNldCB0aGUgdGhyZXNob2xkIGJhc2VkIG9uIHlvdXIgYnVzaW5lc3MgcmVxdWlyZW1lbnRzLiBUbyBwcmV2ZW50IGppdHRlcnMgY2F1c2VkIGJ5IG5ldHdvcmsgYW5kIGRhdGFiYXNlIG92ZXJsb2Fkcywgd2UgcmVjb21tZW5kIHRoYXQgeW91IHNldCB0aGUgdGhyZXNob2xkIHRvIG1vcmUgdGhhbiAxMCBzZWNvbmRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGF5UnVsZVRpbWU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkaXNhc3RlclJlY292ZXJ5Sm9iOiBTcGVjaWZpZXMgd2hldGhlciB0aGUgaW5zdGFuY2UgaXMgYSBkaXNhc3RlciByZWNvdmVyeSBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiAqKnRydWUqKiBhbmQgKipmYWxzZSoqXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlzYXN0ZXJSZWNvdmVyeUpvYj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkdHNCaXNMYWJlbDogVGhlIGVudmlyb25tZW50IHRhZyBvZiB0aGUgRFRTIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6ICoqbm9ybWFsKiogYW5kICoqb25saW5lKiouXG4gICAgICovXG4gICAgcmVhZG9ubHkgZHRzQmlzTGFiZWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkdHNJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIERUUyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkdHNJbnN0YW5jZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZHRzSm9iSWQ6IFRoZSBJRCBvZiB0aGUgRFRTIHRhc2suXG4gICAgICovXG4gICAgcmVhZG9ubHkgZHRzSm9iSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlcnJvck5vdGljZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gbW9uaXRvciB0aGUgdGFzayBzdGF0dXMuIFZhbGlkIHZhbHVlczogKip0cnVlKiogYW5kICoqZmFsc2UqKi5cbiAgICAgKi9cbiAgICByZWFkb25seSBlcnJvck5vdGljZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlcnJvclBob25lOiBUaGUgbW9iaWxlIG51bWJlcnMgdGhhdCByZWNlaXZlIHN0YXR1cy1yZWxhdGVkIGFsZXJ0cy4gU2VwYXJhdGUgbXVsdGlwbGUgbW9iaWxlIG51bWJlcnMgd2l0aCBjb21tYXMgKCwpLlxuICAgICAqICoqTm90ZSoqOiBUaGlzIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgb25seSBmb3IgdXNlcnMgb2YgdGhlIENoaW5hIHNpdGUgKGFsaXl1bi5jb20pLiBPbmx5IG1vYmlsZSBudW1iZXJzIGluIHRoZSBDaGluZXNlIG1haW5sYW5kIGFyZSBzdXBwb3J0ZWQuIFlvdSBjYW4gc3BlY2lmeSB1cCB0byAxMCBtb2JpbGUgbnVtYmVycy4gVXNlcnMgb2YgdGhlIGludGVybmF0aW9uYWwgc2l0ZSAoYWxpYmFiYWNsb3VkLmNvbSkgY2Fubm90IHJlY2VpdmUgYWxlcnRzIGJ5IHVzaW5nIG1vYmlsZSBudW1iZXJzLCBidXQgY2FuIGNvbmZpZ3VyZSBhbGVydCBydWxlcyBmb3IgRFRTIHRhc2tzIGluIHRoZSBDbG91ZE1vbml0b3IgY29uc29sZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlcnJvclBob25lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZmlsZU9zc1VybDogVGhlIFVSTCBvZiB0aGUgT2JqZWN0IFN0b3JhZ2UgU2VydmljZSAoT1NTKSBidWNrZXQgdGhhdCBzdG9yZXMgdGhlIGZpbGVzIHJlbGF0ZWQgdG8gdGhlIERUUyB0YXNrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZpbGVPc3NVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNlcnZlOiBUaGUgcmVzZXJ2ZWQgcGFyYW1ldGVyIG9mIERUUy4gWW91IGNhbiBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyIHRvIGFkZCBtb3JlIGNvbmZpZ3VyYXRpb25zIG9mIHRoZSBzb3VyY2Ugb3IgZGVzdGluYXRpb24gaW5zdGFuY2UgdG8gdGhlIERUUyB0YXNrLiBGb3IgZXhhbXBsZSwgeW91IGNhbiBzcGVjaWZ5IHRoZSBkYXRhIHN0b3JhZ2UgZm9ybWF0IG9mIHRoZSBkZXN0aW5hdGlvbiBLYWZrYSBkYXRhYmFzZSBhbmQgdGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzZXJ2ZT86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN0YXR1czogVGhlIHN0YXR1cyBvZiB0aGUgcmVzb3VyY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtICoqTWlncmF0aW5nKio6IFN0YXJ0IHRoZSB0YXNrLlxuICAgICAqIC0gKipTdXNwZW5kaW5nKio6IFN1c3BlbmQgdGhlIHRhc2suXG4gICAgICogLSAqKlN0b3BwaW5nKio6IFN0b3AgdGhlIHRhc2suXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpEVFM6Ok1pZ3JhdGlvbkpvYjJgLCB3aGljaCBpcyB1c2VkIHRvIHB1cmNoYXNlIGEgZGF0YSBtaWdyYXRpb24gaW5zdGFuY2UgYW5kIGNvbmZpZ3VyZSBhIGRhdGEgbWlncmF0aW9uIHRhc2sgb2YgdGhlIG5ldyB2ZXJzaW9uLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zTWlncmF0aW9uSm9iMmBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWR0cy1taWdyYXRpb25qb2IyXG4gKi9cbmV4cG9ydCBjbGFzcyBNaWdyYXRpb25Kb2IyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBNaWdyYXRpb25Kb2IyUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIER0c0luc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgRFRTIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRHRzSW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIER0c0pvYklkOiBUaGUgSUQgb2YgdGhlIHRhc2suXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEdHNKb2JJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIER0c0pvYk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBEVFMgam9iLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRHRzSm9iTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IE1pZ3JhdGlvbkpvYjJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc01pZ3JhdGlvbkpvYjIgPSBuZXcgUm9zTWlncmF0aW9uSm9iMih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHN0YXR1czogcHJvcHMuc3RhdHVzLFxuICAgICAgICAgICAgcmVzZXJ2ZTogcHJvcHMucmVzZXJ2ZSxcbiAgICAgICAgICAgIGRhdGFTeW5jaHJvbml6YXRpb246IHByb3BzLmRhdGFTeW5jaHJvbml6YXRpb24sXG4gICAgICAgICAgICBkZWRpY2F0ZWRDbHVzdGVySWQ6IHByb3BzLmRlZGljYXRlZENsdXN0ZXJJZCxcbiAgICAgICAgICAgIGRlbGF5UGhvbmU6IHByb3BzLmRlbGF5UGhvbmUsXG4gICAgICAgICAgICBlcnJvck5vdGljZTogcHJvcHMuZXJyb3JOb3RpY2UsXG4gICAgICAgICAgICBkdHNKb2JOYW1lOiBwcm9wcy5kdHNKb2JOYW1lLFxuICAgICAgICAgICAgZGVsYXlSdWxlVGltZTogcHJvcHMuZGVsYXlSdWxlVGltZSxcbiAgICAgICAgICAgIGR0c0luc3RhbmNlSWQ6IHByb3BzLmR0c0luc3RhbmNlSWQsXG4gICAgICAgICAgICBkYkxpc3Q6IHByb3BzLmRiTGlzdCxcbiAgICAgICAgICAgIGZpbGVPc3NVcmw6IHByb3BzLmZpbGVPc3NVcmwsXG4gICAgICAgICAgICBkYXRhQ2hlY2tDb25maWd1cmU6IHByb3BzLmRhdGFDaGVja0NvbmZpZ3VyZSxcbiAgICAgICAgICAgIGR0c0Jpc0xhYmVsOiBwcm9wcy5kdHNCaXNMYWJlbCxcbiAgICAgICAgICAgIGNoZWNrcG9pbnQ6IHByb3BzLmNoZWNrcG9pbnQsXG4gICAgICAgICAgICBkaXNhc3RlclJlY292ZXJ5Sm9iOiBwcm9wcy5kaXNhc3RlclJlY292ZXJ5Sm9iLFxuICAgICAgICAgICAgZHRzSm9iSWQ6IHByb3BzLmR0c0pvYklkLFxuICAgICAgICAgICAgZGVsYXlOb3RpY2U6IHByb3BzLmRlbGF5Tm90aWNlLFxuICAgICAgICAgICAgZGF0YUluaXRpYWxpemF0aW9uOiBwcm9wcy5kYXRhSW5pdGlhbGl6YXRpb24sXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkVuZHBvaW50OiBwcm9wcy5kZXN0aW5hdGlvbkVuZHBvaW50LFxuICAgICAgICAgICAgc291cmNlRW5kcG9pbnQ6IHByb3BzLnNvdXJjZUVuZHBvaW50LFxuICAgICAgICAgICAgZXJyb3JQaG9uZTogcHJvcHMuZXJyb3JQaG9uZSxcbiAgICAgICAgICAgIHN0cnVjdHVyZUluaXRpYWxpemF0aW9uOiBwcm9wcy5zdHJ1Y3R1cmVJbml0aWFsaXphdGlvbixcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NNaWdyYXRpb25Kb2IyO1xuICAgICAgICB0aGlzLmF0dHJEdHNJbnN0YW5jZUlkID0gcm9zTWlncmF0aW9uSm9iMi5hdHRyRHRzSW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRyRHRzSm9iSWQgPSByb3NNaWdyYXRpb25Kb2IyLmF0dHJEdHNKb2JJZDtcbiAgICAgICAgdGhpcy5hdHRyRHRzSm9iTmFtZSA9IHJvc01pZ3JhdGlvbkpvYjIuYXR0ckR0c0pvYk5hbWU7XG4gICAgfVxufVxuIl19