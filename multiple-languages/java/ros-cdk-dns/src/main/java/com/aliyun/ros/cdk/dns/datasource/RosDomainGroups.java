package com.aliyun.ros.cdk.dns.datasource;

/**
 * A ROS template type:  <code>DATASOURCE::DNS::DomainGroups</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:34.495Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.datasource.RosDomainGroups")
public class RosDomainGroups extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDomainGroups(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDomainGroups(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dns.datasource.RosDomainGroups.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>DATASOURCE::DNS::DomainGroups</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDomainGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.datasource.RosDomainGroupsProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainGroupIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainGroups() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainGroups", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getKeyWord() {
        return software.amazon.jsii.Kernel.get(this, "keyWord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKeyWord(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "keyWord", value);
    }

    /**
     */
    public void setKeyWord(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "keyWord", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLang() {
        return software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLang(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "lang", value);
    }

    /**
     */
    public void setLang(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lang", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.datasource.RosDomainGroups}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.datasource.RosDomainGroups> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.dns.datasource.RosDomainGroupsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.datasource.RosDomainGroupsProps.Builder();
        }

        /**
         * @return {@code this}
         * @param keyWord This parameter is required.
         */
        public Builder keyWord(final java.lang.String keyWord) {
            this.props.keyWord(keyWord);
            return this;
        }
        /**
         * @return {@code this}
         * @param keyWord This parameter is required.
         */
        public Builder keyWord(final com.aliyun.ros.cdk.core.IResolvable keyWord) {
            this.props.keyWord(keyWord);
            return this;
        }

        /**
         * @return {@code this}
         * @param lang This parameter is required.
         */
        public Builder lang(final java.lang.String lang) {
            this.props.lang(lang);
            return this;
        }
        /**
         * @return {@code this}
         * @param lang This parameter is required.
         */
        public Builder lang(final com.aliyun.ros.cdk.core.IResolvable lang) {
            this.props.lang(lang);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.datasource.RosDomainGroups}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.datasource.RosDomainGroups build() {
            return new com.aliyun.ros.cdk.dns.datasource.RosDomainGroups(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}