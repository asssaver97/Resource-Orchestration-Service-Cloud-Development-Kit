'''
## Aliyun ROS SLS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as SLS from '@alicloud/ros-cdk-sls';
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


class Alert(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Alert",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Alert``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["AlertProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Alert``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[AlertProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: Alert name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.AlertProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class AlertProps:
    def __init__(
        self,
        *,
        detail: typing.Union[typing.Union["RosAlert.DetailProperty", typing.Dict[str, typing.Any]], ros_cdk_core.IResolvable],
        project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Alert``.

        :param detail: Property detail:.
        :param project: Property project: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        '''
        if __debug__:
            def stub(
                *,
                detail: typing.Union[typing.Union[RosAlert.DetailProperty, typing.Dict[str, typing.Any]], ros_cdk_core.IResolvable],
                project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
        self._values: typing.Dict[str, typing.Any] = {
            "detail": detail,
            "project": project,
        }

    @builtins.property
    def detail(
        self,
    ) -> typing.Union["RosAlert.DetailProperty", ros_cdk_core.IResolvable]:
        '''Property detail:.'''
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return typing.cast(typing.Union["RosAlert.DetailProperty", ros_cdk_core.IResolvable], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property project: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AlertProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ApplyConfigToMachineGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.ApplyConfigToMachineGroup",
):
    '''A ROS resource type:  ``ALIYUN::SLS::ApplyConfigToMachineGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ApplyConfigToMachineGroupProps", typing.Dict[str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Optional[typing.Union[ApplyConfigToMachineGroupProps, typing.Dict[str, typing.Any]]] = None,
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.ApplyConfigToMachineGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_name": "configName",
        "group_name": "groupName",
        "project_name": "projectName",
    },
)
class ApplyConfigToMachineGroupProps:
    def __init__(
        self,
        *,
        config_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        project_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

        :param config_name: Property configName: Apply config to the config name.
        :param group_name: Property groupName: Apply config to the group name.
        :param project_name: Property projectName: Apply config to the project name.
        '''
        if __debug__:
            def stub(
                *,
                config_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                project_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument config_name", value=config_name, expected_type=type_hints["config_name"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
        self._values: typing.Dict[str, typing.Any] = {}
        if config_name is not None:
            self._values["config_name"] = config_name
        if group_name is not None:
            self._values["group_name"] = group_name
        if project_name is not None:
            self._values["project_name"] = project_name

    @builtins.property
    def config_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property configName: Apply config to the config name.'''
        result = self._values.get("config_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property groupName: Apply config to the group name.'''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property projectName: Apply config to the project name.'''
        result = self._values.get("project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApplyConfigToMachineGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Audit(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Audit",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Audit``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["AuditProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Audit``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[AuditProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DisplayName: Name of SLS log audit.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDisplayName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.AuditProps",
    jsii_struct_bases=[],
    name_mapping={
        "display_name": "displayName",
        "variable_map": "variableMap",
        "multi_account": "multiAccount",
    },
)
class AuditProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        variable_map: typing.Union[ros_cdk_core.IResolvable, typing.Union["RosAudit.VariableMapProperty", typing.Dict[str, typing.Any]]],
        multi_account: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Audit``.

        :param display_name: Property displayName: Name of SLS log audit.
        :param variable_map: Property variableMap: Log audit detailed configuration.
        :param multi_account: Property multiAccount: Multi-account configuration, please fill in multiple aliuid.
        '''
        if __debug__:
            def stub(
                *,
                display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                variable_map: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAudit.VariableMapProperty, typing.Dict[str, typing.Any]]],
                multi_account: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument variable_map", value=variable_map, expected_type=type_hints["variable_map"])
            check_type(argname="argument multi_account", value=multi_account, expected_type=type_hints["multi_account"])
        self._values: typing.Dict[str, typing.Any] = {
            "display_name": display_name,
            "variable_map": variable_map,
        }
        if multi_account is not None:
            self._values["multi_account"] = multi_account

    @builtins.property
    def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property displayName: Name of SLS log audit.'''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def variable_map(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosAudit.VariableMapProperty"]:
        '''Property variableMap: Log audit detailed configuration.'''
        result = self._values.get("variable_map")
        assert result is not None, "Required property 'variable_map' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosAudit.VariableMapProperty"], result)

    @builtins.property
    def multi_account(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property multiAccount: Multi-account configuration, please fill in multiple aliuid.'''
        result = self._values.get("multi_account")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AuditProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Dashboard(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Dashboard",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Dashboard``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["DashboardProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Dashboard``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[DashboardProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDashboardName")
    def attr_dashboard_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DashboardName: Dashboard name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDashboardName"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DisplayName: Display name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDisplayName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.DashboardProps",
    jsii_struct_bases=[],
    name_mapping={
        "charts": "charts",
        "dashboard_name": "dashboardName",
        "project_name": "projectName",
        "description": "description",
        "display_name": "displayName",
    },
)
class DashboardProps:
    def __init__(
        self,
        *,
        charts: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
        dashboard_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        display_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Dashboard``.

        :param charts: Property charts: Chart list.
        :param dashboard_name: Property dashboardName: Dashboard name.
        :param project_name: Property projectName: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param description: Property description: Dashboard description.
        :param display_name: Property displayName: Dashboard display name.
        '''
        if __debug__:
            def stub(
                *,
                charts: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
                dashboard_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                display_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument charts", value=charts, expected_type=type_hints["charts"])
            check_type(argname="argument dashboard_name", value=dashboard_name, expected_type=type_hints["dashboard_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
        self._values: typing.Dict[str, typing.Any] = {
            "charts": charts,
            "dashboard_name": dashboard_name,
            "project_name": project_name,
        }
        if description is not None:
            self._values["description"] = description
        if display_name is not None:
            self._values["display_name"] = display_name

    @builtins.property
    def charts(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        '''Property charts: Chart list.'''
        result = self._values.get("charts")
        assert result is not None, "Required property 'charts' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def dashboard_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dashboardName: Dashboard name.'''
        result = self._values.get("dashboard_name")
        assert result is not None, "Required property 'dashboard_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property projectName: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Dashboard description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property displayName: Dashboard display name.'''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DashboardProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Etl(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Etl",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Etl``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["EtlProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Etl``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[EtlProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: ETL name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.EtlProps",
    jsii_struct_bases=[],
    name_mapping={
        "configuration": "configuration",
        "display_name": "displayName",
        "name": "name",
        "project_name": "projectName",
        "schedule": "schedule",
        "description": "description",
    },
)
class EtlProps:
    def __init__(
        self,
        *,
        configuration: typing.Union[ros_cdk_core.IResolvable, typing.Union["RosEtl.ConfigurationProperty", typing.Dict[str, typing.Any]]],
        display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        schedule: typing.Union[ros_cdk_core.IResolvable, typing.Union["RosEtl.ScheduleProperty", typing.Dict[str, typing.Any]]],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Etl``.

        :param configuration: Property configuration: The configuration of ETL task.
        :param display_name: Property displayName: ETL display name.
        :param name: Property name: ETL name.
        :param project_name: Property projectName: Project name.
        :param schedule: Property schedule: Task scheduling strategy.
        :param description: Property description: ETL description message.
        '''
        if __debug__:
            def stub(
                *,
                configuration: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosEtl.ConfigurationProperty, typing.Dict[str, typing.Any]]],
                display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                schedule: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosEtl.ScheduleProperty, typing.Dict[str, typing.Any]]],
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[str, typing.Any] = {
            "configuration": configuration,
            "display_name": display_name,
            "name": name,
            "project_name": project_name,
            "schedule": schedule,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def configuration(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosEtl.ConfigurationProperty"]:
        '''Property configuration: The configuration of ETL task.'''
        result = self._values.get("configuration")
        assert result is not None, "Required property 'configuration' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosEtl.ConfigurationProperty"], result)

    @builtins.property
    def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property displayName: ETL display name.'''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: ETL name.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property projectName: Project name.'''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def schedule(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosEtl.ScheduleProperty"]:
        '''Property schedule: Task scheduling strategy.'''
        result = self._values.get("schedule")
        assert result is not None, "Required property 'schedule' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosEtl.ScheduleProperty"], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: ETL description message.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EtlProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Index(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Index",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Index``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["IndexProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Index``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[IndexProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.IndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "full_text_index": "fullTextIndex",
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "key_indices": "keyIndices",
        "log_reduce": "logReduce",
    },
)
class IndexProps:
    def __init__(
        self,
        *,
        full_text_index: typing.Union[ros_cdk_core.IResolvable, typing.Union["RosIndex.FullTextIndexProperty", typing.Dict[str, typing.Any]]],
        logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        key_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosIndex.KeyIndicesProperty", typing.Dict[str, typing.Any]]]]]] = None,
        log_reduce: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Index``.

        :param full_text_index: Property fullTextIndex: Full-text indexing configuration. Full-text indexing and key indexing must have at least one enabled.
        :param logstore_name: Property logstoreName: Logstore name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param project_name: Property projectName: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param key_indices: Property keyIndices: Key index configurations. Full-text indexing and key indexing must have at least one enabled.
        :param log_reduce: Property logReduce: Whether to enable log reduce. Default to false.
        '''
        if __debug__:
            def stub(
                *,
                full_text_index: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosIndex.FullTextIndexProperty, typing.Dict[str, typing.Any]]],
                logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                key_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosIndex.KeyIndicesProperty, typing.Dict[str, typing.Any]]]]]] = None,
                log_reduce: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument full_text_index", value=full_text_index, expected_type=type_hints["full_text_index"])
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument key_indices", value=key_indices, expected_type=type_hints["key_indices"])
            check_type(argname="argument log_reduce", value=log_reduce, expected_type=type_hints["log_reduce"])
        self._values: typing.Dict[str, typing.Any] = {
            "full_text_index": full_text_index,
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if key_indices is not None:
            self._values["key_indices"] = key_indices
        if log_reduce is not None:
            self._values["log_reduce"] = log_reduce

    @builtins.property
    def full_text_index(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosIndex.FullTextIndexProperty"]:
        '''Property fullTextIndex: Full-text indexing configuration.

        Full-text indexing and key indexing must have at least one enabled.
        '''
        result = self._values.get("full_text_index")
        assert result is not None, "Required property 'full_text_index' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosIndex.FullTextIndexProperty"], result)

    @builtins.property
    def logstore_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property logstoreName: Logstore name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property projectName: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def key_indices(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.KeyIndicesProperty"]]]]:
        '''Property keyIndices: Key index configurations.

        Full-text indexing and key indexing must have at least one enabled.
        '''
        result = self._values.get("key_indices")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.KeyIndicesProperty"]]]], result)

    @builtins.property
    def log_reduce(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property logReduce: Whether to enable log reduce.

        Default to false.
        '''
        result = self._values.get("log_reduce")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "IndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Logstore(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Logstore",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Logstore``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["LogstoreProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Logstore``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[LogstoreProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute LogstoreName: Logstore name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogstoreName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.LogstoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "append_meta": "appendMeta",
        "auto_split": "autoSplit",
        "enable_tracking": "enableTracking",
        "encrypt_conf": "encryptConf",
        "max_split_shard": "maxSplitShard",
        "preserve_storage": "preserveStorage",
        "shard_count": "shardCount",
        "ttl": "ttl",
    },
)
class LogstoreProps:
    def __init__(
        self,
        *,
        logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        append_meta: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_split: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_tracking: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        encrypt_conf: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosLogstore.EncryptConfProperty", typing.Dict[str, typing.Any]]]] = None,
        max_split_shard: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        preserve_storage: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Logstore``.

        :param logstore_name: Property logstoreName: Logstore name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param project_name: Property projectName: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param append_meta: Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log. Default to false.
        :param auto_split: Property autoSplit: Whether to automatically split the shard. Default to false.
        :param enable_tracking: Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information. Default to false.
        :param encrypt_conf: Property encryptConf: Data encryption config.
        :param max_split_shard: Property maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true. Allowed Values: 1-64.
        :param preserve_storage: Property preserveStorage: Whether to keep the log permanently. If set to true, TTL will be ignored. Default to false.
        :param shard_count: Property shardCount: The number of Shards. Allowed Values: 1-100, default to 2.
        :param ttl: Property ttl: The lifecycle of log in the logstore in days. Allowed Values: 1-3600, default to 30.
        '''
        if __debug__:
            def stub(
                *,
                logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                append_meta: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                auto_split: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                enable_tracking: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                encrypt_conf: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLogstore.EncryptConfProperty, typing.Dict[str, typing.Any]]]] = None,
                max_split_shard: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                preserve_storage: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                shard_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument append_meta", value=append_meta, expected_type=type_hints["append_meta"])
            check_type(argname="argument auto_split", value=auto_split, expected_type=type_hints["auto_split"])
            check_type(argname="argument enable_tracking", value=enable_tracking, expected_type=type_hints["enable_tracking"])
            check_type(argname="argument encrypt_conf", value=encrypt_conf, expected_type=type_hints["encrypt_conf"])
            check_type(argname="argument max_split_shard", value=max_split_shard, expected_type=type_hints["max_split_shard"])
            check_type(argname="argument preserve_storage", value=preserve_storage, expected_type=type_hints["preserve_storage"])
            check_type(argname="argument shard_count", value=shard_count, expected_type=type_hints["shard_count"])
            check_type(argname="argument ttl", value=ttl, expected_type=type_hints["ttl"])
        self._values: typing.Dict[str, typing.Any] = {
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if append_meta is not None:
            self._values["append_meta"] = append_meta
        if auto_split is not None:
            self._values["auto_split"] = auto_split
        if enable_tracking is not None:
            self._values["enable_tracking"] = enable_tracking
        if encrypt_conf is not None:
            self._values["encrypt_conf"] = encrypt_conf
        if max_split_shard is not None:
            self._values["max_split_shard"] = max_split_shard
        if preserve_storage is not None:
            self._values["preserve_storage"] = preserve_storage
        if shard_count is not None:
            self._values["shard_count"] = shard_count
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def logstore_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property logstoreName: Logstore name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property projectName: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def append_meta(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.

        Default to false.
        '''
        result = self._values.get("append_meta")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_split(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoSplit: Whether to automatically split the shard.

        Default to false.
        '''
        result = self._values.get("auto_split")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_tracking(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.

        Default to false.
        '''
        result = self._values.get("enable_tracking")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encrypt_conf(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogstore.EncryptConfProperty"]]:
        '''Property encryptConf: Data encryption config.'''
        result = self._values.get("encrypt_conf")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogstore.EncryptConfProperty"]], result)

    @builtins.property
    def max_split_shard(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property maxSplitShard: The maximum number of shards when splitting automatically.

        Must be specified if AutoSplit is set to true.
        Allowed Values: 1-64.
        '''
        result = self._values.get("max_split_shard")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property preserveStorage: Whether to keep the log permanently.

        If set to true, TTL will be ignored.
        Default to false.
        '''
        result = self._values.get("preserve_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property shardCount: The number of Shards.

        Allowed Values: 1-100, default to 2.
        '''
        result = self._values.get("shard_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property ttl: The lifecycle of log in the logstore in days.

        Allowed Values: 1-3600, default to 30.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LogstoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LogtailConfig(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.LogtailConfig",
):
    '''A ROS resource type:  ``ALIYUN::SLS::LogtailConfig``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["LogtailConfigProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::LogtailConfig``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[LogtailConfigProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAppliedMachineGroups")
    def attr_applied_machine_groups(self) -> ros_cdk_core.IResolvable:
        '''Attribute AppliedMachineGroups: Applied machine groups.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppliedMachineGroups"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> ros_cdk_core.IResolvable:
        '''Attribute Endpoint: Endpoint address.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLogtailConfigName")
    def attr_logtail_config_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute LogtailConfigName: Logtail config name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogtailConfigName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.LogtailConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "logtail_config_name": "logtailConfigName",
        "project_name": "projectName",
        "clone_from": "cloneFrom",
        "raw_config_data": "rawConfigData",
    },
)
class LogtailConfigProps:
    def __init__(
        self,
        *,
        logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        logtail_config_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        clone_from: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosLogtailConfig.CloneFromProperty", typing.Dict[str, typing.Any]]]] = None,
        raw_config_data: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::LogtailConfig``.

        :param logstore_name: Property logstoreName: Logstore name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param logtail_config_name: Property logtailConfigName: Logtail config name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param project_name: Property projectName: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param clone_from: Property cloneFrom: Clone logtail config data from existing logtail config. Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        :param raw_config_data: Property rawConfigData: The format is the same as the response of SLS API GetConfig. Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first. configName, outputType, outputDetail in data will be ignored.For example: { "configName": "test-logtail-config", "createTime": 1574843554, "inputDetail": { "acceptNoEnoughKeys": false, "adjustTimezone": false, "advanced": { "force_multiconfig": false }, "autoExtend": true, "delayAlarmBytes": 0, "delaySkipBytes": 0, "discardNonUtf8": false, "discardUnmatch": false, "dockerExcludeEnv": {}, "dockerExcludeLabel": {}, "dockerFile": false, "dockerIncludeEnv": {}, "dockerIncludeLabel": {}, "enableRawLog": false, "enableTag": false, "fileEncoding": "utf8", "filePattern": "test.log*", "filterKey": [], "filterRegex": [], "key": [ "time", "logger", "level", "request_id", "user_id", "region_id", "content" ], "localStorage": true, "logPath": "/var/log/test", "logTimezone": "", "logType": "delimiter_log", "maxDepth": 100, "maxSendRate": -1, "mergeType": "topic", "preserve": true, "preserveDepth": 1, "priority": 0, "quote": "\\u0001", "sendRateExpire": 0, "sensitive_keys": [], "separator": ",,,", "shardHashKey": [], "tailExisted": false, "timeFormat": "", "timeKey": "", "topicFormat": "none" }, "inputType": "file", "lastModifyTime": 1574843554, "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.", "outputDetail": { "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com", "logstoreName": "test-logstore", "region": "cn-hangzhou" }, "outputType": "LogService" }
        '''
        if __debug__:
            def stub(
                *,
                logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                logtail_config_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                clone_from: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLogtailConfig.CloneFromProperty, typing.Dict[str, typing.Any]]]] = None,
                raw_config_data: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument logtail_config_name", value=logtail_config_name, expected_type=type_hints["logtail_config_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument clone_from", value=clone_from, expected_type=type_hints["clone_from"])
            check_type(argname="argument raw_config_data", value=raw_config_data, expected_type=type_hints["raw_config_data"])
        self._values: typing.Dict[str, typing.Any] = {
            "logstore_name": logstore_name,
            "logtail_config_name": logtail_config_name,
            "project_name": project_name,
        }
        if clone_from is not None:
            self._values["clone_from"] = clone_from
        if raw_config_data is not None:
            self._values["raw_config_data"] = raw_config_data

    @builtins.property
    def logstore_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property logstoreName: Logstore name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def logtail_config_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property logtailConfigName: Logtail config name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logtail_config_name")
        assert result is not None, "Required property 'logtail_config_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property projectName: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def clone_from(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogtailConfig.CloneFromProperty"]]:
        '''Property cloneFrom: Clone logtail config data from existing logtail config.

        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        '''
        result = self._values.get("clone_from")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogtailConfig.CloneFromProperty"]], result)

    @builtins.property
    def raw_config_data(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property rawConfigData: The format is the same as the response of SLS API GetConfig.

        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        configName, outputType, outputDetail in data will be ignored.For example:
        {
        "configName": "test-logtail-config",
        "createTime": 1574843554,
        "inputDetail": {
        "acceptNoEnoughKeys": false,
        "adjustTimezone": false,
        "advanced": {
        "force_multiconfig": false
        },
        "autoExtend": true,
        "delayAlarmBytes": 0,
        "delaySkipBytes": 0,
        "discardNonUtf8": false,
        "discardUnmatch": false,
        "dockerExcludeEnv": {},
        "dockerExcludeLabel": {},
        "dockerFile": false,
        "dockerIncludeEnv": {},
        "dockerIncludeLabel": {},
        "enableRawLog": false,
        "enableTag": false,
        "fileEncoding": "utf8",
        "filePattern": "test.log*",
        "filterKey": [],
        "filterRegex": [],
        "key": [
        "time",
        "logger",
        "level",
        "request_id",
        "user_id",
        "region_id",
        "content"
        ],
        "localStorage": true,
        "logPath": "/var/log/test",
        "logTimezone": "",
        "logType": "delimiter_log",
        "maxDepth": 100,
        "maxSendRate": -1,
        "mergeType": "topic",
        "preserve": true,
        "preserveDepth": 1,
        "priority": 0,
        "quote": "\\u0001",
        "sendRateExpire": 0,
        "sensitive_keys": [],
        "separator": ",,,",
        "shardHashKey": [],
        "tailExisted": false,
        "timeFormat": "",
        "timeKey": "",
        "topicFormat": "none"
        },
        "inputType": "file",
        "lastModifyTime": 1574843554,
        "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
        "outputDetail": {
        "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
        "logstoreName": "test-logstore",
        "region": "cn-hangzhou"
        },
        "outputType": "LogService"
        }
        '''
        result = self._values.get("raw_config_data")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LogtailConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MachineGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.MachineGroup",
):
    '''A ROS resource type:  ``ALIYUN::SLS::MachineGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["MachineGroupProps", typing.Dict[str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::MachineGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Optional[typing.Union[MachineGroupProps, typing.Dict[str, typing.Any]]] = None,
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute GroupName: GroupName of SLS.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ProjectName: ProjectName of SLS.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProjectName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.MachineGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_attribute": "groupAttribute",
        "group_name": "groupName",
        "group_type": "groupType",
        "machine_identify_type": "machineIdentifyType",
        "machine_list": "machineList",
        "project_name": "projectName",
    },
)
class MachineGroupProps:
    def __init__(
        self,
        *,
        group_attribute: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        machine_identify_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        machine_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        project_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::MachineGroup``.

        :param group_attribute: Property groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
        :param group_name: Property groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        :param group_type: Property groupType: MachineGroup type, the value is empty or Armory.
        :param machine_identify_type: Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.
        :param machine_list: Property machineList: The machine tag, the value is ip or userdefined-id.
        :param project_name: Property projectName: MachineGroup created in project.
        '''
        if __debug__:
            def stub(
                *,
                group_attribute: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                machine_identify_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                machine_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                project_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument group_attribute", value=group_attribute, expected_type=type_hints["group_attribute"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument machine_identify_type", value=machine_identify_type, expected_type=type_hints["machine_identify_type"])
            check_type(argname="argument machine_list", value=machine_list, expected_type=type_hints["machine_list"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
        self._values: typing.Dict[str, typing.Any] = {}
        if group_attribute is not None:
            self._values["group_attribute"] = group_attribute
        if group_name is not None:
            self._values["group_name"] = group_name
        if group_type is not None:
            self._values["group_type"] = group_type
        if machine_identify_type is not None:
            self._values["machine_identify_type"] = machine_identify_type
        if machine_list is not None:
            self._values["machine_list"] = machine_list
        if project_name is not None:
            self._values["project_name"] = project_name

    @builtins.property
    def group_attribute(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property groupAttribute: Group attribute, default is null.

        The object value is groupToic and externalName
        '''
        result = self._values.get("group_attribute")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property groupName: Display name of the group name, the Project only.

        [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property groupType: MachineGroup type, the value is empty or Armory.'''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def machine_identify_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.'''
        result = self._values.get("machine_identify_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def machine_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property machineList: The machine tag, the value is ip or userdefined-id.'''
        result = self._values.get("machine_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property projectName: MachineGroup created in project.'''
        result = self._values.get("project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MachineGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MetricStore(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.MetricStore",
):
    '''A ROS resource type:  ``ALIYUN::SLS::MetricStore``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["MetricStoreProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::MetricStore``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[MetricStoreProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute LogstoreName: Metric store name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogstoreName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.MetricStoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "preserve_storage": "preserveStorage",
        "shard_count": "shardCount",
        "ttl": "ttl",
    },
)
class MetricStoreProps:
    def __init__(
        self,
        *,
        logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        preserve_storage: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::MetricStore``.

        :param logstore_name: Property logstoreName: Metric store name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param project_name: Property projectName: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param preserve_storage: Property preserveStorage: Whether to keep the log permanently. If set to true, TTL will be ignored. Default to false.
        :param shard_count: Property shardCount: The number of Shards. Allowed Values: 1-10, default to 2.
        :param ttl: Property ttl: The lifecycle of log in the metrice store in days. Allowed Values: 1-3000, default to 30.
        '''
        if __debug__:
            def stub(
                *,
                logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                preserve_storage: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                shard_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument preserve_storage", value=preserve_storage, expected_type=type_hints["preserve_storage"])
            check_type(argname="argument shard_count", value=shard_count, expected_type=type_hints["shard_count"])
            check_type(argname="argument ttl", value=ttl, expected_type=type_hints["ttl"])
        self._values: typing.Dict[str, typing.Any] = {
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if preserve_storage is not None:
            self._values["preserve_storage"] = preserve_storage
        if shard_count is not None:
            self._values["shard_count"] = shard_count
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def logstore_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property logstoreName: Metric store name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property projectName: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property preserveStorage: Whether to keep the log permanently.

        If set to true, TTL will be ignored.
        Default to false.
        '''
        result = self._values.get("preserve_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property shardCount: The number of Shards.

        Allowed Values: 1-10, default to 2.
        '''
        result = self._values.get("shard_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property ttl: The lifecycle of log in the metrice store in days.

        Allowed Values: 1-3000, default to 30.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MetricStoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Project(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Project",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Project``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ProjectProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Project``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[ProjectProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: Project name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name", "description": "description", "tags": "tags"},
)
class ProjectProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosProject.TagsProperty", typing.Dict[str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Project``.

        :param name: Property name: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param description: Property description: Project description: <>'"\\ is not supported, up to 64 characters.
        :param tags: Property tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            def stub(
                *,
                name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                tags: typing.Optional[typing.Sequence[typing.Union[RosProject.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
        }
        if description is not None:
            self._values["description"] = description
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Project description: <>'"\\ is not supported, up to 64 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosProject.TagsProperty"]]:
        '''Property tags: Tags to attach to project.

        Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosProject.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAlert(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosAlert",
):
    '''A ROS template type:  ``ALIYUN::SLS::Alert``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosAlertProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Alert``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosAlertProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Name: Alert name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="detail")
    def detail(
        self,
    ) -> typing.Union["RosAlert.DetailProperty", ros_cdk_core.IResolvable]:
        '''
        :Property: detail:
        '''
        return typing.cast(typing.Union["RosAlert.DetailProperty", ros_cdk_core.IResolvable], jsii.get(self, "detail"))

    @detail.setter
    def detail(
        self,
        value: typing.Union["RosAlert.DetailProperty", ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[RosAlert.DetailProperty, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "detail", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="project")
    def project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        project: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "project"))

    @project.setter
    def project(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "project", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.AnnotationsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class AnnotationsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key:
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: value:
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AnnotationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "dashboard": "dashboard",
            "query_list": "queryList",
            "annotations": "annotations",
            "auto_annotation": "autoAnnotation",
            "condition": "condition",
            "group_configuration": "groupConfiguration",
            "join_configurations": "joinConfigurations",
            "labels": "labels",
            "mute_until": "muteUntil",
            "no_data_fire": "noDataFire",
            "no_data_severity": "noDataSeverity",
            "notification_list": "notificationList",
            "notify_threshold": "notifyThreshold",
            "policy_configuration": "policyConfiguration",
            "send_resolved": "sendResolved",
            "severity_configurations": "severityConfigurations",
            "threshold": "threshold",
            "throttling": "throttling",
            "type": "type",
            "version": "version",
        },
    )
    class ConfigurationProperty:
        def __init__(
            self,
            *,
            dashboard: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            query_list: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosAlert.QueryListProperty", typing.Dict[str, typing.Any]]]]],
            annotations: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosAlert.AnnotationsProperty", typing.Dict[str, typing.Any]]]]]] = None,
            auto_annotation: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            condition: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            group_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosAlert.GroupConfigurationProperty", typing.Dict[str, typing.Any]]]] = None,
            join_configurations: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosAlert.JoinConfigurationsProperty", typing.Dict[str, typing.Any]]]]]] = None,
            labels: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosAlert.LabelsProperty", typing.Dict[str, typing.Any]]]]]] = None,
            mute_until: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            no_data_fire: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            no_data_severity: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            notification_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosAlert.NotificationListProperty", typing.Dict[str, typing.Any]]]]]] = None,
            notify_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            policy_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosAlert.PolicyConfigurationProperty", typing.Dict[str, typing.Any]]]] = None,
            send_resolved: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            severity_configurations: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosAlert.SeverityConfigurationsProperty", typing.Dict[str, typing.Any]]]]]] = None,
            threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            throttling: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param dashboard: 
            :param query_list: 
            :param annotations: 
            :param auto_annotation: 
            :param condition: 
            :param group_configuration: 
            :param join_configurations: 
            :param labels: 
            :param mute_until: 
            :param no_data_fire: 
            :param no_data_severity: 
            :param notification_list: 
            :param notify_threshold: 
            :param policy_configuration: 
            :param send_resolved: 
            :param severity_configurations: 
            :param threshold: 
            :param throttling: 
            :param type: 
            :param version: 
            '''
            if __debug__:
                def stub(
                    *,
                    dashboard: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    query_list: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAlert.QueryListProperty, typing.Dict[str, typing.Any]]]]],
                    annotations: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAlert.AnnotationsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                    auto_annotation: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    condition: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    group_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAlert.GroupConfigurationProperty, typing.Dict[str, typing.Any]]]] = None,
                    join_configurations: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAlert.JoinConfigurationsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                    labels: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAlert.LabelsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                    mute_until: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    no_data_fire: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    no_data_severity: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    notification_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAlert.NotificationListProperty, typing.Dict[str, typing.Any]]]]]] = None,
                    notify_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    policy_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAlert.PolicyConfigurationProperty, typing.Dict[str, typing.Any]]]] = None,
                    send_resolved: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    severity_configurations: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAlert.SeverityConfigurationsProperty, typing.Dict[str, typing.Any]]]]]] = None,
                    threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    throttling: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument dashboard", value=dashboard, expected_type=type_hints["dashboard"])
                check_type(argname="argument query_list", value=query_list, expected_type=type_hints["query_list"])
                check_type(argname="argument annotations", value=annotations, expected_type=type_hints["annotations"])
                check_type(argname="argument auto_annotation", value=auto_annotation, expected_type=type_hints["auto_annotation"])
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
                check_type(argname="argument group_configuration", value=group_configuration, expected_type=type_hints["group_configuration"])
                check_type(argname="argument join_configurations", value=join_configurations, expected_type=type_hints["join_configurations"])
                check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
                check_type(argname="argument mute_until", value=mute_until, expected_type=type_hints["mute_until"])
                check_type(argname="argument no_data_fire", value=no_data_fire, expected_type=type_hints["no_data_fire"])
                check_type(argname="argument no_data_severity", value=no_data_severity, expected_type=type_hints["no_data_severity"])
                check_type(argname="argument notification_list", value=notification_list, expected_type=type_hints["notification_list"])
                check_type(argname="argument notify_threshold", value=notify_threshold, expected_type=type_hints["notify_threshold"])
                check_type(argname="argument policy_configuration", value=policy_configuration, expected_type=type_hints["policy_configuration"])
                check_type(argname="argument send_resolved", value=send_resolved, expected_type=type_hints["send_resolved"])
                check_type(argname="argument severity_configurations", value=severity_configurations, expected_type=type_hints["severity_configurations"])
                check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
                check_type(argname="argument throttling", value=throttling, expected_type=type_hints["throttling"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[str, typing.Any] = {
                "dashboard": dashboard,
                "query_list": query_list,
            }
            if annotations is not None:
                self._values["annotations"] = annotations
            if auto_annotation is not None:
                self._values["auto_annotation"] = auto_annotation
            if condition is not None:
                self._values["condition"] = condition
            if group_configuration is not None:
                self._values["group_configuration"] = group_configuration
            if join_configurations is not None:
                self._values["join_configurations"] = join_configurations
            if labels is not None:
                self._values["labels"] = labels
            if mute_until is not None:
                self._values["mute_until"] = mute_until
            if no_data_fire is not None:
                self._values["no_data_fire"] = no_data_fire
            if no_data_severity is not None:
                self._values["no_data_severity"] = no_data_severity
            if notification_list is not None:
                self._values["notification_list"] = notification_list
            if notify_threshold is not None:
                self._values["notify_threshold"] = notify_threshold
            if policy_configuration is not None:
                self._values["policy_configuration"] = policy_configuration
            if send_resolved is not None:
                self._values["send_resolved"] = send_resolved
            if severity_configurations is not None:
                self._values["severity_configurations"] = severity_configurations
            if threshold is not None:
                self._values["threshold"] = threshold
            if throttling is not None:
                self._values["throttling"] = throttling
            if type is not None:
                self._values["type"] = type
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def dashboard(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: dashboard: Alarm associated dashboard.
            '''
            result = self._values.get("dashboard")
            assert result is not None, "Required property 'dashboard' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def query_list(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.QueryListProperty"]]]:
            '''
            :Property: queryList:
            '''
            result = self._values.get("query_list")
            assert result is not None, "Required property 'query_list' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.QueryListProperty"]]], result)

        @builtins.property
        def annotations(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.AnnotationsProperty"]]]]:
            '''
            :Property: annotations: The list of annotations.
            '''
            result = self._values.get("annotations")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.AnnotationsProperty"]]]], result)

        @builtins.property
        def auto_annotation(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: autoAnnotation:
            '''
            result = self._values.get("auto_annotation")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            condition: The condition that is required to trigger an alert.
            Log Service triggers an alert if the trigger condition is met.
            For example, you can set the trigger condition to pv%100 > 0 && uv > 0.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def group_configuration(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosAlert.GroupConfigurationProperty"]]:
            '''
            :Property: groupConfiguration:
            '''
            result = self._values.get("group_configuration")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosAlert.GroupConfigurationProperty"]], result)

        @builtins.property
        def join_configurations(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.JoinConfigurationsProperty"]]]]:
            '''
            :Property: joinConfigurations: The list of Join conditions when multiple tables are joined. For example, 3 tables join, and 2 joinConfigurations are passed in.
            '''
            result = self._values.get("join_configurations")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.JoinConfigurationsProperty"]]]], result)

        @builtins.property
        def labels(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.LabelsProperty"]]]]:
            '''
            :Property: labels: The list of tags.
            '''
            result = self._values.get("labels")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.LabelsProperty"]]]], result)

        @builtins.property
        def mute_until(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: muteUntil:
            '''
            result = self._values.get("mute_until")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def no_data_fire(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: noDataFire: Whether to trigger an alarm if there is no data, the default is false.
            '''
            result = self._values.get("no_data_fire")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def no_data_severity(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            noDataSeverity: The alarm level when there is no data to trigger the alarm. Valid values:
            2: Report
            4: Low
            6: Medium
            8: High
            10: Critical.
            '''
            result = self._values.get("no_data_severity")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def notification_list(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.NotificationListProperty"]]]]:
            '''
            :Property: notificationList:
            '''
            result = self._values.get("notification_list")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.NotificationListProperty"]]]], result)

        @builtins.property
        def notify_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            notifyThreshold: The notification threshold,
            which will not be notified until the number of triggers is reached.
            '''
            result = self._values.get("notify_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def policy_configuration(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosAlert.PolicyConfigurationProperty"]]:
            '''
            :Property: policyConfiguration:
            '''
            result = self._values.get("policy_configuration")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosAlert.PolicyConfigurationProperty"]], result)

        @builtins.property
        def send_resolved(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sendResolved: Whether to notify when the alarm is restored, the default is false.
            '''
            result = self._values.get("send_resolved")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def severity_configurations(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.SeverityConfigurationsProperty"]]]]:
            '''
            :Property: severityConfigurations: The list of severity configurations.
            '''
            result = self._values.get("severity_configurations")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAlert.SeverityConfigurationsProperty"]]]], result)

        @builtins.property
        def threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: threshold: Trigger threshold.
            '''
            result = self._values.get("threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def throttling(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: throttling: Notification interval, default is no interval.
            '''
            result = self._values.get("throttling")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: type: Configuration type.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: version: Configuration version.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.DetailProperty",
        jsii_struct_bases=[],
        name_mapping={
            "configuration": "configuration",
            "display_name": "displayName",
            "name": "name",
            "schedule": "schedule",
            "description": "description",
            "state": "state",
            "type": "type",
        },
    )
    class DetailProperty:
        def __init__(
            self,
            *,
            configuration: typing.Union[ros_cdk_core.IResolvable, typing.Union["RosAlert.ConfigurationProperty", typing.Dict[str, typing.Any]]],
            display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            schedule: typing.Union[ros_cdk_core.IResolvable, typing.Union["RosAlert.ScheduleProperty", typing.Dict[str, typing.Any]]],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            state: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param configuration: 
            :param display_name: 
            :param name: 
            :param schedule: 
            :param description: 
            :param state: 
            :param type: 
            '''
            if __debug__:
                def stub(
                    *,
                    configuration: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAlert.ConfigurationProperty, typing.Dict[str, typing.Any]]],
                    display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    schedule: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAlert.ScheduleProperty, typing.Dict[str, typing.Any]]],
                    description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    state: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
                check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument state", value=state, expected_type=type_hints["state"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[str, typing.Any] = {
                "configuration": configuration,
                "display_name": display_name,
                "name": name,
                "schedule": schedule,
            }
            if description is not None:
                self._values["description"] = description
            if state is not None:
                self._values["state"] = state
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def configuration(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, "RosAlert.ConfigurationProperty"]:
            '''
            :Property: configuration:
            '''
            result = self._values.get("configuration")
            assert result is not None, "Required property 'configuration' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosAlert.ConfigurationProperty"], result)

        @builtins.property
        def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: displayName: Alert name display in console. The name length is 1-64 characters.
            '''
            result = self._values.get("display_name")
            assert result is not None, "Required property 'display_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: Alert name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def schedule(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, "RosAlert.ScheduleProperty"]:
            '''
            :Property:

            schedule: The interval at which Log Service evaluates the alert rule.
            Note During an alert rule evaluation, if a query returns more than 100 log entries,
            Log Service checks only the first 100 log entries.
            '''
            result = self._values.get("schedule")
            assert result is not None, "Required property 'schedule' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosAlert.ScheduleProperty"], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: Description of the alert.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def state(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: state:
            '''
            result = self._values.get("state")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: type:
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DetailProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.EvalConditionProperty",
        jsii_struct_bases=[],
        name_mapping={"condition": "condition", "count_condition": "countCondition"},
    )
    class EvalConditionProperty:
        def __init__(
            self,
            *,
            condition: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            count_condition: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param condition: 
            :param count_condition: 
            '''
            if __debug__:
                def stub(
                    *,
                    condition: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    count_condition: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
                check_type(argname="argument count_condition", value=count_condition, expected_type=type_hints["count_condition"])
            self._values: typing.Dict[str, typing.Any] = {}
            if condition is not None:
                self._values["condition"] = condition
            if count_condition is not None:
                self._values["count_condition"] = count_condition

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: condition: It is triggered when any piece of data in the result of judging the Cartesian product satisfies the Condition. After grouping, it indicates the data trigger condition for each group, and an empty string indicates that any data row is satisfied.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def count_condition(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: countCondition: Alarm expression, indicating how much data meets the alarm condition.
            '''
            result = self._values.get("count_condition")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EvalConditionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.GroupConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type", "fields": "fields"},
    )
    class GroupConfigurationProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            fields: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param type: 
            :param fields: 
            '''
            if __debug__:
                def stub(
                    *,
                    type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    fields: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument fields", value=fields, expected_type=type_hints["fields"])
            self._values: typing.Dict[str, typing.Any] = {
                "type": type,
            }
            if fields is not None:
                self._values["fields"] = fields

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            type: Grouping type.
            no_group: no grouping
            labels_auto: autocustom: custom.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def fields(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: fields: The fields of group. Fill in the empty list when not group. No fill when group automatically. Fill required when group in custom.
            '''
            result = self._values.get("fields")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "GroupConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.JoinConfigurationsProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type", "condition": "condition"},
    )
    class JoinConfigurationsProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            condition: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param type: 
            :param condition: 
            '''
            if __debug__:
                def stub(
                    *,
                    type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    condition: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
            self._values: typing.Dict[str, typing.Any] = {
                "type": type,
            }
            if condition is not None:
                self._values["condition"] = condition

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: type: The type of set operation join.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: condition: Condition for a set operation. Not required when using Cartesian product.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "JoinConfigurationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.LabelsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class LabelsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key:
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: value:
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LabelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.NotificationListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "type": "type",
            "content": "content",
            "email_list": "emailList",
            "headers": "headers",
            "method": "method",
            "mobile_list": "mobileList",
            "service_uri": "serviceUri",
        },
    )
    class NotificationListProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            content: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            email_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            method: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            mobile_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            service_uri: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param type: 
            :param content: 
            :param email_list: 
            :param headers: 
            :param method: 
            :param mobile_list: 
            :param service_uri: 
            '''
            if __debug__:
                def stub(
                    *,
                    type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    content: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    email_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
                    method: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    mobile_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    service_uri: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument content", value=content, expected_type=type_hints["content"])
                check_type(argname="argument email_list", value=email_list, expected_type=type_hints["email_list"])
                check_type(argname="argument headers", value=headers, expected_type=type_hints["headers"])
                check_type(argname="argument method", value=method, expected_type=type_hints["method"])
                check_type(argname="argument mobile_list", value=mobile_list, expected_type=type_hints["mobile_list"])
                check_type(argname="argument service_uri", value=service_uri, expected_type=type_hints["service_uri"])
            self._values: typing.Dict[str, typing.Any] = {
                "type": type,
            }
            if content is not None:
                self._values["content"] = content
            if email_list is not None:
                self._values["email_list"] = email_list
            if headers is not None:
                self._values["headers"] = headers
            if method is not None:
                self._values["method"] = method
            if mobile_list is not None:
                self._values["mobile_list"] = mobile_list
            if service_uri is not None:
                self._values["service_uri"] = service_uri

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            type: This topic describes how to configure a notification method.
            Log Service can send alert notifications by using one or more methods.
            Available notification methods include emails, DingTalk chatbot webhooks,
            custom webhooks, and Alibaba Cloud Message Center.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def content(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: content: The content of an alert notification
            '''
            result = self._values.get("content")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def email_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: emailList:
            '''
            result = self._values.get("email_list")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def headers(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: headers:
            '''
            result = self._values.get("headers")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def method(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: method:
            '''
            result = self._values.get("method")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def mobile_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: mobileList:
            '''
            result = self._values.get("mobile_list")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def service_uri(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serviceUri: The webhook URL of the DingTalk chatbot.
            '''
            result = self._values.get("service_uri")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NotificationListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.PolicyConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "action_policy_id": "actionPolicyId",
            "alert_policy_id": "alertPolicyId",
            "repeat_interval": "repeatInterval",
            "use_default": "useDefault",
        },
    )
    class PolicyConfigurationProperty:
        def __init__(
            self,
            *,
            action_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            alert_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            repeat_interval: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            use_default: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param action_policy_id: 
            :param alert_policy_id: 
            :param repeat_interval: 
            :param use_default: 
            '''
            if __debug__:
                def stub(
                    *,
                    action_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    alert_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    repeat_interval: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    use_default: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument action_policy_id", value=action_policy_id, expected_type=type_hints["action_policy_id"])
                check_type(argname="argument alert_policy_id", value=alert_policy_id, expected_type=type_hints["alert_policy_id"])
                check_type(argname="argument repeat_interval", value=repeat_interval, expected_type=type_hints["repeat_interval"])
                check_type(argname="argument use_default", value=use_default, expected_type=type_hints["use_default"])
            self._values: typing.Dict[str, typing.Any] = {}
            if action_policy_id is not None:
                self._values["action_policy_id"] = action_policy_id
            if alert_policy_id is not None:
                self._values["alert_policy_id"] = alert_policy_id
            if repeat_interval is not None:
                self._values["repeat_interval"] = repeat_interval
            if use_default is not None:
                self._values["use_default"] = use_default

        @builtins.property
        def action_policy_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: actionPolicyId: The ID of action policy. It is useful when an alert policy references a dynamic action policy.
            '''
            result = self._values.get("action_policy_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def alert_policy_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: alertPolicyId: The ID of alert policy.
            '''
            result = self._values.get("alert_policy_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def repeat_interval(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: repeatInterval: Repeat interval. The format is number with suffix s/m/h.
            '''
            result = self._values.get("repeat_interval")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def use_default(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: useDefault:
            '''
            result = self._values.get("use_default")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PolicyConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.QueryListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "end": "end",
            "query": "query",
            "start": "start",
            "time_span_type": "timeSpanType",
            "chart_title": "chartTitle",
            "dashboard_id": "dashboardId",
            "log_store": "logStore",
            "power_sql_mode": "powerSqlMode",
            "project": "project",
            "region": "region",
            "role_arn": "roleArn",
            "store": "store",
            "store_type": "storeType",
        },
    )
    class QueryListProperty:
        def __init__(
            self,
            *,
            end: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            query: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            start: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            time_span_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            chart_title: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            dashboard_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            log_store: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            power_sql_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            project: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            store: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            store_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param end: 
            :param query: 
            :param start: 
            :param time_span_type: 
            :param chart_title: 
            :param dashboard_id: 
            :param log_store: 
            :param power_sql_mode: 
            :param project: 
            :param region: 
            :param role_arn: 
            :param store: 
            :param store_type: 
            '''
            if __debug__:
                def stub(
                    *,
                    end: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    query: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    start: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    time_span_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    chart_title: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    dashboard_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    log_store: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    power_sql_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    project: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    store: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    store_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument end", value=end, expected_type=type_hints["end"])
                check_type(argname="argument query", value=query, expected_type=type_hints["query"])
                check_type(argname="argument start", value=start, expected_type=type_hints["start"])
                check_type(argname="argument time_span_type", value=time_span_type, expected_type=type_hints["time_span_type"])
                check_type(argname="argument chart_title", value=chart_title, expected_type=type_hints["chart_title"])
                check_type(argname="argument dashboard_id", value=dashboard_id, expected_type=type_hints["dashboard_id"])
                check_type(argname="argument log_store", value=log_store, expected_type=type_hints["log_store"])
                check_type(argname="argument power_sql_mode", value=power_sql_mode, expected_type=type_hints["power_sql_mode"])
                check_type(argname="argument project", value=project, expected_type=type_hints["project"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
                check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
                check_type(argname="argument store", value=store, expected_type=type_hints["store"])
                check_type(argname="argument store_type", value=store_type, expected_type=type_hints["store_type"])
            self._values: typing.Dict[str, typing.Any] = {
                "end": end,
                "query": query,
                "start": start,
                "time_span_type": time_span_type,
            }
            if chart_title is not None:
                self._values["chart_title"] = chart_title
            if dashboard_id is not None:
                self._values["dashboard_id"] = dashboard_id
            if log_store is not None:
                self._values["log_store"] = log_store
            if power_sql_mode is not None:
                self._values["power_sql_mode"] = power_sql_mode
            if project is not None:
                self._values["project"] = project
            if region is not None:
                self._values["region"] = region
            if role_arn is not None:
                self._values["role_arn"] = role_arn
            if store is not None:
                self._values["store"] = store
            if store_type is not None:
                self._values["store_type"] = store_type

        @builtins.property
        def end(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: end:
            '''
            result = self._values.get("end")
            assert result is not None, "Required property 'end' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def query(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: query:
            '''
            result = self._values.get("query")
            assert result is not None, "Required property 'query' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def start(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: start:
            '''
            result = self._values.get("start")
            assert result is not None, "Required property 'start' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def time_span_type(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: timeSpanType:
            '''
            result = self._values.get("time_span_type")
            assert result is not None, "Required property 'time_span_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def chart_title(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: chartTitle:
            '''
            result = self._values.get("chart_title")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def dashboard_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: dashboardId: The ID of associated dashboard.
            '''
            result = self._values.get("dashboard_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def log_store(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: logStore:
            '''
            result = self._values.get("log_store")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def power_sql_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: powerSqlMode:
            '''
            result = self._values.get("power_sql_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def project(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: project:
            '''
            result = self._values.get("project")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: region:
            '''
            result = self._values.get("region")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def role_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: roleArn: ARN used by role access.
            '''
            result = self._values.get("role_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def store(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            store: When StoreType is log or metric, it indicates the LogStore to be queried.
            When StoreType is meta, it indicates the ResourceName to be queried.
            '''
            result = self._values.get("store")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def store_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            storeType: Log store type. Valid values:
            log: sls query analysis statement
            metric: sls time series data
            meta: query metastore.
            '''
            result = self._values.get("store_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QueryListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.ScheduleProperty",
        jsii_struct_bases=[],
        name_mapping={
            "type": "type",
            "cron_expression": "cronExpression",
            "day_of_week": "dayOfWeek",
            "delay": "delay",
            "hour": "hour",
            "interval": "interval",
            "run_immediately": "runImmediately",
        },
    )
    class ScheduleProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            cron_expression: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            day_of_week: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            delay: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            hour: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            interval: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            run_immediately: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param type: 
            :param cron_expression: 
            :param day_of_week: 
            :param delay: 
            :param hour: 
            :param interval: 
            :param run_immediately: 
            '''
            if __debug__:
                def stub(
                    *,
                    type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    cron_expression: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    day_of_week: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    delay: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    hour: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    interval: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    run_immediately: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument cron_expression", value=cron_expression, expected_type=type_hints["cron_expression"])
                check_type(argname="argument day_of_week", value=day_of_week, expected_type=type_hints["day_of_week"])
                check_type(argname="argument delay", value=delay, expected_type=type_hints["delay"])
                check_type(argname="argument hour", value=hour, expected_type=type_hints["hour"])
                check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
                check_type(argname="argument run_immediately", value=run_immediately, expected_type=type_hints["run_immediately"])
            self._values: typing.Dict[str, typing.Any] = {
                "type": type,
            }
            if cron_expression is not None:
                self._values["cron_expression"] = cron_expression
            if day_of_week is not None:
                self._values["day_of_week"] = day_of_week
            if delay is not None:
                self._values["delay"] = delay
            if hour is not None:
                self._values["hour"] = hour
            if interval is not None:
                self._values["interval"] = interval
            if run_immediately is not None:
                self._values["run_immediately"] = run_immediately

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: type:
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def cron_expression(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: cronExpression:
            '''
            result = self._values.get("cron_expression")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def day_of_week(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: dayOfWeek:
            '''
            result = self._values.get("day_of_week")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def delay(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: delay:
            '''
            result = self._values.get("delay")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def hour(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: hour:
            '''
            result = self._values.get("hour")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def interval(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: interval: Execution interval
            '''
            result = self._values.get("interval")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def run_immediately(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: runImmediately:
            '''
            result = self._values.get("run_immediately")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScheduleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.SeverityConfigurationsProperty",
        jsii_struct_bases=[],
        name_mapping={"severity": "severity", "eval_condition": "evalCondition"},
    )
    class SeverityConfigurationsProperty:
        def __init__(
            self,
            *,
            severity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            eval_condition: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosAlert.EvalConditionProperty", typing.Dict[str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param severity: 
            :param eval_condition: 
            '''
            if __debug__:
                def stub(
                    *,
                    severity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    eval_condition: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAlert.EvalConditionProperty, typing.Dict[str, typing.Any]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument severity", value=severity, expected_type=type_hints["severity"])
                check_type(argname="argument eval_condition", value=eval_condition, expected_type=type_hints["eval_condition"])
            self._values: typing.Dict[str, typing.Any] = {
                "severity": severity,
            }
            if eval_condition is not None:
                self._values["eval_condition"] = eval_condition

        @builtins.property
        def severity(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property:

            severity: The alarm level when there is no data to trigger the alarm. Valid values:
            2: Report
            4: Low
            6: Medium
            8: High
            10: Critical.
            '''
            result = self._values.get("severity")
            assert result is not None, "Required property 'severity' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def eval_condition(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosAlert.EvalConditionProperty"]]:
            '''
            :Property: evalCondition:
            '''
            result = self._values.get("eval_condition")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosAlert.EvalConditionProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SeverityConfigurationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosAlertProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class RosAlertProps:
    def __init__(
        self,
        *,
        detail: typing.Union[typing.Union[RosAlert.DetailProperty, typing.Dict[str, typing.Any]], ros_cdk_core.IResolvable],
        project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Alert``.

        :param detail: 
        :param project: 
        '''
        if __debug__:
            def stub(
                *,
                detail: typing.Union[typing.Union[RosAlert.DetailProperty, typing.Dict[str, typing.Any]], ros_cdk_core.IResolvable],
                project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
        self._values: typing.Dict[str, typing.Any] = {
            "detail": detail,
            "project": project,
        }

    @builtins.property
    def detail(self) -> typing.Union[RosAlert.DetailProperty, ros_cdk_core.IResolvable]:
        '''
        :Property: detail:
        '''
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return typing.cast(typing.Union[RosAlert.DetailProperty, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        project: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAlertProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApplyConfigToMachineGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosApplyConfigToMachineGroup",
):
    '''A ROS template type:  ``ALIYUN::SLS::ApplyConfigToMachineGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosApplyConfigToMachineGroupProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosApplyConfigToMachineGroupProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="configName")
    def config_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: configName: Apply config to the config name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "configName"))

    @config_name.setter
    def config_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configName", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: groupName: Apply config to the group name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: projectName: Apply config to the project name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosApplyConfigToMachineGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_name": "configName",
        "group_name": "groupName",
        "project_name": "projectName",
    },
)
class RosApplyConfigToMachineGroupProps:
    def __init__(
        self,
        *,
        config_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        project_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

        :param config_name: 
        :param group_name: 
        :param project_name: 
        '''
        if __debug__:
            def stub(
                *,
                config_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                project_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument config_name", value=config_name, expected_type=type_hints["config_name"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
        self._values: typing.Dict[str, typing.Any] = {}
        if config_name is not None:
            self._values["config_name"] = config_name
        if group_name is not None:
            self._values["group_name"] = group_name
        if project_name is not None:
            self._values["project_name"] = project_name

    @builtins.property
    def config_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: configName: Apply config to the config name
        '''
        result = self._values.get("config_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: groupName: Apply config to the group name
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: projectName: Apply config to the project name.
        '''
        result = self._values.get("project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApplyConfigToMachineGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAudit(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosAudit",
):
    '''A ROS template type:  ``ALIYUN::SLS::Audit``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosAuditProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Audit``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosAuditProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DisplayName: Name of SLS log audit.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: displayName: Name of SLS log audit.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="variableMap")
    def variable_map(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosAudit.VariableMapProperty"]:
        '''
        :Property: variableMap: Log audit detailed configuration.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosAudit.VariableMapProperty"], jsii.get(self, "variableMap"))

    @variable_map.setter
    def variable_map(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosAudit.VariableMapProperty"],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, RosAudit.VariableMapProperty],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "variableMap", value)

    @builtins.property
    @jsii.member(jsii_name="multiAccount")
    def multi_account(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: multiAccount: Multi-account configuration, please fill in multiple aliuid.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "multiAccount"))

    @multi_account.setter
    def multi_account(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiAccount", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty",
        jsii_struct_bases=[],
        name_mapping={
            "actiontrail_enabled": "actiontrailEnabled",
            "actiontrail_openapi_collection_policy": "actiontrailOpenapiCollectionPolicy",
            "actiontrail_openapi_policy_setting": "actiontrailOpenapiPolicySetting",
            "actiontrail_ti_enabled": "actiontrailTiEnabled",
            "actiontrail_ttl": "actiontrailTtl",
            "apigateway_access_collection_policy": "apigatewayAccessCollectionPolicy",
            "apigateway_access_policy_setting": "apigatewayAccessPolicySetting",
            "apigateway_enabled": "apigatewayEnabled",
            "apigateway_ti_enabled": "apigatewayTiEnabled",
            "apigateway_ttl": "apigatewayTtl",
            "appconnect_enabled": "appconnectEnabled",
            "appconnect_op_collection_policy": "appconnectOpCollectionPolicy",
            "appconnect_op_policy_setting": "appconnectOpPolicySetting",
            "appconnect_ti_enabled": "appconnectTiEnabled",
            "appconnect_ttl": "appconnectTtl",
            "bastion_audit_collection_policy": "bastionAuditCollectionPolicy",
            "bastion_audit_policy_setting": "bastionAuditPolicySetting",
            "bastion_enabled": "bastionEnabled",
            "bastion_ti_enabled": "bastionTiEnabled",
            "bastion_ttl": "bastionTtl",
            "cloudfirewall_access_collection_policy": "cloudfirewallAccessCollectionPolicy",
            "cloudfirewall_access_policy_setting": "cloudfirewallAccessPolicySetting",
            "cloudfirewall_enabled": "cloudfirewallEnabled",
            "cloudfirewall_ti_enabled": "cloudfirewallTiEnabled",
            "cloudfirewall_ttl": "cloudfirewallTtl",
            "cps_callback_collection_policy": "cpsCallbackCollectionPolicy",
            "cps_callback_policy_setting": "cpsCallbackPolicySetting",
            "cps_enabled": "cpsEnabled",
            "cps_ti_enabled": "cpsTiEnabled",
            "cps_ttl": "cpsTtl",
            "ddos_coo_access_collection_policy": "ddosCooAccessCollectionPolicy",
            "ddos_coo_access_enabled": "ddosCooAccessEnabled",
            "ddos_coo_access_policy_setting": "ddosCooAccessPolicySetting",
            "ddos_coo_access_ti_enabled": "ddosCooAccessTiEnabled",
            "ddos_coo_access_ttl": "ddosCooAccessTtl",
            "drds_audit_collection_policy": "drdsAuditCollectionPolicy",
            "drds_audit_enabled": "drdsAuditEnabled",
            "drds_audit_policy_setting": "drdsAuditPolicySetting",
            "drds_audit_ti_enabled": "drdsAuditTiEnabled",
            "drds_audit_ttl": "drdsAuditTtl",
            "drds_sync_enabled": "drdsSyncEnabled",
            "drds_sync_ttl": "drdsSyncTtl",
            "k8_s_audit_collection_policy": "k8SAuditCollectionPolicy",
            "k8_s_audit_enabled": "k8SAuditEnabled",
            "k8_s_audit_policy_setting": "k8SAuditPolicySetting",
            "k8_s_audit_ti_enabled": "k8SAuditTiEnabled",
            "k8_s_audit_ttl": "k8SAuditTtl",
            "k8_s_event_collection_policy": "k8SEventCollectionPolicy",
            "k8_s_event_enabled": "k8SEventEnabled",
            "k8_s_event_policy_setting": "k8SEventPolicySetting",
            "k8_s_event_ti_enabled": "k8SEventTiEnabled",
            "k8_s_event_ttl": "k8SEventTtl",
            "k8_s_ingress_collection_policy": "k8SIngressCollectionPolicy",
            "k8_s_ingress_enabled": "k8SIngressEnabled",
            "k8_s_ingress_policy_setting": "k8SIngressPolicySetting",
            "k8_s_ingress_ti_enabled": "k8SIngressTiEnabled",
            "k8_s_ingress_ttl": "k8SIngressTtl",
            "nas_audit_collection_policy": "nasAuditCollectionPolicy",
            "nas_audit_policy_setting": "nasAuditPolicySetting",
            "nas_enabled": "nasEnabled",
            "nas_ti_enabled": "nasTiEnabled",
            "nas_ttl": "nasTtl",
            "oss_access_collection_policy": "ossAccessCollectionPolicy",
            "oss_access_enabled": "ossAccessEnabled",
            "oss_access_policy_setting": "ossAccessPolicySetting",
            "oss_access_ti_enabled": "ossAccessTiEnabled",
            "oss_access_ttl": "ossAccessTtl",
            "oss_metering_collection_policy": "ossMeteringCollectionPolicy",
            "oss_metering_enabled": "ossMeteringEnabled",
            "oss_metering_policy_setting": "ossMeteringPolicySetting",
            "oss_metering_ti_enabled": "ossMeteringTiEnabled",
            "oss_metering_ttl": "ossMeteringTtl",
            "oss_sync_enabled": "ossSyncEnabled",
            "oss_sync_ttl": "ossSyncTtl",
            "polardb_audit_collection_policy": "polardbAuditCollectionPolicy",
            "polardb_audit_policy_setting": "polardbAuditPolicySetting",
            "polardb_enabled": "polardbEnabled",
            "polardb_perf_collection_policy": "polardbPerfCollectionPolicy",
            "polardb_perf_enabled": "polardbPerfEnabled",
            "polardb_perf_policy_setting": "polardbPerfPolicySetting",
            "polardb_perf_ti_enabled": "polardbPerfTiEnabled",
            "polardb_perf_ttl": "polardbPerfTtl",
            "polardb_slow_collection_policy": "polardbSlowCollectionPolicy",
            "polardb_slow_enabled": "polardbSlowEnabled",
            "polardb_slow_policy_setting": "polardbSlowPolicySetting",
            "polardb_slow_ti_enabled": "polardbSlowTiEnabled",
            "polardb_slow_ttl": "polardbSlowTtl",
            "polardb_ti_enabled": "polardbTiEnabled",
            "polardb_ttl": "polardbTtl",
            "rds_audit_collection_policy": "rdsAuditCollectionPolicy",
            "rds_audit_policy_setting": "rdsAuditPolicySetting",
            "rds_enabled": "rdsEnabled",
            "rds_perf_collection_policy": "rdsPerfCollectionPolicy",
            "rds_perf_enabled": "rdsPerfEnabled",
            "rds_perf_policy_setting": "rdsPerfPolicySetting",
            "rds_perf_ti_enabled": "rdsPerfTiEnabled",
            "rds_perf_ttl": "rdsPerfTtl",
            "rds_slow_collection_policy": "rdsSlowCollectionPolicy",
            "rds_slow_enabled": "rdsSlowEnabled",
            "rds_slow_policy_setting": "rdsSlowPolicySetting",
            "rds_slow_ti_enabled": "rdsSlowTiEnabled",
            "rds_slow_ttl": "rdsSlowTtl",
            "rds_ti_enabled": "rdsTiEnabled",
            "rds_ttl": "rdsTtl",
            "redis_audit_collection_policy": "redisAuditCollectionPolicy",
            "redis_audit_enabled": "redisAuditEnabled",
            "redis_audit_policy_setting": "redisAuditPolicySetting",
            "redis_audit_ti_enabled": "redisAuditTiEnabled",
            "redis_audit_ttl": "redisAuditTtl",
            "redis_sync_enabled": "redisSyncEnabled",
            "redis_sync_ttl": "redisSyncTtl",
            "sas_crack_enabled": "sasCrackEnabled",
            "sas_dns_enabled": "sasDnsEnabled",
            "sas_http_enabled": "sasHttpEnabled",
            "sas_local_dns_enabled": "sasLocalDnsEnabled",
            "sas_login_enabled": "sasLoginEnabled",
            "sas_network_enabled": "sasNetworkEnabled",
            "sas_process_enabled": "sasProcessEnabled",
            "sas_security_alert_enabled": "sasSecurityAlertEnabled",
            "sas_security_hc_enabled": "sasSecurityHcEnabled",
            "sas_security_vul_enabled": "sasSecurityVulEnabled",
            "sas_session_enabled": "sasSessionEnabled",
            "sas_snapshot_account_enabled": "sasSnapshotAccountEnabled",
            "sas_snapshot_port_enabled": "sasSnapshotPortEnabled",
            "sas_snapshot_process_enabled": "sasSnapshotProcessEnabled",
            "sas_ti_enabled": "sasTiEnabled",
            "sas_ttl": "sasTtl",
            "slb_access_collection_policy": "slbAccessCollectionPolicy",
            "slb_access_enabled": "slbAccessEnabled",
            "slb_access_policy_setting": "slbAccessPolicySetting",
            "slb_access_ti_enabled": "slbAccessTiEnabled",
            "slb_access_ttl": "slbAccessTtl",
            "slb_sync_enabled": "slbSyncEnabled",
            "slb_sync_ttl": "slbSyncTtl",
            "waf_access_collection_policy": "wafAccessCollectionPolicy",
            "waf_access_policy_setting": "wafAccessPolicySetting",
            "waf_enabled": "wafEnabled",
            "waf_ti_enabled": "wafTiEnabled",
            "waf_ttl": "wafTtl",
        },
    )
    class VariableMapProperty:
        def __init__(
            self,
            *,
            actiontrail_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            actiontrail_openapi_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            actiontrail_openapi_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            actiontrail_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            actiontrail_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            apigateway_access_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            apigateway_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            apigateway_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            apigateway_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            apigateway_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            appconnect_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            appconnect_op_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            appconnect_op_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            appconnect_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            appconnect_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            bastion_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            bastion_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            bastion_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            bastion_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            bastion_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            cloudfirewall_access_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            cloudfirewall_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            cloudfirewall_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            cloudfirewall_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            cloudfirewall_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            cps_callback_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            cps_callback_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            cps_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            cps_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            cps_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ddos_coo_access_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ddos_coo_access_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            ddos_coo_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            ddos_coo_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            ddos_coo_access_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            drds_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            drds_audit_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            drds_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            drds_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            drds_audit_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            drds_sync_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            drds_sync_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            k8_s_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            k8_s_audit_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            k8_s_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            k8_s_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            k8_s_audit_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            k8_s_event_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            k8_s_event_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            k8_s_event_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            k8_s_event_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            k8_s_event_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            k8_s_ingress_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            k8_s_ingress_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            k8_s_ingress_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            k8_s_ingress_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            k8_s_ingress_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            nas_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            nas_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            nas_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            nas_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            nas_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            oss_access_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            oss_access_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            oss_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            oss_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            oss_access_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            oss_metering_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            oss_metering_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            oss_metering_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            oss_metering_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            oss_metering_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            oss_sync_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            oss_sync_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            polardb_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            polardb_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            polardb_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            polardb_perf_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            polardb_perf_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            polardb_perf_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            polardb_perf_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            polardb_perf_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            polardb_slow_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            polardb_slow_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            polardb_slow_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            polardb_slow_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            polardb_slow_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            polardb_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            polardb_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            rds_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            rds_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            rds_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            rds_perf_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            rds_perf_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            rds_perf_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            rds_perf_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            rds_perf_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            rds_slow_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            rds_slow_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            rds_slow_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            rds_slow_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            rds_slow_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            rds_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            rds_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            redis_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            redis_audit_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            redis_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            redis_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            redis_audit_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            redis_sync_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            redis_sync_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            sas_crack_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_dns_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_http_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_local_dns_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_login_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_network_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_process_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_security_alert_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_security_hc_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_security_vul_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_session_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_snapshot_account_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_snapshot_port_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_snapshot_process_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sas_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            slb_access_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            slb_access_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            slb_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            slb_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            slb_access_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            slb_sync_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            slb_sync_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            waf_access_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            waf_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            waf_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            waf_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            waf_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param actiontrail_enabled: 
            :param actiontrail_openapi_collection_policy: 
            :param actiontrail_openapi_policy_setting: 
            :param actiontrail_ti_enabled: 
            :param actiontrail_ttl: 
            :param apigateway_access_collection_policy: 
            :param apigateway_access_policy_setting: 
            :param apigateway_enabled: 
            :param apigateway_ti_enabled: 
            :param apigateway_ttl: 
            :param appconnect_enabled: 
            :param appconnect_op_collection_policy: 
            :param appconnect_op_policy_setting: 
            :param appconnect_ti_enabled: 
            :param appconnect_ttl: 
            :param bastion_audit_collection_policy: 
            :param bastion_audit_policy_setting: 
            :param bastion_enabled: 
            :param bastion_ti_enabled: 
            :param bastion_ttl: 
            :param cloudfirewall_access_collection_policy: 
            :param cloudfirewall_access_policy_setting: 
            :param cloudfirewall_enabled: 
            :param cloudfirewall_ti_enabled: 
            :param cloudfirewall_ttl: 
            :param cps_callback_collection_policy: 
            :param cps_callback_policy_setting: 
            :param cps_enabled: 
            :param cps_ti_enabled: 
            :param cps_ttl: 
            :param ddos_coo_access_collection_policy: 
            :param ddos_coo_access_enabled: 
            :param ddos_coo_access_policy_setting: 
            :param ddos_coo_access_ti_enabled: 
            :param ddos_coo_access_ttl: 
            :param drds_audit_collection_policy: 
            :param drds_audit_enabled: 
            :param drds_audit_policy_setting: 
            :param drds_audit_ti_enabled: 
            :param drds_audit_ttl: 
            :param drds_sync_enabled: 
            :param drds_sync_ttl: 
            :param k8_s_audit_collection_policy: 
            :param k8_s_audit_enabled: 
            :param k8_s_audit_policy_setting: 
            :param k8_s_audit_ti_enabled: 
            :param k8_s_audit_ttl: 
            :param k8_s_event_collection_policy: 
            :param k8_s_event_enabled: 
            :param k8_s_event_policy_setting: 
            :param k8_s_event_ti_enabled: 
            :param k8_s_event_ttl: 
            :param k8_s_ingress_collection_policy: 
            :param k8_s_ingress_enabled: 
            :param k8_s_ingress_policy_setting: 
            :param k8_s_ingress_ti_enabled: 
            :param k8_s_ingress_ttl: 
            :param nas_audit_collection_policy: 
            :param nas_audit_policy_setting: 
            :param nas_enabled: 
            :param nas_ti_enabled: 
            :param nas_ttl: 
            :param oss_access_collection_policy: 
            :param oss_access_enabled: 
            :param oss_access_policy_setting: 
            :param oss_access_ti_enabled: 
            :param oss_access_ttl: 
            :param oss_metering_collection_policy: 
            :param oss_metering_enabled: 
            :param oss_metering_policy_setting: 
            :param oss_metering_ti_enabled: 
            :param oss_metering_ttl: 
            :param oss_sync_enabled: 
            :param oss_sync_ttl: 
            :param polardb_audit_collection_policy: 
            :param polardb_audit_policy_setting: 
            :param polardb_enabled: 
            :param polardb_perf_collection_policy: 
            :param polardb_perf_enabled: 
            :param polardb_perf_policy_setting: 
            :param polardb_perf_ti_enabled: 
            :param polardb_perf_ttl: 
            :param polardb_slow_collection_policy: 
            :param polardb_slow_enabled: 
            :param polardb_slow_policy_setting: 
            :param polardb_slow_ti_enabled: 
            :param polardb_slow_ttl: 
            :param polardb_ti_enabled: 
            :param polardb_ttl: 
            :param rds_audit_collection_policy: 
            :param rds_audit_policy_setting: 
            :param rds_enabled: 
            :param rds_perf_collection_policy: 
            :param rds_perf_enabled: 
            :param rds_perf_policy_setting: 
            :param rds_perf_ti_enabled: 
            :param rds_perf_ttl: 
            :param rds_slow_collection_policy: 
            :param rds_slow_enabled: 
            :param rds_slow_policy_setting: 
            :param rds_slow_ti_enabled: 
            :param rds_slow_ttl: 
            :param rds_ti_enabled: 
            :param rds_ttl: 
            :param redis_audit_collection_policy: 
            :param redis_audit_enabled: 
            :param redis_audit_policy_setting: 
            :param redis_audit_ti_enabled: 
            :param redis_audit_ttl: 
            :param redis_sync_enabled: 
            :param redis_sync_ttl: 
            :param sas_crack_enabled: 
            :param sas_dns_enabled: 
            :param sas_http_enabled: 
            :param sas_local_dns_enabled: 
            :param sas_login_enabled: 
            :param sas_network_enabled: 
            :param sas_process_enabled: 
            :param sas_security_alert_enabled: 
            :param sas_security_hc_enabled: 
            :param sas_security_vul_enabled: 
            :param sas_session_enabled: 
            :param sas_snapshot_account_enabled: 
            :param sas_snapshot_port_enabled: 
            :param sas_snapshot_process_enabled: 
            :param sas_ti_enabled: 
            :param sas_ttl: 
            :param slb_access_collection_policy: 
            :param slb_access_enabled: 
            :param slb_access_policy_setting: 
            :param slb_access_ti_enabled: 
            :param slb_access_ttl: 
            :param slb_sync_enabled: 
            :param slb_sync_ttl: 
            :param waf_access_collection_policy: 
            :param waf_access_policy_setting: 
            :param waf_enabled: 
            :param waf_ti_enabled: 
            :param waf_ttl: 
            '''
            if __debug__:
                def stub(
                    *,
                    actiontrail_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    actiontrail_openapi_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    actiontrail_openapi_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    actiontrail_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    actiontrail_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    apigateway_access_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    apigateway_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    apigateway_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    apigateway_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    apigateway_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    appconnect_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    appconnect_op_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    appconnect_op_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    appconnect_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    appconnect_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    bastion_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    bastion_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    bastion_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    bastion_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    bastion_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    cloudfirewall_access_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    cloudfirewall_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    cloudfirewall_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    cloudfirewall_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    cloudfirewall_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    cps_callback_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    cps_callback_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    cps_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    cps_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    cps_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    ddos_coo_access_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    ddos_coo_access_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    ddos_coo_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    ddos_coo_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    ddos_coo_access_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    drds_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    drds_audit_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    drds_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    drds_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    drds_audit_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    drds_sync_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    drds_sync_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    k8_s_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    k8_s_audit_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    k8_s_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    k8_s_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    k8_s_audit_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    k8_s_event_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    k8_s_event_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    k8_s_event_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    k8_s_event_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    k8_s_event_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    k8_s_ingress_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    k8_s_ingress_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    k8_s_ingress_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    k8_s_ingress_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    k8_s_ingress_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    nas_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    nas_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    nas_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    nas_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    nas_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    oss_access_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    oss_access_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    oss_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    oss_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    oss_access_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    oss_metering_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    oss_metering_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    oss_metering_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    oss_metering_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    oss_metering_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    oss_sync_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    oss_sync_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    polardb_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    polardb_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    polardb_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    polardb_perf_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    polardb_perf_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    polardb_perf_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    polardb_perf_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    polardb_perf_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    polardb_slow_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    polardb_slow_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    polardb_slow_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    polardb_slow_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    polardb_slow_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    polardb_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    polardb_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    rds_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    rds_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    rds_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    rds_perf_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    rds_perf_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    rds_perf_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    rds_perf_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    rds_perf_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    rds_slow_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    rds_slow_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    rds_slow_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    rds_slow_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    rds_slow_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    rds_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    rds_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    redis_audit_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    redis_audit_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    redis_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    redis_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    redis_audit_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    redis_sync_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    redis_sync_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    sas_crack_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_dns_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_http_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_local_dns_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_login_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_network_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_process_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_security_alert_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_security_hc_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_security_vul_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_session_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_snapshot_account_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_snapshot_port_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_snapshot_process_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    sas_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    slb_access_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    slb_access_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    slb_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    slb_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    slb_access_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    slb_sync_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    slb_sync_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    waf_access_collection_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    waf_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                    waf_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    waf_ti_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    waf_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument actiontrail_enabled", value=actiontrail_enabled, expected_type=type_hints["actiontrail_enabled"])
                check_type(argname="argument actiontrail_openapi_collection_policy", value=actiontrail_openapi_collection_policy, expected_type=type_hints["actiontrail_openapi_collection_policy"])
                check_type(argname="argument actiontrail_openapi_policy_setting", value=actiontrail_openapi_policy_setting, expected_type=type_hints["actiontrail_openapi_policy_setting"])
                check_type(argname="argument actiontrail_ti_enabled", value=actiontrail_ti_enabled, expected_type=type_hints["actiontrail_ti_enabled"])
                check_type(argname="argument actiontrail_ttl", value=actiontrail_ttl, expected_type=type_hints["actiontrail_ttl"])
                check_type(argname="argument apigateway_access_collection_policy", value=apigateway_access_collection_policy, expected_type=type_hints["apigateway_access_collection_policy"])
                check_type(argname="argument apigateway_access_policy_setting", value=apigateway_access_policy_setting, expected_type=type_hints["apigateway_access_policy_setting"])
                check_type(argname="argument apigateway_enabled", value=apigateway_enabled, expected_type=type_hints["apigateway_enabled"])
                check_type(argname="argument apigateway_ti_enabled", value=apigateway_ti_enabled, expected_type=type_hints["apigateway_ti_enabled"])
                check_type(argname="argument apigateway_ttl", value=apigateway_ttl, expected_type=type_hints["apigateway_ttl"])
                check_type(argname="argument appconnect_enabled", value=appconnect_enabled, expected_type=type_hints["appconnect_enabled"])
                check_type(argname="argument appconnect_op_collection_policy", value=appconnect_op_collection_policy, expected_type=type_hints["appconnect_op_collection_policy"])
                check_type(argname="argument appconnect_op_policy_setting", value=appconnect_op_policy_setting, expected_type=type_hints["appconnect_op_policy_setting"])
                check_type(argname="argument appconnect_ti_enabled", value=appconnect_ti_enabled, expected_type=type_hints["appconnect_ti_enabled"])
                check_type(argname="argument appconnect_ttl", value=appconnect_ttl, expected_type=type_hints["appconnect_ttl"])
                check_type(argname="argument bastion_audit_collection_policy", value=bastion_audit_collection_policy, expected_type=type_hints["bastion_audit_collection_policy"])
                check_type(argname="argument bastion_audit_policy_setting", value=bastion_audit_policy_setting, expected_type=type_hints["bastion_audit_policy_setting"])
                check_type(argname="argument bastion_enabled", value=bastion_enabled, expected_type=type_hints["bastion_enabled"])
                check_type(argname="argument bastion_ti_enabled", value=bastion_ti_enabled, expected_type=type_hints["bastion_ti_enabled"])
                check_type(argname="argument bastion_ttl", value=bastion_ttl, expected_type=type_hints["bastion_ttl"])
                check_type(argname="argument cloudfirewall_access_collection_policy", value=cloudfirewall_access_collection_policy, expected_type=type_hints["cloudfirewall_access_collection_policy"])
                check_type(argname="argument cloudfirewall_access_policy_setting", value=cloudfirewall_access_policy_setting, expected_type=type_hints["cloudfirewall_access_policy_setting"])
                check_type(argname="argument cloudfirewall_enabled", value=cloudfirewall_enabled, expected_type=type_hints["cloudfirewall_enabled"])
                check_type(argname="argument cloudfirewall_ti_enabled", value=cloudfirewall_ti_enabled, expected_type=type_hints["cloudfirewall_ti_enabled"])
                check_type(argname="argument cloudfirewall_ttl", value=cloudfirewall_ttl, expected_type=type_hints["cloudfirewall_ttl"])
                check_type(argname="argument cps_callback_collection_policy", value=cps_callback_collection_policy, expected_type=type_hints["cps_callback_collection_policy"])
                check_type(argname="argument cps_callback_policy_setting", value=cps_callback_policy_setting, expected_type=type_hints["cps_callback_policy_setting"])
                check_type(argname="argument cps_enabled", value=cps_enabled, expected_type=type_hints["cps_enabled"])
                check_type(argname="argument cps_ti_enabled", value=cps_ti_enabled, expected_type=type_hints["cps_ti_enabled"])
                check_type(argname="argument cps_ttl", value=cps_ttl, expected_type=type_hints["cps_ttl"])
                check_type(argname="argument ddos_coo_access_collection_policy", value=ddos_coo_access_collection_policy, expected_type=type_hints["ddos_coo_access_collection_policy"])
                check_type(argname="argument ddos_coo_access_enabled", value=ddos_coo_access_enabled, expected_type=type_hints["ddos_coo_access_enabled"])
                check_type(argname="argument ddos_coo_access_policy_setting", value=ddos_coo_access_policy_setting, expected_type=type_hints["ddos_coo_access_policy_setting"])
                check_type(argname="argument ddos_coo_access_ti_enabled", value=ddos_coo_access_ti_enabled, expected_type=type_hints["ddos_coo_access_ti_enabled"])
                check_type(argname="argument ddos_coo_access_ttl", value=ddos_coo_access_ttl, expected_type=type_hints["ddos_coo_access_ttl"])
                check_type(argname="argument drds_audit_collection_policy", value=drds_audit_collection_policy, expected_type=type_hints["drds_audit_collection_policy"])
                check_type(argname="argument drds_audit_enabled", value=drds_audit_enabled, expected_type=type_hints["drds_audit_enabled"])
                check_type(argname="argument drds_audit_policy_setting", value=drds_audit_policy_setting, expected_type=type_hints["drds_audit_policy_setting"])
                check_type(argname="argument drds_audit_ti_enabled", value=drds_audit_ti_enabled, expected_type=type_hints["drds_audit_ti_enabled"])
                check_type(argname="argument drds_audit_ttl", value=drds_audit_ttl, expected_type=type_hints["drds_audit_ttl"])
                check_type(argname="argument drds_sync_enabled", value=drds_sync_enabled, expected_type=type_hints["drds_sync_enabled"])
                check_type(argname="argument drds_sync_ttl", value=drds_sync_ttl, expected_type=type_hints["drds_sync_ttl"])
                check_type(argname="argument k8_s_audit_collection_policy", value=k8_s_audit_collection_policy, expected_type=type_hints["k8_s_audit_collection_policy"])
                check_type(argname="argument k8_s_audit_enabled", value=k8_s_audit_enabled, expected_type=type_hints["k8_s_audit_enabled"])
                check_type(argname="argument k8_s_audit_policy_setting", value=k8_s_audit_policy_setting, expected_type=type_hints["k8_s_audit_policy_setting"])
                check_type(argname="argument k8_s_audit_ti_enabled", value=k8_s_audit_ti_enabled, expected_type=type_hints["k8_s_audit_ti_enabled"])
                check_type(argname="argument k8_s_audit_ttl", value=k8_s_audit_ttl, expected_type=type_hints["k8_s_audit_ttl"])
                check_type(argname="argument k8_s_event_collection_policy", value=k8_s_event_collection_policy, expected_type=type_hints["k8_s_event_collection_policy"])
                check_type(argname="argument k8_s_event_enabled", value=k8_s_event_enabled, expected_type=type_hints["k8_s_event_enabled"])
                check_type(argname="argument k8_s_event_policy_setting", value=k8_s_event_policy_setting, expected_type=type_hints["k8_s_event_policy_setting"])
                check_type(argname="argument k8_s_event_ti_enabled", value=k8_s_event_ti_enabled, expected_type=type_hints["k8_s_event_ti_enabled"])
                check_type(argname="argument k8_s_event_ttl", value=k8_s_event_ttl, expected_type=type_hints["k8_s_event_ttl"])
                check_type(argname="argument k8_s_ingress_collection_policy", value=k8_s_ingress_collection_policy, expected_type=type_hints["k8_s_ingress_collection_policy"])
                check_type(argname="argument k8_s_ingress_enabled", value=k8_s_ingress_enabled, expected_type=type_hints["k8_s_ingress_enabled"])
                check_type(argname="argument k8_s_ingress_policy_setting", value=k8_s_ingress_policy_setting, expected_type=type_hints["k8_s_ingress_policy_setting"])
                check_type(argname="argument k8_s_ingress_ti_enabled", value=k8_s_ingress_ti_enabled, expected_type=type_hints["k8_s_ingress_ti_enabled"])
                check_type(argname="argument k8_s_ingress_ttl", value=k8_s_ingress_ttl, expected_type=type_hints["k8_s_ingress_ttl"])
                check_type(argname="argument nas_audit_collection_policy", value=nas_audit_collection_policy, expected_type=type_hints["nas_audit_collection_policy"])
                check_type(argname="argument nas_audit_policy_setting", value=nas_audit_policy_setting, expected_type=type_hints["nas_audit_policy_setting"])
                check_type(argname="argument nas_enabled", value=nas_enabled, expected_type=type_hints["nas_enabled"])
                check_type(argname="argument nas_ti_enabled", value=nas_ti_enabled, expected_type=type_hints["nas_ti_enabled"])
                check_type(argname="argument nas_ttl", value=nas_ttl, expected_type=type_hints["nas_ttl"])
                check_type(argname="argument oss_access_collection_policy", value=oss_access_collection_policy, expected_type=type_hints["oss_access_collection_policy"])
                check_type(argname="argument oss_access_enabled", value=oss_access_enabled, expected_type=type_hints["oss_access_enabled"])
                check_type(argname="argument oss_access_policy_setting", value=oss_access_policy_setting, expected_type=type_hints["oss_access_policy_setting"])
                check_type(argname="argument oss_access_ti_enabled", value=oss_access_ti_enabled, expected_type=type_hints["oss_access_ti_enabled"])
                check_type(argname="argument oss_access_ttl", value=oss_access_ttl, expected_type=type_hints["oss_access_ttl"])
                check_type(argname="argument oss_metering_collection_policy", value=oss_metering_collection_policy, expected_type=type_hints["oss_metering_collection_policy"])
                check_type(argname="argument oss_metering_enabled", value=oss_metering_enabled, expected_type=type_hints["oss_metering_enabled"])
                check_type(argname="argument oss_metering_policy_setting", value=oss_metering_policy_setting, expected_type=type_hints["oss_metering_policy_setting"])
                check_type(argname="argument oss_metering_ti_enabled", value=oss_metering_ti_enabled, expected_type=type_hints["oss_metering_ti_enabled"])
                check_type(argname="argument oss_metering_ttl", value=oss_metering_ttl, expected_type=type_hints["oss_metering_ttl"])
                check_type(argname="argument oss_sync_enabled", value=oss_sync_enabled, expected_type=type_hints["oss_sync_enabled"])
                check_type(argname="argument oss_sync_ttl", value=oss_sync_ttl, expected_type=type_hints["oss_sync_ttl"])
                check_type(argname="argument polardb_audit_collection_policy", value=polardb_audit_collection_policy, expected_type=type_hints["polardb_audit_collection_policy"])
                check_type(argname="argument polardb_audit_policy_setting", value=polardb_audit_policy_setting, expected_type=type_hints["polardb_audit_policy_setting"])
                check_type(argname="argument polardb_enabled", value=polardb_enabled, expected_type=type_hints["polardb_enabled"])
                check_type(argname="argument polardb_perf_collection_policy", value=polardb_perf_collection_policy, expected_type=type_hints["polardb_perf_collection_policy"])
                check_type(argname="argument polardb_perf_enabled", value=polardb_perf_enabled, expected_type=type_hints["polardb_perf_enabled"])
                check_type(argname="argument polardb_perf_policy_setting", value=polardb_perf_policy_setting, expected_type=type_hints["polardb_perf_policy_setting"])
                check_type(argname="argument polardb_perf_ti_enabled", value=polardb_perf_ti_enabled, expected_type=type_hints["polardb_perf_ti_enabled"])
                check_type(argname="argument polardb_perf_ttl", value=polardb_perf_ttl, expected_type=type_hints["polardb_perf_ttl"])
                check_type(argname="argument polardb_slow_collection_policy", value=polardb_slow_collection_policy, expected_type=type_hints["polardb_slow_collection_policy"])
                check_type(argname="argument polardb_slow_enabled", value=polardb_slow_enabled, expected_type=type_hints["polardb_slow_enabled"])
                check_type(argname="argument polardb_slow_policy_setting", value=polardb_slow_policy_setting, expected_type=type_hints["polardb_slow_policy_setting"])
                check_type(argname="argument polardb_slow_ti_enabled", value=polardb_slow_ti_enabled, expected_type=type_hints["polardb_slow_ti_enabled"])
                check_type(argname="argument polardb_slow_ttl", value=polardb_slow_ttl, expected_type=type_hints["polardb_slow_ttl"])
                check_type(argname="argument polardb_ti_enabled", value=polardb_ti_enabled, expected_type=type_hints["polardb_ti_enabled"])
                check_type(argname="argument polardb_ttl", value=polardb_ttl, expected_type=type_hints["polardb_ttl"])
                check_type(argname="argument rds_audit_collection_policy", value=rds_audit_collection_policy, expected_type=type_hints["rds_audit_collection_policy"])
                check_type(argname="argument rds_audit_policy_setting", value=rds_audit_policy_setting, expected_type=type_hints["rds_audit_policy_setting"])
                check_type(argname="argument rds_enabled", value=rds_enabled, expected_type=type_hints["rds_enabled"])
                check_type(argname="argument rds_perf_collection_policy", value=rds_perf_collection_policy, expected_type=type_hints["rds_perf_collection_policy"])
                check_type(argname="argument rds_perf_enabled", value=rds_perf_enabled, expected_type=type_hints["rds_perf_enabled"])
                check_type(argname="argument rds_perf_policy_setting", value=rds_perf_policy_setting, expected_type=type_hints["rds_perf_policy_setting"])
                check_type(argname="argument rds_perf_ti_enabled", value=rds_perf_ti_enabled, expected_type=type_hints["rds_perf_ti_enabled"])
                check_type(argname="argument rds_perf_ttl", value=rds_perf_ttl, expected_type=type_hints["rds_perf_ttl"])
                check_type(argname="argument rds_slow_collection_policy", value=rds_slow_collection_policy, expected_type=type_hints["rds_slow_collection_policy"])
                check_type(argname="argument rds_slow_enabled", value=rds_slow_enabled, expected_type=type_hints["rds_slow_enabled"])
                check_type(argname="argument rds_slow_policy_setting", value=rds_slow_policy_setting, expected_type=type_hints["rds_slow_policy_setting"])
                check_type(argname="argument rds_slow_ti_enabled", value=rds_slow_ti_enabled, expected_type=type_hints["rds_slow_ti_enabled"])
                check_type(argname="argument rds_slow_ttl", value=rds_slow_ttl, expected_type=type_hints["rds_slow_ttl"])
                check_type(argname="argument rds_ti_enabled", value=rds_ti_enabled, expected_type=type_hints["rds_ti_enabled"])
                check_type(argname="argument rds_ttl", value=rds_ttl, expected_type=type_hints["rds_ttl"])
                check_type(argname="argument redis_audit_collection_policy", value=redis_audit_collection_policy, expected_type=type_hints["redis_audit_collection_policy"])
                check_type(argname="argument redis_audit_enabled", value=redis_audit_enabled, expected_type=type_hints["redis_audit_enabled"])
                check_type(argname="argument redis_audit_policy_setting", value=redis_audit_policy_setting, expected_type=type_hints["redis_audit_policy_setting"])
                check_type(argname="argument redis_audit_ti_enabled", value=redis_audit_ti_enabled, expected_type=type_hints["redis_audit_ti_enabled"])
                check_type(argname="argument redis_audit_ttl", value=redis_audit_ttl, expected_type=type_hints["redis_audit_ttl"])
                check_type(argname="argument redis_sync_enabled", value=redis_sync_enabled, expected_type=type_hints["redis_sync_enabled"])
                check_type(argname="argument redis_sync_ttl", value=redis_sync_ttl, expected_type=type_hints["redis_sync_ttl"])
                check_type(argname="argument sas_crack_enabled", value=sas_crack_enabled, expected_type=type_hints["sas_crack_enabled"])
                check_type(argname="argument sas_dns_enabled", value=sas_dns_enabled, expected_type=type_hints["sas_dns_enabled"])
                check_type(argname="argument sas_http_enabled", value=sas_http_enabled, expected_type=type_hints["sas_http_enabled"])
                check_type(argname="argument sas_local_dns_enabled", value=sas_local_dns_enabled, expected_type=type_hints["sas_local_dns_enabled"])
                check_type(argname="argument sas_login_enabled", value=sas_login_enabled, expected_type=type_hints["sas_login_enabled"])
                check_type(argname="argument sas_network_enabled", value=sas_network_enabled, expected_type=type_hints["sas_network_enabled"])
                check_type(argname="argument sas_process_enabled", value=sas_process_enabled, expected_type=type_hints["sas_process_enabled"])
                check_type(argname="argument sas_security_alert_enabled", value=sas_security_alert_enabled, expected_type=type_hints["sas_security_alert_enabled"])
                check_type(argname="argument sas_security_hc_enabled", value=sas_security_hc_enabled, expected_type=type_hints["sas_security_hc_enabled"])
                check_type(argname="argument sas_security_vul_enabled", value=sas_security_vul_enabled, expected_type=type_hints["sas_security_vul_enabled"])
                check_type(argname="argument sas_session_enabled", value=sas_session_enabled, expected_type=type_hints["sas_session_enabled"])
                check_type(argname="argument sas_snapshot_account_enabled", value=sas_snapshot_account_enabled, expected_type=type_hints["sas_snapshot_account_enabled"])
                check_type(argname="argument sas_snapshot_port_enabled", value=sas_snapshot_port_enabled, expected_type=type_hints["sas_snapshot_port_enabled"])
                check_type(argname="argument sas_snapshot_process_enabled", value=sas_snapshot_process_enabled, expected_type=type_hints["sas_snapshot_process_enabled"])
                check_type(argname="argument sas_ti_enabled", value=sas_ti_enabled, expected_type=type_hints["sas_ti_enabled"])
                check_type(argname="argument sas_ttl", value=sas_ttl, expected_type=type_hints["sas_ttl"])
                check_type(argname="argument slb_access_collection_policy", value=slb_access_collection_policy, expected_type=type_hints["slb_access_collection_policy"])
                check_type(argname="argument slb_access_enabled", value=slb_access_enabled, expected_type=type_hints["slb_access_enabled"])
                check_type(argname="argument slb_access_policy_setting", value=slb_access_policy_setting, expected_type=type_hints["slb_access_policy_setting"])
                check_type(argname="argument slb_access_ti_enabled", value=slb_access_ti_enabled, expected_type=type_hints["slb_access_ti_enabled"])
                check_type(argname="argument slb_access_ttl", value=slb_access_ttl, expected_type=type_hints["slb_access_ttl"])
                check_type(argname="argument slb_sync_enabled", value=slb_sync_enabled, expected_type=type_hints["slb_sync_enabled"])
                check_type(argname="argument slb_sync_ttl", value=slb_sync_ttl, expected_type=type_hints["slb_sync_ttl"])
                check_type(argname="argument waf_access_collection_policy", value=waf_access_collection_policy, expected_type=type_hints["waf_access_collection_policy"])
                check_type(argname="argument waf_access_policy_setting", value=waf_access_policy_setting, expected_type=type_hints["waf_access_policy_setting"])
                check_type(argname="argument waf_enabled", value=waf_enabled, expected_type=type_hints["waf_enabled"])
                check_type(argname="argument waf_ti_enabled", value=waf_ti_enabled, expected_type=type_hints["waf_ti_enabled"])
                check_type(argname="argument waf_ttl", value=waf_ttl, expected_type=type_hints["waf_ttl"])
            self._values: typing.Dict[str, typing.Any] = {}
            if actiontrail_enabled is not None:
                self._values["actiontrail_enabled"] = actiontrail_enabled
            if actiontrail_openapi_collection_policy is not None:
                self._values["actiontrail_openapi_collection_policy"] = actiontrail_openapi_collection_policy
            if actiontrail_openapi_policy_setting is not None:
                self._values["actiontrail_openapi_policy_setting"] = actiontrail_openapi_policy_setting
            if actiontrail_ti_enabled is not None:
                self._values["actiontrail_ti_enabled"] = actiontrail_ti_enabled
            if actiontrail_ttl is not None:
                self._values["actiontrail_ttl"] = actiontrail_ttl
            if apigateway_access_collection_policy is not None:
                self._values["apigateway_access_collection_policy"] = apigateway_access_collection_policy
            if apigateway_access_policy_setting is not None:
                self._values["apigateway_access_policy_setting"] = apigateway_access_policy_setting
            if apigateway_enabled is not None:
                self._values["apigateway_enabled"] = apigateway_enabled
            if apigateway_ti_enabled is not None:
                self._values["apigateway_ti_enabled"] = apigateway_ti_enabled
            if apigateway_ttl is not None:
                self._values["apigateway_ttl"] = apigateway_ttl
            if appconnect_enabled is not None:
                self._values["appconnect_enabled"] = appconnect_enabled
            if appconnect_op_collection_policy is not None:
                self._values["appconnect_op_collection_policy"] = appconnect_op_collection_policy
            if appconnect_op_policy_setting is not None:
                self._values["appconnect_op_policy_setting"] = appconnect_op_policy_setting
            if appconnect_ti_enabled is not None:
                self._values["appconnect_ti_enabled"] = appconnect_ti_enabled
            if appconnect_ttl is not None:
                self._values["appconnect_ttl"] = appconnect_ttl
            if bastion_audit_collection_policy is not None:
                self._values["bastion_audit_collection_policy"] = bastion_audit_collection_policy
            if bastion_audit_policy_setting is not None:
                self._values["bastion_audit_policy_setting"] = bastion_audit_policy_setting
            if bastion_enabled is not None:
                self._values["bastion_enabled"] = bastion_enabled
            if bastion_ti_enabled is not None:
                self._values["bastion_ti_enabled"] = bastion_ti_enabled
            if bastion_ttl is not None:
                self._values["bastion_ttl"] = bastion_ttl
            if cloudfirewall_access_collection_policy is not None:
                self._values["cloudfirewall_access_collection_policy"] = cloudfirewall_access_collection_policy
            if cloudfirewall_access_policy_setting is not None:
                self._values["cloudfirewall_access_policy_setting"] = cloudfirewall_access_policy_setting
            if cloudfirewall_enabled is not None:
                self._values["cloudfirewall_enabled"] = cloudfirewall_enabled
            if cloudfirewall_ti_enabled is not None:
                self._values["cloudfirewall_ti_enabled"] = cloudfirewall_ti_enabled
            if cloudfirewall_ttl is not None:
                self._values["cloudfirewall_ttl"] = cloudfirewall_ttl
            if cps_callback_collection_policy is not None:
                self._values["cps_callback_collection_policy"] = cps_callback_collection_policy
            if cps_callback_policy_setting is not None:
                self._values["cps_callback_policy_setting"] = cps_callback_policy_setting
            if cps_enabled is not None:
                self._values["cps_enabled"] = cps_enabled
            if cps_ti_enabled is not None:
                self._values["cps_ti_enabled"] = cps_ti_enabled
            if cps_ttl is not None:
                self._values["cps_ttl"] = cps_ttl
            if ddos_coo_access_collection_policy is not None:
                self._values["ddos_coo_access_collection_policy"] = ddos_coo_access_collection_policy
            if ddos_coo_access_enabled is not None:
                self._values["ddos_coo_access_enabled"] = ddos_coo_access_enabled
            if ddos_coo_access_policy_setting is not None:
                self._values["ddos_coo_access_policy_setting"] = ddos_coo_access_policy_setting
            if ddos_coo_access_ti_enabled is not None:
                self._values["ddos_coo_access_ti_enabled"] = ddos_coo_access_ti_enabled
            if ddos_coo_access_ttl is not None:
                self._values["ddos_coo_access_ttl"] = ddos_coo_access_ttl
            if drds_audit_collection_policy is not None:
                self._values["drds_audit_collection_policy"] = drds_audit_collection_policy
            if drds_audit_enabled is not None:
                self._values["drds_audit_enabled"] = drds_audit_enabled
            if drds_audit_policy_setting is not None:
                self._values["drds_audit_policy_setting"] = drds_audit_policy_setting
            if drds_audit_ti_enabled is not None:
                self._values["drds_audit_ti_enabled"] = drds_audit_ti_enabled
            if drds_audit_ttl is not None:
                self._values["drds_audit_ttl"] = drds_audit_ttl
            if drds_sync_enabled is not None:
                self._values["drds_sync_enabled"] = drds_sync_enabled
            if drds_sync_ttl is not None:
                self._values["drds_sync_ttl"] = drds_sync_ttl
            if k8_s_audit_collection_policy is not None:
                self._values["k8_s_audit_collection_policy"] = k8_s_audit_collection_policy
            if k8_s_audit_enabled is not None:
                self._values["k8_s_audit_enabled"] = k8_s_audit_enabled
            if k8_s_audit_policy_setting is not None:
                self._values["k8_s_audit_policy_setting"] = k8_s_audit_policy_setting
            if k8_s_audit_ti_enabled is not None:
                self._values["k8_s_audit_ti_enabled"] = k8_s_audit_ti_enabled
            if k8_s_audit_ttl is not None:
                self._values["k8_s_audit_ttl"] = k8_s_audit_ttl
            if k8_s_event_collection_policy is not None:
                self._values["k8_s_event_collection_policy"] = k8_s_event_collection_policy
            if k8_s_event_enabled is not None:
                self._values["k8_s_event_enabled"] = k8_s_event_enabled
            if k8_s_event_policy_setting is not None:
                self._values["k8_s_event_policy_setting"] = k8_s_event_policy_setting
            if k8_s_event_ti_enabled is not None:
                self._values["k8_s_event_ti_enabled"] = k8_s_event_ti_enabled
            if k8_s_event_ttl is not None:
                self._values["k8_s_event_ttl"] = k8_s_event_ttl
            if k8_s_ingress_collection_policy is not None:
                self._values["k8_s_ingress_collection_policy"] = k8_s_ingress_collection_policy
            if k8_s_ingress_enabled is not None:
                self._values["k8_s_ingress_enabled"] = k8_s_ingress_enabled
            if k8_s_ingress_policy_setting is not None:
                self._values["k8_s_ingress_policy_setting"] = k8_s_ingress_policy_setting
            if k8_s_ingress_ti_enabled is not None:
                self._values["k8_s_ingress_ti_enabled"] = k8_s_ingress_ti_enabled
            if k8_s_ingress_ttl is not None:
                self._values["k8_s_ingress_ttl"] = k8_s_ingress_ttl
            if nas_audit_collection_policy is not None:
                self._values["nas_audit_collection_policy"] = nas_audit_collection_policy
            if nas_audit_policy_setting is not None:
                self._values["nas_audit_policy_setting"] = nas_audit_policy_setting
            if nas_enabled is not None:
                self._values["nas_enabled"] = nas_enabled
            if nas_ti_enabled is not None:
                self._values["nas_ti_enabled"] = nas_ti_enabled
            if nas_ttl is not None:
                self._values["nas_ttl"] = nas_ttl
            if oss_access_collection_policy is not None:
                self._values["oss_access_collection_policy"] = oss_access_collection_policy
            if oss_access_enabled is not None:
                self._values["oss_access_enabled"] = oss_access_enabled
            if oss_access_policy_setting is not None:
                self._values["oss_access_policy_setting"] = oss_access_policy_setting
            if oss_access_ti_enabled is not None:
                self._values["oss_access_ti_enabled"] = oss_access_ti_enabled
            if oss_access_ttl is not None:
                self._values["oss_access_ttl"] = oss_access_ttl
            if oss_metering_collection_policy is not None:
                self._values["oss_metering_collection_policy"] = oss_metering_collection_policy
            if oss_metering_enabled is not None:
                self._values["oss_metering_enabled"] = oss_metering_enabled
            if oss_metering_policy_setting is not None:
                self._values["oss_metering_policy_setting"] = oss_metering_policy_setting
            if oss_metering_ti_enabled is not None:
                self._values["oss_metering_ti_enabled"] = oss_metering_ti_enabled
            if oss_metering_ttl is not None:
                self._values["oss_metering_ttl"] = oss_metering_ttl
            if oss_sync_enabled is not None:
                self._values["oss_sync_enabled"] = oss_sync_enabled
            if oss_sync_ttl is not None:
                self._values["oss_sync_ttl"] = oss_sync_ttl
            if polardb_audit_collection_policy is not None:
                self._values["polardb_audit_collection_policy"] = polardb_audit_collection_policy
            if polardb_audit_policy_setting is not None:
                self._values["polardb_audit_policy_setting"] = polardb_audit_policy_setting
            if polardb_enabled is not None:
                self._values["polardb_enabled"] = polardb_enabled
            if polardb_perf_collection_policy is not None:
                self._values["polardb_perf_collection_policy"] = polardb_perf_collection_policy
            if polardb_perf_enabled is not None:
                self._values["polardb_perf_enabled"] = polardb_perf_enabled
            if polardb_perf_policy_setting is not None:
                self._values["polardb_perf_policy_setting"] = polardb_perf_policy_setting
            if polardb_perf_ti_enabled is not None:
                self._values["polardb_perf_ti_enabled"] = polardb_perf_ti_enabled
            if polardb_perf_ttl is not None:
                self._values["polardb_perf_ttl"] = polardb_perf_ttl
            if polardb_slow_collection_policy is not None:
                self._values["polardb_slow_collection_policy"] = polardb_slow_collection_policy
            if polardb_slow_enabled is not None:
                self._values["polardb_slow_enabled"] = polardb_slow_enabled
            if polardb_slow_policy_setting is not None:
                self._values["polardb_slow_policy_setting"] = polardb_slow_policy_setting
            if polardb_slow_ti_enabled is not None:
                self._values["polardb_slow_ti_enabled"] = polardb_slow_ti_enabled
            if polardb_slow_ttl is not None:
                self._values["polardb_slow_ttl"] = polardb_slow_ttl
            if polardb_ti_enabled is not None:
                self._values["polardb_ti_enabled"] = polardb_ti_enabled
            if polardb_ttl is not None:
                self._values["polardb_ttl"] = polardb_ttl
            if rds_audit_collection_policy is not None:
                self._values["rds_audit_collection_policy"] = rds_audit_collection_policy
            if rds_audit_policy_setting is not None:
                self._values["rds_audit_policy_setting"] = rds_audit_policy_setting
            if rds_enabled is not None:
                self._values["rds_enabled"] = rds_enabled
            if rds_perf_collection_policy is not None:
                self._values["rds_perf_collection_policy"] = rds_perf_collection_policy
            if rds_perf_enabled is not None:
                self._values["rds_perf_enabled"] = rds_perf_enabled
            if rds_perf_policy_setting is not None:
                self._values["rds_perf_policy_setting"] = rds_perf_policy_setting
            if rds_perf_ti_enabled is not None:
                self._values["rds_perf_ti_enabled"] = rds_perf_ti_enabled
            if rds_perf_ttl is not None:
                self._values["rds_perf_ttl"] = rds_perf_ttl
            if rds_slow_collection_policy is not None:
                self._values["rds_slow_collection_policy"] = rds_slow_collection_policy
            if rds_slow_enabled is not None:
                self._values["rds_slow_enabled"] = rds_slow_enabled
            if rds_slow_policy_setting is not None:
                self._values["rds_slow_policy_setting"] = rds_slow_policy_setting
            if rds_slow_ti_enabled is not None:
                self._values["rds_slow_ti_enabled"] = rds_slow_ti_enabled
            if rds_slow_ttl is not None:
                self._values["rds_slow_ttl"] = rds_slow_ttl
            if rds_ti_enabled is not None:
                self._values["rds_ti_enabled"] = rds_ti_enabled
            if rds_ttl is not None:
                self._values["rds_ttl"] = rds_ttl
            if redis_audit_collection_policy is not None:
                self._values["redis_audit_collection_policy"] = redis_audit_collection_policy
            if redis_audit_enabled is not None:
                self._values["redis_audit_enabled"] = redis_audit_enabled
            if redis_audit_policy_setting is not None:
                self._values["redis_audit_policy_setting"] = redis_audit_policy_setting
            if redis_audit_ti_enabled is not None:
                self._values["redis_audit_ti_enabled"] = redis_audit_ti_enabled
            if redis_audit_ttl is not None:
                self._values["redis_audit_ttl"] = redis_audit_ttl
            if redis_sync_enabled is not None:
                self._values["redis_sync_enabled"] = redis_sync_enabled
            if redis_sync_ttl is not None:
                self._values["redis_sync_ttl"] = redis_sync_ttl
            if sas_crack_enabled is not None:
                self._values["sas_crack_enabled"] = sas_crack_enabled
            if sas_dns_enabled is not None:
                self._values["sas_dns_enabled"] = sas_dns_enabled
            if sas_http_enabled is not None:
                self._values["sas_http_enabled"] = sas_http_enabled
            if sas_local_dns_enabled is not None:
                self._values["sas_local_dns_enabled"] = sas_local_dns_enabled
            if sas_login_enabled is not None:
                self._values["sas_login_enabled"] = sas_login_enabled
            if sas_network_enabled is not None:
                self._values["sas_network_enabled"] = sas_network_enabled
            if sas_process_enabled is not None:
                self._values["sas_process_enabled"] = sas_process_enabled
            if sas_security_alert_enabled is not None:
                self._values["sas_security_alert_enabled"] = sas_security_alert_enabled
            if sas_security_hc_enabled is not None:
                self._values["sas_security_hc_enabled"] = sas_security_hc_enabled
            if sas_security_vul_enabled is not None:
                self._values["sas_security_vul_enabled"] = sas_security_vul_enabled
            if sas_session_enabled is not None:
                self._values["sas_session_enabled"] = sas_session_enabled
            if sas_snapshot_account_enabled is not None:
                self._values["sas_snapshot_account_enabled"] = sas_snapshot_account_enabled
            if sas_snapshot_port_enabled is not None:
                self._values["sas_snapshot_port_enabled"] = sas_snapshot_port_enabled
            if sas_snapshot_process_enabled is not None:
                self._values["sas_snapshot_process_enabled"] = sas_snapshot_process_enabled
            if sas_ti_enabled is not None:
                self._values["sas_ti_enabled"] = sas_ti_enabled
            if sas_ttl is not None:
                self._values["sas_ttl"] = sas_ttl
            if slb_access_collection_policy is not None:
                self._values["slb_access_collection_policy"] = slb_access_collection_policy
            if slb_access_enabled is not None:
                self._values["slb_access_enabled"] = slb_access_enabled
            if slb_access_policy_setting is not None:
                self._values["slb_access_policy_setting"] = slb_access_policy_setting
            if slb_access_ti_enabled is not None:
                self._values["slb_access_ti_enabled"] = slb_access_ti_enabled
            if slb_access_ttl is not None:
                self._values["slb_access_ttl"] = slb_access_ttl
            if slb_sync_enabled is not None:
                self._values["slb_sync_enabled"] = slb_sync_enabled
            if slb_sync_ttl is not None:
                self._values["slb_sync_ttl"] = slb_sync_ttl
            if waf_access_collection_policy is not None:
                self._values["waf_access_collection_policy"] = waf_access_collection_policy
            if waf_access_policy_setting is not None:
                self._values["waf_access_policy_setting"] = waf_access_policy_setting
            if waf_enabled is not None:
                self._values["waf_enabled"] = waf_enabled
            if waf_ti_enabled is not None:
                self._values["waf_ti_enabled"] = waf_ti_enabled
            if waf_ttl is not None:
                self._values["waf_ttl"] = waf_ttl

        @builtins.property
        def actiontrail_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: actiontrailEnabled: Notification type. Support Email, SMS, DingTalk. Default true.
            '''
            result = self._values.get("actiontrail_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def actiontrail_openapi_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: actiontrailOpenapiCollectionPolicy: Actiontrail openapi collection policy
            '''
            result = self._values.get("actiontrail_openapi_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def actiontrail_openapi_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: actiontrailOpenapiPolicySetting: Actiontrail openapi policy setting.
            '''
            result = self._values.get("actiontrail_openapi_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def actiontrail_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: actiontrailTiEnabled: Threat Intelligence of actiontrail.
            '''
            result = self._values.get("actiontrail_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def actiontrail_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: actiontrailTtl: Actiontrail action log TTL.
            '''
            result = self._values.get("actiontrail_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def apigateway_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: apigatewayAccessCollectionPolicy: Apigateway audit collection policy
            '''
            result = self._values.get("apigateway_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def apigateway_access_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: apigatewayAccessPolicySetting: Apigateway audit policy setting.
            '''
            result = self._values.get("apigateway_access_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def apigateway_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: apigatewayEnabled: API Gateway Log Switch. Default true.
            '''
            result = self._values.get("apigateway_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def apigateway_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: apigatewayTiEnabled: Threat Intelligence of Apigateway.
            '''
            result = self._values.get("apigateway_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def apigateway_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: apigatewayTtl: API Gateway ttl. Default 180.
            '''
            result = self._values.get("apigateway_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def appconnect_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: appconnectEnabled: Appconnect access log switch. Default false.
            '''
            result = self._values.get("appconnect_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def appconnect_op_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: appconnectOpCollectionPolicy: Appconnect audit collection policy
            '''
            result = self._values.get("appconnect_op_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def appconnect_op_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: appconnectOpPolicySetting: Appconnect audit policy setting.
            '''
            result = self._values.get("appconnect_op_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def appconnect_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: appconnectTiEnabled: Threat Intelligence of Appconnect.
            '''
            result = self._values.get("appconnect_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def appconnect_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: appconnectTtl: Appconnect log centralization ttl. Default 180.
            '''
            result = self._values.get("appconnect_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def bastion_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: bastionAuditCollectionPolicy: Bastion audit collection policy
            '''
            result = self._values.get("bastion_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def bastion_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: bastionAuditPolicySetting: Bastion audit policy setting.
            '''
            result = self._values.get("bastion_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def bastion_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: bastionEnabled: Fortress machine operation log switch.Default true.
            '''
            result = self._values.get("bastion_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def bastion_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: bastionTiEnabled: Threat Intelligence of Bastion.
            '''
            result = self._values.get("bastion_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def bastion_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: bastionTtl: Fort machine centralized ttl. Default 180.
            '''
            result = self._values.get("bastion_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cloudfirewall_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: cloudfirewallAccessCollectionPolicy: Cloud firewall audit collection policy
            '''
            result = self._values.get("cloudfirewall_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cloudfirewall_access_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: cloudfirewallAccessPolicySetting: Cloud firewall audit policy setting.
            '''
            result = self._values.get("cloudfirewall_access_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cloudfirewall_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: cloudfirewallEnabled: Cloud firewall log switch. Default true.
            '''
            result = self._values.get("cloudfirewall_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cloudfirewall_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: cloudfirewallTiEnabled: Threat Intelligence of Cloud firewall.
            '''
            result = self._values.get("cloudfirewall_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cloudfirewall_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: cloudfirewallTtl: Cloud firewall log centralized ttl. Default 180.
            '''
            result = self._values.get("cloudfirewall_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cps_callback_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: cpsCallbackCollectionPolicy: Mobile push collection policy
            '''
            result = self._values.get("cps_callback_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cps_callback_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: cpsCallbackPolicySetting: Mobile push policy setting.
            '''
            result = self._values.get("cps_callback_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cps_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: cpsEnabled: Mobile push log switch. Default true.
            '''
            result = self._values.get("cps_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cps_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: cpsTiEnabled: Threat Intelligence of mobile push.
            '''
            result = self._values.get("cps_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cps_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: cpsTtl: Mobile push ttl. Default 180.
            '''
            result = self._values.get("cps_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ddos_coo_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ddosCooAccessCollectionPolicy: Ddos audit collection policy
            '''
            result = self._values.get("ddos_coo_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ddos_coo_access_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: ddosCooAccessEnabled: Ddos access log switch. Default false.
            '''
            result = self._values.get("ddos_coo_access_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ddos_coo_access_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: ddosCooAccessPolicySetting: Ddos audit policy setting.
            '''
            result = self._values.get("ddos_coo_access_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ddos_coo_access_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: ddosCooAccessTiEnabled: Threat Intelligence of Ddos.
            '''
            result = self._values.get("ddos_coo_access_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ddos_coo_access_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: ddosCooAccessTtl: Ddos log centralization ttl. Default 180.
            '''
            result = self._values.get("ddos_coo_access_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def drds_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: drdsAuditCollectionPolicy: DRDS audit collection policy
            '''
            result = self._values.get("drds_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def drds_audit_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: drdsAuditEnabled: DRDS audit log switch. Default true.
            '''
            result = self._values.get("drds_audit_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def drds_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: drdsAuditPolicySetting: DRDS audit policy setting.
            '''
            result = self._values.get("drds_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def drds_audit_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: drdsAuditTiEnabled: Threat Intelligence of DRDS.
            '''
            result = self._values.get("drds_audit_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def drds_audit_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: drdsAuditTtl: DRDS log centralization ttl. Default 7.
            '''
            result = self._values.get("drds_audit_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def drds_sync_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: drdsSyncEnabled: DRDS sync to center switch. Default true.
            '''
            result = self._values.get("drds_sync_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def drds_sync_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: drdsSyncTtl: DRDS sync to center ttl. Default 180.
            '''
            result = self._values.get("drds_sync_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SAuditCollectionPolicy: K8s audit collection policy
            '''
            result = self._values.get("k8_s_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_audit_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SAuditEnabled: K8s access log switch. Default false.
            '''
            result = self._values.get("k8_s_audit_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SAuditPolicySetting: K8s audit policy setting.
            '''
            result = self._values.get("k8_s_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_audit_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SAuditTiEnabled: Threat Intelligence of K8s.
            '''
            result = self._values.get("k8_s_audit_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_audit_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SAuditTtl: K8s log centralization ttl. Default 180.
            '''
            result = self._values.get("k8_s_audit_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_event_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SEventCollectionPolicy: K8s event collection policy
            '''
            result = self._values.get("k8_s_event_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_event_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SEventEnabled: K8s event log switch. Default false.
            '''
            result = self._values.get("k8_s_event_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_event_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SEventPolicySetting: K8s event policy setting.
            '''
            result = self._values.get("k8_s_event_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_event_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SEventTiEnabled: Threat Intelligence of k8s event.
            '''
            result = self._values.get("k8_s_event_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_event_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SEventTtl: K8s event log centralization ttl. Default 180.
            '''
            result = self._values.get("k8_s_event_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_ingress_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SIngressCollectionPolicy: K8s Ingress collection policy
            '''
            result = self._values.get("k8_s_ingress_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_ingress_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SIngressEnabled: K8s Ingress log switch. Default false.
            '''
            result = self._values.get("k8_s_ingress_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_ingress_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SIngressPolicySetting: K8s Ingress policy setting.
            '''
            result = self._values.get("k8_s_ingress_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_ingress_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SIngressTiEnabled: Threat Intelligence of k8s Ingress.
            '''
            result = self._values.get("k8_s_ingress_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def k8_s_ingress_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: k8SIngressTtl: K8s Ingress log centralization ttl. Default 180.
            '''
            result = self._values.get("k8_s_ingress_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def nas_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: nasAuditCollectionPolicy: Nas audit collection policy
            '''
            result = self._values.get("nas_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def nas_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: nasAuditPolicySetting: Nas audit policy setting.
            '''
            result = self._values.get("nas_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def nas_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: nasEnabled: Nas log switch. Default true.
            '''
            result = self._values.get("nas_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def nas_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: nasTiEnabled: Threat Intelligence of Nas.
            '''
            result = self._values.get("nas_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def nas_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: nasTtl: Nas centralized ttl. Default 180.
            '''
            result = self._values.get("nas_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ossAccessCollectionPolicy: Oss access collection policy.
            '''
            result = self._values.get("oss_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_access_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: ossAccessEnabled: Access log switch of OSS. Default true.
            '''
            result = self._values.get("oss_access_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_access_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: ossAccessPolicySetting: Oss access policy setting.
            '''
            result = self._values.get("oss_access_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_access_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: ossAccessTiEnabled: Threat Intelligence of oss.
            '''
            result = self._values.get("oss_access_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_access_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: ossAccessTtl: Access log TTL of OSS. Default 180.
            '''
            result = self._values.get("oss_access_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_metering_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ossMeteringCollectionPolicy: Oss metering collection policy.
            '''
            result = self._values.get("oss_metering_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_metering_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: ossMeteringEnabled: OSS metering log switch.Default true.
            '''
            result = self._values.get("oss_metering_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_metering_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: ossMeteringPolicySetting: Oss metering policy setting.
            '''
            result = self._values.get("oss_metering_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_metering_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: ossMeteringTiEnabled: Threat Intelligence of oss metering.
            '''
            result = self._values.get("oss_metering_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_metering_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: ossMeteringTtl: OSS measurement log TTL. Default 180.
            '''
            result = self._values.get("oss_metering_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_sync_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: ossSyncEnabled: OSS synchronization to central configuration switch. Default true.
            '''
            result = self._values.get("oss_sync_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_sync_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: ossSyncTtl: OSS synchronization to central TTL. Default 180.
            '''
            result = self._values.get("oss_sync_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbAuditCollectionPolicy: POLARDB audit collection policy
            '''
            result = self._values.get("polardb_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbAuditPolicySetting: POLARDB audit policy setting.
            '''
            result = self._values.get("polardb_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbEnabled: POLARDB audit log switch. Default true.
            '''
            result = self._values.get("polardb_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_perf_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbPerfCollectionPolicy: POLARDB perf collection policy.
            '''
            result = self._values.get("polardb_perf_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_perf_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbPerfEnabled: POLARDB perf log switch. Default false.
            '''
            result = self._values.get("polardb_perf_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_perf_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbPerfPolicySetting: POLARDB perf policy setting.
            '''
            result = self._values.get("polardb_perf_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_perf_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbPerfTiEnabled: Threat Intelligence of POLARDB perf log.
            '''
            result = self._values.get("polardb_perf_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_perf_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbPerfTtl: POLARDB perf log centralization ttl. Default 180.
            '''
            result = self._values.get("polardb_perf_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_slow_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbSlowCollectionPolicy: POLARDB slow collection policy.
            '''
            result = self._values.get("polardb_slow_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_slow_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbSlowEnabled: POLARDB slow log switch. Default false.
            '''
            result = self._values.get("polardb_slow_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_slow_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbSlowPolicySetting: POLARDB slow policy setting.
            '''
            result = self._values.get("polardb_slow_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_slow_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbSlowTiEnabled: Threat Intelligence of POLARDB slow log.
            '''
            result = self._values.get("polardb_slow_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_slow_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbSlowTtl: POLARDB slow log centralization ttl. Default 180.
            '''
            result = self._values.get("polardb_slow_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbTiEnabled: Threat Intelligence of POLARDB.
            '''
            result = self._values.get("polardb_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def polardb_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: polardbTtl: POLARDB log centralization ttl. Default 180.
            '''
            result = self._values.get("polardb_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsAuditCollectionPolicy: Rds audit collection policy
            '''
            result = self._values.get("rds_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsAuditPolicySetting: Rds audit policy setting.
            '''
            result = self._values.get("rds_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsEnabled: RDS audit log switch. Default true.
            '''
            result = self._values.get("rds_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_perf_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsPerfCollectionPolicy: Rds perf collection policy.
            '''
            result = self._values.get("rds_perf_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_perf_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsPerfEnabled: RDS perf log switch. Default false.
            '''
            result = self._values.get("rds_perf_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_perf_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsPerfPolicySetting: Rds perf policy setting.
            '''
            result = self._values.get("rds_perf_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_perf_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsPerfTiEnabled: Threat Intelligence of rds perf log.
            '''
            result = self._values.get("rds_perf_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_perf_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsPerfTtl: Rds perf log centralization ttl. Default 180.
            '''
            result = self._values.get("rds_perf_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_slow_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsSlowCollectionPolicy: Rds slow collection policy.
            '''
            result = self._values.get("rds_slow_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_slow_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsSlowEnabled: RDS slow log switch. Default false.
            '''
            result = self._values.get("rds_slow_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_slow_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsSlowPolicySetting: Rds slow policy setting.
            '''
            result = self._values.get("rds_slow_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_slow_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsSlowTiEnabled: Threat Intelligence of rds slow log.
            '''
            result = self._values.get("rds_slow_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_slow_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsSlowTtl: Rds slow log centralization ttl. Default 180.
            '''
            result = self._values.get("rds_slow_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsTiEnabled: Threat Intelligence of rds.
            '''
            result = self._values.get("rds_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def rds_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: rdsTtl: Rds log centralization ttl. Default 180.
            '''
            result = self._values.get("rds_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def redis_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: redisAuditCollectionPolicy: Redis audit collection policy
            '''
            result = self._values.get("redis_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def redis_audit_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: redisAuditEnabled: Redis audit log switch. Default true.
            '''
            result = self._values.get("redis_audit_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def redis_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: redisAuditPolicySetting: Redis audit policy setting.
            '''
            result = self._values.get("redis_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def redis_audit_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: redisAuditTiEnabled: Threat Intelligence of Redis audit.
            '''
            result = self._values.get("redis_audit_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def redis_audit_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: redisAuditTtl: Redis audit log centralization ttl. Default 7.
            '''
            result = self._values.get("redis_audit_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def redis_sync_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: redisSyncEnabled: Redis sync to center switch. Default true.
            '''
            result = self._values.get("redis_sync_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def redis_sync_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: redisSyncTtl: Redis sync to center switch. Default 180.
            '''
            result = self._values.get("redis_sync_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_crack_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasCrackEnabled: Cloud Security Center Brute Force Log Switch. Default false.
            '''
            result = self._values.get("sas_crack_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_dns_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasDnsEnabled: Cloud Security Center DNS resolution log switch. Default false.
            '''
            result = self._values.get("sas_dns_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_http_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasHttpEnabled: Cloud Security Center WEB access log switch. Default false.
            '''
            result = self._values.get("sas_http_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_local_dns_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasLocalDnsEnabled: Cloud security center local DNS log switch. Default false.
            '''
            result = self._values.get("sas_local_dns_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_login_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasLoginEnabled: Cloud security center login flow log switch. Default false.
            '''
            result = self._values.get("sas_login_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_network_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasNetworkEnabled: Cloud security center network connection log switch. Default false.
            '''
            result = self._values.get("sas_network_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_process_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasProcessEnabled: Cloud Security Center process startup log switch. Default false.
            '''
            result = self._values.get("sas_process_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_security_alert_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasSecurityAlertEnabled: Cloud Security Center Security Alarm Log Switch .Default false.
            '''
            result = self._values.get("sas_security_alert_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_security_hc_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasSecurityHcEnabled: Cloud Security Center Baseline Log Switch. Default false.
            '''
            result = self._values.get("sas_security_hc_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_security_vul_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasSecurityVulEnabled: Cloud Security Center Vulnerability Log Switch.Default false.
            '''
            result = self._values.get("sas_security_vul_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_session_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasSessionEnabled: Cloud security center network session log switch.Default false.
            '''
            result = self._values.get("sas_session_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_snapshot_account_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasSnapshotAccountEnabled: Cloud Security Center account snapshot switch. Default false.
            '''
            result = self._values.get("sas_snapshot_account_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_snapshot_port_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasSnapshotPortEnabled: Cloud Security Center Port Snapshot Switch. Default false.
            '''
            result = self._values.get("sas_snapshot_port_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_snapshot_process_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasSnapshotProcessEnabled: Cloud Security Center process snapshot switch. Default false.
            '''
            result = self._values.get("sas_snapshot_process_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasTiEnabled: Threat Intelligence of Cloud Security Center.
            '''
            result = self._values.get("sas_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sas_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: sasTtl: Cloud Security Center centralized ttl. Default 180.
            '''
            result = self._values.get("sas_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def slb_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: slbAccessCollectionPolicy: SLB audit collection policy
            '''
            result = self._values.get("slb_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def slb_access_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: slbAccessEnabled: Slb log switch. Default true.
            '''
            result = self._values.get("slb_access_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def slb_access_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: slbAccessPolicySetting: SLB audit policy setting.
            '''
            result = self._values.get("slb_access_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def slb_access_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: slbAccessTiEnabled: Threat Intelligence of SLB.
            '''
            result = self._values.get("slb_access_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def slb_access_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: slbAccessTtl: Slb centralized ttl. Default 7.
            '''
            result = self._values.get("slb_access_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def slb_sync_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: slbSyncEnabled: Slb sync to center switch. Default true.
            '''
            result = self._values.get("slb_sync_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def slb_sync_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: slbSyncTtl: Slb sync to center switch. Default 180.
            '''
            result = self._values.get("slb_sync_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def waf_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: wafAccessCollectionPolicy: Waf audit collection policy
            '''
            result = self._values.get("waf_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def waf_access_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: wafAccessPolicySetting: Waf audit policy setting.
            '''
            result = self._values.get("waf_access_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def waf_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: wafEnabled: Waf log switch. Default true.
            '''
            result = self._values.get("waf_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def waf_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: wafTiEnabled: Threat Intelligence of Waf.
            '''
            result = self._values.get("waf_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def waf_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: wafTtl: Waf centralized ttl. Default true.
            '''
            result = self._values.get("waf_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VariableMapProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosAuditProps",
    jsii_struct_bases=[],
    name_mapping={
        "display_name": "displayName",
        "variable_map": "variableMap",
        "multi_account": "multiAccount",
    },
)
class RosAuditProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        variable_map: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAudit.VariableMapProperty, typing.Dict[str, typing.Any]]],
        multi_account: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Audit``.

        :param display_name: 
        :param variable_map: 
        :param multi_account: 
        '''
        if __debug__:
            def stub(
                *,
                display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                variable_map: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosAudit.VariableMapProperty, typing.Dict[str, typing.Any]]],
                multi_account: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument variable_map", value=variable_map, expected_type=type_hints["variable_map"])
            check_type(argname="argument multi_account", value=multi_account, expected_type=type_hints["multi_account"])
        self._values: typing.Dict[str, typing.Any] = {
            "display_name": display_name,
            "variable_map": variable_map,
        }
        if multi_account is not None:
            self._values["multi_account"] = multi_account

    @builtins.property
    def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: displayName: Name of SLS log audit.
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def variable_map(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosAudit.VariableMapProperty]:
        '''
        :Property: variableMap: Log audit detailed configuration.
        '''
        result = self._values.get("variable_map")
        assert result is not None, "Required property 'variable_map' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosAudit.VariableMapProperty], result)

    @builtins.property
    def multi_account(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: multiAccount: Multi-account configuration, please fill in multiple aliuid.
        '''
        result = self._values.get("multi_account")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAuditProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDashboard(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosDashboard",
):
    '''A ROS template type:  ``ALIYUN::SLS::Dashboard``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosDashboardProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Dashboard``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosDashboardProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDashboardName")
    def attr_dashboard_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DashboardName: Dashboard name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDashboardName"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DisplayName: Display name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="charts")
    def charts(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: charts: Chart list.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "charts"))

    @charts.setter
    def charts(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "charts", value)

    @builtins.property
    @jsii.member(jsii_name="dashboardName")
    def dashboard_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dashboardName: Dashboard name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dashboardName"))

    @dashboard_name.setter
    def dashboard_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dashboardName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Dashboard description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: displayName: Dashboard display name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosDashboardProps",
    jsii_struct_bases=[],
    name_mapping={
        "charts": "charts",
        "dashboard_name": "dashboardName",
        "project_name": "projectName",
        "description": "description",
        "display_name": "displayName",
    },
)
class RosDashboardProps:
    def __init__(
        self,
        *,
        charts: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
        dashboard_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        display_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Dashboard``.

        :param charts: 
        :param dashboard_name: 
        :param project_name: 
        :param description: 
        :param display_name: 
        '''
        if __debug__:
            def stub(
                *,
                charts: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
                dashboard_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                display_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument charts", value=charts, expected_type=type_hints["charts"])
            check_type(argname="argument dashboard_name", value=dashboard_name, expected_type=type_hints["dashboard_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
        self._values: typing.Dict[str, typing.Any] = {
            "charts": charts,
            "dashboard_name": dashboard_name,
            "project_name": project_name,
        }
        if description is not None:
            self._values["description"] = description
        if display_name is not None:
            self._values["display_name"] = display_name

    @builtins.property
    def charts(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: charts: Chart list.
        '''
        result = self._values.get("charts")
        assert result is not None, "Required property 'charts' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def dashboard_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dashboardName: Dashboard name.
        '''
        result = self._values.get("dashboard_name")
        assert result is not None, "Required property 'dashboard_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Dashboard description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: displayName: Dashboard display name.
        '''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDashboardProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEtl(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosEtl",
):
    '''A ROS template type:  ``ALIYUN::SLS::Etl``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosEtlProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Etl``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosEtlProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Name: ETL name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="configuration")
    def configuration(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosEtl.ConfigurationProperty"]:
        '''
        :Property: configuration: The configuration of ETL task
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosEtl.ConfigurationProperty"], jsii.get(self, "configuration"))

    @configuration.setter
    def configuration(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosEtl.ConfigurationProperty"],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, RosEtl.ConfigurationProperty],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configuration", value)

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: displayName: ETL display name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: ETL name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: projectName: Project name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="schedule")
    def schedule(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosEtl.ScheduleProperty"]:
        '''
        :Property: schedule: Task scheduling strategy
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosEtl.ScheduleProperty"], jsii.get(self, "schedule"))

    @schedule.setter
    def schedule(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosEtl.ScheduleProperty"],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, RosEtl.ScheduleProperty],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "schedule", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: ETL description message.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosEtl.ConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "logstore": "logstore",
            "script": "script",
            "sinks": "sinks",
            "from_time": "fromTime",
            "parameters": "parameters",
            "role_arn": "roleArn",
            "to_time": "toTime",
            "version": "version",
        },
    )
    class ConfigurationProperty:
        def __init__(
            self,
            *,
            logstore: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            script: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            sinks: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosEtl.SinksProperty", typing.Dict[str, typing.Any]]]]],
            from_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            to_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            version: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param logstore: 
            :param script: 
            :param sinks: 
            :param from_time: 
            :param parameters: 
            :param role_arn: 
            :param to_time: 
            :param version: 
            '''
            if __debug__:
                def stub(
                    *,
                    logstore: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    script: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    sinks: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosEtl.SinksProperty, typing.Dict[str, typing.Any]]]]],
                    from_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
                    role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    to_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    version: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
                check_type(argname="argument script", value=script, expected_type=type_hints["script"])
                check_type(argname="argument sinks", value=sinks, expected_type=type_hints["sinks"])
                check_type(argname="argument from_time", value=from_time, expected_type=type_hints["from_time"])
                check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
                check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
                check_type(argname="argument to_time", value=to_time, expected_type=type_hints["to_time"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[str, typing.Any] = {
                "logstore": logstore,
                "script": script,
                "sinks": sinks,
            }
            if from_time is not None:
                self._values["from_time"] = from_time
            if parameters is not None:
                self._values["parameters"] = parameters
            if role_arn is not None:
                self._values["role_arn"] = role_arn
            if to_time is not None:
                self._values["to_time"] = to_time
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def logstore(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: logstore: The source logstore of the processing job.
            '''
            result = self._values.get("logstore")
            assert result is not None, "Required property 'logstore' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def script(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: script: Processing operation grammar.
            '''
            result = self._values.get("script")
            assert result is not None, "Required property 'script' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def sinks(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEtl.SinksProperty"]]]:
            '''
            :Property: sinks: target logstore configuration for delivery after data processing.
            '''
            result = self._values.get("sinks")
            assert result is not None, "Required property 'sinks' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEtl.SinksProperty"]]], result)

        @builtins.property
        def from_time(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: fromTime: The start time of the processing job, the default starts from the current time.
            '''
            result = self._values.get("from_time")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def parameters(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: parameters: Advanced parameter configuration of processing operations.
            '''
            result = self._values.get("parameters")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def role_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: roleArn: Sts role info under delivery target logstore.
            '''
            result = self._values.get("role_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def to_time(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: toTime: Deadline of processing job, the default value is None
            '''
            result = self._values.get("to_time")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: version: The script version.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosEtl.ScheduleProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type"},
    )
    class ScheduleProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param type: 
            '''
            if __debug__:
                def stub(
                    *,
                    type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[str, typing.Any] = {
                "type": type,
            }

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: type: The type of task scheduling strategies, value: Resident
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScheduleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosEtl.SinksProperty",
        jsii_struct_bases=[],
        name_mapping={
            "logstore": "logstore",
            "name": "name",
            "project": "project",
            "endpoint": "endpoint",
            "role_arn": "roleArn",
            "type": "type",
        },
    )
    class SinksProperty:
        def __init__(
            self,
            *,
            logstore: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            endpoint: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param logstore: 
            :param name: 
            :param project: 
            :param endpoint: 
            :param role_arn: 
            :param type: 
            '''
            if __debug__:
                def stub(
                    *,
                    logstore: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    endpoint: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument project", value=project, expected_type=type_hints["project"])
                check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
                check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[str, typing.Any] = {
                "logstore": logstore,
                "name": name,
                "project": project,
            }
            if endpoint is not None:
                self._values["endpoint"] = endpoint
            if role_arn is not None:
                self._values["role_arn"] = role_arn
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def logstore(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: logstore: Delivery target logstore.
            '''
            result = self._values.get("logstore")
            assert result is not None, "Required property 'logstore' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: Delivery target name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: project: The project where the target logstore is delivered.
            '''
            result = self._values.get("project")
            assert result is not None, "Required property 'project' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def endpoint(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: endpoint: Delivery target logstore region.
            '''
            result = self._values.get("endpoint")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def role_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: roleArn: Sts role info under delivery target logstore.
            '''
            result = self._values.get("role_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: type: ETL sinks type, the default value is AliyunLOG.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SinksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosEtlProps",
    jsii_struct_bases=[],
    name_mapping={
        "configuration": "configuration",
        "display_name": "displayName",
        "name": "name",
        "project_name": "projectName",
        "schedule": "schedule",
        "description": "description",
    },
)
class RosEtlProps:
    def __init__(
        self,
        *,
        configuration: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosEtl.ConfigurationProperty, typing.Dict[str, typing.Any]]],
        display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        schedule: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosEtl.ScheduleProperty, typing.Dict[str, typing.Any]]],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Etl``.

        :param configuration: 
        :param display_name: 
        :param name: 
        :param project_name: 
        :param schedule: 
        :param description: 
        '''
        if __debug__:
            def stub(
                *,
                configuration: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosEtl.ConfigurationProperty, typing.Dict[str, typing.Any]]],
                display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                schedule: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosEtl.ScheduleProperty, typing.Dict[str, typing.Any]]],
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[str, typing.Any] = {
            "configuration": configuration,
            "display_name": display_name,
            "name": name,
            "project_name": project_name,
            "schedule": schedule,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def configuration(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosEtl.ConfigurationProperty]:
        '''
        :Property: configuration: The configuration of ETL task
        '''
        result = self._values.get("configuration")
        assert result is not None, "Required property 'configuration' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosEtl.ConfigurationProperty], result)

    @builtins.property
    def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: displayName: ETL display name
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: ETL name
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: projectName: Project name
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def schedule(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosEtl.ScheduleProperty]:
        '''
        :Property: schedule: Task scheduling strategy
        '''
        result = self._values.get("schedule")
        assert result is not None, "Required property 'schedule' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosEtl.ScheduleProperty], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: ETL description message.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEtlProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIndex(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosIndex",
):
    '''A ROS template type:  ``ALIYUN::SLS::Index``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosIndexProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Index``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosIndexProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fullTextIndex")
    def full_text_index(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosIndex.FullTextIndexProperty"]:
        '''
        :Property:

        fullTextIndex: Full-text indexing configuration.
        Full-text indexing and key indexing must have at least one enabled.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosIndex.FullTextIndexProperty"], jsii.get(self, "fullTextIndex"))

    @full_text_index.setter
    def full_text_index(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosIndex.FullTextIndexProperty"],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, RosIndex.FullTextIndexProperty],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fullTextIndex", value)

    @builtins.property
    @jsii.member(jsii_name="logstoreName")
    def logstore_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "logstoreName"))

    @logstore_name.setter
    def logstore_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logstoreName", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="keyIndices")
    def key_indices(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.KeyIndicesProperty"]]]]:
        '''
        :Property:

        keyIndices: Key index configurations.
        Full-text indexing and key indexing must have at least one enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.KeyIndicesProperty"]]]], jsii.get(self, "keyIndices"))

    @key_indices.setter
    def key_indices(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.KeyIndicesProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosIndex.KeyIndicesProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyIndices", value)

    @builtins.property
    @jsii.member(jsii_name="logReduce")
    def log_reduce(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: logReduce: Whether to enable log reduce. Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "logReduce"))

    @log_reduce.setter
    def log_reduce(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logReduce", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable": "enable",
            "case_sensitive": "caseSensitive",
            "delimiter": "delimiter",
            "include_chinese": "includeChinese",
        },
    )
    class FullTextIndexProperty:
        def __init__(
            self,
            *,
            enable: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
            case_sensitive: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            delimiter: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            include_chinese: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param enable: 
            :param case_sensitive: 
            :param delimiter: 
            :param include_chinese: 
            '''
            if __debug__:
                def stub(
                    *,
                    enable: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
                    case_sensitive: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    delimiter: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    include_chinese: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
                check_type(argname="argument case_sensitive", value=case_sensitive, expected_type=type_hints["case_sensitive"])
                check_type(argname="argument delimiter", value=delimiter, expected_type=type_hints["delimiter"])
                check_type(argname="argument include_chinese", value=include_chinese, expected_type=type_hints["include_chinese"])
            self._values: typing.Dict[str, typing.Any] = {
                "enable": enable,
            }
            if case_sensitive is not None:
                self._values["case_sensitive"] = case_sensitive
            if delimiter is not None:
                self._values["delimiter"] = delimiter
            if include_chinese is not None:
                self._values["include_chinese"] = include_chinese

        @builtins.property
        def enable(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
            '''
            :Property: enable: Whether to enable full-text indexing. Default to true.
            '''
            result = self._values.get("enable")
            assert result is not None, "Required property 'enable' is missing"
            return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

        @builtins.property
        def case_sensitive(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: caseSensitive: Whether it is case sensitive. Default to false.
            '''
            result = self._values.get("case_sensitive")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def delimiter(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :: &<>/:\\n\\t\\r )).
            :Property: delimiter: Delimiter. Default to (( , '";=()[]{}?
            '''
            result = self._values.get("delimiter")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def include_chinese(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: includeChinese: Whether it contains Chinese. Default to false.
            '''
            result = self._values.get("include_chinese")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FullTextIndexProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosIndex.JsonKeyIndicesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "type": "type",
            "alias": "alias",
            "enable_analytics": "enableAnalytics",
        },
    )
    class JsonKeyIndicesProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            enable_analytics: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param alias: 
            :param enable_analytics: 
            '''
            if __debug__:
                def stub(
                    *,
                    name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    enable_analytics: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument alias", value=alias, expected_type=type_hints["alias"])
                check_type(argname="argument enable_analytics", value=enable_analytics, expected_type=type_hints["enable_analytics"])
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if alias is not None:
                self._values["alias"] = alias
            if enable_analytics is not None:
                self._values["enable_analytics"] = enable_analytics

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: Json key name. It can be nested by dot(.), such as k1.k2.k3.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: type: Json key type. Allowed types: text, long, double. Default to text.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def alias(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: alias: Json key alias.
            '''
            result = self._values.get("alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def enable_analytics(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: enableAnalytics: Whether this json key is enabled for statistics. Default to true.
            '''
            result = self._values.get("enable_analytics")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "JsonKeyIndicesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "type": "type",
            "alias": "alias",
            "case_sensitive": "caseSensitive",
            "delimiter": "delimiter",
            "enable_analytics": "enableAnalytics",
            "include_chinese": "includeChinese",
            "json_key_indices": "jsonKeyIndices",
        },
    )
    class KeyIndicesProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            case_sensitive: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            delimiter: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            enable_analytics: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            include_chinese: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            json_key_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosIndex.JsonKeyIndicesProperty", typing.Dict[str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param alias: 
            :param case_sensitive: 
            :param delimiter: 
            :param enable_analytics: 
            :param include_chinese: 
            :param json_key_indices: 
            '''
            if __debug__:
                def stub(
                    *,
                    name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    alias: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    case_sensitive: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    delimiter: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    enable_analytics: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    include_chinese: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    json_key_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosIndex.JsonKeyIndicesProperty, typing.Dict[str, typing.Any]]]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument alias", value=alias, expected_type=type_hints["alias"])
                check_type(argname="argument case_sensitive", value=case_sensitive, expected_type=type_hints["case_sensitive"])
                check_type(argname="argument delimiter", value=delimiter, expected_type=type_hints["delimiter"])
                check_type(argname="argument enable_analytics", value=enable_analytics, expected_type=type_hints["enable_analytics"])
                check_type(argname="argument include_chinese", value=include_chinese, expected_type=type_hints["include_chinese"])
                check_type(argname="argument json_key_indices", value=json_key_indices, expected_type=type_hints["json_key_indices"])
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if alias is not None:
                self._values["alias"] = alias
            if case_sensitive is not None:
                self._values["case_sensitive"] = case_sensitive
            if delimiter is not None:
                self._values["delimiter"] = delimiter
            if enable_analytics is not None:
                self._values["enable_analytics"] = enable_analytics
            if include_chinese is not None:
                self._values["include_chinese"] = include_chinese
            if json_key_indices is not None:
                self._values["json_key_indices"] = json_key_indices

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: Key name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: type: Key type. Allowed types: text, long, double, json. Default to text.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def alias(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: alias: Key alias.
            '''
            result = self._values.get("alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def case_sensitive(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: caseSensitive: Whether it is case sensitive. It takes effect when Type is text or json. Default to false.
            '''
            result = self._values.get("case_sensitive")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def delimiter(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :: &<>/:\\n\\t\\r )).
            :Property: delimiter: Delimiter. It takes effect when Type is text or json. Default to (( , '";=()[]{}?
            '''
            result = self._values.get("delimiter")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def enable_analytics(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: enableAnalytics: Whether this key is enabled for statistics. Default to false for json type, else true.
            '''
            result = self._values.get("enable_analytics")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def include_chinese(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: includeChinese: Whether it contains Chinese. It takes effect when Type is text or json. Default to false.
            '''
            result = self._values.get("include_chinese")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def json_key_indices(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.JsonKeyIndicesProperty"]]]]:
            '''
            :Property: jsonKeyIndices: Json key index configurations.
            '''
            result = self._values.get("json_key_indices")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosIndex.JsonKeyIndicesProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "KeyIndicesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosIndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "full_text_index": "fullTextIndex",
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "key_indices": "keyIndices",
        "log_reduce": "logReduce",
    },
)
class RosIndexProps:
    def __init__(
        self,
        *,
        full_text_index: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosIndex.FullTextIndexProperty, typing.Dict[str, typing.Any]]],
        logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        key_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosIndex.KeyIndicesProperty, typing.Dict[str, typing.Any]]]]]] = None,
        log_reduce: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Index``.

        :param full_text_index: 
        :param logstore_name: 
        :param project_name: 
        :param key_indices: 
        :param log_reduce: 
        '''
        if __debug__:
            def stub(
                *,
                full_text_index: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosIndex.FullTextIndexProperty, typing.Dict[str, typing.Any]]],
                logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                key_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosIndex.KeyIndicesProperty, typing.Dict[str, typing.Any]]]]]] = None,
                log_reduce: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument full_text_index", value=full_text_index, expected_type=type_hints["full_text_index"])
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument key_indices", value=key_indices, expected_type=type_hints["key_indices"])
            check_type(argname="argument log_reduce", value=log_reduce, expected_type=type_hints["log_reduce"])
        self._values: typing.Dict[str, typing.Any] = {
            "full_text_index": full_text_index,
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if key_indices is not None:
            self._values["key_indices"] = key_indices
        if log_reduce is not None:
            self._values["log_reduce"] = log_reduce

    @builtins.property
    def full_text_index(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosIndex.FullTextIndexProperty]:
        '''
        :Property:

        fullTextIndex: Full-text indexing configuration.
        Full-text indexing and key indexing must have at least one enabled.
        '''
        result = self._values.get("full_text_index")
        assert result is not None, "Required property 'full_text_index' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosIndex.FullTextIndexProperty], result)

    @builtins.property
    def logstore_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def key_indices(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosIndex.KeyIndicesProperty]]]]:
        '''
        :Property:

        keyIndices: Key index configurations.
        Full-text indexing and key indexing must have at least one enabled.
        '''
        result = self._values.get("key_indices")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosIndex.KeyIndicesProperty]]]], result)

    @builtins.property
    def log_reduce(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: logReduce: Whether to enable log reduce. Default to false.
        '''
        result = self._values.get("log_reduce")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLogstore(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosLogstore",
):
    '''A ROS template type:  ``ALIYUN::SLS::Logstore``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosLogstoreProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Logstore``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosLogstoreProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LogstoreName: Logstore name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogstoreName"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="logstoreName")
    def logstore_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "logstoreName"))

    @logstore_name.setter
    def logstore_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logstoreName", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="appendMeta")
    def append_meta(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "appendMeta"))

    @append_meta.setter
    def append_meta(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appendMeta", value)

    @builtins.property
    @jsii.member(jsii_name="autoSplit")
    def auto_split(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoSplit: Whether to automatically split the shard.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoSplit"))

    @auto_split.setter
    def auto_split(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoSplit", value)

    @builtins.property
    @jsii.member(jsii_name="enableTracking")
    def enable_tracking(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enableTracking"))

    @enable_tracking.setter
    def enable_tracking(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableTracking", value)

    @builtins.property
    @jsii.member(jsii_name="encryptConf")
    def encrypt_conf(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogstore.EncryptConfProperty"]]:
        '''
        :Property: encryptConf: Data encryption config
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogstore.EncryptConfProperty"]], jsii.get(self, "encryptConf"))

    @encrypt_conf.setter
    def encrypt_conf(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogstore.EncryptConfProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLogstore.EncryptConfProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptConf", value)

    @builtins.property
    @jsii.member(jsii_name="maxSplitShard")
    def max_split_shard(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
        Allowed Values: 1-64.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "maxSplitShard"))

    @max_split_shard.setter
    def max_split_shard(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxSplitShard", value)

    @builtins.property
    @jsii.member(jsii_name="preserveStorage")
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        preserveStorage: Whether to keep the log permanently.
        If set to true, TTL will be ignored.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "preserveStorage"))

    @preserve_storage.setter
    def preserve_storage(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preserveStorage", value)

    @builtins.property
    @jsii.member(jsii_name="shardCount")
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        shardCount: The number of Shards.
        Allowed Values: 1-100, default to 2.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "shardCount"))

    @shard_count.setter
    def shard_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "shardCount", value)

    @builtins.property
    @jsii.member(jsii_name="ttl")
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ttl: The lifecycle of log in the logstore in days.
        Allowed Values: 1-3600, default to 30.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "ttl"))

    @ttl.setter
    def ttl(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ttl", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosLogstore.EncryptConfProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable": "enable",
            "encrypt_type": "encryptType",
            "user_cmk_info": "userCmkInfo",
        },
    )
    class EncryptConfProperty:
        def __init__(
            self,
            *,
            enable: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
            encrypt_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            user_cmk_info: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosLogstore.UserCmkInfoProperty", typing.Dict[str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param enable: 
            :param encrypt_type: 
            :param user_cmk_info: 
            '''
            if __debug__:
                def stub(
                    *,
                    enable: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
                    encrypt_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    user_cmk_info: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLogstore.UserCmkInfoProperty, typing.Dict[str, typing.Any]]]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
                check_type(argname="argument encrypt_type", value=encrypt_type, expected_type=type_hints["encrypt_type"])
                check_type(argname="argument user_cmk_info", value=user_cmk_info, expected_type=type_hints["user_cmk_info"])
            self._values: typing.Dict[str, typing.Any] = {
                "enable": enable,
                "encrypt_type": encrypt_type,
            }
            if user_cmk_info is not None:
                self._values["user_cmk_info"] = user_cmk_info

        @builtins.property
        def enable(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
            '''
            :Property: enable: Specifies whether data encryption is enabled.
            '''
            result = self._values.get("enable")
            assert result is not None, "Required property 'enable' is missing"
            return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

        @builtins.property
        def encrypt_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            encryptType: The encryption algorithm. The encrypt_type
            parameter can be set to only default or m4.
            '''
            result = self._values.get("encrypt_type")
            assert result is not None, "Required property 'encrypt_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def user_cmk_info(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogstore.UserCmkInfoProperty"]]:
            '''
            :Property:

            userCmkInfo: If this parameter is specified, the BYOK key is used.
            Otherwise, the service key is used.
            '''
            result = self._values.get("user_cmk_info")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogstore.UserCmkInfoProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EncryptConfProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosLogstore.UserCmkInfoProperty",
        jsii_struct_bases=[],
        name_mapping={"arn": "arn", "cmk_key_id": "cmkKeyId", "region_id": "regionId"},
    )
    class UserCmkInfoProperty:
        def __init__(
            self,
            *,
            arn: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            cmk_key_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param arn: 
            :param cmk_key_id: 
            :param region_id: 
            '''
            if __debug__:
                def stub(
                    *,
                    arn: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    cmk_key_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument arn", value=arn, expected_type=type_hints["arn"])
                check_type(argname="argument cmk_key_id", value=cmk_key_id, expected_type=type_hints["cmk_key_id"])
                check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            self._values: typing.Dict[str, typing.Any] = {
                "arn": arn,
                "cmk_key_id": cmk_key_id,
                "region_id": region_id,
            }

        @builtins.property
        def arn(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            arn: The ARN of the RAM role. For more information
            about how to obtain the ARN of a RAM role,
            see Ship log data from Log Service to OSS.
            '''
            result = self._values.get("arn")
            assert result is not None, "Required property 'arn' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def cmk_key_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            cmkKeyId: The ID of the CMK to which the BYOK key belongs,
            for example, f5136b95-2420-ab31-xxxxxxxxx.
            '''
            result = self._values.get("cmk_key_id")
            assert result is not None, "Required property 'cmk_key_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: regionId: The ID of the region where the CMK resides.
            '''
            result = self._values.get("region_id")
            assert result is not None, "Required property 'region_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "UserCmkInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosLogstoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "append_meta": "appendMeta",
        "auto_split": "autoSplit",
        "enable_tracking": "enableTracking",
        "encrypt_conf": "encryptConf",
        "max_split_shard": "maxSplitShard",
        "preserve_storage": "preserveStorage",
        "shard_count": "shardCount",
        "ttl": "ttl",
    },
)
class RosLogstoreProps:
    def __init__(
        self,
        *,
        logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        append_meta: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_split: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_tracking: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        encrypt_conf: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLogstore.EncryptConfProperty, typing.Dict[str, typing.Any]]]] = None,
        max_split_shard: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        preserve_storage: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Logstore``.

        :param logstore_name: 
        :param project_name: 
        :param append_meta: 
        :param auto_split: 
        :param enable_tracking: 
        :param encrypt_conf: 
        :param max_split_shard: 
        :param preserve_storage: 
        :param shard_count: 
        :param ttl: 
        '''
        if __debug__:
            def stub(
                *,
                logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                append_meta: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                auto_split: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                enable_tracking: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                encrypt_conf: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLogstore.EncryptConfProperty, typing.Dict[str, typing.Any]]]] = None,
                max_split_shard: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                preserve_storage: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                shard_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument append_meta", value=append_meta, expected_type=type_hints["append_meta"])
            check_type(argname="argument auto_split", value=auto_split, expected_type=type_hints["auto_split"])
            check_type(argname="argument enable_tracking", value=enable_tracking, expected_type=type_hints["enable_tracking"])
            check_type(argname="argument encrypt_conf", value=encrypt_conf, expected_type=type_hints["encrypt_conf"])
            check_type(argname="argument max_split_shard", value=max_split_shard, expected_type=type_hints["max_split_shard"])
            check_type(argname="argument preserve_storage", value=preserve_storage, expected_type=type_hints["preserve_storage"])
            check_type(argname="argument shard_count", value=shard_count, expected_type=type_hints["shard_count"])
            check_type(argname="argument ttl", value=ttl, expected_type=type_hints["ttl"])
        self._values: typing.Dict[str, typing.Any] = {
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if append_meta is not None:
            self._values["append_meta"] = append_meta
        if auto_split is not None:
            self._values["auto_split"] = auto_split
        if enable_tracking is not None:
            self._values["enable_tracking"] = enable_tracking
        if encrypt_conf is not None:
            self._values["encrypt_conf"] = encrypt_conf
        if max_split_shard is not None:
            self._values["max_split_shard"] = max_split_shard
        if preserve_storage is not None:
            self._values["preserve_storage"] = preserve_storage
        if shard_count is not None:
            self._values["shard_count"] = shard_count
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def logstore_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def append_meta(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
        Default to false.
        '''
        result = self._values.get("append_meta")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_split(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoSplit: Whether to automatically split the shard.
        Default to false.
        '''
        result = self._values.get("auto_split")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_tracking(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
        Default to false.
        '''
        result = self._values.get("enable_tracking")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encrypt_conf(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLogstore.EncryptConfProperty]]:
        '''
        :Property: encryptConf: Data encryption config
        '''
        result = self._values.get("encrypt_conf")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLogstore.EncryptConfProperty]], result)

    @builtins.property
    def max_split_shard(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
        Allowed Values: 1-64.
        '''
        result = self._values.get("max_split_shard")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        preserveStorage: Whether to keep the log permanently.
        If set to true, TTL will be ignored.
        Default to false.
        '''
        result = self._values.get("preserve_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        shardCount: The number of Shards.
        Allowed Values: 1-100, default to 2.
        '''
        result = self._values.get("shard_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ttl: The lifecycle of log in the logstore in days.
        Allowed Values: 1-3600, default to 30.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLogstoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLogtailConfig(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosLogtailConfig",
):
    '''A ROS template type:  ``ALIYUN::SLS::LogtailConfig``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosLogtailConfigProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::LogtailConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosLogtailConfigProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAppliedMachineGroups")
    def attr_applied_machine_groups(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AppliedMachineGroups: Applied machine groups.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppliedMachineGroups"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Endpoint: Endpoint address.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLogtailConfigName")
    def attr_logtail_config_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LogtailConfigName: Logtail config name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogtailConfigName"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="logstoreName")
    def logstore_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "logstoreName"))

    @logstore_name.setter
    def logstore_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logstoreName", value)

    @builtins.property
    @jsii.member(jsii_name="logtailConfigName")
    def logtail_config_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        logtailConfigName: Logtail config name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "logtailConfigName"))

    @logtail_config_name.setter
    def logtail_config_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logtailConfigName", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="cloneFrom")
    def clone_from(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogtailConfig.CloneFromProperty"]]:
        '''
        :Property:

        cloneFrom: Clone logtail config data from existing logtail config.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogtailConfig.CloneFromProperty"]], jsii.get(self, "cloneFrom"))

    @clone_from.setter
    def clone_from(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLogtailConfig.CloneFromProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLogtailConfig.CloneFromProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cloneFrom", value)

    @builtins.property
    @jsii.member(jsii_name="rawConfigData")
    def raw_config_data(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        rawConfigData: The format is the same as the response of SLS API GetConfig.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        configName, outputType, outputDetail in data will be ignored.For example:
        {
        "configName": "test-logtail-config",
        "createTime": 1574843554,
        "inputDetail": {
        "acceptNoEnoughKeys": false,
        "adjustTimezone": false,
        "advanced": {
        "force_multiconfig": false
        },
        "autoExtend": true,
        "delayAlarmBytes": 0,
        "delaySkipBytes": 0,
        "discardNonUtf8": false,
        "discardUnmatch": false,
        "dockerExcludeEnv": {},
        "dockerExcludeLabel": {},
        "dockerFile": false,
        "dockerIncludeEnv": {},
        "dockerIncludeLabel": {},
        "enableRawLog": false,
        "enableTag": false,
        "fileEncoding": "utf8",
        "filePattern": "test.log*",
        "filterKey": [],
        "filterRegex": [],
        "key": [
        "time",
        "logger",
        "level",
        "request_id",
        "user_id",
        "region_id",
        "content"
        ],
        "localStorage": true,
        "logPath": "/var/log/test",
        "logTimezone": "",
        "logType": "delimiter_log",
        "maxDepth": 100,
        "maxSendRate": -1,
        "mergeType": "topic",
        "preserve": true,
        "preserveDepth": 1,
        "priority": 0,
        "quote": "\\u0001",
        "sendRateExpire": 0,
        "sensitive_keys": [],
        "separator": ",,,",
        "shardHashKey": [],
        "tailExisted": false,
        "timeFormat": "",
        "timeKey": "",
        "topicFormat": "none"
        },
        "inputType": "file",
        "lastModifyTime": 1574843554,
        "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
        "outputDetail": {
        "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
        "logstoreName": "test-logstore",
        "region": "cn-hangzhou"
        },
        "outputType": "LogService"
        }
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "rawConfigData"))

    @raw_config_data.setter
    def raw_config_data(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rawConfigData", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosLogtailConfig.CloneFromProperty",
        jsii_struct_bases=[],
        name_mapping={
            "logtail_config_name": "logtailConfigName",
            "project_name": "projectName",
        },
    )
    class CloneFromProperty:
        def __init__(
            self,
            *,
            logtail_config_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param logtail_config_name: 
            :param project_name: 
            '''
            if __debug__:
                def stub(
                    *,
                    logtail_config_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument logtail_config_name", value=logtail_config_name, expected_type=type_hints["logtail_config_name"])
                check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            self._values: typing.Dict[str, typing.Any] = {
                "logtail_config_name": logtail_config_name,
                "project_name": project_name,
            }

        @builtins.property
        def logtail_config_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            logtailConfigName: Logtail config name:

            1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            2. Must start and end with lowercase letters and numbers.
            3. The name length is 3-63 characters.
            '''
            result = self._values.get("logtail_config_name")
            assert result is not None, "Required property 'logtail_config_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            projectName: Project name:

            1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            2. Must start and end with lowercase letters and numbers.
            3. The name length is 3-63 characters.
            '''
            result = self._values.get("project_name")
            assert result is not None, "Required property 'project_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CloneFromProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosLogtailConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "logtail_config_name": "logtailConfigName",
        "project_name": "projectName",
        "clone_from": "cloneFrom",
        "raw_config_data": "rawConfigData",
    },
)
class RosLogtailConfigProps:
    def __init__(
        self,
        *,
        logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        logtail_config_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        clone_from: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLogtailConfig.CloneFromProperty, typing.Dict[str, typing.Any]]]] = None,
        raw_config_data: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::LogtailConfig``.

        :param logstore_name: 
        :param logtail_config_name: 
        :param project_name: 
        :param clone_from: 
        :param raw_config_data: 
        '''
        if __debug__:
            def stub(
                *,
                logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                logtail_config_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                clone_from: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLogtailConfig.CloneFromProperty, typing.Dict[str, typing.Any]]]] = None,
                raw_config_data: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument logtail_config_name", value=logtail_config_name, expected_type=type_hints["logtail_config_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument clone_from", value=clone_from, expected_type=type_hints["clone_from"])
            check_type(argname="argument raw_config_data", value=raw_config_data, expected_type=type_hints["raw_config_data"])
        self._values: typing.Dict[str, typing.Any] = {
            "logstore_name": logstore_name,
            "logtail_config_name": logtail_config_name,
            "project_name": project_name,
        }
        if clone_from is not None:
            self._values["clone_from"] = clone_from
        if raw_config_data is not None:
            self._values["raw_config_data"] = raw_config_data

    @builtins.property
    def logstore_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def logtail_config_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        logtailConfigName: Logtail config name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logtail_config_name")
        assert result is not None, "Required property 'logtail_config_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def clone_from(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLogtailConfig.CloneFromProperty]]:
        '''
        :Property:

        cloneFrom: Clone logtail config data from existing logtail config.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        '''
        result = self._values.get("clone_from")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLogtailConfig.CloneFromProperty]], result)

    @builtins.property
    def raw_config_data(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        rawConfigData: The format is the same as the response of SLS API GetConfig.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        configName, outputType, outputDetail in data will be ignored.For example:
        {
        "configName": "test-logtail-config",
        "createTime": 1574843554,
        "inputDetail": {
        "acceptNoEnoughKeys": false,
        "adjustTimezone": false,
        "advanced": {
        "force_multiconfig": false
        },
        "autoExtend": true,
        "delayAlarmBytes": 0,
        "delaySkipBytes": 0,
        "discardNonUtf8": false,
        "discardUnmatch": false,
        "dockerExcludeEnv": {},
        "dockerExcludeLabel": {},
        "dockerFile": false,
        "dockerIncludeEnv": {},
        "dockerIncludeLabel": {},
        "enableRawLog": false,
        "enableTag": false,
        "fileEncoding": "utf8",
        "filePattern": "test.log*",
        "filterKey": [],
        "filterRegex": [],
        "key": [
        "time",
        "logger",
        "level",
        "request_id",
        "user_id",
        "region_id",
        "content"
        ],
        "localStorage": true,
        "logPath": "/var/log/test",
        "logTimezone": "",
        "logType": "delimiter_log",
        "maxDepth": 100,
        "maxSendRate": -1,
        "mergeType": "topic",
        "preserve": true,
        "preserveDepth": 1,
        "priority": 0,
        "quote": "\\u0001",
        "sendRateExpire": 0,
        "sensitive_keys": [],
        "separator": ",,,",
        "shardHashKey": [],
        "tailExisted": false,
        "timeFormat": "",
        "timeKey": "",
        "topicFormat": "none"
        },
        "inputType": "file",
        "lastModifyTime": 1574843554,
        "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
        "outputDetail": {
        "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
        "logstoreName": "test-logstore",
        "region": "cn-hangzhou"
        },
        "outputType": "LogService"
        }
        '''
        result = self._values.get("raw_config_data")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLogtailConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMachineGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosMachineGroup",
):
    '''A ROS template type:  ``ALIYUN::SLS::MachineGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosMachineGroupProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::MachineGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosMachineGroupProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GroupName: GroupName of SLS.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ProjectName: ProjectName of SLS.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProjectName"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupAttribute")
    def group_attribute(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "groupAttribute"))

    @group_attribute.setter
    def group_attribute(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupAttribute", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="groupType")
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: groupType: MachineGroup type, the value is empty or Armory
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "groupType"))

    @group_type.setter
    def group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupType", value)

    @builtins.property
    @jsii.member(jsii_name="machineIdentifyType")
    def machine_identify_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "machineIdentifyType"))

    @machine_identify_type.setter
    def machine_identify_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "machineIdentifyType", value)

    @builtins.property
    @jsii.member(jsii_name="machineList")
    def machine_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: machineList: The machine tag, the value is ip or userdefined-id.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "machineList"))

    @machine_list.setter
    def machine_list(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "machineList", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: projectName: MachineGroup created in project.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosMachineGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_attribute": "groupAttribute",
        "group_name": "groupName",
        "group_type": "groupType",
        "machine_identify_type": "machineIdentifyType",
        "machine_list": "machineList",
        "project_name": "projectName",
    },
)
class RosMachineGroupProps:
    def __init__(
        self,
        *,
        group_attribute: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        machine_identify_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        machine_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        project_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::MachineGroup``.

        :param group_attribute: 
        :param group_name: 
        :param group_type: 
        :param machine_identify_type: 
        :param machine_list: 
        :param project_name: 
        '''
        if __debug__:
            def stub(
                *,
                group_attribute: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                machine_identify_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                machine_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                project_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument group_attribute", value=group_attribute, expected_type=type_hints["group_attribute"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument machine_identify_type", value=machine_identify_type, expected_type=type_hints["machine_identify_type"])
            check_type(argname="argument machine_list", value=machine_list, expected_type=type_hints["machine_list"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
        self._values: typing.Dict[str, typing.Any] = {}
        if group_attribute is not None:
            self._values["group_attribute"] = group_attribute
        if group_name is not None:
            self._values["group_name"] = group_name
        if group_type is not None:
            self._values["group_type"] = group_type
        if machine_identify_type is not None:
            self._values["machine_identify_type"] = machine_identify_type
        if machine_list is not None:
            self._values["machine_list"] = machine_list
        if project_name is not None:
            self._values["project_name"] = project_name

    @builtins.property
    def group_attribute(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
        '''
        result = self._values.get("group_attribute")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: groupType: MachineGroup type, the value is empty or Armory
        '''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def machine_identify_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
        '''
        result = self._values.get("machine_identify_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def machine_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: machineList: The machine tag, the value is ip or userdefined-id.
        '''
        result = self._values.get("machine_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: projectName: MachineGroup created in project.
        '''
        result = self._values.get("project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMachineGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMetricStore(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosMetricStore",
):
    '''A ROS template type:  ``ALIYUN::SLS::MetricStore``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosMetricStoreProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::MetricStore``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosMetricStoreProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LogstoreName: Metric store name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogstoreName"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="logstoreName")
    def logstore_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        logstoreName: Metric store name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "logstoreName"))

    @logstore_name.setter
    def logstore_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logstoreName", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="preserveStorage")
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        preserveStorage: Whether to keep the log permanently.
        If set to true, TTL will be ignored.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "preserveStorage"))

    @preserve_storage.setter
    def preserve_storage(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preserveStorage", value)

    @builtins.property
    @jsii.member(jsii_name="shardCount")
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        shardCount: The number of Shards.
        Allowed Values: 1-10, default to 2.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "shardCount"))

    @shard_count.setter
    def shard_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "shardCount", value)

    @builtins.property
    @jsii.member(jsii_name="ttl")
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ttl: The lifecycle of log in the metrice store in days.
        Allowed Values: 1-3000, default to 30.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "ttl"))

    @ttl.setter
    def ttl(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ttl", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosMetricStoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "preserve_storage": "preserveStorage",
        "shard_count": "shardCount",
        "ttl": "ttl",
    },
)
class RosMetricStoreProps:
    def __init__(
        self,
        *,
        logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        preserve_storage: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::MetricStore``.

        :param logstore_name: 
        :param project_name: 
        :param preserve_storage: 
        :param shard_count: 
        :param ttl: 
        '''
        if __debug__:
            def stub(
                *,
                logstore_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                preserve_storage: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                shard_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument preserve_storage", value=preserve_storage, expected_type=type_hints["preserve_storage"])
            check_type(argname="argument shard_count", value=shard_count, expected_type=type_hints["shard_count"])
            check_type(argname="argument ttl", value=ttl, expected_type=type_hints["ttl"])
        self._values: typing.Dict[str, typing.Any] = {
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if preserve_storage is not None:
            self._values["preserve_storage"] = preserve_storage
        if shard_count is not None:
            self._values["shard_count"] = shard_count
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def logstore_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        logstoreName: Metric store name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        preserveStorage: Whether to keep the log permanently.
        If set to true, TTL will be ignored.
        Default to false.
        '''
        result = self._values.get("preserve_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        shardCount: The number of Shards.
        Allowed Values: 1-10, default to 2.
        '''
        result = self._values.get("shard_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ttl: The lifecycle of log in the metrice store in days.
        Allowed Values: 1-3000, default to 30.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMetricStoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProject(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosProject",
):
    '''A ROS template type:  ``ALIYUN::SLS::Project``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosProjectProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Project``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosProjectProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Name: Project name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Project description: <>'"\\ is not supported, up to 64 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosProject.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosProject.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosProject.TagsProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.List[RosProject.TagsProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosProject.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosProjectProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name", "description": "description", "tags": "tags"},
)
class RosProjectProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosProject.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Project``.

        :param name: 
        :param description: 
        :param tags: 
        '''
        if __debug__:
            def stub(
                *,
                name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                tags: typing.Optional[typing.Sequence[typing.Union[RosProject.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
        }
        if description is not None:
            self._values["description"] = description
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Project description: <>'"\\ is not supported, up to 64 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosProject.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosProject.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSavedsearch(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosSavedsearch",
):
    '''A ROS template type:  ``ALIYUN::SLS::Savedsearch``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosSavedsearchProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Savedsearch``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosSavedsearchProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSavedsearchName")
    def attr_savedsearch_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SavedsearchName: Savedsearch name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSavedsearchName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="detail")
    def detail(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosSavedsearch.DetailProperty"]:
        '''
        :Property: detail:
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosSavedsearch.DetailProperty"], jsii.get(self, "detail"))

    @detail.setter
    def detail(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosSavedsearch.DetailProperty"],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, RosSavedsearch.DetailProperty],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "detail", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="project")
    def project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: project: Project name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "project"))

    @project.setter
    def project(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "project", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty",
        jsii_struct_bases=[],
        name_mapping={
            "logstore": "logstore",
            "savedsearch_name": "savedsearchName",
            "search_query": "searchQuery",
            "topic": "topic",
            "display_name": "displayName",
        },
    )
    class DetailProperty:
        def __init__(
            self,
            *,
            logstore: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            savedsearch_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            search_query: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            topic: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            display_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param logstore: 
            :param savedsearch_name: 
            :param search_query: 
            :param topic: 
            :param display_name: 
            '''
            if __debug__:
                def stub(
                    *,
                    logstore: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    savedsearch_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    search_query: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    topic: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    display_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
                check_type(argname="argument savedsearch_name", value=savedsearch_name, expected_type=type_hints["savedsearch_name"])
                check_type(argname="argument search_query", value=search_query, expected_type=type_hints["search_query"])
                check_type(argname="argument topic", value=topic, expected_type=type_hints["topic"])
                check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            self._values: typing.Dict[str, typing.Any] = {
                "logstore": logstore,
                "savedsearch_name": savedsearch_name,
                "search_query": search_query,
                "topic": topic,
            }
            if display_name is not None:
                self._values["display_name"] = display_name

        @builtins.property
        def logstore(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: logstore: Logstore name.
            '''
            result = self._values.get("logstore")
            assert result is not None, "Required property 'logstore' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def savedsearch_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: savedsearchName: Savedsearch name.
            '''
            result = self._values.get("savedsearch_name")
            assert result is not None, "Required property 'savedsearch_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def search_query(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: searchQuery: Check sentence.
            '''
            result = self._values.get("search_query")
            assert result is not None, "Required property 'search_query' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def topic(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: topic: Topic name
            '''
            result = self._values.get("topic")
            assert result is not None, "Required property 'topic' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def display_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: displayName: Display name.
            '''
            result = self._values.get("display_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DetailProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosSavedsearchProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class RosSavedsearchProps:
    def __init__(
        self,
        *,
        detail: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosSavedsearch.DetailProperty, typing.Dict[str, typing.Any]]],
        project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Savedsearch``.

        :param detail: 
        :param project: 
        '''
        if __debug__:
            def stub(
                *,
                detail: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosSavedsearch.DetailProperty, typing.Dict[str, typing.Any]]],
                project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
        self._values: typing.Dict[str, typing.Any] = {
            "detail": detail,
            "project": project,
        }

    @builtins.property
    def detail(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosSavedsearch.DetailProperty]:
        '''
        :Property: detail:
        '''
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosSavedsearch.DetailProperty], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: project: Project name
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSavedsearchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Savedsearch(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Savedsearch",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Savedsearch``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["SavedsearchProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Savedsearch``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[SavedsearchProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSavedsearchName")
    def attr_savedsearch_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute SavedsearchName: Savedsearch name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSavedsearchName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.SavedsearchProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class SavedsearchProps:
    def __init__(
        self,
        *,
        detail: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosSavedsearch.DetailProperty, typing.Dict[str, typing.Any]]],
        project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Savedsearch``.

        :param detail: Property detail:.
        :param project: Property project: Project name.
        '''
        if __debug__:
            def stub(
                *,
                detail: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosSavedsearch.DetailProperty, typing.Dict[str, typing.Any]]],
                project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
        self._values: typing.Dict[str, typing.Any] = {
            "detail": detail,
            "project": project,
        }

    @builtins.property
    def detail(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosSavedsearch.DetailProperty]:
        '''Property detail:.'''
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosSavedsearch.DetailProperty], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property project: Project name.'''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SavedsearchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Alert",
    "AlertProps",
    "ApplyConfigToMachineGroup",
    "ApplyConfigToMachineGroupProps",
    "Audit",
    "AuditProps",
    "Dashboard",
    "DashboardProps",
    "Etl",
    "EtlProps",
    "Index",
    "IndexProps",
    "Logstore",
    "LogstoreProps",
    "LogtailConfig",
    "LogtailConfigProps",
    "MachineGroup",
    "MachineGroupProps",
    "MetricStore",
    "MetricStoreProps",
    "Project",
    "ProjectProps",
    "RosAlert",
    "RosAlertProps",
    "RosApplyConfigToMachineGroup",
    "RosApplyConfigToMachineGroupProps",
    "RosAudit",
    "RosAuditProps",
    "RosDashboard",
    "RosDashboardProps",
    "RosEtl",
    "RosEtlProps",
    "RosIndex",
    "RosIndexProps",
    "RosLogstore",
    "RosLogstoreProps",
    "RosLogtailConfig",
    "RosLogtailConfigProps",
    "RosMachineGroup",
    "RosMachineGroupProps",
    "RosMetricStore",
    "RosMetricStoreProps",
    "RosProject",
    "RosProjectProps",
    "RosSavedsearch",
    "RosSavedsearchProps",
    "Savedsearch",
    "SavedsearchProps",
]

publication.publish()