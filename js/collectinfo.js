function queryStringToJSON() {
    var infoArr = location.search.slice(1).split("+").join(" ").split('&');
    var result = {};
    for (var index in infoArr) {
        keyValuePair = infoArr[index].split('=');
        result[keyValuePair[0]] = decodeURIComponent(keyValuePair[1] || '');
    }
    return result;
}

function updateInfoCollected(infoCollected) {
    $("#collectedFirstName").html(infoCollected.firstname);
    $("#collectedLastName").html(infoCollected.lastname);
    $("#collectedEmail").html(infoCollected.email);
    $("#collectedUpdates").html(infoCollected.updates);
    $("#collectedCountry").html(infoCollected.country);
}

