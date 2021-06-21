export default class ProjectTemplate {
  template: HTMLTemplateElement;
  app: HTMLDivElement;
  constructor(template: HTMLTemplateElement, app: HTMLDivElement) {
    this.template = template;
    this.app = app;
  }

  renderTemplate() {
    this.app.appendChild(this.template.content.cloneNode(true));
  }
}
