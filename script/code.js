

let products =[
    { id:1,
     picture:"https://i.postimg.cc/hPxMpqMG/book2.jpg",
     name: "book",
     title : "Diary of a wimpy kid",
    cost : "R 180",
     },
     { id:2,
         picture:"https://i.postimg.cc/X7VccyZs/book6.jpg",
         name: "book",
         title : "How to survive your murder",
        cost : "R 140",
         },
         { id:3,
             picture:"https://i.postimg.cc/N0r1f6Vj/book7.jpg",
             name: "book",
             title : "Ted Bundy",
            cost : "R 300",
             },
             { id:4,
                 picture:"https://i.postimg.cc/dVmrpsz5/tom.jpg",
                 name: "book",
                 title : "Uncommon Type",
                cost : "R 80",
                 },
                 { id:5,
                     picture:"https://i.postimg.cc/hvfBmGqM/daisy.webp",
                     name: "book",
                     title : "Daisy Darker",
                    cost : "R 210",
                     },
 ]

 let divChrome = document.querySelector(".product");
 products.forEach((reader)=> {
     divChrome.innerHTML += `
     <div class= "col-4 cards-wrapper">
     <div class="images">
     <img style="width: 20rem; margin-top: 5rem; margin-left:3rem;" src="${reader.picture}" alt="${reader.name}" loading="lazy" class="img-fluid">
     <h2 style="margin-left: 3rem;">${reader.title}</h2>
     </div>
     <p style="margin-left:120px;">${reader.cost}</p>
     </div>
     `
 })