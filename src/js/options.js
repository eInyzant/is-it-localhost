initLabels();

document.getElementById('saveForm').addEventListener('click', function() {
  processForm();
});

document.getElementById('help_title').addEventListener('click', function() {
  toggleHelpContent();
});
document.getElementById('btn_toggle').addEventListener('click', function() {
  toggleHelpContent();
});

function initLabels() {
  document.getElementById('html_title').innerHTML = chrome.i18n.getMessage("html_title");
  document.getElementById('page_title').innerHTML = chrome.i18n.getMessage("page_title");
  document.getElementById('config_title').innerHTML = chrome.i18n.getMessage("config_title");
  document.getElementById('host_file_label').innerHTML = chrome.i18n.getMessage("host_file_label");
  document.getElementById('host_file').setAttribute('placeholder', chrome.i18n.getMessage("host_file_placeholder"));
  document.getElementById('saveForm').value = chrome.i18n.getMessage("saveFormBtn");
  
  document.getElementById('help_title').innerHTML = chrome.i18n.getMessage("help_title");
  document.getElementById('help_resume').innerHTML = chrome.i18n.getMessage("help_resume");
  document.getElementById('vhost_title').innerHTML = chrome.i18n.getMessage("vhost_title");
  document.getElementById('vhost_ndd').innerHTML = chrome.i18n.getMessage("vhost_ndd");
  document.getElementById('vhost_webroot').innerHTML = chrome.i18n.getMessage("vhost_webroot");
  document.getElementById('vhost_example').innerHTML = chrome.i18n.getMessage("vhost_example");
  document.getElementById('perms_title').innerHTML = chrome.i18n.getMessage("perms_title");
  document.getElementById('perms_files').innerHTML = chrome.i18n.getMessage("perms_files");
  document.getElementById('perms_group').innerHTML = chrome.i18n.getMessage("perms_group");

  document.getElementById('github_link').innerHTML = chrome.i18n.getMessage("github_link");
  document.getElementById('gardenmedia_link').innerHTML = chrome.i18n.getMessage("gardenmedia_link");
}

function processForm() {
  var host_file = document.getElementById('host_file').value;
  if (host_file != '') {
    var xhr = new XMLHttpRequest();
    var data = new FormData();
    data.append('host_file', host_file);
    var url = 'http://is-it-localhost.local/php/options.php';

    xhr.open("POST", url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
          if (xhr.response == 'OK') {
            // Success : Configuration Updated
            var msg = '<div class="ok">' + chrome.i18n.getMessage('config_updated') + '</div>';
          } else if (xhr.response = 'NOK') {
            // Error : Configuration not Updated
            var msg = '<div class="nok">' + chrome.i18n.getMessage('config_not_updated') + '</div>';
          } else {
            // Exception Error : Configuration not Updated
            var msg = '<div class="nok">' + chrome.i18n.getMessage('config_not_updated') + ' : ' + xhr.response + '</div>';
          }
          document.getElementById('msg').innerHTML = msg;
        }
    };

    xhr.send(data);
  } else {
    document.getElementById('msg').innerHTML = '<div class="nok">' + chrome.i18n.getMessage('error_fill_host_file') + '</div>';
  }
}

function toggleHelpContent() {
  document.getElementById('help_content').classList.toggle('expanded');
  document.getElementById('btn_toggle').classList.toggle('expanded');
}
