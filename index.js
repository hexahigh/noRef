const currentUrl = window.location.href

var url = new URL(currentUrl);
var c = url.searchParams.get("url");
window.location.href = (c)