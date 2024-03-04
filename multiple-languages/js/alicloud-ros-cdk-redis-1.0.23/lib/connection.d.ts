import * as ros from '@alicloud/ros-cdk-core';
import { RosConnection } from './redis.generated';
export { RosConnection as ConnectionProperty };
/**
 * Properties for defining a `Connection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-connection
 */
export interface ConnectionProps {
    /**
     * Property connectionStringPrefix: The prefix of the public endpoint.
     * The prefix must be 8 to 64 characters in length,
     * and can contain lowercase letters and digits.
     * It must start with a lowercase letter.
     */
    readonly connectionStringPrefix: string | ros.IResolvable;
    /**
     * Property connectionType: Allowed values:
     * - Public: Public address.
     * - Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.
     */
    readonly connectionType: string | ros.IResolvable;
    /**
     * Property instanceId: Instance ID (globally unique)
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property port: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
     */
    readonly port: number | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::REDIS::Connection`, which is used to apply for a public endpoint for an ApsaraDB for Redis instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-connection
 */
export declare class Connection extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ConnectionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConnectionString: The allocated connection string.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConnectionProps, enableResourcePropertyConstraint?: boolean);
}
