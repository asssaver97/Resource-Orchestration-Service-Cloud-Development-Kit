import * as ros from '@alicloud/ros-cdk-core';
import { RosZones } from './pvtz.generated';
export { RosZones as ZonesProperty };
/**
 * Properties for defining a `DATASOURCE::PVTZ::Zones`
 */
export interface ZonesProps {
    /**
     * Property resourceGroupId: ResourceGroupId
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::PVTZ::Zones`
 */
export declare class Zones extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ZoneIds: The list of zone IDs.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * Attribute Zones: The list of zones.
     */
    readonly attrZones: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::PVTZ::Zones`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ZonesProps, enableResourcePropertyConstraint?: boolean);
}