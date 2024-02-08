"use client";
import useDeviceType from "@/hooks/use-device-type";
import { DeviceTypeProps } from "@/types/server-page-props";
import React from "react";
import { TestimonialsMobile } from "./mobile";
import { TestimonialsDesktop } from "./desktop";

export interface TestimonialsProps extends DeviceTypeProps {
  name: string;
  content: string;
}

export const Testimonials: React.FC<TestimonialsProps> = (props) => {
  const { isMobile } = useDeviceType(props.deviceType);

  if (isMobile) {
    return <TestimonialsMobile {...props} />;
  }

  return <TestimonialsDesktop {...props} />;
};
