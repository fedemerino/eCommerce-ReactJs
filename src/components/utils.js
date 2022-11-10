export const getProducts = () => {
  let productos = [{
    "prod": "Procesador Intel Core i7 12700K 5.0 Ghz Alder Lake 1700 Sin Cooler",
    "categoria": "procesador",
    "img": "/I7 12700k.png",
    "precio": 75.239,
    "cantidad": 1,
    "specs": {
      "ram" : "DDR4,DDR5",
      "nucleos" : 12,
      "socket" : "LGA1700",
      "generacion" : "12°",
      "freq" : "5GHz"
    },
    "id": 1
  },
  {
    "prod": "Procesador Amd Ryzen 7 5800X 4.7 Ghz - AM4 Sin Cooler Sin Gpu",
    "categoria": "procesador",
    "img": "/Ryzen 7 5800X.png",
    "precio": 82.399,
    "cantidad": 1,
    "specs": {
      "ram" : "DDR4",
      "nucleos" : 8,
      "socket" : "AM4",
      "generacion" : "Ryzen 7",
      "freq" : "4.7GHz"
    },
    "id": 2
  },
  {
    "prod": "Placa De Video GeForce RTX 3070 8Gb Msi Ventus 3x Plus",
    "categoria": "placa",
    "img": "/Placa-De-Video-GeForce-RTX-3070-8Gb-Msi-Ventus-3x-Plus.png",
    "precio": 164.989,
    "cantidad": 1,
    "specs": {
      "fabricante" : "Nvidia",
      "ram" : "GDDR6",
      "pci" : "PCI-Express 4.0",
      "memoria" : "8 GB",
      "conectividad" : "DisplayPort, HDMI"
    },
    "id": 3
  },
  {
    "prod": "Placa De Video GeForce RTX 3060 12Gb Gigabyte Gaming Oc",
    "categoria": "placa",
    "img": "/Gigabyte RTX 3060 12Gb.png",
    "precio": 119.999,
    "cantidad": 1,
    "specs": {
      "fabricante" : "Nvidia",
      "ram" : "GDDR6",
      "pci" : "PCI-Express 4.0",
      "memoria" : "12 GB",
      "conectividad" : "2 DisplayPort 1.4a, 2 HDMI 2.1"
    },
    "id": 4
  }]

  let pedirProductos = new Promise((res) => {
    setTimeout(() => {
      res(productos)
    }, 2000)
  })

  return pedirProductos;

}