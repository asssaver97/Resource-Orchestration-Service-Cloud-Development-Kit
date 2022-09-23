'''
## Aliyun ROS OOS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as OOS from '@alicloud/ros-cdk-oos';
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


class Execution(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.Execution",
):
    '''A ROS resource type:  ``ALIYUN::OOS::Execution``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ExecutionProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::OOS::Execution``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(Execution.__init__)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCounters")
    def attr_counters(self) -> ros_cdk_core.IResolvable:
        '''Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCounters"))

    @builtins.property
    @jsii.member(jsii_name="attrCurlCli")
    def attr_curl_cli(self) -> ros_cdk_core.IResolvable:
        '''Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.

        You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
        For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
        You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCurlCli"))

    @builtins.property
    @jsii.member(jsii_name="attrExecutionId")
    def attr_execution_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ExecutionId: Execution ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrExecutionId"))

    @builtins.property
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(self) -> ros_cdk_core.IResolvable:
        '''Attribute Outputs: Execution output.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOutputs"))

    @builtins.property
    @jsii.member(jsii_name="attrPowerShellCurlCli")
    def attr_power_shell_curl_cli(self) -> ros_cdk_core.IResolvable:
        '''Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.

        You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
        For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPowerShellCurlCli"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> ros_cdk_core.IResolvable:
        '''Attribute Status: Execution status.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStatusMessage")
    def attr_status_message(self) -> ros_cdk_core.IResolvable:
        '''Attribute StatusMessage: Execution status information.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatusMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrWindowsCurlCli")
    def attr_windows_curl_cli(self) -> ros_cdk_core.IResolvable:
        '''Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.

        You can notify approve to oos execution by adding --data-binary "{"data": {"NotifyType": "Approve"}}"
        For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWindowsCurlCli"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.ExecutionProps",
    jsii_struct_bases=[],
    name_mapping={
        "template_name": "templateName",
        "mode": "mode",
        "parameters": "parameters",
        "parent_execution_id": "parentExecutionId",
        "resource_group_id": "resourceGroupId",
        "resource_options": "resourceOptions",
        "safety_check": "safetyCheck",
        "tags": "tags",
        "template_version": "templateVersion",
    },
)
class ExecutionProps:
    def __init__(
        self,
        *,
        template_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        parent_execution_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_options: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosExecution.ResourceOptionsProperty", typing.Dict[str, typing.Any]]]] = None,
        safety_check: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        template_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OOS::Execution``.

        :param template_name: Property templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
        :param mode: Property mode: Execution mode.
        :param parameters: Property parameters: Parameters for the execution of template.
        :param parent_execution_id: Property parentExecutionId: Parent execution ID.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param resource_options: Property resourceOptions: Resource options user by ROS.
        :param safety_check: Property safetyCheck: Security check mode. Allowed values: - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic. - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
        :param tags: Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
        :param template_version: Property templateVersion: Version number of template. Default to the latest version.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(ExecutionProps.__init__)
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument mode", value=mode, expected_type=type_hints["mode"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument parent_execution_id", value=parent_execution_id, expected_type=type_hints["parent_execution_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument resource_options", value=resource_options, expected_type=type_hints["resource_options"])
            check_type(argname="argument safety_check", value=safety_check, expected_type=type_hints["safety_check"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument template_version", value=template_version, expected_type=type_hints["template_version"])
        self._values: typing.Dict[str, typing.Any] = {
            "template_name": template_name,
        }
        if mode is not None:
            self._values["mode"] = mode
        if parameters is not None:
            self._values["parameters"] = parameters
        if parent_execution_id is not None:
            self._values["parent_execution_id"] = parent_execution_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if resource_options is not None:
            self._values["resource_options"] = resource_options
        if safety_check is not None:
            self._values["safety_check"] = safety_check
        if tags is not None:
            self._values["tags"] = tags
        if template_version is not None:
            self._values["template_version"] = template_version

    @builtins.property
    def template_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property templateName: Template name.

        Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
        '''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property mode: Execution mode.'''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property parameters: Parameters for the execution of template.'''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def parent_execution_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property parentExecutionId: Parent execution ID.'''
        result = self._values.get("parent_execution_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_options(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosExecution.ResourceOptionsProperty"]]:
        '''Property resourceOptions: Resource options user by ROS.'''
        result = self._values.get("resource_options")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosExecution.ResourceOptionsProperty"]], result)

    @builtins.property
    def safety_check(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property safetyCheck: Security check mode.

        Allowed values:

        - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
        - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
        '''
        result = self._values.get("safety_check")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: Tag value and the key mapping, the label of the key number can be up to 20.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property templateVersion: Version number of template.

        Default to the latest version.
        '''
        result = self._values.get("template_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ExecutionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Parameter(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.Parameter",
):
    '''A ROS resource type:  ``ALIYUN::OOS::Parameter``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ParameterProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::OOS::Parameter``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(Parameter.__init__)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: The Name of the parameter.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrValue")
    def attr_value(self) -> ros_cdk_core.IResolvable:
        '''Attribute Value: The Value of the parameter.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrValue"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.ParameterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "type": "type",
        "value": "value",
        "constraints": "constraints",
        "description": "description",
        "resource_group_id": "resourceGroupId",
    },
)
class ParameterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        constraints: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OOS::Parameter``.

        :param name: Property name: The name of the parameter. The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        :param type: Property type: The data type of the common parameter. Valid values: String and StringList.
        :param value: Property value: The value of the parameter. The value must be 1 to 4096 characters in length.
        :param constraints: Property constraints: The constraints of the parameter. By default, this parameter is null. Valid values: AllowedValues: The value that is allowed for the parameter. It must be an array string. AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression. MinLength: The minimum length of the parameter. MaxLength: The maximum length of the parameter.
        :param description: Property description: The description of the parameter. The description must be 1 to 200 characters in length.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(ParameterProps.__init__)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument constraints", value=constraints, expected_type=type_hints["constraints"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "type": type,
            "value": value,
        }
        if constraints is not None:
            self._values["constraints"] = constraints
        if description is not None:
            self._values["description"] = description
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: The name of the parameter.

        The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
        It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property type: The data type of the common parameter.

        Valid values: String and StringList.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property value: The value of the parameter.

        The value must be 1 to 4096 characters in length.
        '''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def constraints(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property constraints: The constraints of the parameter.

        By default, this parameter is null. Valid values:
        AllowedValues: The value that is allowed for the parameter. It must be an array string.
        AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
        MinLength: The minimum length of the parameter.
        MaxLength: The maximum length of the parameter.
        '''
        result = self._values.get("constraints")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the parameter.

        The description must be 1 to 200 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ParameterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosExecution(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.RosExecution",
):
    '''A ROS template type:  ``ALIYUN::OOS::Execution``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosExecutionProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OOS::Execution``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(RosExecution.__init__)
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
            type_hints = typing.get_type_hints(RosExecution._render_properties)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCounters")
    def attr_counters(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCounters"))

    @builtins.property
    @jsii.member(jsii_name="attrCurlCli")
    def attr_curl_cli(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
        You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
        For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
        You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCurlCli"))

    @builtins.property
    @jsii.member(jsii_name="attrExecutionId")
    def attr_execution_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ExecutionId: Execution ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrExecutionId"))

    @builtins.property
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Outputs: Execution output.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOutputs"))

    @builtins.property
    @jsii.member(jsii_name="attrPowerShellCurlCli")
    def attr_power_shell_curl_cli(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
        You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
        For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPowerShellCurlCli"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Status: Execution status.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStatusMessage")
    def attr_status_message(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: StatusMessage: Execution status information.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatusMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrWindowsCurlCli")
    def attr_windows_curl_cli(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
        You can notify approve to oos execution by adding --data-binary "{"data": {"NotifyType": "Approve"}}"
        For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWindowsCurlCli"))

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
            type_hints = typing.get_type_hints(getattr(RosExecution, "enable_resource_property_constraint").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="templateName")
    def template_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "templateName"))

    @template_name.setter
    def template_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosExecution, "template_name").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateName", value)

    @builtins.property
    @jsii.member(jsii_name="mode")
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: mode: Execution mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "mode"))

    @mode.setter
    def mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosExecution, "mode").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mode", value)

    @builtins.property
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: Parameters for the execution of template.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosExecution, "parameters").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameters", value)

    @builtins.property
    @jsii.member(jsii_name="parentExecutionId")
    def parent_execution_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: parentExecutionId: Parent execution ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "parentExecutionId"))

    @parent_execution_id.setter
    def parent_execution_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosExecution, "parent_execution_id").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parentExecutionId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosExecution, "resource_group_id").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceOptions")
    def resource_options(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosExecution.ResourceOptionsProperty"]]:
        '''
        :Property: resourceOptions: Resource options user by ROS.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosExecution.ResourceOptionsProperty"]], jsii.get(self, "resourceOptions"))

    @resource_options.setter
    def resource_options(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosExecution.ResourceOptionsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosExecution, "resource_options").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceOptions", value)

    @builtins.property
    @jsii.member(jsii_name="safetyCheck")
    def safety_check(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        safetyCheck: Security check mode. Allowed values:

        - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
        - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "safetyCheck"))

    @safety_check.setter
    def safety_check(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosExecution, "safety_check").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "safetyCheck", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Tag value and the key mapping, the label of the key number can be up to 20.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosExecution, "tags").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="templateVersion")
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: templateVersion: Version number of template. Default to the latest version.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "templateVersion"))

    @template_version.setter
    def template_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosExecution, "template_version").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateVersion", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oos.RosExecution.ResourceOptionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "cancel_on_delete": "cancelOnDelete",
            "failure_statuses": "failureStatuses",
            "success_statuses": "successStatuses",
            "timeout": "timeout",
        },
    )
    class ResourceOptionsProperty:
        def __init__(
            self,
            *,
            cancel_on_delete: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            failure_statuses: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            success_statuses: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param cancel_on_delete: 
            :param failure_statuses: 
            :param success_statuses: 
            :param timeout: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(RosExecution.ResourceOptionsProperty.__init__)
                check_type(argname="argument cancel_on_delete", value=cancel_on_delete, expected_type=type_hints["cancel_on_delete"])
                check_type(argname="argument failure_statuses", value=failure_statuses, expected_type=type_hints["failure_statuses"])
                check_type(argname="argument success_statuses", value=success_statuses, expected_type=type_hints["success_statuses"])
                check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            self._values: typing.Dict[str, typing.Any] = {}
            if cancel_on_delete is not None:
                self._values["cancel_on_delete"] = cancel_on_delete
            if failure_statuses is not None:
                self._values["failure_statuses"] = failure_statuses
            if success_statuses is not None:
                self._values["success_statuses"] = success_statuses
            if timeout is not None:
                self._values["timeout"] = timeout

        @builtins.property
        def cancel_on_delete(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: cancelOnDelete: Whether to cancel execution for resource deletion, if the execution is not completed. Default to false.
            '''
            result = self._values.get("cancel_on_delete")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def failure_statuses(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property:

            failureStatuses: It is used for ROS to judge if resource creation fails.
            Default to [Failed, Cancelled].
            ROS will wait util some status in SuccessStatuses or FailureStatuses.
            FailureStatuses has higher priority.
            '''
            result = self._values.get("failure_statuses")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def success_statuses(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property:

            successStatuses: It is used for ROS to judge if resource creation is successful.
            Default to [Success].
            ROS will wait util some status in SuccessStatuses or FailureStatuses.
            FailureStatuses has higher priority.
            Specified all statuses(Started,Queued,Running,Waiting,Success,Failed,Cancelled) if you do not want to wait for the completion of execution.
            '''
            result = self._values.get("success_statuses")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: timeout: Timeout seconds before the completion of execution. Default to 1800.
            '''
            result = self._values.get("timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourceOptionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.RosExecutionProps",
    jsii_struct_bases=[],
    name_mapping={
        "template_name": "templateName",
        "mode": "mode",
        "parameters": "parameters",
        "parent_execution_id": "parentExecutionId",
        "resource_group_id": "resourceGroupId",
        "resource_options": "resourceOptions",
        "safety_check": "safetyCheck",
        "tags": "tags",
        "template_version": "templateVersion",
    },
)
class RosExecutionProps:
    def __init__(
        self,
        *,
        template_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        parent_execution_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_options: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosExecution.ResourceOptionsProperty, typing.Dict[str, typing.Any]]]] = None,
        safety_check: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        template_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OOS::Execution``.

        :param template_name: 
        :param mode: 
        :param parameters: 
        :param parent_execution_id: 
        :param resource_group_id: 
        :param resource_options: 
        :param safety_check: 
        :param tags: 
        :param template_version: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(RosExecutionProps.__init__)
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument mode", value=mode, expected_type=type_hints["mode"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument parent_execution_id", value=parent_execution_id, expected_type=type_hints["parent_execution_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument resource_options", value=resource_options, expected_type=type_hints["resource_options"])
            check_type(argname="argument safety_check", value=safety_check, expected_type=type_hints["safety_check"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument template_version", value=template_version, expected_type=type_hints["template_version"])
        self._values: typing.Dict[str, typing.Any] = {
            "template_name": template_name,
        }
        if mode is not None:
            self._values["mode"] = mode
        if parameters is not None:
            self._values["parameters"] = parameters
        if parent_execution_id is not None:
            self._values["parent_execution_id"] = parent_execution_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if resource_options is not None:
            self._values["resource_options"] = resource_options
        if safety_check is not None:
            self._values["safety_check"] = safety_check
        if tags is not None:
            self._values["tags"] = tags
        if template_version is not None:
            self._values["template_version"] = template_version

    @builtins.property
    def template_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
        '''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: mode: Execution mode.
        '''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: Parameters for the execution of template.
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def parent_execution_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: parentExecutionId: Parent execution ID.
        '''
        result = self._values.get("parent_execution_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_options(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosExecution.ResourceOptionsProperty]]:
        '''
        :Property: resourceOptions: Resource options user by ROS.
        '''
        result = self._values.get("resource_options")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosExecution.ResourceOptionsProperty]], result)

    @builtins.property
    def safety_check(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        safetyCheck: Security check mode. Allowed values:

        - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
        - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
        '''
        result = self._values.get("safety_check")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Tag value and the key mapping, the label of the key number can be up to 20.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: templateVersion: Version number of template. Default to the latest version.
        '''
        result = self._values.get("template_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosExecutionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosParameter(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.RosParameter",
):
    '''A ROS template type:  ``ALIYUN::OOS::Parameter``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosParameterProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OOS::Parameter``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(RosParameter.__init__)
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
            type_hints = typing.get_type_hints(RosParameter._render_properties)
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
        :Attribute: Name: The Name of the parameter.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrValue")
    def attr_value(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Value: The Value of the parameter.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrValue"))

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
            type_hints = typing.get_type_hints(getattr(RosParameter, "enable_resource_property_constraint").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: The name of the parameter.
        The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
        It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosParameter, "name").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        type: The data type of the common parameter.
        Valid values: String and StringList.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosParameter, "type").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="value")
    def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        value: The value of the parameter.
        The value must be 1 to 4096 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "value"))

    @value.setter
    def value(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosParameter, "value").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "value", value)

    @builtins.property
    @jsii.member(jsii_name="constraints")
    def constraints(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        constraints: The constraints of the parameter.
        By default, this parameter is null. Valid values:
        AllowedValues: The value that is allowed for the parameter. It must be an array string.
        AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
        MinLength: The minimum length of the parameter.
        MaxLength: The maximum length of the parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "constraints"))

    @constraints.setter
    def constraints(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosParameter, "constraints").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "constraints", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the parameter.
        The description must be 1 to 200 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosParameter, "description").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosParameter, "resource_group_id").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.RosParameterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "type": "type",
        "value": "value",
        "constraints": "constraints",
        "description": "description",
        "resource_group_id": "resourceGroupId",
    },
)
class RosParameterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        constraints: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OOS::Parameter``.

        :param name: 
        :param type: 
        :param value: 
        :param constraints: 
        :param description: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(RosParameterProps.__init__)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument constraints", value=constraints, expected_type=type_hints["constraints"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
            "type": type,
            "value": value,
        }
        if constraints is not None:
            self._values["constraints"] = constraints
        if description is not None:
            self._values["description"] = description
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: The name of the parameter.
        The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
        It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        type: The data type of the common parameter.
        Valid values: String and StringList.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        value: The value of the parameter.
        The value must be 1 to 4096 characters in length.
        '''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def constraints(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        constraints: The constraints of the parameter.
        By default, this parameter is null. Valid values:
        AllowedValues: The value that is allowed for the parameter. It must be an array string.
        AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
        MinLength: The minimum length of the parameter.
        MaxLength: The maximum length of the parameter.
        '''
        result = self._values.get("constraints")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the parameter.
        The description must be 1 to 200 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosParameterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTemplate(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.RosTemplate",
):
    '''A ROS template type:  ``ALIYUN::OOS::Template``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosTemplateProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OOS::Template``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(RosTemplate.__init__)
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
            type_hints = typing.get_type_hints(RosTemplate._render_properties)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrExecutionPolicy")
    def attr_execution_policy(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ExecutionPolicy: Execution Policy
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrExecutionPolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TemplateId: Template ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateName")
    def attr_template_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TemplateName: Template Name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTemplateName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="content")
    def content(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "content"))

    @content.setter
    def content(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosTemplate, "content").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "content", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosTemplate, "enable_resource_property_constraint").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="templateName")
    def template_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "templateName"))

    @template_name.setter
    def template_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosTemplate, "template_name").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosTemplate, "resource_group_id").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Tag value and the key mapping, the label of the key number can be up to 20.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(getattr(RosTemplate, "tags").fset)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.RosTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "content": "content",
        "template_name": "templateName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosTemplateProps:
    def __init__(
        self,
        *,
        content: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        template_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OOS::Template``.

        :param content: 
        :param template_name: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(RosTemplateProps.__init__)
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[str, typing.Any] = {
            "content": content,
            "template_name": template_name,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def content(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
        '''
        result = self._values.get("content")
        assert result is not None, "Required property 'content' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def template_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
        '''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Tag value and the key mapping, the label of the key number can be up to 20.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Template(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.Template",
):
    '''A ROS resource type:  ``ALIYUN::OOS::Template``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["TemplateProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::OOS::Template``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(Template.__init__)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrExecutionPolicy")
    def attr_execution_policy(self) -> ros_cdk_core.IResolvable:
        '''Attribute ExecutionPolicy: Execution Policy.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrExecutionPolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TemplateId: Template ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateName")
    def attr_template_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute TemplateName: Template Name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTemplateName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.TemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "content": "content",
        "template_name": "templateName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class TemplateProps:
    def __init__(
        self,
        *,
        content: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        template_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OOS::Template``.

        :param content: Property content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
        :param template_name: Property templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(TemplateProps.__init__)
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[str, typing.Any] = {
            "content": content,
            "template_name": template_name,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def content(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property content: The content of the template.

        The template must be in the JSON or YAML format. Maximum size: 64 KB.
        '''
        result = self._values.get("content")
        assert result is not None, "Required property 'content' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def template_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property templateName: The name of the template.

        The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
        '''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: Tag value and the key mapping, the label of the key number can be up to 20.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Execution",
    "ExecutionProps",
    "Parameter",
    "ParameterProps",
    "RosExecution",
    "RosExecutionProps",
    "RosParameter",
    "RosParameterProps",
    "RosTemplate",
    "RosTemplateProps",
    "Template",
    "TemplateProps",
]

publication.publish()
