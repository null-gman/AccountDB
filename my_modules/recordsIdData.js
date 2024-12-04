class IdsObject {
  constructor() {
    let IDarr = [];
    let Catarr = []


    this.IdAdd = (ID) => {
      IDarr.push(ID)
      
    }

    
    this.CatAdd = (Cat) => {
      Catarr.push(Cat)
      
    }

    this.remove = () => {
      IDarr = [];
      Catarr = [];
    }
    this.IdPrint = () => IDarr;
    this.CatPrint = () => Catarr;

    // Object.freeze(this)
    
  }
}

const RecordsIdCat = new IdsObject();

export default RecordsIdCat;