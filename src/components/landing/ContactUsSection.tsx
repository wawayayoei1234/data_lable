
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร" }),
  email: z.string().email({ message: "รูปแบบอีเมลไม่ถูกต้อง" }),
  message: z.string().min(10, { message: "ข้อความต้องมีอย่างน้อย 10 ตัวอักษร" }).max(500, { message: "ข้อความต้องไม่เกิน 500 ตัวอักษร" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactUsSection({ id }: { id?: string }) {
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => setMounted(true), []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log("Contact form submitted:", data);
    toast({
      title: "ส่งข้อความสำเร็จแล้ว",
      description: "ขอบคุณสำหรับการติดต่อ! เราจะตอบกลับคุณเร็วที่สุด",
    });
    form.reset();
  }

  if (!mounted) {
    return (
      <section id={id} className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="h-10 w-3/4 sm:w-1/2 bg-muted rounded mx-auto mb-4"></div> {/* Title Skeleton */}
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Form Skeleton */}
            <div className="bg-card p-6 sm:p-8 rounded-lg shadow-md animate-pulse">
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 w-1/4 bg-muted rounded"></div>
                    <div className="h-10 w-full bg-muted rounded"></div>
                  </div>
                ))}
                <div className="h-10 w-1/3 bg-muted rounded"></div>
              </div>
            </div>
            {/* Info Skeleton */}
            <div className="space-y-8">
              <div className="bg-card p-6 sm:p-8 rounded-lg shadow-md animate-pulse">
                <div className="h-6 w-1/3 bg-muted rounded mb-4"></div>
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 bg-muted rounded-full"></div>
                    <div className="h-4 w-3/4 bg-muted rounded"></div>
                  </div>
                ))}
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-lg shadow-md animate-pulse">
                <div className="h-6 w-1/3 bg-muted rounded mb-4"></div>
                <div className="w-full h-48 bg-muted rounded"></div>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-lg shadow-md animate-pulse">
                 <div className="h-6 w-1/4 bg-muted rounded mb-4"></div>
                 <div className="flex space-x-4">
                    <div className="w-8 h-8 bg-muted rounded-full"></div>
                    <div className="w-8 h-8 bg-muted rounded-full"></div>
                    <div className="w-8 h-8 bg-muted rounded-full"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-12 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary animate-fade-in-up-custom opacity-0" style={{ animationFillMode: 'forwards' }}>
            ติดต่อเรา
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-lg animate-fade-in-up-custom opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">ส่งข้อความถึงเรา</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ชื่อ</FormLabel>
                        <FormControl>
                          <Input placeholder="ชื่อของคุณ" {...field} />
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
                        <FormLabel>อีเมล</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="อีเมลของคุณ" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ข้อความ</FormLabel>
                        <FormControl>
                          <Textarea placeholder="พิมพ์ข้อความของคุณที่นี่..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                    ส่งข้อความ
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info, Map, Socials */}
          <div className="space-y-8">
            <Card className="shadow-lg animate-fade-in-up-custom opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">ข้อมูลติดต่อ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <span>โทร: 02-123-4567</span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <span>อีเมล: contact@techx.co.th</span>
                </p>
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                  <span>ที่อยู่: 123 อาคารเทคทาวเวอร์ ถนนสุขุมวิท แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพฯ 10110</span>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg animate-fade-in-up-custom opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">แผนที่บริษัท</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.550175910977!2d100.5581893153388!3d13.74585490094846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee10968c661%3A0x481e79605200507!2sSukhumvit%20Road%2C%20Bangkok!5e0!3m2!1sen!2sth!4v1627886237980!5m2!1sen!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Google Maps Location of TechX"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg animate-fade-in-up-custom opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">ติดตามเรา</CardTitle>
              </CardHeader>
              <CardContent className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook TechX" className="text-primary hover:text-accent transition-colors">
                  <Facebook className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn TechX" className="text-primary hover:text-accent transition-colors">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube TechX" className="text-primary hover:text-accent transition-colors">
                  <Youtube className="w-7 h-7" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

    