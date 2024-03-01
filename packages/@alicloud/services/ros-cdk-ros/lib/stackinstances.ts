import * as ros from '@alicloud/ros-cdk-core';
import { RosStackInstances } from './ros.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosStackInstances as StackInstancesProperty };

/**
 * Properties for defining a `StackInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackinstances
 */
export interface StackInstancesProps {

    /**
     * Property regionIds: undefined
     */
    readonly regionIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property stackGroupName: undefined
     */
    readonly stackGroupName: string | ros.IResolvable;

    /**
     * Property accountIds: undefined
     */
    readonly accountIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property deploymentTargets: undefined
     */
    readonly deploymentTargets?: RosStackInstances.DeploymentTargetsProperty | ros.IResolvable;

    /**
     * Property disableRollback: undefined
     */
    readonly disableRollback?: boolean | ros.IResolvable;

    /**
     * Property operationDescription: undefined
     */
    readonly operationDescription?: string | ros.IResolvable;

    /**
     * Property operationPreferences: undefined
     */
    readonly operationPreferences?: RosStackInstances.OperationPreferencesProperty | ros.IResolvable;

    /**
     * Property parameterOverrides: undefined
     */
    readonly parameterOverrides?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property retainStacks: undefined
     */
    readonly retainStacks?: boolean | ros.IResolvable;

    /**
     * Property timeoutInMinutes: undefined
     */
    readonly timeoutInMinutes?: number | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::StackInstances`, which is used to create stack instances within specified accounts in specified regions.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStackInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackinstances
 */
export class StackInstances extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: StackInstancesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute LastOperationId: undefined
     */
    public readonly attrLastOperationId: ros.IResolvable;

    /**
     * Attribute Stacks: undefined
     */
    public readonly attrStacks: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StackInstancesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosStackInstances = new RosStackInstances(this, id,  {
            operationPreferences: props.operationPreferences,
            retainStacks: props.retainStacks === undefined || props.retainStacks === null ? false : props.retainStacks,
            regionIds: props.regionIds,
            accountIds: props.accountIds,
            parameterOverrides: props.parameterOverrides,
            stackGroupName: props.stackGroupName,
            deploymentTargets: props.deploymentTargets,
            operationDescription: props.operationDescription,
            disableRollback: props.disableRollback,
            timeoutInMinutes: props.timeoutInMinutes,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStackInstances;
        this.attrLastOperationId = rosStackInstances.attrLastOperationId;
        this.attrStacks = rosStackInstances.attrStacks;
    }
}
