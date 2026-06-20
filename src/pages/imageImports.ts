import js1 from '../assets/js/js1.jpg';
import jsw1 from '../assets/jsw/jsw1.jpg'; 
import ps1 from '../assets/ps/ps1.jpg'; 
import ps2 from '../assets/ps/ps2.jpg'; 
import ps3 from '../assets/ps/ps3.jpg'; 
import ps4 from '../assets/ps/ps4.jpg'; 
import ps5 from '../assets/ps/ps5.jpg'; 
import ps6 from '../assets/ps/ps6.jpg'; 
import jj1 from '../assets/jj/jj1.jpg'; 
import jj2 from '../assets/jj/jj2.jpg'; 
import jj3 from '../assets/jj/jj3.jpg'; 
import jj4 from '../assets/jj/jj4.jpg'; 
import js2 from '../assets/js/js2.jpg'; 
import js3 from '../assets/js/js3.jpg'; 
import js4 from '../assets/js/js4.jpg'; 
import js5 from '../assets/js/js5.jpg'; 
import js6 from '../assets/js/js6.jpg'; 
import js7 from '../assets/js/js7.jpg'; 
import js8 from '../assets/js/js8.jpg'; 
import js9 from '../assets/js/js9.jpg'; 
import js10 from '../assets/js/js10.jpg'; 
import jsw2 from '../assets/jsw/jsw2.jpg'; 
import jsw3 from '../assets/jsw/jsw3.jpg'; 

import jsw4 from '../assets/jsw/jsw4.jpg'; 
import jsw5 from '../assets/jsw/jsw5.jpg'; 
import jsw6 from '../assets/jsw/jsw6.jpg'; 
import jsw7 from '../assets/jsw/jsw7.jpg'; 
import pa1 from '../assets/pa/pa1.jpg'; 
import pa2 from '../assets/pa/pa2.jpg'; 
import pa3 from '../assets/pa/pa3.jpg'; 
import pa4 from '../assets/pa/pa4.jpg'; 
import pf1 from '../assets/pf/pf1.jpg';
import pf2 from '../assets/pf/pf2.jpg';
import pf3 from '../assets/pf/pf3.jpg';
import pf4 from '../assets/pf/pf4.jpg';
import pf5 from '../assets/pf/pf5.jpg';

import pk1 from '../assets/pk/pk1.jpg';
import pk2 from '../assets/pk/pk2.jpg';
import pk3 from '../assets/pk/pk3.jpg';

import sb1 from '../assets/sb/sb1.jpg';
import sb2 from '../assets/sb/sb2.jpg';



type ProjectCategory = 
  | 'All' 
  | 'Jendela Ornamen' 
  | 'Jendela Sliding' 
  | 'Jendela Jungkit' 
  | 'Pintu Lipat' 
  | 'Pintu Sliding'
  | 'Jendela Swing'
  | 'Pintu Alumunium'
  | 'Pintu Floorhing'
  | 'Partisi Kaca'
  | 'Shower Box'
  | 'Terbaru';

