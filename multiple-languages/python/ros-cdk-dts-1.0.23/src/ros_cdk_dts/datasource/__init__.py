import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class MigrationInstances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.datasource.MigrationInstances",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::DTS::MigrationInstances``, which is used to query information about Data Transmission Service (DTS) tasks.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosMigrationInstances``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["MigrationInstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ff163b30fb20ae142aafef7fcc16e9cd01c16f00043ad9778324c492b25d187)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDtsInstanceIds")
    def attr_dts_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DtsInstanceIds: The list of dts instance IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrMigrationInstances")
    def attr_migration_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MigrationInstances: The list of migration instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMigrationInstances"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__218dbe4f81bc14a9b47e858f7bb768f3835414e95a3d43567d63015789f24d8f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9ee27d4b06d8a3aa0444d36bc76d0b3640f1bf44941f5990578537b57296b1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "MigrationInstancesProps":
        return typing.cast("MigrationInstancesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "MigrationInstancesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d81ae444eb54b4451e1710cb5059c3ff140f317e31f3d46a3eb988386b35d8cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f847a51cf5f6fc43501a866924106f875efb3323048c9d4eae807bf44923234e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.datasource.MigrationInstancesProps",
    jsii_struct_bases=[],
    name_mapping={"dts_instance_id": "dtsInstanceId"},
)
class MigrationInstancesProps:
    def __init__(
        self,
        *,
        dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``MigrationInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances

        :param dts_instance_id: Property dtsInstanceId: Synchronization instance ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0520c37e397d480c0c15305961b46a603e5903d6d4fa51e048e183db318094a)
            check_type(argname="argument dts_instance_id", value=dts_instance_id, expected_type=type_hints["dts_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dts_instance_id is not None:
            self._values["dts_instance_id"] = dts_instance_id

    @builtins.property
    def dts_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dtsInstanceId: Synchronization instance ID.'''
        result = self._values.get("dts_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MigrationInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMigrationInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.datasource.RosMigrationInstances",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::DTS::MigrationInstances``, which is used to query information about Data Transmission Service (DTS) tasks.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``MigrationInstances`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMigrationInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca2573484f23c23e9cb260d260170fdec3ff7f60aa263fcbb900e53201d411b3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cca5cdafb1cae21abb48c79a3adf8c8420ce3ea2361d13925bb4596c41d8596b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsInstanceIds")
    def attr_dts_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DtsInstanceIds: The list of dts instance IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrMigrationInstances")
    def attr_migration_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MigrationInstances: The list of migration instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMigrationInstances"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__011780317dd291cf713f44712c41d245c21c5aea1a17b045b80ca0cf1da2c00f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dtsInstanceId")
    def dts_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsInstanceId: Synchronization instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dtsInstanceId"))

    @dts_instance_id.setter
    def dts_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__863fd75b05e7769a81468ce4031a30bfb138f3c45cdbc42de726f53c8e5c58ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsInstanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.datasource.RosMigrationInstancesProps",
    jsii_struct_bases=[],
    name_mapping={"dts_instance_id": "dtsInstanceId"},
)
class RosMigrationInstancesProps:
    def __init__(
        self,
        *,
        dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosMigrationInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances

        :param dts_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9bc2455b2aac6f4f8c1cf824569a51e9b3b50e12a5d09bdf81f59eb5a2977244)
            check_type(argname="argument dts_instance_id", value=dts_instance_id, expected_type=type_hints["dts_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dts_instance_id is not None:
            self._values["dts_instance_id"] = dts_instance_id

    @builtins.property
    def dts_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsInstanceId: Synchronization instance ID.
        '''
        result = self._values.get("dts_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMigrationInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "MigrationInstances",
    "MigrationInstancesProps",
    "RosMigrationInstances",
    "RosMigrationInstancesProps",
]

publication.publish()

def _typecheckingstub__1ff163b30fb20ae142aafef7fcc16e9cd01c16f00043ad9778324c492b25d187(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[MigrationInstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__218dbe4f81bc14a9b47e858f7bb768f3835414e95a3d43567d63015789f24d8f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9ee27d4b06d8a3aa0444d36bc76d0b3640f1bf44941f5990578537b57296b1e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d81ae444eb54b4451e1710cb5059c3ff140f317e31f3d46a3eb988386b35d8cc(
    value: MigrationInstancesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f847a51cf5f6fc43501a866924106f875efb3323048c9d4eae807bf44923234e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0520c37e397d480c0c15305961b46a603e5903d6d4fa51e048e183db318094a(
    *,
    dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca2573484f23c23e9cb260d260170fdec3ff7f60aa263fcbb900e53201d411b3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMigrationInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cca5cdafb1cae21abb48c79a3adf8c8420ce3ea2361d13925bb4596c41d8596b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__011780317dd291cf713f44712c41d245c21c5aea1a17b045b80ca0cf1da2c00f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__863fd75b05e7769a81468ce4031a30bfb138f3c45cdbc42de726f53c8e5c58ce(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bc2455b2aac6f4f8c1cf824569a51e9b3b50e12a5d09bdf81f59eb5a2977244(
    *,
    dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
