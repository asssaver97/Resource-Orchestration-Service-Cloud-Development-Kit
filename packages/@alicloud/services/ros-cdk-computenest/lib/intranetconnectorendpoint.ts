import * as ros from '@alicloud/ros-cdk-core';
import { RosIntranetConnectorEndpoint } from './computenest.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIntranetConnectorEndpoint as IntranetConnectorEndpointProperty };

/**
 * Properties for defining a `IntranetConnectorEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
 */
export interface IntranetConnectorEndpointProps {

    /**
     * Property endpointRegionId: The region ID of the endpoint.
     */
    readonly endpointRegionId: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the VPC to which the endpoint belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property description: The description of the endpoint, supporting full character set. The length must not exceed 500 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property enablePrivateZone: Whether to enable the private zone.
     * This parameter is only valid when the access point type is Managed.
     */
    readonly enablePrivateZone?: boolean | ros.IResolvable;

    /**
     * Property name: The name of the endpoint, supporting full character set except space. The length must not exceed 200 characters. If not, it will be filled in with EndpointId automatically.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property resourceIds: Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS. Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
     * Hosted access points do not require incoming.
     */
    readonly resourceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property type: The type of the endpoint.
     * - Private (default) : private access point
     * - Managed: managed access point.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ComputeNest::IntranetConnectorEndpoint`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIntranetConnectorEndpoint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
 */
export class IntranetConnectorEndpoint extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: IntranetConnectorEndpointProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    public readonly attrEndpointId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IntranetConnectorEndpointProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosIntranetConnectorEndpoint = new RosIntranetConnectorEndpoint(this, id,  {
            enablePrivateZone: props.enablePrivateZone,
            type: props.type,
            endpointRegionId: props.endpointRegionId,
            description: props.description,
            vpcId: props.vpcId,
            resourceIds: props.resourceIds,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIntranetConnectorEndpoint;
        this.attrEndpointId = rosIntranetConnectorEndpoint.attrEndpointId;
    }
}
