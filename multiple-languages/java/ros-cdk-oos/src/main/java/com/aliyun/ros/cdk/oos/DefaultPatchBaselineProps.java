package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>ALIYUN::OOS::DefaultPatchBaseline</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.558Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.DefaultPatchBaselineProps")
@software.amazon.jsii.Jsii.Proxy(DefaultPatchBaselineProps.Jsii$Proxy.class)
public interface DefaultPatchBaselineProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property patchBaselineName: The name of the patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPatchBaselineName();

    /**
     * @return a {@link Builder} of {@link DefaultPatchBaselineProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DefaultPatchBaselineProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DefaultPatchBaselineProps> {
        java.lang.Object patchBaselineName;

        /**
         * Sets the value of {@link DefaultPatchBaselineProps#getPatchBaselineName}
         * @param patchBaselineName Property patchBaselineName: The name of the patch baseline. This parameter is required.
         * @return {@code this}
         */
        public Builder patchBaselineName(java.lang.String patchBaselineName) {
            this.patchBaselineName = patchBaselineName;
            return this;
        }

        /**
         * Sets the value of {@link DefaultPatchBaselineProps#getPatchBaselineName}
         * @param patchBaselineName Property patchBaselineName: The name of the patch baseline. This parameter is required.
         * @return {@code this}
         */
        public Builder patchBaselineName(com.aliyun.ros.cdk.core.IResolvable patchBaselineName) {
            this.patchBaselineName = patchBaselineName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DefaultPatchBaselineProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DefaultPatchBaselineProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DefaultPatchBaselineProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DefaultPatchBaselineProps {
        private final java.lang.Object patchBaselineName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.patchBaselineName = software.amazon.jsii.Kernel.get(this, "patchBaselineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.patchBaselineName = java.util.Objects.requireNonNull(builder.patchBaselineName, "patchBaselineName is required");
        }

        @Override
        public final java.lang.Object getPatchBaselineName() {
            return this.patchBaselineName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("patchBaselineName", om.valueToTree(this.getPatchBaselineName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.DefaultPatchBaselineProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DefaultPatchBaselineProps.Jsii$Proxy that = (DefaultPatchBaselineProps.Jsii$Proxy) o;

            return this.patchBaselineName.equals(that.patchBaselineName);
        }

        @Override
        public final int hashCode() {
            int result = this.patchBaselineName.hashCode();
            return result;
        }
    }
}
