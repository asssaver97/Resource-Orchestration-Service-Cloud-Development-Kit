package com.aliyun.ros.cdk.sls.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::SLS::Logstores</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.423Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.datasource.Logstores")
public class Logstores extends com.aliyun.ros.cdk.core.Resource {

    protected Logstores(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Logstores(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::SLS::Logstores</code>.
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
    public Logstores(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.datasource.LogstoresProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::SLS::Logstores</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Logstores(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.datasource.LogstoresProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Logstores: The list of logstores.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogstores() {
        return software.amazon.jsii.Kernel.get(this, "attrLogstores", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.datasource.Logstores}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.datasource.Logstores> {
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
        private final com.aliyun.ros.cdk.sls.datasource.LogstoresProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.datasource.LogstoresProps.Builder();
        }

        /**
         * Property project: Project name.
         * <p>
         * @return {@code this}
         * @param project Property project: Project name. This parameter is required.
         */
        public Builder project(final java.lang.String project) {
            this.props.project(project);
            return this;
        }
        /**
         * Property project: Project name.
         * <p>
         * @return {@code this}
         * @param project Property project: Project name. This parameter is required.
         */
        public Builder project(final com.aliyun.ros.cdk.core.IResolvable project) {
            this.props.project(project);
            return this;
        }

        /**
         * Property logstoreName: Logstore name.
         * <p>
         * @return {@code this}
         * @param logstoreName Property logstoreName: Logstore name. This parameter is required.
         */
        public Builder logstoreName(final java.lang.String logstoreName) {
            this.props.logstoreName(logstoreName);
            return this;
        }
        /**
         * Property logstoreName: Logstore name.
         * <p>
         * @return {@code this}
         * @param logstoreName Property logstoreName: Logstore name. This parameter is required.
         */
        public Builder logstoreName(final com.aliyun.ros.cdk.core.IResolvable logstoreName) {
            this.props.logstoreName(logstoreName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sls.datasource.Logstores}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.datasource.Logstores build() {
            return new com.aliyun.ros.cdk.sls.datasource.Logstores(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}