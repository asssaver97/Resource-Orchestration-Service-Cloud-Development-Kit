package com.aliyun.ros.cdk.vpc;

/**
 * A ROS template type:  `ALIYUN::VPC::SnatEntry`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:03.872Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosSnatEntry")
public class RosSnatEntry extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSnatEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSnatEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosSnatEntry.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::VPC::SnatEntry`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSnatEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosSnatEntryProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSnatEntryIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSnatEntryIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getSnatIp() {
        return software.amazon.jsii.Kernel.get(this, "snatIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSnatIp(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "snatIp", java.util.Objects.requireNonNull(value, "snatIp is required"));
    }

    /**
     */
    public void setSnatIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "snatIp", java.util.Objects.requireNonNull(value, "snatIp is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSnatTableId() {
        return software.amazon.jsii.Kernel.get(this, "snatTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSnatTableId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "snatTableId", java.util.Objects.requireNonNull(value, "snatTableId is required"));
    }

    /**
     */
    public void setSnatTableId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "snatTableId", java.util.Objects.requireNonNull(value, "snatTableId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSnatEntryName() {
        return software.amazon.jsii.Kernel.get(this, "snatEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSnatEntryName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "snatEntryName", value);
    }

    /**
     */
    public void setSnatEntryName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "snatEntryName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidr() {
        return software.amazon.jsii.Kernel.get(this, "sourceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceCidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceCidr", value);
    }

    /**
     */
    public void setSourceCidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceCidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceVSwitchIds() {
        return software.amazon.jsii.Kernel.get(this, "sourceVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceVSwitchIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "sourceVSwitchIds", value);
    }

    /**
     */
    public void setSourceVSwitchIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceVSwitchIds", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosSnatEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosSnatEntry> {
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
        private final com.aliyun.ros.cdk.vpc.RosSnatEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosSnatEntryProps.Builder();
        }

        /**
         * @return {@code this}
         * @param snatIp This parameter is required.
         */
        public Builder snatIp(final java.lang.String snatIp) {
            this.props.snatIp(snatIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param snatIp This parameter is required.
         */
        public Builder snatIp(final com.aliyun.ros.cdk.core.IResolvable snatIp) {
            this.props.snatIp(snatIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param snatTableId This parameter is required.
         */
        public Builder snatTableId(final java.lang.String snatTableId) {
            this.props.snatTableId(snatTableId);
            return this;
        }
        /**
         * @return {@code this}
         * @param snatTableId This parameter is required.
         */
        public Builder snatTableId(final com.aliyun.ros.cdk.core.IResolvable snatTableId) {
            this.props.snatTableId(snatTableId);
            return this;
        }

        /**
         * @return {@code this}
         * @param snatEntryName This parameter is required.
         */
        public Builder snatEntryName(final java.lang.String snatEntryName) {
            this.props.snatEntryName(snatEntryName);
            return this;
        }
        /**
         * @return {@code this}
         * @param snatEntryName This parameter is required.
         */
        public Builder snatEntryName(final com.aliyun.ros.cdk.core.IResolvable snatEntryName) {
            this.props.snatEntryName(snatEntryName);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceCidr This parameter is required.
         */
        public Builder sourceCidr(final java.lang.String sourceCidr) {
            this.props.sourceCidr(sourceCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceCidr This parameter is required.
         */
        public Builder sourceCidr(final com.aliyun.ros.cdk.core.IResolvable sourceCidr) {
            this.props.sourceCidr(sourceCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceVSwitchIds This parameter is required.
         */
        public Builder sourceVSwitchIds(final java.util.List<? extends java.lang.Object> sourceVSwitchIds) {
            this.props.sourceVSwitchIds(sourceVSwitchIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceVSwitchIds This parameter is required.
         */
        public Builder sourceVSwitchIds(final com.aliyun.ros.cdk.core.IResolvable sourceVSwitchIds) {
            this.props.sourceVSwitchIds(sourceVSwitchIds);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosSnatEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosSnatEntry build() {
            return new com.aliyun.ros.cdk.vpc.RosSnatEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
