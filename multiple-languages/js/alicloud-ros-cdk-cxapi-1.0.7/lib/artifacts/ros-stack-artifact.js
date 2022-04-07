"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosStackArtifact = void 0;
const cxschema = require("@alicloud/ros-cdk-assembly-schema");
const fs = require("fs");
const path = require("path");
const cloud_artifact_1 = require("../cloud-artifact");
class RosStackArtifact extends cloud_artifact_1.CloudArtifact {
    constructor(assembly, artifactId, artifact) {
        var _a;
        super(assembly, artifactId, artifact);
        const properties = (this.manifest.properties ||
            {});
        if (!properties.templateFile) {
            throw new Error('Invalid ROS stack artifact. Missing "templateFile" property in cloud assembly manifest');
        }
        this.templateFile = properties.templateFile;
        this.parameters = properties.parameters || {};
        this.stackName = properties.stackName || artifactId;
        this.displayName =
            this.stackName === artifactId
                ? this.stackName
                : `${artifactId} (${this.stackName})`;
        this.name = this.stackName; // backwards compat
        this.originalName = this.stackName;
        this.tags = (_a = properties.tags) !== null && _a !== void 0 ? _a : this.tagsFromMetadata();
    }
    /**
     * The ROS template for this stack.
     */
    get template() {
        if (this._template === undefined) {
            this._template = JSON.parse(fs.readFileSync(path.join(this.assembly.directory, this.templateFile), "utf-8"));
        }
        return this._template;
    }
    tagsFromMetadata() {
        var _a;
        const ret = {};
        for (const metadataEntry of this.findMetadataByType(cxschema.ArtifactMetadataEntryType.STACK_TAGS)) {
            for (const tag of ((_a = metadataEntry.data) !== null && _a !== void 0 ? _a : [])) {
                ret[tag.key] = tag.value;
            }
        }
        return ret;
    }
}
exports.RosStackArtifact = RosStackArtifact;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXN0YWNrLWFydGlmYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9zLXN0YWNrLWFydGlmYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhEQUE4RDtBQUM5RCx5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLHNEQUFrRDtBQUdsRCxNQUFhLGdCQUFpQixTQUFRLDhCQUFhO0lBc0NqRCxZQUNFLFFBQXVCLEVBQ3ZCLFVBQWtCLEVBQ2xCLFFBQW1DOztRQUVuQyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUV0QyxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTtZQUMxQyxFQUFFLENBQXNDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FDYix3RkFBd0YsQ0FDekYsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVztZQUNkLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVTtnQkFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUNoQixDQUFDLENBQUMsR0FBRyxVQUFVLEtBQUssSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG1CQUFtQjtRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksU0FBRyxVQUFVLENBQUMsSUFBSSxtQ0FBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLFFBQVE7UUFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQ3pCLEVBQUUsQ0FBQyxZQUFZLENBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQ3JELE9BQU8sQ0FDUixDQUNGLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRU8sZ0JBQWdCOztRQUN0QixNQUFNLEdBQUcsR0FBMkIsRUFBRSxDQUFDO1FBQ3ZDLEtBQUssTUFBTSxhQUFhLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNsRyxLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQUMsYUFBYSxDQUFDLElBQUksbUNBQUksRUFBRSxDQUFvQyxFQUFFO2dCQUMvRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDMUI7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBekZELDRDQXlGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4c2NoZW1hIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1hc3NlbWJseS1zY2hlbWFcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgQ2xvdWRBcnRpZmFjdCB9IGZyb20gXCIuLi9jbG91ZC1hcnRpZmFjdFwiO1xuaW1wb3J0IHsgQ2xvdWRBc3NlbWJseSB9IGZyb20gXCIuLi9jbG91ZC1hc3NlbWJseVwiO1xuXG5leHBvcnQgY2xhc3MgUm9zU3RhY2tBcnRpZmFjdCBleHRlbmRzIENsb3VkQXJ0aWZhY3Qge1xuICAvKipcbiAgICogVGhlIGZpbGUgbmFtZSBvZiB0aGUgdGVtcGxhdGUuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdGVtcGxhdGVGaWxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBvcmlnaW5hbCBuYW1lIGFzIGRlZmluZWQgaW4gdGhlIENESyBhcHAuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgb3JpZ2luYWxOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJPUyBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIHN0YWNrLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHBhcmFtZXRlcnM6IHsgW2lkOiBzdHJpbmddOiBzdHJpbmcgfTtcblxuICAvKipcbiAgICogVGhlIHBoeXNpY2FsIG5hbWUgb2YgdGhpcyBzdGFjay5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzdGFja05hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoaXMgc3RhY2suIFNob3VsZCBvbmx5IGJlIHVzZWQgaW4gdXNlciBpbnRlcmZhY2VzLlxuICAgKiBJZiB0aGUgc3RhY2tOYW1lIGFuZCBhcnRpZmFjdElkIGFyZSB0aGUgc2FtZSwgaXQgd2lsbCBqdXN0IHJldHVybiB0aGF0LiBPdGhlcndpc2UsXG4gICAqIGl0IHdpbGwgcmV0dXJuIHNvbWV0aGluZyBsaWtlIFwiPGFydGlmYWN0SWQ+ICg8c3RhY2tOYW1lPilcIlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGRpc3BsYXlOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwaHlzaWNhbCBuYW1lIG9mIHRoaXMgc3RhY2suXG4gICAqIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gYHN0YWNrTmFtZWBcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgcHVibGljIHJlYWRvbmx5IHRhZ3M6IGFueTtcblxuICBwcml2YXRlIF90ZW1wbGF0ZTogYW55IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFzc2VtYmx5OiBDbG91ZEFzc2VtYmx5LFxuICAgIGFydGlmYWN0SWQ6IHN0cmluZyxcbiAgICBhcnRpZmFjdDogY3hzY2hlbWEuQXJ0aWZhY3RNYW5pZmVzdFxuICApIHtcbiAgICBzdXBlcihhc3NlbWJseSwgYXJ0aWZhY3RJZCwgYXJ0aWZhY3QpO1xuXG4gICAgY29uc3QgcHJvcGVydGllcyA9ICh0aGlzLm1hbmlmZXN0LnByb3BlcnRpZXMgfHxcbiAgICAgIHt9KSBhcyBjeHNjaGVtYS5BbGl5dW5Sb3NTdGFja1Byb3BlcnRpZXM7XG4gICAgaWYgKCFwcm9wZXJ0aWVzLnRlbXBsYXRlRmlsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSW52YWxpZCBST1Mgc3RhY2sgYXJ0aWZhY3QuIE1pc3NpbmcgXCJ0ZW1wbGF0ZUZpbGVcIiBwcm9wZXJ0eSBpbiBjbG91ZCBhc3NlbWJseSBtYW5pZmVzdCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy50ZW1wbGF0ZUZpbGUgPSBwcm9wZXJ0aWVzLnRlbXBsYXRlRmlsZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwcm9wZXJ0aWVzLnBhcmFtZXRlcnMgfHwge307XG4gICAgdGhpcy5zdGFja05hbWUgPSBwcm9wZXJ0aWVzLnN0YWNrTmFtZSB8fCBhcnRpZmFjdElkO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPVxuICAgICAgdGhpcy5zdGFja05hbWUgPT09IGFydGlmYWN0SWRcbiAgICAgICAgPyB0aGlzLnN0YWNrTmFtZVxuICAgICAgICA6IGAke2FydGlmYWN0SWR9ICgke3RoaXMuc3RhY2tOYW1lfSlgO1xuICAgIHRoaXMubmFtZSA9IHRoaXMuc3RhY2tOYW1lOyAvLyBiYWNrd2FyZHMgY29tcGF0XG4gICAgdGhpcy5vcmlnaW5hbE5hbWUgPSB0aGlzLnN0YWNrTmFtZTtcbiAgICB0aGlzLnRhZ3MgPSBwcm9wZXJ0aWVzLnRhZ3MgPz8gdGhpcy50YWdzRnJvbU1ldGFkYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIFJPUyB0ZW1wbGF0ZSBmb3IgdGhpcyBzdGFjay5cbiAgICovXG4gIHB1YmxpYyBnZXQgdGVtcGxhdGUoKTogYW55IHtcbiAgICBpZiAodGhpcy5fdGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdGVtcGxhdGUgPSBKU09OLnBhcnNlKFxuICAgICAgICBmcy5yZWFkRmlsZVN5bmMoXG4gICAgICAgICAgcGF0aC5qb2luKHRoaXMuYXNzZW1ibHkuZGlyZWN0b3J5LCB0aGlzLnRlbXBsYXRlRmlsZSksXG4gICAgICAgICAgXCJ1dGYtOFwiXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgdGFnc0Zyb21NZXRhZGF0YSgpIHtcbiAgICBjb25zdCByZXQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IG1ldGFkYXRhRW50cnkgb2YgdGhpcy5maW5kTWV0YWRhdGFCeVR5cGUoY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5TVEFDS19UQUdTKSkge1xuICAgICAgZm9yIChjb25zdCB0YWcgb2YgKG1ldGFkYXRhRW50cnkuZGF0YSA/PyBbXSkgYXMgY3hzY2hlbWEuU3RhY2tUYWdzTWV0YWRhdGFFbnRyeSkge1xuICAgICAgICByZXRbdGFnLmtleV0gPSB0YWcudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiJdfQ==