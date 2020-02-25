export class Petition {
  // tslint:disable-next-line: variable-name
  // _id?: string;
  // name?: string;
  // weight?: number;
  // age?: number;
  public _id?: string;
  public title: string;
        public target: string;
        public description?: string;
        public username: string;
        public category: string;
        //public imgPath: string;
        public dateOfFiling: string;
        public numberOfPeopleSigned: number;
        public targetToBeAcheived: number;
        //public imageFile: string;
}
