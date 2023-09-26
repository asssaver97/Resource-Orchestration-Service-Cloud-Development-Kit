package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>DATASOURCE::VPC::HaVips</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:48.375Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.HaVipsProps")
@software.amazon.jsii.Jsii.Proxy(HaVipsProps.Jsii$Proxy.class)
public interface HaVipsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property haVipId: The  ID of the resource.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHaVipId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HaVipsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HaVipsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HaVipsProps> {
        java.lang.Object haVipId;

        /**
         * Sets the value of {@link HaVipsProps#getHaVipId}
         * @param haVipId Property haVipId: The  ID of the resource.
         * @return {@code this}
         */
        public Builder haVipId(java.lang.String haVipId) {
            this.haVipId = haVipId;
            return this;
        }

        /**
         * Sets the value of {@link HaVipsProps#getHaVipId}
         * @param haVipId Property haVipId: The  ID of the resource.
         * @return {@code this}
         */
        public Builder haVipId(com.aliyun.ros.cdk.core.IResolvable haVipId) {
            this.haVipId = haVipId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HaVipsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HaVipsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HaVipsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HaVipsProps {
        private final java.lang.Object haVipId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.haVipId = software.amazon.jsii.Kernel.get(this, "haVipId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.haVipId = builder.haVipId;
        }

        @Override
        public final java.lang.Object getHaVipId() {
            return this.haVipId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getHaVipId() != null) {
                data.set("haVipId", om.valueToTree(this.getHaVipId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.HaVipsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HaVipsProps.Jsii$Proxy that = (HaVipsProps.Jsii$Proxy) o;

            return this.haVipId != null ? this.haVipId.equals(that.haVipId) : that.haVipId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.haVipId != null ? this.haVipId.hashCode() : 0;
            return result;
        }
    }
}
