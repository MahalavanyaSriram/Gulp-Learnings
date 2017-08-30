onmessage = function(e) {
    if (e.data.addThis != undefined) {
        //console.log(e.data);
        postMessage({ result: e.data.addThis.num1 + e.data.addThis.num2 });
    }
};