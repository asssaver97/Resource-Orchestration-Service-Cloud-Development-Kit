import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficControlBinding } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrafficControlBinding as TrafficControlBindingProperty };

/**
 * Properties for defining a `TrafficControlBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
 */
export interface TrafficControlBindingProps {

    /**
     * Property apiIds: APIs to bind with the traffic control.
     */
    readonly apiIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property groupId: The id of group.
     */
    readonly groupId: string | ros.IResolvable;

    /**
     * Property stageName: Bind traffic in this stage.
     */
    readonly stageName: string | ros.IResolvable;

    /**
     * Property trafficControlId: The id of traffic control.
     */
    readonly trafficControlId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::TrafficControlBinding`, which is used to bind a custom throttling policy to APIs.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficControlBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
 */
export class TrafficControlBinding extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TrafficControlBindingProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficControlBindingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTrafficControlBinding = new RosTrafficControlBinding(this, id,  {
            stageName: props.stageName,
            apiIds: props.apiIds,
            trafficControlId: props.trafficControlId,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficControlBinding;
    }
}
