import * as ros from '@alicloud/ros-cdk-core';
import { RosHaVipAssociation } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHaVipAssociation as HaVipAssociationProperty };

/**
 * Properties for defining a `HaVipAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havipassociation
 */
export interface HaVipAssociationProps {

    /**
     * Property haVipId: The ID of the HAVIP.
     */
    readonly haVipId: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of the ECS instance to be associated with the HAVIP.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property instanceType: The type of the instance to be associated with the HAVIP. Valid values:
     * EcsInstance: an ECS instance
     * NetworkInterface: an ENI. If you want to associate the HAVIP with an ENI, this parameter is required.
     */
    readonly instanceType?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::HaVipAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHaVipAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havipassociation
 */
export class HaVipAssociation extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: HaVipAssociationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HaVipAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosHaVipAssociation = new RosHaVipAssociation(this, id,  {
            instanceId: props.instanceId,
            haVipId: props.haVipId,
            instanceType: props.instanceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHaVipAssociation;
    }
}
