"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosVpnRouteEntry = exports.RosVpnPbrRouteEntry = exports.RosVpnGateway = exports.RosVpnConnection = exports.RosVpcPeerConnection = exports.RosVirtualBorderRouter = exports.RosSslVpnServer = exports.RosSslVpnClientCert = exports.RosSnatEntry = exports.RosRouterInterface = exports.RosRouteTableAssociation = exports.RosRouteTable = exports.RosPeeringRouterInterfaceConnection = exports.RosPeeringRouterInterfaceBinding = exports.RosNetworkAclAssociation = exports.RosNetworkAcl = exports.RosNatIp = exports.RosNatGateway = exports.RosIpv6InternetBandwidth = exports.RosIpv6Gateway = exports.RosIpsecServer = exports.RosGrantInstanceToCen = exports.RosFlowLog = exports.RosEIPSegment = exports.RosEIPPro = exports.RosEIPAssociation = exports.RosEIP = exports.RosDhcpOptionsSetAttachment = exports.RosDhcpOptionsSet = exports.RosCustomerGateway = exports.RosCommonBandwidthPackageIp = exports.RosCommonBandwidthPackage = exports.RosBgpPeer = exports.RosBgpNetwork = exports.RosBgpGroup = exports.RosAnycastEIPAssociation = exports.RosAnycastEIP = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAnycastEIPProps`
 *
 * @param properties - the TypeScript properties of a `RosAnycastEIPProps`
 *
 * @returns the result of the validation.
 */
function RosAnycastEIPPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.serviceLocation && (typeof properties.serviceLocation) !== 'object') {
        errors.collect(ros.propertyValidator('serviceLocation', ros.validateAllowedValues)({
            data: properties.serviceLocation,
            allowedValues: ["international"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceLocation', ros.validateString)(properties.serviceLocation));
    if (properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
            data: properties.instanceChargeType,
            allowedValues: ["PostPaid"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if (properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
            data: properties.internetChargeType,
            allowedValues: ["PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    return errors.wrap('supplied properties not correct for "RosAnycastEIPProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::AnycastEIP` resource
 *
 * @param properties - the TypeScript properties of a `RosAnycastEIPProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::AnycastEIP` resource.
 */
// @ts-ignore TS6133
function rosAnycastEIPPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAnycastEIPPropsValidator(properties).assertSuccess();
    }
    return {
        Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
        Description: ros.stringToRosTemplate(properties.description),
        InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        Name: ros.stringToRosTemplate(properties.name),
        ServiceLocation: ros.stringToRosTemplate(properties.serviceLocation),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::AnycastEIP`
 */
class RosAnycastEIP extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::AnycastEIP`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAnycastEIP.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAnycastId = this.getAtt('AnycastId');
        this.attrIpAddress = this.getAtt('IpAddress');
        this.attrName = this.getAtt('Name');
        this.attrOrderId = this.getAtt('OrderId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.description = props.description;
        this.instanceChargeType = props.instanceChargeType;
        this.internetChargeType = props.internetChargeType;
        this.name = props.name;
        this.serviceLocation = props.serviceLocation;
    }
    get rosProperties() {
        return {
            bandwidth: this.bandwidth,
            description: this.description,
            instanceChargeType: this.instanceChargeType,
            internetChargeType: this.internetChargeType,
            name: this.name,
            serviceLocation: this.serviceLocation,
        };
    }
    renderProperties(props) {
        return rosAnycastEIPPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAnycastEIP = RosAnycastEIP;
/**
 * The resource type name for this resource class.
 */
RosAnycastEIP.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::AnycastEIP";
/**
 * Determine whether the given properties match those of a `RosAnycastEIPAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosAnycastEIPAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosAnycastEIPAssociationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bindInstanceId', ros.requiredValidator)(properties.bindInstanceId));
    errors.collect(ros.propertyValidator('bindInstanceId', ros.validateString)(properties.bindInstanceId));
    errors.collect(ros.propertyValidator('bindInstanceRegionId', ros.requiredValidator)(properties.bindInstanceRegionId));
    errors.collect(ros.propertyValidator('bindInstanceRegionId', ros.validateString)(properties.bindInstanceRegionId));
    errors.collect(ros.propertyValidator('bindInstanceType', ros.requiredValidator)(properties.bindInstanceType));
    errors.collect(ros.propertyValidator('bindInstanceType', ros.validateString)(properties.bindInstanceType));
    errors.collect(ros.propertyValidator('anycastId', ros.requiredValidator)(properties.anycastId));
    errors.collect(ros.propertyValidator('anycastId', ros.validateString)(properties.anycastId));
    return errors.wrap('supplied properties not correct for "RosAnycastEIPAssociationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::AnycastEIPAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosAnycastEIPAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::AnycastEIPAssociation` resource.
 */
// @ts-ignore TS6133
function rosAnycastEIPAssociationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAnycastEIPAssociationPropsValidator(properties).assertSuccess();
    }
    return {
        AnycastId: ros.stringToRosTemplate(properties.anycastId),
        BindInstanceId: ros.stringToRosTemplate(properties.bindInstanceId),
        BindInstanceRegionId: ros.stringToRosTemplate(properties.bindInstanceRegionId),
        BindInstanceType: ros.stringToRosTemplate(properties.bindInstanceType),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::AnycastEIPAssociation`
 */
class RosAnycastEIPAssociation extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::AnycastEIPAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAnycastEIPAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAnycastId = this.getAtt('AnycastId');
        this.attrBindInstanceId = this.getAtt('BindInstanceId');
        this.attrBindInstanceRegionId = this.getAtt('BindInstanceRegionId');
        this.attrBindInstanceType = this.getAtt('BindInstanceType');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.anycastId = props.anycastId;
        this.bindInstanceId = props.bindInstanceId;
        this.bindInstanceRegionId = props.bindInstanceRegionId;
        this.bindInstanceType = props.bindInstanceType;
    }
    get rosProperties() {
        return {
            anycastId: this.anycastId,
            bindInstanceId: this.bindInstanceId,
            bindInstanceRegionId: this.bindInstanceRegionId,
            bindInstanceType: this.bindInstanceType,
        };
    }
    renderProperties(props) {
        return rosAnycastEIPAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAnycastEIPAssociation = RosAnycastEIPAssociation;
/**
 * The resource type name for this resource class.
 */
RosAnycastEIPAssociation.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::AnycastEIPAssociation";
/**
 * Determine whether the given properties match those of a `RosBgpGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosBgpGroupProps`
 *
 * @returns the result of the validation.
 */
function RosBgpGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('localAsn', ros.validateNumber)(properties.localAsn));
    errors.collect(ros.propertyValidator('authKey', ros.validateString)(properties.authKey));
    errors.collect(ros.propertyValidator('routerId', ros.requiredValidator)(properties.routerId));
    errors.collect(ros.propertyValidator('routerId', ros.validateString)(properties.routerId));
    errors.collect(ros.propertyValidator('peerAsn', ros.requiredValidator)(properties.peerAsn));
    errors.collect(ros.propertyValidator('peerAsn', ros.validateNumber)(properties.peerAsn));
    errors.collect(ros.propertyValidator('isFakeAsn', ros.validateBoolean)(properties.isFakeAsn));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosBgpGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::BgpGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosBgpGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::BgpGroup` resource.
 */
// @ts-ignore TS6133
function rosBgpGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBgpGroupPropsValidator(properties).assertSuccess();
    }
    return {
        PeerAsn: ros.numberToRosTemplate(properties.peerAsn),
        RouterId: ros.stringToRosTemplate(properties.routerId),
        AuthKey: ros.stringToRosTemplate(properties.authKey),
        Description: ros.stringToRosTemplate(properties.description),
        IsFakeAsn: ros.booleanToRosTemplate(properties.isFakeAsn),
        LocalAsn: ros.numberToRosTemplate(properties.localAsn),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::BgpGroup`
 */
class RosBgpGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::BgpGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBgpGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBgpGroupId = this.getAtt('BgpGroupId');
        this.attrName = this.getAtt('Name');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.peerAsn = props.peerAsn;
        this.routerId = props.routerId;
        this.authKey = props.authKey;
        this.description = props.description;
        this.isFakeAsn = props.isFakeAsn;
        this.localAsn = props.localAsn;
        this.name = props.name;
    }
    get rosProperties() {
        return {
            peerAsn: this.peerAsn,
            routerId: this.routerId,
            authKey: this.authKey,
            description: this.description,
            isFakeAsn: this.isFakeAsn,
            localAsn: this.localAsn,
            name: this.name,
        };
    }
    renderProperties(props) {
        return rosBgpGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBgpGroup = RosBgpGroup;
/**
 * The resource type name for this resource class.
 */
RosBgpGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::BgpGroup";
/**
 * Determine whether the given properties match those of a `RosBgpNetworkProps`
 *
 * @param properties - the TypeScript properties of a `RosBgpNetworkProps`
 *
 * @returns the result of the validation.
 */
function RosBgpNetworkPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dstCidrBlock', ros.requiredValidator)(properties.dstCidrBlock));
    errors.collect(ros.propertyValidator('dstCidrBlock', ros.validateString)(properties.dstCidrBlock));
    errors.collect(ros.propertyValidator('routerId', ros.requiredValidator)(properties.routerId));
    errors.collect(ros.propertyValidator('routerId', ros.validateString)(properties.routerId));
    return errors.wrap('supplied properties not correct for "RosBgpNetworkProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::BgpNetwork` resource
 *
 * @param properties - the TypeScript properties of a `RosBgpNetworkProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::BgpNetwork` resource.
 */
// @ts-ignore TS6133
function rosBgpNetworkPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBgpNetworkPropsValidator(properties).assertSuccess();
    }
    return {
        DstCidrBlock: ros.stringToRosTemplate(properties.dstCidrBlock),
        RouterId: ros.stringToRosTemplate(properties.routerId),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::BgpNetwork`
 */
class RosBgpNetwork extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::BgpNetwork`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBgpNetwork.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDstCidrBlock = this.getAtt('DstCidrBlock');
        this.attrRouterId = this.getAtt('RouterId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dstCidrBlock = props.dstCidrBlock;
        this.routerId = props.routerId;
    }
    get rosProperties() {
        return {
            dstCidrBlock: this.dstCidrBlock,
            routerId: this.routerId,
        };
    }
    renderProperties(props) {
        return rosBgpNetworkPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBgpNetwork = RosBgpNetwork;
/**
 * The resource type name for this resource class.
 */
RosBgpNetwork.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::BgpNetwork";
/**
 * Determine whether the given properties match those of a `RosBgpPeerProps`
 *
 * @param properties - the TypeScript properties of a `RosBgpPeerProps`
 *
 * @returns the result of the validation.
 */
function RosBgpPeerPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('peerIpAddress', ros.validateString)(properties.peerIpAddress));
    errors.collect(ros.propertyValidator('enableBfd', ros.validateBoolean)(properties.enableBfd));
    errors.collect(ros.propertyValidator('bgpGroupId', ros.requiredValidator)(properties.bgpGroupId));
    errors.collect(ros.propertyValidator('bgpGroupId', ros.validateString)(properties.bgpGroupId));
    return errors.wrap('supplied properties not correct for "RosBgpPeerProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::BgpPeer` resource
 *
 * @param properties - the TypeScript properties of a `RosBgpPeerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::BgpPeer` resource.
 */
// @ts-ignore TS6133
function rosBgpPeerPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBgpPeerPropsValidator(properties).assertSuccess();
    }
    return {
        BgpGroupId: ros.stringToRosTemplate(properties.bgpGroupId),
        EnableBfd: ros.booleanToRosTemplate(properties.enableBfd),
        PeerIpAddress: ros.stringToRosTemplate(properties.peerIpAddress),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::BgpPeer`
 */
class RosBgpPeer extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::BgpPeer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBgpPeer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBgpPeerId = this.getAtt('BgpPeerId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bgpGroupId = props.bgpGroupId;
        this.enableBfd = props.enableBfd;
        this.peerIpAddress = props.peerIpAddress;
    }
    get rosProperties() {
        return {
            bgpGroupId: this.bgpGroupId,
            enableBfd: this.enableBfd,
            peerIpAddress: this.peerIpAddress,
        };
    }
    renderProperties(props) {
        return rosBgpPeerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBgpPeer = RosBgpPeer;
/**
 * The resource type name for this resource class.
 */
RosBgpPeer.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::BgpPeer";
/**
 * Determine whether the given properties match those of a `RosCommonBandwidthPackageProps`
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackageProps`
 *
 * @returns the result of the validation.
 */
function RosCommonBandwidthPackagePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 2,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zone', ros.validateString)(properties.zone));
    errors.collect(ros.propertyValidator('isp', ros.validateString)(properties.isp));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if (properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 2,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if (properties.ratio && (typeof properties.ratio) !== 'object') {
        errors.collect(ros.propertyValidator('ratio', ros.validateRange)({
            data: properties.ratio,
            min: 0,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('ratio', ros.validateNumber)(properties.ratio));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosCommonBandwidthPackage_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    if (properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCommonBandwidthPackageProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackage` resource
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackage` resource.
 */
// @ts-ignore TS6133
function rosCommonBandwidthPackagePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCommonBandwidthPackagePropsValidator(properties).assertSuccess();
    }
    return {
        Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
        Description: ros.stringToRosTemplate(properties.description),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        ISP: ros.stringToRosTemplate(properties.isp),
        Name: ros.stringToRosTemplate(properties.name),
        Ratio: ros.numberToRosTemplate(properties.ratio),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        Tags: ros.listMapper(rosCommonBandwidthPackageTagsPropertyToRosTemplate)(properties.tags),
        Zone: ros.stringToRosTemplate(properties.zone),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::CommonBandwidthPackage`
 */
class RosCommonBandwidthPackage extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::CommonBandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCommonBandwidthPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBandwidthPackageId = this.getAtt('BandwidthPackageId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.description = props.description;
        this.internetChargeType = props.internetChargeType;
        this.isp = props.isp;
        this.name = props.name;
        this.ratio = props.ratio;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.zone = props.zone;
    }
    get rosProperties() {
        return {
            bandwidth: this.bandwidth,
            description: this.description,
            internetChargeType: this.internetChargeType,
            isp: this.isp,
            name: this.name,
            ratio: this.ratio,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            zone: this.zone,
        };
    }
    renderProperties(props) {
        return rosCommonBandwidthPackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCommonBandwidthPackage = RosCommonBandwidthPackage;
/**
 * The resource type name for this resource class.
 */
RosCommonBandwidthPackage.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::CommonBandwidthPackage";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosCommonBandwidthPackage_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackage.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackage.Tags` resource.
 */
// @ts-ignore TS6133
function rosCommonBandwidthPackageTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCommonBandwidthPackage_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosCommonBandwidthPackageIpProps`
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackageIpProps`
 *
 * @returns the result of the validation.
 */
function RosCommonBandwidthPackageIpPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('eips', ros.requiredValidator)(properties.eips));
    errors.collect(ros.propertyValidator('eips', ros.listValidator(RosCommonBandwidthPackageIp_EipsPropertyValidator))(properties.eips));
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.requiredValidator)(properties.bandwidthPackageId));
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.validateString)(properties.bandwidthPackageId));
    return errors.wrap('supplied properties not correct for "RosCommonBandwidthPackageIpProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackageIp` resource
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackageIpProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackageIp` resource.
 */
// @ts-ignore TS6133
function rosCommonBandwidthPackageIpPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCommonBandwidthPackageIpPropsValidator(properties).assertSuccess();
    }
    return {
        BandwidthPackageId: ros.stringToRosTemplate(properties.bandwidthPackageId),
        Eips: ros.listMapper(rosCommonBandwidthPackageIpEipsPropertyToRosTemplate)(properties.eips),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::CommonBandwidthPackageIp`
 */
class RosCommonBandwidthPackageIp extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::CommonBandwidthPackageIp`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCommonBandwidthPackageIp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAllocationIds = this.getAtt('AllocationIds');
        this.attrIpAddresses = this.getAtt('IpAddresses');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidthPackageId = props.bandwidthPackageId;
        this.eips = props.eips;
    }
    get rosProperties() {
        return {
            bandwidthPackageId: this.bandwidthPackageId,
            eips: this.eips,
        };
    }
    renderProperties(props) {
        return rosCommonBandwidthPackageIpPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCommonBandwidthPackageIp = RosCommonBandwidthPackageIp;
/**
 * The resource type name for this resource class.
 */
RosCommonBandwidthPackageIp.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::CommonBandwidthPackageIp";
/**
 * Determine whether the given properties match those of a `EipsProperty`
 *
 * @param properties - the TypeScript properties of a `EipsProperty`
 *
 * @returns the result of the validation.
 */
function RosCommonBandwidthPackageIp_EipsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 0,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('allocationId', ros.requiredValidator)(properties.allocationId));
    errors.collect(ros.propertyValidator('allocationId', ros.validateString)(properties.allocationId));
    return errors.wrap('supplied properties not correct for "EipsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackageIp.Eips` resource
 *
 * @param properties - the TypeScript properties of a `EipsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackageIp.Eips` resource.
 */
// @ts-ignore TS6133
function rosCommonBandwidthPackageIpEipsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCommonBandwidthPackageIp_EipsPropertyValidator(properties).assertSuccess();
    return {
        Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
        AllocationId: ros.stringToRosTemplate(properties.allocationId),
    };
}
/**
 * Determine whether the given properties match those of a `RosCustomerGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomerGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosCustomerGatewayPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 2,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('ipAddress', ros.requiredValidator)(properties.ipAddress));
    errors.collect(ros.propertyValidator('ipAddress', ros.validateString)(properties.ipAddress));
    if (properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCustomerGatewayProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::CustomerGateway` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomerGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::CustomerGateway` resource.
 */
// @ts-ignore TS6133
function rosCustomerGatewayPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCustomerGatewayPropsValidator(properties).assertSuccess();
    }
    return {
        IpAddress: ros.stringToRosTemplate(properties.ipAddress),
        Description: ros.stringToRosTemplate(properties.description),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::CustomerGateway`
 */
class RosCustomerGateway extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::CustomerGateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCustomerGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCustomerGatewayId = this.getAtt('CustomerGatewayId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipAddress = props.ipAddress;
        this.description = props.description;
        this.name = props.name;
    }
    get rosProperties() {
        return {
            ipAddress: this.ipAddress,
            description: this.description,
            name: this.name,
        };
    }
    renderProperties(props) {
        return rosCustomerGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCustomerGateway = RosCustomerGateway;
/**
 * The resource type name for this resource class.
 */
RosCustomerGateway.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::CustomerGateway";
/**
 * Determine whether the given properties match those of a `RosDhcpOptionsSetProps`
 *
 * @param properties - the TypeScript properties of a `RosDhcpOptionsSetProps`
 *
 * @returns the result of the validation.
 */
function RosDhcpOptionsSetPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('dhcpOptionsSetName', ros.validateString)(properties.dhcpOptionsSetName));
    errors.collect(ros.propertyValidator('dhcpOptionsSetDescription', ros.validateString)(properties.dhcpOptionsSetDescription));
    if (properties.domainNameServers && (Array.isArray(properties.domainNameServers) || (typeof properties.domainNameServers) === 'string')) {
        errors.collect(ros.propertyValidator('domainNameServers', ros.validateLength)({
            data: properties.domainNameServers.length,
            min: 0,
            max: 4,
        }));
    }
    errors.collect(ros.propertyValidator('domainNameServers', ros.listValidator(ros.validateString))(properties.domainNameServers));
    return errors.wrap('supplied properties not correct for "RosDhcpOptionsSetProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::DhcpOptionsSet` resource
 *
 * @param properties - the TypeScript properties of a `RosDhcpOptionsSetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::DhcpOptionsSet` resource.
 */
// @ts-ignore TS6133
function rosDhcpOptionsSetPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDhcpOptionsSetPropsValidator(properties).assertSuccess();
    }
    return {
        DhcpOptionsSetDescription: ros.stringToRosTemplate(properties.dhcpOptionsSetDescription),
        DhcpOptionsSetName: ros.stringToRosTemplate(properties.dhcpOptionsSetName),
        DomainName: ros.stringToRosTemplate(properties.domainName),
        DomainNameServers: ros.listMapper(ros.stringToRosTemplate)(properties.domainNameServers),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::DhcpOptionsSet`
 */
class RosDhcpOptionsSet extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::DhcpOptionsSet`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDhcpOptionsSet.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDhcpOptionsSetId = this.getAtt('DhcpOptionsSetId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dhcpOptionsSetDescription = props.dhcpOptionsSetDescription;
        this.dhcpOptionsSetName = props.dhcpOptionsSetName;
        this.domainName = props.domainName;
        this.domainNameServers = props.domainNameServers;
    }
    get rosProperties() {
        return {
            dhcpOptionsSetDescription: this.dhcpOptionsSetDescription,
            dhcpOptionsSetName: this.dhcpOptionsSetName,
            domainName: this.domainName,
            domainNameServers: this.domainNameServers,
        };
    }
    renderProperties(props) {
        return rosDhcpOptionsSetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDhcpOptionsSet = RosDhcpOptionsSet;
/**
 * The resource type name for this resource class.
 */
RosDhcpOptionsSet.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::DhcpOptionsSet";
/**
 * Determine whether the given properties match those of a `RosDhcpOptionsSetAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosDhcpOptionsSetAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosDhcpOptionsSetAttachmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dhcpOptionsSetId', ros.requiredValidator)(properties.dhcpOptionsSetId));
    errors.collect(ros.propertyValidator('dhcpOptionsSetId', ros.validateString)(properties.dhcpOptionsSetId));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    return errors.wrap('supplied properties not correct for "RosDhcpOptionsSetAttachmentProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::DhcpOptionsSetAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosDhcpOptionsSetAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::DhcpOptionsSetAttachment` resource.
 */
// @ts-ignore TS6133
function rosDhcpOptionsSetAttachmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDhcpOptionsSetAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
        DhcpOptionsSetId: ros.stringToRosTemplate(properties.dhcpOptionsSetId),
        VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::DhcpOptionsSetAttachment`
 */
class RosDhcpOptionsSetAttachment extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::DhcpOptionsSetAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDhcpOptionsSetAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDhcpOptionsSetId = this.getAtt('DhcpOptionsSetId');
        this.attrVpcId = this.getAtt('VpcId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dhcpOptionsSetId = props.dhcpOptionsSetId;
        this.vpcId = props.vpcId;
    }
    get rosProperties() {
        return {
            dhcpOptionsSetId: this.dhcpOptionsSetId,
            vpcId: this.vpcId,
        };
    }
    renderProperties(props) {
        return rosDhcpOptionsSetAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDhcpOptionsSetAttachment = RosDhcpOptionsSetAttachment;
/**
 * The resource type name for this resource class.
 */
RosDhcpOptionsSetAttachment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::DhcpOptionsSetAttachment";
/**
 * Determine whether the given properties match those of a `RosEIPProps`
 *
 * @param properties - the TypeScript properties of a `RosEIPProps`
 *
 * @returns the result of the validation.
 */
function RosEIPPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
            data: properties.instanceChargeType,
            allowedValues: ["Postpaid", "Prepaid"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if (properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
            data: properties.pricingCycle,
            allowedValues: ["Month", "Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('isp', ros.validateString)(properties.isp));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if (properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
            data: properties.internetChargeType,
            allowedValues: ["PayByBandwidth", "PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('netmode', ros.validateString)(properties.netmode));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosEIP_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosEIPProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIP` resource
 *
 * @param properties - the TypeScript properties of a `RosEIPProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIP` resource.
 */
// @ts-ignore TS6133
function rosEIPPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosEIPPropsValidator(properties).assertSuccess();
    }
    return {
        AutoPay: ros.booleanToRosTemplate(properties.autoPay),
        Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
        DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
        Description: ros.stringToRosTemplate(properties.description),
        InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        Isp: ros.stringToRosTemplate(properties.isp),
        Name: ros.stringToRosTemplate(properties.name),
        Netmode: ros.stringToRosTemplate(properties.netmode),
        Period: ros.numberToRosTemplate(properties.period),
        PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        Tags: ros.listMapper(rosEIPTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::EIP`
 */
class RosEIP extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::EIP`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosEIP.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAllocationId = this.getAtt('AllocationId');
        this.attrEipAddress = this.getAtt('EipAddress');
        this.attrIsp = this.getAtt('Isp');
        this.attrOrderId = this.getAtt('OrderId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoPay = props.autoPay;
        this.bandwidth = props.bandwidth;
        this.deletionProtection = props.deletionProtection;
        this.description = props.description;
        this.instanceChargeType = props.instanceChargeType;
        this.internetChargeType = props.internetChargeType;
        this.isp = props.isp;
        this.name = props.name;
        this.netmode = props.netmode;
        this.period = props.period;
        this.pricingCycle = props.pricingCycle;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            autoPay: this.autoPay,
            bandwidth: this.bandwidth,
            deletionProtection: this.deletionProtection,
            description: this.description,
            instanceChargeType: this.instanceChargeType,
            internetChargeType: this.internetChargeType,
            isp: this.isp,
            name: this.name,
            netmode: this.netmode,
            period: this.period,
            pricingCycle: this.pricingCycle,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosEIPPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosEIP = RosEIP;
/**
 * The resource type name for this resource class.
 */
RosEIP.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIP";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosEIP_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIP.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIP.Tags` resource.
 */
// @ts-ignore TS6133
function rosEIPTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosEIP_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosEIPAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosEIPAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosEIPAssociationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if (properties.mode && (typeof properties.mode) !== 'object') {
        errors.collect(ros.propertyValidator('mode', ros.validateAllowedValues)({
            data: properties.mode,
            allowedValues: ["NAT", "MULTI_BINDED", "BINDED"],
        }));
    }
    errors.collect(ros.propertyValidator('mode', ros.validateString)(properties.mode));
    errors.collect(ros.propertyValidator('allocationId', ros.requiredValidator)(properties.allocationId));
    errors.collect(ros.propertyValidator('allocationId', ros.validateString)(properties.allocationId));
    return errors.wrap('supplied properties not correct for "RosEIPAssociationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosEIPAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPAssociation` resource.
 */
// @ts-ignore TS6133
function rosEIPAssociationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosEIPAssociationPropsValidator(properties).assertSuccess();
    }
    return {
        AllocationId: ros.stringToRosTemplate(properties.allocationId),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        Mode: ros.stringToRosTemplate(properties.mode),
        PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::EIPAssociation`
 */
class RosEIPAssociation extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::EIPAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosEIPAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAllocationId = this.getAtt('AllocationId');
        this.attrEipAddress = this.getAtt('EipAddress');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.allocationId = props.allocationId;
        this.instanceId = props.instanceId;
        this.mode = props.mode;
        this.privateIpAddress = props.privateIpAddress;
    }
    get rosProperties() {
        return {
            allocationId: this.allocationId,
            instanceId: this.instanceId,
            mode: this.mode,
            privateIpAddress: this.privateIpAddress,
        };
    }
    renderProperties(props) {
        return rosEIPAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosEIPAssociation = RosEIPAssociation;
/**
 * The resource type name for this resource class.
 */
RosEIPAssociation.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIPAssociation";
/**
 * Determine whether the given properties match those of a `RosEIPProProps`
 *
 * @param properties - the TypeScript properties of a `RosEIPProProps`
 *
 * @returns the result of the validation.
 */
function RosEIPProPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if (properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
            data: properties.instanceChargeType,
            allowedValues: ["Postpaid", "Prepaid"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if (properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
            data: properties.pricingCycle,
            allowedValues: ["Month", "Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('isp', ros.validateString)(properties.isp));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if (properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
            data: properties.internetChargeType,
            allowedValues: ["PayByBandwidth", "PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('netmode', ros.validateString)(properties.netmode));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('ipAddress', ros.validateString)(properties.ipAddress));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosEIPPro_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosEIPProProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPPro` resource
 *
 * @param properties - the TypeScript properties of a `RosEIPProProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPPro` resource.
 */
// @ts-ignore TS6133
function rosEIPProPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosEIPProPropsValidator(properties).assertSuccess();
    }
    return {
        AutoPay: ros.booleanToRosTemplate(properties.autoPay),
        Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
        DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
        Description: ros.stringToRosTemplate(properties.description),
        InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        IpAddress: ros.stringToRosTemplate(properties.ipAddress),
        ISP: ros.stringToRosTemplate(properties.isp),
        Name: ros.stringToRosTemplate(properties.name),
        Netmode: ros.stringToRosTemplate(properties.netmode),
        Period: ros.numberToRosTemplate(properties.period),
        PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        Tags: ros.listMapper(rosEIPProTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::EIPPro`
 */
class RosEIPPro extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::EIPPro`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosEIPPro.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAllocationId = this.getAtt('AllocationId');
        this.attrEipAddress = this.getAtt('EipAddress');
        this.attrIsp = this.getAtt('ISP');
        this.attrOrderId = this.getAtt('OrderId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoPay = props.autoPay;
        this.bandwidth = props.bandwidth;
        this.deletionProtection = props.deletionProtection;
        this.description = props.description;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceId = props.instanceId;
        this.internetChargeType = props.internetChargeType;
        this.ipAddress = props.ipAddress;
        this.isp = props.isp;
        this.name = props.name;
        this.netmode = props.netmode;
        this.period = props.period;
        this.pricingCycle = props.pricingCycle;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            autoPay: this.autoPay,
            bandwidth: this.bandwidth,
            deletionProtection: this.deletionProtection,
            description: this.description,
            instanceChargeType: this.instanceChargeType,
            instanceId: this.instanceId,
            internetChargeType: this.internetChargeType,
            ipAddress: this.ipAddress,
            isp: this.isp,
            name: this.name,
            netmode: this.netmode,
            period: this.period,
            pricingCycle: this.pricingCycle,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosEIPProPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosEIPPro = RosEIPPro;
/**
 * The resource type name for this resource class.
 */
RosEIPPro.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIPPro";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosEIPPro_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPPro.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPPro.Tags` resource.
 */
// @ts-ignore TS6133
function rosEIPProTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosEIPPro_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosEIPSegmentProps`
 *
 * @param properties - the TypeScript properties of a `RosEIPSegmentProps`
 *
 * @returns the result of the validation.
 */
function RosEIPSegmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('eipMask', ros.requiredValidator)(properties.eipMask));
    if (properties.eipMask && (typeof properties.eipMask) !== 'object') {
        errors.collect(ros.propertyValidator('eipMask', ros.validateAllowedValues)({
            data: properties.eipMask,
            allowedValues: [28, 27, 26, 25, 24],
        }));
    }
    errors.collect(ros.propertyValidator('eipMask', ros.validateNumber)(properties.eipMask));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.netmode && (typeof properties.netmode) !== 'object') {
        errors.collect(ros.propertyValidator('netmode', ros.validateAllowedValues)({
            data: properties.netmode,
            allowedValues: ["public", "hybrid"],
        }));
    }
    errors.collect(ros.propertyValidator('netmode', ros.validateString)(properties.netmode));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if (properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
            data: properties.internetChargeType,
            allowedValues: ["PayByBandwidth", "PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    return errors.wrap('supplied properties not correct for "RosEIPSegmentProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPSegment` resource
 *
 * @param properties - the TypeScript properties of a `RosEIPSegmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPSegment` resource.
 */
// @ts-ignore TS6133
function rosEIPSegmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosEIPSegmentPropsValidator(properties).assertSuccess();
    }
    return {
        EipMask: ros.numberToRosTemplate(properties.eipMask),
        Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        Netmode: ros.stringToRosTemplate(properties.netmode),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::EIPSegment`
 */
class RosEIPSegment extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::EIPSegment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosEIPSegment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEipAddresses = this.getAtt('EipAddresses');
        this.attrEipSegmentInstanceId = this.getAtt('EipSegmentInstanceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.eipMask = props.eipMask;
        this.bandwidth = props.bandwidth;
        this.internetChargeType = props.internetChargeType;
        this.netmode = props.netmode;
        this.resourceGroupId = props.resourceGroupId;
    }
    get rosProperties() {
        return {
            eipMask: this.eipMask,
            bandwidth: this.bandwidth,
            internetChargeType: this.internetChargeType,
            netmode: this.netmode,
            resourceGroupId: this.resourceGroupId,
        };
    }
    renderProperties(props) {
        return rosEIPSegmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosEIPSegment = RosEIPSegment;
/**
 * The resource type name for this resource class.
 */
RosEIPSegment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIPSegment";
/**
 * Determine whether the given properties match those of a `RosFlowLogProps`
 *
 * @param properties - the TypeScript properties of a `RosFlowLogProps`
 *
 * @returns the result of the validation.
 */
function RosFlowLogPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('flowLogName', ros.validateString)(properties.flowLogName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('logStoreName', ros.requiredValidator)(properties.logStoreName));
    errors.collect(ros.propertyValidator('logStoreName', ros.validateString)(properties.logStoreName));
    errors.collect(ros.propertyValidator('resourceId', ros.requiredValidator)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('resourceType', ros.requiredValidator)(properties.resourceType));
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    errors.collect(ros.propertyValidator('trafficType', ros.requiredValidator)(properties.trafficType));
    errors.collect(ros.propertyValidator('trafficType', ros.validateString)(properties.trafficType));
    return errors.wrap('supplied properties not correct for "RosFlowLogProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::FlowLog` resource
 *
 * @param properties - the TypeScript properties of a `RosFlowLogProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::FlowLog` resource.
 */
// @ts-ignore TS6133
function rosFlowLogPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosFlowLogPropsValidator(properties).assertSuccess();
    }
    return {
        LogStoreName: ros.stringToRosTemplate(properties.logStoreName),
        ProjectName: ros.stringToRosTemplate(properties.projectName),
        ResourceId: ros.stringToRosTemplate(properties.resourceId),
        ResourceType: ros.stringToRosTemplate(properties.resourceType),
        TrafficType: ros.stringToRosTemplate(properties.trafficType),
        Description: ros.stringToRosTemplate(properties.description),
        FlowLogName: ros.stringToRosTemplate(properties.flowLogName),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::FlowLog`
 */
class RosFlowLog extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::FlowLog`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosFlowLog.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrFlowLogId = this.getAtt('FlowLogId');
        this.attrFlowLogName = this.getAtt('FlowLogName');
        this.attrLogStoreName = this.getAtt('LogStoreName');
        this.attrProjectName = this.getAtt('ProjectName');
        this.attrResourceId = this.getAtt('ResourceId');
        this.attrResourceType = this.getAtt('ResourceType');
        this.attrTrafficType = this.getAtt('TrafficType');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.logStoreName = props.logStoreName;
        this.projectName = props.projectName;
        this.resourceId = props.resourceId;
        this.resourceType = props.resourceType;
        this.trafficType = props.trafficType;
        this.description = props.description;
        this.flowLogName = props.flowLogName;
    }
    get rosProperties() {
        return {
            logStoreName: this.logStoreName,
            projectName: this.projectName,
            resourceId: this.resourceId,
            resourceType: this.resourceType,
            trafficType: this.trafficType,
            description: this.description,
            flowLogName: this.flowLogName,
        };
    }
    renderProperties(props) {
        return rosFlowLogPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosFlowLog = RosFlowLog;
/**
 * The resource type name for this resource class.
 */
RosFlowLog.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::FlowLog";
/**
 * Determine whether the given properties match those of a `RosGrantInstanceToCenProps`
 *
 * @param properties - the TypeScript properties of a `RosGrantInstanceToCenProps`
 *
 * @returns the result of the validation.
 */
function RosGrantInstanceToCenPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('cenOwnerId', ros.requiredValidator)(properties.cenOwnerId));
    errors.collect(ros.propertyValidator('cenOwnerId', ros.validateNumber)(properties.cenOwnerId));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    if (properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
            data: properties.instanceType,
            allowedValues: ["CCN", "VBR", "VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    return errors.wrap('supplied properties not correct for "RosGrantInstanceToCenProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::GrantInstanceToCen` resource
 *
 * @param properties - the TypeScript properties of a `RosGrantInstanceToCenProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::GrantInstanceToCen` resource.
 */
// @ts-ignore TS6133
function rosGrantInstanceToCenPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosGrantInstanceToCenPropsValidator(properties).assertSuccess();
    }
    return {
        CenId: ros.stringToRosTemplate(properties.cenId),
        CenOwnerId: ros.numberToRosTemplate(properties.cenOwnerId),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        InstanceType: ros.stringToRosTemplate(properties.instanceType),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::GrantInstanceToCen`
 */
class RosGrantInstanceToCen extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::GrantInstanceToCen`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosGrantInstanceToCen.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenId = this.getAtt('CenId');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.cenOwnerId = props.cenOwnerId;
        this.instanceId = props.instanceId;
        this.instanceType = props.instanceType;
    }
    get rosProperties() {
        return {
            cenId: this.cenId,
            cenOwnerId: this.cenOwnerId,
            instanceId: this.instanceId,
            instanceType: this.instanceType,
        };
    }
    renderProperties(props) {
        return rosGrantInstanceToCenPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosGrantInstanceToCen = RosGrantInstanceToCen;
/**
 * The resource type name for this resource class.
 */
RosGrantInstanceToCen.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::GrantInstanceToCen";
/**
 * Determine whether the given properties match those of a `RosIpsecServerProps`
 *
 * @param properties - the TypeScript properties of a `RosIpsecServerProps`
 *
 * @returns the result of the validation.
 */
function RosIpsecServerPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('localSubnet', ros.requiredValidator)(properties.localSubnet));
    errors.collect(ros.propertyValidator('localSubnet', ros.validateString)(properties.localSubnet));
    errors.collect(ros.propertyValidator('effectImmediately', ros.validateBoolean)(properties.effectImmediately));
    errors.collect(ros.propertyValidator('clientIpPool', ros.requiredValidator)(properties.clientIpPool));
    errors.collect(ros.propertyValidator('clientIpPool', ros.validateString)(properties.clientIpPool));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.requiredValidator)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.validateString)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('ipsecConfig', RosIpsecServer_IpsecConfigPropertyValidator)(properties.ipsecConfig));
    errors.collect(ros.propertyValidator('psk', ros.validateString)(properties.psk));
    errors.collect(ros.propertyValidator('ikeConfig', RosIpsecServer_IkeConfigPropertyValidator)(properties.ikeConfig));
    errors.collect(ros.propertyValidator('ipsecServerName', ros.validateString)(properties.ipsecServerName));
    errors.collect(ros.propertyValidator('pskEnabled', ros.validateBoolean)(properties.pskEnabled));
    return errors.wrap('supplied properties not correct for "RosIpsecServerProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::IpsecServer` resource
 *
 * @param properties - the TypeScript properties of a `RosIpsecServerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::IpsecServer` resource.
 */
// @ts-ignore TS6133
function rosIpsecServerPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosIpsecServerPropsValidator(properties).assertSuccess();
    }
    return {
        ClientIpPool: ros.stringToRosTemplate(properties.clientIpPool),
        LocalSubnet: ros.stringToRosTemplate(properties.localSubnet),
        VpnGatewayId: ros.stringToRosTemplate(properties.vpnGatewayId),
        EffectImmediately: ros.booleanToRosTemplate(properties.effectImmediately),
        IkeConfig: rosIpsecServerIkeConfigPropertyToRosTemplate(properties.ikeConfig),
        IpsecConfig: rosIpsecServerIpsecConfigPropertyToRosTemplate(properties.ipsecConfig),
        IpsecServerName: ros.stringToRosTemplate(properties.ipsecServerName),
        Psk: ros.stringToRosTemplate(properties.psk),
        PskEnabled: ros.booleanToRosTemplate(properties.pskEnabled),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::IpsecServer`
 */
class RosIpsecServer extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::IpsecServer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosIpsecServer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIpsecServerId = this.getAtt('IpsecServerId');
        this.attrIpsecServerName = this.getAtt('IpsecServerName');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clientIpPool = props.clientIpPool;
        this.localSubnet = props.localSubnet;
        this.vpnGatewayId = props.vpnGatewayId;
        this.effectImmediately = props.effectImmediately;
        this.ikeConfig = props.ikeConfig;
        this.ipsecConfig = props.ipsecConfig;
        this.ipsecServerName = props.ipsecServerName;
        this.psk = props.psk;
        this.pskEnabled = props.pskEnabled;
    }
    get rosProperties() {
        return {
            clientIpPool: this.clientIpPool,
            localSubnet: this.localSubnet,
            vpnGatewayId: this.vpnGatewayId,
            effectImmediately: this.effectImmediately,
            ikeConfig: this.ikeConfig,
            ipsecConfig: this.ipsecConfig,
            ipsecServerName: this.ipsecServerName,
            psk: this.psk,
            pskEnabled: this.pskEnabled,
        };
    }
    renderProperties(props) {
        return rosIpsecServerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosIpsecServer = RosIpsecServer;
/**
 * The resource type name for this resource class.
 */
RosIpsecServer.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::IpsecServer";
/**
 * Determine whether the given properties match those of a `IkeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `IkeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosIpsecServer_IkeConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ikeAuthAlg', ros.validateString)(properties.ikeAuthAlg));
    errors.collect(ros.propertyValidator('localId', ros.validateString)(properties.localId));
    errors.collect(ros.propertyValidator('ikeEncAlg', ros.validateString)(properties.ikeEncAlg));
    errors.collect(ros.propertyValidator('ikeVersion', ros.validateString)(properties.ikeVersion));
    errors.collect(ros.propertyValidator('ikeMode', ros.validateString)(properties.ikeMode));
    errors.collect(ros.propertyValidator('ikeLifetime', ros.validateNumber)(properties.ikeLifetime));
    errors.collect(ros.propertyValidator('remoteId', ros.validateString)(properties.remoteId));
    errors.collect(ros.propertyValidator('ikePfs', ros.validateString)(properties.ikePfs));
    return errors.wrap('supplied properties not correct for "IkeConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::IpsecServer.IkeConfig` resource
 *
 * @param properties - the TypeScript properties of a `IkeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::IpsecServer.IkeConfig` resource.
 */
// @ts-ignore TS6133
function rosIpsecServerIkeConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosIpsecServer_IkeConfigPropertyValidator(properties).assertSuccess();
    return {
        IkeAuthAlg: ros.stringToRosTemplate(properties.ikeAuthAlg),
        LocalId: ros.stringToRosTemplate(properties.localId),
        IkeEncAlg: ros.stringToRosTemplate(properties.ikeEncAlg),
        IkeVersion: ros.stringToRosTemplate(properties.ikeVersion),
        IkeMode: ros.stringToRosTemplate(properties.ikeMode),
        IkeLifetime: ros.numberToRosTemplate(properties.ikeLifetime),
        RemoteId: ros.stringToRosTemplate(properties.remoteId),
        IkePfs: ros.stringToRosTemplate(properties.ikePfs),
    };
}
/**
 * Determine whether the given properties match those of a `IpsecConfigProperty`
 *
 * @param properties - the TypeScript properties of a `IpsecConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosIpsecServer_IpsecConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ipsecPfs', ros.validateString)(properties.ipsecPfs));
    errors.collect(ros.propertyValidator('ipsecEncAlg', ros.validateString)(properties.ipsecEncAlg));
    errors.collect(ros.propertyValidator('ipsecAuthAlg', ros.validateString)(properties.ipsecAuthAlg));
    errors.collect(ros.propertyValidator('ipsecLifetime', ros.validateNumber)(properties.ipsecLifetime));
    return errors.wrap('supplied properties not correct for "IpsecConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::IpsecServer.IpsecConfig` resource
 *
 * @param properties - the TypeScript properties of a `IpsecConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::IpsecServer.IpsecConfig` resource.
 */
// @ts-ignore TS6133
function rosIpsecServerIpsecConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosIpsecServer_IpsecConfigPropertyValidator(properties).assertSuccess();
    return {
        IpsecPfs: ros.stringToRosTemplate(properties.ipsecPfs),
        IpsecEncAlg: ros.stringToRosTemplate(properties.ipsecEncAlg),
        IpsecAuthAlg: ros.stringToRosTemplate(properties.ipsecAuthAlg),
        IpsecLifetime: ros.numberToRosTemplate(properties.ipsecLifetime),
    };
}
/**
 * Determine whether the given properties match those of a `RosIpv6GatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosIpv6GatewayProps`
 *
 * @returns the result of the validation.
 */
function RosIpv6GatewayPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosIpv6Gateway_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosIpv6GatewayProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6Gateway` resource
 *
 * @param properties - the TypeScript properties of a `RosIpv6GatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6Gateway` resource.
 */
// @ts-ignore TS6133
function rosIpv6GatewayPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosIpv6GatewayPropsValidator(properties).assertSuccess();
    }
    return {
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        Description: ros.stringToRosTemplate(properties.description),
        Name: ros.stringToRosTemplate(properties.name),
        Spec: ros.stringToRosTemplate(properties.spec),
        Tags: ros.listMapper(rosIpv6GatewayTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::Ipv6Gateway`
 */
class RosIpv6Gateway extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::Ipv6Gateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosIpv6Gateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIpv6GatewayId = this.getAtt('Ipv6GatewayId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.description = props.description;
        this.name = props.name;
        this.spec = props.spec;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            vpcId: this.vpcId,
            description: this.description,
            name: this.name,
            spec: this.spec,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosIpv6GatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosIpv6Gateway = RosIpv6Gateway;
/**
 * The resource type name for this resource class.
 */
RosIpv6Gateway.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::Ipv6Gateway";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosIpv6Gateway_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6Gateway.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6Gateway.Tags` resource.
 */
// @ts-ignore TS6133
function rosIpv6GatewayTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosIpv6Gateway_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosIpv6InternetBandwidthProps`
 *
 * @param properties - the TypeScript properties of a `RosIpv6InternetBandwidthProps`
 *
 * @returns the result of the validation.
 */
function RosIpv6InternetBandwidthPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if (properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 1,
            max: 5000,
        }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('ipv6AddressId', ros.requiredValidator)(properties.ipv6AddressId));
    errors.collect(ros.propertyValidator('ipv6AddressId', ros.validateString)(properties.ipv6AddressId));
    errors.collect(ros.propertyValidator('ipv6GatewayId', ros.requiredValidator)(properties.ipv6GatewayId));
    errors.collect(ros.propertyValidator('ipv6GatewayId', ros.validateString)(properties.ipv6GatewayId));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosIpv6InternetBandwidth_TagsPropertyValidator))(properties.tags));
    if (properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
            data: properties.internetChargeType,
            allowedValues: ["PayByTraffic", "PayByBandwidth"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    return errors.wrap('supplied properties not correct for "RosIpv6InternetBandwidthProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6InternetBandwidth` resource
 *
 * @param properties - the TypeScript properties of a `RosIpv6InternetBandwidthProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6InternetBandwidth` resource.
 */
// @ts-ignore TS6133
function rosIpv6InternetBandwidthPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosIpv6InternetBandwidthPropsValidator(properties).assertSuccess();
    }
    return {
        Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
        Ipv6AddressId: ros.stringToRosTemplate(properties.ipv6AddressId),
        Ipv6GatewayId: ros.stringToRosTemplate(properties.ipv6GatewayId),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        Tags: ros.listMapper(rosIpv6InternetBandwidthTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::Ipv6InternetBandwidth`
 */
class RosIpv6InternetBandwidth extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::Ipv6InternetBandwidth`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosIpv6InternetBandwidth.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInternetBandwidthId = this.getAtt('InternetBandwidthId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.ipv6AddressId = props.ipv6AddressId;
        this.ipv6GatewayId = props.ipv6GatewayId;
        this.internetChargeType = props.internetChargeType;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            bandwidth: this.bandwidth,
            ipv6AddressId: this.ipv6AddressId,
            ipv6GatewayId: this.ipv6GatewayId,
            internetChargeType: this.internetChargeType,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosIpv6InternetBandwidthPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosIpv6InternetBandwidth = RosIpv6InternetBandwidth;
/**
 * The resource type name for this resource class.
 */
RosIpv6InternetBandwidth.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::Ipv6InternetBandwidth";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosIpv6InternetBandwidth_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6InternetBandwidth.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6InternetBandwidth.Tags` resource.
 */
// @ts-ignore TS6133
function rosIpv6InternetBandwidthTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosIpv6InternetBandwidth_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosNatGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosNatGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosNatGatewayPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('natGatewayName', ros.validateString)(properties.natGatewayName));
    if (properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
            data: properties.instanceChargeType,
            allowedValues: ["PayAsYouGo", "PostPaid", "PayOnDemand", "Postpaid", "PostPay", "POSTPAY", "POST", "Subscription", "PrePaid", "Prepaid", "PrePay", "PREPAY", "PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if (properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
            data: properties.pricingCycle,
            allowedValues: ["Month", "Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('eipBindMode', ros.validateString)(properties.eipBindMode));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if (properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateAllowedValues)({
            data: properties.duration,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36],
        }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if (properties.natType && (typeof properties.natType) !== 'object') {
        errors.collect(ros.propertyValidator('natType', ros.validateAllowedValues)({
            data: properties.natType,
            allowedValues: ["Enhanced"],
        }));
    }
    errors.collect(ros.propertyValidator('natType', ros.validateString)(properties.natType));
    if (properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
            data: properties.internetChargeType,
            allowedValues: ["PayByLcu", "PayBySpec"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if (properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
            data: properties.networkType,
            allowedValues: ["internet", "intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosNatGateway_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosNatGatewayProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatGateway` resource
 *
 * @param properties - the TypeScript properties of a `RosNatGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatGateway` resource.
 */
// @ts-ignore TS6133
function rosNatGatewayPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosNatGatewayPropsValidator(properties).assertSuccess();
    }
    return {
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        AutoPay: ros.booleanToRosTemplate(properties.autoPay),
        DeletionForce: ros.booleanToRosTemplate(properties.deletionForce),
        DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
        Description: ros.stringToRosTemplate(properties.description),
        Duration: ros.numberToRosTemplate(properties.duration),
        EipBindMode: ros.stringToRosTemplate(properties.eipBindMode),
        InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        NatGatewayName: ros.stringToRosTemplate(properties.natGatewayName),
        NatType: ros.stringToRosTemplate(properties.natType),
        NetworkType: ros.stringToRosTemplate(properties.networkType),
        PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
        Tags: ros.listMapper(rosNatGatewayTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::NatGateway`
 */
class RosNatGateway extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::NatGateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosNatGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrForwardTableId = this.getAtt('ForwardTableId');
        this.attrNatGatewayId = this.getAtt('NatGatewayId');
        this.attrSNatTableId = this.getAtt('SNatTableId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.autoPay = props.autoPay;
        this.deletionForce = props.deletionForce;
        this.deletionProtection = props.deletionProtection;
        this.description = props.description;
        this.duration = props.duration;
        this.eipBindMode = props.eipBindMode;
        this.instanceChargeType = props.instanceChargeType;
        this.internetChargeType = props.internetChargeType;
        this.natGatewayName = props.natGatewayName;
        this.natType = props.natType;
        this.networkType = props.networkType;
        this.pricingCycle = props.pricingCycle;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            autoPay: this.autoPay,
            deletionForce: this.deletionForce,
            deletionProtection: this.deletionProtection,
            description: this.description,
            duration: this.duration,
            eipBindMode: this.eipBindMode,
            instanceChargeType: this.instanceChargeType,
            internetChargeType: this.internetChargeType,
            natGatewayName: this.natGatewayName,
            natType: this.natType,
            networkType: this.networkType,
            pricingCycle: this.pricingCycle,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosNatGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNatGateway = RosNatGateway;
/**
 * The resource type name for this resource class.
 */
RosNatGateway.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NatGateway";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosNatGateway_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatGateway.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatGateway.Tags` resource.
 */
// @ts-ignore TS6133
function rosNatGatewayTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosNatGateway_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosNatIpProps`
 *
 * @param properties - the TypeScript properties of a `RosNatIpProps`
 *
 * @returns the result of the validation.
 */
function RosNatIpPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('natIp', ros.validateString)(properties.natIp));
    errors.collect(ros.propertyValidator('natIpCidr', ros.requiredValidator)(properties.natIpCidr));
    errors.collect(ros.propertyValidator('natIpCidr', ros.validateString)(properties.natIpCidr));
    errors.collect(ros.propertyValidator('natIpCidrId', ros.validateString)(properties.natIpCidrId));
    errors.collect(ros.propertyValidator('natIpDescription', ros.requiredValidator)(properties.natIpDescription));
    if (properties.natIpDescription && (Array.isArray(properties.natIpDescription) || (typeof properties.natIpDescription) === 'string')) {
        errors.collect(ros.propertyValidator('natIpDescription', ros.validateLength)({
            data: properties.natIpDescription.length,
            min: 2,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('natIpDescription', ros.validateString)(properties.natIpDescription));
    errors.collect(ros.propertyValidator('natIpName', ros.requiredValidator)(properties.natIpName));
    if (properties.natIpName && (Array.isArray(properties.natIpName) || (typeof properties.natIpName) === 'string')) {
        errors.collect(ros.propertyValidator('natIpName', ros.validateLength)({
            data: properties.natIpName.length,
            min: 2,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('natIpName', ros.validateString)(properties.natIpName));
    errors.collect(ros.propertyValidator('natGatewayId', ros.requiredValidator)(properties.natGatewayId));
    errors.collect(ros.propertyValidator('natGatewayId', ros.validateString)(properties.natGatewayId));
    return errors.wrap('supplied properties not correct for "RosNatIpProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatIp` resource
 *
 * @param properties - the TypeScript properties of a `RosNatIpProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatIp` resource.
 */
// @ts-ignore TS6133
function rosNatIpPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosNatIpPropsValidator(properties).assertSuccess();
    }
    return {
        NatGatewayId: ros.stringToRosTemplate(properties.natGatewayId),
        NatIpCidr: ros.stringToRosTemplate(properties.natIpCidr),
        NatIpDescription: ros.stringToRosTemplate(properties.natIpDescription),
        NatIpName: ros.stringToRosTemplate(properties.natIpName),
        NatIp: ros.stringToRosTemplate(properties.natIp),
        NatIpCidrId: ros.stringToRosTemplate(properties.natIpCidrId),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::NatIp`
 */
class RosNatIp extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::NatIp`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosNatIp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNatIp = this.getAtt('NatIp');
        this.attrNatIpId = this.getAtt('NatIpId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.natGatewayId = props.natGatewayId;
        this.natIpCidr = props.natIpCidr;
        this.natIpDescription = props.natIpDescription;
        this.natIpName = props.natIpName;
        this.natIp = props.natIp;
        this.natIpCidrId = props.natIpCidrId;
    }
    get rosProperties() {
        return {
            natGatewayId: this.natGatewayId,
            natIpCidr: this.natIpCidr,
            natIpDescription: this.natIpDescription,
            natIpName: this.natIpName,
            natIp: this.natIp,
            natIpCidrId: this.natIpCidrId,
        };
    }
    renderProperties(props) {
        return rosNatIpPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNatIp = RosNatIp;
/**
 * The resource type name for this resource class.
 */
RosNatIp.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NatIp";
/**
 * Determine whether the given properties match those of a `RosNetworkAclProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkAclPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.ingressAclEntries && (Array.isArray(properties.ingressAclEntries) || (typeof properties.ingressAclEntries) === 'string')) {
        errors.collect(ros.propertyValidator('ingressAclEntries', ros.validateLength)({
            data: properties.ingressAclEntries.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('ingressAclEntries', ros.listValidator(RosNetworkAcl_IngressAclEntriesPropertyValidator))(properties.ingressAclEntries));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if (properties.egressAclEntries && (Array.isArray(properties.egressAclEntries) || (typeof properties.egressAclEntries) === 'string')) {
        errors.collect(ros.propertyValidator('egressAclEntries', ros.validateLength)({
            data: properties.egressAclEntries.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('egressAclEntries', ros.listValidator(RosNetworkAcl_EgressAclEntriesPropertyValidator))(properties.egressAclEntries));
    errors.collect(ros.propertyValidator('networkAclName', ros.validateString)(properties.networkAclName));
    return errors.wrap('supplied properties not correct for "RosNetworkAclProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAcl` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAcl` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosNetworkAclPropsValidator(properties).assertSuccess();
    }
    return {
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        Description: ros.stringToRosTemplate(properties.description),
        EgressAclEntries: ros.listMapper(rosNetworkAclEgressAclEntriesPropertyToRosTemplate)(properties.egressAclEntries),
        IngressAclEntries: ros.listMapper(rosNetworkAclIngressAclEntriesPropertyToRosTemplate)(properties.ingressAclEntries),
        NetworkAclName: ros.stringToRosTemplate(properties.networkAclName),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::NetworkAcl`
 */
class RosNetworkAcl extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::NetworkAcl`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosNetworkAcl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkAclEntryName = this.getAtt('NetworkAclEntryName');
        this.attrNetworkAclId = this.getAtt('NetworkAclId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.description = props.description;
        this.egressAclEntries = props.egressAclEntries;
        this.ingressAclEntries = props.ingressAclEntries;
        this.networkAclName = props.networkAclName;
    }
    get rosProperties() {
        return {
            vpcId: this.vpcId,
            description: this.description,
            egressAclEntries: this.egressAclEntries,
            ingressAclEntries: this.ingressAclEntries,
            networkAclName: this.networkAclName,
        };
    }
    renderProperties(props) {
        return rosNetworkAclPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNetworkAcl = RosNetworkAcl;
/**
 * The resource type name for this resource class.
 */
RosNetworkAcl.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NetworkAcl";
/**
 * Determine whether the given properties match those of a `EgressAclEntriesProperty`
 *
 * @param properties - the TypeScript properties of a `EgressAclEntriesProperty`
 *
 * @returns the result of the validation.
 */
function RosNetworkAcl_EgressAclEntriesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policy', ros.requiredValidator)(properties.policy));
    if (properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
            data: properties.policy,
            allowedValues: ["accept", "drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('destinationCidrIp', ros.validateString)(properties.destinationCidrIp));
    if (properties.entryType && (typeof properties.entryType) !== 'object') {
        errors.collect(ros.propertyValidator('entryType', ros.validateAllowedValues)({
            data: properties.entryType,
            allowedValues: ["custom", "system"],
        }));
    }
    errors.collect(ros.propertyValidator('entryType', ros.validateString)(properties.entryType));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if (properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
            data: properties.protocol,
            allowedValues: ["icmp", "gre", "tcp", "udp", "all"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('networkAclEntryName', ros.validateString)(properties.networkAclEntryName));
    return errors.wrap('supplied properties not correct for "EgressAclEntriesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAcl.EgressAclEntries` resource
 *
 * @param properties - the TypeScript properties of a `EgressAclEntriesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAcl.EgressAclEntries` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclEgressAclEntriesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosNetworkAcl_EgressAclEntriesPropertyValidator(properties).assertSuccess();
    return {
        Policy: ros.stringToRosTemplate(properties.policy),
        Description: ros.stringToRosTemplate(properties.description),
        DestinationCidrIp: ros.stringToRosTemplate(properties.destinationCidrIp),
        EntryType: ros.stringToRosTemplate(properties.entryType),
        Port: ros.stringToRosTemplate(properties.port),
        Protocol: ros.stringToRosTemplate(properties.protocol),
        NetworkAclEntryName: ros.stringToRosTemplate(properties.networkAclEntryName),
    };
}
/**
 * Determine whether the given properties match those of a `IngressAclEntriesProperty`
 *
 * @param properties - the TypeScript properties of a `IngressAclEntriesProperty`
 *
 * @returns the result of the validation.
 */
function RosNetworkAcl_IngressAclEntriesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policy', ros.requiredValidator)(properties.policy));
    if (properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
            data: properties.policy,
            allowedValues: ["accept", "drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.entryType && (typeof properties.entryType) !== 'object') {
        errors.collect(ros.propertyValidator('entryType', ros.validateAllowedValues)({
            data: properties.entryType,
            allowedValues: ["custom", "system"],
        }));
    }
    errors.collect(ros.propertyValidator('entryType', ros.validateString)(properties.entryType));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('sourceCidrIp', ros.validateString)(properties.sourceCidrIp));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if (properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
            data: properties.protocol,
            allowedValues: ["icmp", "gre", "tcp", "udp", "all"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('networkAclEntryName', ros.validateString)(properties.networkAclEntryName));
    return errors.wrap('supplied properties not correct for "IngressAclEntriesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAcl.IngressAclEntries` resource
 *
 * @param properties - the TypeScript properties of a `IngressAclEntriesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAcl.IngressAclEntries` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclIngressAclEntriesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosNetworkAcl_IngressAclEntriesPropertyValidator(properties).assertSuccess();
    return {
        Policy: ros.stringToRosTemplate(properties.policy),
        Description: ros.stringToRosTemplate(properties.description),
        EntryType: ros.stringToRosTemplate(properties.entryType),
        Port: ros.stringToRosTemplate(properties.port),
        SourceCidrIp: ros.stringToRosTemplate(properties.sourceCidrIp),
        Protocol: ros.stringToRosTemplate(properties.protocol),
        NetworkAclEntryName: ros.stringToRosTemplate(properties.networkAclEntryName),
    };
}
/**
 * Determine whether the given properties match those of a `RosNetworkAclAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkAclAssociationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('networkAclId', ros.requiredValidator)(properties.networkAclId));
    errors.collect(ros.propertyValidator('networkAclId', ros.validateString)(properties.networkAclId));
    errors.collect(ros.propertyValidator('resources', ros.requiredValidator)(properties.resources));
    if (properties.resources && (Array.isArray(properties.resources) || (typeof properties.resources) === 'string')) {
        errors.collect(ros.propertyValidator('resources', ros.validateLength)({
            data: properties.resources.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('resources', ros.listValidator(RosNetworkAclAssociation_ResourcesPropertyValidator))(properties.resources));
    return errors.wrap('supplied properties not correct for "RosNetworkAclAssociationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAclAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAclAssociation` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclAssociationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosNetworkAclAssociationPropsValidator(properties).assertSuccess();
    }
    return {
        NetworkAclId: ros.stringToRosTemplate(properties.networkAclId),
        Resources: ros.listMapper(rosNetworkAclAssociationResourcesPropertyToRosTemplate)(properties.resources),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::NetworkAclAssociation`
 */
class RosNetworkAclAssociation extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::NetworkAclAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosNetworkAclAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkAclId = this.getAtt('NetworkAclId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.networkAclId = props.networkAclId;
        this.resources = props.resources;
    }
    get rosProperties() {
        return {
            networkAclId: this.networkAclId,
            resources: this.resources,
        };
    }
    renderProperties(props) {
        return rosNetworkAclAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNetworkAclAssociation = RosNetworkAclAssociation;
/**
 * The resource type name for this resource class.
 */
RosNetworkAclAssociation.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NetworkAclAssociation";
/**
 * Determine whether the given properties match those of a `ResourcesProperty`
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the result of the validation.
 */
function RosNetworkAclAssociation_ResourcesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceId', ros.requiredValidator)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    if (properties.resourceType && (typeof properties.resourceType) !== 'object') {
        errors.collect(ros.propertyValidator('resourceType', ros.validateAllowedValues)({
            data: properties.resourceType,
            allowedValues: ["VSwitch"],
        }));
    }
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    return errors.wrap('supplied properties not correct for "ResourcesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAclAssociation.Resources` resource
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAclAssociation.Resources` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclAssociationResourcesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosNetworkAclAssociation_ResourcesPropertyValidator(properties).assertSuccess();
    return {
        ResourceId: ros.stringToRosTemplate(properties.resourceId),
        ResourceType: ros.stringToRosTemplate(properties.resourceType),
    };
}
/**
 * Determine whether the given properties match those of a `RosPeeringRouterInterfaceBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosPeeringRouterInterfaceBindingProps`
 *
 * @returns the result of the validation.
 */
function RosPeeringRouterInterfaceBindingPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oppositeInterfaceId', ros.requiredValidator)(properties.oppositeInterfaceId));
    errors.collect(ros.propertyValidator('oppositeInterfaceId', ros.validateString)(properties.oppositeInterfaceId));
    errors.collect(ros.propertyValidator('oppositeInterfaceOwnerId', ros.validateString)(properties.oppositeInterfaceOwnerId));
    errors.collect(ros.propertyValidator('oppositeRouterId', ros.validateString)(properties.oppositeRouterId));
    errors.collect(ros.propertyValidator('routerInterfaceId', ros.requiredValidator)(properties.routerInterfaceId));
    errors.collect(ros.propertyValidator('routerInterfaceId', ros.validateString)(properties.routerInterfaceId));
    return errors.wrap('supplied properties not correct for "RosPeeringRouterInterfaceBindingProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::PeeringRouterInterfaceBinding` resource
 *
 * @param properties - the TypeScript properties of a `RosPeeringRouterInterfaceBindingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::PeeringRouterInterfaceBinding` resource.
 */
// @ts-ignore TS6133
function rosPeeringRouterInterfaceBindingPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosPeeringRouterInterfaceBindingPropsValidator(properties).assertSuccess();
    }
    return {
        OppositeInterfaceId: ros.stringToRosTemplate(properties.oppositeInterfaceId),
        RouterInterfaceId: ros.stringToRosTemplate(properties.routerInterfaceId),
        OppositeInterfaceOwnerId: ros.stringToRosTemplate(properties.oppositeInterfaceOwnerId),
        OppositeRouterId: ros.stringToRosTemplate(properties.oppositeRouterId),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::PeeringRouterInterfaceBinding`
 */
class RosPeeringRouterInterfaceBinding extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPeeringRouterInterfaceBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouterInterfaceId = this.getAtt('RouterInterfaceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.oppositeInterfaceId = props.oppositeInterfaceId;
        this.routerInterfaceId = props.routerInterfaceId;
        this.oppositeInterfaceOwnerId = props.oppositeInterfaceOwnerId;
        this.oppositeRouterId = props.oppositeRouterId;
    }
    get rosProperties() {
        return {
            oppositeInterfaceId: this.oppositeInterfaceId,
            routerInterfaceId: this.routerInterfaceId,
            oppositeInterfaceOwnerId: this.oppositeInterfaceOwnerId,
            oppositeRouterId: this.oppositeRouterId,
        };
    }
    renderProperties(props) {
        return rosPeeringRouterInterfaceBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPeeringRouterInterfaceBinding = RosPeeringRouterInterfaceBinding;
/**
 * The resource type name for this resource class.
 */
RosPeeringRouterInterfaceBinding.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::PeeringRouterInterfaceBinding";
/**
 * Determine whether the given properties match those of a `RosPeeringRouterInterfaceConnectionProps`
 *
 * @param properties - the TypeScript properties of a `RosPeeringRouterInterfaceConnectionProps`
 *
 * @returns the result of the validation.
 */
function RosPeeringRouterInterfaceConnectionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oppositeInterfaceId', ros.requiredValidator)(properties.oppositeInterfaceId));
    errors.collect(ros.propertyValidator('oppositeInterfaceId', ros.validateString)(properties.oppositeInterfaceId));
    errors.collect(ros.propertyValidator('routerInterfaceId', ros.requiredValidator)(properties.routerInterfaceId));
    errors.collect(ros.propertyValidator('routerInterfaceId', ros.validateString)(properties.routerInterfaceId));
    return errors.wrap('supplied properties not correct for "RosPeeringRouterInterfaceConnectionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::PeeringRouterInterfaceConnection` resource
 *
 * @param properties - the TypeScript properties of a `RosPeeringRouterInterfaceConnectionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::PeeringRouterInterfaceConnection` resource.
 */
// @ts-ignore TS6133
function rosPeeringRouterInterfaceConnectionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosPeeringRouterInterfaceConnectionPropsValidator(properties).assertSuccess();
    }
    return {
        OppositeInterfaceId: ros.stringToRosTemplate(properties.oppositeInterfaceId),
        RouterInterfaceId: ros.stringToRosTemplate(properties.routerInterfaceId),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::PeeringRouterInterfaceConnection`
 */
class RosPeeringRouterInterfaceConnection extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceConnection`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPeeringRouterInterfaceConnection.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrOppositeInterfaceId = this.getAtt('OppositeInterfaceId');
        this.attrRouterInterfaceId = this.getAtt('RouterInterfaceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.oppositeInterfaceId = props.oppositeInterfaceId;
        this.routerInterfaceId = props.routerInterfaceId;
    }
    get rosProperties() {
        return {
            oppositeInterfaceId: this.oppositeInterfaceId,
            routerInterfaceId: this.routerInterfaceId,
        };
    }
    renderProperties(props) {
        return rosPeeringRouterInterfaceConnectionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPeeringRouterInterfaceConnection = RosPeeringRouterInterfaceConnection;
/**
 * The resource type name for this resource class.
 */
RosPeeringRouterInterfaceConnection.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::PeeringRouterInterfaceConnection";
/**
 * Determine whether the given properties match those of a `RosRouteTableProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteTableProps`
 *
 * @returns the result of the validation.
 */
function RosRouteTablePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('routeTableName', ros.validateString)(properties.routeTableName));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosRouteTable_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosRouteTableProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouteTable` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteTableProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouteTable` resource.
 */
// @ts-ignore TS6133
function rosRouteTablePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosRouteTablePropsValidator(properties).assertSuccess();
    }
    return {
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        Description: ros.stringToRosTemplate(properties.description),
        RouteTableName: ros.stringToRosTemplate(properties.routeTableName),
        Tags: ros.listMapper(rosRouteTableTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::RouteTable`
 */
class RosRouteTable extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::RouteTable`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosRouteTable.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteTableId = this.getAtt('RouteTableId');
        this.attrRouteTableName = this.getAtt('RouteTableName');
        this.attrRouteTableType = this.getAtt('RouteTableType');
        this.attrVSwitchIds = this.getAtt('VSwitchIds');
        this.attrVpcId = this.getAtt('VpcId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.description = props.description;
        this.routeTableName = props.routeTableName;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            vpcId: this.vpcId,
            description: this.description,
            routeTableName: this.routeTableName,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosRouteTablePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRouteTable = RosRouteTable;
/**
 * The resource type name for this resource class.
 */
RosRouteTable.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::RouteTable";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosRouteTable_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouteTable.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouteTable.Tags` resource.
 */
// @ts-ignore TS6133
function rosRouteTableTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRouteTable_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosRouteTableAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteTableAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosRouteTableAssociationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('routeTableId', ros.requiredValidator)(properties.routeTableId));
    errors.collect(ros.propertyValidator('routeTableId', ros.validateString)(properties.routeTableId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    return errors.wrap('supplied properties not correct for "RosRouteTableAssociationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouteTableAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteTableAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouteTableAssociation` resource.
 */
// @ts-ignore TS6133
function rosRouteTableAssociationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosRouteTableAssociationPropsValidator(properties).assertSuccess();
    }
    return {
        RouteTableId: ros.stringToRosTemplate(properties.routeTableId),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::RouteTableAssociation`
 */
class RosRouteTableAssociation extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::RouteTableAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosRouteTableAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteTableId = this.getAtt('RouteTableId');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.routeTableId = props.routeTableId;
        this.vSwitchId = props.vSwitchId;
    }
    get rosProperties() {
        return {
            routeTableId: this.routeTableId,
            vSwitchId: this.vSwitchId,
        };
    }
    renderProperties(props) {
        return rosRouteTableAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRouteTableAssociation = RosRouteTableAssociation;
/**
 * The resource type name for this resource class.
 */
RosRouteTableAssociation.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::RouteTableAssociation";
/**
 * Determine whether the given properties match those of a `RosRouterInterfaceProps`
 *
 * @param properties - the TypeScript properties of a `RosRouterInterfaceProps`
 *
 * @returns the result of the validation.
 */
function RosRouterInterfacePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oppositeInterfaceId', ros.validateString)(properties.oppositeInterfaceId));
    errors.collect(ros.propertyValidator('oppositeInterfaceOwnerId', ros.validateString)(properties.oppositeInterfaceOwnerId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('oppositeRouterId', ros.validateString)(properties.oppositeRouterId));
    errors.collect(ros.propertyValidator('oppositeRegionId', ros.validateString)(properties.oppositeRegionId));
    if (properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
            data: properties.pricingCycle,
            allowedValues: ["Month", "Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    if (properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
            data: properties.instanceChargeType,
            allowedValues: ["PayAsYouGo", "PostPaid", "PayOnDemand", "Postpaid", "PostPay", "POSTPAY", "POST", "Subscription", "PrePaid", "Prepaid", "PrePay", "PREPAY", "PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('healthCheckSourceIp', ros.validateString)(properties.healthCheckSourceIp));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('routerId', ros.requiredValidator)(properties.routerId));
    errors.collect(ros.propertyValidator('routerId', ros.validateString)(properties.routerId));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('role', ros.requiredValidator)(properties.role));
    if (properties.role && (typeof properties.role) !== 'object') {
        errors.collect(ros.propertyValidator('role', ros.validateAllowedValues)({
            data: properties.role,
            allowedValues: ["InitiatingSide", "AcceptingSide"],
        }));
    }
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    if (properties.oppositeRouterType && (typeof properties.oppositeRouterType) !== 'object') {
        errors.collect(ros.propertyValidator('oppositeRouterType', ros.validateAllowedValues)({
            data: properties.oppositeRouterType,
            allowedValues: ["VRouter", "VBR"],
        }));
    }
    errors.collect(ros.propertyValidator('oppositeRouterType', ros.validateString)(properties.oppositeRouterType));
    if (properties.routerType && (typeof properties.routerType) !== 'object') {
        errors.collect(ros.propertyValidator('routerType', ros.validateAllowedValues)({
            data: properties.routerType,
            allowedValues: ["VRouter", "VBR"],
        }));
    }
    errors.collect(ros.propertyValidator('routerType', ros.validateString)(properties.routerType));
    errors.collect(ros.propertyValidator('accessPointId', ros.validateString)(properties.accessPointId));
    errors.collect(ros.propertyValidator('oppositeAccessPointId', ros.validateString)(properties.oppositeAccessPointId));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    errors.collect(ros.propertyValidator('healthCheckTargetIp', ros.validateString)(properties.healthCheckTargetIp));
    return errors.wrap('supplied properties not correct for "RosRouterInterfaceProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouterInterface` resource
 *
 * @param properties - the TypeScript properties of a `RosRouterInterfaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouterInterface` resource.
 */
// @ts-ignore TS6133
function rosRouterInterfacePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosRouterInterfacePropsValidator(properties).assertSuccess();
    }
    return {
        Role: ros.stringToRosTemplate(properties.role),
        RouterId: ros.stringToRosTemplate(properties.routerId),
        AccessPointId: ros.stringToRosTemplate(properties.accessPointId),
        AutoPay: ros.booleanToRosTemplate(properties.autoPay),
        Description: ros.stringToRosTemplate(properties.description),
        HealthCheckSourceIp: ros.stringToRosTemplate(properties.healthCheckSourceIp),
        HealthCheckTargetIp: ros.stringToRosTemplate(properties.healthCheckTargetIp),
        InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
        Name: ros.stringToRosTemplate(properties.name),
        OppositeAccessPointId: ros.stringToRosTemplate(properties.oppositeAccessPointId),
        OppositeInterfaceId: ros.stringToRosTemplate(properties.oppositeInterfaceId),
        OppositeInterfaceOwnerId: ros.stringToRosTemplate(properties.oppositeInterfaceOwnerId),
        OppositeRegionId: ros.stringToRosTemplate(properties.oppositeRegionId),
        OppositeRouterId: ros.stringToRosTemplate(properties.oppositeRouterId),
        OppositeRouterType: ros.stringToRosTemplate(properties.oppositeRouterType),
        Period: ros.numberToRosTemplate(properties.period),
        PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
        RouterType: ros.stringToRosTemplate(properties.routerType),
        Spec: ros.stringToRosTemplate(properties.spec),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::RouterInterface`
 */
class RosRouterInterface extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::RouterInterface`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosRouterInterface.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouterInterfaceId = this.getAtt('RouterInterfaceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.role = props.role;
        this.routerId = props.routerId;
        this.accessPointId = props.accessPointId;
        this.autoPay = props.autoPay;
        this.description = props.description;
        this.healthCheckSourceIp = props.healthCheckSourceIp;
        this.healthCheckTargetIp = props.healthCheckTargetIp;
        this.instanceChargeType = props.instanceChargeType;
        this.name = props.name;
        this.oppositeAccessPointId = props.oppositeAccessPointId;
        this.oppositeInterfaceId = props.oppositeInterfaceId;
        this.oppositeInterfaceOwnerId = props.oppositeInterfaceOwnerId;
        this.oppositeRegionId = props.oppositeRegionId;
        this.oppositeRouterId = props.oppositeRouterId;
        this.oppositeRouterType = props.oppositeRouterType;
        this.period = props.period;
        this.pricingCycle = props.pricingCycle;
        this.routerType = props.routerType;
        this.spec = props.spec;
    }
    get rosProperties() {
        return {
            role: this.role,
            routerId: this.routerId,
            accessPointId: this.accessPointId,
            autoPay: this.autoPay,
            description: this.description,
            healthCheckSourceIp: this.healthCheckSourceIp,
            healthCheckTargetIp: this.healthCheckTargetIp,
            instanceChargeType: this.instanceChargeType,
            name: this.name,
            oppositeAccessPointId: this.oppositeAccessPointId,
            oppositeInterfaceId: this.oppositeInterfaceId,
            oppositeInterfaceOwnerId: this.oppositeInterfaceOwnerId,
            oppositeRegionId: this.oppositeRegionId,
            oppositeRouterId: this.oppositeRouterId,
            oppositeRouterType: this.oppositeRouterType,
            period: this.period,
            pricingCycle: this.pricingCycle,
            routerType: this.routerType,
            spec: this.spec,
        };
    }
    renderProperties(props) {
        return rosRouterInterfacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRouterInterface = RosRouterInterface;
/**
 * The resource type name for this resource class.
 */
RosRouterInterface.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::RouterInterface";
/**
 * Determine whether the given properties match those of a `RosSnatEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosSnatEntryProps`
 *
 * @returns the result of the validation.
 */
function RosSnatEntryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snatEntryName', ros.validateString)(properties.snatEntryName));
    errors.collect(ros.propertyValidator('sourceVSwitchIds', ros.listValidator(ros.validateAny))(properties.sourceVSwitchIds));
    errors.collect(ros.propertyValidator('sourceCidr', ros.validateString)(properties.sourceCidr));
    errors.collect(ros.propertyValidator('snatIp', ros.requiredValidator)(properties.snatIp));
    errors.collect(ros.propertyValidator('snatIp', ros.validateString)(properties.snatIp));
    errors.collect(ros.propertyValidator('snatTableId', ros.requiredValidator)(properties.snatTableId));
    errors.collect(ros.propertyValidator('snatTableId', ros.validateString)(properties.snatTableId));
    return errors.wrap('supplied properties not correct for "RosSnatEntryProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::SnatEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosSnatEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::SnatEntry` resource.
 */
// @ts-ignore TS6133
function rosSnatEntryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSnatEntryPropsValidator(properties).assertSuccess();
    }
    return {
        SnatIp: ros.stringToRosTemplate(properties.snatIp),
        SnatTableId: ros.stringToRosTemplate(properties.snatTableId),
        SnatEntryName: ros.stringToRosTemplate(properties.snatEntryName),
        SourceCIDR: ros.stringToRosTemplate(properties.sourceCidr),
        SourceVSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.sourceVSwitchIds),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::SnatEntry`
 */
class RosSnatEntry extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::SnatEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSnatEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSnatEntryIds = this.getAtt('SnatEntryIds');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.snatIp = props.snatIp;
        this.snatTableId = props.snatTableId;
        this.snatEntryName = props.snatEntryName;
        this.sourceCidr = props.sourceCidr;
        this.sourceVSwitchIds = props.sourceVSwitchIds;
    }
    get rosProperties() {
        return {
            snatIp: this.snatIp,
            snatTableId: this.snatTableId,
            snatEntryName: this.snatEntryName,
            sourceCidr: this.sourceCidr,
            sourceVSwitchIds: this.sourceVSwitchIds,
        };
    }
    renderProperties(props) {
        return rosSnatEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSnatEntry = RosSnatEntry;
/**
 * The resource type name for this resource class.
 */
RosSnatEntry.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::SnatEntry";
/**
 * Determine whether the given properties match those of a `RosSslVpnClientCertProps`
 *
 * @param properties - the TypeScript properties of a `RosSslVpnClientCertProps`
 *
 * @returns the result of the validation.
 */
function RosSslVpnClientCertPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sslVpnServerId', ros.requiredValidator)(properties.sslVpnServerId));
    errors.collect(ros.propertyValidator('sslVpnServerId', ros.validateString)(properties.sslVpnServerId));
    if (properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosSslVpnClientCertProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::SslVpnClientCert` resource
 *
 * @param properties - the TypeScript properties of a `RosSslVpnClientCertProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::SslVpnClientCert` resource.
 */
// @ts-ignore TS6133
function rosSslVpnClientCertPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSslVpnClientCertPropsValidator(properties).assertSuccess();
    }
    return {
        SslVpnServerId: ros.stringToRosTemplate(properties.sslVpnServerId),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::SslVpnClientCert`
 */
class RosSslVpnClientCert extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::SslVpnClientCert`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSslVpnClientCert.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSslVpnClientCertId = this.getAtt('SslVpnClientCertId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sslVpnServerId = props.sslVpnServerId;
        this.name = props.name;
    }
    get rosProperties() {
        return {
            sslVpnServerId: this.sslVpnServerId,
            name: this.name,
        };
    }
    renderProperties(props) {
        return rosSslVpnClientCertPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSslVpnClientCert = RosSslVpnClientCert;
/**
 * The resource type name for this resource class.
 */
RosSslVpnClientCert.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::SslVpnClientCert";
/**
 * Determine whether the given properties match those of a `RosSslVpnServerProps`
 *
 * @param properties - the TypeScript properties of a `RosSslVpnServerProps`
 *
 * @returns the result of the validation.
 */
function RosSslVpnServerPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('compress', ros.validateBoolean)(properties.compress));
    errors.collect(ros.propertyValidator('localSubnet', ros.requiredValidator)(properties.localSubnet));
    errors.collect(ros.propertyValidator('localSubnet', ros.validateString)(properties.localSubnet));
    errors.collect(ros.propertyValidator('clientIpPool', ros.requiredValidator)(properties.clientIpPool));
    errors.collect(ros.propertyValidator('clientIpPool', ros.validateString)(properties.clientIpPool));
    if (properties.proto && (typeof properties.proto) !== 'object') {
        errors.collect(ros.propertyValidator('proto', ros.validateAllowedValues)({
            data: properties.proto,
            allowedValues: ["UDP", "TCP"],
        }));
    }
    errors.collect(ros.propertyValidator('proto', ros.validateString)(properties.proto));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.requiredValidator)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.validateString)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if (properties.cipher && (typeof properties.cipher) !== 'object') {
        errors.collect(ros.propertyValidator('cipher', ros.validateAllowedValues)({
            data: properties.cipher,
            allowedValues: ["AES-128-CBC", "AES-192-CBC", "AES-256-CBC", "none"],
        }));
    }
    errors.collect(ros.propertyValidator('cipher', ros.validateString)(properties.cipher));
    if (properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosSslVpnServerProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::SslVpnServer` resource
 *
 * @param properties - the TypeScript properties of a `RosSslVpnServerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::SslVpnServer` resource.
 */
// @ts-ignore TS6133
function rosSslVpnServerPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSslVpnServerPropsValidator(properties).assertSuccess();
    }
    return {
        ClientIpPool: ros.stringToRosTemplate(properties.clientIpPool),
        LocalSubnet: ros.stringToRosTemplate(properties.localSubnet),
        VpnGatewayId: ros.stringToRosTemplate(properties.vpnGatewayId),
        Cipher: ros.stringToRosTemplate(properties.cipher),
        Compress: ros.booleanToRosTemplate(properties.compress),
        Name: ros.stringToRosTemplate(properties.name),
        Port: ros.numberToRosTemplate(properties.port),
        Proto: ros.stringToRosTemplate(properties.proto),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::SslVpnServer`
 */
class RosSslVpnServer extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::SslVpnServer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSslVpnServer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSslVpnServerId = this.getAtt('SslVpnServerId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clientIpPool = props.clientIpPool;
        this.localSubnet = props.localSubnet;
        this.vpnGatewayId = props.vpnGatewayId;
        this.cipher = props.cipher;
        this.compress = props.compress;
        this.name = props.name;
        this.port = props.port;
        this.proto = props.proto;
    }
    get rosProperties() {
        return {
            clientIpPool: this.clientIpPool,
            localSubnet: this.localSubnet,
            vpnGatewayId: this.vpnGatewayId,
            cipher: this.cipher,
            compress: this.compress,
            name: this.name,
            port: this.port,
            proto: this.proto,
        };
    }
    renderProperties(props) {
        return rosSslVpnServerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSslVpnServer = RosSslVpnServer;
/**
 * The resource type name for this resource class.
 */
RosSslVpnServer.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::SslVpnServer";
/**
 * Determine whether the given properties match those of a `RosVirtualBorderRouterProps`
 *
 * @param properties - the TypeScript properties of a `RosVirtualBorderRouterProps`
 *
 * @returns the result of the validation.
 */
function RosVirtualBorderRouterPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('peerGatewayIp', ros.requiredValidator)(properties.peerGatewayIp));
    errors.collect(ros.propertyValidator('peerGatewayIp', ros.validateString)(properties.peerGatewayIp));
    errors.collect(ros.propertyValidator('localGatewayIp', ros.requiredValidator)(properties.localGatewayIp));
    errors.collect(ros.propertyValidator('localGatewayIp', ros.validateString)(properties.localGatewayIp));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('circuitCode', ros.validateString)(properties.circuitCode));
    errors.collect(ros.propertyValidator('physicalConnectionId', ros.requiredValidator)(properties.physicalConnectionId));
    errors.collect(ros.propertyValidator('physicalConnectionId', ros.validateString)(properties.physicalConnectionId));
    errors.collect(ros.propertyValidator('peeringSubnetMask', ros.requiredValidator)(properties.peeringSubnetMask));
    errors.collect(ros.propertyValidator('peeringSubnetMask', ros.validateString)(properties.peeringSubnetMask));
    errors.collect(ros.propertyValidator('vlanId', ros.requiredValidator)(properties.vlanId));
    if (properties.vlanId && (typeof properties.vlanId) !== 'object') {
        errors.collect(ros.propertyValidator('vlanId', ros.validateRange)({
            data: properties.vlanId,
            min: 0,
            max: 2999,
        }));
    }
    errors.collect(ros.propertyValidator('vlanId', ros.validateNumber)(properties.vlanId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosVirtualBorderRouterProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VirtualBorderRouter` resource
 *
 * @param properties - the TypeScript properties of a `RosVirtualBorderRouterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VirtualBorderRouter` resource.
 */
// @ts-ignore TS6133
function rosVirtualBorderRouterPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVirtualBorderRouterPropsValidator(properties).assertSuccess();
    }
    return {
        LocalGatewayIp: ros.stringToRosTemplate(properties.localGatewayIp),
        PeerGatewayIp: ros.stringToRosTemplate(properties.peerGatewayIp),
        PeeringSubnetMask: ros.stringToRosTemplate(properties.peeringSubnetMask),
        PhysicalConnectionId: ros.stringToRosTemplate(properties.physicalConnectionId),
        VlanId: ros.numberToRosTemplate(properties.vlanId),
        CircuitCode: ros.stringToRosTemplate(properties.circuitCode),
        Description: ros.stringToRosTemplate(properties.description),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::VirtualBorderRouter`
 */
class RosVirtualBorderRouter extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::VirtualBorderRouter`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVirtualBorderRouter.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');
        this.attrRouteTableId = this.getAtt('RouteTableId');
        this.attrVbrId = this.getAtt('VbrId');
        this.attrVlanInterfaceId = this.getAtt('VlanInterfaceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.localGatewayIp = props.localGatewayIp;
        this.peerGatewayIp = props.peerGatewayIp;
        this.peeringSubnetMask = props.peeringSubnetMask;
        this.physicalConnectionId = props.physicalConnectionId;
        this.vlanId = props.vlanId;
        this.circuitCode = props.circuitCode;
        this.description = props.description;
        this.name = props.name;
    }
    get rosProperties() {
        return {
            localGatewayIp: this.localGatewayIp,
            peerGatewayIp: this.peerGatewayIp,
            peeringSubnetMask: this.peeringSubnetMask,
            physicalConnectionId: this.physicalConnectionId,
            vlanId: this.vlanId,
            circuitCode: this.circuitCode,
            description: this.description,
            name: this.name,
        };
    }
    renderProperties(props) {
        return rosVirtualBorderRouterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVirtualBorderRouter = RosVirtualBorderRouter;
/**
 * The resource type name for this resource class.
 */
RosVirtualBorderRouter.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VirtualBorderRouter";
/**
 * Determine whether the given properties match those of a `RosVpcPeerConnectionProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcPeerConnectionProps`
 *
 * @returns the result of the validation.
 */
function RosVpcPeerConnectionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('acceptingVpcId', ros.requiredValidator)(properties.acceptingVpcId));
    errors.collect(ros.propertyValidator('acceptingVpcId', ros.validateString)(properties.acceptingVpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('acceptingRegionId', ros.validateString)(properties.acceptingRegionId));
    errors.collect(ros.propertyValidator('acceptingAliUid', ros.validateNumber)(properties.acceptingAliUid));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosVpcPeerConnectionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpcPeerConnection` resource
 *
 * @param properties - the TypeScript properties of a `RosVpcPeerConnectionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpcPeerConnection` resource.
 */
// @ts-ignore TS6133
function rosVpcPeerConnectionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVpcPeerConnectionPropsValidator(properties).assertSuccess();
    }
    return {
        AcceptingVpcId: ros.stringToRosTemplate(properties.acceptingVpcId),
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        AcceptingAliUid: ros.numberToRosTemplate(properties.acceptingAliUid),
        AcceptingRegionId: ros.stringToRosTemplate(properties.acceptingRegionId),
        DeletionForce: ros.booleanToRosTemplate(properties.deletionForce),
        Description: ros.stringToRosTemplate(properties.description),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::VpcPeerConnection`
 */
class RosVpcPeerConnection extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::VpcPeerConnection`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVpcPeerConnection.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceptingVpcId = props.acceptingVpcId;
        this.vpcId = props.vpcId;
        this.acceptingAliUid = props.acceptingAliUid;
        this.acceptingRegionId = props.acceptingRegionId;
        this.deletionForce = props.deletionForce;
        this.description = props.description;
        this.name = props.name;
    }
    get rosProperties() {
        return {
            acceptingVpcId: this.acceptingVpcId,
            vpcId: this.vpcId,
            acceptingAliUid: this.acceptingAliUid,
            acceptingRegionId: this.acceptingRegionId,
            deletionForce: this.deletionForce,
            description: this.description,
            name: this.name,
        };
    }
    renderProperties(props) {
        return rosVpcPeerConnectionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVpcPeerConnection = RosVpcPeerConnection;
/**
 * The resource type name for this resource class.
 */
RosVpcPeerConnection.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpcPeerConnection";
/**
 * Determine whether the given properties match those of a `RosVpnConnectionProps`
 *
 * @param properties - the TypeScript properties of a `RosVpnConnectionProps`
 *
 * @returns the result of the validation.
 */
function RosVpnConnectionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('localSubnet', ros.requiredValidator)(properties.localSubnet));
    errors.collect(ros.propertyValidator('localSubnet', ros.validateString)(properties.localSubnet));
    errors.collect(ros.propertyValidator('effectImmediately', ros.validateBoolean)(properties.effectImmediately));
    errors.collect(ros.propertyValidator('remoteSubnet', ros.requiredValidator)(properties.remoteSubnet));
    errors.collect(ros.propertyValidator('remoteSubnet', ros.validateString)(properties.remoteSubnet));
    errors.collect(ros.propertyValidator('customerGatewayId', ros.requiredValidator)(properties.customerGatewayId));
    errors.collect(ros.propertyValidator('customerGatewayId', ros.validateString)(properties.customerGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.requiredValidator)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.validateString)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('ipsecConfig', RosVpnConnection_IpsecConfigPropertyValidator)(properties.ipsecConfig));
    errors.collect(ros.propertyValidator('healthCheckConfig', RosVpnConnection_HealthCheckConfigPropertyValidator)(properties.healthCheckConfig));
    errors.collect(ros.propertyValidator('ikeConfig', RosVpnConnection_IkeConfigPropertyValidator)(properties.ikeConfig));
    if (properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosVpnConnectionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection` resource
 *
 * @param properties - the TypeScript properties of a `RosVpnConnectionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVpnConnectionPropsValidator(properties).assertSuccess();
    }
    return {
        CustomerGatewayId: ros.stringToRosTemplate(properties.customerGatewayId),
        LocalSubnet: ros.stringToRosTemplate(properties.localSubnet),
        RemoteSubnet: ros.stringToRosTemplate(properties.remoteSubnet),
        VpnGatewayId: ros.stringToRosTemplate(properties.vpnGatewayId),
        EffectImmediately: ros.booleanToRosTemplate(properties.effectImmediately),
        HealthCheckConfig: rosVpnConnectionHealthCheckConfigPropertyToRosTemplate(properties.healthCheckConfig),
        IkeConfig: rosVpnConnectionIkeConfigPropertyToRosTemplate(properties.ikeConfig),
        IpsecConfig: rosVpnConnectionIpsecConfigPropertyToRosTemplate(properties.ipsecConfig),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::VpnConnection`
 */
class RosVpnConnection extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::VpnConnection`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVpnConnection.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPeerVpnConnectionConfig = this.getAtt('PeerVpnConnectionConfig');
        this.attrStatus = this.getAtt('Status');
        this.attrVpnConnectionId = this.getAtt('VpnConnectionId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.customerGatewayId = props.customerGatewayId;
        this.localSubnet = props.localSubnet;
        this.remoteSubnet = props.remoteSubnet;
        this.vpnGatewayId = props.vpnGatewayId;
        this.effectImmediately = props.effectImmediately;
        this.healthCheckConfig = props.healthCheckConfig;
        this.ikeConfig = props.ikeConfig;
        this.ipsecConfig = props.ipsecConfig;
        this.name = props.name;
    }
    get rosProperties() {
        return {
            customerGatewayId: this.customerGatewayId,
            localSubnet: this.localSubnet,
            remoteSubnet: this.remoteSubnet,
            vpnGatewayId: this.vpnGatewayId,
            effectImmediately: this.effectImmediately,
            healthCheckConfig: this.healthCheckConfig,
            ikeConfig: this.ikeConfig,
            ipsecConfig: this.ipsecConfig,
            name: this.name,
        };
    }
    renderProperties(props) {
        return rosVpnConnectionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVpnConnection = RosVpnConnection;
/**
 * The resource type name for this resource class.
 */
RosVpnConnection.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnConnection";
/**
 * Determine whether the given properties match those of a `HealthCheckConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnConnection_HealthCheckConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('dip', ros.validateBoolean)(properties.dip));
    errors.collect(ros.propertyValidator('retry', ros.validateNumber)(properties.retry));
    errors.collect(ros.propertyValidator('sip', ros.validateString)(properties.sip));
    errors.collect(ros.propertyValidator('interval', ros.validateNumber)(properties.interval));
    return errors.wrap('supplied properties not correct for "HealthCheckConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.HealthCheckConfig` resource
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.HealthCheckConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionHealthCheckConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnConnection_HealthCheckConfigPropertyValidator(properties).assertSuccess();
    return {
        Enable: ros.booleanToRosTemplate(properties.enable),
        Dip: ros.booleanToRosTemplate(properties.dip),
        Retry: ros.numberToRosTemplate(properties.retry),
        Sip: ros.stringToRosTemplate(properties.sip),
        Interval: ros.numberToRosTemplate(properties.interval),
    };
}
/**
 * Determine whether the given properties match those of a `IkeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `IkeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnConnection_IkeConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.ikeAuthAlg && (typeof properties.ikeAuthAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ikeAuthAlg', ros.validateAllowedValues)({
            data: properties.ikeAuthAlg,
            allowedValues: ["md5", "sha1"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeAuthAlg', ros.validateString)(properties.ikeAuthAlg));
    if (properties.ikeEncAlg && (typeof properties.ikeEncAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ikeEncAlg', ros.validateAllowedValues)({
            data: properties.ikeEncAlg,
            allowedValues: ["aes", "aes192", "aes256", "des", "3des"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeEncAlg', ros.validateString)(properties.ikeEncAlg));
    if (properties.localIdIPsec && (Array.isArray(properties.localIdIPsec) || (typeof properties.localIdIPsec) === 'string')) {
        errors.collect(ros.propertyValidator('localIdIPsec', ros.validateLength)({
            data: properties.localIdIPsec.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('localIdIPsec', ros.validateString)(properties.localIdIPsec));
    if (properties.ikeVersion && (typeof properties.ikeVersion) !== 'object') {
        errors.collect(ros.propertyValidator('ikeVersion', ros.validateAllowedValues)({
            data: properties.ikeVersion,
            allowedValues: ["ikev1", "ikev2"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeVersion', ros.validateString)(properties.ikeVersion));
    if (properties.ikeMode && (typeof properties.ikeMode) !== 'object') {
        errors.collect(ros.propertyValidator('ikeMode', ros.validateAllowedValues)({
            data: properties.ikeMode,
            allowedValues: ["main", "aggressive"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeMode', ros.validateString)(properties.ikeMode));
    if (properties.ikeLifetime && (typeof properties.ikeLifetime) !== 'object') {
        errors.collect(ros.propertyValidator('ikeLifetime', ros.validateRange)({
            data: properties.ikeLifetime,
            min: 0,
            max: 86400,
        }));
    }
    errors.collect(ros.propertyValidator('ikeLifetime', ros.validateNumber)(properties.ikeLifetime));
    if (properties.remoteId && (Array.isArray(properties.remoteId) || (typeof properties.remoteId) === 'string')) {
        errors.collect(ros.propertyValidator('remoteId', ros.validateLength)({
            data: properties.remoteId.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('remoteId', ros.validateString)(properties.remoteId));
    if (properties.psk && (Array.isArray(properties.psk) || (typeof properties.psk) === 'string')) {
        errors.collect(ros.propertyValidator('psk', ros.validateLength)({
            data: properties.psk.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('psk', ros.validateString)(properties.psk));
    if (properties.ikePfs && (typeof properties.ikePfs) !== 'object') {
        errors.collect(ros.propertyValidator('ikePfs', ros.validateAllowedValues)({
            data: properties.ikePfs,
            allowedValues: ["group1", "group2", "group5", "group14", "group24"],
        }));
    }
    errors.collect(ros.propertyValidator('ikePfs', ros.validateString)(properties.ikePfs));
    return errors.wrap('supplied properties not correct for "IkeConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.IkeConfig` resource
 *
 * @param properties - the TypeScript properties of a `IkeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.IkeConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionIkeConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnConnection_IkeConfigPropertyValidator(properties).assertSuccess();
    return {
        IkeAuthAlg: ros.stringToRosTemplate(properties.ikeAuthAlg),
        IkeEncAlg: ros.stringToRosTemplate(properties.ikeEncAlg),
        LocalIdIPsec: ros.stringToRosTemplate(properties.localIdIPsec),
        IkeVersion: ros.stringToRosTemplate(properties.ikeVersion),
        IkeMode: ros.stringToRosTemplate(properties.ikeMode),
        IkeLifetime: ros.numberToRosTemplate(properties.ikeLifetime),
        RemoteId: ros.stringToRosTemplate(properties.remoteId),
        Psk: ros.stringToRosTemplate(properties.psk),
        IkePfs: ros.stringToRosTemplate(properties.ikePfs),
    };
}
/**
 * Determine whether the given properties match those of a `IpsecConfigProperty`
 *
 * @param properties - the TypeScript properties of a `IpsecConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnConnection_IpsecConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.ipsecPfs && (typeof properties.ipsecPfs) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecPfs', ros.validateAllowedValues)({
            data: properties.ipsecPfs,
            allowedValues: ["group1", "group2", "group5", "group14", "group24"],
        }));
    }
    errors.collect(ros.propertyValidator('ipsecPfs', ros.validateString)(properties.ipsecPfs));
    if (properties.ipsecEncAlg && (typeof properties.ipsecEncAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecEncAlg', ros.validateAllowedValues)({
            data: properties.ipsecEncAlg,
            allowedValues: ["aes", "aes192", "aes256", "des", "3des"],
        }));
    }
    errors.collect(ros.propertyValidator('ipsecEncAlg', ros.validateString)(properties.ipsecEncAlg));
    if (properties.ipsecAuthAlg && (typeof properties.ipsecAuthAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecAuthAlg', ros.validateAllowedValues)({
            data: properties.ipsecAuthAlg,
            allowedValues: ["md5", "sha1"],
        }));
    }
    errors.collect(ros.propertyValidator('ipsecAuthAlg', ros.validateString)(properties.ipsecAuthAlg));
    if (properties.ipsecLifetime && (typeof properties.ipsecLifetime) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecLifetime', ros.validateRange)({
            data: properties.ipsecLifetime,
            min: 0,
            max: 86400,
        }));
    }
    errors.collect(ros.propertyValidator('ipsecLifetime', ros.validateNumber)(properties.ipsecLifetime));
    return errors.wrap('supplied properties not correct for "IpsecConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.IpsecConfig` resource
 *
 * @param properties - the TypeScript properties of a `IpsecConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.IpsecConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionIpsecConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnConnection_IpsecConfigPropertyValidator(properties).assertSuccess();
    return {
        IpsecPfs: ros.stringToRosTemplate(properties.ipsecPfs),
        IpsecEncAlg: ros.stringToRosTemplate(properties.ipsecEncAlg),
        IpsecAuthAlg: ros.stringToRosTemplate(properties.ipsecAuthAlg),
        IpsecLifetime: ros.numberToRosTemplate(properties.ipsecLifetime),
    };
}
/**
 * Determine whether the given properties match those of a `RosVpnGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosVpnGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosVpnGatewayPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableIpsec', ros.validateBoolean)(properties.enableIpsec));
    errors.collect(ros.propertyValidator('enableSsl', ros.validateBoolean)(properties.enableSsl));
    errors.collect(ros.propertyValidator('sslConnections', ros.validateNumber)(properties.sslConnections));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 2,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if (properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
            data: properties.instanceChargeType,
            allowedValues: ["POSTPAY", "PREPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if (properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateAllowedValues)({
            data: properties.bandwidth,
            allowedValues: [5, 10, 20, 50, 100, 200],
        }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosVpnGateway_TagsPropertyValidator))(properties.tags));
    if (properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosVpnGatewayProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnGateway` resource
 *
 * @param properties - the TypeScript properties of a `RosVpnGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnGateway` resource.
 */
// @ts-ignore TS6133
function rosVpnGatewayPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVpnGatewayPropsValidator(properties).assertSuccess();
    }
    return {
        Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        AutoPay: ros.booleanToRosTemplate(properties.autoPay),
        Description: ros.stringToRosTemplate(properties.description),
        EnableIpsec: ros.booleanToRosTemplate(properties.enableIpsec),
        EnableSsl: ros.booleanToRosTemplate(properties.enableSsl),
        InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
        Name: ros.stringToRosTemplate(properties.name),
        Period: ros.numberToRosTemplate(properties.period),
        SslConnections: ros.numberToRosTemplate(properties.sslConnections),
        Tags: ros.listMapper(rosVpnGatewayTagsPropertyToRosTemplate)(properties.tags),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::VpnGateway`
 */
class RosVpnGateway extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::VpnGateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVpnGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInternetIp = this.getAtt('InternetIp');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrSpec = this.getAtt('Spec');
        this.attrSslMaxConnections = this.getAtt('SslMaxConnections');
        this.attrVpnGatewayId = this.getAtt('VpnGatewayId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.vpcId = props.vpcId;
        this.autoPay = props.autoPay;
        this.description = props.description;
        this.enableIpsec = props.enableIpsec;
        this.enableSsl = props.enableSsl;
        this.instanceChargeType = props.instanceChargeType;
        this.name = props.name;
        this.period = props.period;
        this.sslConnections = props.sslConnections;
        this.tags = props.tags;
        this.vSwitchId = props.vSwitchId;
    }
    get rosProperties() {
        return {
            bandwidth: this.bandwidth,
            vpcId: this.vpcId,
            autoPay: this.autoPay,
            description: this.description,
            enableIpsec: this.enableIpsec,
            enableSsl: this.enableSsl,
            instanceChargeType: this.instanceChargeType,
            name: this.name,
            period: this.period,
            sslConnections: this.sslConnections,
            tags: this.tags,
            vSwitchId: this.vSwitchId,
        };
    }
    renderProperties(props) {
        return rosVpnGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVpnGateway = RosVpnGateway;
/**
 * The resource type name for this resource class.
 */
RosVpnGateway.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnGateway";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnGateway_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnGateway.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnGateway.Tags` resource.
 */
// @ts-ignore TS6133
function rosVpnGatewayTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnGateway_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosVpnPbrRouteEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosVpnPbrRouteEntryProps`
 *
 * @returns the result of the validation.
 */
function RosVpnPbrRouteEntryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('routeDest', ros.requiredValidator)(properties.routeDest));
    errors.collect(ros.propertyValidator('routeDest', ros.validateString)(properties.routeDest));
    errors.collect(ros.propertyValidator('overlayMode', ros.validateString)(properties.overlayMode));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.requiredValidator)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.validateString)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('nextHop', ros.requiredValidator)(properties.nextHop));
    errors.collect(ros.propertyValidator('nextHop', ros.validateString)(properties.nextHop));
    errors.collect(ros.propertyValidator('routeSource', ros.requiredValidator)(properties.routeSource));
    errors.collect(ros.propertyValidator('routeSource', ros.validateString)(properties.routeSource));
    errors.collect(ros.propertyValidator('publishVpc', ros.requiredValidator)(properties.publishVpc));
    errors.collect(ros.propertyValidator('publishVpc', ros.validateBoolean)(properties.publishVpc));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "RosVpnPbrRouteEntryProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnPbrRouteEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosVpnPbrRouteEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnPbrRouteEntry` resource.
 */
// @ts-ignore TS6133
function rosVpnPbrRouteEntryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVpnPbrRouteEntryPropsValidator(properties).assertSuccess();
    }
    return {
        NextHop: ros.stringToRosTemplate(properties.nextHop),
        PublishVpc: ros.booleanToRosTemplate(properties.publishVpc),
        RouteDest: ros.stringToRosTemplate(properties.routeDest),
        RouteSource: ros.stringToRosTemplate(properties.routeSource),
        VpnGatewayId: ros.stringToRosTemplate(properties.vpnGatewayId),
        Weight: ros.numberToRosTemplate(properties.weight),
        Description: ros.stringToRosTemplate(properties.description),
        OverlayMode: ros.stringToRosTemplate(properties.overlayMode),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::VpnPbrRouteEntry`
 */
class RosVpnPbrRouteEntry extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::VpnPbrRouteEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVpnPbrRouteEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNextHop = this.getAtt('NextHop');
        this.attrRouteDest = this.getAtt('RouteDest');
        this.attrRouteSource = this.getAtt('RouteSource');
        this.attrVpnGatewayId = this.getAtt('VpnGatewayId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.nextHop = props.nextHop;
        this.publishVpc = props.publishVpc;
        this.routeDest = props.routeDest;
        this.routeSource = props.routeSource;
        this.vpnGatewayId = props.vpnGatewayId;
        this.weight = props.weight;
        this.description = props.description;
        this.overlayMode = props.overlayMode;
    }
    get rosProperties() {
        return {
            nextHop: this.nextHop,
            publishVpc: this.publishVpc,
            routeDest: this.routeDest,
            routeSource: this.routeSource,
            vpnGatewayId: this.vpnGatewayId,
            weight: this.weight,
            description: this.description,
            overlayMode: this.overlayMode,
        };
    }
    renderProperties(props) {
        return rosVpnPbrRouteEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVpnPbrRouteEntry = RosVpnPbrRouteEntry;
/**
 * The resource type name for this resource class.
 */
RosVpnPbrRouteEntry.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnPbrRouteEntry";
/**
 * Determine whether the given properties match those of a `RosVpnRouteEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosVpnRouteEntryProps`
 *
 * @returns the result of the validation.
 */
function RosVpnRouteEntryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('routeDest', ros.requiredValidator)(properties.routeDest));
    errors.collect(ros.propertyValidator('routeDest', ros.validateString)(properties.routeDest));
    errors.collect(ros.propertyValidator('overlayMode', ros.validateString)(properties.overlayMode));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.requiredValidator)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.validateString)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('nextHop', ros.requiredValidator)(properties.nextHop));
    errors.collect(ros.propertyValidator('nextHop', ros.validateString)(properties.nextHop));
    errors.collect(ros.propertyValidator('publishVpc', ros.requiredValidator)(properties.publishVpc));
    errors.collect(ros.propertyValidator('publishVpc', ros.validateBoolean)(properties.publishVpc));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "RosVpnRouteEntryProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnRouteEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosVpnRouteEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnRouteEntry` resource.
 */
// @ts-ignore TS6133
function rosVpnRouteEntryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVpnRouteEntryPropsValidator(properties).assertSuccess();
    }
    return {
        NextHop: ros.stringToRosTemplate(properties.nextHop),
        PublishVpc: ros.booleanToRosTemplate(properties.publishVpc),
        RouteDest: ros.stringToRosTemplate(properties.routeDest),
        VpnGatewayId: ros.stringToRosTemplate(properties.vpnGatewayId),
        Weight: ros.numberToRosTemplate(properties.weight),
        Description: ros.stringToRosTemplate(properties.description),
        OverlayMode: ros.stringToRosTemplate(properties.overlayMode),
    };
}
/**
 * A ROS template type:  `ALIYUN::VPC::VpnRouteEntry`
 */
class RosVpnRouteEntry extends ros.RosResource {
    /**
     * Create a new `ALIYUN::VPC::VpnRouteEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVpnRouteEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNextHop = this.getAtt('NextHop');
        this.attrRouteDest = this.getAtt('RouteDest');
        this.attrVpnGatewayId = this.getAtt('VpnGatewayId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.nextHop = props.nextHop;
        this.publishVpc = props.publishVpc;
        this.routeDest = props.routeDest;
        this.vpnGatewayId = props.vpnGatewayId;
        this.weight = props.weight;
        this.description = props.description;
        this.overlayMode = props.overlayMode;
    }
    get rosProperties() {
        return {
            nextHop: this.nextHop,
            publishVpc: this.publishVpc,
            routeDest: this.routeDest,
            vpnGatewayId: this.vpnGatewayId,
            weight: this.weight,
            description: this.description,
            overlayMode: this.overlayMode,
        };
    }
    renderProperties(props) {
        return rosVpnRouteEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVpnRouteEntry = RosVpnRouteEntry;
/**
 * The resource type name for this resource class.
 */
RosVpnRouteEntry.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnRouteEntry";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZwYy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXNDOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUywyQkFBMkIsQ0FBQyxVQUFlO0lBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsSUFBRyxVQUFVLENBQUMsZUFBZSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQy9FLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2pGLElBQUksRUFBRSxVQUFVLENBQUMsZUFBZTtZQUNoQyxhQUFhLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDakMsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN6RyxJQUFHLFVBQVUsQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLGtCQUFrQixDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3JGLE1BQU0sQ0FBQyxPQUFP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LENBQUMsTUFBTTtZQUNuQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2hDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyxrQ0FBa0MsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7QUF2R0wsNENBd0dDO0FBdkdHOztHQUVHO0FBQ29CLHVDQUFzQixHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6QW55Y2FzdEVJUGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBbnljYXN0RUlQUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhbmR3aWR0aDogQW55Y2FzdCBFSVAgaW5zdGFuY2UgYmFuZHdpZHRoXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFuZHdpZHRoPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBBbnljYXN0IEVJUCBpbnN0YW5jZSBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlQ2hhcmdlVHlwZTogQW55Y2FzdCBFSVAgaW5zdGFuY2UgY2hhcmdlIHR5cGVcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUNoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRDaGFyZ2VUeXBlOiBBbnljYXN0IEVJUCBpbnN0YW5jZSBhY2Nlc3MgcHVibGljIG5ldHdvcmsgYmlsbGluZyBtZXRob2RcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldENoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogQW55Y2FzdCBFSVAgaW5zdGFuY2UgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZUxvY2F0aW9uOiBBbnljYXN0IEVJUCBpbnN0YW5jZSBhY2Nlc3MgYXJlYVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VMb2NhdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBbnljYXN0RUlQUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FueWNhc3RFSVBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBbnljYXN0RUlQUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGlmKHByb3BlcnRpZXMuc2VydmljZUxvY2F0aW9uICYmICh0eXBlb2YgcHJvcGVydGllcy5zZXJ2aWNlTG9jYXRpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VMb2NhdGlvbicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlcnZpY2VMb2NhdGlvbixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJpbnRlcm5hdGlvbmFsXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZUxvY2F0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VMb2NhdGlvbikpO1xuICAgIGlmKHByb3BlcnRpZXMuaW5zdGFuY2VDaGFyZ2VUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnN0YW5jZUNoYXJnZVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlQ2hhcmdlVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJQb3N0UGFpZFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlQ2hhcmdlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUNoYXJnZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhbmR3aWR0aCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5iYW5kd2lkdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuaW50ZXJuZXRDaGFyZ2VUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0Q2hhcmdlVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmludGVybmV0Q2hhcmdlVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJQYXlCeVRyYWZmaWNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldENoYXJnZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW50ZXJuZXRDaGFyZ2VUeXBlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0FueWNhc3RFSVBQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpBbnljYXN0RUlQYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBbnljYXN0RUlQUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6QW55Y2FzdEVJUGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBbnljYXN0RUlQUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NBbnljYXN0RUlQUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQmFuZHdpZHRoOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJhbmR3aWR0aCksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBJbnN0YW5jZUNoYXJnZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VDaGFyZ2VUeXBlKSxcbiAgICAgIEludGVybmV0Q2hhcmdlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUpLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICAgIFNlcnZpY2VMb2NhdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTG9jYXRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6QW55Y2FzdEVJUGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FueWNhc3RFSVAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlZQQzo6QW55Y2FzdEVJUFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFueWNhc3RJZDogQW55Y2FzdCBFSVAgaW5zdGFuY2UgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFueWNhc3RJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJcEFkZHJlc3M6IEFueWNhc2UgSVAgYWRkcmVzc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXBBZGRyZXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5hbWU6IEFueWNhc3QgRUlQIGluc3RhbmNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgT3JkZXJJZDogT3JkZXIgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9yZGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhbmR3aWR0aDogQW55Y2FzdCBFSVAgaW5zdGFuY2UgYmFuZHdpZHRoXG4gICAgICovXG4gICAgcHVibGljIGJhbmR3aWR0aDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBBbnljYXN0IEVJUCBpbnN0YW5jZSBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlQ2hhcmdlVHlwZTogQW55Y2FzdCBFSVAgaW5zdGFuY2UgY2hhcmdlIHR5cGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VDaGFyZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRDaGFyZ2VUeXBlOiBBbnljYXN0IEVJUCBpbnN0YW5jZSBhY2Nlc3MgcHVibGljIG5ldHdvcmsgYmlsbGluZyBtZXRob2RcbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJuZXRDaGFyZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogQW55Y2FzdCBFSVAgaW5zdGFuY2UgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZUxvY2F0aW9uOiBBbnljYXN0IEVJUCBpbnN0YW5jZSBhY2Nlc3MgYXJlYVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTG9jYXRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpWUEM6OkFueWNhc3RFSVBgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FueWNhc3RFSVBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0FueWNhc3RFSVAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFueWNhc3RJZCA9IHRoaXMuZ2V0QXR0KCdBbnljYXN0SWQnKTtcbiAgICAgICAgdGhpcy5hdHRySXBBZGRyZXNzID0gdGhpcy5nZXRBdHQoJ0lwQWRkcmVzcycpO1xuICAgICAgICB0aGlzLmF0dHJOYW1lID0gdGhpcy5nZXRBdHQoJ05hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyT3JkZXJJZCA9IHRoaXMuZ2V0QXR0KCdPcmRlcklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmJhbmR3aWR0aCA9IHByb3BzLmJhbmR3aWR0aDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmluc3RhbmNlQ2hhcmdlVHlwZSA9IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZTtcbiAgICAgICAgdGhpcy5pbnRlcm5ldENoYXJnZVR5cGUgPSBwcm9wcy5pbnRlcm5ldENoYXJnZVR5cGU7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgICAgIHRoaXMuc2VydmljZUxvY2F0aW9uID0gcHJvcHMuc2VydmljZUxvY2F0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJhbmR3aWR0aDogdGhpcy5iYW5kd2lkdGgsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGluc3RhbmNlQ2hhcmdlVHlwZTogdGhpcy5pbnN0YW5jZUNoYXJnZVR5cGUsXG4gICAgICAgICAgICBpbnRlcm5ldENoYXJnZVR5cGU6IHRoaXMuaW50ZXJuZXRDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgc2VydmljZUxvY2F0aW9uOiB0aGlzLnNlcnZpY2VMb2NhdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQW55Y2FzdEVJUFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpBbnljYXN0RUlQQXNzb2NpYXRpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQW55Y2FzdEVJUEFzc29jaWF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFueWNhc3RJZDogQW55Y2FzdCBFSVAgaW5zdGFuY2UgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYW55Y2FzdElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmluZEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgY2xvdWQgcmVzb3VyY2UgaW5zdGFuY2UgdG8gYmUgYm91bmQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmluZEluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiaW5kSW5zdGFuY2VSZWdpb25JZDogVGhlIHJlZ2lvbiBJRCBvZiB0aGUgY2xvdWQgcmVzb3VyY2UgaW5zdGFuY2UgdG8gYmUgYm91bmQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmluZEluc3RhbmNlUmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiaW5kSW5zdGFuY2VUeXBlOiBUaGUgY2xvdWQgcmVzb3VyY2UgaW5zdGFuY2UgdHlwZSB0byBiZSBib3VuZC4gVmFsaWQgdmFsdWU6IFNsYkluc3RhbmNlLCBTTEIgaW5zdGFuY2Ugb2YgcHJpdmF0ZSBuZXR3b3JrIHR5cGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmluZEluc3RhbmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0FueWNhc3RFSVBBc3NvY2lhdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBbnljYXN0RUlQQXNzb2NpYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBbnljYXN0RUlQQXNzb2NpYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JpbmRJbnN0YW5jZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJpbmRJbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiaW5kSW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5iaW5kSW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmluZEluc3RhbmNlUmVnaW9uSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYmluZEluc3RhbmNlUmVnaW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JpbmRJbnN0YW5jZVJlZ2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJpbmRJbnN0YW5jZVJlZ2lvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiaW5kSW5zdGFuY2VUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJpbmRJbnN0YW5jZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JpbmRJbnN0YW5jZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYmluZEluc3RhbmNlVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYW55Y2FzdElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFueWNhc3RJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYW55Y2FzdElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFueWNhc3RJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBbnljYXN0RUlQQXNzb2NpYXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpBbnljYXN0RUlQQXNzb2NpYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FueWNhc3RFSVBBc3NvY2lhdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OkFueWNhc3RFSVBBc3NvY2lhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBbnljYXN0RUlQQXNzb2NpYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FueWNhc3RFSVBBc3NvY2lhdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEFueWNhc3RJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hbnljYXN0SWQpLFxuICAgICAgQmluZEluc3RhbmNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYmluZEluc3RhbmNlSWQpLFxuICAgICAgQmluZEluc3RhbmNlUmVnaW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYmluZEluc3RhbmNlUmVnaW9uSWQpLFxuICAgICAgQmluZEluc3RhbmNlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5iaW5kSW5zdGFuY2VUeXBlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OkFueWNhc3RFSVBBc3NvY2lhdGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FueWNhc3RFSVBBc3NvY2lhdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6VlBDOjpBbnljYXN0RUlQQXNzb2NpYXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBbnljYXN0SWQ6IEFueWNhc3QgRUlQIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQW55Y2FzdElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEJpbmRJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGNsb3VkIHJlc291cmNlIGluc3RhbmNlIHRvIGJlIGJvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmluZEluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQmluZEluc3RhbmNlUmVnaW9uSWQ6IFRoZSByZWdpb24gSUQgb2YgdGhlIGNsb3VkIHJlc291cmNlIGluc3RhbmNlIHRvIGJlIGJvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmluZEluc3RhbmNlUmVnaW9uSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQmluZEluc3RhbmNlVHlwZTogVGhlIGNsb3VkIHJlc291cmNlIGluc3RhbmNlIHR5cGUgdG8gYmUgYm91bmQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCaW5kSW5zdGFuY2VUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbnljYXN0SWQ6IEFueWNhc3QgRUlQIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHB1YmxpYyBhbnljYXN0SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiaW5kSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBjbG91ZCByZXNvdXJjZSBpbnN0YW5jZSB0byBiZSBib3VuZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYmluZEluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiaW5kSW5zdGFuY2VSZWdpb25JZDogVGhlIHJlZ2lvbiBJRCBvZiB0aGUgY2xvdWQgcmVzb3VyY2UgaW5zdGFuY2UgdG8gYmUgYm91bmQuXG4gICAgICovXG4gICAgcHVibGljIGJpbmRJbnN0YW5jZVJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmluZEluc3RhbmNlVHlwZTogVGhlIGNsb3VkIHJlc291cmNlIGluc3RhbmNlIHR5cGUgdG8gYmUgYm91bmQuIFZhbGlkIHZhbHVlOiBTbGJJbnN0YW5jZSwgU0xCIGluc3RhbmNlIG9mIHByaXZhdGUgbmV0d29yayB0eXBlLlxuICAgICAqL1xuICAgIHB1YmxpYyBiaW5kSW5zdGFuY2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpBbnljYXN0RUlQQXNzb2NpYXRpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FueWNhc3RFSVBBc3NvY2lhdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQW55Y2FzdEVJUEFzc29jaWF0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBbnljYXN0SWQgPSB0aGlzLmdldEF0dCgnQW55Y2FzdElkJyk7XG4gICAgICAgIHRoaXMuYXR0ckJpbmRJbnN0YW5jZUlkID0gdGhpcy5nZXRBdHQoJ0JpbmRJbnN0YW5jZUlkJyk7XG4gICAgICAgIHRoaXMuYXR0ckJpbmRJbnN0YW5jZVJlZ2lvbklkID0gdGhpcy5nZXRBdHQoJ0JpbmRJbnN0YW5jZVJlZ2lvbklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckJpbmRJbnN0YW5jZVR5cGUgPSB0aGlzLmdldEF0dCgnQmluZEluc3RhbmNlVHlwZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hbnljYXN0SWQgPSBwcm9wcy5hbnljYXN0SWQ7XG4gICAgICAgIHRoaXMuYmluZEluc3RhbmNlSWQgPSBwcm9wcy5iaW5kSW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5iaW5kSW5zdGFuY2VSZWdpb25JZCA9IHByb3BzLmJpbmRJbnN0YW5jZVJlZ2lvbklkO1xuICAgICAgICB0aGlzLmJpbmRJbnN0YW5jZVR5cGUgPSBwcm9wcy5iaW5kSW5zdGFuY2VUeXBlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFueWNhc3RJZDogdGhpcy5hbnljYXN0SWQsXG4gICAgICAgICAgICBiaW5kSW5zdGFuY2VJZDogdGhpcy5iaW5kSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGJpbmRJbnN0YW5jZVJlZ2lvbklkOiB0aGlzLmJpbmRJbnN0YW5jZVJlZ2lvbklkLFxuICAgICAgICAgICAgYmluZEluc3RhbmNlVHlwZTogdGhpcy5iaW5kSW5zdGFuY2VUeXBlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBbnljYXN0RUlQQXNzb2NpYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6QmdwR3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQmdwR3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVlckFzbjogVGhlIEFTIG51bWJlciBvZiB0aGUgQkdQIHBlZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVlckFzbjogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlcklkOiBUaGUgSUQgb2YgdGhlIFZCUi5cbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dGhLZXk6IFRoZSBhdXRoZW50aWNhdGlvbiBrZXkgb2YgdGhlIEJHUCBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRoS2V5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIEJHUCBncm91cC4gVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICogSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzRmFrZUFzbjogQSByb3V0ZXIgdGhhdCBydW5zIEJHUCB0eXBpY2FsbHkgYmVsb25ncyB0byBvbmx5IG9uZSBBUy4gSW4gc29tZSBjYXNlcywgZm9yIGV4YW1wbGUsXG4gICAgICogdGhlIEFTIG5lZWRzIHRvIGJlIG1pZ3JhdGVkIG9yIGlzIG1lcmdlZCB3aXRoIGFub3RoZXIgQVMsIGEgbmV3IEFTIG51bWJlciByZXBsYWNlc1xuICAgICAqIHRoZSBvcmlnaW5hbCBvbmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNGYWtlQXNuPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2NhbEFzbjogVGhlIEFTIG51bWJlciBvbiB0aGUgQWxpYmFiYSBDbG91ZCBzaWRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvY2FsQXNuPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBCR1AgZ3JvdXAuIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhblxuICAgICAqIGNvbnRhaW4gZGlnaXRzLCBwZXJpb2RzICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIFRoZSBuYW1lIG11c3Qgc3RhcnRcbiAgICAgKiB3aXRoIGEgbGV0dGVyIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQmdwR3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQmdwR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCZ3BHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2FsQXNuJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmxvY2FsQXNuKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRoS2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmF1dGhLZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJvdXRlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb3V0ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVlckFzbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wZWVyQXNuKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZWVyQXNuJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBlZXJBc24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzRmFrZUFzbicsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuaXNGYWtlQXNuKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQmdwR3JvdXBQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpCZ3BHcm91cGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQmdwR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpCZ3BHcm91cGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NCZ3BHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQmdwR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBQZWVyQXNuOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlZXJBc24pLFxuICAgICAgUm91dGVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucm91dGVySWQpLFxuICAgICAgQXV0aEtleTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hdXRoS2V5KSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIElzRmFrZUFzbjogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXNGYWtlQXNuKSxcbiAgICAgIExvY2FsQXNuOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvY2FsQXNuKSxcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpCZ3BHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0JncEdyb3VwIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OkJncEdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQmdwR3JvdXBJZDogVGhlIElEIG9mIHRoZSBCR1AgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCZ3BHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBCR1AgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZWVyQXNuOiBUaGUgQVMgbnVtYmVyIG9mIHRoZSBCR1AgcGVlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGVlckFzbjogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlcklkOiBUaGUgSUQgb2YgdGhlIFZCUi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcm91dGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRoS2V5OiBUaGUgYXV0aGVudGljYXRpb24ga2V5IG9mIHRoZSBCR1AgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGF1dGhLZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBCR1AgZ3JvdXAuIFRoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIDIgdG8gMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc0Zha2VBc246IEEgcm91dGVyIHRoYXQgcnVucyBCR1AgdHlwaWNhbGx5IGJlbG9uZ3MgdG8gb25seSBvbmUgQVMuIEluIHNvbWUgY2FzZXMsIGZvciBleGFtcGxlLFxuICAgICAqIHRoZSBBUyBuZWVkcyB0byBiZSBtaWdyYXRlZCBvciBpcyBtZXJnZWQgd2l0aCBhbm90aGVyIEFTLCBhIG5ldyBBUyBudW1iZXIgcmVwbGFjZXNcbiAgICAgKiB0aGUgb3JpZ2luYWwgb25lLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc0Zha2VBc246IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9jYWxBc246IFRoZSBBUyBudW1iZXIgb24gdGhlIEFsaWJhYmEgQ2xvdWQgc2lkZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9jYWxBc246IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgQkdQIGdyb3VwLiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW5cbiAgICAgKiBjb250YWluIGRpZ2l0cywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBUaGUgbmFtZSBtdXN0IHN0YXJ0XG4gICAgICogd2l0aCBhIGxldHRlciBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6QmdwR3JvdXBgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0JncEdyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NCZ3BHcm91cC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQmdwR3JvdXBJZCA9IHRoaXMuZ2V0QXR0KCdCZ3BHcm91cElkJyk7XG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSB0aGlzLmdldEF0dCgnTmFtZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5wZWVyQXNuID0gcHJvcHMucGVlckFzbjtcbiAgICAgICAgdGhpcy5yb3V0ZXJJZCA9IHByb3BzLnJvdXRlcklkO1xuICAgICAgICB0aGlzLmF1dGhLZXkgPSBwcm9wcy5hdXRoS2V5O1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuaXNGYWtlQXNuID0gcHJvcHMuaXNGYWtlQXNuO1xuICAgICAgICB0aGlzLmxvY2FsQXNuID0gcHJvcHMubG9jYWxBc247XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGVlckFzbjogdGhpcy5wZWVyQXNuLFxuICAgICAgICAgICAgcm91dGVySWQ6IHRoaXMucm91dGVySWQsXG4gICAgICAgICAgICBhdXRoS2V5OiB0aGlzLmF1dGhLZXksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGlzRmFrZUFzbjogdGhpcy5pc0Zha2VBc24sXG4gICAgICAgICAgICBsb2NhbEFzbjogdGhpcy5sb2NhbEFzbixcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQmdwR3JvdXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6QmdwTmV0d29ya2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NCZ3BOZXR3b3JrUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRzdENpZHJCbG9jazogVGhlIENJRFIgYmxvY2sgb2YgdGhlIHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCAoVlBDKSBvciB2U3dpdGNoIHRoYXQgeW91IHdhbnQgdG8gY29ubmVjdFxuICAgICAqIHRvIGEgZGF0YSBjZW50ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZHN0Q2lkckJsb2NrOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVySWQ6IFRoZSBJRCBvZiB0aGUgdlJvdXRlciBhc3NvY2lhdGVkIHdpdGggdGhlIHJvdXRlciBpbnRlcmZhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NCZ3BOZXR3b3JrUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0JncE5ldHdvcmtQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCZ3BOZXR3b3JrUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkc3RDaWRyQmxvY2snLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZHN0Q2lkckJsb2NrKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkc3RDaWRyQmxvY2snLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZHN0Q2lkckJsb2NrKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yb3V0ZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucm91dGVySWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQmdwTmV0d29ya1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OkJncE5ldHdvcmtgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0JncE5ldHdvcmtQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpCZ3BOZXR3b3JrYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0JncE5ldHdvcmtQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0JncE5ldHdvcmtQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEc3RDaWRyQmxvY2s6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZHN0Q2lkckJsb2NrKSxcbiAgICAgIFJvdXRlcklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvdXRlcklkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OkJncE5ldHdvcmtgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NCZ3BOZXR3b3JrIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OkJncE5ldHdvcmtcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEc3RDaWRyQmxvY2s6IFRoZSBDSURSIGJsb2NrIG9mIHRoZSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQykgb3IgdlN3aXRjaCB0aGF0IHlvdSB3YW50IHRvIGNvbm5lY3RcbnRvIGEgZGF0YSBjZW50ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEc3RDaWRyQmxvY2s6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUm91dGVySWQ6IFRoZSBJRCBvZiB0aGUgdlJvdXRlciBhc3NvY2lhdGVkIHdpdGggdGhlIHJvdXRlciBpbnRlcmZhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb3V0ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZHN0Q2lkckJsb2NrOiBUaGUgQ0lEUiBibG9jayBvZiB0aGUgdmlydHVhbCBwcml2YXRlIGNsb3VkIChWUEMpIG9yIHZTd2l0Y2ggdGhhdCB5b3Ugd2FudCB0byBjb25uZWN0XG4gICAgICogdG8gYSBkYXRhIGNlbnRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgZHN0Q2lkckJsb2NrOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVySWQ6IFRoZSBJRCBvZiB0aGUgdlJvdXRlciBhc3NvY2lhdGVkIHdpdGggdGhlIHJvdXRlciBpbnRlcmZhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJvdXRlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpCZ3BOZXR3b3JrYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NCZ3BOZXR3b3JrUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NCZ3BOZXR3b3JrLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJEc3RDaWRyQmxvY2sgPSB0aGlzLmdldEF0dCgnRHN0Q2lkckJsb2NrJyk7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlcklkID0gdGhpcy5nZXRBdHQoJ1JvdXRlcklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRzdENpZHJCbG9jayA9IHByb3BzLmRzdENpZHJCbG9jaztcbiAgICAgICAgdGhpcy5yb3V0ZXJJZCA9IHByb3BzLnJvdXRlcklkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRzdENpZHJCbG9jazogdGhpcy5kc3RDaWRyQmxvY2ssXG4gICAgICAgICAgICByb3V0ZXJJZDogdGhpcy5yb3V0ZXJJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQmdwTmV0d29ya1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpCZ3BQZWVyYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0JncFBlZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmdwR3JvdXBJZDogVGhlIElEIG9mIHRoZSBCR1AgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmdwR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZUJmZDogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIHRoZSBCaWRpcmVjdGlvbmFsIEZvcndhcmRpbmcgRGV0ZWN0aW9uIChCRkQpIGZlYXR1cmUuXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIHRydWU6IGVuYWJsZXMgQkZELlxuICAgICAqIGZhbHNlOiBkaXNhYmxlcyBCRkQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlQmZkPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZWVySXBBZGRyZXNzOiBUaGUgSVAgYWRkcmVzcyBvZiB0aGUgQkdQIHBlZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVlcklwQWRkcmVzcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NCZ3BQZWVyUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0JncFBlZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NCZ3BQZWVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZWVySXBBZGRyZXNzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBlZXJJcEFkZHJlc3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZUJmZCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZW5hYmxlQmZkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiZ3BHcm91cElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJncEdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JncEdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYmdwR3JvdXBJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NCZ3BQZWVyUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6QmdwUGVlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQmdwUGVlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OkJncFBlZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQmdwUGVlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQmdwUGVlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEJncEdyb3VwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYmdwR3JvdXBJZCksXG4gICAgICBFbmFibGVCZmQ6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZUJmZCksXG4gICAgICBQZWVySXBBZGRyZXNzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlZXJJcEFkZHJlc3MpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6QmdwUGVlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0JncFBlZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlZQQzo6QmdwUGVlclwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEJncFBlZXJJZDogVGhlIElEIG9mIHRoZSBCR1AgcGVlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckJncFBlZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmdwR3JvdXBJZDogVGhlIElEIG9mIHRoZSBCR1AgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGJncEdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVCZmQ6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSB0aGUgQmlkaXJlY3Rpb25hbCBGb3J3YXJkaW5nIERldGVjdGlvbiAoQkZEKSBmZWF0dXJlLlxuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBlbmFibGVzIEJGRC5cbiAgICAgKiBmYWxzZTogZGlzYWJsZXMgQkZELlxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVCZmQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVlcklwQWRkcmVzczogVGhlIElQIGFkZHJlc3Mgb2YgdGhlIEJHUCBwZWVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBwZWVySXBBZGRyZXNzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpCZ3BQZWVyYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NCZ3BQZWVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NCZ3BQZWVyLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJCZ3BQZWVySWQgPSB0aGlzLmdldEF0dCgnQmdwUGVlcklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmJncEdyb3VwSWQgPSBwcm9wcy5iZ3BHcm91cElkO1xuICAgICAgICB0aGlzLmVuYWJsZUJmZCA9IHByb3BzLmVuYWJsZUJmZDtcbiAgICAgICAgdGhpcy5wZWVySXBBZGRyZXNzID0gcHJvcHMucGVlcklwQWRkcmVzcztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBiZ3BHcm91cElkOiB0aGlzLmJncEdyb3VwSWQsXG4gICAgICAgICAgICBlbmFibGVCZmQ6IHRoaXMuZW5hYmxlQmZkLFxuICAgICAgICAgICAgcGVlcklwQWRkcmVzczogdGhpcy5wZWVySXBBZGRyZXNzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NCZ3BQZWVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OkNvbW1vbkJhbmR3aWR0aFBhY2thZ2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiYW5kd2lkdGg6IFRoZSBwZWFrIGJhbmR3aWR0aCBvZiB0aGUgSW50ZXJuZXQgU2hhcmVkIEJhbmR3aWR0aCBpbnN0YW5jZS4gVW5pdDogTWJpdC9zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhbmR3aWR0aDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIEludGVybmV0IFNoYXJlZCBCYW5kd2lkdGggaW5zdGFuY2UuXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlcixcbiAgICAgKiBhbmQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldENoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1vZGVsIG9mIHRoZSBJbnRlcm5ldCBTaGFyZWQgQmFuZHdpZHRoIGluc3RhbmNlLiBBbGxvd2VkIHZhbHVlczpcbiAgICAgKiBQYXlCeUJhbmR3aWR0aCAoZGVmYXVsdCk6IEJpbGxlZCBieSBiYW5kd2lkdGguXG4gICAgICogUGF5Qnk5NTogQ2hhcmdlZCBhdCBFbmhhbmNlZCA5NS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldENoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXNwOiBMaW5lIHR5cGUgb2YgRUlQLCB2YWx1ZTogQkdQIChtdWx0aS1saW5lKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc3A/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIEludGVybmV0IFNoYXJlZCBCYW5kd2lkdGggaW5zdGFuY2UuXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgbnVtYmVycywgcGVyaW9kc1xuICAgICAqICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgYW5kIGNhbm5vdFxuICAgICAqIHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJhdGlvOiBUaGUgbWluaW11bSBjb25zdW1wdGlvbiByYXRpbyBvZiB0aGUgSW50ZXJuZXQgU2hhcmVkIEJhbmR3aWR0aCBpbnN0YW5jZS4gRGVmYXVsdCB0byAxMDAuXG4gICAgICogTm90ZSBUaGlzIHBhcmFtZXRlciBpcyBvbmx5IHN1cHBvcnRlZCBvbiB0aGUgQ2hpbmEgc2l0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByYXRpbz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2UuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgem9uZTogWm9uZSBJZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZGVzY3JpcHRpb24pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kZXNjcmlwdGlvbikgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMixcbiAgICAgICAgICAgIG1heDogMjU2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignem9uZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy56b25lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc3AnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaXNwKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiYW5kd2lkdGgnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYmFuZHdpZHRoKSk7XG4gICAgaWYocHJvcGVydGllcy5iYW5kd2lkdGggJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmJhbmR3aWR0aCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFuZHdpZHRoJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYmFuZHdpZHRoLFxuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhbmR3aWR0aCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5iYW5kd2lkdGgpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJhdGlvICYmICh0eXBlb2YgcHJvcGVydGllcy5yYXRpbykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmF0aW8nLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yYXRpbyxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyYXRpbycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5yYXRpbykpO1xuICAgIGlmKHByb3BlcnRpZXMudGFncyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRhZ3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50YWdzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWdzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy50YWdzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldENoYXJnZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW50ZXJuZXRDaGFyZ2VUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5uYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMubmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLm5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6Q29tbW9uQmFuZHdpZHRoUGFja2FnZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OkNvbW1vbkJhbmR3aWR0aFBhY2thZ2VgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEJhbmR3aWR0aDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5iYW5kd2lkdGgpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgSW50ZXJuZXRDaGFyZ2VUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmludGVybmV0Q2hhcmdlVHlwZSksXG4gICAgICBJU1A6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXNwKSxcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgICBSYXRpbzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yYXRpbyksXG4gICAgICBSZXNvdXJjZUdyb3VwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSxcbiAgICAgIFRhZ3M6IHJvcy5saXN0TWFwcGVyKHJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhZ3MpLFxuICAgICAgWm9uZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy56b25lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OkNvbW1vbkJhbmR3aWR0aFBhY2thZ2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OkNvbW1vbkJhbmR3aWR0aFBhY2thZ2VcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBCYW5kd2lkdGhQYWNrYWdlSWQ6IFRoZSBJRCBvZiB0aGUgSW50ZXJuZXQgU2hhcmVkIEJhbmR3aWR0aCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckJhbmR3aWR0aFBhY2thZ2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoOiBUaGUgcGVhayBiYW5kd2lkdGggb2YgdGhlIEludGVybmV0IFNoYXJlZCBCYW5kd2lkdGggaW5zdGFuY2UuIFVuaXQ6IE1iaXQvcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYmFuZHdpZHRoOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgSW50ZXJuZXQgU2hhcmVkIEJhbmR3aWR0aCBpbnN0YW5jZS5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAyIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLFxuICAgICAqIGFuZCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0Q2hhcmdlVHlwZTogVGhlIGJpbGxpbmcgbW9kZWwgb2YgdGhlIEludGVybmV0IFNoYXJlZCBCYW5kd2lkdGggaW5zdGFuY2UuIEFsbG93ZWQgdmFsdWVzOlxuICAgICAqIFBheUJ5QmFuZHdpZHRoIChkZWZhdWx0KTogQmlsbGVkIGJ5IGJhbmR3aWR0aC5cbiAgICAgKiBQYXlCeTk1OiBDaGFyZ2VkIGF0IEVuaGFuY2VkIDk1LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldENoYXJnZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc3A6IExpbmUgdHlwZSBvZiBFSVAsIHZhbHVlOiBCR1AgKG11bHRpLWxpbmUpLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc3A6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgSW50ZXJuZXQgU2hhcmVkIEJhbmR3aWR0aCBpbnN0YW5jZS5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW4gY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzLCBwZXJpb2RzXG4gICAgICogKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gVGhlIG5hbWUgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBhbmQgY2Fubm90XG4gICAgICogc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmF0aW86IFRoZSBtaW5pbXVtIGNvbnN1bXB0aW9uIHJhdGlvIG9mIHRoZSBJbnRlcm5ldCBTaGFyZWQgQmFuZHdpZHRoIGluc3RhbmNlLiBEZWZhdWx0IHRvIDEwMC5cbiAgICAgKiBOb3RlIFRoaXMgcGFyYW1ldGVyIGlzIG9ubHkgc3VwcG9ydGVkIG9uIHRoZSBDaGluYSBzaXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByYXRpbzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnczogUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZS5UYWdzUHJvcGVydHlbXSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB6b25lOiBab25lIElkLlxuICAgICAqL1xuICAgIHB1YmxpYyB6b25lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpDb21tb25CYW5kd2lkdGhQYWNrYWdlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJCYW5kd2lkdGhQYWNrYWdlSWQgPSB0aGlzLmdldEF0dCgnQmFuZHdpZHRoUGFja2FnZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmJhbmR3aWR0aCA9IHByb3BzLmJhbmR3aWR0aDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmludGVybmV0Q2hhcmdlVHlwZSA9IHByb3BzLmludGVybmV0Q2hhcmdlVHlwZTtcbiAgICAgICAgdGhpcy5pc3AgPSBwcm9wcy5pc3A7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgICAgIHRoaXMucmF0aW8gPSBwcm9wcy5yYXRpbztcbiAgICAgICAgdGhpcy5yZXNvdXJjZUdyb3VwSWQgPSBwcm9wcy5yZXNvdXJjZUdyb3VwSWQ7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgICAgIHRoaXMuem9uZSA9IHByb3BzLnpvbmU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFuZHdpZHRoOiB0aGlzLmJhbmR3aWR0aCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW50ZXJuZXRDaGFyZ2VUeXBlOiB0aGlzLmludGVybmV0Q2hhcmdlVHlwZSxcbiAgICAgICAgICAgIGlzcDogdGhpcy5pc3AsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICByYXRpbzogdGhpcy5yYXRpbyxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgICAgICB6b25lOiB0aGlzLnpvbmUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBUYWdzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGFnc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OkNvbW1vbkJhbmR3aWR0aFBhY2thZ2UuVGFnc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OkNvbW1vbkJhbmR3aWR0aFBhY2thZ2UuVGFnc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFZhbHVlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgIEtleTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OkNvbW1vbkJhbmR3aWR0aFBhY2thZ2VJcGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlSXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoUGFja2FnZUlkOiBUaGUgSUQgb2YgdGhlIEludGVybmV0IFNoYXJlZCBCYW5kd2lkdGggaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFuZHdpZHRoUGFja2FnZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWlwczogTGlzdCBvZiBlaXAgYXNzb2NpYXRlZCB3aXRoIHRoZSBJbnRlcm5ldCBTaGFyZWQgQmFuZHdpZHRoIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVpcHM6IEFycmF5PFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VJcC5FaXBzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VJcFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlSXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlSXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VpcHMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZWlwcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZWlwcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VJcF9FaXBzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmVpcHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhbmR3aWR0aFBhY2thZ2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5iYW5kd2lkdGhQYWNrYWdlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhbmR3aWR0aFBhY2thZ2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5iYW5kd2lkdGhQYWNrYWdlSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZUlwUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6Q29tbW9uQmFuZHdpZHRoUGFja2FnZUlwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlSXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpDb21tb25CYW5kd2lkdGhQYWNrYWdlSXBgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZUlwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlSXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBCYW5kd2lkdGhQYWNrYWdlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYmFuZHdpZHRoUGFja2FnZUlkKSxcbiAgICAgIEVpcHM6IHJvcy5saXN0TWFwcGVyKHJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VJcEVpcHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZWlwcyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpDb21tb25CYW5kd2lkdGhQYWNrYWdlSXBgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlSXAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlZQQzo6Q29tbW9uQmFuZHdpZHRoUGFja2FnZUlwXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWxsb2NhdGlvbklkczogQWxsIGVpcCBhbGxvY2F0aW9uIGlkcyBvZiBjb21tb24gYmFuZHdpZHRoIHBhY2thZ2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBbGxvY2F0aW9uSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElwQWRkcmVzc2VzOiBBbGwgZWlwIGFkZHJlc3NlcyBvZiBjb21tb24gYmFuZHdpZHRoIHBhY2thZ2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJcEFkZHJlc3Nlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoUGFja2FnZUlkOiBUaGUgSUQgb2YgdGhlIEludGVybmV0IFNoYXJlZCBCYW5kd2lkdGggaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGJhbmR3aWR0aFBhY2thZ2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVpcHM6IExpc3Qgb2YgZWlwIGFzc29jaWF0ZWQgd2l0aCB0aGUgSW50ZXJuZXQgU2hhcmVkIEJhbmR3aWR0aCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZWlwczogQXJyYXk8Um9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZUlwLkVpcHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpDb21tb25CYW5kd2lkdGhQYWNrYWdlSXBgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VJcFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZUlwLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBbGxvY2F0aW9uSWRzID0gdGhpcy5nZXRBdHQoJ0FsbG9jYXRpb25JZHMnKTtcbiAgICAgICAgdGhpcy5hdHRySXBBZGRyZXNzZXMgPSB0aGlzLmdldEF0dCgnSXBBZGRyZXNzZXMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYmFuZHdpZHRoUGFja2FnZUlkID0gcHJvcHMuYmFuZHdpZHRoUGFja2FnZUlkO1xuICAgICAgICB0aGlzLmVpcHMgPSBwcm9wcy5laXBzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJhbmR3aWR0aFBhY2thZ2VJZDogdGhpcy5iYW5kd2lkdGhQYWNrYWdlSWQsXG4gICAgICAgICAgICBlaXBzOiB0aGlzLmVpcHMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VJcFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VJcCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRWlwc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBiYW5kd2lkdGg6IFRoZSBtYXhpbXVtIGFsbG9jYXRhYmxlIGJhbmR3aWR0aCB2YWx1ZSBpbiBNYnBzIHdpdGhpbiB0aGUgc2hhcmVkIGJhbmR3aWR0aC5cbiAgICAgKiAwIHdoaWNoIG1lYW5zIG5vIGxpbWl0LlxuICAgICAqIERlZmF1bHQgdG8gbm8gbGltaXQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBiYW5kd2lkdGg/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWxsb2NhdGlvbklkOiBUaGUgSUQgb2YgdGhlIEVJUCBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFsbG9jYXRpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRWlwc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFaXBzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZUlwX0VpcHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmJhbmR3aWR0aCAmJiAodHlwZW9mIHByb3BlcnRpZXMuYmFuZHdpZHRoKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiYW5kd2lkdGgnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5iYW5kd2lkdGgsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFuZHdpZHRoJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmJhbmR3aWR0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWxsb2NhdGlvbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFsbG9jYXRpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWxsb2NhdGlvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFsbG9jYXRpb25JZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJFaXBzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6Q29tbW9uQmFuZHdpZHRoUGFja2FnZUlwLkVpcHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEVpcHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpDb21tb25CYW5kd2lkdGhQYWNrYWdlSXAuRWlwc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlSXBFaXBzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2VJcF9FaXBzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBCYW5kd2lkdGg6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYmFuZHdpZHRoKSxcbiAgICAgIEFsbG9jYXRpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hbGxvY2F0aW9uSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OkN1c3RvbWVyR2F0ZXdheWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDdXN0b21lckdhdGV3YXlQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXBBZGRyZXNzOiBUaGUgSVAgYWRkcmVzcyBvZiB0aGUgdXNlciBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlwQWRkcmVzczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgdXNlciBnYXRld2F5LlxuICAgICAqIFRoZSBsZW5ndGggaXMgMi0yNTYgY2hhcmFjdGVycyBhbmQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UsIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSB1c2VyIGdhdGV3YXkuXG4gICAgICogVGhlIGxlbmd0aCBpcyAyLTEyOCBjaGFyYWN0ZXJzIGFuZCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZS4gSXQgY2FuIGNvbnRhaW4gbnVtYmVycywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGRhc2hlcyAoLSkuIEJ1dCBpdCBjYW4ndCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDdXN0b21lckdhdGV3YXlQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tZXJHYXRld2F5UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ3VzdG9tZXJHYXRld2F5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDI1NixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwQWRkcmVzcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pcEFkZHJlc3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwQWRkcmVzcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pcEFkZHJlc3MpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5uYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDEyOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0N1c3RvbWVyR2F0ZXdheVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OkN1c3RvbWVyR2F0ZXdheWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ3VzdG9tZXJHYXRld2F5UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6Q3VzdG9tZXJHYXRld2F5YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0N1c3RvbWVyR2F0ZXdheVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ3VzdG9tZXJHYXRld2F5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgSXBBZGRyZXNzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlwQWRkcmVzcyksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6Q3VzdG9tZXJHYXRld2F5YFxuICovXG5leHBvcnQgY2xhc3MgUm9zQ3VzdG9tZXJHYXRld2F5IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OkN1c3RvbWVyR2F0ZXdheVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEN1c3RvbWVyR2F0ZXdheUlkOiBUaGUgSUQgb2YgdGhlIHVzZXIgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckN1c3RvbWVyR2F0ZXdheUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpcEFkZHJlc3M6IFRoZSBJUCBhZGRyZXNzIG9mIHRoZSB1c2VyIGdhdGV3YXkuXG4gICAgICovXG4gICAgcHVibGljIGlwQWRkcmVzczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgdXNlciBnYXRld2F5LlxuICAgICAqIFRoZSBsZW5ndGggaXMgMi0yNTYgY2hhcmFjdGVycyBhbmQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UsIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSB1c2VyIGdhdGV3YXkuXG4gICAgICogVGhlIGxlbmd0aCBpcyAyLTEyOCBjaGFyYWN0ZXJzIGFuZCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZS4gSXQgY2FuIGNvbnRhaW4gbnVtYmVycywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGRhc2hlcyAoLSkuIEJ1dCBpdCBjYW4ndCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpWUEM6OkN1c3RvbWVyR2F0ZXdheWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ3VzdG9tZXJHYXRld2F5UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDdXN0b21lckdhdGV3YXkuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckN1c3RvbWVyR2F0ZXdheUlkID0gdGhpcy5nZXRBdHQoJ0N1c3RvbWVyR2F0ZXdheUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmlwQWRkcmVzcyA9IHByb3BzLmlwQWRkcmVzcztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlwQWRkcmVzczogdGhpcy5pcEFkZHJlc3MsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ3VzdG9tZXJHYXRld2F5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OkRoY3BPcHRpb25zU2V0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0RoY3BPcHRpb25zU2V0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRoY3BPcHRpb25zU2V0RGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgREhDUCBvcHRpb25zIHNldC5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAyIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaGNwT3B0aW9uc1NldERlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRoY3BPcHRpb25zU2V0TmFtZTogVGhlIG5hbWUgb2YgdGhlIERIQ1Agb3B0aW9ucyBzZXQuXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBkaWdpdHMsIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgYSBDaGluZXNlIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaGNwT3B0aW9uc1NldE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZG9tYWluTmFtZTogVGhlIHJvb3QgZG9tYWluLCBmb3IgZXhhbXBsZSwgZXhhbXBsZS5jb20uXG4gICAgICogQWZ0ZXIgYSBESENQIG9wdGlvbnMgc2V0IGlzIGFzc29jaWF0ZWQgd2l0aCBhIFZpcnR1YWwgUHJpdmF0ZSBDbG91ZCAoVlBDKSBuZXR3b3JrLCB0aGUgcm9vdCBkb21haW4gaW4gdGhlIERIQ1Agb3B0aW9ucyBzZXQgaXMgYXV0b21hdGljYWxseSBzeW5jaHJvbml6ZWQgdG8gdGhlIEVDUyBpbnN0YW5jZXMgaW4gdGhlIFZQQyBuZXR3b3JrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRvbWFpbk5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZG9tYWluTmFtZVNlcnZlcnM6IFRoZSBETlMgc2VydmVyIElQIGFkZHJlc3Nlcy4gTm90ZSBCZWZvcmUgeW91IHNwZWNpZnkgYW55IEROUyBzZXJ2ZXIgSVAgYWRkcmVzcywgYWxsIEVDUyBpbnN0YW5jZXMgaW4gdGhlIGFzc29jaWF0ZWQgVlBDIG5ldHdvcmsgdXNlIHRoZSBJUCBhZGRyZXNzZXMgb2YgdGhlIEFsaWJhYmEgQ2xvdWQgRE5TIHNlcnZlcnMsIHdoaWNoIGFyZSAxMDAuMTAwLjIuMTM2IGFuZCAxMDAuMTAwLjIuMTM4LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRvbWFpbk5hbWVTZXJ2ZXJzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NEaGNwT3B0aW9uc1NldFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEaGNwT3B0aW9uc1NldFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RoY3BPcHRpb25zU2V0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkb21haW5OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RoY3BPcHRpb25zU2V0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaGNwT3B0aW9uc1NldE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RoY3BPcHRpb25zU2V0RGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGhjcE9wdGlvbnNTZXREZXNjcmlwdGlvbikpO1xuICAgIGlmKHByb3BlcnRpZXMuZG9tYWluTmFtZVNlcnZlcnMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5kb21haW5OYW1lU2VydmVycykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRvbWFpbk5hbWVTZXJ2ZXJzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZG9tYWluTmFtZVNlcnZlcnMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZG9tYWluTmFtZVNlcnZlcnMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiA0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkb21haW5OYW1lU2VydmVycycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuZG9tYWluTmFtZVNlcnZlcnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRGhjcE9wdGlvbnNTZXRQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpEaGNwT3B0aW9uc1NldGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGhjcE9wdGlvbnNTZXRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpEaGNwT3B0aW9uc1NldGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEaGNwT3B0aW9uc1NldFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRGhjcE9wdGlvbnNTZXRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEaGNwT3B0aW9uc1NldERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRoY3BPcHRpb25zU2V0RGVzY3JpcHRpb24pLFxuICAgICAgRGhjcE9wdGlvbnNTZXROYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRoY3BPcHRpb25zU2V0TmFtZSksXG4gICAgICBEb21haW5OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRvbWFpbk5hbWUpLFxuICAgICAgRG9tYWluTmFtZVNlcnZlcnM6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmRvbWFpbk5hbWVTZXJ2ZXJzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OkRoY3BPcHRpb25zU2V0YFxuICovXG5leHBvcnQgY2xhc3MgUm9zRGhjcE9wdGlvbnNTZXQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlZQQzo6RGhjcE9wdGlvbnNTZXRcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEaGNwT3B0aW9uc1NldElkOiBUaGUgSUQgb2YgdGhlIERIQ1Agb3B0aW9ucyBzZXQgdGhhdCBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGhjcE9wdGlvbnNTZXRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGhjcE9wdGlvbnNTZXREZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBESENQIG9wdGlvbnMgc2V0LlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIDIgdG8gMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHB1YmxpYyBkaGNwT3B0aW9uc1NldERlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGhjcE9wdGlvbnNTZXROYW1lOiBUaGUgbmFtZSBvZiB0aGUgREhDUCBvcHRpb25zIHNldC5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW4gY29udGFpbiBsZXR0ZXJzLCBDaGluZXNlIGNoYXJhY3RlcnMsIGRpZ2l0cywgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBhIENoaW5lc2UgY2hhcmFjdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBkaGNwT3B0aW9uc1NldE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lOiBUaGUgcm9vdCBkb21haW4sIGZvciBleGFtcGxlLCBleGFtcGxlLmNvbS5cbiAgICAgKiBBZnRlciBhIERIQ1Agb3B0aW9ucyBzZXQgaXMgYXNzb2NpYXRlZCB3aXRoIGEgVmlydHVhbCBQcml2YXRlIENsb3VkIChWUEMpIG5ldHdvcmssIHRoZSByb290IGRvbWFpbiBpbiB0aGUgREhDUCBvcHRpb25zIHNldCBpcyBhdXRvbWF0aWNhbGx5IHN5bmNocm9uaXplZCB0byB0aGUgRUNTIGluc3RhbmNlcyBpbiB0aGUgVlBDIG5ldHdvcmsuXG4gICAgICovXG4gICAgcHVibGljIGRvbWFpbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkb21haW5OYW1lU2VydmVyczogVGhlIEROUyBzZXJ2ZXIgSVAgYWRkcmVzc2VzLiBOb3RlIEJlZm9yZSB5b3Ugc3BlY2lmeSBhbnkgRE5TIHNlcnZlciBJUCBhZGRyZXNzLCBhbGwgRUNTIGluc3RhbmNlcyBpbiB0aGUgYXNzb2NpYXRlZCBWUEMgbmV0d29yayB1c2UgdGhlIElQIGFkZHJlc3NlcyBvZiB0aGUgQWxpYmFiYSBDbG91ZCBETlMgc2VydmVycywgd2hpY2ggYXJlIDEwMC4xMDAuMi4xMzYgYW5kIDEwMC4xMDAuMi4xMzguXG4gICAgICovXG4gICAgcHVibGljIGRvbWFpbk5hbWVTZXJ2ZXJzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6RGhjcE9wdGlvbnNTZXRgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0RoY3BPcHRpb25zU2V0UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NEaGNwT3B0aW9uc1NldC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRGhjcE9wdGlvbnNTZXRJZCA9IHRoaXMuZ2V0QXR0KCdEaGNwT3B0aW9uc1NldElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRoY3BPcHRpb25zU2V0RGVzY3JpcHRpb24gPSBwcm9wcy5kaGNwT3B0aW9uc1NldERlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmRoY3BPcHRpb25zU2V0TmFtZSA9IHByb3BzLmRoY3BPcHRpb25zU2V0TmFtZTtcbiAgICAgICAgdGhpcy5kb21haW5OYW1lID0gcHJvcHMuZG9tYWluTmFtZTtcbiAgICAgICAgdGhpcy5kb21haW5OYW1lU2VydmVycyA9IHByb3BzLmRvbWFpbk5hbWVTZXJ2ZXJzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRoY3BPcHRpb25zU2V0RGVzY3JpcHRpb246IHRoaXMuZGhjcE9wdGlvbnNTZXREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRoY3BPcHRpb25zU2V0TmFtZTogdGhpcy5kaGNwT3B0aW9uc1NldE5hbWUsXG4gICAgICAgICAgICBkb21haW5OYW1lOiB0aGlzLmRvbWFpbk5hbWUsXG4gICAgICAgICAgICBkb21haW5OYW1lU2VydmVyczogdGhpcy5kb21haW5OYW1lU2VydmVycyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRGhjcE9wdGlvbnNTZXRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6RGhjcE9wdGlvbnNTZXRBdHRhY2htZW50YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0RoY3BPcHRpb25zU2V0QXR0YWNobWVudFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaGNwT3B0aW9uc1NldElkOiBUaGUgSUQgb2YgdGhlIERIQ1Agb3B0aW9ucyBzZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGhjcE9wdGlvbnNTZXRJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQyBuZXR3b3JrIHRoYXQgaXMgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBESENQIG9wdGlvbnMgc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRGhjcE9wdGlvbnNTZXRBdHRhY2htZW50UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RoY3BPcHRpb25zU2V0QXR0YWNobWVudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RoY3BPcHRpb25zU2V0QXR0YWNobWVudFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGhjcE9wdGlvbnNTZXRJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaGNwT3B0aW9uc1NldElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaGNwT3B0aW9uc1NldElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRoY3BPcHRpb25zU2V0SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cGNJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnRQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RoY3BPcHRpb25zU2V0QXR0YWNobWVudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OkRoY3BPcHRpb25zU2V0QXR0YWNobWVudGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0RoY3BPcHRpb25zU2V0QXR0YWNobWVudFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIERoY3BPcHRpb25zU2V0SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGhjcE9wdGlvbnNTZXRJZCksXG4gICAgICBWcGNJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnRgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlZQQzo6RGhjcE9wdGlvbnNTZXRBdHRhY2htZW50XCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGhjcE9wdGlvbnNTZXRJZDogVGhlIElEIG9mIHRoZSBESENQIG9wdGlvbnMgc2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGhjcE9wdGlvbnNTZXRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWcGNJZDogVGhlIElEIG9mIHRoZSBWUEMgbmV0d29yay5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaGNwT3B0aW9uc1NldElkOiBUaGUgSUQgb2YgdGhlIERIQ1Agb3B0aW9ucyBzZXQuXG4gICAgICovXG4gICAgcHVibGljIGRoY3BPcHRpb25zU2V0SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVGhlIElEIG9mIHRoZSBWUEMgbmV0d29yayB0aGF0IGlzIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgREhDUCBvcHRpb25zIHNldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpWUEM6OkRoY3BPcHRpb25zU2V0QXR0YWNobWVudGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRGhjcE9wdGlvbnNTZXRBdHRhY2htZW50UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnQuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckRoY3BPcHRpb25zU2V0SWQgPSB0aGlzLmdldEF0dCgnRGhjcE9wdGlvbnNTZXRJZCcpO1xuICAgICAgICB0aGlzLmF0dHJWcGNJZCA9IHRoaXMuZ2V0QXR0KCdWcGNJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kaGNwT3B0aW9uc1NldElkID0gcHJvcHMuZGhjcE9wdGlvbnNTZXRJZDtcbiAgICAgICAgdGhpcy52cGNJZCA9IHByb3BzLnZwY0lkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRoY3BPcHRpb25zU2V0SWQ6IHRoaXMuZGhjcE9wdGlvbnNTZXRJZCxcbiAgICAgICAgICAgIHZwY0lkOiB0aGlzLnZwY0lkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NEaGNwT3B0aW9uc1NldEF0dGFjaG1lbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6RUlQYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0VJUFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvUGF5OiBBdXRvbWF0aWMgUGF5bWVudC4gRGVmYXVsdCBpcyB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9QYXk/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhbmR3aWR0aDogQmFuZHdpZHRoIGZvciB0aGUgb3V0cHV0IG5ldHdvcmsuIERlZmF1bHQgaXMgNU1CLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhbmR3aWR0aD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvblByb3RlY3Rpb246IFdoZXRoZXIgdG8gZW5hYmxlIGRlbGV0aW9uIHByb3RlY3Rpb24uXG4gICAgICogRGVmYXVsdCB0byBGYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvblByb3RlY3Rpb24/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBPcHRpb25hbC4gVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBFSVAuIFRoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIDIgdG8gMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuIEl0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlQ2hhcmdlVHlwZTogVGhlIHJlc291cmNlIGNoYXJnZSB0eXBlLiBEZWZhdWx0IHZhbHVlIGlzIFBvc3RwYWlkXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0Q2hhcmdlVHlwZTogVGhlIG5ldHdvcmsgY2hhcmdlIHR5cGUuIFN1cHBvcnQgJ1BheUJ5QmFuZHdpZHRoJyBhbmQgJ1BheUJ5VHJhZmZpYycgb25seS4gRGVmYXVsdCBpcyBQYXlCeUJhbmR3aWR0aC4gUGF5QnlUcmFmZmljIHdpbGwgY2hhcmdlIGJ5IGhvdXIsIFBheUJ5QmFuZHdpZHRoIHdpbGwgY2hhcmdlIGJ5IGRheS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldENoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXNwOiBUaGUgbGluZSB0eXBlLiBZb3UgY2FuIHNldCB0aGlzIHBhcmFtZXRlciBvbmx5IHdoZW4geW91IGNyZWF0ZSBhIHBheS1hcy15b3UtZ28gRUlQLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQkdQOiBCR1AgKE11bHRpLUlTUCkgbGluZXMuIFVwIHRvIDg5IGhpZ2gtcXVhbGl0eSBCR1AgbGluZXMgYXJlIGF2YWlsYWJsZSB3b3JsZHdpZGUuIERpcmVjdCBjb25uZWN0aW9ucyB3aXRoIG11bHRpcGxlIEludGVybmV0IFNlcnZpY2UgUHJvdmlkZXJzIChJU1BzKSwgaW5jbHVkaW5nIFRlbGVjb20sIFVuaWNvbSwgTW9iaWxlLCBSYWlsY29tLCBOZXRjb20sIENFUk5FVCwgQ2hpbmEgQnJvYWRjYXN0IE5ldHdvcmssIERyLiBQZW5nLCBhbmQgRm91bmRlciwgY2FuIGJlIGVzdGFibGlzaGVkIGluIGFsbCByZWdpb25zIGluIG1haW5sYW5kIENoaW5hLlxuICAgICAqIEJHUF9QUk86IEJHUCAoTXVsdGktSVNQKSBQcm8gbGluZXMuIEJHUCAoTXVsdGktSVNQKSBQcm8gbGluZXMgb3B0aW1pemUgZGF0YSB0cmFuc21pc3Npb24gdG8gQ2hpbmEgYW5kIGltcHJvdmUgY29ubmVjdGlvbiBxdWFsaXR5IGZvciBpbnRlcm5hdGlvbmFsIHNlcnZpY2VzLiBDb21wYXJlZCB3aXRoIHRyYWRpdGlvbmFsIEJHUCAoTXVsdGktSVNQKSBsaW5lcywgQkdQIChNdWx0aS1JU1ApIFBybyBsaW5lcyBjYW4gYmUgdXNlZCB0byBlc3RhYmxpc2ggZGlyZWN0IGNvbm5lY3Rpb25zIHdpdGhvdXQgdXNpbmcgaW50ZXJuYXRpb25hbCBJU1Agc2VydmljZXMuIFRoZXJlZm9yZSwgQkdQIChNdWx0aS1JU1ApIFBybyBsaW5lcyByZWR1Y2UgbmV0d29yayBsYXRlbmN5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzcD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgRUlQLiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuIEl0IGNhbiBjb250YWluIG51bWJlcnMsIHBlcmlvZHMgKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gSXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyAgb3IgaHR0cHM6Ly9cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldG1vZGU6IFRoZSBuZXR3b3JrIHR5cGUuIFZhbGlkIHZhbHVlOiBwdWJsaWMgKHB1YmxpYyBuZXR3b3JrKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBuZXRtb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcmlvZDogUHJlcGFpZCB0aW1lIHBlcmlvZC4gV2hpbGUgY2hvb3NlIGJ5IHBheSBieSBtb250aCwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDkgb3IgMTIsIDI0LCAzNi4gXG4gICAgICogICBXaGlsZSBjaG9vc2UgcGF5IGJ5IHllYXIsIGl0IGNvdWxkIGJlIGZyb20gMSB0byAzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmljaW5nQ3ljbGU6IFByaWNlIGN5Y2xlIG9mIHRoZSByZXNvdXJjZS4gVGhpcyBwcm9wZXJ0eSBoYXMgbm8gZGVmYXVsdCB2YWx1ZS4gSWYgQ2hhcmdlVHlwZSBpcyBzcGVjaWZpZWQgYXMgUG9zdHBhaWQsIHRoaXMgdmFsdWUgd2lsbCBiZSBpZ25vcmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpY2luZ0N5Y2xlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGVpcC4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBlaXAuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zRUlQLlRhZ3NQcm9wZXJ0eVtdO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0VJUFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NFSVBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NFSVBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZUNoYXJnZVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VDaGFyZ2VUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VDaGFyZ2VUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlBvc3RwYWlkXCIsXCJQcmVwYWlkXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VDaGFyZ2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlICYmICh0eXBlb2YgcHJvcGVydGllcy5wcmljaW5nQ3ljbGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaWNpbmdDeWNsZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByaWNpbmdDeWNsZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJNb250aFwiLFwiWWVhclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaWNpbmdDeWNsZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcmljaW5nQ3ljbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzcCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pc3ApKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBlcmlvZCAmJiAodHlwZW9mIHByb3BlcnRpZXMucGVyaW9kKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2QnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wZXJpb2QsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogWzEsMiwzLDQsNSw2LDcsOCw5LDEyLDI0LDM2XSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wZXJpb2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0aW9uUHJvdGVjdGlvbicsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZGVsZXRpb25Qcm90ZWN0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRvUGF5Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5hdXRvUGF5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludGVybmV0Q2hhcmdlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW50ZXJuZXRDaGFyZ2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldENoYXJnZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUGF5QnlCYW5kd2lkdGhcIixcIlBheUJ5VHJhZmZpY1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0Q2hhcmdlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldG1vZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmV0bW9kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFuZHdpZHRoJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmJhbmR3aWR0aCkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFncyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRhZ3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50YWdzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWdzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0VJUF9UYWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRUlQUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6RUlQYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NFSVBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpFSVBgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRUlQUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NFSVBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBBdXRvUGF5OiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hdXRvUGF5KSxcbiAgICAgIEJhbmR3aWR0aDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5iYW5kd2lkdGgpLFxuICAgICAgRGVsZXRpb25Qcm90ZWN0aW9uOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxldGlvblByb3RlY3Rpb24pLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgSW5zdGFuY2VDaGFyZ2VUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSksXG4gICAgICBJbnRlcm5ldENoYXJnZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRDaGFyZ2VUeXBlKSxcbiAgICAgIElzcDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pc3ApLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICAgIE5ldG1vZGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV0bW9kZSksXG4gICAgICBQZXJpb2Q6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVyaW9kKSxcbiAgICAgIFByaWNpbmdDeWNsZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmljaW5nQ3ljbGUpLFxuICAgICAgUmVzb3VyY2VHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCksXG4gICAgICBUYWdzOiByb3MubGlzdE1hcHBlcihyb3NFSVBUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhZ3MpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6RUlQYFxuICovXG5leHBvcnQgY2xhc3MgUm9zRUlQIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OkVJUFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFsbG9jYXRpb25JZDogSUQgdGhhdCBBbGl5dW4gYXNzaWducyB0byByZXByZXNlbnQgdGhlIGFsbG9jYXRpb24gb2YgdGhlIGFkZHJlc3MgZm9yIHVzZSB3aXRoIFZQQy4gUmV0dXJuZWQgb25seSBmb3IgVlBDIGVsYXN0aWMgSVAgYWRkcmVzc2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWxsb2NhdGlvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEVpcEFkZHJlc3M6IElQIGFkZHJlc3Mgb2YgY3JlYXRlZCBFSVAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFaXBBZGRyZXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElzcDogVGhlIGxpbmUgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklzcDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBPcmRlcklkOiBPcmRlciBJRCBvZiBwcmVwYWlkIEVJUCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9yZGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9QYXk6IEF1dG9tYXRpYyBQYXltZW50LiBEZWZhdWx0IGlzIHRydWUuXG4gICAgICovXG4gICAgcHVibGljIGF1dG9QYXk6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoOiBCYW5kd2lkdGggZm9yIHRoZSBvdXRwdXQgbmV0d29yay4gRGVmYXVsdCBpcyA1TUIuXG4gICAgICovXG4gICAgcHVibGljIGJhbmR3aWR0aDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uUHJvdGVjdGlvbjogV2hldGhlciB0byBlbmFibGUgZGVsZXRpb24gcHJvdGVjdGlvbi5cbiAgICAgKiBEZWZhdWx0IHRvIEZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGlvblByb3RlY3Rpb246IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IE9wdGlvbmFsLiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIEVJUC4gVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci4gSXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyAgb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBUaGUgcmVzb3VyY2UgY2hhcmdlIHR5cGUuIERlZmF1bHQgdmFsdWUgaXMgUG9zdHBhaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VDaGFyZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRDaGFyZ2VUeXBlOiBUaGUgbmV0d29yayBjaGFyZ2UgdHlwZS4gU3VwcG9ydCAnUGF5QnlCYW5kd2lkdGgnIGFuZCAnUGF5QnlUcmFmZmljJyBvbmx5LiBEZWZhdWx0IGlzIFBheUJ5QmFuZHdpZHRoLiBQYXlCeVRyYWZmaWMgd2lsbCBjaGFyZ2UgYnkgaG91ciwgUGF5QnlCYW5kd2lkdGggd2lsbCBjaGFyZ2UgYnkgZGF5LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldENoYXJnZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc3A6IFRoZSBsaW5lIHR5cGUuIFlvdSBjYW4gc2V0IHRoaXMgcGFyYW1ldGVyIG9ubHkgd2hlbiB5b3UgY3JlYXRlIGEgcGF5LWFzLXlvdS1nbyBFSVAuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBCR1A6IEJHUCAoTXVsdGktSVNQKSBsaW5lcy4gVXAgdG8gODkgaGlnaC1xdWFsaXR5IEJHUCBsaW5lcyBhcmUgYXZhaWxhYmxlIHdvcmxkd2lkZS4gRGlyZWN0IGNvbm5lY3Rpb25zIHdpdGggbXVsdGlwbGUgSW50ZXJuZXQgU2VydmljZSBQcm92aWRlcnMgKElTUHMpLCBpbmNsdWRpbmcgVGVsZWNvbSwgVW5pY29tLCBNb2JpbGUsIFJhaWxjb20sIE5ldGNvbSwgQ0VSTkVULCBDaGluYSBCcm9hZGNhc3QgTmV0d29yaywgRHIuIFBlbmcsIGFuZCBGb3VuZGVyLCBjYW4gYmUgZXN0YWJsaXNoZWQgaW4gYWxsIHJlZ2lvbnMgaW4gbWFpbmxhbmQgQ2hpbmEuXG4gICAgICogQkdQX1BSTzogQkdQIChNdWx0aS1JU1ApIFBybyBsaW5lcy4gQkdQIChNdWx0aS1JU1ApIFBybyBsaW5lcyBvcHRpbWl6ZSBkYXRhIHRyYW5zbWlzc2lvbiB0byBDaGluYSBhbmQgaW1wcm92ZSBjb25uZWN0aW9uIHF1YWxpdHkgZm9yIGludGVybmF0aW9uYWwgc2VydmljZXMuIENvbXBhcmVkIHdpdGggdHJhZGl0aW9uYWwgQkdQIChNdWx0aS1JU1ApIGxpbmVzLCBCR1AgKE11bHRpLUlTUCkgUHJvIGxpbmVzIGNhbiBiZSB1c2VkIHRvIGVzdGFibGlzaCBkaXJlY3QgY29ubmVjdGlvbnMgd2l0aG91dCB1c2luZyBpbnRlcm5hdGlvbmFsIElTUCBzZXJ2aWNlcy4gVGhlcmVmb3JlLCBCR1AgKE11bHRpLUlTUCkgUHJvIGxpbmVzIHJlZHVjZSBuZXR3b3JrIGxhdGVuY3kuXG4gICAgICovXG4gICAgcHVibGljIGlzcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBFSVAuIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci4gSXQgY2FuIGNvbnRhaW4gbnVtYmVycywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBJdCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vICBvciBodHRwczovL1xuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0bW9kZTogVGhlIG5ldHdvcmsgdHlwZS4gVmFsaWQgdmFsdWU6IHB1YmxpYyAocHVibGljIG5ldHdvcmspLlxuICAgICAqL1xuICAgIHB1YmxpYyBuZXRtb2RlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBQcmVwYWlkIHRpbWUgcGVyaW9kLiBXaGlsZSBjaG9vc2UgYnkgcGF5IGJ5IG1vbnRoLCBpdCBjb3VsZCBiZSBmcm9tIDEgdG8gOSBvciAxMiwgMjQsIDM2LiBcbiAgICAgKiAgIFdoaWxlIGNob29zZSBwYXkgYnkgeWVhciwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDMuXG4gICAgICovXG4gICAgcHVibGljIHBlcmlvZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaWNpbmdDeWNsZTogUHJpY2UgY3ljbGUgb2YgdGhlIHJlc291cmNlLiBUaGlzIHByb3BlcnR5IGhhcyBubyBkZWZhdWx0IHZhbHVlLiBJZiBDaGFyZ2VUeXBlIGlzIHNwZWNpZmllZCBhcyBQb3N0cGFpZCwgdGhpcyB2YWx1ZSB3aWxsIGJlIGlnbm9yZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJpY2luZ0N5Y2xlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gZWlwLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGVpcC4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdzOiBSb3NFSVAuVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpFSVBgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0VJUFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRUlQLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBbGxvY2F0aW9uSWQgPSB0aGlzLmdldEF0dCgnQWxsb2NhdGlvbklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckVpcEFkZHJlc3MgPSB0aGlzLmdldEF0dCgnRWlwQWRkcmVzcycpO1xuICAgICAgICB0aGlzLmF0dHJJc3AgPSB0aGlzLmdldEF0dCgnSXNwJyk7XG4gICAgICAgIHRoaXMuYXR0ck9yZGVySWQgPSB0aGlzLmdldEF0dCgnT3JkZXJJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hdXRvUGF5ID0gcHJvcHMuYXV0b1BheTtcbiAgICAgICAgdGhpcy5iYW5kd2lkdGggPSBwcm9wcy5iYW5kd2lkdGg7XG4gICAgICAgIHRoaXMuZGVsZXRpb25Qcm90ZWN0aW9uID0gcHJvcHMuZGVsZXRpb25Qcm90ZWN0aW9uO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDaGFyZ2VUeXBlID0gcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlO1xuICAgICAgICB0aGlzLmludGVybmV0Q2hhcmdlVHlwZSA9IHByb3BzLmludGVybmV0Q2hhcmdlVHlwZTtcbiAgICAgICAgdGhpcy5pc3AgPSBwcm9wcy5pc3A7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgICAgIHRoaXMubmV0bW9kZSA9IHByb3BzLm5ldG1vZGU7XG4gICAgICAgIHRoaXMucGVyaW9kID0gcHJvcHMucGVyaW9kO1xuICAgICAgICB0aGlzLnByaWNpbmdDeWNsZSA9IHByb3BzLnByaWNpbmdDeWNsZTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUdyb3VwSWQgPSBwcm9wcy5yZXNvdXJjZUdyb3VwSWQ7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXV0b1BheTogdGhpcy5hdXRvUGF5LFxuICAgICAgICAgICAgYmFuZHdpZHRoOiB0aGlzLmJhbmR3aWR0aCxcbiAgICAgICAgICAgIGRlbGV0aW9uUHJvdGVjdGlvbjogdGhpcy5kZWxldGlvblByb3RlY3Rpb24sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGluc3RhbmNlQ2hhcmdlVHlwZTogdGhpcy5pbnN0YW5jZUNoYXJnZVR5cGUsXG4gICAgICAgICAgICBpbnRlcm5ldENoYXJnZVR5cGU6IHRoaXMuaW50ZXJuZXRDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgaXNwOiB0aGlzLmlzcCxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIG5ldG1vZGU6IHRoaXMubmV0bW9kZSxcbiAgICAgICAgICAgIHBlcmlvZDogdGhpcy5wZXJpb2QsXG4gICAgICAgICAgICBwcmljaW5nQ3ljbGU6IHRoaXMucHJpY2luZ0N5Y2xlLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiB0aGlzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRUlQUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRUlQIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBUYWdzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0VJUF9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUYWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6RUlQLlRhZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpFSVAuVGFnc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NFSVBUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0VJUF9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBWYWx1ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICBLZXk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpFSVBBc3NvY2lhdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NFSVBBc3NvY2lhdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGxvY2F0aW9uSWQ6IEVJUCBpbnN0YW5jZSBpZCB0byBiaW5kLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsbG9jYXRpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IEVDUy9TTEIvTkFUL0hhVmlwL0VOSSBpbnN0YW5jZSBpZCB0byBiaWQgdGhlIEVJUC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kZTogVGhlIG1vZGUgb2YgYXNzb2NpYXRpb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiBOQVQoRGVmYXVsdCk6IE5BVCBtb2RlLlxuICAgICAqIEJJTkRFRDogQ3V0LXRocm91Z2ggbW9kZS5cbiAgICAgKiBNVUxUSV9CSU5ERUQ6IE11bHRpLUVJUCB0byBFTkkgbW9kZS5cbiAgICAgKiBUaGlzIGlzIHJlcXVpcmVkIG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgSW5zdGFuY2VUeXBlIGlzIE5ldHdvcmtJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcml2YXRlSXBBZGRyZXNzOiBBbiBJUCBhZGRyZXNzIGluIHRoZSBDSURSIGJsb2NrIG9mIHRoZSBWU3dpdGNoLlxuICAgICAqIElmIHlvdSBsZWF2ZSB0aGUgb3B0aW9uIGVtcHR5LCB0aGUgc3lzdGVtIGFsbG9jYXRlcyBhIHByaXZhdGUgSVAgYWRkcmVzcyBhY2NvcmRpbmcgdG8gdGhlIFZQQyBJRCBhbmQgVlN3aXRjaCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcml2YXRlSXBBZGRyZXNzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0VJUEFzc29jaWF0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0VJUEFzc29jaWF0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRUlQQXNzb2NpYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaXZhdGVJcEFkZHJlc3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJpdmF0ZUlwQWRkcmVzcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1vZGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1vZGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21vZGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tb2RlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIk5BVFwiLFwiTVVMVElfQklOREVEXCIsXCJCSU5ERURcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2RlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsbG9jYXRpb25JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hbGxvY2F0aW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsbG9jYXRpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hbGxvY2F0aW9uSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRUlQQXNzb2NpYXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpFSVBBc3NvY2lhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRUlQQXNzb2NpYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpFSVBBc3NvY2lhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NFSVBBc3NvY2lhdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRUlQQXNzb2NpYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBBbGxvY2F0aW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWxsb2NhdGlvbklkKSxcbiAgICAgIEluc3RhbmNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VJZCksXG4gICAgICBNb2RlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vZGUpLFxuICAgICAgUHJpdmF0ZUlwQWRkcmVzczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcml2YXRlSXBBZGRyZXNzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OkVJUEFzc29jaWF0aW9uYFxuICovXG5leHBvcnQgY2xhc3MgUm9zRUlQQXNzb2NpYXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlZQQzo6RUlQQXNzb2NpYXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBbGxvY2F0aW9uSWQ6IElEIHRoYXQgQWxpeXVuIGFzc2lnbnMgdG8gcmVwcmVzZW50IHRoZSBhbGxvY2F0aW9uIG9mIHRoZSBhZGRyZXNzIGZvciB1c2Ugd2l0aCBWUEMuIFJldHVybmVkIG9ubHkgZm9yIFZQQyBlbGFzdGljIElQIGFkZHJlc3Nlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsbG9jYXRpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBFaXBBZGRyZXNzOiBJUCBhZGRyZXNzIG9mIGNyZWF0ZWQgRUlQLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRWlwQWRkcmVzczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWxsb2NhdGlvbklkOiBFSVAgaW5zdGFuY2UgaWQgdG8gYmluZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWxsb2NhdGlvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogRUNTL1NMQi9OQVQvSGFWaXAvRU5JIGluc3RhbmNlIGlkIHRvIGJpZCB0aGUgRUlQLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9kZTogVGhlIG1vZGUgb2YgYXNzb2NpYXRpb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiBOQVQoRGVmYXVsdCk6IE5BVCBtb2RlLlxuICAgICAqIEJJTkRFRDogQ3V0LXRocm91Z2ggbW9kZS5cbiAgICAgKiBNVUxUSV9CSU5ERUQ6IE11bHRpLUVJUCB0byBFTkkgbW9kZS5cbiAgICAgKiBUaGlzIGlzIHJlcXVpcmVkIG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgSW5zdGFuY2VUeXBlIGlzIE5ldHdvcmtJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcHVibGljIG1vZGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcml2YXRlSXBBZGRyZXNzOiBBbiBJUCBhZGRyZXNzIGluIHRoZSBDSURSIGJsb2NrIG9mIHRoZSBWU3dpdGNoLlxuICAgICAqIElmIHlvdSBsZWF2ZSB0aGUgb3B0aW9uIGVtcHR5LCB0aGUgc3lzdGVtIGFsbG9jYXRlcyBhIHByaXZhdGUgSVAgYWRkcmVzcyBhY2NvcmRpbmcgdG8gdGhlIFZQQyBJRCBhbmQgVlN3aXRjaCBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJpdmF0ZUlwQWRkcmVzczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6RUlQQXNzb2NpYXRpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0VJUEFzc29jaWF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NFSVBBc3NvY2lhdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQWxsb2NhdGlvbklkID0gdGhpcy5nZXRBdHQoJ0FsbG9jYXRpb25JZCcpO1xuICAgICAgICB0aGlzLmF0dHJFaXBBZGRyZXNzID0gdGhpcy5nZXRBdHQoJ0VpcEFkZHJlc3MnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYWxsb2NhdGlvbklkID0gcHJvcHMuYWxsb2NhdGlvbklkO1xuICAgICAgICB0aGlzLmluc3RhbmNlSWQgPSBwcm9wcy5pbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLm1vZGUgPSBwcm9wcy5tb2RlO1xuICAgICAgICB0aGlzLnByaXZhdGVJcEFkZHJlc3MgPSBwcm9wcy5wcml2YXRlSXBBZGRyZXNzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFsbG9jYXRpb25JZDogdGhpcy5hbGxvY2F0aW9uSWQsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiB0aGlzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICAgICAgICBwcml2YXRlSXBBZGRyZXNzOiB0aGlzLnByaXZhdGVJcEFkZHJlc3MsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0VJUEFzc29jaWF0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OkVJUFByb2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NFSVBQcm9Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXV0b1BheTogQXV0b21hdGljIFBheW1lbnQuIERlZmF1bHQgaXMgdHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUGF5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiYW5kd2lkdGg6IEJhbmR3aWR0aCBmb3IgdGhlIG91dHB1dCBuZXR3b3JrLiBEZWZhdWx0IGlzIDVNQi5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYW5kd2lkdGg/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsZXRpb25Qcm90ZWN0aW9uOiBXaGV0aGVyIHRvIGVuYWJsZSBkZWxldGlvbiBwcm90ZWN0aW9uLlxuICAgICAqIERlZmF1bHQgdG8gRmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRpb25Qcm90ZWN0aW9uPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogT3B0aW9uYWwuIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgRUlQLiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAyIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLiBJdCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vICBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUNoYXJnZVR5cGU6IFRoZSByZXNvdXJjZSBjaGFyZ2UgdHlwZS4gRGVmYXVsdCB2YWx1ZSBpcyBQb3N0cGFpZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlQ2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIHJlcXVlc3RlZCBFSVAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldENoYXJnZVR5cGU6IFRoZSBuZXR3b3JrIGNoYXJnZSB0eXBlLiBTdXBwb3J0ICdQYXlCeUJhbmR3aWR0aCcgYW5kICdQYXlCeVRyYWZmaWMnIG9ubHkuIERlZmF1bHQgaXMgUGF5QnlCYW5kd2lkdGguIFBheUJ5VHJhZmZpYyB3aWxsIGNoYXJnZSBieSBob3VyLCBQYXlCeUJhbmR3aWR0aCB3aWxsIGNoYXJnZSBieSBkYXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlwQWRkcmVzczogVGhlIElQIGFkZHJlc3Mgb2YgdGhlIHJlcXVlc3RlZCBFSVAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXBBZGRyZXNzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzcDogVGhlIGxpbmUgdHlwZS4gWW91IGNhbiBzZXQgdGhpcyBwYXJhbWV0ZXIgb25seSB3aGVuIHlvdSBjcmVhdGUgYSBwYXktYXMteW91LWdvIEVJUC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEJHUDogQkdQIChNdWx0aS1JU1ApIGxpbmVzLiBVcCB0byA4OSBoaWdoLXF1YWxpdHkgQkdQIGxpbmVzIGFyZSBhdmFpbGFibGUgd29ybGR3aWRlLiBEaXJlY3QgY29ubmVjdGlvbnMgd2l0aCBtdWx0aXBsZSBJbnRlcm5ldCBTZXJ2aWNlIFByb3ZpZGVycyAoSVNQcyksIGluY2x1ZGluZyBUZWxlY29tLCBVbmljb20sIE1vYmlsZSwgUmFpbGNvbSwgTmV0Y29tLCBDRVJORVQsIENoaW5hIEJyb2FkY2FzdCBOZXR3b3JrLCBEci4gUGVuZywgYW5kIEZvdW5kZXIsIGNhbiBiZSBlc3RhYmxpc2hlZCBpbiBhbGwgcmVnaW9ucyBpbiBtYWlubGFuZCBDaGluYS5cbiAgICAgKiBCR1BfUFJPOiBCR1AgKE11bHRpLUlTUCkgUHJvIGxpbmVzLiBCR1AgKE11bHRpLUlTUCkgUHJvIGxpbmVzIG9wdGltaXplIGRhdGEgdHJhbnNtaXNzaW9uIHRvIENoaW5hIGFuZCBpbXByb3ZlIGNvbm5lY3Rpb24gcXVhbGl0eSBmb3IgaW50ZXJuYXRpb25hbCBzZXJ2aWNlcy4gQ29tcGFyZWQgd2l0aCB0cmFkaXRpb25hbCBCR1AgKE11bHRpLUlTUCkgbGluZXMsIEJHUCAoTXVsdGktSVNQKSBQcm8gbGluZXMgY2FuIGJlIHVzZWQgdG8gZXN0YWJsaXNoIGRpcmVjdCBjb25uZWN0aW9ucyB3aXRob3V0IHVzaW5nIGludGVybmF0aW9uYWwgSVNQIHNlcnZpY2VzLiBUaGVyZWZvcmUsIEJHUCAoTXVsdGktSVNQKSBQcm8gbGluZXMgcmVkdWNlIG5ldHdvcmsgbGF0ZW5jeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc3A/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIEVJUC4gVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLiBJdCBjYW4gY29udGFpbiBudW1iZXJzLCBwZXJpb2RzICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIEl0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gIG9yIGh0dHBzOi8vXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXRtb2RlOiBUaGUgbmV0d29yayB0eXBlLiBWYWxpZCB2YWx1ZTogcHVibGljIChwdWJsaWMgbmV0d29yaykuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0bW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJpb2Q6IFByZXBhaWQgdGltZSBwZXJpb2QuIFdoaWxlIGNob29zZSBieSBwYXkgYnkgbW9udGgsIGl0IGNvdWxkIGJlIGZyb20gMSB0byA5IG9yIDEyLCAyNCwgMzYuIFxuICAgICAqICAgV2hpbGUgY2hvb3NlIHBheSBieSB5ZWFyLCBpdCBjb3VsZCBiZSBmcm9tIDEgdG8gMy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpY2luZ0N5Y2xlOiBQcmljZSBjeWNsZSBvZiB0aGUgcmVzb3VyY2UuIFRoaXMgcHJvcGVydHkgaGFzIG5vIGRlZmF1bHQgdmFsdWUuIElmIENoYXJnZVR5cGUgaXMgc3BlY2lmaWVkIGFzIFBvc3RwYWlkLCB0aGlzIHZhbHVlIHdpbGwgYmUgaWdub3JlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaWNpbmdDeWNsZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFJlc291cmNlIGdyb3VwIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBlaXAuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgZWlwLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0VJUFByby5UYWdzUHJvcGVydHlbXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NFSVBQcm9Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRUlQUHJvUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRUlQUHJvUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZUNoYXJnZVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VDaGFyZ2VUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VDaGFyZ2VUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlBvc3RwYWlkXCIsXCJQcmVwYWlkXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VDaGFyZ2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlICYmICh0eXBlb2YgcHJvcGVydGllcy5wcmljaW5nQ3ljbGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaWNpbmdDeWNsZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByaWNpbmdDeWNsZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJNb250aFwiLFwiWWVhclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaWNpbmdDeWNsZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcmljaW5nQ3ljbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzcCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pc3ApKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBlcmlvZCAmJiAodHlwZW9mIHByb3BlcnRpZXMucGVyaW9kKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2QnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wZXJpb2QsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogWzEsMiwzLDQsNSw2LDcsOCw5LDEyLDI0LDM2XSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wZXJpb2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0aW9uUHJvdGVjdGlvbicsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZGVsZXRpb25Qcm90ZWN0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRvUGF5Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5hdXRvUGF5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludGVybmV0Q2hhcmdlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW50ZXJuZXRDaGFyZ2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldENoYXJnZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUGF5QnlCYW5kd2lkdGhcIixcIlBheUJ5VHJhZmZpY1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0Q2hhcmdlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldG1vZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmV0bW9kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFuZHdpZHRoJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmJhbmR3aWR0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXBBZGRyZXNzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlwQWRkcmVzcykpO1xuICAgIGlmKHByb3BlcnRpZXMudGFncyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRhZ3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50YWdzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWdzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0VJUFByb19UYWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRUlQUHJvUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6RUlQUHJvYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NFSVBQcm9Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpFSVBQcm9gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRUlQUHJvUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NFSVBQcm9Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBBdXRvUGF5OiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hdXRvUGF5KSxcbiAgICAgIEJhbmR3aWR0aDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5iYW5kd2lkdGgpLFxuICAgICAgRGVsZXRpb25Qcm90ZWN0aW9uOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxldGlvblByb3RlY3Rpb24pLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgSW5zdGFuY2VDaGFyZ2VUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSksXG4gICAgICBJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpLFxuICAgICAgSW50ZXJuZXRDaGFyZ2VUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmludGVybmV0Q2hhcmdlVHlwZSksXG4gICAgICBJcEFkZHJlc3M6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXBBZGRyZXNzKSxcbiAgICAgIElTUDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pc3ApLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICAgIE5ldG1vZGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV0bW9kZSksXG4gICAgICBQZXJpb2Q6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVyaW9kKSxcbiAgICAgIFByaWNpbmdDeWNsZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmljaW5nQ3ljbGUpLFxuICAgICAgUmVzb3VyY2VHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCksXG4gICAgICBUYWdzOiByb3MubGlzdE1hcHBlcihyb3NFSVBQcm9UYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhZ3MpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6RUlQUHJvYFxuICovXG5leHBvcnQgY2xhc3MgUm9zRUlQUHJvIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OkVJUFByb1wiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFsbG9jYXRpb25JZDogSUQgdGhhdCBBbGl5dW4gYXNzaWducyB0byByZXByZXNlbnQgdGhlIGFsbG9jYXRpb24gb2YgdGhlIGFkZHJlc3MgZm9yIHVzZSB3aXRoIFZQQy4gUmV0dXJuZWQgb25seSBmb3IgVlBDIGVsYXN0aWMgSVAgYWRkcmVzc2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWxsb2NhdGlvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEVpcEFkZHJlc3M6IElQIGFkZHJlc3Mgb2YgY3JlYXRlZCBFSVAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFaXBBZGRyZXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElTUDogVGhlIGxpbmUgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklzcDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBPcmRlcklkOiBPcmRlciBJRCBvZiBwcmVwYWlkIEVJUCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9yZGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9QYXk6IEF1dG9tYXRpYyBQYXltZW50LiBEZWZhdWx0IGlzIHRydWUuXG4gICAgICovXG4gICAgcHVibGljIGF1dG9QYXk6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoOiBCYW5kd2lkdGggZm9yIHRoZSBvdXRwdXQgbmV0d29yay4gRGVmYXVsdCBpcyA1TUIuXG4gICAgICovXG4gICAgcHVibGljIGJhbmR3aWR0aDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uUHJvdGVjdGlvbjogV2hldGhlciB0byBlbmFibGUgZGVsZXRpb24gcHJvdGVjdGlvbi5cbiAgICAgKiBEZWZhdWx0IHRvIEZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGlvblByb3RlY3Rpb246IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IE9wdGlvbmFsLiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIEVJUC4gVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci4gSXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyAgb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBUaGUgcmVzb3VyY2UgY2hhcmdlIHR5cGUuIERlZmF1bHQgdmFsdWUgaXMgUG9zdHBhaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VDaGFyZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSByZXF1ZXN0ZWQgRUlQLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRDaGFyZ2VUeXBlOiBUaGUgbmV0d29yayBjaGFyZ2UgdHlwZS4gU3VwcG9ydCAnUGF5QnlCYW5kd2lkdGgnIGFuZCAnUGF5QnlUcmFmZmljJyBvbmx5LiBEZWZhdWx0IGlzIFBheUJ5QmFuZHdpZHRoLiBQYXlCeVRyYWZmaWMgd2lsbCBjaGFyZ2UgYnkgaG91ciwgUGF5QnlCYW5kd2lkdGggd2lsbCBjaGFyZ2UgYnkgZGF5LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcm5ldENoYXJnZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpcEFkZHJlc3M6IFRoZSBJUCBhZGRyZXNzIG9mIHRoZSByZXF1ZXN0ZWQgRUlQLlxuICAgICAqL1xuICAgIHB1YmxpYyBpcEFkZHJlc3M6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc3A6IFRoZSBsaW5lIHR5cGUuIFlvdSBjYW4gc2V0IHRoaXMgcGFyYW1ldGVyIG9ubHkgd2hlbiB5b3UgY3JlYXRlIGEgcGF5LWFzLXlvdS1nbyBFSVAuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBCR1A6IEJHUCAoTXVsdGktSVNQKSBsaW5lcy4gVXAgdG8gODkgaGlnaC1xdWFsaXR5IEJHUCBsaW5lcyBhcmUgYXZhaWxhYmxlIHdvcmxkd2lkZS4gRGlyZWN0IGNvbm5lY3Rpb25zIHdpdGggbXVsdGlwbGUgSW50ZXJuZXQgU2VydmljZSBQcm92aWRlcnMgKElTUHMpLCBpbmNsdWRpbmcgVGVsZWNvbSwgVW5pY29tLCBNb2JpbGUsIFJhaWxjb20sIE5ldGNvbSwgQ0VSTkVULCBDaGluYSBCcm9hZGNhc3QgTmV0d29yaywgRHIuIFBlbmcsIGFuZCBGb3VuZGVyLCBjYW4gYmUgZXN0YWJsaXNoZWQgaW4gYWxsIHJlZ2lvbnMgaW4gbWFpbmxhbmQgQ2hpbmEuXG4gICAgICogQkdQX1BSTzogQkdQIChNdWx0aS1JU1ApIFBybyBsaW5lcy4gQkdQIChNdWx0aS1JU1ApIFBybyBsaW5lcyBvcHRpbWl6ZSBkYXRhIHRyYW5zbWlzc2lvbiB0byBDaGluYSBhbmQgaW1wcm92ZSBjb25uZWN0aW9uIHF1YWxpdHkgZm9yIGludGVybmF0aW9uYWwgc2VydmljZXMuIENvbXBhcmVkIHdpdGggdHJhZGl0aW9uYWwgQkdQIChNdWx0aS1JU1ApIGxpbmVzLCBCR1AgKE11bHRpLUlTUCkgUHJvIGxpbmVzIGNhbiBiZSB1c2VkIHRvIGVzdGFibGlzaCBkaXJlY3QgY29ubmVjdGlvbnMgd2l0aG91dCB1c2luZyBpbnRlcm5hdGlvbmFsIElTUCBzZXJ2aWNlcy4gVGhlcmVmb3JlLCBCR1AgKE11bHRpLUlTUCkgUHJvIGxpbmVzIHJlZHVjZSBuZXR3b3JrIGxhdGVuY3kuXG4gICAgICovXG4gICAgcHVibGljIGlzcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBFSVAuIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci4gSXQgY2FuIGNvbnRhaW4gbnVtYmVycywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBJdCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vICBvciBodHRwczovL1xuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0bW9kZTogVGhlIG5ldHdvcmsgdHlwZS4gVmFsaWQgdmFsdWU6IHB1YmxpYyAocHVibGljIG5ldHdvcmspLlxuICAgICAqL1xuICAgIHB1YmxpYyBuZXRtb2RlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBQcmVwYWlkIHRpbWUgcGVyaW9kLiBXaGlsZSBjaG9vc2UgYnkgcGF5IGJ5IG1vbnRoLCBpdCBjb3VsZCBiZSBmcm9tIDEgdG8gOSBvciAxMiwgMjQsIDM2LiBcbiAgICAgKiAgIFdoaWxlIGNob29zZSBwYXkgYnkgeWVhciwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDMuXG4gICAgICovXG4gICAgcHVibGljIHBlcmlvZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaWNpbmdDeWNsZTogUHJpY2UgY3ljbGUgb2YgdGhlIHJlc291cmNlLiBUaGlzIHByb3BlcnR5IGhhcyBubyBkZWZhdWx0IHZhbHVlLiBJZiBDaGFyZ2VUeXBlIGlzIHNwZWNpZmllZCBhcyBQb3N0cGFpZCwgdGhpcyB2YWx1ZSB3aWxsIGJlIGlnbm9yZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJpY2luZ0N5Y2xlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gZWlwLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGVpcC4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdzOiBSb3NFSVBQcm8uVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpFSVBQcm9gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0VJUFByb1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRUlQUHJvLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBbGxvY2F0aW9uSWQgPSB0aGlzLmdldEF0dCgnQWxsb2NhdGlvbklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckVpcEFkZHJlc3MgPSB0aGlzLmdldEF0dCgnRWlwQWRkcmVzcycpO1xuICAgICAgICB0aGlzLmF0dHJJc3AgPSB0aGlzLmdldEF0dCgnSVNQJyk7XG4gICAgICAgIHRoaXMuYXR0ck9yZGVySWQgPSB0aGlzLmdldEF0dCgnT3JkZXJJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hdXRvUGF5ID0gcHJvcHMuYXV0b1BheTtcbiAgICAgICAgdGhpcy5iYW5kd2lkdGggPSBwcm9wcy5iYW5kd2lkdGg7XG4gICAgICAgIHRoaXMuZGVsZXRpb25Qcm90ZWN0aW9uID0gcHJvcHMuZGVsZXRpb25Qcm90ZWN0aW9uO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDaGFyZ2VUeXBlID0gcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlO1xuICAgICAgICB0aGlzLmluc3RhbmNlSWQgPSBwcm9wcy5pbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmludGVybmV0Q2hhcmdlVHlwZSA9IHByb3BzLmludGVybmV0Q2hhcmdlVHlwZTtcbiAgICAgICAgdGhpcy5pcEFkZHJlc3MgPSBwcm9wcy5pcEFkZHJlc3M7XG4gICAgICAgIHRoaXMuaXNwID0gcHJvcHMuaXNwO1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgICAgICB0aGlzLm5ldG1vZGUgPSBwcm9wcy5uZXRtb2RlO1xuICAgICAgICB0aGlzLnBlcmlvZCA9IHByb3BzLnBlcmlvZDtcbiAgICAgICAgdGhpcy5wcmljaW5nQ3ljbGUgPSBwcm9wcy5wcmljaW5nQ3ljbGU7XG4gICAgICAgIHRoaXMucmVzb3VyY2VHcm91cElkID0gcHJvcHMucmVzb3VyY2VHcm91cElkO1xuICAgICAgICB0aGlzLnRhZ3MgPSBwcm9wcy50YWdzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF1dG9QYXk6IHRoaXMuYXV0b1BheSxcbiAgICAgICAgICAgIGJhbmR3aWR0aDogdGhpcy5iYW5kd2lkdGgsXG4gICAgICAgICAgICBkZWxldGlvblByb3RlY3Rpb246IHRoaXMuZGVsZXRpb25Qcm90ZWN0aW9uLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbnN0YW5jZUNoYXJnZVR5cGU6IHRoaXMuaW5zdGFuY2VDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgaW5zdGFuY2VJZDogdGhpcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgaW50ZXJuZXRDaGFyZ2VUeXBlOiB0aGlzLmludGVybmV0Q2hhcmdlVHlwZSxcbiAgICAgICAgICAgIGlwQWRkcmVzczogdGhpcy5pcEFkZHJlc3MsXG4gICAgICAgICAgICBpc3A6IHRoaXMuaXNwLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgbmV0bW9kZTogdGhpcy5uZXRtb2RlLFxuICAgICAgICAgICAgcGVyaW9kOiB0aGlzLnBlcmlvZCxcbiAgICAgICAgICAgIHByaWNpbmdDeWNsZTogdGhpcy5wcmljaW5nQ3ljbGUsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHRoaXMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NFSVBQcm9Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NFSVBQcm8ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRUlQUHJvX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlRhZ3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpFSVBQcm8uVGFnc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OkVJUFByby5UYWdzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0VJUFByb1RhZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRUlQUHJvX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFZhbHVlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgIEtleTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OkVJUFNlZ21lbnRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRUlQU2VnbWVudFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlaXBNYXNrOiBUaGUgbWFzayBvZiB0aGUgY29udGlndW91cyBFSVAgZ3JvdXAuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAyODogMTYgY29udGlndW91cyBFSVBzIGFyZSBhbGxvY2F0ZWQgZm9yIG9uZSBjYWxsLlxuICAgICAqIDI3OiAzMiBjb250aWd1b3VzIEVJUHMgYXJlIGFsbG9jYXRlZCBmb3Igb25lIGNhbGwuXG4gICAgICogMjY6IDY0IGNvbnRpZ3VvdXMgRUlQcyBhcmUgYWxsb2NhdGVkIGZvciBvbmUgY2FsbC5cbiAgICAgKiAyNTogMTI4IGNvbnRpZ3VvdXMgRUlQcyBhcmUgYWxsb2NhdGVkIGZvciBvbmUgY2FsbC5cbiAgICAgKiAyNDogMjU2IGNvbnRpZ3VvdXMgRUlQcyBhcmUgYWxsb2NhdGVkIGZvciBvbmUgY2FsbC5cbiAgICAgKiBOb3RlIFRoZSBhY3R1YWwgbnVtYmVyIG9mIGFzc2lnbmVkIEVJUHMgbWF5IGJlIGxlc3MgdGhhbiB0aGUgZXhwZWN0ZWQgbnVtYmVyIGJlY2F1c2Ugb25lLFxuICAgICAqIHRocmVlLCBvciBmb3VyIEVJUHMgbWF5IGJlIHJlc2VydmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVpcE1hc2s6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiYW5kd2lkdGg6IFRoZSBtYXhpbXVtIGJhbmR3aWR0aCBvZiB0aGUgY29udGlndW91cyBFSVBzLiBVbml0OiBNYml0L3MuIERlZmF1bHQgdmFsdWU6IDUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFuZHdpZHRoPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0Q2hhcmdlVHlwZTogVGhlIG1ldGVyaW5nIG1ldGhvZCBvZiB0aGUgY29udGlndW91cyBFSVBzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogUGF5QnlCYW5kd2lkdGg6IEZlZXMgYXJlIGNoYXJnZWQgYmFzZWQgb24gYmFuZHdpZHRoIHVzYWdlLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAqIFBheUJ5VHJhZmZpYzogRmVlcyBhcmUgY2hhcmdlZCBiYXNlZCBvbiBkYXRhIHRyYW5zZmVyLlxuICAgICAqIE5vdGUgSWYgdGhlIE5ldG1vZGUgcGFyYW1ldGVyIGlzIHNldCB0byBoeWJyaWQsIEludGVybmV0Q2hhcmdlVHlwZSBpcyBzZXQgdG8gUGF5QnlCYW5kd2lkdGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldG1vZGU6IFRoZSBuZXR3b3JrIHR5cGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBwdWJsaWM6IHRoZSBJbnRlcm5ldC4gVGhpcyBpcyB0aGUgZGVmYXVsdCB2YWx1ZS4gQWZ0ZXIgY29udGlndW91cyBFSVBzIGFyZSBhc3NvY2lhdGVkIHdpdGhcbiAgICAgKiBjbG91ZCByZXNvdXJjZXMsIHRoZSBjbG91ZCByZXNvdXJjZXMgY2FuIGFjY2VzcyB0aGUgSW50ZXJuZXQgYnkgdXNpbmcgdGhlIEVJUHMuXG4gICAgICogaHlicmlkOiB0aGUgaHlicmlkIGNsb3VkLiBBZnRlciBjb250aWd1b3VzIEVJUHMgYXJlIGFzc29jaWF0ZWQgd2l0aCBjbG91ZCByZXNvdXJjZXMsIHRoZVxuICAgICAqIGNsb3VkIHJlc291cmNlcyBjYW4gYWNjZXNzIHRoZSBoeWJyaWQgY2xvdWQgYnkgdXNpbmcgdGhlIEVJUHMuXG4gICAgICogTm90ZSBUaGlzIG5ldHdvcmsgdHlwZSBpcyBhdmFpbGFibGUgb25seSB0byB1c2VycyB3aG8gYXJlIGFkZGVkIHRvIHRoZSB3aGl0ZWxpc3QuIFRvIHVzZVxuICAgICAqIHRoaXMgbmV0d29yayB0eXBlLCBjb250YWN0IHlvdXIgY3VzdG9tZXIgbWFuYWdlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBuZXRtb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgRUlQcyBiZWxvbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0VJUFNlZ21lbnRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRUlQU2VnbWVudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0VJUFNlZ21lbnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VpcE1hc2snLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZWlwTWFzaykpO1xuICAgIGlmKHByb3BlcnRpZXMuZWlwTWFzayAmJiAodHlwZW9mIHByb3BlcnRpZXMuZWlwTWFzaykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZWlwTWFzaycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmVpcE1hc2ssXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogWzI4LDI3LDI2LDI1LDI0XSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VpcE1hc2snLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZWlwTWFzaykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VHcm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlR3JvdXBJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMubmV0bW9kZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubmV0bW9kZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0bW9kZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm5ldG1vZGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wicHVibGljXCIsXCJoeWJyaWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXRtb2RlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5ldG1vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhbmR3aWR0aCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5iYW5kd2lkdGgpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludGVybmV0Q2hhcmdlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW50ZXJuZXRDaGFyZ2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldENoYXJnZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUGF5QnlCYW5kd2lkdGhcIixcIlBheUJ5VHJhZmZpY1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0Q2hhcmdlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRUlQU2VnbWVudFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OkVJUFNlZ21lbnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0VJUFNlZ21lbnRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpFSVBTZWdtZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0VJUFNlZ21lbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0VJUFNlZ21lbnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBFaXBNYXNrOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVpcE1hc2spLFxuICAgICAgQmFuZHdpZHRoOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmJhbmR3aWR0aCksXG4gICAgICBJbnRlcm5ldENoYXJnZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJuZXRDaGFyZ2VUeXBlKSxcbiAgICAgIE5ldG1vZGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV0bW9kZSksXG4gICAgICBSZXNvdXJjZUdyb3VwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OkVJUFNlZ21lbnRgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NFSVBTZWdtZW50IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OkVJUFNlZ21lbnRcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBFaXBBZGRyZXNzZXM6IExpc3Qgb2YgRUlQIGFkZHJlc3Nlcy4gbGlrZSBbe1wiQWxsb2NhdGlvbklkXCI6IFwiZWlwLXh4eFwiLCBcIklwQWRkcmVzc1wiOiBcInh4Lnh4Lnh4Lnh4XCJ9XVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRWlwQWRkcmVzc2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEVpcFNlZ21lbnRJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGNvbnRpZ3VvdXMgRUlQIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRWlwU2VnbWVudEluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVpcE1hc2s6IFRoZSBtYXNrIG9mIHRoZSBjb250aWd1b3VzIEVJUCBncm91cC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIDI4OiAxNiBjb250aWd1b3VzIEVJUHMgYXJlIGFsbG9jYXRlZCBmb3Igb25lIGNhbGwuXG4gICAgICogMjc6IDMyIGNvbnRpZ3VvdXMgRUlQcyBhcmUgYWxsb2NhdGVkIGZvciBvbmUgY2FsbC5cbiAgICAgKiAyNjogNjQgY29udGlndW91cyBFSVBzIGFyZSBhbGxvY2F0ZWQgZm9yIG9uZSBjYWxsLlxuICAgICAqIDI1OiAxMjggY29udGlndW91cyBFSVBzIGFyZSBhbGxvY2F0ZWQgZm9yIG9uZSBjYWxsLlxuICAgICAqIDI0OiAyNTYgY29udGlndW91cyBFSVBzIGFyZSBhbGxvY2F0ZWQgZm9yIG9uZSBjYWxsLlxuICAgICAqIE5vdGUgVGhlIGFjdHVhbCBudW1iZXIgb2YgYXNzaWduZWQgRUlQcyBtYXkgYmUgbGVzcyB0aGFuIHRoZSBleHBlY3RlZCBudW1iZXIgYmVjYXVzZSBvbmUsXG4gICAgICogdGhyZWUsIG9yIGZvdXIgRUlQcyBtYXkgYmUgcmVzZXJ2ZWQuXG4gICAgICovXG4gICAgcHVibGljIGVpcE1hc2s6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBiYW5kd2lkdGg6IFRoZSBtYXhpbXVtIGJhbmR3aWR0aCBvZiB0aGUgY29udGlndW91cyBFSVBzLiBVbml0OiBNYml0L3MuIERlZmF1bHQgdmFsdWU6IDUuXG4gICAgICovXG4gICAgcHVibGljIGJhbmR3aWR0aDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0Q2hhcmdlVHlwZTogVGhlIG1ldGVyaW5nIG1ldGhvZCBvZiB0aGUgY29udGlndW91cyBFSVBzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogUGF5QnlCYW5kd2lkdGg6IEZlZXMgYXJlIGNoYXJnZWQgYmFzZWQgb24gYmFuZHdpZHRoIHVzYWdlLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAqIFBheUJ5VHJhZmZpYzogRmVlcyBhcmUgY2hhcmdlZCBiYXNlZCBvbiBkYXRhIHRyYW5zZmVyLlxuICAgICAqIE5vdGUgSWYgdGhlIE5ldG1vZGUgcGFyYW1ldGVyIGlzIHNldCB0byBoeWJyaWQsIEludGVybmV0Q2hhcmdlVHlwZSBpcyBzZXQgdG8gUGF5QnlCYW5kd2lkdGguXG4gICAgICovXG4gICAgcHVibGljIGludGVybmV0Q2hhcmdlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldG1vZGU6IFRoZSBuZXR3b3JrIHR5cGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBwdWJsaWM6IHRoZSBJbnRlcm5ldC4gVGhpcyBpcyB0aGUgZGVmYXVsdCB2YWx1ZS4gQWZ0ZXIgY29udGlndW91cyBFSVBzIGFyZSBhc3NvY2lhdGVkIHdpdGhcbiAgICAgKiBjbG91ZCByZXNvdXJjZXMsIHRoZSBjbG91ZCByZXNvdXJjZXMgY2FuIGFjY2VzcyB0aGUgSW50ZXJuZXQgYnkgdXNpbmcgdGhlIEVJUHMuXG4gICAgICogaHlicmlkOiB0aGUgaHlicmlkIGNsb3VkLiBBZnRlciBjb250aWd1b3VzIEVJUHMgYXJlIGFzc29jaWF0ZWQgd2l0aCBjbG91ZCByZXNvdXJjZXMsIHRoZVxuICAgICAqIGNsb3VkIHJlc291cmNlcyBjYW4gYWNjZXNzIHRoZSBoeWJyaWQgY2xvdWQgYnkgdXNpbmcgdGhlIEVJUHMuXG4gICAgICogTm90ZSBUaGlzIG5ldHdvcmsgdHlwZSBpcyBhdmFpbGFibGUgb25seSB0byB1c2VycyB3aG8gYXJlIGFkZGVkIHRvIHRoZSB3aGl0ZWxpc3QuIFRvIHVzZVxuICAgICAqIHRoaXMgbmV0d29yayB0eXBlLCBjb250YWN0IHlvdXIgY3VzdG9tZXIgbWFuYWdlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmV0bW9kZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgRUlQcyBiZWxvbmcuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6RUlQU2VnbWVudGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRUlQU2VnbWVudFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRUlQU2VnbWVudC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRWlwQWRkcmVzc2VzID0gdGhpcy5nZXRBdHQoJ0VpcEFkZHJlc3NlcycpO1xuICAgICAgICB0aGlzLmF0dHJFaXBTZWdtZW50SW5zdGFuY2VJZCA9IHRoaXMuZ2V0QXR0KCdFaXBTZWdtZW50SW5zdGFuY2VJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5laXBNYXNrID0gcHJvcHMuZWlwTWFzaztcbiAgICAgICAgdGhpcy5iYW5kd2lkdGggPSBwcm9wcy5iYW5kd2lkdGg7XG4gICAgICAgIHRoaXMuaW50ZXJuZXRDaGFyZ2VUeXBlID0gcHJvcHMuaW50ZXJuZXRDaGFyZ2VUeXBlO1xuICAgICAgICB0aGlzLm5ldG1vZGUgPSBwcm9wcy5uZXRtb2RlO1xuICAgICAgICB0aGlzLnJlc291cmNlR3JvdXBJZCA9IHByb3BzLnJlc291cmNlR3JvdXBJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlaXBNYXNrOiB0aGlzLmVpcE1hc2ssXG4gICAgICAgICAgICBiYW5kd2lkdGg6IHRoaXMuYmFuZHdpZHRoLFxuICAgICAgICAgICAgaW50ZXJuZXRDaGFyZ2VUeXBlOiB0aGlzLmludGVybmV0Q2hhcmdlVHlwZSxcbiAgICAgICAgICAgIG5ldG1vZGU6IHRoaXMubmV0bW9kZSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0VJUFNlZ21lbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6Rmxvd0xvZ2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NGbG93TG9nUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ1N0b3JlTmFtZTogVGhlIGxvZyBzdG9yZSBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ1N0b3JlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3ROYW1lOiBUaGUgcHJvamVjdCBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2plY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VJZDogVGhlIHJlc291cmNlIGlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZVR5cGU6IFRoZSByZXNvdXJjZSB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYWZmaWNUeXBlOiBUaGUgdHJhZmZpYyB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYWZmaWNUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBEZXNjcmlwdGlvbiBvZiBmbG93IGxvZy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmbG93TG9nTmFtZTogVGhlIGZsb3cgbG9nIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmxvd0xvZ05hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRmxvd0xvZ1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NGbG93TG9nUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRmxvd0xvZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmxvd0xvZ05hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZmxvd0xvZ05hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dTdG9yZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9nU3RvcmVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dTdG9yZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9nU3RvcmVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlc291cmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJvamVjdE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3ROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZVR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVzb3VyY2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0cmFmZmljVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50cmFmZmljVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHJhZmZpY1R5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHJhZmZpY1R5cGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRmxvd0xvZ1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OkZsb3dMb2dgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0Zsb3dMb2dQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpGbG93TG9nYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0Zsb3dMb2dQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0Zsb3dMb2dQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBMb2dTdG9yZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nU3RvcmVOYW1lKSxcbiAgICAgIFByb2plY3ROYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSxcbiAgICAgIFJlc291cmNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VJZCksXG4gICAgICBSZXNvdXJjZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VUeXBlKSxcbiAgICAgIFRyYWZmaWNUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRyYWZmaWNUeXBlKSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIEZsb3dMb2dOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZsb3dMb2dOYW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OkZsb3dMb2dgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NGbG93TG9nIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OkZsb3dMb2dcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEZXNjcmlwdGlvbjogVGhlIERlc2NyaXB0aW9uIG9mIGZsb3cgbG9nLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVzY3JpcHRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRmxvd0xvZ0lkOiBUaGUgZmxvdyBsb2cgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGbG93TG9nSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRmxvd0xvZ05hbWU6IFRoZSBmbG93IGxvZyBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRmxvd0xvZ05hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTG9nU3RvcmVOYW1lOiBUaGUgbG9nIHN0b3JlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2dTdG9yZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUHJvamVjdE5hbWU6IFRoZSBwcm9qZWN0IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcm9qZWN0TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXNvdXJjZUlkOiBUaGUgcmVzb3VyY2UgaWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc291cmNlVHlwZTogVGhlIHJlc291cmNlIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVHJhZmZpY1R5cGU6IFRoZSB0cmFmZmljIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmFmZmljVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nU3RvcmVOYW1lOiBUaGUgbG9nIHN0b3JlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGxvZ1N0b3JlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3ROYW1lOiBUaGUgcHJvamVjdCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcm9qZWN0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlSWQ6IFRoZSByZXNvdXJjZSBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlVHlwZTogVGhlIHJlc291cmNlIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRyYWZmaWNUeXBlOiBUaGUgdHJhZmZpYyB0eXBlLlxuICAgICAqL1xuICAgIHB1YmxpYyB0cmFmZmljVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgRGVzY3JpcHRpb24gb2YgZmxvdyBsb2cuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmxvd0xvZ05hbWU6IFRoZSBmbG93IGxvZyBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBmbG93TG9nTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6Rmxvd0xvZ2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRmxvd0xvZ1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRmxvd0xvZy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRGVzY3JpcHRpb24gPSB0aGlzLmdldEF0dCgnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGhpcy5hdHRyRmxvd0xvZ0lkID0gdGhpcy5nZXRBdHQoJ0Zsb3dMb2dJZCcpO1xuICAgICAgICB0aGlzLmF0dHJGbG93TG9nTmFtZSA9IHRoaXMuZ2V0QXR0KCdGbG93TG9nTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJMb2dTdG9yZU5hbWUgPSB0aGlzLmdldEF0dCgnTG9nU3RvcmVOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clByb2plY3ROYW1lID0gdGhpcy5nZXRBdHQoJ1Byb2plY3ROYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlSWQgPSB0aGlzLmdldEF0dCgnUmVzb3VyY2VJZCcpO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZVR5cGUgPSB0aGlzLmdldEF0dCgnUmVzb3VyY2VUeXBlJyk7XG4gICAgICAgIHRoaXMuYXR0clRyYWZmaWNUeXBlID0gdGhpcy5nZXRBdHQoJ1RyYWZmaWNUeXBlJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmxvZ1N0b3JlTmFtZSA9IHByb3BzLmxvZ1N0b3JlTmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb3BzLnByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLnJlc291cmNlSWQgPSBwcm9wcy5yZXNvdXJjZUlkO1xuICAgICAgICB0aGlzLnJlc291cmNlVHlwZSA9IHByb3BzLnJlc291cmNlVHlwZTtcbiAgICAgICAgdGhpcy50cmFmZmljVHlwZSA9IHByb3BzLnRyYWZmaWNUeXBlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZmxvd0xvZ05hbWUgPSBwcm9wcy5mbG93TG9nTmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2dTdG9yZU5hbWU6IHRoaXMubG9nU3RvcmVOYW1lLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6IHRoaXMucHJvamVjdE5hbWUsXG4gICAgICAgICAgICByZXNvdXJjZUlkOiB0aGlzLnJlc291cmNlSWQsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHRoaXMucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgdHJhZmZpY1R5cGU6IHRoaXMudHJhZmZpY1R5cGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGZsb3dMb2dOYW1lOiB0aGlzLmZsb3dMb2dOYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NGbG93TG9nUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OkdyYW50SW5zdGFuY2VUb0NlbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NHcmFudEluc3RhbmNlVG9DZW5Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuSWQ6IFRoZSBJRCBvZiB0aGUgQ0VOIGluc3RhbmNlIHRvIGJlIGF1dGhvcml6ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZW5Pd25lcklkOiBUaGUgVUlEIG9mIHRoZSBhY2NvdW50IHRvIHdoaWNoIHRoZSB0YXJnZXQgQ0VOIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuT3duZXJJZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgbmV0d29yayBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgbmV0d29yayBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFZQQzogVmlydHVhbCBQcml2YXRlIENsb3VkIChWUEMpLlxuICAgICAqIFZCUjogVmlydHVhbCBCb3JkZXIgUm91dGVyIChWQlIpLlxuICAgICAqIENDTjogQ2xvdWQgQ29ubmVjdCBOZXR3b3JrIChDQ04pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0dyYW50SW5zdGFuY2VUb0NlblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NHcmFudEluc3RhbmNlVG9DZW5Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcmFudEluc3RhbmNlVG9DZW5Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZW5Pd25lcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlbk93bmVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Nlbk93bmVySWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuY2VuT3duZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VuSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2VuSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNlbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkNDTlwiLFwiVkJSXCIsXCJWUENcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0dyYW50SW5zdGFuY2VUb0NlblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OkdyYW50SW5zdGFuY2VUb0NlbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zR3JhbnRJbnN0YW5jZVRvQ2VuUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6R3JhbnRJbnN0YW5jZVRvQ2VuYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0dyYW50SW5zdGFuY2VUb0NlblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zR3JhbnRJbnN0YW5jZVRvQ2VuUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ2VuSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VuSWQpLFxuICAgICAgQ2VuT3duZXJJZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZW5Pd25lcklkKSxcbiAgICAgIEluc3RhbmNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VJZCksXG4gICAgICBJbnN0YW5jZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VUeXBlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OkdyYW50SW5zdGFuY2VUb0NlbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0dyYW50SW5zdGFuY2VUb0NlbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6VlBDOjpHcmFudEluc3RhbmNlVG9DZW5cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDZW5JZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UgdG8gYmUgYXV0aG9yaXplZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNlbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgbmV0d29yayBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlbklkOiBUaGUgSUQgb2YgdGhlIENFTiBpbnN0YW5jZSB0byBiZSBhdXRob3JpemVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBjZW5JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlbk93bmVySWQ6IFRoZSBVSUQgb2YgdGhlIGFjY291bnQgdG8gd2hpY2ggdGhlIHRhcmdldCBDRU4gaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2VuT3duZXJJZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgbmV0d29yayBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlVHlwZTogVGhlIHR5cGUgb2YgdGhlIG5ldHdvcmsgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBWUEM6IFZpcnR1YWwgUHJpdmF0ZSBDbG91ZCAoVlBDKS5cbiAgICAgKiBWQlI6IFZpcnR1YWwgQm9yZGVyIFJvdXRlciAoVkJSKS5cbiAgICAgKiBDQ046IENsb3VkIENvbm5lY3QgTmV0d29yayAoQ0NOKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpHcmFudEluc3RhbmNlVG9DZW5gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0dyYW50SW5zdGFuY2VUb0NlblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zR3JhbnRJbnN0YW5jZVRvQ2VuLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDZW5JZCA9IHRoaXMuZ2V0QXR0KCdDZW5JZCcpO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gdGhpcy5nZXRBdHQoJ0luc3RhbmNlSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY2VuSWQgPSBwcm9wcy5jZW5JZDtcbiAgICAgICAgdGhpcy5jZW5Pd25lcklkID0gcHJvcHMuY2VuT3duZXJJZDtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUlkID0gcHJvcHMuaW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5pbnN0YW5jZVR5cGUgPSBwcm9wcy5pbnN0YW5jZVR5cGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2VuSWQ6IHRoaXMuY2VuSWQsXG4gICAgICAgICAgICBjZW5Pd25lcklkOiB0aGlzLmNlbk93bmVySWQsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiB0aGlzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBpbnN0YW5jZVR5cGU6IHRoaXMuaW5zdGFuY2VUeXBlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NHcmFudEluc3RhbmNlVG9DZW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6SXBzZWNTZXJ2ZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSXBzZWNTZXJ2ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2xpZW50SXBQb29sOiBDbGllbnQgbmV0d29yayBzZWdtZW50IHJlZmVycyB0byB0aGUgYWRkcmVzcyBzZWdtZW50IHRoYXQgYXNzaWducyBhY2Nlc3MgYWRkcmVzc2VzIHRvIHRoZSB2aXJ0dWFsIG5ldHdvcmsgY2FyZCBvZiB0aGUgY2xpZW50LiBOb3RlOiBUaGUgY2xpZW50IG5ldHdvcmsgc2VnbWVudCBjYW5ub3QgY29uZmxpY3Qgd2l0aCB0aGUgVlBDIHNpZGUgbmV0d29yayBzZWdtZW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsaWVudElwUG9vbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvY2FsU3VibmV0OiBUaGUgbG9jYWwgbmV0d29yayBzZWdtZW50IHJlZmVycyB0byB0aGUgbmV0d29yayBzZWdtZW50IG9uIHRoZSBWUEMgc2lkZSB0aGF0IG5lZWRzIHRvIGJlIGludGVyY29ubmVjdGVkIHdpdGggdGhlIGNsaWVudCBuZXR3b3JrIHNlZ21lbnQuIFVzZSBoYWxmLXdpZHRoIGNvbW1hcyAoLCkgdG8gc2VwYXJhdGUgbXVsdGlwbGUgbmV0d29yayBzZWdtZW50cywgZm9yIGV4YW1wbGU6IDE5Mi4xNjguMS4wLzI0LDE5Mi4xNjguMi4wLzI0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvY2FsU3VibmV0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBuR2F0ZXdheUlkOiBWUE4gZ2F0ZXdheSBpbnN0YW5jZSBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cG5HYXRld2F5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlZmZlY3RJbW1lZGlhdGVseTogdHJ1ZTogQXBwbHkgdGhlIG5ldyBjb25maWd1cmF0aW9uIGFuZCB0cmlnZ2VyIGEgcmVjb25uZWN0aW9uIGltbWVkaWF0ZWx5LiBcbiAgICAgKiBmYWxzZTogVHJpZ2dlciBhIHJlY29ubmVjdGlvbiBvbmx5IHdoZW4gbmV0d29yayB0cmFmZmljIG9jY3Vycy4gKFRoZSByZWNvbm5lY3Rpb24gbWF5IGNhdXNlIHRoZSBuZXR3b3JrIHRvIGJlIHVuYXZhaWxhYmxlIGZvciBhIGJyaWVmIG1vbWVudClcbiAgICAgKi9cbiAgICByZWFkb25seSBlZmZlY3RJbW1lZGlhdGVseT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaWtlQ29uZmlnOiBOZWdvdGlhdGlvbiBwYXJhbWV0ZXIgY29uZmlndXJhdGlvbiBpbiB0aGUgZmlyc3QgcGhhc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWtlQ29uZmlnPzogUm9zSXBzZWNTZXJ2ZXIuSWtlQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXBzZWNDb25maWc6IE5lZ290aWF0aW9uIHBhcmFtZXRlciBjb25maWd1cmF0aW9uIGluIHRoZSBzZWNvbmQgcGhhc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXBzZWNDb25maWc/OiBSb3NJcHNlY1NlcnZlci5JcHNlY0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlwc2VjU2VydmVyTmFtZTogVGhlIHZhbHVlIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBjaGFyYWN0ZXIuIEl0IGNhbiBjb250YWluIGRpZ2l0cywgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXBzZWNTZXJ2ZXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBzazogUHJlLVNoYXJlZCBrZXkuIFVzZWQgZm9yIGlkZW50aXR5IGF1dGhlbnRpY2F0aW9uIGJldHdlZW4gdGhlIFZQTiBnYXRld2F5IGFuZCB0aGUgY2xpZW50LiBBIDE2LWJpdCByYW5kb20gc3RyaW5nIGlzIHJhbmRvbWx5IGdlbmVyYXRlZCBieSBkZWZhdWx0LCBvciB5b3UgY2FuIG1hbnVhbGx5IHNwZWNpZnkgdGhlIGtleS4gVGhlIGxlbmd0aCBpcyBsaW1pdGVkIHRvIDEwMCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBzaz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwc2tFbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSB0aGUgcHJlLXNoYXJlZCBrZXkgYXV0aGVudGljYXRpb24gbWV0aG9kLiBPbmx5IHRoZSB2YWx1ZSBpcyB0cnVlLCB3aGljaCBtZWFucyB0aGF0IHRoZSBwcmUtc2hhcmVkIGtleSBhdXRoZW50aWNhdGlvbiBtb2RlIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHNrRW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zSXBzZWNTZXJ2ZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSXBzZWNTZXJ2ZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJcHNlY1NlcnZlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9jYWxTdWJuZXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9jYWxTdWJuZXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2FsU3VibmV0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvY2FsU3VibmV0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlZmZlY3RJbW1lZGlhdGVseScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZWZmZWN0SW1tZWRpYXRlbHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsaWVudElwUG9vbCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jbGllbnRJcFBvb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsaWVudElwUG9vbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jbGllbnRJcFBvb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwbkdhdGV3YXlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52cG5HYXRld2F5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwbkdhdGV3YXlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cG5HYXRld2F5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwc2VjQ29uZmlnJywgUm9zSXBzZWNTZXJ2ZXJfSXBzZWNDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5pcHNlY0NvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHNrJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBzaykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWtlQ29uZmlnJywgUm9zSXBzZWNTZXJ2ZXJfSWtlQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuaWtlQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcHNlY1NlcnZlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaXBzZWNTZXJ2ZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwc2tFbmFibGVkJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5wc2tFbmFibGVkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0lwc2VjU2VydmVyUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6SXBzZWNTZXJ2ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0lwc2VjU2VydmVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6SXBzZWNTZXJ2ZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSXBzZWNTZXJ2ZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0lwc2VjU2VydmVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ2xpZW50SXBQb29sOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNsaWVudElwUG9vbCksXG4gICAgICBMb2NhbFN1Ym5ldDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2NhbFN1Ym5ldCksXG4gICAgICBWcG5HYXRld2F5SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBuR2F0ZXdheUlkKSxcbiAgICAgIEVmZmVjdEltbWVkaWF0ZWx5OiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lZmZlY3RJbW1lZGlhdGVseSksXG4gICAgICBJa2VDb25maWc6IHJvc0lwc2VjU2VydmVySWtlQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWtlQ29uZmlnKSxcbiAgICAgIElwc2VjQ29uZmlnOiByb3NJcHNlY1NlcnZlcklwc2VjQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXBzZWNDb25maWcpLFxuICAgICAgSXBzZWNTZXJ2ZXJOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlwc2VjU2VydmVyTmFtZSksXG4gICAgICBQc2s6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHNrKSxcbiAgICAgIFBza0VuYWJsZWQ6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBza0VuYWJsZWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6SXBzZWNTZXJ2ZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NJcHNlY1NlcnZlciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6VlBDOjpJcHNlY1NlcnZlclwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElwc2VjU2VydmVySWQ6IElQc2VjIHNlcnZlciBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklwc2VjU2VydmVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSXBzZWNTZXJ2ZXJOYW1lOiBJUHNlYyBzZXJ2ZXIgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklwc2VjU2VydmVyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2xpZW50SXBQb29sOiBDbGllbnQgbmV0d29yayBzZWdtZW50IHJlZmVycyB0byB0aGUgYWRkcmVzcyBzZWdtZW50IHRoYXQgYXNzaWducyBhY2Nlc3MgYWRkcmVzc2VzIHRvIHRoZSB2aXJ0dWFsIG5ldHdvcmsgY2FyZCBvZiB0aGUgY2xpZW50LiBOb3RlOiBUaGUgY2xpZW50IG5ldHdvcmsgc2VnbWVudCBjYW5ub3QgY29uZmxpY3Qgd2l0aCB0aGUgVlBDIHNpZGUgbmV0d29yayBzZWdtZW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBjbGllbnRJcFBvb2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2NhbFN1Ym5ldDogVGhlIGxvY2FsIG5ldHdvcmsgc2VnbWVudCByZWZlcnMgdG8gdGhlIG5ldHdvcmsgc2VnbWVudCBvbiB0aGUgVlBDIHNpZGUgdGhhdCBuZWVkcyB0byBiZSBpbnRlcmNvbm5lY3RlZCB3aXRoIHRoZSBjbGllbnQgbmV0d29yayBzZWdtZW50LiBVc2UgaGFsZi13aWR0aCBjb21tYXMgKCwpIHRvIHNlcGFyYXRlIG11bHRpcGxlIG5ldHdvcmsgc2VnbWVudHMsIGZvciBleGFtcGxlOiAxOTIuMTY4LjEuMC8yNCwxOTIuMTY4LjIuMC8yNC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9jYWxTdWJuZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cG5HYXRld2F5SWQ6IFZQTiBnYXRld2F5IGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHB1YmxpYyB2cG5HYXRld2F5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlZmZlY3RJbW1lZGlhdGVseTogdHJ1ZTogQXBwbHkgdGhlIG5ldyBjb25maWd1cmF0aW9uIGFuZCB0cmlnZ2VyIGEgcmVjb25uZWN0aW9uIGltbWVkaWF0ZWx5LiBcbiAgICAgKiBmYWxzZTogVHJpZ2dlciBhIHJlY29ubmVjdGlvbiBvbmx5IHdoZW4gbmV0d29yayB0cmFmZmljIG9jY3Vycy4gKFRoZSByZWNvbm5lY3Rpb24gbWF5IGNhdXNlIHRoZSBuZXR3b3JrIHRvIGJlIHVuYXZhaWxhYmxlIGZvciBhIGJyaWVmIG1vbWVudClcbiAgICAgKi9cbiAgICBwdWJsaWMgZWZmZWN0SW1tZWRpYXRlbHk6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaWtlQ29uZmlnOiBOZWdvdGlhdGlvbiBwYXJhbWV0ZXIgY29uZmlndXJhdGlvbiBpbiB0aGUgZmlyc3QgcGhhc2UuXG4gICAgICovXG4gICAgcHVibGljIGlrZUNvbmZpZzogUm9zSXBzZWNTZXJ2ZXIuSWtlQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXBzZWNDb25maWc6IE5lZ290aWF0aW9uIHBhcmFtZXRlciBjb25maWd1cmF0aW9uIGluIHRoZSBzZWNvbmQgcGhhc2UuXG4gICAgICovXG4gICAgcHVibGljIGlwc2VjQ29uZmlnOiBSb3NJcHNlY1NlcnZlci5JcHNlY0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlwc2VjU2VydmVyTmFtZTogVGhlIHZhbHVlIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBjaGFyYWN0ZXIuIEl0IGNhbiBjb250YWluIGRpZ2l0cywgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuXG4gICAgICovXG4gICAgcHVibGljIGlwc2VjU2VydmVyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBzazogUHJlLVNoYXJlZCBrZXkuIFVzZWQgZm9yIGlkZW50aXR5IGF1dGhlbnRpY2F0aW9uIGJldHdlZW4gdGhlIFZQTiBnYXRld2F5IGFuZCB0aGUgY2xpZW50LiBBIDE2LWJpdCByYW5kb20gc3RyaW5nIGlzIHJhbmRvbWx5IGdlbmVyYXRlZCBieSBkZWZhdWx0LCBvciB5b3UgY2FuIG1hbnVhbGx5IHNwZWNpZnkgdGhlIGtleS4gVGhlIGxlbmd0aCBpcyBsaW1pdGVkIHRvIDEwMCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBwc2s6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwc2tFbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSB0aGUgcHJlLXNoYXJlZCBrZXkgYXV0aGVudGljYXRpb24gbWV0aG9kLiBPbmx5IHRoZSB2YWx1ZSBpcyB0cnVlLCB3aGljaCBtZWFucyB0aGF0IHRoZSBwcmUtc2hhcmVkIGtleSBhdXRoZW50aWNhdGlvbiBtb2RlIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcHVibGljIHBza0VuYWJsZWQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpJcHNlY1NlcnZlcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zSXBzZWNTZXJ2ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0lwc2VjU2VydmVyLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJJcHNlY1NlcnZlcklkID0gdGhpcy5nZXRBdHQoJ0lwc2VjU2VydmVySWQnKTtcbiAgICAgICAgdGhpcy5hdHRySXBzZWNTZXJ2ZXJOYW1lID0gdGhpcy5nZXRBdHQoJ0lwc2VjU2VydmVyTmFtZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jbGllbnRJcFBvb2wgPSBwcm9wcy5jbGllbnRJcFBvb2w7XG4gICAgICAgIHRoaXMubG9jYWxTdWJuZXQgPSBwcm9wcy5sb2NhbFN1Ym5ldDtcbiAgICAgICAgdGhpcy52cG5HYXRld2F5SWQgPSBwcm9wcy52cG5HYXRld2F5SWQ7XG4gICAgICAgIHRoaXMuZWZmZWN0SW1tZWRpYXRlbHkgPSBwcm9wcy5lZmZlY3RJbW1lZGlhdGVseTtcbiAgICAgICAgdGhpcy5pa2VDb25maWcgPSBwcm9wcy5pa2VDb25maWc7XG4gICAgICAgIHRoaXMuaXBzZWNDb25maWcgPSBwcm9wcy5pcHNlY0NvbmZpZztcbiAgICAgICAgdGhpcy5pcHNlY1NlcnZlck5hbWUgPSBwcm9wcy5pcHNlY1NlcnZlck5hbWU7XG4gICAgICAgIHRoaXMucHNrID0gcHJvcHMucHNrO1xuICAgICAgICB0aGlzLnBza0VuYWJsZWQgPSBwcm9wcy5wc2tFbmFibGVkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsaWVudElwUG9vbDogdGhpcy5jbGllbnRJcFBvb2wsXG4gICAgICAgICAgICBsb2NhbFN1Ym5ldDogdGhpcy5sb2NhbFN1Ym5ldCxcbiAgICAgICAgICAgIHZwbkdhdGV3YXlJZDogdGhpcy52cG5HYXRld2F5SWQsXG4gICAgICAgICAgICBlZmZlY3RJbW1lZGlhdGVseTogdGhpcy5lZmZlY3RJbW1lZGlhdGVseSxcbiAgICAgICAgICAgIGlrZUNvbmZpZzogdGhpcy5pa2VDb25maWcsXG4gICAgICAgICAgICBpcHNlY0NvbmZpZzogdGhpcy5pcHNlY0NvbmZpZyxcbiAgICAgICAgICAgIGlwc2VjU2VydmVyTmFtZTogdGhpcy5pcHNlY1NlcnZlck5hbWUsXG4gICAgICAgICAgICBwc2s6IHRoaXMucHNrLFxuICAgICAgICAgICAgcHNrRW5hYmxlZDogdGhpcy5wc2tFbmFibGVkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NJcHNlY1NlcnZlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0lwc2VjU2VydmVyIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBJa2VDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaWtlQXV0aEFsZzogVGhlIGF1dGhlbnRpY2F0aW9uIGFsZ29yaXRobSBuZWdvdGlhdGVkIGluIHRoZSBmaXJzdCBwaGFzZS4gRGVmYXVsdCB2YWx1ZTogc2hhMS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlrZUF1dGhBbGc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbG9jYWxJZDogSVBzZWMgc2VydmVyIElELiBTdXBwb3J0IEZRRE4gYW5kIElQIGFkZHJlc3MgZm9ybWF0LCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyB0aGUgVlBOIGdhdGV3YXkgcHVibGljIG5ldHdvcmsgSVAgYWRkcmVzcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvY2FsSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaWtlRW5jQWxnOiBFbmNyeXB0aW9uIGFsZ29yaXRobSBuZWdvdGlhdGVkIGluIHRoZSBmaXJzdCBzdGFnZS4gRGVmYXVsdCB2YWx1ZTogYWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaWtlRW5jQWxnPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlrZVZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIHRoZSBJS0UgcHJvdG9jb2wuIFZhbHVlOiBpa2V2MSBvciBpa2V2MiwgZGVmYXVsdCB2YWx1ZTogaWtldjIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpa2VWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlrZU1vZGU6IE5lZ290aWF0aW9uIG1vZGUgb2YgdGhlIElLRSB2ZXJzaW9uLiBEZWZhdWx0IHZhbHVlOiBtYWluLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaWtlTW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpa2VMaWZldGltZTogVGhlIGxpZmUgY3ljbGUgb2YgdGhlIFNBIG5lZ290aWF0ZWQgaW4gdGhlIGZpcnN0IHBoYXNlLiBEZWZhdWx0IHZhbHVlOiA4NjQwMCwgaW4gc2Vjb25kcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlrZUxpZmV0aW1lPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlbW90ZUlkOiBQZWVyIElELiBTdXBwb3J0IEZRRE4gYW5kIElQIGFkZHJlc3MgZm9ybWF0LCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBlbXB0eS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlbW90ZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlrZVBmczogVGhlIERpZmZpZS1IZWxsbWFuIGtleSBleGNoYW5nZSBhbGdvcml0aG0gdXNlZCBpbiB0aGUgZmlyc3Qgc3RhZ2Ugb2YgbmVnb3RpYXRpb24uIERlZmF1bHQgdmFsdWU6IGdyb3VwMi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlrZVBmcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYElrZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJa2VDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJcHNlY1NlcnZlcl9Ja2VDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lrZUF1dGhBbGcnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWtlQXV0aEFsZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9jYWxJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2NhbElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpa2VFbmNBbGcnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWtlRW5jQWxnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpa2VWZXJzaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlrZVZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lrZU1vZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWtlTW9kZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWtlTGlmZXRpbWUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaWtlTGlmZXRpbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbW90ZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlbW90ZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpa2VQZnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWtlUGZzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIklrZUNvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6Oklwc2VjU2VydmVyLklrZUNvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSWtlQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6SXBzZWNTZXJ2ZXIuSWtlQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0lwc2VjU2VydmVySWtlQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0lwc2VjU2VydmVyX0lrZUNvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgSWtlQXV0aEFsZzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pa2VBdXRoQWxnKSxcbiAgICAgIExvY2FsSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9jYWxJZCksXG4gICAgICBJa2VFbmNBbGc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWtlRW5jQWxnKSxcbiAgICAgIElrZVZlcnNpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWtlVmVyc2lvbiksXG4gICAgICBJa2VNb2RlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlrZU1vZGUpLFxuICAgICAgSWtlTGlmZXRpbWU6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWtlTGlmZXRpbWUpLFxuICAgICAgUmVtb3RlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVtb3RlSWQpLFxuICAgICAgSWtlUGZzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlrZVBmcyksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NJcHNlY1NlcnZlciB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSXBzZWNDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaXBzZWNQZnM6IFRoZSBEaWZmaWUtSGVsbG1hbiBrZXkgZXhjaGFuZ2UgYWxnb3JpdGhtIHVzZWQgaW4gdGhlIHNlY29uZCBwaGFzZSBvZiBuZWdvdGlhdGlvbi4gRGVmYXVsdCB2YWx1ZTogZ3JvdXAyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaXBzZWNQZnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaXBzZWNFbmNBbGc6IEVuY3J5cHRpb24gYWxnb3JpdGhtIG5lZ290aWF0ZWQgaW4gdGhlIHNlY29uZCBzdGFnZS4gRGVmYXVsdCB2YWx1ZTogYWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaXBzZWNFbmNBbGc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaXBzZWNBdXRoQWxnOiBUaGUgYXV0aGVudGljYXRpb24gYWxnb3JpdGhtIG5lZ290aWF0ZWQgaW4gdGhlIHNlY29uZCBwaGFzZS4gRGVmYXVsdCB2YWx1ZTogc2hhMS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlwc2VjQXV0aEFsZz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpcHNlY0xpZmV0aW1lOiBUaGUgbGlmZXRpbWUgb2YgdGhlIFNBIG5lZ290aWF0ZWQgaW4gdGhlIHNlY29uZCBzdGFnZS4gRGVmYXVsdCB2YWx1ZTogODY0MDAsIGluIHNlY29uZHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpcHNlY0xpZmV0aW1lPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSXBzZWNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSXBzZWNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJcHNlY1NlcnZlcl9JcHNlY0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXBzZWNQZnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaXBzZWNQZnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwc2VjRW5jQWxnJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlwc2VjRW5jQWxnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcHNlY0F1dGhBbGcnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaXBzZWNBdXRoQWxnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcHNlY0xpZmV0aW1lJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmlwc2VjTGlmZXRpbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSXBzZWNDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpJcHNlY1NlcnZlci5JcHNlY0NvbmZpZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSXBzZWNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpJcHNlY1NlcnZlci5JcHNlY0NvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NJcHNlY1NlcnZlcklwc2VjQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0lwc2VjU2VydmVyX0lwc2VjQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBJcHNlY1Bmczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pcHNlY1BmcyksXG4gICAgICBJcHNlY0VuY0FsZzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pcHNlY0VuY0FsZyksXG4gICAgICBJcHNlY0F1dGhBbGc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXBzZWNBdXRoQWxnKSxcbiAgICAgIElwc2VjTGlmZXRpbWU6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXBzZWNMaWZldGltZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6SXB2NkdhdGV3YXlgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSXB2NkdhdGV3YXlQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFRvIG9wZW4gVlBDIElEIElQdjYgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiBJUHY2IGdhdGV3YXkuXG4gICAgICogTGVuZ3RoIG9mIDIgdG8gMjU2IGNoYXJhY3RlcnMsIG11c3QgYmVnaW4gd2l0aCBhIGxldHRlciBvciBDaGluZXNlLCBtYXkgY29udGFpbiBudW1iZXJzLCBudW1iZXJzLCB1bmRlcnNjb3JlIChfKSBhbmQgZG90IGRhc2ggKC0pLCBidXQgbm90IGF0IHRoZSBodHRwICguKTogLy8gb3IgaHR0cHM6IC8vIGF0IHRoZSBiZWdpbm5pbmcgLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IE5hbWUgb2YgdGhlIElQdjYgZ2F0ZXdheS5cbiAgICAgKiBMZW5ndGggb2YgMiB0byAxMjggY2hhcmFjdGVycywgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSwgY2FuIGNvbnRhaW4gbnVtYmVycywgZG90LCB1bmRlcnNjb3JlIChfKSBhbmQgZGFzaCAoLSksIGJ1dCBub3QgYXQgaHR0cCAoLik6IC8vIG9yIHdpdGggaHR0cHM6IC8vIC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNwZWM6IFNwZWNpZmljYXRpb25zIElQdjYgZ2F0ZXdheSwgdGhlIHZhbHVlOlxuICAgICAqIFNtYWxsIChkZWZhdWx0KTogRnJlZS5cbiAgICAgKiBNZWRpdW06IEVudGVycHJpc2UgRWRpdGlvbi5cbiAgICAgKiBMYXJnZTogRW50ZXJwcmlzZSBFbmhhbmNlZCBFZGl0aW9uLlxuICAgICAqIERpZmZlcmVudCBzcGVjaWZpY2F0aW9ucyBvZiB0aGUgSVB2NiBmb3J3YXJkaW5nIGNhcGFiaWxpdHkgb2YgdGhlIGdhdGV3YXkgaXMgZGlmZmVyZW50LiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIElQdjYgZ2F0ZXdheSBzcGVjaWZpY2F0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNwZWM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zSXB2NkdhdGV3YXkuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zSXB2NkdhdGV3YXlQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSXB2NkdhdGV3YXlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJcHY2R2F0ZXdheVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3BlYycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zcGVjKSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zSXB2NkdhdGV3YXlfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy50YWdzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSXB2NkdhdGV3YXlQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpJcHY2R2F0ZXdheWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zSXB2NkdhdGV3YXlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpJcHY2R2F0ZXdheWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NJcHY2R2F0ZXdheVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zSXB2NkdhdGV3YXlQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBWcGNJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNJZCksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgICAgU3BlYzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zcGVjKSxcbiAgICAgIFRhZ3M6IHJvcy5saXN0TWFwcGVyKHJvc0lwdjZHYXRld2F5VGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OklwdjZHYXRld2F5YFxuICovXG5leHBvcnQgY2xhc3MgUm9zSXB2NkdhdGV3YXkgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlZQQzo6SXB2NkdhdGV3YXlcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJcHY2R2F0ZXdheUlkOiBJRCBJUHY2IGdhdGV3YXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJcHY2R2F0ZXdheUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVG8gb3BlbiBWUEMgSUQgSVB2NiBnYXRld2F5LlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiBJUHY2IGdhdGV3YXkuXG4gICAgICogTGVuZ3RoIG9mIDIgdG8gMjU2IGNoYXJhY3RlcnMsIG11c3QgYmVnaW4gd2l0aCBhIGxldHRlciBvciBDaGluZXNlLCBtYXkgY29udGFpbiBudW1iZXJzLCBudW1iZXJzLCB1bmRlcnNjb3JlIChfKSBhbmQgZG90IGRhc2ggKC0pLCBidXQgbm90IGF0IHRoZSBodHRwICguKTogLy8gb3IgaHR0cHM6IC8vIGF0IHRoZSBiZWdpbm5pbmcgLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IE5hbWUgb2YgdGhlIElQdjYgZ2F0ZXdheS5cbiAgICAgKiBMZW5ndGggb2YgMiB0byAxMjggY2hhcmFjdGVycywgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSwgY2FuIGNvbnRhaW4gbnVtYmVycywgZG90LCB1bmRlcnNjb3JlIChfKSBhbmQgZGFzaCAoLSksIGJ1dCBub3QgYXQgaHR0cCAoLik6IC8vIG9yIHdpdGggaHR0cHM6IC8vIC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNwZWM6IFNwZWNpZmljYXRpb25zIElQdjYgZ2F0ZXdheSwgdGhlIHZhbHVlOlxuICAgICAqIFNtYWxsIChkZWZhdWx0KTogRnJlZS5cbiAgICAgKiBNZWRpdW06IEVudGVycHJpc2UgRWRpdGlvbi5cbiAgICAgKiBMYXJnZTogRW50ZXJwcmlzZSBFbmhhbmNlZCBFZGl0aW9uLlxuICAgICAqIERpZmZlcmVudCBzcGVjaWZpY2F0aW9ucyBvZiB0aGUgSVB2NiBmb3J3YXJkaW5nIGNhcGFiaWxpdHkgb2YgdGhlIGdhdGV3YXkgaXMgZGlmZmVyZW50LiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIElQdjYgZ2F0ZXdheSBzcGVjaWZpY2F0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBzcGVjOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnczogUm9zSXB2NkdhdGV3YXkuVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpJcHY2R2F0ZXdheWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zSXB2NkdhdGV3YXlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0lwdjZHYXRld2F5LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJJcHY2R2F0ZXdheUlkID0gdGhpcy5nZXRBdHQoJ0lwdjZHYXRld2F5SWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMudnBjSWQgPSBwcm9wcy52cGNJZDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgICAgICB0aGlzLnNwZWMgPSBwcm9wcy5zcGVjO1xuICAgICAgICB0aGlzLnRhZ3MgPSBwcm9wcy50YWdzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZwY0lkOiB0aGlzLnZwY0lkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBzcGVjOiB0aGlzLnNwZWMsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0lwdjZHYXRld2F5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSXB2NkdhdGV3YXkge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSXB2NkdhdGV3YXlfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGFnc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OklwdjZHYXRld2F5LlRhZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpJcHY2R2F0ZXdheS5UYWdzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0lwdjZHYXRld2F5VGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NJcHY2R2F0ZXdheV9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBWYWx1ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICBLZXk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpJcHY2SW50ZXJuZXRCYW5kd2lkdGhgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSXB2NkludGVybmV0QmFuZHdpZHRoUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhbmR3aWR0aDogUHVibGljIElQdjYgYWRkcmVzcyBvZiBiYW5kd2lkdGgsIHVuaXQ6IE1icHMsIHJhbmdlOiAxLTUwMDAuXG4gICAgICogV2hlbiBJbnRlcm5ldENoYXJnZVR5cGUgaXMgUGF5QnlCYW5kd2lkdGgsIHRoZSBiYW5kd2lkdGggb2YgdGhlIHB1YmxpYyBuZXR3b3JrIGlzIHRoZSBJUHY2IGFkZHJlc3MgMS01MDAwLlxuICAgICAqIFdoZW4gSW50ZXJuZXRDaGFyZ2VUeXBlIGlzIFBheUJ5VHJhZmZpYywgcHVibGljIG5ldHdvcmsgYmFuZHdpZHRoIElQdjYgYWRkcmVzc2VzIHdoaWxlIElQdjYgZ2F0ZXdheSByZXN0cmljdGVkIHNwZWNpZmljYXRpb25zLlxuICAgICAqIFNtYWxsIChkZWZhdWx0IGZyZWUgdmVyc2lvbiksIHRoZSBwdWJsaWMgbmV0d29yayBiYW5kd2lkdGggcmFuZ2UgMS01MDAuXG4gICAgICogTWVkaXVtIChFbnRlcnByaXNlIEVkaXRpb24pLCB0aGUgcHVibGljIG5ldHdvcmsgYmFuZHdpZHRoIHJhbmdlIGZyb20gMSB0byAxMDAwLlxuICAgICAqIExhcmdlIChFbnRlcnByaXNlIEVkaXRpb24pLCB0aGUgcHVibGljIG5ldHdvcmsgYmFuZHdpZHRoIHJhbmdlIDEtMjAwMC5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYW5kd2lkdGg6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpcHY2QWRkcmVzc0lkOiBJRCBvZiBJUHY2IGFkZHJlc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXB2NkFkZHJlc3NJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlwdjZHYXRld2F5SWQ6IElEIG9mIElQdjYgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpcHY2R2F0ZXdheUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRDaGFyZ2VUeXBlOiBJUHY2IHB1YmxpYyBuZXR3b3JrIGJhbmR3aWR0aCBiaWxsaW5nLCB2YWx1ZTpcbiAgICAgKiBQYXlCeVRyYWZmaWM6IGJ5IHVzaW5nIHRoZSB0cmFmZmljIGFjY291bnRpbmcuXG4gICAgICogUGF5QnlCYW5kd2lkdGggKGRlZmF1bHQpOiBCYW5kd2lkdGggYmlsbGluZy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcm5ldENoYXJnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zSXB2NkludGVybmV0QmFuZHdpZHRoLlRhZ3NQcm9wZXJ0eVtdO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0lwdjZJbnRlcm5ldEJhbmR3aWR0aFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJcHY2SW50ZXJuZXRCYW5kd2lkdGhQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJcHY2SW50ZXJuZXRCYW5kd2lkdGhQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhbmR3aWR0aCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5iYW5kd2lkdGgpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmJhbmR3aWR0aCAmJiAodHlwZW9mIHByb3BlcnRpZXMuYmFuZHdpZHRoKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiYW5kd2lkdGgnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5iYW5kd2lkdGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDUwMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhbmR3aWR0aCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5iYW5kd2lkdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwdjZBZGRyZXNzSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaXB2NkFkZHJlc3NJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXB2NkFkZHJlc3NJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pcHY2QWRkcmVzc0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcHY2R2F0ZXdheUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmlwdjZHYXRld2F5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwdjZHYXRld2F5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaXB2NkdhdGV3YXlJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFncyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRhZ3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50YWdzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWdzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0lwdjZJbnRlcm5ldEJhbmR3aWR0aF9UYWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludGVybmV0Q2hhcmdlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW50ZXJuZXRDaGFyZ2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldENoYXJnZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUGF5QnlUcmFmZmljXCIsXCJQYXlCeUJhbmR3aWR0aFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0Q2hhcmdlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSXB2NkludGVybmV0QmFuZHdpZHRoUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6SXB2NkludGVybmV0QmFuZHdpZHRoYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJcHY2SW50ZXJuZXRCYW5kd2lkdGhQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpJcHY2SW50ZXJuZXRCYW5kd2lkdGhgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSXB2NkludGVybmV0QmFuZHdpZHRoUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NJcHY2SW50ZXJuZXRCYW5kd2lkdGhQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBCYW5kd2lkdGg6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYmFuZHdpZHRoKSxcbiAgICAgIElwdjZBZGRyZXNzSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXB2NkFkZHJlc3NJZCksXG4gICAgICBJcHY2R2F0ZXdheUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlwdjZHYXRld2F5SWQpLFxuICAgICAgSW50ZXJuZXRDaGFyZ2VUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmludGVybmV0Q2hhcmdlVHlwZSksXG4gICAgICBUYWdzOiByb3MubGlzdE1hcHBlcihyb3NJcHY2SW50ZXJuZXRCYW5kd2lkdGhUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhZ3MpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6SXB2NkludGVybmV0QmFuZHdpZHRoYFxuICovXG5leHBvcnQgY2xhc3MgUm9zSXB2NkludGVybmV0QmFuZHdpZHRoIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OklwdjZJbnRlcm5ldEJhbmR3aWR0aFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEludGVybmV0QmFuZHdpZHRoSWQ6IFB1cmNoYXNlIG9mIHB1YmxpYyBuZXR3b3JrIGJhbmR3aWR0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckludGVybmV0QmFuZHdpZHRoSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhbmR3aWR0aDogUHVibGljIElQdjYgYWRkcmVzcyBvZiBiYW5kd2lkdGgsIHVuaXQ6IE1icHMsIHJhbmdlOiAxLTUwMDAuXG4gICAgICogV2hlbiBJbnRlcm5ldENoYXJnZVR5cGUgaXMgUGF5QnlCYW5kd2lkdGgsIHRoZSBiYW5kd2lkdGggb2YgdGhlIHB1YmxpYyBuZXR3b3JrIGlzIHRoZSBJUHY2IGFkZHJlc3MgMS01MDAwLlxuICAgICAqIFdoZW4gSW50ZXJuZXRDaGFyZ2VUeXBlIGlzIFBheUJ5VHJhZmZpYywgcHVibGljIG5ldHdvcmsgYmFuZHdpZHRoIElQdjYgYWRkcmVzc2VzIHdoaWxlIElQdjYgZ2F0ZXdheSByZXN0cmljdGVkIHNwZWNpZmljYXRpb25zLlxuICAgICAqIFNtYWxsIChkZWZhdWx0IGZyZWUgdmVyc2lvbiksIHRoZSBwdWJsaWMgbmV0d29yayBiYW5kd2lkdGggcmFuZ2UgMS01MDAuXG4gICAgICogTWVkaXVtIChFbnRlcnByaXNlIEVkaXRpb24pLCB0aGUgcHVibGljIG5ldHdvcmsgYmFuZHdpZHRoIHJhbmdlIGZyb20gMSB0byAxMDAwLlxuICAgICAqIExhcmdlIChFbnRlcnByaXNlIEVkaXRpb24pLCB0aGUgcHVibGljIG5ldHdvcmsgYmFuZHdpZHRoIHJhbmdlIDEtMjAwMC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYmFuZHdpZHRoOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXB2NkFkZHJlc3NJZDogSUQgb2YgSVB2NiBhZGRyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBpcHY2QWRkcmVzc0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXB2NkdhdGV3YXlJZDogSUQgb2YgSVB2NiBnYXRld2F5LlxuICAgICAqL1xuICAgIHB1YmxpYyBpcHY2R2F0ZXdheUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJuZXRDaGFyZ2VUeXBlOiBJUHY2IHB1YmxpYyBuZXR3b3JrIGJhbmR3aWR0aCBiaWxsaW5nLCB2YWx1ZTpcbiAgICAgKiBQYXlCeVRyYWZmaWM6IGJ5IHVzaW5nIHRoZSB0cmFmZmljIGFjY291bnRpbmcuXG4gICAgICogUGF5QnlCYW5kd2lkdGggKGRlZmF1bHQpOiBCYW5kd2lkdGggYmlsbGluZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJuZXRDaGFyZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnczogUm9zSXB2NkludGVybmV0QmFuZHdpZHRoLlRhZ3NQcm9wZXJ0eVtdIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6SXB2NkludGVybmV0QmFuZHdpZHRoYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NJcHY2SW50ZXJuZXRCYW5kd2lkdGhQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0lwdjZJbnRlcm5ldEJhbmR3aWR0aC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySW50ZXJuZXRCYW5kd2lkdGhJZCA9IHRoaXMuZ2V0QXR0KCdJbnRlcm5ldEJhbmR3aWR0aElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmJhbmR3aWR0aCA9IHByb3BzLmJhbmR3aWR0aDtcbiAgICAgICAgdGhpcy5pcHY2QWRkcmVzc0lkID0gcHJvcHMuaXB2NkFkZHJlc3NJZDtcbiAgICAgICAgdGhpcy5pcHY2R2F0ZXdheUlkID0gcHJvcHMuaXB2NkdhdGV3YXlJZDtcbiAgICAgICAgdGhpcy5pbnRlcm5ldENoYXJnZVR5cGUgPSBwcm9wcy5pbnRlcm5ldENoYXJnZVR5cGU7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFuZHdpZHRoOiB0aGlzLmJhbmR3aWR0aCxcbiAgICAgICAgICAgIGlwdjZBZGRyZXNzSWQ6IHRoaXMuaXB2NkFkZHJlc3NJZCxcbiAgICAgICAgICAgIGlwdjZHYXRld2F5SWQ6IHRoaXMuaXB2NkdhdGV3YXlJZCxcbiAgICAgICAgICAgIGludGVybmV0Q2hhcmdlVHlwZTogdGhpcy5pbnRlcm5ldENoYXJnZVR5cGUsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0lwdjZJbnRlcm5ldEJhbmR3aWR0aFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0lwdjZJbnRlcm5ldEJhbmR3aWR0aCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGFnc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXk6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJcHY2SW50ZXJuZXRCYW5kd2lkdGhfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGFnc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OklwdjZJbnRlcm5ldEJhbmR3aWR0aC5UYWdzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6SXB2NkludGVybmV0QmFuZHdpZHRoLlRhZ3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSXB2NkludGVybmV0QmFuZHdpZHRoVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NJcHY2SW50ZXJuZXRCYW5kd2lkdGhfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVmFsdWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgS2V5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6TmF0R2F0ZXdheWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NOYXRHYXRld2F5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgVlBDIGlkIHRvIGNyZWF0ZSBOQVQgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIFZTd2l0Y2ggaWQgdG8gY3JlYXRlIE5BVCBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9QYXk6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSBhdXRvbWF0aWMgcGF5bWVudC4gRGVmYXVsdCBpcyB0cnVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9QYXk/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGVsZXRlIHRoZSByZWxhdGl2ZSBzbmF0IGFuZCBkbmF0IGVudHJpZXMgaW4gdGhlIG5ldCBnYXRld2F5IGFuZCB1bmJpbmQgZWlwcy4gRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvbkZvcmNlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvblByb3RlY3Rpb246IFdoZXRoZXIgdG8gZW5hYmxlIGRlbGV0aW9uIHByb3RlY3Rpb24uXG4gICAgICogRGVmYXVsdCB0byBGYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvblByb3RlY3Rpb24/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgTkFUIGdhdGV3YXksIFsyLCAyNTZdIGNoYXJhY3RlcnMuIERvIG5vdCBmaWxsIG9yIGVtcHR5LCB0aGUgZGVmYXVsdCBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkdXJhdGlvbjogVGhlIHN1YnNjcmlwdGlvbiBkdXJhdGlvbi4gV2hpbGUgY2hvb3NlIGJ5IHBheSBieSBtb250aCwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDkgb3IgMTIsIDI0LCAzNi4gV2hpbGUgY2hvb3NlIHBheSBieSB5ZWFyLCBpdCBjb3VsZCBiZSBmcm9tIDEgdG8gMy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkdXJhdGlvbj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlaXBCaW5kTW9kZTogVGhlIG1vZGUgaW4gd2hpY2ggdGhlIEVJUCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIE5BVCBnYXRld2F5LiBWYWxpZCB2YWx1ZXM6TVVMVElfQklOREVEIChkZWZhdWx0KTogdGhlIG11bHRpLUVJUC10by1FTkkgbW9kZS5cbiAgICAgKiBOQVQ6IE5BVCBtb2RlLiBJUHY0IGdhdGV3YXlzIGFyZSBzdXBwb3J0ZWQuXG4gICAgICogTm90ZSBJZiB0aGUgRUlQIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgTkFUIGdhdGV3YXkgaW4gTkFUIG1vZGUsIFxuICAgICAqIHRoZSBFSVAgb2NjdXBpZXMgYSBwcml2YXRlIElQIGFkZHJlc3Mgb2YgdGhlIHZTd2l0Y2ggdG8gd2hpY2ggdGhlIE5BVCBnYXRld2F5IGJlbG9uZ3MuIFxuICAgICAqIE1ha2Ugc3VyZSB0aGF0IHRoZSB2U3dpdGNoIGhhcyBzdWZmaWNpZW50IHByaXZhdGUgSVAgYWRkcmVzc2VzLiBcbiAgICAgKiBPdGhlcndpc2UsIHRoZSBFSVAgY2Fubm90IGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgTkFUIGdhdGV3YXkuIFxuICAgICAqIEluIE5BVCBtb2RlLCBhIG1heGltdW0gbnVtYmVyIG9mIDUwIEVJUHMgY2FuIGJlIGFzc29jaWF0ZWQgd2l0aCBlYWNoIE5BVCBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVpcEJpbmRNb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlQ2hhcmdlVHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBQb3N0UGFpZCAod2hpY2ggbWVhbnMgcGF5LWFzLXlvdS1nbykuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVybmV0Q2hhcmdlVHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kIGZvciB0aGUgTkFUIGdhdGV3YXkuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBQYXlCeVNwZWM6IGJpbGxlZCBvbiBhIHBheS1ieS1zcGVjaWZpY2F0aW9uIGJhc2lzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0Q2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXRHYXRld2F5TmFtZTogRGlzcGxheSBuYW1lIG9mIHRoZSBOQVQgZ2F0ZXdheSwgWzIsIDEyOF0gRW5nbGlzaCBvciBDaGluZXNlIGNoYXJhY3RlcnMsIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlIGluIHNpemUsIGNhbiBjb250YWluIG51bWJlcnMsICdfJyBvciAnLicsICctJ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hdEdhdGV3YXlOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hdFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBOQVQgZ2F0ZXdheS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gRW5oYW5jZWQ6IGVuaGFuY2VkIE5BVCBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hdFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29ya1R5cGU6IFRoZSB0eXBlIG9mIHRoZSBjcmVhdGVkIE5BVCBnYXRld2F5LlxuICAgICAqIEludGVybmV0OiBwdWJsaWMgbmV0d29yayBOQVQgZ2F0ZXdheS5cbiAgICAgKiBJbnRyYW5ldDogVlBDIE5BVCBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcmtUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaWNpbmdDeWNsZTogUHJpY2UgY3ljbGUgb2YgdGhlIHJlc291cmNlLiBUaGlzIHByb3BlcnR5IGhhcyBubyBkZWZhdWx0IHZhbHVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaWNpbmdDeWNsZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBuYXRnYXRld2F5LiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIG5hdGdhdGV3YXkuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zTmF0R2F0ZXdheS5UYWdzUHJvcGVydHlbXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NOYXRHYXRld2F5UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc05hdEdhdGV3YXlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NOYXRHYXRld2F5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmF0R2F0ZXdheU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmF0R2F0ZXdheU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW5zdGFuY2VDaGFyZ2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUNoYXJnZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZUNoYXJnZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUGF5QXNZb3VHb1wiLFwiUG9zdFBhaWRcIixcIlBheU9uRGVtYW5kXCIsXCJQb3N0cGFpZFwiLFwiUG9zdFBheVwiLFwiUE9TVFBBWVwiLFwiUE9TVFwiLFwiU3Vic2NyaXB0aW9uXCIsXCJQcmVQYWlkXCIsXCJQcmVwYWlkXCIsXCJQcmVQYXlcIixcIlBSRVBBWVwiLFwiUFJFXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VDaGFyZ2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlICYmICh0eXBlb2YgcHJvcGVydGllcy5wcmljaW5nQ3ljbGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaWNpbmdDeWNsZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByaWNpbmdDeWNsZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJNb250aFwiLFwiWWVhclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaWNpbmdDeWNsZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcmljaW5nQ3ljbGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VpcEJpbmRNb2RlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVpcEJpbmRNb2RlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2U3dpdGNoSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudlN3aXRjaElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2U3dpdGNoSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudlN3aXRjaElkKSk7XG4gICAgaWYocHJvcGVydGllcy5kdXJhdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMuZHVyYXRpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2R1cmF0aW9uJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZHVyYXRpb24sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogWzEsMiwzLDQsNSw2LDcsOCw5LDEyLDI0LDM2XSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2R1cmF0aW9uJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmR1cmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxldGlvblByb3RlY3Rpb24nLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmRlbGV0aW9uUHJvdGVjdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXV0b1BheScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuYXV0b1BheSkpO1xuICAgIGlmKHByb3BlcnRpZXMubmF0VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubmF0VHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmF0VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm5hdFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiRW5oYW5jZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYXRUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hdFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmludGVybmV0Q2hhcmdlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW50ZXJuZXRDaGFyZ2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcm5ldENoYXJnZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUGF5QnlMY3VcIixcIlBheUJ5U3BlY1wiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVybmV0Q2hhcmdlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0aW9uRm9yY2UnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmRlbGV0aW9uRm9yY2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMubmV0d29ya1R5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm5ldHdvcmtUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm5ldHdvcmtUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImludGVybmV0XCIsXCJpbnRyYW5ldFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldHdvcmtUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5ldHdvcmtUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zTmF0R2F0ZXdheV9UYWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTmF0R2F0ZXdheVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6Ok5hdEdhdGV3YXlgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc05hdEdhdGV3YXlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpOYXRHYXRld2F5YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc05hdEdhdGV3YXlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc05hdEdhdGV3YXlQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBWcGNJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cGNJZCksXG4gICAgICBWU3dpdGNoSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudlN3aXRjaElkKSxcbiAgICAgIEF1dG9QYXk6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmF1dG9QYXkpLFxuICAgICAgRGVsZXRpb25Gb3JjZTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVsZXRpb25Gb3JjZSksXG4gICAgICBEZWxldGlvblByb3RlY3Rpb246IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlbGV0aW9uUHJvdGVjdGlvbiksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBEdXJhdGlvbjogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kdXJhdGlvbiksXG4gICAgICBFaXBCaW5kTW9kZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5laXBCaW5kTW9kZSksXG4gICAgICBJbnN0YW5jZUNoYXJnZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VDaGFyZ2VUeXBlKSxcbiAgICAgIEludGVybmV0Q2hhcmdlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcm5ldENoYXJnZVR5cGUpLFxuICAgICAgTmF0R2F0ZXdheU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmF0R2F0ZXdheU5hbWUpLFxuICAgICAgTmF0VHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYXRUeXBlKSxcbiAgICAgIE5ldHdvcmtUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5ldHdvcmtUeXBlKSxcbiAgICAgIFByaWNpbmdDeWNsZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmljaW5nQ3ljbGUpLFxuICAgICAgVGFnczogcm9zLmxpc3RNYXBwZXIocm9zTmF0R2F0ZXdheVRhZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGFncyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpOYXRHYXRld2F5YFxuICovXG5leHBvcnQgY2xhc3MgUm9zTmF0R2F0ZXdheSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6VlBDOjpOYXRHYXRld2F5XCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRm9yd2FyZFRhYmxlSWQ6IFRoZSBmb3J3YXJkIHRhYmxlIGlkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRm9yd2FyZFRhYmxlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmF0R2F0ZXdheUlkOiBUaGUgSWQgb2YgY3JlYXRlZCBOQVQgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hdEdhdGV3YXlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTTmF0VGFibGVJZDogVGhlIFNOQVQgdGFibGUgaWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTTmF0VGFibGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFRoZSBWUEMgaWQgdG8gY3JlYXRlIE5BVCBnYXRld2F5LlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIFZTd2l0Y2ggaWQgdG8gY3JlYXRlIE5BVCBnYXRld2F5LlxuICAgICAqL1xuICAgIHB1YmxpYyB2U3dpdGNoSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvUGF5OiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgYXV0b21hdGljIHBheW1lbnQuIERlZmF1bHQgaXMgdHJ1ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXV0b1BheTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBXaGV0aGVyIGZvcmNlIGRlbGV0ZSB0aGUgcmVsYXRpdmUgc25hdCBhbmQgZG5hdCBlbnRyaWVzIGluIHRoZSBuZXQgZ2F0ZXdheSBhbmQgdW5iaW5kIGVpcHMuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcHVibGljIGRlbGV0aW9uRm9yY2U6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsZXRpb25Qcm90ZWN0aW9uOiBXaGV0aGVyIHRvIGVuYWJsZSBkZWxldGlvbiBwcm90ZWN0aW9uLlxuICAgICAqIERlZmF1bHQgdG8gRmFsc2UuXG4gICAgICovXG4gICAgcHVibGljIGRlbGV0aW9uUHJvdGVjdGlvbjogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIE5BVCBnYXRld2F5LCBbMiwgMjU2XSBjaGFyYWN0ZXJzLiBEbyBub3QgZmlsbCBvciBlbXB0eSwgdGhlIGRlZmF1bHQgaXMgZW1wdHkuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZHVyYXRpb246IFRoZSBzdWJzY3JpcHRpb24gZHVyYXRpb24uIFdoaWxlIGNob29zZSBieSBwYXkgYnkgbW9udGgsIGl0IGNvdWxkIGJlIGZyb20gMSB0byA5IG9yIDEyLCAyNCwgMzYuIFdoaWxlIGNob29zZSBwYXkgYnkgeWVhciwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDMuXG4gICAgICovXG4gICAgcHVibGljIGR1cmF0aW9uOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWlwQmluZE1vZGU6IFRoZSBtb2RlIGluIHdoaWNoIHRoZSBFSVAgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBOQVQgZ2F0ZXdheS4gVmFsaWQgdmFsdWVzOk1VTFRJX0JJTkRFRCAoZGVmYXVsdCk6IHRoZSBtdWx0aS1FSVAtdG8tRU5JIG1vZGUuXG4gICAgICogTkFUOiBOQVQgbW9kZS4gSVB2NCBnYXRld2F5cyBhcmUgc3VwcG9ydGVkLlxuICAgICAqIE5vdGUgSWYgdGhlIEVJUCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIE5BVCBnYXRld2F5IGluIE5BVCBtb2RlLCBcbiAgICAgKiB0aGUgRUlQIG9jY3VwaWVzIGEgcHJpdmF0ZSBJUCBhZGRyZXNzIG9mIHRoZSB2U3dpdGNoIHRvIHdoaWNoIHRoZSBOQVQgZ2F0ZXdheSBiZWxvbmdzLiBcbiAgICAgKiBNYWtlIHN1cmUgdGhhdCB0aGUgdlN3aXRjaCBoYXMgc3VmZmljaWVudCBwcml2YXRlIElQIGFkZHJlc3Nlcy4gXG4gICAgICogT3RoZXJ3aXNlLCB0aGUgRUlQIGNhbm5vdCBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIE5BVCBnYXRld2F5LiBcbiAgICAgKiBJbiBOQVQgbW9kZSwgYSBtYXhpbXVtIG51bWJlciBvZiA1MCBFSVBzIGNhbiBiZSBhc3NvY2lhdGVkIHdpdGggZWFjaCBOQVQgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZWlwQmluZE1vZGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUNoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgUG9zdFBhaWQgKHdoaWNoIG1lYW5zIHBheS1hcy15b3UtZ28pLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUNoYXJnZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcm5ldENoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZCBmb3IgdGhlIE5BVCBnYXRld2F5LiBWYWxpZCB2YWx1ZXM6XG4gICAgICogUGF5QnlTcGVjOiBiaWxsZWQgb24gYSBwYXktYnktc3BlY2lmaWNhdGlvbiBiYXNpcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJuZXRDaGFyZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmF0R2F0ZXdheU5hbWU6IERpc3BsYXkgbmFtZSBvZiB0aGUgTkFUIGdhdGV3YXksIFsyLCAxMjhdIEVuZ2xpc2ggb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBpbiBzaXplLCBjYW4gY29udGFpbiBudW1iZXJzLCAnXycgb3IgJy4nLCAnLSdcbiAgICAgKi9cbiAgICBwdWJsaWMgbmF0R2F0ZXdheU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgTkFUIGdhdGV3YXkuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEVuaGFuY2VkOiBlbmhhbmNlZCBOQVQgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmF0VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldHdvcmtUeXBlOiBUaGUgdHlwZSBvZiB0aGUgY3JlYXRlZCBOQVQgZ2F0ZXdheS5cbiAgICAgKiBJbnRlcm5ldDogcHVibGljIG5ldHdvcmsgTkFUIGdhdGV3YXkuXG4gICAgICogSW50cmFuZXQ6IFZQQyBOQVQgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmV0d29ya1R5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmljaW5nQ3ljbGU6IFByaWNlIGN5Y2xlIG9mIHRoZSByZXNvdXJjZS4gVGhpcyBwcm9wZXJ0eSBoYXMgbm8gZGVmYXVsdCB2YWx1ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJpY2luZ0N5Y2xlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gbmF0Z2F0ZXdheS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBuYXRnYXRld2F5LiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIHRhZ3M6IFJvc05hdEdhdGV3YXkuVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpOYXRHYXRld2F5YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NOYXRHYXRld2F5UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NOYXRHYXRld2F5LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJGb3J3YXJkVGFibGVJZCA9IHRoaXMuZ2V0QXR0KCdGb3J3YXJkVGFibGVJZCcpO1xuICAgICAgICB0aGlzLmF0dHJOYXRHYXRld2F5SWQgPSB0aGlzLmdldEF0dCgnTmF0R2F0ZXdheUlkJyk7XG4gICAgICAgIHRoaXMuYXR0clNOYXRUYWJsZUlkID0gdGhpcy5nZXRBdHQoJ1NOYXRUYWJsZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnZwY0lkID0gcHJvcHMudnBjSWQ7XG4gICAgICAgIHRoaXMudlN3aXRjaElkID0gcHJvcHMudlN3aXRjaElkO1xuICAgICAgICB0aGlzLmF1dG9QYXkgPSBwcm9wcy5hdXRvUGF5O1xuICAgICAgICB0aGlzLmRlbGV0aW9uRm9yY2UgPSBwcm9wcy5kZWxldGlvbkZvcmNlO1xuICAgICAgICB0aGlzLmRlbGV0aW9uUHJvdGVjdGlvbiA9IHByb3BzLmRlbGV0aW9uUHJvdGVjdGlvbjtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gcHJvcHMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuZWlwQmluZE1vZGUgPSBwcm9wcy5laXBCaW5kTW9kZTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUNoYXJnZVR5cGUgPSBwcm9wcy5pbnN0YW5jZUNoYXJnZVR5cGU7XG4gICAgICAgIHRoaXMuaW50ZXJuZXRDaGFyZ2VUeXBlID0gcHJvcHMuaW50ZXJuZXRDaGFyZ2VUeXBlO1xuICAgICAgICB0aGlzLm5hdEdhdGV3YXlOYW1lID0gcHJvcHMubmF0R2F0ZXdheU5hbWU7XG4gICAgICAgIHRoaXMubmF0VHlwZSA9IHByb3BzLm5hdFR5cGU7XG4gICAgICAgIHRoaXMubmV0d29ya1R5cGUgPSBwcm9wcy5uZXR3b3JrVHlwZTtcbiAgICAgICAgdGhpcy5wcmljaW5nQ3ljbGUgPSBwcm9wcy5wcmljaW5nQ3ljbGU7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdnBjSWQ6IHRoaXMudnBjSWQsXG4gICAgICAgICAgICB2U3dpdGNoSWQ6IHRoaXMudlN3aXRjaElkLFxuICAgICAgICAgICAgYXV0b1BheTogdGhpcy5hdXRvUGF5LFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogdGhpcy5kZWxldGlvbkZvcmNlLFxuICAgICAgICAgICAgZGVsZXRpb25Qcm90ZWN0aW9uOiB0aGlzLmRlbGV0aW9uUHJvdGVjdGlvbixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICBlaXBCaW5kTW9kZTogdGhpcy5laXBCaW5kTW9kZSxcbiAgICAgICAgICAgIGluc3RhbmNlQ2hhcmdlVHlwZTogdGhpcy5pbnN0YW5jZUNoYXJnZVR5cGUsXG4gICAgICAgICAgICBpbnRlcm5ldENoYXJnZVR5cGU6IHRoaXMuaW50ZXJuZXRDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgbmF0R2F0ZXdheU5hbWU6IHRoaXMubmF0R2F0ZXdheU5hbWUsXG4gICAgICAgICAgICBuYXRUeXBlOiB0aGlzLm5hdFR5cGUsXG4gICAgICAgICAgICBuZXR3b3JrVHlwZTogdGhpcy5uZXR3b3JrVHlwZSxcbiAgICAgICAgICAgIHByaWNpbmdDeWNsZTogdGhpcy5wcmljaW5nQ3ljbGUsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc05hdEdhdGV3YXlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NOYXRHYXRld2F5IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBUYWdzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc05hdEdhdGV3YXlfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGFnc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6Ok5hdEdhdGV3YXkuVGFnc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6Ok5hdEdhdGV3YXkuVGFnc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NOYXRHYXRld2F5VGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NOYXRHYXRld2F5X1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFZhbHVlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgIEtleTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6Ok5hdElwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc05hdElwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hdEdhdGV3YXlJZDogVGhlIElEIG9mIHRoZSBWaXJ0dWFsIFByaXZhdGUgQ2xvdWQgKFZQQykgTkFUIGdhdGV3YXkgZm9yIHdoaWNoIHlvdSB3YW50IHRvIGNyZWF0ZVxuICAgICAqIHRoZSBOQVQgSVAgYWRkcmVzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYXRHYXRld2F5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXRJcENpZHI6IFRoZSBDSURSIGJsb2NrIHRvIHdoaWNoIHRoZSBOQVQgSVAgYWRkcmVzcyBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hdElwQ2lkcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hdElwRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgTkFUIElQIGFkZHJlc3MuXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlclxuICAgICAqIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hdElwRGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXRJcE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBOQVQgSVAgYWRkcmVzcy5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBwZXJpb2RzXG4gICAgICogKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLiBJdCBjYW5ub3Qgc3RhcnRcbiAgICAgKiB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmF0SXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmF0SXA6IFRoZSBOQVQgSVAgYWRkcmVzcyB0aGF0IHlvdSB3YW50IHRvIGNyZWF0ZS5cbiAgICAgKiBJZiB5b3UgZG8gbm90IHNwZWNpZnkgYW4gSVAgYWRkcmVzcywgdGhlIHN5c3RlbSBzZWxlY3RzIGEgcmFuZG9tIElQIGFkZHJlc3MgZnJvbSB0aGVcbiAgICAgKiBzcGVjaWZpZWQgQ0lEUiBibG9jay5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYXRJcD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXRJcENpZHJJZDogVGhlIElEIG9mIHRoZSBDSURSIGJsb2NrIHRvIHdoaWNoIHRoZSBOQVQgSVAgYWRkcmVzcyBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hdElwQ2lkcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc05hdElwUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc05hdElwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTmF0SXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hdElwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hdElwKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYXRJcENpZHInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmF0SXBDaWRyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYXRJcENpZHInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmF0SXBDaWRyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYXRJcENpZHJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYXRJcENpZHJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmF0SXBEZXNjcmlwdGlvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uYXRJcERlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5uYXRJcERlc2NyaXB0aW9uICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMubmF0SXBEZXNjcmlwdGlvbikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLm5hdElwRGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYXRJcERlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm5hdElwRGVzY3JpcHRpb24ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiAyNTYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hdElwRGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmF0SXBEZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmF0SXBOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hdElwTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMubmF0SXBOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMubmF0SXBOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubmF0SXBOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmF0SXBOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm5hdElwTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDEyOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmF0SXBOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hdElwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmF0R2F0ZXdheUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hdEdhdGV3YXlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmF0R2F0ZXdheUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hdEdhdGV3YXlJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NOYXRJcFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6Ok5hdElwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NOYXRJcFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6Ok5hdElwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc05hdElwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NOYXRJcFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIE5hdEdhdGV3YXlJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYXRHYXRld2F5SWQpLFxuICAgICAgTmF0SXBDaWRyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hdElwQ2lkciksXG4gICAgICBOYXRJcERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hdElwRGVzY3JpcHRpb24pLFxuICAgICAgTmF0SXBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hdElwTmFtZSksXG4gICAgICBOYXRJcDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYXRJcCksXG4gICAgICBOYXRJcENpZHJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYXRJcENpZHJJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpOYXRJcGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc05hdElwIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6Ok5hdElwXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmF0SXA6IE5BVCBJUCBhZGRyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmF0SXA6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmF0SXBJZDogVGhlIElEIG9mIHRoZSBOQVQgSVAgYWRkcmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hdElwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hdEdhdGV3YXlJZDogVGhlIElEIG9mIHRoZSBWaXJ0dWFsIFByaXZhdGUgQ2xvdWQgKFZQQykgTkFUIGdhdGV3YXkgZm9yIHdoaWNoIHlvdSB3YW50IHRvIGNyZWF0ZVxuICAgICAqIHRoZSBOQVQgSVAgYWRkcmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmF0R2F0ZXdheUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmF0SXBDaWRyOiBUaGUgQ0lEUiBibG9jayB0byB3aGljaCB0aGUgTkFUIElQIGFkZHJlc3MgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmF0SXBDaWRyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmF0SXBEZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBOQVQgSVAgYWRkcmVzcy5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAyIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyXG4gICAgICogYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcHVibGljIG5hdElwRGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYXRJcE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBOQVQgSVAgYWRkcmVzcy5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBwZXJpb2RzXG4gICAgICogKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLiBJdCBjYW5ub3Qgc3RhcnRcbiAgICAgKiB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcHVibGljIG5hdElwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hdElwOiBUaGUgTkFUIElQIGFkZHJlc3MgdGhhdCB5b3Ugd2FudCB0byBjcmVhdGUuXG4gICAgICogSWYgeW91IGRvIG5vdCBzcGVjaWZ5IGFuIElQIGFkZHJlc3MsIHRoZSBzeXN0ZW0gc2VsZWN0cyBhIHJhbmRvbSBJUCBhZGRyZXNzIGZyb20gdGhlXG4gICAgICogc3BlY2lmaWVkIENJRFIgYmxvY2suXG4gICAgICovXG4gICAgcHVibGljIG5hdElwOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmF0SXBDaWRySWQ6IFRoZSBJRCBvZiB0aGUgQ0lEUiBibG9jayB0byB3aGljaCB0aGUgTkFUIElQIGFkZHJlc3MgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmF0SXBDaWRySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpWUEM6Ok5hdElwYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NOYXRJcFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTmF0SXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ck5hdElwID0gdGhpcy5nZXRBdHQoJ05hdElwJyk7XG4gICAgICAgIHRoaXMuYXR0ck5hdElwSWQgPSB0aGlzLmdldEF0dCgnTmF0SXBJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5uYXRHYXRld2F5SWQgPSBwcm9wcy5uYXRHYXRld2F5SWQ7XG4gICAgICAgIHRoaXMubmF0SXBDaWRyID0gcHJvcHMubmF0SXBDaWRyO1xuICAgICAgICB0aGlzLm5hdElwRGVzY3JpcHRpb24gPSBwcm9wcy5uYXRJcERlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLm5hdElwTmFtZSA9IHByb3BzLm5hdElwTmFtZTtcbiAgICAgICAgdGhpcy5uYXRJcCA9IHByb3BzLm5hdElwO1xuICAgICAgICB0aGlzLm5hdElwQ2lkcklkID0gcHJvcHMubmF0SXBDaWRySWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmF0R2F0ZXdheUlkOiB0aGlzLm5hdEdhdGV3YXlJZCxcbiAgICAgICAgICAgIG5hdElwQ2lkcjogdGhpcy5uYXRJcENpZHIsXG4gICAgICAgICAgICBuYXRJcERlc2NyaXB0aW9uOiB0aGlzLm5hdElwRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBuYXRJcE5hbWU6IHRoaXMubmF0SXBOYW1lLFxuICAgICAgICAgICAgbmF0SXA6IHRoaXMubmF0SXAsXG4gICAgICAgICAgICBuYXRJcENpZHJJZDogdGhpcy5uYXRJcENpZHJJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zTmF0SXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6TmV0d29ya0FjbGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NOZXR3b3JrQWNsUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCAoVlBDKSB0byB3aGljaCB0aGUgbmV0d29yayBBQ0wgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIG5ldHdvcmsgQUNMLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIDIgdG8gMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBUaGUgZGVzY3JpcHRpb24gbXVzdCBzdGFydFxuICAgICAqIHdpdGggYSBsZXR0ZXIgYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWdyZXNzQWNsRW50cmllczogVGhlIGxpc3Qgb2YgZWdyZXNzIG5ldHdvcmsgQUNMIGVudHJpZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWdyZXNzQWNsRW50cmllcz86IEFycmF5PFJvc05ldHdvcmtBY2wuRWdyZXNzQWNsRW50cmllc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbmdyZXNzQWNsRW50cmllczogVGhlIGxpc3Qgb2YgaW5ncmVzcyBuZXR3b3JrIEFDTCBlbnRyaWVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluZ3Jlc3NBY2xFbnRyaWVzPzogQXJyYXk8Um9zTmV0d29ya0FjbC5JbmdyZXNzQWNsRW50cmllc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXR3b3JrQWNsTmFtZTogVGhlIG5hbWUgb2YgdGhlIG5ldHdvcmsgQUNMLlxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgcGVyaW9kc1xuICAgICAqICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBhbmQgY2Fubm90XG4gICAgICogc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcmtBY2xOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc05ldHdvcmtBY2xQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTmV0d29ya0FjbFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc05ldHdvcmtBY2xQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluZ3Jlc3NBY2xFbnRyaWVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuaW5ncmVzc0FjbEVudHJpZXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5pbmdyZXNzQWNsRW50cmllcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luZ3Jlc3NBY2xFbnRyaWVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmluZ3Jlc3NBY2xFbnRyaWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5ncmVzc0FjbEVudHJpZXMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NOZXR3b3JrQWNsX0luZ3Jlc3NBY2xFbnRyaWVzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmluZ3Jlc3NBY2xFbnRyaWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgaWYocHJvcGVydGllcy5lZ3Jlc3NBY2xFbnRyaWVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZWdyZXNzQWNsRW50cmllcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmVncmVzc0FjbEVudHJpZXMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlZ3Jlc3NBY2xFbnRyaWVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmVncmVzc0FjbEVudHJpZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlZ3Jlc3NBY2xFbnRyaWVzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zTmV0d29ya0FjbF9FZ3Jlc3NBY2xFbnRyaWVzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmVncmVzc0FjbEVudHJpZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25ldHdvcmtBY2xOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5ldHdvcmtBY2xOYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc05ldHdvcmtBY2xQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpOZXR3b3JrQWNsYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NOZXR3b3JrQWNsUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6TmV0d29ya0FjbGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NOZXR3b3JrQWNsUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NOZXR3b3JrQWNsUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgVnBjSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgRWdyZXNzQWNsRW50cmllczogcm9zLmxpc3RNYXBwZXIocm9zTmV0d29ya0FjbEVncmVzc0FjbEVudHJpZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZWdyZXNzQWNsRW50cmllcyksXG4gICAgICBJbmdyZXNzQWNsRW50cmllczogcm9zLmxpc3RNYXBwZXIocm9zTmV0d29ya0FjbEluZ3Jlc3NBY2xFbnRyaWVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmluZ3Jlc3NBY2xFbnRyaWVzKSxcbiAgICAgIE5ldHdvcmtBY2xOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5ldHdvcmtBY2xOYW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6Ok5ldHdvcmtBY2xgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NOZXR3b3JrQWNsIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6Ok5ldHdvcmtBY2xcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOZXR3b3JrQWNsRW50cnlOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW5ib3VuZCBydWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmV0d29ya0FjbEVudHJ5TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOZXR3b3JrQWNsSWQ6IFRoZSBJRCBvZiB0aGUgbmV0d29yayBBQ0wuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOZXR3b3JrQWNsSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCAoVlBDKSB0byB3aGljaCB0aGUgbmV0d29yayBBQ0wgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBuZXR3b3JrIEFDTC5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAyIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gVGhlIGRlc2NyaXB0aW9uIG11c3Qgc3RhcnRcbiAgICAgKiB3aXRoIGEgbGV0dGVyIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVncmVzc0FjbEVudHJpZXM6IFRoZSBsaXN0IG9mIGVncmVzcyBuZXR3b3JrIEFDTCBlbnRyaWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBlZ3Jlc3NBY2xFbnRyaWVzOiBBcnJheTxSb3NOZXR3b3JrQWNsLkVncmVzc0FjbEVudHJpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5ncmVzc0FjbEVudHJpZXM6IFRoZSBsaXN0IG9mIGluZ3Jlc3MgbmV0d29yayBBQ0wgZW50cmllcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5ncmVzc0FjbEVudHJpZXM6IEFycmF5PFJvc05ldHdvcmtBY2wuSW5ncmVzc0FjbEVudHJpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV0d29ya0FjbE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBuZXR3b3JrIEFDTC5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIHBlcmlvZHNcbiAgICAgKiAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBUaGUgbmFtZSBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgYW5kIGNhbm5vdFxuICAgICAqIHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmV0d29ya0FjbE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpWUEM6Ok5ldHdvcmtBY2xgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc05ldHdvcmtBY2xQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc05ldHdvcmtBY2wuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ck5ldHdvcmtBY2xFbnRyeU5hbWUgPSB0aGlzLmdldEF0dCgnTmV0d29ya0FjbEVudHJ5TmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJOZXR3b3JrQWNsSWQgPSB0aGlzLmdldEF0dCgnTmV0d29ya0FjbElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnZwY0lkID0gcHJvcHMudnBjSWQ7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5lZ3Jlc3NBY2xFbnRyaWVzID0gcHJvcHMuZWdyZXNzQWNsRW50cmllcztcbiAgICAgICAgdGhpcy5pbmdyZXNzQWNsRW50cmllcyA9IHByb3BzLmluZ3Jlc3NBY2xFbnRyaWVzO1xuICAgICAgICB0aGlzLm5ldHdvcmtBY2xOYW1lID0gcHJvcHMubmV0d29ya0FjbE5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdnBjSWQ6IHRoaXMudnBjSWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGVncmVzc0FjbEVudHJpZXM6IHRoaXMuZWdyZXNzQWNsRW50cmllcyxcbiAgICAgICAgICAgIGluZ3Jlc3NBY2xFbnRyaWVzOiB0aGlzLmluZ3Jlc3NBY2xFbnRyaWVzLFxuICAgICAgICAgICAgbmV0d29ya0FjbE5hbWU6IHRoaXMubmV0d29ya0FjbE5hbWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc05ldHdvcmtBY2xQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NOZXR3b3JrQWNsIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBFZ3Jlc3NBY2xFbnRyaWVzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvbGljeTogVGhlIGF1dGhvcml6YXRpb24gcG9saWN5LiBWYWxpZCB2YWx1ZXM6XG4gICAgICogYWNjZXB0OiBhY2Nlc3MgcGVybWlzc2lvbnMgZ3JhbnRlZC5cbiAgICAgKiBkcm9wOiBhY2Nlc3MgcGVybWlzc2lvbnMgZGVuaWVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9saWN5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZWdyZXNzIGVudHJ5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGVzdGluYXRpb25DaWRySXA6IERlc3RpbmF0aW9uIGFkZHJlc3MgbmV0d29yayBzZWdtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVzdGluYXRpb25DaWRySXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW50cnlUeXBlOiBUaGUgdHlwZSBvZiB0aGUgcnVsZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIGN1c3RvbSA6IGN1c3RvbSBydWxlcy5cbiAgICAgKiBzeXN0ZW0gOiBzeXN0ZW0gcnVsZXMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlbnRyeVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcG9ydDogVGhlIHNvdXJjZSBwb3J0cy4gVGhlIHZhbHVlIHJhbmdlIGlzIGZyb20gMSB0byA2NTUzNTsgc2V0dGluZyBmb3JtYXRzIHN1Y2ggYXMgXCIxLzIwMFwiIGFuZCBcIjgwLzgwXCIsIHdoZXJlIFwiLTEvLTFcIiBjYW5ub3QgYmUgc2V0IGluZGl2aWR1YWxseSwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgcG9ydCBpcyBub3QgcmVzdHJpY3RlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvcnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcm90b2NvbDogVGhlIHRyYW5zcG9ydCBsYXllciBwcm90b2NvbHMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBpY21wXG4gICAgICogZ3JlXG4gICAgICogdGNwXG4gICAgICogdWRwXG4gICAgICogYWxsOiBBbGwgcHJvdG9jb2xzIGFyZSBzdXBwb3J0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcm90b2NvbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5ldHdvcmtBY2xFbnRyeU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBlZ3Jlc3MgZW50cnkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuZXR3b3JrQWNsRW50cnlOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRWdyZXNzQWNsRW50cmllc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFZ3Jlc3NBY2xFbnRyaWVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTmV0d29ya0FjbF9FZ3Jlc3NBY2xFbnRyaWVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3knLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5KSk7XG4gICAgaWYocHJvcGVydGllcy5wb2xpY3kgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBvbGljeSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucG9saWN5LFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImFjY2VwdFwiLFwiZHJvcFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb2xpY3kpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXN0aW5hdGlvbkNpZHJJcCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXN0aW5hdGlvbkNpZHJJcCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZW50cnlUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5lbnRyeVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VudHJ5VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmVudHJ5VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJjdXN0b21cIixcInN5c3RlbVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VudHJ5VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lbnRyeVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb3J0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcm90b2NvbCkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJvdG9jb2wgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByb3RvY29sKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByb3RvY29sLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImljbXBcIixcImdyZVwiLFwidGNwXCIsXCJ1ZHBcIixcImFsbFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3RvY29sJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb3RvY29sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrQWNsRW50cnlOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5ldHdvcmtBY2xFbnRyeU5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRWdyZXNzQWNsRW50cmllc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6Ok5ldHdvcmtBY2wuRWdyZXNzQWNsRW50cmllc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRWdyZXNzQWNsRW50cmllc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6Ok5ldHdvcmtBY2wuRWdyZXNzQWNsRW50cmllc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NOZXR3b3JrQWNsRWdyZXNzQWNsRW50cmllc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NOZXR3b3JrQWNsX0VncmVzc0FjbEVudHJpZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFBvbGljeTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb2xpY3kpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgRGVzdGluYXRpb25DaWRySXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzdGluYXRpb25DaWRySXApLFxuICAgICAgRW50cnlUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVudHJ5VHlwZSksXG4gICAgICBQb3J0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvcnQpLFxuICAgICAgUHJvdG9jb2w6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvdG9jb2wpLFxuICAgICAgTmV0d29ya0FjbEVudHJ5TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uZXR3b3JrQWNsRW50cnlOYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc05ldHdvcmtBY2wge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEluZ3Jlc3NBY2xFbnRyaWVzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvbGljeTogVGhlIGF1dGhvcml6YXRpb24gcG9saWN5LiBWYWxpZCB2YWx1ZXM6XG4gICAgICogYWNjZXB0OiBhY2Nlc3MgcGVybWlzc2lvbnMgZ3JhbnRlZC5cbiAgICAgKiBkcm9wOiBhY2Nlc3MgcGVybWlzc2lvbnMgZGVuaWVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9saWN5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgaW5ncmVzcyBlbnRyeS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVudHJ5VHlwZTogVGhlIHR5cGUgb2YgdGhlIHJ1bGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBjdXN0b20gOiBjdXN0b20gcnVsZXMuXG4gICAgICogc3lzdGVtIDogc3lzdGVtIHJ1bGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW50cnlUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvcnQ6IFRoZSBzb3VyY2UgcG9ydHMuIFRoZSB2YWx1ZSByYW5nZSBpcyBmcm9tIDEgdG8gNjU1MzU7IHNldHRpbmcgZm9ybWF0cyBzdWNoIGFzIFwiMS8yMDBcIiBhbmQgXCI4MC84MFwiLCB3aGVyZSBcIi0xLy0xXCIgY2Fubm90IGJlIHNldCBpbmRpdmlkdWFsbHksIHdoaWNoIG1lYW5zIHRoYXQgdGhlIHBvcnQgaXMgbm90IHJlc3RyaWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwb3J0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc291cmNlQ2lkcklwOiBTb3VyY2UgYWRkcmVzcyBuZXR3b3JrIHNlZ21lbnQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzb3VyY2VDaWRySXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJvdG9jb2w6IFRoZSB0cmFuc3BvcnQgbGF5ZXIgcHJvdG9jb2xzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogaWNtcFxuICAgICAqIGdyZVxuICAgICAqIHRjcFxuICAgICAqIHVkcFxuICAgICAqIGFsbDogQWxsIHByb3RvY29scyBhcmUgc3VwcG9ydGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJvdG9jb2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuZXR3b3JrQWNsRW50cnlOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW5ncmVzcyBlbnRyeS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5ldHdvcmtBY2xFbnRyeU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBJbmdyZXNzQWNsRW50cmllc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbmdyZXNzQWNsRW50cmllc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc05ldHdvcmtBY2xfSW5ncmVzc0FjbEVudHJpZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wb2xpY3kpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBvbGljeSAmJiAodHlwZW9mIHByb3BlcnRpZXMucG9saWN5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3knLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wb2xpY3ksXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiYWNjZXB0XCIsXCJkcm9wXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBvbGljeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBpZihwcm9wZXJ0aWVzLmVudHJ5VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZW50cnlUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbnRyeVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5lbnRyeVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiY3VzdG9tXCIsXCJzeXN0ZW1cIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbnRyeVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZW50cnlUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb3J0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvcnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9ydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlQ2lkcklwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNvdXJjZUNpZHJJcCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvdG9jb2wnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJvdG9jb2wpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByb3RvY29sICYmICh0eXBlb2YgcHJvcGVydGllcy5wcm90b2NvbCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvdG9jb2wnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcm90b2NvbCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJpY21wXCIsXCJncmVcIixcInRjcFwiLFwidWRwXCIsXCJhbGxcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90b2NvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm90b2NvbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV0d29ya0FjbEVudHJ5TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uZXR3b3JrQWNsRW50cnlOYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkluZ3Jlc3NBY2xFbnRyaWVzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6TmV0d29ya0FjbC5JbmdyZXNzQWNsRW50cmllc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5ncmVzc0FjbEVudHJpZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpOZXR3b3JrQWNsLkluZ3Jlc3NBY2xFbnRyaWVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc05ldHdvcmtBY2xJbmdyZXNzQWNsRW50cmllc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NOZXR3b3JrQWNsX0luZ3Jlc3NBY2xFbnRyaWVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQb2xpY3k6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucG9saWN5KSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIEVudHJ5VHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbnRyeVR5cGUpLFxuICAgICAgUG9ydDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgIFNvdXJjZUNpZHJJcDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3VyY2VDaWRySXApLFxuICAgICAgUHJvdG9jb2w6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvdG9jb2wpLFxuICAgICAgTmV0d29ya0FjbEVudHJ5TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uZXR3b3JrQWNsRW50cnlOYW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpOZXR3b3JrQWNsQXNzb2NpYXRpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTmV0d29ya0FjbEFzc29jaWF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldHdvcmtBY2xJZDogVGhlIElEIG9mIHRoZSBuZXR3b3JrIEFDTC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuZXR3b3JrQWNsSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZXM6IFRoZSBsaXN0IG9mIHJlc291cmNlcyB0aGF0IG5lZWQgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIG5ldHdvcmsgQUNMLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlczogQXJyYXk8Um9zTmV0d29ya0FjbEFzc29jaWF0aW9uLlJlc291cmNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NOZXR3b3JrQWNsQXNzb2NpYXRpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTmV0d29ya0FjbEFzc29jaWF0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTmV0d29ya0FjbEFzc29jaWF0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrQWNsSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmV0d29ya0FjbElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduZXR3b3JrQWNsSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmV0d29ya0FjbElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVzb3VyY2VzKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXNvdXJjZXMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5yZXNvdXJjZXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5yZXNvdXJjZXMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZXMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZXMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NOZXR3b3JrQWNsQXNzb2NpYXRpb25fUmVzb3VyY2VzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnJlc291cmNlcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NOZXR3b3JrQWNsQXNzb2NpYXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpOZXR3b3JrQWNsQXNzb2NpYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc05ldHdvcmtBY2xBc3NvY2lhdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6Ok5ldHdvcmtBY2xBc3NvY2lhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NOZXR3b3JrQWNsQXNzb2NpYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc05ldHdvcmtBY2xBc3NvY2lhdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIE5ldHdvcmtBY2xJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uZXR3b3JrQWNsSWQpLFxuICAgICAgUmVzb3VyY2VzOiByb3MubGlzdE1hcHBlcihyb3NOZXR3b3JrQWNsQXNzb2NpYXRpb25SZXNvdXJjZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucmVzb3VyY2VzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6Ok5ldHdvcmtBY2xBc3NvY2lhdGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc05ldHdvcmtBY2xBc3NvY2lhdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6VlBDOjpOZXR3b3JrQWNsQXNzb2NpYXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOZXR3b3JrQWNsSWQ6IFRoZSBJRCBvZiB0aGUgbmV0d29yayBBQ0wuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOZXR3b3JrQWNsSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5ldHdvcmtBY2xJZDogVGhlIElEIG9mIHRoZSBuZXR3b3JrIEFDTC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmV0d29ya0FjbElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VzOiBUaGUgbGlzdCBvZiByZXNvdXJjZXMgdGhhdCBuZWVkIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCBuZXR3b3JrIEFDTC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VzOiBBcnJheTxSb3NOZXR3b3JrQWNsQXNzb2NpYXRpb24uUmVzb3VyY2VzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6TmV0d29ya0FjbEFzc29jaWF0aW9uYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NOZXR3b3JrQWNsQXNzb2NpYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc05ldHdvcmtBY2xBc3NvY2lhdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyTmV0d29ya0FjbElkID0gdGhpcy5nZXRBdHQoJ05ldHdvcmtBY2xJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5uZXR3b3JrQWNsSWQgPSBwcm9wcy5uZXR3b3JrQWNsSWQ7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gcHJvcHMucmVzb3VyY2VzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ldHdvcmtBY2xJZDogdGhpcy5uZXR3b3JrQWNsSWQsXG4gICAgICAgICAgICByZXNvdXJjZXM6IHRoaXMucmVzb3VyY2VzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NOZXR3b3JrQWNsQXNzb2NpYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NOZXR3b3JrQWNsQXNzb2NpYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc291cmNlc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUlkOiBUaGUgSUQgb2YgdGhlIGFzc29jaWF0ZWQgcmVzb3VyY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXNvdXJjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgYXNzb2NpYXRlZCByZXNvdXJjZS4gVmFsaWQgdmFsdWU6IFZTd2l0Y2guXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXNvdXJjZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZXNvdXJjZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVzb3VyY2VzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTmV0d29ya0FjbEFzc29jaWF0aW9uX1Jlc291cmNlc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZXNvdXJjZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlc291cmNlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVzb3VyY2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiVlN3aXRjaFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXNvdXJjZVR5cGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVzb3VyY2VzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6TmV0d29ya0FjbEFzc29jaWF0aW9uLlJlc291cmNlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVzb3VyY2VzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6TmV0d29ya0FjbEFzc29jaWF0aW9uLlJlc291cmNlc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NOZXR3b3JrQWNsQXNzb2NpYXRpb25SZXNvdXJjZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zTmV0d29ya0FjbEFzc29jaWF0aW9uX1Jlc291cmNlc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgUmVzb3VyY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUlkKSxcbiAgICAgIFJlc291cmNlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZVR5cGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OlBlZXJpbmdSb3V0ZXJJbnRlcmZhY2VCaW5kaW5nYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1BlZXJpbmdSb3V0ZXJJbnRlcmZhY2VCaW5kaW5nUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9wcG9zaXRlSW50ZXJmYWNlSWQ6IFRoZSBjb25uZWN0aW9uIHBlZXIgUm91dGVySW50ZXJmYWNlIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9wcG9zaXRlSW50ZXJmYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZXJJbnRlcmZhY2VJZDogVGhlIFJvdXRlckludGVyZmFjZSBpcyBzZXQgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGNvbm5lY3Rpb24gcGVlciBSb3V0ZXJJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVySW50ZXJmYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcHBvc2l0ZUludGVyZmFjZU93bmVySWQ6IE93bmVyIGFjY291bnQgSUQgb2YgdGhlIGNvbm5lY3Rpb24gcGVlciBSb3V0ZXJJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9wcG9zaXRlUm91dGVySWQ6IFJvdXRlciBJRCBvZiB0aGUgY29ubmVjdGlvbiBwZWVyIFJvdXRlckludGVyZmFjZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHBvc2l0ZVJvdXRlcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1BlZXJpbmdSb3V0ZXJJbnRlcmZhY2VCaW5kaW5nUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1BlZXJpbmdSb3V0ZXJJbnRlcmZhY2VCaW5kaW5nUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUGVlcmluZ1JvdXRlckludGVyZmFjZUJpbmRpbmdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29wcG9zaXRlSW50ZXJmYWNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMub3Bwb3NpdGVJbnRlcmZhY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3Bwb3NpdGVJbnRlcmZhY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vcHBvc2l0ZUludGVyZmFjZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcHBvc2l0ZUludGVyZmFjZU93bmVySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcHBvc2l0ZVJvdXRlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9wcG9zaXRlUm91dGVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlckludGVyZmFjZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJvdXRlckludGVyZmFjZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZXJJbnRlcmZhY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb3V0ZXJJbnRlcmZhY2VJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQmluZGluZ1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlBlZXJpbmdSb3V0ZXJJbnRlcmZhY2VCaW5kaW5nYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQmluZGluZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlBlZXJpbmdSb3V0ZXJJbnRlcmZhY2VCaW5kaW5nYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1BlZXJpbmdSb3V0ZXJJbnRlcmZhY2VCaW5kaW5nUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQmluZGluZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIE9wcG9zaXRlSW50ZXJmYWNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3Bwb3NpdGVJbnRlcmZhY2VJZCksXG4gICAgICBSb3V0ZXJJbnRlcmZhY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yb3V0ZXJJbnRlcmZhY2VJZCksXG4gICAgICBPcHBvc2l0ZUludGVyZmFjZU93bmVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkKSxcbiAgICAgIE9wcG9zaXRlUm91dGVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3Bwb3NpdGVSb3V0ZXJJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpQZWVyaW5nUm91dGVySW50ZXJmYWNlQmluZGluZ2BcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1BlZXJpbmdSb3V0ZXJJbnRlcmZhY2VCaW5kaW5nIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OlBlZXJpbmdSb3V0ZXJJbnRlcmZhY2VCaW5kaW5nXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUm91dGVySW50ZXJmYWNlSWQ6IFRoZSBSb3V0ZXJJbnRlcmZhY2UgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb3V0ZXJJbnRlcmZhY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3Bwb3NpdGVJbnRlcmZhY2VJZDogVGhlIGNvbm5lY3Rpb24gcGVlciBSb3V0ZXJJbnRlcmZhY2UgSUQuXG4gICAgICovXG4gICAgcHVibGljIG9wcG9zaXRlSW50ZXJmYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZXJJbnRlcmZhY2VJZDogVGhlIFJvdXRlckludGVyZmFjZSBpcyBzZXQgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGNvbm5lY3Rpb24gcGVlciBSb3V0ZXJJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJvdXRlckludGVyZmFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkOiBPd25lciBhY2NvdW50IElEIG9mIHRoZSBjb25uZWN0aW9uIHBlZXIgUm91dGVySW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBvcHBvc2l0ZUludGVyZmFjZU93bmVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcHBvc2l0ZVJvdXRlcklkOiBSb3V0ZXIgSUQgb2YgdGhlIGNvbm5lY3Rpb24gcGVlciBSb3V0ZXJJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcHVibGljIG9wcG9zaXRlUm91dGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpWUEM6OlBlZXJpbmdSb3V0ZXJJbnRlcmZhY2VCaW5kaW5nYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQmluZGluZ1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zUGVlcmluZ1JvdXRlckludGVyZmFjZUJpbmRpbmcuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlckludGVyZmFjZUlkID0gdGhpcy5nZXRBdHQoJ1JvdXRlckludGVyZmFjZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLm9wcG9zaXRlSW50ZXJmYWNlSWQgPSBwcm9wcy5vcHBvc2l0ZUludGVyZmFjZUlkO1xuICAgICAgICB0aGlzLnJvdXRlckludGVyZmFjZUlkID0gcHJvcHMucm91dGVySW50ZXJmYWNlSWQ7XG4gICAgICAgIHRoaXMub3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkID0gcHJvcHMub3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkO1xuICAgICAgICB0aGlzLm9wcG9zaXRlUm91dGVySWQgPSBwcm9wcy5vcHBvc2l0ZVJvdXRlcklkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wcG9zaXRlSW50ZXJmYWNlSWQ6IHRoaXMub3Bwb3NpdGVJbnRlcmZhY2VJZCxcbiAgICAgICAgICAgIHJvdXRlckludGVyZmFjZUlkOiB0aGlzLnJvdXRlckludGVyZmFjZUlkLFxuICAgICAgICAgICAgb3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkOiB0aGlzLm9wcG9zaXRlSW50ZXJmYWNlT3duZXJJZCxcbiAgICAgICAgICAgIG9wcG9zaXRlUm91dGVySWQ6IHRoaXMub3Bwb3NpdGVSb3V0ZXJJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zUGVlcmluZ1JvdXRlckludGVyZmFjZUJpbmRpbmdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6UGVlcmluZ1JvdXRlckludGVyZmFjZUNvbm5lY3Rpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUGVlcmluZ1JvdXRlckludGVyZmFjZUNvbm5lY3Rpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3Bwb3NpdGVJbnRlcmZhY2VJZDogVGhlIFJlY2VpdmVyIFJvdXRlckludGVyZmFjZSBJRCB0byBhY2NlcHQgcGVlciBSb3V0ZXJJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3Bwb3NpdGVJbnRlcmZhY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlckludGVyZmFjZUlkOiBUaGUgSW5pdGlhdG9yIFJvdXRlckludGVyZmFjZSBJRCB0byBjb25uZWN0IHBlZXIgUm91dGVySW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlckludGVyZmFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUGVlcmluZ1JvdXRlckludGVyZmFjZUNvbm5lY3Rpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUGVlcmluZ1JvdXRlckludGVyZmFjZUNvbm5lY3Rpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3Bwb3NpdGVJbnRlcmZhY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5vcHBvc2l0ZUludGVyZmFjZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcHBvc2l0ZUludGVyZmFjZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9wcG9zaXRlSW50ZXJmYWNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlckludGVyZmFjZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJvdXRlckludGVyZmFjZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZXJJbnRlcmZhY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb3V0ZXJJbnRlcmZhY2VJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlBlZXJpbmdSb3V0ZXJJbnRlcmZhY2VDb25uZWN0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlBlZXJpbmdSb3V0ZXJJbnRlcmZhY2VDb25uZWN0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1BlZXJpbmdSb3V0ZXJJbnRlcmZhY2VDb25uZWN0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIE9wcG9zaXRlSW50ZXJmYWNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3Bwb3NpdGVJbnRlcmZhY2VJZCksXG4gICAgICBSb3V0ZXJJbnRlcmZhY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yb3V0ZXJJbnRlcmZhY2VJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1BlZXJpbmdSb3V0ZXJJbnRlcmZhY2VDb25uZWN0aW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OlBlZXJpbmdSb3V0ZXJJbnRlcmZhY2VDb25uZWN0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgT3Bwb3NpdGVJbnRlcmZhY2VJZDogVGhlIHJlY2VpdmVyIFJvdXRlckludGVyZmFjZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck9wcG9zaXRlSW50ZXJmYWNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUm91dGVySW50ZXJmYWNlSWQ6IFRoZSBpbml0aWF0b3IgUm91dGVySW50ZXJmYWNlIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVySW50ZXJmYWNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9wcG9zaXRlSW50ZXJmYWNlSWQ6IFRoZSBSZWNlaXZlciBSb3V0ZXJJbnRlcmZhY2UgSUQgdG8gYWNjZXB0IHBlZXIgUm91dGVySW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBvcHBvc2l0ZUludGVyZmFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVySW50ZXJmYWNlSWQ6IFRoZSBJbml0aWF0b3IgUm91dGVySW50ZXJmYWNlIElEIHRvIGNvbm5lY3QgcGVlciBSb3V0ZXJJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJvdXRlckludGVyZmFjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpQZWVyaW5nUm91dGVySW50ZXJmYWNlQ29ubmVjdGlvbmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUGVlcmluZ1JvdXRlckludGVyZmFjZUNvbm5lY3Rpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1BlZXJpbmdSb3V0ZXJJbnRlcmZhY2VDb25uZWN0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJPcHBvc2l0ZUludGVyZmFjZUlkID0gdGhpcy5nZXRBdHQoJ09wcG9zaXRlSW50ZXJmYWNlSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyUm91dGVySW50ZXJmYWNlSWQgPSB0aGlzLmdldEF0dCgnUm91dGVySW50ZXJmYWNlSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMub3Bwb3NpdGVJbnRlcmZhY2VJZCA9IHByb3BzLm9wcG9zaXRlSW50ZXJmYWNlSWQ7XG4gICAgICAgIHRoaXMucm91dGVySW50ZXJmYWNlSWQgPSBwcm9wcy5yb3V0ZXJJbnRlcmZhY2VJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcHBvc2l0ZUludGVyZmFjZUlkOiB0aGlzLm9wcG9zaXRlSW50ZXJmYWNlSWQsXG4gICAgICAgICAgICByb3V0ZXJJbnRlcmZhY2VJZDogdGhpcy5yb3V0ZXJJbnRlcmZhY2VJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zUGVlcmluZ1JvdXRlckludGVyZmFjZUNvbm5lY3Rpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6Um91dGVUYWJsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NSb3V0ZVRhYmxlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQyB0byB3aGljaCB0aGUgY3VzdG9tIHJvdXRlIHRhYmxlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSByb3V0ZSB0YWJsZS5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAyIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gVGhlIGRlc2NyaXB0aW9uIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVUYWJsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSByb3V0ZSB0YWJsZS5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBJdCBjYW4gY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzLCBwZXJpb2RzICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBhbmQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZVRhYmxlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byByb3V0ZXRhYmxlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIHJvdXRldGFibGUuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zUm91dGVUYWJsZS5UYWdzUHJvcGVydHlbXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NSb3V0ZVRhYmxlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1JvdXRlVGFibGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NSb3V0ZVRhYmxlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZVRhYmxlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb3V0ZVRhYmxlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFncyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRhZ3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50YWdzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWdzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc1JvdXRlVGFibGVfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy50YWdzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1JvdXRlVGFibGVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpSb3V0ZVRhYmxlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSb3V0ZVRhYmxlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6Um91dGVUYWJsZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NSb3V0ZVRhYmxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NSb3V0ZVRhYmxlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgVnBjSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgUm91dGVUYWJsZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucm91dGVUYWJsZU5hbWUpLFxuICAgICAgVGFnczogcm9zLmxpc3RNYXBwZXIocm9zUm91dGVUYWJsZVRhZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGFncyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpSb3V0ZVRhYmxlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zUm91dGVUYWJsZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6VlBDOjpSb3V0ZVRhYmxlXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUm91dGVUYWJsZUlkOiBUaGUgSUQgb2YgdGhlIHJvdXRlIHRhYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVUYWJsZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvdXRlVGFibGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcm91dGUgdGFibGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb3V0ZVRhYmxlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSb3V0ZVRhYmxlVHlwZTogVGhlIHR5cGUgb2YgdGhlIHJvdXRlIHRhYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVUYWJsZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVlN3aXRjaElkczogQSBsaXN0IG9mIFZTd2l0Y2hlcyB1bmRlciB0aGUgVlBDLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVlN3aXRjaElkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWcGNJZDogVGhlIElEIG9mIHRoZSBWUm91dGVyIHRvIHdoaWNoIHRoZSByb3V0ZSB0YWJsZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIFZQQyB0byB3aGljaCB0aGUgY3VzdG9tIHJvdXRlIHRhYmxlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcm91dGUgdGFibGUuXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIFRoZSBkZXNjcmlwdGlvbiBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlVGFibGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcm91dGUgdGFibGUuXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gSXQgY2FuIGNvbnRhaW4gbGV0dGVycywgbnVtYmVycywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgYW5kIGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcHVibGljIHJvdXRlVGFibGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gcm91dGV0YWJsZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSByb3V0ZXRhYmxlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIHRhZ3M6IFJvc1JvdXRlVGFibGUuVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpSb3V0ZVRhYmxlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NSb3V0ZVRhYmxlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NSb3V0ZVRhYmxlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJSb3V0ZVRhYmxlSWQgPSB0aGlzLmdldEF0dCgnUm91dGVUYWJsZUlkJyk7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlVGFibGVOYW1lID0gdGhpcy5nZXRBdHQoJ1JvdXRlVGFibGVOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlVGFibGVUeXBlID0gdGhpcy5nZXRBdHQoJ1JvdXRlVGFibGVUeXBlJyk7XG4gICAgICAgIHRoaXMuYXR0clZTd2l0Y2hJZHMgPSB0aGlzLmdldEF0dCgnVlN3aXRjaElkcycpO1xuICAgICAgICB0aGlzLmF0dHJWcGNJZCA9IHRoaXMuZ2V0QXR0KCdWcGNJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy52cGNJZCA9IHByb3BzLnZwY0lkO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucm91dGVUYWJsZU5hbWUgPSBwcm9wcy5yb3V0ZVRhYmxlTmFtZTtcbiAgICAgICAgdGhpcy50YWdzID0gcHJvcHMudGFncztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2cGNJZDogdGhpcy52cGNJZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcm91dGVUYWJsZU5hbWU6IHRoaXMucm91dGVUYWJsZU5hbWUsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1JvdXRlVGFibGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NSb3V0ZVRhYmxlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBUYWdzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1JvdXRlVGFibGVfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGFnc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlJvdXRlVGFibGUuVGFnc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlJvdXRlVGFibGUuVGFnc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NSb3V0ZVRhYmxlVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NSb3V0ZVRhYmxlX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFZhbHVlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgIEtleTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OlJvdXRlVGFibGVBc3NvY2lhdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NSb3V0ZVRhYmxlQXNzb2NpYXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVUYWJsZUlkOiBUaGUgSUQgb2YgdGhlIHJvdXRlIHRhYmxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlVGFibGVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIElEIG9mIHRoZSBWU3dpdGNoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1JvdXRlVGFibGVBc3NvY2lhdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSb3V0ZVRhYmxlQXNzb2NpYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NSb3V0ZVRhYmxlQXNzb2NpYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlVGFibGVJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yb3V0ZVRhYmxlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlVGFibGVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb3V0ZVRhYmxlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52U3dpdGNoSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52U3dpdGNoSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zUm91dGVUYWJsZUFzc29jaWF0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6Um91dGVUYWJsZUFzc29jaWF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSb3V0ZVRhYmxlQXNzb2NpYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpSb3V0ZVRhYmxlQXNzb2NpYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUm91dGVUYWJsZUFzc29jaWF0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NSb3V0ZVRhYmxlQXNzb2NpYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBSb3V0ZVRhYmxlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucm91dGVUYWJsZUlkKSxcbiAgICAgIFZTd2l0Y2hJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52U3dpdGNoSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6Um91dGVUYWJsZUFzc29jaWF0aW9uYFxuICovXG5leHBvcnQgY2xhc3MgUm9zUm91dGVUYWJsZUFzc29jaWF0aW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OlJvdXRlVGFibGVBc3NvY2lhdGlvblwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvdXRlVGFibGVJZDogVGhlIElEIG9mIHRoZSByb3V0ZSB0YWJsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlVGFibGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWU3dpdGNoSWQ6IFRoZSBWU3dpdGNoIElEIHdoaWNoIHRoZSByb3V0ZSB0YWJsZSBhc3NvY2lhdGVkIHdpdGguXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWU3dpdGNoSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlVGFibGVJZDogVGhlIElEIG9mIHRoZSByb3V0ZSB0YWJsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcm91dGVUYWJsZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgSUQgb2YgdGhlIFZTd2l0Y2guXG4gICAgICovXG4gICAgcHVibGljIHZTd2l0Y2hJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6Um91dGVUYWJsZUFzc29jaWF0aW9uYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NSb3V0ZVRhYmxlQXNzb2NpYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1JvdXRlVGFibGVBc3NvY2lhdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyUm91dGVUYWJsZUlkID0gdGhpcy5nZXRBdHQoJ1JvdXRlVGFibGVJZCcpO1xuICAgICAgICB0aGlzLmF0dHJWU3dpdGNoSWQgPSB0aGlzLmdldEF0dCgnVlN3aXRjaElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnJvdXRlVGFibGVJZCA9IHByb3BzLnJvdXRlVGFibGVJZDtcbiAgICAgICAgdGhpcy52U3dpdGNoSWQgPSBwcm9wcy52U3dpdGNoSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm91dGVUYWJsZUlkOiB0aGlzLnJvdXRlVGFibGVJZCxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogdGhpcy52U3dpdGNoSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1JvdXRlVGFibGVBc3NvY2lhdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpSb3V0ZXJJbnRlcmZhY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUm91dGVySW50ZXJmYWNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvbGU6IFJvdXRlckludGVyZmFjZSByb2xlLiBOb3cgc3VwcG9ydCAnSW5pdGlhdGluZ1NpZGV8QWNjZXB0aW5nU2lkZScuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm9sZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlcklkOiBUaGUgcm91dGVyIElEIHRvIGNyZWF0ZSBSb3V0ZXJJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NQb2ludElkOiBBY2Nlc3MgcG9pbnQgSUQuIElmICdSb3V0ZXJUeXBlJyBpcyBzcGVjaWZpZWQgYXMgJ1ZCUicsIHRoZSB2YWx1ZSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2Nlc3NQb2ludElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9QYXk6IEluZGljYXRlcyB3aGV0aGVyIGF1dG9tYXRpYyBwYXltZW50IGlzIGVuYWJsZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBmYWxzZTogQXV0b21hdGljIHBheW1lbnQgaXMgZGlzYWJsZWQuIFlvdSBuZWVkIHRvIGdvIHRvIE9yZGVycyB0byBtYWtlIHRoZSBwYXltZW50IG9uY2UgYW4gb3JkZXIgaXMgZ2VuZXJhdGVkLiBcbiAgICAgKiB0cnVlOiBBdXRvbWF0aWMgcGF5bWVudCBpcyBlbmFibGVkLiBUaGUgcGF5bWVudCBpcyBhdXRvbWF0aWNhbGx5IG1hZGUuXG4gICAgICogRGVmYXVsdDogdHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUGF5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogQ3VzdG9tIGRlc2NyaXB0aW9uIG9mIHRoZSBSb3V0ZXJJbnRlcmZhY2UsIFsyLCAyNTZdIGNoYXJhY3RlcnMuIERvbid0IGZpbGwgb3IgZW1wdHksIHRoZSBkZWZhdWx0IGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhlYWx0aENoZWNrU291cmNlSXA6IFNvdXJjZSBJUCBhZGRyZXNzIG9mIHRoZSBwYWNrZXQgZm9yIGxlYXNlZCBsaW5lIEhlYWx0aENoZWNrIGluIGxlYXNlZCBsaW5lIGRpc2FzdGVyIHRvbGVyYW5jZSBhbmQgRUNNUCBzY2VuYXJpb3MuIEl0IGlzIHZhbGlkIG9ubHkgZm9yIGEgVlJvdXRlciBSb3V0ZXJJbnRlcmZhY2Ugd2l0aCBhIHBlZXIgb24gYSBWQlIuIFRoZSBzb3VyY2UgSVAgYWRkcmVzcyBtdXN0IGJlIGluIHRoZSBWUEMgb2YgdGhlIGxvY2FsIFZSb3V0ZXIgYW5kIGlzIG5vdCB1c2VkLiBIZWFsdGhDaGVja1NvdXJjZUlwIGFuZCBIZWFsdGhDaGVja1RhcmdldElwIHBhcmFtZXRlcnMgbXVzdCBiZSBib3RoIHNwZWNpZmllZCBvciBsZWZ0IHVuc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhlYWx0aENoZWNrU291cmNlSXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaGVhbHRoQ2hlY2tUYXJnZXRJcDogVGFyZ2V0IElQIGFkZHJlc3Mgb2YgdGhlIHBhY2tldCBmb3IgbGVhc2VkIGxpbmUgSGVhbHRoQ2hlY2sgaW4gbGVhc2VkIGxpbmUgZGlzYXN0ZXIgdG9sZXJhbmNlIGFuZCBFQ01QIHNjZW5hcmlvcy4gSXQgaXMgdmFsaWQgb25seSBmb3IgYSBWUm91dGVyIFJvdXRlckludGVyZmFjZSB3aXRoIGEgcGVlciBvbiBhIFZCUi4gVXN1YWxseSB5b3UgY2FuIHVzZSB0aGUgQ1BFIElQIGFkZHJlc3Mgb2YgdGhlIGxlYXNlZCBsaW5lIHVzZXIncyBjbGllbnQgKHRoYXQgaXMsIHRoZSBQZWVyR2F0ZXdheUlQIG9uIHRoZSBWQlIgb2YgdGhlIHBlZXIgUm91dGVySW50ZXJmYWNlKSwgeW91IGNhbiBhbHNvIHNwZWNpZnkgYW5vdGhlciBJUCBhZGRyZXNzIG9mIHRoZSBsZWFzZWQgbGluZSB1c2VyJ3MgY2xpZW50IGFzIHRoZSBIZWFsdGhDaGVjayB0YXJnZXQgSVAgYWRkcmVzcy4gSGVhbHRoQ2hlY2tTb3VyY2VJcCBhbmQgSGVhbHRoQ2hlY2tUYXJnZXRJcCBwYXJhbWV0ZXJzIG11c3QgYmUgYm90aCBzcGVjaWZpZWQgb3IgbGVmdCB1bnNwZWNpZmllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBoZWFsdGhDaGVja1RhcmdldElwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlQ2hhcmdlVHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kIG9mIHRoZSByb3V0ZXIgaW50ZXJmYWNlLiBWYWxpZCB2YWx1ZXM6IFByZVBhaWQgKFN1YnNjcmlwdGlvbiksIFBvc3RQYWlkIChkZWZhdWx0LCBQYXktQXMtWW91LUdvKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlQ2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBDdXN0b20gbmFtZSBvZiB0aGUgUm91dGVySW50ZXJmYWNlLCBbMiwgMTI4XSBFbmdsaXNoIG9yIENoaW5lc2UgY2hhcmFjdGVycywgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UgaW4gc2l6ZSwgY2FuIGNvbnRhaW4gbnVtYmVycywgJ18nIG9yICcuJywgJy0nXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcHBvc2l0ZUFjY2Vzc1BvaW50SWQ6IEFjY2VzcyBwb2ludCBJRCBvZiB0aGUgY29ubmVjdGlvbiBwZWVyIFJvdXRlckludGVyZmFjZS4gSWYgJ09wcG9zaXRlUm91dGVyVHlwZScgaXMgc3BlY2lmaWVkIGFzICdWQlInLCB0aGUgdmFsdWUgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3Bwb3NpdGVBY2Nlc3NQb2ludElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9wcG9zaXRlSW50ZXJmYWNlSWQ6IFRoZSBJRCBvZiB0aGUgcGVlciByb3V0ZXIgaW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9wcG9zaXRlSW50ZXJmYWNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkOiBPd25lciBhY2NvdW50IElEIG9mIHRoZSBjb25uZWN0aW9uIHBlZXIgUm91dGVySW50ZXJmYWNlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBjdXJyZW50IHVzZXIgSWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9wcG9zaXRlUmVnaW9uSWQ6IFRoZSByZWdpb24gd2hlcmUgdGhlIGNvbm5lY3Rpb24gcGVlciBSb3V0ZXJJbnRlcmZhY2UgbG9jYXRlcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgcmVnaW9uIHdoZXJlIHN0YWNrIGlzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3Bwb3NpdGVSZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcHBvc2l0ZVJvdXRlcklkOiBUaGUgcm91dGVyIElEIG9mIHRoZSBjb25uZWN0aW9uIHBlZXIgUm91dGVySW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9wcG9zaXRlUm91dGVySWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3Bwb3NpdGVSb3V0ZXJUeXBlOiBSb3V0ZXIgdHlwZSBvZiB0aGUgY29ubmVjdGlvbiBwZWVyIHJvdXRlci4gTm93IHN1cHBvcnQgJ1ZSb3V0ZXJ8VkJSJy4gSWYgJ1JvdXRlclR5cGUnIGlzIHNwZWNpZmllZCBhcyAnVkJSJywgdGhlIHZhbHVlIG11c3QgYmUgJ1ZSb3V0ZXInLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9wcG9zaXRlUm91dGVyVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJpb2Q6IFByZXBhaWQgdGltZSBwZXJpb2QuIEl0IGNvdWxkIGJlIGZyb20gMSB0byA5IHdoZW4gUHJpY2luZ0N5Y2xlIGlzIE1vbnRoLCBvciAxIHRvIDMgd2hlbiBQcmljaW5nQ3ljbGUgaXMgWWVhci5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpY2luZ0N5Y2xlOiBVbml0IG9mIHRoZSBwYXltZW50IGN5Y2xlLiBJdCBjb3VsZCBiZSBNb250aCAoZGVmYXVsdCkgb3IgWWVhci5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmljaW5nQ3ljbGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVyVHlwZTogUm91dGVyIHR5cGUuIE5vdyBzdXBwb3J0ICdWUm91dGVyfFZCUidcbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZXJUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNwZWM6IFJvdXRlckludGVyZmFjZSBzcGVjaWZpY2F0aW9uLiBJZiAnUm9sZScgaXMgc3BlY2lmaWVkIGFzICdJbml0aWF0aW5nU2lkZScsIHRoZSB2YWx1ZSBpcyByZXF1aXJlZC4gSWYgJ1JvbGUnIGlzIHNwZWNpZmllZCBhcyAnQWNjZXB0aW5nU2lkZScsIHRoZSB2YWx1ZSBpcyBzZXQgYXMgJ05lZ2F0aXZlJyBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNwZWM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUm91dGVySW50ZXJmYWNlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1JvdXRlckludGVyZmFjZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1JvdXRlckludGVyZmFjZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3Bwb3NpdGVJbnRlcmZhY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vcHBvc2l0ZUludGVyZmFjZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcHBvc2l0ZUludGVyZmFjZU93bmVySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3Bwb3NpdGVSb3V0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vcHBvc2l0ZVJvdXRlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcHBvc2l0ZVJlZ2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9wcG9zaXRlUmVnaW9uSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByaWNpbmdDeWNsZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmljaW5nQ3ljbGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcmljaW5nQ3ljbGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiTW9udGhcIixcIlllYXJcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmljaW5nQ3ljbGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZUNoYXJnZVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VDaGFyZ2VUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VDaGFyZ2VUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlBheUFzWW91R29cIixcIlBvc3RQYWlkXCIsXCJQYXlPbkRlbWFuZFwiLFwiUG9zdHBhaWRcIixcIlBvc3RQYXlcIixcIlBPU1RQQVlcIixcIlBPU1RcIixcIlN1YnNjcmlwdGlvblwiLFwiUHJlUGFpZFwiLFwiUHJlcGFpZFwiLFwiUHJlUGF5XCIsXCJQUkVQQVlcIixcIlBSRVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlQ2hhcmdlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUNoYXJnZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hlYWx0aENoZWNrU291cmNlSXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaGVhbHRoQ2hlY2tTb3VyY2VJcCkpO1xuICAgIGlmKHByb3BlcnRpZXMucGVyaW9kICYmICh0eXBlb2YgcHJvcGVydGllcy5wZXJpb2QpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBlcmlvZCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbMSwyLDMsNCw1LDYsNyw4LDldLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBlcmlvZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVySWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucm91dGVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJvdXRlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRvUGF5Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5hdXRvUGF5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvbGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucm9sZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucm9sZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucm9sZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm9sZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJvbGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSW5pdGlhdGluZ1NpZGVcIixcIkFjY2VwdGluZ1NpZGVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb2xlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJvbGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm9wcG9zaXRlUm91dGVyVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMub3Bwb3NpdGVSb3V0ZXJUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcHBvc2l0ZVJvdXRlclR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5vcHBvc2l0ZVJvdXRlclR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiVlJvdXRlclwiLFwiVkJSXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3Bwb3NpdGVSb3V0ZXJUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9wcG9zaXRlUm91dGVyVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucm91dGVyVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucm91dGVyVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVyVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJvdXRlclR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiVlJvdXRlclwiLFwiVkJSXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVyVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb3V0ZXJUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2Nlc3NQb2ludElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjY2Vzc1BvaW50SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29wcG9zaXRlQWNjZXNzUG9pbnRJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vcHBvc2l0ZUFjY2Vzc1BvaW50SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NwZWMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3BlYykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGVhbHRoQ2hlY2tUYXJnZXRJcCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5oZWFsdGhDaGVja1RhcmdldElwKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1JvdXRlckludGVyZmFjZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlJvdXRlckludGVyZmFjZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUm91dGVySW50ZXJmYWNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6Um91dGVySW50ZXJmYWNlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JvdXRlckludGVyZmFjZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUm91dGVySW50ZXJmYWNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgUm9sZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yb2xlKSxcbiAgICAgIFJvdXRlcklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvdXRlcklkKSxcbiAgICAgIEFjY2Vzc1BvaW50SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNjZXNzUG9pbnRJZCksXG4gICAgICBBdXRvUGF5OiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hdXRvUGF5KSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIEhlYWx0aENoZWNrU291cmNlSXA6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGVhbHRoQ2hlY2tTb3VyY2VJcCksXG4gICAgICBIZWFsdGhDaGVja1RhcmdldElwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhlYWx0aENoZWNrVGFyZ2V0SXApLFxuICAgICAgSW5zdGFuY2VDaGFyZ2VUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgICAgT3Bwb3NpdGVBY2Nlc3NQb2ludElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9wcG9zaXRlQWNjZXNzUG9pbnRJZCksXG4gICAgICBPcHBvc2l0ZUludGVyZmFjZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9wcG9zaXRlSW50ZXJmYWNlSWQpLFxuICAgICAgT3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9wcG9zaXRlSW50ZXJmYWNlT3duZXJJZCksXG4gICAgICBPcHBvc2l0ZVJlZ2lvbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm9wcG9zaXRlUmVnaW9uSWQpLFxuICAgICAgT3Bwb3NpdGVSb3V0ZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcHBvc2l0ZVJvdXRlcklkKSxcbiAgICAgIE9wcG9zaXRlUm91dGVyVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcHBvc2l0ZVJvdXRlclR5cGUpLFxuICAgICAgUGVyaW9kOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcmlvZCksXG4gICAgICBQcmljaW5nQ3ljbGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlKSxcbiAgICAgIFJvdXRlclR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucm91dGVyVHlwZSksXG4gICAgICBTcGVjOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNwZWMpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6Um91dGVySW50ZXJmYWNlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zUm91dGVySW50ZXJmYWNlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OlJvdXRlckludGVyZmFjZVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvdXRlckludGVyZmFjZUlkOiBUaGUgSUQgb2YgY3JlYXRlZCBSb3V0ZXJJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb3V0ZXJJbnRlcmZhY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm9sZTogUm91dGVySW50ZXJmYWNlIHJvbGUuIE5vdyBzdXBwb3J0ICdJbml0aWF0aW5nU2lkZXxBY2NlcHRpbmdTaWRlJy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcm9sZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlcklkOiBUaGUgcm91dGVyIElEIHRvIGNyZWF0ZSBSb3V0ZXJJbnRlcmZhY2UuXG4gICAgICovXG4gICAgcHVibGljIHJvdXRlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXNzUG9pbnRJZDogQWNjZXNzIHBvaW50IElELiBJZiAnUm91dGVyVHlwZScgaXMgc3BlY2lmaWVkIGFzICdWQlInLCB0aGUgdmFsdWUgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIGFjY2Vzc1BvaW50SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvUGF5OiBJbmRpY2F0ZXMgd2hldGhlciBhdXRvbWF0aWMgcGF5bWVudCBpcyBlbmFibGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogZmFsc2U6IEF1dG9tYXRpYyBwYXltZW50IGlzIGRpc2FibGVkLiBZb3UgbmVlZCB0byBnbyB0byBPcmRlcnMgdG8gbWFrZSB0aGUgcGF5bWVudCBvbmNlIGFuIG9yZGVyIGlzIGdlbmVyYXRlZC4gXG4gICAgICogdHJ1ZTogQXV0b21hdGljIHBheW1lbnQgaXMgZW5hYmxlZC4gVGhlIHBheW1lbnQgaXMgYXV0b21hdGljYWxseSBtYWRlLlxuICAgICAqIERlZmF1bHQ6IHRydWUuXG4gICAgICovXG4gICAgcHVibGljIGF1dG9QYXk6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IEN1c3RvbSBkZXNjcmlwdGlvbiBvZiB0aGUgUm91dGVySW50ZXJmYWNlLCBbMiwgMjU2XSBjaGFyYWN0ZXJzLiBEb24ndCBmaWxsIG9yIGVtcHR5LCB0aGUgZGVmYXVsdCBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBoZWFsdGhDaGVja1NvdXJjZUlwOiBTb3VyY2UgSVAgYWRkcmVzcyBvZiB0aGUgcGFja2V0IGZvciBsZWFzZWQgbGluZSBIZWFsdGhDaGVjayBpbiBsZWFzZWQgbGluZSBkaXNhc3RlciB0b2xlcmFuY2UgYW5kIEVDTVAgc2NlbmFyaW9zLiBJdCBpcyB2YWxpZCBvbmx5IGZvciBhIFZSb3V0ZXIgUm91dGVySW50ZXJmYWNlIHdpdGggYSBwZWVyIG9uIGEgVkJSLiBUaGUgc291cmNlIElQIGFkZHJlc3MgbXVzdCBiZSBpbiB0aGUgVlBDIG9mIHRoZSBsb2NhbCBWUm91dGVyIGFuZCBpcyBub3QgdXNlZC4gSGVhbHRoQ2hlY2tTb3VyY2VJcCBhbmQgSGVhbHRoQ2hlY2tUYXJnZXRJcCBwYXJhbWV0ZXJzIG11c3QgYmUgYm90aCBzcGVjaWZpZWQgb3IgbGVmdCB1bnNwZWNpZmllZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGVhbHRoQ2hlY2tTb3VyY2VJcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhlYWx0aENoZWNrVGFyZ2V0SXA6IFRhcmdldCBJUCBhZGRyZXNzIG9mIHRoZSBwYWNrZXQgZm9yIGxlYXNlZCBsaW5lIEhlYWx0aENoZWNrIGluIGxlYXNlZCBsaW5lIGRpc2FzdGVyIHRvbGVyYW5jZSBhbmQgRUNNUCBzY2VuYXJpb3MuIEl0IGlzIHZhbGlkIG9ubHkgZm9yIGEgVlJvdXRlciBSb3V0ZXJJbnRlcmZhY2Ugd2l0aCBhIHBlZXIgb24gYSBWQlIuIFVzdWFsbHkgeW91IGNhbiB1c2UgdGhlIENQRSBJUCBhZGRyZXNzIG9mIHRoZSBsZWFzZWQgbGluZSB1c2VyJ3MgY2xpZW50ICh0aGF0IGlzLCB0aGUgUGVlckdhdGV3YXlJUCBvbiB0aGUgVkJSIG9mIHRoZSBwZWVyIFJvdXRlckludGVyZmFjZSksIHlvdSBjYW4gYWxzbyBzcGVjaWZ5IGFub3RoZXIgSVAgYWRkcmVzcyBvZiB0aGUgbGVhc2VkIGxpbmUgdXNlcidzIGNsaWVudCBhcyB0aGUgSGVhbHRoQ2hlY2sgdGFyZ2V0IElQIGFkZHJlc3MuIEhlYWx0aENoZWNrU291cmNlSXAgYW5kIEhlYWx0aENoZWNrVGFyZ2V0SXAgcGFyYW1ldGVycyBtdXN0IGJlIGJvdGggc3BlY2lmaWVkIG9yIGxlZnQgdW5zcGVjaWZpZWQuXG4gICAgICovXG4gICAgcHVibGljIGhlYWx0aENoZWNrVGFyZ2V0SXA6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUNoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZCBvZiB0aGUgcm91dGVyIGludGVyZmFjZS4gVmFsaWQgdmFsdWVzOiBQcmVQYWlkIChTdWJzY3JpcHRpb24pLCBQb3N0UGFpZCAoZGVmYXVsdCwgUGF5LUFzLVlvdS1HbylcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VDaGFyZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogQ3VzdG9tIG5hbWUgb2YgdGhlIFJvdXRlckludGVyZmFjZSwgWzIsIDEyOF0gRW5nbGlzaCBvciBDaGluZXNlIGNoYXJhY3RlcnMsIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlIGluIHNpemUsIGNhbiBjb250YWluIG51bWJlcnMsICdfJyBvciAnLicsICctJ1xuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3Bwb3NpdGVBY2Nlc3NQb2ludElkOiBBY2Nlc3MgcG9pbnQgSUQgb2YgdGhlIGNvbm5lY3Rpb24gcGVlciBSb3V0ZXJJbnRlcmZhY2UuIElmICdPcHBvc2l0ZVJvdXRlclR5cGUnIGlzIHNwZWNpZmllZCBhcyAnVkJSJywgdGhlIHZhbHVlIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBvcHBvc2l0ZUFjY2Vzc1BvaW50SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcHBvc2l0ZUludGVyZmFjZUlkOiBUaGUgSUQgb2YgdGhlIHBlZXIgcm91dGVyIGludGVyZmFjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3Bwb3NpdGVJbnRlcmZhY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9wcG9zaXRlSW50ZXJmYWNlT3duZXJJZDogT3duZXIgYWNjb3VudCBJRCBvZiB0aGUgY29ubmVjdGlvbiBwZWVyIFJvdXRlckludGVyZmFjZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgY3VycmVudCB1c2VyIElkLlxuICAgICAqL1xuICAgIHB1YmxpYyBvcHBvc2l0ZUludGVyZmFjZU93bmVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcHBvc2l0ZVJlZ2lvbklkOiBUaGUgcmVnaW9uIHdoZXJlIHRoZSBjb25uZWN0aW9uIHBlZXIgUm91dGVySW50ZXJmYWNlIGxvY2F0ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHJlZ2lvbiB3aGVyZSBzdGFjayBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBvcHBvc2l0ZVJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3Bwb3NpdGVSb3V0ZXJJZDogVGhlIHJvdXRlciBJRCBvZiB0aGUgY29ubmVjdGlvbiBwZWVyIFJvdXRlckludGVyZmFjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3Bwb3NpdGVSb3V0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9wcG9zaXRlUm91dGVyVHlwZTogUm91dGVyIHR5cGUgb2YgdGhlIGNvbm5lY3Rpb24gcGVlciByb3V0ZXIuIE5vdyBzdXBwb3J0ICdWUm91dGVyfFZCUicuIElmICdSb3V0ZXJUeXBlJyBpcyBzcGVjaWZpZWQgYXMgJ1ZCUicsIHRoZSB2YWx1ZSBtdXN0IGJlICdWUm91dGVyJy5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3Bwb3NpdGVSb3V0ZXJUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBQcmVwYWlkIHRpbWUgcGVyaW9kLiBJdCBjb3VsZCBiZSBmcm9tIDEgdG8gOSB3aGVuIFByaWNpbmdDeWNsZSBpcyBNb250aCwgb3IgMSB0byAzIHdoZW4gUHJpY2luZ0N5Y2xlIGlzIFllYXIuXG4gICAgICovXG4gICAgcHVibGljIHBlcmlvZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaWNpbmdDeWNsZTogVW5pdCBvZiB0aGUgcGF5bWVudCBjeWNsZS4gSXQgY291bGQgYmUgTW9udGggKGRlZmF1bHQpIG9yIFllYXIuXG4gICAgICovXG4gICAgcHVibGljIHByaWNpbmdDeWNsZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlclR5cGU6IFJvdXRlciB0eXBlLiBOb3cgc3VwcG9ydCAnVlJvdXRlcnxWQlInXG4gICAgICovXG4gICAgcHVibGljIHJvdXRlclR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzcGVjOiBSb3V0ZXJJbnRlcmZhY2Ugc3BlY2lmaWNhdGlvbi4gSWYgJ1JvbGUnIGlzIHNwZWNpZmllZCBhcyAnSW5pdGlhdGluZ1NpZGUnLCB0aGUgdmFsdWUgaXMgcmVxdWlyZWQuIElmICdSb2xlJyBpcyBzcGVjaWZpZWQgYXMgJ0FjY2VwdGluZ1NpZGUnLCB0aGUgdmFsdWUgaXMgc2V0IGFzICdOZWdhdGl2ZScgYnkgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3BlYzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6Um91dGVySW50ZXJmYWNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NSb3V0ZXJJbnRlcmZhY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1JvdXRlckludGVyZmFjZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyUm91dGVySW50ZXJmYWNlSWQgPSB0aGlzLmdldEF0dCgnUm91dGVySW50ZXJmYWNlSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucm9sZSA9IHByb3BzLnJvbGU7XG4gICAgICAgIHRoaXMucm91dGVySWQgPSBwcm9wcy5yb3V0ZXJJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NQb2ludElkID0gcHJvcHMuYWNjZXNzUG9pbnRJZDtcbiAgICAgICAgdGhpcy5hdXRvUGF5ID0gcHJvcHMuYXV0b1BheTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmhlYWx0aENoZWNrU291cmNlSXAgPSBwcm9wcy5oZWFsdGhDaGVja1NvdXJjZUlwO1xuICAgICAgICB0aGlzLmhlYWx0aENoZWNrVGFyZ2V0SXAgPSBwcm9wcy5oZWFsdGhDaGVja1RhcmdldElwO1xuICAgICAgICB0aGlzLmluc3RhbmNlQ2hhcmdlVHlwZSA9IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZTtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICAgICAgdGhpcy5vcHBvc2l0ZUFjY2Vzc1BvaW50SWQgPSBwcm9wcy5vcHBvc2l0ZUFjY2Vzc1BvaW50SWQ7XG4gICAgICAgIHRoaXMub3Bwb3NpdGVJbnRlcmZhY2VJZCA9IHByb3BzLm9wcG9zaXRlSW50ZXJmYWNlSWQ7XG4gICAgICAgIHRoaXMub3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkID0gcHJvcHMub3Bwb3NpdGVJbnRlcmZhY2VPd25lcklkO1xuICAgICAgICB0aGlzLm9wcG9zaXRlUmVnaW9uSWQgPSBwcm9wcy5vcHBvc2l0ZVJlZ2lvbklkO1xuICAgICAgICB0aGlzLm9wcG9zaXRlUm91dGVySWQgPSBwcm9wcy5vcHBvc2l0ZVJvdXRlcklkO1xuICAgICAgICB0aGlzLm9wcG9zaXRlUm91dGVyVHlwZSA9IHByb3BzLm9wcG9zaXRlUm91dGVyVHlwZTtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwcm9wcy5wZXJpb2Q7XG4gICAgICAgIHRoaXMucHJpY2luZ0N5Y2xlID0gcHJvcHMucHJpY2luZ0N5Y2xlO1xuICAgICAgICB0aGlzLnJvdXRlclR5cGUgPSBwcm9wcy5yb3V0ZXJUeXBlO1xuICAgICAgICB0aGlzLnNwZWMgPSBwcm9wcy5zcGVjO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvbGU6IHRoaXMucm9sZSxcbiAgICAgICAgICAgIHJvdXRlcklkOiB0aGlzLnJvdXRlcklkLFxuICAgICAgICAgICAgYWNjZXNzUG9pbnRJZDogdGhpcy5hY2Nlc3NQb2ludElkLFxuICAgICAgICAgICAgYXV0b1BheTogdGhpcy5hdXRvUGF5LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBoZWFsdGhDaGVja1NvdXJjZUlwOiB0aGlzLmhlYWx0aENoZWNrU291cmNlSXAsXG4gICAgICAgICAgICBoZWFsdGhDaGVja1RhcmdldElwOiB0aGlzLmhlYWx0aENoZWNrVGFyZ2V0SXAsXG4gICAgICAgICAgICBpbnN0YW5jZUNoYXJnZVR5cGU6IHRoaXMuaW5zdGFuY2VDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgb3Bwb3NpdGVBY2Nlc3NQb2ludElkOiB0aGlzLm9wcG9zaXRlQWNjZXNzUG9pbnRJZCxcbiAgICAgICAgICAgIG9wcG9zaXRlSW50ZXJmYWNlSWQ6IHRoaXMub3Bwb3NpdGVJbnRlcmZhY2VJZCxcbiAgICAgICAgICAgIG9wcG9zaXRlSW50ZXJmYWNlT3duZXJJZDogdGhpcy5vcHBvc2l0ZUludGVyZmFjZU93bmVySWQsXG4gICAgICAgICAgICBvcHBvc2l0ZVJlZ2lvbklkOiB0aGlzLm9wcG9zaXRlUmVnaW9uSWQsXG4gICAgICAgICAgICBvcHBvc2l0ZVJvdXRlcklkOiB0aGlzLm9wcG9zaXRlUm91dGVySWQsXG4gICAgICAgICAgICBvcHBvc2l0ZVJvdXRlclR5cGU6IHRoaXMub3Bwb3NpdGVSb3V0ZXJUeXBlLFxuICAgICAgICAgICAgcGVyaW9kOiB0aGlzLnBlcmlvZCxcbiAgICAgICAgICAgIHByaWNpbmdDeWNsZTogdGhpcy5wcmljaW5nQ3ljbGUsXG4gICAgICAgICAgICByb3V0ZXJUeXBlOiB0aGlzLnJvdXRlclR5cGUsXG4gICAgICAgICAgICBzcGVjOiB0aGlzLnNwZWMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1JvdXRlckludGVyZmFjZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpTbmF0RW50cnlgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU25hdEVudHJ5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNuYXRJcDogVGhlIHB1YmxpYyBJUCBhZGRyZXNzLiBTZXBhcmF0ZSBtdWx0aXBsZSBFSVBzIHdpdGggY29tbWFzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNuYXRJcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNuYXRUYWJsZUlkOiBUaGUgSUQgb2YgdGhlIFNOQVQgdGFibGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc25hdFRhYmxlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzbmF0RW50cnlOYW1lOiBoZSBuYW1lIG9mIHRoZSBTTkFUIHJ1bGUgaXMgMi0xMjggY2hhcmFjdGVycyBsb25nIGFuZCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSwgYnV0IGNhbm5vdCBiZWdpbiB3aXRoIEhUVFA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc25hdEVudHJ5TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VDaWRyOiBTcGVjaWZpZXMgdGhlIG5ldHdvcmsgc2VnbWVudCBvZiB0aGUgc3dpdGNoLiBGb3IgZXhhbXBsZSwgMTAuMC4wLjEvMjQuIFRoaXMgcGFyYW1ldGVyIGFuZCB0aGUgU291cmNlVlN3dGljaElkIHBhcmFtZXRlciBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlIGFuZCBjYW5ub3QgYXBwZWFyIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlQ2lkcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VWU3dpdGNoSWRzOiBUaGUgSUQgb2YgdGhlIFZTd2l0Y2ggdG8gYWNjZXNzIHRoZSBJbnRlcm5ldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VWU3dpdGNoSWRzPzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTbmF0RW50cnlQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU25hdEVudHJ5UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU25hdEVudHJ5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzbmF0RW50cnlOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNuYXRFbnRyeU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZVZTd2l0Y2hJZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnNvdXJjZVZTd2l0Y2hJZHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZUNpZHInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc291cmNlQ2lkcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc25hdElwJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNuYXRJcCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc25hdElwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNuYXRJcCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc25hdFRhYmxlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc25hdFRhYmxlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NuYXRUYWJsZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNuYXRUYWJsZUlkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NuYXRFbnRyeVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlNuYXRFbnRyeWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU25hdEVudHJ5UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6U25hdEVudHJ5YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NuYXRFbnRyeVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU25hdEVudHJ5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgU25hdElwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNuYXRJcCksXG4gICAgICBTbmF0VGFibGVJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zbmF0VGFibGVJZCksXG4gICAgICBTbmF0RW50cnlOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNuYXRFbnRyeU5hbWUpLFxuICAgICAgU291cmNlQ0lEUjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3VyY2VDaWRyKSxcbiAgICAgIFNvdXJjZVZTd2l0Y2hJZHM6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnNvdXJjZVZTd2l0Y2hJZHMpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6U25hdEVudHJ5YFxuICovXG5leHBvcnQgY2xhc3MgUm9zU25hdEVudHJ5IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OlNuYXRFbnRyeVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNuYXRFbnRyeUlkczogVGhlIElEUyBvZiB0aGUgU05BVCBlbnRyeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNuYXRFbnRyeUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc25hdElwOiBUaGUgcHVibGljIElQIGFkZHJlc3MuIFNlcGFyYXRlIG11bHRpcGxlIEVJUHMgd2l0aCBjb21tYXMuXG4gICAgICovXG4gICAgcHVibGljIHNuYXRJcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNuYXRUYWJsZUlkOiBUaGUgSUQgb2YgdGhlIFNOQVQgdGFibGUuXG4gICAgICovXG4gICAgcHVibGljIHNuYXRUYWJsZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc25hdEVudHJ5TmFtZTogaGUgbmFtZSBvZiB0aGUgU05BVCBydWxlIGlzIDItMTI4IGNoYXJhY3RlcnMgbG9uZyBhbmQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UsIGJ1dCBjYW5ub3QgYmVnaW4gd2l0aCBIVFRQOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHB1YmxpYyBzbmF0RW50cnlOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlQ2lkcjogU3BlY2lmaWVzIHRoZSBuZXR3b3JrIHNlZ21lbnQgb2YgdGhlIHN3aXRjaC4gRm9yIGV4YW1wbGUsIDEwLjAuMC4xLzI0LiBUaGlzIHBhcmFtZXRlciBhbmQgdGhlIFNvdXJjZVZTd3RpY2hJZCBwYXJhbWV0ZXIgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSBhbmQgY2Fubm90IGFwcGVhciBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBzb3VyY2VDaWRyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlVlN3aXRjaElkczogVGhlIElEIG9mIHRoZSBWU3dpdGNoIHRvIGFjY2VzcyB0aGUgSW50ZXJuZXQuXG4gICAgICovXG4gICAgcHVibGljIHNvdXJjZVZTd2l0Y2hJZHM6IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6VlBDOjpTbmF0RW50cnlgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1NuYXRFbnRyeVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU25hdEVudHJ5LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJTbmF0RW50cnlJZHMgPSB0aGlzLmdldEF0dCgnU25hdEVudHJ5SWRzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNuYXRJcCA9IHByb3BzLnNuYXRJcDtcbiAgICAgICAgdGhpcy5zbmF0VGFibGVJZCA9IHByb3BzLnNuYXRUYWJsZUlkO1xuICAgICAgICB0aGlzLnNuYXRFbnRyeU5hbWUgPSBwcm9wcy5zbmF0RW50cnlOYW1lO1xuICAgICAgICB0aGlzLnNvdXJjZUNpZHIgPSBwcm9wcy5zb3VyY2VDaWRyO1xuICAgICAgICB0aGlzLnNvdXJjZVZTd2l0Y2hJZHMgPSBwcm9wcy5zb3VyY2VWU3dpdGNoSWRzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNuYXRJcDogdGhpcy5zbmF0SXAsXG4gICAgICAgICAgICBzbmF0VGFibGVJZDogdGhpcy5zbmF0VGFibGVJZCxcbiAgICAgICAgICAgIHNuYXRFbnRyeU5hbWU6IHRoaXMuc25hdEVudHJ5TmFtZSxcbiAgICAgICAgICAgIHNvdXJjZUNpZHI6IHRoaXMuc291cmNlQ2lkcixcbiAgICAgICAgICAgIHNvdXJjZVZTd2l0Y2hJZHM6IHRoaXMuc291cmNlVlN3aXRjaElkcyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU25hdEVudHJ5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OlNzbFZwbkNsaWVudENlcnRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU3NsVnBuQ2xpZW50Q2VydFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzc2xWcG5TZXJ2ZXJJZDogSUQgb2YgdGhlIFNTTC1WUE4gc2VydmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNzbFZwblNlcnZlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIGNsaWVudCBjZXJ0aWZpY2F0ZS5cbiAgICAgKiBUaGUgbGVuZ3RoIGlzIDItMTI4IGNoYXJhY3RlcnMgYW5kIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlLiBJdCBjYW4gY29udGFpbiBudW1iZXJzLCBwZXJpb2RzICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgZGFzaGVzICgtKS4gQnV0IGl0IGNhbid0IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1NzbFZwbkNsaWVudENlcnRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU3NsVnBuQ2xpZW50Q2VydFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NzbFZwbkNsaWVudENlcnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NzbFZwblNlcnZlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNzbFZwblNlcnZlcklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzc2xWcG5TZXJ2ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zc2xWcG5TZXJ2ZXJJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMubmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5uYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5uYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMixcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zU3NsVnBuQ2xpZW50Q2VydFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlNzbFZwbkNsaWVudENlcnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NzbFZwbkNsaWVudENlcnRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpTc2xWcG5DbGllbnRDZXJ0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NzbFZwbkNsaWVudENlcnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NzbFZwbkNsaWVudENlcnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBTc2xWcG5TZXJ2ZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zc2xWcG5TZXJ2ZXJJZCksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6U3NsVnBuQ2xpZW50Q2VydGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NzbFZwbkNsaWVudENlcnQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlZQQzo6U3NsVnBuQ2xpZW50Q2VydFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNzbFZwbkNsaWVudENlcnRJZDogVGhlIElEIG9mIHRoZSBjbGllbnQgY2VydGlmaWNhdGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTc2xWcG5DbGllbnRDZXJ0SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNzbFZwblNlcnZlcklkOiBJRCBvZiB0aGUgU1NMLVZQTiBzZXJ2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHNzbFZwblNlcnZlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIGNsaWVudCBjZXJ0aWZpY2F0ZS5cbiAgICAgKiBUaGUgbGVuZ3RoIGlzIDItMTI4IGNoYXJhY3RlcnMgYW5kIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlLiBJdCBjYW4gY29udGFpbiBudW1iZXJzLCBwZXJpb2RzICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgZGFzaGVzICgtKS4gQnV0IGl0IGNhbid0IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6U3NsVnBuQ2xpZW50Q2VydGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU3NsVnBuQ2xpZW50Q2VydFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU3NsVnBuQ2xpZW50Q2VydC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyU3NsVnBuQ2xpZW50Q2VydElkID0gdGhpcy5nZXRBdHQoJ1NzbFZwbkNsaWVudENlcnRJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5zc2xWcG5TZXJ2ZXJJZCA9IHByb3BzLnNzbFZwblNlcnZlcklkO1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNzbFZwblNlcnZlcklkOiB0aGlzLnNzbFZwblNlcnZlcklkLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTc2xWcG5DbGllbnRDZXJ0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OlNzbFZwblNlcnZlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTc2xWcG5TZXJ2ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2xpZW50SXBQb29sOiBJdCBpcyB0aGUgYWRkcmVzcyBzZWdtZW50IHRoYXQgYXNzaWducyB0aGUgYWNjZXNzIGFkZHJlc3MgdG8gdGhlIGNsaWVudCB2aXJ0dWFsIE5JQy4gSXQgZG9lcyBub3QgcmVmZXIgdG8gdGhlIGV4aXN0aW5nIGludHJhbmV0IHNlZ21lbnQgb2YgdGhlIGNsaWVudC5cbiAgICAgKiBXaGVuIHRoZSBjbGllbnQgYWNjZXNzZXMgdGhlIGxvY2FsIGVuZCB0aHJvdWdoIGFuIFNTTC1WUE4gY29ubmVjdGlvbiwgdGhlIFZQTiBnYXRld2F5IGFsbG9jYXRlcyBhbiBJUCBhZGRyZXNzIHRvIHRoZSBjbGllbnQgZnJvbSB0aGUgc3BlY2lmaWVkIGNsaWVudCBuZXR3b3JrIHNlZ21lbnQuXG4gICAgICogVGhlIG5ldHdvcmsgc2VnbWVudCBjYW5ub3QgY29uZmxpY3Qgd2l0aCB0aGUgTG9jYWxTdWJuZXQgYWRkcmVzcyBzZWdtZW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsaWVudElwUG9vbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvY2FsU3VibmV0OiBJcyB0aGUgYWRkcmVzcyBzZWdtZW50IHRoYXQgdGhlIGNsaWVudCB3YW50cyB0byBhY2Nlc3MgdGhyb3VnaCBhbiBTU0wtVlBOIGNvbm5lY3Rpb24uXG4gICAgICogVGhlIGxvY2FsIG5ldHdvcmsgc2VnbWVudCBjYW4gYmUgdGhlIG5ldHdvcmsgc2VnbWVudCBvZiB0aGUgVlBDLCB0aGUgbmV0d29yayBzZWdtZW50IG9mIHRoZSBzd2l0Y2gsIHRoZSBuZXR3b3JrIHNlZ21lbnQgb2YgdGhlIElEQyBpbnRlcmNvbm5lY3RlZCBieSB0aGUgbGVhc2VkIGxpbmUgYW5kIHRoZSBWUEMsIGFuZCB0aGUgbmV0d29yayBzZWdtZW50IG9mIHRoZSBjbG91ZCBzZXJ2aWNlIHN1Y2ggYXMgUkRTL09TUy5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2NhbFN1Ym5ldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwbkdhdGV3YXlJZDogSUQgb2YgdGhlIFZQTiBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwbkdhdGV3YXlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNpcGhlcjogVGhlIGVuY3J5cHRpb24gYWxnb3JpdGhtIHVzZWQgYnkgU1NMLVZQTi4gVmFsdWU6XG4gICAgICogQUVTLTEyOC1DQkMgKGRlZmF1bHQpIHwgQUVTLTE5Mi1DQkMgfCBBRVMtMjU2LUNCQyB8IG5vbmVcbiAgICAgKi9cbiAgICByZWFkb25seSBjaXBoZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tcHJlc3M6IFdoZXRoZXIgaXQgaXMgY29tcHJlc3NlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21wcmVzcz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIFNTTC1WUE4gc2VydmVyLiBUaGUgbGVuZ3RoIGlzIDItMTI4IGNoYXJhY3RlcnMgYW5kIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlLiBJdCBjYW4gY29udGFpbiBudW1iZXJzLCBwZXJpb2RzICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgZGFzaGVzICgtKS5cbiAgICAgKiBCdXQgaXQgY2FuJ3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9ydDogVGhlIHBvcnQgdXNlZCBieSB0aGUgU1NMLVZQTiBzZXJ2ZXIuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDExOTQuIENhbm5vdCB1c2UgdGhlIGZvbGxvd2luZyBwb3J0czpcbiAgICAgKiAyMiwgMjIyMiwgMjIyMjIsIDkwMDAsIDkwMDEsIDkwMDIsIDc1MDUsIDgwLCA0NDMsIDUzLCA2OCwgMTIzLCA0NTEwLCA0NTYwLCA1MDAsIDQ1MDBcbiAgICAgKi9cbiAgICByZWFkb25seSBwb3J0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb3RvOiBUaGUgcHJvdG9jb2wgdXNlZCBieSB0aGUgU1NMLVZQTiBzZXJ2ZXIuIEFsbG93ZWQgdmFsdWVzOiBVRFAgKGRlZmF1bHQpIHwgVENQLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb3RvPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1NzbFZwblNlcnZlclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTc2xWcG5TZXJ2ZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTc2xWcG5TZXJ2ZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXByZXNzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5jb21wcmVzcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9jYWxTdWJuZXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9jYWxTdWJuZXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2FsU3VibmV0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvY2FsU3VibmV0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbGllbnRJcFBvb2wnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2xpZW50SXBQb29sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbGllbnRJcFBvb2wnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2xpZW50SXBQb29sKSk7XG4gICAgaWYocHJvcGVydGllcy5wcm90byAmJiAodHlwZW9mIHByb3BlcnRpZXMucHJvdG8pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3RvJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJvdG8sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiVURQXCIsXCJUQ1BcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm90bycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm90bykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBuR2F0ZXdheUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZwbkdhdGV3YXlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBuR2F0ZXdheUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZwbkdhdGV3YXlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9ydCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wb3J0KSk7XG4gICAgaWYocHJvcGVydGllcy5jaXBoZXIgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNpcGhlcikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2lwaGVyJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY2lwaGVyLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkFFUy0xMjgtQ0JDXCIsXCJBRVMtMTkyLUNCQ1wiLFwiQUVTLTI1Ni1DQkNcIixcIm5vbmVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjaXBoZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2lwaGVyKSk7XG4gICAgaWYocHJvcGVydGllcy5uYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMubmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLm5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NTc2xWcG5TZXJ2ZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpTc2xWcG5TZXJ2ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NzbFZwblNlcnZlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlNzbFZwblNlcnZlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTc2xWcG5TZXJ2ZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NzbFZwblNlcnZlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENsaWVudElwUG9vbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jbGllbnRJcFBvb2wpLFxuICAgICAgTG9jYWxTdWJuZXQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9jYWxTdWJuZXQpLFxuICAgICAgVnBuR2F0ZXdheUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZwbkdhdGV3YXlJZCksXG4gICAgICBDaXBoZXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2lwaGVyKSxcbiAgICAgIENvbXByZXNzOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb21wcmVzcyksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgICAgUG9ydDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb3J0KSxcbiAgICAgIFByb3RvOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb3RvKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OlNzbFZwblNlcnZlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NzbFZwblNlcnZlciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6VlBDOjpTc2xWcG5TZXJ2ZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTc2xWcG5TZXJ2ZXJJZDogSUQgb2YgdGhlIFNTTC1WUE4gc2VydmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3NsVnBuU2VydmVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsaWVudElwUG9vbDogSXQgaXMgdGhlIGFkZHJlc3Mgc2VnbWVudCB0aGF0IGFzc2lnbnMgdGhlIGFjY2VzcyBhZGRyZXNzIHRvIHRoZSBjbGllbnQgdmlydHVhbCBOSUMuIEl0IGRvZXMgbm90IHJlZmVyIHRvIHRoZSBleGlzdGluZyBpbnRyYW5ldCBzZWdtZW50IG9mIHRoZSBjbGllbnQuXG4gICAgICogV2hlbiB0aGUgY2xpZW50IGFjY2Vzc2VzIHRoZSBsb2NhbCBlbmQgdGhyb3VnaCBhbiBTU0wtVlBOIGNvbm5lY3Rpb24sIHRoZSBWUE4gZ2F0ZXdheSBhbGxvY2F0ZXMgYW4gSVAgYWRkcmVzcyB0byB0aGUgY2xpZW50IGZyb20gdGhlIHNwZWNpZmllZCBjbGllbnQgbmV0d29yayBzZWdtZW50LlxuICAgICAqIFRoZSBuZXR3b3JrIHNlZ21lbnQgY2Fubm90IGNvbmZsaWN0IHdpdGggdGhlIExvY2FsU3VibmV0IGFkZHJlc3Mgc2VnbWVudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2xpZW50SXBQb29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9jYWxTdWJuZXQ6IElzIHRoZSBhZGRyZXNzIHNlZ21lbnQgdGhhdCB0aGUgY2xpZW50IHdhbnRzIHRvIGFjY2VzcyB0aHJvdWdoIGFuIFNTTC1WUE4gY29ubmVjdGlvbi5cbiAgICAgKiBUaGUgbG9jYWwgbmV0d29yayBzZWdtZW50IGNhbiBiZSB0aGUgbmV0d29yayBzZWdtZW50IG9mIHRoZSBWUEMsIHRoZSBuZXR3b3JrIHNlZ21lbnQgb2YgdGhlIHN3aXRjaCwgdGhlIG5ldHdvcmsgc2VnbWVudCBvZiB0aGUgSURDIGludGVyY29ubmVjdGVkIGJ5IHRoZSBsZWFzZWQgbGluZSBhbmQgdGhlIFZQQywgYW5kIHRoZSBuZXR3b3JrIHNlZ21lbnQgb2YgdGhlIGNsb3VkIHNlcnZpY2Ugc3VjaCBhcyBSRFMvT1NTLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2NhbFN1Ym5ldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwbkdhdGV3YXlJZDogSUQgb2YgdGhlIFZQTiBnYXRld2F5LlxuICAgICAqL1xuICAgIHB1YmxpYyB2cG5HYXRld2F5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaXBoZXI6IFRoZSBlbmNyeXB0aW9uIGFsZ29yaXRobSB1c2VkIGJ5IFNTTC1WUE4uIFZhbHVlOlxuICAgICAqIEFFUy0xMjgtQ0JDIChkZWZhdWx0KSB8IEFFUy0xOTItQ0JDIHwgQUVTLTI1Ni1DQkMgfCBub25lXG4gICAgICovXG4gICAgcHVibGljIGNpcGhlcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbXByZXNzOiBXaGV0aGVyIGl0IGlzIGNvbXByZXNzZWQuXG4gICAgICovXG4gICAgcHVibGljIGNvbXByZXNzOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBTU0wtVlBOIHNlcnZlci4gVGhlIGxlbmd0aCBpcyAyLTEyOCBjaGFyYWN0ZXJzIGFuZCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZS4gSXQgY2FuIGNvbnRhaW4gbnVtYmVycywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGRhc2hlcyAoLSkuXG4gICAgICogQnV0IGl0IGNhbid0IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvcnQ6IFRoZSBwb3J0IHVzZWQgYnkgdGhlIFNTTC1WUE4gc2VydmVyLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxMTk0LiBDYW5ub3QgdXNlIHRoZSBmb2xsb3dpbmcgcG9ydHM6XG4gICAgICogMjIsIDIyMjIsIDIyMjIyLCA5MDAwLCA5MDAxLCA5MDAyLCA3NTA1LCA4MCwgNDQzLCA1MywgNjgsIDEyMywgNDUxMCwgNDU2MCwgNTAwLCA0NTAwXG4gICAgICovXG4gICAgcHVibGljIHBvcnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm90bzogVGhlIHByb3RvY29sIHVzZWQgYnkgdGhlIFNTTC1WUE4gc2VydmVyLiBBbGxvd2VkIHZhbHVlczogVURQIChkZWZhdWx0KSB8IFRDUC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJvdG86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpWUEM6OlNzbFZwblNlcnZlcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU3NsVnBuU2VydmVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTc2xWcG5TZXJ2ZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clNzbFZwblNlcnZlcklkID0gdGhpcy5nZXRBdHQoJ1NzbFZwblNlcnZlcklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNsaWVudElwUG9vbCA9IHByb3BzLmNsaWVudElwUG9vbDtcbiAgICAgICAgdGhpcy5sb2NhbFN1Ym5ldCA9IHByb3BzLmxvY2FsU3VibmV0O1xuICAgICAgICB0aGlzLnZwbkdhdGV3YXlJZCA9IHByb3BzLnZwbkdhdGV3YXlJZDtcbiAgICAgICAgdGhpcy5jaXBoZXIgPSBwcm9wcy5jaXBoZXI7XG4gICAgICAgIHRoaXMuY29tcHJlc3MgPSBwcm9wcy5jb21wcmVzcztcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICAgICAgdGhpcy5wb3J0ID0gcHJvcHMucG9ydDtcbiAgICAgICAgdGhpcy5wcm90byA9IHByb3BzLnByb3RvO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsaWVudElwUG9vbDogdGhpcy5jbGllbnRJcFBvb2wsXG4gICAgICAgICAgICBsb2NhbFN1Ym5ldDogdGhpcy5sb2NhbFN1Ym5ldCxcbiAgICAgICAgICAgIHZwbkdhdGV3YXlJZDogdGhpcy52cG5HYXRld2F5SWQsXG4gICAgICAgICAgICBjaXBoZXI6IHRoaXMuY2lwaGVyLFxuICAgICAgICAgICAgY29tcHJlc3M6IHRoaXMuY29tcHJlc3MsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBwb3J0OiB0aGlzLnBvcnQsXG4gICAgICAgICAgICBwcm90bzogdGhpcy5wcm90byxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU3NsVnBuU2VydmVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OlZpcnR1YWxCb3JkZXJSb3V0ZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVmlydHVhbEJvcmRlclJvdXRlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2NhbEdhdGV3YXlJcDogVGhlIElQIGFkZHJlc3Mgb2YgdGhlIFZCUiBvbiB0aGUgQWxpYmFiYSBDbG91ZCBzaWRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvY2FsR2F0ZXdheUlwOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVlckdhdGV3YXlJcDogVGhlIElQIGFkZHJlc3Mgb2YgdGhlIHBlZXIgcm91dGVyIGludGVyZmFjZSBvZiB0aGUgVkJSLlxuICAgICAqIE9ubHkgdGhlIG93bmVyIG9mIHRoZSBWQlIgY2FuIHNldCBvciBtb2RpZnkgdGhlIHZhbHVlLlxuICAgICAqIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIHdoZW4geW91IGNyZWF0ZSBhIFZCUiBmb3IgdGhlIG93bmVyIG9mIHRoZSBwaHlzaWNhbCBjb25uZWN0aW9uLlxuICAgICAqIFlvdSBjYW4gaWdub3JlIHRoaXMgcGFyYW1ldGVyIHdoZW4geW91IGNyZWF0ZSBhIFZCUiBmb3IgYW5vdGhlciBBbGliYWJhIENsb3VkIGFjY291bnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVlckdhdGV3YXlJcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlZXJpbmdTdWJuZXRNYXNrOiBUaGUgc3VibmV0IG1hc2sgZm9yIHRoZSBJUCBhZGRyZXNzZXMgb2YgdGhlIFZCUiBvbiB0aGUgQWxpYmFiYSBDbG91ZCBzaWRlIGFuZCBvbiB0aGVcbiAgICAgKiB1c2VyIHNpZGUuXG4gICAgICogVGhlIHR3byBJUCBhZGRyZXNzZXMgbXVzdCBmYWxsIHdpdGhpbiB0aGUgc2FtZSBzdWJuZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVlcmluZ1N1Ym5ldE1hc2s6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwaHlzaWNhbENvbm5lY3Rpb25JZDogVGhlIElEIG9mIHRoZSBwaHlzaWNhbCBjb25uZWN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBoeXNpY2FsQ29ubmVjdGlvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdmxhbklkOiBUaGUgVkxBTiBJRCBvZiB0aGUgVkJSLiBWYWxpZCB2YWx1ZXM6IDAgdG8gMjk5OS5cbiAgICAgKiBOb3RlIE9ubHkgdGhlIG93bmVyIG9mIHRoZSBwaHlzaWNhbCBjb25uZWN0aW9uIGNhbiBzZXQgdGhpcyBwYXJhbWV0ZXIuIFRoZSBWTEFOIElEcyBvZlxuICAgICAqIHR3byBWQlJzIG9mIHRoZSBzYW1lIHBoeXNpY2FsIGNvbm5lY3Rpb24gbXVzdCBiZSBkaWZmZXJlbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmxhbklkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2lyY3VpdENvZGU6IFRoZSBjaXJjdWl0IGNvZGUgcHJvdmlkZWQgYnkgdGhlIEludGVybmV0IHNlcnZpY2UgcHJvdmlkZXIgKElTUCkgZm9yIHRoZSBwaHlzaWNhbFxuICAgICAqIGNvbm5lY3Rpb24uXG4gICAgICogTm90ZSBPbmx5IHRoZSBvd25lciBvZiB0aGUgcGh5c2ljYWwgY29ubmVjdGlvbiBjYW4gc2V0IHRoaXMgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNpcmN1aXRDb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIFZCUi5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAyIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyXG4gICAgICogYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIFZCUi5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4sIGRpZ2l0cywgcGVyaW9kcyAoLiksXG4gICAgICogdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIFRoZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NWaXJ0dWFsQm9yZGVyUm91dGVyUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZpcnR1YWxCb3JkZXJSb3V0ZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NWaXJ0dWFsQm9yZGVyUm91dGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZWVyR2F0ZXdheUlwJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBlZXJHYXRld2F5SXApKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlZXJHYXRld2F5SXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGVlckdhdGV3YXlJcCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9jYWxHYXRld2F5SXAnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9jYWxHYXRld2F5SXApKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2FsR2F0ZXdheUlwJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvY2FsR2F0ZXdheUlwKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2lyY3VpdENvZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2lyY3VpdENvZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BoeXNpY2FsQ29ubmVjdGlvbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBoeXNpY2FsQ29ubmVjdGlvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwaHlzaWNhbENvbm5lY3Rpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5waHlzaWNhbENvbm5lY3Rpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVlcmluZ1N1Ym5ldE1hc2snLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucGVlcmluZ1N1Ym5ldE1hc2spKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlZXJpbmdTdWJuZXRNYXNrJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBlZXJpbmdTdWJuZXRNYXNrKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2bGFuSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudmxhbklkKSk7XG4gICAgaWYocHJvcGVydGllcy52bGFuSWQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnZsYW5JZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmxhbklkJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudmxhbklkLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAyOTk5LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2bGFuSWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudmxhbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVmlydHVhbEJvcmRlclJvdXRlclByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlZpcnR1YWxCb3JkZXJSb3V0ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZpcnR1YWxCb3JkZXJSb3V0ZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpWaXJ0dWFsQm9yZGVyUm91dGVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1ZpcnR1YWxCb3JkZXJSb3V0ZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1ZpcnR1YWxCb3JkZXJSb3V0ZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBMb2NhbEdhdGV3YXlJcDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2NhbEdhdGV3YXlJcCksXG4gICAgICBQZWVyR2F0ZXdheUlwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlZXJHYXRld2F5SXApLFxuICAgICAgUGVlcmluZ1N1Ym5ldE1hc2s6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGVlcmluZ1N1Ym5ldE1hc2spLFxuICAgICAgUGh5c2ljYWxDb25uZWN0aW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGh5c2ljYWxDb25uZWN0aW9uSWQpLFxuICAgICAgVmxhbklkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZsYW5JZCksXG4gICAgICBDaXJjdWl0Q29kZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jaXJjdWl0Q29kZSksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6VmlydHVhbEJvcmRlclJvdXRlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1ZpcnR1YWxCb3JkZXJSb3V0ZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlZQQzo6VmlydHVhbEJvcmRlclJvdXRlclwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBWQlIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvdXRlVGFibGVJZDogVGhlIElEIG9mIHRoZSByb3V0ZSB0YWJsZSBvZiB0aGUgVkJSLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVUYWJsZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZicklkOiBUaGUgSUQgb2YgdGhlIFZCUi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZicklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZsYW5JbnRlcmZhY2VJZDogVGhlIElEIG9mIHRoZSBWQlIgaW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVmxhbkludGVyZmFjZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2NhbEdhdGV3YXlJcDogVGhlIElQIGFkZHJlc3Mgb2YgdGhlIFZCUiBvbiB0aGUgQWxpYmFiYSBDbG91ZCBzaWRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2NhbEdhdGV3YXlJcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlZXJHYXRld2F5SXA6IFRoZSBJUCBhZGRyZXNzIG9mIHRoZSBwZWVyIHJvdXRlciBpbnRlcmZhY2Ugb2YgdGhlIFZCUi5cbiAgICAgKiBPbmx5IHRoZSBvd25lciBvZiB0aGUgVkJSIGNhbiBzZXQgb3IgbW9kaWZ5IHRoZSB2YWx1ZS5cbiAgICAgKiBUaGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCB3aGVuIHlvdSBjcmVhdGUgYSBWQlIgZm9yIHRoZSBvd25lciBvZiB0aGUgcGh5c2ljYWwgY29ubmVjdGlvbi5cbiAgICAgKiBZb3UgY2FuIGlnbm9yZSB0aGlzIHBhcmFtZXRlciB3aGVuIHlvdSBjcmVhdGUgYSBWQlIgZm9yIGFub3RoZXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBwZWVyR2F0ZXdheUlwOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVlcmluZ1N1Ym5ldE1hc2s6IFRoZSBzdWJuZXQgbWFzayBmb3IgdGhlIElQIGFkZHJlc3NlcyBvZiB0aGUgVkJSIG9uIHRoZSBBbGliYWJhIENsb3VkIHNpZGUgYW5kIG9uIHRoZVxuICAgICAqIHVzZXIgc2lkZS5cbiAgICAgKiBUaGUgdHdvIElQIGFkZHJlc3NlcyBtdXN0IGZhbGwgd2l0aGluIHRoZSBzYW1lIHN1Ym5ldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGVlcmluZ1N1Ym5ldE1hc2s6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwaHlzaWNhbENvbm5lY3Rpb25JZDogVGhlIElEIG9mIHRoZSBwaHlzaWNhbCBjb25uZWN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBwaHlzaWNhbENvbm5lY3Rpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZsYW5JZDogVGhlIFZMQU4gSUQgb2YgdGhlIFZCUi4gVmFsaWQgdmFsdWVzOiAwIHRvIDI5OTkuXG4gICAgICogTm90ZSBPbmx5IHRoZSBvd25lciBvZiB0aGUgcGh5c2ljYWwgY29ubmVjdGlvbiBjYW4gc2V0IHRoaXMgcGFyYW1ldGVyLiBUaGUgVkxBTiBJRHMgb2ZcbiAgICAgKiB0d28gVkJScyBvZiB0aGUgc2FtZSBwaHlzaWNhbCBjb25uZWN0aW9uIG11c3QgYmUgZGlmZmVyZW50LlxuICAgICAqL1xuICAgIHB1YmxpYyB2bGFuSWQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaXJjdWl0Q29kZTogVGhlIGNpcmN1aXQgY29kZSBwcm92aWRlZCBieSB0aGUgSW50ZXJuZXQgc2VydmljZSBwcm92aWRlciAoSVNQKSBmb3IgdGhlIHBoeXNpY2FsXG4gICAgICogY29ubmVjdGlvbi5cbiAgICAgKiBOb3RlIE9ubHkgdGhlIG93bmVyIG9mIHRoZSBwaHlzaWNhbCBjb25uZWN0aW9uIGNhbiBzZXQgdGhpcyBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgcHVibGljIGNpcmN1aXRDb2RlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgVkJSLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIDIgdG8gMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXJcbiAgICAgKiBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgVkJSLlxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGgsIGFuZCBjYW4gY29udGFpbiwgZGlnaXRzLCBwZXJpb2RzICguKSxcbiAgICAgKiB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS4gVGhlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6VmlydHVhbEJvcmRlclJvdXRlcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVmlydHVhbEJvcmRlclJvdXRlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVmlydHVhbEJvcmRlclJvdXRlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IHRoaXMuZ2V0QXR0KCdOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlVGFibGVJZCA9IHRoaXMuZ2V0QXR0KCdSb3V0ZVRhYmxlSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyVmJySWQgPSB0aGlzLmdldEF0dCgnVmJySWQnKTtcbiAgICAgICAgdGhpcy5hdHRyVmxhbkludGVyZmFjZUlkID0gdGhpcy5nZXRBdHQoJ1ZsYW5JbnRlcmZhY2VJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5sb2NhbEdhdGV3YXlJcCA9IHByb3BzLmxvY2FsR2F0ZXdheUlwO1xuICAgICAgICB0aGlzLnBlZXJHYXRld2F5SXAgPSBwcm9wcy5wZWVyR2F0ZXdheUlwO1xuICAgICAgICB0aGlzLnBlZXJpbmdTdWJuZXRNYXNrID0gcHJvcHMucGVlcmluZ1N1Ym5ldE1hc2s7XG4gICAgICAgIHRoaXMucGh5c2ljYWxDb25uZWN0aW9uSWQgPSBwcm9wcy5waHlzaWNhbENvbm5lY3Rpb25JZDtcbiAgICAgICAgdGhpcy52bGFuSWQgPSBwcm9wcy52bGFuSWQ7XG4gICAgICAgIHRoaXMuY2lyY3VpdENvZGUgPSBwcm9wcy5jaXJjdWl0Q29kZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvY2FsR2F0ZXdheUlwOiB0aGlzLmxvY2FsR2F0ZXdheUlwLFxuICAgICAgICAgICAgcGVlckdhdGV3YXlJcDogdGhpcy5wZWVyR2F0ZXdheUlwLFxuICAgICAgICAgICAgcGVlcmluZ1N1Ym5ldE1hc2s6IHRoaXMucGVlcmluZ1N1Ym5ldE1hc2ssXG4gICAgICAgICAgICBwaHlzaWNhbENvbm5lY3Rpb25JZDogdGhpcy5waHlzaWNhbENvbm5lY3Rpb25JZCxcbiAgICAgICAgICAgIHZsYW5JZDogdGhpcy52bGFuSWQsXG4gICAgICAgICAgICBjaXJjdWl0Q29kZTogdGhpcy5jaXJjdWl0Q29kZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NWaXJ0dWFsQm9yZGVyUm91dGVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpWUEM6OlZwY1BlZXJDb25uZWN0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1ZwY1BlZXJDb25uZWN0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjY2VwdGluZ1ZwY0lkOiBUaGUgSUQgb2YgdGhlIGFjY2VwdG9yIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NlcHRpbmdWcGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIHJlcXVlc3RlciBWUEMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2NlcHRpbmdBbGlVaWQ6IFRoZSBJRCBvZiB0aGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50IHRvIHdoaWNoIHRoZSBhY2NlcHRvciBWUEMgYmVsb25ncy5cbiAgICAgKiBUbyBjcmVhdGUgYSBWUEMgcGVlcmluZyBjb25uZWN0aW9uIHdpdGhpbiB5b3VyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudCwgZW50ZXIgdGhlIElEXG4gICAgICogb2YgeW91ciBBbGliYWJhIENsb3VkIGFjY291bnQuXG4gICAgICogVG8gY3JlYXRlIGEgVlBDIHBlZXJpbmcgY29ubmVjdGlvbiBiZXR3ZWVuIHlvdXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50IGFuZCBhbm90aGVyXG4gICAgICogQWxpYmFiYSBDbG91ZCBhY2NvdW50LCBlbnRlciB0aGUgSUQgb2YgdGhlIHBlZXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50LlxuICAgICAqIE5vdGUgSWYgdGhlIGFjY2VwdG9yIFZQQyBiZWxvbmdzIHRvIGEgUmVzb3VyY2UgQWNjZXNzIE1hbmFnZW1lbnQgKFJBTSkgdXNlciwgeW91IG11c3Qgc2V0XG4gICAgICogdGhlIHZhbHVlIG9mIEFjY2VwdGluZ0FsaVVpZCB0byB0aGUgSUQgb2YgdGhlIGNvcnJlc3BvbmRpbmcgQWxpYmFiYSBDbG91ZCBhY2NvdW50LlxuICAgICAqIERlZmF1bHQgY3VycmVudCBhY2NvdW50IElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2VwdGluZ0FsaVVpZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2NlcHRpbmdSZWdpb25JZDogVGhlIHJlZ2lvbiBJRCBvZiB0aGUgYWNjZXB0b3IgVlBDIG9mIHRoZSBWUEMgcGVlcmluZyBjb25uZWN0aW9uIHRoYXQgeW91IHdhbnQgdG8gY3JlYXRlLlxuICAgICAqIFRvIGNyZWF0ZSBhbiBpbnRyYS1yZWdpb24gVlBDIHBlZXJpbmcgY29ubmVjdGlvbiwgZW50ZXIgYSByZWdpb24gSUQgdGhhdCBpcyB0aGUgc2FtZVxuICAgICAqIGFzIHRoYXQgb2YgdGhlIHJlcXVlc3RlciBWUEMuXG4gICAgICogVG8gY3JlYXRlIGFuIGludGVyLXJlZ2lvbiBWUEMgcGVlcmluZyBjb25uZWN0aW9uLCBlbnRlciBhIHJlZ2lvbiBJRCB0aGF0IGlzIGRpZmZlcmVudFxuICAgICAqIGZyb20gdGhhdCBvZiB0aGUgcmVxdWVzdGVyIFZQQy5cbiAgICAgKiBEZWZhdWx0IGN1cnJlbnQgcmVnaW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2VwdGluZ1JlZ2lvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGZvcmNlZnVsbHkgZGVsZXRlIHRoZSBWUEMgcGVlcmluZyBjb25uZWN0aW9uLiBWYWxpZCB2YWx1ZXM6ZmFsc2UgKGRlZmF1bHQpOiBub3RydWU6IHllcyBJZiB5b3UgZm9yY2VmdWxseSBkZWxldGUgdGhlIFZQQyBwZWVyaW5nIGNvbm5lY3Rpb24sIHRoZSBzeXN0ZW0gZGVsZXRlcyB0aGUgcm91dGVzIHRoYXQgcG9pbnQgdG8gdGhlIFZQQyBwZWVyaW5nIGNvbm5lY3Rpb24gZnJvbSB0aGUgVlBDIHJvdXRlIHRhYmxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uRm9yY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIFZQQyBwZWVyaW5nIGNvbm5lY3Rpb24uXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlclxuICAgICAqIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBWUEMgcGVlcmluZyBjb25uZWN0aW9uLlxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbiBjb250YWluIGRpZ2l0cywgdW5kZXJzY29yZXNcbiAgICAgKiAoXyksIGFuZCBoeXBoZW5zICgtKS4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVnBjUGVlckNvbm5lY3Rpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVnBjUGVlckNvbm5lY3Rpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NWcGNQZWVyQ29ubmVjdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0aW9uRm9yY2UnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmRlbGV0aW9uRm9yY2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY2VwdGluZ1ZwY0lkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFjY2VwdGluZ1ZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2NlcHRpbmdWcGNJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY2NlcHRpbmdWcGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwY0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZwY0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2NlcHRpbmdSZWdpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY2NlcHRpbmdSZWdpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXB0aW5nQWxpVWlkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmFjY2VwdGluZ0FsaVVpZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1ZwY1BlZXJDb25uZWN0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6VnBjUGVlckNvbm5lY3Rpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZwY1BlZXJDb25uZWN0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6VnBjUGVlckNvbm5lY3Rpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVnBjUGVlckNvbm5lY3Rpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1ZwY1BlZXJDb25uZWN0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQWNjZXB0aW5nVnBjSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNjZXB0aW5nVnBjSWQpLFxuICAgICAgVnBjSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgICAgQWNjZXB0aW5nQWxpVWlkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFjY2VwdGluZ0FsaVVpZCksXG4gICAgICBBY2NlcHRpbmdSZWdpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hY2NlcHRpbmdSZWdpb25JZCksXG4gICAgICBEZWxldGlvbkZvcmNlOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxldGlvbkZvcmNlKSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpWcGNQZWVyQ29ubmVjdGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1ZwY1BlZXJDb25uZWN0aW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OlZwY1BlZXJDb25uZWN0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBWUEMgcGVlcmluZyBjb25uZWN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXB0aW5nVnBjSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXB0b3IgVlBDLlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NlcHRpbmdWcGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIHJlcXVlc3RlciBWUEMuXG4gICAgICovXG4gICAgcHVibGljIHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXB0aW5nQWxpVWlkOiBUaGUgSUQgb2YgdGhlIEFsaWJhYmEgQ2xvdWQgYWNjb3VudCB0byB3aGljaCB0aGUgYWNjZXB0b3IgVlBDIGJlbG9uZ3MuXG4gICAgICogVG8gY3JlYXRlIGEgVlBDIHBlZXJpbmcgY29ubmVjdGlvbiB3aXRoaW4geW91ciBBbGliYWJhIENsb3VkIGFjY291bnQsIGVudGVyIHRoZSBJRFxuICAgICAqIG9mIHlvdXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50LlxuICAgICAqIFRvIGNyZWF0ZSBhIFZQQyBwZWVyaW5nIGNvbm5lY3Rpb24gYmV0d2VlbiB5b3VyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudCBhbmQgYW5vdGhlclxuICAgICAqIEFsaWJhYmEgQ2xvdWQgYWNjb3VudCwgZW50ZXIgdGhlIElEIG9mIHRoZSBwZWVyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudC5cbiAgICAgKiBOb3RlIElmIHRoZSBhY2NlcHRvciBWUEMgYmVsb25ncyB0byBhIFJlc291cmNlIEFjY2VzcyBNYW5hZ2VtZW50IChSQU0pIHVzZXIsIHlvdSBtdXN0IHNldFxuICAgICAqIHRoZSB2YWx1ZSBvZiBBY2NlcHRpbmdBbGlVaWQgdG8gdGhlIElEIG9mIHRoZSBjb3JyZXNwb25kaW5nIEFsaWJhYmEgQ2xvdWQgYWNjb3VudC5cbiAgICAgKiBEZWZhdWx0IGN1cnJlbnQgYWNjb3VudCBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWNjZXB0aW5nQWxpVWlkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXB0aW5nUmVnaW9uSWQ6IFRoZSByZWdpb24gSUQgb2YgdGhlIGFjY2VwdG9yIFZQQyBvZiB0aGUgVlBDIHBlZXJpbmcgY29ubmVjdGlvbiB0aGF0IHlvdSB3YW50IHRvIGNyZWF0ZS5cbiAgICAgKiBUbyBjcmVhdGUgYW4gaW50cmEtcmVnaW9uIFZQQyBwZWVyaW5nIGNvbm5lY3Rpb24sIGVudGVyIGEgcmVnaW9uIElEIHRoYXQgaXMgdGhlIHNhbWVcbiAgICAgKiBhcyB0aGF0IG9mIHRoZSByZXF1ZXN0ZXIgVlBDLlxuICAgICAqIFRvIGNyZWF0ZSBhbiBpbnRlci1yZWdpb24gVlBDIHBlZXJpbmcgY29ubmVjdGlvbiwgZW50ZXIgYSByZWdpb24gSUQgdGhhdCBpcyBkaWZmZXJlbnRcbiAgICAgKiBmcm9tIHRoYXQgb2YgdGhlIHJlcXVlc3RlciBWUEMuXG4gICAgICogRGVmYXVsdCBjdXJyZW50IHJlZ2lvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWNjZXB0aW5nUmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBTcGVjaWZpZXMgd2hldGhlciB0byBmb3JjZWZ1bGx5IGRlbGV0ZSB0aGUgVlBDIHBlZXJpbmcgY29ubmVjdGlvbi4gVmFsaWQgdmFsdWVzOmZhbHNlIChkZWZhdWx0KTogbm90cnVlOiB5ZXMgSWYgeW91IGZvcmNlZnVsbHkgZGVsZXRlIHRoZSBWUEMgcGVlcmluZyBjb25uZWN0aW9uLCB0aGUgc3lzdGVtIGRlbGV0ZXMgdGhlIHJvdXRlcyB0aGF0IHBvaW50IHRvIHRoZSBWUEMgcGVlcmluZyBjb25uZWN0aW9uIGZyb20gdGhlIFZQQyByb3V0ZSB0YWJsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVsZXRpb25Gb3JjZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBWUEMgcGVlcmluZyBjb25uZWN0aW9uLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIDIgdG8gMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXJcbiAgICAgKiBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgVlBDIHBlZXJpbmcgY29ubmVjdGlvbi5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW4gY29udGFpbiBkaWdpdHMsIHVuZGVyc2NvcmVzXG4gICAgICogKF8pLCBhbmQgaHlwaGVucyAoLSkuIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6VnBjUGVlckNvbm5lY3Rpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1ZwY1BlZXJDb25uZWN0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NWcGNQZWVyQ29ubmVjdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHRoaXMuZ2V0QXR0KCdJbnN0YW5jZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFjY2VwdGluZ1ZwY0lkID0gcHJvcHMuYWNjZXB0aW5nVnBjSWQ7XG4gICAgICAgIHRoaXMudnBjSWQgPSBwcm9wcy52cGNJZDtcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdBbGlVaWQgPSBwcm9wcy5hY2NlcHRpbmdBbGlVaWQ7XG4gICAgICAgIHRoaXMuYWNjZXB0aW5nUmVnaW9uSWQgPSBwcm9wcy5hY2NlcHRpbmdSZWdpb25JZDtcbiAgICAgICAgdGhpcy5kZWxldGlvbkZvcmNlID0gcHJvcHMuZGVsZXRpb25Gb3JjZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjY2VwdGluZ1ZwY0lkOiB0aGlzLmFjY2VwdGluZ1ZwY0lkLFxuICAgICAgICAgICAgdnBjSWQ6IHRoaXMudnBjSWQsXG4gICAgICAgICAgICBhY2NlcHRpbmdBbGlVaWQ6IHRoaXMuYWNjZXB0aW5nQWxpVWlkLFxuICAgICAgICAgICAgYWNjZXB0aW5nUmVnaW9uSWQ6IHRoaXMuYWNjZXB0aW5nUmVnaW9uSWQsXG4gICAgICAgICAgICBkZWxldGlvbkZvcmNlOiB0aGlzLmRlbGV0aW9uRm9yY2UsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVnBjUGVlckNvbm5lY3Rpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6VnBuQ29ubmVjdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NWcG5Db25uZWN0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbWVyR2F0ZXdheUlkOiBUaGUgSUQgb2YgdGhlIHVzZXIgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjdXN0b21lckdhdGV3YXlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvY2FsU3VibmV0OiBBIG5ldHdvcmsgc2VnbWVudCBvbiB0aGUgVlBDIHNpZGUgdGhhdCBuZWVkcyB0byBiZSBpbnRlcmNvbm5lY3RlZCB3aXRoIHRoZSBsb2NhbCBJREMgZm9yIHRoZSBzZWNvbmQgcGhhc2UgbmVnb3RpYXRpb24uXG4gICAgICogTXVsdGlwbGUgbmV0d29yayBzZWdtZW50cyBhcmUgc2VwYXJhdGVkIGJ5IGNvbW1hcywgZm9yIGV4YW1wbGU6IDE5Mi4xNjguMS4wLzI0LCAxOTIuMTY4LjIuMC8yNC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2NhbFN1Ym5ldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbW90ZVN1Ym5ldDogVGhlIG5ldHdvcmsgc2VnbWVudCBvZiB0aGUgbG9jYWwgSURDIGlzIHVzZWQgZm9yIHRoZSBzZWNvbmQgcGhhc2UgbmVnb3RpYXRpb24uXG4gICAgICogTXVsdGlwbGUgbmV0d29yayBzZWdtZW50cyBhcmUgc2VwYXJhdGVkIGJ5IGNvbW1hcywgZm9yIGV4YW1wbGU6IDE5Mi4xNjguMy4wLzI0LCAxOTIuMTY4LjQuMC8yNC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW1vdGVTdWJuZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cG5HYXRld2F5SWQ6IElEIG9mIHRoZSBWUE4gZ2F0ZXdheS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cG5HYXRld2F5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlZmZlY3RJbW1lZGlhdGVseTogV2hldGhlciB0byBkZWxldGUgdGhlIGN1cnJlbnRseSBuZWdvdGlhdGVkIElQc2VjIHR1bm5lbCBhbmQgcmUtaW5pdGlhdGUgdGhlIG5lZ290aWF0aW9uLiBWYWx1ZTpcbiAgICAgKiBUcnVlOiBOZWdvdGlhdGUgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGNvbmZpZ3VyYXRpb24gaXMgY29tcGxldGUuXG4gICAgICogRmFsc2UgKGRlZmF1bHQpOiBOZWdvdGlhdGUgd2hlbiB0cmFmZmljIGVudGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBlZmZlY3RJbW1lZGlhdGVseT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaGVhbHRoQ2hlY2tDb25maWc6IFdoZXRoZXIgdG8gZW5hYmxlIHRoZSBoZWFsdGggY2hlY2sgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBoZWFsdGhDaGVja0NvbmZpZz86IFJvc1ZwbkNvbm5lY3Rpb24uSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpa2VDb25maWc6IENvbmZpZ3VyYXRpb24gaW5mb3JtYXRpb24gZm9yIHRoZSBmaXJzdCBwaGFzZSBvZiBuZWdvdGlhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBpa2VDb25maWc/OiBSb3NWcG5Db25uZWN0aW9uLklrZUNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlwc2VjQ29uZmlnOiBDb25maWd1cmF0aW9uIGluZm9ybWF0aW9uIGZvciB0aGUgc2Vjb25kIHBoYXNlIG5lZ290aWF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlwc2VjQ29uZmlnPzogUm9zVnBuQ29ubmVjdGlvbi5JcHNlY0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBJUHNlYyBjb25uZWN0aW9uLlxuICAgICAqIFRoZSBsZW5ndGggaXMgMi0xMjggY2hhcmFjdGVycyBhbmQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UuIEl0IGNhbiBjb250YWluIG51bWJlcnMsIHBlcmlvZHMgKC4pLCB1bmRlcnNjb3JlcyAoXykgYW5kIGRhc2hlcyAoLSksIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vIC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1ZwbkNvbm5lY3Rpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVnBuQ29ubmVjdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1ZwbkNvbm5lY3Rpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2FsU3VibmV0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxvY2FsU3VibmV0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2NhbFN1Ym5ldCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2NhbFN1Ym5ldCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZWZmZWN0SW1tZWRpYXRlbHknLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmVmZmVjdEltbWVkaWF0ZWx5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW1vdGVTdWJuZXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVtb3RlU3VibmV0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZW1vdGVTdWJuZXQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVtb3RlU3VibmV0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjdXN0b21lckdhdGV3YXlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jdXN0b21lckdhdGV3YXlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3VzdG9tZXJHYXRld2F5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY3VzdG9tZXJHYXRld2F5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwbkdhdGV3YXlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52cG5HYXRld2F5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwbkdhdGV3YXlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cG5HYXRld2F5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwc2VjQ29uZmlnJywgUm9zVnBuQ29ubmVjdGlvbl9JcHNlY0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmlwc2VjQ29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdoZWFsdGhDaGVja0NvbmZpZycsIFJvc1ZwbkNvbm5lY3Rpb25fSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5oZWFsdGhDaGVja0NvbmZpZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWtlQ29uZmlnJywgUm9zVnBuQ29ubmVjdGlvbl9Ja2VDb25maWdQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5pa2VDb25maWcpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5uYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDEyOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1ZwbkNvbm5lY3Rpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpWcG5Db25uZWN0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NWcG5Db25uZWN0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6VnBuQ29ubmVjdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NWcG5Db25uZWN0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NWcG5Db25uZWN0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ3VzdG9tZXJHYXRld2F5SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3VzdG9tZXJHYXRld2F5SWQpLFxuICAgICAgTG9jYWxTdWJuZXQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9jYWxTdWJuZXQpLFxuICAgICAgUmVtb3RlU3VibmV0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlbW90ZVN1Ym5ldCksXG4gICAgICBWcG5HYXRld2F5SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBuR2F0ZXdheUlkKSxcbiAgICAgIEVmZmVjdEltbWVkaWF0ZWx5OiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lZmZlY3RJbW1lZGlhdGVseSksXG4gICAgICBIZWFsdGhDaGVja0NvbmZpZzogcm9zVnBuQ29ubmVjdGlvbkhlYWx0aENoZWNrQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaGVhbHRoQ2hlY2tDb25maWcpLFxuICAgICAgSWtlQ29uZmlnOiByb3NWcG5Db25uZWN0aW9uSWtlQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWtlQ29uZmlnKSxcbiAgICAgIElwc2VjQ29uZmlnOiByb3NWcG5Db25uZWN0aW9uSXBzZWNDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pcHNlY0NvbmZpZyksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlZQQzo6VnBuQ29ubmVjdGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1ZwbkNvbm5lY3Rpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlZQQzo6VnBuQ29ubmVjdGlvblwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBlZXJWcG5Db25uZWN0aW9uQ29uZmlnOiBQZWVyIHZwYyBjb25uZWN0aW9uIGNvbmZpZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBlZXJWcG5Db25uZWN0aW9uQ29uZmlnOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFN0YXR1czogU3RhdHVzIG9mIHRoZSBJUHNlYyBjb25uZWN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3RhdHVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZwbkNvbm5lY3Rpb25JZDogSUQgb2YgdGhlIElQc2VjIGNvbm5lY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcG5Db25uZWN0aW9uSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGN1c3RvbWVyR2F0ZXdheUlkOiBUaGUgSUQgb2YgdGhlIHVzZXIgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY3VzdG9tZXJHYXRld2F5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2NhbFN1Ym5ldDogQSBuZXR3b3JrIHNlZ21lbnQgb24gdGhlIFZQQyBzaWRlIHRoYXQgbmVlZHMgdG8gYmUgaW50ZXJjb25uZWN0ZWQgd2l0aCB0aGUgbG9jYWwgSURDIGZvciB0aGUgc2Vjb25kIHBoYXNlIG5lZ290aWF0aW9uLlxuICAgICAqIE11bHRpcGxlIG5ldHdvcmsgc2VnbWVudHMgYXJlIHNlcGFyYXRlZCBieSBjb21tYXMsIGZvciBleGFtcGxlOiAxOTIuMTY4LjEuMC8yNCwgMTkyLjE2OC4yLjAvMjQuXG4gICAgICovXG4gICAgcHVibGljIGxvY2FsU3VibmV0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVtb3RlU3VibmV0OiBUaGUgbmV0d29yayBzZWdtZW50IG9mIHRoZSBsb2NhbCBJREMgaXMgdXNlZCBmb3IgdGhlIHNlY29uZCBwaGFzZSBuZWdvdGlhdGlvbi5cbiAgICAgKiBNdWx0aXBsZSBuZXR3b3JrIHNlZ21lbnRzIGFyZSBzZXBhcmF0ZWQgYnkgY29tbWFzLCBmb3IgZXhhbXBsZTogMTkyLjE2OC4zLjAvMjQsIDE5Mi4xNjguNC4wLzI0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdGVTdWJuZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cG5HYXRld2F5SWQ6IElEIG9mIHRoZSBWUE4gZ2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdnBuR2F0ZXdheUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWZmZWN0SW1tZWRpYXRlbHk6IFdoZXRoZXIgdG8gZGVsZXRlIHRoZSBjdXJyZW50bHkgbmVnb3RpYXRlZCBJUHNlYyB0dW5uZWwgYW5kIHJlLWluaXRpYXRlIHRoZSBuZWdvdGlhdGlvbi4gVmFsdWU6XG4gICAgICogVHJ1ZTogTmVnb3RpYXRlIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBjb25maWd1cmF0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqIEZhbHNlIChkZWZhdWx0KTogTmVnb3RpYXRlIHdoZW4gdHJhZmZpYyBlbnRlcnMuXG4gICAgICovXG4gICAgcHVibGljIGVmZmVjdEltbWVkaWF0ZWx5OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhlYWx0aENoZWNrQ29uZmlnOiBXaGV0aGVyIHRvIGVuYWJsZSB0aGUgaGVhbHRoIGNoZWNrIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGhlYWx0aENoZWNrQ29uZmlnOiBSb3NWcG5Db25uZWN0aW9uLkhlYWx0aENoZWNrQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaWtlQ29uZmlnOiBDb25maWd1cmF0aW9uIGluZm9ybWF0aW9uIGZvciB0aGUgZmlyc3QgcGhhc2Ugb2YgbmVnb3RpYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGlrZUNvbmZpZzogUm9zVnBuQ29ubmVjdGlvbi5Ja2VDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpcHNlY0NvbmZpZzogQ29uZmlndXJhdGlvbiBpbmZvcm1hdGlvbiBmb3IgdGhlIHNlY29uZCBwaGFzZSBuZWdvdGlhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXBzZWNDb25maWc6IFJvc1ZwbkNvbm5lY3Rpb24uSXBzZWNDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgSVBzZWMgY29ubmVjdGlvbi5cbiAgICAgKiBUaGUgbGVuZ3RoIGlzIDItMTI4IGNoYXJhY3RlcnMgYW5kIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlLiBJdCBjYW4gY29udGFpbiBudW1iZXJzLCBwZXJpb2RzICguKSwgdW5kZXJzY29yZXMgKF8pIGFuZCBkYXNoZXMgKC0pLCBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLyAuXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpWUEM6OlZwbkNvbm5lY3Rpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1ZwbkNvbm5lY3Rpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1ZwbkNvbm5lY3Rpb24uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clBlZXJWcG5Db25uZWN0aW9uQ29uZmlnID0gdGhpcy5nZXRBdHQoJ1BlZXJWcG5Db25uZWN0aW9uQ29uZmlnJyk7XG4gICAgICAgIHRoaXMuYXR0clN0YXR1cyA9IHRoaXMuZ2V0QXR0KCdTdGF0dXMnKTtcbiAgICAgICAgdGhpcy5hdHRyVnBuQ29ubmVjdGlvbklkID0gdGhpcy5nZXRBdHQoJ1ZwbkNvbm5lY3Rpb25JZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jdXN0b21lckdhdGV3YXlJZCA9IHByb3BzLmN1c3RvbWVyR2F0ZXdheUlkO1xuICAgICAgICB0aGlzLmxvY2FsU3VibmV0ID0gcHJvcHMubG9jYWxTdWJuZXQ7XG4gICAgICAgIHRoaXMucmVtb3RlU3VibmV0ID0gcHJvcHMucmVtb3RlU3VibmV0O1xuICAgICAgICB0aGlzLnZwbkdhdGV3YXlJZCA9IHByb3BzLnZwbkdhdGV3YXlJZDtcbiAgICAgICAgdGhpcy5lZmZlY3RJbW1lZGlhdGVseSA9IHByb3BzLmVmZmVjdEltbWVkaWF0ZWx5O1xuICAgICAgICB0aGlzLmhlYWx0aENoZWNrQ29uZmlnID0gcHJvcHMuaGVhbHRoQ2hlY2tDb25maWc7XG4gICAgICAgIHRoaXMuaWtlQ29uZmlnID0gcHJvcHMuaWtlQ29uZmlnO1xuICAgICAgICB0aGlzLmlwc2VjQ29uZmlnID0gcHJvcHMuaXBzZWNDb25maWc7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VzdG9tZXJHYXRld2F5SWQ6IHRoaXMuY3VzdG9tZXJHYXRld2F5SWQsXG4gICAgICAgICAgICBsb2NhbFN1Ym5ldDogdGhpcy5sb2NhbFN1Ym5ldCxcbiAgICAgICAgICAgIHJlbW90ZVN1Ym5ldDogdGhpcy5yZW1vdGVTdWJuZXQsXG4gICAgICAgICAgICB2cG5HYXRld2F5SWQ6IHRoaXMudnBuR2F0ZXdheUlkLFxuICAgICAgICAgICAgZWZmZWN0SW1tZWRpYXRlbHk6IHRoaXMuZWZmZWN0SW1tZWRpYXRlbHksXG4gICAgICAgICAgICBoZWFsdGhDaGVja0NvbmZpZzogdGhpcy5oZWFsdGhDaGVja0NvbmZpZyxcbiAgICAgICAgICAgIGlrZUNvbmZpZzogdGhpcy5pa2VDb25maWcsXG4gICAgICAgICAgICBpcHNlY0NvbmZpZzogdGhpcy5pcHNlY0NvbmZpZyxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVnBuQ29ubmVjdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1ZwbkNvbm5lY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEhlYWx0aENoZWNrQ29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVuYWJsZTpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVuYWJsZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGlwOlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGlwPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZXRyeTpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJldHJ5PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNpcDpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNpcD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbnRlcnZhbDpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGludGVydmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NWcG5Db25uZWN0aW9uX0hlYWx0aENoZWNrQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGUnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmVuYWJsZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlwJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5kaXApKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JldHJ5Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnJldHJ5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzaXAnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2lwKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcnZhbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbnRlcnZhbCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJIZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlZwbkNvbm5lY3Rpb24uSGVhbHRoQ2hlY2tDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEhlYWx0aENoZWNrQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6VnBuQ29ubmVjdGlvbi5IZWFsdGhDaGVja0NvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NWcG5Db25uZWN0aW9uSGVhbHRoQ2hlY2tDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zVnBuQ29ubmVjdGlvbl9IZWFsdGhDaGVja0NvbmZpZ1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgRW5hYmxlOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGUpLFxuICAgICAgRGlwOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaXApLFxuICAgICAgUmV0cnk6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmV0cnkpLFxuICAgICAgU2lwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNpcCksXG4gICAgICBJbnRlcnZhbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcnZhbCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NWcG5Db25uZWN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBJa2VDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaWtlQXV0aEFsZzogVGhlIGF1dGhlbnRpY2F0aW9uIGFsZ29yaXRobSBuZWdvdGlhdGVkIGluIHRoZSBmaXJzdCBwaGFzZSwgdGhlIHZhbHVlIGlzIG1kNXxzaGExLCBhbmQgdGhlIGRlZmF1bHQgdmFsdWUgaXMgbWQ1LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaWtlQXV0aEFsZz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpa2VFbmNBbGc6IFRoZSBlbmNyeXB0aW9uIGFsZ29yaXRobSBuZWdvdGlhdGVkIGluIHRoZSBmaXJzdCBwaGFzZSwgdmFsdWU6IGFlc3xhZXMxOTJ8YWVzMjU2fGRlc3wzZGVzLCBkZWZhdWx0IHZhbHVlOiBhZXMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpa2VFbmNBbGc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbG9jYWxJZElQc2VjOiBJRCBvZiB0aGUgVlBOIGdhdGV3YXkuIFRoZSBsZW5ndGggaXMgbGltaXRlZCB0byAxMDAgY2hhcmFjdGVycy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgdGhlIHB1YmxpYyBJUCBhZGRyZXNzIG9mIHRoZSBWUE4gZ2F0ZXdheS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvY2FsSWRJUHNlYz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpa2VWZXJzaW9uOiBUaGUgdmVyc2lvbiBvZiB0aGUgSUtFIHByb3RvY29sLiBWYWx1ZTogaWtldjF8aWtldjIsIGRlZmF1bHQ6IGlrZXYxLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaWtlVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpa2VNb2RlOiBOZWdvdGlhdGlvbiBtb2RlIGZvciBJS0UgVjEuIFZhbHVlOiBtYWlufGFnZ3Jlc3NpdmUsIGRlZmF1bHQ6IG1haW4uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpa2VNb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlrZUxpZmV0aW1lOiBUaGUgbGlmZSBjeWNsZSBvZiB0aGUgU0EgbmVnb3RpYXRlZCBpbiB0aGUgZmlyc3QgcGhhc2UuIFRoZSB2YWx1ZSByYW5nZXMgZnJvbSAwIHRvIDg2NDAwLCBpbiBzZWNvbmRzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA4NjQwMC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlrZUxpZmV0aW1lPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlbW90ZUlkOiBJRCBvZiB0aGUgdXNlciBnYXRld2F5LiBUaGUgbGVuZ3RoIGlzIGxpbWl0ZWQgdG8gMTAwIGNoYXJhY3RlcnMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRoZSBwdWJsaWMgSVAgYWRkcmVzcyBvZiB0aGUgdXNlciBnYXRld2F5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVtb3RlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHNrOiBVc2VkIGZvciBpZGVudGl0eSBhdXRoZW50aWNhdGlvbiBiZXR3ZWVuIHRoZSBJUHNlYyBWUE4gZ2F0ZXdheSBhbmQgdGhlIHVzZXIgZ2F0ZXdheS4gSXQgaXMgZ2VuZXJhdGVkIHJhbmRvbWx5IGJ5IGRlZmF1bHQsIG9yIHlvdSBjYW4gc3BlY2lmeSB0aGUga2V5IG1hbnVhbGx5LiBUaGUgbGVuZ3RoIGlzIGxpbWl0ZWQgdG8gMTAwIGNoYXJhY3RlcnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwc2s/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaWtlUGZzOiBEaWZmaWUtSGVsbG1hbiBrZXkgZXhjaGFuZ2UgYWxnb3JpdGhtIHVzZWQgaW4gdGhlIGZpcnN0IHBoYXNlIG5lZ290aWF0aW9uLiBWYWx1ZTogZ3JvdXAxfGdyb3VwMnxncm91cDV8Z3JvdXAxNHxncm91cDI0LCBkZWZhdWx0IHZhbHVlOiBncm91cDIuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpa2VQZnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBJa2VDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSWtlQ29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVnBuQ29ubmVjdGlvbl9Ja2VDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmlrZUF1dGhBbGcgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmlrZUF1dGhBbGcpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lrZUF1dGhBbGcnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pa2VBdXRoQWxnLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIm1kNVwiLFwic2hhMVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lrZUF1dGhBbGcnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWtlQXV0aEFsZykpO1xuICAgIGlmKHByb3BlcnRpZXMuaWtlRW5jQWxnICYmICh0eXBlb2YgcHJvcGVydGllcy5pa2VFbmNBbGcpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lrZUVuY0FsZycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmlrZUVuY0FsZyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJhZXNcIixcImFlczE5MlwiLFwiYWVzMjU2XCIsXCJkZXNcIixcIjNkZXNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpa2VFbmNBbGcnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWtlRW5jQWxnKSk7XG4gICAgaWYocHJvcGVydGllcy5sb2NhbElkSVBzZWMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5sb2NhbElkSVBzZWMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5sb2NhbElkSVBzZWMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2NhbElkSVBzZWMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubG9jYWxJZElQc2VjLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvY2FsSWRJUHNlYycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2NhbElkSVBzZWMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmlrZVZlcnNpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmlrZVZlcnNpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lrZVZlcnNpb24nLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pa2VWZXJzaW9uLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImlrZXYxXCIsXCJpa2V2MlwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lrZVZlcnNpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWtlVmVyc2lvbikpO1xuICAgIGlmKHByb3BlcnRpZXMuaWtlTW9kZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaWtlTW9kZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWtlTW9kZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmlrZU1vZGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wibWFpblwiLFwiYWdncmVzc2l2ZVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lrZU1vZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWtlTW9kZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuaWtlTGlmZXRpbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmlrZUxpZmV0aW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpa2VMaWZldGltZScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmlrZUxpZmV0aW1lLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiA4NjQwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWtlTGlmZXRpbWUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaWtlTGlmZXRpbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlbW90ZUlkICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMucmVtb3RlSWQpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5yZW1vdGVJZCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbW90ZUlkJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlbW90ZUlkLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbW90ZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlbW90ZUlkKSk7XG4gICAgaWYocHJvcGVydGllcy5wc2sgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5wc2spIHx8ICh0eXBlb2YgcHJvcGVydGllcy5wc2spID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwc2snLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHNrLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BzaycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wc2spKTtcbiAgICBpZihwcm9wZXJ0aWVzLmlrZVBmcyAmJiAodHlwZW9mIHByb3BlcnRpZXMuaWtlUGZzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpa2VQZnMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pa2VQZnMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiZ3JvdXAxXCIsXCJncm91cDJcIixcImdyb3VwNVwiLFwiZ3JvdXAxNFwiLFwiZ3JvdXAyNFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lrZVBmcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pa2VQZnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSWtlQ29uZmlnUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6VnBuQ29ubmVjdGlvbi5Ja2VDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYElrZUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlZwbkNvbm5lY3Rpb24uSWtlQ29uZmlnYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1ZwbkNvbm5lY3Rpb25Ja2VDb25maWdQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zVnBuQ29ubmVjdGlvbl9Ja2VDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIElrZUF1dGhBbGc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWtlQXV0aEFsZyksXG4gICAgICBJa2VFbmNBbGc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWtlRW5jQWxnKSxcbiAgICAgIExvY2FsSWRJUHNlYzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2NhbElkSVBzZWMpLFxuICAgICAgSWtlVmVyc2lvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pa2VWZXJzaW9uKSxcbiAgICAgIElrZU1vZGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWtlTW9kZSksXG4gICAgICBJa2VMaWZldGltZTogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pa2VMaWZldGltZSksXG4gICAgICBSZW1vdGVJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZW1vdGVJZCksXG4gICAgICBQc2s6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHNrKSxcbiAgICAgIElrZVBmczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pa2VQZnMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zVnBuQ29ubmVjdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSXBzZWNDb25maWdQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaXBzZWNQZnM6IEZvcndhcmRzIGFsbCBwcm90b2NvbCBwYWNrZXRzLiBUaGUgRGlmZmllLUhlbGxtYW4ga2V5IGV4Y2hhbmdlIGFsZ29yaXRobSB1c2VkIGluIHRoZSBmaXJzdCBwaGFzZSBuZWdvdGlhdGlvbiwgdGhlIHZhbHVlOiBncm91cDF8Z3JvdXAyfGdyb3VwNXxncm91cDE0fGdyb3VwMjQsIGRlZmF1bHQgdmFsdWU6IGdyb3VwMi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlwc2VjUGZzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlwc2VjRW5jQWxnOiBFbmNyeXB0aW9uIGFsZ29yaXRobSBuZWdvdGlhdGVkIGluIHRoZSBzZWNvbmQgcGhhc2UuIFZhbHVlOiBhZXN8YWVzMTkyfGFlczI1NnxkZXN8M2RlcywgZGVmYXVsdCB2YWx1ZTogYWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaXBzZWNFbmNBbGc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaXBzZWNBdXRoQWxnOiBBdXRoZW50aWNhdGlvbiBhbGdvcml0aG0gbmVnb3RpYXRlZCBpbiB0aGUgc2Vjb25kIHBoYXNlLiBWYWx1ZTogbWQ1fHNoYTEsIGRlZmF1bHQgdmFsdWU6IG1kNS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlwc2VjQXV0aEFsZz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpcHNlY0xpZmV0aW1lOiBJcHNlY0xpZmV0aW1lOiBUaGUgbGlmZSBjeWNsZSBvZiB0aGUgU0EgbmVnb3RpYXRlZCBpbiB0aGUgc2Vjb25kIHBoYXNlLiBUaGUgdmFsdWUgcmFuZ2VzIGZyb20gMCB0byA4NjQwMCwgaW4gc2Vjb25kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgODY0MDAuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpcHNlY0xpZmV0aW1lPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSXBzZWNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSXBzZWNDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NWcG5Db25uZWN0aW9uX0lwc2VjQ29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5pcHNlY1BmcyAmJiAodHlwZW9mIHByb3BlcnRpZXMuaXBzZWNQZnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwc2VjUGZzJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaXBzZWNQZnMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiZ3JvdXAxXCIsXCJncm91cDJcIixcImdyb3VwNVwiLFwiZ3JvdXAxNFwiLFwiZ3JvdXAyNFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwc2VjUGZzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlwc2VjUGZzKSk7XG4gICAgaWYocHJvcGVydGllcy5pcHNlY0VuY0FsZyAmJiAodHlwZW9mIHByb3BlcnRpZXMuaXBzZWNFbmNBbGcpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwc2VjRW5jQWxnJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaXBzZWNFbmNBbGcsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiYWVzXCIsXCJhZXMxOTJcIixcImFlczI1NlwiLFwiZGVzXCIsXCIzZGVzXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXBzZWNFbmNBbGcnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaXBzZWNFbmNBbGcpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmlwc2VjQXV0aEFsZyAmJiAodHlwZW9mIHByb3BlcnRpZXMuaXBzZWNBdXRoQWxnKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcHNlY0F1dGhBbGcnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pcHNlY0F1dGhBbGcsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wibWQ1XCIsXCJzaGExXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXBzZWNBdXRoQWxnJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlwc2VjQXV0aEFsZykpO1xuICAgIGlmKHByb3BlcnRpZXMuaXBzZWNMaWZldGltZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaXBzZWNMaWZldGltZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXBzZWNMaWZldGltZScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmlwc2VjTGlmZXRpbWUsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDg2NDAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcHNlY0xpZmV0aW1lJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmlwc2VjTGlmZXRpbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSXBzZWNDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpWcG5Db25uZWN0aW9uLklwc2VjQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJcHNlY0NvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlZwbkNvbm5lY3Rpb24uSXBzZWNDb25maWdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVnBuQ29ubmVjdGlvbklwc2VjQ29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1ZwbkNvbm5lY3Rpb25fSXBzZWNDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIElwc2VjUGZzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlwc2VjUGZzKSxcbiAgICAgIElwc2VjRW5jQWxnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlwc2VjRW5jQWxnKSxcbiAgICAgIElwc2VjQXV0aEFsZzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pcHNlY0F1dGhBbGcpLFxuICAgICAgSXBzZWNMaWZldGltZTogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pcHNlY0xpZmV0aW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpWcG5HYXRld2F5YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1ZwbkdhdGV3YXlQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoOiBUaGUgcHVibGljIG5ldHdvcmsgYmFuZHdpZHRoIG9mIHRoZSBWUE4gZ2F0ZXdheSwgaW4gTWJwcy5cbiAgICAgKiBWYWx1ZTogNXwxMHwyMHw1MHwxMDB8MjAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhbmR3aWR0aDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBWUEMgSUQgdG8gd2hpY2ggdGhlIFZQTiBnYXRld2F5IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvUGF5OiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgcGF5IHRoZSBiaWxsIG9mIHRoZSBWUE4gZ2F0ZXdheSwgdGhlIHZhbHVlOlxuICAgICAqIHRydWU6IEF1dG9tYXRpY2FsbHkgcGF5cyB0aGUgYmlsbCBmb3IgdGhlIFZQTiBnYXRld2F5LlxuICAgICAqIGZhbHNlOiBEb2VzIG5vdCBhdXRvbWF0aWNhbGx5IHBheSB0aGUgYmlsbCBmb3IgdGhlIFZQTiBnYXRld2F5LlxuICAgICAqIERlZmF1bHQgdHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUGF5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIFZQTiBnYXRld2F5LlxuICAgICAqIFRoZSBsZW5ndGggaXMgMi0yNTYgY2hhcmFjdGVycyBhbmQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UsIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZUlwc2VjOiBXaGV0aGVyIHRvIGVuYWJsZSBJUHNlYy1WUE4uIFRoZSBJUHNlYy1WUE4gZmVhdHVyZSBwcm92aWRlcyBhIHNpdGUtdG8tc2l0ZSBjb25uZWN0aW9uLiBZb3UgY2FuIHNlY3VyZWx5IGNvbm5lY3QgeW91ciBsb2NhbCBkYXRhIGNlbnRlciBuZXR3b3JrIHRvIGEgcHJpdmF0ZSBuZXR3b3JrIG9yIHR3byBwcm9wcmlldGFyeSBuZXR3b3JrcyBieSBjcmVhdGluZyBhbiBJUHNlYyB0dW5uZWwuIFZhbHVlOlxuICAgICAqIFRydWUgKGRlZmF1bHQpOiBFbmFibGVzIHRoZSBJUHNlYy1WUE4gZmVhdHVyZS5cbiAgICAgKiBGYWxzZTogVGhlIElQc2VjLVZQTiBmdW5jdGlvbiBpcyBub3QgZW5hYmxlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVJcHNlYz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlU3NsOiBFbmFibGUgdGhlIFNTTC1WUE4gZnVuY3Rpb24uIFByb3ZpZGUgcG9pbnQtdG8tc2l0ZSBWUE4gY29ubmVjdGlvbiwgbm8gbmVlZCB0byBjb25maWd1cmUgY3VzdG9tZXIgZ2F0ZXdheSwgdGVybWluYWwgZGlyZWN0bHkgYWNjZXNzLiBWYWx1ZTpcbiAgICAgKiBUcnVlOiBFbmFibGUgU1NMLVZQTi5cbiAgICAgKiBGYWxzZSAoZGVmYXVsdCk6IERvZXMgbm90IGVuYWJsZSBTU0wtVlBOLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZVNzbD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBBY2NvdW50aW5nIHR5cGUgb2YgdGhlIFZQTiBnYXRld2F5LCB0aGUgdmFsdWUgaXM6XG4gICAgICogUFJFUEFZLCBQT1NUUEFZXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VDaGFyZ2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IE5hbWUgb2YgdGhlIFZQTiBnYXRld2F5LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB0aGUgSUQgb2YgdGhlIFZQTiBnYXRld2F5LlxuICAgICAqIFRoZSBsZW5ndGggaXMgMn4xMDAgRW5nbGlzaCBvciBDaGluZXNlIGNoYXJhY3RlcnMuIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxhcmdlIG9yIHNtYWxsIGxldHRlciBvciBDaGluZXNlLiBJdCBjYW4gY29udGFpbiBudW1iZXJzLCB1bmRlcnNjb3JlcyAoXykgYW5kIGRhc2hlcyAoLSkuIEl0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJpb2Q6IFB1cmNoYXNlIHRpbWUsIHZhbHVlOiAxfjl8MTJ8MjR8MzYuXG4gICAgICogV2hlbiB0aGUgdmFsdWUgb2YgdGhlIEluc3RhbmNlQ2hhcmdlVHlwZSBwYXJhbWV0ZXIgaXMgUFJFUEFZLCB0aGlzIHBhcmFtZXRlciBpcyBtYW5kYXRvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNzbENvbm5lY3Rpb25zOiBUaGUgbWF4aW11bSBudW1iZXIgb2YgY2xpZW50cyBhbGxvd2VkIHRvIGNvbm5lY3QgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzc2xDb25uZWN0aW9ucz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NWcG5HYXRld2F5LlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIElEIG9mIHRoZSBWU3dpdGNoIHRvIHdoaWNoIHRoZSBWUE4gZ2F0ZXdheSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NWcG5HYXRld2F5UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZwbkdhdGV3YXlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NWcG5HYXRld2F5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVJcHNlYycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZW5hYmxlSXBzZWMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZVNzbCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZW5hYmxlU3NsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzc2xDb25uZWN0aW9ucycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5zc2xDb25uZWN0aW9ucykpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVzY3JpcHRpb24gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5kZXNjcmlwdGlvbikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGVzY3JpcHRpb24ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiAyNTYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuaW5zdGFuY2VDaGFyZ2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUNoYXJnZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZUNoYXJnZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUE9TVFBBWVwiLFwiUFJFUEFZXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VDaGFyZ2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlQ2hhcmdlVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFuZHdpZHRoJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJhbmR3aWR0aCkpO1xuICAgIGlmKHByb3BlcnRpZXMuYmFuZHdpZHRoICYmICh0eXBlb2YgcHJvcGVydGllcy5iYW5kd2lkdGgpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhbmR3aWR0aCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmJhbmR3aWR0aCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbNSwxMCwyMCw1MCwxMDAsMjAwXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhbmR3aWR0aCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5iYW5kd2lkdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52U3dpdGNoSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBlcmlvZCAmJiAodHlwZW9mIHByb3BlcnRpZXMucGVyaW9kKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2QnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wZXJpb2QsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogWzEsMiwzLDQsNSw2LDcsOCw5LDEyLDI0LDM2XSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wZXJpb2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2F1dG9QYXknLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmF1dG9QYXkpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YWdzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFncy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MubGlzdFZhbGlkYXRvcihSb3NWcG5HYXRld2F5X1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMudGFncykpO1xuICAgIGlmKHByb3BlcnRpZXMubmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5uYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5uYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMixcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVnBuR2F0ZXdheVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlZwbkdhdGV3YXlgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZwbkdhdGV3YXlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpWcG5HYXRld2F5YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1ZwbkdhdGV3YXlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1ZwbkdhdGV3YXlQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBCYW5kd2lkdGg6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYmFuZHdpZHRoKSxcbiAgICAgIFZwY0lkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZwY0lkKSxcbiAgICAgIEF1dG9QYXk6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmF1dG9QYXkpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgRW5hYmxlSXBzZWM6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZUlwc2VjKSxcbiAgICAgIEVuYWJsZVNzbDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5hYmxlU3NsKSxcbiAgICAgIEluc3RhbmNlQ2hhcmdlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZUNoYXJnZVR5cGUpLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICAgIFBlcmlvZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wZXJpb2QpLFxuICAgICAgU3NsQ29ubmVjdGlvbnM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3NsQ29ubmVjdGlvbnMpLFxuICAgICAgVGFnczogcm9zLmxpc3RNYXBwZXIocm9zVnBuR2F0ZXdheVRhZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGFncyksXG4gICAgICBWU3dpdGNoSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudlN3aXRjaElkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OlZwbkdhdGV3YXlgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NWcG5HYXRld2F5IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OlZwbkdhdGV3YXlcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbnRlcm5ldElwOiBUaGUgcHVibGljIElQIGFkZHJlc3Mgb2YgdGhlIFZQTiBnYXRld2F5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW50ZXJuZXRJcDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBPcmRlcklkOiBUaGUgb3JkZXIgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNwZWM6IFRoZSBzcGVjaWZpY2F0aW9uIG9mIHRoZSBWUE4gZ2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNwZWM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU3NsTWF4Q29ubmVjdGlvbnM6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBjb25jdXJyZW50IFNTTC1WUE4gY29ubmVjdGlvbnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTc2xNYXhDb25uZWN0aW9uczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWcG5HYXRld2F5SWQ6IElEIG9mIHRoZSBWUE4gZ2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwbkdhdGV3YXlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoOiBUaGUgcHVibGljIG5ldHdvcmsgYmFuZHdpZHRoIG9mIHRoZSBWUE4gZ2F0ZXdheSwgaW4gTWJwcy5cbiAgICAgKiBWYWx1ZTogNXwxMHwyMHw1MHwxMDB8MjAwLlxuICAgICAqL1xuICAgIHB1YmxpYyBiYW5kd2lkdGg6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cGNJZDogVlBDIElEIHRvIHdoaWNoIHRoZSBWUE4gZ2F0ZXdheSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9QYXk6IFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBwYXkgdGhlIGJpbGwgb2YgdGhlIFZQTiBnYXRld2F5LCB0aGUgdmFsdWU6XG4gICAgICogdHJ1ZTogQXV0b21hdGljYWxseSBwYXlzIHRoZSBiaWxsIGZvciB0aGUgVlBOIGdhdGV3YXkuXG4gICAgICogZmFsc2U6IERvZXMgbm90IGF1dG9tYXRpY2FsbHkgcGF5IHRoZSBiaWxsIGZvciB0aGUgVlBOIGdhdGV3YXkuXG4gICAgICogRGVmYXVsdCB0cnVlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhdXRvUGF5OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgVlBOIGdhdGV3YXkuXG4gICAgICogVGhlIGxlbmd0aCBpcyAyLTI1NiBjaGFyYWN0ZXJzIGFuZCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSwgYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlSXBzZWM6IFdoZXRoZXIgdG8gZW5hYmxlIElQc2VjLVZQTi4gVGhlIElQc2VjLVZQTiBmZWF0dXJlIHByb3ZpZGVzIGEgc2l0ZS10by1zaXRlIGNvbm5lY3Rpb24uIFlvdSBjYW4gc2VjdXJlbHkgY29ubmVjdCB5b3VyIGxvY2FsIGRhdGEgY2VudGVyIG5ldHdvcmsgdG8gYSBwcml2YXRlIG5ldHdvcmsgb3IgdHdvIHByb3ByaWV0YXJ5IG5ldHdvcmtzIGJ5IGNyZWF0aW5nIGFuIElQc2VjIHR1bm5lbC4gVmFsdWU6XG4gICAgICogVHJ1ZSAoZGVmYXVsdCk6IEVuYWJsZXMgdGhlIElQc2VjLVZQTiBmZWF0dXJlLlxuICAgICAqIEZhbHNlOiBUaGUgSVBzZWMtVlBOIGZ1bmN0aW9uIGlzIG5vdCBlbmFibGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVJcHNlYzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVTc2w6IEVuYWJsZSB0aGUgU1NMLVZQTiBmdW5jdGlvbi4gUHJvdmlkZSBwb2ludC10by1zaXRlIFZQTiBjb25uZWN0aW9uLCBubyBuZWVkIHRvIGNvbmZpZ3VyZSBjdXN0b21lciBnYXRld2F5LCB0ZXJtaW5hbCBkaXJlY3RseSBhY2Nlc3MuIFZhbHVlOlxuICAgICAqIFRydWU6IEVuYWJsZSBTU0wtVlBOLlxuICAgICAqIEZhbHNlIChkZWZhdWx0KTogRG9lcyBub3QgZW5hYmxlIFNTTC1WUE4uXG4gICAgICovXG4gICAgcHVibGljIGVuYWJsZVNzbDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUNoYXJnZVR5cGU6IEFjY291bnRpbmcgdHlwZSBvZiB0aGUgVlBOIGdhdGV3YXksIHRoZSB2YWx1ZSBpczpcbiAgICAgKiBQUkVQQVksIFBPU1RQQVlcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VDaGFyZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogTmFtZSBvZiB0aGUgVlBOIGdhdGV3YXkuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRoZSBJRCBvZiB0aGUgVlBOIGdhdGV3YXkuXG4gICAgICogVGhlIGxlbmd0aCBpcyAyfjEwMCBFbmdsaXNoIG9yIENoaW5lc2UgY2hhcmFjdGVycy4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGFyZ2Ugb3Igc21hbGwgbGV0dGVyIG9yIENoaW5lc2UuIEl0IGNhbiBjb250YWluIG51bWJlcnMsIHVuZGVyc2NvcmVzIChfKSBhbmQgZGFzaGVzICgtKS4gSXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcmlvZDogUHVyY2hhc2UgdGltZSwgdmFsdWU6IDF+OXwxMnwyNHwzNi5cbiAgICAgKiBXaGVuIHRoZSB2YWx1ZSBvZiB0aGUgSW5zdGFuY2VDaGFyZ2VUeXBlIHBhcmFtZXRlciBpcyBQUkVQQVksIHRoaXMgcGFyYW1ldGVyIGlzIG1hbmRhdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGVyaW9kOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3NsQ29ubmVjdGlvbnM6IFRoZSBtYXhpbXVtIG51bWJlciBvZiBjbGllbnRzIGFsbG93ZWQgdG8gY29ubmVjdCBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBzc2xDb25uZWN0aW9uczogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIHRhZ3M6IFJvc1ZwbkdhdGV3YXkuVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdlN3aXRjaElkOiBUaGUgSUQgb2YgdGhlIFZTd2l0Y2ggdG8gd2hpY2ggdGhlIFZQTiBnYXRld2F5IGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHZTd2l0Y2hJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6VnBuR2F0ZXdheWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVnBuR2F0ZXdheVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVnBuR2F0ZXdheS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySW50ZXJuZXRJcCA9IHRoaXMuZ2V0QXR0KCdJbnRlcm5ldElwJyk7XG4gICAgICAgIHRoaXMuYXR0ck9yZGVySWQgPSB0aGlzLmdldEF0dCgnT3JkZXJJZCcpO1xuICAgICAgICB0aGlzLmF0dHJTcGVjID0gdGhpcy5nZXRBdHQoJ1NwZWMnKTtcbiAgICAgICAgdGhpcy5hdHRyU3NsTWF4Q29ubmVjdGlvbnMgPSB0aGlzLmdldEF0dCgnU3NsTWF4Q29ubmVjdGlvbnMnKTtcbiAgICAgICAgdGhpcy5hdHRyVnBuR2F0ZXdheUlkID0gdGhpcy5nZXRBdHQoJ1ZwbkdhdGV3YXlJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5iYW5kd2lkdGggPSBwcm9wcy5iYW5kd2lkdGg7XG4gICAgICAgIHRoaXMudnBjSWQgPSBwcm9wcy52cGNJZDtcbiAgICAgICAgdGhpcy5hdXRvUGF5ID0gcHJvcHMuYXV0b1BheTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmVuYWJsZUlwc2VjID0gcHJvcHMuZW5hYmxlSXBzZWM7XG4gICAgICAgIHRoaXMuZW5hYmxlU3NsID0gcHJvcHMuZW5hYmxlU3NsO1xuICAgICAgICB0aGlzLmluc3RhbmNlQ2hhcmdlVHlwZSA9IHByb3BzLmluc3RhbmNlQ2hhcmdlVHlwZTtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwcm9wcy5wZXJpb2Q7XG4gICAgICAgIHRoaXMuc3NsQ29ubmVjdGlvbnMgPSBwcm9wcy5zc2xDb25uZWN0aW9ucztcbiAgICAgICAgdGhpcy50YWdzID0gcHJvcHMudGFncztcbiAgICAgICAgdGhpcy52U3dpdGNoSWQgPSBwcm9wcy52U3dpdGNoSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFuZHdpZHRoOiB0aGlzLmJhbmR3aWR0aCxcbiAgICAgICAgICAgIHZwY0lkOiB0aGlzLnZwY0lkLFxuICAgICAgICAgICAgYXV0b1BheTogdGhpcy5hdXRvUGF5LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBlbmFibGVJcHNlYzogdGhpcy5lbmFibGVJcHNlYyxcbiAgICAgICAgICAgIGVuYWJsZVNzbDogdGhpcy5lbmFibGVTc2wsXG4gICAgICAgICAgICBpbnN0YW5jZUNoYXJnZVR5cGU6IHRoaXMuaW5zdGFuY2VDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgcGVyaW9kOiB0aGlzLnBlcmlvZCxcbiAgICAgICAgICAgIHNzbENvbm5lY3Rpb25zOiB0aGlzLnNzbENvbm5lY3Rpb25zLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICAgICAgdlN3aXRjaElkOiB0aGlzLnZTd2l0Y2hJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVnBuR2F0ZXdheVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1ZwbkdhdGV3YXkge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVnBuR2F0ZXdheV9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUYWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6VnBuR2F0ZXdheS5UYWdzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6VnBuR2F0ZXdheS5UYWdzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1ZwbkdhdGV3YXlUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1ZwbkdhdGV3YXlfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVmFsdWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgS2V5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6VnBuUGJyUm91dGVFbnRyeWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NWcG5QYnJSb3V0ZUVudHJ5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5leHRIb3A6IFRoZSBuZXh0IGhvcCBvZiB0aGUgZGVzdGluYXRpb24gcm91dGUgZW50cnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV4dEhvcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHB1Ymxpc2hWcGM6IEluZGljYXRlcyB3aGV0aGVyIHRvIHB1Ymxpc2ggdGhlIGRlc3RpbmF0aW9uIHJvdXRlIHRvIHRoZSBWUEMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBQdWJsaXNoIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSB0byB0aGUgVlBDLlxuICAgICAqIGZhbHNlOiBEbyBub3QgcHVibGlzaCB0aGUgZGVzdGluYXRpb24gcm91dGUgdG8gdGhlIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwdWJsaXNoVnBjOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlRGVzdDogVGhlIGRlc3RpbmF0aW9uIENJRFIgYmxvY2sgb2YgdGhlIGRlc3RpbmF0aW9uIHJvdXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlRGVzdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlU291cmNlOiBUaGUgc291cmNlIENJRFIgYmxvY2sgb2YgdGhlIHBvbGljeS1iYXNlZCByb3V0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZVNvdXJjZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwbkdhdGV3YXlJZDogVGhlIElEIG9mIHRoZSBWUE4gR2F0ZXdheS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cG5HYXRld2F5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWlnaHQ6IFRoZSB3ZWlnaHQgb2YgdGhlIGRlc3RpbmF0aW9uIHJvdXRlLiBWYWxpZCB2YWx1ZXM6IDB8MTAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdlaWdodDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIFZQTiBkZXN0aW5hdGlvbiByb3V0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvdmVybGF5TW9kZTogVGhlIG92ZXJsYXkgbW9kZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBvdmVybGF5TW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NWcG5QYnJSb3V0ZUVudHJ5UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZwblBiclJvdXRlRW50cnlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NWcG5QYnJSb3V0ZUVudHJ5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVEZXN0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJvdXRlRGVzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVEZXN0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJvdXRlRGVzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3ZlcmxheU1vZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3ZlcmxheU1vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwbkdhdGV3YXlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52cG5HYXRld2F5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwbkdhdGV3YXlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cG5HYXRld2F5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25leHRIb3AnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmV4dEhvcCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV4dEhvcCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uZXh0SG9wKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb3V0ZVNvdXJjZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yb3V0ZVNvdXJjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVTb3VyY2UnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucm91dGVTb3VyY2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3B1Ymxpc2hWcGMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHVibGlzaFZwYykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHVibGlzaFZwYycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMucHVibGlzaFZwYykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2VpZ2h0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLndlaWdodCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2VpZ2h0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLndlaWdodCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NWcG5QYnJSb3V0ZUVudHJ5UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlZQQzo6VnBuUGJyUm91dGVFbnRyeWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVnBuUGJyUm91dGVFbnRyeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlZwblBiclJvdXRlRW50cnlgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVnBuUGJyUm91dGVFbnRyeVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVnBuUGJyUm91dGVFbnRyeVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIE5leHRIb3A6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmV4dEhvcCksXG4gICAgICBQdWJsaXNoVnBjOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wdWJsaXNoVnBjKSxcbiAgICAgIFJvdXRlRGVzdDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yb3V0ZURlc3QpLFxuICAgICAgUm91dGVTb3VyY2U6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucm91dGVTb3VyY2UpLFxuICAgICAgVnBuR2F0ZXdheUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZwbkdhdGV3YXlJZCksXG4gICAgICBXZWlnaHQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud2VpZ2h0KSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIE92ZXJsYXlNb2RlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm92ZXJsYXlNb2RlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpWUEM6OlZwblBiclJvdXRlRW50cnlgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NWcG5QYnJSb3V0ZUVudHJ5IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpWUEM6OlZwblBiclJvdXRlRW50cnlcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOZXh0SG9wOiBUaGUgbmV4dCBob3Agb2YgdGhlIGRlc3RpbmF0aW9uIHJvdXRlIGVudHJ5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmV4dEhvcDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSb3V0ZURlc3Q6IFRoZSBkZXN0aW5hdGlvbiBDSURSIGJsb2NrIG9mIHRoZSBkZXN0aW5hdGlvbiByb3V0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlRGVzdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSb3V0ZVNvdXJjZTogVGhlIGRlc3RpbmF0aW9uIENJRFIgYmxvY2sgb2YgdGhlIHBvbGljeS1iYXNlZCByb3V0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlU291cmNlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZwbkdhdGV3YXlJZDogVGhlIElEIG9mIHRoZSBWUE4gR2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwbkdhdGV3YXlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmV4dEhvcDogVGhlIG5leHQgaG9wIG9mIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSBlbnRyeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmV4dEhvcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHB1Ymxpc2hWcGM6IEluZGljYXRlcyB3aGV0aGVyIHRvIHB1Ymxpc2ggdGhlIGRlc3RpbmF0aW9uIHJvdXRlIHRvIHRoZSBWUEMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBQdWJsaXNoIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSB0byB0aGUgVlBDLlxuICAgICAqIGZhbHNlOiBEbyBub3QgcHVibGlzaCB0aGUgZGVzdGluYXRpb24gcm91dGUgdG8gdGhlIFZQQy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHVibGlzaFZwYzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0ZURlc3Q6IFRoZSBkZXN0aW5hdGlvbiBDSURSIGJsb2NrIG9mIHRoZSBkZXN0aW5hdGlvbiByb3V0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcm91dGVEZXN0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm91dGVTb3VyY2U6IFRoZSBzb3VyY2UgQ0lEUiBibG9jayBvZiB0aGUgcG9saWN5LWJhc2VkIHJvdXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByb3V0ZVNvdXJjZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwbkdhdGV3YXlJZDogVGhlIElEIG9mIHRoZSBWUE4gR2F0ZXdheS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdnBuR2F0ZXdheUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd2VpZ2h0OiBUaGUgd2VpZ2h0IG9mIHRoZSBkZXN0aW5hdGlvbiByb3V0ZS4gVmFsaWQgdmFsdWVzOiAwfDEwMC5cbiAgICAgKi9cbiAgICBwdWJsaWMgd2VpZ2h0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgVlBOIGRlc3RpbmF0aW9uIHJvdXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG92ZXJsYXlNb2RlOiBUaGUgb3ZlcmxheSBtb2RlLlxuICAgICAqL1xuICAgIHB1YmxpYyBvdmVybGF5TW9kZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlZQQzo6VnBuUGJyUm91dGVFbnRyeWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVnBuUGJyUm91dGVFbnRyeVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVnBuUGJyUm91dGVFbnRyeS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyTmV4dEhvcCA9IHRoaXMuZ2V0QXR0KCdOZXh0SG9wJyk7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlRGVzdCA9IHRoaXMuZ2V0QXR0KCdSb3V0ZURlc3QnKTtcbiAgICAgICAgdGhpcy5hdHRyUm91dGVTb3VyY2UgPSB0aGlzLmdldEF0dCgnUm91dGVTb3VyY2UnKTtcbiAgICAgICAgdGhpcy5hdHRyVnBuR2F0ZXdheUlkID0gdGhpcy5nZXRBdHQoJ1ZwbkdhdGV3YXlJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5uZXh0SG9wID0gcHJvcHMubmV4dEhvcDtcbiAgICAgICAgdGhpcy5wdWJsaXNoVnBjID0gcHJvcHMucHVibGlzaFZwYztcbiAgICAgICAgdGhpcy5yb3V0ZURlc3QgPSBwcm9wcy5yb3V0ZURlc3Q7XG4gICAgICAgIHRoaXMucm91dGVTb3VyY2UgPSBwcm9wcy5yb3V0ZVNvdXJjZTtcbiAgICAgICAgdGhpcy52cG5HYXRld2F5SWQgPSBwcm9wcy52cG5HYXRld2F5SWQ7XG4gICAgICAgIHRoaXMud2VpZ2h0ID0gcHJvcHMud2VpZ2h0O1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMub3ZlcmxheU1vZGUgPSBwcm9wcy5vdmVybGF5TW9kZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXh0SG9wOiB0aGlzLm5leHRIb3AsXG4gICAgICAgICAgICBwdWJsaXNoVnBjOiB0aGlzLnB1Ymxpc2hWcGMsXG4gICAgICAgICAgICByb3V0ZURlc3Q6IHRoaXMucm91dGVEZXN0LFxuICAgICAgICAgICAgcm91dGVTb3VyY2U6IHRoaXMucm91dGVTb3VyY2UsXG4gICAgICAgICAgICB2cG5HYXRld2F5SWQ6IHRoaXMudnBuR2F0ZXdheUlkLFxuICAgICAgICAgICAgd2VpZ2h0OiB0aGlzLndlaWdodCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3ZlcmxheU1vZGU6IHRoaXMub3ZlcmxheU1vZGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1ZwblBiclJvdXRlRW50cnlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlZQQzo6VnBuUm91dGVFbnRyeWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NWcG5Sb3V0ZUVudHJ5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5leHRIb3A6IFRoZSBuZXh0IGhvcCBvZiB0aGUgZGVzdGluYXRpb24gcm91dGUgZW50cnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV4dEhvcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHB1Ymxpc2hWcGM6IEluZGljYXRlcyB3aGV0aGVyIHRvIHB1Ymxpc2ggdGhlIGRlc3RpbmF0aW9uIHJvdXRlIHRvIHRoZSBWUEMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBQdWJsaXNoIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSB0byB0aGUgVlBDLlxuICAgICAqIGZhbHNlOiBEbyBub3QgcHVibGlzaCB0aGUgZGVzdGluYXRpb24gcm91dGUgdG8gdGhlIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwdWJsaXNoVnBjOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlRGVzdDogVGhlIGRlc3RpbmF0aW9uIENJRFIgYmxvY2sgb2YgdGhlIGRlc3RpbmF0aW9uIHJvdXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRlRGVzdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwbkdhdGV3YXlJZDogVGhlIElEIG9mIHRoZSBWUE4gR2F0ZXdheS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cG5HYXRld2F5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWlnaHQ6IFRoZSB3ZWlnaHQgb2YgdGhlIGRlc3RpbmF0aW9uIHJvdXRlLiBWYWxpZCB2YWx1ZXM6IDB8MTAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdlaWdodDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIFZQTiBkZXN0aW5hdGlvbiByb3V0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvdmVybGF5TW9kZTogVGhlIG92ZXJsYXkgbW9kZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBvdmVybGF5TW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NWcG5Sb3V0ZUVudHJ5UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZwblJvdXRlRW50cnlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NWcG5Sb3V0ZUVudHJ5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVEZXN0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJvdXRlRGVzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm91dGVEZXN0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJvdXRlRGVzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3ZlcmxheU1vZGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3ZlcmxheU1vZGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwbkdhdGV3YXlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52cG5HYXRld2F5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZwbkdhdGV3YXlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52cG5HYXRld2F5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25leHRIb3AnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmV4dEhvcCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmV4dEhvcCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uZXh0SG9wKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwdWJsaXNoVnBjJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnB1Ymxpc2hWcGMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3B1Ymxpc2hWcGMnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnB1Ymxpc2hWcGMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlaWdodCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy53ZWlnaHQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlaWdodCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy53ZWlnaHQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVnBuUm91dGVFbnRyeVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpWUEM6OlZwblJvdXRlRW50cnlgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1ZwblJvdXRlRW50cnlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6VlBDOjpWcG5Sb3V0ZUVudHJ5YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1ZwblJvdXRlRW50cnlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1ZwblJvdXRlRW50cnlQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBOZXh0SG9wOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5leHRIb3ApLFxuICAgICAgUHVibGlzaFZwYzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHVibGlzaFZwYyksXG4gICAgICBSb3V0ZURlc3Q6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucm91dGVEZXN0KSxcbiAgICAgIFZwbkdhdGV3YXlJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52cG5HYXRld2F5SWQpLFxuICAgICAgV2VpZ2h0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndlaWdodCksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBPdmVybGF5TW9kZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vdmVybGF5TW9kZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6VlBDOjpWcG5Sb3V0ZUVudHJ5YFxuICovXG5leHBvcnQgY2xhc3MgUm9zVnBuUm91dGVFbnRyeSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6VlBDOjpWcG5Sb3V0ZUVudHJ5XCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmV4dEhvcDogVGhlIG5leHQgaG9wIG9mIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSBlbnRyeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5leHRIb3A6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUm91dGVEZXN0OiBUaGUgZGVzdGluYXRpb24gQ0lEUiBibG9jayBvZiB0aGUgZGVzdGluYXRpb24gcm91dGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb3V0ZURlc3Q6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVnBuR2F0ZXdheUlkOiBUaGUgSUQgb2YgdGhlIFZQTiBHYXRld2F5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBuR2F0ZXdheUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuZXh0SG9wOiBUaGUgbmV4dCBob3Agb2YgdGhlIGRlc3RpbmF0aW9uIHJvdXRlIGVudHJ5LlxuICAgICAqL1xuICAgIHB1YmxpYyBuZXh0SG9wOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHVibGlzaFZwYzogSW5kaWNhdGVzIHdoZXRoZXIgdG8gcHVibGlzaCB0aGUgZGVzdGluYXRpb24gcm91dGUgdG8gdGhlIFZQQy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHRydWU6IFB1Ymxpc2ggdGhlIGRlc3RpbmF0aW9uIHJvdXRlIHRvIHRoZSBWUEMuXG4gICAgICogZmFsc2U6IERvIG5vdCBwdWJsaXNoIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSB0byB0aGUgVlBDLlxuICAgICAqL1xuICAgIHB1YmxpYyBwdWJsaXNoVnBjOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRlRGVzdDogVGhlIGRlc3RpbmF0aW9uIENJRFIgYmxvY2sgb2YgdGhlIGRlc3RpbmF0aW9uIHJvdXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByb3V0ZURlc3Q6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2cG5HYXRld2F5SWQ6IFRoZSBJRCBvZiB0aGUgVlBOIEdhdGV3YXkuXG4gICAgICovXG4gICAgcHVibGljIHZwbkdhdGV3YXlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlaWdodDogVGhlIHdlaWdodCBvZiB0aGUgZGVzdGluYXRpb24gcm91dGUuIFZhbGlkIHZhbHVlczogMHwxMDAuXG4gICAgICovXG4gICAgcHVibGljIHdlaWdodDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIFZQTiBkZXN0aW5hdGlvbiByb3V0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvdmVybGF5TW9kZTogVGhlIG92ZXJsYXkgbW9kZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3ZlcmxheU1vZGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpWUEM6OlZwblJvdXRlRW50cnlgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1ZwblJvdXRlRW50cnlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1ZwblJvdXRlRW50cnkuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ck5leHRIb3AgPSB0aGlzLmdldEF0dCgnTmV4dEhvcCcpO1xuICAgICAgICB0aGlzLmF0dHJSb3V0ZURlc3QgPSB0aGlzLmdldEF0dCgnUm91dGVEZXN0Jyk7XG4gICAgICAgIHRoaXMuYXR0clZwbkdhdGV3YXlJZCA9IHRoaXMuZ2V0QXR0KCdWcG5HYXRld2F5SWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMubmV4dEhvcCA9IHByb3BzLm5leHRIb3A7XG4gICAgICAgIHRoaXMucHVibGlzaFZwYyA9IHByb3BzLnB1Ymxpc2hWcGM7XG4gICAgICAgIHRoaXMucm91dGVEZXN0ID0gcHJvcHMucm91dGVEZXN0O1xuICAgICAgICB0aGlzLnZwbkdhdGV3YXlJZCA9IHByb3BzLnZwbkdhdGV3YXlJZDtcbiAgICAgICAgdGhpcy53ZWlnaHQgPSBwcm9wcy53ZWlnaHQ7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5vdmVybGF5TW9kZSA9IHByb3BzLm92ZXJsYXlNb2RlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5leHRIb3A6IHRoaXMubmV4dEhvcCxcbiAgICAgICAgICAgIHB1Ymxpc2hWcGM6IHRoaXMucHVibGlzaFZwYyxcbiAgICAgICAgICAgIHJvdXRlRGVzdDogdGhpcy5yb3V0ZURlc3QsXG4gICAgICAgICAgICB2cG5HYXRld2F5SWQ6IHRoaXMudnBuR2F0ZXdheUlkLFxuICAgICAgICAgICAgd2VpZ2h0OiB0aGlzLndlaWdodCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3ZlcmxheU1vZGU6IHRoaXMub3ZlcmxheU1vZGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1ZwblJvdXRlRW50cnlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==