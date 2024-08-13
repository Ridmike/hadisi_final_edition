export interface CategoriesModal{
  id:number;
  img: string;                     //----------------this is home category img-----------------------
  section:string;
  subCats:Array<SubCategories>
}

export interface SubCategories{
  subId:number;
  subCatName:string;
}
