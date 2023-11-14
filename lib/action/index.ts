import { client } from "@/lib/utils/configSanity";
import { groq } from "next-sanity";
import { Experience, PageInfo, Project, Skill, Social } from "../types/types";

export async function getPageInfo() {
  const query = groq`*[_type=="pageInfo"] {...,socials[]->} | order(_updatedAt desc)`;
  const data = await client.fetch(query, { next: { revalidate: 3600 } });
  return data as PageInfo[];
}
export async function getExperience() {
  const query = groq`*[_type=="experience"] {...,technologies[]-> } | order(_updatedAt desc)`;
  const data = await client.fetch(query, { next: { revalidate: 3600 } });
  return data as Experience[];
}
export async function getSkills() {
  const query = groq`*[_type=="skill"] | order(_updatedAt desc)`;
  const data = await client.fetch(query, { next: { revalidate: 3600 } });
  return data as Skill[];
}

export async function getProjects() {
  const query = groq`*[_type=="project"] {...,technologies[]-> }  | order(_updatedAt desc)`;
  const data = await client.fetch(query, { next: { revalidate: 3600 } });
  return data as Project[];
}

export async function getSocials() {
  const query = groq`*[_type=="social"] | order(_updatedAt desc)`;
  const data = await client.fetch(query, { next: { revalidate: 3600 } });
  return data as Social[];
}
