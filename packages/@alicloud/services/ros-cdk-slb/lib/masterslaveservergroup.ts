import * as ros from '@alicloud/ros-cdk-core';
import { RosMasterSlaveServerGroup } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMasterSlaveServerGroup as MasterSlaveServerGroupProperty };

/**
 * Properties for defining a `MasterSlaveServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
 */
export interface MasterSlaveServerGroupProps {

    /**
     * Property loadBalancerId: The ID of the Server Load Balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property masterSlaveBackendServers: A list of active\/standby server group.
     * An active\/standby server group can only contain two backend servers.
     */
    readonly masterSlaveBackendServers: Array<RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property masterSlaveServerGroupName: The name of the active\/standby server group.
     */
    readonly masterSlaveServerGroupName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::MasterSlaveServerGroup`, which is used to create a primary/secondary server group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMasterSlaveServerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
 */
export class MasterSlaveServerGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: MasterSlaveServerGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute MasterSlaveServerGroupId: Active/standby server group ID.
     */
    public readonly attrMasterSlaveServerGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MasterSlaveServerGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMasterSlaveServerGroup = new RosMasterSlaveServerGroup(this, id,  {
            loadBalancerId: props.loadBalancerId,
            masterSlaveServerGroupName: props.masterSlaveServerGroupName,
            masterSlaveBackendServers: props.masterSlaveBackendServers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMasterSlaveServerGroup;
        this.attrMasterSlaveServerGroupId = rosMasterSlaveServerGroup.attrMasterSlaveServerGroupId;
    }
}
