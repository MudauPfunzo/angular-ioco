import Services from 'src/data/data.json';
export default class Service {
  id: string;
  title: string;
  actionText: string;

  services = new Array<Service>();
  constructor(id: string = '', title: string = '', actionText: string = '') {
    this.id = id;
    this.title = title;
    this.actionText = actionText;
  }

  GetSampleServices(): Service[] {
    let serviceData = Services.Services as any[];
    for (let i = 0; i < serviceData.length; i++) {
      let item = serviceData[i];
      this.services.push(new Service(item.id, item.title, item.actionText));
    }
    return this.services;
  }
}
