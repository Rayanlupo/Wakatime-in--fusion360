function getUserAgent(){
    return navigator.userAgent;
}

function uuidv4(){
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}
class WakaCore {
    lastHeartBeatSentAt = 0;
    shouldSendHeartBeat() {
        return Date.now() - this.lastHeartBeatSentAt >= 120000;
    }
    getProjectName(){
        let tabName = document.title;
        let fromHeading = document.getElementsByClassName("")
    }
}