import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaGroups } from './ebs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDiskReplicaGroups as DiskReplicaGroupsProperty };

/**
 * Properties for defining a `DiskReplicaGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups
 */
export interface DiskReplicaGroupsProps {

    /**
     * Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property site: Site information sources for replication pairs and consistent replication groups. Possible values:
     * - production: production site.
     * - backup: disaster recovery site.
     */
    readonly site?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EBS::DiskReplicaGroups`, which is used to query the information about one or more replication pair-consistent groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskReplicaGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroups
 */
export class DiskReplicaGroups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DiskReplicaGroupsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DiskReplicaGroups: The list of disk replica groups.
     */
    public readonly attrDiskReplicaGroups: ros.IResolvable;

    /**
     * Attribute ReplicaGroupIds: The list of replica group IDs.
     */
    public readonly attrReplicaGroupIds: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskReplicaGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDiskReplicaGroups = new RosDiskReplicaGroups(this, id,  {
            site: props.site,
            resourceGroupId: props.resourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDiskReplicaGroups;
        this.attrDiskReplicaGroups = rosDiskReplicaGroups.attrDiskReplicaGroups;
        this.attrReplicaGroupIds = rosDiskReplicaGroups.attrReplicaGroupIds;
    }
}
