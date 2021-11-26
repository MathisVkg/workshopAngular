export class todoItemModel {
  title: string;
  category: string;
  date: string;
  status: boolean;

  constructor(title: string, category: string, date: string, status: boolean) {
    this.title = title;
    this.category = category;
    this.date = date;
    this.status = status;
  }
}
