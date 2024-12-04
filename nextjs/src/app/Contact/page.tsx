"use client";

const apiURL = 'http://localhost:8081';


import axios from 'axios';
import {
  useState
} from "react"
import {
  toast
} from "sonner"
import {
  useForm,
  UseFormReset
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {
  Textarea
} from "@/components/ui/textarea"
import Link from 'next/link';
import { get } from 'http';
import Title from '../../components/Title/Title';

const formSchema = z.object({
  name: z.string().min(5).max(50),
  email: z.string(),
  subject: z.string().min(5).max(200),
  body: z.string().optional()
});





export default function MyForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer < typeof formSchema >) {
    try {
      console.log("trying request");
      axios.get(apiURL) // JSON.stringify(values))
        .then((res) => toast.success("Congrats! Email sent!"))
        .catch((err) => toast.error("Error sending to API... " + err))
      form.reset({ name: "", email: "", subject: "", body: "" });
  
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className='bg-stone-700'>
    <Title title='CONTACT'></Title>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4 rounded-xl shadow-xl mb-8 text-gray-300 bg-zinc-800 space-y-8 p-10 max-w-3xl mx-auto py-10 mt-20">
        <h1 className='text-center text-lg'>Fill the form to send an email or use my email: <Link className='underline' href='mailto:jason.r.bondarchuk@gmail.com'>jason.r.bondarchuk@gmail.com</Link></h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem  className='bg-zinc-700 p-3 rounded shadow-xl'>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className='shadow-xl bg-zinc-600 p-5 rounded'
                placeholder="Bill Nye (The Science Guy)"
                
                type="text"
                {...field} />
              </FormControl>
              <FormDescription>Name in the email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='bg-zinc-700 p-3 rounded shadow-xl'>
              <FormLabel>Employer Email Address</FormLabel>
              <FormControl>
                <Input  className='shadow-xl bg-zinc-600 p-5 rounded'
                placeholder="BillNye@floopydoop.com"
                
                type="email"
                {...field} />
              </FormControl>
              <FormDescription>Your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className='bg-zinc-700 p-3 rounded shadow-xl'>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input className='shadow-xl bg-zinc-600 p-5 rounded'
                placeholder="Let's build scalable software together!: [company name]"
                
                type="text"
                {...field} />
              </FormControl>
              <FormDescription>Email subject.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem className='bg-zinc-700 p-3 rounded shadow-xl'>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea className='shadow-xl bg-zinc-600 p-5 rounded resize-none'
                  placeholder="Hi, My name is [employer name] and I would like to schedule a time to discuss employment."
                  {...field}
                />
              </FormControl>
              <FormDescription>Email body.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='bg-zinc-600 rounded-xl'>Submit</Button>
      </form>
    </Form>
    <div className='h-3/6 bg-stone-700 p-20'></div>
    </div>
  )
}
