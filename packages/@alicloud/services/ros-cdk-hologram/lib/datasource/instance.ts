import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './hologram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hologram-instance
 */
export interface InstanceProps {

    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::Hologram::Instance`, which is used to query the detailed information about a Hologres instance by instance ID.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hologram-instance
 */
export class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Instance: The attributes of the instance.
     */
    public readonly attrInstance: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrInstance = rosInstance.attrInstance;
    }
}
