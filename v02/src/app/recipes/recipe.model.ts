export class Recipe {
  public _name: string;
  public _description: string;
  public _imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this._name = name;
    this._description = description;
    this._imagePath = imagePath;
  }
}
