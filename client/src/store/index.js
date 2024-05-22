import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    fcolor: '#fff0de', 
    color:'#EFBD48', 
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './cake.png',
    fullDecal: './bgcoffe.png',
});

export default state;





//#EFBD48

//#b1454a