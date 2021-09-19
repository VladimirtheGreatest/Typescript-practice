import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then(response => {

    interface Todo {
        id: number;
        title: string;
        completed: boolean;
    }

    const todo = response.data as Todo;

    const ID = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    console.log(`
     The todo with ID: ${ID}
     Has a title of: ${title}
     Is it finished? ${finished}
    `)
});