package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:41.301Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FnCalculate")
public class FnCalculate extends com.aliyun.ros.cdk.core.Intrinsic {

    protected FnCalculate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FnCalculate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an ``Calculate`` function.
     * <p>
     * @param value This parameter is required.
     */
    public FnCalculate(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { value });
    }
}