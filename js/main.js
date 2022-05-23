const en_submit = document.getElementById('en_submit_id');
const en_output = document.getElementById('en_output_id');
const en_input = document.getElementById('en_input_id');

const de_submit = document.getElementById('de_submit_id');
const de_output = document.getElementById('de_output_id');
const de_input = document.getElementById('de_input_id');

en_submit.addEventListener("click", () => {
    let input = en_input.value;
    if (!input) {
        en_output.value = '';
        alert('Please enter message to encrypt!');
        return;
    }

    let random_secret = Math.ceil(Math.random()*9);
    let encrypt = random_secret.toString();
    for (ch of input) {
        encrypt += String.fromCharCode(random_secret+ch.charCodeAt(0));
    }

    en_output.value = encrypt;
});


de_submit.addEventListener("click", () => {
    let input = de_input.value;
    if (!input) {
        de_output.value = '';
        alert('Please enter message to decrypt!');
        return;
    }

    let random_secret = input.slice(0,1);
    let en_message = input.slice(1);
    let decrypt = '';

    if (isNaN(random_secret)) {
        alert('Invalid message. Failed to decrypt!');
        return;
    }

    for (ch of en_message) {
        decrypt += String.fromCharCode(ch.charCodeAt(0)-random_secret);
    }
    de_output.value = decrypt;
});

function clickToCopy(elem) {
    elem.select();
    elem.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

en_output.addEventListener("click", () => {
    clickToCopy(en_output)
});

de_output.addEventListener("click", () => {
    clickToCopy(de_output)
});
