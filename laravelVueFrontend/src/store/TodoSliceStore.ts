import { VuexModule,Module,Mutation,Action } from "vuex-class-modules";
import {AddTodoType, ITodo} from "@/store/models/TodoModel";
import {axiosInstance} from "@/axios";
import {Getter} from "vuex-class";


@Module({ generateMutationSetters: true })
export default class TodoSliceStore extends VuexModule {

    public todos: ITodo[] = [];

    get getAllTodos() : ITodo[] {
          return this.todos;
    }

    get getCreatedTodos() : ITodo[] {
        return this.todos.filter(t => t.status === 'created');
    }

    get getInprogressTodos() : ITodo[] {
        return this.todos.filter(todo => todo.status === 'inprogress');
    }

    get getDoneTodos() : ITodo[] {
        return this.todos.filter(todo => todo.status === 'done');
    }

    @Mutation
    public getTodosMutation(todos: ITodo[]) : void {
         this.todos = todos;
    }

    @Action
    public async getTodosAction() : Promise<void> {
        await axiosInstance.get("todos")
            .then((response) => {
            console.log(response.data);
            this.getTodosMutation(response.data);
        })
    }

    @Action
    public async addTodoAction(todo: AddTodoType ) : Promise<void> {
        await axiosInstance.post("todos",todo)
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                if(response.status === 200){
                    this.getTodosAction();
                }

            })
    }
}