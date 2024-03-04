import * as ros from '@alicloud/ros-cdk-core';
import { RosAssignPrivateIpAddresses } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAssignPrivateIpAddresses as AssignPrivateIpAddressesProperty };

/**
 * Properties for defining a `AssignPrivateIpAddresses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignprivateipaddresses
 */
export interface AssignPrivateIpAddressesProps {

    /**
     * Property networkInterfaceId: The ID of the ENI.
     */
    readonly networkInterfaceId: string | ros.IResolvable;

    /**
     * Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI. 
     * Valid values of number of private ip addresses:
     * When the ENI is in the Available state: 1 to 10.
     * When the ENI is in the InUse state: limited by the instance type. 
     * For more information, see Instance type families.
     * You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
     */
    readonly privateIpAddresses?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
     */
    readonly secondaryPrivateIpAddressCount?: number | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::AssignPrivateIpAddresses`, which is used to assign one or more secondary private IP addresses to an ENI. You can specify private IP addresses within the CIDR block of the vSwitch that hosts the ENI. You can also specify the number of private IP addresses for ECS to assign them automatically.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAssignPrivateIpAddresses`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignprivateipaddresses
 */
export class AssignPrivateIpAddresses extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AssignPrivateIpAddressesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NetworkInterfaceId: The ID of the ENI.
     */
    public readonly attrNetworkInterfaceId: ros.IResolvable;

    /**
     * Attribute PrivateIpAddresses: Assigned private ip addresses.
     */
    public readonly attrPrivateIpAddresses: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AssignPrivateIpAddressesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAssignPrivateIpAddresses = new RosAssignPrivateIpAddresses(this, id,  {
            secondaryPrivateIpAddressCount: props.secondaryPrivateIpAddressCount,
            privateIpAddresses: props.privateIpAddresses,
            networkInterfaceId: props.networkInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAssignPrivateIpAddresses;
        this.attrNetworkInterfaceId = rosAssignPrivateIpAddresses.attrNetworkInterfaceId;
        this.attrPrivateIpAddresses = rosAssignPrivateIpAddresses.attrPrivateIpAddresses;
    }
}
