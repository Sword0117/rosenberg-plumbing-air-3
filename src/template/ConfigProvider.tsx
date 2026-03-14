"use client";
import { createContext, useContext, ReactNode } from "react";
import { TemplateConfig } from "./types";
import defaultConfig from "@/template.config";

interface ConfigContextValue {
  config: TemplateConfig;
  basePath: string;
}

const ConfigContext = createContext<ConfigContextValue>({
  config: defaultConfig,
  basePath: "/template",
});

export function ConfigProvider({ config, basePath = "/template", children }: { config: TemplateConfig; basePath?: string; children: ReactNode }) {
  return <ConfigContext.Provider value={{ config, basePath }}>{children}</ConfigContext.Provider>;
}

export function useConfig(): TemplateConfig {
  return useContext(ConfigContext).config;
}

export function useBasePath(): string {
  return useContext(ConfigContext).basePath;
}
