import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainExtensions } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomainExtensions as DomainExtensionsProperty };

/**
 * Properties for defining a `DomainExtensions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextensions
 */
export interface DomainExtensionsProps {

    /**
     * Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.
     * Valid values: 1 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;

    /**
     * Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property domainExtensionId: The ID of the additional certificate.
     */
    readonly domainExtensionId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::DomainExtensions`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainExtensions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextensions
 */
export class DomainExtensions extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DomainExtensionsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DomainExtensionIds: The list of domain extension IDs.
     */
    public readonly attrDomainExtensionIds: ros.IResolvable;

    /**
     * Attribute DomainExtensions: The list of domain extensions.
     */
    public readonly attrDomainExtensions: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainExtensionsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomainExtensions = new RosDomainExtensions(this, id,  {
            listenerPort: props.listenerPort,
            domainExtensionId: props.domainExtensionId,
            loadBalancerId: props.loadBalancerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomainExtensions;
        this.attrDomainExtensionIds = rosDomainExtensions.attrDomainExtensionIds;
        this.attrDomainExtensions = rosDomainExtensions.attrDomainExtensions;
    }
}
