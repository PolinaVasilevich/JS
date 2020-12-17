class Task {
    constructor({
        label,
        container,
        color
    }) {
        this.label = label;
        this.container = container;
        this.color = color;
    }

    addStyles(block) {
        const styleBlock = block.style;
        styleBlock.width = '50%';
        styleBlock.marginTop = '30px';
        styleBlock.padding = '50px';
        styleBlock.border = '1px solid black';

        styleBlock.position = 'relative'

        styleBlock.background = this.color;
        return block;
    }

    render() {
        const blockTask = document.createElement('div');

        blockTask.id = Math.floor(Math.random() * 100);

        const textTask = this.label.value;
        const container = document.getElementById(this.container);

        blockTask.innerHTML = textTask;
        const blockTaskWithStyles = this.addStyles(blockTask);

        const deleteButton = document.createElement("p");

        deleteButton.innerHTML = "&times";

        deleteButton.style.fontSize = "40px";
        deleteButton.style.padding = '0';
        deleteButton.style.margin = '0';
        deleteButton.style.position = 'absolute'
        deleteButton.style.top = '0';
        deleteButton.style.right = '0';

        deleteButton.style.cursor = 'pointer';

        const onDeleteBlockTask = (e) => {
            e.target.parentNode.remove();
        }

        deleteButton.addEventListener('click', onDeleteBlockTask);

        blockTask.appendChild(deleteButton);

        container.appendChild(blockTaskWithStyles);

    }
}

const getRandomColor = () => {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}


const onAddNewElement = (e) => {
    e.preventDefault();
    const textTask = document.getElementById('textTask');
    textTask.style.borderColor = 'black';
    error.innerHTML = '';

    if (textTask.value.length) {
        const newTask = new Task({
            label: textTask,
            container: 'taskContainer',
            color: getRandomColor(),
        });

        newTask.render();

    } else {

        const error = document.getElementById('error');
        error.innerHTML = 'error!!!';
        textTask.style.borderColor = 'red';

    }

}

const addButton = document.getElementById('addButton');

addButton.addEventListener('click', onAddNewElement);



















// class Block {
//     constructor({
//         label,
//         eventType,
//         handler,
//         color,
//         container
//     }) {
//         this.label = label;
//         this.eventType = eventType;
//         this.handler = handler;
//         this.color = color;
//         this.container = container;
//     }

//     addStyles(block) {
//         block.style.backgroundColor = this.color;
//         return block;
//     }

//     render() {
//         const block = document.createElement("div");

//         block.id = Math.floor(Math.random() * 100);
//         block.innerHTML = this.label;
//         block.style.display = "inline-block";
//         block.style.padding = "10px";

//         const customBlock = this.addStyles(block);

//         const container = document.getElementById(this.container);
//         container.appendChild(block);



//         block.addEventListener(this.eventType, this.handler);
//     }
// }

// const onClickHandler = (e) => {
//     e.currentTarget.remove();
// };

// const getRandomColor = (arrColors) => {
//     const rand = Math.floor(Math.random() * arrColors.length);
//     return arrColors[rand];
// };

// const colors = ["red", "green", "yellow"];

// const onAddNewElement = () => {
//     const
//     const someBlock = new Block({
//         label: "some label",
//         eventType: "click",
//         handler: onClickHandler,
//         color: getRandomColor(colors),
//         container: "container",
//     });
//     someBlock.render();
// };

// const button = document.getElementById("add");
// button.addEventListener("click", onAddNewElement);