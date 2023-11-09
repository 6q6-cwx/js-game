const imageFromPath = function (src) {
    let img = new Image()
    img.src = './images/' + src
    return img
}

const allImg = {
    background: 'background.jpg',
    paddle: 'paddle.png',
    ball: 'ball.png',
    block1: 'block001.png',
    block2: 'block002.png',
  }