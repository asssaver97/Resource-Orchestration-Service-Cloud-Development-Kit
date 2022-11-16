"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTagPropertyStringMap = exports.isTagPropertyJson = exports.isTagPropertyAutoScalingGroup = exports.isTagPropertyStandard = exports.isTagProperty = exports.isTagPropertyName = exports.isUnionProperty = exports.isComplexMapProperty = exports.isPrimitiveMapProperty = exports.isMapProperty = exports.isComplexListProperty = exports.isPrimitiveListProperty = exports.isListProperty = exports.isCollectionProperty = exports.isComplexProperty = exports.isPrimitiveProperty = exports.isScalarProperty = exports.isUpdateType = exports.UpdateType = void 0;
const base_types_1 = require("./base-types");
var UpdateType;
(function (UpdateType) {
    UpdateType["Conditional"] = "Conditional";
    UpdateType["Immutable"] = "Immutable";
    UpdateType["Mutable"] = "Mutable";
})(UpdateType = exports.UpdateType || (exports.UpdateType = {}));
function isUpdateType(str) {
    switch (str) {
        case UpdateType.Conditional:
        case UpdateType.Immutable:
        case UpdateType.Mutable:
            return true;
        default:
            return false;
    }
}
exports.isUpdateType = isUpdateType;
function isScalarProperty(prop) {
    return (isPrimitiveProperty(prop) ||
        isComplexProperty(prop) ||
        // A UnionProperty is only Scalar if it defines Types or PrimitiveTypes
        (isUnionProperty(prop) && !!(prop.Types || prop.PrimitiveTypes)));
}
exports.isScalarProperty = isScalarProperty;
function isPrimitiveProperty(prop) {
    return !!prop.PrimitiveType;
}
exports.isPrimitiveProperty = isPrimitiveProperty;
function isComplexProperty(prop) {
    const propType = prop.Type;
    return propType != null && propType !== 'Map' && propType !== 'List';
}
exports.isComplexProperty = isComplexProperty;
function isCollectionProperty(prop) {
    return (isListProperty(prop) ||
        isMapProperty(prop) ||
        // A UnionProperty is only Collection if it defines ItemTypes or PrimitiveItemTypes
        (isUnionProperty(prop) && !!(prop.ItemTypes || prop.PrimitiveItemTypes)));
}
exports.isCollectionProperty = isCollectionProperty;
function isListProperty(prop) {
    return prop.Type === 'List';
}
exports.isListProperty = isListProperty;
function isPrimitiveListProperty(prop) {
    return isListProperty(prop) && !!prop.PrimitiveItemType;
}
exports.isPrimitiveListProperty = isPrimitiveListProperty;
function isComplexListProperty(prop) {
    return isListProperty(prop) && !!prop.ItemType;
}
exports.isComplexListProperty = isComplexListProperty;
function isMapProperty(prop) {
    return prop.Type === 'Map';
}
exports.isMapProperty = isMapProperty;
function isPrimitiveMapProperty(prop) {
    return isMapProperty(prop) && !!prop.PrimitiveItemType;
}
exports.isPrimitiveMapProperty = isPrimitiveMapProperty;
function isComplexMapProperty(prop) {
    return isMapProperty(prop) && !!prop.ItemType;
}
exports.isComplexMapProperty = isComplexMapProperty;
function isUnionProperty(prop) {
    const castProp = prop;
    return !!(castProp.ItemTypes || castProp.PrimitiveTypes || castProp.Types);
}
exports.isUnionProperty = isUnionProperty;
const tagPropertyNames = {
    FileSystemTags: '',
    HostedZoneTags: '',
    Tags: '',
    UserPoolTags: '',
};
function isTagPropertyName(name) {
    if (undefined === name) {
        return false;
    }
    return tagPropertyNames.hasOwnProperty(name);
}
exports.isTagPropertyName = isTagPropertyName;
/**
 * This function validates that the property **can** be a Tag Property
 *
 * The property is only a Tag if the name of this property is Tags, which is
 * validated using `ResourceType.isTaggable(resource)`.
 */
