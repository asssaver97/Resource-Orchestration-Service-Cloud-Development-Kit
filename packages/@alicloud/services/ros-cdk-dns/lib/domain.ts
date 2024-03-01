import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './dns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomain as DomainProperty };

/**
 * Properties for defining a `Domain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
 */
export interface DomainProps {

    /**
     * Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDomain.TagsProperty[];
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::Domain`, which is used to add a domain name.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
 */
export class Domain extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DnsServers: The DNS list for the domain name under resolution
     */
    public readonly attrDnsServers: ros.IResolvable;

    /**
     * Attribute DomainId: Domain ID
     */
    public readonly attrDomainId: ros.IResolvable;

    /**
     * Attribute DomainName: Domain name
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * Attribute GroupId: Domain name group ID
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * Attribute GroupName: The name of the domain name group
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * Attribute PunyCode: punycode returned only for a Chinese domain name
     */
    public readonly attrPunyCode: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomain = new RosDomain(this, id,  {
            resourceGroupId: props.resourceGroupId,
            domainName: props.domainName,
            tags: props.tags,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomain;
        this.attrDnsServers = rosDomain.attrDnsServers;
        this.attrDomainId = rosDomain.attrDomainId;
        this.attrDomainName = rosDomain.attrDomainName;
        this.attrGroupId = rosDomain.attrGroupId;
        this.attrGroupName = rosDomain.attrGroupName;
        this.attrPunyCode = rosDomain.attrPunyCode;
    }
}
