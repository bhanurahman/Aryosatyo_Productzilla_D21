const prompt = require('prompt')()
const { store, getAll } = require ('./database')

const idBarang = prompt('ID BARANG :')
const namaBarang = prompt('Nama BARANG :')
const hargaBarang = prompt('Harga BARANG :')
const kuantitasBarang = prompt('Kuantitas BARANG :')

const barang = {
    idBarang,
    namaBarang,
    hargaBarang,
    kuantitasBarang,
}
store('barang', barang)
const data = getAll('barang')
console.log(data);