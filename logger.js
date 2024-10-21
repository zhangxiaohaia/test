(function () {
    console.log(Date.now())

    function isMobile() {
        const userAgent = navigator.userAgent.toLowerCase();
        return /mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
    }

    if (isMobile()) {
        // console.log("当前是H5模式");
        if (window.location.host.at(0) !== 'm') {
            window.location.href = "https://m.2q.fit";
        }
    }
    // else {
    //     // console.log("当前是PC模式");
    //     if (window.location.host.at(0) === 'm') {
    //         window.location.href = "https://2q.fit";
    //     }
    // }
})();
