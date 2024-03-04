import * as ros from '@alicloud/ros-cdk-core';
import { RosDomains } from './directmail.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomains as DomainsProperty };

/**
 * Properties for defining a `Domains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
 */
export interface DomainsProps {
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DirectMail::Domains`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomains`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
 */
export class Domains extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DomainsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DomainIds: The list of domain IDs.
     */
    public readonly attrDomainIds: ros.IResolvable;

    /**
     * Attribute Domains: The list of domains.
     */
    public readonly attrDomains: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomains = new RosDomains(this, id,  {
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosDomains;
        this.attrDomainIds = rosDomains.attrDomainIds;
        this.attrDomains = rosDomains.attrDomains;
    }
}
