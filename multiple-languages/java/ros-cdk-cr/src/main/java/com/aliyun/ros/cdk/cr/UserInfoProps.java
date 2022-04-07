package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a `ALIYUN::CR::UserInfo`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:40.783Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.UserInfoProps")
@software.amazon.jsii.Jsii.Proxy(UserInfoProps.Jsii$Proxy.class)
public interface UserInfoProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property user: User info.
     * <p>
     * If user exists, will update user info.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUser();

    /**
     * @return a {@link Builder} of {@link UserInfoProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserInfoProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserInfoProps> {
        java.lang.Object user;

        /**
         * Sets the value of {@link UserInfoProps#getUser}
         * @param user Property user: User info. This parameter is required.
         *             If user exists, will update user info.
         * @return {@code this}
         */
        public Builder user(com.aliyun.ros.cdk.core.IResolvable user) {
            this.user = user;
            return this;
        }

        /**
         * Sets the value of {@link UserInfoProps#getUser}
         * @param user Property user: User info. This parameter is required.
         *             If user exists, will update user info.
         * @return {@code this}
         */
        public Builder user(com.aliyun.ros.cdk.cr.RosUserInfo.UserProperty user) {
            this.user = user;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UserInfoProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserInfoProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserInfoProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserInfoProps {
        private final java.lang.Object user;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.user = software.amazon.jsii.Kernel.get(this, "user", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.user = java.util.Objects.requireNonNull(builder.user, "user is required");
        }

        @Override
        public final java.lang.Object getUser() {
            return this.user;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("user", om.valueToTree(this.getUser()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.UserInfoProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserInfoProps.Jsii$Proxy that = (UserInfoProps.Jsii$Proxy) o;

            return this.user.equals(that.user);
        }

        @Override
        public final int hashCode() {
            int result = this.user.hashCode();
            return result;
        }
    }
}