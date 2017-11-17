function userScanLocalStorage(id, v) {
    var historyStr = JSON.stringify(v);


    function is_exist(data) {
        var getHistoryStr = localStorage.getItem("historyScan_" + localStorage.getItem("funId"));
        if (!getHistoryStr) return true;

        getHistoryStr = getHistoryStr.split("!@#|");
        for (var i = 0; i < getHistoryStr.length; i++) {
            if (getHistoryStr[i] === data) {
                return false;
            }
        }
        return true;
    }


    if (!is_exist(historyStr)) { // 已存在
        return false;
    }

    var funid = id;
    if (funid == null) {
        funid = '';
        var historyScanArry = localStorage.getItem('historyScan_');
        if (historyScanArry == undefined) {
            var historyScanArry = [historyStr];
            localStorage.setItem('historyScan_' + funid, historyScanArry);
        } else {
            localStorage.setItem('historyScan_' + funid, historyStr + '!@#|' + historyScanArry);
        }
    } else {
        var historyScanArry = localStorage.getItem('historyScan_' + funid);
        if (historyScanArry == undefined) {
            var historyScanArry = [historyStr];
            localStorage.setItem('historyScan_' + funid, historyScanArry);
        } else {
            localStorage.setItem('historyScan_' + funid, historyStr + '!@#|' + historyScanArry);
        }
    }
}

function getUserHistoryScan(id) {
    var historyArr = [];
    var funid = id;
    if (funid == null) {
        var funid = '';
        historyArr[0] = 'Không có lịch sử duyệt web！';
    }
    var historyStr = localStorage.getItem("historyScan_" + funid);
    if (historyStr == null) {
        return null;
    }
    historyArr = historyStr.split("!@#|");


    return historyArr;
}