# JSON Log File Helper

A helper to filter and format JSON log file entries. Reads stdin and writes to stdout. 

- Example usage: cat error.log | node loghelper.js pretty .err 
- Params starting with a . will be used to filter the output JSON. If none given, the whole input is echoed.
- Multiple filters: cat error.log | node loghelper.js pretty .err .msg
- Nested properties: cat error.log | node loghelper.js pretty .err.code
- 'pretty' param will format the output JSON. Omit this to leave as single line.

### Notes

loghelper.js is standalone - the other files are all for testing purposes.
