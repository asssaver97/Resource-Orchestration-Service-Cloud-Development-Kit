"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedCloudAssemblyArtifact = void 0;
const path = require("path");
const cloud_artifact_1 = require("../cloud-artifact");
const cloud_assembly_1 = require("../cloud-assembly");
/**
 * Asset manifest is a description of a set of assets which need to be built and published
 */
class NestedCloudAssemblyArtifact extends cloud_artifact_1.CloudArtifact {
    constructor(assembly, name, artifact) {
        var _a;
        super(assembly, name, artifact);
        const properties = (this.manifest.properties ||
            {});
        this.directoryName = properties.directoryName;
        this.displayName = (_a = properties.displayName) !== null && _a !== void 0 ? _a : name;
    }
    /**
     * Full path to the nested assembly directory
     */
    get fullPath() {
        return path.join(this.assembly.directory, this.directoryName);
    }
    /**
     * The nested Assembly
     */
    get nestedAssembly() {
        if (!this._nestedAssembly) {
            this._nestedAssembly = new cloud_assembly_1.CloudAssembly(this.fullPath);
        }
        return this._nestedAssembly;
    }
}
exports.NestedCloudAssemblyArtifact = NestedCloudAssemblyArtifact;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLWNsb3VkLWFzc2VtYmx5LWFydGlmYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmVzdGVkLWNsb3VkLWFzc2VtYmx5LWFydGlmYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZCQUE2QjtBQUM3QixzREFBa0Q7QUFDbEQsc0RBQWtEO0FBRWxEOztHQUVHO0FBQ0gsTUFBYSwyQkFBNEIsU0FBUSw4QkFBYTtJQWdCNUQsWUFDRSxRQUF1QixFQUN2QixJQUFZLEVBQ1osUUFBbUM7O1FBRW5DLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRWhDLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO1lBQzFDLEVBQUUsQ0FBMkMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsU0FBRyxVQUFVLENBQUMsV0FBVyxtQ0FBSSxJQUFJLENBQUM7SUFDcEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxjQUFjO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSw4QkFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUE3Q0Qsa0VBNkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hzY2hlbWEgZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWFzc2VtYmx5LXNjaGVtYVwiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgQ2xvdWRBcnRpZmFjdCB9IGZyb20gXCIuLi9jbG91ZC1hcnRpZmFjdFwiO1xuaW1wb3J0IHsgQ2xvdWRBc3NlbWJseSB9IGZyb20gXCIuLi9jbG91ZC1hc3NlbWJseVwiO1xuXG4vKipcbiAqIEFzc2V0IG1hbmlmZXN0IGlzIGEgZGVzY3JpcHRpb24gb2YgYSBzZXQgb2YgYXNzZXRzIHdoaWNoIG5lZWQgdG8gYmUgYnVpbHQgYW5kIHB1Ymxpc2hlZFxuICovXG5leHBvcnQgY2xhc3MgTmVzdGVkQ2xvdWRBc3NlbWJseUFydGlmYWN0IGV4dGVuZHMgQ2xvdWRBcnRpZmFjdCB7XG4gIC8qKlxuICAgKiBUaGUgcmVsYXRpdmUgZGlyZWN0b3J5IG5hbWUgb2YgdGhlIGFzc2V0IG1hbmlmZXN0XG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgZGlyZWN0b3J5TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IG5hbWVcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBkaXNwbGF5TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDYWNoZSBmb3IgdGhlIGlubmVyIGFzc2VtYmx5IGxvYWRpbmdcbiAgICovXG4gIHByaXZhdGUgX25lc3RlZEFzc2VtYmx5PzogQ2xvdWRBc3NlbWJseTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhc3NlbWJseTogQ2xvdWRBc3NlbWJseSxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgYXJ0aWZhY3Q6IGN4c2NoZW1hLkFydGlmYWN0TWFuaWZlc3RcbiAgKSB7XG4gICAgc3VwZXIoYXNzZW1ibHksIG5hbWUsIGFydGlmYWN0KTtcblxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSAodGhpcy5tYW5pZmVzdC5wcm9wZXJ0aWVzIHx8XG4gICAgICB7fSkgYXMgY3hzY2hlbWEuTmVzdGVkQ2xvdWRBc3NlbWJseVByb3BlcnRpZXM7XG4gICAgdGhpcy5kaXJlY3RvcnlOYW1lID0gcHJvcGVydGllcy5kaXJlY3RvcnlOYW1lO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSBwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lID8/IG5hbWU7XG4gIH1cblxuICAvKipcbiAgICogRnVsbCBwYXRoIHRvIHRoZSBuZXN0ZWQgYXNzZW1ibHkgZGlyZWN0b3J5XG4gICAqL1xuICBwdWJsaWMgZ2V0IGZ1bGxQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHBhdGguam9pbih0aGlzLmFzc2VtYmx5LmRpcmVjdG9yeSwgdGhpcy5kaXJlY3RvcnlOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmVzdGVkIEFzc2VtYmx5XG4gICAqL1xuICBwdWJsaWMgZ2V0IG5lc3RlZEFzc2VtYmx5KCk6IENsb3VkQXNzZW1ibHkge1xuICAgIGlmICghdGhpcy5fbmVzdGVkQXNzZW1ibHkpIHtcbiAgICAgIHRoaXMuX25lc3RlZEFzc2VtYmx5ID0gbmV3IENsb3VkQXNzZW1ibHkodGhpcy5mdWxsUGF0aCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uZXN0ZWRBc3NlbWJseTtcbiAgfVxufVxuIl19