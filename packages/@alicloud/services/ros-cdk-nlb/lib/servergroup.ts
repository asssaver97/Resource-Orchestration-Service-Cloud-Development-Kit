import * as ros from '@alicloud/ros-cdk-core';
import { RosServerGroup } from './nlb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServerGroup as ServerGroupProperty };

/**
 * Properties for defining a `ServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup
 */
export interface ServerGroupProps {

    /**
     * Property serverGroupName: Name of ServerGroup
     */
    readonly serverGroupName: string | ros.IResolvable;

    /**
     * Property vpcId: ID of VPC
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property addressIpVersion: IP version of address
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * Property anyPortEnabled: Specifies whether to enable all-port forwarding. Valid values:
     * true
     * false (default)
     */
    readonly anyPortEnabled?: boolean | ros.IResolvable;

    /**
     * Property connectionDrainEnabled: Whether to enable graceful connection interruption
     */
    readonly connectionDrainEnabled?: boolean | ros.IResolvable;

    /**
     * Property connectionDrainTimeout: Time of graceful connection interruption
     */
    readonly connectionDrainTimeout?: number | ros.IResolvable;

    /**
     * Property healthCheckConfig: Health Check Config
     */
    readonly healthCheckConfig?: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;

    /**
     * Property persistenceEnabled: Whether to enable session persistence
     */
    readonly persistenceEnabled?: boolean | ros.IResolvable;

    /**
     * Property persistenceTimeout: Time of session persistence
     */
    readonly persistenceTimeout?: number | ros.IResolvable;

    /**
     * Property preserveClientIpEnabled: Whether to enable the client address retention function
     */
    readonly preserveClientIpEnabled?: boolean | ros.IResolvable;

    /**
     * Property protocol: Protocol of ServerGroup
     */
    readonly protocol?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: undefined
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property scheduler: undefined
     */
    readonly scheduler?: string | ros.IResolvable;

    /**
     * Property serverGroupType: Type of ServerGroup
     */
    readonly serverGroupType?: string | ros.IResolvable;

    /**
     * Property servers: undefined
     */
    readonly servers?: Array<RosServerGroup.ServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosServerGroup.TagsProperty[];
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLB::ServerGroup`, which is used to create a server group for a Network Load Balancer (NLB) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup
 */
export class ServerGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ServerGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ServerGroupId: ID of ServerGroup
     */
    public readonly attrServerGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServerGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosServerGroup = new RosServerGroup(this, id,  {
            resourceGroupId: props.resourceGroupId,
            scheduler: props.scheduler,
            addressIpVersion: props.addressIpVersion,
            servers: props.servers,
            preserveClientIpEnabled: props.preserveClientIpEnabled,
            serverGroupType: props.serverGroupType,
            persistenceEnabled: props.persistenceEnabled,
            connectionDrainEnabled: props.connectionDrainEnabled,
            connectionDrainTimeout: props.connectionDrainTimeout,
            persistenceTimeout: props.persistenceTimeout,
            vpcId: props.vpcId,
            anyPortEnabled: props.anyPortEnabled,
            healthCheckConfig: props.healthCheckConfig,
            protocol: props.protocol,
            tags: props.tags,
            serverGroupName: props.serverGroupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServerGroup;
        this.attrServerGroupId = rosServerGroup.attrServerGroupId;
    }
}
