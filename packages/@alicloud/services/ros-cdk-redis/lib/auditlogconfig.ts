import * as ros from '@alicloud/ros-cdk-core';
import { RosAuditLogConfig } from './redis.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAuditLogConfig as AuditLogConfigProperty };

/**
 * Properties for defining a `AuditLogConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-auditlogconfig
 */
export interface AuditLogConfigProps {

    /**
     * Property instanceId: The ID of the instance. You can call the DescribeInstances operation to query the ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property retention: The retention period of audit logs. Valid values: 1 to 365. Unit: days.
     * Note: The value of this parameter takes effect for all ApsaraDB for Redis instances in the current region.
     */
    readonly retention: number | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::REDIS::AuditLogConfig`, which is used to modify the audit log settings of an ApsaraDB for Redis instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAuditLogConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-auditlogconfig
 */
export class AuditLogConfig extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AuditLogConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: IP address whitelist to be modified
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AuditLogConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAuditLogConfig = new RosAuditLogConfig(this, id,  {
            instanceId: props.instanceId,
            retention: props.retention,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAuditLogConfig;
        this.attrInstanceId = rosAuditLogConfig.attrInstanceId;
    }
}
