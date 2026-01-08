
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { Task, type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button, buttonVariants } from '@/components/ui/button';
import { toast } from 'sonner';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Index({ tasks }: { tasks: Task[] }) {

    const deleteTask = (id: number) => {
        if (confirm('Are you sure?')) {
            router.delete(`/tasks/${id}`);
            toast.success('Task deleted Successfully');
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Task List" />
            <div className='mt-8'>
                <Link className={buttonVariants({ variant: 'outline' })} href="/tasks/create">Create Task</Link>
                <Table className='mt-4'>
                    <TableHeader>
                        <TableHead>Task</TableHead>
                        <TableHead className='w-150px text-right'>Actions</TableHead>
                    </TableHeader>
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>{task.name}</TableCell>

                                <TableCell className="text-right">
                                    <Link className={buttonVariants({ variant: 'outline' })}
                                        href={`/tasks/${task.id}/edit`}>Edit</Link>
                                    <Button
                                        variant="destructive"
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </AppLayout >
    );
}
