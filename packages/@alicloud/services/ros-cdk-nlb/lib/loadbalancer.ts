import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancer } from './nlb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancer as LoadBalancerProperty };

/**
 * Properties for defining a `ALIYUN::NLB::LoadBalancer`
 */
export interface LoadBalancerProps {

    /**
     * Property addressType: The type of IP address that the NLB instance uses to provide services. Valid values:
     * Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
     * Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
     */
    readonly addressType: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
     */
    readonly zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * Property bandwidthPackageId: Attach common bandwidth package to load balancer.
     */
    readonly bandwidthPackageId?: string | ros.IResolvable;

    /**
     * Property crossZoneEnabled: Whether enable cross zone. Default: true
     */
    readonly crossZoneEnabled?: boolean | ros.IResolvable;

    /**
     * Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    readonly loadBalancerBillingConfig?: RosLoadBalancer.LoadBalancerBillingConfigProperty | ros.IResolvable;

    /**
     * Property loadBalancerName: The name of the NLB instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly loadBalancerName?: string | ros.IResolvable;

    /**
     * Property loadBalancerType: The type of the NLB instance.
     */
    readonly loadBalancerType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property trafficAffinityEnabled: Whether enable traffic affinity. Default: false
     */
    readonly trafficAffinityEnabled?: boolean | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::NLB::LoadBalancer`
 */
export class LoadBalancer extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    public readonly attrAddressIpVersion: ros.IResolvable;

    /**
     * Attribute AddressType: The type of IP address that the NLB instance uses to provide services.
     */
    public readonly attrAddressType: ros.IResolvable;

    /**
     * Attribute DNSName: The domain name of the NLB instance.
     */
    public readonly attrDnsName: ros.IResolvable;

    /**
     * Attribute LoadBalancerId: The ID of the NLB instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * Attribute LoadBalancerType: The type of the NLB instance.
     */
    public readonly attrLoadBalancerType: ros.IResolvable;

    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
     */
    public readonly attrZoneMappings: ros.IResolvable;

    /**
     * Create a new `ALIYUN::NLB::LoadBalancer`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosLoadBalancer = new RosLoadBalancer(this, id,  {
            loadBalancerName: props.loadBalancerName,
            addressIpVersion: props.addressIpVersion,
            resourceGroupId: props.resourceGroupId,
            vpcId: props.vpcId,
            loadBalancerBillingConfig: props.loadBalancerBillingConfig,
            trafficAffinityEnabled: props.trafficAffinityEnabled,
            bandwidthPackageId: props.bandwidthPackageId,
            addressType: props.addressType,
            zoneMappings: props.zoneMappings,
            crossZoneEnabled: props.crossZoneEnabled,
            loadBalancerType: props.loadBalancerType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancer;
        this.attrAddressIpVersion = rosLoadBalancer.attrAddressIpVersion;
        this.attrAddressType = rosLoadBalancer.attrAddressType;
        this.attrDnsName = rosLoadBalancer.attrDnsName;
        this.attrLoadBalancerId = rosLoadBalancer.attrLoadBalancerId;
        this.attrLoadBalancerType = rosLoadBalancer.attrLoadBalancerType;
        this.attrVpcId = rosLoadBalancer.attrVpcId;
        this.attrZoneMappings = rosLoadBalancer.attrZoneMappings;
    }
}
