const currentUrl = window.location.href

var url = new URL(url_string);
var c = url.searchParams.get("url");
window.location.href = (c)