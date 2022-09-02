/********JS HİGHER ORDER FONKSİYONLAR********/


const callbakc = (number) => {

    return number ** 2

}



function cube(cb, number) {

    return cb(number) * number

}

console.log(cube(callbakc, 3))

/*-------geriye fonction döndürme-------------*/

const a = (number1) => {
    const b = (number2) => {
        const c = (number3) => {
            return number1 + number2 + number3

        }
        return c

    }
    return b
}

console.log(a(10)(20)(25))

/*---------------------------------------------*/

const numbers=[5,8,4,9,1,6,2,5]
 
let total=0;

numbers.forEach(number => {

    return total+=number
    
});

console.log(total)

/*-------------------Belirli aralıklarla çalışan setInterval-------------------------*/

 function sayHi(){
   console.log("Hi")
}
setInterval(sayHi,1000)

//ClearInterval


/*-----------------Bir kod bloğunu tek seferlik çalıştırma setTimeout-------------------*/


function sayHello(){
    console.log("Hello")
 }
 setInterval(sayHello,3000)

 /*----------------------*/
 
 const interval=setInterval(sayHello,1000)

 const timeout=setTimeout(()=>{
    clearInterval(interval)
    console.log("interval işlemi iptal edildi")
 },5000)

 setTimeout(()=>{
    clearTimeout(timeout)
    console.log("timeout işlemi iptal edildi interval devam")
 },3000)


 /*------------------Map methodu------------------------------*/

 const array1=[2,4,8,12,16]

 const ikikatı=array1.map((number)=>{

    return number+=number

 })
 console.log(ikikatı)

 /*----------------*/

 let users=[
    {
        id:1,
        name:"Gurbet",
        surName:"POLAT"
    },
    {
        id:2,
        name:"Emre",
        surName:"DEMİR"
    },
    {
        id:3,
        name:"Buse",
        surName:"Bekmezci"
    }
 ]

users=users.map((user)=>{
       if(user.id===3){
        user.name="Mustafa Şinasi Poyraz",
        user.surName="POLAT"
       }
       return user
 })

 console.log(users)

 /*------------------------*/

 let array2=["emre","buse","gurbet","poyraz"]

array2=array2.map((name)=>{

    return name.toLocaleUpperCase()

})
console.log(array2)


/******Filter Methodu********/

const number2=[1,2,3,4,5,6,7,8,9]

const number3=number2.filter((number)=>{

    return (number>3 && number<9)

})
console.log(number2)
console.log(number3)

/*--------------------------------*/ 

let users2=[
    {
        id:1,
        name:"Gurbet",
        surName:"POLAT",
        gender:2
    },
    {
        id:2,
        name:"Poyraz",
        surName:"POLAT",
        gender:1
    },
    {
        id:3,
        name:"Emre",
        surName:"DEMİR",
        gender:1
    },
    {
        id:4,
        name:"Buse",
        surName:"Bekmezci",
        gender:2
    }
 ]


 //erkekleri aldık 

 const man=users2.filter((user)=>{
       if(user.gender===1){
        return user
       }

       
 })

 console.log(man)

 //kadınları alalım

 const women=users2.filter((user)=>{
   if(user.gender===2){
    return user
   }
 })

 console.log(women)

 /******Reduce Methodu*****/

 const sayilar =[4,7,9,2,1,3]

console.log( sayilar.reduce((oldValue,currenValue)=>{
   
           return oldValue+currenValue

 },0))

 /*****every methodu****/
 let users3=[
    {
        id:1,
        name:"Gurbet",
        surName:"POLAT",
        gender:2
    },
    {
        id:2,
        name:"Poyraz",
        surName:"POLAT",
        gender:1
    },
    {
        id:3,
        name:"Emre",
        surName:"DEMİR",
        gender:1
    },
    {
        id:4,
        name:"Buse",
        surName:"Bekmezci",
        gender:2
    }
 ]

 
 console.log(users3.every((user)=>{
    return user.gender===1
 }))
/*--------Some elemanlardan bir tanesi için bile geçerliyse true döndrür----------*/
 console.log(users3.some((user)=>{
    return user.gender===1
 }))


/*-----Finde koşula uyan ilk elemanı bize döndürür------*/


const sayilar_=[2,5,7,9,6]

console.log(sayilar_.find((sayi)=>{
    return sayi>3
}))

/*----------------*/

//yukardaki objeyi kullanarak yapıcaz

const newUser_3=users3.find((user)=>{

    return user.id===3

})
console.log(newUser_3)

/*--Sort Methodu ----*/

//Büyükten küçüğe yada küçükten büyüğe elemanları sıralamak için kullanılır
//sort orjinal diziyi değiştirir

const ad=["Fadime","Serap","Seda"]

console.log(ad.sort())

//sort methodu sayıları küçükten büyüğe doğru sıralayamaz stringe çevirerek yaptığından dolayı

const numaralar=[2,7,10,1,5,100]

console.log(numaralar.sort())

//sayilari küçükten büyüğe ve büyükten küçüğe sıralamak içi şu fonnksiyonları kullanırız

const küküktenbüyüge=numaralar.sort((a,b)=>{
   
    return a-b;

})
console.log(küküktenbüyüge)


const büyüktenkücüge=numaralar.sort((a,b)=>{

    return b-a

})
console.log(büyüktenkücüge)

/*----------------------------------*/
const obje=[
    {
        id:3,
        name:"Meriş",
        surName:"Polat"
    },
    {
        id:1,
        name:"Reşat",
        surName:"Polat"
    },
    {
        id:2,
        name:"İbrahim",
        surName:"Polat"
    }
]

//id değerlerini küçükten büyüğe sıralayalım

obje.sort((a,b)=>{

  return a.id-b.id

})
 console.log(obje)

 //id değerlerini aynı şekilde büyükten küçüğe de sıralayabiliriz

obje.sort((a,b)=>{

    return b.id-a.id
  
  })
   console.log(obje)

   