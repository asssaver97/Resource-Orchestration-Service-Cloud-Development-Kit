import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancers } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancers as LoadBalancersProperty };

/**
 * Properties for defining a `LoadBalancers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers
 */
export interface LoadBalancersProps {

    /**
     * Property address: The service address of the load balancing instance.
     */
    readonly address?: string | ros.IResolvable;

    /**
     * Property addressIpVersion: IP version.
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * Property addressType: The address type of the load balancing instance.
     */
    readonly addressType?: string | ros.IResolvable;

    /**
     * Property internetChargeType: Public network type instance payment method.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property loadBalancerId: ID of the load balancing instance.
     */
    readonly loadBalancerId?: string | ros.IResolvable;

    /**
     * Property loadBalancerName: Name of the load balancing instance.
     */
    readonly loadBalancerName?: string | ros.IResolvable;

    /**
     * Property masterZoneId: ID of the primary available area of the load balancing instance.
     */
    readonly masterZoneId?: string | ros.IResolvable;

    /**
     * Property networkType: The network type of the private network load balancing instance
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * Property paymentType: Load balancing instance payment type
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    readonly slaveZoneId?: string | ros.IResolvable;

    /**
     * Property status: The status of SLB.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * Property vpcId: VPC ID
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchId: The ID of the switch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::LoadBalancers`, which is used to query created Classic Load Balancer (CLB) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancers`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers
 */
export class LoadBalancers extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LoadBalancersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute LoadBalancerIds: The list of load balancer IDs.
     */
    public readonly attrLoadBalancerIds: ros.IResolvable;

    /**
     * Attribute LoadBalancers: The list of load balancers.
     */
    public readonly attrLoadBalancers: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLoadBalancers = new RosLoadBalancers(this, id,  {
            status: props.status,
            addressIpVersion: props.addressIpVersion,
            resourceGroupId: props.resourceGroupId,
            address: props.address,
            vSwitchId: props.vSwitchId,
            loadBalancerId: props.loadBalancerId,
            slaveZoneId: props.slaveZoneId,
            internetChargeType: props.internetChargeType,
            loadBalancerName: props.loadBalancerName,
            vpcId: props.vpcId,
            networkType: props.networkType,
            paymentType: props.paymentType,
            addressType: props.addressType,
            masterZoneId: props.masterZoneId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancers;
        this.attrLoadBalancerIds = rosLoadBalancers.attrLoadBalancerIds;
        this.attrLoadBalancers = rosLoadBalancers.attrLoadBalancers;
    }
}
