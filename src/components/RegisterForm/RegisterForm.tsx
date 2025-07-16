import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardFooter, CardContent, CardHeader, CardTitle, CardAction } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';

const formSchema = z.object({
    email: z.email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type FormData = z.infer<typeof formSchema>;

export const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <h1>Create Account</h1>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <Input id="email" {...register('email')} />
                </form>
            </CardContent>
            <CardFooter>
                <CardAction>
                    <Button onClick={handleSubmit(() => {})}>Button</Button>
                </CardAction>
            </CardFooter>
        </Card>
    );
};
