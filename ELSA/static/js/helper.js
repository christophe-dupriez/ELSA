function generateQRCode() {
        jQuery('div#qrCodeCurrUrl').qrcode({
        text:window.location.href
    });
}

function generateBarcode(id, num) {
    JsBarcode(id, num, {format: 'EAN13'})
}
        
