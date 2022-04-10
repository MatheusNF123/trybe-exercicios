/* let picker = new Pikaday({ field: document.getElementById('data') }); */
let textData = document.getElementById('textData')
let picker = new Pikaday({
    field: document.getElementById('data'),
    format: 'D MMM YYYY',
    onSelect: function () {
        textData.innerText = (this.getMoment().format(' Do - MMMM - YYYY'));
    }
});



