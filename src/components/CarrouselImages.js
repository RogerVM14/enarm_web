const importAll = (r) => {    
    let images = {}; 
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); }); 
    return images;
}
  
const images = importAll(require.context('../assets/imgs/puntajes', false, /\.(png|jpe?g|svg)$/)); 
const imagesUrls = Object.entries(images); 

export default imagesUrls;
