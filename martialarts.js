const c = document.getElementById("playground");
const ctx = c.getContext("2d");

const loadImage = (url, callback) => {
    const image = new Image();
    image.src = url;
    image.onload = () => callback(image)
}

const imagePath = (id, name) => `images/${name}/${id}.png`;

const imgFrames = {
    idle: [1, 2, 3, 4, 5, 6, 7, 8],
    kick: [1, 2, 3, 4, 5, 6, 7],
    punch: [1, 2, 3, 4, 5, 6, 7]
}

const loadAllImages = (callback) => {
    const imgObjs = { idle: [], kick: [], punch: [] };
    let imageLoaded = 0;
    imgFrames.idle.forEach(e => {
        e = imagePath(e, "idle")
        loadImage(e, (img) => {
            imgObjs.idle.push(img);
            imageLoaded += 1;
        })
    })

    imgFrames.kick.forEach(e => {
        e = imagePath(e, "kick")
        loadImage(e, (img) => {
            imgObjs.kick.push(img);
            imageLoaded += 1;
        })
    })

    imgFrames.punch.forEach(e => {
        e = imagePath(e, "punch")
        loadImage(e, (img) => {
            imgObjs.punch.push(img);
            imageLoaded += 1;
            if (imageLoaded === 22) {
                callback(imgObjs)
            }
        })
    })

}

let animationIntervalId;
let animationTimeoutId;

const animateImages = (images, name) => {
    clearTimeout(animationTimeoutId)
    images[name].forEach((e, i) => {
        animationTimeoutId = setTimeout(() => {
            ctx.clearRect(0, 0, 500, 500)
            ctx.drawImage(e, 0, 0, 500, 500)
        }, i * 100)
    })
}


const loadStartupAnimation = (images) => {
    animationIntervalId = setInterval(() => {
        animateImages(images, "idle");
    }, 800)
}

loadAllImages((images) => {

    loadStartupAnimation(images);
    document.addEventListener("keydown", (e) => {
        if (e.key == "ArrowUp") {
            clearInterval(animationIntervalId);
            clearTimeout(animationTimeoutId);
            animateImages(images, "kick");
            animationTimeoutId = setTimeout(() => {
                loadStartupAnimation(images);
            }, 500)
        } else if (e.key == "ArrowRight") {
            clearInterval(animationIntervalId);
            clearTimeout(animationTimeoutId);
            animateImages(images, "punch");
            animationTimeoutId = setTimeout(() => {
                loadStartupAnimation(images);
            }, 500)

        }
    })
})
