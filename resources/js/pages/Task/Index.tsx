import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Task List" />
            <div>
                <Table className='mt-4'>
                    <TableHeader>
                        <TableHead>Task</TableHead>
                        <TableHead className='w-150px text-right'>Actions</TableHead>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>First Task</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Secpnd  Task</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
