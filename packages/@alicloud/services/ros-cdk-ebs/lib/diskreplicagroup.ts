import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaGroup } from './ebs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDiskReplicaGroup as DiskReplicaGroupProperty };

/**
 * Properties for defining a `DiskReplicaGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicagroup
 */
export interface DiskReplicaGroupProps {

    /**
     * Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    readonly destinationRegionId: string | ros.IResolvable;

    /**
     * Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    readonly destinationZoneId: string | ros.IResolvable;

    /**
     * Property sourceRegionId: The ID of the region to which the production site belongs.
     */
    readonly sourceRegionId: string | ros.IResolvable;

    /**
     * Property sourceZoneId: The ID of the zone to which the production site belongs.
     */
    readonly sourceZoneId: string | ros.IResolvable;

    /**
     * Property description: The description of the consistent replication group.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property diskReplicaGroupName: Consistent replication group name.
     */
    readonly diskReplicaGroupName?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property rpo: The RPO value set by the consistency group in seconds.
     */
    readonly rpo?: number | ros.IResolvable;

    /**
     * Property tags: Tags of disk replica group.
     */
    readonly tags?: RosDiskReplicaGroup.TagsProperty[];
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EBS::DiskReplicaGroup`, which is used to create a replication pair-consistent group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskReplicaGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicagroup
 */
export class DiskReplicaGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DiskReplicaGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Description: The description of the consistent replication group.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    public readonly attrDestinationRegionId: ros.IResolvable;

    /**
     * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    public readonly attrDestinationZoneId: ros.IResolvable;

    /**
     * Attribute DiskReplicaGroupName: Consistent replication group name.
     */
    public readonly attrDiskReplicaGroupName: ros.IResolvable;

    /**
     * Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed. This parameter provides the return value as a timestamp. Unit: seconds.
     */
    public readonly attrLastRecoverPoint: ros.IResolvable;

    /**
     * Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
     */
    public readonly attrPairIds: ros.IResolvable;

    /**
     * Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
     */
    public readonly attrPairNumber: ros.IResolvable;

    /**
     * Attribute PrimaryRegion: The initial source region of the replication group.
     */
    public readonly attrPrimaryRegion: ros.IResolvable;

    /**
     * Attribute PrimaryZone: The initial source available area of the replication group.
     */
    public readonly attrPrimaryZone: ros.IResolvable;

    /**
     * Attribute RPO: The RPO value set by the consistency group in seconds.
     */
    public readonly attrRpo: ros.IResolvable;

    /**
     * Attribute ReplicaGroupId: The ID of the consistent replication group.
     */
    public readonly attrReplicaGroupId: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: resource group ID of enterprise
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Site: Site information sources for replication pairs and consistent replication groups. Possible values:
     */
    public readonly attrSite: ros.IResolvable;

    /**
     * Attribute SourceRegionId: The ID of the region to which the production site belongs.
     */
    public readonly attrSourceRegionId: ros.IResolvable;

    /**
     * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    public readonly attrSourceZoneId: ros.IResolvable;

    /**
     * Attribute StandbyRegion: The initial destination region of the replication group.
     */
    public readonly attrStandbyRegion: ros.IResolvable;

    /**
     * Attribute StandbyZone: The initial destination zone of the replication group.
     */
    public readonly attrStandbyZone: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the disk replica group.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskReplicaGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDiskReplicaGroup = new RosDiskReplicaGroup(this, id,  {
            rpo: props.rpo,
            sourceRegionId: props.sourceRegionId,
            description: props.description,
            diskReplicaGroupName: props.diskReplicaGroupName,
            resourceGroupId: props.resourceGroupId,
            destinationRegionId: props.destinationRegionId,
            destinationZoneId: props.destinationZoneId,
            sourceZoneId: props.sourceZoneId,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDiskReplicaGroup;
        this.attrDescription = rosDiskReplicaGroup.attrDescription;
        this.attrDestinationRegionId = rosDiskReplicaGroup.attrDestinationRegionId;
        this.attrDestinationZoneId = rosDiskReplicaGroup.attrDestinationZoneId;
        this.attrDiskReplicaGroupName = rosDiskReplicaGroup.attrDiskReplicaGroupName;
        this.attrLastRecoverPoint = rosDiskReplicaGroup.attrLastRecoverPoint;
        this.attrPairIds = rosDiskReplicaGroup.attrPairIds;
        this.attrPairNumber = rosDiskReplicaGroup.attrPairNumber;
        this.attrPrimaryRegion = rosDiskReplicaGroup.attrPrimaryRegion;
        this.attrPrimaryZone = rosDiskReplicaGroup.attrPrimaryZone;
        this.attrRpo = rosDiskReplicaGroup.attrRpo;
        this.attrReplicaGroupId = rosDiskReplicaGroup.attrReplicaGroupId;
        this.attrResourceGroupId = rosDiskReplicaGroup.attrResourceGroupId;
        this.attrSite = rosDiskReplicaGroup.attrSite;
        this.attrSourceRegionId = rosDiskReplicaGroup.attrSourceRegionId;
        this.attrSourceZoneId = rosDiskReplicaGroup.attrSourceZoneId;
        this.attrStandbyRegion = rosDiskReplicaGroup.attrStandbyRegion;
        this.attrStandbyZone = rosDiskReplicaGroup.attrStandbyZone;
        this.attrTags = rosDiskReplicaGroup.attrTags;
    }
}
