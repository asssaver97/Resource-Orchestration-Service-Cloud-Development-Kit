package com.aliyun.ros.cdk.dfs;

/**
 * A ROS resource type:  `ALIYUN::DFS::MountPoint`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:41.830Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dfs.$Module.class, fqn = "@alicloud/ros-cdk-dfs.MountPoint")
public class MountPoint extends com.aliyun.ros.cdk.core.Resource {

    protected MountPoint(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MountPoint(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::DFS::MountPoint`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public MountPoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dfs.MountPointProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DFS::MountPoint`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public MountPoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dfs.MountPointProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute MountPointId: The ID of the mount point.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMountPointId() {
        return software.amazon.jsii.Kernel.get(this, "attrMountPointId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dfs.MountPoint}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dfs.MountPoint> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.dfs.MountPointProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dfs.MountPointProps.Builder();
        }

        /**
         * Property accessGroupId: The ID of the Access Group.
         * <p>
         * @return {@code this}
         * @param accessGroupId Property accessGroupId: The ID of the Access Group. This parameter is required.
         */
        public Builder accessGroupId(final java.lang.String accessGroupId) {
            this.props.accessGroupId(accessGroupId);
            return this;
        }
        /**
         * Property accessGroupId: The ID of the Access Group.
         * <p>
         * @return {@code this}
         * @param accessGroupId Property accessGroupId: The ID of the Access Group. This parameter is required.
         */
        public Builder accessGroupId(final com.aliyun.ros.cdk.core.IResolvable accessGroupId) {
            this.props.accessGroupId(accessGroupId);
            return this;
        }

        /**
         * Property fileSystemId: The ID of the File System.
         * <p>
         * @return {@code this}
         * @param fileSystemId Property fileSystemId: The ID of the File System. This parameter is required.
         */
        public Builder fileSystemId(final java.lang.String fileSystemId) {
            this.props.fileSystemId(fileSystemId);
            return this;
        }
        /**
         * Property fileSystemId: The ID of the File System.
         * <p>
         * @return {@code this}
         * @param fileSystemId Property fileSystemId: The ID of the File System. This parameter is required.
         */
        public Builder fileSystemId(final com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.props.fileSystemId(fileSystemId);
            return this;
        }

        /**
         * Property networkType: The network type of the Mount Point.
         * <p>
         * Valid values: VPC.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the Mount Point. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }
        /**
         * Property networkType: The network type of the Mount Point.
         * <p>
         * Valid values: VPC.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the Mount Point. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * Property vpcId: The vpc id.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The vpc id. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The vpc id.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The vpc id. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The vswitch id.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vswitch id. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vswitch id.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vswitch id. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property description: The description of the Mount Point.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the Mount Point. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the Mount Point.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the Mount Point. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property status: The status of the Mount Point.
         * <p>
         * Valid values: Active, Inactive
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the Mount Point. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: The status of the Mount Point.
         * <p>
         * Valid values: Active, Inactive
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the Mount Point. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.dfs.MountPoint}.
         */
        @Override
        public com.aliyun.ros.cdk.dfs.MountPoint build() {
            return new com.aliyun.ros.cdk.dfs.MountPoint(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
