package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>Activations</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activations
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:52.003Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.ActivationsProps")
@software.amazon.jsii.Jsii.Proxy(ActivationsProps.Jsii$Proxy.class)
public interface ActivationsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property activationId: Activation code ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getActivationId() {
        return null;
    }

    /**
     * Property instanceName: The default prefix of the instance name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ActivationsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ActivationsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ActivationsProps> {
        java.lang.Object activationId;
        java.lang.Object instanceName;

        /**
         * Sets the value of {@link ActivationsProps#getActivationId}
         * @param activationId Property activationId: Activation code ID.
         * @return {@code this}
         */
        public Builder activationId(java.lang.String activationId) {
            this.activationId = activationId;
            return this;
        }

        /**
         * Sets the value of {@link ActivationsProps#getActivationId}
         * @param activationId Property activationId: Activation code ID.
         * @return {@code this}
         */
        public Builder activationId(com.aliyun.ros.cdk.core.IResolvable activationId) {
            this.activationId = activationId;
            return this;
        }

        /**
         * Sets the value of {@link ActivationsProps#getInstanceName}
         * @param instanceName Property instanceName: The default prefix of the instance name.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link ActivationsProps#getInstanceName}
         * @param instanceName Property instanceName: The default prefix of the instance name.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ActivationsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ActivationsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ActivationsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ActivationsProps {
        private final java.lang.Object activationId;
        private final java.lang.Object instanceName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.activationId = software.amazon.jsii.Kernel.get(this, "activationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.activationId = builder.activationId;
            this.instanceName = builder.instanceName;
        }

        @Override
        public final java.lang.Object getActivationId() {
            return this.activationId;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getActivationId() != null) {
                data.set("activationId", om.valueToTree(this.getActivationId()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.ActivationsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ActivationsProps.Jsii$Proxy that = (ActivationsProps.Jsii$Proxy) o;

            if (this.activationId != null ? !this.activationId.equals(that.activationId) : that.activationId != null) return false;
            return this.instanceName != null ? this.instanceName.equals(that.instanceName) : that.instanceName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.activationId != null ? this.activationId.hashCode() : 0;
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            return result;
        }
    }
}
