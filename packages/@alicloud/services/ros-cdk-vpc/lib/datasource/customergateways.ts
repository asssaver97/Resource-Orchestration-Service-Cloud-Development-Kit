import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomerGateways } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCustomerGateways as CustomerGatewaysProperty };

/**
 * Properties for defining a `CustomerGateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
 */
export interface CustomerGatewaysProps {

    /**
     * Property customerGatewayId: The ID of the customer gateway.
     */
    readonly customerGatewayId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::CustomerGateways`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomerGateways`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
 */
export class CustomerGateways extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CustomerGatewaysProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CustomerGatewayIds: The list of customer gateway IDs.
     */
    public readonly attrCustomerGatewayIds: ros.IResolvable;

    /**
     * Attribute CustomerGateways: The list of customer gateways.
     */
    public readonly attrCustomerGateways: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomerGatewaysProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCustomerGateways = new RosCustomerGateways(this, id,  {
            customerGatewayId: props.customerGatewayId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomerGateways;
        this.attrCustomerGatewayIds = rosCustomerGateways.attrCustomerGatewayIds;
        this.attrCustomerGateways = rosCustomerGateways.attrCustomerGateways;
    }
}
