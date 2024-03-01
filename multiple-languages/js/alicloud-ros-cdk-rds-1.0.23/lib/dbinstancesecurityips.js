"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBInstanceSecurityIps = exports.DBInstanceSecurityIpsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const rds_generated_1 = require("./rds.generated");
Object.defineProperty(exports, "DBInstanceSecurityIpsProperty", { enumerable: true, get: function () { return rds_generated_1.RosDBInstanceSecurityIps; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::DBInstanceSecurityIps`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstanceSecurityIps`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstancesecurityips
 */
class DBInstanceSecurityIps extends ros.Resource {
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
        const rosDBInstanceSecurityIps = new rds_generated_1.RosDBInstanceSecurityIps(this, id, {
            dbInstanceIpArrayAttribute: props.dbInstanceIpArrayAttribute,
            dbInstanceId: props.dbInstanceId,
            dbInstanceIpArrayName: props.dbInstanceIpArrayName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstanceSecurityIps;
        this.attrSecurityIps = rosDBInstanceSecurityIps.attrSecurityIps;
    }
}
exports.DBInstanceSecurityIps = DBInstanceSecurityIps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJpbnN0YW5jZXNlY3VyaXR5aXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGJpbnN0YW5jZXNlY3VyaXR5aXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBMkQ7QUFFdEIsOEdBRjVCLHdDQUF3QixPQUVpQztBQXdCbEU7Ozs7R0FJRztBQUNILE1BQWEscUJBQXNCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXbkQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUMsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSx3Q0FBd0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JFLDBCQUEwQixFQUFFLEtBQUssQ0FBQywwQkFBMEI7WUFDNUQsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUI7U0FDckQsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLHdCQUF3QixDQUFDLGVBQWUsQ0FBQztJQUNwRSxDQUFDO0NBQ0o7QUEvQkQsc0RBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zREJJbnN0YW5jZVNlY3VyaXR5SXBzIH0gZnJvbSAnLi9yZHMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zREJJbnN0YW5jZVNlY3VyaXR5SXBzIGFzIERCSW5zdGFuY2VTZWN1cml0eUlwc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREJJbnN0YW5jZVNlY3VyaXR5SXBzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJkcy1kYmluc3RhbmNlc2VjdXJpdHlpcHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEQkluc3RhbmNlU2VjdXJpdHlJcHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlSWQ6IERhdGFiYXNlIGluc3RhbmNlIGlkIHRvIHVwZGF0ZSBzZWN1cml0eSBpcHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlSXBBcnJheUF0dHJpYnV0ZTogU2VjdXJpdHkgaXBzIHRvIGFkZCBvciByZW1vdmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZUlwQXJyYXlBdHRyaWJ1dGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiSW5zdGFuY2VJcEFycmF5TmFtZTogR3JvdXAgbmFtZSBvZiB0aGUgc2VjdXJpdHkgaXBzLCBvbmx5IHN1cHBvcnQgbG93ZXIgY2hhcmFjdGVycyBhbmQgJ18nLiBBZHZpY2UgdXNlIGEgbmV3IGdyb3VwIG5hbWUgYXZvaWQgZWZmZWN0IHlvdXIgZGF0YWJhc2Ugc3lzdGVtLiBJZiB0aGUgcHJvcGVydGllcyBpcyBub3Qgc3BlY2lmaWVkLCBpdCB3aWxsIHNldCB0byBkZWZhdWx0IGdyb3VwLCBwbGVhc2UgYmUgY2FyZWZ1bC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlSXBBcnJheU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJEUzo6REJJbnN0YW5jZVNlY3VyaXR5SXBzYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0RCSW5zdGFuY2VTZWN1cml0eUlwc2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJkcy1kYmluc3RhbmNlc2VjdXJpdHlpcHNcbiAqL1xuZXhwb3J0IGNsYXNzIERCSW5zdGFuY2VTZWN1cml0eUlwcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogREJJbnN0YW5jZVNlY3VyaXR5SXBzUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlY3VyaXR5SXBzOiBUaGUgc2VjdXJpdHkgaXBzIG9mIHNlbGVjdGVkIGRhdGFiYXNlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VjdXJpdHlJcHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBEQkluc3RhbmNlU2VjdXJpdHlJcHNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0RCSW5zdGFuY2VTZWN1cml0eUlwcyA9IG5ldyBSb3NEQkluc3RhbmNlU2VjdXJpdHlJcHModGhpcywgaWQsICB7XG4gICAgICAgICAgICBkYkluc3RhbmNlSXBBcnJheUF0dHJpYnV0ZTogcHJvcHMuZGJJbnN0YW5jZUlwQXJyYXlBdHRyaWJ1dGUsXG4gICAgICAgICAgICBkYkluc3RhbmNlSWQ6IHByb3BzLmRiSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VJcEFycmF5TmFtZTogcHJvcHMuZGJJbnN0YW5jZUlwQXJyYXlOYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0RCSW5zdGFuY2VTZWN1cml0eUlwcztcbiAgICAgICAgdGhpcy5hdHRyU2VjdXJpdHlJcHMgPSByb3NEQkluc3RhbmNlU2VjdXJpdHlJcHMuYXR0clNlY3VyaXR5SXBzO1xuICAgIH1cbn1cbiJdfQ==