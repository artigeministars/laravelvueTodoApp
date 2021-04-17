import {RouteRecordRaw} from "vue-router";

export const routes : Array<RouteRecordRaw>= [

    { path: '/home',
      redirect: '/',
    },
    { path: '/created',
      name: 'created',
      component: () => import(/* webpackChunkName: "created" */ "@/components/todos/CreatedTodos.vue"),
      alias: ["/createdTodo","/first"]
    },
    { path: '/done' ,
      name: 'done',
      component: () => import(/* webpackChunkName: "done" */ "@/components/todos/DoneTodos.vue"),
      alias: ["/doneTodo","/third"]
    },
    { path: '/inprogress' ,
      name: 'inprogress',
      component: () => import(/* webpackChunkName: "inprogress" */ "@/components/todos/InprogressTodos.vue"),
      alias: ["/inprogressTodo","/second"]
    },
    {
        path: '/todos',
        components: {
            default: () => import(/* webpackChunkName: "created" */ "@/components/todos/CreatedTodos.vue"),
            inprogress: () => import(/* webpackChunkName: "done" */ "@/components/todos/DoneTodos.vue"),
            done: () => import(/* webpackChunkName: "inprogress" */ "@/components/todos/InprogressTodos.vue")
        },
        alias: ["/allTodos","/all"]
    },
     { path: '/:todoCatch([^/].*)',
      name: 'notfound',
      component: () => import(/* webpackChunkName: "notfoundcomponent" */ "@/components/NotFoundComponent.vue")
     }
];
