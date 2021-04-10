<?php

namespace Modules\Todos\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Todos\Entities\Todos;

class TodosCrudController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return view('todos::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('todos::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('todos::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('todos::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     * @param Request $reques
     * @return
     */

    public function getTodos(Request $request)
    {
        // return Todos::all();
        return Todos::latest()->get();
    }
    public  function addTodo(Request $request){
        $todo = new Todos();
        $todo->text = $request->get("text");
        $todo->status = $request->get("status");
        $todo->save();

        return response()->json([
        'message' => "todo successfully added"
        ]);
        /*
        return response("todo successfully added", 201)->header('Content-Type', 'text/html');
        */
        }

        public function updateTodo(Request $request){
        $todo = Todos::find($request->get('id'));
        $todo->text= $request->get('text');
        $todo->status = $request->get("status");
        $todo->update();

        return response()->json([
           "message" => "todo updated successfully"
        ]);
        }

    public function deleteTodo(Request $request){
        $todo = Todos::find($request->get('id'));
        $todo->delete();

        return response()->json([
            "message" => "todo successfully deleted"
        ]);
    }
}
