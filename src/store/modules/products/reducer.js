import { v4 as uuidv4 } from 'uuid';
const defaultState = [
  { id: uuidv4(), 
    name: "Ryzen 7 5700g ", 
    price: 2000.00, 
    category: "processor", 
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felectronicstore.com.pe%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2F9df78eab33525d08d6e5fb8d27136e95%2Fc%2Fp%2Fcpam4r73700x.jpg&f=1&nofb=1" },
  { id: uuidv4(), 
    name: "HyperX 8Gb DDR4", 
    price: 240.00, 
    category: "memory",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ixgamersuae.com%2Fwp-content%2Fuploads%2F2020%2F09%2F259-KINGSTON-HYPER-X-16GB-DDR4-3200-RAM.png&f=1&nofb=1"
  },
  { id: uuidv4(), 
    name: "RTX 3060 ti", 
    price: 4200.00, 
    category: "gpu",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mOdHZ7F8OjXbkUtutAgalwHaHa%26pid%3DApi&f=1"
  },
  { id: uuidv4(), 
    name: "SSD Kingston", 
    price: 450, 
    category: "memory",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cJWpk08Bt8JN0pACq7nZEAHaHa%26pid%3DApi&f=1"
  },
  { id: uuidv4(), 
    name: "I7 11700k", 
    price: 1500, 
    category: "processor",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yxcBgWuPgkd-uhuPC6UN-AHaHa%26pid%3DApi&f=1"
  },
  { id: uuidv4(), 
    name: "Water Cooler", 
    price: 340, 
    category: "accessories",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6HSHz-GeCGc-PPEKvTjFRwHaHa%26pid%3DApi&f=1" },
  { id: uuidv4(), 
    name: "Notebook Alienware", 
    price: 7749.99,
    category:"monitor",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.eP5mhFSxr3h7saUmyomIBgHaHa%26pid%3DApi&f=1"
  },
  { id: uuidv4(), 
    name: "Rx 550 4gb", 
    price: 800, 
    category: "gpu",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.K5Zz-oke8ZbPHzKTiqPuFwHaHa%26pid%3DApi&f=1"
  },
  { id: uuidv4(), 
    name: "Headset Zeus Redragon ", 
    price: 280, 
    category: "accessories",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4ni8fOszTcYkSjECsBzCUAHaHa%26pid%3DApi&f=1"
  },
  { id: uuidv4(), 
    name: "Monitor 29' Ultrawide", 
    price: 1499.99, 
    category: "monitor",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XtOJtCIgEns2A7hDGOq3XQHaHa%26pid%3DApi&f=1"
  },
  { id: uuidv4(), 
    name: "Odyssey 49' Curvo ", 
    price: 7599.90, 
    category: "monitor", 
    image: "https://images.kabum.com.br/produtos/fotos/129919/monitor-gamer-samsung-odyssey-led-49-curvo-dqhd-hdmi-displayport-usb-g-sync-freesync-240hz-1ms-altura-ajustavel-lc49g95tsslxzd_1603130064_gg.jpg" },
  { id: uuidv4(), 
    name: "HyperX 8Gb DDR4", 
    price: 270.90, 
    category: "memory",
    image: "https://images.kabum.com.br/produtos/fotos/194492/memoria-xpg-spectrix-d45g-rgb-8gb-3600mhz-ddr4-cl18-preta-ax4u36008g18i-cbkd45g_1632507273_gg.jpg"
  },
  { id: uuidv4(), 
    name: "GTX 1050 TI", 
    price: 1299.99, 
    category: "gpu",
    image: "https://images.kabum.com.br/produtos/fotos/288321/placa-de-video-pcyes-nvidia-geforce-gtx-1050-ti-4gb-gddr5-graffiti-series-pjgf1050ti4gb-107744_1640169338_gg.jpg"
  },
  { id: uuidv4(), 
    name: "HD Seagate", 
    price: 450, 
    category: "memory",
    image: "https://images.kabum.com.br/produtos/fotos/100916/100916_1552934430_index_gg.jpg"
  },
  { id: uuidv4(), 
    name: "Ryzen 7 5800X", 
    price: 2999.90, 
    category: "processor",
    image: "https://images.kabum.com.br/produtos/fotos/129459/processador-amd-ryzen-9-5900x-cache-70mb-3-7ghz-4-8ghz-max-turbo-am4-100-100000063wof_1602600708_gg.jpg"
  },
];

const productsReducer = ( state = defaultState, action ) => {

  // console.log("Products", action);

  return state;
};

export default productsReducer;