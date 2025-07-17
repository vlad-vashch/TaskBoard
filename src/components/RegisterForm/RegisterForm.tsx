import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardFooter, CardContent, CardHeader, CardTitle, CardAction } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { CInput } from '@/components/shared/CInput/CInput.tsx';

const formSchema = z.object({
    name: z.string().min(3, { message: 'Min length 3 characters' }),
    email: z.string().min(1, { message: 'The field is required' }).or(z.email({ message: 'Invalid email address' })),
    password: z.string().nonempty({ message: 'The field is required' }).min(6, { message: 'Password must be at least 6 characters' }),
    repeatPassword: z.string().nonempty({ message: 'The field is required' }),
}).refine((data): boolean => {
    return data.password === data.repeatPassword;
}, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
});

type FormData = z.infer<typeof formSchema>;

export const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: 'onBlur'
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <h1>Create Account</h1>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CInput id="name" label="Name" error={ errors.name?.message } { ...register('name') } />
                <CInput id="email" label="Email" error={ errors.email?.message } { ...register('email') } />
                <CInput id="password" label="Password" error={ errors.password?.message } { ...register('password') } />
                <CInput id="repeatPassword" label="Repeat password" error={ errors.repeatPassword?.message } { ...register('repeatPassword') } />
            </CardContent>
            <CardFooter>
                <CardAction>
                    <Button onClick={handleSubmit(() => {})}>Button</Button>
                </CardAction>
            </CardFooter>
        </Card>
    );
};
