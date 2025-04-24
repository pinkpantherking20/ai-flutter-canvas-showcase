
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
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
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title text-center">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <p className="text-muted-foreground mb-8">
            I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Email</p>
                <p className="font-medium">contact@yourdomain.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Phone</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Github className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">GitHub</p>
                <p className="font-medium">github.com/yourusername</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">LinkedIn</p>
                <p className="font-medium">linkedin.com/in/yourusername</p>
              </div>
            </div>
          </div>
        </div>
        
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            
            <Form>
              <form className="space-y-6">
                <FormField
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
