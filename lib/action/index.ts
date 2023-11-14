import { client } from "@/lib/utils/configSanity";
import { groq } from "next-sanity";
import { Experience, PageInfo, Project, Skill, Social } from "../types/types";
import { Observable } from "rxjs";

// export function getPageInfo(): Observable<PageInfo[]> {
//   return new Observable(observer => {
//     // console.log('getPageInfo called');
//     const query = groq`*[_type=="pageInfo"] {...,socials[]->} | order(_updatedAt desc)`;
//     const subscription = client.listen(query).subscribe({
//       next: (update) => {
//         console.log('Page info update:', update);
//         if (update.result !== undefined) {
//           const pageInfo = update?.result.map((doc: any) => ({...doc}));
//           observer.next(pageInfo);
//         }
//       },
//       error: (err) => console.error('Error:', err),
//       complete: () => console.log('Completed')
//     });

//     console.log(client.listen(query))

//     return () => subscription.unsubscribe();
//   });
// }

// export function getExperience(): Observable<Experience[]> {
//   return new Observable(observer => {
//     const query = groq`*[_type=="experience"] {...,technologies[]->} | order(_updatedAt desc)`;
//     const subscription = client.listen(query).subscribe(update => {
//       if (update.result !== undefined) {
//         const experience = update.result.map((doc: any) => ({...doc}));
//         observer.next(experience);
//       }
//     });

//     return () => subscription.unsubscribe();
//   });
// }

// export function getSkills(): Observable<Skill[]> {
//   return new Observable(observer => {
//     const query = groq`*[_type=="skill"] | order(_updatedAt desc)`;
//     const subscription = client.listen(query).subscribe(update => {
//       if (update.result !== undefined) {
//         const skills = update.result.map((doc: any) => ({...doc}));
//         observer.next(skills);
//       }
//     });

//     return () => subscription.unsubscribe();
//   });
// }

// export function getProjects(): Observable<Project[]> {
//   return new Observable(observer => {
//     const query = groq`*[_type=="pageInfo"] {...,technologies[]->} | order(_updatedAt desc)`;
//     const subscription = client.listen(query).subscribe(update => {
//       if (update.result !== undefined) {
//         const projects = update.result.map((doc: any) => ({...doc}));
//         observer.next(projects);
//       }
//     });

//     return () => subscription.unsubscribe();
//   });
// }

// export function getSocials(): Observable<Social[]> {
//   return new Observable(observer => {
//     const query = groq`*[_type=="social"] | order(_updatedAt desc)`;
//     const subscription = client.listen(query).subscribe(update => {
//       if (update.result !== undefined) {
//         const socials = update.result.map((doc: any) => ({...doc}));
//         observer.next(socials);
//       }
//     });

//     return () => subscription.unsubscribe();
//   });
// }

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
  const query = groq`*[_type=="skill"] | order(_updatedAt asc)`;
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
