"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGeneratedWhenNeededMarker = exports.GeneratedWhenNeededMarker = exports.generatePhysicalName = void 0;
const stack_1 = require("../stack");
const crypto = require("crypto");
const token_map_1 = require("./token-map");
function generatePhysicalName(resource) {
    const stack = stack_1.Stack.of(resource);
    const stackPart = new PrefixNamePart(stack.stackName, 25);
    const idPart = new SuffixNamePart(resource.node.uniqueId, 24);
    const parts = [stackPart, idPart].map((part) => part.generate());
    const hashLength = 12;
    const sha256 = crypto
        .createHash("sha256")
        .update(stackPart.bareStr)
        .update(idPart.bareStr);
    const hash = sha256.digest("hex").slice(0, hashLength);
    const ret = [...parts, hash].join("");
    return ret.toLowerCase();
}
exports.generatePhysicalName = generatePhysicalName;
class NamePart {
    constructor(bareStr) {
        this.bareStr = bareStr;
    }
}
class PrefixNamePart extends NamePart {
    constructor(bareStr, prefixLength) {
        super(bareStr);
        this.prefixLength = prefixLength;
    }
    generate() {
        return this.bareStr.slice(0, this.prefixLength);
    }
}
class SuffixNamePart extends NamePart {
    constructor(str, suffixLength) {
        super(str);
        this.suffixLength = suffixLength;
    }
    generate() {
        const strLen = this.bareStr.length;
        const startIndex = Math.max(strLen - this.suffixLength, 0);
        return this.bareStr.slice(startIndex, strLen);
    }
}
const GENERATE_IF_NEEDED_SYMBOL = Symbol.for("ros-cdk-core.<private>.GenerateIfNeeded");
/**
 * This marker token is used by PhysicalName.GENERATE_IF_NEEDED. When that token is passed to the
 * physicalName property of a Resource, it triggers different behavior in the Resource constructor
 * that will allow emission of a generated physical name (when the resource is used across
 * environments) or undefined (when the resource is not shared).
 *
 * This token throws an Error when it is resolved, as a way to prevent inadvertent mis-uses of it.
 */
class GeneratedWhenNeededMarker {
    constructor() {
        this.creationStack = [];
        Object.defineProperty(this, GENERATE_IF_NEEDED_SYMBOL, { value: true });
    }
    resolve(_ctx) {
        throw new Error('Invalid physical name passed to ROS. Use "this.physicalName" instead');
    }
    toString() {
        return "PhysicalName.GENERATE_IF_NEEDED";
    }
}
exports.GeneratedWhenNeededMarker = GeneratedWhenNeededMarker;
/**
 * Checks whether a stringified token resolves to a `GeneratedWhenNeededMarker`.
 */
