const projectFormTemplate = document.getElementById(
  "project-input"
)! as HTMLTemplateElement;
const singleProjectTemplate = document.getElementById(
  "single-project"
)! as HTMLTemplateElement;

const app = document.getElementById("app") as HTMLDivElement;

function useRenderTemplate(
    templates: HTMLTemplateElement[],
    app: HTMLDivElement
  ): void {
    templates.forEach((template) => {
      app.appendChild(template.content.cloneNode(true));
    });
  }
  
useRenderTemplate([projectFormTemplate, singleProjectTemplate], app);
