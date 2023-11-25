function getPilihanComputer() {
    const comp = Math.random()
    if( comp < 0.34 ) return 'gajah'
    if( comp >= 0.34 && comp < 0.67) return 'orang'
    return 'semut'
}

function getHasil( comp , player) {
   if( player == comp ) return 'SERI!'
if( player == 'gajah') return ( comp == 'orang') ? 'MENANG!' : 'KALAH!'
if( player === 'orang') return ( comp == 'gajah') ? 'KALAH!' : 'MENANG!'
if( player == 'semut' ) return ( comp == 'orang') ? 'KALAH!' : 'MENANG!'
}



function putar(){
    const imgComputer = document.querySelector('.img-computer')
    const  gambar = ['gajah', 'orang', 'semut']
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        imgComputer.setAttribute('src', gambar[i++] + '.png' )
        if( i == gambar.length ) i = 0
    },100)
}




const pilihan = document.querySelectorAll( 'li img')
let win = 1
let lose = 1
pilihan.forEach(function(pil) {
pil.addEventListener('click', function(){
   const pliihanComputer = getPilihanComputer()
   const pilihanPlayer = pil.className
   const hasil = getHasil( pliihanComputer , pilihanPlayer)

   putar()

   setTimeout(function(){
    const imgComputer = document.querySelector('.img-computer') 
    imgComputer.setAttribute('src',pliihanComputer + ".png" )
 
    const info = document.querySelector('.info')
    info.innerHTML = hasil
    const skorComp = document.querySelector('.skorComp')
    const skorPlayer = document.querySelector('.skorPlayer')
    if(hasil == 'MENANG!') {
        skorPlayer.innerHTML =  win++
    }
    if(hasil == 'KALAH!') {
        skorComp.innerHTML = lose++
    }
   }, 1000)
 
  })

})










// const pGajah = document.querySelector(".gajah")
// pGajah.addEventListener('click', function(){
//    const pliihanComputer = getPilihanComputer()
//    const pilihanPlayer = pGajah.className
//    const hasil = getHasil( pliihanComputer , pilihanPlayer)
// //    console.log("comp : " + pliihanComputer)
// //    console.log("player : " + pilihanPlayer)
// //    console.log("hasil : " + hasil)
//    const imgComputer = document.querySelector('.img-computer') 
//    imgComputer.setAttribute('src',pliihanComputer + ".png" )

//    const info = document.querySelector('.info')
//    info.innerHTML = hasil
// })




// const pOrang = document.querySelector(".orang")
// pOrang.addEventListener('click', function(){
//    const pliihanComputer = getPilihanComputer()
//    const pilihanPlayer = pOrang.className
//    const hasil = getHasil( pliihanComputer , pilihanPlayer)
// //    console.log("comp : " + pliihanComputer)
// //    console.log("player : " + pilihanPlayer)
// //    console.log("hasil : " + hasil)
//    const imgComputer = document.querySelector('.img-computer') 
//    imgComputer.setAttribute('src',pliihanComputer + ".png" )

//    const info = document.querySelector('.info')
//    info.innerHTML = hasil
// })



// const pSemut = document.querySelector(".semut")
// pSemut.addEventListener('click', function(){
//    const pliihanComputer = getPilihanComputer()
//    const pilihanPlayer = pSemut.className
//    const hasil = getHasil( pliihanComputer , pilihanPlayer)
// //    console.log("comp : " + pliihanComputer)
// //    console.log("player : " + pilihanPlayer)
// //    console.log("hasil : " + hasil)
//    const imgComputer = document.querySelector('.img-computer') 
//    imgComputer.setAttribute('src',pliihanComputer + ".png" )

//    const info = document.querySelector('.info')
//    info.innerHTML = hasil
// })