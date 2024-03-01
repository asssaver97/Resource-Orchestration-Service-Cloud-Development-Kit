import * as ros from '@alicloud/ros-cdk-core';
import { RosVariableGroup } from './devops.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVariableGroup as VariableGroupProperty };

/**
 * Properties for defining a `VariableGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
 */
export interface VariableGroupProps {

    /**
     * Property name: The name of variable group.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;

    /**
     * Property variables: Variables information.
     */
    readonly variables: Array<RosVariableGroup.VariablesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property description: The description of variable group.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DEVOPS::VariableGroup`, which is used to create a variable group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVariableGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
 */
export class VariableGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VariableGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute VariableGroupId: Variable group id.
     */
    public readonly attrVariableGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VariableGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVariableGroup = new RosVariableGroup(this, id,  {
            variables: props.variables,
            description: props.description,
            organizationId: props.organizationId,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVariableGroup;
        this.attrVariableGroupId = rosVariableGroup.attrVariableGroupId;
    }
}
