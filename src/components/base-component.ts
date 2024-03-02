namespace App{
    export abstract class Component<T extends HTMLElement, U extends HTMLElement>{
        templateElemetn: HTMLTemplateElement;
        hostElement: T;
        element: U;

        constructor(
            templatedId: string,
            hostElementId: string,
            insertAtStart: boolean,
            newElementId?: string 
        ) {
            this.templateElemetn = document.getElementById(
                templatedId
            )! as HTMLTemplateElement;
            this.hostElement = document.getElementById(hostElementId)! as T;

            const importedNode = document.importNode(
                this.templateElemetn.content,
                true
            )
            this.element = importedNode.firstElementChild as U;
            if (newElementId) {
                this.element.id = newElementId;
            }
            this.attach(insertAtStart)
        }

        private attach(insertAtBeginning: boolean) {
            this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element)
        }

        abstract configure(): void;
        abstract renderContent(): void;
    }
}