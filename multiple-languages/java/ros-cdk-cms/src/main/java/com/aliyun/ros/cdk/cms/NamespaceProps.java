package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a <code>ALIYUN::CMS::Namespace</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:24.025Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.NamespaceProps")
@software.amazon.jsii.Jsii.Proxy(NamespaceProps.Jsii$Proxy.class)
public interface NamespaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property namespace: The name of the namespace.
     * <p>
     * The name can contain lowercase letters, digits, and hyphens (-).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     * Property description: The description of the namespace.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property specification: The data retention period of the namespace.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>cms.s1.large: Data storage duration is 15 days.</li>
     * <li>cms.s1.xlarge: Data storage duration is 32 days.</li>
     * <li>cms.s1.2xlarge: Data storage duration 63 days.</li>
     * <li>cms.s1.3xlarge: Data storage duration 93 days.</li>
     * <li>cms.s1.6xlarge: Data storage duration 185 days.</li>
     * <li>cms.s1.12xlarge: Data storage duration 376 days.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpecification() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NamespaceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NamespaceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NamespaceProps> {
        java.lang.Object namespace;
        java.lang.Object description;
        java.lang.Object specification;

        /**
         * Sets the value of {@link NamespaceProps#getNamespace}
         * @param namespace Property namespace: The name of the namespace. This parameter is required.
         *                  The name can contain lowercase letters, digits, and hyphens (-).
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getNamespace}
         * @param namespace Property namespace: The name of the namespace. This parameter is required.
         *                  The name can contain lowercase letters, digits, and hyphens (-).
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getDescription}
         * @param description Property description: The description of the namespace.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getDescription}
         * @param description Property description: The description of the namespace.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getSpecification}
         * @param specification Property specification: The data retention period of the namespace.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>cms.s1.large: Data storage duration is 15 days.</li>
         *                      <li>cms.s1.xlarge: Data storage duration is 32 days.</li>
         *                      <li>cms.s1.2xlarge: Data storage duration 63 days.</li>
         *                      <li>cms.s1.3xlarge: Data storage duration 93 days.</li>
         *                      <li>cms.s1.6xlarge: Data storage duration 185 days.</li>
         *                      <li>cms.s1.12xlarge: Data storage duration 376 days.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder specification(java.lang.String specification) {
            this.specification = specification;
            return this;
        }

        /**
         * Sets the value of {@link NamespaceProps#getSpecification}
         * @param specification Property specification: The data retention period of the namespace.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>cms.s1.large: Data storage duration is 15 days.</li>
         *                      <li>cms.s1.xlarge: Data storage duration is 32 days.</li>
         *                      <li>cms.s1.2xlarge: Data storage duration 63 days.</li>
         *                      <li>cms.s1.3xlarge: Data storage duration 93 days.</li>
         *                      <li>cms.s1.6xlarge: Data storage duration 185 days.</li>
         *                      <li>cms.s1.12xlarge: Data storage duration 376 days.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder specification(com.aliyun.ros.cdk.core.IResolvable specification) {
            this.specification = specification;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NamespaceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NamespaceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NamespaceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NamespaceProps {
        private final java.lang.Object namespace;
        private final java.lang.Object description;
        private final java.lang.Object specification;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.specification = software.amazon.jsii.Kernel.get(this, "specification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.namespace = java.util.Objects.requireNonNull(builder.namespace, "namespace is required");
            this.description = builder.description;
            this.specification = builder.specification;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getSpecification() {
            return this.specification;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("namespace", om.valueToTree(this.getNamespace()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getSpecification() != null) {
                data.set("specification", om.valueToTree(this.getSpecification()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.NamespaceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NamespaceProps.Jsii$Proxy that = (NamespaceProps.Jsii$Proxy) o;

            if (!namespace.equals(that.namespace)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.specification != null ? this.specification.equals(that.specification) : that.specification == null;
        }

        @Override
        public final int hashCode() {
            int result = this.namespace.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.specification != null ? this.specification.hashCode() : 0);
            return result;
        }
    }
}
