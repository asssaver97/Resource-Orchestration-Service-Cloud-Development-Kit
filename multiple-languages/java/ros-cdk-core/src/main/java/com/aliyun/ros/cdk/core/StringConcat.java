package com.aliyun.ros.cdk.core;

/**
 * Converts all fragments to strings and concats those.
 * <p>
 * Drops 'undefined's.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:41.605Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.StringConcat")
public class StringConcat extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IFragmentConcatenator {

    protected StringConcat(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected StringConcat(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public StringConcat() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Join the fragment on the left and on the right.
     * <p>
     * @param left This parameter is required.
     * @param right This parameter is required.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object join(final @org.jetbrains.annotations.NotNull java.lang.Object left, final @org.jetbrains.annotations.NotNull java.lang.Object right) {
        return software.amazon.jsii.Kernel.call(this, "join", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { left, right });
    }
}