function isTagProperty(prop) {
    return (isTagPropertyStandard(prop) ||
        isTagPropertyAutoScalingGroup(prop) ||
        isTagPropertyJson(prop) ||
        isTagPropertyStringMap(prop));
}
exports.isTagProperty = isTagProperty;
function isTagPropertyStandard(prop) {
    return (prop.ItemType === 'Tag' ||
        prop.ItemType === 'TagsEntry' ||
        prop.Type === 'Tags' ||
        prop.ItemType === 'TagRef' ||
        prop.ItemType === 'ElasticFileSystemTag' ||
        prop.ItemType === 'HostedZoneTag');
}
exports.isTagPropertyStandard = isTagPropertyStandard;
function isTagPropertyAutoScalingGroup(prop) {
    return prop.ItemType === 'TagProperty';
}
exports.isTagPropertyAutoScalingGroup = isTagPropertyAutoScalingGroup;
function isTagPropertyJson(prop) {
    return prop.PrimitiveType === base_types_1.PrimitiveType.Json;
}
exports.isTagPropertyJson = isTagPropertyJson;
function isTagPropertyStringMap(prop) {
    return prop.PrimitiveItemType === 'String';
}
exports.isTagPropertyStringMap = isTagPropertyStringMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBeUQ7QUFxSHpELElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNwQix5Q0FBMkIsQ0FBQTtJQUMzQixxQ0FBdUIsQ0FBQTtJQUN2QixpQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckI7QUFFRCxTQUFnQixZQUFZLENBQUMsR0FBVztJQUN0QyxRQUFRLEdBQUcsRUFBRTtRQUNYLEtBQUssVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1QixLQUFLLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDMUIsS0FBSyxVQUFVLENBQUMsT0FBTztZQUNyQixPQUFPLElBQUksQ0FBQztRQUNkO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBVEQsb0NBU0M7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxJQUFjO0lBQzdDLE9BQU8sQ0FDTCxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7UUFDekIsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLHVFQUF1RTtRQUN2RSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUNqRSxDQUFDO0FBQ0osQ0FBQztBQVBELDRDQU9DO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsSUFBYztJQUNoRCxPQUFPLENBQUMsQ0FBRSxJQUEwQixDQUFDLGFBQWEsQ0FBQztBQUNyRCxDQUFDO0FBRkQsa0RBRUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxJQUFjO0lBQzlDLE1BQU0sUUFBUSxHQUFJLElBQXdCLENBQUMsSUFBSSxDQUFDO0lBQ2hELE9BQU8sUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLEtBQUssS0FBSyxJ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QzNELENBQUM7QUFDSixDQUFDO0FBVEQsc0RBU0M7QUFFRCxTQUFnQiw2QkFBNkIsQ0FBQyxJQUFjO0lBQzFELE9BQVEsSUFBb0MsQ0FBQyxRQUFRLEtBQUssYUFBYSxDQUFDO0FBQzFFLENBQUM7QUFGRCxzRUFFQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLElBQWM7SUFDOUMsT0FBUSxJQUF3QixDQUFDLGFBQWEsS0FBSywwQkFBYSxDQUFDLElBQUksQ0FBQztBQUN4RSxDQUFDO0FBRkQsOENBRUM7QUFFRCxTQUFnQixzQkFBc0IsQ0FBQyxJQUFjO0lBQ25ELE9BQVEsSUFBNkIsQ0FBQyxpQkFBaUIsS0FBSyxRQUFRLENBQUM7QUFDdkUsQ0FBQztBQUZELHdEQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnRlZCwgUHJpbWl0aXZlVHlwZSB9IGZyb20gJy4vYmFzZS10eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFByb3BlcnR5ID0gU2NhbGFyUHJvcGVydHkgfCBDb2xsZWN0aW9uUHJvcGVydHk7XG5leHBvcnQgdHlwZSBTY2FsYXJQcm9wZXJ0eSA9IFByaW1pdGl2ZVByb3BlcnR5IHwgQ29tcGxleFByb3BlcnR5IHwgVW5pb25Qcm9wZXJ0eTtcbmV4cG9ydCB0eXBlIENvbGxlY3Rpb25Qcm9wZXJ0eSA9IExpc3RQcm9wZXJ0eSB8IE1hcFByb3BlcnR5IHwgVW5pb25Qcm9wZXJ0eTtcbmV4cG9ydCB0eXBlIExpc3RQcm9wZXJ0eSA9IFByaW1pdGl2ZUxpc3RQcm9wZXJ0eSB8IENvbXBsZXhMaXN0UHJvcGVydHk7XG5leHBvcnQgdHlwZSBNYXBQcm9wZXJ0eSA9IFByaW1pdGl2ZU1hcFByb3BlcnR5IHwgQ29tcGxleE1hcFByb3BlcnR5O1xuZXhwb3J0IHR5cGUgVGFnUHJvcGVydHkgPSBUYWdQcm9wZXJ0eVN0YW5kYXJkIHwgVGFnUHJvcGVydHlBdXRvU2NhbGluZ0dyb3VwIHwgVGFnUHJvcGVydHlKc29uIHwgVGFnUHJvcGVydHlTdHJpbmdNYXA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlCYXNlIGV4dGVuZHMgRG9jdW1lbnRlZCB7XG4gIENvbnN0cmFpbnRzPzogW09iamVjdF07XG4gIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBUeXBlPzogc3RyaW5nO1xuXG4gIERlZmF1bHQ/OiBhbnk7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWQuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBSZXF1aXJlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEdXJpbmcgYSBzdGFjayB1cGRhdGUsIHRoZSB1cGRhdGUgYmVoYXZpb3Igd2hlbiB5b3UgYWRkLCByZW1vdmUsIG9yIG1vZGlmeSB0aGUgcHJvcGVydHkuIFJPU1xuICAgKiByZXBsYWNlcyB0aGUgcmVzb3VyY2Ugd2hlbiB5b3UgY2hhbmdlIGDDjG1tdXRhYmxlYGBwcm9wZXJ0aWVzLiBST1MgZG9lc24ndCByZXBsYWNlIHRoZSByZXNvdXJjZVxuICAgKiB3aGVuIHlvdSBjaGFuZ2UgYGBNdXRhYmxlYGAgcHJvcGVydGllcy4gYGBDb25kaXRpb25hbGBgIHVwZGF0ZXMgY2FuIGJlIG11dGFibGUgb3IgaW1tdXRhYmxlLCBkZXBlbmRpbmcgb24sIGZvclxuICAgKiBleGFtcGxlLCB3aGljaCBvdGhlciBwcm9wZXJ0aWVzIHlvdSB1cGRhdGVkLlxuICAgKlxuICAgKiBAZGVmYXVsdCBVcGRhdGVUeXBlLk11dGFibGVcbiAgICovXG4gIFVwZGF0ZVR5cGU/OiBVcGRhdGVUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaW1pdGl2ZVByb3BlcnR5IGV4dGVuZHMgUHJvcGVydHlCYXNlIHtcbiAgLyoqIFRoZSB2YWxpZCBwcmltaXRpdmUgdHlwZSBmb3IgdGhlIHByb3BlcnR5LiAqL1xuICBQcmltaXRpdmVUeXBlOiBQcmltaXRpdmVUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXhQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5QmFzZSB7XG4gIC8qKiBUaGUgdHlwZSBvZiB2YWxpZCB2YWx1ZXMgZm9yIHRoaXMgcHJvcGVydHkgKi9cbiAgVHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RQcm9wZXJ0eUJhc2UgZXh0ZW5kcyBQcm9wZXJ0eUJhc2Uge1xuICAvKipcbiAgICogQSBsaXN0IGlzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdmFsdWVzLlxuICAgKi9cbiAgVHlwZTogJ0xpc3QnO1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgUk9TIGFsbG93cyBkdXBsaWNhdGUgdmFsdWVzLiBJZiB0aGUgdmFsdWUgaXMgYGB0cnVlYGAsIFJPU1xuICAgKiBpZ25vcmVzIGR1cGxpY2F0ZSB2YWx1ZXMuIGlmIHRoZSB2YWx1ZSBpcyAgYGBmYWxzZWBgLCBST1MgcmV0dXJucyBhbiBhcnJvciBpZiB5b3Ugc3VibWl0IGR1cGxpY2F0ZVxuICAgKiB2YWx1ZXMuXG4gICAqL1xuICBEdXBsaWNhdGVzQWxsb3dlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbWl0aXZlTGlzdFByb3BlcnR5IGV4dGVuZHMgTGlzdFByb3BlcnR5QmFzZSB7XG4gIC8qKiBUaGUgdmFsaWQgcHJpbWl0aXZlIHR5cGUgZm9yIHRoZSBwcm9wZXJ0eS4gKi9cbiAgUHJpbWl0aXZlSXRlbVR5cGU6IFByaW1pdGl2ZVR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGxleExpc3RQcm9wZXJ0eSBleHRlbmRzIExpc3RQcm9wZXJ0eUJhc2Uge1xuICAvKiogVmFsaWQgdmFsdWVzIGZvciB0aGUgcHJvcGVydHkgKi9cbiAgSXRlbVR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXBQcm9wZXJ0eUJhc2UgZXh0ZW5kcyBQcm9wZXJ0eUJhc2Uge1xuICAvKiogQSBtYXAgaXMgYSBzZXQgb2Yga2V5LXZhbHVlIHBhaXJzLCB3aGVyZSB0aGUga2V5cyBhcmUgYWx3YXlzIHN0cmluZ3MuICovXG4gIFR5cGU6ICdNYXAnO1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgUk9TIGFsbG93cyBkdXBsaWNhdGUgdmFsdWVzLiBJZiB0aGUgdmFsdWUgaXMgYGB0cnVlYGAsIFJPU1xuICAgKiBpZ25vcmVzIGR1cGxpY2F0ZSB2YWx1ZXMuIGlmIHRoZSB2YWx1ZSBpcyAgYGBmYWxzZWBgLCBST1MgcmV0dXJucyBhbiBhcnJvciBpZiB5b3Ugc3VibWl0IGR1cGxpY2F0ZVxuICAgKiB2YWx1ZXMuXG4gICAqL1xuICBEdXBsaWNhdGVzQWxsb3dlZD86IGZhbHNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaW1pdGl2ZU1hcFByb3BlcnR5IGV4dGVuZHMgTWFwUHJvcGVydHlCYXNlIHtcbiAgLyoqIFRoZSB2YWxpZCBwcmltaXRpdmUgdHlwZSBmb3IgdGhlIHByb3BlcnR5LiAqL1xuICBQcmltaXRpdmVJdGVtVHlwZTogUHJpbWl0aXZlVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wbGV4TWFwUHJvcGVydHkgZXh0ZW5kcyBNYXBQcm9wZXJ0eUJhc2Uge1xuICAvKiogVmFsaWQgdmFsdWVzIGZvciB0aGUgcHJvcGVydHkgKi9cbiAgSXRlbVR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWdQcm9wZXJ0eVN0YW5kYXJkIGV4dGVuZHMgUHJvcGVydHlCYXNlIHtcbiAgSXRlbVR5cGU6ICdUYWcnIHwgJ1RhZ3NFbnRyeScgfCAnVGFnUmVmJyB8ICdFbGFzdGljRmlsZVN5c3RlbVRhZycgfCAnSG9zdGVkWm9uZVRhZyc7XG4gIFR5cGU6ICdUYWdzJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWdQcm9wZXJ0eUF1dG9TY2FsaW5nR3JvdXAgZXh0ZW5kcyBQcm9wZXJ0eUJhc2Uge1xuICBJdGVtVHlwZTogJ1RhZ1Byb3BlcnR5Jztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWdQcm9wZXJ0eUpzb24gZXh0ZW5kcyBQcm9wZXJ0eUJhc2Uge1xuICBQcmltaXRpdmVUeXBlOiBQcmltaXRpdmVUeXBlLkpzb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnUHJvcGVydHlTdHJpbmdNYXAgZXh0ZW5kcyBQcm9wZXJ0eUJhc2Uge1xuICBQcmltaXRpdmVJdGVtVHlwZTogJ1N0cmluZyc7XG59XG5cbi8qKlxuICogQSBwcm9wZXJ0eSB0eXBlIHRoYXQgY2FuIGJlIG9uZSBvZiBzZXZlcmFsIHR5cGVzLiBDdXJyZW50bHkgdXNlZCBvbmx5IGluIFNBTS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVbmlvblByb3BlcnR5IGV4dGVuZHMgUHJvcGVydHlCYXNlIHtcbiAgLyoqIFZhbGlkIHByaW1pdGl2ZSB0eXBlcyBmb3IgdGhlIHByb3BlcnR5ICovXG4gIFByaW1pdGl2ZVR5cGVzPzogUHJpbWl0aXZlVHlwZVtdO1xuICAvKiogVmFsaWQgY29tcGxleCB0eXBlcyBmb3IgdGhlIHByb3BlcnR5ICovXG4gIFR5cGVzPzogc3RyaW5nW107XG4gIC8qKiBWYWxpZCBwcmltaXRpdmUgaXRlbSB0eXBlcyBmb3IgdGhpcyBwcm9wZXJ0eSAqL1xuICBQcmltaXRpdmVJdGVtVHlwZXM/OiBQcmltaXRpdmVUeXBlW107XG4gIC8qKiBWYWxpZCBsaXN0IGl0ZW0gdHlwZXMgZm9yIHRoZSBwcm9wZXJ0eSAqL1xuICBJdGVtVHlwZXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGVudW0gVXBkYXRlVHlwZSB7XG4gIENvbmRpdGlvbmFsID0gJ0NvbmRpdGlvbmFsJyxcbiAgSW1tdXRhYmxlID0gJ0ltbXV0YWJsZScsXG4gIE11dGFibGUgPSAnTXV0YWJsZScsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VwZGF0ZVR5cGUoc3RyOiBzdHJpbmcpOiBzdHIgaXMgVXBkYXRlVHlwZSB7XG4gIHN3aXRjaCAoc3RyKSB7XG4gICAgY2FzZSBVcGRhdGVUeXBlLkNvbmRpdGlvbmFsOlxuICAgIGNhc2UgVXBkYXRlVHlwZS5JbW11dGFibGU6XG4gICAgY2FzZSBVcGRhdGVUeXBlLk11dGFibGU6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NjYWxhclByb3BlcnR5KHByb3A6IFByb3BlcnR5KTogcHJvcCBpcyBTY2FsYXJQcm9wZXJ0eSB7XG4gIHJldHVybiAoXG4gICAgaXNQcmltaXRpdmVQcm9wZXJ0eShwcm9wKSB8fFxuICAgIGlzQ29tcGxleFByb3BlcnR5KHByb3ApIHx8XG4gICAgLy8gQSBVbmlvblByb3BlcnR5IGlzIG9ubHkgU2NhbGFyIGlmIGl0IGRlZmluZXMgVHlwZXMgb3IgUHJpbWl0aXZlVHlwZXNcbiAgICAoaXNVbmlvblByb3BlcnR5KHByb3ApICYmICEhKHByb3AuVHlwZXMgfHwgcHJvcC5QcmltaXRpdmVUeXBlcykpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1pdGl2ZVByb3BlcnR5KHByb3A6IFByb3BlcnR5KTogcHJvcCBpcyBQcmltaXRpdmVQcm9wZXJ0eSB7XG4gIHJldHVybiAhIShwcm9wIGFzIFByaW1pdGl2ZVByb3BlcnR5KS5QcmltaXRpdmVUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wbGV4UHJvcGVydHkocHJvcDogUHJvcGVydHkpOiBwcm9wIGlzIENvbXBsZXhQcm9wZXJ0eSB7XG4gIGNvbnN0IHByb3BUeXBlID0gKHByb3AgYXMgQ29tcGxleFByb3BlcnR5KS5UeXBlO1xuICByZXR1cm4gcHJvcFR5cGUgIT0gbnVsbCAmJiBwcm9wVHlwZSAhPT0gJ01hcCcgJiYgcHJvcFR5cGUgIT09ICdMaXN0Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29sbGVjdGlvblByb3BlcnR5KHByb3A6IFByb3BlcnR5KTogcHJvcCBpcyBDb2xsZWN0aW9uUHJvcGVydHkge1xuICByZXR1cm4gKFxuICAgIGlzTGlzdFByb3BlcnR5KHByb3ApIHx8XG4gICAgaXNNYXBQcm9wZXJ0eShwcm9wKSB8fFxuICAgIC8vIEEgVW5pb25Qcm9wZXJ0eSBpcyBvbmx5IENvbGxlY3Rpb24gaWYgaXQgZGVmaW5lcyBJdGVtVHlwZXMgb3IgUHJpbWl0aXZlSXRlbVR5cGVzXG4gICAgKGlzVW5pb25Qcm9wZXJ0eShwcm9wKSAmJiAhIShwcm9wLkl0ZW1UeXBlcyB8fCBwcm9wLlByaW1pdGl2ZUl0ZW1UeXBlcykpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xpc3RQcm9wZXJ0eShwcm9wOiBQcm9wZXJ0eSk6IHByb3AgaXMgTGlzdFByb3BlcnR5IHtcbiAgcmV0dXJuIChwcm9wIGFzIExpc3RQcm9wZXJ0eSkuVHlwZSA9PT0gJ0xpc3QnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmVMaXN0UHJvcGVydHkocHJvcDogUHJvcGVydHkpOiBwcm9wIGlzIFByaW1pdGl2ZUxpc3RQcm9wZXJ0eSB7XG4gIHJldHVybiBpc0xpc3RQcm9wZXJ0eShwcm9wKSAmJiAhIShwcm9wIGFzIFByaW1pdGl2ZUxpc3RQcm9wZXJ0eSkuUHJpbWl0aXZlSXRlbVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBsZXhMaXN0UHJvcGVydHkocHJvcDogUHJvcGVydHkpOiBwcm9wIGlzIENvbXBsZXhMaXN0UHJvcGVydHkge1xuICByZXR1cm4gaXNMaXN0UHJvcGVydHkocHJvcCkgJiYgISEocHJvcCBhcyBDb21wbGV4TGlzdFByb3BlcnR5KS5JdGVtVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWFwUHJvcGVydHkocHJvcDogUHJvcGVydHkpOiBwcm9wIGlzIE1hcFByb3BlcnR5IHtcbiAgcmV0dXJuIChwcm9wIGFzIE1hcFByb3BlcnR5KS5UeXBlID09PSAnTWFwJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlTWFwUHJvcGVydHkocHJvcDogUHJvcGVydHkpOiBwcm9wIGlzIFByaW1pdGl2ZU1hcFByb3BlcnR5IHtcbiAgcmV0dXJuIGlzTWFwUHJvcGVydHkocHJvcCkgJiYgISEocHJvcCBhcyBQcmltaXRpdmVNYXBQcm9wZXJ0eSkuUHJpbWl0aXZlSXRlbVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBsZXhNYXBQcm9wZXJ0eShwcm9wOiBQcm9wZXJ0eSk6IHByb3AgaXMgQ29tcGxleE1hcFByb3BlcnR5IHtcbiAgcmV0dXJuIGlzTWFwUHJvcGVydHkocHJvcCkgJiYgISEocHJvcCBhcyBDb21wbGV4TWFwUHJvcGVydHkpLkl0ZW1UeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmlvblByb3BlcnR5KHByb3A6IFByb3BlcnR5KTogcHJvcCBpcyBVbmlvblByb3BlcnR5IHtcbiAgY29uc3QgY2FzdFByb3AgPSBwcm9wIGFzIFVuaW9uUHJvcGVydHk7XG4gIHJldHVybiAhIShjYXN0UHJvcC5JdGVtVHlwZXMgfHwgY2FzdFByb3AuUHJpbWl0aXZlVHlwZXMgfHwgY2FzdFByb3AuVHlwZXMpO1xufVxuXG5jb25zdCB0YWdQcm9wZXJ0eU5hbWVzID0ge1xuICBGaWxlU3lzdGVtVGFnczogJycsXG4gIEhvc3RlZFpvbmVUYWdzOiAnJyxcbiAgVGFnczogJycsXG4gIFVzZXJQb29sVGFnczogJycsXG59O1xuXG5leHBvcnQgdHlwZSBUYWdQcm9wZXJ0eU5hbWUgPSBrZXlvZiB0eXBlb2YgdGFnUHJvcGVydHlOYW1lcztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGFnUHJvcGVydHlOYW1lKG5hbWU/OiBzdHJpbmcpOiBuYW1lIGlzIFRhZ1Byb3BlcnR5TmFtZSB7XG4gIGlmICh1bmRlZmluZWQgPT09IG5hbWUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRhZ1Byb3BlcnR5TmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSk7XG59XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gdmFsaWRhdGVzIHRoYXQgdGhlIHByb3BlcnR5ICoqY2FuKiogYmUgYSBUYWcgUHJvcGVydHlcbiAqXG4gKiBUaGUgcHJvcGVydHkgaXMgb25seSBhIFRhZyBpZiB0aGUgbmFtZSBvZiB0aGlzIHByb3BlcnR5IGlzIFRhZ3MsIHdoaWNoIGlzXG4gKiB2YWxpZGF0ZWQgdXNpbmcgYFJlc291cmNlVHlwZS5pc1RhZ2dhYmxlKHJlc291cmNlKWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RhZ1Byb3BlcnR5KHByb3A6IFByb3BlcnR5KTogcHJvcCBpcyBUYWdQcm9wZXJ0eSB7XG4gIHJldHVybiAoXG4gICAgaXNUYWdQcm9wZXJ0eVN0YW5kYXJkKHByb3ApIHx8XG4gICAgaXNUYWdQcm9wZXJ0eUF1dG9TY2FsaW5nR3JvdXAocHJvcCkgfHxcbiAgICBpc1RhZ1Byb3BlcnR5SnNvbihwcm9wKSB8fFxuICAgIGlzVGFnUHJvcGVydHlTdHJpbmdNYXAocHJvcClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGFnUHJvcGVydHlTdGFuZGFyZChwcm9wOiBQcm9wZXJ0eSk6IHByb3AgaXMgVGFnUHJvcGVydHlTdGFuZGFyZCB7XG4gIHJldHVybiAoXG4gICAgKHByb3AgYXMgVGFnUHJvcGVydHlTdGFuZGFyZCkuSXRlbVR5cGUgPT09ICdUYWcnIHx8XG4gICAgKHByb3AgYXMgVGFnUHJvcGVydHlTdGFuZGFyZCkuSXRlbVR5cGUgPT09ICdUYWdzRW50cnknIHx8XG4gICAgKHByb3AgYXMgVGFnUHJvcGVydHlTdGFuZGFyZCkuVHlwZSA9PT0gJ1RhZ3MnIHx8XG4gICAgKHByb3AgYXMgVGFnUHJvcGVydHlTdGFuZGFyZCkuSXRlbVR5cGUgPT09ICdUYWdSZWYnIHx8XG4gICAgKHByb3AgYXMgVGFnUHJvcGVydHlTdGFuZGFyZCkuSXRlbVR5cGUgPT09ICdFbGFzdGljRmlsZVN5c3RlbVRhZycgfHxcbiAgICAocHJvcCBhcyBUYWdQcm9wZXJ0eVN0YW5kYXJkKS5JdGVtVHlwZSA9PT0gJ0hvc3RlZFpvbmVUYWcnXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RhZ1Byb3BlcnR5QXV0b1NjYWxpbmdHcm91cChwcm9wOiBQcm9wZXJ0eSk6IHByb3AgaXMgVGFnUHJvcGVydHlBdXRvU2NhbGluZ0dyb3VwIHtcbiAgcmV0dXJuIChwcm9wIGFzIFRhZ1Byb3BlcnR5QXV0b1NjYWxpbmdHcm91cCkuSXRlbVR5cGUgPT09ICdUYWdQcm9wZXJ0eSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RhZ1Byb3BlcnR5SnNvbihwcm9wOiBQcm9wZXJ0eSk6IHByb3AgaXMgVGFnUHJvcGVydHlKc29uIHtcbiAgcmV0dXJuIChwcm9wIGFzIFRhZ1Byb3BlcnR5SnNvbikuUHJpbWl0aXZlVHlwZSA9PT0gUHJpbWl0aXZlVHlwZS5Kc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUYWdQcm9wZXJ0eVN0cmluZ01hcChwcm9wOiBQcm9wZXJ0eSk6IHByb3AgaXMgVGFnUHJvcGVydHlTdHJpbmdNYXAge1xuICByZXR1cm4gKHByb3AgYXMgVGFnUHJvcGVydHlTdHJpbmdNYXApLlByaW1pdGl2ZUl0ZW1UeXBlID09PSAnU3RyaW5nJztcbn1cbiJdfQ==