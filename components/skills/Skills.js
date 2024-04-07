import Image from "next/image";
import React, { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import SkillChip from "./SkillChip";
import HtmlIcon from "../../assets/skills/html.svg";
import CssIcon from "../../assets/skills/css.svg";
import JscriptIcon from "../../assets/skills/jscript.svg";
import TscriptIcon from "../../assets/skills/tscript.svg";
import ReactIcon from "../../assets/skills/react.svg";
import NextIcon from "../../assets/skills/next.svg";
import ViteIcon from "../../assets/skills/vite.svg";
import VueIcon from "../../assets/skills/vue.svg";
import ReduxIcon from "../../assets/skills/redux.svg";
import SwrIcon from "../../assets/skills/swr.svg";
import TwindIcon from "../../assets/skills/twind.svg";
import MuiIcon from "../../assets/skills/mui.svg";
import StyledIcon from "../../assets/skills/styled.svg";
import FigmaIcon from "../../assets/skills/figma.svg";
import PythonIcon from "../../assets/skills/python.svg";
import DjangoIcon from "../../assets/skills/django.svg";
import PostgresIcon from "../../assets/skills/postgres.svg";
import DockerIcon from "../../assets/skills/docker.svg";
import NginxIcon from "../../assets/skills/nginx.svg";
import ZustandIcon from "../../assets/skills/zustand.svg";
import NodeIcon from "../../assets/skills/node.svg";
import MongoDBIcon from "../../assets/skills/mongodb.svg";
import ExpressIcon from "../../assets/skills/express.svg";
import GoIcon from "../../assets/skills/go.svg";
import DotnetIcon from "../../assets/skills/dotnet.svg";

const Skills = () => {
  const ref = useRef(null);
  const intersecting = useIntersectionObserver(ref, {});

  return (
    <div id="about" className="w-full min-h-[700px] relative p-4">
      <div className="h-5 w-full"></div>
      <div className="w-full h-full mx-auto max-w-lg sm:max-w-4xl">
        <header>
          <h1
            ref={ref}
            className={`font-rubik font-bold text-2xl text-primary text-center uppercase md:text-3xl lg:text-4xl`}
          >
            <span
              className={`opacity-0 ${
                intersecting && "inline-block animate-wobble"
              }`}
              style={{ animationDelay: "022ms" }}
            >
              M
            </span>
            <span
              className={`opacity-0 ${
                intersecting && "inline-block animate-wobble"
              }`}
              style={{ animationDelay: "122ms" }}
            >
              y
            </span>
            <span
              className={`opacity-0 ${
                intersecting && "inline-block animate-wobble"
              }`}
              style={{ animationDelay: "222ms" }}
            >
              &nbsp;
            </span>
            <span
              className={`opacity-0 ${
                intersecting && "inline-block animate-wobble"
              }`}
              style={{ animationDelay: "322ms" }}
            >
              S
            </span>
            <span
              className={`opacity-0 ${
                intersecting && "inline-block animate-wobble"
              }`}
              style={{ animationDelay: "422ms" }}
            >
              k
            </span>
            <span
              className={`opacity-0 ${
                intersecting && "inline-block animate-wobble"
              }`}
              style={{ animationDelay: "522ms" }}
            >
              i
            </span>
            <span
              className={`opacity-0 ${
                intersecting && "inline-block animate-wobble"
              }`}
              style={{ animationDelay: "622ms" }}
            >
              l
            </span>
            <span
              className={`opacity-0 ${
                intersecting && "inline-block animate-wobble"
              }`}
              style={{ animationDelay: "722ms" }}
            >
              l
            </span>
            <span
              className={`opacity-0 ${
                intersecting && "inline-block animate-wobble"
              }`}
              style={{ animationDelay: "822ms" }}
            >
              s
            </span>
          </h1>
        </header>
        <section className="font-ibm text-sm text-black tracking-wide mt-10 flex flex-col gap-3 sm:text-base md:flex-row md:items-center md:text-lg lg:text-xl">
          <div>
            <h2 className="text-primary text-lg font-bold font-rubik lg:text-2xl">
              Front-end
            </h2>
            <br />
            <p>
              I use HTML, CSS, and JavaScript to produce responsive websites and
              web apps that provide users the best and most appropriate
              experience suited to their device and browser.
            </p>
            <br />
            <p>
              I write standards based code that is semantic, accessible, easy to
              maintain, cross browser compatible and performant.{" "}
            </p>
            <br />
            <p>
              Although I&apos;m more of a developer than a typical designer, I
              can design small projects with ease. Figma is the tool that I like
              most when it comes to designing.{" "}
            </p>
          </div>

          <div className="mt-4 md:mt-0 md:max-w-sm">
            <div className="flex gap-3 flex-wrap items-start">
              <SkillChip title="HTML" Icon={HtmlIcon} />
              <SkillChip title="CSS" Icon={CssIcon} />
              <SkillChip title="JavaScript" Icon={JscriptIcon} />
              <SkillChip title="TypeScript" Icon={TscriptIcon} />
              <SkillChip title="React Js" Icon={ReactIcon} />
              <SkillChip title="Next Js" Icon={NextIcon} />
              <SkillChip title="Vite Js" Icon={ViteIcon} />
              <SkillChip title="Vue Js" Icon={VueIcon} />
              <SkillChip title="Redux" Icon={ReduxIcon} />
              <SkillChip title="SWR" Icon={SwrIcon} />
              <SkillChip title="Zustand" Icon={ZustandIcon} />
              <SkillChip title="Tailwind CSS" Icon={TwindIcon} />
              <SkillChip title="Material UI" Icon={MuiIcon} />
              <SkillChip title="Styled" Icon={StyledIcon} />
              <SkillChip title="Figma" Icon={FigmaIcon} />
            </div>
          </div>
        </section>
        <br />
        <section className="font-ibm text-sm text-black tracking-wide mt-8 flex flex-col gap-3 sm:text-base md:flex-row md:items-center md:text-lg lg:text-xl">
          <div>
            <h2 className="text-primary text-lg font-bold font-rubik lg:text-2xl">
              Back-end
            </h2>
            <br />
            <p>
              Professionally, I have good experience in working with Node.js,
              Dotnet and Django for developing highly performant server side.
              But, currently I like to use Go for making backends and been using it for my
              personal projects lately. 
            </p>
            <br />
            <p>
              I like to ensure the performance of front-end is smooth by
              developing a back-end that can efficiently manage data and give
              responses back swiftly.
            </p>
            <br />
            <p>
              I give priority towards security and data protection when it comes
              to back-end. I like to optimize the application for maximum speed
              and scalability.
            </p>
          </div>

          <div className="mt-4 md:mt-0 md:max-w-sm">
            <div className="flex gap-3 flex-wrap items-start">
              <SkillChip title="Go" Icon={GoIcon} />
              <SkillChip title="Node.js" Icon={NodeIcon} />
              <SkillChip title="Express.js" Icon={ExpressIcon} />
              <SkillChip title="Dotnet" Icon={DotnetIcon} />
              <SkillChip title="MongoDB" Icon={MongoDBIcon} />
              <SkillChip title="Python" Icon={PythonIcon} />
              <SkillChip title="Django" Icon={DjangoIcon} />
              <SkillChip title="Nginx" Icon={NginxIcon} />
              <SkillChip title="Docker" Icon={DockerIcon} />
              <SkillChip title="Postgres DB" Icon={PostgresIcon} />
            </div>
          </div>
        </section>
      </div>
      <div className="h-24 w-full"></div>
    </div>
  );
};

export default Skills;
