const currentUrl = window.location.href

var url = new URL(currentUrl);
var c = url.searchParams.get("url");

// Check that there is something there otherwhise it will get stuck in a loop
if(c) {
    if (c.startsWith("http://") || c.startsWith("https://")) {
        c = "https://" + c
    }
    window.location = (c)
}