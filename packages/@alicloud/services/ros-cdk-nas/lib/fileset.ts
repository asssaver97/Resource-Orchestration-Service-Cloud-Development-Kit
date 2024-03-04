import * as ros from '@alicloud/ros-cdk-core';
import { RosFileset } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFileset as FilesetProperty };

/**
 * Properties for defining a `Fileset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
 */
export interface FilesetProps {

    /**
     * Property fileSystemId: File system ID.
     */
    readonly fileSystemId: string | ros.IResolvable;

    /**
     * Property fileSystemPath: The absolute path of Fileset to be created.
     * The parent catalog of specified the directory must be a directory in the file system.
     * The length is 2 to 1024 characters.
     * Specify the directory must start with positive (\/).
     */
    readonly fileSystemPath: string | ros.IResolvable;

    /**
     * Property description: Fileset description information.
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:\/\/ and https: \/\/.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NAS::Fileset`, which is used to create a fileset.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFileset`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
 */
export class Fileset extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FilesetProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FileSystemId: File system ID.
     */
    public readonly attrFileSystemId: ros.IResolvable;

    /**
     * Attribute FileSystemPath: File system path.
     */
    public readonly attrFileSystemPath: ros.IResolvable;

    /**
     * Attribute FsetId: Fileset ID.
     */
    public readonly attrFsetId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FilesetProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFileset = new RosFileset(this, id,  {
            fileSystemPath: props.fileSystemPath,
            description: props.description,
            fileSystemId: props.fileSystemId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFileset;
        this.attrFileSystemId = rosFileset.attrFileSystemId;
        this.attrFileSystemPath = rosFileset.attrFileSystemPath;
        this.attrFsetId = rosFileset.attrFsetId;
    }
}
