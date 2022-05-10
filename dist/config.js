var data = {
    env: 'cloud1-0gyp62l90a77e65f',
    bgurl: '../dist/pages/start/1111.jpg',
}
function formTime(creatTime) {
    let date = new Date(creatTime),
          Y = date.getFullYear(),
          M = date.getMonth() + 1,
          D = date.getDate(),
          H = date.getHours(),
          m = date.getMinutes(),
          s = date.getSeconds();
    if (M < 10) {
          M = '0' + M;
    }
    if (D < 10) {
          D = '0' + D;
    }
    if (H < 10) {
          H = '0' + H;
    }
    if (m < 10) {
          m = '0' + m;
    }
    if (s < 10) {
          s = '0' + s;
    }
    return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    if (month < 10) {
          month = '0' + month;
    }
    if (day < 10) {
          day = '0' + day;
    }
    let date = year + "" + month + day;
    return date;
}
module.exports = {
    data: JSON.stringify(data),
    formTime: formTime,
    days: days
}