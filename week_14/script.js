document.addEventListener('DOMContentLoaded', function () {
    // Sayfa yüklendiğinde çalışacak kodlar buraya yazılır
    const greetingElement = document.getElementById('greeting');
    const changeButton = document.getElementById('changeButton');

    // Rengi değiştirme fonksiyonu
    function changeColor() {
        const randomColor = getRandomColor();
        greetingElement.style.color = randomColor;
    }

    // Rastgele renk oluşturma fonksiyonu
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Butona tıklandığında rengi değiştir
    changeButton.addEventListener('click', changeColor);
});




document.addEventListener("DOMContentLoaded",function()){
    const greetingElement = document.getElementById('baslik')
}