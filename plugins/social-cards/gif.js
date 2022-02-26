const path = require("path");
const jimp = require("jimp");
const { BitmapImage, GifFrame, GifUtil } = require('gifwrap');

async function init() {
  try {
    //const titleFont = await jimp.loadFont(`${__dirname}/fonts/OpenSans.fnt`);
    const titleFont = await jimp.loadFont(jimp.FONT_SANS_64_BLACK);
    const rawImage = await GifUtil.read("./templates/princiya.com.gif");
    const copiedAsJimp = GifUtil.shareAsJimp(jimp, rawImage.frames[0]);
    const frames = [];
    const { width, height } = rawImage.frames[0].bitmap;

    copiedAsJimp
      .print(
        titleFont,
        (width / 2) - (width / 4),
        (height / 2) - (height / 4),
        {
          text: "Thank you for listening!",
          alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
          alignmentY: jimp.VERTICAL_ALIGN_MIDDLE,
        },
        width / 2,
        height / 2
      );

    rawImage.frames.forEach(frame => frames.push(frame));

    // frames.push(rawImage.frames[0]);

    GifUtil.quantizeDekker(frames);

    return GifUtil.write("card.gif", frames).then(outputGif => {
      console.log("modified");
    });
  } catch (e) {
    console.log('Error', e);
  }
}

init();




