"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosVSwitch = exports.RosVPC = exports.RosSnapshot = exports.RosSecurityGroupIngress = exports.RosSecurityGroupEgress = exports.RosSecurityGroupClone = exports.RosSecurityGroup = exports.RosSSHKeyPairAttachment = exports.RosSSHKeyPair = exports.RosSNatEntry = exports.RosRunCommand = exports.RosRoute = exports.RosPrefixList = exports.RosNetworkInterfacePermission = exports.RosNetworkInterfaceAttachment = exports.RosNetworkInterface = exports.RosLaunchTemplate = exports.RosJoinSecurityGroup = exports.RosInvocation = exports.RosInstanceGroupClone = exports.RosInstanceGroup = exports.RosInstanceClone = exports.RosInstance = exports.RosHpcCluster = exports.RosForwardEntry = exports.RosDiskAttachment = exports.RosDisk = exports.RosDeploymentSet = exports.RosDedicatedHost = exports.RosCustomImage = exports.RosCopyImage = exports.RosCommand = exports.RosAutoSnapshotPolicy = exports.RosAutoProvisioningGroup = exports.RosAssignPrivateIpAddresses = exports.RosAssignIpv6Addresses = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAssignIpv6AddressesProps`
 *
 * @param properties - the TypeScript properties of a `RosAssignIpv6AddressesProps`
 *
 * @returns the result of the validation.
 */
