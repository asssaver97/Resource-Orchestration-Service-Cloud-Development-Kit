package com.aliyun.ros.cdk.cloudphone;

/**
 * Properties for defining a <code>RosKeyPair</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:50.577Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudphone.$Module.class, fqn = "@alicloud/ros-cdk-cloudphone.RosKeyPairProps")
@software.amazon.jsii.Jsii.Proxy(RosKeyPairProps.Jsii$Proxy.class)
public interface RosKeyPairProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getKeyPairName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPublicKeyBody();

    /**
     * @return a {@link Builder} of {@link RosKeyPairProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosKeyPairProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosKeyPairProps> {
        java.lang.Object keyPairName;
        java.lang.Object publicKeyBody;

        /**
         * Sets the value of {@link RosKeyPairProps#getKeyPairName}
         * @param keyPairName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyPairProps#getKeyPairName}
         * @param keyPairName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyPairProps#getPublicKeyBody}
         * @param publicKeyBody the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder publicKeyBody(java.lang.String publicKeyBody) {
            this.publicKeyBody = publicKeyBody;
            return this;
        }

        /**
         * Sets the value of {@link RosKeyPairProps#getPublicKeyBody}
         * @param publicKeyBody the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder publicKeyBody(com.aliyun.ros.cdk.core.IResolvable publicKeyBody) {
            this.publicKeyBody = publicKeyBody;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosKeyPairProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosKeyPairProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosKeyPairProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosKeyPairProps {
        private final java.lang.Object keyPairName;
        private final java.lang.Object publicKeyBody;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publicKeyBody = software.amazon.jsii.Kernel.get(this, "publicKeyBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.keyPairName = java.util.Objects.requireNonNull(builder.keyPairName, "keyPairName is required");
            this.publicKeyBody = java.util.Objects.requireNonNull(builder.publicKeyBody, "publicKeyBody is required");
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.Object getPublicKeyBody() {
            return this.publicKeyBody;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            data.set("publicKeyBody", om.valueToTree(this.getPublicKeyBody()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudphone.RosKeyPairProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosKeyPairProps.Jsii$Proxy that = (RosKeyPairProps.Jsii$Proxy) o;

            if (!keyPairName.equals(that.keyPairName)) return false;
            return this.publicKeyBody.equals(that.publicKeyBody);
        }

        @Override
        public final int hashCode() {
            int result = this.keyPairName.hashCode();
            result = 31 * result + (this.publicKeyBody.hashCode());
            return result;
        }
    }
}
