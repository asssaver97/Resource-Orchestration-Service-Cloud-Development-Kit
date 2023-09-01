// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::NLB::Listener`
 */
export interface RosListenerProps {

    /**
     * @Property listenerProtocol: undefined
     */
    readonly listenerProtocol: string | ros.IResolvable;

    /**
     * @Property loadBalancerId: ID of the LoadBalancer
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property serverGroupId: ID of the ServerGroup
     */
    readonly serverGroupId: string | ros.IResolvable;

    /**
     * @Property alpnEnabled: undefined
     */
    readonly alpnEnabled?: boolean | ros.IResolvable;

    /**
     * @Property alpnPolicy: Proxy of alpn
     */
    readonly alpnPolicy?: string | ros.IResolvable;

    /**
     * @Property caCertificateIds: List of the ca certificate ids
     */
    readonly caCertificateIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property caEnabled: Whether to open CA
     */
    readonly caEnabled?: boolean | ros.IResolvable;

    /**
     * @Property certificateIds: List of the certificate ids
     */
    readonly certificateIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cps: New connection rate limit of Instance
     */
    readonly cps?: number | ros.IResolvable;

    /**
     * @Property enable: Whether to start listener or not. Default True.
     */
    readonly enable?: boolean | ros.IResolvable;

    /**
     * @Property endPort: EndPort of the portRange
     */
    readonly endPort?: number | ros.IResolvable;

    /**
     * @Property idleTimeout: Specifies the connection idle timeout
     */
    readonly idleTimeout?: number | ros.IResolvable;

    /**
     * @Property listenerDescription: Description of the listener, [2, 256] characters.
     */
    readonly listenerDescription?: string | ros.IResolvable;

    /**
     * @Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0
     */
    readonly listenerPort?: number | ros.IResolvable;

    /**
     * @Property mss: Max length of the TCP packet
     */
    readonly mss?: number | ros.IResolvable;

    /**
     * @Property proxyProtocolEnabled: Whether to enable ppv2 function
     */
    readonly proxyProtocolEnabled?: boolean | ros.IResolvable;

    /**
     * @Property secSensorEnabled: Whether to enable the second-level monitoring function
     */
    readonly secSensorEnabled?: boolean | ros.IResolvable;

    /**
     * @Property securityPolicyId: Only valid for TcpSSL protocol monitoring
     */
    readonly securityPolicyId?: string | ros.IResolvable;

