import * as ros from '@alicloud/ros-cdk-core';
import { RosPrometheusAuthToken } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPrometheusAuthToken as PrometheusAuthTokenProperty };

/**
 * Properties for defining a `PrometheusAuthToken`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken
 */
export interface PrometheusAuthTokenProps {

    /**
     * Property clusterId: Cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::PrometheusAuthToken`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheusAuthToken`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken
 */
export class PrometheusAuthToken extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PrometheusAuthTokenProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Token: The token for Grafana read URL.
     */
    public readonly attrToken: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrometheusAuthTokenProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPrometheusAuthToken = new RosPrometheusAuthToken(this, id,  {
            clusterId: props.clusterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrometheusAuthToken;
        this.attrToken = rosPrometheusAuthToken.attrToken;
    }
}
