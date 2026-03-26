function showLove() {
    const text = document.getElementById("text");

    const messages = [
        "Aku sayang kamu ❤️",
        "Kamu itu spesial banget buat aku 🥺",
        "Jangan tinggalin aku ya...",
        "Aku cuma mau kamu 💕",
        "Kamu adalah alasan aku senyum 😊"
    ];

    const random = Math.floor(Math.random() * messages.length);
    text.innerHTML = messages[random];
}