    /**
     * @Property startPort: StartPort of the portRange
     */
    readonly startPort?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosListenerProps`
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the result of the validation.
 */
function RosListenerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('caEnabled', ros.validateBoolean)(properties.caEnabled));
    if(properties.listenerPort && (typeof properties.listenerPort) !== 'object') {
        errors.collect(ros.propertyValidator('listenerPort', ros.validateRange)({
            data: properties.listenerPort,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    if(properties.startPort && (typeof properties.startPort) !== 'object') {
        errors.collect(ros.propertyValidator('startPort', ros.validateRange)({
            data: properties.startPort,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('startPort', ros.validateNumber)(properties.startPort));
    if(properties.cps && (typeof properties.cps) !== 'object') {
        errors.collect(ros.propertyValidator('cps', ros.validateRange)({
            data: properties.cps,
            min: 0,
            max: 1000000,
          }));
    }
    errors.collect(ros.propertyValidator('cps', ros.validateNumber)(properties.cps));
    errors.collect(ros.propertyValidator('serverGroupId', ros.requiredValidator)(properties.serverGroupId));
    errors.collect(ros.propertyValidator('serverGroupId', ros.validateString)(properties.serverGroupId));
    if(properties.idleTimeout && (typeof properties.idleTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('idleTimeout', ros.validateRange)({
            data: properties.idleTimeout,
            min: 1,
            max: 900,
          }));
    }
    errors.collect(ros.propertyValidator('idleTimeout', ros.validateNumber)(properties.idleTimeout));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    if(properties.mss && (typeof properties.mss) !== 'object') {
        errors.collect(ros.propertyValidator('mss', ros.validateRange)({
            data: properties.mss,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('mss', ros.validateNumber)(properties.mss));
    errors.collect(ros.propertyValidator('listenerProtocol', ros.requiredValidator)(properties.listenerProtocol));
    if(properties.listenerProtocol && (typeof properties.listenerProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('listenerProtocol', ros.validateAllowedValues)({
          data: properties.listenerProtocol,
          allowedValues: ["TCP","UDP","TCPSSL"],
        }));
    }
    errors.collect(ros.propertyValidator('listenerProtocol', ros.validateString)(properties.listenerProtocol));
    errors.collect(ros.propertyValidator('securityPolicyId', ros.validateString)(properties.securityPolicyId));
    if(properties.listenerDescription && (Array.isArray(properties.listenerDescription) || (typeof properties.listenerDescription) === 'string')) {
        errors.collect(ros.propertyValidator('listenerDescription', ros.validateLength)({
            data: properties.listenerDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('listenerDescription', ros.validateString)(properties.listenerDescription));
    errors.collect(ros.propertyValidator('alpnPolicy', ros.validateString)(properties.alpnPolicy));
    if(properties.caCertificateIds && (Array.isArray(properties.caCertificateIds) || (typeof properties.caCertificateIds) === 'string')) {
        errors.collect(ros.propertyValidator('caCertificateIds', ros.validateLength)({
            data: properties.caCertificateIds.length,
            min: 0,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('caCertificateIds', ros.listValidator(ros.validateString))(properties.caCertificateIds));
    if(properties.endPort && (typeof properties.endPort) !== 'object') {
        errors.collect(ros.propertyValidator('endPort', ros.validateRange)({
            data: properties.endPort,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('endPort', ros.validateNumber)(properties.endPort));
    errors.collect(ros.propertyValidator('proxyProtocolEnabled', ros.validateBoolean)(properties.proxyProtocolEnabled));
    if(properties.certificateIds && (Array.isArray(properties.certificateIds) || (typeof properties.certificateIds) === 'string')) {
        errors.collect(ros.propertyValidator('certificateIds', ros.validateLength)({
            data: properties.certificateIds.length,
            min: 0,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('certificateIds', ros.listValidator(ros.validateString))(properties.certificateIds));
    errors.collect(ros.propertyValidator('secSensorEnabled', ros.validateBoolean)(properties.secSensorEnabled));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('alpnEnabled', ros.validateBoolean)(properties.alpnEnabled));
    return errors.wrap('supplied properties not correct for "RosListenerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLB::Listener` resource
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLB::Listener` resource.
 */
// @ts-ignore TS6133
function rosListenerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosListenerPropsValidator(properties).assertSuccess();
    }
    return {
      ListenerProtocol: ros.stringToRosTemplate(properties.listenerProtocol),
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      ServerGroupId: ros.stringToRosTemplate(properties.serverGroupId),
      AlpnEnabled: ros.booleanToRosTemplate(properties.alpnEnabled),
      AlpnPolicy: ros.stringToRosTemplate(properties.alpnPolicy),
      CaCertificateIds: ros.listMapper(ros.stringToRosTemplate)(properties.caCertificateIds),
      CaEnabled: ros.booleanToRosTemplate(properties.caEnabled),
      CertificateIds: ros.listMapper(ros.stringToRosTemplate)(properties.certificateIds),
      Cps: ros.numberToRosTemplate(properties.cps),
      Enable: ros.booleanToRosTemplate(properties.enable),
      EndPort: ros.numberToRosTemplate(properties.endPort),
      IdleTimeout: ros.numberToRosTemplate(properties.idleTimeout),
      ListenerDescription: ros.stringToRosTemplate(properties.listenerDescription),
      ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
      Mss: ros.numberToRosTemplate(properties.mss),
      ProxyProtocolEnabled: ros.booleanToRosTemplate(properties.proxyProtocolEnabled),
      SecSensorEnabled: ros.booleanToRosTemplate(properties.secSensorEnabled),
      SecurityPolicyId: ros.stringToRosTemplate(properties.securityPolicyId),
      StartPort: ros.numberToRosTemplate(properties.startPort),
    };
}

/**
 * A ROS template type:  `ALIYUN::NLB::Listener`
 */
export class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLB::Listener";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ListenerId: Id of created Listener
     */
    public readonly attrListenerId: ros.IResolvable;

    /**
     * @Attribute ListenerPort: ListenerPort of created Listener
     */
    public readonly attrListenerPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property listenerProtocol: undefined
     */
    public listenerProtocol: string | ros.IResolvable;

    /**
     * @Property loadBalancerId: ID of the LoadBalancer
     */
    public loadBalancerId: string | ros.IResolvable;

    /**
     * @Property serverGroupId: ID of the ServerGroup
     */
    public serverGroupId: string | ros.IResolvable;

    /**
     * @Property alpnEnabled: undefined
     */
    public alpnEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property alpnPolicy: Proxy of alpn
     */
    public alpnPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property caCertificateIds: List of the ca certificate ids
     */
    public caCertificateIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property caEnabled: Whether to open CA
     */
    public caEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property certificateIds: List of the certificate ids
     */
    public certificateIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property cps: New connection rate limit of Instance
     */
    public cps: number | ros.IResolvable | undefined;

    /**
     * @Property enable: Whether to start listener or not. Default True.
     */
    public enable: boolean | ros.IResolvable | undefined;

    /**
     * @Property endPort: EndPort of the portRange
     */
    public endPort: number | ros.IResolvable | undefined;

    /**
     * @Property idleTimeout: Specifies the connection idle timeout
     */
    public idleTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property listenerDescription: Description of the listener, [2, 256] characters.
     */
    public listenerDescription: string | ros.IResolvable | undefined;

    /**
     * @Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0
     */
    public listenerPort: number | ros.IResolvable | undefined;

    /**
     * @Property mss: Max length of the TCP packet
     */
    public mss: number | ros.IResolvable | undefined;

    /**
     * @Property proxyProtocolEnabled: Whether to enable ppv2 function
     */
    public proxyProtocolEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property secSensorEnabled: Whether to enable the second-level monitoring function
     */
    public secSensorEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property securityPolicyId: Only valid for TcpSSL protocol monitoring
     */
    public securityPolicyId: string | ros.IResolvable | undefined;

    /**
     * @Property startPort: StartPort of the portRange
     */
    public startPort: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::NLB::Listener`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosListenerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosListener.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrListenerId = this.getAtt('ListenerId');
        this.attrListenerPort = this.getAtt('ListenerPort');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.listenerProtocol = props.listenerProtocol;
        this.loadBalancerId = props.loadBalancerId;
        this.serverGroupId = props.serverGroupId;
        this.alpnEnabled = props.alpnEnabled;
        this.alpnPolicy = props.alpnPolicy;
        this.caCertificateIds = props.caCertificateIds;
        this.caEnabled = props.caEnabled;
        this.certificateIds = props.certificateIds;
        this.cps = props.cps;
        this.enable = props.enable;
        this.endPort = props.endPort;
        this.idleTimeout = props.idleTimeout;
        this.listenerDescription = props.listenerDescription;
        this.listenerPort = props.listenerPort;
        this.mss = props.mss;
        this.proxyProtocolEnabled = props.proxyProtocolEnabled;
        this.secSensorEnabled = props.secSensorEnabled;
        this.securityPolicyId = props.securityPolicyId;
        this.startPort = props.startPort;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            listenerProtocol: this.listenerProtocol,
            loadBalancerId: this.loadBalancerId,
            serverGroupId: this.serverGroupId,
            alpnEnabled: this.alpnEnabled,
            alpnPolicy: this.alpnPolicy,
            caCertificateIds: this.caCertificateIds,
            caEnabled: this.caEnabled,
            certificateIds: this.certificateIds,
            cps: this.cps,
            enable: this.enable,
            endPort: this.endPort,
            idleTimeout: this.idleTimeout,
            listenerDescription: this.listenerDescription,
            listenerPort: this.listenerPort,
            mss: this.mss,
            proxyProtocolEnabled: this.proxyProtocolEnabled,
            secSensorEnabled: this.secSensorEnabled,
            securityPolicyId: this.securityPolicyId,
            startPort: this.startPort,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosListenerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::NLB::LoadBalancer`
 */
export interface RosLoadBalancerProps {

    /**
     * @Property addressType: The type of IP address that the NLB instance uses to provide services. Valid values:
     * Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
     * Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
     */
    readonly addressType: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
     */
    readonly zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * @Property bandwidthPackageId: Attach common bandwidth package to load balancer.
     */
    readonly bandwidthPackageId?: string | ros.IResolvable;

    /**
     * @Property crossZoneEnabled: Whether enable cross zone. Default: true
     */
    readonly crossZoneEnabled?: boolean | ros.IResolvable;

    /**
     * @Property deletionProtectionConfig: The configuration of the deletion protection feature.
     */
    readonly deletionProtectionConfig?: RosLoadBalancer.DeletionProtectionConfigProperty | ros.IResolvable;

    /**
     * @Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    readonly loadBalancerBillingConfig?: RosLoadBalancer.LoadBalancerBillingConfigProperty | ros.IResolvable;

    /**
     * @Property loadBalancerName: The name of the NLB instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly loadBalancerName?: string | ros.IResolvable;

    /**
     * @Property loadBalancerType: The type of the NLB instance.
     */
    readonly loadBalancerType?: string | ros.IResolvable;

    /**
     * @Property modificationProtectionConfig: The configuration of the configuration read-only mode.
     */
    readonly modificationProtectionConfig?: RosLoadBalancer.ModificationProtectionConfigProperty | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosLoadBalancer.TagsProperty[];

    /**
     * @Property trafficAffinityEnabled: Whether enable traffic affinity. Default: false
     */
    readonly trafficAffinityEnabled?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLoadBalancerProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.addressIpVersion && (typeof properties.addressIpVersion) !== 'object') {
        errors.collect(ros.propertyValidator('addressIpVersion', ros.validateAllowedValues)({
          data: properties.addressIpVersion,
          allowedValues: ["Ipv4","DualStack"],
        }));
    }
    errors.collect(ros.propertyValidator('addressIpVersion', ros.validateString)(properties.addressIpVersion));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('loadBalancerBillingConfig', RosLoadBalancer_LoadBalancerBillingConfigPropertyValidator)(properties.loadBalancerBillingConfig));
    errors.collect(ros.propertyValidator('zoneMappings', ros.requiredValidator)(properties.zoneMappings));
    if(properties.zoneMappings && (Array.isArray(properties.zoneMappings) || (typeof properties.zoneMappings) === 'string')) {
        errors.collect(ros.propertyValidator('zoneMappings', ros.validateLength)({
            data: properties.zoneMappings.length,
            min: 2,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('zoneMappings', ros.listValidator(RosLoadBalancer_ZoneMappingsPropertyValidator))(properties.zoneMappings));
    errors.collect(ros.propertyValidator('modificationProtectionConfig', RosLoadBalancer_ModificationProtectionConfigPropertyValidator)(properties.modificationProtectionConfig));
    errors.collect(ros.propertyValidator('crossZoneEnabled', ros.validateBoolean)(properties.crossZoneEnabled));
    errors.collect(ros.propertyValidator('loadBalancerType', ros.validateString)(properties.loadBalancerType));
    errors.collect(ros.propertyValidator('loadBalancerName', ros.validateString)(properties.loadBalancerName));
    errors.collect(ros.propertyValidator('deletionProtectionConfig', RosLoadBalancer_DeletionProtectionConfigPropertyValidator)(properties.deletionProtectionConfig));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('trafficAffinityEnabled', ros.validateBoolean)(properties.trafficAffinityEnabled));
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.validateString)(properties.bandwidthPackageId));
    errors.collect(ros.propertyValidator('addressType', ros.requiredValidator)(properties.addressType));
    if(properties.addressType && (typeof properties.addressType) !== 'object') {
        errors.collect(ros.propertyValidator('addressType', ros.validateAllowedValues)({
          data: properties.addressType,
          allowedValues: ["Internet","Intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('addressType', ros.validateString)(properties.addressType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosLoadBalancer_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancerPropsValidator(properties).assertSuccess();
    }
    return {
      AddressType: ros.stringToRosTemplate(properties.addressType),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      ZoneMappings: ros.listMapper(rosLoadBalancerZoneMappingsPropertyToRosTemplate)(properties.zoneMappings),
      AddressIpVersion: ros.stringToRosTemplate(properties.addressIpVersion),
      BandwidthPackageId: ros.stringToRosTemplate(properties.bandwidthPackageId),
      CrossZoneEnabled: ros.booleanToRosTemplate(properties.crossZoneEnabled),
      DeletionProtectionConfig: rosLoadBalancerDeletionProtectionConfigPropertyToRosTemplate(properties.deletionProtectionConfig),
      LoadBalancerBillingConfig: rosLoadBalancerLoadBalancerBillingConfigPropertyToRosTemplate(properties.loadBalancerBillingConfig),
      LoadBalancerName: ros.stringToRosTemplate(properties.loadBalancerName),
      LoadBalancerType: ros.stringToRosTemplate(properties.loadBalancerType),
      ModificationProtectionConfig: rosLoadBalancerModificationProtectionConfigPropertyToRosTemplate(properties.modificationProtectionConfig),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosLoadBalancerTagsPropertyToRosTemplate)(properties.tags),
      TrafficAffinityEnabled: ros.booleanToRosTemplate(properties.trafficAffinityEnabled),
    };
}

/**
 * A ROS template type:  `ALIYUN::NLB::LoadBalancer`
 */
export class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLB::LoadBalancer";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    public readonly attrAddressIpVersion: ros.IResolvable;

    /**
     * @Attribute AddressType: The type of IP address that the NLB instance uses to provide services.
     */
    public readonly attrAddressType: ros.IResolvable;

    /**
     * @Attribute DNSName: The domain name of the NLB instance.
     */
    public readonly attrDnsName: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The ID of the NLB instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * @Attribute LoadBalancerType: The type of the NLB instance.
     */
    public readonly attrLoadBalancerType: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
     */
    public readonly attrZoneMappings: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addressType: The type of IP address that the NLB instance uses to provide services. Valid values:
     * Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
     * Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
     */
    public addressType: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
     */
    public zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    public addressIpVersion: string | ros.IResolvable | undefined;

    /**
     * @Property bandwidthPackageId: Attach common bandwidth package to load balancer.
     */
    public bandwidthPackageId: string | ros.IResolvable | undefined;

    /**
     * @Property crossZoneEnabled: Whether enable cross zone. Default: true
     */
    public crossZoneEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property deletionProtectionConfig: The configuration of the deletion protection feature.
     */
    public deletionProtectionConfig: RosLoadBalancer.DeletionProtectionConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    public loadBalancerBillingConfig: RosLoadBalancer.LoadBalancerBillingConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerName: The name of the NLB instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    public loadBalancerName: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerType: The type of the NLB instance.
     */
    public loadBalancerType: string | ros.IResolvable | undefined;

    /**
     * @Property modificationProtectionConfig: The configuration of the configuration read-only mode.
     */
    public modificationProtectionConfig: RosLoadBalancer.ModificationProtectionConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosLoadBalancer.TagsProperty[] | undefined;

    /**
     * @Property trafficAffinityEnabled: Whether enable traffic affinity. Default: false
     */
    public trafficAffinityEnabled: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::NLB::LoadBalancer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddressIpVersion = this.getAtt('AddressIpVersion');
        this.attrAddressType = this.getAtt('AddressType');
        this.attrDnsName = this.getAtt('DNSName');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');
        this.attrLoadBalancerType = this.getAtt('LoadBalancerType');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrZoneMappings = this.getAtt('ZoneMappings');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addressType = props.addressType;
        this.vpcId = props.vpcId;
        this.zoneMappings = props.zoneMappings;
        this.addressIpVersion = props.addressIpVersion;
        this.bandwidthPackageId = props.bandwidthPackageId;
        this.crossZoneEnabled = props.crossZoneEnabled;
        this.deletionProtectionConfig = props.deletionProtectionConfig;
        this.loadBalancerBillingConfig = props.loadBalancerBillingConfig;
        this.loadBalancerName = props.loadBalancerName;
        this.loadBalancerType = props.loadBalancerType;
        this.modificationProtectionConfig = props.modificationProtectionConfig;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.trafficAffinityEnabled = props.trafficAffinityEnabled;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addressType: this.addressType,
            vpcId: this.vpcId,
            zoneMappings: this.zoneMappings,
            addressIpVersion: this.addressIpVersion,
            bandwidthPackageId: this.bandwidthPackageId,
            crossZoneEnabled: this.crossZoneEnabled,
            deletionProtectionConfig: this.deletionProtectionConfig,
            loadBalancerBillingConfig: this.loadBalancerBillingConfig,
            loadBalancerName: this.loadBalancerName,
            loadBalancerType: this.loadBalancerType,
            modificationProtectionConfig: this.modificationProtectionConfig,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            trafficAffinityEnabled: this.trafficAffinityEnabled,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoadBalancerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosLoadBalancer {
    /**
     * @stability external
     */
    export interface DeletionProtectionConfigProperty {
        /**
         * @Property enabled: Specifies whether to enable deletion protection. Valid values:
     * true: yes
     * false (default): no
         */
        readonly enabled: string | ros.IResolvable;
        /**
         * @Property reason: The reason why the deletion protection feature is enabled or disabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
         */
        readonly reason?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DeletionProtectionConfigProperty`
 *
 * @param properties - the TypeScript properties of a `DeletionProtectionConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_DeletionProtectionConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enabled', ros.requiredValidator)(properties.enabled));
    errors.collect(ros.propertyValidator('enabled', ros.validateString)(properties.enabled));
    errors.collect(ros.propertyValidator('reason', ros.validateString)(properties.reason));
    return errors.wrap('supplied properties not correct for "DeletionProtectionConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer.DeletionProtectionConfig` resource
 *
 * @param properties - the TypeScript properties of a `DeletionProtectionConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer.DeletionProtectionConfig` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerDeletionProtectionConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_DeletionProtectionConfigPropertyValidator(properties).assertSuccess();
    return {
      Enabled: ros.stringToRosTemplate(properties.enabled),
      Reason: ros.stringToRosTemplate(properties.reason),
    };
}

