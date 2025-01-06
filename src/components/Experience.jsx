import Section from "./Section";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  return (
    <Section className="bg-n-3" id="experience">
      <div className="container py-10 lg:py-16 xl:py-20">
        <div className="relative">
          <h2 className="h2">Experience</h2>
        </div>
        <div></div>
      </div>
    </Section>
  );
};

export default Experience;
