import { zodResolver } from '@hookform/resolvers/zod';
import { ComponentType } from 'react';
import { DefaultValues, FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

interface GenericFormProps<TFormValues extends FieldValues> {
    formFieldsSchema: ZodType<TFormValues, ZodTypeDef>; // Esquema Zod para validação
    initialValues: DefaultValues<TFormValues>; // Valores iniciais do formulário
    onSubmit: SubmitHandler<TFormValues>;
    FormScreen: ComponentType<{    // Componente para renderizar os campos do formulário
        methods: ReturnType<typeof useForm<TFormValues>>;
    }>;
    extraProps?: Record<string, unknown>;    // Props extras a serem passadas ao FormComponent
}

export const GenericForm = <TFormValues extends FieldValues>({
    formFieldsSchema,
    initialValues,
    onSubmit,
    FormScreen,
    extraProps,
}: GenericFormProps<TFormValues>) => {
    
    const methods = useForm<TFormValues>({
        defaultValues: initialValues, // Alinhado com DefaultValues<TFormValues>
        resolver: zodResolver(formFieldsSchema),
    });

    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormScreen methods={methods} {...extraProps} />
            </form>
        </FormProvider>
    );
};
