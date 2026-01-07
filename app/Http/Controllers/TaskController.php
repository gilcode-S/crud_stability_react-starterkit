<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    //

    public function index()
    {
        return Inertia::render('Task/Index', [
            'task' => Task::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Task/Create');
    }

    public function store(StoreTaskRequest $request)
    {
        Task::create($request->validated());

        return redirect()->route(route: 'task.index');
    }

    public function edit(Task $task)
    {
        return Inertia::render('Task/Edit', [
            'task' => $task
        ]);
    }
    public function update(UpateTaskRequest $request, Task $task) 
    {
        $task->update($request->validated());

        return redirect()->route(route: 'task.index');
    }

    public function destroy(Task $task) 
    {
        $task->delete();
        return redirect()->route(route: 'task.index');
    }
}
