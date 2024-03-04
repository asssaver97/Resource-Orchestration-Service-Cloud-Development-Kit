using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::UserDefineRegion`, which is used to create or edit a custom namespace.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserDefineRegion`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-userdefineregion
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Edas.UserDefineRegion), fullyQualifiedName: "@alicloud/ros-cdk-edas.UserDefineRegion", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-edas.UserDefineRegionProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class UserDefineRegion : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public UserDefineRegion(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Edas.IUserDefineRegionProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Edas.IUserDefineRegionProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected UserDefineRegion(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected UserDefineRegion(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute BelongRegion: Under the physical region ID.</summary>
        [JsiiProperty(name: "attrBelongRegion", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrBelongRegion
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute DebugEnable: Whether debug is enable.</summary>
        [JsiiProperty(name: "attrDebugEnable", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDebugEnable
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Id: Resource ID.</summary>
        [JsiiProperty(name: "attrId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute RegionName: Region name.</summary>
        [JsiiProperty(name: "attrRegionName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRegionName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute UserId: User account ID.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrUserId
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

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-edas.UserDefineRegionProps\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Edas.IUserDefineRegionProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Edas.IUserDefineRegionProps>()!;
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
