import * as ros from '@alicloud/ros-cdk-core';
import { RosApis } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApis as ApisProperty };

/**
 * Properties for defining a `Apis`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
 */
export interface ApisProps {

    /**
     * Property apiId: ID of the specified API.
     */
    readonly apiId?: string | ros.IResolvable;

    /**
     * Property apiName: API name (fuzzy matching).
     */
    readonly apiName?: string | ros.IResolvable;

    /**
     * Property catalogId: Catalog number.
     */
    readonly catalogId?: string | ros.IResolvable;

    /**
     * Property enableTagAuth: Enable label validation.
     */
    readonly enableTagAuth?: boolean | ros.IResolvable;

    /**
     * Property groupId: ID of the specified group.
     */
    readonly groupId?: string | ros.IResolvable;

    /**
     * Property visibility: Whether the API is public.
     */
    readonly visibility?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ApiGateway::Apis`, which is used to query APIs in API Gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApis`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
 */
export class Apis extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ApisProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ApiIds: The list of The ApiGateway api ids.
     */
    public readonly attrApiIds: ros.IResolvable;

    /**
     * Attribute Apis: The information about ApiGateway apis.
     */
    public readonly attrApis: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApisProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosApis = new RosApis(this, id,  {
            enableTagAuth: props.enableTagAuth,
            apiName: props.apiName,
            visibility: props.visibility,
            apiId: props.apiId,
            catalogId: props.catalogId,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApis;
        this.attrApiIds = rosApis.attrApiIds;
        this.attrApis = rosApis.attrApis;
    }
}
