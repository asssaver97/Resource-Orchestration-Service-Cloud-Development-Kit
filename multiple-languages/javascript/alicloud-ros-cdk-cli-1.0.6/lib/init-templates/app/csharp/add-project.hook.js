"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invokeUnitTest = exports.invoke = void 0;
const child_process = require("child_process");
const path = require("path");
exports.invoke = async (targetDirectory) => {
    const slnPath = path.join(targetDirectory, 'src', '%name.PascalCased%.sln');
    const csprojPath = path.join(targetDirectory, 'src', '%name.PascalCased%', '%name.PascalCased%.csproj');
    const child = child_process.spawn('dotnet', ['sln', slnPath, 'add', csprojPath], {
        // Need this for Windows where we want .cmd and .bat to be found as well.
        shell: true,
        stdio: ['ignore', 'pipe', 'inherit'],
    });
    await new Promise((resolve, reject) => {
        const stdout = new Array();
        child.stdout.on('data', chunk => {
            process.stdout.write(chunk);
            stdout.push(chunk);
        });
        child.once('error', reject);
        child.once('exit', code => {
            if (code === 0) {
                resolve(Buffer.concat(stdout).toString('utf-8'));
            }
            else {
                reject(new Error(`Could not add project %name.PascalCased%.csproj to solution %name.PascalCased%.sln. Error code: ${code}`));
            }
        });
    });
};
exports.invokeUnitTest = async (targetDirectory) => {
    const slnPath = path.join(targetDirectory, 'src', '%name.PascalCased%.sln');
    const csprojTestPath = path.join(targetDirectory, 'src', '%name.PascalCased%Test', '%name.PascalCased%Test.csproj');
    const childUnitTest = child_process.spawn('dotnet', ['sln', slnPath, 'add', csprojTestPath], {
        // Need this for Windows where we want .cmd and .bat to be found as well.
        shell: true,
        stdio: ['ignore', 'pipe', 'inherit'],
    });
    await new Promise((resolve, reject) => {
        const stdout = new Array();
        childUnitTest.stdout.on('data', chunk => {
            process.stdout.write(chunk);
            stdout.push(chunk);
        });
        childUnitTest.once('error', reject);
        childUnitTest.once('exit', code => {
            if (code === 0) {
                resolve(Buffer.concat(stdout).toString('utf-8'));
            }
            else {
                reject(new Error(`Could not add project %name.PascalCased%.csproj to solution %name.PascalCased%.sln. Error code: ${code}`));
            }
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXByb2plY3QuaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC1wcm9qZWN0Lmhvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQStDO0FBQy9DLDZCQUE2QjtBQUdoQixRQUFBLE1BQU0sR0FBZSxLQUFLLEVBQUUsZUFBdUIsRUFBRSxFQUFFO0lBQ2hFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQzVFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0lBRXhHLE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUU7UUFDN0UseUVBQXlFO1FBQ3pFLEtBQUssRUFBRSxJQUFJO1FBQ1gsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7S0FDdkMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUMxQyxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBTyxDQUFDO1FBRWhDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxtR0FBbUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2hJO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUdXLFFBQUEsY0FBYyxHQUFlLEtBQUssRUFBRSxlQUF1QixFQUFFLEVBQUU7SUFDeEUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDNUUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFLCtCQUErQixDQUFDLENBQUM7SUFFcEgsTUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsRUFBRTtRQUN6Rix5RUFBeUU7UUFDekUsS0FBSyxFQUFFLElBQUk7UUFDWCxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztLQUN2QyxDQUFDLENBQUM7SUFFSCxNQUFNLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQzFDLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFFaEMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVwQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDcEQ7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLG1HQUFtRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEk7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2hpbGRfcHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQge0ludm9rZUhvb2t9IGZyb20gJy4uLy4uLy4uL2luaXQnO1xuXG5leHBvcnQgY29uc3QgaW52b2tlOiBJbnZva2VIb29rID0gYXN5bmMgKHRhcmdldERpcmVjdG9yeTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc2xuUGF0aCA9IHBhdGguam9pbih0YXJnZXREaXJlY3RvcnksICdzcmMnLCAnJW5hbWUuUGFzY2FsQ2FzZWQlLnNsbicpO1xuICAgIGNvbnN0IGNzcHJvalBhdGggPSBwYXRoLmpvaW4odGFyZ2V0RGlyZWN0b3J5LCAnc3JjJywgJyVuYW1lLlBhc2NhbENhc2VkJScsICclbmFtZS5QYXNjYWxDYXNlZCUuY3Nwcm9qJyk7XG5cbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkX3Byb2Nlc3Muc3Bhd24oJ2RvdG5ldCcsIFsnc2xuJywgc2xuUGF0aCwgJ2FkZCcsIGNzcHJvalBhdGhdLCB7XG4gICAgICAgIC8vIE5lZWQgdGhpcyBmb3IgV2luZG93cyB3aGVyZSB3ZSB3YW50IC5jbWQgYW5kIC5iYXQgdG8gYmUgZm91bmQgYXMgd2VsbC5cbiAgICAgICAgc2hlbGw6IHRydWUsXG4gICAgICAgIHN0ZGlvOiBbJ2lnbm9yZScsICdwaXBlJywgJ2luaGVyaXQnXSxcbiAgICB9KTtcblxuICAgIGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzdGRvdXQgPSBuZXcgQXJyYXk8YW55PigpO1xuXG4gICAgICAgIGNoaWxkLnN0ZG91dC5vbignZGF0YScsIGNodW5rID0+IHtcbiAgICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGNodW5rKTtcbiAgICAgICAgICAgIHN0ZG91dC5wdXNoKGNodW5rKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hpbGQub25jZSgnZXJyb3InLCByZWplY3QpO1xuXG4gICAgICAgIGNoaWxkLm9uY2UoJ2V4aXQnLCBjb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChjb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShCdWZmZXIuY29uY2F0KHN0ZG91dCkudG9TdHJpbmcoJ3V0Zi04JykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBDb3VsZCBub3QgYWRkIHByb2plY3QgJW5hbWUuUGFzY2FsQ2FzZWQlLmNzcHJvaiB0byBzb2x1dGlvbiAlbmFtZS5QYXNjYWxDYXNlZCUuc2xuLiBFcnJvciBjb2RlOiAke2NvZGV9YCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IGludm9rZVVuaXRUZXN0OiBJbnZva2VIb29rID0gYXN5bmMgKHRhcmdldERpcmVjdG9yeTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc2xuUGF0aCA9IHBhdGguam9pbih0YXJnZXREaXJlY3RvcnksICdzcmMnLCAnJW5hbWUuUGFzY2FsQ2FzZWQlLnNsbicpO1xuICAgIGNvbnN0IGNzcHJvalRlc3RQYXRoID0gcGF0aC5qb2luKHRhcmdldERpcmVjdG9yeSwgJ3NyYycsICclbmFtZS5QYXNjYWxDYXNlZCVUZXN0JywgJyVuYW1lLlBhc2NhbENhc2VkJVRlc3QuY3Nwcm9qJyk7XG5cbiAgICBjb25zdCBjaGlsZFVuaXRUZXN0ID0gY2hpbGRfcHJvY2Vzcy5zcGF3bignZG90bmV0JywgWydzbG4nLCBzbG5QYXRoLCAnYWRkJywgY3Nwcm9qVGVzdFBhdGhdLCB7XG4gICAgICAgIC8vIE5lZWQgdGhpcyBmb3IgV2luZG93cyB3aGVyZSB3ZSB3YW50IC5jbWQgYW5kIC5iYXQgdG8gYmUgZm91bmQgYXMgd2VsbC5cbiAgICAgICAgc2hlbGw6IHRydWUsXG4gICAgICAgIHN0ZGlvOiBbJ2lnbm9yZScsICdwaXBlJywgJ2luaGVyaXQnXSxcbiAgICB9KTtcblxuICAgIGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzdGRvdXQgPSBuZXcgQXJyYXk8YW55PigpO1xuXG4gICAgICAgIGNoaWxkVW5pdFRlc3Quc3Rkb3V0Lm9uKCdkYXRhJywgY2h1bmsgPT4ge1xuICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoY2h1bmspO1xuICAgICAgICAgICAgc3Rkb3V0LnB1c2goY2h1bmspO1xuICAgICAgICB9KTtcblxuICAgICAgICBjaGlsZFVuaXRUZXN0Lm9uY2UoJ2Vycm9yJywgcmVqZWN0KTtcblxuICAgICAgICBjaGlsZFVuaXRUZXN0Lm9uY2UoJ2V4aXQnLCBjb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChjb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShCdWZmZXIuY29uY2F0KHN0ZG91dCkudG9TdHJpbmcoJ3V0Zi04JykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBDb3VsZCBub3QgYWRkIHByb2plY3QgJW5hbWUuUGFzY2FsQ2FzZWQlLmNzcHJvaiB0byBzb2x1dGlvbiAlbmFtZS5QYXNjYWxDYXNlZCUuc2xuLiBFcnJvciBjb2RlOiAke2NvZGV9YCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbiJdfQ==