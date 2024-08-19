import {Injectable,} from '@angular/core';
import {CategoriesModal} from "../../modals/categories.modal";



@Injectable({
  providedIn: 'root'
})
export class CategoriesService{

  selectedCategoryArray:Array<{ categoryId: number; subCategoryId: number  }> =[];

  tempCategories: Array<CategoriesModal> = [
    {
      id: 1,
      img: "/icons/car.png",    //----------------this is home category img-----------------------
      section: "VEHICLE",
      subCats: [
        { subId: 101, subCatName: "Car" },
        { subId: 102, subCatName: "Van" },
        { subId: 103, subCatName: "Motorbike" },
        { subId: 104, subCatName: "Truck" },
        { subId: 105, subCatName: "Bicycle" }
      ]
    },
    {
      id: 2,
      img: "/icons/responsive.png",        //----------------this is home category img-----------------------
      section: "ElECTRONIC",
      subCats: [
        { subId: 201, subCatName: "Mobile Phones" },
        { subId: 202, subCatName: "Computers" },
        { subId: 203, subCatName: "Audio Equipments" },
        { subId: 204, subCatName: "Home Appliances" },
        { subId: 205, subCatName: "Televisions" }
      ]
    },
    {
      id: 3,
      img: "/icons/town.png",           //----------------this is home category img-----------------------
      section: "PROPERTY",
      subCats: [
        { subId: 301, subCatName: "Residential Properties" },
        { subId: 302, subCatName: "Land" },
        { subId: 303, subCatName: "Recreational Properties" },
        { subId: 304, subCatName: "Commercial Properties" },
        { subId: 305, subCatName: "Agricultural Properties" }
      ]
    },
    {
      id: 4,
      img: "/icons/education.png",            //----------------this is home category img-----------------------
      section: "EDUCATION",
      subCats: [
        { subId: 401, subCatName: "Online Education" },
        { subId: 402, subCatName: "Vocational and Technical Education" },
        { subId: 403, subCatName: "Arts Education" },
        { subId: 404, subCatName: "Homeschooling" },
        { subId: 405, subCatName: "Primary Education" }
      ]
    },
    {
      id: 5,
      img: "/icons/grocery.png",       //----------------this is home category img-----------------------
      section: "GROCERY",
      subCats: [
        { subId: 501, subCatName: "Bakery Items" },
        { subId: 502, subCatName: "Dairy Products" },
        { subId: 503, subCatName: "Pantry Staples" },
        { subId: 504, subCatName: "Personal Care" },
        { subId: 505, subCatName: "Household Essentials" }
      ]
    },
    {
      id: 6,
      img: "/icons/old.png",          //----------------this is home category img-----------------------
      section: "CAREGIVING",
      subCats: [
        { subId: 601, subCatName: "Elderly Care" },
        { subId: 602, subCatName: "Child Care" },
        { subId: 603, subCatName: "Disability Care" },
        { subId: 604, subCatName: "Mental Health Support" },
        { subId: 605, subCatName: "Specialized Care" }
      ]
    },
    {
      id: 7,
      img: "/icons/construction-worker.png",              //----------------this is home category img-----------------------
      section: "WORKERS",
      subCats: [
        { subId: 701, subCatName: "Substitute Teacher" },
        { subId: 702, subCatName: "Plumber" },
        { subId: 703, subCatName: "Tutor" },
        { subId: 704, subCatName: "School Counselor" },
        { subId: 705, subCatName: "Electrician" }
      ]
    },
    {
      id: 8,
      img: "/icons/delivery-truck.png",           //----------------this is home category img-----------------------
      section: "TRANSPORT",
      subCats: [
        { subId: 801, subCatName: "Logistics and Freight" },
        { subId: 802, subCatName: "Tourist and Leisure Transport" },
        { subId: 803, subCatName: "Emergency and Critical Transport" },
        { subId: 804, subCatName: "Sustainable Transport" },
        { subId: 805, subCatName: "Car Rentals" }
      ]
    },
    {
      id: 9,
      img: "/icons/makeup.png",           //----------------this is home category img-----------------------
      section: "BEAUTY CARE",
      subCats: [
        { subId: 901, subCatName: "Skin Care" },
        { subId: 902, subCatName: "Hair Care" },
        { subId: 903, subCatName: "Makeup" },
        { subId: 904, subCatName: "Fragrances" },
        { subId: 905, subCatName: "Men’s Grooming" }
      ]
    },
    {
      id: 10,
      img: "/icons/stock.png",                //----------------this is home category img-----------------------
      section: "FINANCIAL",
      subCats: [
        { subId: 1001, subCatName: "Investments" },
        { subId: 1002, subCatName: "Insurance" },
        { subId: 1003, subCatName: "Retirement Planning" },
        { subId: 1004, subCatName: "Business Finance" },
        { subId: 1005, subCatName: "Consumer Finance" }
      ]
    },
    {
      id: 11,
      img: "/icons/placeholder.png",                 //----------------this is home category img-----------------------
      section: "EMERGENCY",
      subCats: [
        { subId: 1101, subCatName: "Travel Emergencies" },
        { subId: 1102, subCatName: "Ambulance Services" },
        { subId: 1103, subCatName: "Home Security Systems" },
        { subId: 1104, subCatName: "Urgent Care" },
        { subId: 1105, subCatName: "Water Supply Issues" }
      ]
    },
    {
      id: 12,
      img: "/icons/more.png",             //----------------this is home category img-----------------------
      section: "OTHER",
      subCats: [
        { subId: 1201, subCatName: "Event Planning" },
        { subId: 1202, subCatName: "Environmental Services" },
        { subId: 1203, subCatName: "Creative Services" },
        { subId: 1204, subCatName: "Technology Services bn" },
        { subId: 1205, subCatName: "Home Services" }
      ]
    }
  ];

  constructor() {
  }

  getCatsMini(): Promise<any[]> {
    return new Promise((resolve) => {
      // Simulate an API call or data processing
      const miniCats = this.tempCategories.map(cat => ({
        code: cat.id,
        name: cat.section,
        category: cat.section,
        quantity: cat.subCats.length,
        inventoryStatus: 'INSTOCK', // example status
        rating: Math.floor(Math.random() * 5) + 1
      }));
      resolve(miniCats);
    });
  }

}
