import { Component, OnInit } from '@angular/core';

const menWears = [
  {
    sales: false,
    atitle: "Подарочный сертификат",
    htitle: "Туфли летние",
    hsubtitle: "Reiker man",
    image: "13.jpg",
    mtitle: "Материал верха: натуральная кожа",
    msubtitle: "Ограниченная серия",
    url: "#",
    price: 148
  },
  {
    sales: false,
    atitle: "Подарочный сертификат",
    htitle: "Сумка мужская",
    hsubtitle: "Reiker man",
    image: "7.jpg",
    mtitle: "Материал верха: натуральная кожа",
    msubtitle: "Ограниченная серия",
    url: "#",
    price: 77
  },
  {
    sales: true,
    atitle: "Распродажа",
    htitle: "Куртка мужская",
    hsubtitle: "Reiker man",
    image: "8.jpg",
    mtitle: "Материал верха: натуральная кожа",
    msubtitle: "Ограниченная серия",
    url: "#",
    price: 241
  },
  {
    sales: false,
    atitle: "Подарочный сертификат",
    htitle: "Пальто мужское",
    hsubtitle: "Reiker man",
    image: "16.jpg",
    mtitle: "Материал верха: натуральная кожа",
    msubtitle: "Ограниченная серия",
    url: "#",
    price: 439.99
  }
]

const womenWears = [
  {
    sales: false,
    atitle: "Подарочный сертификат",
    htitle: "Пальто женское",
    hsubtitle: "Reiker man",
    image: "15.jpg",
    mtitle: "Материал верха: натуральная кожа",
    msubtitle: "Ограниченная серия",
    url: "#",
    price: 135
  },
  {
    sales: true,
    atitle: "Распродажа",
    htitle: "Сапоги женские",
    hsubtitle: "Reiker man",
    image: "5.jpg",
    mtitle: "Материал верха: натуральная кожа",
    msubtitle: "Ограниченная серия",
    url: "#",
    price: 477
  },
  {
    sales: true,
    atitle: "Распродажа",
    htitle: "Сумка женская",
    hsubtitle: "Reiker man",
    image: "6.jpg",
    mtitle: "Материал верха: натуральная кожа",
    msubtitle: "Ограниченная серия",
    url: "#",
    price: 89
  },
  {
    sales: false,
    atitle: "Подарочный сертификат",
    htitle: "Сумка женская",
    hsubtitle: "Reiker man",
    image: "14.jpg",
    mtitle: "Материал верха: натуральная кожа",
    msubtitle: "Ограниченная серия",
    url: "#",
    price: 129
  }
]

const accessories = [
  {
    sales: true,
    atitle: "Распродажа",
    htitle: "Сумка-рюкзак",
    hsubtitle: "Reiker man",
    image: "1.jpg",
    mtitle: "Материал верха: натуральная кожа",
    msubtitle: "Ограниченная серия",
    url: "#",
    price: 65
  },
  {
    sales: true,
    atitle: "Распродажа",
    htitle: "Зонт-мужской",
    hsubtitle: "Reiker man",
    image: "2.jpg",
    mtitle: "Материал верха: натуральная кожа",
    msubtitle: "Ограниченная серия",
    url: "#",
    price: 28.55
  },
  {
    sales: true,
    atitle: "Распродажа",
    htitle: "Браслет",
    hsubtitle: "Reiker man",
    image: "3.jpg",
    mtitle: "Материал верха: натуральная кожа",
    msubtitle: "Ограниченная серия",
    url: "#",
    price: 52
  },
  {
    sales: false,
    atitle: "Подарочный сертификат",
    htitle: "Подвеска",
    hsubtitle: "Reiker man",
    image: "4.jpg",
    mtitle: "Материал верха: натуральная кожа",
    msubtitle: "Ограниченная серия",
    url: "#",
    price: 27
  }
]

const showElement: any = []

for (let i=0; i<menWears.length; i++) 
  showElement.push(false); 

const showElement1: any = []

for (let i=0; i<womenWears.length; i++) 
  showElement.push(false);

const showElement2: any = []

for (let i=0; i<accessories.length; i++) 
  showElement.push(false);

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent implements OnInit {

  showElement = showElement;
  showElement1 = showElement1;
  showElement2 = showElement2;

  menWears = menWears;
  womenWears = womenWears;
  accessories = accessories;

  toggleElement(curelement: any) {

    showElement[curelement] = !showElement[curelement]

    // console.log("Переключение", showElement.myelement);
  }

  toggleElement1(curelement: any) {

    showElement1[curelement] = !showElement1[curelement]

    // console.log("Переключение", showElement.myelement);
  }

  toggleElement2(curelement: any) {

    showElement2[curelement] = !showElement2[curelement]

    // console.log("Переключение", showElement.myelement);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