function RosAssignIpv6AddressesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.ipv6AddressCount && (typeof properties.ipv6AddressCount) !== 'object') {
        errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateRange)({
            data: properties.ipv6AddressCount,
            min: 0,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    if (properties.ipv6Addresses && (Array.isArray(properties.ipv6Addresses) || (typeof properties.ipv6Addresses) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6Addresses', ros.validateLength)({
            data: properties.ipv6Addresses.length,
            min: undefined,
            max: 1,
        }));
    }
    errors.collect(ros.propertyValidator('ipv6Addresses', ros.listValidator(ros.validateAny))(properties.ipv6Addresses));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.requiredValidator)(properties.networkInterfaceId));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.validateString)(properties.networkInterfaceId));
    return errors.wrap('supplied properties not correct for "RosAssignIpv6AddressesProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AssignIpv6Addresses` resource
 *
 * @param properties - the TypeScript properties of a `RosAssignIpv6AddressesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AssignIpv6Addresses` resource.
 */
// @ts-ignore TS6133
function rosAssignIpv6AddressesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAssignIpv6AddressesPropsValidator(properties).assertSuccess();
    }
    return {
        NetworkInterfaceId: ros.stringToRosTemplate(properties.networkInterfaceId),
        Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
        Ipv6Addresses: ros.listMapper(ros.objectToRosTemplate)(properties.ipv6Addresses),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::AssignIpv6Addresses`
 */
class RosAssignIpv6Addresses extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::AssignIpv6Addresses`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAssignIpv6Addresses.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIpv6AddressIds = this.getAtt('Ipv6AddressIds');
        this.attrIpv6Addresses = this.getAtt('Ipv6Addresses');
        this.attrNetworkInterfaceId = this.getAtt('NetworkInterfaceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.networkInterfaceId = props.networkInterfaceId;
        this.ipv6AddressCount = props.ipv6AddressCount;
        this.ipv6Addresses = props.ipv6Addresses;
    }
    get rosProperties() {
        return {
            networkInterfaceId: this.networkInterfaceId,
            ipv6AddressCount: this.ipv6AddressCount,
            ipv6Addresses: this.ipv6Addresses,
        };
    }
    renderProperties(props) {
        return rosAssignIpv6AddressesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAssignIpv6Addresses = RosAssignIpv6Addresses;
/**
 * The resource type name for this resource class.
 */
RosAssignIpv6Addresses.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AssignIpv6Addresses";
/**
 * Determine whether the given properties match those of a `RosAssignPrivateIpAddressesProps`
 *
 * @param properties - the TypeScript properties of a `RosAssignPrivateIpAddressesProps`
 *
 * @returns the result of the validation.
 */
function RosAssignPrivateIpAddressesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.secondaryPrivateIpAddressCount && (typeof properties.secondaryPrivateIpAddressCount) !== 'object') {
        errors.collect(ros.propertyValidator('secondaryPrivateIpAddressCount', ros.validateRange)({
            data: properties.secondaryPrivateIpAddressCount,
            min: 0,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('secondaryPrivateIpAddressCount', ros.validateNumber)(properties.secondaryPrivateIpAddressCount));
    if (properties.privateIpAddresses && (Array.isArray(properties.privateIpAddresses) || (typeof properties.privateIpAddresses) === 'string')) {
        errors.collect(ros.propertyValidator('privateIpAddresses', ros.validateLength)({
            data: properties.privateIpAddresses.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('privateIpAddresses', ros.listValidator(ros.validateAny))(properties.privateIpAddresses));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.requiredValidator)(properties.networkInterfaceId));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.validateString)(properties.networkInterfaceId));
    return errors.wrap('supplied properties not correct for "RosAssignPrivateIpAddressesProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AssignPrivateIpAddresses` resource
 *
 * @param properties - the TypeScript properties of a `RosAssignPrivateIpAddressesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AssignPrivateIpAddresses` resource.
 */
// @ts-ignore TS6133
function rosAssignPrivateIpAddressesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAssignPrivateIpAddressesPropsValidator(properties).assertSuccess();
    }
    return {
        NetworkInterfaceId: ros.stringToRosTemplate(properties.networkInterfaceId),
        PrivateIpAddresses: ros.listMapper(ros.objectToRosTemplate)(properties.privateIpAddresses),
        SecondaryPrivateIpAddressCount: ros.numberToRosTemplate(properties.secondaryPrivateIpAddressCount),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::AssignPrivateIpAddresses`
 */
class RosAssignPrivateIpAddresses extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::AssignPrivateIpAddresses`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAssignPrivateIpAddresses.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkInterfaceId = this.getAtt('NetworkInterfaceId');
        this.attrPrivateIpAddresses = this.getAtt('PrivateIpAddresses');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.networkInterfaceId = props.networkInterfaceId;
        this.privateIpAddresses = props.privateIpAddresses;
        this.secondaryPrivateIpAddressCount = props.secondaryPrivateIpAddressCount;
    }
    get rosProperties() {
        return {
            networkInterfaceId: this.networkInterfaceId,
            privateIpAddresses: this.privateIpAddresses,
            secondaryPrivateIpAddressCount: this.secondaryPrivateIpAddressCount,
        };
    }
    renderProperties(props) {
        return rosAssignPrivateIpAddressesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAssignPrivateIpAddresses = RosAssignPrivateIpAddresses;
/**
 * The resource type name for this resource class.
 */
RosAssignPrivateIpAddresses.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AssignPrivateIpAddresses";
/**
 * Determine whether the given properties match those of a `RosAutoProvisioningGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosAutoProvisioningGroupProps`
 *
 * @returns the result of the validation.
 */
function RosAutoProvisioningGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('totalTargetCapacity', ros.requiredValidator)(properties.totalTargetCapacity));
    errors.collect(ros.propertyValidator('totalTargetCapacity', ros.validateString)(properties.totalTargetCapacity));
    errors.collect(ros.propertyValidator('autoProvisioningGroupName', ros.validateString)(properties.autoProvisioningGroupName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.excessCapacityTerminationPolicy && (typeof properties.excessCapacityTerminationPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('excessCapacityTerminationPolicy', ros.validateAllowedValues)({
            data: properties.excessCapacityTerminationPolicy,
            allowedValues: ["no-termination", "termination"],
        }));
    }
    errors.collect(ros.propertyValidator('excessCapacityTerminationPolicy', ros.validateString)(properties.excessCapacityTerminationPolicy));
    errors.collect(ros.propertyValidator('launchTemplateConfig', ros.listValidator(RosAutoProvisioningGroup_LaunchTemplateConfigPropertyValidator))(properties.launchTemplateConfig));
    errors.collect(ros.propertyValidator('launchTemplateId', ros.validateString)(properties.launchTemplateId));
    errors.collect(ros.propertyValidator('checkExecutionStatus', ros.validateBoolean)(properties.checkExecutionStatus));
    errors.collect(ros.propertyValidator('payAsYouGoTargetCapacity', ros.validateString)(properties.payAsYouGoTargetCapacity));
    if (properties.autoProvisioningGroupType && (typeof properties.autoProvisioningGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('autoProvisioningGroupType', ros.validateAllowedValues)({
            data: properties.autoProvisioningGroupType,
            allowedValues: ["maintain", "request"],
        }));
    }
    errors.collect(ros.propertyValidator('autoProvisioningGroupType', ros.validateString)(properties.autoProvisioningGroupType));
    if (properties.spotInstanceInterruptionBehavior && (typeof properties.spotInstanceInterruptionBehavior) !== 'object') {
        errors.collect(ros.propertyValidator('spotInstanceInterruptionBehavior', ros.validateAllowedValues)({
            data: properties.spotInstanceInterruptionBehavior,
            allowedValues: ["stop", "terminate"],
        }));
    }
    errors.collect(ros.propertyValidator('spotInstanceInterruptionBehavior', ros.validateString)(properties.spotInstanceInterruptionBehavior));
    errors.collect(ros.propertyValidator('validUntil', ros.validateString)(properties.validUntil));
    errors.collect(ros.propertyValidator('terminateInstancesWithExpiration', ros.validateBoolean)(properties.terminateInstancesWithExpiration));
    if (properties.defaultTargetCapacityType && (typeof properties.defaultTargetCapacityType) !== 'object') {
        errors.collect(ros.propertyValidator('defaultTargetCapacityType', ros.validateAllowedValues)({
            data: properties.defaultTargetCapacityType,
            allowedValues: ["PayAsYouGo", "Spot"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultTargetCapacityType', ros.validateString)(properties.defaultTargetCapacityType));
    errors.collect(ros.propertyValidator('launchConfiguration', RosAutoProvisioningGroup_LaunchConfigurationPropertyValidator)(properties.launchConfiguration));
    errors.collect(ros.propertyValidator('spotInstancePoolsToUseCount', ros.validateNumber)(properties.spotInstancePoolsToUseCount));
    errors.collect(ros.propertyValidator('spotTargetCapacity', ros.validateString)(properties.spotTargetCapacity));
    errors.collect(ros.propertyValidator('launchTemplateVersion', ros.validateString)(properties.launchTemplateVersion));
    errors.collect(ros.propertyValidator('validFrom', ros.validateString)(properties.validFrom));
    errors.collect(ros.propertyValidator('maxSpotPrice', ros.validateNumber)(properties.maxSpotPrice));
    if (properties.spotAllocationStrategy && (typeof properties.spotAllocationStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotAllocationStrategy', ros.validateAllowedValues)({
            data: properties.spotAllocationStrategy,
            allowedValues: ["diversified", "lowest-price"],
        }));
    }
    errors.collect(ros.propertyValidator('spotAllocationStrategy', ros.validateString)(properties.spotAllocationStrategy));
    errors.collect(ros.propertyValidator('terminateInstances', ros.validateBoolean)(properties.terminateInstances));
    if (properties.payAsYouGoAllocationStrategy && (typeof properties.payAsYouGoAllocationStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('payAsYouGoAllocationStrategy', ros.validateAllowedValues)({
            data: properties.payAsYouGoAllocationStrategy,
            allowedValues: ["lowest-price", "prioritized"],
        }));
    }
    errors.collect(ros.propertyValidator('payAsYouGoAllocationStrategy', ros.validateString)(properties.payAsYouGoAllocationStrategy));
    return errors.wrap('supplied properties not correct for "RosAutoProvisioningGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosAutoProvisioningGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup` resource.
 */
// @ts-ignore TS6133
function rosAutoProvisioningGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAutoProvisioningGroupPropsValidator(properties).assertSuccess();
    }
    return {
        TotalTargetCapacity: ros.stringToRosTemplate(properties.totalTargetCapacity),
        AutoProvisioningGroupName: ros.stringToRosTemplate(properties.autoProvisioningGroupName),
        AutoProvisioningGroupType: ros.stringToRosTemplate(properties.autoProvisioningGroupType),
        CheckExecutionStatus: ros.booleanToRosTemplate(properties.checkExecutionStatus),
        DefaultTargetCapacityType: ros.stringToRosTemplate(properties.defaultTargetCapacityType),
        Description: ros.stringToRosTemplate(properties.description),
        ExcessCapacityTerminationPolicy: ros.stringToRosTemplate(properties.excessCapacityTerminationPolicy),
        LaunchConfiguration: rosAutoProvisioningGroupLaunchConfigurationPropertyToRosTemplate(properties.launchConfiguration),
        LaunchTemplateConfig: ros.listMapper(rosAutoProvisioningGroupLaunchTemplateConfigPropertyToRosTemplate)(properties.launchTemplateConfig),
        LaunchTemplateId: ros.stringToRosTemplate(properties.launchTemplateId),
        LaunchTemplateVersion: ros.stringToRosTemplate(properties.launchTemplateVersion),
        MaxSpotPrice: ros.numberToRosTemplate(properties.maxSpotPrice),
        PayAsYouGoAllocationStrategy: ros.stringToRosTemplate(properties.payAsYouGoAllocationStrategy),
        PayAsYouGoTargetCapacity: ros.stringToRosTemplate(properties.payAsYouGoTargetCapacity),
        SpotAllocationStrategy: ros.stringToRosTemplate(properties.spotAllocationStrategy),
        SpotInstanceInterruptionBehavior: ros.stringToRosTemplate(properties.spotInstanceInterruptionBehavior),
        SpotInstancePoolsToUseCount: ros.numberToRosTemplate(properties.spotInstancePoolsToUseCount),
        SpotTargetCapacity: ros.stringToRosTemplate(properties.spotTargetCapacity),
        TerminateInstances: ros.booleanToRosTemplate(properties.terminateInstances),
        TerminateInstancesWithExpiration: ros.booleanToRosTemplate(properties.terminateInstancesWithExpiration),
        ValidFrom: ros.stringToRosTemplate(properties.validFrom),
        ValidUntil: ros.stringToRosTemplate(properties.validUntil),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::AutoProvisioningGroup`
 */
class RosAutoProvisioningGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::AutoProvisioningGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAutoProvisioningGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoProvisioningGroupId = this.getAtt('AutoProvisioningGroupId');
        this.attrAutoProvisioningGroupName = this.getAtt('AutoProvisioningGroupName');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.totalTargetCapacity = props.totalTargetCapacity;
        this.autoProvisioningGroupName = props.autoProvisioningGroupName;
        this.autoProvisioningGroupType = props.autoProvisioningGroupType;
        this.checkExecutionStatus = props.checkExecutionStatus;
        this.defaultTargetCapacityType = props.defaultTargetCapacityType;
        this.description = props.description;
        this.excessCapacityTerminationPolicy = props.excessCapacityTerminationPolicy;
        this.launchConfiguration = props.launchConfiguration;
        this.launchTemplateConfig = props.launchTemplateConfig;
        this.launchTemplateId = props.launchTemplateId;
        this.launchTemplateVersion = props.launchTemplateVersion;
        this.maxSpotPrice = props.maxSpotPrice;
        this.payAsYouGoAllocationStrategy = props.payAsYouGoAllocationStrategy;
        this.payAsYouGoTargetCapacity = props.payAsYouGoTargetCapacity;
        this.spotAllocationStrategy = props.spotAllocationStrategy;
        this.spotInstanceInterruptionBehavior = props.spotInstanceInterruptionBehavior;
        this.spotInstancePoolsToUseCount = props.spotInstancePoolsToUseCount;
        this.spotTargetCapacity = props.spotTargetCapacity;
        this.terminateInstances = props.terminateInstances;
        this.terminateInstancesWithExpiration = props.terminateInstancesWithExpiration;
        this.validFrom = props.validFrom;
        this.validUntil = props.validUntil;
    }
    get rosProperties() {
        return {
            totalTargetCapacity: this.totalTargetCapacity,
            autoProvisioningGroupName: this.autoProvisioningGroupName,
            autoProvisioningGroupType: this.autoProvisioningGroupType,
            checkExecutionStatus: this.checkExecutionStatus,
            defaultTargetCapacityType: this.defaultTargetCapacityType,
            description: this.description,
            excessCapacityTerminationPolicy: this.excessCapacityTerminationPolicy,
            launchConfiguration: this.launchConfiguration,
            launchTemplateConfig: this.launchTemplateConfig,
            launchTemplateId: this.launchTemplateId,
            launchTemplateVersion: this.launchTemplateVersion,
            maxSpotPrice: this.maxSpotPrice,
            payAsYouGoAllocationStrategy: this.payAsYouGoAllocationStrategy,
            payAsYouGoTargetCapacity: this.payAsYouGoTargetCapacity,
            spotAllocationStrategy: this.spotAllocationStrategy,
            spotInstanceInterruptionBehavior: this.spotInstanceInterruptionBehavior,
            spotInstancePoolsToUseCount: this.spotInstancePoolsToUseCount,
            spotTargetCapacity: this.spotTargetCapacity,
            terminateInstances: this.terminateInstances,
            terminateInstancesWithExpiration: this.terminateInstancesWithExpiration,
            validFrom: this.validFrom,
            validUntil: this.validUntil,
        };
    }
    renderProperties(props) {
        return rosAutoProvisioningGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAutoProvisioningGroup = RosAutoProvisioningGroup;
/**
 * The resource type name for this resource class.
 */
RosAutoProvisioningGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AutoProvisioningGroup";
/**
 * Determine whether the given properties match those of a `DataDiskProperty`
 *
 * @param properties - the TypeScript properties of a `DataDiskProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoProvisioningGroup_DataDiskPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    errors.collect(ros.propertyValidator('deleteWithInstance', ros.validateBoolean)(properties.deleteWithInstance));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    return errors.wrap('supplied properties not correct for "DataDiskProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.DataDisk` resource
 *
 * @param properties - the TypeScript properties of a `DataDiskProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.DataDisk` resource.
 */
// @ts-ignore TS6133
function rosAutoProvisioningGroupDataDiskPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAutoProvisioningGroup_DataDiskPropertyValidator(properties).assertSuccess();
    return {
        SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
        Category: ros.stringToRosTemplate(properties.category),
        Description: ros.stringToRosTemplate(properties.description),
        KmsKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
        Encrypted: ros.booleanToRosTemplate(properties.encrypted),
        PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
        Size: ros.numberToRosTemplate(properties.size),
        DeleteWithInstance: ros.booleanToRosTemplate(properties.deleteWithInstance),
        DiskName: ros.stringToRosTemplate(properties.diskName),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
    };
}
/**
 * Determine whether the given properties match those of a `LaunchConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `LaunchConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoProvisioningGroup_LaunchConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    if (properties.ioOptimized && (typeof properties.ioOptimized) !== 'object') {
        errors.collect(ros.propertyValidator('ioOptimized', ros.validateAllowedValues)({
            data: properties.ioOptimized,
            allowedValues: ["optimized", "none"],
        }));
    }
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateString)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    errors.collect(ros.propertyValidator('systemDiskDescription', ros.validateString)(properties.systemDiskDescription));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('systemDiskName', ros.validateString)(properties.systemDiskName));
    if (properties.dataDisk && (Array.isArray(properties.dataDisk) || (typeof properties.dataDisk) === 'string')) {
        errors.collect(ros.propertyValidator('dataDisk', ros.validateLength)({
            data: properties.dataDisk.length,
            min: 1,
            max: 16,
        }));
    }
    errors.collect(ros.propertyValidator('dataDisk', ros.listValidator(RosAutoProvisioningGroup_DataDiskPropertyValidator))(properties.dataDisk));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('instanceDescription', ros.validateString)(properties.instanceDescription));
    if (properties.tag && (Array.isArray(properties.tag) || (typeof properties.tag) === 'string')) {
        errors.collect(ros.propertyValidator('tag', ros.validateLength)({
            data: properties.tag.length,
            min: 1,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tag', ros.listValidator(ros.validateRosTag))(properties.tag));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    errors.collect(ros.propertyValidator('creditSpecification', ros.validateString)(properties.creditSpecification));
    errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateString)(properties.securityEnhancementStrategy));
    errors.collect(ros.propertyValidator('passwordInherit', ros.validateBoolean)(properties.passwordInherit));
    return errors.wrap('supplied properties not correct for "LaunchConfigurationProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.LaunchConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `LaunchConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.LaunchConfiguration` resource.
 */
// @ts-ignore TS6133
function rosAutoProvisioningGroupLaunchConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAutoProvisioningGroup_LaunchConfigurationPropertyValidator(properties).assertSuccess();
    return {
        KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
        IoOptimized: ros.stringToRosTemplate(properties.ioOptimized),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
        UserData: ros.stringToRosTemplate(properties.userData),
        SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
        InstanceName: ros.stringToRosTemplate(properties.instanceName),
        SystemDiskName: ros.stringToRosTemplate(properties.systemDiskName),
        DataDisk: ros.listMapper(rosAutoProvisioningGroupDataDiskPropertyToRosTemplate)(properties.dataDisk),
        RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
        InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
        SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
        ImageId: ros.stringToRosTemplate(properties.imageId),
        InstanceDescription: ros.stringToRosTemplate(properties.instanceDescription),
        Tag: ros.listMapper(ros.rosTagToRosTemplate)(properties.tag),
        HostName: ros.stringToRosTemplate(properties.hostName),
        CreditSpecification: ros.stringToRosTemplate(properties.creditSpecification),
        SecurityEnhancementStrategy: ros.stringToRosTemplate(properties.securityEnhancementStrategy),
        PasswordInherit: ros.booleanToRosTemplate(properties.passwordInherit),
    };
}
/**
 * Determine whether the given properties match those of a `LaunchTemplateConfigProperty`
 *
 * @param properties - the TypeScript properties of a `LaunchTemplateConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoProvisioningGroup_LaunchTemplateConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('weightedCapacity', ros.validateNumber)(properties.weightedCapacity));
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('maxPrice', ros.validateNumber)(properties.maxPrice));
    return errors.wrap('supplied properties not correct for "LaunchTemplateConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.LaunchTemplateConfig` resource
 *
 * @param properties - the TypeScript properties of a `LaunchTemplateConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.LaunchTemplateConfig` resource.
 */
// @ts-ignore TS6133
function rosAutoProvisioningGroupLaunchTemplateConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAutoProvisioningGroup_LaunchTemplateConfigPropertyValidator(properties).assertSuccess();
    return {
        WeightedCapacity: ros.numberToRosTemplate(properties.weightedCapacity),
        Priority: ros.numberToRosTemplate(properties.priority),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        InstanceType: ros.stringToRosTemplate(properties.instanceType),
        MaxPrice: ros.numberToRosTemplate(properties.maxPrice),
    };
}
/**
 * Determine whether the given properties match those of a `TagProperty`
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoProvisioningGroup_TagPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.Tag` resource
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoProvisioningGroup.Tag` resource.
 */
// @ts-ignore TS6133
function rosAutoProvisioningGroupTagPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAutoProvisioningGroup_TagPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosAutoSnapshotPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosAutoSnapshotPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosAutoSnapshotPolicyPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('timePoints', ros.requiredValidator)(properties.timePoints));
    errors.collect(ros.propertyValidator('timePoints', ros.listValidator(ros.validateAny))(properties.timePoints));
    errors.collect(ros.propertyValidator('diskIds', ros.listValidator(ros.validateString))(properties.diskIds));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('retentionDays', ros.requiredValidator)(properties.retentionDays));
    if (properties.retentionDays && (typeof properties.retentionDays) !== 'object') {
        errors.collect(ros.propertyValidator('retentionDays', ros.validateRange)({
            data: properties.retentionDays,
            min: -1,
            max: 65536,
        }));
    }
    errors.collect(ros.propertyValidator('retentionDays', ros.validateNumber)(properties.retentionDays));
    errors.collect(ros.propertyValidator('repeatWeekdays', ros.requiredValidator)(properties.repeatWeekdays));
    errors.collect(ros.propertyValidator('repeatWeekdays', ros.listValidator(ros.validateNumber))(properties.repeatWeekdays));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyName', ros.validateString)(properties.autoSnapshotPolicyName));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosAutoSnapshotPolicy_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosAutoSnapshotPolicyProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoSnapshotPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosAutoSnapshotPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoSnapshotPolicy` resource.
 */
// @ts-ignore TS6133
function rosAutoSnapshotPolicyPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAutoSnapshotPolicyPropsValidator(properties).assertSuccess();
    }
    return {
        RepeatWeekdays: ros.listMapper(ros.numberToRosTemplate)(properties.repeatWeekdays),
        RetentionDays: ros.numberToRosTemplate(properties.retentionDays),
        TimePoints: ros.listMapper(ros.objectToRosTemplate)(properties.timePoints),
        AutoSnapshotPolicyName: ros.stringToRosTemplate(properties.autoSnapshotPolicyName),
        DiskIds: ros.listMapper(ros.stringToRosTemplate)(properties.diskIds),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        Tags: ros.listMapper(rosAutoSnapshotPolicyTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::AutoSnapshotPolicy`
 */
class RosAutoSnapshotPolicy extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::AutoSnapshotPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAutoSnapshotPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoSnapshotPolicyId = this.getAtt('AutoSnapshotPolicyId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.repeatWeekdays = props.repeatWeekdays;
        this.retentionDays = props.retentionDays;
        this.timePoints = props.timePoints;
        this.autoSnapshotPolicyName = props.autoSnapshotPolicyName;
        this.diskIds = props.diskIds;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            repeatWeekdays: this.repeatWeekdays,
            retentionDays: this.retentionDays,
            timePoints: this.timePoints,
            autoSnapshotPolicyName: this.autoSnapshotPolicyName,
            diskIds: this.diskIds,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosAutoSnapshotPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAutoSnapshotPolicy = RosAutoSnapshotPolicy;
/**
 * The resource type name for this resource class.
 */
RosAutoSnapshotPolicy.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::AutoSnapshotPolicy";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosAutoSnapshotPolicy_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoSnapshotPolicy.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::AutoSnapshotPolicy.Tags` resource.
 */
// @ts-ignore TS6133
function rosAutoSnapshotPolicyTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAutoSnapshotPolicy_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosCommandProps`
 *
 * @param properties - the TypeScript properties of a `RosCommandProps`
 *
 * @returns the result of the validation.
 */
function RosCommandPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workingDir', ros.validateString)(properties.workingDir));
    errors.collect(ros.propertyValidator('commandContent', ros.validateString)(properties.commandContent));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('enableParameter', ros.validateBoolean)(properties.enableParameter));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCommandProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Command` resource
 *
 * @param properties - the TypeScript properties of a `RosCommandProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Command` resource.
 */
// @ts-ignore TS6133
function rosCommandPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCommandPropsValidator(properties).assertSuccess();
    }
    return {
        Type: ros.stringToRosTemplate(properties.type),
        CommandContent: ros.stringToRosTemplate(properties.commandContent),
        Description: ros.stringToRosTemplate(properties.description),
        EnableParameter: ros.booleanToRosTemplate(properties.enableParameter),
        Name: ros.stringToRosTemplate(properties.name),
        Timeout: ros.numberToRosTemplate(properties.timeout),
        WorkingDir: ros.stringToRosTemplate(properties.workingDir),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::Command`
 */
class RosCommand extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::Command`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCommand.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCommandId = this.getAtt('CommandId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.type = props.type;
        this.commandContent = props.commandContent;
        this.description = props.description;
        this.enableParameter = props.enableParameter;
        this.name = props.name;
        this.timeout = props.timeout;
        this.workingDir = props.workingDir;
    }
    get rosProperties() {
        return {
            type: this.type,
            commandContent: this.commandContent,
            description: this.description,
            enableParameter: this.enableParameter,
            name: this.name,
            timeout: this.timeout,
            workingDir: this.workingDir,
        };
    }
    renderProperties(props) {
        return rosCommandPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCommand = RosCommand;
/**
 * The resource type name for this resource class.
 */
RosCommand.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Command";
/**
 * Determine whether the given properties match those of a `RosCopyImageProps`
 *
 * @param properties - the TypeScript properties of a `RosCopyImageProps`
 *
 * @returns the result of the validation.
 */
function RosCopyImagePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceRegionId', ros.validateString)(properties.sourceRegionId));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('destinationRegionId', ros.requiredValidator)(properties.destinationRegionId));
    errors.collect(ros.propertyValidator('destinationRegionId', ros.validateString)(properties.destinationRegionId));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('destinationDescription', ros.validateString)(properties.destinationDescription));
    errors.collect(ros.propertyValidator('tag', ros.listValidator(ros.validateRosTag))(properties.tag));
    errors.collect(ros.propertyValidator('destinationImageName', ros.validateString)(properties.destinationImageName));
    return errors.wrap('supplied properties not correct for "RosCopyImageProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::CopyImage` resource
 *
 * @param properties - the TypeScript properties of a `RosCopyImageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::CopyImage` resource.
 */
// @ts-ignore TS6133
function rosCopyImagePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCopyImagePropsValidator(properties).assertSuccess();
    }
    return {
        DestinationRegionId: ros.stringToRosTemplate(properties.destinationRegionId),
        ImageId: ros.stringToRosTemplate(properties.imageId),
        DestinationDescription: ros.stringToRosTemplate(properties.destinationDescription),
        DestinationImageName: ros.stringToRosTemplate(properties.destinationImageName),
        Encrypted: ros.booleanToRosTemplate(properties.encrypted),
        KMSKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SourceRegionId: ros.stringToRosTemplate(properties.sourceRegionId),
        Tag: ros.listMapper(ros.rosTagToRosTemplate)(properties.tag),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::CopyImage`
 */
class RosCopyImage extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::CopyImage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCopyImage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDestinationRegionId = this.getAtt('DestinationRegionId');
        this.attrImageId = this.getAtt('ImageId');
        this.attrSourceRegionId = this.getAtt('SourceRegionId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.destinationRegionId = props.destinationRegionId;
        this.imageId = props.imageId;
        this.destinationDescription = props.destinationDescription;
        this.destinationImageName = props.destinationImageName;
        this.encrypted = props.encrypted;
        this.kmsKeyId = props.kmsKeyId;
        this.resourceGroupId = props.resourceGroupId;
        this.sourceRegionId = props.sourceRegionId;
        this.tag = props.tag;
    }
    get rosProperties() {
        return {
            destinationRegionId: this.destinationRegionId,
            imageId: this.imageId,
            destinationDescription: this.destinationDescription,
            destinationImageName: this.destinationImageName,
            encrypted: this.encrypted,
            kmsKeyId: this.kmsKeyId,
            resourceGroupId: this.resourceGroupId,
            sourceRegionId: this.sourceRegionId,
            tag: this.tag,
        };
    }
    renderProperties(props) {
        return rosCopyImagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCopyImage = RosCopyImage;
/**
 * The resource type name for this resource class.
 */
RosCopyImage.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::CopyImage";
/**
 * Determine whether the given properties match those of a `TagProperty`
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the result of the validation.
 */
function RosCopyImage_TagPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::CopyImage.Tag` resource
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::CopyImage.Tag` resource.
 */
// @ts-ignore TS6133
function rosCopyImageTagPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCopyImage_TagPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosCustomImageProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomImageProps`
 *
 * @returns the result of the validation.
 */
function RosCustomImagePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('imageName', ros.validateString)(properties.imageName));
    errors.collect(ros.propertyValidator('sourceRegionId', ros.validateString)(properties.sourceRegionId));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('platform', ros.validateString)(properties.platform));
    errors.collect(ros.propertyValidator('architecture', ros.validateString)(properties.architecture));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('imageFamily', ros.validateString)(properties.imageFamily));
    errors.collect(ros.propertyValidator('tag', ros.listValidator(ros.validateRosTag))(properties.tag));
    errors.collect(ros.propertyValidator('diskDeviceMapping', ros.listValidator(RosCustomImage_DiskDeviceMappingPropertyValidator))(properties.diskDeviceMapping));
    return errors.wrap('supplied properties not correct for "RosCustomImageProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::CustomImage` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomImageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::CustomImage` resource.
 */
// @ts-ignore TS6133
function rosCustomImagePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCustomImagePropsValidator(properties).assertSuccess();
    }
    return {
        Architecture: ros.stringToRosTemplate(properties.architecture),
        Description: ros.stringToRosTemplate(properties.description),
        DiskDeviceMapping: ros.listMapper(rosCustomImageDiskDeviceMappingPropertyToRosTemplate)(properties.diskDeviceMapping),
        ImageFamily: ros.stringToRosTemplate(properties.imageFamily),
        ImageName: ros.stringToRosTemplate(properties.imageName),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        Platform: ros.stringToRosTemplate(properties.platform),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
        SourceRegionId: ros.stringToRosTemplate(properties.sourceRegionId),
        Tag: ros.listMapper(ros.rosTagToRosTemplate)(properties.tag),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::CustomImage`
 */
class RosCustomImage extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::CustomImage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCustomImage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrImageId = this.getAtt('ImageId');
        this.attrSourceRegionId = this.getAtt('SourceRegionId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.architecture = props.architecture;
        this.description = props.description;
        this.diskDeviceMapping = props.diskDeviceMapping;
        this.imageFamily = props.imageFamily;
        this.imageName = props.imageName;
        this.instanceId = props.instanceId;
        this.platform = props.platform;
        this.resourceGroupId = props.resourceGroupId;
        this.snapshotId = props.snapshotId;
        this.sourceRegionId = props.sourceRegionId;
        this.tag = props.tag;
    }
    get rosProperties() {
        return {
            architecture: this.architecture,
            description: this.description,
            diskDeviceMapping: this.diskDeviceMapping,
            imageFamily: this.imageFamily,
            imageName: this.imageName,
            instanceId: this.instanceId,
            platform: this.platform,
            resourceGroupId: this.resourceGroupId,
            snapshotId: this.snapshotId,
            sourceRegionId: this.sourceRegionId,
            tag: this.tag,
        };
    }
    renderProperties(props) {
        return rosCustomImagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCustomImage = RosCustomImage;
/**
 * The resource type name for this resource class.
 */
RosCustomImage.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::CustomImage";
/**
 * Determine whether the given properties match those of a `DiskDeviceMappingProperty`
 *
 * @param properties - the TypeScript properties of a `DiskDeviceMappingProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomImage_DiskDeviceMappingPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.diskType && (typeof properties.diskType) !== 'object') {
        errors.collect(ros.propertyValidator('diskType', ros.validateAllowedValues)({
            data: properties.diskType,
            allowedValues: ["system", "data"],
        }));
    }
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    return errors.wrap('supplied properties not correct for "DiskDeviceMappingProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::CustomImage.DiskDeviceMapping` resource
 *
 * @param properties - the TypeScript properties of a `DiskDeviceMappingProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::CustomImage.DiskDeviceMapping` resource.
 */
// @ts-ignore TS6133
function rosCustomImageDiskDeviceMappingPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomImage_DiskDeviceMappingPropertyValidator(properties).assertSuccess();
    return {
        DiskType: ros.stringToRosTemplate(properties.diskType),
        SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
        Device: ros.stringToRosTemplate(properties.device),
        Size: ros.numberToRosTemplate(properties.size),
    };
}
/**
 * Determine whether the given properties match those of a `TagProperty`
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the result of the validation.
 */
function RosCustomImage_TagPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::CustomImage.Tag` resource
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::CustomImage.Tag` resource.
 */
// @ts-ignore TS6133
function rosCustomImageTagPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCustomImage_TagPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosDedicatedHostProps`
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostProps`
 *
 * @returns the result of the validation.
 */
function RosDedicatedHostPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
            data: properties.autoRenewPeriod,
            allowedValues: [1, 2, 3, 6, 12, 24, 36, 48, 60],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.networkAttributesSlbUdpTimeout && (typeof properties.networkAttributesSlbUdpTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('networkAttributesSlbUdpTimeout', ros.validateRange)({
            data: properties.networkAttributesSlbUdpTimeout,
            min: 15,
            max: 310,
        }));
    }
    errors.collect(ros.propertyValidator('networkAttributesSlbUdpTimeout', ros.validateNumber)(properties.networkAttributesSlbUdpTimeout));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if (properties.networkAttributesUdpTimeout && (typeof properties.networkAttributesUdpTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('networkAttributesUdpTimeout', ros.validateRange)({
            data: properties.networkAttributesUdpTimeout,
            min: 15,
            max: 310,
        }));
    }
    errors.collect(ros.propertyValidator('networkAttributesUdpTimeout', ros.validateNumber)(properties.networkAttributesUdpTimeout));
    if (properties.autoRenew && (typeof properties.autoRenew) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenew', ros.validateAllowedValues)({
            data: properties.autoRenew,
            allowedValues: ["True", "False"],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenew', ros.validateString)(properties.autoRenew));
    if (properties.autoPlacement && (typeof properties.autoPlacement) !== 'object') {
        errors.collect(ros.propertyValidator('autoPlacement', ros.validateAllowedValues)({
            data: properties.autoPlacement,
            allowedValues: ["on", "off"],
        }));
    }
    errors.collect(ros.propertyValidator('autoPlacement', ros.validateString)(properties.autoPlacement));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if (properties.quantity && (typeof properties.quantity) !== 'object') {
        errors.collect(ros.propertyValidator('quantity', ros.validateRange)({
            data: properties.quantity,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('quantity', ros.validateNumber)(properties.quantity));
    errors.collect(ros.propertyValidator('dedicatedHostType', ros.requiredValidator)(properties.dedicatedHostType));
    errors.collect(ros.propertyValidator('dedicatedHostType', ros.validateString)(properties.dedicatedHostType));
    errors.collect(ros.propertyValidator('dedicatedHostName', ros.validateString)(properties.dedicatedHostName));
    if (properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
            data: properties.chargeType,
            allowedValues: ["PayAsYouGo", "PostPaid", "PayOnDemand", "Postpaid", "PostPay", "POSTPAY", "POST", "Subscription", "PrePaid", "Prepaid", "PrePay", "PREPAY", "PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    if (properties.actionOnMaintenance && (typeof properties.actionOnMaintenance) !== 'object') {
        errors.collect(ros.propertyValidator('actionOnMaintenance', ros.validateAllowedValues)({
            data: properties.actionOnMaintenance,
            allowedValues: ["Migrate", "Stop"],
        }));
    }
    errors.collect(ros.propertyValidator('actionOnMaintenance', ros.validateString)(properties.actionOnMaintenance));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDedicatedHost_TagsPropertyValidator))(properties.tags));
    if (properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
            data: properties.periodUnit,
            allowedValues: ["Week", "Month", "Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('autoReleaseTime', ros.validateString)(properties.autoReleaseTime));
    return errors.wrap('supplied properties not correct for "RosDedicatedHostProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::DedicatedHost` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::DedicatedHost` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDedicatedHostPropsValidator(properties).assertSuccess();
    }
    return {
        DedicatedHostType: ros.stringToRosTemplate(properties.dedicatedHostType),
        ActionOnMaintenance: ros.stringToRosTemplate(properties.actionOnMaintenance),
        AutoPlacement: ros.stringToRosTemplate(properties.autoPlacement),
        AutoReleaseTime: ros.stringToRosTemplate(properties.autoReleaseTime),
        AutoRenew: ros.stringToRosTemplate(properties.autoRenew),
        AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
        ChargeType: ros.stringToRosTemplate(properties.chargeType),
        DedicatedHostName: ros.stringToRosTemplate(properties.dedicatedHostName),
        Description: ros.stringToRosTemplate(properties.description),
        NetworkAttributesSlbUdpTimeout: ros.numberToRosTemplate(properties.networkAttributesSlbUdpTimeout),
        NetworkAttributesUdpTimeout: ros.numberToRosTemplate(properties.networkAttributesUdpTimeout),
        Period: ros.numberToRosTemplate(properties.period),
        PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
        Quantity: ros.numberToRosTemplate(properties.quantity),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        Tags: ros.listMapper(rosDedicatedHostTagsPropertyToRosTemplate)(properties.tags),
        ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::DedicatedHost`
 */
class RosDedicatedHost extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::DedicatedHost`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDedicatedHost.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDedicatedHostIds = this.getAtt('DedicatedHostIds');
        this.attrOrderId = this.getAtt('OrderId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dedicatedHostType = props.dedicatedHostType;
        this.actionOnMaintenance = props.actionOnMaintenance;
        this.autoPlacement = props.autoPlacement;
        this.autoReleaseTime = props.autoReleaseTime;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.chargeType = props.chargeType;
        this.dedicatedHostName = props.dedicatedHostName;
        this.description = props.description;
        this.networkAttributesSlbUdpTimeout = props.networkAttributesSlbUdpTimeout;
        this.networkAttributesUdpTimeout = props.networkAttributesUdpTimeout;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.quantity = props.quantity;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.zoneId = props.zoneId;
    }
    get rosProperties() {
        return {
            dedicatedHostType: this.dedicatedHostType,
            actionOnMaintenance: this.actionOnMaintenance,
            autoPlacement: this.autoPlacement,
            autoReleaseTime: this.autoReleaseTime,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            chargeType: this.chargeType,
            dedicatedHostName: this.dedicatedHostName,
            description: this.description,
            networkAttributesSlbUdpTimeout: this.networkAttributesSlbUdpTimeout,
            networkAttributesUdpTimeout: this.networkAttributesUdpTimeout,
            period: this.period,
            periodUnit: this.periodUnit,
            quantity: this.quantity,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            zoneId: this.zoneId,
        };
    }
    renderProperties(props) {
        return rosDedicatedHostPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDedicatedHost = RosDedicatedHost;
/**
 * The resource type name for this resource class.
 */
RosDedicatedHost.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DedicatedHost";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDedicatedHost_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::DedicatedHost.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::DedicatedHost.Tags` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosDedicatedHost_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosDeploymentSetProps`
 *
 * @param properties - the TypeScript properties of a `RosDeploymentSetProps`
 *
 * @returns the result of the validation.
 */
function RosDeploymentSetPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.onUnableToRedeployFailedInstance && (typeof properties.onUnableToRedeployFailedInstance) !== 'object') {
        errors.collect(ros.propertyValidator('onUnableToRedeployFailedInstance', ros.validateAllowedValues)({
            data: properties.onUnableToRedeployFailedInstance,
            allowedValues: ["CancelMembershipAndStart", "KeepStopped"],
        }));
    }
    errors.collect(ros.propertyValidator('onUnableToRedeployFailedInstance', ros.validateString)(properties.onUnableToRedeployFailedInstance));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('deploymentSetName', ros.validateString)(properties.deploymentSetName));
    return errors.wrap('supplied properties not correct for "RosDeploymentSetProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::DeploymentSet` resource
 *
 * @param properties - the TypeScript properties of a `RosDeploymentSetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::DeploymentSet` resource.
 */
// @ts-ignore TS6133
function rosDeploymentSetPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDeploymentSetPropsValidator(properties).assertSuccess();
    }
    return {
        DeploymentSetName: ros.stringToRosTemplate(properties.deploymentSetName),
        Description: ros.stringToRosTemplate(properties.description),
        OnUnableToRedeployFailedInstance: ros.stringToRosTemplate(properties.onUnableToRedeployFailedInstance),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::DeploymentSet`
 */
class RosDeploymentSet extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::DeploymentSet`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDeploymentSet.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDeploymentSetId = this.getAtt('DeploymentSetId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deploymentSetName = props.deploymentSetName;
        this.description = props.description;
        this.onUnableToRedeployFailedInstance = props.onUnableToRedeployFailedInstance;
    }
    get rosProperties() {
        return {
            deploymentSetName: this.deploymentSetName,
            description: this.description,
            onUnableToRedeployFailedInstance: this.onUnableToRedeployFailedInstance,
        };
    }
    renderProperties(props) {
        return rosDeploymentSetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDeploymentSet = RosDeploymentSet;
/**
 * The resource type name for this resource class.
 */
RosDeploymentSet.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DeploymentSet";
/**
 * Determine whether the given properties match those of a `RosDiskProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskProps`
 *
 * @returns the result of the validation.
 */
function RosDiskPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('burstingEnabled', ros.validateBoolean)(properties.burstingEnabled));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    if (properties.size && (typeof properties.size) !== 'object') {
        errors.collect(ros.propertyValidator('size', ros.validateRange)({
            data: properties.size,
            min: 5,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('size', ros.validateNumber)(properties.size));
    errors.collect(ros.propertyValidator('deleteAutoSnapshot', ros.validateBoolean)(properties.deleteAutoSnapshot));
    errors.collect(ros.propertyValidator('diskCategory', ros.validateString)(properties.diskCategory));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('storageSetPartitionNumber', ros.validateNumber)(properties.storageSetPartitionNumber));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    errors.collect(ros.propertyValidator('provisionedIops', ros.validateNumber)(properties.provisionedIops));
    if (properties.multiAttach && (typeof properties.multiAttach) !== 'object') {
        errors.collect(ros.propertyValidator('multiAttach', ros.validateAllowedValues)({
            data: properties.multiAttach,
            allowedValues: ["Disabled", "Enabled"],
        }));
    }
    errors.collect(ros.propertyValidator('multiAttach', ros.validateString)(properties.multiAttach));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('storageSetId', ros.validateString)(properties.storageSetId));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDisk_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosDiskProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Disk` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Disk` resource.
 */
// @ts-ignore TS6133
function rosDiskPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDiskPropsValidator(properties).assertSuccess();
    }
    return {
        ZoneId: ros.stringToRosTemplate(properties.zoneId),
        AutoSnapshotPolicyId: ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
        BurstingEnabled: ros.booleanToRosTemplate(properties.burstingEnabled),
        DeleteAutoSnapshot: ros.booleanToRosTemplate(properties.deleteAutoSnapshot),
        Description: ros.stringToRosTemplate(properties.description),
        DiskCategory: ros.stringToRosTemplate(properties.diskCategory),
        DiskName: ros.stringToRosTemplate(properties.diskName),
        Encrypted: ros.booleanToRosTemplate(properties.encrypted),
        KMSKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
        MultiAttach: ros.stringToRosTemplate(properties.multiAttach),
        PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
        ProvisionedIops: ros.numberToRosTemplate(properties.provisionedIops),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        Size: ros.numberToRosTemplate(properties.size),
        SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
        StorageSetId: ros.stringToRosTemplate(properties.storageSetId),
        StorageSetPartitionNumber: ros.numberToRosTemplate(properties.storageSetPartitionNumber),
        Tags: ros.listMapper(rosDiskTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::Disk`
 */
class RosDisk extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::Disk`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDisk.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDiskId = this.getAtt('DiskId');
        this.attrStatus = this.getAtt('Status');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.zoneId = props.zoneId;
        this.autoSnapshotPolicyId = props.autoSnapshotPolicyId;
        this.burstingEnabled = props.burstingEnabled;
        this.deleteAutoSnapshot = props.deleteAutoSnapshot;
        this.description = props.description;
        this.diskCategory = props.diskCategory;
        this.diskName = props.diskName;
        this.encrypted = props.encrypted;
        this.kmsKeyId = props.kmsKeyId;
        this.multiAttach = props.multiAttach;
        this.performanceLevel = props.performanceLevel;
        this.provisionedIops = props.provisionedIops;
        this.resourceGroupId = props.resourceGroupId;
        this.size = props.size;
        this.snapshotId = props.snapshotId;
        this.storageSetId = props.storageSetId;
        this.storageSetPartitionNumber = props.storageSetPartitionNumber;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            zoneId: this.zoneId,
            autoSnapshotPolicyId: this.autoSnapshotPolicyId,
            burstingEnabled: this.burstingEnabled,
            deleteAutoSnapshot: this.deleteAutoSnapshot,
            description: this.description,
            diskCategory: this.diskCategory,
            diskName: this.diskName,
            encrypted: this.encrypted,
            kmsKeyId: this.kmsKeyId,
            multiAttach: this.multiAttach,
            performanceLevel: this.performanceLevel,
            provisionedIops: this.provisionedIops,
            resourceGroupId: this.resourceGroupId,
            size: this.size,
            snapshotId: this.snapshotId,
            storageSetId: this.storageSetId,
            storageSetPartitionNumber: this.storageSetPartitionNumber,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosDiskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDisk = RosDisk;
/**
 * The resource type name for this resource class.
 */
RosDisk.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Disk";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDisk_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Disk.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Disk.Tags` resource.
 */
// @ts-ignore TS6133
function rosDiskTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosDisk_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosDiskAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosDiskAttachmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('deleteWithInstance', ros.validateBoolean)(properties.deleteWithInstance));
    errors.collect(ros.propertyValidator('deleteAutoSnapshot', ros.validateBoolean)(properties.deleteAutoSnapshot));
    errors.collect(ros.propertyValidator('diskId', ros.requiredValidator)(properties.diskId));
    errors.collect(ros.propertyValidator('diskId', ros.validateString)(properties.diskId));
    return errors.wrap('supplied properties not correct for "RosDiskAttachmentProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::DiskAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::DiskAttachment` resource.
 */
// @ts-ignore TS6133
function rosDiskAttachmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDiskAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
        DiskId: ros.stringToRosTemplate(properties.diskId),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        DeleteAutoSnapshot: ros.booleanToRosTemplate(properties.deleteAutoSnapshot),
        DeleteWithInstance: ros.booleanToRosTemplate(properties.deleteWithInstance),
        Device: ros.stringToRosTemplate(properties.device),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::DiskAttachment`
 */
class RosDiskAttachment extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::DiskAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDiskAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDevice = this.getAtt('Device');
        this.attrDiskId = this.getAtt('DiskId');
        this.attrStatus = this.getAtt('Status');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.diskId = props.diskId;
        this.instanceId = props.instanceId;
        this.deleteAutoSnapshot = props.deleteAutoSnapshot;
        this.deleteWithInstance = props.deleteWithInstance;
        this.device = props.device;
    }
    get rosProperties() {
        return {
            diskId: this.diskId,
            instanceId: this.instanceId,
            deleteAutoSnapshot: this.deleteAutoSnapshot,
            deleteWithInstance: this.deleteWithInstance,
            device: this.device,
        };
    }
    renderProperties(props) {
        return rosDiskAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDiskAttachment = RosDiskAttachment;
/**
 * The resource type name for this resource class.
 */
RosDiskAttachment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::DiskAttachment";
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::ForwardEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosForwardEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::ForwardEntry` resource.
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
 * A ROS template type:  `ALIYUN::ECS::ForwardEntry`
 */
class RosForwardEntry extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::ForwardEntry`.
     *
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
RosForwardEntry.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::ForwardEntry";
/**
 * Determine whether the given properties match those of a `RosHpcClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosHpcClusterProps`
 *
 * @returns the result of the validation.
 */
function RosHpcClusterPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosHpcClusterProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::HpcCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosHpcClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::HpcCluster` resource.
 */
// @ts-ignore TS6133
function rosHpcClusterPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosHpcClusterPropsValidator(properties).assertSuccess();
    }
    return {
        Name: ros.stringToRosTemplate(properties.name),
        Description: ros.stringToRosTemplate(properties.description),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::HpcCluster`
 */
class RosHpcCluster extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::HpcCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosHpcCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHpcClusterId = this.getAtt('HpcClusterId');
        this.attrName = this.getAtt('Name');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.description = props.description;
    }
    get rosProperties() {
        return {
            name: this.name,
            description: this.description,
        };
    }
    renderProperties(props) {
        return rosHpcClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosHpcCluster = RosHpcCluster;
/**
 * The resource type name for this resource class.
 */
RosHpcCluster.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::HpcCluster";
/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dedicatedHostId', ros.validateString)(properties.dedicatedHostId));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
        }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosInstance_DiskMappingsPropertyValidator))(properties.diskMappings));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    if (properties.systemDiskSize && (typeof properties.systemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskSize', ros.validateRange)({
            data: properties.systemDiskSize,
            min: 20,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('systemDiskDescription', ros.validateString)(properties.systemDiskDescription));
    if (properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
            data: properties.instanceChargeType,
            allowedValues: ["PayAsYouGo", "PostPaid", "PayOnDemand", "Postpaid", "PostPay", "POSTPAY", "POST", "Subscription", "PrePaid", "Prepaid", "PrePay", "PREPAY", "PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if (properties.autoRenew && (typeof properties.autoRenew) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenew', ros.validateAllowedValues)({
            data: properties.autoRenew,
            allowedValues: ["True", "False"],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenew', ros.validateString)(properties.autoRenew));
    errors.collect(ros.propertyValidator('spotDuration', ros.validateNumber)(properties.spotDuration));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('systemDiskDiskName', ros.validateString)(properties.systemDiskDiskName));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateString)(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('zoneIds', ros.listValidator(ros.validateString))(properties.zoneIds));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('allocatePublicIp', ros.validateBoolean)(properties.allocatePublicIp));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
    if (properties.hostName && (Array.isArray(properties.hostName) || (typeof properties.hostName) === 'string')) {
        errors.collect(ros.propertyValidator('hostName', ros.validateLength)({
            data: properties.hostName.length,
            min: 2,
            max: 64,
        }));
    }
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    if (properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
            data: properties.spotStrategy,
            allowedValues: ["NoSpot", "SpotWithPriceLimit", "SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('passwordInherit', ros.validateBoolean)(properties.passwordInherit));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    if (properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
            data: properties.autoRenewPeriod,
            allowedValues: [1, 2, 3, 6, 12, 24, 36, 48, 60],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    if (properties.ioOptimized && (typeof properties.ioOptimized) !== 'object') {
        errors.collect(ros.propertyValidator('ioOptimized', ros.validateAllowedValues)({
            data: properties.ioOptimized,
            allowedValues: ["none", "optimized"],
        }));
    }
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateString)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('hpcClusterId', ros.validateString)(properties.hpcClusterId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if (properties.deletionProtection && (typeof properties.deletionProtection) !== 'object') {
        errors.collect(ros.propertyValidator('deletionProtection', ros.validateAllowedValues)({
            data: properties.deletionProtection,
            allowedValues: [true, false],
        }));
    }
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    if (properties.securityGroupIds && (Array.isArray(properties.securityGroupIds) || (typeof properties.securityGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('securityGroupIds', ros.validateLength)({
            data: properties.securityGroupIds.length,
            min: 1,
            max: 16,
        }));
    }
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateString))(properties.securityGroupIds));
    if (properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
            data: properties.internetChargeType,
            allowedValues: ["paybytraffic", "PayByTraffic", "paybybandwidth", "PayByBandwidth"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    if (properties.systemDiskCategory && (typeof properties.systemDiskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateAllowedValues)({
            data: properties.systemDiskCategory,
            allowedValues: ["cloud", "cloud_efficiency", "cloud_ssd", "cloud_essd", "ephemeral_ssd", "cloud_auto"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('spotInterruptionBehavior', ros.validateString)(properties.spotInterruptionBehavior));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    if (properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if (properties.securityEnhancementStrategy && (typeof properties.securityEnhancementStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateAllowedValues)({
            data: properties.securityEnhancementStrategy,
            allowedValues: ["Active", "Deactive"],
        }));
    }
    errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateString)(properties.securityEnhancementStrategy));
    if (properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
            data: properties.periodUnit,
            allowedValues: ["Week", "Month", "Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
        ImageId: ros.stringToRosTemplate(properties.imageId),
        InstanceType: ros.stringToRosTemplate(properties.instanceType),
        AllocatePublicIP: ros.booleanToRosTemplate(properties.allocatePublicIp),
        AutoRenew: ros.stringToRosTemplate(properties.autoRenew),
        AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
        DedicatedHostId: ros.stringToRosTemplate(properties.dedicatedHostId),
        DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
        DeploymentSetId: ros.stringToRosTemplate(properties.deploymentSetId),
        Description: ros.stringToRosTemplate(properties.description),
        DiskMappings: ros.listMapper(rosInstanceDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
        HostName: ros.stringToRosTemplate(properties.hostName),
        HpcClusterId: ros.stringToRosTemplate(properties.hpcClusterId),
        InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
        InstanceName: ros.stringToRosTemplate(properties.instanceName),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
        IoOptimized: ros.stringToRosTemplate(properties.ioOptimized),
        KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
        Password: ros.stringToRosTemplate(properties.password),
        PasswordInherit: ros.booleanToRosTemplate(properties.passwordInherit),
        Period: ros.numberToRosTemplate(properties.period),
        PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
        PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
        RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SecurityEnhancementStrategy: ros.stringToRosTemplate(properties.securityEnhancementStrategy),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        SecurityGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupIds),
        SpotDuration: ros.numberToRosTemplate(properties.spotDuration),
        SpotInterruptionBehavior: ros.stringToRosTemplate(properties.spotInterruptionBehavior),
        SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
        SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
        SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
        SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
        SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
        SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
        SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
        Tags: ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
        UserData: ros.stringToRosTemplate(properties.userData),
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        ZoneId: ros.stringToRosTemplate(properties.zoneId),
        ZoneIds: ros.listMapper(ros.stringToRosTemplate)(properties.zoneIds),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::Instance`
 */
class RosInstance extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostName = this.getAtt('HostName');
        this.attrInnerIp = this.getAtt('InnerIp');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrPrimaryNetworkInterfaceId = this.getAtt('PrimaryNetworkInterfaceId');
        this.attrPrivateIp = this.getAtt('PrivateIp');
        this.attrPublicIp = this.getAtt('PublicIp');
        this.attrSecurityGroupIds = this.getAtt('SecurityGroupIds');
        this.attrZoneId = this.getAtt('ZoneId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageId = props.imageId;
        this.instanceType = props.instanceType;
        this.allocatePublicIp = props.allocatePublicIp;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.dedicatedHostId = props.dedicatedHostId;
        this.deletionProtection = props.deletionProtection;
        this.deploymentSetId = props.deploymentSetId;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.hostName = props.hostName;
        this.hpcClusterId = props.hpcClusterId;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceName = props.instanceName;
        this.internetChargeType = props.internetChargeType;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.ioOptimized = props.ioOptimized;
        this.keyPairName = props.keyPairName;
        this.password = props.password;
        this.passwordInherit = props.passwordInherit;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.privateIpAddress = props.privateIpAddress;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityEnhancementStrategy = props.securityEnhancementStrategy;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.spotDuration = props.spotDuration;
        this.spotInterruptionBehavior = props.spotInterruptionBehavior;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.systemDiskPerformanceLevel = props.systemDiskPerformanceLevel;
        this.systemDiskSize = props.systemDiskSize;
        this.tags = props.tags;
        this.userData = props.userData;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.zoneIds = props.zoneIds;
    }
    get rosProperties() {
        return {
            imageId: this.imageId,
            instanceType: this.instanceType,
            allocatePublicIp: this.allocatePublicIp,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            dedicatedHostId: this.dedicatedHostId,
            deletionProtection: this.deletionProtection,
            deploymentSetId: this.deploymentSetId,
            description: this.description,
            diskMappings: this.diskMappings,
            hostName: this.hostName,
            hpcClusterId: this.hpcClusterId,
            instanceChargeType: this.instanceChargeType,
            instanceName: this.instanceName,
            internetChargeType: this.internetChargeType,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            ioOptimized: this.ioOptimized,
            keyPairName: this.keyPairName,
            password: this.password,
            passwordInherit: this.passwordInherit,
            period: this.period,
            periodUnit: this.periodUnit,
            privateIpAddress: this.privateIpAddress,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityEnhancementStrategy: this.securityEnhancementStrategy,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            spotDuration: this.spotDuration,
            spotInterruptionBehavior: this.spotInterruptionBehavior,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            systemDiskPerformanceLevel: this.systemDiskPerformanceLevel,
            systemDiskSize: this.systemDiskSize,
            tags: this.tags,
            userData: this.userData,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            zoneIds: this.zoneIds,
        };
    }
    renderProperties(props) {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInstance = RosInstance;
/**
 * The resource type name for this resource class.
 */
RosInstance.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Instance";
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_DiskMappingsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    errors.collect(ros.propertyValidator('size', ros.validateString)(properties.size));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    return errors.wrap('supplied properties not correct for "DiskMappingsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Instance.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Instance.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosInstanceDiskMappingsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstance_DiskMappingsPropertyValidator(properties).assertSuccess();
    return {
        SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
        Category: ros.stringToRosTemplate(properties.category),
        Description: ros.stringToRosTemplate(properties.description),
        Device: ros.stringToRosTemplate(properties.device),
        PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
        Size: ros.stringToRosTemplate(properties.size),
        DiskName: ros.stringToRosTemplate(properties.diskName),
    };
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Instance.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosInstanceCloneProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceCloneProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceClonePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.backendServerWeight && (typeof properties.backendServerWeight) !== 'object') {
        errors.collect(ros.propertyValidator('backendServerWeight', ros.validateRange)({
            data: properties.backendServerWeight,
            min: 0,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('backendServerWeight', ros.validateNumber)(properties.backendServerWeight));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
        }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosInstanceClone_DiskMappingsPropertyValidator))(properties.diskMappings));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if (properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
            data: properties.instanceChargeType,
            allowedValues: ["PayAsYouGo", "PostPaid", "PayOnDemand", "Postpaid", "PostPay", "POSTPAY", "POST", "Subscription", "PrePaid", "Prepaid", "PrePay", "PREPAY", "PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if (properties.deletionProtection && (typeof properties.deletionProtection) !== 'object') {
        errors.collect(ros.propertyValidator('deletionProtection', ros.validateAllowedValues)({
            data: properties.deletionProtection,
            allowedValues: [true, false],
        }));
    }
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.requiredValidator)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.validateString)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('loadBalancerIdToAttach', ros.validateString)(properties.loadBalancerIdToAttach));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    if (properties.internetMaxBandwidthIn && (typeof properties.internetMaxBandwidthIn) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateRange)({
            data: properties.internetMaxBandwidthIn,
            min: 1,
            max: 200,
        }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateNumber)(properties.internetMaxBandwidthIn));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateString)(properties.spotPriceLimit));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstanceClone_TagsPropertyValidator))(properties.tags));
    if (properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
            data: properties.spotStrategy,
            allowedValues: ["NoSpot", "SpotWithPriceLimit", "SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosInstanceCloneProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceClone` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceCloneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceClone` resource.
 */
// @ts-ignore TS6133
function rosInstanceClonePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosInstanceClonePropsValidator(properties).assertSuccess();
    }
    return {
        SourceInstanceId: ros.stringToRosTemplate(properties.sourceInstanceId),
        BackendServerWeight: ros.numberToRosTemplate(properties.backendServerWeight),
        DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
        Description: ros.stringToRosTemplate(properties.description),
        DiskMappings: ros.listMapper(rosInstanceCloneDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
        ImageId: ros.stringToRosTemplate(properties.imageId),
        InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
        InstanceName: ros.stringToRosTemplate(properties.instanceName),
        InternetMaxBandwidthIn: ros.numberToRosTemplate(properties.internetMaxBandwidthIn),
        KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
        LoadBalancerIdToAttach: ros.stringToRosTemplate(properties.loadBalancerIdToAttach),
        Password: ros.stringToRosTemplate(properties.password),
        Period: ros.numberToRosTemplate(properties.period),
        RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
        SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
        Tags: ros.listMapper(rosInstanceCloneTagsPropertyToRosTemplate)(properties.tags),
        ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::InstanceClone`
 */
class RosInstanceClone extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::InstanceClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosInstanceClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostName = this.getAtt('HostName');
        this.attrInnerIp = this.getAtt('InnerIp');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrPrimaryNetworkInterfaceId = this.getAtt('PrimaryNetworkInterfaceId');
        this.attrPrivateIp = this.getAtt('PrivateIp');
        this.attrPublicIp = this.getAtt('PublicIp');
        this.attrSecurityGroupIds = this.getAtt('SecurityGroupIds');
        this.attrZoneId = this.getAtt('ZoneId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sourceInstanceId = props.sourceInstanceId;
        this.backendServerWeight = props.backendServerWeight;
        this.deletionProtection = props.deletionProtection;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.imageId = props.imageId;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceName = props.instanceName;
        this.internetMaxBandwidthIn = props.internetMaxBandwidthIn;
        this.keyPairName = props.keyPairName;
        this.loadBalancerIdToAttach = props.loadBalancerIdToAttach;
        this.password = props.password;
        this.period = props.period;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.tags = props.tags;
        this.zoneId = props.zoneId;
    }
    get rosProperties() {
        return {
            sourceInstanceId: this.sourceInstanceId,
            backendServerWeight: this.backendServerWeight,
            deletionProtection: this.deletionProtection,
            description: this.description,
            diskMappings: this.diskMappings,
            imageId: this.imageId,
            instanceChargeType: this.instanceChargeType,
            instanceName: this.instanceName,
            internetMaxBandwidthIn: this.internetMaxBandwidthIn,
            keyPairName: this.keyPairName,
            loadBalancerIdToAttach: this.loadBalancerIdToAttach,
            password: this.password,
            period: this.period,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            tags: this.tags,
            zoneId: this.zoneId,
        };
    }
    renderProperties(props) {
        return rosInstanceClonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInstanceClone = RosInstanceClone;
/**
 * The resource type name for this resource class.
 */
RosInstanceClone.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::InstanceClone";
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceClone_DiskMappingsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    errors.collect(ros.propertyValidator('size', ros.validateString)(properties.size));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    return errors.wrap('supplied properties not correct for "DiskMappingsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceClone.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceClone.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosInstanceCloneDiskMappingsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstanceClone_DiskMappingsPropertyValidator(properties).assertSuccess();
    return {
        SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
        Category: ros.stringToRosTemplate(properties.category),
        Description: ros.stringToRosTemplate(properties.description),
        Device: ros.stringToRosTemplate(properties.device),
        PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
        Size: ros.stringToRosTemplate(properties.size),
        DiskName: ros.stringToRosTemplate(properties.diskName),
    };
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceClone_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceClone.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceClone.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceCloneTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstanceClone_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosInstanceGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceGroupProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dedicatedHostId', ros.validateString)(properties.dedicatedHostId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('systemDiskDescription', ros.validateString)(properties.systemDiskDescription));
    if (properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
            data: properties.instanceChargeType,
            allowedValues: ["PayAsYouGo", "PostPaid", "PayOnDemand", "Postpaid", "PostPay", "POSTPAY", "POST", "Subscription", "PrePaid", "Prepaid", "PrePay", "PREPAY", "PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('systemDiskProvisionedIops', ros.validateNumber)(properties.systemDiskProvisionedIops));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('systemDiskDiskName', ros.validateString)(properties.systemDiskDiskName));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstanceGroup_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    errors.collect(ros.propertyValidator('launchTemplateName', ros.validateString)(properties.launchTemplateName));
    if (properties.updatePolicy && (typeof properties.updatePolicy) !== 'object') {
        errors.collect(ros.propertyValidator('updatePolicy', ros.validateAllowedValues)({
            data: properties.updatePolicy,
            allowedValues: ["ForNewInstances", "ForAllInstances"],
        }));
    }
    errors.collect(ros.propertyValidator('updatePolicy', ros.validateString)(properties.updatePolicy));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('launchTemplateId', ros.validateString)(properties.launchTemplateId));
    if (properties.deletionProtection && (typeof properties.deletionProtection) !== 'object') {
        errors.collect(ros.propertyValidator('deletionProtection', ros.validateAllowedValues)({
            data: properties.deletionProtection,
            allowedValues: [true, false],
        }));
    }
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateAny))(properties.securityGroupIds));
    if (properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
            data: properties.internetChargeType,
            allowedValues: ["paybytraffic", "PayByTraffic", "paybybandwidth", "PayByBandwidth"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('spotInterruptionBehavior', ros.validateString)(properties.spotInterruptionBehavior));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    if (properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if (properties.launchTemplateVersion && (typeof properties.launchTemplateVersion) !== 'object') {
        errors.collect(ros.propertyValidator('launchTemplateVersion', ros.validateAllowedPattern)({
            data: properties.launchTemplateVersion,
            reg: /^[1-9]\d*$/
        }));
    }
    errors.collect(ros.propertyValidator('launchTemplateVersion', ros.validateString)(properties.launchTemplateVersion));
    if (properties.securityEnhancementStrategy && (typeof properties.securityEnhancementStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateAllowedValues)({
            data: properties.securityEnhancementStrategy,
            allowedValues: ["Active", "Deactive"],
        }));
    }
    errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateString)(properties.securityEnhancementStrategy));
    errors.collect(ros.propertyValidator('autoReleaseTime', ros.validateString)(properties.autoReleaseTime));
    if (properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
            data: properties.periodUnit,
            allowedValues: ["Week", "Month", "Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
        }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosInstanceGroup_DiskMappingsPropertyValidator))(properties.diskMappings));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    if (properties.systemDiskSize && (typeof properties.systemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskSize', ros.validateRange)({
            data: properties.systemDiskSize,
            min: 20,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    if (properties.autoRenew && (typeof properties.autoRenew) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenew', ros.validateAllowedValues)({
            data: properties.autoRenew,
            allowedValues: ["True", "False"],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenew', ros.validateString)(properties.autoRenew));
    errors.collect(ros.propertyValidator('spotDuration', ros.validateNumber)(properties.spotDuration));
    if (properties.ipv6Addresses && (Array.isArray(properties.ipv6Addresses) || (typeof properties.ipv6Addresses) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6Addresses', ros.validateLength)({
            data: properties.ipv6Addresses.length,
            min: undefined,
            max: 1,
        }));
    }
    errors.collect(ros.propertyValidator('ipv6Addresses', ros.listValidator(ros.validateAny))(properties.ipv6Addresses));
    errors.collect(ros.propertyValidator('maxAmount', ros.requiredValidator)(properties.maxAmount));
    if (properties.maxAmount && (typeof properties.maxAmount) !== 'object') {
        errors.collect(ros.propertyValidator('maxAmount', ros.validateRange)({
            data: properties.maxAmount,
            min: 0,
            max: 1000,
        }));
    }
    errors.collect(ros.propertyValidator('maxAmount', ros.validateNumber)(properties.maxAmount));
    errors.collect(ros.propertyValidator('systemDiskAutoSnapshotPolicyId', ros.validateString)(properties.systemDiskAutoSnapshotPolicyId));
    if (properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
            data: properties.networkType,
            allowedValues: ["vpc", "classic"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    if (properties.ipv6AddressCount && (typeof properties.ipv6AddressCount) !== 'object') {
        errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateRange)({
            data: properties.ipv6AddressCount,
            min: 0,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateString)(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('zoneIds', ros.listValidator(ros.validateString))(properties.zoneIds));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('allocatePublicIp', ros.validateBoolean)(properties.allocatePublicIp));
    if (properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
            data: properties.spotStrategy,
            allowedValues: ["NoSpot", "SpotWithPriceLimit", "SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('passwordInherit', ros.validateBoolean)(properties.passwordInherit));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    if (properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
            data: properties.autoRenewPeriod,
            allowedValues: [1, 2, 3, 6, 12, 24, 36, 48, 60],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    if (properties.ioOptimized && (typeof properties.ioOptimized) !== 'object') {
        errors.collect(ros.propertyValidator('ioOptimized', ros.validateAllowedValues)({
            data: properties.ioOptimized,
            allowedValues: ["none", "optimized"],
        }));
    }
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateString)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('hpcClusterId', ros.validateString)(properties.hpcClusterId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if (properties.systemDiskCategory && (typeof properties.systemDiskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateAllowedValues)({
            data: properties.systemDiskCategory,
            allowedValues: ["cloud", "cloud_efficiency", "cloud_ssd", "cloud_essd", "ephemeral_ssd", "cloud_auto"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    if (properties.eniMappings && (Array.isArray(properties.eniMappings) || (typeof properties.eniMappings) === 'string')) {
        errors.collect(ros.propertyValidator('eniMappings', ros.validateLength)({
            data: properties.eniMappings.length,
            min: undefined,
            max: 1,
        }));
    }
    errors.collect(ros.propertyValidator('eniMappings', ros.listValidator(RosInstanceGroup_EniMappingsPropertyValidator))(properties.eniMappings));
    errors.collect(ros.propertyValidator('systemDiskBurstingEnabled', ros.validateBoolean)(properties.systemDiskBurstingEnabled));
    return errors.wrap('supplied properties not correct for "RosInstanceGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosInstanceGroupPropsValidator(properties).assertSuccess();
    }
    return {
        ImageId: ros.stringToRosTemplate(properties.imageId),
        InstanceType: ros.stringToRosTemplate(properties.instanceType),
        MaxAmount: ros.numberToRosTemplate(properties.maxAmount),
        AllocatePublicIP: ros.booleanToRosTemplate(properties.allocatePublicIp),
        AutoReleaseTime: ros.stringToRosTemplate(properties.autoReleaseTime),
        AutoRenew: ros.stringToRosTemplate(properties.autoRenew),
        AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
        DedicatedHostId: ros.stringToRosTemplate(properties.dedicatedHostId),
        DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
        DeploymentSetId: ros.stringToRosTemplate(properties.deploymentSetId),
        Description: ros.stringToRosTemplate(properties.description),
        DiskMappings: ros.listMapper(rosInstanceGroupDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
        EniMappings: ros.listMapper(rosInstanceGroupEniMappingsPropertyToRosTemplate)(properties.eniMappings),
        HostName: ros.stringToRosTemplate(properties.hostName),
        HpcClusterId: ros.stringToRosTemplate(properties.hpcClusterId),
        InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
        InstanceName: ros.stringToRosTemplate(properties.instanceName),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
        IoOptimized: ros.stringToRosTemplate(properties.ioOptimized),
        Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
        Ipv6Addresses: ros.listMapper(ros.objectToRosTemplate)(properties.ipv6Addresses),
        KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
        LaunchTemplateId: ros.stringToRosTemplate(properties.launchTemplateId),
        LaunchTemplateName: ros.stringToRosTemplate(properties.launchTemplateName),
        LaunchTemplateVersion: ros.stringToRosTemplate(properties.launchTemplateVersion),
        NetworkType: ros.stringToRosTemplate(properties.networkType),
        Password: ros.stringToRosTemplate(properties.password),
        PasswordInherit: ros.booleanToRosTemplate(properties.passwordInherit),
        Period: ros.numberToRosTemplate(properties.period),
        PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
        PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
        RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SecurityEnhancementStrategy: ros.stringToRosTemplate(properties.securityEnhancementStrategy),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        SecurityGroupIds: ros.listMapper(ros.objectToRosTemplate)(properties.securityGroupIds),
        SpotDuration: ros.numberToRosTemplate(properties.spotDuration),
        SpotInterruptionBehavior: ros.stringToRosTemplate(properties.spotInterruptionBehavior),
        SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
        SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
        SystemDiskAutoSnapshotPolicyId: ros.stringToRosTemplate(properties.systemDiskAutoSnapshotPolicyId),
        SystemDiskBurstingEnabled: ros.booleanToRosTemplate(properties.systemDiskBurstingEnabled),
        SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
        SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
        SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
        SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
        SystemDiskProvisionedIops: ros.numberToRosTemplate(properties.systemDiskProvisionedIops),
        SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
        Tags: ros.listMapper(rosInstanceGroupTagsPropertyToRosTemplate)(properties.tags),
        UpdatePolicy: ros.stringToRosTemplate(properties.updatePolicy),
        UserData: ros.stringToRosTemplate(properties.userData),
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        ZoneId: ros.stringToRosTemplate(properties.zoneId),
        ZoneIds: ros.listMapper(ros.stringToRosTemplate)(properties.zoneIds),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::InstanceGroup`
 */
class RosInstanceGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::InstanceGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosInstanceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostNames = this.getAtt('HostNames');
        this.attrInnerIps = this.getAtt('InnerIps');
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrIpv6AddressIds = this.getAtt('Ipv6AddressIds');
        this.attrIpv6Addresses = this.getAtt('Ipv6Addresses');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPrivateIps = this.getAtt('PrivateIps');
        this.attrPublicIps = this.getAtt('PublicIps');
        this.attrZoneIds = this.getAtt('ZoneIds');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageId = props.imageId;
        this.instanceType = props.instanceType;
        this.maxAmount = props.maxAmount;
        this.allocatePublicIp = props.allocatePublicIp;
        this.autoReleaseTime = props.autoReleaseTime;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.dedicatedHostId = props.dedicatedHostId;
        this.deletionProtection = props.deletionProtection;
        this.deploymentSetId = props.deploymentSetId;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.eniMappings = props.eniMappings;
        this.hostName = props.hostName;
        this.hpcClusterId = props.hpcClusterId;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceName = props.instanceName;
        this.internetChargeType = props.internetChargeType;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.ioOptimized = props.ioOptimized;
        this.ipv6AddressCount = props.ipv6AddressCount;
        this.ipv6Addresses = props.ipv6Addresses;
        this.keyPairName = props.keyPairName;
        this.launchTemplateId = props.launchTemplateId;
        this.launchTemplateName = props.launchTemplateName;
        this.launchTemplateVersion = props.launchTemplateVersion;
        this.networkType = props.networkType;
        this.password = props.password;
        this.passwordInherit = props.passwordInherit;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.privateIpAddress = props.privateIpAddress;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityEnhancementStrategy = props.securityEnhancementStrategy;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.spotDuration = props.spotDuration;
        this.spotInterruptionBehavior = props.spotInterruptionBehavior;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskAutoSnapshotPolicyId = props.systemDiskAutoSnapshotPolicyId;
        this.systemDiskBurstingEnabled = props.systemDiskBurstingEnabled;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.systemDiskPerformanceLevel = props.systemDiskPerformanceLevel;
        this.systemDiskProvisionedIops = props.systemDiskProvisionedIops;
        this.systemDiskSize = props.systemDiskSize;
        this.tags = props.tags;
        this.updatePolicy = props.updatePolicy;
        this.userData = props.userData;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.zoneIds = props.zoneIds;
    }
    get rosProperties() {
        return {
            imageId: this.imageId,
            instanceType: this.instanceType,
            maxAmount: this.maxAmount,
            allocatePublicIp: this.allocatePublicIp,
            autoReleaseTime: this.autoReleaseTime,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            dedicatedHostId: this.dedicatedHostId,
            deletionProtection: this.deletionProtection,
            deploymentSetId: this.deploymentSetId,
            description: this.description,
            diskMappings: this.diskMappings,
            eniMappings: this.eniMappings,
            hostName: this.hostName,
            hpcClusterId: this.hpcClusterId,
            instanceChargeType: this.instanceChargeType,
            instanceName: this.instanceName,
            internetChargeType: this.internetChargeType,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            ioOptimized: this.ioOptimized,
            ipv6AddressCount: this.ipv6AddressCount,
            ipv6Addresses: this.ipv6Addresses,
            keyPairName: this.keyPairName,
            launchTemplateId: this.launchTemplateId,
            launchTemplateName: this.launchTemplateName,
            launchTemplateVersion: this.launchTemplateVersion,
            networkType: this.networkType,
            password: this.password,
            passwordInherit: this.passwordInherit,
            period: this.period,
            periodUnit: this.periodUnit,
            privateIpAddress: this.privateIpAddress,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityEnhancementStrategy: this.securityEnhancementStrategy,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            spotDuration: this.spotDuration,
            spotInterruptionBehavior: this.spotInterruptionBehavior,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            systemDiskAutoSnapshotPolicyId: this.systemDiskAutoSnapshotPolicyId,
            systemDiskBurstingEnabled: this.systemDiskBurstingEnabled,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            systemDiskPerformanceLevel: this.systemDiskPerformanceLevel,
            systemDiskProvisionedIops: this.systemDiskProvisionedIops,
            systemDiskSize: this.systemDiskSize,
            tags: this.tags,
            updatePolicy: this.updatePolicy,
            userData: this.userData,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            zoneIds: this.zoneIds,
        };
    }
    renderProperties(props) {
        return rosInstanceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInstanceGroup = RosInstanceGroup;
/**
 * The resource type name for this resource class.
 */
RosInstanceGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::InstanceGroup";
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroup_DiskMappingsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('burstingEnabled', ros.validateBoolean)(properties.burstingEnabled));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    if (properties.encrypted && (typeof properties.encrypted) !== 'object') {
        errors.collect(ros.propertyValidator('encrypted', ros.validateAllowedValues)({
            data: properties.encrypted,
            allowedValues: ["true", "false"],
        }));
    }
    errors.collect(ros.propertyValidator('encrypted', ros.validateString)(properties.encrypted));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    errors.collect(ros.propertyValidator('size', ros.validateString)(properties.size));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    errors.collect(ros.propertyValidator('provisionedIops', ros.validateNumber)(properties.provisionedIops));
    return errors.wrap('supplied properties not correct for "DiskMappingsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupDiskMappingsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstanceGroup_DiskMappingsPropertyValidator(properties).assertSuccess();
    return {
        BurstingEnabled: ros.booleanToRosTemplate(properties.burstingEnabled),
        SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
        Category: ros.stringToRosTemplate(properties.category),
        Description: ros.stringToRosTemplate(properties.description),
        KMSKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
        Encrypted: ros.stringToRosTemplate(properties.encrypted),
        Device: ros.stringToRosTemplate(properties.device),
        PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
        Size: ros.stringToRosTemplate(properties.size),
        AutoSnapshotPolicyId: ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
        DiskName: ros.stringToRosTemplate(properties.diskName),
        ProvisionedIops: ros.numberToRosTemplate(properties.provisionedIops),
    };
}
/**
 * Determine whether the given properties match those of a `EniMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `EniMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroup_EniMappingsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
    return errors.wrap('supplied properties not correct for "EniMappingsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup.EniMappings` resource
 *
 * @param properties - the TypeScript properties of a `EniMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup.EniMappings` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupEniMappingsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstanceGroup_EniMappingsPropertyValidator(properties).assertSuccess();
    return {
        Description: ros.stringToRosTemplate(properties.description),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        NetworkInterfaceName: ros.stringToRosTemplate(properties.networkInterfaceName),
        PrimaryIpAddress: ros.stringToRosTemplate(properties.primaryIpAddress),
    };
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroup_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroup.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstanceGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosInstanceGroupCloneProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceGroupCloneProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroupClonePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
        }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosInstanceGroupClone_DiskMappingsPropertyValidator))(properties.diskMappings));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('systemDiskDescription', ros.validateString)(properties.systemDiskDescription));
    errors.collect(ros.propertyValidator('systemDiskProvisionedIops', ros.validateNumber)(properties.systemDiskProvisionedIops));
    if (properties.autoRenew && (typeof properties.autoRenew) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenew', ros.validateAllowedValues)({
            data: properties.autoRenew,
            allowedValues: ["True", "False"],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenew', ros.validateString)(properties.autoRenew));
    if (properties.ipv6Addresses && (Array.isArray(properties.ipv6Addresses) || (typeof properties.ipv6Addresses) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6Addresses', ros.validateLength)({
            data: properties.ipv6Addresses.length,
            min: undefined,
            max: 1,
        }));
    }
    errors.collect(ros.propertyValidator('ipv6Addresses', ros.listValidator(ros.validateAny))(properties.ipv6Addresses));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.requiredValidator)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.validateString)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('maxAmount', ros.requiredValidator)(properties.maxAmount));
    if (properties.maxAmount && (typeof properties.maxAmount) !== 'object') {
        errors.collect(ros.propertyValidator('maxAmount', ros.validateRange)({
            data: properties.maxAmount,
            min: 0,
            max: 1000,
        }));
    }
    errors.collect(ros.propertyValidator('maxAmount', ros.validateNumber)(properties.maxAmount));
    errors.collect(ros.propertyValidator('systemDiskAutoSnapshotPolicyId', ros.validateString)(properties.systemDiskAutoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    if (properties.ipv6AddressCount && (typeof properties.ipv6AddressCount) !== 'object') {
        errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateRange)({
            data: properties.ipv6AddressCount,
            min: 0,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateString)(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('systemDiskDiskName', ros.validateString)(properties.systemDiskDiskName));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstanceGroupClone_TagsPropertyValidator))(properties.tags));
    if (properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
            data: properties.spotStrategy,
            allowedValues: ["NoSpot", "SpotWithPriceLimit", "SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('passwordInherit', ros.validateBoolean)(properties.passwordInherit));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    if (properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
            data: properties.autoRenewPeriod,
            allowedValues: [1, 2, 3, 6, 12, 24, 36, 48, 60],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    if (properties.backendServerWeight && (typeof properties.backendServerWeight) !== 'object') {
        errors.collect(ros.propertyValidator('backendServerWeight', ros.validateRange)({
            data: properties.backendServerWeight,
            min: 0,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('backendServerWeight', ros.validateNumber)(properties.backendServerWeight));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('launchTemplateName', ros.validateString)(properties.launchTemplateName));
    if (properties.updatePolicy && (typeof properties.updatePolicy) !== 'object') {
        errors.collect(ros.propertyValidator('updatePolicy', ros.validateAllowedValues)({
            data: properties.updatePolicy,
            allowedValues: ["ForNewInstances", "ForAllInstances"],
        }));
    }
    errors.collect(ros.propertyValidator('updatePolicy', ros.validateString)(properties.updatePolicy));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('hpcClusterId', ros.validateString)(properties.hpcClusterId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('launchTemplateId', ros.validateString)(properties.launchTemplateId));
    if (properties.deletionProtection && (typeof properties.deletionProtection) !== 'object') {
        errors.collect(ros.propertyValidator('deletionProtection', ros.validateAllowedValues)({
            data: properties.deletionProtection,
            allowedValues: [true, false],
        }));
    }
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateAny))(properties.securityGroupIds));
    errors.collect(ros.propertyValidator('loadBalancerIdToAttach', ros.validateString)(properties.loadBalancerIdToAttach));
    if (properties.systemDiskCategory && (typeof properties.systemDiskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateAllowedValues)({
            data: properties.systemDiskCategory,
            allowedValues: ["cloud", "cloud_efficiency", "cloud_ssd", "cloud_essd", "ephemeral_ssd", "cloud_auto"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    if (properties.eniMappings && (Array.isArray(properties.eniMappings) || (typeof properties.eniMappings) === 'string')) {
        errors.collect(ros.propertyValidator('eniMappings', ros.validateLength)({
            data: properties.eniMappings.length,
            min: undefined,
            max: 1,
        }));
    }
    errors.collect(ros.propertyValidator('eniMappings', ros.listValidator(RosInstanceGroupClone_EniMappingsPropertyValidator))(properties.eniMappings));
    errors.collect(ros.propertyValidator('systemDiskBurstingEnabled', ros.validateBoolean)(properties.systemDiskBurstingEnabled));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    if (properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: 200,
        }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    if (properties.internetMaxBandwidthIn && (typeof properties.internetMaxBandwidthIn) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateRange)({
            data: properties.internetMaxBandwidthIn,
            min: 1,
            max: 200,
        }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateNumber)(properties.internetMaxBandwidthIn));
    if (properties.launchTemplateVersion && (typeof properties.launchTemplateVersion) !== 'object') {
        errors.collect(ros.propertyValidator('launchTemplateVersion', ros.validateAllowedPattern)({
            data: properties.launchTemplateVersion,
            reg: /^[1-9]\d*$/
        }));
    }
    errors.collect(ros.propertyValidator('launchTemplateVersion', ros.validateString)(properties.launchTemplateVersion));
    if (properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
            data: properties.periodUnit,
            allowedValues: ["Week", "Month", "Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('autoReleaseTime', ros.validateString)(properties.autoReleaseTime));
    return errors.wrap('supplied properties not correct for "RosInstanceGroupCloneProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceGroupCloneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupClonePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosInstanceGroupClonePropsValidator(properties).assertSuccess();
    }
    return {
        MaxAmount: ros.numberToRosTemplate(properties.maxAmount),
        SourceInstanceId: ros.stringToRosTemplate(properties.sourceInstanceId),
        AutoReleaseTime: ros.stringToRosTemplate(properties.autoReleaseTime),
        AutoRenew: ros.stringToRosTemplate(properties.autoRenew),
        AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
        BackendServerWeight: ros.numberToRosTemplate(properties.backendServerWeight),
        DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
        DeploymentSetId: ros.stringToRosTemplate(properties.deploymentSetId),
        Description: ros.stringToRosTemplate(properties.description),
        DiskMappings: ros.listMapper(rosInstanceGroupCloneDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
        EniMappings: ros.listMapper(rosInstanceGroupCloneEniMappingsPropertyToRosTemplate)(properties.eniMappings),
        HpcClusterId: ros.stringToRosTemplate(properties.hpcClusterId),
        ImageId: ros.stringToRosTemplate(properties.imageId),
        InstanceName: ros.stringToRosTemplate(properties.instanceName),
        InternetMaxBandwidthIn: ros.numberToRosTemplate(properties.internetMaxBandwidthIn),
        InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
        Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
        Ipv6Addresses: ros.listMapper(ros.objectToRosTemplate)(properties.ipv6Addresses),
        KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
        LaunchTemplateId: ros.stringToRosTemplate(properties.launchTemplateId),
        LaunchTemplateName: ros.stringToRosTemplate(properties.launchTemplateName),
        LaunchTemplateVersion: ros.stringToRosTemplate(properties.launchTemplateVersion),
        LoadBalancerIdToAttach: ros.stringToRosTemplate(properties.loadBalancerIdToAttach),
        Password: ros.stringToRosTemplate(properties.password),
        PasswordInherit: ros.booleanToRosTemplate(properties.passwordInherit),
        Period: ros.numberToRosTemplate(properties.period),
        PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
        RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        SecurityGroupIds: ros.listMapper(ros.objectToRosTemplate)(properties.securityGroupIds),
        SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
        SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
        SystemDiskAutoSnapshotPolicyId: ros.stringToRosTemplate(properties.systemDiskAutoSnapshotPolicyId),
        SystemDiskBurstingEnabled: ros.booleanToRosTemplate(properties.systemDiskBurstingEnabled),
        SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
        SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
        SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
        SystemDiskProvisionedIops: ros.numberToRosTemplate(properties.systemDiskProvisionedIops),
        Tags: ros.listMapper(rosInstanceGroupCloneTagsPropertyToRosTemplate)(properties.tags),
        UpdatePolicy: ros.stringToRosTemplate(properties.updatePolicy),
        ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::InstanceGroupClone`
 */
class RosInstanceGroupClone extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::InstanceGroupClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosInstanceGroupClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHostNames = this.getAtt('HostNames');
        this.attrInnerIps = this.getAtt('InnerIps');
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrIpv6AddressIds = this.getAtt('Ipv6AddressIds');
        this.attrIpv6Addresses = this.getAtt('Ipv6Addresses');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPrivateIps = this.getAtt('PrivateIps');
        this.attrPublicIps = this.getAtt('PublicIps');
        this.attrZoneIds = this.getAtt('ZoneIds');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.maxAmount = props.maxAmount;
        this.sourceInstanceId = props.sourceInstanceId;
        this.autoReleaseTime = props.autoReleaseTime;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.backendServerWeight = props.backendServerWeight;
        this.deletionProtection = props.deletionProtection;
        this.deploymentSetId = props.deploymentSetId;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.eniMappings = props.eniMappings;
        this.hpcClusterId = props.hpcClusterId;
        this.imageId = props.imageId;
        this.instanceName = props.instanceName;
        this.internetMaxBandwidthIn = props.internetMaxBandwidthIn;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.ipv6AddressCount = props.ipv6AddressCount;
        this.ipv6Addresses = props.ipv6Addresses;
        this.keyPairName = props.keyPairName;
        this.launchTemplateId = props.launchTemplateId;
        this.launchTemplateName = props.launchTemplateName;
        this.launchTemplateVersion = props.launchTemplateVersion;
        this.loadBalancerIdToAttach = props.loadBalancerIdToAttach;
        this.password = props.password;
        this.passwordInherit = props.passwordInherit;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskAutoSnapshotPolicyId = props.systemDiskAutoSnapshotPolicyId;
        this.systemDiskBurstingEnabled = props.systemDiskBurstingEnabled;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.systemDiskProvisionedIops = props.systemDiskProvisionedIops;
        this.tags = props.tags;
        this.updatePolicy = props.updatePolicy;
        this.zoneId = props.zoneId;
    }
    get rosProperties() {
        return {
            maxAmount: this.maxAmount,
            sourceInstanceId: this.sourceInstanceId,
            autoReleaseTime: this.autoReleaseTime,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            backendServerWeight: this.backendServerWeight,
            deletionProtection: this.deletionProtection,
            deploymentSetId: this.deploymentSetId,
            description: this.description,
            diskMappings: this.diskMappings,
            eniMappings: this.eniMappings,
            hpcClusterId: this.hpcClusterId,
            imageId: this.imageId,
            instanceName: this.instanceName,
            internetMaxBandwidthIn: this.internetMaxBandwidthIn,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            ipv6AddressCount: this.ipv6AddressCount,
            ipv6Addresses: this.ipv6Addresses,
            keyPairName: this.keyPairName,
            launchTemplateId: this.launchTemplateId,
            launchTemplateName: this.launchTemplateName,
            launchTemplateVersion: this.launchTemplateVersion,
            loadBalancerIdToAttach: this.loadBalancerIdToAttach,
            password: this.password,
            passwordInherit: this.passwordInherit,
            period: this.period,
            periodUnit: this.periodUnit,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            systemDiskAutoSnapshotPolicyId: this.systemDiskAutoSnapshotPolicyId,
            systemDiskBurstingEnabled: this.systemDiskBurstingEnabled,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            systemDiskProvisionedIops: this.systemDiskProvisionedIops,
            tags: this.tags,
            updatePolicy: this.updatePolicy,
            zoneId: this.zoneId,
        };
    }
    renderProperties(props) {
        return rosInstanceGroupClonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInstanceGroupClone = RosInstanceGroupClone;
/**
 * The resource type name for this resource class.
 */
RosInstanceGroupClone.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::InstanceGroupClone";
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroupClone_DiskMappingsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('burstingEnabled', ros.validateBoolean)(properties.burstingEnabled));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    if (properties.encrypted && (typeof properties.encrypted) !== 'object') {
        errors.collect(ros.propertyValidator('encrypted', ros.validateAllowedValues)({
            data: properties.encrypted,
            allowedValues: ["true", "false"],
        }));
    }
    errors.collect(ros.propertyValidator('encrypted', ros.validateString)(properties.encrypted));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.requiredValidator)(properties.size));
    errors.collect(ros.propertyValidator('size', ros.validateString)(properties.size));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    errors.collect(ros.propertyValidator('provisionedIops', ros.validateNumber)(properties.provisionedIops));
    return errors.wrap('supplied properties not correct for "DiskMappingsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupCloneDiskMappingsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstanceGroupClone_DiskMappingsPropertyValidator(properties).assertSuccess();
    return {
        BurstingEnabled: ros.booleanToRosTemplate(properties.burstingEnabled),
        SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
        Category: ros.stringToRosTemplate(properties.category),
        Description: ros.stringToRosTemplate(properties.description),
        KMSKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
        Encrypted: ros.stringToRosTemplate(properties.encrypted),
        Device: ros.stringToRosTemplate(properties.device),
        PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
        Size: ros.stringToRosTemplate(properties.size),
        AutoSnapshotPolicyId: ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
        DiskName: ros.stringToRosTemplate(properties.diskName),
        ProvisionedIops: ros.numberToRosTemplate(properties.provisionedIops),
    };
}
/**
 * Determine whether the given properties match those of a `EniMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `EniMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroupClone_EniMappingsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
    return errors.wrap('supplied properties not correct for "EniMappingsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone.EniMappings` resource
 *
 * @param properties - the TypeScript properties of a `EniMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone.EniMappings` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupCloneEniMappingsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstanceGroupClone_EniMappingsPropertyValidator(properties).assertSuccess();
    return {
        Description: ros.stringToRosTemplate(properties.description),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        NetworkInterfaceName: ros.stringToRosTemplate(properties.networkInterfaceName),
        PrimaryIpAddress: ros.stringToRosTemplate(properties.primaryIpAddress),
    };
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstanceGroupClone_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::InstanceGroupClone.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceGroupCloneTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstanceGroupClone_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosInvocationProps`
 *
 * @param properties - the TypeScript properties of a `RosInvocationProps`
 *
 * @returns the result of the validation.
 */
function RosInvocationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('timed', ros.validateBoolean)(properties.timed));
    errors.collect(ros.propertyValidator('frequency', ros.validateString)(properties.frequency));
    errors.collect(ros.propertyValidator('commandId', ros.requiredValidator)(properties.commandId));
    errors.collect(ros.propertyValidator('commandId', ros.validateString)(properties.commandId));
    errors.collect(ros.propertyValidator('sync', ros.validateBoolean)(properties.sync));
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    if (properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: undefined,
            max: 50,
        }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateAny))(properties.instanceIds));
    return errors.wrap('supplied properties not correct for "RosInvocationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Invocation` resource
 *
 * @param properties - the TypeScript properties of a `RosInvocationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Invocation` resource.
 */
// @ts-ignore TS6133
function rosInvocationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosInvocationPropsValidator(properties).assertSuccess();
    }
    return {
        CommandId: ros.stringToRosTemplate(properties.commandId),
        InstanceIds: ros.listMapper(ros.objectToRosTemplate)(properties.instanceIds),
        Frequency: ros.stringToRosTemplate(properties.frequency),
        Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
        Sync: ros.booleanToRosTemplate(properties.sync),
        Timed: ros.booleanToRosTemplate(properties.timed),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::Invocation`
 */
class RosInvocation extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::Invocation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosInvocation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInvokeId = this.getAtt('InvokeId');
        this.attrInvokeInstances = this.getAtt('InvokeInstances');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commandId = props.commandId;
        this.instanceIds = props.instanceIds;
        this.frequency = props.frequency;
        this.parameters = props.parameters;
        this.sync = props.sync;
        this.timed = props.timed;
    }
    get rosProperties() {
        return {
            commandId: this.commandId,
            instanceIds: this.instanceIds,
            frequency: this.frequency,
            parameters: this.parameters,
            sync: this.sync,
            timed: this.timed,
        };
    }
    renderProperties(props) {
        return rosInvocationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInvocation = RosInvocation;
/**
 * The resource type name for this resource class.
 */
RosInvocation.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Invocation";
/**
 * Determine whether the given properties match those of a `RosJoinSecurityGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosJoinSecurityGroupProps`
 *
 * @returns the result of the validation.
 */
function RosJoinSecurityGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('networkInterfaceList', ros.listValidator(ros.validateAny))(properties.networkInterfaceList));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('instanceIdList', ros.listValidator(ros.validateAny))(properties.instanceIdList));
    return errors.wrap('supplied properties not correct for "RosJoinSecurityGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::JoinSecurityGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosJoinSecurityGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::JoinSecurityGroup` resource.
 */
// @ts-ignore TS6133
function rosJoinSecurityGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosJoinSecurityGroupPropsValidator(properties).assertSuccess();
    }
    return {
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        InstanceIdList: ros.listMapper(ros.objectToRosTemplate)(properties.instanceIdList),
        NetworkInterfaceList: ros.listMapper(ros.objectToRosTemplate)(properties.networkInterfaceList),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::JoinSecurityGroup`
 */
class RosJoinSecurityGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::JoinSecurityGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosJoinSecurityGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.securityGroupId = props.securityGroupId;
        this.instanceId = props.instanceId;
        this.instanceIdList = props.instanceIdList;
        this.networkInterfaceList = props.networkInterfaceList;
    }
    get rosProperties() {
        return {
            securityGroupId: this.securityGroupId,
            instanceId: this.instanceId,
            instanceIdList: this.instanceIdList,
            networkInterfaceList: this.networkInterfaceList,
        };
    }
    renderProperties(props) {
        return rosJoinSecurityGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosJoinSecurityGroup = RosJoinSecurityGroup;
/**
 * The resource type name for this resource class.
 */
RosJoinSecurityGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::JoinSecurityGroup";
/**
 * Determine whether the given properties match those of a `RosLaunchTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosLaunchTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosLaunchTemplatePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('imageOwnerAlias', ros.validateString)(properties.imageOwnerAlias));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.diskMappings && (Array.isArray(properties.diskMappings) || (typeof properties.diskMappings) === 'string')) {
        errors.collect(ros.propertyValidator('diskMappings', ros.validateLength)({
            data: properties.diskMappings.length,
            min: undefined,
            max: 16,
        }));
    }
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosLaunchTemplate_DiskMappingsPropertyValidator))(properties.diskMappings));
    if (properties.systemDiskSize && (typeof properties.systemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskSize', ros.validateRange)({
            data: properties.systemDiskSize,
            min: 20,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    errors.collect(ros.propertyValidator('systemDiskDescription', ros.validateString)(properties.systemDiskDescription));
    if (properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
            data: properties.instanceChargeType,
            allowedValues: ["PrePaid", "PostPaid"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('spotDuration', ros.validateNumber)(properties.spotDuration));
    if (properties.templateTags && (Array.isArray(properties.templateTags) || (typeof properties.templateTags) === 'string')) {
        errors.collect(ros.propertyValidator('templateTags', ros.validateLength)({
            data: properties.templateTags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('templateTags', ros.listValidator(RosLaunchTemplate_TemplateTagsPropertyValidator))(properties.templateTags));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    if (properties.ipv6AddressCount && (typeof properties.ipv6AddressCount) !== 'object') {
        errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateRange)({
            data: properties.ipv6AddressCount,
            min: 1,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    if (properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
            data: properties.networkType,
            allowedValues: ["vpc", "classic"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    if (properties.networkInterfaces && (Array.isArray(properties.networkInterfaces) || (typeof properties.networkInterfaces) === 'string')) {
        errors.collect(ros.propertyValidator('networkInterfaces', ros.validateLength)({
            data: properties.networkInterfaces.length,
            min: undefined,
            max: 8,
        }));
    }
    errors.collect(ros.propertyValidator('networkInterfaces', ros.listValidator(RosLaunchTemplate_NetworkInterfacesPropertyValidator))(properties.networkInterfaces));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('systemDiskDiskName', ros.validateString)(properties.systemDiskDiskName));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateString)(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosLaunchTemplate_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    if (properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
            data: properties.spotStrategy,
            allowedValues: ["NoSpot", "SpotWithPriceLimit", "SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('passwordInherit', ros.validateBoolean)(properties.passwordInherit));
    errors.collect(ros.propertyValidator('templateResourceGroupId', ros.validateString)(properties.templateResourceGroupId));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('launchTemplateName', ros.requiredValidator)(properties.launchTemplateName));
    errors.collect(ros.propertyValidator('launchTemplateName', ros.validateString)(properties.launchTemplateName));
    if (properties.ioOptimized && (typeof properties.ioOptimized) !== 'object') {
        errors.collect(ros.propertyValidator('ioOptimized', ros.validateAllowedValues)({
            data: properties.ioOptimized,
            allowedValues: ["none", "optimized"],
        }));
    }
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateString)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('versionDescription', ros.validateString)(properties.versionDescription));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if (properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
            data: properties.period,
            allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if (properties.securityGroupIds && (Array.isArray(properties.securityGroupIds) || (typeof properties.securityGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('securityGroupIds', ros.validateLength)({
            data: properties.securityGroupIds.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateString))(properties.securityGroupIds));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    if (properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
            data: properties.internetChargeType,
            allowedValues: ["PayByBandwidth", "PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    errors.collect(ros.propertyValidator('systemDiskDeleteWithInstance', ros.validateBoolean)(properties.systemDiskDeleteWithInstance));
    if (properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: 200,
        }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    if (properties.securityEnhancementStrategy && (typeof properties.securityEnhancementStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateAllowedValues)({
            data: properties.securityEnhancementStrategy,
            allowedValues: ["Active", "Deactive"],
        }));
    }
    errors.collect(ros.propertyValidator('securityEnhancementStrategy', ros.validateString)(properties.securityEnhancementStrategy));
    errors.collect(ros.propertyValidator('autoReleaseTime', ros.validateString)(properties.autoReleaseTime));
    return errors.wrap('supplied properties not correct for "RosLaunchTemplateProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate` resource
 *
 * @param properties - the TypeScript properties of a `RosLaunchTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate` resource.
 */
// @ts-ignore TS6133
function rosLaunchTemplatePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosLaunchTemplatePropsValidator(properties).assertSuccess();
    }
    return {
        LaunchTemplateName: ros.stringToRosTemplate(properties.launchTemplateName),
        AutoReleaseTime: ros.stringToRosTemplate(properties.autoReleaseTime),
        DeploymentSetId: ros.stringToRosTemplate(properties.deploymentSetId),
        Description: ros.stringToRosTemplate(properties.description),
        DiskMappings: ros.listMapper(rosLaunchTemplateDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
        HostName: ros.stringToRosTemplate(properties.hostName),
        ImageId: ros.stringToRosTemplate(properties.imageId),
        ImageOwnerAlias: ros.stringToRosTemplate(properties.imageOwnerAlias),
        InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
        InstanceName: ros.stringToRosTemplate(properties.instanceName),
        InstanceType: ros.stringToRosTemplate(properties.instanceType),
        InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
        InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
        IoOptimized: ros.stringToRosTemplate(properties.ioOptimized),
        Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
        KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
        NetworkInterfaces: ros.listMapper(rosLaunchTemplateNetworkInterfacesPropertyToRosTemplate)(properties.networkInterfaces),
        NetworkType: ros.stringToRosTemplate(properties.networkType),
        PasswordInherit: ros.booleanToRosTemplate(properties.passwordInherit),
        Period: ros.numberToRosTemplate(properties.period),
        PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
        RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SecurityEnhancementStrategy: ros.stringToRosTemplate(properties.securityEnhancementStrategy),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        SecurityGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupIds),
        SpotDuration: ros.numberToRosTemplate(properties.spotDuration),
        SpotPriceLimit: ros.stringToRosTemplate(properties.spotPriceLimit),
        SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
        SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
        SystemDiskDeleteWithInstance: ros.booleanToRosTemplate(properties.systemDiskDeleteWithInstance),
        SystemDiskDescription: ros.stringToRosTemplate(properties.systemDiskDescription),
        SystemDiskDiskName: ros.stringToRosTemplate(properties.systemDiskDiskName),
        SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
        SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
        Tags: ros.listMapper(rosLaunchTemplateTagsPropertyToRosTemplate)(properties.tags),
        TemplateResourceGroupId: ros.stringToRosTemplate(properties.templateResourceGroupId),
        TemplateTags: ros.listMapper(rosLaunchTemplateTemplateTagsPropertyToRosTemplate)(properties.templateTags),
        UserData: ros.stringToRosTemplate(properties.userData),
        VersionDescription: ros.stringToRosTemplate(properties.versionDescription),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::LaunchTemplate`
 */
class RosLaunchTemplate extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::LaunchTemplate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosLaunchTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDefaultVersionNumber = this.getAtt('DefaultVersionNumber');
        this.attrLatestVersionNumber = this.getAtt('LatestVersionNumber');
        this.attrLaunchTemplateId = this.getAtt('LaunchTemplateId');
        this.attrLaunchTemplateName = this.getAtt('LaunchTemplateName');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.launchTemplateName = props.launchTemplateName;
        this.autoReleaseTime = props.autoReleaseTime;
        this.deploymentSetId = props.deploymentSetId;
        this.description = props.description;
        this.diskMappings = props.diskMappings;
        this.hostName = props.hostName;
        this.imageId = props.imageId;
        this.imageOwnerAlias = props.imageOwnerAlias;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceName = props.instanceName;
        this.instanceType = props.instanceType;
        this.internetChargeType = props.internetChargeType;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.ioOptimized = props.ioOptimized;
        this.ipv6AddressCount = props.ipv6AddressCount;
        this.keyPairName = props.keyPairName;
        this.networkInterfaces = props.networkInterfaces;
        this.networkType = props.networkType;
        this.passwordInherit = props.passwordInherit;
        this.period = props.period;
        this.privateIpAddress = props.privateIpAddress;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.securityEnhancementStrategy = props.securityEnhancementStrategy;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.spotDuration = props.spotDuration;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskDeleteWithInstance = props.systemDiskDeleteWithInstance;
        this.systemDiskDescription = props.systemDiskDescription;
        this.systemDiskDiskName = props.systemDiskDiskName;
        this.systemDiskPerformanceLevel = props.systemDiskPerformanceLevel;
        this.systemDiskSize = props.systemDiskSize;
        this.tags = props.tags;
        this.templateResourceGroupId = props.templateResourceGroupId;
        this.templateTags = props.templateTags;
        this.userData = props.userData;
        this.versionDescription = props.versionDescription;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }
    get rosProperties() {
        return {
            launchTemplateName: this.launchTemplateName,
            autoReleaseTime: this.autoReleaseTime,
            deploymentSetId: this.deploymentSetId,
            description: this.description,
            diskMappings: this.diskMappings,
            hostName: this.hostName,
            imageId: this.imageId,
            imageOwnerAlias: this.imageOwnerAlias,
            instanceChargeType: this.instanceChargeType,
            instanceName: this.instanceName,
            instanceType: this.instanceType,
            internetChargeType: this.internetChargeType,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            ioOptimized: this.ioOptimized,
            ipv6AddressCount: this.ipv6AddressCount,
            keyPairName: this.keyPairName,
            networkInterfaces: this.networkInterfaces,
            networkType: this.networkType,
            passwordInherit: this.passwordInherit,
            period: this.period,
            privateIpAddress: this.privateIpAddress,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            securityEnhancementStrategy: this.securityEnhancementStrategy,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            spotDuration: this.spotDuration,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskDeleteWithInstance: this.systemDiskDeleteWithInstance,
            systemDiskDescription: this.systemDiskDescription,
            systemDiskDiskName: this.systemDiskDiskName,
            systemDiskPerformanceLevel: this.systemDiskPerformanceLevel,
            systemDiskSize: this.systemDiskSize,
            tags: this.tags,
            templateResourceGroupId: this.templateResourceGroupId,
            templateTags: this.templateTags,
            userData: this.userData,
            versionDescription: this.versionDescription,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    renderProperties(props) {
        return rosLaunchTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosLaunchTemplate = RosLaunchTemplate;
/**
 * The resource type name for this resource class.
 */
RosLaunchTemplate.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::LaunchTemplate";
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosLaunchTemplate_DiskMappingsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.validateString)(properties.size));
    errors.collect(ros.propertyValidator('deleteWithInstance', ros.validateBoolean)(properties.deleteWithInstance));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    return errors.wrap('supplied properties not correct for "DiskMappingsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosLaunchTemplateDiskMappingsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosLaunchTemplate_DiskMappingsPropertyValidator(properties).assertSuccess();
    return {
        SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
        Category: ros.stringToRosTemplate(properties.category),
        Description: ros.stringToRosTemplate(properties.description),
        Encrypted: ros.booleanToRosTemplate(properties.encrypted),
        PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
        Size: ros.stringToRosTemplate(properties.size),
        DeleteWithInstance: ros.booleanToRosTemplate(properties.deleteWithInstance),
        DiskName: ros.stringToRosTemplate(properties.diskName),
    };
}
/**
 * Determine whether the given properties match those of a `NetworkInterfacesProperty`
 *
 * @param properties - the TypeScript properties of a `NetworkInterfacesProperty`
 *
 * @returns the result of the validation.
 */
function RosLaunchTemplate_NetworkInterfacesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
    return errors.wrap('supplied properties not correct for "NetworkInterfacesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.NetworkInterfaces` resource
 *
 * @param properties - the TypeScript properties of a `NetworkInterfacesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.NetworkInterfaces` resource.
 */
// @ts-ignore TS6133
function rosLaunchTemplateNetworkInterfacesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosLaunchTemplate_NetworkInterfacesPropertyValidator(properties).assertSuccess();
    return {
        Description: ros.stringToRosTemplate(properties.description),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        NetworkInterfaceName: ros.stringToRosTemplate(properties.networkInterfaceName),
        PrimaryIpAddress: ros.stringToRosTemplate(properties.primaryIpAddress),
    };
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosLaunchTemplate_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.Tags` resource.
 */
// @ts-ignore TS6133
function rosLaunchTemplateTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosLaunchTemplate_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `TemplateTagsProperty`
 *
 * @param properties - the TypeScript properties of a `TemplateTagsProperty`
 *
 * @returns the result of the validation.
 */
function RosLaunchTemplate_TemplateTagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TemplateTagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.TemplateTags` resource
 *
 * @param properties - the TypeScript properties of a `TemplateTagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::LaunchTemplate.TemplateTags` resource.
 */
// @ts-ignore TS6133
function rosLaunchTemplateTemplateTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosLaunchTemplate_TemplateTagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosNetworkInterfaceProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfaceProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkInterfacePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.privateIpAddresses && (Array.isArray(properties.privateIpAddresses) || (typeof properties.privateIpAddresses) === 'string')) {
        errors.collect(ros.propertyValidator('privateIpAddresses', ros.validateLength)({
            data: properties.privateIpAddresses.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('privateIpAddresses', ros.listValidator(ros.validateString))(properties.privateIpAddresses));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('secondaryPrivateIpAddressCount', ros.validateNumber)(properties.secondaryPrivateIpAddressCount));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
    if (properties.securityGroupIds && (Array.isArray(properties.securityGroupIds) || (typeof properties.securityGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('securityGroupIds', ros.validateLength)({
            data: properties.securityGroupIds.length,
            min: undefined,
            max: 16,
        }));
    }
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateString))(properties.securityGroupIds));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosNetworkInterface_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosNetworkInterfaceProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterface` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterface` resource.
 */
// @ts-ignore TS6133
function rosNetworkInterfacePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosNetworkInterfacePropsValidator(properties).assertSuccess();
    }
    return {
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        Description: ros.stringToRosTemplate(properties.description),
        NetworkInterfaceName: ros.stringToRosTemplate(properties.networkInterfaceName),
        PrimaryIpAddress: ros.stringToRosTemplate(properties.primaryIpAddress),
        PrivateIpAddresses: ros.listMapper(ros.stringToRosTemplate)(properties.privateIpAddresses),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SecondaryPrivateIpAddressCount: ros.numberToRosTemplate(properties.secondaryPrivateIpAddressCount),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        SecurityGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupIds),
        Tags: ros.listMapper(rosNetworkInterfaceTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::NetworkInterface`
 */
class RosNetworkInterface extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::NetworkInterface`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosNetworkInterface.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMacAddress = this.getAtt('MacAddress');
        this.attrNetworkInterfaceId = this.getAtt('NetworkInterfaceId');
        this.attrPrivateIpAddress = this.getAtt('PrivateIpAddress');
        this.attrSecondaryPrivateIpAddresses = this.getAtt('SecondaryPrivateIpAddresses');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vSwitchId = props.vSwitchId;
        this.description = props.description;
        this.networkInterfaceName = props.networkInterfaceName;
        this.primaryIpAddress = props.primaryIpAddress;
        this.privateIpAddresses = props.privateIpAddresses;
        this.resourceGroupId = props.resourceGroupId;
        this.secondaryPrivateIpAddressCount = props.secondaryPrivateIpAddressCount;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            vSwitchId: this.vSwitchId,
            description: this.description,
            networkInterfaceName: this.networkInterfaceName,
            primaryIpAddress: this.primaryIpAddress,
            privateIpAddresses: this.privateIpAddresses,
            resourceGroupId: this.resourceGroupId,
            secondaryPrivateIpAddressCount: this.secondaryPrivateIpAddressCount,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosNetworkInterfacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNetworkInterface = RosNetworkInterface;
/**
 * The resource type name for this resource class.
 */
RosNetworkInterface.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterface";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosNetworkInterface_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterface.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterface.Tags` resource.
 */
// @ts-ignore TS6133
function rosNetworkInterfaceTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosNetworkInterface_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosNetworkInterfaceAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfaceAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkInterfaceAttachmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('trunkNetworkInstanceId', ros.validateString)(properties.trunkNetworkInstanceId));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.requiredValidator)(properties.networkInterfaceId));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.validateString)(properties.networkInterfaceId));
    return errors.wrap('supplied properties not correct for "RosNetworkInterfaceAttachmentProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterfaceAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfaceAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterfaceAttachment` resource.
 */
// @ts-ignore TS6133
function rosNetworkInterfaceAttachmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosNetworkInterfaceAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        NetworkInterfaceId: ros.stringToRosTemplate(properties.networkInterfaceId),
        TrunkNetworkInstanceId: ros.stringToRosTemplate(properties.trunkNetworkInstanceId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::NetworkInterfaceAttachment`
 */
class RosNetworkInterfaceAttachment extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::NetworkInterfaceAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosNetworkInterfaceAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrNetworkInterfaceId = this.getAtt('NetworkInterfaceId');
        this.attrTrunkNetworkInstanceId = this.getAtt('TrunkNetworkInstanceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.networkInterfaceId = props.networkInterfaceId;
        this.trunkNetworkInstanceId = props.trunkNetworkInstanceId;
    }
    get rosProperties() {
        return {
            instanceId: this.instanceId,
            networkInterfaceId: this.networkInterfaceId,
            trunkNetworkInstanceId: this.trunkNetworkInstanceId,
        };
    }
    renderProperties(props) {
        return rosNetworkInterfaceAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNetworkInterfaceAttachment = RosNetworkInterfaceAttachment;
/**
 * The resource type name for this resource class.
 */
RosNetworkInterfaceAttachment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterfaceAttachment";
/**
 * Determine whether the given properties match those of a `RosNetworkInterfacePermissionProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfacePermissionProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkInterfacePermissionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountId', ros.requiredValidator)(properties.accountId));
    errors.collect(ros.propertyValidator('accountId', ros.validateString)(properties.accountId));
    errors.collect(ros.propertyValidator('permission', ros.requiredValidator)(properties.permission));
    errors.collect(ros.propertyValidator('permission', ros.validateString)(properties.permission));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.requiredValidator)(properties.networkInterfaceId));
    errors.collect(ros.propertyValidator('networkInterfaceId', ros.validateString)(properties.networkInterfaceId));
    return errors.wrap('supplied properties not correct for "RosNetworkInterfacePermissionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterfacePermission` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfacePermissionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::NetworkInterfacePermission` resource.
 */
// @ts-ignore TS6133
function rosNetworkInterfacePermissionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosNetworkInterfacePermissionPropsValidator(properties).assertSuccess();
    }
    return {
        AccountId: ros.stringToRosTemplate(properties.accountId),
        NetworkInterfaceId: ros.stringToRosTemplate(properties.networkInterfaceId),
        Permission: ros.stringToRosTemplate(properties.permission),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::NetworkInterfacePermission`
 */
class RosNetworkInterfacePermission extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::NetworkInterfacePermission`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosNetworkInterfacePermission.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkInterfacePermissionId = this.getAtt('NetworkInterfacePermissionId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountId = props.accountId;
        this.networkInterfaceId = props.networkInterfaceId;
        this.permission = props.permission;
    }
    get rosProperties() {
        return {
            accountId: this.accountId,
            networkInterfaceId: this.networkInterfaceId,
            permission: this.permission,
        };
    }
    renderProperties(props) {
        return rosNetworkInterfacePermissionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNetworkInterfacePermission = RosNetworkInterfacePermission;
/**
 * The resource type name for this resource class.
 */
RosNetworkInterfacePermission.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::NetworkInterfacePermission";
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
    errors.collect(ros.propertyValidator('maxEntries', ros.requiredValidator)(properties.maxEntries));
    if (properties.maxEntries && (typeof properties.maxEntries) !== 'object') {
        errors.collect(ros.propertyValidator('maxEntries', ros.validateRange)({
            data: properties.maxEntries,
            min: 1,
            max: 200,
        }));
    }
    errors.collect(ros.propertyValidator('maxEntries', ros.validateNumber)(properties.maxEntries));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('prefixListName', ros.requiredValidator)(properties.prefixListName));
    errors.collect(ros.propertyValidator('prefixListName', ros.validateString)(properties.prefixListName));
    if (properties.entries && (Array.isArray(properties.entries) || (typeof properties.entries) === 'string')) {
        errors.collect(ros.propertyValidator('entries', ros.validateLength)({
            data: properties.entries.length,
            min: undefined,
            max: 200,
        }));
    }
    errors.collect(ros.propertyValidator('entries', ros.listValidator(RosPrefixList_EntriesPropertyValidator))(properties.entries));
    errors.collect(ros.propertyValidator('addressFamily', ros.requiredValidator)(properties.addressFamily));
    if (properties.addressFamily && (typeof properties.addressFamily) !== 'object') {
        errors.collect(ros.propertyValidator('addressFamily', ros.validateAllowedValues)({
            data: properties.addressFamily,
            allowedValues: ["Ipv4", "Ipv6"],
        }));
    }
    errors.collect(ros.propertyValidator('addressFamily', ros.validateString)(properties.addressFamily));
    return errors.wrap('supplied properties not correct for "RosPrefixListProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrefixList` resource
 *
 * @param properties - the TypeScript properties of a `RosPrefixListProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrefixList` resource.
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
        AddressFamily: ros.stringToRosTemplate(properties.addressFamily),
        MaxEntries: ros.numberToRosTemplate(properties.maxEntries),
        PrefixListName: ros.stringToRosTemplate(properties.prefixListName),
        Description: ros.stringToRosTemplate(properties.description),
        Entries: ros.listMapper(rosPrefixListEntriesPropertyToRosTemplate)(properties.entries),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::PrefixList`
 */
class RosPrefixList extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::PrefixList`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPrefixList.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPrefixListId = this.getAtt('PrefixListId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addressFamily = props.addressFamily;
        this.maxEntries = props.maxEntries;
        this.prefixListName = props.prefixListName;
        this.description = props.description;
        this.entries = props.entries;
    }
    get rosProperties() {
        return {
            addressFamily: this.addressFamily,
            maxEntries: this.maxEntries,
            prefixListName: this.prefixListName,
            description: this.description,
            entries: this.entries,
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
RosPrefixList.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::PrefixList";
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrefixList.Entries` resource
 *
 * @param properties - the TypeScript properties of a `EntriesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::PrefixList.Entries` resource.
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
 * Determine whether the given properties match those of a `RosRouteProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteProps`
 *
 * @returns the result of the validation.
 */
function RosRoutePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('nextHopType', ros.validateString)(properties.nextHopType));
    errors.collect(ros.propertyValidator('routeTableId', ros.requiredValidator)(properties.routeTableId));
    errors.collect(ros.propertyValidator('routeTableId', ros.validateString)(properties.routeTableId));
    errors.collect(ros.propertyValidator('nextHopId', ros.validateString)(properties.nextHopId));
    errors.collect(ros.propertyValidator('nextHopList', ros.listValidator(RosRoute_NextHopListPropertyValidator))(properties.nextHopList));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.requiredValidator)(properties.destinationCidrBlock));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.validateString)(properties.destinationCidrBlock));
    return errors.wrap('supplied properties not correct for "RosRouteProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Route` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Route` resource.
 */
// @ts-ignore TS6133
function rosRoutePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosRoutePropsValidator(properties).assertSuccess();
    }
    return {
        DestinationCidrBlock: ros.stringToRosTemplate(properties.destinationCidrBlock),
        RouteTableId: ros.stringToRosTemplate(properties.routeTableId),
        NextHopId: ros.stringToRosTemplate(properties.nextHopId),
        NextHopList: ros.listMapper(rosRouteNextHopListPropertyToRosTemplate)(properties.nextHopList),
        NextHopType: ros.stringToRosTemplate(properties.nextHopType),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::Route`
 */
class RosRoute extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::Route`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosRoute.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.destinationCidrBlock = props.destinationCidrBlock;
        this.routeTableId = props.routeTableId;
        this.nextHopId = props.nextHopId;
        this.nextHopList = props.nextHopList;
        this.nextHopType = props.nextHopType;
    }
    get rosProperties() {
        return {
            destinationCidrBlock: this.destinationCidrBlock,
            routeTableId: this.routeTableId,
            nextHopId: this.nextHopId,
            nextHopList: this.nextHopList,
            nextHopType: this.nextHopType,
        };
    }
    renderProperties(props) {
        return rosRoutePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRoute = RosRoute;
/**
 * The resource type name for this resource class.
 */
RosRoute.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Route";
/**
 * Determine whether the given properties match those of a `NextHopListProperty`
 *
 * @param properties - the TypeScript properties of a `NextHopListProperty`
 *
 * @returns the result of the validation.
 */
function RosRoute_NextHopListPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('nextHopType', ros.validateString)(properties.nextHopType));
    errors.collect(ros.propertyValidator('nextHopId', ros.requiredValidator)(properties.nextHopId));
    errors.collect(ros.propertyValidator('nextHopId', ros.validateString)(properties.nextHopId));
    return errors.wrap('supplied properties not correct for "NextHopListProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Route.NextHopList` resource
 *
 * @param properties - the TypeScript properties of a `NextHopListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Route.NextHopList` resource.
 */
// @ts-ignore TS6133
function rosRouteNextHopListPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRoute_NextHopListPropertyValidator(properties).assertSuccess();
    return {
        NextHopType: ros.stringToRosTemplate(properties.nextHopType),
        NextHopId: ros.stringToRosTemplate(properties.nextHopId),
    };
}
/**
 * Determine whether the given properties match those of a `RosRunCommandProps`
 *
 * @param properties - the TypeScript properties of a `RosRunCommandProps`
 *
 * @returns the result of the validation.
 */
function RosRunCommandPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('timed', ros.validateBoolean)(properties.timed));
    errors.collect(ros.propertyValidator('contentEncoding', ros.validateString)(properties.contentEncoding));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('workingDir', ros.validateString)(properties.workingDir));
    errors.collect(ros.propertyValidator('commandContent', ros.requiredValidator)(properties.commandContent));
    errors.collect(ros.propertyValidator('commandContent', ros.validateString)(properties.commandContent));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('frequency', ros.validateString)(properties.frequency));
    errors.collect(ros.propertyValidator('enableParameter', ros.validateBoolean)(properties.enableParameter));
    errors.collect(ros.propertyValidator('sync', ros.validateBoolean)(properties.sync));
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    if (properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 1,
            max: 50,
        }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    errors.collect(ros.propertyValidator('keepCommand', ros.validateBoolean)(properties.keepCommand));
    return errors.wrap('supplied properties not correct for "RosRunCommandProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::RunCommand` resource
 *
 * @param properties - the TypeScript properties of a `RosRunCommandProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::RunCommand` resource.
 */
// @ts-ignore TS6133
function rosRunCommandPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosRunCommandPropsValidator(properties).assertSuccess();
    }
    return {
        CommandContent: ros.stringToRosTemplate(properties.commandContent),
        InstanceIds: ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
        Type: ros.stringToRosTemplate(properties.type),
        ContentEncoding: ros.stringToRosTemplate(properties.contentEncoding),
        Description: ros.stringToRosTemplate(properties.description),
        EnableParameter: ros.booleanToRosTemplate(properties.enableParameter),
        Frequency: ros.stringToRosTemplate(properties.frequency),
        KeepCommand: ros.booleanToRosTemplate(properties.keepCommand),
        Name: ros.stringToRosTemplate(properties.name),
        Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
        Sync: ros.booleanToRosTemplate(properties.sync),
        Timed: ros.booleanToRosTemplate(properties.timed),
        Timeout: ros.numberToRosTemplate(properties.timeout),
        WorkingDir: ros.stringToRosTemplate(properties.workingDir),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::RunCommand`
 */
class RosRunCommand extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::RunCommand`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosRunCommand.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCommandId = this.getAtt('CommandId');
        this.attrInvokeId = this.getAtt('InvokeId');
        this.attrInvokeInstances = this.getAtt('InvokeInstances');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commandContent = props.commandContent;
        this.instanceIds = props.instanceIds;
        this.type = props.type;
        this.contentEncoding = props.contentEncoding;
        this.description = props.description;
        this.enableParameter = props.enableParameter;
        this.frequency = props.frequency;
        this.keepCommand = props.keepCommand;
        this.name = props.name;
        this.parameters = props.parameters;
        this.sync = props.sync;
        this.timed = props.timed;
        this.timeout = props.timeout;
        this.workingDir = props.workingDir;
    }
    get rosProperties() {
        return {
            commandContent: this.commandContent,
            instanceIds: this.instanceIds,
            type: this.type,
            contentEncoding: this.contentEncoding,
            description: this.description,
            enableParameter: this.enableParameter,
            frequency: this.frequency,
            keepCommand: this.keepCommand,
            name: this.name,
            parameters: this.parameters,
            sync: this.sync,
            timed: this.timed,
            timeout: this.timeout,
            workingDir: this.workingDir,
        };
    }
    renderProperties(props) {
        return rosRunCommandPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRunCommand = RosRunCommand;
/**
 * The resource type name for this resource class.
 */
RosRunCommand.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::RunCommand";
/**
 * Determine whether the given properties match those of a `RosSNatEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosSNatEntryProps`
 *
 * @returns the result of the validation.
 */
function RosSNatEntryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceVSwitchId', ros.validateString)(properties.sourceVSwitchId));
    errors.collect(ros.propertyValidator('snatEntryName', ros.validateString)(properties.snatEntryName));
    errors.collect(ros.propertyValidator('sourceCidr', ros.validateString)(properties.sourceCidr));
    errors.collect(ros.propertyValidator('sNatTableId', ros.requiredValidator)(properties.sNatTableId));
    errors.collect(ros.propertyValidator('sNatTableId', ros.validateString)(properties.sNatTableId));
    errors.collect(ros.propertyValidator('sNatIp', ros.requiredValidator)(properties.sNatIp));
    errors.collect(ros.propertyValidator('sNatIp', ros.validateString)(properties.sNatIp));
    return errors.wrap('supplied properties not correct for "RosSNatEntryProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SNatEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosSNatEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SNatEntry` resource.
 */
// @ts-ignore TS6133
function rosSNatEntryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSNatEntryPropsValidator(properties).assertSuccess();
    }
    return {
        SNatIp: ros.stringToRosTemplate(properties.sNatIp),
        SNatTableId: ros.stringToRosTemplate(properties.sNatTableId),
        SnatEntryName: ros.stringToRosTemplate(properties.snatEntryName),
        SourceCIDR: ros.stringToRosTemplate(properties.sourceCidr),
        SourceVSwitchId: ros.stringToRosTemplate(properties.sourceVSwitchId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::SNatEntry`
 */
class RosSNatEntry extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::SNatEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSNatEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSNatEntryId = this.getAtt('SNatEntryId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sNatIp = props.sNatIp;
        this.sNatTableId = props.sNatTableId;
        this.snatEntryName = props.snatEntryName;
        this.sourceCidr = props.sourceCidr;
        this.sourceVSwitchId = props.sourceVSwitchId;
    }
    get rosProperties() {
        return {
            sNatIp: this.sNatIp,
            sNatTableId: this.sNatTableId,
            snatEntryName: this.snatEntryName,
            sourceCidr: this.sourceCidr,
            sourceVSwitchId: this.sourceVSwitchId,
        };
    }
    renderProperties(props) {
        return rosSNatEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSNatEntry = RosSNatEntry;
/**
 * The resource type name for this resource class.
 */
RosSNatEntry.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SNatEntry";
/**
 * Determine whether the given properties match those of a `RosSSHKeyPairProps`
 *
 * @param properties - the TypeScript properties of a `RosSSHKeyPairProps`
 *
 * @returns the result of the validation.
 */
function RosSSHKeyPairPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.requiredValidator)(properties.keyPairName));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('publicKeyBody', ros.validateString)(properties.publicKeyBody));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosSSHKeyPair_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosSSHKeyPairProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SSHKeyPair` resource
 *
 * @param properties - the TypeScript properties of a `RosSSHKeyPairProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SSHKeyPair` resource.
 */
// @ts-ignore TS6133
function rosSSHKeyPairPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSSHKeyPairPropsValidator(properties).assertSuccess();
    }
    return {
        KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
        PublicKeyBody: ros.stringToRosTemplate(properties.publicKeyBody),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        Tags: ros.listMapper(rosSSHKeyPairTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::SSHKeyPair`
 */
class RosSSHKeyPair extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::SSHKeyPair`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSSHKeyPair.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrKeyPairFingerPrint = this.getAtt('KeyPairFingerPrint');
        this.attrKeyPairName = this.getAtt('KeyPairName');
        this.attrPrivateKeyBody = this.getAtt('PrivateKeyBody');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.keyPairName = props.keyPairName;
        this.publicKeyBody = props.publicKeyBody;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            keyPairName: this.keyPairName,
            publicKeyBody: this.publicKeyBody,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosSSHKeyPairPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSSHKeyPair = RosSSHKeyPair;
/**
 * The resource type name for this resource class.
 */
RosSSHKeyPair.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SSHKeyPair";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosSSHKeyPair_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SSHKeyPair.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SSHKeyPair.Tags` resource.
 */
// @ts-ignore TS6133
function rosSSHKeyPairTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSSHKeyPair_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosSSHKeyPairAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosSSHKeyPairAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosSSHKeyPairAttachmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.requiredValidator)(properties.keyPairName));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateAny))(properties.instanceIds));
    return errors.wrap('supplied properties not correct for "RosSSHKeyPairAttachmentProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SSHKeyPairAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosSSHKeyPairAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SSHKeyPairAttachment` resource.
 */
// @ts-ignore TS6133
function rosSSHKeyPairAttachmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSSHKeyPairAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
        InstanceIds: ros.listMapper(ros.objectToRosTemplate)(properties.instanceIds),
        KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::SSHKeyPairAttachment`
 */
class RosSSHKeyPairAttachment extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::SSHKeyPairAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSSHKeyPairAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceIds = props.instanceIds;
        this.keyPairName = props.keyPairName;
    }
    get rosProperties() {
        return {
            instanceIds: this.instanceIds,
            keyPairName: this.keyPairName,
        };
    }
    renderProperties(props) {
        return rosSSHKeyPairAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSSHKeyPairAttachment = RosSSHKeyPairAttachment;
/**
 * The resource type name for this resource class.
 */
RosSSHKeyPairAttachment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SSHKeyPairAttachment";
/**
 * Determine whether the given properties match those of a `RosSecurityGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('securityGroupName', ros.validateString)(properties.securityGroupName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.securityGroupType && (typeof properties.securityGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('securityGroupType', ros.validateAllowedValues)({
            data: properties.securityGroupType,
            allowedValues: ["normal", "enterprise"],
        }));
    }
    errors.collect(ros.propertyValidator('securityGroupType', ros.validateString)(properties.securityGroupType));
    errors.collect(ros.propertyValidator('securityGroupIngress', ros.listValidator(RosSecurityGroup_SecurityGroupIngressPropertyValidator))(properties.securityGroupIngress));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosSecurityGroup_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('securityGroupEgress', ros.listValidator(RosSecurityGroup_SecurityGroupEgressPropertyValidator))(properties.securityGroupEgress));
    return errors.wrap('supplied properties not correct for "RosSecurityGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSecurityGroupPropsValidator(properties).assertSuccess();
    }
    return {
        Description: ros.stringToRosTemplate(properties.description),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SecurityGroupEgress: ros.listMapper(rosSecurityGroupSecurityGroupEgressPropertyToRosTemplate)(properties.securityGroupEgress),
        SecurityGroupIngress: ros.listMapper(rosSecurityGroupSecurityGroupIngressPropertyToRosTemplate)(properties.securityGroupIngress),
        SecurityGroupName: ros.stringToRosTemplate(properties.securityGroupName),
        SecurityGroupType: ros.stringToRosTemplate(properties.securityGroupType),
        Tags: ros.listMapper(rosSecurityGroupTagsPropertyToRosTemplate)(properties.tags),
        VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::SecurityGroup`
 */
class RosSecurityGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::SecurityGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSecurityGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.attrSecurityGroupName = this.getAtt('SecurityGroupName');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupEgress = props.securityGroupEgress;
        this.securityGroupIngress = props.securityGroupIngress;
        this.securityGroupName = props.securityGroupName;
        this.securityGroupType = props.securityGroupType;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
    }
    get rosProperties() {
        return {
            description: this.description,
            resourceGroupId: this.resourceGroupId,
            securityGroupEgress: this.securityGroupEgress,
            securityGroupIngress: this.securityGroupIngress,
            securityGroupName: this.securityGroupName,
            securityGroupType: this.securityGroupType,
            tags: this.tags,
            vpcId: this.vpcId,
        };
    }
    renderProperties(props) {
        return rosSecurityGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSecurityGroup = RosSecurityGroup;
/**
 * The resource type name for this resource class.
 */
RosSecurityGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroup";
/**
 * Determine whether the given properties match those of a `SecurityGroupEgressProperty`
 *
 * @param properties - the TypeScript properties of a `SecurityGroupEgressProperty`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroup_SecurityGroupEgressPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
            data: properties.policy,
            allowedValues: ["accept", "drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('portRange', ros.requiredValidator)(properties.portRange));
    errors.collect(ros.propertyValidator('portRange', ros.validateString)(properties.portRange));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 512,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('destPrefixListId', ros.validateString)(properties.destPrefixListId));
    if (properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('destGroupOwnerId', ros.validateString)(properties.destGroupOwnerId));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if (properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
            data: properties.ipProtocol,
            allowedValues: ["tcp", "udp", "icmp", "gre", "all", "icmpv6"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('destCidrIp', ros.validateString)(properties.destCidrIp));
    if (properties.nicType && (typeof properties.nicType) !== 'object') {
        errors.collect(ros.propertyValidator('nicType', ros.validateAllowedValues)({
            data: properties.nicType,
            allowedValues: ["internet", "intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('nicType', ros.validateString)(properties.nicType));
    errors.collect(ros.propertyValidator('ipv6DestCidrIp', ros.validateString)(properties.ipv6DestCidrIp));
    errors.collect(ros.propertyValidator('destGroupId', ros.validateString)(properties.destGroupId));
    return errors.wrap('supplied properties not correct for "SecurityGroupEgressProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup.SecurityGroupEgress` resource
 *
 * @param properties - the TypeScript properties of a `SecurityGroupEgressProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup.SecurityGroupEgress` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupSecurityGroupEgressPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSecurityGroup_SecurityGroupEgressPropertyValidator(properties).assertSuccess();
    return {
        Policy: ros.stringToRosTemplate(properties.policy),
        PortRange: ros.stringToRosTemplate(properties.portRange),
        Description: ros.stringToRosTemplate(properties.description),
        DestPrefixListId: ros.stringToRosTemplate(properties.destPrefixListId),
        Priority: ros.numberToRosTemplate(properties.priority),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        DestGroupOwnerId: ros.stringToRosTemplate(properties.destGroupOwnerId),
        IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
        DestCidrIp: ros.stringToRosTemplate(properties.destCidrIp),
        NicType: ros.stringToRosTemplate(properties.nicType),
        Ipv6DestCidrIp: ros.stringToRosTemplate(properties.ipv6DestCidrIp),
        DestGroupId: ros.stringToRosTemplate(properties.destGroupId),
    };
}
/**
 * Determine whether the given properties match those of a `SecurityGroupIngressProperty`
 *
 * @param properties - the TypeScript properties of a `SecurityGroupIngressProperty`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroup_SecurityGroupIngressPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceGroupId', ros.validateString)(properties.sourceGroupId));
    if (properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
            data: properties.policy,
            allowedValues: ["accept", "drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 512,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.validateString)(properties.sourcePortRange));
    if (properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('sourceGroupOwnerId', ros.validateString)(properties.sourceGroupOwnerId));
    errors.collect(ros.propertyValidator('ipv6SourceCidrIp', ros.validateString)(properties.ipv6SourceCidrIp));
    if (properties.nicType && (typeof properties.nicType) !== 'object') {
        errors.collect(ros.propertyValidator('nicType', ros.validateAllowedValues)({
            data: properties.nicType,
            allowedValues: ["internet", "intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('nicType', ros.validateString)(properties.nicType));
    errors.collect(ros.propertyValidator('portRange', ros.requiredValidator)(properties.portRange));
    errors.collect(ros.propertyValidator('portRange', ros.validateString)(properties.portRange));
    errors.collect(ros.propertyValidator('sourceCidrIp', ros.validateString)(properties.sourceCidrIp));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if (properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
            data: properties.ipProtocol,
            allowedValues: ["tcp", "udp", "icmp", "gre", "all", "icmpv6"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('sourcePrefixListId', ros.validateString)(properties.sourcePrefixListId));
    return errors.wrap('supplied properties not correct for "SecurityGroupIngressProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup.SecurityGroupIngress` resource
 *
 * @param properties - the TypeScript properties of a `SecurityGroupIngressProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup.SecurityGroupIngress` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupSecurityGroupIngressPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSecurityGroup_SecurityGroupIngressPropertyValidator(properties).assertSuccess();
    return {
        SourceGroupId: ros.stringToRosTemplate(properties.sourceGroupId),
        Policy: ros.stringToRosTemplate(properties.policy),
        Description: ros.stringToRosTemplate(properties.description),
        SourcePortRange: ros.stringToRosTemplate(properties.sourcePortRange),
        Priority: ros.numberToRosTemplate(properties.priority),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        SourceGroupOwnerId: ros.stringToRosTemplate(properties.sourceGroupOwnerId),
        Ipv6SourceCidrIp: ros.stringToRosTemplate(properties.ipv6SourceCidrIp),
        NicType: ros.stringToRosTemplate(properties.nicType),
        PortRange: ros.stringToRosTemplate(properties.portRange),
        SourceCidrIp: ros.stringToRosTemplate(properties.sourceCidrIp),
        IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
        SourcePrefixListId: ros.stringToRosTemplate(properties.sourcePrefixListId),
    };
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroup_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroup.Tags` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSecurityGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosSecurityGroupCloneProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupCloneProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroupClonePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('securityGroupName', ros.validateString)(properties.securityGroupName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('destinationRegionId', ros.validateString)(properties.destinationRegionId));
    if (properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
            data: properties.networkType,
            allowedValues: ["Classic"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    if (properties.securityGroupType && (typeof properties.securityGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('securityGroupType', ros.validateAllowedValues)({
            data: properties.securityGroupType,
            allowedValues: ["normal", "enterprise"],
        }));
    }
    errors.collect(ros.propertyValidator('securityGroupType', ros.validateString)(properties.securityGroupType));
    errors.collect(ros.propertyValidator('sourceSecurityGroupId', ros.requiredValidator)(properties.sourceSecurityGroupId));
    errors.collect(ros.propertyValidator('sourceSecurityGroupId', ros.validateString)(properties.sourceSecurityGroupId));
    return errors.wrap('supplied properties not correct for "RosSecurityGroupCloneProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroupClone` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupCloneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroupClone` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupClonePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSecurityGroupClonePropsValidator(properties).assertSuccess();
    }
    return {
        SourceSecurityGroupId: ros.stringToRosTemplate(properties.sourceSecurityGroupId),
        Description: ros.stringToRosTemplate(properties.description),
        DestinationRegionId: ros.stringToRosTemplate(properties.destinationRegionId),
        NetworkType: ros.stringToRosTemplate(properties.networkType),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SecurityGroupName: ros.stringToRosTemplate(properties.securityGroupName),
        SecurityGroupType: ros.stringToRosTemplate(properties.securityGroupType),
        VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::SecurityGroupClone`
 */
class RosSecurityGroupClone extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::SecurityGroupClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSecurityGroupClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sourceSecurityGroupId = props.sourceSecurityGroupId;
        this.description = props.description;
        this.destinationRegionId = props.destinationRegionId;
        this.networkType = props.networkType;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupName = props.securityGroupName;
        this.securityGroupType = props.securityGroupType;
        this.vpcId = props.vpcId;
    }
    get rosProperties() {
        return {
            sourceSecurityGroupId: this.sourceSecurityGroupId,
            description: this.description,
            destinationRegionId: this.destinationRegionId,
            networkType: this.networkType,
            resourceGroupId: this.resourceGroupId,
            securityGroupName: this.securityGroupName,
            securityGroupType: this.securityGroupType,
            vpcId: this.vpcId,
        };
    }
    renderProperties(props) {
        return rosSecurityGroupClonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSecurityGroupClone = RosSecurityGroupClone;
/**
 * The resource type name for this resource class.
 */
RosSecurityGroupClone.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupClone";
/**
 * Determine whether the given properties match those of a `RosSecurityGroupEgressProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupEgressProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroupEgressPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
            data: properties.policy,
            allowedValues: ["accept", "drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('portRange', ros.requiredValidator)(properties.portRange));
    errors.collect(ros.propertyValidator('portRange', ros.validateString)(properties.portRange));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 512,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('destPrefixListId', ros.validateString)(properties.destPrefixListId));
    if (properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('destGroupOwnerId', ros.validateString)(properties.destGroupOwnerId));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if (properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
            data: properties.ipProtocol,
            allowedValues: ["tcp", "udp", "icmp", "gre", "all", "icmpv6"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('destCidrIp', ros.validateString)(properties.destCidrIp));
    if (properties.nicType && (typeof properties.nicType) !== 'object') {
        errors.collect(ros.propertyValidator('nicType', ros.validateAllowedValues)({
            data: properties.nicType,
            allowedValues: ["internet", "intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('nicType', ros.validateString)(properties.nicType));
    errors.collect(ros.propertyValidator('ipv6DestCidrIp', ros.validateString)(properties.ipv6DestCidrIp));
    errors.collect(ros.propertyValidator('destGroupId', ros.validateString)(properties.destGroupId));
    return errors.wrap('supplied properties not correct for "RosSecurityGroupEgressProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroupEgress` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupEgressProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroupEgress` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupEgressPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSecurityGroupEgressPropsValidator(properties).assertSuccess();
    }
    return {
        IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
        PortRange: ros.stringToRosTemplate(properties.portRange),
        Description: ros.stringToRosTemplate(properties.description),
        DestCidrIp: ros.stringToRosTemplate(properties.destCidrIp),
        DestGroupId: ros.stringToRosTemplate(properties.destGroupId),
        DestGroupOwnerId: ros.stringToRosTemplate(properties.destGroupOwnerId),
        DestPrefixListId: ros.stringToRosTemplate(properties.destPrefixListId),
        Ipv6DestCidrIp: ros.stringToRosTemplate(properties.ipv6DestCidrIp),
        NicType: ros.stringToRosTemplate(properties.nicType),
        Policy: ros.stringToRosTemplate(properties.policy),
        Priority: ros.numberToRosTemplate(properties.priority),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::SecurityGroupEgress`
 */
class RosSecurityGroupEgress extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::SecurityGroupEgress`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSecurityGroupEgress.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipProtocol = props.ipProtocol;
        this.portRange = props.portRange;
        this.description = props.description;
        this.destCidrIp = props.destCidrIp;
        this.destGroupId = props.destGroupId;
        this.destGroupOwnerId = props.destGroupOwnerId;
        this.destPrefixListId = props.destPrefixListId;
        this.ipv6DestCidrIp = props.ipv6DestCidrIp;
        this.nicType = props.nicType;
        this.policy = props.policy;
        this.priority = props.priority;
        this.securityGroupId = props.securityGroupId;
    }
    get rosProperties() {
        return {
            ipProtocol: this.ipProtocol,
            portRange: this.portRange,
            description: this.description,
            destCidrIp: this.destCidrIp,
            destGroupId: this.destGroupId,
            destGroupOwnerId: this.destGroupOwnerId,
            destPrefixListId: this.destPrefixListId,
            ipv6DestCidrIp: this.ipv6DestCidrIp,
            nicType: this.nicType,
            policy: this.policy,
            priority: this.priority,
            securityGroupId: this.securityGroupId,
        };
    }
    renderProperties(props) {
        return rosSecurityGroupEgressPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSecurityGroupEgress = RosSecurityGroupEgress;
/**
 * The resource type name for this resource class.
 */
RosSecurityGroupEgress.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupEgress";
/**
 * Determine whether the given properties match those of a `RosSecurityGroupIngressProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupIngressProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroupIngressPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceGroupId', ros.validateString)(properties.sourceGroupId));
    if (properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
            data: properties.policy,
            allowedValues: ["accept", "drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 512,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.validateString)(properties.sourcePortRange));
    if (properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('sourceGroupOwnerId', ros.validateString)(properties.sourceGroupOwnerId));
    errors.collect(ros.propertyValidator('ipv6SourceCidrIp', ros.validateString)(properties.ipv6SourceCidrIp));
    if (properties.nicType && (typeof properties.nicType) !== 'object') {
        errors.collect(ros.propertyValidator('nicType', ros.validateAllowedValues)({
            data: properties.nicType,
            allowedValues: ["internet", "intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('nicType', ros.validateString)(properties.nicType));
    errors.collect(ros.propertyValidator('portRange', ros.requiredValidator)(properties.portRange));
    errors.collect(ros.propertyValidator('portRange', ros.validateString)(properties.portRange));
    errors.collect(ros.propertyValidator('sourceCidrIp', ros.validateString)(properties.sourceCidrIp));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    if (properties.ipProtocol && (typeof properties.ipProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('ipProtocol', ros.validateAllowedValues)({
            data: properties.ipProtocol,
            allowedValues: ["tcp", "udp", "icmp", "gre", "all", "icmpv6"],
        }));
    }
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('sourcePrefixListId', ros.validateString)(properties.sourcePrefixListId));
    return errors.wrap('supplied properties not correct for "RosSecurityGroupIngressProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroupIngress` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupIngressProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::SecurityGroupIngress` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupIngressPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSecurityGroupIngressPropsValidator(properties).assertSuccess();
    }
    return {
        IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
        PortRange: ros.stringToRosTemplate(properties.portRange),
        Description: ros.stringToRosTemplate(properties.description),
        Ipv6SourceCidrIp: ros.stringToRosTemplate(properties.ipv6SourceCidrIp),
        NicType: ros.stringToRosTemplate(properties.nicType),
        Policy: ros.stringToRosTemplate(properties.policy),
        Priority: ros.numberToRosTemplate(properties.priority),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        SourceCidrIp: ros.stringToRosTemplate(properties.sourceCidrIp),
        SourceGroupId: ros.stringToRosTemplate(properties.sourceGroupId),
        SourceGroupOwnerId: ros.stringToRosTemplate(properties.sourceGroupOwnerId),
        SourcePortRange: ros.stringToRosTemplate(properties.sourcePortRange),
        SourcePrefixListId: ros.stringToRosTemplate(properties.sourcePrefixListId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::SecurityGroupIngress`
 */
class RosSecurityGroupIngress extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::SecurityGroupIngress`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSecurityGroupIngress.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipProtocol = props.ipProtocol;
        this.portRange = props.portRange;
        this.description = props.description;
        this.ipv6SourceCidrIp = props.ipv6SourceCidrIp;
        this.nicType = props.nicType;
        this.policy = props.policy;
        this.priority = props.priority;
        this.securityGroupId = props.securityGroupId;
        this.sourceCidrIp = props.sourceCidrIp;
        this.sourceGroupId = props.sourceGroupId;
        this.sourceGroupOwnerId = props.sourceGroupOwnerId;
        this.sourcePortRange = props.sourcePortRange;
        this.sourcePrefixListId = props.sourcePrefixListId;
    }
    get rosProperties() {
        return {
            ipProtocol: this.ipProtocol,
            portRange: this.portRange,
            description: this.description,
            ipv6SourceCidrIp: this.ipv6SourceCidrIp,
            nicType: this.nicType,
            policy: this.policy,
            priority: this.priority,
            securityGroupId: this.securityGroupId,
            sourceCidrIp: this.sourceCidrIp,
            sourceGroupId: this.sourceGroupId,
            sourceGroupOwnerId: this.sourceGroupOwnerId,
            sourcePortRange: this.sourcePortRange,
            sourcePrefixListId: this.sourcePrefixListId,
        };
    }
    renderProperties(props) {
        return rosSecurityGroupIngressPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSecurityGroupIngress = RosSecurityGroupIngress;
/**
 * The resource type name for this resource class.
 */
RosSecurityGroupIngress.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::SecurityGroupIngress";
/**
 * Determine whether the given properties match those of a `RosSnapshotProps`
 *
 * @param properties - the TypeScript properties of a `RosSnapshotProps`
 *
 * @returns the result of the validation.
 */
function RosSnapshotPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instantAccess', ros.validateBoolean)(properties.instantAccess));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 200,
            max: 1440,
        }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('snapshotName', ros.validateString)(properties.snapshotName));
    errors.collect(ros.propertyValidator('instantAccessRetentionDays', ros.validateNumber)(properties.instantAccessRetentionDays));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosSnapshot_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('diskId', ros.requiredValidator)(properties.diskId));
    errors.collect(ros.propertyValidator('diskId', ros.validateString)(properties.diskId));
    return errors.wrap('supplied properties not correct for "RosSnapshotProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Snapshot` resource
 *
 * @param properties - the TypeScript properties of a `RosSnapshotProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Snapshot` resource.
 */
// @ts-ignore TS6133
function rosSnapshotPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSnapshotPropsValidator(properties).assertSuccess();
    }
    return {
        DiskId: ros.stringToRosTemplate(properties.diskId),
        Description: ros.stringToRosTemplate(properties.description),
        InstantAccess: ros.booleanToRosTemplate(properties.instantAccess),
        InstantAccessRetentionDays: ros.numberToRosTemplate(properties.instantAccessRetentionDays),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SnapshotName: ros.stringToRosTemplate(properties.snapshotName),
        Tags: ros.listMapper(rosSnapshotTagsPropertyToRosTemplate)(properties.tags),
        Timeout: ros.numberToRosTemplate(properties.timeout),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::Snapshot`
 */
class RosSnapshot extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::Snapshot`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSnapshot.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSnapshotId = this.getAtt('SnapshotId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.diskId = props.diskId;
        this.description = props.description;
        this.instantAccess = props.instantAccess;
        this.instantAccessRetentionDays = props.instantAccessRetentionDays;
        this.resourceGroupId = props.resourceGroupId;
        this.snapshotName = props.snapshotName;
        this.tags = props.tags;
        this.timeout = props.timeout;
    }
    get rosProperties() {
        return {
            diskId: this.diskId,
            description: this.description,
            instantAccess: this.instantAccess,
            instantAccessRetentionDays: this.instantAccessRetentionDays,
            resourceGroupId: this.resourceGroupId,
            snapshotName: this.snapshotName,
            tags: this.tags,
            timeout: this.timeout,
        };
    }
    renderProperties(props) {
        return rosSnapshotPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSnapshot = RosSnapshot;
/**
 * The resource type name for this resource class.
 */
RosSnapshot.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::Snapshot";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosSnapshot_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::Snapshot.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::Snapshot.Tags` resource.
 */
// @ts-ignore TS6133
function rosSnapshotTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSnapshot_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosVPCProps`
 *
 * @param properties - the TypeScript properties of a `RosVPCProps`
 *
 * @returns the result of the validation.
 */
function RosVPCPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ipv6Isp', ros.validateString)(properties.ipv6Isp));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if (properties.secondaryCidrBlocks && (Array.isArray(properties.secondaryCidrBlocks) || (typeof properties.secondaryCidrBlocks) === 'string')) {
        errors.collect(ros.propertyValidator('secondaryCidrBlocks', ros.validateLength)({
            data: properties.secondaryCidrBlocks.length,
            min: 0,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('secondaryCidrBlocks', ros.listValidator(ros.validateString))(properties.secondaryCidrBlocks));
    errors.collect(ros.propertyValidator('cidrBlock', ros.validateString)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('vpcName', ros.validateString)(properties.vpcName));
    if (properties.ipv6CidrBlock && (Array.isArray(properties.ipv6CidrBlock) || (typeof properties.ipv6CidrBlock) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6CidrBlock', ros.validateLength)({
            data: properties.ipv6CidrBlock.length,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('ipv6CidrBlock', ros.validateString)(properties.ipv6CidrBlock));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosVPC_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('enableIpv6', ros.validateBoolean)(properties.enableIpv6));
    errors.collect(ros.propertyValidator('userCidr', ros.validateString)(properties.userCidr));
    return errors.wrap('supplied properties not correct for "RosVPCProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::VPC` resource
 *
 * @param properties - the TypeScript properties of a `RosVPCProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::VPC` resource.
 */
// @ts-ignore TS6133
function rosVPCPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVPCPropsValidator(properties).assertSuccess();
    }
    return {
        CidrBlock: ros.stringToRosTemplate(properties.cidrBlock),
        Description: ros.stringToRosTemplate(properties.description),
        EnableIpv6: ros.booleanToRosTemplate(properties.enableIpv6),
        Ipv6CidrBlock: ros.stringToRosTemplate(properties.ipv6CidrBlock),
        Ipv6Isp: ros.stringToRosTemplate(properties.ipv6Isp),
        ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
        SecondaryCidrBlocks: ros.listMapper(ros.stringToRosTemplate)(properties.secondaryCidrBlocks),
        Tags: ros.listMapper(rosVPCTagsPropertyToRosTemplate)(properties.tags),
        UserCidr: ros.stringToRosTemplate(properties.userCidr),
        VpcName: ros.stringToRosTemplate(properties.vpcName),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::VPC`
 */
class RosVPC extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::VPC`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVPC.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteTableId = this.getAtt('RouteTableId');
        this.attrVRouterId = this.getAtt('VRouterId');
        this.attrVpcId = this.getAtt('VpcId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cidrBlock = props.cidrBlock;
        this.description = props.description;
        this.enableIpv6 = props.enableIpv6;
        this.ipv6CidrBlock = props.ipv6CidrBlock;
        this.ipv6Isp = props.ipv6Isp;
        this.resourceGroupId = props.resourceGroupId;
        this.secondaryCidrBlocks = props.secondaryCidrBlocks;
        this.tags = props.tags;
        this.userCidr = props.userCidr;
        this.vpcName = props.vpcName;
    }
    get rosProperties() {
        return {
            cidrBlock: this.cidrBlock,
            description: this.description,
            enableIpv6: this.enableIpv6,
            ipv6CidrBlock: this.ipv6CidrBlock,
            ipv6Isp: this.ipv6Isp,
            resourceGroupId: this.resourceGroupId,
            secondaryCidrBlocks: this.secondaryCidrBlocks,
            tags: this.tags,
            userCidr: this.userCidr,
            vpcName: this.vpcName,
        };
    }
    renderProperties(props) {
        return rosVPCPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVPC = RosVPC;
/**
 * The resource type name for this resource class.
 */
RosVPC.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::VPC";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosVPC_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::VPC.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::VPC.Tags` resource.
 */
// @ts-ignore TS6133
function rosVPCTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVPC_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosVSwitchProps`
 *
 * @param properties - the TypeScript properties of a `RosVSwitchProps`
 *
 * @returns the result of the validation.
 */
function RosVSwitchPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('cidrBlock', ros.requiredValidator)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('cidrBlock', ros.validateString)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('vSwitchName', ros.validateString)(properties.vSwitchName));
    errors.collect(ros.propertyValidator('vpcIpv6CidrBlock', ros.validateString)(properties.vpcIpv6CidrBlock));
    if (properties.ipv6CidrBlock && (typeof properties.ipv6CidrBlock) !== 'object') {
        errors.collect(ros.propertyValidator('ipv6CidrBlock', ros.validateRange)({
            data: properties.ipv6CidrBlock,
            min: 0,
            max: 255,
        }));
    }
    errors.collect(ros.propertyValidator('ipv6CidrBlock', ros.validateNumber)(properties.ipv6CidrBlock));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosVSwitch_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('zoneType', ros.validateString)(properties.zoneType));
    return errors.wrap('supplied properties not correct for "RosVSwitchProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::VSwitch` resource
 *
 * @param properties - the TypeScript properties of a `RosVSwitchProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::VSwitch` resource.
 */
// @ts-ignore TS6133
function rosVSwitchPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosVSwitchPropsValidator(properties).assertSuccess();
    }
    return {
        CidrBlock: ros.stringToRosTemplate(properties.cidrBlock),
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        ZoneId: ros.stringToRosTemplate(properties.zoneId),
        Description: ros.stringToRosTemplate(properties.description),
        Ipv6CidrBlock: ros.numberToRosTemplate(properties.ipv6CidrBlock),
        Tags: ros.listMapper(rosVSwitchTagsPropertyToRosTemplate)(properties.tags),
        VpcIpv6CidrBlock: ros.stringToRosTemplate(properties.vpcIpv6CidrBlock),
        VSwitchName: ros.stringToRosTemplate(properties.vSwitchName),
        ZoneType: ros.stringToRosTemplate(properties.zoneType),
    };
}
/**
 * A ROS template type:  `ALIYUN::ECS::VSwitch`
 */
class RosVSwitch extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ECS::VSwitch`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosVSwitch.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCidrBlock = this.getAtt('CidrBlock');
        this.attrIpv6CidrBlock = this.getAtt('Ipv6CidrBlock');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cidrBlock = props.cidrBlock;
        this.vpcId = props.vpcId;
        this.zoneId = props.zoneId;
        this.description = props.description;
        this.ipv6CidrBlock = props.ipv6CidrBlock;
        this.tags = props.tags;
        this.vpcIpv6CidrBlock = props.vpcIpv6CidrBlock;
        this.vSwitchName = props.vSwitchName;
        this.zoneType = props.zoneType;
    }
    get rosProperties() {
        return {
            cidrBlock: this.cidrBlock,
            vpcId: this.vpcId,
            zoneId: this.zoneId,
            description: this.description,
            ipv6CidrBlock: this.ipv6CidrBlock,
            tags: this.tags,
            vpcIpv6CidrBlock: this.vpcIpv6CidrBlock,
            vSwitchName: this.vSwitchName,
            zoneType: this.zoneType,
        };
    }
    renderProperties(props) {
        return rosVSwitchPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosVSwitch = RosVSwitch;
/**
 * The resource type name for this resource class.
 */
RosVSwitch.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECS::VSwitch";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosVSwitch_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECS::VSwitch.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECS::VSwitch.Tags` resource.
 */
// @ts-ignore TS6133
function rosVSwitchTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosVSwitch_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}