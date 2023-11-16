// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::PAI::Datasets`
 */
export interface RosDatasetsProps {

    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    readonly sourceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDatasetsProps`
 *
 * @param properties - the TypeScript properties of a `RosDatasetsProps`
 *
 * @returns the result of the validation.
 */
function RosDatasetsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceId', ros.validateString)(properties.sourceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    return errors.wrap('supplied properties not correct for "RosDatasetsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Datasets` resource
 *
 * @param properties - the TypeScript properties of a `RosDatasetsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Datasets` resource.
 */
// @ts-ignore TS6133
function rosDatasetsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatasetsPropsValidator(properties).assertSuccess();
    }
    return {
      WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
      SourceId: ros.stringToRosTemplate(properties.sourceId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::PAI::Datasets`
 */
export class RosDatasets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Datasets";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DatasetIds: The list of dataset IDs.
     */
    public readonly attrDatasetIds: ros.IResolvable;

    /**
     * @Attribute Datasets: The list of datasets.
     */
    public readonly attrDatasets: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property sourceId: The data source ID.
     * - When the SourceType is USER, SourceId can be customized.
     * - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
     * - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
     */
    public sourceId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::PAI::Datasets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatasetsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDatasets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDatasetIds = this.getAtt('DatasetIds');
        this.attrDatasets = this.getAtt('Datasets');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.workspaceId = props.workspaceId;
        this.sourceId = props.sourceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            workspaceId: this.workspaceId,
            sourceId: this.sourceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatasetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::PAI::Services`
 */
export interface RosServicesProps {

    /**
     * @Property labels: Service Tag.
     */
    readonly labels?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property serviceName: Service Name.
     */
    readonly serviceName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServicesProps`
 *
 * @param properties - the TypeScript properties of a `RosServicesProps`
 *
 * @returns the result of the validation.
 */
function RosServicesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('labels', ros.hashValidator(ros.validateAny))(properties.labels));
    return errors.wrap('supplied properties not correct for "RosServicesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Services` resource
 *
 * @param properties - the TypeScript properties of a `RosServicesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Services` resource.
 */
// @ts-ignore TS6133
function rosServicesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServicesPropsValidator(properties).assertSuccess();
    }
    return {
      Labels: ros.hashMapper(ros.objectToRosTemplate)(properties.labels),
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::PAI::Services`
 */
export class RosServices extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Services";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ServiceNames: The list of service names.
     */
    public readonly attrServiceNames: ros.IResolvable;

    /**
     * @Attribute Services: The list of services.
     */
    public readonly attrServices: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property labels: Service Tag.
     */
    public labels: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property serviceName: Service Name.
     */
    public serviceName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::PAI::Services`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServicesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServices.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceNames = this.getAtt('ServiceNames');
        this.attrServices = this.getAtt('Services');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.labels = props.labels;
        this.serviceName = props.serviceName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            labels: this.labels,
            serviceName: this.serviceName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServicesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::PAI::Workspaces`
 */
export interface RosWorkspacesProps {

    /**
     * @Property workspaceId: The ID of the workspace.
     */
    readonly workspaceId?: string | ros.IResolvable;

    /**
     * @Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    readonly workspaceName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWorkspacesProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspacesProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspacesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceName', ros.validateString)(properties.workspaceName));
    return errors.wrap('supplied properties not correct for "RosWorkspacesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Workspaces` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspacesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PAI::Workspaces` resource.
 */
// @ts-ignore TS6133
function rosWorkspacesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspacesPropsValidator(properties).assertSuccess();
    }
    return {
      WorkspaceId: ros.stringToRosTemplate(properties.workspaceId),
      WorkspaceName: ros.stringToRosTemplate(properties.workspaceName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::PAI::Workspaces`
 */
export class RosWorkspaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PAI::Workspaces";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute WorkspaceIds: The list of workspace IDs.
     */
    public readonly attrWorkspaceIds: ros.IResolvable;

    /**
     * @Attribute Workspaces: The list of workspaces.
     */
    public readonly attrWorkspaces: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property workspaceId: The ID of the workspace.
     */
    public workspaceId: string | ros.IResolvable | undefined;

    /**
     * @Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    public workspaceName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::PAI::Workspaces`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspacesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWorkspaces.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrWorkspaceIds = this.getAtt('WorkspaceIds');
        this.attrWorkspaces = this.getAtt('Workspaces');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.workspaceId = props.workspaceId;
        this.workspaceName = props.workspaceName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            workspaceId: this.workspaceId,
            workspaceName: this.workspaceName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspacesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}