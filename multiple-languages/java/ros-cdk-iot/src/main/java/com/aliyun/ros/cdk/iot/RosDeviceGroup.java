package com.aliyun.ros.cdk.iot;

/**
 * A ROS template type:  `ALIYUN::IOT::DeviceGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:26.254Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RosDeviceGroup")
public class RosDeviceGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDeviceGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDeviceGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.iot.RosDeviceGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::IOT::DeviceGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDeviceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.RosDeviceGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIotInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrIotInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getGroupName() {
        return software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupName", java.util.Objects.requireNonNull(value, "groupName is required"));
    }

    /**
     */
    public void setGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupName", java.util.Objects.requireNonNull(value, "groupName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGroupDesc() {
        return software.amazon.jsii.Kernel.get(this, "groupDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupDesc(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupDesc", value);
    }

    /**
     */
    public void setGroupDesc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupDesc", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIotInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "iotInstanceId", value);
    }

    /**
     */
    public void setIotInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "iotInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSuperGroupId() {
        return software.amazon.jsii.Kernel.get(this, "superGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSuperGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "superGroupId", value);
    }

    /**
     */
    public void setSuperGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "superGroupId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.iot.RosDeviceGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.iot.RosDeviceGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.iot.RosDeviceGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.iot.RosDeviceGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param groupName This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupName This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupDesc This parameter is required.
         */
        public Builder groupDesc(final java.lang.String groupDesc) {
            this.props.groupDesc(groupDesc);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupDesc This parameter is required.
         */
        public Builder groupDesc(final com.aliyun.ros.cdk.core.IResolvable groupDesc) {
            this.props.groupDesc(groupDesc);
            return this;
        }

        /**
         * @return {@code this}
         * @param iotInstanceId This parameter is required.
         */
        public Builder iotInstanceId(final java.lang.String iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param iotInstanceId This parameter is required.
         */
        public Builder iotInstanceId(final com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param superGroupId This parameter is required.
         */
        public Builder superGroupId(final java.lang.String superGroupId) {
            this.props.superGroupId(superGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param superGroupId This parameter is required.
         */
        public Builder superGroupId(final com.aliyun.ros.cdk.core.IResolvable superGroupId) {
            this.props.superGroupId(superGroupId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.iot.RosDeviceGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.iot.RosDeviceGroup build() {
            return new com.aliyun.ros.cdk.iot.RosDeviceGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
