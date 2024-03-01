using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::VPC::TrafficMirrorFilter`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficMirrorFilter`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorfilter
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.TrafficMirrorFilter), fullyQualifiedName: "@alicloud/ros-cdk-vpc.TrafficMirrorFilter", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.TrafficMirrorFilterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class TrafficMirrorFilter : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public TrafficMirrorFilter(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficMirrorFilterProps? props = null, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficMirrorFilterProps? props = null, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TrafficMirrorFilter(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TrafficMirrorFilter(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute EgressRules: Egress rules.</summary>
        [JsiiProperty(name: "attrEgressRules", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrEgressRules
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute IngressRules: Ingress rules.</summary>
        [JsiiProperty(name: "attrIngressRules", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrIngressRules
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute TrafficMirrorFilterDescription: The description of the filter.</summary>
        [JsiiProperty(name: "attrTrafficMirrorFilterDescription", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTrafficMirrorFilterDescription
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute TrafficMirrorFilterId: The ID of the filter.</summary>
        [JsiiProperty(name: "attrTrafficMirrorFilterId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTrafficMirrorFilterId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute TrafficMirrorFilterName: The name of the filter.</summary>
        [JsiiProperty(name: "attrTrafficMirrorFilterName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTrafficMirrorFilterName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.TrafficMirrorFilterProps\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficMirrorFilterProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficMirrorFilterProps>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
