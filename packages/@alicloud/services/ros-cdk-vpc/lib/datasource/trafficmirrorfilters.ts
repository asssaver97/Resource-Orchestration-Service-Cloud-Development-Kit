import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficMirrorFilters } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrafficMirrorFilters as TrafficMirrorFiltersProperty };

/**
 * Properties for defining a `TrafficMirrorFilters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
 */
export interface TrafficMirrorFiltersProps {

    /**
     * Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    readonly trafficMirrorFilterName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::TrafficMirrorFilters`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficMirrorFilters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
 */
export class TrafficMirrorFilters extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TrafficMirrorFiltersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TrafficMirrorFilterIds: The list of traffic mirror filter IDs.
     */
    public readonly attrTrafficMirrorFilterIds: ros.IResolvable;

    /**
     * Attribute TrafficMirrorFilters: The list of traffic mirror filters.
     */
    public readonly attrTrafficMirrorFilters: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficMirrorFiltersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTrafficMirrorFilters = new RosTrafficMirrorFilters(this, id,  {
            trafficMirrorFilterName: props.trafficMirrorFilterName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficMirrorFilters;
        this.attrTrafficMirrorFilterIds = rosTrafficMirrorFilters.attrTrafficMirrorFilterIds;
        this.attrTrafficMirrorFilters = rosTrafficMirrorFilters.attrTrafficMirrorFilters;
    }
}
