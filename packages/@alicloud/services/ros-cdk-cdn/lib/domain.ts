import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './cdn.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomain as DomainProperty };

/**
 * Properties for defining a `Domain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain
 */
export interface DomainProps {

    /**
     * Property cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
     */
    readonly cdnType: string | ros.IResolvable;

    /**
     * Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * Property checkUrl: The validation of the origin.
     */
    readonly checkUrl?: string | ros.IResolvable;

    /**
     * Property originServers: The list of origin URLs. It has the same function as Sources, but has a higher priority than it.
     */
    readonly originServers?: Array<RosDomain.OriginServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
     */
    readonly scope?: string | ros.IResolvable;

    /**
     * Property sources: The list of origin URLs.
     */
    readonly sources?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDomain.TagsProperty[];

    /**
     * Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
     */
    readonly topLevelDomain?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDN::Domain`, which is used to add a domain name to Alibaba Cloud CDN (CDN).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain
 */
export class Domain extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Cname: The CNAME generated for the CDN domain.You must add a CNAME record with your DNS provider to map the CDN domain name to the CNAME.
     */
    public readonly attrCname: ros.IResolvable;

    /**
     * Attribute DomainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    public readonly attrDomainName: ros.IResolvable;

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
            checkUrl: props.checkUrl,
            resourceGroupId: props.resourceGroupId,
            scope: props.scope,
            domainName: props.domainName,
            originServers: props.originServers,
            cdnType: props.cdnType,
            topLevelDomain: props.topLevelDomain,
            sources: props.sources,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomain;
        this.attrCname = rosDomain.attrCname;
        this.attrDomainName = rosDomain.attrDomainName;
    }
}
