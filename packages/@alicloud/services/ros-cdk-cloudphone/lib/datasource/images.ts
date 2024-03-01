import * as ros from '@alicloud/ros-cdk-core';
import { RosImages } from './cloudphone.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosImages as ImagesProperty };

/**
 * Properties for defining a `Images`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images
 */
export interface ImagesProps {

    /**
     * Property imageCategory: Mirror type.
     */
    readonly imageCategory?: string | ros.IResolvable;

    /**
     * Property imageId: Image ID.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * Property imageName: The name of the mirror image.
     */
    readonly imageName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CloudPhone::Images`, which is used to query the information about available images.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImages`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-images
 */
export class Images extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ImagesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ImageIds: The list of image IDs.
     */
    public readonly attrImageIds: ros.IResolvable;

    /**
     * Attribute Images: The list of images.
     */
    public readonly attrImages: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ImagesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosImages = new RosImages(this, id,  {
            imageName: props.imageName,
            imageCategory: props.imageCategory,
            imageId: props.imageId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosImages;
        this.attrImageIds = rosImages.attrImageIds;
        this.attrImages = rosImages.attrImages;
    }
}
