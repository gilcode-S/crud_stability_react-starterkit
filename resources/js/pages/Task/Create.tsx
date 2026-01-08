
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { Task, type BreadcrumbItem } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FormEventHandler, useRef } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';
import { toast } from 'sonner';
import InputError from '@/components/input-error';

type CreateTaskForm = {
    name?: string;
};

export default function Create() {

    const taskName = useRef<HTMLInputElement>(null);

    const { data, setData, errors, post, reset, processing } = useForm<Required<CreateTaskForm>>({
        name: "",
    })

    const createTask: FormEventHandler = (e) => {
        e.preventDefault();

        post('', {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (error) => {
                if (error.name) {
                    reset('name');
                    taskName.current?.focus();
                }
            },
        });
    }
    return (
        <AppLayout>
            <Head title="Create List" />
            <div className='mt-8 h-full flex-1 flex-col gap-4 rounded-xl p-4'>
                <form onSubmit={createTask} className='space-y-6'>
                    <div className='grid gap-2'>
                        <Label>Task Name *</Label>

                        <Input id='name' ref={taskName} value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className='mt-1 block w-full' />
                        <InputError message={errors.name}></InputError>
                    </div>

                    <div className='flex items-center gap-4'>
                        <Button disabled={processing}>Create Task</Button>
                    </div>
                </form>
            </div>
        </AppLayout >
    );
}
