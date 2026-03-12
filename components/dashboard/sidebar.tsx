"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "../ui/sidebar";
import { usePathname } from "next/navigation";
import { OrganizationSwitcher, useClerk, UserButton } from "@clerk/nextjs";
import {
  AudioLines,
  Headphones,
  Home,
  LayoutGrid,
  LucideProps,
  Settings,
  Volume2,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import Image from "next/image";
import { TooltipProvider } from "../ui/tooltip";
import { Skeleton } from "../ui/skeleton";

interface MenuItem {
  title: string;
  url?: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  onClick?: () => void;
}

interface NavSectionProps {
  label?: string;
  items: MenuItem[];
  pathName: string;
}
const NavSection = ({ label, items, pathName }: NavSectionProps) => {
  return (
    <SidebarGroup>
      {label && (
        <SidebarGroupLabel className="text-[13px] uppercase text-muted-foreground">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <TooltipProvider>
                <SidebarMenuButton
                  asChild={!!item.url}
                  isActive={
                    item.url
                      ? item.url === "/"
                        ? pathName === "/"
                        : pathName.startsWith(item.url)
                      : false
                  }
                  onClick={item.onClick}
                  tooltip={item.title}
                >
                  {item.url ? (
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <>
                      <item.icon />
                      <span>{item.title}</span>
                    </>
                  )}
                </SidebarMenuButton>
              </TooltipProvider>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export const DashboardSidebar = () => {
  const pathName = usePathname();
  const clerk = useClerk();

  const mainMenuItems: MenuItem[] = [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Explore Voices",
      url: "/voices",
      icon: LayoutGrid,
    },
    {
      title: "Text to Speech",
      url: "/text-to-speech",
      icon: AudioLines,
    },
    {
      title: "Voice cloning",
      icon: Volume2,
    },
  ];

  const otherMenuItems: MenuItem[] = [
    {
      title: "Settings",
      onClick: () => clerk.openOrganizationProfile(),
      icon: Settings,
    },
    {
      title: "Help and Support",
      url: "mailto:business@codewithflynn.com",
      icon: Headphones,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-col gap-4 pt-4">
        <div className="flex items-center gap-2 pl-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:pl-0">
          <Link href={"/"} className="flex items-center gap-2 w-auto">
            <Image
              src={"/logo.svg"}
              alt="resonance"
              width={24}
              height={24}
              className="rounded-sm"
            />
            <span className="group-data-[collapsible=icon]:hidden font-semibold text-lg tracking-tighter text-foreground">
              Resonance
            </span>
          </Link>
          <SidebarTrigger className="ml-auto lg:hidden" />
        </div>
      </SidebarHeader>
      <SidebarMenu className="px-2 py-4">
        <SidebarMenuItem>
          <OrganizationSwitcher
            hidePersonal
            fallback={
              <Skeleton className="h-8.5 w-full group-data-[collapsible=icon]:size-8 rounded-md border bg-muted" />
            }
            appearance={{
              elements: {
                rootBox:
                  "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
                organizationSwitcherTrigger:
                  "w-full! justify-between! bg-muted! border! border-border! rounded-md! pl-1! pr-2! py-1! gap-3! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1!",
                organizationPreview: "gap-2!",
                organizationPreviewAvatarBox: "size-6! rounnded-sm!",
                organizationTextContainer:
                  "text-xs! text-tracking-tight! font-medium! text-foreground! group-data-[collapsible=icon]:hidden!",
                organizationPreviewMainIdentifier: "text-[13px]!",
                OrganizationSwitcherTrigerIcon:
                  "size-4! text-sidebar-foreground! group-data-[collapsible=icon]:hidden!",
              },
            }}
          />
        </SidebarMenuItem>
      </SidebarMenu>
      <div className="border-b border-dashed border-border" />
      <SidebarContent>
        <NavSection items={mainMenuItems} pathName={pathName} />
        <NavSection label="Others" items={otherMenuItems} pathName={pathName} />
      </SidebarContent>

      <SidebarFooter className="gap-3 py-3">
        {/* <UsageContainer /> */}
        <SidebarMenu>
          <SidebarMenuItem>
            <UserButton
              showName
              fallback={
                <Skeleton className="h-8.5 w-full group-data-[collapsible=icon]:size-8 rounded-md border border-border bg-muted" />
              }
              appearance={{
                elements: {
                  rootBox:
                    "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
                  userButtonTrigger:
                    "w-full! justify-between! bg-muted! border! border-border! rounded-md! pl-1! pr-2! py-1! shadow-[0px_1px_1.5px_0px_rgba(44,54,53,0.03)]! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! group-data-[collapsible=icon]:after:hidden! [--border:color-mix(in_srgb,transparent,var(--clerk-color-neutral,#000000)_15%)]!",
                  userButtonBox: "flex-row-reverse! gap-2!",
                  userButtonOuterIdentifier:
                    "text-[13px]! tracking-tight! font-medium! text-foreground! pl-0! group-data-[collapsible=icon]:hidden!",
                  userButtonAvatarBox: "size-6!",
                },
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
