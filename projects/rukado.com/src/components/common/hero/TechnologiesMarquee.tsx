"use client";

import {
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
  useEffect,
  useMemo,
  useState,
} from "react";

import { Marquee } from "@gfazioli/mantine-marquee";
import { Box, Stack, Tooltip } from "@mantine/core";
import {
  type Icon,
  IconBrandAdonisJs,
  IconBrandAmd,
  IconBrandAndroid,
  IconBrandApple,
  IconBrandAws,
  IconBrandChrome,
  IconBrandCloudflare,
  IconBrandCypress,
  IconBrandDiscord,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandFirefox,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandGoogleAnalytics,
  IconBrandInertia,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandMailgun,
  IconBrandMantine,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandNotion,
  IconBrandNpm,
  IconBrandOpenai,
  IconBrandPhp,
  IconBrandPnpm,
  IconBrandPrisma,
  IconBrandRadixUi,
  IconBrandReact,
  IconBrandSass,
  IconBrandSentry,
  IconBrandStorybook,
  IconBrandTabler,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandUbuntu,
  IconBrandVercel,
  IconBrandVscode,
  IconBrandYoutube,
  type IconProps,
} from "@tabler/icons-react";

import { shuffleArray, splitIntoChunks } from "@/utils/helpers";

import "@gfazioli/mantine-marquee/styles.css";

type Technology = {
  name: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
};

const technologies = [
  // Backend
  { name: "Laravel", icon: IconBrandLaravel },
  { name: "PHP", icon: IconBrandPhp },
  { name: "Node.js", icon: IconBrandNodejs },
  { name: "Prisma", icon: IconBrandPrisma },
  { name: "Mailgun", icon: IconBrandMailgun },
  { name: "AdonisJS", icon: IconBrandAdonisJs },
  { name: "Inertia.js", icon: IconBrandInertia },

  // Frontend
  { name: "React", icon: IconBrandReact },
  { name: "Next.js", icon: IconBrandNextjs },
  { name: "Typescript", icon: IconBrandTypescript },
  { name: "Javascript", icon: IconBrandJavascript },
  { name: "Tailwind", icon: IconBrandTailwind },
  { name: "Mantine", icon: IconBrandMantine },
  { name: "Storybook", icon: IconBrandStorybook },
  { name: "Tabler Icons", icon: IconBrandTabler },
  { name: "Sass", icon: IconBrandSass },
  { name: "Radix UI", icon: IconBrandRadixUi },

  // Infraestrutura / DevOps / Deployment
  { name: "Docker", icon: IconBrandDocker },
  { name: "Cloudflare", icon: IconBrandCloudflare },
  { name: "Vercel", icon: IconBrandVercel },
  { name: "AWS", icon: IconBrandAws },

  // Banco de Dados
  { name: "MySQL", icon: IconBrandMysql },

  // Qualidade / Testes / Observabilidade
  { name: "Cypress", icon: IconBrandCypress },
  { name: "Sentry", icon: IconBrandSentry },
  { name: "Google Analytics", icon: IconBrandGoogleAnalytics },

  // Ferramentas de Desenvolvimento
  { name: "Visual Studio Code", icon: IconBrandVscode },
  { name: "Figma", icon: IconBrandFigma },
  { name: "npm", icon: IconBrandNpm },
  { name: "pnpm", icon: IconBrandPnpm },
  { name: "GitHub", icon: IconBrandGithub },
  { name: "Notion", icon: IconBrandNotion },

  // Sistemas Operacionais
  { name: "Ubuntu", icon: IconBrandUbuntu },
  { name: "Apple", icon: IconBrandApple },
  { name: "Android", icon: IconBrandAndroid },

  // Navegadores
  { name: "Google Chrome", icon: IconBrandChrome },
  { name: "Firefox", icon: IconBrandFirefox },

  // Comunicação / Social / Produtividade
  { name: "Google Gmail", icon: IconBrandGmail },
  { name: "Discord", icon: IconBrandDiscord },
  { name: "YouTube", icon: IconBrandYoutube },

  // Inteligência Artificial / APIs Externas
  { name: "OpenAI", icon: IconBrandOpenai },

  // Hardware / Outros
  { name: "AMD", icon: IconBrandAmd },
];

const BoxComponent = ({
  children,
  ...props
}: {
  children: ReactNode;
  [key: string]: any;
}) => {
  return (
    <Box {...props} p="md" bd="1px solid dimmed">
      {children}
    </Box>
  );
};

export function TechnologiesMarquee() {
  const [technologyChunks, setTechnologyChunks] = useState<Technology[][]>([]);

  useEffect(() => {
    const shuffledTechnologies = shuffleArray(technologies);
    setTechnologyChunks(splitIntoChunks(shuffledTechnologies, 3));
  }, []);

  return (
    <Stack opacity={0.4}>
      {technologyChunks.map((technologyChunk, technologyChunkIndex) => (
        <Marquee
          key={`chunk-${technologyChunkIndex}`}
          reverse={technologyChunkIndex % 2 === 1}
          fadeEdges
          repeat={3}
        >
          {technologyChunk.map((technology, technologyIndex) => (
            <Tooltip.Floating
              key={`tech-${technologyChunkIndex}-${technologyIndex}`}
              label={technology.name}
            >
              <BoxComponent
                key={`tech-${technologyChunkIndex}-${technologyIndex}`}
              >
                <technology.icon size={42} stroke={0.5} />
              </BoxComponent>
            </Tooltip.Floating>
          ))}
        </Marquee>
      ))}
    </Stack>
  );
}
