const slider = document.querySelector('#slider')
const canvas = document.querySelector('#canvas')
const url = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1574449122`

slider.addEventListener('input', handleInputSlider)
const images = [];

const context = canvas.getContext('2d')

function handleInputSlider() {
    loadImage(this.value)
}

function loadImage(index) {
    context.drawImage(images[index], 0, 0, canvas.width, canvas.height);
}

for (let i = 1; i <= 36; i++) {
    const number = i.toString().padStart(2, '00');
    const url = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img${number}.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1574449122`;
    const image = new Image();
    image.src = url;
    image.addEventListener('load', () => {
        images[i] = image;
        if (i === 1) {
            loadImage(i)
        }
    })
}

