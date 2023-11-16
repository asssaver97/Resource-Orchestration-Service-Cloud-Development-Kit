"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefix = exports.data = exports.print = exports.highlight = exports.success = exports.warning = exports.error = exports.debug = exports.trace = exports.increaseVerbosity = exports.setLogLevel = exports.logLevel = void 0;
const colors = require("colors/safe");
const util = require("util");
const { stdout, stderr } = process;
const logger = (stream, styles) => (fmt, ...args) => {
    let str = util.format(fmt, ...args);
    if (styles && styles.length) {
        str = styles.reduce((a, style) => style(a), str);
    }
    stream.write(str + '\n');
};
exports.logLevel = 0 /* DEFAULT */;
function setLogLevel(newLogLevel) {
    exports.logLevel = newLogLevel;
}
exports.setLogLevel = setLogLevel;
function increaseVerbosity() {
    exports.logLevel += 1;
}
exports.increaseVerbosity = increaseVerbosity;
const _debug = logger(stderr, [colors.gray]);
exports.trace = (fmt, ...args) => exports.logLevel >= 2 /* TRACE */ && _debug(fmt, ...args);
exports.debug = (fmt, ...args) => exports.logLevel >= 1 /* DEBUG */ && _debug(fmt, ...args);
exports.error = logger(stderr, [colors.red]);
exports.warning = logger(stderr, [colors.yellow]);
exports.success = logger(stderr, [colors.green]);
exports.highlight = logger(stderr, [colors.bold]);
exports.print = logger(stderr);
exports.data = logger(stdout);
/**
 * Create a logger output that features a constant prefix string.
 *
 * @param prefixString the prefix string to be appended before any log entry.
 * @param fn   the logger function to be used (typically one of the other functions in this module)
 *
 * @returns a new LoggerFunction.
 */
