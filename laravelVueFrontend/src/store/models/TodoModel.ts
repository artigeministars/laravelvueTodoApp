export interface ITodo {
    [key:string]:unknown,
    id?: number,
    text: string,
    status: string,
    created_at?: string,
    updated_at?: string
}

export type TodoType = ITodo[];

export type AddTodoType = Omit<ITodo,'id' | "created_at" |"updated_at">;
