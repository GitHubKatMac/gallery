const image1 = "https://picsum.photos/300/150";
const image2 = "https://picsum.photos/300/150";
const image3 = "https://picsum.photos/300/150";
const images = [image1,image2,image3];
images.push(image1);
images.push(image2,image3);
for (const image of images) {
    console.log("To jest obrazek"+image)
    console.log('KM')
}
for (let i=0;i<images.legth;i++){
    const image = images [i];
    console.log("To jest obrazek"+image)
    console.log('KM')
}