function prefix(prefixString, fn) {
    return (fmt, ...args) => fn(`%s ${fmt}`, prefixString, ...args);
}
exports.prefix = prefix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2dpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXNDO0FBRXRDLDZCQUE2QjtBQUc3QixNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUVuQyxNQUFNLE1BQU0sR0FBRyxDQUFDLE1BQWdCLEVBQUUsTUFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXLEVBQUUsRUFBRTtJQUN2RixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDM0IsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDbEQ7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUM7QUFFUyxRQUFBLFFBQVEsbUJBQW9CO0FBRXZDLFNBQWdCLFdBQVcsQ0FBQyxXQUFxQjtJQUMvQyxnQkFBUSxHQUFHLFdBQVcsQ0FBQztBQUN6QixDQUFDO0FBRkQsa0NBRUM7QUFFRCxTQUFnQixpQkFBaUI7SUFDL0IsZ0JBQVEsSUFBSSxDQUFDLENBQUM7QUFDaEIsQ0FBQztBQUZELDhDQUVDO0FBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRWhDLFFBQUEsS0FBSyxHQUFHLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBUyxFQUFFLEVBQUUsQ0FBQyxnQkFBUSxpQkFBa0IsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDMUYsUUFBQSxLQUFLLEdBQUcsQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXLEVBQUUsRUFBRSxDQUFDLGdCQUFRLGlCQUFrQixJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUM1RixRQUFBLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckMsUUFBQSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzFDLFFBQUEsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN6QyxRQUFBLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDMUMsUUFBQSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZCLFFBQUEsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUluQzs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLFlBQW9CLEVBQUUsRUFBa0I7SUFDN0QsT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakYsQ0FBQztBQUZELHdCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcbmltcG9ydCB7IFdyaXRhYmxlIH0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAndXRpbCc7XG5cbnR5cGUgU3R5bGVGbiA9IChzdHI6IHN0cmluZykgPT4gc3RyaW5nO1xuY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gcHJvY2VzcztcblxuY29uc3QgbG9nZ2VyID0gKHN0cmVhbTogV3JpdGFibGUsIHN0eWxlcz86IFN0eWxlRm5bXSkgPT4gKGZtdDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkgPT4ge1xuICBsZXQgc3RyID0gdXRpbC5mb3JtYXQoZm10LCAuLi5hcmdzKTtcbiAgaWYgKHN0eWxlcyAmJiBzdHlsZXMubGVuZ3RoKSB7XG4gICAgc3RyID0gc3R5bGVzLnJlZHVjZSgoYSwgc3R5bGUpID0+IHN0eWxlKGEpLCBzdHIpO1xuICB9XG4gIHN0cmVhbS53cml0ZShzdHIgKyAnXFxuJyk7XG59O1xuXG5leHBvcnQgbGV0IGxvZ0xldmVsID0gTG9nTGV2ZWwuREVGQVVMVDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldExvZ0xldmVsKG5ld0xvZ0xldmVsOiBMb2dMZXZlbCkge1xuICBsb2dMZXZlbCA9IG5ld0xvZ0xldmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVhc2VWZXJib3NpdHkoKSB7XG4gIGxvZ0xldmVsICs9IDE7XG59XG5cbmNvbnN0IF9kZWJ1ZyA9IGxvZ2dlcihzdGRlcnIsIFtjb2xvcnMuZ3JheV0pO1xuXG5leHBvcnQgY29uc3QgdHJhY2UgPSAoZm10OiBzdHJpbmcsIC4uLmFyZ3M6IGFueSkgPT4gbG9nTGV2ZWwgPj0gTG9nTGV2ZWwuVFJBQ0UgJiYgX2RlYnVnKGZtdCwgLi4uYXJncyk7XG5leHBvcnQgY29uc3QgZGVidWcgPSAoZm10OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiBsb2dMZXZlbCA+PSBMb2dMZXZlbC5ERUJVRyAmJiBfZGVidWcoZm10LCAuLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBlcnJvciA9IGxvZ2dlcihzdGRlcnIsIFtjb2xvcnMucmVkXSk7XG5leHBvcnQgY29uc3Qgd2FybmluZyA9IGxvZ2dlcihzdGRlcnIsIFtjb2xvcnMueWVsbG93XSk7XG5leHBvcnQgY29uc3Qgc3VjY2VzcyA9IGxvZ2dlcihzdGRlcnIsIFtjb2xvcnMuZ3JlZW5dKTtcbmV4cG9ydCBjb25zdCBoaWdobGlnaHQgPSBsb2dnZXIoc3RkZXJyLCBbY29sb3JzLmJvbGRdKTtcbmV4cG9ydCBjb25zdCBwcmludCA9IGxvZ2dlcihzdGRlcnIpO1xuZXhwb3J0IGNvbnN0IGRhdGEgPSBsb2dnZXIoc3Rkb3V0KTtcblxuZXhwb3J0IHR5cGUgTG9nZ2VyRnVuY3Rpb24gPSAoZm10OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xuXG4vKipcbiAqIENyZWF0ZSBhIGxvZ2dlciBvdXRwdXQgdGhhdCBmZWF0dXJlcyBhIGNvbnN0YW50IHByZWZpeCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHByZWZpeFN0cmluZyB0aGUgcHJlZml4IHN0cmluZyB0byBiZSBhcHBlbmRlZCBiZWZvcmUgYW55IGxvZyBlbnRyeS5cbiAqIEBwYXJhbSBmbiAgIHRoZSBsb2dnZXIgZnVuY3Rpb24gdG8gYmUgdXNlZCAodHlwaWNhbGx5IG9uZSBvZiB0aGUgb3RoZXIgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlKVxuICpcbiAqIEByZXR1cm5zIGEgbmV3IExvZ2dlckZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4KHByZWZpeFN0cmluZzogc3RyaW5nLCBmbjogTG9nZ2VyRnVuY3Rpb24pOiBMb2dnZXJGdW5jdGlvbiB7XG4gIHJldHVybiAoZm10OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiBmbihgJXMgJHtmbXR9YCwgcHJlZml4U3RyaW5nLCAuLi5hcmdzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gTG9nTGV2ZWwge1xuICAvKiogTm90IHZlcmJvc2UgYXQgYWxsICovXG4gIERFRkFVTFQgPSAwLFxuICAvKiogUHJldHR5IHZlcmJvc2UgKi9cbiAgREVCVUcgPSAxLFxuICAvKiogRXh0cmVtZWx5IHZlcmJvc2UgKi9cbiAgVFJBQ0UgPSAyLFxufVxuIl19