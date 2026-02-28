let statusCode = 401;
if (statusCode === 200) {
    console.log("PASS - OK: Request successful");

}
else if (statusCode === 201) {

    console.log(statusCode, "Results : PASS - Created: Resource created successfully");
}
else if (statusCode === 301) {

    console.log(statusCode, "Results : WARNING - Moved Permanently: URL has changed");
}
else if (statusCode === 400) {

    console.log(statusCode, "Results : FAIL - Bad Request: Check request payload");
}
else if (statusCode === 401) {

    console.log(statusCode, "Results : FAIL - Unauthorized: Check auth token");
}
else if (statusCode === 403) {

    console.log(statusCode, "Results : FAIL - Forbidden: Insufficient permissions");
}
else if (statusCode === 404) {

    console.log(statusCode, "Results : FAIL - Not Found: Check endpoint URL");
}
else if (statusCode === 500) {

    console.log(statusCode, "Results : FAIL - Internal Server Error: Backend issue");
}
else {
    console.log(statusCode, "Results : UNKNOWN - Unhandled status code");
}


