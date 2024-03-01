package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosIpv4Gateway</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:55.186Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosIpv4GatewayProps")
@software.amazon.jsii.Jsii.Proxy(RosIpv4GatewayProps.Jsii$Proxy.class)
public interface RosIpv4GatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpv4GatewayId();

    /**
     * @return a {@link Builder} of {@link RosIpv4GatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosIpv4GatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosIpv4GatewayProps> {
        java.lang.Object ipv4GatewayId;

        /**
         * Sets the value of {@link RosIpv4GatewayProps#getIpv4GatewayId}
         * @param ipv4GatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipv4GatewayId(java.lang.String ipv4GatewayId) {
            this.ipv4GatewayId = ipv4GatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpv4GatewayProps#getIpv4GatewayId}
         * @param ipv4GatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipv4GatewayId(com.aliyun.ros.cdk.core.IResolvable ipv4GatewayId) {
            this.ipv4GatewayId = ipv4GatewayId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosIpv4GatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosIpv4GatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosIpv4GatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosIpv4GatewayProps {
        private final java.lang.Object ipv4GatewayId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipv4GatewayId = software.amazon.jsii.Kernel.get(this, "ipv4GatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipv4GatewayId = java.util.Objects.requireNonNull(builder.ipv4GatewayId, "ipv4GatewayId is required");
        }

        @Override
        public final java.lang.Object getIpv4GatewayId() {
            return this.ipv4GatewayId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ipv4GatewayId", om.valueToTree(this.getIpv4GatewayId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosIpv4GatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosIpv4GatewayProps.Jsii$Proxy that = (RosIpv4GatewayProps.Jsii$Proxy) o;

            return this.ipv4GatewayId.equals(that.ipv4GatewayId);
        }

        @Override
        public final int hashCode() {
            int result = this.ipv4GatewayId.hashCode();
            return result;
        }
    }
}
