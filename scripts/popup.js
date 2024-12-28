chrome.storage.local.get().then((items) => {
    console.log(items.apiKey);
    let api_Key = document.getElementById("apiKey")
    api_key.value = items.apiKey
    api_Key.addEventListener("change", function(){
        chrome.storage.local.set({apiKey: api_key.value});
    });

    let enabled = document.getElementById("enabled");
    enabled.checked = items.enabled;
    enabled.addEventListener("change", function(){
        chrome.storage.local.set({enabled: enabled.checked});

    });
    let msg = document.getElementById("msg");
    msg.innerText = items.msg;
    let sendHeartbeat = document.getElementById("sendHeartBeat");
    sendHeartbeat.addEventListener("click", function(){
        chrome.runtime.sendMessage({msg: "forceSendHeartBeat"});
    });
});