export namespace RosLoadBalancer {
    /**
     * @stability external
     */
    export interface LoadBalancerAddressesProperty {
        /**
         * @Property allocationId: The ID of the elastic IP address (EIP) that is associated with the Internet-facing NLB instance.
         */
        readonly allocationId: string | ros.IResolvable;
        /**
         * @Property privateIPv4Address: The private IP address.
         */
        readonly privateIPv4Address?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LoadBalancerAddressesProperty`
 *
 * @param properties - the TypeScript properties of a `LoadBalancerAddressesProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_LoadBalancerAddressesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('allocationId', ros.requiredValidator)(properties.allocationId));
    errors.collect(ros.propertyValidator('allocationId', ros.validateString)(properties.allocationId));
    errors.collect(ros.propertyValidator('privateIPv4Address', ros.validateString)(properties.privateIPv4Address));
    return errors.wrap('supplied properties not correct for "LoadBalancerAddressesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer.LoadBalancerAddresses` resource
 *
 * @param properties - the TypeScript properties of a `LoadBalancerAddressesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer.LoadBalancerAddresses` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerLoadBalancerAddressesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_LoadBalancerAddressesPropertyValidator(properties).assertSuccess();
    return {
      AllocationId: ros.stringToRosTemplate(properties.allocationId),
      PrivateIPv4Address: ros.stringToRosTemplate(properties.privateIPv4Address),
    };
}

export namespace RosLoadBalancer {
    /**
     * @stability external
     */
    export interface LoadBalancerBillingConfigProperty {
        /**
         * @Property payType: The billing method of the NLB instance.
         */
        readonly payType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LoadBalancerBillingConfigProperty`
 *
 * @param properties - the TypeScript properties of a `LoadBalancerBillingConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_LoadBalancerBillingConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    return errors.wrap('supplied properties not correct for "LoadBalancerBillingConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer.LoadBalancerBillingConfig` resource
 *
 * @param properties - the TypeScript properties of a `LoadBalancerBillingConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer.LoadBalancerBillingConfig` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerLoadBalancerBillingConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_LoadBalancerBillingConfigPropertyValidator(properties).assertSuccess();
    return {
      PayType: ros.stringToRosTemplate(properties.payType),
    };
}

export namespace RosLoadBalancer {
    /**
     * @stability external
     */
    export interface ModificationProtectionConfigProperty {
        /**
         * @Property status: Specifies whether to enable the configuration read-only mode. Valid values:
     * NonProtection: does not enable the configuration read-only mode. You cannot set the Reason parameter. If the Reason parameter is set, the value is cleared.
     * ConsoleProtection: enables the configuration read-only mode. You can set the Reason parameter.
         */
        readonly status: string | ros.IResolvable;
        /**
         * @Property reason: The reason why the configuration read-only mode is enabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
         */
        readonly reason?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ModificationProtectionConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ModificationProtectionConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_ModificationProtectionConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.requiredValidator)(properties.status));
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('reason', ros.validateString)(properties.reason));
    return errors.wrap('supplied properties not correct for "ModificationProtectionConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer.ModificationProtectionConfig` resource
 *
 * @param properties - the TypeScript properties of a `ModificationProtectionConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer.ModificationProtectionConfig` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerModificationProtectionConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_ModificationProtectionConfigPropertyValidator(properties).assertSuccess();
    return {
      Status: ros.stringToRosTemplate(properties.status),
      Reason: ros.stringToRosTemplate(properties.reason),
    };
}

export namespace RosLoadBalancer {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer.Tags` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosLoadBalancer {
    /**
     * @stability external
     */
    export interface ZoneMappingsProperty {
        /**
         * @Property zoneId: The ID of the zone to which the NLB instance belongs.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property allocationId: The ID of the elastic IP address (EIP) that is associated with the Internet-facing NLB instance.
         */
        readonly allocationId?: string | ros.IResolvable;
        /**
         * @Property loadBalancerAddresses: Load balancer addresses. This property has higher priority than AllocationId and EipType in ZoneMappings.
         */
        readonly loadBalancerAddresses?: Array<RosLoadBalancer.LoadBalancerAddressesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property privateIPv4Address: The private IP address.
         */
        readonly privateIPv4Address?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ZoneMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `ZoneMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_ZoneMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('allocationId', ros.validateString)(properties.allocationId));
    if(properties.loadBalancerAddresses && (Array.isArray(properties.loadBalancerAddresses) || (typeof properties.loadBalancerAddresses) === 'string')) {
        errors.collect(ros.propertyValidator('loadBalancerAddresses', ros.validateLength)({
            data: properties.loadBalancerAddresses.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('loadBalancerAddresses', ros.listValidator(RosLoadBalancer_LoadBalancerAddressesPropertyValidator))(properties.loadBalancerAddresses));
    errors.collect(ros.propertyValidator('privateIPv4Address', ros.validateString)(properties.privateIPv4Address));
    return errors.wrap('supplied properties not correct for "ZoneMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer.ZoneMappings` resource
 *
 * @param properties - the TypeScript properties of a `ZoneMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLB::LoadBalancer.ZoneMappings` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerZoneMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_ZoneMappingsPropertyValidator(properties).assertSuccess();
    return {
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      AllocationId: ros.stringToRosTemplate(properties.allocationId),
      LoadBalancerAddresses: ros.listMapper(rosLoadBalancerLoadBalancerAddressesPropertyToRosTemplate)(properties.loadBalancerAddresses),
      PrivateIPv4Address: ros.stringToRosTemplate(properties.privateIPv4Address),
    };
}

/**
 * Properties for defining a `ALIYUN::NLB::ServerGroup`
 */
export interface RosServerGroupProps {

    /**
     * @Property healthCheckConfig: Health Check Config
     */
    readonly healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;

    /**
     * @Property serverGroupName: Name of ServerGroup
     */
    readonly serverGroupName: string | ros.IResolvable;

    /**
     * @Property vpcId: ID of VPC
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property addressIpVersion: IP version of address
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * @Property connectionDrainEnabled: Whether to enable graceful connection interruption
     */
    readonly connectionDrainEnabled?: boolean | ros.IResolvable;

    /**
     * @Property connectionDrainTimeout: Time of graceful connection interruption
     */
    readonly connectionDrainTimeout?: number | ros.IResolvable;

    /**
     * @Property persistenceEnabled: Whether to enable session persistence
     */
    readonly persistenceEnabled?: boolean | ros.IResolvable;

    /**
     * @Property persistenceTimeout: Time of session persistence
     */
    readonly persistenceTimeout?: number | ros.IResolvable;

    /**
     * @Property preserveClientIpEnabled: Whether to enable the client address retention function
     */
    readonly preserveClientIpEnabled?: boolean | ros.IResolvable;

    /**
     * @Property protocol: Protocol of ServerGroup
     */
    readonly protocol?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: undefined
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property scheduler: undefined
     */
    readonly scheduler?: string | ros.IResolvable;

    /**
     * @Property serverGroupType: Type of ServerGroup
     */
    readonly serverGroupType?: string | ros.IResolvable;

    /**
     * @Property servers: undefined
     */
    readonly servers?: Array<RosServerGroup.ServersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosServerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosServerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.scheduler && (typeof properties.scheduler) !== 'object') {
        errors.collect(ros.propertyValidator('scheduler', ros.validateAllowedValues)({
          data: properties.scheduler,
          allowedValues: ["Rr","Wrr","Sch","Tch","Qch"],
        }));
    }
    errors.collect(ros.propertyValidator('scheduler', ros.validateString)(properties.scheduler));
    if(properties.addressIpVersion && (typeof properties.addressIpVersion) !== 'object') {
        errors.collect(ros.propertyValidator('addressIpVersion', ros.validateAllowedValues)({
          data: properties.addressIpVersion,
          allowedValues: ["Ipv4","Ipv6"],
        }));
    }
    errors.collect(ros.propertyValidator('addressIpVersion', ros.validateString)(properties.addressIpVersion));
    if(properties.servers && (Array.isArray(properties.servers) || (typeof properties.servers) === 'string')) {
        errors.collect(ros.propertyValidator('servers', ros.validateLength)({
            data: properties.servers.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('servers', ros.listValidator(RosServerGroup_ServersPropertyValidator))(properties.servers));
    errors.collect(ros.propertyValidator('preserveClientIpEnabled', ros.validateBoolean)(properties.preserveClientIpEnabled));
    if(properties.serverGroupType && (typeof properties.serverGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('serverGroupType', ros.validateAllowedValues)({
          data: properties.serverGroupType,
          allowedValues: ["Instance","Ip"],
        }));
    }
    errors.collect(ros.propertyValidator('serverGroupType', ros.validateString)(properties.serverGroupType));
    errors.collect(ros.propertyValidator('persistenceEnabled', ros.validateBoolean)(properties.persistenceEnabled));
    errors.collect(ros.propertyValidator('connectionDrainEnabled', ros.validateBoolean)(properties.connectionDrainEnabled));
    if(properties.connectionDrainTimeout && (typeof properties.connectionDrainTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('connectionDrainTimeout', ros.validateRange)({
            data: properties.connectionDrainTimeout,
            min: 10,
            max: 900,
          }));
    }
    errors.collect(ros.propertyValidator('connectionDrainTimeout', ros.validateNumber)(properties.connectionDrainTimeout));
    if(properties.persistenceTimeout && (typeof properties.persistenceTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('persistenceTimeout', ros.validateRange)({
            data: properties.persistenceTimeout,
            min: 0,
            max: 3600,
          }));
    }
    errors.collect(ros.propertyValidator('persistenceTimeout', ros.validateNumber)(properties.persistenceTimeout));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('healthCheckConfig', ros.requiredValidator)(properties.healthCheckConfig));
    errors.collect(ros.propertyValidator('healthCheckConfig', RosServerGroup_HealthCheckConfigPropertyValidator)(properties.healthCheckConfig));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["TCP","UDP","TCPSSL"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('serverGroupName', ros.requiredValidator)(properties.serverGroupName));
    errors.collect(ros.propertyValidator('serverGroupName', ros.validateString)(properties.serverGroupName));
    return errors.wrap('supplied properties not correct for "RosServerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLB::ServerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosServerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLB::ServerGroup` resource.
 */
// @ts-ignore TS6133
function rosServerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      HealthCheckConfig: rosServerGroupHealthCheckConfigPropertyToRosTemplate(properties.healthCheckConfig),
      ServerGroupName: ros.stringToRosTemplate(properties.serverGroupName),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      AddressIPVersion: ros.stringToRosTemplate(properties.addressIpVersion),
      ConnectionDrainEnabled: ros.booleanToRosTemplate(properties.connectionDrainEnabled),
      ConnectionDrainTimeout: ros.numberToRosTemplate(properties.connectionDrainTimeout),
      PersistenceEnabled: ros.booleanToRosTemplate(properties.persistenceEnabled),
      PersistenceTimeout: ros.numberToRosTemplate(properties.persistenceTimeout),
      PreserveClientIpEnabled: ros.booleanToRosTemplate(properties.preserveClientIpEnabled),
      Protocol: ros.stringToRosTemplate(properties.protocol),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Scheduler: ros.stringToRosTemplate(properties.scheduler),
      ServerGroupType: ros.stringToRosTemplate(properties.serverGroupType),
      Servers: ros.listMapper(rosServerGroupServersPropertyToRosTemplate)(properties.servers),
    };
}

/**
 * A ROS template type:  `ALIYUN::NLB::ServerGroup`
 */
export class RosServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLB::ServerGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ServerGroupId: ID of ServerGroup
     */
    public readonly attrServerGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property healthCheckConfig: Health Check Config
     */
    public healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;

    /**
     * @Property serverGroupName: Name of ServerGroup
     */
    public serverGroupName: string | ros.IResolvable;

    /**
     * @Property vpcId: ID of VPC
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property addressIpVersion: IP version of address
     */
    public addressIpVersion: string | ros.IResolvable | undefined;

    /**
     * @Property connectionDrainEnabled: Whether to enable graceful connection interruption
     */
    public connectionDrainEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property connectionDrainTimeout: Time of graceful connection interruption
     */
    public connectionDrainTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property persistenceEnabled: Whether to enable session persistence
     */
    public persistenceEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property persistenceTimeout: Time of session persistence
     */
    public persistenceTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property preserveClientIpEnabled: Whether to enable the client address retention function
     */
    public preserveClientIpEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property protocol: Protocol of ServerGroup
     */
    public protocol: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: undefined
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property scheduler: undefined
     */
    public scheduler: string | ros.IResolvable | undefined;

    /**
     * @Property serverGroupType: Type of ServerGroup
     */
    public serverGroupType: string | ros.IResolvable | undefined;

    /**
     * @Property servers: undefined
     */
    public servers: Array<RosServerGroup.ServersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::NLB::ServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServerGroupId = this.getAtt('ServerGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.healthCheckConfig = props.healthCheckConfig;
        this.serverGroupName = props.serverGroupName;
        this.vpcId = props.vpcId;
        this.addressIpVersion = props.addressIpVersion;
        this.connectionDrainEnabled = props.connectionDrainEnabled;
        this.connectionDrainTimeout = props.connectionDrainTimeout;
        this.persistenceEnabled = props.persistenceEnabled;
        this.persistenceTimeout = props.persistenceTimeout;
        this.preserveClientIpEnabled = props.preserveClientIpEnabled;
        this.protocol = props.protocol;
        this.resourceGroupId = props.resourceGroupId;
        this.scheduler = props.scheduler;
        this.serverGroupType = props.serverGroupType;
        this.servers = props.servers;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            healthCheckConfig: this.healthCheckConfig,
            serverGroupName: this.serverGroupName,
            vpcId: this.vpcId,
            addressIpVersion: this.addressIpVersion,
            connectionDrainEnabled: this.connectionDrainEnabled,
            connectionDrainTimeout: this.connectionDrainTimeout,
            persistenceEnabled: this.persistenceEnabled,
            persistenceTimeout: this.persistenceTimeout,
            preserveClientIpEnabled: this.preserveClientIpEnabled,
            protocol: this.protocol,
            resourceGroupId: this.resourceGroupId,
            scheduler: this.scheduler,
            serverGroupType: this.serverGroupType,
            servers: this.servers,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosServerGroup {
    /**
     * @stability external
     */
    export interface HealthCheckConfigProperty {
        /**
         * @Property healthCheckInterval: Health check interval
         */
        readonly healthCheckInterval?: number | ros.IResolvable;
        /**
         * @Property healthCheckUrl: Url for health check
         */
        readonly healthCheckUrl?: string | ros.IResolvable;
        /**
         * @Property healthCheckConnectPort: Port of health check
         */
        readonly healthCheckConnectPort?: number | ros.IResolvable;
        /**
         * @Property unhealthyThreshold: Determine the health check status of the backend server from success to fail.
         */
        readonly unhealthyThreshold?: number | ros.IResolvable;
        /**
         * @Property httpCheckMethod: When the health check protocol is http or https type, the selected health check detection method
         */
        readonly httpCheckMethod: string | ros.IResolvable;
        /**
         * @Property healthyThreshold: Determine the health check status of the backend server from fail to success.
         */
        readonly healthyThreshold?: number | ros.IResolvable;
        /**
         * @Property healthCheckConnectTimeout: Maximum timeout for each health check response
         */
        readonly healthCheckConnectTimeout?: number | ros.IResolvable;
        /**
         * @Property healthCheckDomain: Domain name for health check
         */
        readonly healthCheckDomain?: string | ros.IResolvable;
        /**
         * @Property healthCheckEnabled: Whether to open health check
         */
        readonly healthCheckEnabled?: boolean | ros.IResolvable;
        /**
         * @Property healthCheckHttpCode: undefined
         */
        readonly healthCheckHttpCode?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property healthCheckType: Type of health check
         */
        readonly healthCheckType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HealthCheckConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosServerGroup_HealthCheckConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.healthCheckInterval && (typeof properties.healthCheckInterval) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckInterval', ros.validateRange)({
            data: properties.healthCheckInterval,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckInterval', ros.validateNumber)(properties.healthCheckInterval));
    errors.collect(ros.propertyValidator('healthCheckUrl', ros.validateString)(properties.healthCheckUrl));
    if(properties.healthCheckConnectPort && (typeof properties.healthCheckConnectPort) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckConnectPort', ros.validateRange)({
            data: properties.healthCheckConnectPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckConnectPort', ros.validateNumber)(properties.healthCheckConnectPort));
    if(properties.unhealthyThreshold && (typeof properties.unhealthyThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateRange)({
            data: properties.unhealthyThreshold,
            min: 2,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateNumber)(properties.unhealthyThreshold));
    errors.collect(ros.propertyValidator('httpCheckMethod', ros.requiredValidator)(properties.httpCheckMethod));
    errors.collect(ros.propertyValidator('httpCheckMethod', ros.validateString)(properties.httpCheckMethod));
    if(properties.healthyThreshold && (typeof properties.healthyThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('healthyThreshold', ros.validateRange)({
            data: properties.healthyThreshold,
            min: 2,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('healthyThreshold', ros.validateNumber)(properties.healthyThreshold));
    if(properties.healthCheckConnectTimeout && (typeof properties.healthCheckConnectTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckConnectTimeout', ros.validateRange)({
            data: properties.healthCheckConnectTimeout,
            min: 1,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckConnectTimeout', ros.validateNumber)(properties.healthCheckConnectTimeout));
    errors.collect(ros.propertyValidator('healthCheckDomain', ros.validateString)(properties.healthCheckDomain));
    errors.collect(ros.propertyValidator('healthCheckEnabled', ros.validateBoolean)(properties.healthCheckEnabled));
    errors.collect(ros.propertyValidator('healthCheckHttpCode', ros.listValidator(ros.validateString))(properties.healthCheckHttpCode));
    if(properties.healthCheckType && (typeof properties.healthCheckType) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckType', ros.validateAllowedValues)({
          data: properties.healthCheckType,
          allowedValues: ["Tcp","Http"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckType', ros.validateString)(properties.healthCheckType));
    return errors.wrap('supplied properties not correct for "HealthCheckConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLB::ServerGroup.HealthCheckConfig` resource
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLB::ServerGroup.HealthCheckConfig` resource.
 */
// @ts-ignore TS6133
function rosServerGroupHealthCheckConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerGroup_HealthCheckConfigPropertyValidator(properties).assertSuccess();
    return {
      HealthCheckInterval: ros.numberToRosTemplate(properties.healthCheckInterval),
      HealthCheckUrl: ros.stringToRosTemplate(properties.healthCheckUrl),
      HealthCheckConnectPort: ros.numberToRosTemplate(properties.healthCheckConnectPort),
      UnhealthyThreshold: ros.numberToRosTemplate(properties.unhealthyThreshold),
      HttpCheckMethod: ros.stringToRosTemplate(properties.httpCheckMethod),
      HealthyThreshold: ros.numberToRosTemplate(properties.healthyThreshold),
      HealthCheckConnectTimeout: ros.numberToRosTemplate(properties.healthCheckConnectTimeout),
      HealthCheckDomain: ros.stringToRosTemplate(properties.healthCheckDomain),
      HealthCheckEnabled: ros.booleanToRosTemplate(properties.healthCheckEnabled),
      HealthCheckHttpCode: ros.listMapper(ros.stringToRosTemplate)(properties.healthCheckHttpCode),
      HealthCheckType: ros.stringToRosTemplate(properties.healthCheckType),
    };
}

export namespace RosServerGroup {
    /**
     * @stability external
     */
    export interface ServersProperty {
        /**
         * @Property serverType: Type of backend server
         */
        readonly serverType: string | ros.IResolvable;
        /**
         * @Property description: undefined
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverId: Id of server
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property serverIp: undefined
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property port: Port used by the backend server
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property weight: Weight of the backend server
         */
        readonly weight?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ServersProperty`
 *
 * @param properties - the TypeScript properties of a `ServersProperty`
 *
 * @returns the result of the validation.
 */
function RosServerGroup_ServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverType', ros.requiredValidator)(properties.serverType));
    if(properties.serverType && (typeof properties.serverType) !== 'object') {
        errors.collect(ros.propertyValidator('serverType', ros.validateAllowedValues)({
          data: properties.serverType,
          allowedValues: ["Ecs","Eni","Eci","Ip"],
        }));
    }
    errors.collect(ros.propertyValidator('serverType', ros.validateString)(properties.serverType));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('serverIp', ros.validateString)(properties.serverIp));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "ServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLB::ServerGroup.Servers` resource
 *
 * @param properties - the TypeScript properties of a `ServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLB::ServerGroup.Servers` resource.
 */
// @ts-ignore TS6133
function rosServerGroupServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerGroup_ServersPropertyValidator(properties).assertSuccess();
    return {
      ServerType: ros.stringToRosTemplate(properties.serverType),
      Description: ros.stringToRosTemplate(properties.description),
      ServerId: ros.stringToRosTemplate(properties.serverId),
      ServerIp: ros.stringToRosTemplate(properties.serverIp),
      Port: ros.numberToRosTemplate(properties.port),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}
