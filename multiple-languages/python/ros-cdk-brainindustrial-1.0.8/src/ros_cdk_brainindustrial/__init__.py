'''
## Aliyun ROS BRAININDUSTRIAL Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as BRAININDUSTRIAL from '@alicloud/ros-cdk-brainindustrial';
```
'''
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from ._jsii import *

import ros_cdk_core


class PidOrganization(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-brainindustrial.PidOrganization",
):
    '''A ROS resource type:  ``ALIYUN::BrainIndustrial::PidOrganization``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["PidOrganizationProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::BrainIndustrial::PidOrganization``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(PidOrganization.__init__)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrParentPidOrganizationId")
    def attr_parent_pid_organization_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ParentPidOrganizationId: ParentPidOrganizationId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrParentPidOrganizationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationId")
    def attr_pid_organization_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidOrganizationId: PidOrganizationId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationLevel")
    def attr_pid_organization_level(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidOrganizationLevel: PidOrganizationLevel.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationLevel"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationName")
    def attr_pid_organization_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidOrganizationName: PidOrganizationName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-brainindustrial.PidOrganizationProps",
    jsii_struct_bases=[],
    name_mapping={
        "pid_organization_name": "pidOrganizationName",
        "parent_pid_organization_id": "parentPidOrganizationId",
    },
)
class PidOrganizationProps:
    def __init__(
        self,
        *,
        pid_organization_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        parent_pid_organization_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BrainIndustrial::PidOrganization``.

        :param pid_organization_name: Property pidOrganizationName: PidOrganizationName.
        :param parent_pid_organization_id: Property parentPidOrganizationId: ParentPidOrganizationId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(PidOrganizationProps.__init__)
            check_type(argname="argument pid_organization_name", value=pid_organization_name, expected_type=type_hints["pid_organization_name"])
            check_type(argname="argument parent_pid_organization_id", value=parent_pid_organization_id, expected_type=type_hints["parent_pid_organization_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "pid_organization_name": pid_organization_name,
        }
        if parent_pid_organization_id is not None:
            self._values["parent_pid_organization_id"] = parent_pid_organization_id

    @builtins.property
    def pid_organization_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property pidOrganizationName: PidOrganizationName.'''
        result = self._values.get("pid_organization_name")
        assert result is not None, "Required property 'pid_organization_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def parent_pid_organization_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property parentPidOrganizationId: ParentPidOrganizationId.'''
        result = self._values.get("parent_pid_organization_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PidOrganizationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PidProject(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-brainindustrial.PidProject",
):
    '''A ROS resource type:  ``ALIYUN::BrainIndustrial::PidProject``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["PidProjectProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::BrainIndustrial::PidProject``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(PidProject.__init__)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationId")
    def attr_pid_organization_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidOrganizationId: PidOrganizationId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidProjectDesc")
    def attr_pid_project_desc(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidProjectDesc: PidProjectDesc.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidProjectDesc"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidProjectId")
    def attr_pid_project_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidProjectId: PidProjectId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidProjectId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidProjectName")
    def attr_pid_project_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidProjectName: PidProjectName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidProjectName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-brainindustrial.PidProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "pid_organization_id": "pidOrganizationId",
        "pid_project_name": "pidProjectName",
        "pid_project_desc": "pidProjectDesc",
    },
)
class PidProjectProps:
    def __init__(
        self,
        *,
        pid_organization_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pid_project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pid_project_desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BrainIndustrial::PidProject``.

        :param pid_organization_id: Property pidOrganizationId: PidOrganizationId.
        :param pid_project_name: Property pidProjectName: PidProjectName.
        :param pid_project_desc: Property pidProjectDesc: PidProjectDesc.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(PidProjectProps.__init__)
            check_type(argname="argument pid_organization_id", value=pid_organization_id, expected_type=type_hints["pid_organization_id"])
            check_type(argname="argument pid_project_name", value=pid_project_name, expected_type=type_hints["pid_project_name"])
            check_type(argname="argument pid_project_desc", value=pid_project_desc, expected_type=type_hints["pid_project_desc"])
        self._values: typing.Dict[str, typing.Any] = {
            "pid_organization_id": pid_organization_id,
            "pid_project_name": pid_project_name,
        }
        if pid_project_desc is not None:
            self._values["pid_project_desc"] = pid_project_desc

    @builtins.property
    def pid_organization_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property pidOrganizationId: PidOrganizationId.'''
        result = self._values.get("pid_organization_id")
        assert result is not None, "Required property 'pid_organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pid_project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property pidProjectName: PidProjectName.'''
        result = self._values.get("pid_project_name")
        assert result is not None, "Required property 'pid_project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pid_project_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pidProjectDesc: PidProjectDesc.'''
        result = self._values.get("pid_project_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PidProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPidOrganization(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-brainindustrial.RosPidOrganization",
):
    '''A ROS template type:  ``ALIYUN::BrainIndustrial::PidOrganization``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosPidOrganizationProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::BrainIndustrial::PidOrganization``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(RosPidOrganization.__init__)
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
            type_hints = typing.get_type_hints(RosPidOrganization._render_properties)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrParentPidOrganizationId")
    def attr_parent_pid_organization_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ParentPidOrganizationId: ParentPidOrganizationId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrParentPidOrganizationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationId")
    def attr_pid_organization_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidOrganizationId: PidOrganizationId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationLevel")
    def attr_pid_organization_level(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidOrganizationLevel: PidOrganizationLevel
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationLevel"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationName")
    def attr_pid_organization_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidOrganizationName: PidOrganizationName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosPidOrganization, "enable_resource_property_constraint").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pidOrganizationName")
    def pid_organization_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pidOrganizationName: PidOrganizationName
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "pidOrganizationName"))

    @pid_organization_name.setter
    def pid_organization_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosPidOrganization, "pid_organization_name").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pidOrganizationName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="parentPidOrganizationId")
    def parent_pid_organization_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: parentPidOrganizationId: ParentPidOrganizationId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "parentPidOrganizationId"))

    @parent_pid_organization_id.setter
    def parent_pid_organization_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosPidOrganization, "parent_pid_organization_id").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parentPidOrganizationId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-brainindustrial.RosPidOrganizationProps",
    jsii_struct_bases=[],
    name_mapping={
        "pid_organization_name": "pidOrganizationName",
        "parent_pid_organization_id": "parentPidOrganizationId",
    },
)
class RosPidOrganizationProps:
    def __init__(
        self,
        *,
        pid_organization_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        parent_pid_organization_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BrainIndustrial::PidOrganization``.

        :param pid_organization_name: 
        :param parent_pid_organization_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(RosPidOrganizationProps.__init__)
            check_type(argname="argument pid_organization_name", value=pid_organization_name, expected_type=type_hints["pid_organization_name"])
            check_type(argname="argument parent_pid_organization_id", value=parent_pid_organization_id, expected_type=type_hints["parent_pid_organization_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "pid_organization_name": pid_organization_name,
        }
        if parent_pid_organization_id is not None:
            self._values["parent_pid_organization_id"] = parent_pid_organization_id

    @builtins.property
    def pid_organization_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pidOrganizationName: PidOrganizationName
        '''
        result = self._values.get("pid_organization_name")
        assert result is not None, "Required property 'pid_organization_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def parent_pid_organization_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: parentPidOrganizationId: ParentPidOrganizationId
        '''
        result = self._values.get("parent_pid_organization_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPidOrganizationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPidProject(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-brainindustrial.RosPidProject",
):
    '''A ROS template type:  ``ALIYUN::BrainIndustrial::PidProject``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosPidProjectProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::BrainIndustrial::PidProject``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(RosPidProject.__init__)
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
            type_hints = typing.get_type_hints(RosPidProject._render_properties)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationId")
    def attr_pid_organization_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidOrganizationId: PidOrganizationId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidProjectDesc")
    def attr_pid_project_desc(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidProjectDesc: PidProjectDesc
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidProjectDesc"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidProjectId")
    def attr_pid_project_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidProjectId: PidProjectId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidProjectId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidProjectName")
    def attr_pid_project_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidProjectName: PidProjectName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidProjectName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosPidProject, "enable_resource_property_constraint").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pidOrganizationId")
    def pid_organization_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pidOrganizationId: PidOrganizationId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "pidOrganizationId"))

    @pid_organization_id.setter
    def pid_organization_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosPidProject, "pid_organization_id").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pidOrganizationId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pidProjectName")
    def pid_project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pidProjectName: PidProjectName
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "pidProjectName"))

    @pid_project_name.setter
    def pid_project_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosPidProject, "pid_project_name").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pidProjectName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pidProjectDesc")
    def pid_project_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pidProjectDesc: PidProjectDesc
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pidProjectDesc"))

    @pid_project_desc.setter
    def pid_project_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosPidProject, "pid_project_desc").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pidProjectDesc", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-brainindustrial.RosPidProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "pid_organization_id": "pidOrganizationId",
        "pid_project_name": "pidProjectName",
        "pid_project_desc": "pidProjectDesc",
    },
)
class RosPidProjectProps:
    def __init__(
        self,
        *,
        pid_organization_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pid_project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pid_project_desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BrainIndustrial::PidProject``.

        :param pid_organization_id: 
        :param pid_project_name: 
        :param pid_project_desc: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(RosPidProjectProps.__init__)
            check_type(argname="argument pid_organization_id", value=pid_organization_id, expected_type=type_hints["pid_organization_id"])
            check_type(argname="argument pid_project_name", value=pid_project_name, expected_type=type_hints["pid_project_name"])
            check_type(argname="argument pid_project_desc", value=pid_project_desc, expected_type=type_hints["pid_project_desc"])
        self._values: typing.Dict[str, typing.Any] = {
            "pid_organization_id": pid_organization_id,
            "pid_project_name": pid_project_name,
        }
        if pid_project_desc is not None:
            self._values["pid_project_desc"] = pid_project_desc

    @builtins.property
    def pid_organization_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pidOrganizationId: PidOrganizationId
        '''
        result = self._values.get("pid_organization_id")
        assert result is not None, "Required property 'pid_organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pid_project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pidProjectName: PidProjectName
        '''
        result = self._values.get("pid_project_name")
        assert result is not None, "Required property 'pid_project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pid_project_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pidProjectDesc: PidProjectDesc
        '''
        result = self._values.get("pid_project_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPidProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "PidOrganization",
    "PidOrganizationProps",
    "PidProject",
    "PidProjectProps",
    "RosPidOrganization",
    "RosPidOrganizationProps",
    "RosPidProject",
    "RosPidProjectProps",
]

publication.publish()