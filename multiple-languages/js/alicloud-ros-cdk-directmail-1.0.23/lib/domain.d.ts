import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './directmail.generated';
export { RosDomain as DomainProperty };
/**
 * Properties for defining a `Domain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-domain
 */
export interface DomainProps {
    /**
     * Property domainName: The name of the domain.
     */
    readonly domainName: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DirectMail::Domain`, which is used to create a domain name in Direct Mail.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-domain
 */
export declare class Domain extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CnameAuthStatus: Cname auth status.
     */
    readonly attrCnameAuthStatus: ros.IResolvable;
    /**
     * Attribute CnameConfirmStatus: Cname confirm status.
     */
    readonly attrCnameConfirmStatus: ros.IResolvable;
    /**
     * Attribute CnameRecord: Cname record.
     */
    readonly attrCnameRecord: ros.IResolvable;
    /**
     * Attribute CreateTime: The creation time of the domain.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DefaultDomain: Default domain.
     */
    readonly attrDefaultDomain: ros.IResolvable;
    /**
     * Attribute DnsMx: DNS MX.
     */
    readonly attrDnsMx: ros.IResolvable;
    /**
     * Attribute DnsSpf: DNS SPF.
     */
    readonly attrDnsSpf: ros.IResolvable;
    /**
     * Attribute DnsTxt: DNS txt.
     */
    readonly attrDnsTxt: ros.IResolvable;
    /**
     * Attribute DomainId: The ID of the domain.
     */
    readonly attrDomainId: ros.IResolvable;
    /**
     * Attribute DomainName: The name of the domain.
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * Attribute DomainType: The type of the domain.
     */
    readonly attrDomainType: ros.IResolvable;
    /**
     * Attribute IcpStatus: ICP status.
     */
    readonly attrIcpStatus: ros.IResolvable;
    /**
     * Attribute MxAuthStatus: MX auth status.
     */
    readonly attrMxAuthStatus: ros.IResolvable;
    /**
     * Attribute MxRecord: MX Record.
     */
    readonly attrMxRecord: ros.IResolvable;
    /**
     * Attribute SpfAuthStatus: SPF auth status.
     */
    readonly attrSpfAuthStatus: ros.IResolvable;
    /**
     * Attribute SpfRecord: SPF record.
     */
    readonly attrSpfRecord: ros.IResolvable;
    /**
     * Attribute TlDomainName: TL domain name.
     */
    readonly attrTlDomainName: ros.IResolvable;
    /**
     * Attribute TracefRecord: Tracef Record.
     */
    readonly attrTracefRecord: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint?: boolean);
}
