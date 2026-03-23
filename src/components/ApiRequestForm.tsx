'use client';

import { useState } from 'react';
import { Heading4 } from './ui/typography';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowRight, CheckCircle, AlertCircle, User, Mail, FileText } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useRecaptcha } from '@/hooks/useRecaptcha';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  reason: z
    .string()
    .min(10, { message: 'Reason must be at least 10 characters' })
    .max(1000, { message: 'Reason must be less than 1000 characters' }),
});

export default function ApiRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { getRecaptchaToken, isRecaptchaReady } = useRecaptcha();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      reason: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!isRecaptchaReady) {
      setErrorMessage('reCAPTCHA not ready. Please try again.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await getRecaptchaToken('api_request');
      if (!recaptchaToken) {
        throw new Error('Failed to verify reCAPTCHA');
      }

      // Submit form
      const response = await fetch('/api/api-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit API request');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit API request');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Heading4 color="navy-primary" className="mb-4">
        Request API Access
      </Heading4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-500 mb-2">Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Your name"
                      {...field}
                      disabled={isSubmitting}
                      className="bg-white border-gray-300 focus:ring-teal-primary focus:border-teal-primary py-6 pl-10 placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-500 mb-2">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Your email address"
                      {...field}
                      disabled={isSubmitting}
                      className="bg-white border-gray-300 focus:ring-teal-primary focus:border-teal-primary py-6 pl-10 placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-500 mb-2">Reason for API Request</FormLabel>
                <FormControl>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Textarea
                      placeholder="Please describe why you need API access and how you plan to use it..."
                      {...field}
                      rows={6}
                      disabled={isSubmitting}
                      className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-teal-primary resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              <CheckCircle className="h-5 w-5" />
              <span>
                Request submitted successfully! We&apos;ll send your API key to the email address
                provided within 24 hours.
              </span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
              <AlertCircle className="h-5 w-5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting || !isRecaptchaReady}
            className="w-full bg-teal-primary hover:bg-teal-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-6 rounded-lg transition-colors duration-200"
          >
            {isSubmitting ? 'Submitting...' : 'Request API Access'}
            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            This site is protected by reCAPTCHA and the Google{' '}
            <a
              href="https://policies.google.com/privacy"
              className="text-teal-primary hover:underline"
            >
              Privacy Policy
            </a>{' '}
            and{' '}
            <a
              href="https://policies.google.com/terms"
              className="text-teal-primary hover:underline"
            >
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </form>
      </Form>
    </div>
  );
}