interface ProjectImage {
    id: number;
    src: string;
    alt: string;
    category: ProjectCategory[];
  }

  export const projectImages: ProjectImage[] = [
    { id: 1, src: js1, alt: "Jendela Sliding dengan frame hitam", category: ['Jendela Sliding'] },
    { id: 2, src: jsw1, alt: "Jendela Swing dengan pemandangan taman", category: ['Jendela Swing'] },
    { id: 3, src: ps1, alt: "Pintu Sliding 1", category: ['Pintu Sliding'] },
    { id: 4, src: ps2, alt: "Pintu Sliding 2", category: ['Pintu Sliding'] },
    { id: 5, src: ps3, alt: "Pintu Sliding 3", category: ['Pintu Sliding'] },
    { id: 6, src: ps4, alt: "Pintu Sliding 4", category: ['Pintu Sliding'] },
    { id: 7, src: ps5, alt: "Pintu Sliding 5", category: ['Pintu Sliding'] },
    { id: 8, src: ps6, alt: "Pintu Sliding 6", category: ['Pintu Sliding'] },
    { id: 9, src: jj1, alt: "Jendela Jungkit 1", category: ['Jendela Jungkit'] },
    { id: 10, src: jj2, alt: "Jendela Jungkit 2", category: ['Jendela Jungkit'] },
    { id: 11, src: jj3, alt: "Jendela Jungkit 3", category: ['Jendela Jungkit'] },
    { id: 12, src: jj4, alt: "Jendela Jungkit 4", category: ['Jendela Jungkit'] },
    { id: 13, src: js2, alt: "Jendela Sliding 2", category: ['Jendela Sliding'] },
    { id: 14, src: js3, alt: "Jendela Sliding 3", category: ['Jendela Sliding'] },
    { id: 15, src: js4, alt: "Jendela Sliding 4", category: ['Jendela Sliding'] },
    { id: 16, src: js5, alt: "Jendela Sliding 5", category: ['Jendela Sliding'] },
    { id: 17, src: js6, alt: "Jendela Sliding 6", category: ['Jendela Sliding'] },
    { id: 18, src: js7, alt: "Jendela Sliding 7", category: ['Jendela Sliding'] },
    { id: 19, src: js8, alt: "Jendela Sliding 8", category: ['Jendela Sliding'] },
    { id: 20, src: js9, alt: "Jendela Sliding 9", category: ['Jendela Sliding'] },
    { id: 21, src: js10, alt: "Jendela Sliding 10", category: ['Jendela Sliding'] },
    { id: 22, src: jsw2, alt: "Jendela Swing 2", category: ['Jendela Swing'] },
    { id: 23, src: jsw3, alt: "Jendela Swing 3", category: ['Jendela Swing'] },
    { id: 24, src: jsw4, alt: "Jendela Swing 4", category: ['Jendela Swing'] },
    { id: 25, src: jsw5, alt: "Jendela Swing 5", category: ['Jendela Swing'] },
    { id: 26, src: jsw6, alt: "Jendela Swing 6", category: ['Jendela Swing'] },
    { id: 27, src: jsw7, alt: "Jendela Swing 7", category: ['Jendela Swing'] },
    { id: 28, src: pa1, alt: "Pintu Alumunium 1", category: ['Pintu Alumunium'] },
    { id: 29, src: pa2, alt: "Pintu Alumunium 2", category: ['Pintu Alumunium'] },
    { id: 30, src: pa3, alt: "Pintu Alumunium 3", category: ['Pintu Alumunium'] },
    { id: 31, src: pa4, alt: "Pintu Alumunium 4", category: ['Pintu Alumunium'] },
    { id: 32, src: pf1, alt: "Pintu Floorhing 1", category: ['Pintu Floorhing'] },
    { id: 33, src: pf2, alt: "Pintu Floorhing 2", category: ['Pintu Floorhing'] },
    { id: 34, src: pf3, alt: "Pintu Floorhing 3", category: ['Pintu Floorhing'] },
    { id: 35, src: pf4, alt: "Pintu Floorhing 4", category: ['Pintu Floorhing'] },
    { id: 36, src: pf5, alt: "Pintu Floorhing 5", category: ['Pintu Floorhing'] },
    { id: 37, src: pk1, alt: "Partisi Kaca 1", category: ['Partisi Kaca'] },
    { id: 38, src: pk2, alt: "Partisi Kaca 2", category: ['Partisi Kaca'] },
    { id: 39, src: pk3, alt: "Partisi Kaca 3", category: ['Partisi Kaca'] },
    { id: 40, src: sb1, alt: "Shower Box 1", category: ['Shower Box'] },
    { id: 41, src: sb2, alt: "Shower Box 2", category: ['Shower Box'] },
  ];
  