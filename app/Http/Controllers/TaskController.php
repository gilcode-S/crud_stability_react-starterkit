<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    //

    public function index()
    {
        return Inertia::render('Task/Index', [
            'tasks' => Task::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Task/Create');
    }

    public function store(StoreTaskRequest $request)
    {
        Task::create($request->validated());

        return redirect()->route(route: 'tasks.index');
    }

    public function edit(Task $task)
    {
        return Inertia::render('Task/Edit', [
            'task' => $task
        ]);
    }
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->update($request->validated());

        return redirect()->route(route: 'tasks.index');
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return redirect()->route(route: 'tasks.index');
    }
}
