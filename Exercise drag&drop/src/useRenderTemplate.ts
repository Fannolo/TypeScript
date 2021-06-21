export default function useRenderTemplate(
  templates: HTMLTemplateElement[],
  app: HTMLDivElement
): void {
  templates.forEach((template) => {
    app.appendChild(template.content.cloneNode(true));
  });
}
