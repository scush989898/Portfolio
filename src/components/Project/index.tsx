import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  git_url: string;
  homepage: string;
  url: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Response = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos`
      );

      const json = await data.json();
      const ar = [
        482572920, 509248137, 477460397, 519367834, 434942402, 510162796,
        522720361, 529920781, 529992087,
      ];
      let filteredRepositories = json.filter((el: any) => {
        if (!ar.includes(el.id)) {
          el.git_url = "https://" + el.git_url.slice(6);
          return el;
        }
        return;
      });

      setRepositories(filteredRepositories);

      if (!data.ok) {
        throw data;
      }

      return json;
    };
    fetchData();
  }, []);

  return (
    <>
      {repositories?.map((repository) => {
        return (
          <ProjectWrapper key={repository.id}>
            <Text
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey1"
            >
              {repository.name.replace(/[-_]/gi, " ")}
            </Text>

            {repository.language && (
              <ProjectStack>
                <Text type="body2">Linguagem Predominante:</Text>
                <ProjectStackTech>
                  <Text color="brand1" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              </ProjectStack>
            )}

            <ProjectLinks>
              <ProjectLink
                href={repository.git_url}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Github Code
              </ProjectLink>
              {repository.homepage !== null && repository.homepage !== "" && (
                <>
                  <ProjectLink
                    href={repository.homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaShare /> Aplicação
                  </ProjectLink>
                </>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        );
      })}
    </>
  );
};
