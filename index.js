const currentUrl = window.location.href

var url = new URL(currentUrl);
var c = url.searchParams.get("url");
var o = url.searchParams.get("obf");

// Check that there is something there otherwhise it will get stuck in a loop
if(c) {
    // Check if url is obfuscated
    if (o) {
        c = atob(c)
    }
    if (c.startsWith("http://") || c.startsWith("https://")) {
        window.location = (c)
    } else {
        c = "http://" + c
        window.location = (c)
    }
}