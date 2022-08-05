"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decipher = exports.cipher = void 0;
const crypto = require("crypto");
async function cipher(buf) {
    var encrypted = '';
    var cip = crypto.createCipheriv('aes-128-cbc', 'aliyun-ros-devel', 'abcdefg123456789');
    encrypted += cip.update(buf, 'binary', 'hex');
    encrypted += cip.final('hex');
    return encrypted;
}
exports.cipher = cipher;
async function decipher(encrypted) {
    var decrypted = '';
    var decipher = crypto.createDecipheriv('aes-128-cbc', 'aliyun-ros-devel', 'abcdefg123456789');
    decrypted += decipher.update(encrypted, 'hex', 'binary');
    decrypted += decipher.final('binary');
    return decrypted.toString();
}
exports.decipher = decipher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lwaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2lwaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFpQztBQUUxQixLQUFLLFVBQVUsTUFBTSxDQUFDLEdBQVE7SUFDbkMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ25CLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDdkYsU0FBUyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxTQUFTLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBTkQsd0JBTUM7QUFFTSxLQUFLLFVBQVUsUUFBUSxDQUFDLFNBQWM7SUFDM0MsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ25CLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM5RixTQUFTLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELFNBQVMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFORCw0QkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2lwaGVyKGJ1ZjogYW55KSB7XG4gIHZhciBlbmNyeXB0ZWQgPSAnJztcbiAgdmFyIGNpcCA9IGNyeXB0by5jcmVhdGVDaXBoZXJpdignYWVzLTEyOC1jYmMnLCAnYWxpeXVuLXJvcy1kZXZlbCcsICdhYmNkZWZnMTIzNDU2Nzg5Jyk7XG4gIGVuY3J5cHRlZCArPSBjaXAudXBkYXRlKGJ1ZiwgJ2JpbmFyeScsICdoZXgnKTtcbiAgZW5jcnlwdGVkICs9IGNpcC5maW5hbCgnaGV4Jyk7XG4gIHJldHVybiBlbmNyeXB0ZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWNpcGhlcihlbmNyeXB0ZWQ6IGFueSkge1xuICB2YXIgZGVjcnlwdGVkID0gJyc7XG4gIHZhciBkZWNpcGhlciA9IGNyeXB0by5jcmVhdGVEZWNpcGhlcml2KCdhZXMtMTI4LWNiYycsICdhbGl5dW4tcm9zLWRldmVsJywgJ2FiY2RlZmcxMjM0NTY3ODknKTtcbiAgZGVjcnlwdGVkICs9IGRlY2lwaGVyLnVwZGF0ZShlbmNyeXB0ZWQsICdoZXgnLCAnYmluYXJ5Jyk7XG4gIGRlY3J5cHRlZCArPSBkZWNpcGhlci5maW5hbCgnYmluYXJ5Jyk7XG4gIHJldHVybiBkZWNyeXB0ZWQudG9TdHJpbmcoKTtcbn1cbiJdfQ==