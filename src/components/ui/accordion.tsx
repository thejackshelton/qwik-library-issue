import { component$, Slot } from "@builder.io/qwik";

import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionHeaderProps,
} from "@qwik-ui/headless";

import { cn } from "~/lib/utils";

import { LuChevronDown } from "@qwikest/icons/lucide";

const MyAccordion = AccordionRoot;

const MyAccordionItem = component$<AccordionItemProps>((props) => {
  return (
    <AccordionItem class={cn("border-b", props.class)} {...props}>
      <Slot />
    </AccordionItem>
  );
});

// AccordionHeader will render as an h3 element by default, which can be problematic with markdown cn-prose styles
const MyAccordionHeader = component$<AccordionHeaderProps>((props) => {
  return (
    <AccordionHeader class={cn("flex", props.class)} {...props}>
      <Slot />
    </AccordionHeader>
  );
});

const MyAccordionTrigger = component$<AccordionTriggerProps>((props) => {
  return (
    <AccordionTrigger
      class={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        props.class,
      )}
      {...props}
    >
      <Slot />
      <LuChevronDown class="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionTrigger>
  );
});

const MyAccordionContent = component$<AccordionItemProps>((props) => {
  return (
    <AccordionContent
      class={cn(
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        props.class,
      )}
      {...props}
    >
      <div class="pb-4 pt-0">
        <Slot />
      </div>
    </AccordionContent>
  );
});

export {
  MyAccordion,
  MyAccordionItem,
  MyAccordionHeader,
  MyAccordionTrigger,
  MyAccordionContent,
  LuChevronDown,
};
