import * as ros from '@alicloud/ros-cdk-core';
import { RosDatasets } from './pai.generated';
export { RosDatasets as DatasetsProperty };
/**
 * Properties for defining a `DATASOURCE::PAI::Datasets`
 */
export interface DatasetsProps {
    /**
     * Property workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    readonly sourceId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::PAI::Datasets`
 */
export declare class Datasets extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DatasetIds: The list of dataset IDs.
     */
    readonly attrDatasetIds: ros.IResolvable;
    /**
     * Attribute Datasets: The list of datasets.
     */
    readonly attrDatasets: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::PAI::Datasets`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DatasetsProps, enableResourcePropertyConstraint?: boolean);
}