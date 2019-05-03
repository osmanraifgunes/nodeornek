var dosyadinleyici = require('./eventsample');

dosyadinleyici.olayYayici.on('vaka', function (dosyaadi) {
    console.log(dosyaadi);
})