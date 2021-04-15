import { VuexModule,Module,Mutation,Action } from "vuex-class-modules";
import {AddTodoType, ITodo} from "@/store/models/TodoModel";
import {axiosInstance} from "@/axios";

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


    @Mutation
    public addToInprogressMutation(todoP : Pick<ITodo,"id" | "status">) : void {
      //       this.todos = this.todos.map(t => this.changeStatusTodo(t,todoP.id!,todoP.status!));
        const todoMutation : ITodo[] = this.todos.map(t => {
           // .set(urlQuery.query, key, type.value)
            t.id == todoP.id ? t.status = todoP.status : t.status;
            return t;
        });
        this.todos = todoMutation;
    }

    @Mutation
    public addToCreatedMutation(todoP : Pick<ITodo,"id" | "status">) : void {
      //  this.todos = this.todos.map(t => this.changeStatusTodo(t,todoP.id!,todoP.status!));
        const todoMutation : ITodo[] = this.todos.map(t => {
            t.id == todoP.id ? t.status = todoP.status : t.status;
            return t;
        });
        this.todos = todoMutation;
    }

    @Mutation
    public addToDoneMutation(todoP : Pick<ITodo,"id" | "status">) : void {
      //  this.todos = this.todos.map(t => this.changeStatusTodo(t,todoP.id!,todoP.status!));
        const todoMutation : ITodo[] = this.todos.map(t => {
            t.id == todoP.id ? t.status = todoP.status : t.status;
            return t;
        });
        this.todos = todoMutation;
    }

    @Mutation
    public deleteTodoMutation(todoId: number) : void {
       this.todos = this.todos.filter(t => t.id !== todoId);
    }

    @Action
    public async getTodosAction() : Promise<void> {
        await axiosInstance.get("todos")
            .then((response) => {
            console.log(response.data);
            this.getTodosMutation(response.data);
        }).catch(error => { console.log(error)});
    }

    @Action
    public async addToInprogress(updateTodo: Pick<ITodo,'id' | 'text' | 'status'>) : Promise<void> {
        await axiosInstance.put("todos",updateTodo)
            .then((response) => {
                console.log(response.data);
               this.addToInprogressMutation({id : updateTodo.id!,status: 'inprogress'});
              /* other solution
                if(response.status === 200){
                    this.getTodosAction();
                }
               */
            }).catch(error => { console.log(error)});
    }

    @Action
    public async addToCreated(updateTodo: Pick<ITodo,'id' | 'text' | 'status'>) : Promise<void> {
        await axiosInstance.put("todos",updateTodo)
            .then((response) => {
                console.log(response.data);
                this.addToCreatedMutation({ id: updateTodo.id!,status: 'created'});
                /* other solution
                if(response.status === 200){
                    this.getTodosAction();
                }
                 */
            }).catch(error => { console.log(error)});
    }

    @Action
    public async addToDone(updateTodo: Pick<ITodo,'id' | 'text' | 'status'>) : Promise<void> {
        await axiosInstance.put("todos",updateTodo)
            .then((response) => {
                console.log(response.data);
                this.addToDoneMutation({ id: updateTodo.id!,status: 'done'});
               /* other solution
                if(response.status === 200){
                    this.getTodosAction();
                }
                */
            }).catch(error => { console.log(error)});
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

            }).catch(error => { console.log(error)});
    }

    @Action
    public async deleteTodoAction(todoId: number) : Promise<void> {
        await axiosInstance.delete(`todos?id=$todoId`)
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                // if(response.status === 200){
                this.deleteTodoMutation(todoId);
            // }
            }).catch(error => { console.log(error)});
    }
}