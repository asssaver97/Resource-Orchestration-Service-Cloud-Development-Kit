import * as ros from '@alicloud/ros-cdk-core';
import { RosMetricRuleTargets } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMetricRuleTargets as MetricRuleTargetsProperty };

/**
 * Properties for defining a `MetricRuleTargets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletargets
 */
export interface MetricRuleTargetsProps {

    /**
     * Property ruleId: The ID of the alert rule.
     */
    readonly ruleId: string | ros.IResolvable;

    /**
     * Property targets: undefined
     */
    readonly targets: Array<RosMetricRuleTargets.TargetsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::MetricRuleTargets`, which is used to add or modify one or more message resources of an alert rule.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMetricRuleTargets`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletargets
 */
export class MetricRuleTargets extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: MetricRuleTargetsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arns: The ARN list of targets
     */
    public readonly attrArns: ros.IResolvable;

    /**
     * Attribute Ids: The ID list of targets
     */
    public readonly attrIds: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MetricRuleTargetsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMetricRuleTargets = new RosMetricRuleTargets(this, id,  {
            ruleId: props.ruleId,
            targets: props.targets,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMetricRuleTargets;
        this.attrArns = rosMetricRuleTargets.attrArns;
        this.attrIds = rosMetricRuleTargets.attrIds;
    }
}