function isGeneratedWhenNeededMarker(val) {
    const token = token_map_1.TokenMap.instance().lookupString(val);
    return !!token && GENERATE_IF_NEEDED_SYMBOL in token;
}
exports.isGeneratedWhenNeededMarker = isGeneratedWhenNeededMarker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGh5c2ljYWwtbmFtZS1nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaHlzaWNhbC1uYW1lLWdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvQ0FBaUM7QUFDakMsaUNBQWlDO0FBR2pDLDJDQUF1QztBQUV2QyxTQUFnQixvQkFBb0IsQ0FBQyxRQUFtQjtJQUN0RCxNQUFNLEtBQUssR0FBRyxhQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sU0FBUyxHQUFHLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFOUQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUVqRSxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdEIsTUFBTSxNQUFNLEdBQUcsTUFBTTtTQUNsQixVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BCLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1NBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRXZELE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXRDLE9BQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzNCLENBQUM7QUFqQkQsb0RBaUJDO0FBRUQsTUFBZSxRQUFRO0lBR3JCLFlBQVksT0FBZTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0NBR0Y7QUFFRCxNQUFNLGNBQWUsU0FBUSxRQUFRO0lBQ25DLFlBQVksT0FBZSxFQUFtQixZQUFvQjtRQUNoRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFENkIsaUJBQVksR0FBWixZQUFZLENBQVE7SUFFbEUsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNGO0FBRUQsTUFBTSxjQUFlLFNBQVEsUUFBUTtJQUNuQyxZQUFZLEdBQVcsRUFBbUIsWUFBb0I7UUFDNUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRDZCLGlCQUFZLEdBQVosWUFBWSxDQUFRO0lBRTlELENBQUM7SUFFTSxRQUFRO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDbkMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQzFDLHlDQUF5QyxDQUMxQyxDQUFDO0FBRUY7Ozs7Ozs7R0FPRztBQUNILE1BQWEseUJBQXlCO0lBR3BDO1FBRmdCLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBRzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLHlCQUF5QixFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFxQjtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUNiLHNFQUFzRSxDQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLGlDQUFpQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQWhCRCw4REFnQkM7QUFFRDs7R0FFRztBQUNILFNBQWdCLDJCQUEyQixDQUFDLEdBQVc7SUFDckQsTUFBTSxLQUFLLEdBQUcsb0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLHlCQUF5QixJQUFJLEtBQUssQ0FBQztBQUN2RCxDQUFDO0FBSEQsa0VBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuLi9zdGFja1wiO1xuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCB7IElSZXNvbHZhYmxlLCBJUmVzb2x2ZUNvbnRleHQgfSBmcm9tIFwiLi4vcmVzb2x2YWJsZVwiO1xuaW1wb3J0IHsgSVJlc291cmNlIH0gZnJvbSBcIi4uL3Jlc291cmNlXCI7XG5pbXBvcnQgeyBUb2tlbk1hcCB9IGZyb20gXCIuL3Rva2VuLW1hcFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQaHlzaWNhbE5hbWUocmVzb3VyY2U6IElSZXNvdXJjZSk6IHN0cmluZyB7XG4gIGNvbnN0IHN0YWNrID0gU3RhY2sub2YocmVzb3VyY2UpO1xuICBjb25zdCBzdGFja1BhcnQgPSBuZXcgUHJlZml4TmFtZVBhcnQoc3RhY2suc3RhY2tOYW1lLCAyNSk7XG4gIGNvbnN0IGlkUGFydCA9IG5ldyBTdWZmaXhOYW1lUGFydChyZXNvdXJjZS5ub2RlLnVuaXF1ZUlkLCAyNCk7XG5cbiAgY29uc3QgcGFydHMgPSBbc3RhY2tQYXJ0LCBpZFBhcnRdLm1hcCgocGFydCkgPT4gcGFydC5nZW5lcmF0ZSgpKTtcblxuICBjb25zdCBoYXNoTGVuZ3RoID0gMTI7XG4gIGNvbnN0IHNoYTI1NiA9IGNyeXB0b1xuICAgIC5jcmVhdGVIYXNoKFwic2hhMjU2XCIpXG4gICAgLnVwZGF0ZShzdGFja1BhcnQuYmFyZVN0cilcbiAgICAudXBkYXRlKGlkUGFydC5iYXJlU3RyKTtcbiAgY29uc3QgaGFzaCA9IHNoYTI1Ni5kaWdlc3QoXCJoZXhcIikuc2xpY2UoMCwgaGFzaExlbmd0aCk7XG5cbiAgY29uc3QgcmV0ID0gWy4uLnBhcnRzLCBoYXNoXS5qb2luKFwiXCIpO1xuXG4gIHJldHVybiByZXQudG9Mb3dlckNhc2UoKTtcbn1cblxuYWJzdHJhY3QgY2xhc3MgTmFtZVBhcnQge1xuICBwdWJsaWMgcmVhZG9ubHkgYmFyZVN0cjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGJhcmVTdHI6IHN0cmluZykge1xuICAgIHRoaXMuYmFyZVN0ciA9IGJhcmVTdHI7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgZ2VuZXJhdGUoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBQcmVmaXhOYW1lUGFydCBleHRlbmRzIE5hbWVQYXJ0IHtcbiAgY29uc3RydWN0b3IoYmFyZVN0cjogc3RyaW5nLCBwcml2YXRlIHJlYWRvbmx5IHByZWZpeExlbmd0aDogbnVtYmVyKSB7XG4gICAgc3VwZXIoYmFyZVN0cik7XG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5iYXJlU3RyLnNsaWNlKDAsIHRoaXMucHJlZml4TGVuZ3RoKTtcbiAgfVxufVxuXG5jbGFzcyBTdWZmaXhOYW1lUGFydCBleHRlbmRzIE5hbWVQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcsIHByaXZhdGUgcmVhZG9ubHkgc3VmZml4TGVuZ3RoOiBudW1iZXIpIHtcbiAgICBzdXBlcihzdHIpO1xuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlKCk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RyTGVuID0gdGhpcy5iYXJlU3RyLmxlbmd0aDtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gTWF0aC5tYXgoc3RyTGVuIC0gdGhpcy5zdWZmaXhMZW5ndGgsIDApO1xuICAgIHJldHVybiB0aGlzLmJhcmVTdHIuc2xpY2Uoc3RhcnRJbmRleCwgc3RyTGVuKTtcbiAgfVxufVxuXG5jb25zdCBHRU5FUkFURV9JRl9ORUVERURfU1lNQk9MID0gU3ltYm9sLmZvcihcbiAgXCJyb3MtY2RrLWNvcmUuPHByaXZhdGU+LkdlbmVyYXRlSWZOZWVkZWRcIlxuKTtcblxuLyoqXG4gKiBUaGlzIG1hcmtlciB0b2tlbiBpcyB1c2VkIGJ5IFBoeXNpY2FsTmFtZS5HRU5FUkFURV9JRl9ORUVERUQuIFdoZW4gdGhhdCB0b2tlbiBpcyBwYXNzZWQgdG8gdGhlXG4gKiBwaHlzaWNhbE5hbWUgcHJvcGVydHkgb2YgYSBSZXNvdXJjZSwgaXQgdHJpZ2dlcnMgZGlmZmVyZW50IGJlaGF2aW9yIGluIHRoZSBSZXNvdXJjZSBjb25zdHJ1Y3RvclxuICogdGhhdCB3aWxsIGFsbG93IGVtaXNzaW9uIG9mIGEgZ2VuZXJhdGVkIHBoeXNpY2FsIG5hbWUgKHdoZW4gdGhlIHJlc291cmNlIGlzIHVzZWQgYWNyb3NzXG4gKiBlbnZpcm9ubWVudHMpIG9yIHVuZGVmaW5lZCAod2hlbiB0aGUgcmVzb3VyY2UgaXMgbm90IHNoYXJlZCkuXG4gKlxuICogVGhpcyB0b2tlbiB0aHJvd3MgYW4gRXJyb3Igd2hlbiBpdCBpcyByZXNvbHZlZCwgYXMgYSB3YXkgdG8gcHJldmVudCBpbmFkdmVydGVudCBtaXMtdXNlcyBvZiBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEdlbmVyYXRlZFdoZW5OZWVkZWRNYXJrZXIgaW1wbGVtZW50cyBJUmVzb2x2YWJsZSB7XG4gIHB1YmxpYyByZWFkb25seSBjcmVhdGlvblN0YWNrOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBHRU5FUkFURV9JRl9ORUVERURfU1lNQk9MLCB7IHZhbHVlOiB0cnVlIH0pO1xuICB9XG5cbiAgcHVibGljIHJlc29sdmUoX2N0eDogSVJlc29sdmVDb250ZXh0KTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdJbnZhbGlkIHBoeXNpY2FsIG5hbWUgcGFzc2VkIHRvIFJPUy4gVXNlIFwidGhpcy5waHlzaWNhbE5hbWVcIiBpbnN0ZWFkJ1xuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJQaHlzaWNhbE5hbWUuR0VORVJBVEVfSUZfTkVFREVEXCI7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhIHN0cmluZ2lmaWVkIHRva2VuIHJlc29sdmVzIHRvIGEgYEdlbmVyYXRlZFdoZW5OZWVkZWRNYXJrZXJgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNHZW5lcmF0ZWRXaGVuTmVlZGVkTWFya2VyKHZhbDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHRva2VuID0gVG9rZW5NYXAuaW5zdGFuY2UoKS5sb29rdXBTdHJpbmcodmFsKTtcbiAgcmV0dXJuICEhdG9rZW4gJiYgR0VORVJBVEVfSUZfTkVFREVEX1NZTUJPTCBpbiB0b2tlbjtcbn1cbiJdfQ==