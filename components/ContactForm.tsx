
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/Button';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form data:', data);
        setSuccessMessage('Messaggio inviato con successo! Ti risponderemo presto.');
        reset();
        setIsSubmitting(false);

        // Clear success message after a few seconds
        setTimeout(() => setSuccessMessage(null), 5000);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            {successMessage && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm font-medium animate-fade-in">
                    {successMessage}
                </div>
            )}

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome e Cognome *
                </label>
                <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'} focus:ring-4 outline-none transition-all`}
                    placeholder="Il tuo nome"
                    {...register('name', { required: 'Il nome è obbligatorio' })}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'} focus:ring-4 outline-none transition-all`}
                        placeholder="latua@email.it"
                        {...register('email', {
                            required: 'L\'email è obbligatoria',
                            pattern: { value: /^\S+@\S+$/i, message: 'Email non valida' }
                        })}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefono
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        placeholder="+39 ..."
                        {...register('phone')}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Messaggio *
                </label>
                <textarea
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'} focus:ring-4 outline-none transition-all resize-none`}
                    placeholder="Come possiamo aiutarti?"
                    {...register('message', { required: 'Scrivi un messaggio per favore' })}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
            </div>

            <Button
                type="submit"
                className="w-full md:w-auto"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
            </Button>
        </form>
    );
}
