package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:34.762Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnReplace")
public class FnReplace extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnReplace(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnReplace(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an <code>Replace</code> function.
     * <p>
     * @param value This parameter is required.
     */
    public FnReplace(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { value });
    }
}
