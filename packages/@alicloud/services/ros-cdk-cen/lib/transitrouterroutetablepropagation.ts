import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteTablePropagation } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterRouteTablePropagation as TransitRouterRouteTablePropagationProperty };

/**
 * Properties for defining a `TransitRouterRouteTablePropagation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetablepropagation
 */
export interface TransitRouterRouteTablePropagationProps {

    /**
     * Property transitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;

    /**
     * Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterRouteTablePropagation`, which is used to create a route learning correlation.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterRouteTablePropagation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetablepropagation
 */
export class TransitRouterRouteTablePropagation extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TransitRouterRouteTablePropagationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ResourceId: ResourceId
     */
    public readonly attrResourceId: ros.IResolvable;

    /**
     * Attribute ResourceType: ResourceType
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * Attribute TransitRouterAttachmentId: TransitRouterAttachmentId
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable;

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    public readonly attrTransitRouterRouteTableId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteTablePropagationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTransitRouterRouteTablePropagation = new RosTransitRouterRouteTablePropagation(this, id,  {
            transitRouterRouteTableId: props.transitRouterRouteTableId,
            transitRouterAttachmentId: props.transitRouterAttachmentId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterRouteTablePropagation;
        this.attrResourceId = rosTransitRouterRouteTablePropagation.attrResourceId;
        this.attrResourceType = rosTransitRouterRouteTablePropagation.attrResourceType;
        this.attrTransitRouterAttachmentId = rosTransitRouterRouteTablePropagation.attrTransitRouterAttachmentId;
        this.attrTransitRouterRouteTableId = rosTransitRouterRouteTablePropagation.attrTransitRouterRouteTableId;
    }
}
