import {Injectable, OnInit} from '@angular/core';
import {CategoriesService} from "../categories/categories.service";
import {PostModal} from "../../modals/Post.modal";



@Injectable({
  providedIn: 'root'
})
export class PostsService{

  constructor(private categoriesService:CategoriesService) {
  }

  posts: PostModal[] = [
    {
      id: 1,
      title: "Administrative Assistant Needed",
      location: "New York, NY",
      description: "We are seeking an Administrative Assistant to manage office tasks, schedule meetings, and support executives.",
      shortDescription: "Administrative Assistant role in NY office.",
      price: 50000,
      category: { subId: 105, subCatName: "Bicycle" },
      img: "/icons/car.png",              //----------------this is home category img-----------------------
      section: {
        id: 1,
        section: "Vehicle",
        subCats: [
          { subId: 101, subCatName: "Car" },
          { subId: 102, subCatName: "Van" },
          { subId: 103, subCatName: "Motorbike" },
          { subId: 104, subCatName: "Truck" },
          { subId: 105, subCatName: "Bicycle" }
        ],
        img: ''               //----------------this is home category img auto add-----------------------
      },
      contactNumbers: [1234567890, 9876543210]
    },
    {
      id: 2,
      title: "Certified Electronic",
      location: "Los Angeles, CA",
      description: "Looking for a Certified Nurse to join our healthcare team. Responsibilities include patient care and assisting doctors.",
      shortDescription: "Certified Nurse position available in LA.",
      price: 75000,
      category: { subId: 201, subCatName: "Mobile Phones" },
      img: "/icons/car.png",            //----------------this is home category img-----------------------
      section: {
        id: 2,
        section: "Electronic",
        subCats: [
          { subId: 201, subCatName: "Mobile Phones" },
          { subId: 202, subCatName: "Computers" },
          { subId: 203, subCatName: "Audio Equipments" },
          { subId: 204, subCatName: "Home Appliances" },
          { subId: 205, subCatName: "Televisions" }
        ],
        img: ''           //----------------this is home category img-----------------------
      },
      contactNumbers: [2345678901, 8765432109]
    },
    {
      id: 3,
      title: "Property Developer",
      location: "San Francisco, CA",
      description: "Seeking a skilled Software Developer to create and maintain software applications for our tech firm.",
      shortDescription: "Software Developer needed in SF.",
      price: 90000,
      category: { subId: 301, subCatName: "Residential Properties" },
      img: "/icons/car.png",               //----------------this is home category img-----------------------
      section: {
        id: 3,
        section: "Property",
        subCats: [
          { subId: 301, subCatName: "Residential Properties" },
          { subId: 302, subCatName: "Land" },
          { subId: 303, subCatName: "Recreational Properties" },
          { subId: 304, subCatName: "Commercial Properties" },
          { subId: 305, subCatName: "Agricultural Properties" }
        ],
        img: ''              //----------------this is home category img-----------------------
      },
      contactNumbers: [3456789012, 7654321098]
    },
    {
      id: 4,
      title: "Education Center Representative",
      location: "Chicago, IL",
      description: "We are hiring Call Center Representatives to handle customer inquiries and provide support.",
      shortDescription: "Call Center Representative job in Chicago.",
      price: 40000,
      category: { subId: 401, subCatName: "Online Education" },
      img: "/icons/car.png",                   //----------------this is home category img-----------------------
      section: {
        id: 4,
        section: "Education",
        subCats: [
          { subId: 401, subCatName: "Online Education" },
          { subId: 402, subCatName: "Vocational and Technical Education" },
          { subId: 403, subCatName: "Arts Education" },
          { subId: 404, subCatName: "Homeschooling" },
          { subId: 405, subCatName: "Primary Education" }
        ],
        img: ''                        //----------------this is home category img-----------------------
      },
      contactNumbers: [4567890123, 6543210987]
    },
    {
      id: 5,
      title: "Grocery Analyst",
      location: "Boston, MA",
      description: "Financial Analyst needed to analyze financial data, prepare reports, and assist in decision-making.",
      shortDescription: "Financial Analyst opportunity in Boston.",
      price: 80000,
      category: { subId: 502, subCatName: "Dairy Products" },
      img: "/icons/car.png",             //----------------this is home category img-----------------------
      section: {
        id: 5,
        section: "Grocery",
        subCats: [
          { subId: 501, subCatName: "Bakery Items" },
          { subId: 502, subCatName: "Dairy Products" },
          { subId: 503, subCatName: "Pantry Staples" },
          { subId: 504, subCatName: "Personal Care" },
          { subId: 505, subCatName: "Household Essentials" }
        ],
        img: ''              //----------------this is home category img-----------------------
      },
      contactNumbers: [5678901234, 5432109876]
    },
    {
      id: 6,
      title: "Caregiving Coordinator",
      location: "Austin, TX",
      description: "HR Coordinator needed to manage HR tasks, employee relations, and recruitment processes.",
      shortDescription: "HR Coordinator role in Austin.",
      price: 60000,
      category: { subId: 601, subCatName: "Elderly Care" },
      img: "/icons/car.png",                 //----------------this is home category img-----------------------
      section: {
        id: 6,
        section: "Caregiving",
        subCats: [
          { subId: 601, subCatName: "Elderly Care" },
          { subId: 602, subCatName: "Child Care" },
          { subId: 603, subCatName: "Disability Care" },
          { subId: 604, subCatName: "Mental Health Support" },
          { subId: 605, subCatName: "Specialized Care" }
        ],
        img: ''                    //----------------this is home category img-----------------------
      },
      contactNumbers: [6789012345, 4321098765]
    },
    {
      id: 7,
      title: "Substitute Teacher",
      location: "Seattle, WA",
      description: "Hiring Substitute Teachers for various subjects in our school district. Must be flexible and reliable.",
      shortDescription: "Substitute Teacher positions in Seattle.",
      price: 45000,
      category: { subId: 701, subCatName: "Substitute Teacher" },
      img: "/icons/car.png",                 //----------------this is home category img-----------------------
      section: {
        id: 7,
        section: "Workers",
        subCats: [
          { subId: 701, subCatName: "Substitute Teacher" },
          { subId: 702, subCatName: "Plumber" },
          { subId: 703, subCatName: "Tutor" },
          { subId: 704, subCatName: "School Counselor" },
          { subId: 705, subCatName: "Electrician" }
        ],
        img: ''            //----------------this is home category img-----------------------
      },
      contactNumbers: [7890123456, 3210987654]
    },
    {
      id: 8,
      title: "Transport Inspector",
      location: "Detroit, MI",
      description: "Seeking a Quality Control Inspector to ensure manufacturing standards are met in our production facility.",
      shortDescription: "Quality Control Inspector needed in Detroit.",
      price: 55000,
      category: { subId: 803, subCatName: "Emergency and Critical Transport" },
      img: "/icons/car.png",                  //----------------this is home category img-----------------------
      section: {
        id: 8,
        section: "Transport",
        subCats: [
          { subId: 801, subCatName: "Logistics and Freight" },
          { subId: 802, subCatName: "Tourist and Leisure Transport" },
          { subId: 803, subCatName: "Emergency and Critical Transport" },
          { subId: 804, subCatName: "Sustainable Transport" },
          { subId: 805, subCatName: "Car Rentals" }
        ],
        img: ''                  //----------------this is home category img-----------------------
      },
      contactNumbers: [8901234567, 2109876543]
    },
    {
      id: 9,
      title: "Beauty Care Staff",
      location: "Las Vegas, NV",
      description: "Hiring Event Staff to assist with organizing and managing events. Responsibilities include setup, coordination, and customer service.",
      shortDescription: "Event Staff required for events in Las Vegas.",
      price: 35000,
      category: { subId: 902, subCatName: "Hair Care" },
      img: "/icons/car.png",             //----------------this is home category img-----------------------
      section: {
        id: 9,
        section: "Beauty Care",
        subCats: [
          { subId: 901, subCatName: "Skin Care" },
          { subId: 902, subCatName: "Hair Care" },
          { subId: 903, subCatName: "Makeup" },
          { subId: 904, subCatName: "Fragrances" },
          { subId: 905, subCatName: "Men’s Grooming" }
        ],
        img: ''             //----------------this is home category img-----------------------
      },
      contactNumbers: [9012345678, 1098765432]
    },
    {
      id: 10,
      title: "Emergency Worker",
      location: "Phoenix, AZ",
      description: "Warehouse Workers needed to manage inventory, load/unload trucks, and maintain warehouse organization.",
      shortDescription: "Warehouse Worker positions in Phoenix.",
      price: 40000,
      category: { subId: 1101, subCatName: "Travel Emergencies" },
      img: "/icons/car.png",               //----------------this is home category img-----------------------
      section: {
        id: 11,
        section: "Emergency",
        subCats: [
          { subId: 1101, subCatName: "Travel Emergencies" },
          { subId: 1102, subCatName: "Ambulance Services" },
          { subId: 1103, subCatName: "Home Security Systems" },
          { subId: 1104, subCatName: "Urgent Care" },
          { subId: 1105, subCatName: "Water Supply Issues" }
        ],
        img: ''            //----------------this is home category img-----------------------
      },
      contactNumbers: [1234567890, 9876543210]
    }
  ];

  postsToDisplay:Array<PostModal>=[];

  addPostToShow(){
    const selectedCategories = this.categoriesService.selectedCategoryArray;

    if (selectedCategories.length !==0){
      this.postsToDisplay = this.posts.filter(post => {
        return selectedCategories.some(selected =>
          selected.categoryId === post.section.id && selected.subCategoryId=== post.category.subId
        );
      });
    }else{
      this.postsToDisplay = [...this.posts];
    }
  }

  checkSelectedCategories(): Array<PostModal> {
    if (this.categoriesService.selectedCategoryArray.length !== 0) {
      this.addPostToShow();  // Update posts to display based on selected categories
      // Add any additional logic here if needed
    } else {
      this.addPostToShow();  // Ensure all posts are displayed if no category is selected
    }

    return this.postsToDisplay
  }


}
