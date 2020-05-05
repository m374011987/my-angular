export class MyComponent {
    title: string;
    constructor(title) {
        this.title = title + '-------------------';
    }

    speak() {
        console.log(this.title);
    }
}