"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosVpnRouteEntry = exports.RosVpnPbrRouteEntry = exports.RosVpnGateway = exports.RosVpnConnection = exports.RosVpnAttachment = exports.RosVpcPeerConnection = exports.RosVirtualBorderRouter = exports.RosVSwitchCidrReservation = exports.RosTrafficMirrorSessionSourcesAddition = exports.RosTrafficMirrorSession = exports.RosTrafficMirrorFilter = exports.RosSslVpnServer = exports.RosSslVpnClientCert = exports.RosSnatEntry = exports.RosRouterInterface = exports.RosRouteTableAssociation = exports.RosRouteTable = exports.RosPrefixList = exports.RosPeeringRouterInterfaceConnection = exports.RosPeeringRouterInterfaceBinding = exports.RosNetworkAclAssociation = exports.RosNetworkAcl = exports.RosNatIpCidr = exports.RosNatIp = exports.RosNatGateway = exports.RosIpv6InternetBandwidth = exports.RosIpv6Gateway = exports.RosIpv4Gateway = exports.RosIpsecServer = exports.RosHaVipAssociation = exports.RosHaVip = exports.RosGrantInstanceToCen = exports.RosFullNatEntry = exports.RosForwardEntry = exports.RosFlowLog = exports.RosEIPSegment = exports.RosEIPPro = exports.RosEIPAssociation = exports.RosEIP = exports.RosDhcpOptionsSetAttachment = exports.RosDhcpOptionsSet = exports.RosCustomerGateway = exports.RosCommonBandwidthPackageIp = exports.RosCommonBandwidthPackage = exports.RosBgpPeer = exports.RosBgpNetwork = exports.RosBgpGroup = exports.RosAnycastEIPAssociation = exports.RosAnycastEIP = void 0;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::AnycastEIP`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AnycastEIP` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteip
 */
class RosAnycastEIP extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::AnycastEIPAssociation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AnycastEIPAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
 */
class RosAnycastEIPAssociation extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::BgpGroup`, which is used to create a Border Gateway Protocol (BGP) (Multi-ISP) group for a specified virtual border router (VBR).
 * @Note This class does not contain additional functions, so it is recommended to use the `BgpGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
 */
class RosBgpGroup extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::BgpNetwork`, which is used to advertise a Border Gateway Protocol (BGP) network.
 * @Note This class does not contain additional functions, so it is recommended to use the `BgpNetwork` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpnetwork
 */
class RosBgpNetwork extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::BgpPeer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BgpPeer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
 */
class RosBgpPeer extends ros.RosResource {
    /**
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
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
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
        DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::CommonBandwidthPackage`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CommonBandwidthPackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
 */
