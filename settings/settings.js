
function onHomeyReady(Homey) {

// todo : register app with https://192.168.0.20:8080/json/system/requestApplicationToken?applicationName=HomeyBridge

    //clearBusy();
    //clearError();
    //clearSuccess();
    
    Homey.ready();

    let dssIPElement = document.getElementById('dss_ip');
    let appTokenElement = document.getElementById('app_token');
    let saveElement = document.getElementById('save');

    Homey.get('dss_ip', function (err, dss_ip) {
        if (err) return Homey.alert(err);
        dssIPElement.value = dss_ip;
    });

    Homey.get('app_token', function (err, app_token) {
        if (err) return Homey.alert(err);
        appTokenElement.value = app_token;
    });

    saveElement.addEventListener('click', function (e) {

        Homey.set('dss_ip', dssIPElement.value, function (err) {
            if (err) return Homey.alert(err);
        });

        Homey.set('app_token', appTokenElement.value, function (err) {
            if (err) return Homey.alert(err);
        });

    });
}


function clearBusy() { 
    $('#busy').hide();
}

function showBusy(message, showTime) {
    clearError();
    clearSuccess();
    $('#busy span').html(message);
    $('#busy').show();
    if (showTime) $('#busy').delay(showTime).fadeOut();
}

function clearError() { 
    $('#error').hide();
}

function showError(message, showTime) {
    clearBusy();
    clearSuccess();
    $('#error span').html(message);
    $('#error').show();
    if (showTime) $('#error').delay(showTime).fadeOut();
}

function clearSuccess() { 
    $('#success').hide(); 
}

function showSuccess(message, showTime) {
    clearBusy();
    clearError();
    $('#success span').html(message);
    $('#success').show();
    if (showTime) $('#success').delay(showTime).fadeOut();
}
