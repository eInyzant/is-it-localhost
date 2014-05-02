

isItLocalhostTestUrl();

function isItLocalhostTestUrl() {
    var currentHost = window.location.hostname;
    var xhr = new XMLHttpRequest();
    var url = 'http://is-it-localhost.local/php/is-it-localhost.php?currentHost=' + currentHost;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            processResponse(xhr.response);
        }
    };
    xhr.open("GET", url, true);
    xhr.send(null);
}

function processResponse(response) {

    if (response == 'OK') {
        var html = '<div id="isItLocalhost" style="padding:1px; width:10px; height:100%; font-size:10px; text-align:center;font-weight: bold; letter-spacing: 2px; margin: 0; padding: 0; position: fixed; top: 0;left: 0; opacity:1; z-index:9999;">';
        html += '<div style="border:1px solid red; background-color:lightcoral; opacity:0.3; width:100%; height:100%; position:absolute; top:0; left:0"></div>';
        html += '<span style="display:block;"> </span>';
        html += '<span style="display:block;"> </span>';
        html += '<span style="display:block;"> </span>';
        html += '<span style="display:block;">T</span>';
        html += '<span style="display:block;">h</span>';
        html += '<span style="display:block;">i</span>';
        html += '<span style="display:block;">s</span>';
        html += '<span style="display:block;"> </span>';
        html += '<span style="display:block;">i</span>';
        html += '<span style="display:block;">s</span>';
        html += '<span style="display:block;"> </span>';
        html += '<span style="display:block;">l</span>';
        html += '<span style="display:block;">o</span>';
        html += '<span style="display:block;">c</span>';
        html += '<span style="display:block;">a</span>';
        html += '<span style="display:block;">l</span>';
        html += '<span style="display:block;">h</span>';
        html += '<span style="display:block;">o</span>';
        html += '<span style="display:block;">s</span>';
        html += '<span style="display:block;">t</span>';
        html += '</div>'
        document.body.insertAdjacentHTML('afterbegin', html);

    }
}