class RosCommonBandwidthPackage extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCommonBandwidthPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBandwidthPackageId = this.getAtt('BandwidthPackageId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.deletionProtection = props.deletionProtection;
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
            deletionProtection: this.deletionProtection,
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::CommonBandwidthPackageIp`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CommonBandwidthPackageIp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackageip
 */
class RosCommonBandwidthPackageIp extends ros.RosResource {
    /**
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
    if (properties.asn && (typeof properties.asn) !== 'object') {
        errors.collect(ros.propertyValidator('asn', ros.validateRange)({
            data: properties.asn,
            min: 1,
            max: 4294967295,
        }));
    }
    errors.collect(ros.propertyValidator('asn', ros.validateNumber)(properties.asn));
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
        Asn: ros.numberToRosTemplate(properties.asn),
        Description: ros.stringToRosTemplate(properties.description),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::CustomerGateway`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomerGateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
 */
class RosCustomerGateway extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCustomerGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCustomerGatewayId = this.getAtt('CustomerGatewayId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipAddress = props.ipAddress;
        this.asn = props.asn;
        this.description = props.description;
        this.name = props.name;
    }
    get rosProperties() {
        return {
            ipAddress: this.ipAddress,
            asn: this.asn,
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::DhcpOptionsSet`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DhcpOptionsSet` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionsset
 */
class RosDhcpOptionsSet extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::DhcpOptionsSetAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DhcpOptionsSetAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionssetattachment
 */
class RosDhcpOptionsSetAttachment extends ros.RosResource {
    /**
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
    errors.collect(ros.propertyValidator('zone', ros.validateString)(properties.zone));
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
    errors.collect(ros.propertyValidator('publicIpAddressPoolId', ros.validateString)(properties.publicIpAddressPoolId));
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
    if (properties.securityProtectionTypes && (Array.isArray(properties.securityProtectionTypes) || (typeof properties.securityProtectionTypes) === 'string')) {
        errors.collect(ros.propertyValidator('securityProtectionTypes', ros.validateLength)({
            data: properties.securityProtectionTypes.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('securityProtectionTypes', ros.listValidator(ros.validateString))(properties.securityProtectionTypes));
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
        PublicIpAddressPoolId: ros.stringToRosTemplate(properties.publicIpAddressPoolId),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SecurityProtectionTypes: ros.listMapper(ros.stringToRosTemplate)(properties.securityProtectionTypes),
        Tags: ros.listMapper(rosEIPTagsPropertyToRosTemplate)(properties.tags),
        Zone: ros.stringToRosTemplate(properties.zone),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::EIP`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EIP` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eip
 */
class RosEIP extends ros.RosResource {
    /**
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
        this.publicIpAddressPoolId = props.publicIpAddressPoolId;
        this.resourceGroupId = props.resourceGroupId;
        this.securityProtectionTypes = props.securityProtectionTypes;
        this.tags = props.tags;
        this.zone = props.zone;
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
            publicIpAddressPoolId: this.publicIpAddressPoolId,
            resourceGroupId: this.resourceGroupId,
            securityProtectionTypes: this.securityProtectionTypes,
            tags: this.tags,
            zone: this.zone,
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
    if (properties.instanceId && (Array.isArray(properties.instanceId) || (typeof properties.instanceId) === 'string')) {
        errors.collect(ros.propertyValidator('instanceId', ros.validateLength)({
            data: properties.instanceId.length,
            min: 1,
            max: undefined,
        }));
    }
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::EIPAssociation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EIPAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
 */
class RosEIPAssociation extends ros.RosResource {
    /**
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
    errors.collect(ros.propertyValidator('publicIpAddressPoolId', ros.validateString)(properties.publicIpAddressPoolId));
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
    if (properties.securityProtectionTypes && (Array.isArray(properties.securityProtectionTypes) || (typeof properties.securityProtectionTypes) === 'string')) {
        errors.collect(ros.propertyValidator('securityProtectionTypes', ros.validateLength)({
            data: properties.securityProtectionTypes.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('securityProtectionTypes', ros.listValidator(ros.validateString))(properties.securityProtectionTypes));
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
        PublicIpAddressPoolId: ros.stringToRosTemplate(properties.publicIpAddressPoolId),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SecurityProtectionTypes: ros.listMapper(ros.stringToRosTemplate)(properties.securityProtectionTypes),
        Tags: ros.listMapper(rosEIPProTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::EIPPro`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EIPPro` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eippro
 */
class RosEIPPro extends ros.RosResource {
    /**
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
        this.publicIpAddressPoolId = props.publicIpAddressPoolId;
        this.resourceGroupId = props.resourceGroupId;
        this.securityProtectionTypes = props.securityProtectionTypes;
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
            publicIpAddressPoolId: this.publicIpAddressPoolId,
            resourceGroupId: this.resourceGroupId,
            securityProtectionTypes: this.securityProtectionTypes,
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::EIPSegment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EIPSegment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipsegment
 */
class RosEIPSegment extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::FlowLog`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FlowLog` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-flowlog
 */
class RosFlowLog extends ros.RosResource {
    /**
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
 * Determine whether the given properties match those of a `RosForwardEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosForwardEntryProps`
 *
 * @returns the result of the validation.
 */
function RosForwardEntryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('externalPort', ros.requiredValidator)(properties.externalPort));
    errors.collect(ros.propertyValidator('externalPort', ros.validateString)(properties.externalPort));
    errors.collect(ros.propertyValidator('externalIp', ros.requiredValidator)(properties.externalIp));
    errors.collect(ros.propertyValidator('externalIp', ros.validateString)(properties.externalIp));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if (properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
            data: properties.ipProtocol,
            allowedValues: ["TCP", "UDP", "Any"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('portBreak', ros.validateBoolean)(properties.portBreak));
    errors.collect(ros.propertyValidator('internalPort', ros.requiredValidator)(properties.internalPort));
    errors.collect(ros.propertyValidator('internalPort', ros.validateString)(properties.internalPort));
    errors.collect(ros.propertyValidator('forwardEntryName', ros.validateString)(properties.forwardEntryName));
    errors.collect(ros.propertyValidator('internalIp', ros.requiredValidator)(properties.internalIp));
    errors.collect(ros.propertyValidator('internalIp', ros.validateString)(properties.internalIp));
    errors.collect(ros.propertyValidator('forwardTableId', ros.requiredValidator)(properties.forwardTableId));
    errors.collect(ros.propertyValidator('forwardTableId', ros.validateString)(properties.forwardTableId));
    return errors.wrap('supplied properties not correct for "RosForwardEntryProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::ForwardEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosForwardEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::ForwardEntry` resource.
 */
// @ts-ignore TS6133
function rosForwardEntryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosForwardEntryPropsValidator(properties).assertSuccess();
    }
    return {
        ExternalIp: ros.stringToRosTemplate(properties.externalIp),
        ExternalPort: ros.stringToRosTemplate(properties.externalPort),
        ForwardTableId: ros.stringToRosTemplate(properties.forwardTableId),
        InternalIp: ros.stringToRosTemplate(properties.internalIp),
        InternalPort: ros.stringToRosTemplate(properties.internalPort),
        IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
        ForwardEntryName: ros.stringToRosTemplate(properties.forwardEntryName),
        PortBreak: ros.booleanToRosTemplate(properties.portBreak),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::ForwardEntry`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ForwardEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-forwardentry
 */
class RosForwardEntry extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosForwardEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrForwardEntryId = this.getAtt('ForwardEntryId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.externalIp = props.externalIp;
        this.externalPort = props.externalPort;
        this.forwardTableId = props.forwardTableId;
        this.internalIp = props.internalIp;
        this.internalPort = props.internalPort;
        this.ipProtocol = props.ipProtocol;
        this.forwardEntryName = props.forwardEntryName;
        this.portBreak = props.portBreak;
    }
    get rosProperties() {
        return {
            externalIp: this.externalIp,
            externalPort: this.externalPort,
            forwardTableId: this.forwardTableId,
            internalIp: this.internalIp,
            internalPort: this.internalPort,
            ipProtocol: this.ipProtocol,
            forwardEntryName: this.forwardEntryName,
            portBreak: this.portBreak,
        };
    }
    renderProperties(props) {
        return rosForwardEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosForwardEntry = RosForwardEntry;
/**
 * The resource type name for this resource class.
 */
RosForwardEntry.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::ForwardEntry";
/**
 * Determine whether the given properties match those of a `RosFullNatEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosFullNatEntryProps`
 *
 * @returns the result of the validation.
 */
function RosFullNatEntryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('natIp', ros.requiredValidator)(properties.natIp));
    errors.collect(ros.propertyValidator('natIp', ros.validateString)(properties.natIp));
    errors.collect(ros.propertyValidator('fullNatEntryDescription', ros.validateString)(properties.fullNatEntryDescription));
    errors.collect(ros.propertyValidator('accessIp', ros.requiredValidator)(properties.accessIp));
    errors.collect(ros.propertyValidator('accessIp', ros.validateString)(properties.accessIp));
    errors.collect(ros.propertyValidator('fullNatTableId', ros.requiredValidator)(properties.fullNatTableId));
    errors.collect(ros.propertyValidator('fullNatTableId', ros.validateString)(properties.fullNatTableId));
    errors.collect(ros.propertyValidator('fullNatEntryName', ros.validateString)(properties.fullNatEntryName));
    errors.collect(ros.propertyValidator('natIpPort', ros.requiredValidator)(properties.natIpPort));
    errors.collect(ros.propertyValidator('natIpPort', ros.validateString)(properties.natIpPort));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if (properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
            data: properties.ipProtocol,
            allowedValues: ["TCP", "UDP"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('accessPort', ros.requiredValidator)(properties.accessPort));
    errors.collect(ros.propertyValidator('accessPort', ros.validateString)(properties.accessPort));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.requiredValidator)(properties.networkInterfaceId));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.validateString)(properties.networkInterfaceId));
    return errors.wrap('supplied properties not correct for "RosFullNatEntryProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::FullNatEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosFullNatEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::FullNatEntry` resource.
 */
// @ts-ignore TS6133
function rosFullNatEntryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosFullNatEntryPropsValidator(properties).assertSuccess();
    }
    return {
        AccessIp: ros.stringToRosTemplate(properties.accessIp),
        AccessPort: ros.stringToRosTemplate(properties.accessPort),
        FullNatTableId: ros.stringToRosTemplate(properties.fullNatTableId),
        IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
        NatIp: ros.stringToRosTemplate(properties.natIp),
        NatIpPort: ros.stringToRosTemplate(properties.natIpPort),
        NetworkInterfaceId: ros.stringToRosTemplate(properties.networkInterfaceId),
        FullNatEntryDescription: ros.stringToRosTemplate(properties.fullNatEntryDescription),
        FullNatEntryName: ros.stringToRosTemplate(properties.fullNatEntryName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::FullNatEntry`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FullNatEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-fullnatentry
 */
class RosFullNatEntry extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosFullNatEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFullNatEntryId = this.getAtt('FullNatEntryId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessIp = props.accessIp;
        this.accessPort = props.accessPort;
        this.fullNatTableId = props.fullNatTableId;
        this.ipProtocol = props.ipProtocol;
        this.natIp = props.natIp;
        this.natIpPort = props.natIpPort;
        this.networkInterfaceId = props.networkInterfaceId;
        this.fullNatEntryDescription = props.fullNatEntryDescription;
        this.fullNatEntryName = props.fullNatEntryName;
    }
    get rosProperties() {
        return {
            accessIp: this.accessIp,
            accessPort: this.accessPort,
            fullNatTableId: this.fullNatTableId,
            ipProtocol: this.ipProtocol,
            natIp: this.natIp,
            natIpPort: this.natIpPort,
            networkInterfaceId: this.networkInterfaceId,
            fullNatEntryDescription: this.fullNatEntryDescription,
            fullNatEntryName: this.fullNatEntryName,
        };
    }
    renderProperties(props) {
        return rosFullNatEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosFullNatEntry = RosFullNatEntry;
/**
 * The resource type name for this resource class.
 */
RosFullNatEntry.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::FullNatEntry";
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::GrantInstanceToCen`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GrantInstanceToCen` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-grantinstancetocen
 */
class RosGrantInstanceToCen extends ros.RosResource {
    /**
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
 * Determine whether the given properties match those of a `RosHaVipProps`
 *
 * @param properties - the TypeScript properties of a `RosHaVipProps`
 *
 * @returns the result of the validation.
 */
function RosHaVipPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('ipAddress', ros.validateString)(properties.ipAddress));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosHaVip_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosHaVipProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::HaVip` resource
 *
 * @param properties - the TypeScript properties of a `RosHaVipProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::HaVip` resource.
 */
// @ts-ignore TS6133
function rosHaVipPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosHaVipPropsValidator(properties).assertSuccess();
    }
    return {
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        Description: ros.stringToRosTemplate(properties.description),
        IpAddress: ros.stringToRosTemplate(properties.ipAddress),
        Name: ros.stringToRosTemplate(properties.name),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        Tags: ros.listMapper(rosHaVipTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::HaVip`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HaVip` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havip
 */
class RosHaVip extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosHaVip.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHaVipId = this.getAtt('HaVipId');
        this.attrIpAddress = this.getAtt('IpAddress');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vSwitchId = props.vSwitchId;
        this.description = props.description;
        this.ipAddress = props.ipAddress;
        this.name = props.name;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            vSwitchId: this.vSwitchId,
            description: this.description,
            ipAddress: this.ipAddress,
            name: this.name,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosHaVipPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosHaVip = RosHaVip;
/**
 * The resource type name for this resource class.
 */
RosHaVip.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::HaVip";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosHaVip_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::HaVip.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::HaVip.Tags` resource.
 */
// @ts-ignore TS6133
function rosHaVipTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosHaVip_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosHaVipAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosHaVipAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosHaVipAssociationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('haVipId', ros.requiredValidator)(properties.haVipId));
    errors.collect(ros.propertyValidator('haVipId', ros.validateString)(properties.haVipId));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    return errors.wrap('supplied properties not correct for "RosHaVipAssociationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::HaVipAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosHaVipAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::HaVipAssociation` resource.
 */
// @ts-ignore TS6133
function rosHaVipAssociationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosHaVipAssociationPropsValidator(properties).assertSuccess();
    }
    return {
        HaVipId: ros.stringToRosTemplate(properties.haVipId),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        InstanceType: ros.stringToRosTemplate(properties.instanceType),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::HaVipAssociation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HaVipAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havipassociation
 */
class RosHaVipAssociation extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosHaVipAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.haVipId = props.haVipId;
        this.instanceId = props.instanceId;
        this.instanceType = props.instanceType;
    }
    get rosProperties() {
        return {
            haVipId: this.haVipId,
            instanceId: this.instanceId,
            instanceType: this.instanceType,
        };
    }
    renderProperties(props) {
        return rosHaVipAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosHaVipAssociation = RosHaVipAssociation;
/**
 * The resource type name for this resource class.
 */
RosHaVipAssociation.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::HaVipAssociation";
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::IpsecServer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `IpsecServer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipsecserver
 */
class RosIpsecServer extends ros.RosResource {
    /**
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
 * Determine whether the given properties match those of a `RosIpv4GatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosIpv4GatewayProps`
 *
 * @returns the result of the validation.
 */
function RosIpv4GatewayPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ipv4GatewayName', ros.validateString)(properties.ipv4GatewayName));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('ipv4GatewayDescription', ros.validateString)(properties.ipv4GatewayDescription));
    return errors.wrap('supplied properties not correct for "RosIpv4GatewayProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv4Gateway` resource
 *
 * @param properties - the TypeScript properties of a `RosIpv4GatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv4Gateway` resource.
 */
// @ts-ignore TS6133
function rosIpv4GatewayPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosIpv4GatewayPropsValidator(properties).assertSuccess();
    }
    return {
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        Ipv4GatewayDescription: ros.stringToRosTemplate(properties.ipv4GatewayDescription),
        Ipv4GatewayName: ros.stringToRosTemplate(properties.ipv4GatewayName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::Ipv4Gateway`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipv4Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
 */
class RosIpv4Gateway extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosIpv4Gateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrIpv4GatewayDescription = this.getAtt('Ipv4GatewayDescription');
        this.attrIpv4GatewayId = this.getAtt('Ipv4GatewayId');
        this.attrIpv4GatewayName = this.getAtt('Ipv4GatewayName');
        this.attrIpv4GatewayRouteTableId = this.getAtt('Ipv4GatewayRouteTableId');
        this.attrVpcId = this.getAtt('VpcId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.ipv4GatewayDescription = props.ipv4GatewayDescription;
        this.ipv4GatewayName = props.ipv4GatewayName;
    }
    get rosProperties() {
        return {
            vpcId: this.vpcId,
            ipv4GatewayDescription: this.ipv4GatewayDescription,
            ipv4GatewayName: this.ipv4GatewayName,
        };
    }
    renderProperties(props) {
        return rosIpv4GatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosIpv4Gateway = RosIpv4Gateway;
/**
 * The resource type name for this resource class.
 */
RosIpv4Gateway.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::Ipv4Gateway";
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::Ipv6Gateway`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipv6Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6gateway
 */
class RosIpv6Gateway extends ros.RosResource {
    /**
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
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::Ipv6InternetBandwidth`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipv6InternetBandwidth` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6internetbandwidth
 */
class RosIpv6InternetBandwidth extends ros.RosResource {
    /**
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
    }
    get rosProperties() {
        return {
            bandwidth: this.bandwidth,
            ipv6AddressId: this.ipv6AddressId,
            ipv6GatewayId: this.ipv6GatewayId,
            internetChargeType: this.internetChargeType,
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
            allowedValues: ["PayAsYouGo", "PostPaid", "PayOnDemand", "Postpaid", "PostPay", "Postpay", "POSTPAY", "POST", "Subscription", "PrePaid", "Prepaid", "PrePay", "Prepay", "PREPAY", "PRE"],
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
    errors.collect(ros.propertyValidator('securityProtectionEnabled', ros.validateBoolean)(properties.securityProtectionEnabled));
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
    errors.collect(ros.propertyValidator('icmpReplyEnabled', ros.validateBoolean)(properties.icmpReplyEnabled));
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
        IcmpReplyEnabled: ros.booleanToRosTemplate(properties.icmpReplyEnabled),
        InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        NatGatewayName: ros.stringToRosTemplate(properties.natGatewayName),
        NatType: ros.stringToRosTemplate(properties.natType),
        NetworkType: ros.stringToRosTemplate(properties.networkType),
        PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
        SecurityProtectionEnabled: ros.booleanToRosTemplate(properties.securityProtectionEnabled),
        Tags: ros.listMapper(rosNatGatewayTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::NatGateway`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatGateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natgateway
 */
class RosNatGateway extends ros.RosResource {
    /**
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
        this.icmpReplyEnabled = props.icmpReplyEnabled;
        this.instanceChargeType = props.instanceChargeType;
        this.internetChargeType = props.internetChargeType;
        this.natGatewayName = props.natGatewayName;
        this.natType = props.natType;
        this.networkType = props.networkType;
        this.pricingCycle = props.pricingCycle;
        this.securityProtectionEnabled = props.securityProtectionEnabled;
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
            icmpReplyEnabled: this.icmpReplyEnabled,
            instanceChargeType: this.instanceChargeType,
            internetChargeType: this.internetChargeType,
            natGatewayName: this.natGatewayName,
            natType: this.natType,
            networkType: this.networkType,
            pricingCycle: this.pricingCycle,
            securityProtectionEnabled: this.securityProtectionEnabled,
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::NatIp`, which is used to create a NAT IP address.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatIp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natip
 */
class RosNatIp extends ros.RosResource {
    /**
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
 * Determine whether the given properties match those of a `RosNatIpCidrProps`
 *
 * @param properties - the TypeScript properties of a `RosNatIpCidrProps`
 *
 * @returns the result of the validation.
 */
function RosNatIpCidrPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('natIpCidr', ros.requiredValidator)(properties.natIpCidr));
    errors.collect(ros.propertyValidator('natIpCidr', ros.validateString)(properties.natIpCidr));
    errors.collect(ros.propertyValidator('natIpCidrDescription', ros.requiredValidator)(properties.natIpCidrDescription));
    errors.collect(ros.propertyValidator('natIpCidrDescription', ros.validateString)(properties.natIpCidrDescription));
    errors.collect(ros.propertyValidator('natIpCidrName', ros.requiredValidator)(properties.natIpCidrName));
    errors.collect(ros.propertyValidator('natIpCidrName', ros.validateString)(properties.natIpCidrName));
    errors.collect(ros.propertyValidator('natGatewayId', ros.requiredValidator)(properties.natGatewayId));
    errors.collect(ros.propertyValidator('natGatewayId', ros.validateString)(properties.natGatewayId));
    return errors.wrap('supplied properties not correct for "RosNatIpCidrProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatIpCidr` resource
 *
 * @param properties - the TypeScript properties of a `RosNatIpCidrProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatIpCidr` resource.
 */
// @ts-ignore TS6133
function rosNatIpCidrPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosNatIpCidrPropsValidator(properties).assertSuccess();
    }
    return {
        NatGatewayId: ros.stringToRosTemplate(properties.natGatewayId),
        NatIpCidr: ros.stringToRosTemplate(properties.natIpCidr),
        NatIpCidrDescription: ros.stringToRosTemplate(properties.natIpCidrDescription),
        NatIpCidrName: ros.stringToRosTemplate(properties.natIpCidrName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::NatIpCidr`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NatIpCidr` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natipcidr
 */
class RosNatIpCidr extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosNatIpCidr.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNatIpCidrId = this.getAtt('NatIpCidrId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.natGatewayId = props.natGatewayId;
        this.natIpCidr = props.natIpCidr;
        this.natIpCidrDescription = props.natIpCidrDescription;
        this.natIpCidrName = props.natIpCidrName;
    }
    get rosProperties() {
        return {
            natGatewayId: this.natGatewayId,
            natIpCidr: this.natIpCidr,
            natIpCidrDescription: this.natIpCidrDescription,
            natIpCidrName: this.natIpCidrName,
        };
    }
    renderProperties(props) {
        return rosNatIpCidrPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNatIpCidr = RosNatIpCidr;
/**
 * The resource type name for this resource class.
 */
RosNatIpCidr.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NatIpCidr";
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::NetworkAcl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkAcl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
 */
class RosNetworkAcl extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::NetworkAclAssociation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkAclAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkaclassociation
 */
class RosNetworkAclAssociation extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::PeeringRouterInterfaceBinding`, which is used to bind a router interface with another router interface.
 * @Note This class does not contain additional functions, so it is recommended to use the `PeeringRouterInterfaceBinding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfacebinding
 */
class RosPeeringRouterInterfaceBinding extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::PeeringRouterInterfaceConnection`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PeeringRouterInterfaceConnection` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfaceconnection
 */
class RosPeeringRouterInterfaceConnection extends ros.RosResource {
    /**
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
 * Determine whether the given properties match those of a `RosPrefixListProps`
 *
 * @param properties - the TypeScript properties of a `RosPrefixListProps`
 *
 * @returns the result of the validation.
 */
function RosPrefixListPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.maxEntries && (typeof properties.maxEntries) !== 'object') {
        errors.collect(ros.propertyValidator('maxEntries', ros.validateRange)({
            data: properties.maxEntries,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('maxEntries', ros.validateNumber)(properties.maxEntries));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('prefixListDescription', ros.validateString)(properties.prefixListDescription));
    if (properties.ipVersion && (typeof properties.ipVersion) !== 'object') {
        errors.collect(ros.propertyValidator('ipVersion', ros.validateAllowedValues)({
            data: properties.ipVersion,
            allowedValues: ["IPv4", "IPv6"],
        }));
    }
    errors.collect(ros.propertyValidator('ipVersion', ros.validateString)(properties.ipVersion));
    errors.collect(ros.propertyValidator('prefixListName', ros.validateString)(properties.prefixListName));
    errors.collect(ros.propertyValidator('entries', ros.listValidator(RosPrefixList_EntriesPropertyValidator))(properties.entries));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosPrefixList_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosPrefixListProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::PrefixList` resource
 *
 * @param properties - the TypeScript properties of a `RosPrefixListProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::PrefixList` resource.
 */
// @ts-ignore TS6133
function rosPrefixListPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosPrefixListPropsValidator(properties).assertSuccess();
    }
    return {
        Entries: ros.listMapper(rosPrefixListEntriesPropertyToRosTemplate)(properties.entries),
        IpVersion: ros.stringToRosTemplate(properties.ipVersion),
        MaxEntries: ros.numberToRosTemplate(properties.maxEntries),
        PrefixListDescription: ros.stringToRosTemplate(properties.prefixListDescription),
        PrefixListName: ros.stringToRosTemplate(properties.prefixListName),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        Tags: ros.listMapper(rosPrefixListTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::PrefixList`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrefixList` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-prefixlist
 */
class RosPrefixList extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPrefixList.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEntries = this.getAtt('Entries');
        this.attrIpVersion = this.getAtt('IpVersion');
        this.attrMaxEntries = this.getAtt('MaxEntries');
        this.attrOwnerId = this.getAtt('OwnerId');
        this.attrPrefixListDescription = this.getAtt('PrefixListDescription');
        this.attrPrefixListId = this.getAtt('PrefixListId');
        this.attrPrefixListName = this.getAtt('PrefixListName');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrShareType = this.getAtt('ShareType');
        this.attrTags = this.getAtt('Tags');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.entries = props.entries;
        this.ipVersion = props.ipVersion;
        this.maxEntries = props.maxEntries;
        this.prefixListDescription = props.prefixListDescription;
        this.prefixListName = props.prefixListName;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            entries: this.entries,
            ipVersion: this.ipVersion,
            maxEntries: this.maxEntries,
            prefixListDescription: this.prefixListDescription,
            prefixListName: this.prefixListName,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosPrefixListPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPrefixList = RosPrefixList;
/**
 * The resource type name for this resource class.
 */
RosPrefixList.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::PrefixList";
/**
 * Determine whether the given properties match those of a `EntriesProperty`
 *
 * @param properties - the TypeScript properties of a `EntriesProperty`
 *
 * @returns the result of the validation.
 */
function RosPrefixList_EntriesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('cidr', ros.requiredValidator)(properties.cidr));
    errors.collect(ros.propertyValidator('cidr', ros.validateString)(properties.cidr));
    return errors.wrap('supplied properties not correct for "EntriesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::PrefixList.Entries` resource
 *
 * @param properties - the TypeScript properties of a `EntriesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::PrefixList.Entries` resource.
 */
// @ts-ignore TS6133
function rosPrefixListEntriesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosPrefixList_EntriesPropertyValidator(properties).assertSuccess();
    return {
        Description: ros.stringToRosTemplate(properties.description),
        Cidr: ros.stringToRosTemplate(properties.cidr),
    };
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosPrefixList_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::PrefixList.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::PrefixList.Tags` resource.
 */
// @ts-ignore TS6133
function rosPrefixListTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosPrefixList_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::RouteTable`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouteTable` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetable
 */
class RosRouteTable extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::RouteTableAssociation`, which is used to associate a custom routing table with a vSwitch in the same VPC.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouteTableAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableassociation
 */
class RosRouteTableAssociation extends ros.RosResource {
    /**
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
            allowedValues: ["PayAsYouGo", "PostPaid", "PayOnDemand", "Postpaid", "PostPay", "Postpay", "POSTPAY", "POST", "Subscription", "PrePaid", "Prepaid", "PrePay", "Prepay", "PREPAY", "PRE"],
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::RouterInterface`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RouterInterface` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routerinterface
 */
class RosRouterInterface extends ros.RosResource {
    /**
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
    if (properties.eipAffinity && (typeof properties.eipAffinity) !== 'object') {
        errors.collect(ros.propertyValidator('eipAffinity', ros.validateAllowedValues)({
            data: properties.eipAffinity,
            allowedValues: [0, 1],
        }));
    }
    errors.collect(ros.propertyValidator('eipAffinity', ros.validateNumber)(properties.eipAffinity));
    errors.collect(ros.propertyValidator('snatEntryName', ros.validateString)(properties.snatEntryName));
    errors.collect(ros.propertyValidator('sourceVSwitchIds', ros.listValidator(ros.validateString))(properties.sourceVSwitchIds));
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
        EipAffinity: ros.numberToRosTemplate(properties.eipAffinity),
        SnatEntryName: ros.stringToRosTemplate(properties.snatEntryName),
        SourceCIDR: ros.stringToRosTemplate(properties.sourceCidr),
        SourceVSwitchIds: ros.listMapper(ros.stringToRosTemplate)(properties.sourceVSwitchIds),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::SnatEntry`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SnatEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
 */
class RosSnatEntry extends ros.RosResource {
    /**
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
        this.eipAffinity = props.eipAffinity;
        this.snatEntryName = props.snatEntryName;
        this.sourceCidr = props.sourceCidr;
        this.sourceVSwitchIds = props.sourceVSwitchIds;
    }
    get rosProperties() {
        return {
            snatIp: this.snatIp,
            snatTableId: this.snatTableId,
            eipAffinity: this.eipAffinity,
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::SslVpnClientCert`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SslVpnClientCert` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnclientcert
 */
class RosSslVpnClientCert extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::SslVpnServer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SslVpnServer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnserver
 */
class RosSslVpnServer extends ros.RosResource {
    /**
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
 * Determine whether the given properties match those of a `RosTrafficMirrorFilterProps`
 *
 * @param properties - the TypeScript properties of a `RosTrafficMirrorFilterProps`
 *
 * @returns the result of the validation.
 */
function RosTrafficMirrorFilterPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('trafficMirrorFilterDescription', ros.validateString)(properties.trafficMirrorFilterDescription));
    if (properties.egressRules && (Array.isArray(properties.egressRules) || (typeof properties.egressRules) === 'string')) {
        errors.collect(ros.propertyValidator('egressRules', ros.validateLength)({
            data: properties.egressRules.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('egressRules', ros.listValidator(RosTrafficMirrorFilter_EgressRulesPropertyValidator))(properties.egressRules));
    errors.collect(ros.propertyValidator('trafficMirrorFilterName', ros.validateString)(properties.trafficMirrorFilterName));
    if (properties.ingressRules && (Array.isArray(properties.ingressRules) || (typeof properties.ingressRules) === 'string')) {
        errors.collect(ros.propertyValidator('ingressRules', ros.validateLength)({
            data: properties.ingressRules.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('ingressRules', ros.listValidator(RosTrafficMirrorFilter_IngressRulesPropertyValidator))(properties.ingressRules));
    return errors.wrap('supplied properties not correct for "RosTrafficMirrorFilterProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::TrafficMirrorFilter` resource
 *
 * @param properties - the TypeScript properties of a `RosTrafficMirrorFilterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::TrafficMirrorFilter` resource.
 */
// @ts-ignore TS6133
function rosTrafficMirrorFilterPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosTrafficMirrorFilterPropsValidator(properties).assertSuccess();
    }
    return {
        EgressRules: ros.listMapper(rosTrafficMirrorFilterEgressRulesPropertyToRosTemplate)(properties.egressRules),
        IngressRules: ros.listMapper(rosTrafficMirrorFilterIngressRulesPropertyToRosTemplate)(properties.ingressRules),
        TrafficMirrorFilterDescription: ros.stringToRosTemplate(properties.trafficMirrorFilterDescription),
        TrafficMirrorFilterName: ros.stringToRosTemplate(properties.trafficMirrorFilterName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::TrafficMirrorFilter`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrafficMirrorFilter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorfilter
 */
class RosTrafficMirrorFilter extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosTrafficMirrorFilter.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEgressRules = this.getAtt('EgressRules');
        this.attrIngressRules = this.getAtt('IngressRules');
        this.attrTrafficMirrorFilterDescription = this.getAtt('TrafficMirrorFilterDescription');
        this.attrTrafficMirrorFilterId = this.getAtt('TrafficMirrorFilterId');
        this.attrTrafficMirrorFilterName = this.getAtt('TrafficMirrorFilterName');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.egressRules = props.egressRules;
        this.ingressRules = props.ingressRules;
        this.trafficMirrorFilterDescription = props.trafficMirrorFilterDescription;
        this.trafficMirrorFilterName = props.trafficMirrorFilterName;
    }
    get rosProperties() {
        return {
            egressRules: this.egressRules,
            ingressRules: this.ingressRules,
            trafficMirrorFilterDescription: this.trafficMirrorFilterDescription,
            trafficMirrorFilterName: this.trafficMirrorFilterName,
        };
    }
    renderProperties(props) {
        return rosTrafficMirrorFilterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTrafficMirrorFilter = RosTrafficMirrorFilter;
/**
 * The resource type name for this resource class.
 */
RosTrafficMirrorFilter.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::TrafficMirrorFilter";
/**
 * Determine whether the given properties match those of a `EgressRulesProperty`
 *
 * @param properties - the TypeScript properties of a `EgressRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosTrafficMirrorFilter_EgressRulesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('destinationPortRange', ros.validateString)(properties.destinationPortRange));
    errors.collect(ros.propertyValidator('action', ros.requiredValidator)(properties.action));
    if (properties.action && (typeof properties.action) !== 'object') {
        errors.collect(ros.propertyValidator('action', ros.validateAllowedValues)({
            data: properties.action,
            allowedValues: ["accept", "drop"],
        }));
    }
    errors.collect(ros.propertyValidator('action', ros.validateString)(properties.action));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.validateString)(properties.sourcePortRange));
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('sourceCidrBlock', ros.validateString)(properties.sourceCidrBlock));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.validateString)(properties.destinationCidrBlock));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if (properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
            data: properties.protocol,
            allowedValues: ["ALL", "ICMP", "TCP", "UDP"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    return errors.wrap('supplied properties not correct for "EgressRulesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::TrafficMirrorFilter.EgressRules` resource
 *
 * @param properties - the TypeScript properties of a `EgressRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::TrafficMirrorFilter.EgressRules` resource.
 */
// @ts-ignore TS6133
function rosTrafficMirrorFilterEgressRulesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosTrafficMirrorFilter_EgressRulesPropertyValidator(properties).assertSuccess();
    return {
        DestinationPortRange: ros.stringToRosTemplate(properties.destinationPortRange),
        Action: ros.stringToRosTemplate(properties.action),
        SourcePortRange: ros.stringToRosTemplate(properties.sourcePortRange),
        Priority: ros.numberToRosTemplate(properties.priority),
        SourceCidrBlock: ros.stringToRosTemplate(properties.sourceCidrBlock),
        DestinationCidrBlock: ros.stringToRosTemplate(properties.destinationCidrBlock),
        Protocol: ros.stringToRosTemplate(properties.protocol),
    };
}
/**
 * Determine whether the given properties match those of a `IngressRulesProperty`
 *
 * @param properties - the TypeScript properties of a `IngressRulesProperty`
 *
 * @returns the result of the validation.
 */
function RosTrafficMirrorFilter_IngressRulesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('destinationPortRange', ros.validateString)(properties.destinationPortRange));
    errors.collect(ros.propertyValidator('action', ros.requiredValidator)(properties.action));
    if (properties.action && (typeof properties.action) !== 'object') {
        errors.collect(ros.propertyValidator('action', ros.validateAllowedValues)({
            data: properties.action,
            allowedValues: ["accept", "drop"],
        }));
    }
    errors.collect(ros.propertyValidator('action', ros.validateString)(properties.action));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.validateString)(properties.sourcePortRange));
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('sourceCidrBlock', ros.validateString)(properties.sourceCidrBlock));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.validateString)(properties.destinationCidrBlock));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if (properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
            data: properties.protocol,
            allowedValues: ["ALL", "ICMP", "TCP", "UDP"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    return errors.wrap('supplied properties not correct for "IngressRulesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::TrafficMirrorFilter.IngressRules` resource
 *
 * @param properties - the TypeScript properties of a `IngressRulesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::TrafficMirrorFilter.IngressRules` resource.
 */
// @ts-ignore TS6133
function rosTrafficMirrorFilterIngressRulesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosTrafficMirrorFilter_IngressRulesPropertyValidator(properties).assertSuccess();
    return {
        DestinationPortRange: ros.stringToRosTemplate(properties.destinationPortRange),
        Action: ros.stringToRosTemplate(properties.action),
        SourcePortRange: ros.stringToRosTemplate(properties.sourcePortRange),
        Priority: ros.numberToRosTemplate(properties.priority),
        SourceCidrBlock: ros.stringToRosTemplate(properties.sourceCidrBlock),
        DestinationCidrBlock: ros.stringToRosTemplate(properties.destinationCidrBlock),
        Protocol: ros.stringToRosTemplate(properties.protocol),
    };
}
/**
 * Determine whether the given properties match those of a `RosTrafficMirrorSessionProps`
 *
 * @param properties - the TypeScript properties of a `RosTrafficMirrorSessionProps`
 *
 * @returns the result of the validation.
 */
function RosTrafficMirrorSessionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('trafficMirrorTargetId', ros.requiredValidator)(properties.trafficMirrorTargetId));
    errors.collect(ros.propertyValidator('trafficMirrorTargetId', ros.validateString)(properties.trafficMirrorTargetId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.virtualNetworkId && (typeof properties.virtualNetworkId) !== 'object') {
        errors.collect(ros.propertyValidator('virtualNetworkId', ros.validateRange)({
            data: properties.virtualNetworkId,
            min: 0,
            max: 16777215,
        }));
    }
    errors.collect(ros.propertyValidator('virtualNetworkId', ros.validateNumber)(properties.virtualNetworkId));
    errors.collect(ros.propertyValidator('trafficMirrorSourceIds', ros.requiredValidator)(properties.trafficMirrorSourceIds));
    errors.collect(ros.propertyValidator('trafficMirrorSourceIds', ros.listValidator(ros.validateString))(properties.trafficMirrorSourceIds));
    errors.collect(ros.propertyValidator('priority', ros.requiredValidator)(properties.priority));
    if (properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 32766,
        }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('packetLength', ros.validateNumber)(properties.packetLength));
    errors.collect(ros.propertyValidator('enabled', ros.validateBoolean)(properties.enabled));
    if (properties.trafficMirrorSessionDescription && (Array.isArray(properties.trafficMirrorSessionDescription) || (typeof properties.trafficMirrorSessionDescription) === 'string')) {
        errors.collect(ros.propertyValidator('trafficMirrorSessionDescription', ros.validateLength)({
            data: properties.trafficMirrorSessionDescription.length,
            min: 1,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('trafficMirrorSessionDescription', ros.validateString)(properties.trafficMirrorSessionDescription));
    errors.collect(ros.propertyValidator('tag', ros.listValidator(ros.validateRosTag))(properties.tag));
    if (properties.trafficMirrorSessionName && (Array.isArray(properties.trafficMirrorSessionName) || (typeof properties.trafficMirrorSessionName) === 'string')) {
        errors.collect(ros.propertyValidator('trafficMirrorSessionName', ros.validateLength)({
            data: properties.trafficMirrorSessionName.length,
            min: 1,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('trafficMirrorSessionName', ros.validateString)(properties.trafficMirrorSessionName));
    errors.collect(ros.propertyValidator('trafficMirrorFilterId', ros.requiredValidator)(properties.trafficMirrorFilterId));
    errors.collect(ros.propertyValidator('trafficMirrorFilterId', ros.validateString)(properties.trafficMirrorFilterId));
    errors.collect(ros.propertyValidator('trafficMirrorTargetType', ros.requiredValidator)(properties.trafficMirrorTargetType));
    errors.collect(ros.propertyValidator('trafficMirrorTargetType', ros.validateString)(properties.trafficMirrorTargetType));
    return errors.wrap('supplied properties not correct for "RosTrafficMirrorSessionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::TrafficMirrorSession` resource
 *
 * @param properties - the TypeScript properties of a `RosTrafficMirrorSessionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::TrafficMirrorSession` resource.
 */
// @ts-ignore TS6133
function rosTrafficMirrorSessionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosTrafficMirrorSessionPropsValidator(properties).assertSuccess();
    }
    return {
        Priority: ros.numberToRosTemplate(properties.priority),
        TrafficMirrorFilterId: ros.stringToRosTemplate(properties.trafficMirrorFilterId),
        TrafficMirrorSourceIds: ros.listMapper(ros.stringToRosTemplate)(properties.trafficMirrorSourceIds),
        TrafficMirrorTargetId: ros.stringToRosTemplate(properties.trafficMirrorTargetId),
        TrafficMirrorTargetType: ros.stringToRosTemplate(properties.trafficMirrorTargetType),
        Enabled: ros.booleanToRosTemplate(properties.enabled),
        PacketLength: ros.numberToRosTemplate(properties.packetLength),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        Tag: ros.listMapper(ros.rosTagToRosTemplate)(properties.tag),
        TrafficMirrorSessionDescription: ros.stringToRosTemplate(properties.trafficMirrorSessionDescription),
        TrafficMirrorSessionName: ros.stringToRosTemplate(properties.trafficMirrorSessionName),
        VirtualNetworkId: ros.numberToRosTemplate(properties.virtualNetworkId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::TrafficMirrorSession`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrafficMirrorSession` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsession
 */
class RosTrafficMirrorSession extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosTrafficMirrorSession.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTrafficMirrorSessionId = this.getAtt('TrafficMirrorSessionId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.priority = props.priority;
        this.trafficMirrorFilterId = props.trafficMirrorFilterId;
        this.trafficMirrorSourceIds = props.trafficMirrorSourceIds;
        this.trafficMirrorTargetId = props.trafficMirrorTargetId;
        this.trafficMirrorTargetType = props.trafficMirrorTargetType;
        this.enabled = props.enabled;
        this.packetLength = props.packetLength;
        this.resourceGroupId = props.resourceGroupId;
        this.tag = props.tag;
        this.trafficMirrorSessionDescription = props.trafficMirrorSessionDescription;
        this.trafficMirrorSessionName = props.trafficMirrorSessionName;
        this.virtualNetworkId = props.virtualNetworkId;
    }
    get rosProperties() {
        return {
            priority: this.priority,
            trafficMirrorFilterId: this.trafficMirrorFilterId,
            trafficMirrorSourceIds: this.trafficMirrorSourceIds,
            trafficMirrorTargetId: this.trafficMirrorTargetId,
            trafficMirrorTargetType: this.trafficMirrorTargetType,
            enabled: this.enabled,
            packetLength: this.packetLength,
            resourceGroupId: this.resourceGroupId,
            tag: this.tag,
            trafficMirrorSessionDescription: this.trafficMirrorSessionDescription,
            trafficMirrorSessionName: this.trafficMirrorSessionName,
            virtualNetworkId: this.virtualNetworkId,
        };
    }
    renderProperties(props) {
        return rosTrafficMirrorSessionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTrafficMirrorSession = RosTrafficMirrorSession;
/**
 * The resource type name for this resource class.
 */
RosTrafficMirrorSession.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::TrafficMirrorSession";
/**
 * Determine whether the given properties match those of a `TagProperty`
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the result of the validation.
 */
function RosTrafficMirrorSession_TagPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::TrafficMirrorSession.Tag` resource
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::TrafficMirrorSession.Tag` resource.
 */
// @ts-ignore TS6133
function rosTrafficMirrorSessionTagPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosTrafficMirrorSession_TagPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosTrafficMirrorSessionSourcesAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosTrafficMirrorSessionSourcesAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosTrafficMirrorSessionSourcesAdditionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('trafficMirrorSourceIds', ros.requiredValidator)(properties.trafficMirrorSourceIds));
    errors.collect(ros.propertyValidator('trafficMirrorSourceIds', ros.listValidator(ros.validateString))(properties.trafficMirrorSourceIds));
    errors.collect(ros.propertyValidator('trafficMirrorSessionId', ros.requiredValidator)(properties.trafficMirrorSessionId));
    errors.collect(ros.propertyValidator('trafficMirrorSessionId', ros.validateString)(properties.trafficMirrorSessionId));
    return errors.wrap('supplied properties not correct for "RosTrafficMirrorSessionSourcesAdditionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::TrafficMirrorSessionSourcesAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosTrafficMirrorSessionSourcesAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::TrafficMirrorSessionSourcesAddition` resource.
 */
// @ts-ignore TS6133
function rosTrafficMirrorSessionSourcesAdditionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosTrafficMirrorSessionSourcesAdditionPropsValidator(properties).assertSuccess();
    }
    return {
        TrafficMirrorSessionId: ros.stringToRosTemplate(properties.trafficMirrorSessionId),
        TrafficMirrorSourceIds: ros.listMapper(ros.stringToRosTemplate)(properties.trafficMirrorSourceIds),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::TrafficMirrorSessionSourcesAddition`, which is used to add traffic mirror sources to traffic mirror sessions.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrafficMirrorSessionSourcesAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
 */
class RosTrafficMirrorSessionSourcesAddition extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosTrafficMirrorSessionSourcesAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.trafficMirrorSessionId = props.trafficMirrorSessionId;
        this.trafficMirrorSourceIds = props.trafficMirrorSourceIds;
    }
    get rosProperties() {
        return {
            trafficMirrorSessionId: this.trafficMirrorSessionId,
            trafficMirrorSourceIds: this.trafficMirrorSourceIds,
        };
    }
    renderProperties(props) {
        return rosTrafficMirrorSessionSourcesAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTrafficMirrorSessionSourcesAddition = RosTrafficMirrorSessionSourcesAddition;
/**
 * The resource type name for this resource class.
 */
RosTrafficMirrorSessionSourcesAddition.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::TrafficMirrorSessionSourcesAddition";
/**
 * Determine whether the given properties match those of a `RosVSwitchCidrReservationProps`
 *
 * @param properties - the TypeScript properties of a `RosVSwitchCidrReservationProps`
 *
 * @returns the result of the validation.
 */
function RosVSwitchCidrReservationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.vSwitchCidrReservationType && (typeof properties.vSwitchCidrReservationType) !== 'object') {
        errors.collect(ros.propertyValidator('vSwitchCidrReservationType', ros.validateAllowedValues)({
            data: properties.vSwitchCidrReservationType,
            allowedValues: ["prefix"],
        }));
    }
    errors.collect(ros.propertyValidator('vSwitchCidrReservationType', ros.validateString)(properties.vSwitchCidrReservationType));
    errors.collect(ros.propertyValidator('vSwitchCidrReservationCidr', ros.validateString)(properties.vSwitchCidrReservationCidr));
    errors.collect(ros.propertyValidator('vSwitchCidrReservationDescription', ros.validateString)(properties.vSwitchCidrReservationDescription));
    if (properties.ipVersion && (typeof properties.ipVersion) !== 'object') {
        errors.collect(ros.propertyValidator('ipVersion', ros.validateAllowedValues)({
            data: properties.ipVersion,
            allowedValues: ["IPv6", "IPv4"],
        }));
    }
    errors.collect(ros.propertyValidator('ipVersion', ros.validateString)(properties.ipVersion));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchCidrReservationName', ros.validateString)(properties.vSwitchCidrReservationName));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosVSwitchCidrReservation_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('vSwitchCidrReservationMask', ros.validateString)(properties.vSwitchCidrReservationMask));
    return errors.wrap('supplied properties not correct for "RosVSwitchCidrReservationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VSwitchCidrReservation` resource
 *
 * @param properties - the TypeScript properties of a `RosVSwitchCidrReservationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VSwitchCidrReservation` resource.
 */
// @ts-ignore TS6133
function rosVSwitchCidrReservationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVSwitchCidrReservationPropsValidator(properties).assertSuccess();
    }
    return {
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        IpVersion: ros.stringToRosTemplate(properties.ipVersion),
        Tags: ros.listMapper(rosVSwitchCidrReservationTagsPropertyToRosTemplate)(properties.tags),
        VSwitchCidrReservationCidr: ros.stringToRosTemplate(properties.vSwitchCidrReservationCidr),
        VSwitchCidrReservationDescription: ros.stringToRosTemplate(properties.vSwitchCidrReservationDescription),
        VSwitchCidrReservationMask: ros.stringToRosTemplate(properties.vSwitchCidrReservationMask),
        VSwitchCidrReservationName: ros.stringToRosTemplate(properties.vSwitchCidrReservationName),
        VSwitchCidrReservationType: ros.stringToRosTemplate(properties.vSwitchCidrReservationType),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VSwitchCidrReservation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VSwitchCidrReservation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vswitchcidrreservation
 */
class RosVSwitchCidrReservation extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVSwitchCidrReservation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVSwitchCidrReservationId = this.getAtt('VSwitchCidrReservationId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vSwitchId = props.vSwitchId;
        this.ipVersion = props.ipVersion;
        this.tags = props.tags;
        this.vSwitchCidrReservationCidr = props.vSwitchCidrReservationCidr;
        this.vSwitchCidrReservationDescription = props.vSwitchCidrReservationDescription;
        this.vSwitchCidrReservationMask = props.vSwitchCidrReservationMask;
        this.vSwitchCidrReservationName = props.vSwitchCidrReservationName;
        this.vSwitchCidrReservationType = props.vSwitchCidrReservationType;
    }
    get rosProperties() {
        return {
            vSwitchId: this.vSwitchId,
            ipVersion: this.ipVersion,
            tags: this.tags,
            vSwitchCidrReservationCidr: this.vSwitchCidrReservationCidr,
            vSwitchCidrReservationDescription: this.vSwitchCidrReservationDescription,
            vSwitchCidrReservationMask: this.vSwitchCidrReservationMask,
            vSwitchCidrReservationName: this.vSwitchCidrReservationName,
            vSwitchCidrReservationType: this.vSwitchCidrReservationType,
        };
    }
    renderProperties(props) {
        return rosVSwitchCidrReservationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVSwitchCidrReservation = RosVSwitchCidrReservation;
/**
 * The resource type name for this resource class.
 */
RosVSwitchCidrReservation.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VSwitchCidrReservation";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosVSwitchCidrReservation_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VSwitchCidrReservation.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VSwitchCidrReservation.Tags` resource.
 */
// @ts-ignore TS6133
function rosVSwitchCidrReservationTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVSwitchCidrReservation_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VirtualBorderRouter`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VirtualBorderRouter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-virtualborderrouter
 */
class RosVirtualBorderRouter extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VpcPeerConnection`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpcPeerConnection` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcpeerconnection
 */
class RosVpcPeerConnection extends ros.RosResource {
    /**
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
 * Determine whether the given properties match those of a `RosVpnAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosVpnAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosVpnAttachmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('localSubnet', ros.requiredValidator)(properties.localSubnet));
    errors.collect(ros.propertyValidator('localSubnet', ros.validateString)(properties.localSubnet));
    errors.collect(ros.propertyValidator('customerGatewayId', ros.requiredValidator)(properties.customerGatewayId));
    errors.collect(ros.propertyValidator('customerGatewayId', ros.validateString)(properties.customerGatewayId));
    errors.collect(ros.propertyValidator('autoConfigRoute', ros.validateBoolean)(properties.autoConfigRoute));
    if (properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('effectImmediately', ros.validateBoolean)(properties.effectImmediately));
    errors.collect(ros.propertyValidator('bgpConfig', RosVpnAttachment_BgpConfigPropertyValidator)(properties.bgpConfig));
    errors.collect(ros.propertyValidator('remoteSubnet', ros.requiredValidator)(properties.remoteSubnet));
    errors.collect(ros.propertyValidator('remoteSubnet', ros.validateString)(properties.remoteSubnet));
    errors.collect(ros.propertyValidator('remoteCaCert', ros.validateString)(properties.remoteCaCert));
    errors.collect(ros.propertyValidator('ipsecConfig', RosVpnAttachment_IpsecConfigPropertyValidator)(properties.ipsecConfig));
    if (properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
            data: properties.networkType,
            allowedValues: ["public", "private"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('healthCheckConfig', RosVpnAttachment_HealthCheckConfigPropertyValidator)(properties.healthCheckConfig));
    errors.collect(ros.propertyValidator('enableNatTraversal', ros.validateBoolean)(properties.enableNatTraversal));
    errors.collect(ros.propertyValidator('ikeConfig', RosVpnAttachment_IkeConfigPropertyValidator)(properties.ikeConfig));
    errors.collect(ros.propertyValidator('enableDpd', ros.validateBoolean)(properties.enableDpd));
    return errors.wrap('supplied properties not correct for "RosVpnAttachmentProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosVpnAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnAttachment` resource.
 */
// @ts-ignore TS6133
function rosVpnAttachmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVpnAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
        CustomerGatewayId: ros.stringToRosTemplate(properties.customerGatewayId),
        LocalSubnet: ros.stringToRosTemplate(properties.localSubnet),
        RemoteSubnet: ros.stringToRosTemplate(properties.remoteSubnet),
        AutoConfigRoute: ros.booleanToRosTemplate(properties.autoConfigRoute),
        BgpConfig: rosVpnAttachmentBgpConfigPropertyToRosTemplate(properties.bgpConfig),
        EffectImmediately: ros.booleanToRosTemplate(properties.effectImmediately),
        EnableDpd: ros.booleanToRosTemplate(properties.enableDpd),
        EnableNatTraversal: ros.booleanToRosTemplate(properties.enableNatTraversal),
        HealthCheckConfig: rosVpnAttachmentHealthCheckConfigPropertyToRosTemplate(properties.healthCheckConfig),
        IkeConfig: rosVpnAttachmentIkeConfigPropertyToRosTemplate(properties.ikeConfig),
        IpsecConfig: rosVpnAttachmentIpsecConfigPropertyToRosTemplate(properties.ipsecConfig),
        Name: ros.stringToRosTemplate(properties.name),
        NetworkType: ros.stringToRosTemplate(properties.networkType),
        RemoteCaCert: ros.stringToRosTemplate(properties.remoteCaCert),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VpnAttachment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpnAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnattachment
 */
class RosVpnAttachment extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVpnAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInternetIp = this.getAtt('InternetIp');
        this.attrPeerVpnAttachmentConfig = this.getAtt('PeerVpnAttachmentConfig');
        this.attrVpnAttachmentId = this.getAtt('VpnAttachmentId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.customerGatewayId = props.customerGatewayId;
        this.localSubnet = props.localSubnet;
        this.remoteSubnet = props.remoteSubnet;
        this.autoConfigRoute = props.autoConfigRoute;
        this.bgpConfig = props.bgpConfig;
        this.effectImmediately = props.effectImmediately;
        this.enableDpd = props.enableDpd;
        this.enableNatTraversal = props.enableNatTraversal;
        this.healthCheckConfig = props.healthCheckConfig;
        this.ikeConfig = props.ikeConfig;
        this.ipsecConfig = props.ipsecConfig;
        this.name = props.name;
        this.networkType = props.networkType;
        this.remoteCaCert = props.remoteCaCert;
    }
    get rosProperties() {
        return {
            customerGatewayId: this.customerGatewayId,
            localSubnet: this.localSubnet,
            remoteSubnet: this.remoteSubnet,
            autoConfigRoute: this.autoConfigRoute,
            bgpConfig: this.bgpConfig,
            effectImmediately: this.effectImmediately,
            enableDpd: this.enableDpd,
            enableNatTraversal: this.enableNatTraversal,
            healthCheckConfig: this.healthCheckConfig,
            ikeConfig: this.ikeConfig,
            ipsecConfig: this.ipsecConfig,
            name: this.name,
            networkType: this.networkType,
            remoteCaCert: this.remoteCaCert,
        };
    }
    renderProperties(props) {
        return rosVpnAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVpnAttachment = RosVpnAttachment;
/**
 * The resource type name for this resource class.
 */
RosVpnAttachment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnAttachment";
/**
 * Determine whether the given properties match those of a `BgpConfigProperty`
 *
 * @param properties - the TypeScript properties of a `BgpConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnAttachment_BgpConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableBgp', ros.validateBoolean)(properties.enableBgp));
    if (properties.localAsn && (typeof properties.localAsn) !== 'object') {
        errors.collect(ros.propertyValidator('localAsn', ros.validateRange)({
            data: properties.localAsn,
            min: 1,
            max: 4294967295,
        }));
    }
    errors.collect(ros.propertyValidator('localAsn', ros.validateNumber)(properties.localAsn));
    errors.collect(ros.propertyValidator('tunnelCidr', ros.validateString)(properties.tunnelCidr));
    errors.collect(ros.propertyValidator('localBgpIp', ros.validateString)(properties.localBgpIp));
    return errors.wrap('supplied properties not correct for "BgpConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnAttachment.BgpConfig` resource
 *
 * @param properties - the TypeScript properties of a `BgpConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnAttachment.BgpConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnAttachmentBgpConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnAttachment_BgpConfigPropertyValidator(properties).assertSuccess();
    return {
        EnableBgp: ros.booleanToRosTemplate(properties.enableBgp),
        LocalAsn: ros.numberToRosTemplate(properties.localAsn),
        TunnelCidr: ros.stringToRosTemplate(properties.tunnelCidr),
        LocalBgpIp: ros.stringToRosTemplate(properties.localBgpIp),
    };
}
/**
 * Determine whether the given properties match those of a `HealthCheckConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnAttachment_HealthCheckConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('dip', ros.validateString)(properties.dip));
    errors.collect(ros.propertyValidator('retry', ros.validateNumber)(properties.retry));
    errors.collect(ros.propertyValidator('sip', ros.validateString)(properties.sip));
    errors.collect(ros.propertyValidator('interval', ros.validateNumber)(properties.interval));
    return errors.wrap('supplied properties not correct for "HealthCheckConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnAttachment.HealthCheckConfig` resource
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnAttachment.HealthCheckConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnAttachmentHealthCheckConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnAttachment_HealthCheckConfigPropertyValidator(properties).assertSuccess();
    return {
        Policy: ros.stringToRosTemplate(properties.policy),
        Enable: ros.booleanToRosTemplate(properties.enable),
        Dip: ros.stringToRosTemplate(properties.dip),
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
function RosVpnAttachment_IkeConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.ikeAuthAlg && (typeof properties.ikeAuthAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ikeAuthAlg', ros.validateAllowedValues)({
            data: properties.ikeAuthAlg,
            allowedValues: ["md5", "sha1", "sha256", "sha384", "sha512", "sm3"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeAuthAlg', ros.validateString)(properties.ikeAuthAlg));
    if (properties.localId && (Array.isArray(properties.localId) || (typeof properties.localId) === 'string')) {
        errors.collect(ros.propertyValidator('localId', ros.validateLength)({
            data: properties.localId.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('localId', ros.validateString)(properties.localId));
    if (properties.ikeEncAlg && (typeof properties.ikeEncAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ikeEncAlg', ros.validateAllowedValues)({
            data: properties.ikeEncAlg,
            allowedValues: ["aes", "aes192", "aes256", "des", "3des", "sm4"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeEncAlg', ros.validateString)(properties.ikeEncAlg));
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnAttachment.IkeConfig` resource
 *
 * @param properties - the TypeScript properties of a `IkeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnAttachment.IkeConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnAttachmentIkeConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnAttachment_IkeConfigPropertyValidator(properties).assertSuccess();
    return {
        IkeAuthAlg: ros.stringToRosTemplate(properties.ikeAuthAlg),
        LocalId: ros.stringToRosTemplate(properties.localId),
        IkeEncAlg: ros.stringToRosTemplate(properties.ikeEncAlg),
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
function RosVpnAttachment_IpsecConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.ipsecPfs && (typeof properties.ipsecPfs) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecPfs', ros.validateAllowedValues)({
            data: properties.ipsecPfs,
            allowedValues: ["disabled", "group1", "group2", "group5", "group14", "group24"],
        }));
    }
    errors.collect(ros.propertyValidator('ipsecPfs', ros.validateString)(properties.ipsecPfs));
    if (properties.ipsecEncAlg && (typeof properties.ipsecEncAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecEncAlg', ros.validateAllowedValues)({
            data: properties.ipsecEncAlg,
            allowedValues: ["aes", "aes192", "aes256", "des", "3des", "sm4"],
        }));
    }
    errors.collect(ros.propertyValidator('ipsecEncAlg', ros.validateString)(properties.ipsecEncAlg));
    if (properties.ipsecAuthAlg && (typeof properties.ipsecAuthAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecAuthAlg', ros.validateAllowedValues)({
            data: properties.ipsecAuthAlg,
            allowedValues: ["md5", "sha1", "sha256", "sha384", "sha512", "sm3"],
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnAttachment.IpsecConfig` resource
 *
 * @param properties - the TypeScript properties of a `IpsecConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnAttachment.IpsecConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnAttachmentIpsecConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnAttachment_IpsecConfigPropertyValidator(properties).assertSuccess();
    return {
        IpsecPfs: ros.stringToRosTemplate(properties.ipsecPfs),
        IpsecEncAlg: ros.stringToRosTemplate(properties.ipsecEncAlg),
        IpsecAuthAlg: ros.stringToRosTemplate(properties.ipsecAuthAlg),
        IpsecLifetime: ros.numberToRosTemplate(properties.ipsecLifetime),
    };
}
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
    errors.collect(ros.propertyValidator('customerGatewayId', ros.validateString)(properties.customerGatewayId));
    errors.collect(ros.propertyValidator('enableTunnelsBgp', ros.validateBoolean)(properties.enableTunnelsBgp));
    errors.collect(ros.propertyValidator('autoConfigRoute', ros.validateBoolean)(properties.autoConfigRoute));
    if (properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('effectImmediately', ros.validateBoolean)(properties.effectImmediately));
    errors.collect(ros.propertyValidator('bgpConfig', RosVpnConnection_BgpConfigPropertyValidator)(properties.bgpConfig));
    errors.collect(ros.propertyValidator('tunnelOptionsSpecification', ros.listValidator(RosVpnConnection_TunnelOptionsSpecificationPropertyValidator))(properties.tunnelOptionsSpecification));
    errors.collect(ros.propertyValidator('remoteSubnet', ros.requiredValidator)(properties.remoteSubnet));
    errors.collect(ros.propertyValidator('remoteSubnet', ros.validateString)(properties.remoteSubnet));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.requiredValidator)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.validateString)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('ipsecConfig', RosVpnConnection_IpsecConfigPropertyValidator)(properties.ipsecConfig));
    errors.collect(ros.propertyValidator('remoteCaCertificate', ros.validateString)(properties.remoteCaCertificate));
    errors.collect(ros.propertyValidator('healthCheckConfig', RosVpnConnection_HealthCheckConfigPropertyValidator)(properties.healthCheckConfig));
    errors.collect(ros.propertyValidator('enableNatTraversal', ros.validateBoolean)(properties.enableNatTraversal));
    errors.collect(ros.propertyValidator('ikeConfig', RosVpnConnection_IkeConfigPropertyValidator)(properties.ikeConfig));
    errors.collect(ros.propertyValidator('enableDpd', ros.validateBoolean)(properties.enableDpd));
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
        LocalSubnet: ros.stringToRosTemplate(properties.localSubnet),
        RemoteSubnet: ros.stringToRosTemplate(properties.remoteSubnet),
        VpnGatewayId: ros.stringToRosTemplate(properties.vpnGatewayId),
        AutoConfigRoute: ros.booleanToRosTemplate(properties.autoConfigRoute),
        BgpConfig: rosVpnConnectionBgpConfigPropertyToRosTemplate(properties.bgpConfig),
        CustomerGatewayId: ros.stringToRosTemplate(properties.customerGatewayId),
        EffectImmediately: ros.booleanToRosTemplate(properties.effectImmediately),
        EnableDpd: ros.booleanToRosTemplate(properties.enableDpd),
        EnableNatTraversal: ros.booleanToRosTemplate(properties.enableNatTraversal),
        EnableTunnelsBgp: ros.booleanToRosTemplate(properties.enableTunnelsBgp),
        HealthCheckConfig: rosVpnConnectionHealthCheckConfigPropertyToRosTemplate(properties.healthCheckConfig),
        IkeConfig: rosVpnConnectionIkeConfigPropertyToRosTemplate(properties.ikeConfig),
        IpsecConfig: rosVpnConnectionIpsecConfigPropertyToRosTemplate(properties.ipsecConfig),
        Name: ros.stringToRosTemplate(properties.name),
        RemoteCaCertificate: ros.stringToRosTemplate(properties.remoteCaCertificate),
        TunnelOptionsSpecification: ros.listMapper(rosVpnConnectionTunnelOptionsSpecificationPropertyToRosTemplate)(properties.tunnelOptionsSpecification),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VpnConnection`, which is used to create an IPsec-VPN connection.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpnConnection` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnconnection
 */
class RosVpnConnection extends ros.RosResource {
    /**
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
        this.localSubnet = props.localSubnet;
        this.remoteSubnet = props.remoteSubnet;
        this.vpnGatewayId = props.vpnGatewayId;
        this.autoConfigRoute = props.autoConfigRoute;
        this.bgpConfig = props.bgpConfig;
        this.customerGatewayId = props.customerGatewayId;
        this.effectImmediately = props.effectImmediately;
        this.enableDpd = props.enableDpd;
        this.enableNatTraversal = props.enableNatTraversal;
        this.enableTunnelsBgp = props.enableTunnelsBgp;
        this.healthCheckConfig = props.healthCheckConfig;
        this.ikeConfig = props.ikeConfig;
        this.ipsecConfig = props.ipsecConfig;
        this.name = props.name;
        this.remoteCaCertificate = props.remoteCaCertificate;
        this.tunnelOptionsSpecification = props.tunnelOptionsSpecification;
    }
    get rosProperties() {
        return {
            localSubnet: this.localSubnet,
            remoteSubnet: this.remoteSubnet,
            vpnGatewayId: this.vpnGatewayId,
            autoConfigRoute: this.autoConfigRoute,
            bgpConfig: this.bgpConfig,
            customerGatewayId: this.customerGatewayId,
            effectImmediately: this.effectImmediately,
            enableDpd: this.enableDpd,
            enableNatTraversal: this.enableNatTraversal,
            enableTunnelsBgp: this.enableTunnelsBgp,
            healthCheckConfig: this.healthCheckConfig,
            ikeConfig: this.ikeConfig,
            ipsecConfig: this.ipsecConfig,
            name: this.name,
            remoteCaCertificate: this.remoteCaCertificate,
            tunnelOptionsSpecification: this.tunnelOptionsSpecification,
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
 * Determine whether the given properties match those of a `BgpConfigProperty`
 *
 * @param properties - the TypeScript properties of a `BgpConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnConnection_BgpConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableBgp', ros.validateBoolean)(properties.enableBgp));
    if (properties.localAsn && (typeof properties.localAsn) !== 'object') {
        errors.collect(ros.propertyValidator('localAsn', ros.validateRange)({
            data: properties.localAsn,
            min: 1,
            max: 4294967295,
        }));
    }
    errors.collect(ros.propertyValidator('localAsn', ros.validateNumber)(properties.localAsn));
    errors.collect(ros.propertyValidator('tunnelCidr', ros.validateString)(properties.tunnelCidr));
    errors.collect(ros.propertyValidator('localBgpIp', ros.validateString)(properties.localBgpIp));
    return errors.wrap('supplied properties not correct for "BgpConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.BgpConfig` resource
 *
 * @param properties - the TypeScript properties of a `BgpConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.BgpConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionBgpConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnConnection_BgpConfigPropertyValidator(properties).assertSuccess();
    return {
        EnableBgp: ros.booleanToRosTemplate(properties.enableBgp),
        LocalAsn: ros.numberToRosTemplate(properties.localAsn),
        TunnelCidr: ros.stringToRosTemplate(properties.tunnelCidr),
        LocalBgpIp: ros.stringToRosTemplate(properties.localBgpIp),
    };
}
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
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('dip', ros.validateString)(properties.dip));
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
        Policy: ros.stringToRosTemplate(properties.policy),
        Enable: ros.booleanToRosTemplate(properties.enable),
        Dip: ros.stringToRosTemplate(properties.dip),
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
            allowedValues: ["md5", "sha1", "sha256", "sha384", "sha512", "sm3"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeAuthAlg', ros.validateString)(properties.ikeAuthAlg));
    if (properties.localId && (Array.isArray(properties.localId) || (typeof properties.localId) === 'string')) {
        errors.collect(ros.propertyValidator('localId', ros.validateLength)({
            data: properties.localId.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('localId', ros.validateString)(properties.localId));
    if (properties.ikeEncAlg && (typeof properties.ikeEncAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ikeEncAlg', ros.validateAllowedValues)({
            data: properties.ikeEncAlg,
            allowedValues: ["aes", "aes192", "aes256", "des", "3des", "sm4"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeEncAlg', ros.validateString)(properties.ikeEncAlg));
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
        LocalId: ros.stringToRosTemplate(properties.localId),
        IkeEncAlg: ros.stringToRosTemplate(properties.ikeEncAlg),
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
            allowedValues: ["disabled", "group1", "group2", "group5", "group14", "group24"],
        }));
    }
    errors.collect(ros.propertyValidator('ipsecPfs', ros.validateString)(properties.ipsecPfs));
    if (properties.ipsecEncAlg && (typeof properties.ipsecEncAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecEncAlg', ros.validateAllowedValues)({
            data: properties.ipsecEncAlg,
            allowedValues: ["aes", "aes192", "aes256", "des", "3des", "sm4"],
        }));
    }
    errors.collect(ros.propertyValidator('ipsecEncAlg', ros.validateString)(properties.ipsecEncAlg));
    if (properties.ipsecAuthAlg && (typeof properties.ipsecAuthAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecAuthAlg', ros.validateAllowedValues)({
            data: properties.ipsecAuthAlg,
            allowedValues: ["md5", "sha1", "sha256", "sha384", "sha512", "sm3"],
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
 * Determine whether the given properties match those of a `TunnelBgpConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TunnelBgpConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnConnection_TunnelBgpConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.localAsn && (typeof properties.localAsn) !== 'object') {
        errors.collect(ros.propertyValidator('localAsn', ros.validateRange)({
            data: properties.localAsn,
            min: 1,
            max: 4294967295,
        }));
    }
    errors.collect(ros.propertyValidator('localAsn', ros.validateNumber)(properties.localAsn));
    errors.collect(ros.propertyValidator('tunnelCidr', ros.validateString)(properties.tunnelCidr));
    errors.collect(ros.propertyValidator('localBgpIp', ros.validateString)(properties.localBgpIp));
    return errors.wrap('supplied properties not correct for "TunnelBgpConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.TunnelBgpConfig` resource
 *
 * @param properties - the TypeScript properties of a `TunnelBgpConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.TunnelBgpConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionTunnelBgpConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnConnection_TunnelBgpConfigPropertyValidator(properties).assertSuccess();
    return {
        LocalAsn: ros.numberToRosTemplate(properties.localAsn),
        TunnelCidr: ros.stringToRosTemplate(properties.tunnelCidr),
        LocalBgpIp: ros.stringToRosTemplate(properties.localBgpIp),
    };
}
/**
 * Determine whether the given properties match those of a `TunnelIkeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TunnelIkeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnConnection_TunnelIkeConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.ikeAuthAlg && (typeof properties.ikeAuthAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ikeAuthAlg', ros.validateAllowedValues)({
            data: properties.ikeAuthAlg,
            allowedValues: ["md5", "sha1", "sha256", "sha384", "sha512", "sm3"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeAuthAlg', ros.validateString)(properties.ikeAuthAlg));
    if (properties.localId && (Array.isArray(properties.localId) || (typeof properties.localId) === 'string')) {
        errors.collect(ros.propertyValidator('localId', ros.validateLength)({
            data: properties.localId.length,
            min: undefined,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('localId', ros.validateString)(properties.localId));
    if (properties.ikeEncAlg && (typeof properties.ikeEncAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ikeEncAlg', ros.validateAllowedValues)({
            data: properties.ikeEncAlg,
            allowedValues: ["aes", "aes192", "aes256", "des", "3des", "sm4"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeEncAlg', ros.validateString)(properties.ikeEncAlg));
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
    return errors.wrap('supplied properties not correct for "TunnelIkeConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.TunnelIkeConfig` resource
 *
 * @param properties - the TypeScript properties of a `TunnelIkeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.TunnelIkeConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionTunnelIkeConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnConnection_TunnelIkeConfigPropertyValidator(properties).assertSuccess();
    return {
        IkeAuthAlg: ros.stringToRosTemplate(properties.ikeAuthAlg),
        LocalId: ros.stringToRosTemplate(properties.localId),
        IkeEncAlg: ros.stringToRosTemplate(properties.ikeEncAlg),
        IkeVersion: ros.stringToRosTemplate(properties.ikeVersion),
        IkeMode: ros.stringToRosTemplate(properties.ikeMode),
        IkeLifetime: ros.numberToRosTemplate(properties.ikeLifetime),
        RemoteId: ros.stringToRosTemplate(properties.remoteId),
        Psk: ros.stringToRosTemplate(properties.psk),
        IkePfs: ros.stringToRosTemplate(properties.ikePfs),
    };
}
/**
 * Determine whether the given properties match those of a `TunnelIpsecConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TunnelIpsecConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnConnection_TunnelIpsecConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.ipsecPfs && (typeof properties.ipsecPfs) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecPfs', ros.validateAllowedValues)({
            data: properties.ipsecPfs,
            allowedValues: ["disabled", "group1", "group2", "group5", "group14", "group24"],
        }));
    }
    errors.collect(ros.propertyValidator('ipsecPfs', ros.validateString)(properties.ipsecPfs));
    if (properties.ipsecEncAlg && (typeof properties.ipsecEncAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecEncAlg', ros.validateAllowedValues)({
            data: properties.ipsecEncAlg,
            allowedValues: ["aes", "aes192", "aes256", "des", "3des", "sm4"],
        }));
    }
    errors.collect(ros.propertyValidator('ipsecEncAlg', ros.validateString)(properties.ipsecEncAlg));
    if (properties.ipsecAuthAlg && (typeof properties.ipsecAuthAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecAuthAlg', ros.validateAllowedValues)({
            data: properties.ipsecAuthAlg,
            allowedValues: ["md5", "sha1", "sha256", "sha384", "sha512", "sm3"],
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
    return errors.wrap('supplied properties not correct for "TunnelIpsecConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.TunnelIpsecConfig` resource
 *
 * @param properties - the TypeScript properties of a `TunnelIpsecConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.TunnelIpsecConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionTunnelIpsecConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnConnection_TunnelIpsecConfigPropertyValidator(properties).assertSuccess();
    return {
        IpsecPfs: ros.stringToRosTemplate(properties.ipsecPfs),
        IpsecEncAlg: ros.stringToRosTemplate(properties.ipsecEncAlg),
        IpsecAuthAlg: ros.stringToRosTemplate(properties.ipsecAuthAlg),
        IpsecLifetime: ros.numberToRosTemplate(properties.ipsecLifetime),
    };
}
/**
 * Determine whether the given properties match those of a `TunnelOptionsSpecificationProperty`
 *
 * @param properties - the TypeScript properties of a `TunnelOptionsSpecificationProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnConnection_TunnelOptionsSpecificationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.role && (typeof properties.role) !== 'object') {
        errors.collect(ros.propertyValidator('role', ros.validateAllowedValues)({
            data: properties.role,
            allowedValues: ["master", "slave"],
        }));
    }
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('tunnelIkeConfig', RosVpnConnection_TunnelIkeConfigPropertyValidator)(properties.tunnelIkeConfig));
    errors.collect(ros.propertyValidator('customerGatewayId', ros.validateString)(properties.customerGatewayId));
    errors.collect(ros.propertyValidator('tunnelBgpConfig', RosVpnConnection_TunnelBgpConfigPropertyValidator)(properties.tunnelBgpConfig));
    errors.collect(ros.propertyValidator('remoteCaCertificate', ros.validateString)(properties.remoteCaCertificate));
    errors.collect(ros.propertyValidator('enableNatTraversal', ros.validateBoolean)(properties.enableNatTraversal));
    errors.collect(ros.propertyValidator('tunnelIpsecConfig', RosVpnConnection_TunnelIpsecConfigPropertyValidator)(properties.tunnelIpsecConfig));
    errors.collect(ros.propertyValidator('enableDpd', ros.validateBoolean)(properties.enableDpd));
    return errors.wrap('supplied properties not correct for "TunnelOptionsSpecificationProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.TunnelOptionsSpecification` resource
 *
 * @param properties - the TypeScript properties of a `TunnelOptionsSpecificationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.TunnelOptionsSpecification` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionTunnelOptionsSpecificationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVpnConnection_TunnelOptionsSpecificationPropertyValidator(properties).assertSuccess();
    return {
        Role: ros.stringToRosTemplate(properties.role),
        TunnelIkeConfig: rosVpnConnectionTunnelIkeConfigPropertyToRosTemplate(properties.tunnelIkeConfig),
        CustomerGatewayId: ros.stringToRosTemplate(properties.customerGatewayId),
        TunnelBgpConfig: rosVpnConnectionTunnelBgpConfigPropertyToRosTemplate(properties.tunnelBgpConfig),
        RemoteCaCertificate: ros.stringToRosTemplate(properties.remoteCaCertificate),
        EnableNatTraversal: ros.booleanToRosTemplate(properties.enableNatTraversal),
        TunnelIpsecConfig: rosVpnConnectionTunnelIpsecConfigPropertyToRosTemplate(properties.tunnelIpsecConfig),
        EnableDpd: ros.booleanToRosTemplate(properties.enableDpd),
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
    errors.collect(ros.propertyValidator('vpnType', ros.validateString)(properties.vpnType));
    errors.collect(ros.propertyValidator('sslConnections', ros.validateNumber)(properties.sslConnections));
    errors.collect(ros.propertyValidator('disasterRecoveryVSwitchId', ros.validateString)(properties.disasterRecoveryVSwitchId));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 2,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
            data: properties.instanceChargeType,
            allowedValues: ["POSTPAY", "PREPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if (properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if (properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
            data: properties.networkType,
            allowedValues: ["public", "private"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if (properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateAllowedValues)({
            data: properties.bandwidth,
            allowedValues: [5, 10, 20, 50, 100, 200],
        }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosVpnGateway_TagsPropertyValidator))(properties.tags));
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
        DisasterRecoveryVSwitchId: ros.stringToRosTemplate(properties.disasterRecoveryVSwitchId),
        EnableIpsec: ros.booleanToRosTemplate(properties.enableIpsec),
        EnableSsl: ros.booleanToRosTemplate(properties.enableSsl),
        InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
        Name: ros.stringToRosTemplate(properties.name),
        NetworkType: ros.stringToRosTemplate(properties.networkType),
        Period: ros.numberToRosTemplate(properties.period),
        SslConnections: ros.numberToRosTemplate(properties.sslConnections),
        Tags: ros.listMapper(rosVpnGatewayTagsPropertyToRosTemplate)(properties.tags),
        VpnType: ros.stringToRosTemplate(properties.vpnType),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VpnGateway`, which is used to create a VPN gateway.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpnGateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpngateway
 */
class RosVpnGateway extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVpnGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDisasterRecoveryInternetIp = this.getAtt('DisasterRecoveryInternetIp');
        this.attrDisasterRecoveryVSwitchId = this.getAtt('DisasterRecoveryVSwitchId');
        this.attrInternetIp = this.getAtt('InternetIp');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrSpec = this.getAtt('Spec');
        this.attrSslMaxConnections = this.getAtt('SslMaxConnections');
        this.attrSslVpnInternetIp = this.getAtt('SslVpnInternetIp');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrVpnGatewayId = this.getAtt('VpnGatewayId');
        this.attrVpnType = this.getAtt('VpnType');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.vpcId = props.vpcId;
        this.autoPay = props.autoPay;
        this.description = props.description;
        this.disasterRecoveryVSwitchId = props.disasterRecoveryVSwitchId;
        this.enableIpsec = props.enableIpsec;
        this.enableSsl = props.enableSsl;
        this.instanceChargeType = props.instanceChargeType;
        this.name = props.name;
        this.networkType = props.networkType;
        this.period = props.period;
        this.sslConnections = props.sslConnections;
        this.tags = props.tags;
        this.vpnType = props.vpnType;
        this.vSwitchId = props.vSwitchId;
    }
    get rosProperties() {
        return {
            bandwidth: this.bandwidth,
            vpcId: this.vpcId,
            autoPay: this.autoPay,
            description: this.description,
            disasterRecoveryVSwitchId: this.disasterRecoveryVSwitchId,
            enableIpsec: this.enableIpsec,
            enableSsl: this.enableSsl,
            instanceChargeType: this.instanceChargeType,
            name: this.name,
            networkType: this.networkType,
            period: this.period,
            sslConnections: this.sslConnections,
            tags: this.tags,
            vpnType: this.vpnType,
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VpnPbrRouteEntry`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpnPbrRouteEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnpbrrouteentry
 */
class RosVpnPbrRouteEntry extends ros.RosResource {
    /**
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::VPC::VpnRouteEntry`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpnRouteEntry` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnrouteentry
 */
class RosVpnRouteEntry extends ros.RosResource {
    /**
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